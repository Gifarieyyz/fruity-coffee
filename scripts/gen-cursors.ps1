# Generates retro-cursor.png and retro-pointer.png (32x32 RGBA PNGs)
Add-Type -AssemblyName System.IO.Compression

function New-Png([byte[]]$rgba, [int]$w, [int]$h) {
    # CRC32
    $crcTable = New-Object 'uint32[]' 256
    for ($n = 0; $n -lt 256; $n++) {
        $c = [uint32]$n
        for ($k = 0; $k -lt 8; $k++) {
            if ($c -band 1) { $c = 0xEDB88320 -bxor ($c -shr 1) } else { $c = $c -shr 1 }
        }
        $crcTable[$n] = $c
    }
    function Get-Crc([byte[]]$data) {
        $c = [uint32]4294967295
        foreach ($b in $data) { $c = $crcTable[($c -bxor $b) -band 0xFF] -bxor ($c -shr 8) }
        return ($c -bxor [uint32]4294967295)
    }
    function New-Chunk([string]$type, [byte[]]$data) {
        $ms = New-Object System.IO.MemoryStream
        $bw = New-Object System.IO.BinaryWriter($ms)
        $lenBytes = [BitConverter]::GetBytes([uint32]$data.Length); [Array]::Reverse($lenBytes)
        $bw.Write($lenBytes)
        $typeBytes = [System.Text.Encoding]::ASCII.GetBytes($type)
        $bw.Write($typeBytes)
        $bw.Write($data)
        $crcInput = New-Object byte[] ($typeBytes.Length + $data.Length)
        [Array]::Copy($typeBytes, 0, $crcInput, 0, $typeBytes.Length)
        [Array]::Copy($data, 0, $crcInput, $typeBytes.Length, $data.Length)
        $crcBytes = [BitConverter]::GetBytes((Get-Crc $crcInput)); [Array]::Reverse($crcBytes)
        $bw.Write($crcBytes)
        $bw.Flush()
        return $ms.ToArray()
    }

    # IHDR
    $ihdr = New-Object byte[] 13
    $wBytes = [BitConverter]::GetBytes([uint32]$w); [Array]::Reverse($wBytes)
    $hBytes = [BitConverter]::GetBytes([uint32]$h); [Array]::Reverse($hBytes)
    [Array]::Copy($wBytes, 0, $ihdr, 0, 4)
    [Array]::Copy($hBytes, 0, $ihdr, 4, 4)
    $ihdr[8] = 8; $ihdr[9] = 6 # 8-bit RGBA

    # raw scanlines (filter 0 per row)
    $raw = New-Object byte[] ($h * (1 + $w * 4))
    for ($y = 0; $y -lt $h; $y++) {
        $raw[$y * (1 + $w * 4)] = 0
        [Array]::Copy($rgba, $y * $w * 4, $raw, $y * (1 + $w * 4) + 1, $w * 4)
    }

    # zlib (stored deflate blocks)
    $zms = New-Object System.IO.MemoryStream
    $zms.WriteByte(0x78); $zms.WriteByte(0x01)
    $off = 0
    while ($off -lt $raw.Length) {
        $n = [Math]::Min(65535, $raw.Length - $off)
        $last = 0; if ($off + $n -ge $raw.Length) { $last = 1 }
        $zms.WriteByte([byte]$last)
        $zms.WriteByte([byte]($n -band 0xFF))
        $zms.WriteByte([byte](($n -shr 8) -band 0xFF))
        $nn = (-bnot $n) -band 0xFFFF
        $zms.WriteByte([byte]($nn -band 0xFF))
        $zms.WriteByte([byte](($nn -shr 8) -band 0xFF))
        $zms.Write($raw, $off, $n)
        $off += $n
    }
    # adler32
    $s1 = [uint32]1; $s2 = [uint32]0
    foreach ($b in $raw) { $s1 = ($s1 + $b) % 65521; $s2 = ($s2 + $s1) % 65521 }
    $adler = (($s2 -shl 16) -bor $s1)
    $adBytes = [BitConverter]::GetBytes($adler); [Array]::Reverse($adBytes)
    $zms.Write($adBytes, 0, 4)
    $z = $zms.ToArray()

    $sig = [byte[]](137, 80, 78, 71, 13, 10, 26, 10)
    $out = New-Object System.IO.MemoryStream
    $out.Write($sig, 0, 8)
    $c1 = New-Chunk 'IHDR' $ihdr; $out.Write($c1, 0, $c1.Length)
    $c2 = New-Chunk 'IDAT' $z;    $out.Write($c2, 0, $c2.Length)
    $c3 = New-Chunk 'IEND' ([byte[]]@()); $out.Write($c3, 0, $c3.Length)
    return $out.ToArray()
}

$SIZE = 32
$DARK  = @(92, 6, 23, 255)
$LIGHT = @(255, 245, 236, 255)

function New-CursorPixels([bool]$withDot) {
    $px = New-Object byte[] ($SIZE * $SIZE * 4) # all transparent
    function Set-Px([int]$x, [int]$y, [byte[]]$c) {
        if ($x -lt 0 -or $x -ge $SIZE -or $y -lt 0 -or $y -ge $SIZE) { return }
        $i = ($y * $SIZE + $x) * 4
        $px[$i] = $c[0]; $px[$i+1] = $c[1]; $px[$i+2] = $c[2]; $px[$i+3] = $c[3]
    }
    # main dark edge: vertical from tip then diagonal
    for ($y = 3; $y -le 21; $y++) {
        $dx = [Math]::Max(0, $y - 10)
        Set-Px (4 + $dx) $y $DARK
        if ($y -le 12) { Set-Px 4 $y $DARK }
    }
    # light interior
    for ($y = 4; $y -le 20; $y++) {
        $dx = [Math]::Max(0, $y - 10)
        for ($x = 5; $x -lt (4 + $dx); $x++) { Set-Px $x $y $LIGHT }
    }
    # wing
    for ($x = 4; $x -le 12; $x++) { Set-Px $x 12 $DARK }
    for ($x = 5; $x -lt 12; $x++) { Set-Px $x 11 $LIGHT }
    $wing = @(@(11,13), @(10,14), @(9,15), @(8,16), @(9,17), @(10,18))
    foreach ($pt in $wing) { Set-Px $pt[0] $pt[1] $DARK }
    # small notch fill
    for ($y = 13; $y -le 17; $y++) { for ($x = 5; $x -le 7; $x++) { Set-Px $x $y $LIGHT } }
    if ($withDot) {
        Set-Px 7 7 $DARK; Set-Px 8 7 $DARK; Set-Px 7 8 $DARK; Set-Px 8 8 $DARK
    }
    return ,$px
}

$curPx = New-CursorPixels $false
$ptrPx = New-CursorPixels $true

[System.IO.File]::WriteAllBytes("public/retro-cursor.png", (New-Png $curPx $SIZE $SIZE))
[System.IO.File]::WriteAllBytes("public/retro-pointer.png", (New-Png $ptrPx $SIZE $SIZE))
Write-Output "OK"

import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'github',
    repo: 'Gifarieyyz/fruity-coffee',
  },
  collections: {
    beans: collection({
      label: 'Beans',
      slugField: 'name',
      path: 'src/content/beans/*',
      // Ubah formatnya jadi explicitly markdown dengan frontmatter
      format: { content: 'content' }, 
      schema: {
        name: fields.slug({ name: { label: 'Nama Beans' } }),
        origin: fields.text({ label: 'Origin' }),
        process: fields.text({ label: 'Process' }),
        roaster: fields.text({ label: 'Roaster' }),
        notes: fields.text({ label: 'Flavor Notes' }),
        content: fields.document({ label: 'Review & Thoughts', richtext: true }),
      },
    }),
    recipes: collection({
      label: 'Recipes',
      slugField: 'title',
      path: 'src/content/recipes/*',
      format: { content: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Judul Resep' } }),
        dripper: fields.text({ label: 'Dripper' }),
        ratio: fields.text({ label: 'Ratio' }),
        waterTemp: fields.text({ label: 'Water Temp' }),
        grindSize: fields.text({ label: 'Grind Size' }),
        content: fields.document({ label: 'Instructions', richtext: true }),
      },
    }),
  },
});
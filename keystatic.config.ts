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
      // INI KUNCINYA: Supaya jadi file .md standar
      format: { contentField: 'content' },
      schema: {
        name: fields.slug({ name: { label: 'Nama Beans' } }),
        origin: fields.text({ label: 'Origin' }),
        process: fields.text({ label: 'Process' }),
        roaster: fields.text({ label: 'Roaster' }),
        notes: fields.text({ label: 'Flavor Notes' }),
        content: fields.markdoc({
          label: 'Review & Thoughts',
          extension: 'md',
        }),
      },
    }),
    recipes: collection({
      label: 'Recipes',
      slugField: 'title',
      path: 'src/content/recipes/*',
      // INI JUGA: Supaya recipes jadi .md standar
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Judul Resep' } }),
        dripper: fields.text({ label: 'Dripper' }),
        ratio: fields.text({ label: 'Ratio' }),
        waterTemp: fields.text({ label: 'Water Temp' }),
        grindSize: fields.text({ label: 'Grind Size' }),
        content: fields.markdoc({
          label: 'Instructions',
          extension: 'md',
        }),
      },
    }),
  },
});
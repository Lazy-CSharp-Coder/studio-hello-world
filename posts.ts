import { defineField, defineType } from 'sanity';

export const bookType = defineType({
  name: 'Book',
  title: 'Book',
  type: 'document',
  fields: [
    defineField({
      name: 'uid',
      type: 'string',
      title: 'Unique Identifier',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'bookTitle',
      type: 'string',
      title: "Book Title",
      validation: (rule) => rule.required(),

    }),
    defineField({
      name: 'availability',
      type: 'array',
      title: "Availability",
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'bookInSeries',
      type: 'number',
      title: "Number in series",
      initialValue: 1,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'imageBook',
      type: 'image',
      title: "Cover Image Book",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'releaseYear',
      type: 'number',
      title: "Original release year",
      initialValue: 2003,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'authorUids',
      type: 'array',
      title: "Author(s)",
      of: [{ type: 'string' }],
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'subTitle',
      type: 'string',
      validation: (rule) => rule.required(),

    }),
    defineField({
      name: 'description',
      type: 'array',
      of: [{ type: 'string' }]
    validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'ageGroup',
      type: 'string',

    }), defineField({
      name: 'buyLink',
      type: 'string',
      validation: (rule) => rule.required(),
    }),

  ],
});
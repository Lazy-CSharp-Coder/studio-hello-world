import { defineField, defineType } from 'sanity';

export const serieType = defineType({
  name: 'Serie',
  title: 'Serie',
  type: 'document',
  fields: [
   
    defineField({
      name: 'seriesName',
      type: 'string',
      title: "Serie Title",
      validation: (rule) => rule.required(),

    }),
     defineField({
      name: 'uid',
      type: 'string',
      title: 'Unique Identifier',
      validation: (rule) => rule.required(),
    }),
   
 defineField({
      name: 'authorUids',
      type: 'array',
      title: "Authors (identifier)",
      of: [{ type: 'string' }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'imageSeries',
      type: 'image',
      title: "Series general image",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'seriesFact',
      type: 'string',
      title: "Fact about series.",
    
      validation: (rule) => rule.required(),
    }),
   

    defineField({
      name: 'seriesTeaser',
      type: 'string',
      title: "Teaser for series",
      validation: (rule) => rule.required(),

    }),
    defineField({
      name: 'description',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'ageGroup',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'bookUids',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (rule) => rule.required(),
    }),


  ],
});
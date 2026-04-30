import {defineField, defineType} from 'sanity'

export const bookType = defineType({
  name: 'Book',
  title: 'Book',
  type: 'document',
  fields: [
    defineField({
      name: 'uid',
      type: 'string',
      title: 'Unik identifikator',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'availability',
      type: 'array',
      of : [{type : 'string'}],
      options: {layout: 'tags'},
    
    }),
    defineField({
      name: 'bookInSeries',
      type: 'number',
      initialValue: 0,
    
    }),
    defineField({
      name: 'imageBook',
      type: 'image',
    }),
    defineField({
      name: 'releaseYear',
      type: 'number',
      initialValue: 2003
    }),
      defineField({
      name: 'authorUids',
      type: 'array',
      of : [{type: 'string'}]
      
    }),
      defineField({
      name: 'bookTitle',
      type: 'sring',
    
      
    }),
      defineField({
      name: 'subTitle',
      type: 'string',
      
      
    }),
      defineField({
      name: 'description',
      type: 'array',
      of : [{type: 'string'}]
      
    }),
      defineField({
      name: 'authorUids',
      type: 'array',
      of : [{type: 'string'}]
      
    }),  defineField({
      name: 'authorUids',
      type: 'array',
      of : [{type: 'string'}]
      
    }),
  ],
})
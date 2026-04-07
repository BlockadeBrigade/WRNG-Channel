import {defineField, defineType} from 'sanity'
export default defineType({
  name: 'VideoUpload',
  title: 'Video Upload',
  type: 'document',
  fields: [
    defineField({name: 'VideoName', title: 'Video Name', type: 'string'}),
    defineField({
      name: 'Category',
      title: 'Video Category',
      type: 'string',
      options: {
        list: [
          {title: 'Music Video', value: 'Music Video'},
          {title: 'Commercial', value: 'Commercial'},
          {title: 'Narrative', value: 'Narrative'},
        ],
      },
    }),
    defineField({
      name: 'VideoUpload',
      title: 'Video  Upload',
      type: 'file',
    }),
  ],
})

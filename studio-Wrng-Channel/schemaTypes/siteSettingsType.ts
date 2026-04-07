import {defineField, defineType} from 'sanity'
export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'siteName',
      title: 'Site Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'landingPageVideo',
      title: 'Landing Page Video',
      type: 'file',
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
    }),
    defineField({
      name: 'AboutProfile',
      title: 'About Page Photo',
      type: 'file',
    }),
    defineField({
      name: 'AboutBlurb',
      title: 'About Page',
      type: 'string',
    }),
    defineField({
      name: 'skills',
      title: 'Skills',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
    }),
  ],
})

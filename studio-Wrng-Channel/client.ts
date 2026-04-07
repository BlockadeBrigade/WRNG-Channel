import {createClient} from '@sanity/client'

const client = createClient({
  projectId: 'bjxvrhes',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2026-03-01',
})

export default client

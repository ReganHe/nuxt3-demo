export default defineEventHandler((event) => {
  // eslint-disable-next-line no-console
  console.log('New Nuxt request: ' + event.req.url)
})
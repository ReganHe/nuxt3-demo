export default defineNuxtRouteMiddleware((to, from) => {
  // eslint-disable-next-line no-console
  console.log(`[全域中間件] to: ${to.path}, from: ${from.path}`)
})
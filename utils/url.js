const { $content } = require('@nuxt/content')

export async function getRoutes(query = ['all']) {
  const routes = [];

  if (query.includes('top') || query.includes('all')) {
    const pages = [
      '/about/',
      '/contact/',
      '/blog/',
      '/talks/',
      '/workshops/',
      '/open-source/',
    ];
    pages.forEach((x) => { routes.push(x); })
  }

  if (query.includes('blog') || query.includes('all')) {
    const posts = await $content('posts', { deep: true }).where({ draft: false }).fetch()
    posts.forEach((x) => { routes.push(x.url); })
  }

  if (query.includes('talks') || query.includes('all')) {
    const talks = await $content('talks', { deep: true }).where({ draft: false }).fetch()
    talks.forEach((x) => { routes.push(x.url); })
  }

  if (query.includes('workshops') || query.includes('all')) {
    const workshops = await $content('posts', { deep: true }).where({ draft: false }).fetch()
    workshops.forEach((x) => { routes.push(x.url); })
  }

  return routes;
}

export async function getRoutesPayload() {
  const routes = [];

  // BLOG
  const posts = await $content('posts', { deep: true }).where({ draft: false }).fetch()
  posts.forEach((x) => { routes.push({route: x.url, payload: {}}); })

  // TALKS
  const talks = await $content('talks', { deep: true }).where({ draft: false }).fetch()
  talks.forEach((x) => { routes.push({route: x.url, payload: {}}); })

  // WORKSHOPS
  const workshops = await $content('workshops', { deep: true }).where({ draft: false }).fetch()
  workshops.forEach((x) => { routes.push({route: x.url, payload: {}}); })

  return routes;
}

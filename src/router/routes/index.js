import persentation from './persentation'

const PageNotFound = (resolve) => {
  require.ensure(['@/pages/errors/404'], () => {
    resolve(require('@/pages/errors/404'))
  })
}

export default [
  ...persentation,
  {
    name: 'Page Not Found',
    path: '*',
    component: PageNotFound
  }
]

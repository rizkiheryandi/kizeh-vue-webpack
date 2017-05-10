import auth from './auth'

const PageNotFound = (resolve) => {
  require.ensure(['@/pages/errors/404'], () => {
    resolve(require('@/pages/errors/404'))
  })
}

export default [
  ...auth,
  {
    name: 'Page Not Found',
    path: '*',
    component: PageNotFound
  }
]

export const Login = (resolve) => {
  require.ensure(['./Login'], () => {
    resolve(require('./Login'))
  })
}

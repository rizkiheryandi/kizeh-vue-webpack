export const Home = (resolve) => {
  require.ensure(['./Home'], () => {
    resolve(require('./Home'))
  })
}

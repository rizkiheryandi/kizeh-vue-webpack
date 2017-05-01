import state from './state'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'
import types from './types'
import { Store } from 'vuex'
import createLogger from 'vuex/dist/logger'

const debug = process.env.NODE_ENV !== 'production'

export default new Store({
  state,
  actions,
  getters,
  mutations,
  types,
  strict: debug,
  plugins: debug ? [createLogger()] : []
})

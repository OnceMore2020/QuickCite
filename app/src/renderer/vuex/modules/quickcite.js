import * as types from '../mutation-types'

const state = {
  showHelp: false,
  resItems: [],
  hasRes: false
}

const mutations = {
  [types.UPDATE_RES_ITEMS] (state, resItems) {
    state.resItems = resItems
  },
  [types.SWITCH_QUICKCITE_HELP] (state) {
    state.showHelp = !state.showHelp
  },
  [types.SWITCH_HAS_RES] (state, boolRes) {
    state.hasRes = boolRes
  }
}

export default {
  state,
  mutations
}

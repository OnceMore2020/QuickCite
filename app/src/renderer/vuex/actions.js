import * as types from './mutation-types'

export const updateResItems = ({ commit }, resItems) => {
  commit(types.UPDATE_RES_ITEMS, resItems)
}

export const switchQuickciteHelp = ({ commit }) => {
  commit(types.SWITCH_QUICKCITE_HELP)
}

export const switchHasRes = ({ commit }, boolRes) => {
  commit(types.SWITCH_HAS_RES, boolRes)
}

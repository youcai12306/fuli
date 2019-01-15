import * as types from '../types'
import Cookies from 'js-cookie'

/**
 * App通用配置
 */
const state = {
	loading: false, //暂时只开发这一个 
	showToast: false,
	leftNavStatus: false,
	showSuccess: true,
	showFail: false,
	// 中英文
	language: Cookies.get('language') || 'zh'
}
const actions = {
	setLoadingState({
		commit
	}, status) {
		commit(types.COM_LOADING_STATUS, status)
	},
	// 中英文
	setLanguage({
		commit
	}, language) {
		commit('SET_LANGUAGE', language)
	},
}
const getters = {
	loading: state => state.loading,
	showToast: state => state.showToast,
	showAlert: state => state.showAlert
}
const mutations = {
	[types.COM_LOADING_STATUS](state, status) {
		state.loading = status
	},
	// 中英文
    SET_LANGUAGE: (state, language) => {
      state.language = language
      Cookies.set('language', language)
    },
}


export default {
	state,
	actions,
	getters,
	mutations
}

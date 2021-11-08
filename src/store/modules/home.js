import * as types from '../mutation-types'
import { children } from '@/router/index.js';

const state = {
  activeMenu: localStorage.getItem('VSC_active_menu') || 'pie',
  dialogShow: localStorage.getItem('dialogShow') || { name: false, time: Date.now() + (1000 * 60 * 60 * 24) },
  dialogMd: localStorage.getItem('dialogMd') || '',
}

const actions = {}

const getters = {
  getActiveMenu: state => () => state.activeMenu,
  getActiveName: state => () => {
    const routers = children.find(childrenItem => childrenItem.name === state.activeMenu)
    return routers.meta.title || '';
  }
}

function capitalize(str) {
  return str.replace(/\B([A-Z])/g, '-$1').toLowerCase()
}

const mutations = {
  [types.UPDATE_ACTIVE_MENU](state, payload) {
    localStorage.setItem('VSC_active_menu', payload)
    state.activeMenu = payload
  },
  [types.UPDATE_DIALOG_SHOW](state, payload) {
    if (payload) {
      const md = capitalize(payload);
      const mdArray = md.split('-');
      axios.get(`${process.env.NODE_ENV === 'production' ? '/vue-baselib/dist' : ''}/static/md/${mdArray[0]}/${payload}.md`).then((response) => {
        localStorage.setItem('dialogMd', response.data)
        state.dialogMd = response.data
      })
        .catch(error => {
          localStorage.setItem('dialogMd', `${error}`)
          state.dialogMd = `${error}`
        });
    } else {
      // localStorage.setItem('dialogMd', '')
      // state.dialogMd = ''
    }
    const dialogShow = { name: payload, time: Date.now() + (1000 * 60 * 60 * 24) }
    localStorage.setItem('dialogShow', dialogShow)
    state.dialogShow = dialogShow
  },
}

export default {
  state,
  actions,
  getters,
  mutations,
}
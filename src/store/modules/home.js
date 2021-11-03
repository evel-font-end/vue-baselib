import * as types from '../mutation-types'
import axios from 'axios';


const state = {
  activeMenu: localStorage.getItem('VSC_active_menu') || 'pie',
  dialogShow: localStorage.getItem('dialogShow') || false,
  dialogMd: localStorage.getItem('dialogMd') || '',
}

const actions = {}

const getters = {
  getActiveMenu: state => () => state.activeMenu,
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
    localStorage.setItem('dialogShow', payload)
    state.dialogShow = payload
  },
}

export default {
  state,
  actions,
  getters,
  mutations,
}
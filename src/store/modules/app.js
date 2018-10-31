// app 模块
import { SET_TOKEN } from '../mutation-types'
import { showTextModal } from '@/utils'
import { postonLogin } from '@/api/home'

const app = {
    state: {
        token: '',
    },
    mutations: {
        [SET_TOKEN](state, val) {
            state.token = val
        },
    },
    actions: {
        /**
        * 用户登录
        */
       async userLogin({ commit }, params) {
            const res = await postonLogin({
                    method: "POST",
                    data: params
                }).then(res => {
                    if (res && res.token) {
                        showTextModal(res.Info)
                        commit(SET_TOKEN, res.token)
                        wx.setStorageSync(SET_TOKEN, res.token)
                    } else {
                        showTextModal(res.Info)
                    }
                }).catch(err => {

                })
            return res
        },
    }
}

export default app

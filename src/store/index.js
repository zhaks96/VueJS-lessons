import Vue from 'vue'
import Vuex from 'vuex'
import reactions from './reactions'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        reactions
    }
})
import appService from '../app.service'

const state = {
  posts: []
}

const getters = {
  posts: state => state.posts
}

const actions = {
  updateCategory(context, categoryId) {
    appService.getPosts(categoryId)
      .then(data => {
        context.commit('updateCategory', {posts: data})
      })
  }
}

const mutations = {
  updateCategory(state, category) {
    state.posts = category.posts
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

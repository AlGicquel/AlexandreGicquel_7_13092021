import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts:[
      {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dictum ante eget ligula egestas iaculis sit amet quis leo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas posuere sem quis tortor pulvinar fermentum. Nam eu mauris quam. Aliquam ullamcorper erat ut neque tincidunt, in commodo lectus auctor. Aenean lorem lacus, volutpat et ligula quis, tincidunt blandit risus. Morbi vehicula, nisi eu luctus varius, metus diam condimentum ipsum, et mattis metus ex vel erat.',
          author: 'User1',
          comments: [
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: 'User1'
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: 'User1'
            },
          ]
      },
      {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dictum ante eget ligula egestas iaculis sit amet quis leo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas posuere sem quis tortor pulvinar fermentum. Nam eu mauris quam. Aliquam ullamcorper erat ut neque tincidunt, in commodo lectus auctor. Aenean lorem lacus, volutpat et ligula quis, tincidunt blandit risus. Morbi vehicula, nisi eu luctus varius, metus diam condimentum ipsum, et mattis metus ex vel erat.',
          author: 'User2',
          comments: [
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: 'User1'
            },
            {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: 'User1'
            },
          ]
      },
      {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dictum ante eget ligula egestas iaculis sit amet quis leo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas posuere sem quis tortor pulvinar fermentum. Nam eu mauris quam. Aliquam ullamcorper erat ut neque tincidunt, in commodo lectus auctor. Aenean lorem lacus, volutpat et ligula quis, tincidunt blandit risus. Morbi vehicula, nisi eu luctus varius, metus diam condimentum ipsum, et mattis metus ex vel erat.',
          author: 'User3',
          comments: [
            // {
            //   text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            //   author: 'User1'
            // },
            // {
            //   text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            //   author: 'User1'
            // },
          ]
      }
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})

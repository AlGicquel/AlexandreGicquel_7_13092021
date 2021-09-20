import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts:[
      {
          id: 0,
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dictum ante eget ligula egestas iaculis sit amet quis leo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas posuere sem quis tortor pulvinar fermentum. Nam eu mauris quam. Aliquam ullamcorper erat ut neque tincidunt, in commodo lectus auctor. Aenean lorem lacus, volutpat et ligula quis, tincidunt blandit risus. Morbi vehicula, nisi eu luctus varius, metus diam condimentum ipsum, et mattis metus ex vel erat.',
          author: 'User1',
          comments: [
            { 
              id: 0,
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: 'User1'
            },
            {
              id: 1,
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: 'User1'
            },
          ]
      },
      {
          id: 1, 
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dictum ante eget ligula egestas iaculis sit amet quis leo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas posuere sem quis tortor pulvinar fermentum. Nam eu mauris quam. Aliquam ullamcorper erat ut neque tincidunt, in commodo lectus auctor. Aenean lorem lacus, volutpat et ligula quis, tincidunt blandit risus. Morbi vehicula, nisi eu luctus varius, metus diam condimentum ipsum, et mattis metus ex vel erat.',
          author: 'User2',
          comments: [
            {
              id: 2,
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: 'User1'
            },
            {
              id: 3,
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: 'User1'
            },
          ]
      },
      {
          id: 2,
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
    ],
    users: [
      {
        username: 'user1',
        postsIds: [0],
        commentsIds: [0, 1, 2, 3]
      },
      {
        username: 'user2',
        postsIds: [1],
        commentsIds: []
      },
      {
        username: 'user3',
        postsIds: [2],
        commentsIds: []
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

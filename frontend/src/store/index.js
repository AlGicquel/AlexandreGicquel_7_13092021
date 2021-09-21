import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [
      {
        id: 1,
        username: 'user1',
      },
      {
        id: 2,
        username: 'user2',
      },
      {
        id: 3,
        username: 'user3',
      }
    ],
    posts:[
      {
          id: 0,
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dictum ante eget ligula egestas iaculis sit amet quis leo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas posuere sem quis tortor pulvinar fermentum. Nam eu mauris quam. Aliquam ullamcorper erat ut neque tincidunt, in commodo lectus auctor. Aenean lorem lacus, volutpat et ligula quis, tincidunt blandit risus. Morbi vehicula, nisi eu luctus varius, metus diam condimentum ipsum, et mattis metus ex vel erat.',
          authorId: 1,
          author: "User1",
          // commentsIds: [0,1],
          comments: [
            { 
              id: 0,
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: "User1",
              authorId: 1,
            },
            { 
              id: 1,
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: "User1",
              authorId: 1,
      
            }
          ],
          likes: []
      },
      {
          id: 1, 
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dictum ante eget ligula egestas iaculis sit amet quis leo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas posuere sem quis tortor pulvinar fermentum. Nam eu mauris quam. Aliquam ullamcorper erat ut neque tincidunt, in commodo lectus auctor. Aenean lorem lacus, volutpat et ligula quis, tincidunt blandit risus. Morbi vehicula, nisi eu luctus varius, metus diam condimentum ipsum, et mattis metus ex vel erat.',
          authorId: 2,
          author: "User1",
          // commentsIds: [2,3],
          comments: [
            { 
              id: 0,
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: "User1",
              authorId: 1,
            },
            { 
              id: 1,
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              authorId: 1,
              author: "User1",
      
            }
          ],
          likes: []
      },
      {
          id: 2,
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dictum ante eget ligula egestas iaculis sit amet quis leo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas posuere sem quis tortor pulvinar fermentum. Nam eu mauris quam. Aliquam ullamcorper erat ut neque tincidunt, in commodo lectus auctor. Aenean lorem lacus, volutpat et ligula quis, tincidunt blandit risus. Morbi vehicula, nisi eu luctus varius, metus diam condimentum ipsum, et mattis metus ex vel erat.',
          authorId: 3,
          author: "User1",
          // commentsIds: [],
          comments: [
            { 
              id: 0,
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: "User1",
              authorId: 1,
            },
            { 
              id: 1,
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              author: "User1",
              authorId: 1,
      
            }
          ],
          likes: []
      }
    ],
    comments: [
      { 
        id: 0,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        authorId: 1,
      },
      { 
        id: 1,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        authorId: 1,

      },
      { 
        id: 2,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        authorId: 1,

      },
      { 
        id: 3,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        authorId: 1,

      }
    ]
  },
  getters: {
    filterComments (state) {
      return state;
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})

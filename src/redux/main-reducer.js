const SET_STATUS = 'SET_STATUS';
const SET_TEST = 'SET_TEST';

let initialState = {
  assortment: [
    { id: 1, message: 'HI, how are you?', likeCount: 12 },
    { id: 2, message: "It's my 1 post", likeCount: 11 },
    { id: 3, message: 'It is my 2 post', likeCount: 13 },
    { id: 4, message: 'It is my 3 post', likeCount: 15 },
  ],
  test: 'test',
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_STATUS: {
      return {
        ...state,
        status: action.status,
      };
    }
    case SET_TEST: {
      return {
        ...state,
        test: action.test,
      };
    }
    default:
      return state;
  }
};

//Action Creators
export const setTest = (test) => ({
  type: SET_TEST,
  test,
});

export default mainReducer;

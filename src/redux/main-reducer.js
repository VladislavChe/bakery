const SET_TEST = 'SET_TEST';

let initialState = {
  test: 'test',
  assortment: [
    {
      img: require('../img/assortmentCake1.png'),
      title: 'Творожный с вишней',
      description: 'Легкий творожный чизкейк с нежным ванильным вкусом и ярким слоем вишни',
      price: 500,
    },
    {
      img: require('../img/assortmentCake2.png'),
      title: 'Сливочный с манго',
      description:
        'Невероятно нежная сливочная начинка с тропическим вкусом манго на хрустящей основе',
      price: 600,
    },
    {
      img: require('../img/assortmentCake3.png'),
      title: 'Шоколадный',
      description:
        'Шоколадный чизкейк с насыщенным изысканным вкусом шоколада и плотной консистенцией',
      price: 700,
    },
    {
      img: require('../img/assortmentCake1.png'),
      title: 'Творожный с вишней',
      description: 'Легкий творожный чизкейк с нежным ванильным вкусом и ярким слоем вишни',
      price: 500,
    },
    {
      img: require('../img/assortmentCake2.png'),
      title: 'Сливочный с манго',
      description:
        'Невероятно нежная сливочная начинка с тропическим вкусом манго на хрустящей основе',
      price: 600,
    },
    {
      img: require('../img/assortmentCake3.png'),
      title: 'Шоколадный',
      description:
        'Шоколадный чизкейк с насыщенным изысканным вкусом шоколада и плотной консистенцией',
      price: 700,
    },
    {
      img: require('../img/assortmentCake1.png'),
      title: 'Творожный с вишней',
      description: 'Легкий творожный чизкейк с нежным ванильным вкусом и ярким слоем вишни',
      price: 500,
    },
    {
      img: require('../img/assortmentCake2.png'),
      title: 'Сливочный с манго',
      description:
        'Невероятно нежная сливочная начинка с тропическим вкусом манго на хрустящей основе',
      price: 600,
    },
    {
      img: require('../img/assortmentCake3.png'),
      title: 'Шоколадный',
      description:
        'Шоколадный чизкейк с насыщенным изысканным вкусом шоколада и плотной консистенцией',
      price: 700,
    },
  ],
  feedback: [
    {
      img: require('../img/client1.png'),
      name: 'Мария',
      text: 'Заказала чизкейк вместо торта на день рождения. Это было лучшим решением! Чизкейк невероятно вкусный! Теперь буду заказывать только тут!',
      stars: [1, 2, 3, 4, 5],
    },
    {
      img: require('../img/client2.png'),
      name: 'Анна',
      text: 'Заказала торт вместо чизкейка на день рождения. Это было лучшим решением! Торт невероятно вкусный! Теперь буду заказывать только тут! Заказала торт вместо чизкейка на день рождения. Это было лучшим решением! Торт невероятно вкусный! Теперь буду заказывать только тут!',
      stars: [1, 2, 3, 4],
    },
    {
      img: require('../img/client1.png'),
      name: 'Мария',
      text: 'Заказала чизкейк вместо торта на день рождения. Это было лучшим решением! Чизкейк невероятно вкусный! Теперь буду заказывать только тут!',
      stars: [1, 2, 3, 4, 5],
    },
    {
      img: require('../img/client2.png'),
      name: 'Анна',
      text: 'Заказала торт вместо чизкейка на день рождения. Это было лучшим решением! Торт невероятно вкусный! Теперь буду заказывать только тут! Заказала торт вместо чизкейка на день рождения. Это было лучшим решением! Торт невероятно вкусный! Теперь буду заказывать только тут!',
      stars: [1, 2, 3, 4],
    },
  ],
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TEST: {
      return {
        ...state,
        test: action.text,
      };
    }
    default:
      return state;
  }
};

//Action Creators
export const setTest = (text) => ({
  type: SET_TEST,
  text,
});

export default mainReducer;

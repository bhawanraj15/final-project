const wrapper = document.querySelector('.sliderWrapper');

const menuItems = document.querySelectorAll('.menuItem');

const products = [
  {
    id: 1,
    title: 'Air Force',
    price: 11999,
    colors: [
      {
        code: 'black',
        img: './img/air.png',
      },
      {
        code: 'darkblue',
        img: './img/air2.png',
      },
    ],
  },
  {
    id: 2,
    title: 'Air Jordan',
    price: 14999,
    colors: [
      {
        code: 'lightgray',
        img: './img/jordan.png',
      },
      {
        code: 'green',
        img: './img/jordan2.png',
      },
    ],
  },
  {
    id: 3,
    title: 'Blazer',
    price: 10999,
    colors: [
      {
        code: 'lightgray',
        img: './img/blazer.png',
      },
      {
        code: 'green',
        img: './img/blazer2.png',
      },
    ],
  },
  {
    id: 4,
    title: 'Crater',
    price: 12999,
    colors: [
      {
        code: 'black',
        img: './img/crater.png',
      },
      {
        code: 'lightgray',
        img: './img/crater2.png',
      },
    ],
  },
  {
    id: 5,
    title: 'Hippie',
    price: 9999,
    colors: [
      {
        code: 'gray',
        img: './img/hippie.png',
      },
      {
        code: 'black',
        img: './img/hippie2.png',
      },
    ],
  },
];

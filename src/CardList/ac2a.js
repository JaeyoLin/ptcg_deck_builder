import {
  CardTypes,
  Sets,
} from '../Config';

const set = Sets.AC2A.value;

/**
 * AC2A_Card_List
 * 美夢成真組合篇 A
 *
 */
const AC2A_Card_List = [
  {
    id: 57,
    name: '亞克諾姆',
    set,
    type: CardTypes.POKEMON.value,
    maxCount: 4,
    isBan: false,
    imgSrc: 'https://ptcgcard.com/img/057.5aae84da.jpg',
  },
  {
    id: 145,
    name: '百變怪◇',
    set,
    type: CardTypes.POKEMON.value,
    maxCount: 1,
    isBan: false,
    imgSrc: 'https://ptcgcard.com/img/145.939adcee.jpg',
  },
];

export default AC2A_Card_List;

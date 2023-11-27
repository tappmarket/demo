// 产品图片
let productList = [
  { img: 'PlumSweetPotatoFries.jpg', txt: 'Plum Sweet Potato Fries' },
  { img: 'CrispyCalamari.jpg', txt: 'Crispy Calamari' },
  { img: 'FriedKingOysterMushroom.jpg', txt: 'Fried King Oyster Mushroom' },
  { img: 'CrispyChickenNuggets.jpg', txt: 'Crispy Chicken Nuggets' },
  { img: 'GoldenThreadRollwithCondensedMilk.jpg', txt: 'Golden Thread Roll with Condensed Milk' }
];
let productList2 = [
  { img: 'CrispyBonelessCutlet.jpg', txt: 'Crispy Boneless Cutl' },
  { img: 'FriedOreoCookies.jpg', txt: 'Fried Oreo Cookies' },
  { img: 'FriedGreenBean.jpg', txt: 'Fried Green Bean' },
  { img: 'FriedChickenSoftBone.jpg', txt: 'Fried Chicken Soft Bone' },
  { img: 'SignatureCrispyChickenCutlet.jpg', txt: 'Signature Crispy Chicken Cutlet' }
];
productList = formatData(productList);
productList2 = formatData(productList2);

// 商店图片
let storeImgs = ['store1.png', 'store2.png', 'store3.png'];
storeImgs = formatData(storeImgs);

// enquiry 列表
let enquiryList = [
  {
    title: 'Two Peck Crispy Chicken (Australia)',
    subTitle: 'Franchise Employee Helpline',
    desc: `If you have any questions or concerns regarding employment or wage payment practices at a Two Peck Crispy Chicken store`,
    img: 'img1.jpg',
    to: '/enquiry/franceise'
  },
  {
    title: 'Two Peck Crispy Chicken (Australia)',
    subTitle: 'Customer Service Helpline',
    desc: `If you have any questions or concerns regarding Two Peck Crispy Chicken (Australia) Franchise Store's products and`,
    img: 'img4.jpg',
    to: '/enquiry/customer'
  },
  {
    title: 'Two Peck Crispy Chicken (Australia)',
    subTitle: 'Join The Two Peck Crispy Chicken (Australia) Family',
    desc: `If you have any questions about join the Two Peck Crispy Chicken store`,
    img: 'img3.jpg',
    to: '/enquiry/join'
  }
];
enquiryList = formatData(enquiryList);

function formatData(list) {
  return list.map((item) => {
    let _item = {};
    if (typeof item === 'string') {
      _item = { img: item };
    } else {
      _item = { ...item };
    }
    return {
      ..._item,
      img: new URL(`../../assets/image/${_item.img}`, import.meta.url).href,
      alt: _item.img
    };
  });
}

// 州列表
const stateList = [
  'New South Wales',
  'South Australia',
  'Western Australia',
  'Victoria',
  'Queensland',
  'Tasmania',
  'Northern Territory',
  'Australian Capital Territory'
];
// 所在州的门店的地址列表 (与州列表对应)
const addrList = [
  /* NSW */
  [
    'Shop 45/1 Dixon St, Sydney NSW 2000',
    '22 Tung Hop St, Waterloo NSW 2017',
    '2/59 John St, Cabramatta NSW 2166',
    'Ground Floor, 71 Burwood Rd, Burwood NSW 2134',
    'Shop 3B/7 Magdalene Terrace, Wolli Greek NSW 2205',
    'Shop 5/1 Glen St, Eastwood NSW 2122',
    '338 Victoria Ave, Chatswood NSW 2067',
    '434 Cross St & Park Rd, Hurstville NSW 2220'
  ],
  /* South Australia */
  ['12 Rundle Mall, Adelaide SA 5000'],
  /* Western Australia */
  [
    'Middle of, Shop 42/188 Newcastle Street, Washing Ln, Perth WA 6000',
    'FC111, Westfield Carousel Shopping Centre, 1382 Albany Hwy, Cannington WA 6107'
  ],
  /* Victoria */
  ['270 Swanston St, Melbourne VIC 3000'],
  /* Queensland */
  [],
  /* Tasmania */
  ['48 Melville St, Hobart TAS 7000'],
  /* NT */
  [
    'Shop GD 127A, Casuarina Square, 247 Trower Rd, Casuarina NT 0810',
    'Shop R09A/ The Gateway Shopping Centre, Corner of Stuart Highway, Roystonea',
    'Avenue and Yarrawonga Road, Palmerston, Darwin NT 0830'
  ],
  /* ACT */
  ['G04/39 London Cct, Canberra ACT 2601']
];

export { productList, productList2, storeImgs, enquiryList, stateList, addrList };

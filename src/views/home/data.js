// 产品图片
let productList = [
  // 第一页
  [
    { img: 'PlumSweetPotatoFries.jpg', txt: 'Plum Sweet Potato Fries' },
    { img: 'CrispyCalamari.jpg', txt: 'Crispy Calamari' },
    { img: 'FriedKingOysterMushroom.jpg', txt: 'Fried King Oyster Mushroom' },
    { img: 'CrispyChickenNuggets.jpg', txt: 'Crispy Chicken Nuggets' },
    { img: 'GoldenThreadRollwithCondensedMilk.jpg', txt: 'Golden Thread Roll with Condensed Milk' },
    { img: 'CrispyBonelessCutlet.jpg', txt: 'Crispy Boneless Cutl' },
    { img: 'FriedOreoCookies.jpg', txt: 'Fried Oreo Cookies' },
    { img: 'FriedGreenBean.jpg', txt: 'Fried Green Bean' },
    { img: 'FriedChickenSoftBone.jpg', txt: 'Fried Chicken Soft Bone' },
    { img: 'SignatureCrispyChickenCutlet.jpg', txt: 'Signature Crispy Chicken Cutlet' }
  ],
  // 第二页
  []
];
productList = productList
  .filter((item) => Boolean(item.length))
  .map((item) => {
    let list = formatData(item);
    const product1 = list.splice(0, 5);
    return [product1, list];
  });

// 商店图片
let storeImgs = ['store1.png', 'store2.png', 'store3.png'];
storeImgs = formatData(storeImgs);

// enquiry 列表
let enquiryList = [
  {
    title: 'Two Peck Crispy Chicken (Australia)',
    subTitle: 'Employee Helpline',
    desc: `If you have any questions or concerns regarding employment or wage payment practices at a Two Peck Crispy Chicken store`,
    img: 'img1.jpg',
    to: '/enquiry/franceise'
  },
  {
    title: 'Two Peck Crispy Chicken (Australia)',
    subTitle: 'Customer Service Helpline',
    desc: `If you have any questions or concerns regarding Two Peck Crispy Chicken (Australia) Franchise Store's products and services, please submit a claim.`,
    img: 'img4.jpg',
    to: '/enquiry/customer'
  },
  {
    title: 'Two Peck Crispy Chicken (Australia)',
    subTitle: 'Join The Two Peck Crispy Chicken (Australia) Family',
    desc: `Register Your Interest`,
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
    {
      addr: '6 Walker St, Rhodes NSW 2138',
      link: ''
    },
    {
      addr: 'Shop 45/1 Dixon St, Sydney NSW 2000',
      link: ''
    },
    {
      addr: '22 Tung Hop St, Waterloo NSW 2017',
      link: ''
    },
    {
      addr: '2/59 John St, Cabramatta NSW 2166',
      link: ''
    },
    {
      addr: 'Ground Floor, 71 Burwood Rd, Burwood NSW 2134',
      link: ''
    },
    {
      addr: 'Shop 3B/7 Magdalene Terrace, Wolli Greek NSW 2205',
      link: ''
    },
    {
      addr: 'Shop 5/1 Glen St, Eastwood NSW 2122',
      link: ''
    },
    {
      addr: '338 Victoria Ave, Chatswood NSW 2067',
      link: ''
    },
    {
      addr: '434 Cross St & Park Rd, Hurstville NSW 2220',
      link: ''
    },
    {
      addr: 'Shop 185a, Westfield Mount Druitt, NSW 2770',
      link: ''
    }
  ],
  /* South Australia */
  [
    {
      addr: '12 Rundle Mall, Adelaide SA 5000',
      link: ''
    }
  ],
  /* Western Australia */
  [
    {
      addr: 'Middle of, Shop 42/188 Newcastle Street, Washing Ln, Perth WA 6000',
      link: ''
    },
    {
      addr: 'FC111, Westfield Carousel Shopping Centre, 1382 Albany Hwy, Cannington WA 6107',
      link: ''
    }
  ],
  /* Victoria */
  [
    {
      addr: '270 Swanston St, Melbourne VIC 3000',
      link: ''
    },
    {
      addr: '616 Station Street, Box Hill, VIC 3128',
      link: ''
    }
  ],
  /* Queensland */
  [],
  /* Tasmania */
  [
    {
      addr: '48 Melville St, Hobart TAS 7000',
      link: ''
    }
  ],
  /* NT */
  [
    {
      addr: 'Shop GD 127A, Casuarina Square, 247 Trower Rd, Casuarina NT 0810',
      link: ''
    },
    {
      addr: 'Shop R09A/ The Gateway Shopping Centre, Corner of Stuart Highway, Roystonea',
      link: ''
    },
    {
      addr: 'Avenue and Yarrawonga Road, Palmerston, Darwin NT 0830',
      link: ''
    }
  ],
  /* ACT */
  [
    {
      addr: 'G04/39 London Cct, Canberra ACT 2601',
      link: ''
    }
  ]
];

export { productList, storeImgs, enquiryList, stateList, addrList };

interface Product {
  id         : number;
  title      : string;
  images     : string[];
  price      : number;
  rating     : number;
  reviews    : number;
  isFavorite?: boolean;
}

export const productsData: Product[] = [
  {
    id: 1,
    title: "MacBook Pro M3",
    images: [
      "https://www.isolutionsperu.com/wp-content/uploads/mbp-spacegray-select-202011.jpg",
      "https://www.isolutionsperu.com/wp-content/uploads/mbp-spacegray-select-202011.jpg",
      "https://rymportatiles.com.pe/cdn/shop/files/Macbook-Pro-A2991-M3-2.png",
    ],
    price: 2800,
    rating: 4,
    reviews: 150,
    isFavorite: true
  },
  {
    id: 2,
    title: "iPhone 15 Pro Max",
    images: [
      "https://claroperupoc.vtexassets.com/arquivos/ids/1898529/naturaltt3.png",
      "https://http2.mlstatic.com/D_NQ_NP_896424-MLA71783367608_092023-O.webp",
    ],
    price: 1299,
    rating: 5,
    reviews: 320,
    isFavorite: false
  },
  {
    id: 3,
    title: "iPad Pro 12.9",
    images: [
      "https://pe.tiendasishop.com/cdn/shop/files/iPad_Pro_Wi-Fi_12-9_in_6th_generation_Space_Gray_PDP_Image_Position-1b__MXLA.jpg",
    ],
    price: 1099,
    rating: 4,
    reviews: 89,
    isFavorite: true
  },
  {
    id: 4,
    title: "AirPods Pro",
    images: [
      "https://mac-center.com.pe/cdn/shop/files/AirPods_Pro_2nd_Gen_with_USB-C_PDP_Image_Position-1__global.jpg",
      "https://bexo.com.pe/cdn/shop/files/MTJV3.jpg",
    ],
    price: 249,
    rating: 5,
    reviews: 450,
    isFavorite: true
  },
  {
    id: 5,
    title: "Apple Watch Series 9",
    images: [
      "https://pe.tiendasishop.com/cdn/shop/files/IMG-10934414_614b365a-63f7-406d-a004-6df3b8637ca0.jpg",
    ],
    price: 399,
    rating: 4,
    reviews: 275,
    isFavorite: false
  },
  {
    id: 6,
    title: "MacBook Air M2",
    images: [
      "https://pe.tiendasishop.com/cdn/shop/files/IMG-5577525.jpg",
      "https://oechsle.vteximg.com.br/arquivos/ids/14083432-1000-1000/imageUrl_2.jpg",
    ],
    price: 1199,
    rating: 5,
    reviews: 190,
    isFavorite: true
  },
  {
    id: 7,
    title: 'iMac 24"',
    images: [
      "https://rimage.ripley.com.pe/home.ripley/Attachment/MKP/3083/PMP20000222202/full_image-1.jpeg",
      "https://www.appleperu.pe/wp-content/uploads/imac-1.jpg",
      "https://pe.tiendasishop.com/cdn/shop/files/IMG-11197232_95c2ac70-5670-4235-bba0-8aed1d872be3.jpg",
    ],
    price: 1299,
    rating: 4,
    reviews: 145,
    isFavorite: true
  },
  {
    id: 8,
    title: "Mac mini M2",
    images: [
      "https://pe.tiendasishop.com/cdn/shop/files/IMG-8294195_0478762b-676f-436a-b36b-2ed10d96ff1e.jpg",
    ],
    price: 599,
    rating: 4,
    reviews: 88,
    isFavorite: false
  },
  {
    id: 9,
    title: "Studio Display",
    images: [
      "https://pe.tiendasishop.com/cdn/shop/files/IMG-6206220.jpg",
      "https://home.ripley.com.pe/Attachment/WOP_5/2004297207409/2004297207409-1.jpg",
    ],
    price: 1599,
    rating: 3,
    reviews: 45,
    isFavorite: true
  },
  {
    id: 10,
    title: "Mac Pro",
    images: [
      "https://www.appleperu.pe/wp-content/uploads/MACBOOK-PRO.jpg",
      "https://cdsassets.apple.com/live/7WUAS350/images/mac-pro/id-mac-pro-2019.jpg",
    ],
    price: 6999,
    rating: 5,
    reviews: 12,
    isFavorite: true
  },
  {
    id: 11,
    title: "iPhone 15",
    images: [
      "https://rymportatiles.com.pe/cdn/shop/files/IPHONE15PROMAXNEGROTITANIUM1_7aaf5468-ca5a-4704-915a-91932fd1ac36.png",
    ],
    price: 799,
    rating: 4,
    reviews: 234,
    isFavorite: false
  },
  {
    id: 12,
    title: "iPad Air",
    images: [
      "https://mac-center.com.pe/cdn/shop/files/iPad_Air_13_M2_WiFi_Blue_PDP_Image_Position_1__COES_f1a4d52a-6079-4893-86c6-9e0f9907c7b6.jpg",
      "https://gamecenterperu.com/wp-content/uploads/2023/11/GC02325_3.jpg",
    ],
    price: 599,
    rating: 4,
    reviews: 178,
    isFavorite: true
  },
  {
    id: 13,
    title: "AirPods Max",
    images: [
      "https://mac-center.com.pe/cdn/shop/files/AirPods_Max_2024_Basalt_Black_PDP_Image_Position_01__GENS_cb3604b3-39d6-4ffb-becd-4e9c02740a4a.jpg",
      "https://www.dastore.pe/cdn/shop/files/case-spigen-ultra-hybrid-pro-airpods-max-clearspigen11-1-2-csuhpairm-c-495479.jpg",
      "https://promart.vteximg.com.br/arquivos/ids/2858771-1000-1000/image-cbd90b8ae9bc4a90bccd9ca6e41f480e.jpg",
    ],
    price: 549,
    rating: 4,
    reviews: 156,
    isFavorite: false
  },
  {
    id: 14,
    title: "Magic Keyboard",
    images: [
      "https://pe.tiendasishop.com/cdn/shop/files/IMG-13087526_c14539da-04f6-466e-bc6f-429d13b57795.jpg",
    ],
    price: 99,
    rating: 3,
    reviews: 89,
    isFavorite: true
  },
  {
    id: 15,
    title: "Apple TV 4K",
    images: [
      "https://mac-center.com.pe/cdn/shop/files/AppleTV_4k_PDP_Image_Position-1_COES_fef41d6f-7ce4-4c54-9729-44ce41d103c9.jpg",
      "https://m.media-amazon.com/images/I/51Y-Dulc3bL._AC_SL1024_.jpg",
    ],
    price: 129,
    rating: 4,
    reviews: 167,
    isFavorite: false
  },
  {
    id: 16,
    title: "HomePod mini",
    images: [
      "https://rimage.ripley.com.pe/home.ripley/Attachment/MKP/1736/PMP00002667608/full_image-1.jpeg",
    ],
    price: 99,
    rating: 4,
    reviews: 223,
    isFavorite: false
  },
];

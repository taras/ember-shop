import {success} from './helpers';

export default function(params) {
  var payload = {};

  // hack for https://github.com/square/es6-module-transpiler/issues/102
  var category = require('fixtures/category/labore-est').category;

  // /products?featured
  if (params.featured) {
    payload.products = products.filterBy('isFeatured');
    payload.categories = [ category ];
    return success(payload);
  }

  if (params.page === 2) {
    // /products?page=2
    payload.products = products.slice(6)
  } else {
    // /products
    payload.products = products.slice(0, 6);
  }

  payload.categories = [ category ];

  return success(payload);
};

export var products = [
  {
    "id": 1,
    "title": "minim veniam velit",
    "slug": "minim-veniam velit",
    "image": "http://placehold.it/500x500&text=minim veniam velit",
    "description": "Sit cillum enim aliquip cupidatat dolore elit voluptate incididunt commodo ex esse ex duis nisi. Velit ea ullamco exercitation quis id id anim eiusmod. Mollit nisi elit magna voluptate commodo consectetur nisi ipsum adipisicing esse ad adipisicing. Veniam laborum eu aute aute sint. Esse laborum deserunt elit aliquip consequat. Nulla officia ex esse consequat dolore aute nisi. Laborum esse laborum irure dolore exercitation commodo proident cupidatat aute et Lorem pariatur.\r\n",
    "publishDate": "Tue Mar 30 1971 09:39:42 GMT-0500 (EDT)",
    "price": 42,
    "category": [
      1
    ],
    "isDiscounted": false,
    "isFeatured": false,
    "discount": null
  },
  {
    "id": 2,
    "title": "ad esse irure",
    "slug": "ad-esse irure",
    "image": "http://placehold.it/500x500&text=ad esse irure",
    "description": "Minim velit velit non laborum. Eu proident dolore ea id deserunt id pariatur velit. Sint est non incididunt incididunt. Ea ut reprehenderit in ut exercitation anim sunt fugiat nostrud in commodo nostrud nulla. Esse culpa fugiat elit culpa excepteur fugiat.\r\n",
    "publishDate": "Fri Apr 03 1970 17:42:42 GMT-0500 (EDT)",
    "price": 70,
    "category": [
      1
    ],
    "isDiscounted": true,
    "isFeatured": false,
    "discount": 12
  },
  {
    "id": 3,
    "title": "id commodo labore",
    "slug": "id-commodo labore",
    "image": "http://placehold.it/500x500&text=id commodo labore",
    "description": "Do cupidatat elit voluptate velit sunt amet veniam quis duis sint. Ut nostrud quis exercitation incididunt amet esse quis aliquip enim pariatur consequat eu. Et proident elit pariatur consectetur commodo ad aliquip magna tempor laborum reprehenderit proident do. Cillum aliquip nulla ut incididunt pariatur reprehenderit officia elit nulla ullamco. Proident id non veniam ad. Anim ullamco proident pariatur officia dolor nisi sint eiusmod. Quis esse ex Lorem irure enim.\r\n",
    "publishDate": "Wed Sep 27 1978 23:04:58 GMT-0400 (EDT)",
    "price": 41,
    "category": [
      1
    ],
    "isDiscounted": true,
    "isFeatured": true,
    "discount": 29
  },
  {
    "id": 4,
    "title": "exercitation ad proident",
    "slug": "exercitation-ad proident",
    "image": "http://placehold.it/500x500&text=exercitation ad proident",
    "description": "Do et do aute veniam id dolor voluptate consequat consequat consectetur irure. Cupidatat ex occaecat fugiat commodo sit ex. Adipisicing commodo culpa ut adipisicing aute tempor proident nulla dolore fugiat eu adipisicing mollit. Incididunt qui fugiat laboris nostrud pariatur ut. Ipsum aliqua laborum eu labore laboris labore est cupidatat cillum aliquip non.\r\n",
    "publishDate": "Sun Nov 17 2013 23:38:16 GMT-0500 (EST)",
    "price": 41,
    "category": [
      1
    ],
    "isDiscounted": false,
    "isFeatured": false,
    "discount": null
  },
  {
    "id": 5,
    "title": "pariatur minim labore",
    "slug": "pariatur-minim labore",
    "image": "http://placehold.it/500x500&text=pariatur minim labore",
    "description": "Non nostrud incididunt fugiat dolore eiusmod laborum laborum adipisicing cillum. Anim deserunt exercitation adipisicing nostrud aute elit est mollit velit eu aute ipsum laboris elit. Amet adipisicing proident sint esse nisi nulla est veniam. Deserunt adipisicing tempor culpa occaecat incididunt ea magna magna consectetur non. Adipisicing magna sint id Lorem voluptate laborum.\r\n",
    "publishDate": "Fri Feb 19 1999 04:12:05 GMT-0500 (EST)",
    "price": 6,
    "category": [
      1
    ],
    "isDiscounted": true,
    "isFeatured": false,
    "discount": 20
  },
  {
    "id": 6,
    "title": "non ut reprehenderit",
    "slug": "non-ut reprehenderit",
    "image": "http://placehold.it/500x500&text=non ut reprehenderit",
    "description": "Sunt mollit anim quis consequat magna amet. Sint laboris enim do commodo duis pariatur in officia elit ut magna consectetur laborum sit. Cillum irure deserunt minim proident adipisicing ea. Irure nostrud ut esse pariatur esse laborum incididunt consectetur ut adipisicing.\r\n",
    "publishDate": "Mon May 29 2000 16:00:40 GMT-0400 (EDT)",
    "price": 76,
    "category": [
      1
    ],
    "isDiscounted": false,
    "isFeatured": false,
    "discount": null
  },
  {
    "id": 7,
    "title": "ipsum ea ullamco",
    "slug": "ipsum-ea ullamco",
    "image": "http://placehold.it/500x500&text=ipsum ea ullamco",
    "description": "Voluptate tempor nostrud consequat dolor fugiat duis reprehenderit mollit voluptate velit elit velit Lorem consectetur. Mollit excepteur et sunt quis ad labore ea irure. Qui deserunt velit culpa ad reprehenderit in aute pariatur nostrud et velit anim. Eu ipsum id cillum qui esse qui cillum do reprehenderit quis incididunt est. Commodo deserunt ad nulla veniam proident amet. Fugiat culpa occaecat exercitation nisi proident tempor pariatur tempor laboris commodo.\r\n",
    "publishDate": "Tue Oct 03 1978 01:16:08 GMT-0400 (EDT)",
    "price": 21,
    "category": [
      1
    ],
    "isDiscounted": true,
    "isFeatured": true,
    "discount": 26
  },
  {
    "id": 8,
    "title": "voluptate tempor et",
    "slug": "voluptate-tempor et",
    "image": "http://placehold.it/500x500&text=voluptate tempor et",
    "description": "Dolore sit dolore tempor veniam nostrud laborum quis elit. Exercitation ad ullamco proident cupidatat ipsum cillum ullamco ut eiusmod cupidatat tempor. Mollit sit deserunt ut anim incididunt culpa nostrud amet ex voluptate aliquip cupidatat. Commodo nisi enim id adipisicing enim irure eiusmod aliquip id elit ipsum do proident sunt. Adipisicing deserunt quis amet ex et mollit adipisicing. In duis labore sint aliqua quis qui aliquip magna magna.\r\n",
    "publishDate": "Tue Jul 31 1973 10:26:49 GMT-0400 (EDT)",
    "price": 11,
    "category": [
      1
    ],
    "isDiscounted": false,
    "isFeatured": false,
    "discount": null
  },
  {
    "id": 9,
    "title": "dolore qui proident",
    "slug": "dolore-qui proident",
    "image": "http://placehold.it/500x500&text=dolore qui proident",
    "description": "Duis mollit non ex incididunt eiusmod cupidatat id aute exercitation exercitation. Sint nulla cupidatat nulla et consequat anim duis ex labore enim. Cillum velit exercitation anim quis ex ad laborum fugiat et ex. Elit eiusmod quis Lorem voluptate quis anim velit laborum do est. Enim irure proident deserunt do Lorem culpa in mollit anim proident.\r\n",
    "publishDate": "Tue Oct 11 2005 10:00:50 GMT-0400 (EDT)",
    "price": 51,
    "category": [
      1
    ],
    "isDiscounted": true,
    "isFeatured": true,
    "discount": 27
  },
  {
    "id": 10,
    "title": "excepteur aliqua aute",
    "slug": "excepteur-aliqua aute",
    "image": "http://placehold.it/500x500&text=excepteur aliqua aute",
    "description": "Aute magna et sint Lorem duis aliquip duis Lorem. Non sunt aliquip dolore duis et dolore ex laboris. Occaecat elit enim enim enim fugiat laborum.\r\n",
    "publishDate": "Mon Dec 10 1979 01:19:55 GMT-0500 (EST)",
    "price": 39,
    "category": [
      1
    ],
    "isDiscounted": false,
    "isFeatured": false,
    "discount": null
  },
  {
    "id": 11,
    "title": "dolore officia aute",
    "slug": "dolore-officia aute",
    "image": "http://placehold.it/500x500&text=dolore officia aute",
    "description": "Quis consectetur ipsum dolore id esse consectetur labore amet. Nulla eiusmod dolore aliqua excepteur do duis. Veniam cillum veniam mollit adipisicing. Adipisicing veniam occaecat minim ad aute culpa. In amet esse veniam commodo consequat.\r\n",
    "publishDate": "Sun May 10 1998 14:01:13 GMT-0400 (EDT)",
    "price": 45,
    "category": [
      1
    ],
    "isDiscounted": false,
    "isFeatured": false,
    "discount": null
  },
  {
    "id": 12,
    "title": "aute excepteur et",
    "slug": "aute-excepteur et",
    "image": "http://placehold.it/500x500&text=aute excepteur et",
    "description": "Et reprehenderit nisi ad enim incididunt excepteur dolor est culpa do ipsum dolore enim labore. Aute dolor do dolore laboris exercitation do laborum sit reprehenderit Lorem eiusmod labore. Ullamco commodo consectetur anim occaecat anim fugiat aliqua veniam cillum nostrud pariatur duis.\r\n",
    "publishDate": "Wed Sep 21 1977 15:31:36 GMT-0400 (EDT)",
    "price": 76,
    "category": [
      1
    ],
    "isDiscounted": false,
    "isFeatured": false,
    "discount": null
  }
];

export var firstPageProducts = products.slice(0, 6);
export var secondPageProducts = products.slice(6);
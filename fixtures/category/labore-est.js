import {successful} from '../helpers';
import {firstPageProducts, secondPageProducts} from '../products';

export default function(request, params) {
  var payload = {};

  payload.category = category;
  payload.products = (params.page === 2) ? secondPageProducts : firstPageProducts;
  payload.meta = {
    page: params.page || 1,
    pages: 2,
    perPage: 6,
    total: 12
  };

  return successful(payload);
}

export var category = {
  "id": 0,
  "name": "labore est",
  "slug": "labore-est",
  "description": "Reprehenderit non nostrud Lorem ex cupidatat. Irure sit ullamco laboris sit velit Lorem reprehenderit eu irure aliquip. Esse aute excepteur enim incididunt dolor magna elit. Irure amet et reprehenderit sit do veniam.\r\n",
  "image": "http://placehold.it/500x500&text=labore est",
  "products": [ 1, 2, 3, 4, 5, 6 ]
};
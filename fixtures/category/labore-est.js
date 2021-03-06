import {success} from '../helpers';
import {firstPageProducts, secondPageProducts} from '../products';

export var category = {
  "id": 1,
  "name": "labore est",
  "slug": "labore-est",
  "description": "Reprehenderit non nostrud Lorem ex cupidatat. Irure sit ullamco laboris sit velit Lorem reprehenderit eu irure aliquip. Esse aute excepteur enim incididunt dolor magna elit. Irure amet et reprehenderit sit do veniam.\r\n",
  "image": "http://placehold.it/500x500&text=labore est",
  "products": []
};

export default function(params) {
  var payload = {};

  payload.category = category;
  payload.products = (params.page === 2) ? secondPageProducts : firstPageProducts;
  payload.meta = {
    page: params.page || 1,
    pages: 2,
    perPage: 6,
    total: 12
  };

  return success(payload);
}


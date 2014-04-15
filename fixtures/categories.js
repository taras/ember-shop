import {category} from './category/labore-est';
import {firstPageProducts, secondPageProducts} from './products';
import {success, error} from './helpers';

export default function(params) {
  var payload = {};
  if (params.category_slug) {
    if ( params.category_slug === 'labore-est' ) {
      payload.categories = [ category ];
      payload.products = (params.page === 2) ? secondPageProducts : firstPageProducts;
      category.products = payload.products.mapBy('id');
      payload.meta = {
        page: params.page || 1,
        total: 12,
        pages: 2,
        perPage: 6
      }
    } else {
      return error(404, 'Not Found');
    }
  } else {
    payload.categories = [category];
  }

  return success(payload);
}
These fixtures were built with http://www.json-generator.com using the following script

```javascript
{
  category: {
      id: '{{index()}}',
      name: '{{lorem(2, "words")}}',
      slug: function(tags, index) {
          return this.name.replace(' ', '-');
      },
      description: '{{lorem(1, "paragraphs")}}',
      image: 'http://placehold.it/500x500&text=',
      products: []
  },
  products: [
  '{{repeat(12, 12)}}',
  {
      id: '{{index()}}',
      title: '{{lorem(3, "words")}}',
      slug: function(tags, index) {
          return this.title.replace(' ', '-');
      },
      image: 'http://placehold.it/500x500&text=',
      description: '{{lorem(1, "paragraphs")}}',
      publishDate: '{{date()}}',
      price: '{{numeric(1, 100, "0.00")}}',
      category: [0],
      isDiscounted: '{{bool()}}',
      isFeatured: '{{bool()}}',
      discount: function(tags, index) {
          return (this.isDiscounted) ? tags.numeric(10, 30) : null;
      }
  }
],
  meta: {
      page: 1,
      perPage: 6,
      pages: 2
  }
}
```
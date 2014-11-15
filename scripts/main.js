var collection = Backbone.Collection.extend({
  model:model,
  url: '..api/posts.json'
});

var list = new collection();

list.fetch();


var Item = Backbone.Model.extend({});

var collection = Backbone.Collection.extend({
  model: Item,
  url: 'api/posts.json'
});

var list = new collection();

var itemView = Backbone.View.extend({
  template: _.template('<p><%= title %></p>'),


  render: function(){
    this.$el.html(this.template(this.model));
    return this;
  }
});


var collectionView = Backbone.View.extend({
  render: function(){
    this.collection.forEach(this.addOne, this);
    return this;
  },
  addOne: function(model){
    var itemView = new ItemView({model: model});
    itemView.render()
    this.$el.append(itemView.el);
  }
});

list.fetch();

$('#app').html(collectionView.render().el);

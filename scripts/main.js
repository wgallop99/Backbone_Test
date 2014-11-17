
var Item = Backbone.Model.extend({


})

var newsCollection = Backbone.Collection.extend({
  initialize: function () {
        console.log('initiliazed collection')
  },

  parse: function(response){
    return response.posts;
  },

  model: Item,
  url: 'api/posts.json'
});

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

var finalListView = new collectionView({collection: newsCollection});

// var list = new collectionView();

$('#app').html(finalListView.render().el);

// finalListView.fetch();

// $('#app').html(collectionView.render().el);

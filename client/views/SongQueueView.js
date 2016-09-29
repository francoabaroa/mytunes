// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: 'table',

  initialize: function() {
    // this.render();
    // this.collection.on('play', this.render, this);
    this.collection.on('add remove', this.render, this);
    console.log(this.collection);
    this.render();
      
    // this.collection.on('change', function(event) {
    //   console.log('RENDER!!!!');
    //   this.render();
    // }, this);
  },


  render: function() {
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();
    // console.log(this.collection, 'songqVIEW');
    // debugger;
    console.log(this.collection, 'line 29');
    return this.$el.html('<th>Song Queue</th>').append(
      //this.collection.models
      this.collection.map(function(song) {
        // console.log(song, 'line 27');
        return new SongQueueEntryView({model: song}).render();
      })
    );
    
    //console.log(this.$el.html);
    //return this.$el.html;
  }

});

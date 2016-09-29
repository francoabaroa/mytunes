// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  initialize: function() {
    console.log('song model');
  },
  //WHAT DOES THIS REFER TO?
  play: function() {
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
    console.log('play');
  },
  enqueue: function () {
    this.trigger('enqueue', this);
    console.log('test');
  },
  dequeue: function () {
    this.trigger('dequeue', this);
  },
  ended: function () {
    this.trigger('ended', this);

  } 
});

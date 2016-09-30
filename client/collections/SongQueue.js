// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function(songData) {    
      //THE ADD HANDLER HAS NOT BEEN ADDED YET SO IT DOESNT RUN PLAYFIRST WHEN ADD IS CALLED IN THE INITIALIZER
    this.on('add', this.enqueue, this);
    this.on('dequeue', this.dequeue, this);
    this.on('ended', this.playNext, this);
  },

  enqueue: function(song) {
    console.log(this);
    if (this.length === 1) {
      this.playFirst();
    }
  },

  dequeue: function(song) {
    if (this.at(0) === song) {
      this.playNext();
    } else {
      this.remove(song);
    }
  },

  playNext: function() {
    this.shift();
    if (this.length >= 1) {
      this.playFirst();
    } else {
      this.trigger('stop');
    }
  }, 

  playFirst: function() {
    this.at(0).play();
  }
});
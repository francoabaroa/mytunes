// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function(songData) {
    if (songData) {
      this.add(songData);      
    }

      //THE ADD HANDLER HAS NOT BEEN ADDED YET SO IT DOESNT RUN PLAYFIRST WHEN ADD IS CALLED IN THE INITIALIZER
    this.on('add', function() {
      if (this.models.length === 1) {
        this.playFirst();
      }
    }, this);

    this.on('dequeue', function() {
      this.shift();
    });

    this.on('ended', function() {
      this.shift(); 
      if (this.models.length > 0) {
        this.playFirst();
      }
    });
  },

  playFirst: function() {
    this.models[0].play();
  }


});
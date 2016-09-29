// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function(songData) {    
      //THE ADD HANDLER HAS NOT BEEN ADDED YET SO IT DOESNT RUN PLAYFIRST WHEN ADD IS CALLED IN THE INITIALIZER
    this.on('add', this.enqueue, this);
    this.on('dequeue', this.dequeue, this);
    this.on('ended', this.playNext, this);

    // this.on('add', function() {
    //   console.log('maybe?????', this);
    //   if (this.models.length === 1) {
    //     this.playFirst();
    //   }

    // }, this);

    // this.on('enqueue', function (e) {
    //   console.log('testing enqueue');
    //   this.add(e);
    // }, this);

    // this.on('dequeue', function() {
    //   this.shift();
    // });

    // this.on('ended', function() {
    //   this.shift(); 
    //   if (this.models.length > 0) {
    //     this.playFirst();
    //   }
    // });
  },

  enqueue: function() {
    if (this.length === 1) {
      this.playFirst();
    }
  },


  playFirst: function() {
    this.at(0).play();
  }


});
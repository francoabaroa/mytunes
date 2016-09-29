// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!
  initialize: function () {
    var queue = new SongQueueView(this.get('songQueue'));
    this.on('enqueue', function () {
      this.render();
    });
  },

  render: function() {
    this.trigger('render', this);
    console.log('trigger');
    // var html = [
    //   '<ul>',
    //   '</ul>',
    // ].join('');

    // this.$el.html(html);

    this.$el.find('tbody').append(this.collection.map(function (song) {
      return '<tr> <td>' + song.get('title') + '</td> </tr>';
    }));

    return this.$el;
  }
});

// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  url: 'https://api.parse.com/1/classes/songs/',
  parse: function (data) {
    this.trigger('done', this);
    return data.results;
  },
  initialize: function () {
    this.fetch({
      data: { limit: 20}
    });
  },
  model: SongModel

});
var attr = Ember.attr;

App.Embercast = Ember.Model.extend({
  id: attr(),
  title: attr(),
  description: attr(),
  youtube_id: attr(),
  mp4_url: attr(),
  webm_url: attr(),
  source_url: attr(),
  date: attr(),
  time: attr(),
  keywords: attr(),

  poster: function() {
    if (this.get('mp4_url')) {
      return '/assets/poster.png';
    } else {
      return '/assets/poster-coming-soon.png';
    }
  }.property('mp4_url')
});

App.Embercast.adapter = Ember.Adapter.create({
  find: function(record, id) {
    var data = EMBERCAST_DATA.embercasts,
        recordData = data.findProperty('id', id);

    record.load(id, recordData);
  },

  findAll: function(klass, records) {
    records.load(klass, EMBERCAST_DATA);
  }
});

var EMBERCAST_DATA = [
  {
    "id" : 1,
    "mp4_url" : "http://video1.embercasts.com/ember-model-final.mp4",
    "webm_url" : "http://video1.embercasts.com/ember-model-final.webm",
    "youtube_id" : "FtcsS8GvRPQ",
    "description" : "In this Embercast we cover getting started with [Ember Model](https://github.com/ebryn/ember-model) and the Ember starter kit.",
    "title" : "Getting started with Ember Model",
    "source_url" : "https://github.com/embercasts/getting-started-with-ember-model",
    "date" : "12 MAY 13",
    "keywords" : ['ember-model', 'beginner', 'models'],
    "time" : "5:08"
  }, {
    "id": 2,
    "mp4_url" : "http://video1.embercasts.com/emblem-final-high.mp4",
    "webm_url" : "http://video1.embercasts.com/emblem-final-high.webm",
    "youtube_id" : "h1M4zUXtrNk",
    "description" : "[Emblem.js](http://www.emblemjs.com) is an indentation-based templating language that compiles to the same format as Handlebars templates, and is therefore fully compatible with Ember.js. This Embercast goes over the basics of Emblem syntax and how to start writing Emblem.js templates for your Ember apps.",
    "title" : "Getting started with Emblem.js",
    "source_url" : "https://github.com/embercasts/emblem",
    "date" : "12 MAY 13",
    "keywords" : ['templates', 'emblem.js', 'beginner'],
    "time" : "3:32"
  }, {
    "id": 3,
    "mp4_url" : "http://video1.embercasts.com/autocomplete-draft-high.mp4",
    "webm_url" : "http://video1.embercasts.com/autocomplete-draft-high.webm",
    "youtube_id" : "Bkwh1bNwuQ8",
    "description" : "In the first part of this series, we show how easy it is to build the foundations of an autocomplete widget with Ember.js.",
    "title" : "Building an autocomplete widget - part one",
    "source_url" : "https://github.com/embercasts/building-an-autocomplete-widget",
    "date" : "12 MAY 13",
    "keywords" : ['autocomplete', 'beginner'],
    "time" : "5:20"
  }, {
    "id": 4,
    "mp4_url" : "http://video1.embercasts.com/authentication-part1-high.mp4",
    "webm_url" : "http://video1.embercasts.com/authentication-part1-high.webm",
    "description" : "This two-part series on client-side authentication focuses on how you can configure your single-page Ember app to query data from the server using token-based authentication. This first part focuses on basic app setup/organization, and how to build a username / password form to retrieve the token from the server.\n\nPart 2 will demonstrate how to use this token to perform queries in conjunction with Ember Model, as well as how to hack into the Ember Router to make it possible to recall and retry previously attempted transitions.",
    "title" : "Client-side Authentication, Part One",
    "source_url" : "https://github.com/embercasts/authentication-part-1",
    "date" : "12 MAY 13",
    "keywords" : ['authentication', 'router', 'intermediate'],
    "time" : "7:54"
  }
];
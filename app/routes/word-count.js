import Ember from 'ember';
import RSVP from 'rsvp';


export default Ember.Route.extend({
  model(params) {
    var url = 'https://wordcount-stage-artadys.herokuapp.com/nltk?url='+params.count_id ;
    return RSVP.hash({
      urldata: ([{'url':params.count_id}]),
      data: Ember.$.getJSON(url)
    });
  }
});

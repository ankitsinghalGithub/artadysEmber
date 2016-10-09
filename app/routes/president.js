import Ember from 'ember';

let president = [{
  name: 'François Hollande',
  title: 'President of France',
  image: 'https://pbs.twimg.com/profile_images/611226960430301184/JZYa8grs.jpg',
  Description: 'https://en.wikipedia.org/wiki/Fran%C3%A7ois_Hollande',
  url:'https://en.wikipedia.org/wiki/Fran%C3%A7ois_Hollande'
}, {
  name: 'Pranab Mukherje',
  title: 'President of India',
  image: 'http://www.india4news.in/wp-content/uploads/2016/04/Secretary_Tim_Geithner_and_Finance_Minister_Pranab_Mukherjee_2010_crop-300x300.jpg',
  Description: 'https://en.wikipedia.org/wiki/Pranab_Mukherjee',
  url:'https://en.wikipedia.org/wiki/Pranab_Mukherjee'
}, {
  name: 'Barack Obama',
  title: 'President of the United States',
  image: 'http://a5.files.biography.com/image/upload/c_fill,cs_srgb,dpr_1.0,g_face,h_300,q_80,w_300/MTE4MDAzNDEwNzg5ODI4MTEw.jpg',
  Description: 'https://en.wikipedia.org/wiki/Barack_Obama',
  url:'https://en.wikipedia.org/wiki/Barack_Obama'
}];

export default Ember.Route.extend({
  model() {
    return president;
  }
});

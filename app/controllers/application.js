import Controller from '@ember/controller';

export default Controller.extend({
  init() {
    this.handlePermission();
  },

  handlePermission() {
    navigator.permissions.query({name:'geolocation'}).then(function(result) {
      if (result.state == 'granted') {
        //this.report(result.state);
        //geoBtn.style.display = 'none';
      } else if (result.state == 'prompt') {
        //this.report(result.state);
        //geoBtn.style.display = 'none';
        navigator.geolocation.getCurrentPosition(revealPosition,positionDenied,geoSettings);
      } else if (result.state == 'denied') {
        //report(result.state);
        //geoBtn.style.display = 'inline';
      }
      result.onchange = function() {
        //this.report(result.state);
      }
    });
  },

  report(state) {
    console.log('Permission ' + state);
  },

  revealPosition(position) {
    console.log('reveal');
  },

  positionDenied() {
    console.log('denied');
  }



});

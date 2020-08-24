import Controller from '@ember/controller';
import fetch from 'fetch';

export default Controller.extend({
  init() {
    this._super(...arguments);
    this.handlePermission();
  },

  handlePermission() {
    let self = this;
    let geoSettings = {
      enableHighAccuracy: false,
      maximumAge        : 30000,
      timeout           : 20000
    };
    navigator.permissions.query({name:'geolocation'}).then(function(result) {
      if (result.state == 'granted') {
        self.report(result.state);
        self.set('styleProperty', 'display: none;');
      //  geoBtn.style.display = 'none';
      } else if (result.state == 'prompt') {
        self.report(result.state);
        self.set('styleProperty', 'display: none;');
      //  geoBtn.style.display = 'none';
      if (!"geolocation" in navigator) {
        alert("No geolocation available!");
      }
        navigator.geolocation.getCurrentPosition(self.revealPosition,self.positionDenied,geoSettings);
      } else if (result.state == 'denied') {
        self.report(result.state);
        self.set('styleProperty', 'display: inline;');
        //geoBtn.style.display = 'inline';
      }
      result.onchange = function() {
        self.report(result.state);
      }
    });
  },

  report(state) {
    console.log('Permission ' + state);
  },

  revealPosition(position) {
    var latlng = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=6646b15234278a594d6d6cb6d7540a05`).then(function(response) {
      return response.json();
    });
  },

  positionDenied() {
    console.log('denied');
  },

  getdata(json) {
    this.set('data', 'json._result');
  }

});

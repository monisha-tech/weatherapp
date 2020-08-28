import Controller from '@ember/controller';
import fetch from 'fetch';
import { OPEN_WEATHER_CONSTANTS } from '../constants/OPEN_WEATHER_CONSTANTS';

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
        navigator.geolocation.getCurrentPosition(self.revealPosition.bind(self),self.positionDenied,geoSettings);
      } else if (result.state == 'prompt') {
        self.report(result.state);
      if (!("geolocation" in navigator)) {
        alert("No geolocation available!");
      }
        navigator.geolocation.getCurrentPosition(self.revealPosition.bind(self),self.positionDenied,geoSettings);
      } else if (result.state == 'denied') {
        self.report(result.state);
      }
      result.onchange = function() {
        self.report(result.state);
      }
    });
  },

  async revealPosition(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    var response = await fetch(`${OPEN_WEATHER_CONSTANTS.BASE_URL}?lat=${latitude}&lon=${longitude}&appid=${OPEN_WEATHER_CONSTANTS.API_KEY}`);
    var json = await response.json();
    this.set('data', json);
  },

  positionDenied() {
    // Need to handle permission denied
  },

  getdata(json) {
    this.set('data', json._result);
  }

});

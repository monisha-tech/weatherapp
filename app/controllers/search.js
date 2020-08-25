import Controller from '@ember/controller';
import fetch from 'fetch';
import { OPEN_WEATHER_CONSTANTS } from '../constants/OPEN_WEATHER_CONSTANTS';

// TODO: Need to fix Assertion error on calling this.set

export default Controller.extend({
  init() {
    this._super(...arguments);
    this.set('status', 'empty');
  },
  async search(event) {
    try {
      var value = event.currentTarget.value;
      // Checking for empty string
      if (value.length === 0) {
        this.set('status', 'empty');
        return;
      }
      this.set('status', 'pending');
      var response = await fetch(`${OPEN_WEATHER_CONSTANTS.BASE_URL}?q=${value}&appid=${OPEN_WEATHER_CONSTANTS.API_KEY}`);
      var json = await response.json();
      this.set('data', json);
    } catch (e) {
      this.set('status', 'rejected');
    } finally {
      this.set('status', 'resolved');
    }
  },
});
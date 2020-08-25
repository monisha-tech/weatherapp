import Controller from '@ember/controller';
import fetch from 'fetch';
import { action } from '@ember/object';
import { OPEN_WEATHER_CONSTANTS } from '../constants/OPEN_WEATHER_CONSTANTS';

export default Controller.extend({
  init() {
    this._super(...arguments);
    this.set('status', 'empty');
  },
  @action
  async search(event) {
    if (event.currentTarget.value.length === 0) {
      this.set('status', 'empty');
      return;
    }
    try {
      var value = event.currentTarget.value;
      console.log(event.currentTarget.value);
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
  @action
  handleInput(event) {
    if (event.currentTarget.value === "") {
      this.set('status', 'empty');
    }
  }
});
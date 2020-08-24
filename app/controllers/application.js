import Controller from '@ember/controller';
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
    var markerTitle = "You are here";

    var latlng = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
    var myOptions = {
      zoom: 16,
      center: latlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(mapCanvas, myOptions);

    var marker = new google.maps.Marker({
      position: latlng,
      map: map,
      title: markerTitle
    });
  },

  positionDenied() {
    console.log('denied');
  }



});

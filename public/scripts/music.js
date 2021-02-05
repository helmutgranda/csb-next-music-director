function whenAvailable(name, callback) {
  var intervalId = window.setInterval(function() {
      if (window[name]) {
          window.clearInterval(intervalId);
          callback(window[name]);
      }
  }, 10);
}

whenAvailable("WebAudioFontPlayer", function(t) {
// here if needed
});

var AudioContextFunc = window.AudioContext || window.webkitAudioContext;
var audioContext = new AudioContextFunc();
var player = new WebAudioFontPlayer();
player.loader.decodeAfterLoading(audioContext, '_tone_0730_FluidR3_GM_sf2_file');
window.p = new Object(null);
window.p.audioContext = audioContext;
window.p.player = player;
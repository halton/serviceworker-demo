function debug(s) {
  dump("\n\nNSM service.js: " + s + "\n\n");
}

debug("Started");

addEventListener("alarm", function(e) {
  debug("GOT ALARM " + e.data);
}, false);

addEventListener("install", function(e) {
  debug("INSTALLEDDDD");
});

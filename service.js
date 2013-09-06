function debug(s) {
  dump("NSM service.js: " + s + "\n");
}

debug("Started");

addEventListener("alarm", function(e) {
  debug("GOT ALARM");
}, false);


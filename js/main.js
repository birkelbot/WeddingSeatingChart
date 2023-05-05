function set100vhVar() {
  // If less than most tablets, set CSS var to window height.
  let value = "100vh"

  // If window size is iPad or smaller, then use JS to set screen height.
  if (window.innerWidth && window.innerWidth <= 1024) {
    value = `${window.innerHeight}px`
  }
  document.documentElement.style.setProperty("--real100vh", value)
}


window.onload = (event) => {
  set100vhVar();
};

window.onresize = function() {
  set100vhVar();
}

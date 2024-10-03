//import "../content-elements/content/JsonConverter/custom";

function sendHeightToParent() {
  const height = document.body.scrollHeight;
  window.parent.postMessage({ height }, "*");
}

window.addEventListener("load", sendHeightToParent);
window.addEventListener("resize", sendHeightToParent);

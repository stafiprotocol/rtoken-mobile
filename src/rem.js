(function (doc, win) {
  var docEl = doc.documentElement,
    resizeEvt =
      "onorientationchange" in window ? "onorientationchange" : "resize",
    recalc = function () {
      var clientWidth = docEl.clientWidth;
      if (!clientWidth) return;
      if (clientWidth >= 1124) {
        docEl.style.fontSize = "100px";
      } else {
        docEl.style.fontSize = 100 * (clientWidth / 1124) + "px";
      }
    };

  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener("DOMContentLoaded", recalc, false);
})(document, window);

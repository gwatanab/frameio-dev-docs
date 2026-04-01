(function () {
  var base = "https://gwatanab.github.io/frameio-dev-docs/css/";
  var sheets = ["md-styles.css", "mdx-styles.css"];
  var ts = Date.now();

  sheets.forEach(function (name) {
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = base + name + "?t=" + ts;
    document.head.appendChild(link);
  });
})();

(function () {
  var tabs = document.querySelectorAll(".filter-tab");
  var items = document.querySelectorAll(".gallery-item");
  var emptyMsg = document.querySelector(".gallery-empty");

  if (!tabs.length || !items.length) return;

  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      var category = tab.getAttribute("data-filter");

      tabs.forEach(function (t) {
        t.classList.remove("is-active");
        t.setAttribute("aria-selected", "false");
      });
      tab.classList.add("is-active");
      tab.setAttribute("aria-selected", "true");

      var visibleCount = 0;
      items.forEach(function (item) {
        var match = category === "all" || item.getAttribute("data-category") === category;
        item.hidden = !match;
        if (match) visibleCount++;
      });

      if (emptyMsg) emptyMsg.hidden = visibleCount !== 0;
    });
  });
})();

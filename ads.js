(function () {
  "use strict";
  /* ------------------------------------------------------------------
     ADS SWITCH. Leave CLIENT empty until Google AdSense approves the site.
     After approval, fill the two values below. Nothing else needs editing.
       CLIENT : your publisher ID, looks like  ca-pub-1234567890123456
       SLOTS  : ad unit IDs (numbers) from AdSense > Ads > By ad unit
                inline = below the result (all screens)
                side   = right column (desktop only)
     ------------------------------------------------------------------ */
  var CLIENT = "";
  var SLOTS = { inline: "", side: "" };

  if (!/^ca-pub-\d{10,20}$/.test(CLIENT)) return;
  document.addEventListener("DOMContentLoaded", function () {
    var wide = window.matchMedia("(min-width:1024px)").matches;
    var used = 0;
    Array.prototype.forEach.call(document.querySelectorAll("[data-ad]"), function (box) {
      var k = box.getAttribute("data-ad"), slot = SLOTS[k];
      if (!slot || !/^\d{5,20}$/.test(slot)) return;
      if (k === "side" && !wide) return;
      var label = document.createElement("span");
      label.className = "adl"; label.setAttribute("data-i18n", "ad_label");
      var ins = document.createElement("ins");
      ins.className = "adsbygoogle"; ins.style.display = "block";
      ins.setAttribute("data-ad-client", CLIENT);
      ins.setAttribute("data-ad-slot", slot);
      ins.setAttribute("data-ad-format", "auto");
      ins.setAttribute("data-full-width-responsive", "true");
      box.appendChild(label); box.appendChild(ins); box.hidden = false;
      used++;
    });
    if (!used) return;
    if (window.applyI18n) applyI18n();
    var s = document.createElement("script");
    s.async = true; s.crossOrigin = "anonymous";
    s.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=" + CLIENT;
    s.onload = function () {
      Array.prototype.forEach.call(document.querySelectorAll("ins.adsbygoogle"), function () {
        try { (window.adsbygoogle = window.adsbygoogle || []).push({}); } catch (e) {}
      });
    };
    document.head.appendChild(s);
  });
})();

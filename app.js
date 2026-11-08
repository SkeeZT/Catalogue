(function () {
  "use strict";

  var CONFIG = window.CATALOGUE_CONFIG || {};
  var PRODUCTS = window.PRODUCTS || [];
  var BRANDS = window.BRANDS || [];
  var PLACEHOLDER = "images/placeholder.svg";
  var STORE_KEY = "catalogue-cart-v1";

  var $ = function (id) { return document.getElementById(id); };
  var byId = {};
  PRODUCTS.forEach(function (p) { byId[p.id] = p; });

  /* ---------- helpers ---------- */
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function joinList(list) {
    if (list.length <= 1) return list.join("");
    return list.slice(0, -1).join(", ") + " and " + list[list.length - 1];
  }
  function availability(p) {
    var c = p.colorways || [];
    if (!c.length) return "";
    if (c.length > 5) return "available in " + c.length + " colorways";
    return "available in " + joinList(c);
  }
  function imageFor(p, color) {
    if (color && p.images && p.images[color]) return p.images[color];
    return p.image || PLACEHOLDER;
  }
  function toast(msg) {
    var t = document.createElement("div");
    t.className = "toast";
    t.setAttribute("role", "status");
    t.textContent = msg;
    document.body.appendChild(t);
    setTimeout(function () { t.remove(); }, 1800);
  }

  /* ---------- cart state (saved in this browser) ---------- */
  var cart = [];
  try { cart = JSON.parse(localStorage.getItem(STORE_KEY)) || []; } catch (e) { cart = []; }
  cart = cart.filter(function (l) { return byId[l.id]; });

  function save() {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(cart)); } catch (e) { /* storage unavailable */ }
    renderCart();
    renderBadges();
  }
  function keyOf(l) { return [l.id, l.color || "", l.size || ""].join("|"); }
  function addLine(id, color, size, qty) {
    var k = keyOf({ id: id, color: color, size: size });
    var hit = cart.find(function (l) { return keyOf(l) === k; });
    if (hit) hit.qty += qty; else cart.push({ id: id, color: color, size: size, qty: qty });
    save();
  }
  function totalPieces() { return cart.reduce(function (n, l) { return n + l.qty; }, 0); }

  /* ---------- header + filters ---------- */
  if (CONFIG.title) { $("siteTitle").textContent = CONFIG.title; }
  if (CONFIG.season) { $("season").textContent = CONFIG.season; }
  // "Send request" emails the cart; only shown when an address is configured.
  $("cartRequest").hidden = !CONFIG.requestEmail;

  var activeBrand = "All";
  function renderFilters() {
    $("filters").innerHTML = ["All"].concat(BRANDS).map(function (b) {
      return '<button type="button" data-brand="' + esc(b) + '" aria-pressed="' + (b === activeBrand) + '">' + esc(b) + "</button>";
    }).join("");
  }
  $("filters").addEventListener("click", function (e) {
    var b = e.target.closest("[data-brand]");
    if (!b) return;
    activeBrand = b.getAttribute("data-brand");
    renderFilters();
    renderGrid();
  });

  /* ---------- grid ---------- */
  function renderGrid() {
    var list = PRODUCTS.filter(function (p) { return activeBrand === "All" || p.brand === activeBrand; });
    $("grid").innerHTML = list.map(function (p) {
      return (
        '<article class="cell" tabindex="0" data-id="' + esc(p.id) + '" aria-label="' + esc(p.name) + ", " + esc(p.brand) + '">' +
          '<span class="tiny cell__brand">' + esc(p.brand) + "</span>" +
          '<span class="tiny cell__added" data-badge="' + esc(p.id) + '"></span>' +
          '<div class="cell__media"><img loading="lazy" src="' + esc(imageFor(p)) + '" alt="' + esc(p.name) + ' worn by model"></div>' +
          '<div class="cell__text">' +
            '<h3 class="name">' + esc(p.name) + "</h3>" +
            '<p class="tiny">' + esc(availability(p)) + "</p>" +
            '<span class="cell__add">+ Add to cart</span>' +
          "</div>" +
        "</article>"
      );
    }).join("");
    renderBadges();
  }
  function renderBadges() {
    var counts = {};
    cart.forEach(function (l) { counts[l.id] = (counts[l.id] || 0) + l.qty; });
    document.querySelectorAll("[data-badge]").forEach(function (el) {
      var n = counts[el.getAttribute("data-badge")];
      el.textContent = n ? "In cart (" + n + ")" : "";
    });
    $("cartCount").textContent = totalPieces();
  }
  $("grid").addEventListener("click", function (e) {
    var c = e.target.closest(".cell");
    if (c) openSheet(c.getAttribute("data-id"));
  });
  $("grid").addEventListener("keydown", function (e) {
    if ((e.key === "Enter" || e.key === " ") && e.target.classList.contains("cell")) {
      e.preventDefault();
      openSheet(e.target.getAttribute("data-id"));
    }
  });

  /* ---------- product sheet ---------- */
  var sel = { id: null, color: null, size: null, qty: 1 };
  var lastFocus = null;

  function chips(container, values, current, attr) {
    container.innerHTML = values.map(function (v) {
      return '<button type="button" class="chip" data-' + attr + '="' + esc(v) + '" aria-pressed="' + (v === current) + '">' + esc(v) + "</button>";
    }).join("");
  }
  function refreshSheet() {
    var p = byId[sel.id];
    chips($("sheetColors"), p.colorways || [], sel.color, "color");
    chips($("sheetSizes"), p.sizes || [], sel.size, "size");
    $("sheetImg").src = imageFor(p, sel.color);
    $("qtyVal").textContent = sel.qty;
    var needSize = (p.sizes || []).length && !sel.size;
    $("sheetAdd").disabled = !!needSize;
    $("sheetHint").textContent = needSize ? "Select a size" : "";
  }
  function openSheet(id) {
    var p = byId[id];
    if (!p) return;
    lastFocus = document.activeElement;
    sel = {
      id: id,
      color: (p.colorways || [])[0] || null,
      size: (p.sizes || []).length === 1 ? p.sizes[0] : null,
      qty: 1,
    };
    $("sheetBrand").textContent = p.brand;
    $("sheetName").textContent = p.name;
    $("sheetAvail").textContent = availability(p);
    $("sheetImg").alt = p.name + " worn by model";
    $("colorOpt").hidden = !(p.colorways || []).length;
    $("sizeOpt").hidden = !(p.sizes || []).length;
    refreshSheet();
    $("sheet").hidden = false;
    document.body.style.overflow = "hidden";
    $("sheet").querySelector(".x").focus();
  }
  function closeSheet() {
    $("sheet").hidden = true;
    document.body.style.overflow = "";
    if (lastFocus) lastFocus.focus();
  }
  $("sheet").addEventListener("click", function (e) {
    if (e.target.closest("[data-close]")) return closeSheet();
    var c = e.target.closest("[data-color]");
    if (c) { sel.color = c.getAttribute("data-color"); return refreshSheet(); }
    var s = e.target.closest("[data-size]");
    if (s) { sel.size = s.getAttribute("data-size"); return refreshSheet(); }
  });
  $("qtyMinus").addEventListener("click", function () { sel.qty = Math.max(1, sel.qty - 1); refreshSheet(); });
  $("qtyPlus").addEventListener("click", function () { sel.qty = Math.min(999, sel.qty + 1); refreshSheet(); });
  $("sheetAdd").addEventListener("click", function () {
    addLine(sel.id, sel.color, sel.size, sel.qty);
    closeSheet();
    toast("Added — " + byId[sel.id].name);
  });

  /* ---------- cart drawer ---------- */
  function lineText(l) {
    var p = byId[l.id];
    return [p.brand + " — " + p.name, l.color, l.size && "Size " + l.size, "Qty " + l.qty].filter(Boolean).join(" · ");
  }
  function renderCart() {
    var empty = !cart.length;
    $("cartEmpty").hidden = !empty;
    $("cartFoot").hidden = empty;
    $("cartTotal").textContent = totalPieces();
    $("cartText").hidden = true;
    $("cartLines").innerHTML = cart.map(function (l, i) {
      var p = byId[l.id];
      var meta = [l.color, l.size && "Size " + l.size].filter(Boolean).join(" · ");
      return (
        '<li class="line" data-i="' + i + '">' +
          '<img src="' + esc(imageFor(p, l.color)) + '" alt="">' +
          "<div>" +
            '<p class="tiny meta">' + esc(p.brand) + "</p>" +
            '<p class="name">' + esc(p.name) + "</p>" +
            '<p class="tiny meta">' + esc(meta) + "</p>" +
          "</div>" +
          '<div class="line__side">' +
            '<div class="qty"><button type="button" data-dec aria-label="Decrease">−</button><span>' + l.qty + '</span><button type="button" data-inc aria-label="Increase">+</button></div>' +
            '<button type="button" class="link tiny" data-remove>Remove</button>' +
          "</div>" +
        "</li>"
      );
    }).join("");
  }
  $("cartLines").addEventListener("click", function (e) {
    var li = e.target.closest(".line");
    if (!li) return;
    var i = +li.getAttribute("data-i");
    if (e.target.closest("[data-inc]")) cart[i].qty = Math.min(999, cart[i].qty + 1);
    else if (e.target.closest("[data-dec]")) { cart[i].qty -= 1; if (cart[i].qty < 1) cart.splice(i, 1); }
    else if (e.target.closest("[data-remove]")) cart.splice(i, 1);
    else return;
    save();
  });

  function openCart() { lastFocus = document.activeElement; $("drawer").hidden = false; document.body.style.overflow = "hidden"; $("drawer").querySelector(".x").focus(); }
  function closeCart() { $("drawer").hidden = true; document.body.style.overflow = ""; if (lastFocus) lastFocus.focus(); }
  $("cartOpen").addEventListener("click", openCart);
  $("drawer").addEventListener("click", function (e) { if (e.target.closest("[data-close-cart]")) closeCart(); });

  function cartSummary() {
    return (CONFIG.title || "Catalogue") + " — cart request\n\n" + cart.map(lineText).join("\n") + "\n\nTotal pieces: " + totalPieces();
  }
  function showListText(text) {
    var box = $("cartText");
    box.value = text;
    box.hidden = false;
    box.focus();
    box.select();
    toast("Select all and copy the list");
  }
  $("cartCopy").addEventListener("click", function () {
    var text = cartSummary();
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function () { toast("Cart copied"); }, function () { showListText(text); });
    } else { showListText(text); }
  });
  $("cartRequest").addEventListener("click", function () {
    var subject = encodeURIComponent((CONFIG.title || "Catalogue") + " — cart request");
    var body = encodeURIComponent(cartSummary());
    window.location.href = "mailto:" + (CONFIG.requestEmail || "") + "?subject=" + subject + "&body=" + body;
  });
  var clearArmed = false;
  $("cartClear").addEventListener("click", function () {
    var btn = $("cartClear");
    if (!clearArmed) {
      clearArmed = true;
      btn.textContent = "Tap again to clear";
      setTimeout(function () { clearArmed = false; btn.textContent = "Clear cart"; }, 3000);
      return;
    }
    clearArmed = false;
    btn.textContent = "Clear cart";
    cart = [];
    save();
  });

  document.addEventListener("keydown", function (e) {
    if (e.key !== "Escape") return;
    if (!$("sheet").hidden) closeSheet();
    else if (!$("drawer").hidden) closeCart();
  });

  /* ---------- go ---------- */
  renderFilters();
  renderGrid();
  renderCart();
})();

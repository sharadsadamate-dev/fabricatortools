(function () {
  "use strict";
  // [English, Marathi, Hindi]
  var S = {
    tagline: ["Free calculators for mistri, fabricators & handymen", "मिस्त्री, फॅब्रिकेटर आणि कारागिरांसाठी मोफत कॅल्क्युलेटर", "मिस्त्री, फैब्रिकेटर और कारीगरों के लिए मुफ़्त कैलकुलेटर"],
    free_line: ["Free. No sign-up. Works on your phone.", "मोफत. साईन-अप नाही. मोबाईलवर चालते.", "मुफ़्त। साइन-अप नहीं। मोबाइल पर चलता है।"],
    disclaimer: ["Results are estimates. Always double-check measurements before cutting or ordering.", "उत्तरे अंदाजे आहेत. कापण्यापूर्वी किंवा ऑर्डर देण्यापूर्वी मोजमाप पुन्हा तपासा.", "नतीजे अनुमानित हैं। काटने या ऑर्डर देने से पहले माप दोबारा जाँचें।"],
    privacy_link: ["Privacy & terms", "गोपनीयता आणि अटी", "गोपनीयता और शर्तें"],
    n_pipe: ["Pipe cutting calculator", "पाईप कटिंग कॅल्क्युलेटर", "पाइप कटिंग कैलकुलेटर"],
    d_pipe: ["How many full pipes to buy for your cutting list, and how much is wasted.", "कटिंग लिस्टसाठी किती पूर्ण पाईप लागतील आणि किती वेस्ट राहील ते पहा.", "कटिंग लिस्ट के लिए कितने पूरे पाइप लगेंगे और कितना वेस्ट बचेगा, देखें।"],
    n_weight: ["Weight calculator", "वजन कॅल्क्युलेटर", "वज़न कैलकुलेटर"],
    d_weight: ["Weight of pipe, bar, angle and plate in MS, stainless steel and aluminium.", "MS, स्टेनलेस स्टील आणि अॅल्युमिनियमच्या पाईप, रॉड, अँगल आणि प्लेटचे वजन.", "MS, स्टेनलेस स्टील और एल्युमिनियम के पाइप, रॉड, एंगल और प्लेट का वज़न।"],
    n_glass: ["Glass area calculator", "काच क्षेत्रफळ कॅल्क्युलेटर", "काँच क्षेत्रफल कैलकुलेटर"],
    d_glass: ["Square feet, weight and cost of glass panes.", "काचांचे चौरस फूट, वजन आणि किंमत.", "काँच के वर्ग फ़ीट, वज़न और कीमत।"],
    n_quote: ["Quotation maker", "कोटेशन तयार करा", "कोटेशन बनाएँ"],
    d_quote: ["Add items, labour and GST. Share the quote on WhatsApp.", "वस्तू, मजुरी आणि GST जोडा. कोटेशन WhatsApp वर पाठवा.", "सामान, मज़दूरी और GST जोड़ें। कोटेशन WhatsApp पर भेजें।"],
    n_col: ["Column height calculator", "खांब उंची कॅल्क्युलेटर", "खंभा ऊँचाई कैलकुलेटर"],
    d_col: ["Total column height from water-level readings.", "पाण्याच्या पातळीच्या रीडिंगवरून खांबाची एकूण उंची.", "पानी के लेवल की रीडिंग से खंभे की कुल ऊँचाई।"],
    unit: ["Unit", "एकक", "इकाई"],
    qty: ["Qty", "संख्या", "संख्या"],
    remove: ["Remove", "काढा", "हटाएँ"],
    calc: ["Calculate", "हिशोब करा", "हिसाब करें"],
    clear: ["Clear", "पुसा", "साफ़ करें"],
    copied: ["Copied", "कॉपी झाले", "कॉपी हो गया"],
    // pipe
    s_pipe: ["List the pieces you need. We work out how many full pipes to buy and the cutting plan.", "हव्या असलेल्या तुकड्यांची यादी भरा. किती पूर्ण पाईप घ्यायचे आणि कसे कापायचे ते आम्ही काढतो.", "ज़रूरी टुकड़ों की सूची भरें। कितने पूरे पाइप लेने हैं और कैसे काटने हैं, हम निकालते हैं।"],
    stock_len: ["Full pipe length", "पूर्ण पाईपची लांबी", "पूरे पाइप की लंबाई"],
    kerf: ["Cutting loss per cut (mm)", "प्रत्येक कटमध्ये जाणारी जाडी (mm)", "हर कट में जाने वाली मोटाई (mm)"],
    cuts_h: ["Pieces to cut", "कापायचे तुकडे", "काटने के टुकड़े"],
    cut_len: ["Length", "लांबी", "लंबाई"],
    add_piece: ["Add piece", "तुकडा जोडा", "टुकड़ा जोड़ें"],
    pipes_needed: ["Full pipes needed", "लागणारे पूर्ण पाईप", "ज़रूरी पूरे पाइप"],
    total_need: ["Total length needed", "एकूण लांबी लागेल", "कुल लंबाई चाहिए"],
    waste: ["Waste", "वेस्ट", "वेस्ट"],
    plan_h: ["Cutting plan", "कटिंग प्लॅन", "कटिंग प्लान"],
    pipe_n: ["Pipe", "पाईप", "पाइप"],
    left: ["left", "उरले", "बचा"],
    err_long: ["A piece is longer than the full pipe.", "एक तुकडा पूर्ण पाईपपेक्षा लांब आहे.", "एक टुकड़ा पूरे पाइप से लंबा है।"],
    err_none: ["Enter at least one piece length and quantity.", "किमान एका तुकड्याची लांबी आणि संख्या भरा.", "कम से कम एक टुकड़े की लंबाई और संख्या भरें।"],
    err_stock: ["Enter the full pipe length.", "पूर्ण पाईपची लांबी भरा.", "पूरे पाइप की लंबाई भरें।"],
    err_many: ["Too many pieces. Keep the total under 5000.", "तुकडे खूप जास्त आहेत. एकूण ५००० पेक्षा कमी ठेवा.", "टुकड़े बहुत ज़्यादा हैं। कुल 5000 से कम रखें।"],
    // weight
    s_weight: ["Pick material and shape, then enter the size in mm and the length.", "मटेरियल आणि आकार निवडा, मग साईज mm मध्ये आणि लांबी भरा.", "मटेरियल और आकार चुनें, फिर साइज़ mm में और लंबाई भरें।"],
    material: ["Material", "मटेरियल", "मटेरियल"],
    m_ms: ["Mild steel (MS)", "माईल्ड स्टील (MS)", "माइल्ड स्टील (MS)"],
    m_ss: ["Stainless steel 304", "स्टेनलेस स्टील 304", "स्टेनलेस स्टील 304"],
    m_al: ["Aluminium", "अॅल्युमिनियम", "एल्युमिनियम"],
    shape: ["Shape", "आकार", "आकार"],
    sh_round_pipe: ["Round pipe", "गोल पाईप", "गोल पाइप"],
    sh_sq_pipe: ["Square pipe", "चौरस पाईप", "चौकोर पाइप"],
    sh_rect_pipe: ["Rectangular pipe", "आयताकृती पाईप", "आयताकार पाइप"],
    sh_flat: ["Flat bar / plate", "पट्टी / प्लेट", "पट्टी / प्लेट"],
    sh_round_bar: ["Round bar", "गोल रॉड", "गोल रॉड"],
    sh_sq_bar: ["Square bar", "चौरस रॉड", "चौकोर रॉड"],
    sh_angle: ["Angle", "अँगल", "एंगल"],
    f_OD: ["Outer diameter (mm)", "बाहेरील व्यास (mm)", "बाहरी व्यास (mm)"],
    f_dia: ["Diameter (mm)", "व्यास (mm)", "व्यास (mm)"],
    f_side: ["Side (mm)", "बाजू (mm)", "भुजा (mm)"],
    f_W: ["Width (mm)", "रुंदी (mm)", "चौड़ाई (mm)"],
    f_H: ["Height (mm)", "उंची (mm)", "ऊँचाई (mm)"],
    f_t: ["Thickness (mm)", "जाडी (mm)", "मोटाई (mm)"],
    f_A: ["Leg A (mm)", "बाजू A (mm)", "भुजा A (mm)"],
    f_B: ["Leg B (mm)", "बाजू B (mm)", "भुजा B (mm)"],
    per_piece: ["Weight per piece", "एका नगाचे वजन", "एक नग का वज़न"],
    total_w: ["Total weight", "एकूण वजन", "कुल वज़न"],
    per_m: ["Weight per metre", "प्रति मीटर वजन", "प्रति मीटर वज़न"],
    density: ["Density used", "वापरलेली घनता", "इस्तेमाल की गई घनता"],
    note_approx: ["Pipe corners are treated as sharp, so the real weight can be slightly lower.", "पाईपचे कोपरे धारदार धरले आहेत, त्यामुळे खरे वजन थोडे कमी असू शकते.", "पाइप के कोने नुकीले माने गए हैं, इसलिए असली वज़न थोड़ा कम हो सकता है।"],
    err_dims: ["Check the sizes. Thickness must be smaller than the pipe.", "साईज तपासा. जाडी पाईपपेक्षा कमी असली पाहिजे.", "साइज़ जाँचें। मोटाई पाइप से कम होनी चाहिए।"],
    err_len: ["Enter the length and quantity.", "लांबी आणि संख्या भरा.", "लंबाई और संख्या भरें।"],
    // glass
    s_glass: ["Enter each pane size. Get square feet, weight and cost.", "प्रत्येक काचेची साईज भरा. चौरस फूट, वजन आणि किंमत मिळवा.", "हर काँच की साइज़ भरें। वर्ग फ़ीट, वज़न और कीमत पाएँ।"],
    panes_h: ["Glass panes", "काचा", "काँच"],
    g_w: ["Width", "रुंदी", "चौड़ाई"],
    g_h: ["Height", "उंची", "ऊँचाई"],
    g_thick: ["Glass thickness (mm)", "काचेची जाडी (mm)", "काँच की मोटाई (mm)"],
    g_rate: ["Rate per sq ft (₹, optional)", "दर प्रति चौरस फूट (₹, ऐच्छिक)", "दर प्रति वर्ग फ़ीट (₹, वैकल्पिक)"],
    add_pane: ["Add pane", "काच जोडा", "काँच जोड़ें"],
    panes_n: ["Panes", "काचांची संख्या", "काँच की संख्या"],
    area_sqft: ["Area (sq ft)", "क्षेत्रफळ (चौ. फूट)", "क्षेत्रफल (वर्ग फ़ीट)"],
    area_sqm: ["Area (sq m)", "क्षेत्रफळ (चौ. मीटर)", "क्षेत्रफल (वर्ग मीटर)"],
    weight: ["Weight", "वजन", "वज़न"],
    cost: ["Cost", "किंमत", "कीमत"],
    note_glass: ["Weight uses 2.5 kg per sq m for each mm of thickness.", "वजन: प्रत्येक mm जाडीसाठी प्रति चौ. मीटर २.५ किलो धरले आहे.", "वज़न: हर mm मोटाई के लिए प्रति वर्ग मीटर 2.5 किलो माना गया है।"],
    err_pane: ["Enter width, height and quantity for at least one pane.", "किमान एका काचेची रुंदी, उंची आणि संख्या भरा.", "कम से कम एक काँच की चौड़ाई, ऊँचाई और संख्या भरें।"],
    // quote
    s_quote: ["Add items and charges. Your profit stays hidden in the shared quote.", "वस्तू आणि चार्जेस जोडा. शेअर केलेल्या कोटेशनमध्ये तुमचा नफा दिसत नाही.", "सामान और चार्जेस जोड़ें। शेयर किए गए कोटेशन में आपका मुनाफ़ा नहीं दिखता।"],
    customer: ["Customer name (optional)", "ग्राहकाचे नाव (ऐच्छिक)", "ग्राहक का नाम (वैकल्पिक)"],
    items_h: ["Items", "वस्तू", "सामान"],
    item_name: ["Item", "वस्तू", "सामान"],
    rate: ["Rate (₹)", "दर (₹)", "दर (₹)"],
    add_item: ["Add item", "वस्तू जोडा", "सामान जोड़ें"],
    labour: ["Labour / fitting (₹)", "मजुरी / फिटिंग (₹)", "मज़दूरी / फिटिंग (₹)"],
    transport: ["Transport (₹)", "वाहतूक (₹)", "ढुलाई (₹)"],
    profit_pct: ["Your profit (%)", "तुमचा नफा (%)", "आपका मुनाफ़ा (%)"],
    gst_pct: ["GST", "GST", "GST"],
    o_items: ["Items total", "वस्तूंची एकूण रक्कम", "सामान की कुल रकम"],
    o_lt: ["Labour + transport", "मजुरी + वाहतूक", "मज़दूरी + ढुलाई"],
    o_profit: ["Your profit (only you see this)", "तुमचा नफा (फक्त तुम्हाला दिसतो)", "आपका मुनाफ़ा (सिर्फ़ आपको दिखता है)"],
    o_gst: ["GST", "GST", "GST"],
    o_total: ["Total", "एकूण", "कुल"],
    x_title: ["Quotation", "कोटेशन", "कोटेशन"],
    x_other: ["Labour, transport & other", "मजुरी, वाहतूक आणि इतर", "मज़दूरी, ढुलाई और अन्य"],
    share_wa: ["Share on WhatsApp", "WhatsApp वर पाठवा", "WhatsApp पर भेजें"],
    copy_q: ["Copy quote", "कोटेशन कॉपी करा", "कोटेशन कॉपी करें"],
    print: ["Print", "प्रिंट", "प्रिंट"],
    gst_reg: ["I am GST registered (add GST to quote)", "मी GST नोंदणीकृत आहे (कोटेशनमध्ये GST जोडा)", "मैं GST पंजीकृत हूँ (कोटेशन में GST जोड़ें)"],
    gstin: ["My GSTIN", "माझा GSTIN", "मेरा GSTIN"],
    gst_note: ["Only a GST-registered seller can charge GST. This is an estimate, not a tax invoice.", "GST फक्त GST नोंदणीकृत विक्रेताच लावू शकतो. हे अंदाजपत्रक आहे, टॅक्स इन्व्हॉइस नाही.", "GST केवल GST पंजीकृत विक्रेता ही लगा सकता है। यह अनुमान है, टैक्स इनवॉइस नहीं।"],
    err_gstin: ["Enter a valid 15-character GSTIN to add GST.", "GST जोडण्यासाठी वैध १५ अक्षरी GSTIN भरा.", "GST जोड़ने के लिए सही 15 अंकों का GSTIN भरें।"],
    x_note: ["Estimate only. Not a tax invoice.", "हे फक्त अंदाजपत्रक आहे. टॅक्स इन्व्हॉइस नाही.", "यह केवल अनुमान है। टैक्स इनवॉइस नहीं।"],
    err_item: ["Add at least one item with quantity and rate.", "संख्या आणि दरासह किमान एक वस्तू भरा.", "संख्या और दर के साथ कम से कम एक सामान भरें।"],
    // column
    s_col: ["Enter the water-level reading and column height for each column.", "प्रत्येक खांबाचे पाण्याच्या पातळीचे रीडिंग आणि खांबाची उंची भरा.", "हर खंभे की पानी के लेवल की रीडिंग और खंभे की ऊँचाई भरें।"],
    c_formula: ["Total = water reading − pit depth + murum filling + column height", "एकूण = पाण्याचे रीडिंग − खड्ड्याची खोली + मुरमाचा भराव + खांबाची उंची", "कुल = पानी की रीडिंग − गड्ढे की गहराई + मुरम की भराई + खंभे की ऊँचाई"],
    c_pit: ["Pit depth (subtract, inch)", "खड्ड्याची खोली (वजा, इंच)", "गड्ढे की गहराई (घटाएँ, इंच)"],
    c_fill: ["Murum filling (add, inch)", "मुरमाचा भराव (अधिक, इंच)", "मुरम की भराई (जोड़ें, इंच)"],
    c_name: ["Column", "खांब", "खंभा"],
    c_water: ["Water reading (inch)", "पाण्याचे रीडिंग (इंच)", "पानी की रीडिंग (इंच)"],
    c_height: ["Column height (inch)", "खांबाची उंची (इंच)", "खंभे की ऊँचाई (इंच)"],
    add_col: ["Add column", "खांब जोडा", "खंभा जोड़ें"],
    c_total: ["Total height", "एकूण उंची", "कुल ऊँचाई"],
    err_col: ["Enter the water reading and column height for at least one column.", "किमान एका खांबाचे रीडिंग आणि उंची भरा.", "कम से कम एक खंभे की रीडिंग और ऊँचाई भरें।"]
  };
  var CODES = ["en", "mr", "hi"], NAMES = ["English", "मराठी", "हिन्दी"];
  var D = { en: {}, mr: {}, hi: {} }, cur = "en";
  Object.keys(S).forEach(function (k) { CODES.forEach(function (c, i) { D[c][k] = S[k][i]; }); });

  window.t = function (k) { return (D[cur] && D[cur][k]) || D.en[k] || k; };
  window.ft = {
    num: function (v) { var n = parseFloat(String(v).replace(",", ".")); return isFinite(n) ? n : NaN; },
    dec: function (n, d) { return Number(n).toLocaleString("en-IN", { maximumFractionDigits: d }); },
    inr: function (n) { return "₹" + Math.round(n).toLocaleString("en-IN"); }
  };

  function pick() {
    try { var s = localStorage.getItem("ft_lang"); if (s && D[s]) return s; } catch (e) {}
    var n = String(navigator.language || "en").slice(0, 2).toLowerCase();
    return D[n] ? n : "en";
  }
  window.applyI18n = function () {
    document.documentElement.lang = cur;
    Array.prototype.forEach.call(document.querySelectorAll("[data-i18n]"), function (el) { el.textContent = t(el.getAttribute("data-i18n")); });
    Array.prototype.forEach.call(document.querySelectorAll("[data-i18n-ph]"), function (el) { el.setAttribute("placeholder", t(el.getAttribute("data-i18n-ph"))); });
    var key = document.body.getAttribute("data-title");
    document.title = (key ? t(key) : t("tagline")) + " | FabricatorTools";
    var bar = document.getElementById("langbar");
    if (bar) Array.prototype.forEach.call(bar.children, function (b) { b.setAttribute("aria-pressed", b.getAttribute("data-l") === cur ? "true" : "false"); });
  };
  function setLang(l) {
    cur = l;
    try { localStorage.setItem("ft_lang", l); } catch (e) {}
    applyI18n();
    document.dispatchEvent(new Event("langchange"));
  }
  document.addEventListener("DOMContentLoaded", function () {
    var bar = document.getElementById("langbar");
    if (bar) CODES.forEach(function (c, i) {
      var b = document.createElement("button");
      b.type = "button"; b.setAttribute("data-l", c); b.textContent = NAMES[i];
      b.addEventListener("click", function () { setLang(c); });
      bar.appendChild(b);
    });
    cur = pick();
    applyI18n();
    document.dispatchEvent(new Event("langchange"));
  });
})();

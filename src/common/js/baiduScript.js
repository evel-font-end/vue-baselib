window.TILE_VERSION = {
    "ditu": {
        "normal": {
            "version": "088",
            "updateDate": "20200908"
        },
        "satellite": {
            "version": "009",
            "updateDate": "20200908"
        },
        "normalTraffic": {
            "version": "081",
            "updateDate": "20200908"
        },
        "satelliteTraffic": {
            "version": "083",
            "updateDate": "20200908"
        },
        "mapJS": {
            "version": "104",
            "updateDate": "20200908"
        },
        "satelliteStreet": {
            "version": "083",
            "updateDate": "20200908"
        },
        "earthVector": {
            "version": "001",
            "updateDate": "20200908"
        }
    },
    "webapp": {
        "high_normal": {
            "version": "001",
            "updateDate": "20200908"
        },
        "lower_normal": {
            "version": "002",
            "updateDate": "20200908"
        }
    },
    "api_for_mobile": {
        "vector": {
            "version": "002",
            "updateDate": "20200908"
        },
        "vectorIcon": {
            "version": "002",
            "updateDate": "20200908"
        }
    }
};
window.BMAP_AUTHENTIC_KEY = "ZyKWZjnDOAUE4WEq9Qu9SMT4b9v8iUGM";
(function() {
    function aa(a) {
        throw a;
    }
    var l = void 0
      , p = !0
      , q = null
      , t = !1;
    function u() {
        return function() {}
    }
    function ba(a) {
        return function(b) {
            this[a] = b
        }
    }
    function x(a) {
        return function() {
            return this[a]
        }
    }
    function da(a) {
        return function() {
            return a
        }
    }
    var ea, fa = [];
    function ga(a) {
        return function() {
            return fa[a].apply(this, arguments)
        }
    }
    function ha(a, b) {
        return fa[a] = b
    }
    var ia, A = ia = A || {
        version: "1.3.4"
    };
    A.ca = "$BAIDU$";
    window[A.ca] = window[A.ca] || {};
    A.object = A.object || {};
    A.extend = A.object.extend = function(a, b) {
        for (var c in b)
            b.hasOwnProperty(c) && (a[c] = b[c]);
        return a
    }
    ;
    A.U = A.U || {};
    A.U.ea = function(a) {
        return "string" == typeof a || a instanceof String ? document.getElementById(a) : a && a.nodeName && (1 == a.nodeType || 9 == a.nodeType) ? a : q
    }
    ;
    A.ea = A.Ec = A.U.ea;
    A.U.$ = function(a) {
        a = A.U.ea(a);
        if (a === q)
            return a;
        a.style.display = "none";
        return a
    }
    ;
    A.$ = A.U.$;
    A.lang = A.lang || {};
    A.lang.wg = function(a) {
        return "[object String]" == Object.prototype.toString.call(a)
    }
    ;
    A.wg = A.lang.wg;
    A.lang.TD = function(a) {
        if ("[object Object]" === Object.prototype.toString.call(a)) {
            for (var b in a)
                return t;
            return p
        }
        return t
    }
    ;
    A.TD = A.lang.TD;
    A.U.Mj = function(a) {
        return A.lang.wg(a) ? document.getElementById(a) : a
    }
    ;
    A.Mj = A.U.Mj;
    A.U.getElementsByClassName = function(a, b) {
        var c;
        if (a.getElementsByClassName)
            c = a.getElementsByClassName(b);
        else {
            var e = a;
            e == q && (e = document);
            c = [];
            var e = e.getElementsByTagName("*"), f = e.length, g = RegExp("(^|\\s)" + b + "(\\s|$)"), i, k;
            for (k = i = 0; i < f; i++)
                g.test(e[i].className) && (c[k] = e[i],
                k++)
        }
        return c
    }
    ;
    A.getElementsByClassName = A.U.getElementsByClassName;
    A.U.contains = function(a, b) {
        var c = A.U.Mj
          , a = c(a)
          , b = c(b);
        return a.contains ? a != b && a.contains(b) : !!(a.compareDocumentPosition(b) & 16)
    }
    ;
    A.fa = A.fa || {};
    /msie (\d+\.\d)/i.test(navigator.userAgent) && (A.fa.na = A.na = document.documentMode || +RegExp.$1);
    var ja = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        rowspan: "rowSpan",
        valign: "vAlign",
        usemap: "useMap",
        frameborder: "frameBorder"
    };
    8 > A.fa.na ? (ja["for"] = "htmlFor",
    ja["class"] = "className") : (ja.htmlFor = "for",
    ja.className = "class");
    A.U.pG = ja;
    A.U.RE = function(a, b, c) {
        a = A.U.ea(a);
        if (a === q)
            return a;
        if ("style" == b)
            a.style.cssText = c;
        else {
            b = A.U.pG[b] || b;
            a.setAttribute(b, c)
        }
        return a
    }
    ;
    A.RE = A.U.RE;
    A.U.SE = function(a, b) {
        a = A.U.ea(a);
        if (a === q)
            return a;
        for (var c in b)
            A.U.RE(a, c, b[c]);
        return a
    }
    ;
    A.SE = A.U.SE;
    A.Rk = A.Rk || {};
    (function() {
        var a = RegExp("(^[\\s\\t\\xa0\\u3000]+)|([\\u3000\\xa0\\s\\t]+$)", "g");
        A.Rk.trim = function(b) {
            return ("" + b).replace(a, "")
        }
    }
    )();
    A.trim = A.Rk.trim;
    A.Rk.Ko = function(a, b) {
        var a = "" + a
          , c = Array.prototype.slice.call(arguments, 1)
          , e = Object.prototype.toString;
        if (c.length) {
            c = c.length == 1 ? b !== q && /\[object Array\]|\[object Object\]/.test(e.call(b)) ? b : c : c;
            return a.replace(/#\{(.+?)\}/g, function(a, b) {
                var i = c[b];
                "[object Function]" == e.call(i) && (i = i(b));
                return "undefined" == typeof i ? "" : i
            })
        }
        return a
    }
    ;
    A.Ko = A.Rk.Ko;
    A.U.qc = function(a, b) {
        a = A.U.ea(a);
        if (a === q)
            return a;
        for (var c = a.className.split(/\s+/), e = b.split(/\s+/), f, g = e.length, i, k = 0; k < g; ++k) {
            i = 0;
            for (f = c.length; i < f; ++i)
                if (c[i] == e[k]) {
                    c.splice(i, 1);
                    break
                }
        }
        a.className = c.join(" ");
        return a
    }
    ;
    A.qc = A.U.qc;
    A.U.qx = function(a, b, c) {
        a = A.U.ea(a);
        if (a === q)
            return a;
        var e;
        if (a.insertAdjacentHTML)
            a.insertAdjacentHTML(b, c);
        else {
            e = a.ownerDocument.createRange();
            b = b.toUpperCase();
            if (b == "AFTERBEGIN" || b == "BEFOREEND") {
                e.selectNodeContents(a);
                e.collapse(b == "AFTERBEGIN")
            } else {
                b = b == "BEFOREBEGIN";
                e[b ? "setStartBefore" : "setEndAfter"](a);
                e.collapse(b)
            }
            e.insertNode(e.createContextualFragment(c))
        }
        return a
    }
    ;
    A.qx = A.U.qx;
    A.U.show = function(a) {
        a = A.U.ea(a);
        if (a === q)
            return a;
        a.style.display = "";
        return a
    }
    ;
    A.show = A.U.show;
    A.U.jD = function(a) {
        a = A.U.ea(a);
        return a === q ? a : a.nodeType == 9 ? a : a.ownerDocument || a.document
    }
    ;
    A.U.hb = function(a, b) {
        a = A.U.ea(a);
        if (a === q)
            return a;
        for (var c = b.split(/\s+/), e = a.className, f = " " + e + " ", g = 0, i = c.length; g < i; g++)
            f.indexOf(" " + c[g] + " ") < 0 && (e = e + (" " + c[g]));
        a.className = e;
        return a
    }
    ;
    A.hb = A.U.hb;
    A.U.jB = A.U.jB || {};
    A.U.Jl = A.U.Jl || [];
    A.U.Jl.filter = function(a, b, c) {
        for (var e = 0, f = A.U.Jl, g; g = f[e]; e++)
            if (g = g[c])
                b = g(a, b);
        return b
    }
    ;
    A.Rk.hO = function(a) {
        return a.indexOf("-") < 0 && a.indexOf("_") < 0 ? a : a.replace(/[-_][^-_]/g, function(a) {
            return a.charAt(1).toUpperCase()
        })
    }
    ;
    A.U.b0 = function(a) {
        A.U.Hs(a, "expand") ? A.U.qc(a, "expand") : A.U.hb(a, "expand")
    }
    ;
    A.U.Hs = function(a) {
        if (arguments.length <= 0 || typeof a === "function")
            return this;
        if (this.size() <= 0)
            return t;
        var a = a.replace(/^\s+/g, "").replace(/\s+$/g, "").replace(/\s+/g, " "), b = a.split(" "), c;
        A.forEach(this, function(a) {
            for (var a = a.className, f = 0; f < b.length; f++)
                if (!~(" " + a + " ").indexOf(" " + b[f] + " ")) {
                    c = t;
                    return
                }
            c !== t && (c = p)
        });
        return c
    }
    ;
    A.U.vg = function(a, b) {
        var c = A.U
          , a = c.ea(a);
        if (a === q)
            return a;
        var b = A.Rk.hO(b)
          , e = a.style[b];
        if (!e)
            var f = c.jB[b]
              , e = a.currentStyle || (A.fa.na ? a.style : getComputedStyle(a, q))
              , e = f && f.get ? f.get(a, e) : e[f || b];
        if (f = c.Jl)
            e = f.filter(b, e, "get");
        return e
    }
    ;
    A.vg = A.U.vg;
    /opera\/(\d+\.\d)/i.test(navigator.userAgent) && (A.fa.opera = +RegExp.$1);
    A.fa.WL = /webkit/i.test(navigator.userAgent);
    A.fa.wY = /gecko/i.test(navigator.userAgent) && !/like gecko/i.test(navigator.userAgent);
    A.fa.$D = "CSS1Compat" == document.compatMode;
    A.U.la = function(a) {
        a = A.U.ea(a);
        if (a === q)
            return a;
        var b = A.U.jD(a)
          , c = A.fa
          , e = A.U.vg;
        c.wY > 0 && b.getBoxObjectFor && e(a, "position");
        var f = {
            left: 0,
            top: 0
        }, g;
        if (a == (c.na && !c.$D ? b.body : b.documentElement))
            return f;
        if (a.getBoundingClientRect) {
            a = a.getBoundingClientRect();
            f.left = Math.floor(a.left) + Math.max(b.documentElement.scrollLeft, b.body.scrollLeft);
            f.top = Math.floor(a.top) + Math.max(b.documentElement.scrollTop, b.body.scrollTop);
            f.left = f.left - b.documentElement.clientLeft;
            f.top = f.top - b.documentElement.clientTop;
            a = b.body;
            b = parseInt(e(a, "borderLeftWidth"));
            e = parseInt(e(a, "borderTopWidth"));
            if (c.na && !c.$D) {
                f.left = f.left - (isNaN(b) ? 2 : b);
                f.top = f.top - (isNaN(e) ? 2 : e)
            }
        } else {
            g = a;
            do {
                f.left = f.left + g.offsetLeft;
                f.top = f.top + g.offsetTop;
                if (c.WL > 0 && e(g, "position") == "fixed") {
                    f.left = f.left + b.body.scrollLeft;
                    f.top = f.top + b.body.scrollTop;
                    break
                }
                g = g.offsetParent
            } while (g && g != a);if (c.opera > 0 || c.WL > 0 && e(a, "position") == "absolute")
                f.top = f.top - b.body.offsetTop;
            for (g = a.offsetParent; g && g != b.body; ) {
                f.left = f.left - g.scrollLeft;
                if (!c.opera || g.tagName != "TR")
                    f.top = f.top - g.scrollTop;
                g = g.offsetParent
            }
        }
        return f
    }
    ;
    /firefox\/(\d+\.\d)/i.test(navigator.userAgent) && (A.fa.Re = +RegExp.$1);
    /BIDUBrowser/i.test(navigator.userAgent) && (A.fa.g2 = p);
    var ka = navigator.userAgent;
    /(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i.test(ka) && !/chrome/i.test(ka) && (A.fa.ay = +(RegExp.$1 || RegExp.$2));
    /chrome\/(\d+\.\d)/i.test(navigator.userAgent) && (A.fa.mw = +RegExp.$1);
    A.jc = A.jc || {};
    A.jc.Mb = function(a, b) {
        var c, e, f = a.length;
        if ("function" == typeof b)
            for (e = 0; e < f; e++) {
                c = a[e];
                c = b.call(a, c, e);
                if (c === t)
                    break
            }
        return a
    }
    ;
    A.Mb = A.jc.Mb;
    A.lang.ca = function() {
        return "TANGRAM__" + (window[A.ca]._counter++).toString(36)
    }
    ;
    window[A.ca]._counter = window[A.ca]._counter || 1;
    window[A.ca]._instances = window[A.ca]._instances || {};
    A.lang.Rs = function(a) {
        return "[object Function]" == Object.prototype.toString.call(a)
    }
    ;
    A.lang.Ha = function(a) {
        this.ca = a || A.lang.ca();
        window[A.ca]._instances[this.ca] = this
    }
    ;
    window[A.ca]._instances = window[A.ca]._instances || {};
    A.lang.Ha.prototype.Yh = ga(0);
    A.lang.Ha.prototype.toString = function() {
        return "[object " + (this.iQ || "Object") + "]"
    }
    ;
    A.lang.ku = function(a, b) {
        this.type = a;
        this.returnValue = p;
        this.target = b || q;
        this.currentTarget = q
    }
    ;
    A.lang.Ha.prototype.addEventListener = function(a, b, c) {
        if (A.lang.Rs(b)) {
            !b.bl && (b.bl = {});
            !this.Ci && (this.Ci = {});
            var e = this.Ci, f;
            if (typeof c == "string" && c) {
                /[^\w\-]/.test(c) && aa("nonstandard key:" + c);
                f = b.hx = c
            }
            a.indexOf("on") != 0 && (a = "on" + a);
            typeof e[a] != "object" && (e[a] = {});
            typeof b.bl[a] != "object" && (b.bl[a] = {});
            f = f || A.lang.ca();
            b.bl[a].hx = f;
            e[a][f] = b
        }
    }
    ;
    A.lang.Ha.prototype.removeEventListener = function(a, b) {
        a.indexOf("on") != 0 && (a = "on" + a);
        if (A.lang.Rs(b)) {
            if (!b.bl || !b.bl[a])
                return;
            b = b.bl[a].hx
        } else if (!A.lang.wg(b))
            return;
        !this.Ci && (this.Ci = {});
        var c = this.Ci;
        c[a] && c[a][b] && delete c[a][b]
    }
    ;
    A.lang.Ha.prototype.dispatchEvent = function(a, b) {
        A.lang.wg(a) && (a = new A.lang.ku(a));
        !this.Ci && (this.Ci = {});
        var b = b || {}, c;
        for (c in b)
            a[c] = b[c];
        var e = this.Ci
          , f = a.type;
        a.target = a.target || this;
        a.currentTarget = this;
        f.indexOf("on") != 0 && (f = "on" + f);
        A.lang.Rs(this[f]) && this[f].apply(this, arguments);
        if (typeof e[f] == "object")
            for (c in e[f])
                e[f][c].apply(this, arguments);
        return a.returnValue
    }
    ;
    A.lang.xa = function(a, b, c) {
        var e, f, g = a.prototype;
        f = new Function;
        f.prototype = b.prototype;
        f = a.prototype = new f;
        for (e in g)
            f[e] = g[e];
        a.prototype.constructor = a;
        a.P_ = b.prototype;
        if ("string" == typeof c)
            f.iQ = c
    }
    ;
    A.xa = A.lang.xa;
    A.lang.Nc = function(a) {
        return window[A.ca]._instances[a] || q
    }
    ;
    A.platform = A.platform || {};
    A.platform.PL = /macintosh/i.test(navigator.userAgent);
    A.platform.o4 = /MicroMessenger/i.test(navigator.userAgent);
    A.platform.XL = /windows/i.test(navigator.userAgent);
    A.platform.FY = /x11/i.test(navigator.userAgent);
    A.platform.pj = /android/i.test(navigator.userAgent);
    /android (\d+(\.\d)?)/i.test(navigator.userAgent) && (A.platform.EB = A.EB = RegExp.$1);
    A.platform.yY = /ipad/i.test(navigator.userAgent);
    A.platform.WD = /iphone/i.test(navigator.userAgent);
    function la(a, b) {
        a.domEvent = b = window.event || b;
        a.clientX = b.clientX || b.pageX;
        a.clientY = b.clientY || b.pageY;
        a.offsetX = b.offsetX || b.layerX;
        a.offsetY = b.offsetY || b.layerY;
        a.screenX = b.screenX;
        a.screenY = b.screenY;
        a.ctrlKey = b.ctrlKey || b.metaKey;
        a.shiftKey = b.shiftKey;
        a.altKey = b.altKey;
        if (b.touches) {
            a.touches = [];
            for (var c = 0; c < b.touches.length; c++)
                a.touches.push({
                    clientX: b.touches[c].clientX,
                    clientY: b.touches[c].clientY,
                    screenX: b.touches[c].screenX,
                    screenY: b.touches[c].screenY,
                    pageX: b.touches[c].pageX,
                    pageY: b.touches[c].pageY,
                    target: b.touches[c].target,
                    identifier: b.touches[c].identifier
                })
        }
        if (b.changedTouches) {
            a.changedTouches = [];
            for (c = 0; c < b.changedTouches.length; c++)
                a.changedTouches.push({
                    clientX: b.changedTouches[c].clientX,
                    clientY: b.changedTouches[c].clientY,
                    screenX: b.changedTouches[c].screenX,
                    screenY: b.changedTouches[c].screenY,
                    pageX: b.changedTouches[c].pageX,
                    pageY: b.changedTouches[c].pageY,
                    target: b.changedTouches[c].target,
                    identifier: b.changedTouches[c].identifier
                })
        }
        if (b.targetTouches) {
            a.targetTouches = [];
            for (c = 0; c < b.targetTouches.length; c++)
                a.targetTouches.push({
                    clientX: b.targetTouches[c].clientX,
                    clientY: b.targetTouches[c].clientY,
                    screenX: b.targetTouches[c].screenX,
                    screenY: b.targetTouches[c].screenY,
                    pageX: b.targetTouches[c].pageX,
                    pageY: b.targetTouches[c].pageY,
                    target: b.targetTouches[c].target,
                    identifier: b.targetTouches[c].identifier
                })
        }
        a.rotation = b.rotation;
        a.scale = b.scale;
        return a
    }
    A.lang.Dw = function(a) {
        var b = window[A.ca];
        b.mS && delete b.mS[a]
    }
    ;
    A.event = {};
    A.V = A.event.V = function(a, b, c) {
        if (!(a = A.ea(a)))
            return a;
        b = b.replace(/^on/, "");
        a.addEventListener ? a.addEventListener(b, c, t) : a.attachEvent && a.attachEvent("on" + b, c);
        return a
    }
    ;
    A.cd = A.event.cd = function(a, b, c) {
        if (!(a = A.ea(a)))
            return a;
        b = b.replace(/^on/, "");
        a.removeEventListener ? a.removeEventListener(b, c, t) : a.detachEvent && a.detachEvent("on" + b, c);
        return a
    }
    ;
    A.U.Hs = function(a, b) {
        if (!a || !a.className || typeof a.className != "string")
            return t;
        var c = -1;
        try {
            c = a.className == b || a.className.search(RegExp("(\\s|^)" + b + "(\\s|$)"))
        } catch (e) {
            return t
        }
        return c > -1
    }
    ;
    A.BK = function() {
        function a(a) {
            document.addEventListener && (this.element = a,
            this.EK = this.Ak ? "touchstart" : "mousedown",
            this.RC = this.Ak ? "touchmove" : "mousemove",
            this.QC = this.Ak ? "touchend" : "mouseup",
            this.oh = t,
            this.Rt = this.Qt = 0,
            this.element.addEventListener(this.EK, this, t),
            ia.V(this.element, "mousedown", u()),
            this.handleEvent(q))
        }
        a.prototype = {
            Ak: "ontouchstart"in window || "createTouch"in document,
            start: function(a) {
                ma(a);
                this.oh = t;
                this.Qt = this.Ak ? a.touches[0].clientX : a.clientX;
                this.Rt = this.Ak ? a.touches[0].clientY : a.clientY;
                this.element.addEventListener(this.RC, this, t);
                this.element.addEventListener(this.QC, this, t)
            },
            move: function(a) {
                na(a);
                var c = this.Ak ? a.touches[0].clientY : a.clientY;
                if (10 < Math.abs((this.Ak ? a.touches[0].clientX : a.clientX) - this.Qt) || 10 < Math.abs(c - this.Rt))
                    this.oh = p
            },
            end: function(a) {
                na(a);
                this.oh || (a = document.createEvent("Event"),
                a.initEvent("tap", t, p),
                this.element.dispatchEvent(a));
                this.element.removeEventListener(this.RC, this, t);
                this.element.removeEventListener(this.QC, this, t)
            },
            handleEvent: function(a) {
                if (a)
                    switch (a.type) {
                    case this.EK:
                        this.start(a);
                        break;
                    case this.RC:
                        this.move(a);
                        break;
                    case this.QC:
                        this.end(a)
                    }
            }
        };
        return function(b) {
            return new a(b)
        }
    }();
    var D = window.BMap || {};
    D.version = "3.0";
    D.X1 = 0.34 > Math.random();
    0 <= D.version.indexOf("#") && (D.version = "3.0");
    D.hr = [];
    D.Ze = function(a) {
        this.hr.push(a)
    }
    ;
    D.Wq = [];
    D.Gk = function(a) {
        this.Wq.push(a)
    }
    ;
    D.zU = D.apiLoad || u();
    D.C0 = D.verify || function() {
        D.version && D.version >= 1.5 && oa(D.nd + "?qt=verify&ak=" + pa, function(a) {
            if (a && a.error !== 0) {
                if (typeof map !== "undefined") {
                    map.Ra().innerHTML = "";
                    map.Ci = {}
                }
                D = q;
                var b = "\u767e\u5ea6\u672a\u6388\u6743\u4f7f\u7528\u5730\u56feAPI\uff0c\u53ef\u80fd\u662f\u56e0\u4e3a\u60a8\u63d0\u4f9b\u7684\u5bc6\u94a5\u4e0d\u662f\u6709\u6548\u7684\u767e\u5ea6LBS\u5f00\u653e\u5e73\u53f0\u5bc6\u94a5\uff0c\u6216\u6b64\u5bc6\u94a5\u672a\u5bf9\u672c\u5e94\u7528\u7684\u767e\u5ea6\u5730\u56feJavaScriptAPI\u6388\u6743\u3002\u60a8\u53ef\u4ee5\u8bbf\u95ee\u5982\u4e0b\u7f51\u5740\u4e86\u89e3\u5982\u4f55\u83b7\u53d6\u6709\u6548\u7684\u5bc6\u94a5\uff1ahttp://lbsyun.baidu.com/apiconsole/key#\u3002";
                switch (a.error) {
                case 101:
                    b = "\u5f00\u53d1\u8005\u7981\u7528\u4e86\u8be5ak\u7684jsapi\u670d\u52a1\u6743\u9650\u3002\u60a8\u53ef\u4ee5\u8bbf\u95ee\u5982\u4e0b\u7f51\u5740\u4e86\u89e3\u5982\u4f55\u83b7\u53d6\u6709\u6548\u7684\u5bc6\u94a5\uff1ahttp://lbsyun.baidu.com/apiconsole/key#\u3002";
                    break;
                case 102:
                    b = "\u5f00\u53d1\u8005Referer\u4e0d\u6b63\u786e\u3002\u60a8\u53ef\u4ee5\u8bbf\u95ee\u5982\u4e0b\u7f51\u5740\u4e86\u89e3\u5982\u4f55\u83b7\u53d6\u6709\u6548\u7684\u5bc6\u94a5\uff1ahttp://lbsyun.baidu.com/apiconsole/key#\u3002"
                }
                alert(b)
            }
        })
    }
    ;
    var pa = window.BMAP_AUTHENTIC_KEY;
    window.BMAP_AUTHENTIC_KEY = q;
    var qa = window.BMap_loadScriptTime
      , ra = (new Date).getTime()
      , ua = q
      , va = p
      , wa = 5042
      , xa = 5002
      , ya = 5003
      , za = "load_mapclick"
      , Ba = 5038
      , Ca = 5041
      , Da = 5047
      , Ea = 5036
      , Fa = 5039
      , Ha = 5037
      , Ia = 5040
      , Ja = 5011
      , Ka = 7E3;
    var La = 0;
    function Ma(a, b) {
        if (a = A.ea(a)) {
            var c = this;
            A.lang.Ha.call(c);
            b = b || {};
            c.M = {
                RB: 200,
                pc: p,
                Iw: t,
                GC: p,
                Fo: p,
                Ho: b.enableWheelZoom || t,
                zK: p,
                IC: p,
                Go: p,
                is: p,
                NC: p,
                Do: b.enable3DBuilding || t,
                Ic: 25,
                P0: 240,
                mU: 450,
                wc: H.wc,
                Gd: H.Gd,
                Ss: !!b.Ss,
                fc: Math.round(b.minZoom) || 1,
                mc: Math.round(b.maxZoom) || 19,
                Sa: b.mapType || Na,
                o5: t,
                wK: b.drawer || La,
                Hw: p,
                Gw: 500,
                rW: b.enableHighResolution !== t,
                fm: b.enableMapClick !== t,
                devicePixelRatio: b.devicePixelRatio || window.devicePixelRatio || 1,
                AF: 99,
                xe: b.mapStyle || q,
                MY: b.logoControl === t ? t : p,
                GU: [],
                j2: b.beforeClickIcon || q,
                sg: t,
                ok: t,
                yo: t,
                uE: p,
                CC: b.enableBizAuthLogo === t ? t : p,
                Ia: b.coordsType || 5,
                T5: b.touchZoomCenter || 0,
                KC: b.enablePinchDragging === t ? t : p
            };
            c.M.xe && (this.jY(c.M.xe.controls),
            this.LL(c.M.xe.geotableId));
            c.M.xe && c.M.xe.styleId && c.J3(c.M.xe.styleId);
            c.M.UB = {
                dark: {
                    backColor: "#2D2D2D",
                    textColor: "#bfbfbf",
                    iconUrl: "dicons"
                },
                normal: {
                    backColor: "#F3F1EC",
                    textColor: "#c61b1b",
                    iconUrl: "icons"
                },
                light: {
                    backColor: "#EBF8FC",
                    textColor: "#017fb4",
                    iconUrl: "licons"
                }
            };
            b.enableAutoResize && (c.M.is = b.enableAutoResize);
            b.enableStreetEntrance === t && (c.M.NC = b.enableStreetEntrance);
            b.enableDeepZoom === t && (c.M.zK = b.enableDeepZoom);
            var e = c.M.GU;
            if (I())
                for (var f = 0, g = e.length; f < g; f++)
                    if (A.fa[e[f]]) {
                        c.M.devicePixelRatio = 1;
                        break
                    }
            e = -1 < navigator.userAgent.toLowerCase().indexOf("android");
            f = -1 < navigator.userAgent.toLowerCase().indexOf("mqqbrowser");
            if (-1 < navigator.userAgent.toLowerCase().indexOf("UCBrowser") || e && f)
                c.M.AF = 99;
            c.ab = a;
            c.cB(a);
            a.unselectable = "on";
            a.innerHTML = "";
            a.appendChild(c.za());
            b.size && this.Be(b.size);
            e = c.xb();
            c.width = e.width;
            c.height = e.height;
            c.offsetX = 0;
            c.offsetY = 0;
            c.platform = a.firstChild;
            c.ye = c.platform.firstChild;
            c.ye.style.width = c.width + "px";
            c.ye.style.height = c.height + "px";
            c.Xd = {};
            c.ae = new J(0,0);
            c.Tb = new J(0,0);
            c.Xa = 3;
            c.xc = 0;
            c.eC = q;
            c.dC = q;
            c.Lb = "";
            c.nw = "";
            c.Gh = {};
            c.Gh.custom = {};
            c.Ei = {};
            c.Ya = 0;
            b.useWebGL === t && Oa(t);
            c.W = new Pa(a,{
                Se: "api",
                rS: p
            });
            c.W.$();
            c.W.XE(c);
            b = b || {};
            e = c.Sa = c.M.Sa;
            c.Bc = e.jj();
            e && e.$E(c.M.Ia);
            e === Qa && Ra(xa);
            e === Sa && Ra(ya);
            e = c.M;
            e.AO = Math.round(b.minZoom);
            e.zO = Math.round(b.maxZoom);
            c.Du();
            c.aa = {
                Jc: t,
                kc: 0,
                Xs: 0,
                bM: 0,
                s4: 0,
                JB: t,
                GE: -1,
                re: []
            };
            c.platform.style.cursor = c.M.wc;
            for (f = 0; f < D.hr.length; f++)
                D.hr[f](c);
            c.aa.GE = f;
            c.ga();
            Ta.load("map", function() {
                c.mb()
            });
            c.M.fm && (setTimeout(function() {
                Ra(za)
            }, 1E3),
            Ta.load("mapclick", function() {
                window.MPC_Mgr = window.MPC_Mgr || {};
                window.MPC_Mgr[c.ca] = new Ua(c)
            }, p));
            Wa() && Ta.load("oppc", function() {
                c.su()
            });
            I() && Ta.load("opmb", function() {
                c.su()
            });
            a = q;
            c.qB = []
        }
    }
    A.lang.xa(Ma, A.lang.Ha, "Map");
    A.extend(Ma.prototype, {
        za: function() {
            var a = L("div")
              , b = a.style;
            b.overflow = "visible";
            b.position = "absolute";
            b.zIndex = "0";
            b.top = b.left = "0px";
            var b = L("div", {
                "class": "BMap_mask"
            })
              , c = b.style;
            c.position = "absolute";
            c.top = c.left = "0px";
            c.zIndex = "9";
            c.overflow = "hidden";
            c.WebkitUserSelect = "none";
            a.appendChild(b);
            return a
        },
        cB: function(a) {
            var b = a.style;
            b.overflow = "hidden";
            "absolute" !== Xa(a).position && (b.position = "relative",
            b.zIndex = 0);
            b.backgroundColor = "#F3F1EC";
            b.color = "#000";
            b.textAlign = "left"
        },
        ga: function() {
            var a = this;
            a.eo = function() {
                var b = a.xb();
                if (a.width !== b.width || a.height !== b.height) {
                    var c = new N(a.width,a.height)
                      , e = new P("onbeforeresize");
                    e.size = c;
                    a.dispatchEvent(e);
                    a.fk((b.width - a.width) / 2, (b.height - a.height) / 2);
                    a.ye.style.width = (a.width = b.width) + "px";
                    a.ye.style.height = (a.height = b.height) + "px";
                    c = new P("onresize");
                    c.size = b;
                    a.dispatchEvent(c)
                }
            }
            ;
            a.M.is && (a.aa.Tl = setInterval(a.eo, 80))
        },
        fk: function(a, b, c, e) {
            var f = this.wa().Xb(this.ja())
              , g = this.Bc
              , i = p;
            if (c && (c instanceof Q || c instanceof J))
                c = Ya(c, this.M.Ia);
            c && Q.VD(c) && (this.ae = new J(c.lng,c.lat),
            i = t);
            if (c = c && e ? g.ii(c, this.Lb) : this.Tb)
                if (this.Tb = new J(c.lng + a * f,c.lat - b * f),
                (a = g.nh(this.Tb, this.Lb)) && i)
                    this.ae = a
        },
        Ig: function(a, b) {
            if (Za(a) && (this.Du(),
            this.dispatchEvent(new P("onzoomstart")),
            a = this.En(a).zoom,
            a !== this.Xa)) {
                this.xc = this.Xa;
                this.Xa = a;
                var c;
                b ? c = b : this.ih() && (c = this.ih().la());
                c && (c = this.Qn(Ya(c, this.M.Ia), this.xc),
                this.fk(this.width / 2 - c.x, this.height / 2 - c.y, this.kg(c, this.xc), p));
                this.dispatchEvent(new P("onzoomstartcode"))
            }
        },
        Qc: function(a) {
            this.Ig(a)
        },
        HF: function(a) {
            this.Ig(this.Xa + 1, a)
        },
        IF: function(a) {
            this.Ig(this.Xa - 1, a)
        },
        qi: function(a) {
            if (a instanceof Q || a instanceof J)
                a = Ya(a, this.M.Ia),
                this.Tb = this.Bc.ii(a, this.Lb),
                this.ae = Q.VD(a) ? new J(a.lng,a.lat) : this.Bc.nh(this.Tb, this.Lb)
        },
        Cg: function(a, b) {
            a = Math.round(a) || 0;
            b = Math.round(b) || 0;
            this.fk(-a, -b)
        },
        Fr: function(a) {
            a && $a(a.Ge) && (a.Ge(this),
            this.dispatchEvent(new P("onaddcontrol",a)))
        },
        lN: function(a) {
            a && $a(a.remove) && (a.remove(),
            this.dispatchEvent(new P("onremovecontrol",a)))
        },
        jo: function(a) {
            a && $a(a.ya) && (a.ya(this),
            this.dispatchEvent(new P("onaddcontextmenu",a)))
        },
        mp: function(a) {
            a && $a(a.remove) && (this.dispatchEvent(new P("onremovecontextmenu",a)),
            a.remove())
        },
        Pa: function(a) {
            a && $a(a.Ge) && (a.Ge(this),
            this.dispatchEvent(new P("onaddoverlay",a)))
        },
        Ob: function(a) {
            a && $a(a.remove) && (a.remove(),
            this.dispatchEvent(new P("onremoveoverlay",a)))
        },
        SJ: function() {
            this.dispatchEvent(new P("onclearoverlays"))
        },
        Ne: function(a) {
            a && this.dispatchEvent(new P("onaddtilelayer",a))
        },
        Yf: function(a) {
            a && this.dispatchEvent(new P("onremovetilelayer",a))
        },
        Gg: function(a) {
            if (this.Sa !== a) {
                this.M.PY && this.m_(a);
                var b = new P("onsetmaptype");
                b.f5 = this.Sa;
                this.Sa = this.M.Sa = a;
                this.Bc = this.Sa.jj();
                this.fk(0, 0, this.Ou(), p);
                this.Du();
                var c = this.En(this.ja()).zoom;
                this.Ig(c);
                this.dispatchEvent(b);
                b = new P("onmaptypechange");
                b.Xa = c;
                b.Sa = a;
                this.dispatchEvent(b);
                a.$E(this.M.Ia);
                (a === ab || a === Sa) && Ra(ya)
            }
        },
        m_: function(a) {
            a === ab || a === Sa ? (this.fy(p),
            this.EN(t),
            this.M.sg = t,
            this.M.ok = t) : (this.fy(t),
            this.EN(p),
            this.M.sg = p,
            this.M.ok = p)
        },
        tf: function(a) {
            var b = this;
            if (a instanceof Q || a instanceof J)
                b.qi(a, {
                    noAnimation: p
                });
            else if (bb(a))
                if (b.Sa === Qa) {
                    var c = H.NB[a];
                    c && (pt = c.o,
                    b.tf(pt))
                } else {
                    var e = this.tH();
                    e.Ft(function(c) {
                        0 === e.nm() && 2 === e.Ma.result.type && (c = c.xk(0).point,
                        c = new J(c.lng,c.lat),
                        c = cb(c, b.M.Ia),
                        b.tf(c),
                        Qa.sk(a) && b.UE(a))
                    });
                    e.search(a, {
                        log: "center"
                    })
                }
        },
        od: function(a, b) {
            "[object Undefined]" !== Object.prototype.toString.call(b) && (b = parseInt(b));
            D.aq("cus.fire", "time", {
                z_loadscripttime: ra - qa
            });
            var c = this;
            if (bb(a))
                if (c.Sa === Qa) {
                    var e = H.NB[a];
                    e && (pt = e.o,
                    c.od(pt, b))
                } else {
                    var f = c.tH();
                    f.Ft(function(e) {
                        if (0 === f.nm() && (2 === f.Ma.result.type || 11 === f.Ma.result.type)) {
                            var g = e.xk(0).point
                              , e = b || db.Nw(f.Ma.content.level, c)
                              , g = new J(g.lng,g.lat);
                            c.od(g, e);
                            Qa.sk(a) && c.UE(a)
                        }
                    });
                    f.search(a, {
                        log: "center"
                    })
                }
            else if ((a instanceof Q || a instanceof J) && b) {
                b = c.En(b).zoom;
                c.xc = c.Xa || b;
                c.Xa = b;
                e = c.ae;
                a = Ya(a, this.M.Ia);
                c.ae = new J(a.lng,a.lat);
                c.Tb = c.Bc.ii(c.ae, c.Lb);
                c.eC = c.eC || c.Xa;
                c.dC = c.dC || c.ae;
                var g = new P("onload")
                  , i = new P("onloadcode");
                g.point = new J(a.lng,a.lat);
                g.pixel = c.Qn(c.ae, c.Xa);
                g.zoom = b;
                c.loaded || (c.loaded = p,
                c.dispatchEvent(g),
                ua || (ua = eb()));
                c.dispatchEvent(i);
                g = new P("onmoveend");
                g.yz = "centerAndZoom";
                e.Sb(c.ae) || c.dispatchEvent(g);
                c.dispatchEvent(new P("onmoveend"));
                c.xc !== c.Xa && (e = new P("onzoomend"),
                e.yz = "centerAndZoom",
                c.dispatchEvent(e));
                c.M.Do && c.Do()
            }
        },
        tH: function() {
            this.aa.nM || (this.aa.nM = new fb(1));
            return this.aa.nM
        },
        reset: function() {
            this.od(this.dC, this.eC, p)
        },
        enableDragging: function() {
            this.M.pc = p
        },
        disableDragging: function() {
            this.M.pc = t
        },
        enableInertialDragging: function() {
            this.M.Hw = p
        },
        disableInertialDragging: function() {
            this.M.Hw = t
        },
        enableScrollWheelZoom: function() {
            this.M.Ho = p
        },
        disableScrollWheelZoom: function() {
            this.M.Ho = t
        },
        enableContinuousZoom: function() {
            this.M.Fo = p
        },
        disableContinuousZoom: function() {
            this.M.Fo = t
        },
        enableDoubleClickZoom: function() {
            this.M.GC = p
        },
        disableDoubleClickZoom: function() {
            this.M.GC = t
        },
        enableKeyboard: function() {
            this.M.Iw = p
        },
        disableKeyboard: function() {
            this.M.Iw = t
        },
        enablePinchToZoom: function() {
            this.M.Go = p
        },
        disablePinchToZoom: function() {
            this.M.Go = t
        },
        enableAutoResize: function() {
            this.M.is = p;
            this.eo();
            this.aa.Tl || (this.aa.Tl = setInterval(this.eo, 80))
        },
        disableAutoResize: function() {
            this.M.is = t;
            this.aa.Tl && (clearInterval(this.aa.Tl),
            this.aa.Tl = q)
        },
        enableBizAuthLogo: function() {
            this.M.CC = p;
            this.qo && this.qo.show()
        },
        disableBizAuthLogo: function() {
            this.M.CC = t;
            this.qo && this.qo.$()
        },
        enableMapClick: function() {
            this.M.fm = p;
            var a = this;
            window.MPC_Mgr && window.MPC_Mgr[a.ca] ? window.MPC_Mgr[a.ca].open() : (setTimeout(function() {
                Ra(za)
            }, 1E3),
            Ta.load("mapclick", function() {
                window.MPC_Mgr = window.MPC_Mgr || {};
                window.MPC_Mgr[a.ca] = new Ua(a)
            }, p))
        },
        disableMapClick: function() {
            window.MPC_Mgr && window.MPC_Mgr[this.ca] && window.MPC_Mgr[this.ca].close();
            this.M.fm = t
        },
        Do: function() {
            this.M.Do = p;
            this.nn || (this.nn = new BuildingLayer({
                S2: p
            }),
            this.Ne(this.nn))
        },
        SV: function() {
            this.M.Do = t;
            this.nn && (this.Yf(this.nn),
            this.nn = q,
            delete this.nn)
        },
        xb: function() {
            return this.Wr && this.Wr instanceof N ? new N(this.Wr.width,this.Wr.height) : new N(this.ab.clientWidth,this.ab.clientHeight)
        },
        Be: function(a) {
            a && a instanceof N ? (this.Wr = a,
            this.ab.style.width = a.width + "px",
            this.ab.style.height = a.height + "px") : this.Wr = q
        },
        Nb: function() {
            return cb(this.ae, this.M.Ia)
        },
        Ou: x("ae"),
        ja: x("Xa"),
        fV: function() {
            this.eo()
        },
        En: function(a) {
            var b = this.M.fc
              , c = this.M.mc
              , e = t
              , a = Math.round(a);
            a < b && (e = p,
            a = b);
            a > c && (e = p,
            a = c);
            return {
                zoom: a,
                SC: e
            }
        },
        Ra: x("ab"),
        yc: function(a, b) {
            a = Ya(a, this.M.Ia);
            b = b || this.ja();
            return this.Bc.yc(a, b, this.Tb, this.xb(), this.Lb)
        },
        Qn: function(a, b) {
            b = b || this.ja();
            return this.Bc.yc(a, b, this.Tb, this.xb(), this.Lb)
        },
        kg: function(a, b) {
            b = b || this.ja();
            return this.Bc.Zb(a, b, this.Tb, this.xb(), this.Lb)
        },
        Zb: function(a, b) {
            return cb(this.kg(a, b), this.M.Ia)
        },
        Ye: function(a, b) {
            if (a) {
                var a = Ya(a, this.M.Ia)
                  , c = this.Qn(new J(a.lng,a.lat), b);
                c.x -= this.offsetX;
                c.y -= this.offsetY;
                return c
            }
        },
        SY: function(a, b) {
            b = b || this.ja();
            return this.Bc.TY(a, b, this.Tb, this.xb(), this.Lb)
        },
        RY: function(a, b) {
            if (a) {
                var c = this.SY(new J(a.lng,a.lat), b);
                c.x -= this.offsetX;
                c.y -= this.offsetY;
                return c
            }
        },
        XM: function(a, b) {
            if (a) {
                var c = new R(a.x,a.y);
                c.x += this.offsetX;
                c.y += this.offsetY;
                return this.Zb(c, b)
            }
        },
        TS: function(a, b) {
            if (a) {
                var c = new R(a.x,a.y);
                c.x += this.offsetX;
                c.y += this.offsetY;
                return this.kg(c, b)
            }
        },
        pointToPixelFor3D: function(a, b) {
            var c = map.Lb;
            this.Sa === Qa && c && gb.YJ(a, this, b)
        },
        W4: function(a, b) {
            var c = map.Lb;
            this.Sa === Qa && c && gb.XJ(a, this, b)
        },
        X4: function(a, b) {
            var c = this
              , e = map.Lb;
            c.Sa === Qa && e && gb.YJ(a, c, function(a) {
                a.x -= c.offsetX;
                a.y -= c.offsetY;
                b && b(a)
            })
        },
        U4: function(a, b) {
            var c = map.Lb;
            this.Sa === Qa && c && (a.x += this.offsetX,
            a.y += this.offsetY,
            gb.XJ(a, this, b))
        },
        te: function(a) {
            if (!this.ux())
                return new hb;
            var b = a || {}
              , a = b.margins || [0, 0, 0, 0]
              , c = b.zoom || q
              , b = this.Zb({
                x: a[3],
                y: this.height - a[2]
            }, c)
              , a = this.Zb({
                x: this.width - a[1],
                y: a[0]
            }, c);
            return new hb(b,a)
        },
        ux: function() {
            return !!this.loaded
        },
        vR: function(a, b) {
            for (var c = this.wa(), e = b.margins || [10, 10, 10, 10], f = b.zoomFactor || 0, g = e[1] + e[3], e = e[0] + e[2], i = c.mf(), k = c = c.Te(); k >= i; k--) {
                var m = this.wa().Xb(k);
                if (a.sF().lng / m < this.width - g && a.sF().lat / m < this.height - e)
                    break
            }
            k += f;
            k < i && (k = i);
            k > c && (k = c);
            return k
        },
        Gs: function(a, b) {
            var c = {
                center: this.Nb(),
                zoom: this.ja()
            };
            if (!a || !a instanceof hb && 0 === a.length || a instanceof hb && a.rj())
                return c;
            var e = [];
            a instanceof hb ? (e.push(a.Qf()),
            e.push(a.Ve())) : e = a.slice(0);
            for (var b = b || {}, f = [], g = 0, i = e.length; g < i; g++) {
                var k = Ya(e[g], this.M.Ia);
                f.push(this.Bc.ii(k, this.Lb))
            }
            e = new hb;
            for (g = f.length - 1; 0 <= g; g--)
                e.extend(f[g]);
            if (e.rj())
                return c;
            c = e.Nb();
            f = this.vR(e, b);
            b.margins && (e = b.margins,
            g = (e[1] - e[3]) / 2,
            e = (e[0] - e[2]) / 2,
            i = this.wa().Xb(f),
            b.offset && (g = b.offset.width,
            e = b.offset.height),
            c.lng += i * g,
            c.lat += i * e);
            c = this.Bc.nh(c, this.Lb);
            return {
                center: cb(new J(c.lng,c.lat), this.M.Ia),
                zoom: f
            }
        },
        vh: function(a, b) {
            var c;
            c = a && a.center ? a : this.Gs(a, b);
            var b = b || {}
              , e = b.delay || 200;
            if (c.zoom === this.Xa && b.enableAnimation !== t) {
                var f = this;
                setTimeout(function() {
                    f.qi(c.center, {
                        duration: 210
                    })
                }, e)
            } else
                this.od(c.center, c.zoom)
        },
        Rf: x("Xd"),
        ih: function() {
            return this.aa.sb && this.aa.sb.bb() ? this.aa.sb : q
        },
        getDistance: function(a, b) {
            if (a && b) {
                if (a.Sb(b))
                    return 0;
                var c = this.M ? this.M.Ia : 5
                  , a = Ya(a, c)
                  , b = Ya(b, c)
                  , c = 0
                  , c = T.uk(a, b);
                if (c === q || c === l)
                    c = 0;
                return c
            }
        },
        Zw: function() {
            var a = []
              , b = this.Ba
              , c = this.De;
            if (b)
                for (var e in b)
                    b[e]instanceof ib && a.push(b[e]);
            if (c) {
                e = 0;
                for (b = c.length; e < b; e++)
                    a.push(c[e])
            }
            return a
        },
        wa: function() {
            this.Sa.$E(this.M.Ia);
            return this.Sa
        },
        LX: x("Dd"),
        su: function() {
            for (var a = this.aa.GE; a < D.hr.length; a++)
                D.hr[a](this);
            this.aa.GE = a
        },
        UE: function(a) {
            this.Lb = Qa.sk(a);
            this.nw = Qa.TK(this.Lb);
            this.Sa === Qa && this.Bc instanceof jb && (this.Bc.$i = this.Lb)
        },
        setDefaultCursor: function(a) {
            this.M.wc = a;
            this.platform && (this.platform.style.cursor = this.M.wc)
        },
        getDefaultCursor: function() {
            return this.M.wc
        },
        setDraggingCursor: function(a) {
            this.M.Gd = a
        },
        getDraggingCursor: function() {
            return this.M.Gd
        },
        mx: function() {
            return this.M.rW && 1.5 <= this.M.devicePixelRatio
        },
        wB: function(a, b) {
            b ? this.Gh[b] || (this.Gh[b] = {}) : b = "custom";
            a.tag = b;
            a instanceof kb && (this.Gh[b][a.ca] = a,
            a.ya(this));
            var c = this;
            Ta.load("hotspot", function() {
                c.su()
            }, p)
        },
        KZ: function(a, b) {
            b || (b = "custom");
            this.Gh[b][a.ca] && delete this.Gh[b][a.ca]
        },
        qw: function(a) {
            a || (a = "custom");
            this.Gh[a] = {}
        },
        Du: function() {
            var a = this.Sa.mf()
              , b = this.Sa.Te()
              , c = this.M;
            c.fc = c.AO || a;
            c.mc = c.zO || b;
            c.fc < a && (c.fc = a);
            c.mc > b && (c.mc = b)
        },
        setMinZoom: function(a) {
            a = Math.round(a);
            a > this.M.mc && (a = this.M.mc);
            this.M.AO = a;
            this.aJ()
        },
        setMaxZoom: function(a) {
            a = Math.round(a);
            a < this.M.fc && (a = this.M.fc);
            this.M.zO = a;
            this.aJ()
        },
        aJ: function() {
            this.Du();
            var a = this.M;
            this.Xa < a.fc ? this.Qc(a.fc) : this.Xa > a.mc && this.Qc(a.mc);
            var b = new P("onzoomspanchange");
            b.fc = a.fc;
            b.mc = a.mc;
            this.dispatchEvent(b)
        },
        L3: x("qB"),
        getKey: function() {
            return pa
        },
        o_: function(a) {
            function b(a) {
                c.L_ = a;
                var b = D.nd + "custom/v2/mapstyle"
                  , g = "version=4&ak=" + pa + "&"
                  , g = g + "is_all=true&is_new=1&" + ("styles=" + encodeURIComponent(c.lF(a, f)));
                lb(b, g, window[e + "cb"])
            }
            var c = this
              , e = this.ca;
            D.aq("cus.fire", "count", "z_setmapstylev2count");
            this.fy(t);
            this.M.PY = p;
            window.MPC_Mgr && window.MPC_Mgr[c.ca] && window.MPC_Mgr[c.ca].close();
            c.M.fm = t;
            this.addEventListener("hidecopyright", function() {
                c.kk.$();
                c.M.yo = !!a.customEditor;
                c.M.yo === t && c.TE(new N(1,1))
            });
            c.kk && c.kk.$();
            this.M.yo = !!a.customEditor;
            this.M.D5 = !!a.sharing;
            this.M.j5 = !!a.preview;
            this.M.yo === t && this.TE(new N(1,1));
            Ta.load("hotspot", function() {
                c.su()
            }, p);
            window[e + "zoomRegion"] = {};
            window.o6 = [];
            window[e + "zoomStyleBody"] = [];
            window[e + "zoomFrontStyle"] = {};
            var f = this.ja();
            A.extend({}, a);
            window[e + "cb"] = function(a) {
                a = JSON.parse(a);
                0 === a.status && (3 === a.data.style.length ? (window[e + "_bmap_baseFs"] = a.data.style,
                window[e + "StyleBody"] = a.data.style[2]) : window[e + "StyleBody"] = a.data.style,
                c.vO(),
                c.qY())
            }
            ;
            if (a.styleId) {
                var g = "jsapi";
                a.sharing ? g = "sharing" : a.preview && (g = "preview");
                this.jX(a.styleId, g, b)
            } else
                b(a.styleJson);
            window.iconSetInfo_high || oa(D.url.proto + D.url.domain.TILE_ONLINE_URLS[0] + "/sty/icons_na2x.js?udt=20190108&v=001&from=jsapi")
        },
        jX: function(a, b, c) {
            var e = this
              , f = this.ca
              , g = (1E5 * Math.random()).toFixed(0);
            window[f + "_cbk_si_phpui" + g] = function(a) {
                var b = [];
                a.result && (0 === a.result.error && a.content && 0 === a.content.status) && (b = e.Px(a.content.data.json));
                c && c(b)
            }
            ;
            window[f + "_cbk_si_api" + g] = function(a) {
                var b = [];
                0 === a.status && (b = a.info ? e.Px(a.info.json) : e.Px(a.data.json));
                c && c(b)
            }
            ;
            var i = "/apiconsole/custommap/";
            switch (b) {
            case "jsapi":
                i = D.nd + "?qt=custom_map&v=3.0";
                i += "&style_id=" + a + "&type=publish&ak=" + pa;
                i += "&callback=" + f + "_cbk_si_phpui" + g;
                break;
            case "sharing":
                i = i + "getSharingJson" + ("?styleid=" + a + "&type=edit") + ("&ck=" + f + "_cbk_si_api" + g);
                break;
            case "preview":
                i = i + "getJson" + ("?styleid=" + a + "&type=edit") + ("&ck=" + f + "_cbk_si_api" + g)
            }
            oa(i)
        },
        MV: function() {
            Array.prototype.map || (Array.prototype.map = function(a, b) {
                var c, e, f;
                this == q && aa(new TypeError(" this is null or not defined"));
                var g = Object(this)
                  , i = g.length >>> 0;
                "[object Function]" != Object.prototype.toString.call(a) && aa(new TypeError(a + " is not a function"));
                b && (c = b);
                e = Array(i);
                for (f = 0; f < i; ) {
                    var k;
                    f in g && (k = g[f],
                    k = a.call(c, k, f, g),
                    e[f] = k);
                    f++
                }
                return e
            }
            )
        },
        Px: function(a) {
            if (a === q || "" === a)
                return [];
            this.MV();
            var b = {
                t: "featureType",
                e: "elementType",
                v: "visibility",
                c: "color",
                l: "lightness",
                s: "saturation",
                w: "weight",
                z: "level",
                h: "hue",
                f: "fontsize",
                zri: "curZoomRegionId",
                zr: "curZoomRegion"
            }
              , c = {
                all: "all",
                g: "geometry",
                "g.f": "geometry.fill",
                "g.s": "geometry.stroke",
                l: "labels",
                "l.t.f": "labels.text.fill",
                "l.t.s": "labels.text.stroke",
                "l.t": "labels.text",
                "l.i": "labels.icon",
                "g.tf": "geometry.fill"
            };
            return a.split(",").map(function(a) {
                var a = a.split("|").map(function(a) {
                    var e = b[a.split(":")[0]]
                      , a = c[a.split(":")[1]] ? c[a.split(":")[1]] : a.split(":")[1];
                    switch (a) {
                    case "poi":
                        a = "poilabel";
                        break;
                    case "districtlabel":
                        a = "districtlabel"
                    }
                    var f = {};
                    f[e] = a;
                    return f
                })
                  , f = a[0]
                  , g = 1;
                a[1].elementType && (g = 2,
                A.extend(f, a[1]));
                for (var i = {}; g < a.length; g++)
                    A.extend(i, a[g]);
                return A.extend(f, {
                    stylers: i
                })
            })
        },
        QX: function() {
            return this.$e.gg
        },
        y3: function(a, b) {
            var c = this
              , e = this.ca
              , f = (1E5 * Math.random()).toFixed(0);
            window[e + "_cbk" + f] = function(b) {
                b = JSON.parse(b);
                b = 3 === b.data.style.length ? b.data.style[2] : b.data.style;
                c.r0(b, a);
                c.vO(a);
                b = new P("onzoomfeatureload" + a);
                c.dispatchEvent(b);
                delete window[e + "_cbk" + f]
            }
            ;
            var g = D.nd + "custom/v2/mapstyle"
              , i = "ak=" + pa + "&"
              , i = i + "is_all=true&is_new=1&";
            b.styleJson ? i += "styles=" + encodeURIComponent(this.lF(b.styleJson, parseInt(a, 10))) : b.styleId && (i += "styles=" + encodeURIComponent(c.lF(c.L_, parseInt(a, 10))));
            lb(g, i, window[e + "_cbk" + f])
        },
        TE: function(a, b) {
            var c = new P("oncopyrightoffsetchange",{
                kE: a,
                AV: b
            });
            this.M.bK = b;
            this.dispatchEvent(c)
        },
        Bt: function(a) {
            var b = this;
            window.MPC_Mgr && window.MPC_Mgr[b.ca] && window.MPC_Mgr[b.ca].close();
            b.M.fm = t;
            D.aq("cus.fire", "count", "z_setmapstylecount");
            if (a) {
                b = this;
                a.styleJson && (a.styleStr = b.M_(a.styleJson));
                I() && A.fa.ay ? setTimeout(function() {
                    b.M.xe = a;
                    b.dispatchEvent(new P("onsetcustomstyles",a))
                }, 50) : (this.M.xe = a,
                this.dispatchEvent(new P("onsetcustomstyles",a)),
                this.LL(b.M.xe.geotableId));
                var c = {
                    style: a.style
                };
                a.features && 0 < a.features.length && (c.features = p);
                a.styleJson && 0 < a.styleJson.length && (c.styleJson = p);
                Ra(5050, c);
                a.style && (c = b.M.UB[a.style] ? b.M.UB[a.style].backColor : b.M.UB.normal.backColor) && (this.Ra().style.backgroundColor = c)
            }
        },
        jY: function(a) {
            this.controls || (this.controls = {
                navigationControl: new mb,
                scaleControl: new nb,
                overviewMapControl: new ob,
                mapTypeControl: new pb
            });
            var b = this, c;
            for (c in this.controls)
                b.lN(b.controls[c]);
            a = a || [];
            A.jc.Mb(a, function(a) {
                b.Fr(b.controls[a])
            })
        },
        LL: function(a) {
            a ? this.Ur && this.Ur.Bf === a || (this.Yf(this.Ur),
            this.Ur = new qb({
                geotableId: a
            }),
            this.Ne(this.Ur)) : this.Yf(this.Ur)
        },
        Od: function() {
            var a = this.ja() >= this.M.AF && this.wa() === Na && 18 >= this.ja()
              , b = t;
            try {
                document.createElement("canvas").getContext("2d"),
                b = p
            } catch (c) {
                b = t
            }
            return a && b
        },
        getCurrentCity: function() {
            return {
                name: this.bh,
                code: this.Ir
            }
        },
        Cs: function() {
            this.W.Jn();
            return this.W
        },
        nY: function(a) {
            Na.setMaxZoom(a.maxZoom || 19);
            var b = new P("oninitindoorlayer");
            b.We = a;
            this.dispatchEvent(b);
            this.M.sg = t
        },
        qY: function(a) {
            if (this.M.sg) {
                var b = new P("onupdatestyles");
                this.dispatchEvent(b)
            } else
                b = new P("oninitindoorlayer"),
                b.We = a,
                this.dispatchEvent(b),
                this.M.sg = p,
                this.M.ok = p
        },
        fy: function(a) {
            this.M.uE = a;
            this.$e.Ib || (this.$e.Ib = this.$e.tj[0].Ib);
            this.$e.Ib.parentElement.style.display = a ? "block" : "none"
        },
        EN: function(a) {
            this.$e.gg.style.display = a ? "block" : "none"
        },
        setPanorama: function(a) {
            this.W = a;
            this.W.XE(this)
        },
        lF: function(a, b) {
            for (var c = this.ca, e = {
                featureType: "t",
                elementType: "e",
                visibility: "v",
                color: "c",
                lightness: "l",
                saturation: "s",
                weight: "w",
                level: "z",
                hue: "h",
                fontsize: "f"
            }, f = {
                all: "all",
                geometry: "g",
                "geometry.fill": "g.f",
                "geometry.stroke": "g.s",
                labels: "l",
                "labels.text.fill": "l.t.f",
                "labels.text.stroke": "l.t.s",
                "labels.text": "l.t",
                "labels.icon": "l.i",
                "geometry.topfill": "g.f"
            }, g = [], i = this.Sa.mf(); i <= this.Sa.Te(); i++)
                window[c + "zoomFrontStyle"][i] = {};
            window[c + "zoomFrontStyle"].main = {};
            for (var i = 0, k; k = a[i]; i++)
                if (!this.zY(k)) {
                    b = this.dX(k, b);
                    if (("land" === k.featureType || "all" === k.featureType || "background" === k.featureType) && "string" === typeof k.elementType && ("geometry" === k.elementType || "geometry.fill" === k.elementType || "all" === k.elementType) && k.stylers)
                        k.stylers.color && (window[c + "zoomFrontStyle"][b].bmapLandColor = k.stylers.color),
                        k.stylers.visibility && "off" === k.stylers.visibility && (window[c + "zoomFrontStyle"][b].bmapLandColor = "#00000000");
                    "railway" === k.featureType && ("string" === typeof k.elementType && k.stylers) && (k.stylers.color && ("geometry" === k.elementType && (window[c + "zoomFrontStyle"][b].bmapRailwayFillColor = k.stylers.color,
                    window[c + "zoomFrontStyle"][b].bmapRailwayStrokeColor = k.stylers.color),
                    "geometry.fill" === k.elementType && (window[c + "zoomFrontStyle"][b].bmapRailwayFillColor = k.stylers.color),
                    "geometry.stroke" === k.elementType && (window[c + "zoomFrontStyle"][b].bmapRailwayStrokeColor = k.stylers.color)),
                    k.stylers.visibility && (window[c + "zoomFrontStyle"][b].bmapRailwayVisibility = k.stylers.visibility));
                    "roadarrow" === k.featureType && ("labels.icon" === k.elementType && k.stylers) && (window[c + "zoomFrontStyle"][b].bmapRoadarrowVisibility = k.stylers.visibility);
                    var m = {};
                    A.extend(m, k);
                    k = m.stylers;
                    delete m.stylers;
                    A.extend(m, k);
                    k = [];
                    for (var n in e)
                        if (m[n] && !this.vY(n))
                            if ("elementType" === n)
                                k.push(e[n] + ":" + f[m[n]]);
                            else {
                                switch (m[n]) {
                                case "poilabel":
                                    m[n] = "poi";
                                    break;
                                case "districtlabel":
                                    m[n] = "label"
                                }
                                k.push(e[n] + ":" + m[n])
                            }
                    2 < k.length && g.push(k.join("|"))
                }
            return g.join(",")
        },
        M_: function(a) {
            for (var b = {
                featureType: "t",
                elementType: "e",
                visibility: "v",
                color: "c",
                lightness: "l",
                saturation: "s",
                weight: "w",
                zoom: "z",
                hue: "h"
            }, c = {
                all: "all",
                geometry: "g",
                "geometry.fill": "g.f",
                "geometry.stroke": "g.s",
                labels: "l",
                "labels.text.fill": "l.t.f",
                "labels.text.stroke": "l.t.s",
                "lables.text": "l.t",
                "labels.icon": "l.i"
            }, e = [], f = 0, g; g = a[f]; f++) {
                var i = g.stylers;
                delete g.stylers;
                A.extend(g, i);
                var i = [], k;
                for (k in b)
                    if (g[k])
                        if ("elementType" === k)
                            i.push(b[k] + ":" + c[g[k]]);
                        else {
                            switch (g[k]) {
                            case "poilabel":
                                g[k] = "poi";
                                break;
                            case "districtlabel":
                                g[k] = "label"
                            }
                            i.push(b[k] + ":" + g[k])
                        }
                2 < i.length && e.push(i.join("|"))
            }
            return e.join(",")
        },
        dX: function(a) {
            a = a.stylers.level;
            return a === l ? "main" : parseInt(a, 10)
        },
        zY: function(a) {
            var b = {};
            A.extend(b, a.stylers);
            delete b.curZoomRegionId;
            delete b.curZoomRegion;
            delete b.level;
            return A.TD(b) ? p : t
        },
        k4: function(a, b) {
            var c = a.stylers.level;
            return c === l ? p : c === b + "" ? p : t
        },
        vY: function(a) {
            return {
                curZoomRegionId: p,
                curZoomRegion: p
            }[a] ? p : t
        },
        M3: function(a, b) {
            var c = a.stylers.level
              , e = {};
            A.extend(e, b);
            c !== l && (e[parseInt(c, 10)] = p);
            return e
        },
        r0: function(a, b) {
            var c = this.ca;
            window[c + "zoomStyleBody"][b] = a;
            if (!window[c + "zoomRegion"][b])
                for (var e = this.Sa.mf(), f = this.Sa.Te(); e <= f; e++)
                    window[c + "zoomRegion"][e] || (window[c + "zoomStyleBody"][e] = a)
        },
        vO: function() {
            var a = this.ca;
            if (window[a + "zoomFrontStyle"].main.bmapRoadarrowVisibility)
                for (var b = this.Sa.mf(); b <= this.Sa.Te(); b++)
                    window[a + "zoomFrontStyle"][b].bmapRoadarrowVisibility || (window[a + "zoomFrontStyle"][b].bmapRoadarrowVisibility = window[a + "zoomFrontStyle"].main.bmapRoadarrowVisibility);
            if (window[a + "zoomFrontStyle"].main.bmapLandColor)
                for (b = this.Sa.mf(); b <= this.Sa.Te(); b++)
                    window[a + "zoomFrontStyle"][b].bmapLandColor || (window[a + "zoomFrontStyle"][b].bmapLandColor = window[a + "zoomFrontStyle"].main.bmapLandColor);
            if (window[a + "zoomFrontStyle"].main.bmapRailwayFillColor)
                for (b = this.Sa.mf(); b <= this.Sa.Te(); b++)
                    window[a + "zoomFrontStyle"][b].bmapRailwayFillColor || (window[a + "zoomFrontStyle"][b].bmapRailwayFillColor = window[a + "zoomFrontStyle"].main.bmapRailwayFillColor);
            if (window[a + "zoomFrontStyle"].main.bmapRailwayStrokeColor)
                for (b = this.Sa.mf(); b <= this.Sa.Te(); b++)
                    window[a + "zoomFrontStyle"][b].bmapRailwayStrokeColor || (window[a + "zoomFrontStyle"][b].bmapRailwayStrokeColor = window[a + "zoomFrontStyle"].main.bmapRailwayStrokeColor);
            if (window[a + "zoomFrontStyle"].main.bmapRailwayVisibility)
                for (b = this.Sa.mf(); b <= this.Sa.Te(); b++)
                    window[a + "zoomFrontStyle"][b].bmapRailwayVisibility || (window[a + "zoomFrontStyle"][b].bmapRailwayVisibility = window[a + "zoomFrontStyle"].main.bmapRailwayVisibility)
        },
        m2: function(a, b) {
            var c = {};
            A.extend(c, a);
            if (c[b]) {
                for (var e = this.Sa.mf(), f = this.Sa.Te(); e <= f; e++)
                    if (!c[e]) {
                        c[e] = p;
                        break
                    }
                delete c[b]
            }
            return c
        },
        i4: function(a) {
            return a.Qs || "0" === a.uid ? t : p
        },
        jV: function() {
            delete this.Ei.AZ
        },
        r2: function() {
            this.Ei = {}
        },
        io: function(a, b, c) {
            if (!this.M.yo)
                return t;
            a = a || "sp" + this.aa.G5++;
            if (b && 0 !== b.length)
                return c = c || {},
                this.Ei[a] = this.Ei[a] || {
                    polygon: [],
                    polyline: []
                },
                this.Ei = this.Ei || {},
                this.Ei[a][c.type].push({
                    gF: b,
                    Vb: c.Vb,
                    type: c.type,
                    style: c.style
                }),
                a
        },
        EF: function(a) {
            return rb / Math.pow(2, 18 - a)
        }
    });
    var rb = 4.007545274461451E7;
    function Ra(a, b) {
        if (a) {
            var b = b || {}, c = "", e;
            for (e in b)
                c = c + "&" + e + "=" + encodeURIComponent(b[e]);
            var f = function(a) {
                a && (sb = p,
                setTimeout(function() {
                    tb.src = D.nd + "images/blank.gif?" + a.src
                }, 50))
            }
              , g = function() {
                var a = ub.shift();
                a && f(a)
            };
            e = (1E8 * Math.random()).toFixed(0);
            sb ? ub.push({
                src: "product=jsapi&sub_product=jsapi&v=" + D.version + "&sub_product_v=" + D.version + "&t=" + e + "&code=" + a + "&da_src=" + a + c
            }) : f({
                src: "product=jsapi&sub_product=jsapi&v=" + D.version + "&sub_product_v=" + D.version + "&t=" + e + "&code=" + a + "&da_src=" + a + c
            });
            vb || (A.V(tb, "load", function() {
                sb = t;
                g()
            }),
            A.V(tb, "error", function() {
                sb = t;
                g()
            }),
            vb = p)
        }
    }
    var sb, vb, ub = [], tb = new Image;
    Ra(5E3, {
        device_pixel_ratio: window.devicePixelRatio,
        platform: navigator.platform
    });
    D.FL = {
        TILE_BASE_URLS: ["gss0.bdstatic.com/5bwHcj7lABFU8t_jkk_Z1zRvfdw6buu", "gss0.bdstatic.com/5bwHcj7lABFV8t_jkk_Z1zRvfdw6buu", "gss0.bdstatic.com/5bwHcj7lABFS8t_jkk_Z1zRvfdw6buu", "gss0.bdstatic.com/5bwHcj7lABFT8t_jkk_Z1zRvfdw6buu", "gss0.bdstatic.com/5bwHcj7lABFY8t_jkk_Z1zRvfdw6buu"],
        TILE_ONLINE_URLS: ["maponline0.bdimg.com", "maponline1.bdimg.com", "maponline2.bdimg.com", "maponline3.bdimg.com"],
        TIlE_PERSPECT_URLS: ["gss0.bdstatic.com/-OR1cTe9KgQFm2e88IuM_a", "gss0.bdstatic.com/-ON1cTe9KgQFm2e88IuM_a", "gss0.bdstatic.com/-OZ1cTe9KgQFm2e88IuM_a", "gss0.bdstatic.com/-OV1cTe9KgQFm2e88IuM_a"],
        geolocControl: "gsp0.baidu.com/8LkJsjOpB1gCo2Kml5_Y_D3",
        TILES_YUN_HOST: ["gsp0.baidu.com/-eR1bSahKgkFkRGko9WTAnF6hhy", "gsp0.baidu.com/-eN1bSahKgkFkRGko9WTAnF6hhy", "gsp0.baidu.com/-eZ1bSahKgkFkRGko9WTAnF6hhy", "gsp0.baidu.com/-eV1bSahKgkFkRGko9WTAnF6hhy"],
        traffic: "gsp0.baidu.com/7_AZsjOpB1gCo2Kml5_Y_DAcsMJiwa",
        iw_pano: "gss0.bdstatic.com/5LUZemba_QUU8t7mm9GUKT-xh_",
        message: "gsp0.baidu.com/7vo0bSba2gU2pMbgoY3K",
        baidumap: "gsp0.baidu.com/80MWsjip0QIZ8tyhnq",
        wuxian: "gsp0.baidu.com/6a1OdTeaKgQFm2e88IuM_a",
        pano: ["gss0.bdstatic.com/5LUZemba_QUU8t7mm9GUKT-xh_", "gss0.bdstatic.com/5LUZemfa_QUU8t7mm9GUKT-xh_", "gss0.bdstatic.com/5LUZemja_QUU8t7mm9GUKT-xh_"],
        main_domain_nocdn: {
            baidu: "gsp0.baidu.com/9_Q4sjOpB1gCo2Kml5_Y_D3",
            other: "api.map.baidu.com"
        },
        main_domain_cdn: {
            baidu: ["gss0.bdstatic.com/9_Q4vHSd2RZ3otebn9fN2DJv", "gss0.baidu.com/9_Q4vXSd2RZ3otebn9fN2DJv", "gss0.bdstatic.com/9_Q4vnSd2RZ3otebn9fN2DJv"],
            other: ["api.map.baidu.com"],
            webmap: ["gss0.baidu.com/6b1IcTe9R1gBo1vgoIiO_jowehsv"]
        },
        map_click: "gsp0.baidu.com/80MWbzKh2wt3n2qy8IqW0jdnxx1xbK",
        vector_traffic: "gss0.bdstatic.com/8aZ1cTe9KgQIm2_p8IuM_a"
    };
    D.aY = {
        TILE_BASE_URLS: ["shangetu0.map.bdimg.com", "shangetu1.map.bdimg.com", "shangetu2.map.bdimg.com", "shangetu3.map.bdimg.com", "shangetu4.map.bdimg.com"],
        TILE_ONLINE_URLS: ["maponline0.bdimg.com", "maponline1.bdimg.com", "maponline2.bdimg.com", "maponline3.bdimg.com"],
        TIlE_PERSPECT_URLS: ["d0.map.baidu.com", "d1.map.baidu.com", "d2.map.baidu.com", "d3.map.baidu.com"],
        geolocControl: "loc.map.baidu.com",
        TILES_YUN_HOST: ["g0.api.map.baidu.com", "g1.api.map.baidu.com", "g2.api.map.baidu.com", "g3.api.map.baidu.com"],
        traffic: "its.map.baidu.com:8002",
        iw_pano: "mapsv0.bdimg.com",
        message: "j.map.baidu.com",
        baidumap: "map.baidu.com",
        wuxian: "wuxian.baidu.com",
        pano: ["mapsv0.bdimg.com", "mapsv1.bdimg.com"],
        main_domain_nocdn: {
            baidu: "api.map.baidu.com"
        },
        main_domain_cdn: {
            baidu: ["api0.map.bdimg.com", "api1.map.bdimg.com", "api2.map.bdimg.com"],
            webmap: ["webmap0.map.bdimg.com"]
        },
        map_click: "mapclick.map.baidu.com",
        vector_traffic: "or.map.bdimg.com"
    };
    D.s0 = {
        "0": {
            proto: "http://",
            domain: D.aY
        },
        1: {
            proto: "https://",
            domain: D.FL
        },
        2: {
            proto: "https://",
            domain: D.FL
        }
    };
    window.BMAP_PROTOCOL && "https" === window.BMAP_PROTOCOL && (window.HOST_TYPE = 2);
    D.$t = window.HOST_TYPE || "0";
    D.url = D.s0[D.$t];
    D.fp = D.url.proto + D.url.domain.baidumap + "/";
    D.nd = D.url.proto + ("2" == D.$t ? D.url.domain.main_domain_nocdn.other : D.url.domain.main_domain_nocdn.baidu) + "/";
    D.oa = D.url.proto + ("2" == D.$t ? D.url.domain.main_domain_cdn.other[0] : D.url.domain.main_domain_nocdn.baidu) + "/";
    D.Yi = D.url.proto + D.url.domain.main_domain_cdn.webmap[0] + "/";
    D.di = function(a, b) {
        var c, e, b = b || "";
        switch (a) {
        case "main_domain_nocdn":
            c = D.nd + b;
            break;
        case "main_domain_cdn":
            c = D.oa + b;
            break;
        default:
            e = D.url.domain[a],
            "[object Array]" == Object.prototype.toString.call(e) ? (c = [],
            A.jc.Mb(e, function(a, e) {
                c[e] = D.url.proto + a + "/" + b
            })) : c = D.url.proto + D.url.domain[a] + "/" + b
        }
        return c
    }
    ;
    function wb(a) {
        var b = {
            duration: 1E3,
            Ic: 30,
            Ao: 0,
            ac: xb.jM,
            it: u()
        };
        this.ag = [];
        if (a)
            for (var c in a)
                b[c] = a[c];
        this.m = b;
        if (Za(b.Ao)) {
            var e = this;
            setTimeout(function() {
                e.start()
            }, b.Ao)
        } else
            b.Ao != yb && this.start()
    }
    var yb = "INFINITE";
    wb.prototype.start = function() {
        this.uu = eb();
        this.xz = this.uu + this.m.duration;
        zb(this)
    }
    ;
    wb.prototype.add = function(a) {
        this.ag.push(a)
    }
    ;
    function zb(a) {
        var b = eb();
        b >= a.xz ? ($a(a.m.za) && a.m.za(a.m.ac(1)),
        $a(a.m.finish) && a.m.finish(),
        0 < a.ag.length && (b = a.ag[0],
        b.ag = [].concat(a.ag.slice(1)),
        b.start())) : (a.by = a.m.ac((b - a.uu) / a.m.duration),
        $a(a.m.za) && a.m.za(a.by),
        a.mF || (a.Ar = setTimeout(function() {
            zb(a)
        }, 1E3 / a.m.Ic)))
    }
    wb.prototype.stop = function(a) {
        this.mF = p;
        for (var b = 0; b < this.ag.length; b++)
            this.ag[b].stop(),
            this.ag[b] = q;
        this.ag.length = 0;
        this.Ar && (clearTimeout(this.Ar),
        this.Ar = q);
        this.m.it(this.by);
        a && (this.xz = this.uu,
        zb(this))
    }
    ;
    wb.prototype.cancel = ga(1);
    var xb = {
        jM: function(a) {
            return a
        },
        reverse: function(a) {
            return 1 - a
        },
        AC: function(a) {
            return a * a
        },
        yC: function(a) {
            return Math.pow(a, 3)
        },
        gs: function(a) {
            return -(a * (a - 2))
        },
        xK: function(a) {
            return Math.pow(a - 1, 3) + 1
        },
        zC: function(a) {
            return 0.5 > a ? 2 * a * a : -2 * (a - 2) * a - 1
        },
        I2: function(a) {
            return 0.5 > a ? 4 * Math.pow(a, 3) : 4 * Math.pow(a - 1, 3) + 1
        },
        J2: function(a) {
            return (1 - Math.cos(Math.PI * a)) / 2
        }
    };
    xb["ease-in"] = xb.AC;
    xb["ease-out"] = xb.gs;
    var H = {
        LF: 34,
        MF: 21,
        NF: new N(21,32),
        QO: new N(10,32),
        PO: new N(24,36),
        OO: new N(12,36),
        JF: new N(13,1),
        sa: D.oa + "images/",
        c4: "http://api0.map.bdimg.com/images/",
        KF: D.oa + "images/markers_new.png",
        MO: 24,
        NO: 73,
        NB: {
            "\u5317\u4eac": {
                Sx: "bj",
                o: new J(116.403874,39.914889)
            },
            "\u4e0a\u6d77": {
                Sx: "sh",
                o: new J(121.487899,31.249162)
            },
            "\u6df1\u5733": {
                Sx: "sz",
                o: new J(114.025974,22.546054)
            },
            "\u5e7f\u5dde": {
                Sx: "gz",
                o: new J(113.30765,23.120049)
            }
        },
        fontFamily: "arial,sans-serif"
    };
    A.fa.Re ? (A.extend(H, {
        jK: "url(" + H.sa + "ruler.cur),crosshair",
        wc: "-moz-grab",
        Gd: "-moz-grabbing"
    }),
    A.platform.XL && (H.fontFamily = "arial,simsun,sans-serif")) : A.fa.mw || A.fa.ay ? A.extend(H, {
        jK: "url(" + H.sa + "ruler.cur) 2 6,crosshair",
        wc: "url(" + H.sa + "openhand.cur) 8 8,default",
        Gd: "url(" + H.sa + "closedhand.cur) 8 8,move"
    }) : A.extend(H, {
        jK: "url(" + H.sa + "ruler.cur),crosshair",
        wc: "url(" + H.sa + "openhand.cur),default",
        Gd: "url(" + H.sa + "closedhand.cur),move"
    });
    function Ab(a, b) {
        var c = a.style;
        c.left = b[0] + "px";
        c.top = b[1] + "px"
    }
    function Bb(a) {
        0 < A.fa.na ? a.unselectable = "on" : a.style.MozUserSelect = "none"
    }
    function Cb(a) {
        return a && a.parentNode && 11 !== a.parentNode.nodeType
    }
    function Db(a, b) {
        A.U.qx(a, "beforeEnd", b);
        return a.lastChild
    }
    function Eb(a) {
        for (var b = {
            left: 0,
            top: 0
        }; a && a.offsetParent; )
            b.left += a.offsetLeft,
            b.top += a.offsetTop,
            a = a.offsetParent;
        return b
    }
    function ma(a) {
        a = window.event || a;
        a.stopPropagation ? a.stopPropagation() : a.cancelBubble = p
    }
    function Fb(a) {
        a = window.event || a;
        a.preventDefault ? a.preventDefault() : a.returnValue = t;
        return t
    }
    function na(a) {
        ma(a);
        return Fb(a)
    }
    function Gb() {
        var a = document.documentElement
          , b = document.body;
        return a && (a.scrollTop || a.scrollLeft) ? [a.scrollTop, a.scrollLeft] : b ? [b.scrollTop, b.scrollLeft] : [0, 0]
    }
    function Hb(a, b) {
        if (a && b)
            return Math.round(Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2)))
    }
    function Ib(a, b) {
        var c = [], b = b || function(a) {
            return a
        }
        , e;
        for (e in a)
            c.push(e + "=" + b(a[e]));
        return c.join("&")
    }
    function L(a, b, c) {
        var e = document.createElement(a);
        c && (e = document.createElementNS(c, a));
        return A.U.SE(e, b || {})
    }
    function Xa(a) {
        if (a.currentStyle)
            return a.currentStyle;
        if (a.ownerDocument && a.ownerDocument.defaultView)
            return a.ownerDocument.defaultView.getComputedStyle(a, q)
    }
    function $a(a) {
        return "function" === typeof a
    }
    function Za(a) {
        return "number" === typeof a
    }
    function bb(a) {
        return "string" == typeof a
    }
    function Jb(a) {
        return "undefined" != typeof a
    }
    function Kb(a) {
        return "object" == typeof a
    }
    var Lb = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    function Mb(a) {
        for (var b = "", c = 0; c < a.length; c++) {
            var e = a.charCodeAt(c) << 1
              , f = e = e.toString(2);
            8 > e.length && (f = "00000000" + e,
            f = f.substr(e.length, 8));
            b += f
        }
        a = 5 - b.length % 5;
        e = [];
        for (c = 0; c < a; c++)
            e[c] = "0";
        b = e.join("") + b;
        f = [];
        for (c = 0; c < b.length / 5; c++)
            e = b.substr(5 * c, 5),
            f.push(String.fromCharCode(parseInt(e, 2) + 50));
        return f.join("") + a.toString()
    }
    function Nb(a) {
        var b = "", c, e, f = "", g, i = "", k = 0;
        g = /[^A-Za-z0-9\+\/\=]/g;
        if (!a || g.exec(a))
            return a;
        a = a.replace(/[^A-Za-z0-9\+\/\=]/g, "");
        do
            c = Lb.indexOf(a.charAt(k++)),
            e = Lb.indexOf(a.charAt(k++)),
            g = Lb.indexOf(a.charAt(k++)),
            i = Lb.indexOf(a.charAt(k++)),
            c = c << 2 | e >> 4,
            e = (e & 15) << 4 | g >> 2,
            f = (g & 3) << 6 | i,
            b += String.fromCharCode(c),
            64 != g && (b += String.fromCharCode(e)),
            64 != i && (b += String.fromCharCode(f));
        while (k < a.length);return b
    }
    var P = A.lang.ku;
    function I() {
        return !(!A.platform.WD && !A.platform.yY && !A.platform.pj)
    }
    function Wa() {
        return !(!A.platform.XL && !A.platform.PL && !A.platform.FY)
    }
    function eb() {
        return (new Date).getTime()
    }
    function Ob() {
        var a = document.body.appendChild(L("div"));
        a.innerHTML = '<v:shape id="vml_tester1" adj="1" />';
        var b = a.firstChild;
        if (!b.style)
            return t;
        b.style.behavior = "url(#default#VML)";
        b = b ? "object" === typeof b.adj : p;
        a.parentNode.removeChild(a);
        return b
    }
    function Pb() {
        return !!document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Shape", "1.1")
    }
    function Qb() {
        return !!L("canvas").getContext
    }
    function U(a) {
        return a * Math.PI / 180
    }
    D.LY = function() {
        var a = p
          , b = p
          , c = p
          , e = p
          , f = 0
          , g = 0
          , i = 0
          , k = 0;
        return {
            tQ: function() {
                f += 1;
                a && (a = t,
                setTimeout(function() {
                    Ra(5054, {
                        pic: f
                    });
                    a = p;
                    f = 0
                }, 1E4))
            },
            j1: function() {
                g += 1;
                b && (b = t,
                setTimeout(function() {
                    Ra(5055, {
                        move: g
                    });
                    b = p;
                    g = 0
                }, 1E4))
            },
            l1: function() {
                i += 1;
                c && (c = t,
                setTimeout(function() {
                    Ra(5056, {
                        zoom: i
                    });
                    c = p;
                    i = 0
                }, 1E4))
            },
            k1: function(a) {
                k += a;
                e && (e = t,
                setTimeout(function() {
                    Ra(5057, {
                        tile: k
                    });
                    e = p;
                    k = 0
                }, 5E3))
            }
        }
    }();
    D.Rp = {
        aG: "#83a1ff",
        Tp: "#808080"
    };
    function Rb(a, b, c) {
        b.nE || (b.nE = [],
        b.handle = {});
        b.nE.push({
            filter: c,
            ns: a
        });
        b.addEventListener || (b.addEventListener = function(a, c) {
            b.attachEvent("on" + a, c)
        }
        );
        b.handle.click || (b.addEventListener("click", function(a) {
            for (var c = a.target || a.srcElement; c != b; ) {
                Sb(b.nE, function(b, i) {
                    RegExp(i.filter).test(c.getAttribute("filter")) && i.ns.call(c, a, c.getAttribute("filter"))
                });
                c = c.parentNode
            }
        }, t),
        b.handle.click = p)
    }
    function Sb(a, b) {
        for (var c = 0, e = a.length; c < e; c++)
            b(c, a[c])
    }
    void function(a, b, c) {
        void function(a, b, c) {
            function i(a) {
                if (!a.zo) {
                    for (var c = p, e = [], g = a.NZ, k = 0; g && k < g.length; k++) {
                        var m = g[k]
                          , n = ca[m] = ca[m] || {};
                        if (n.zo || n == a)
                            e.push(n.Nc);
                        else {
                            c = t;
                            if (!n.NV && (m = (Aa.get("alias") || {})[m] || m + ".js",
                            !K[m])) {
                                K[m] = p;
                                var o = b.createElement("script")
                                  , s = b.getElementsByTagName("script")[0];
                                o.async = p;
                                o.src = m;
                                s.parentNode.insertBefore(o, s)
                            }
                            n.zy = n.zy || {};
                            n.zy[a.name] = a
                        }
                    }
                    if (c) {
                        a.zo = p;
                        a.eK && (a.Nc = a.eK.apply(a, e));
                        for (var v in a.zy)
                            i(a.zy[v])
                    }
                }
            }
            function k(a) {
                return (a || new Date) - E
            }
            function m(a, b, c) {
                if (a) {
                    "string" == typeof a && (c = b,
                    b = a,
                    a = O);
                    try {
                        a == O ? (M[b] = M[b] || [],
                        M[b].unshift(c)) : a.addEventListener ? a.addEventListener(b, c, t) : a.attachEvent && a.attachEvent("on" + b, c)
                    } catch (e) {}
                }
            }
            function n(a, b, c) {
                if (a) {
                    "string" == typeof a && (c = b,
                    b = a,
                    a = O);
                    try {
                        if (a == O) {
                            var e = M[b];
                            if (e)
                                for (var f = e.length; f--; )
                                    e[f] === c && e.splice(f, 1)
                        } else
                            a.removeEventListener ? a.removeEventListener(b, c, t) : a.detachEvent && a.detachEvent("on" + b, c)
                    } catch (g) {}
                }
            }
            function o(a) {
                var b = M[a]
                  , c = 0;
                if (b) {
                    for (var e = [], f = arguments, g = 1; g < f.length; g++)
                        e.push(f[g]);
                    for (g = b.length; g--; )
                        b[g].apply(this, e) && c++;
                    return c
                }
            }
            function s(a, b) {
                if (a && b) {
                    var c = new Image(1,1), e = [], f = "img_" + +new Date, g;
                    for (g in b)
                        b[g] && e.push(g + "=" + encodeURIComponent(b[g]));
                    O[f] = c;
                    c.onload = c.onerror = function() {
                        O[f] = c = c.onload = c.onerror = q;
                        delete O[f]
                    }
                    ;
                    c.src = a + "?" + e.join("&")
                }
            }
            function v() {
                var a = arguments
                  , b = a[0];
                if (this.dK || /^(on|un|set|get|create)$/.test(b)) {
                    for (var b = y.prototype[b], c = [], e = 1, f = a.length; e < f; e++)
                        c.push(a[e]);
                    "function" == typeof b && b.apply(this, c)
                } else
                    this.BJ.push(a)
            }
            function w(a, b) {
                var c = {}, e;
                for (e in a)
                    a.hasOwnProperty(e) && (c[e] = a[e]);
                for (e in b)
                    b.hasOwnProperty(e) && (c[e] = b[e]);
                return c
            }
            function y(a) {
                this.name = a;
                this.ks = {
                    protocolParameter: {
                        postUrl: q,
                        protocolParameter: q
                    }
                };
                this.BJ = [];
                this.alog = O
            }
            function z(a) {
                a = a || "default";
                if ("*" == a) {
                    var a = [], b;
                    for (b in S)
                        a.push(S[b]);
                    return a
                }
                (b = S[a]) || (b = S[a] = new y(a));
                return b
            }
            var B = c.alog;
            if (!B || !B.zo) {
                var C = b.all && a.attachEvent
                  , E = B && B.dE || +new Date
                  , F = a.v4 || (+new Date).toString(36) + Math.random().toString(36).substr(2, 3)
                  , G = 0
                  , K = {}
                  , O = function(a) {
                    var b = arguments, c, e, f, g;
                    if ("define" == a || "require" == a) {
                        for (e = 1; e < b.length; e++)
                            switch (typeof b[e]) {
                            case "string":
                                c = b[e];
                                break;
                            case "object":
                                f = b[e];
                                break;
                            case "function":
                                g = b[e]
                            }
                        "require" == a && (c && !f && (f = [c]),
                        c = q);
                        c = !c ? "#" + G++ : c;
                        e = ca[c] = ca[c] || {};
                        e.zo || (e.name = c,
                        e.NZ = f,
                        e.eK = g,
                        "define" == a && (e.NV = p),
                        i(e))
                    } else
                        "function" == typeof a ? a(O) : ("" + a).replace(/^(?:([\w$_]+)\.)?(\w+)$/, function(a, c, e) {
                            b[0] = e;
                            v.apply(O.wF(c), b)
                        })
                }
                  , M = {}
                  , S = {}
                  , ca = {
                    a2: {
                        name: "alog",
                        zo: p,
                        Nc: O
                    }
                };
                y.prototype.start = y.prototype.create = function(a) {
                    if (!this.dK) {
                        "object" == typeof a && this.set(a);
                        this.dK = new Date;
                        for (this.ls("create", this); a = this.BJ.shift(); )
                            v.apply(this, a)
                    }
                }
                ;
                y.prototype.send = function(a, b) {
                    var c = w({
                        ts: k().toString(36),
                        t: a,
                        sid: F
                    }, this.ks);
                    if ("object" == typeof b)
                        c = w(c, b);
                    else {
                        var e = arguments;
                        switch (a) {
                        case "pageview":
                            e[1] && (c.page = e[1]);
                            e[2] && (c.title = e[2]);
                            break;
                        case "event":
                            e[1] && (c.eventCategory = e[1]);
                            e[2] && (c.eventAction = e[2]);
                            e[3] && (c.eventLabel = e[3]);
                            e[4] && (c.eventValue = e[4]);
                            break;
                        case "timing":
                            e[1] && (c.timingCategory = e[1]);
                            e[2] && (c.timingVar = e[2]);
                            e[3] && (c.timingValue = e[3]);
                            e[4] && (c.timingLabel = e[4]);
                            break;
                        case "exception":
                            e[1] && (c.exDescription = e[1]);
                            e[2] && (c.exFatal = e[2]);
                            break;
                        default:
                            return
                        }
                    }
                    this.ls("send", c);
                    var f;
                    if (e = this.ks.protocolParameter) {
                        var g = {};
                        for (f in c)
                            e[f] !== q && (g[e[f] || f] = c[f]);
                        f = g
                    } else
                        f = c;
                    s(this.ks.postUrl, f)
                }
                ;
                y.prototype.set = function(a, b) {
                    if ("string" == typeof a)
                        "protocolParameter" == a && (b = w({
                            postUrl: q,
                            protocolParameter: q
                        }, b)),
                        this.ks[a] = b;
                    else if ("object" == typeof a)
                        for (var c in a)
                            this.set(c, a[c])
                }
                ;
                y.prototype.get = function(a, b) {
                    var c = this.ks[a];
                    "function" == typeof b && b(c);
                    return c
                }
                ;
                y.prototype.ls = function(a, b) {
                    return O.ls(this.name + "." + a, b)
                }
                ;
                y.prototype.V = function(a, b) {
                    O.V(this.name + "." + a, b)
                }
                ;
                y.prototype.cd = function(a, b) {
                    O.cd(this.name + "." + a, b)
                }
                ;
                O.name = "alog";
                O.Vb = F;
                O.zo = p;
                O.timestamp = k;
                O.cd = n;
                O.V = m;
                O.ls = o;
                O.wF = z;
                O("init");
                var Z = y.prototype;
                V(Z, {
                    start: Z.start,
                    create: Z.create,
                    send: Z.send,
                    set: Z.set,
                    get: Z.get,
                    on: Z.V,
                    un: Z.cd,
                    fire: Z.ls
                });
                var Aa = z();
                Aa.set("protocolParameter", {
                    Z1: q
                });
                if (B) {
                    Z = [].concat(B.zb || [], B.ut || []);
                    B.zb = B.ut = q;
                    for (var ta in O)
                        O.hasOwnProperty(ta) && (B[ta] = O[ta]);
                    O.zb = O.ut = {
                        push: function(a) {
                            O.apply(O, a)
                        }
                    };
                    for (B = 0; B < Z.length; B++)
                        O.apply(O, Z[B])
                }
                c.alog = O;
                C && m(b, "mouseup", function(a) {
                    a = a.target || a.srcElement;
                    1 == a.nodeType && /^ajavascript:/i.test(a.tagName + a.href)
                });
                var Ga = t;
                a.onerror = function(a, b, e, f) {
                    var i = p;
                    !b && /^script error/i.test(a) && (Ga ? i = t : Ga = p);
                    i && c.alog("exception.send", "exception", {
                        dt: a,
                        cE: b,
                        $s: e,
                        Zl: f
                    });
                    return t
                }
                ;
                c.alog("exception.on", "catch", function(a) {
                    c.alog("exception.send", "exception", {
                        dt: a.dt,
                        cE: a.path,
                        $s: a.$s,
                        method: a.method,
                        IK: "catch"
                    })
                })
            }
        }(a, b, c);
        void function(a, b, c) {
            var i = "18_3";
            I() && (i = "18_4");
            var k = "http://static.tieba.baidu.com";
            "https:" === a.location.protocol && (k = "https://gsp0.baidu.com/5aAHeD3nKhI2p27j8IqW0jdnxx1xbK");
            var m = Math.random
              , k = k + "/tb/pms/img/st.gif"
              , n = {
                th: "0.1"
            }
              , o = {
                th: "0.1"
            }
              , s = {
                th: "0.1"
            }
              , v = {
                th: "0"
            };
            if (n && n.th && m() < n.th) {
                var w = c.alog.wF("monkey"), y, n = a.screen, z = b.referrer;
                w.set("ver", 5);
                w.set("pid", 241);
                n && w.set("px", n.width + "*" + n.height);
                w.set("ref", z);
                c.alog("monkey.on", "create", function() {
                    y = c.alog.timestamp;
                    w.set("protocolParameter", {
                        reports: q
                    })
                });
                c.alog("monkey.on", "send", function(a) {
                    "pageview" == a.t && (a.cmd = "open");
                    a.now && (a.ts = y(a.now).toString(36),
                    a.now = "")
                });
                c.alog("monkey.create", {
                    page: i,
                    pid: "241",
                    p: "18",
                    dv: 6,
                    postUrl: k,
                    reports: {
                        refer: 1
                    }
                });
                c.alog("monkey.send", "pageview", {
                    now: +new Date
                })
            }
            if (o && o.th && m() < o.th) {
                var B = t;
                a.onerror = function(a, b, e, f) {
                    var i = p;
                    !b && /^script error/i.test(a) && (B ? i = t : B = p);
                    i && c.alog("exception.send", "exception", {
                        dt: a,
                        cE: b,
                        $s: e,
                        Zl: f
                    });
                    return t
                }
                ;
                c.alog("exception.on", "catch", function(a) {
                    c.alog("exception.send", "exception", {
                        dt: a.dt,
                        cE: a.path,
                        $s: a.$s,
                        method: a.method,
                        IK: "catch"
                    })
                });
                c.alog("exception.create", {
                    postUrl: k,
                    dv: 7,
                    page: i,
                    pid: "170",
                    p: "18"
                })
            }
            s && (s.th && m() < s.th) && (c.alog("cus.on", "time", function(a) {
                var b = {}, e = t, f;
                if ("[object Object]" === a.toString()) {
                    for (var i in a)
                        "page" == i ? b.page = a[i] : (f = parseInt(a[i]),
                        0 < f && /^z_/.test(i) && (e = p,
                        b[i] = f));
                    e && c.alog("cus.send", "time", b)
                }
            }),
            c.alog("cus.on", "count", function(a) {
                var b = {}
                  , e = t;
                "string" === typeof a && (a = [a]);
                if (a instanceof Array)
                    for (var f = 0; f < a.length; f++)
                        /^z_/.test(a[f]) ? (e = p,
                        b[a[f]] = 1) : /^page:/.test(a[f]) && (b.page = a[f].substring(5));
                e && c.alog("cus.send", "count", b)
            }),
            c.alog("cus.create", {
                dv: 3,
                postUrl: k,
                page: i,
                p: "18"
            }));
            if (v && v.th && m() < v.th) {
                var C = ["Moz", "O", "ms", "Webkit"]
                  , E = ["-webkit-", "-moz-", "-o-", "-ms-"]
                  , F = function() {
                    return typeof b.createElement !== "function" ? b.createElement(arguments[0]) : b.createElement.apply(b, arguments)
                }
                  , G = F("dpFeatureTest").style
                  , K = function(a) {
                    return O(a, l, l)
                }
                  , O = function(a, b, c) {
                    var e = a.charAt(0).toUpperCase() + a.slice(1)
                      , f = (a + " " + C.join(e + " ") + e).split(" ");
                    if (typeof b === "string" || typeof b === "undefined")
                        return M(f, b);
                    f = (a + " " + C.join(e + " ") + e).split(" ");
                    a: {
                        var a = f, g;
                        for (g in a)
                            if (a[g]in b) {
                                if (c === t) {
                                    b = a[g];
                                    break a
                                }
                                g = b[a[g]];
                                b = typeof g === "function" ? fnBind(g, c || b) : g;
                                break a
                            }
                        b = t
                    }
                    return b
                }
                  , M = function(a, b) {
                    var c, e, f;
                    e = a.length;
                    for (c = 0; c < e; c++) {
                        f = a[c];
                        ~("" + f).indexOf("-") && (f = S(f));
                        if (G[f] !== l)
                            return b == "pfx" ? f : p
                    }
                    return t
                }
                  , S = function(a) {
                    return a.replace(/([a-z])-([a-z])/g, function(a, b, c) {
                        return b + c.toUpperCase()
                    }).replace(/^-/, "")
                }
                  , ca = function(a, b, c) {
                    if (a.indexOf("@") === 0)
                        return atRule(a);
                    a.indexOf("-") != -1 && (a = S(a));
                    return !b ? O(a, "pfx") : O(a, b, c)
                }
                  , Z = function() {
                    var a = F("canvas");
                    return !(!a.getContext || !a.getContext("2d"))
                }
                  , Aa = function() {
                    var a = F("div");
                    return "draggable"in a || "ondragstart"in a && "ondrop"in a
                }
                  , ta = function() {
                    try {
                        localStorage.setItem("localStorage", "localStorage");
                        localStorage.removeItem("localStorage");
                        return p
                    } catch (a) {
                        return t
                    }
                }
                  , Ga = function() {
                    return "content"in b.createElement("template")
                }
                  , sa = function() {
                    return "createShadowRoot"in b.createElement("a")
                }
                  , Va = function() {
                    return "registerElement"in b
                }
                  , Fe = function() {
                    return "import"in b.createElement("link")
                }
                  , Uc = function() {
                    return "getItems"in b
                }
                  , jj = function() {
                    return "EventSource"in window
                }
                  , Ge = function(a, b) {
                    var c = new Image;
                    c.onload = function() {
                        b(a, c.width > 0 && c.height > 0)
                    }
                    ;
                    c.onerror = function() {
                        b(a, t)
                    }
                    ;
                    c.src = "data:image/webp;base64," + {
                        y4: "UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",
                        x4: "UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",
                        alpha: "UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",
                        hk: "UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"
                    }[a]
                }
                  , He = function(a, b) {
                    return $b.$h["WebP-" + a] = b
                }
                  , kj = function() {
                    return "openDatabase"in a
                }
                  , lj = function() {
                    return "performance"in a && "timing"in a.performance
                }
                  , mj = function() {
                    return "performance"in a && "mark"in a.performance
                }
                  , nj = function() {
                    return !(!Array.prototype || !Array.prototype.every || !Array.prototype.filter || !Array.prototype.forEach || !Array.prototype.indexOf || !Array.prototype.lastIndexOf || !Array.prototype.map || !Array.prototype.some || !Array.prototype.reduce || !Array.prototype.reduceRight || !Array.isArray)
                }
                  , oj = function() {
                    return "Promise"in a && "cast"in a.Up && "resolve"in a.Up && "reject"in a.Up && "all"in a.Up && "race"in a.Up && function() {
                        var b;
                        new a.Up(function(a) {
                            b = a
                        }
                        );
                        return typeof b === "function"
                    }()
                }
                  , pj = function() {
                    var b = !!a.X0
                      , c = a.XMLHttpRequest && "withCredentials"in new XMLHttpRequest;
                    return !!a.a1 && b && c
                }
                  , qj = function() {
                    return "geolocation"in navigator
                }
                  , rj = function() {
                    var b = F("canvas")
                      , c = "probablySupportsContext"in b ? "probablySupportsContext" : "supportsContext";
                    return c in b ? b[c]("webgl") || b[c]("experimental-webgl") : "WebGLRenderingContext"in a
                }
                  , sj = function() {
                    return !!b.createElementNS && !!b.createElementNS("http://www.w3.org/2000/svg", "svg").x2
                }
                  , tj = function() {
                    return !!a.h1
                }
                  , uj = function() {
                    return "WebSocket"in a && a.e1.T0 === 2
                }
                  , vj = function() {
                    return !!b.createElement("video").canPlayType
                }
                  , wj = function() {
                    return !!b.createElement("audio").canPlayType
                }
                  , xj = function() {
                    return !!(a.history && "pushState"in a.history)
                }
                  , yj = function() {
                    return !(!a.V0 || !a.W0)
                }
                  , zj = function() {
                    return "postMessage"in window
                }
                  , Aj = function() {
                    return !!a.webkitNotifications || "Notification"in a && "permission"in a.iP && "requestPermission"in a.iP
                }
                  , Bj = function() {
                    for (var b = ["webkit", "moz", "o", "ms"], c = a.requestAnimationFrame, f = 0; f < b.length && !c; ++f)
                        c = a[b[f] + "RequestAnimationFrame"];
                    return !!c
                }
                  , Cj = function() {
                    return "JSON"in a && "parse"in JSON && "stringify"in JSON
                }
                  , Dj = function() {
                    return !(!ca("exitFullscreen", b, t) && !ca("cancelFullScreen", b, t))
                }
                  , Ej = function() {
                    return !!ca("Intl", a)
                }
                  , Fj = function() {
                    return K("flexBasis")
                }
                  , Gj = function() {
                    return !!K("perspective")
                }
                  , Hj = function() {
                    return K("shapeOutside")
                }
                  , Ij = function() {
                    var a = F("div");
                    a.style.cssText = E.join("filter:blur(2px); ");
                    return !!a.style.length && (b.documentMode === l || b.documentMode > 9)
                }
                  , Jj = function() {
                    return "XMLHttpRequest"in a && "withCredentials"in new XMLHttpRequest
                }
                  , Kj = function() {
                    return F("progress").max !== l
                }
                  , Lj = function() {
                    return F("meter").max !== l
                }
                  , Mj = function() {
                    return "sendBeacon"in navigator
                }
                  , Nj = function() {
                    return K("borderRadius")
                }
                  , Oj = function() {
                    return K("boxShadow")
                }
                  , Pj = function() {
                    var a = F("div").style;
                    a.cssText = E.join("opacity:.55;");
                    return /^0.55$/.test(a.opacity)
                }
                  , Qj = function() {
                    return M(["textShadow"], l)
                }
                  , Rj = function() {
                    return K("animationName")
                }
                  , Sj = function() {
                    return K("transition")
                }
                  , Tj = function() {
                    return navigator.userAgent.indexOf("Android 2.") === -1 && K("transform")
                }
                  , $b = {
                    $h: {},
                    ra: function(a, b, c) {
                        this.$h[a] = b.apply(this, [].slice.call(arguments, 2))
                    },
                    Ed: function(a, b) {
                        a.apply(this, [].slice.call(arguments, 1))
                    },
                    SZ: function() {
                        this.ra("bdrs", Nj);
                        this.ra("bxsd", Oj);
                        this.ra("opat", Pj);
                        this.ra("txsd", Qj);
                        this.ra("anim", Rj);
                        this.ra("trsi", Sj);
                        this.ra("trfm", Tj);
                        this.ra("flex", Fj);
                        this.ra("3dtr", Gj);
                        this.ra("shpe", Hj);
                        this.ra("fltr", Ij);
                        this.ra("cavs", Z);
                        this.ra("dgdp", Aa);
                        this.ra("locs", ta);
                        this.ra("wctem", Ga);
                        this.ra("wcsdd", sa);
                        this.ra("wccse", Va);
                        this.ra("wchti", Fe);
                        this.Ed(Ge, "lossy", He);
                        this.Ed(Ge, "lossless", He);
                        this.Ed(Ge, "alpha", He);
                        this.Ed(Ge, "animation", He);
                        this.ra("wsql", kj);
                        this.ra("natm", lj);
                        this.ra("ustm", mj);
                        this.ra("arra", nj);
                        this.ra("prms", oj);
                        this.ra("xhr2", pj);
                        this.ra("wbgl", rj);
                        this.ra("geol", qj);
                        this.ra("svg", sj);
                        this.ra("work", tj);
                        this.ra("wbsk", uj);
                        this.ra("vido", vj);
                        this.ra("audo", wj);
                        this.ra("hsty", xj);
                        this.ra("file", yj);
                        this.ra("psmg", zj);
                        this.ra("wknf", Aj);
                        this.ra("rqaf", Bj);
                        this.ra("json", Cj);
                        this.ra("flsc", Dj);
                        this.ra("i18n", Ej);
                        this.ra("cors", Jj);
                        this.ra("prog", Kj);
                        this.ra("metr", Lj);
                        this.ra("becn", Mj);
                        this.ra("mcrd", Uc);
                        this.ra("esrc", jj)
                    }
                }
                  , w = c.alog.wF("feature");
                w.V("commit", function() {
                    $b.SZ();
                    var a = setInterval(function() {
                        if ("WebP-lossy"in $b.$h && "WebP-lossless"in $b.$h && "WebP-alpha"in $b.$h && "WebP-animation"in $b.$h) {
                            for (var b in $b.$h)
                                $b.$h[b] = $b.$h[b] ? "y" : "n";
                            w.send("feature", $b.$h);
                            clearInterval(a)
                        }
                    }, 500)
                });
                c.alog("feature.create", {
                    G2: 4,
                    b5: k,
                    page: i,
                    zb: "18"
                });
                c.alog("feature.fire", "commit")
            }
        }(a, b, c)
    }(window, document, D);
    D.aq = D.alog || u();
    D.alog("cus.fire", "count", "z_loadscriptcount");
    "https:" === location.protocol && D.alog("cus.fire", "count", "z_httpscount");
    function Tb(a) {
        var b = window.TILE_VERSION
          , c = "20190410";
        b && b.ditu && (b = b.ditu,
        b[a] && b[a].updateDate && (c = b[a].updateDate));
        return c
    }
    var Ub = [72.6892532, 0.1939743381, 136.1168614, 54.392257]
      , Vb = [72.69566833, 0.1999420909, 136.1232863, 54.39791217]
      , Wb = 158
      , Xb = [98.795985, 122.960792, 107.867379, 118.093451, 119.139658, 128.035888, 79.948212, 99.029524, 119.923388, 122.094977, 127.918527, 130.94789, 106.50606, 108.076783, 119.8329, 126.382207, 111.803567, 119.324928, 100.749858, 102.227985, 99.860885, 100.788921, 97.529435, 98.841564, 99.100017, 99.90035, 122.917416, 123.774367, 123.728314, 125.507211, 123.736065, 124.767299, 125.488463, 126.410675, 125.484326, 126.07764, 130.830784, 133.620042, 127.912178, 128.668957, 128.658937, 129.638599, 132.894179, 134.119086, 117.379378, 119.244569, 116.086736, 117.431212, 114.420233, 116.137458, 116.492775, 119.605527, 110.579401, 111.86488, 74.468228, 80.001908, 82.867432, 91.353788, 85.721075, 98.976964, 127.664757, 129.546833, 129.476893, 130.22449, 133.730358, 134.745235, 134.381034, 135.1178, 130.868117, 131.34409, 115.513245, 117.544751, 115.779271, 116.748045, 108.536254, 110.614326, 121.365534, 124.626434, 126.165992, 127.347013, 91.281869, 95.611754, 79.879648, 82.945041, 76.413314, 78.345207, 78.275229, 80.002329, 83.956612, 85.734098, 85.510186, 89.356499, 97.997001, 98.948845, 106.653208, 108.610811, 111.400183, 111.824179, 111.592224, 111.817136, 116.00682, 117.024631, 116.258574, 116.689291, 119.436876, 119.922961, 120.659806, 121.395479, 120.349116, 120.676014, 124.59389, 125.787788, 126.221756, 126.788962, 95.572955, 102.046581, 95.583772, 96.165551, 95.564318, 97.806095, 91.30446, 93.356438, 93.330319, 94.698145, 89.349129, 90.548677, 82.268802, 82.892025, 78.335615, 80.032266, 76.625755, 78.361413, 73.498248, 74.490992, 74.846872, 76.488771, 91.563521, 94.878444, 88.768214, 89.244787, 83.247076, 83.974127, 82.29595, 83.256003, 81.885315, 83.26249, 80.760619, 81.472404, 86.470983, 88.276988, 102.207537, 104.234614, 112.164795, 116.833667, 108.965663, 113.032246, 111.166575, 117.983363]
      , Yb = [22.551183, 42.284787, 17.227969, 22.738314, 41.300981, 50.749638, 30.368087, 42.332701, 21.705055, 22.696452, 42.426047, 48.944674, 21.432184, 22.651387, 50.657409, 52.92296, 42.212192, 45.206905, 21.137031, 22.57186, 21.444502, 22.586566, 23.741571, 25.301472, 22.006806, 22.56637, 38.985114, 41.346531, 40.295617, 41.338581, 39.740021, 40.351012, 40.974644, 41.331562, 40.726852, 41.067192, 44.877158, 48.018285, 41.344597, 42.451798, 42.016305, 42.443235, 45.880906, 48.214001, 45.140027, 46.792775, 45.141083, 46.400433, 45.156418, 45.748281, 47.485889, 50.071879, 42.223667, 43.469487, 37.019867, 40.668675, 42.226823, 47.321605, 27.72944, 30.469853, 48.919002, 49.650614, 48.840188, 49.443166, 46.949801, 48.382798, 47.660603, 48.472692, 42.859946, 44.913298, 47.605896, 48.445914, 48.41698, 48.909667, 42.23507, 42.914193, 52.8281, 53.585952, 50.709311, 51.662219, 42.29968, 44.399225, 42.302746, 45.391958, 34.680866, 37.03377, 30.743515, 37.07228, 28.245649, 30.408935, 47.277693, 48.504255, 25.241528, 27.780726, 42.223363, 42.548418, 43.435888, 44.696952, 44.693193, 45.00187, 48.886267, 49.326755, 49.288642, 49.632304, 50.717486, 51.314369, 52.914204, 53.33964, 52.910094, 53.115926, 52.908382, 53.258095, 51.64533, 52.408305, 42.236825, 42.699126, 43.068466, 43.898632, 42.670403, 43.082219, 44.379045, 45.187742, 44.382336, 44.981379, 47.310362, 48.06019, 45.359099, 46.814439, 40.569751, 42.047741, 40.587956, 41.41263, 38.519192, 40.185033, 35.790476, 37.029005, 26.825605, 27.763896, 27.199658, 27.751649, 29.150192, 30.381073, 29.573886, 30.065162, 30.047775, 30.384089, 30.001277, 30.388525, 48.494118, 49.173841, 22.398528, 22.601198, 7.441114, 11.505968, 3.767491, 9.005209, 12.642067, 17.410886]
      , Zb = 95
      , ac = [110.3961374, 105.0743788, 96.8991824, 95.61810411, 93.82412598, 91.3892353, 91.38931858, 89.08325955, 87.22469808, 86.26278402, 85.17353, 85.23741211, 82.86627441, 81.90481038, 79.59687147, 80.39829237, 79.93319363, 77.80279948, 75.2557704, 73.49357829, 73.1892532, 73.87758816, 74.4064738, 74.10215224, 75.46409695, 76.77739692, 78.28299615, 78.15499485, 78.37920654, 78.89145345, 79.69282199, 81.19938178, 81.80830295, 83.89093424, 85.94149523, 87.86447266, 89.03414958, 90.05918132, 91.10026937, 92.15733832, 93.74361735, 95.82597331, 97.95655545, 97.12363037, 98.2129739, 99.2068571, 101.6587874, 102.5239084, 102.2356106, 105.0249238, 106.0992342, 107.8617093, 111.6439372, 109.591869, 112.284586, 117.7961157, 118.9495128, 114.2076584, 118.693565, 123.1475225, 122.730705, 120.9361393, 123.4207441, 122.3787782, 122.1385425, 121.5904281, 121.1773763, 120.6805404, 120.2483355, 122.795807, 122.8759077, 121.3060262, 122.1392177, 123.7418799, 126.4177599, 128.5647409, 129.7194884, 131.2259136, 131.9950494, 133.6289931, 135.6168614, 131.3875545, 130.8743365, 128.6303223, 126.0997773, 124.4015375, 122.22161, 119.6586483, 119.7866827, 118.5685878, 116.5177976, 114.819101, 119.0812964, 116.453265, 111.7431171]
      , bc = [43.2190351, 42.38053385, 43.17417589, 44.42226915, 45.09863634, 45.56708116, 47.33599718, 48.68832709, 49.62448486, 48.9482175, 48.4800472, 47.33564399, 47.43948676, 46.03452067, 45.20221788, 43.34563043, 42.32965739, 41.39690972, 40.82972331, 39.95567654, 39.25892877, 38.36098768, 38.05441569, 37.16878445, 36.38899414, 35.36126817, 34.30953451, 32.58503879, 31.56975694, 30.77800266, 30.43559814, 29.7744892, 30.0931977, 28.71103299, 27.70739665, 27.5775472, 27.01096137, 27.77857883, 27.50707954, 26.50328315, 26.70387804, 27.95548557, 27.29428901, 23.64685493, 23.62310601, 21.67493381, 20.77751465, 21.32070991, 22.1824113, 22.31232964, 22.51316054, 16.80037679, 13.19749864, 0.6939743381, 1.541660428, 10.50208252, 15.58926975, 17.89090007, 19.94928467, 22.18490153, 25.37285292, 25.61456434, 30.62532552, 31.08099284, 31.89238173, 32.50092692, 32.80325765, 34.25546956, 35.15486138, 36.90170139, 37.8348272, 37.941604, 38.6480797, 38.96797201, 40.98146918, 41.25573296, 42.07218153, 42.49132813, 44.65259766, 44.69330702, 48.62286865, 48.09383952, 49.19628499, 50.03402317, 53.27678901, 53.62976345, 53.89420546, 52.98933322, 52.01872884, 50.23210259, 50.18807048, 47.49769857, 47.34362712, 46.50502143, 45.24770128]
      , cc = [98.7895, 122.954182, 107.860913, 118.087007, 119.133165, 128.029533, 79.941749, 99.023087, 119.916883, 122.08841, 127.912143, 130.941471, 106.499502, 108.070244, 119.826245, 126.375818, 111.797006, 119.318387, 100.743285, 102.221517, 99.854448, 100.782445, 97.522928, 98.835028, 99.093518, 99.893783, 122.910927, 123.767769, 123.721954, 125.50077, 123.729657, 124.760724, 125.481902, 126.404079, 125.477737, 126.071019, 130.824331, 133.613395, 127.905767, 128.662524, 128.652527, 129.6321, 132.887552, 134.11249, 117.37297, 119.237999, 116.080154, 117.424589, 114.413586, 116.130948, 116.486264, 119.598927, 110.5728, 111.858437, 74.465162, 79.995337, 82.860821, 91.347291, 85.716024, 98.970481, 127.658331, 129.540202, 129.470528, 130.21808, 133.723748, 134.738785, 134.374555, 135.111443, 130.861475, 131.337438, 115.506627, 117.538123, 115.772783, 116.741632, 108.529656, 110.60782, 121.358945, 124.619773, 126.159424, 127.340582, 91.275275, 95.605228, 79.874427, 82.938601, 76.413314, 78.338763, 78.275229, 79.995765, 83.956612, 85.727511, 85.503554, 89.349858, 97.990418, 98.942257, 106.646704, 108.604437, 111.393667, 111.817723, 111.585811, 111.810645, 116.000232, 117.018216, 116.252108, 116.682705, 119.430384, 119.916417, 120.653168, 121.38883, 120.342727, 120.669383, 124.587426, 125.781376, 126.215282, 126.782323, 95.566367, 102.040026, 95.577158, 96.159009, 95.557772, 97.799728, 91.298032, 93.350057, 93.323794, 94.691771, 89.342471, 90.542019, 82.264229, 82.885485, 78.335615, 80.025844, 76.623947, 78.355027, 73.495149, 74.484473, 74.846872, 76.482208, 91.560117, 94.871859, 88.761692, 89.23822, 83.240549, 83.967602, 82.292367, 83.2495, 81.878825, 83.256003, 80.75421, 81.465955, 86.465421, 88.270356, 102.201019, 104.228033, 112.158282, 116.827153, 108.965663, 113.025767, 111.166575, 117.97687]
      , dc = [22.545421, 42.279053, 17.226272, 22.731982, 41.294917, 50.743316, 30.361986, 42.326603, 21.699185, 22.690751, 42.419757, 48.938435, 21.426505, 22.64567, 50.651745, 52.916705, 42.20641, 45.201064, 21.131326, 22.565685, 21.438288, 22.580379, 23.735785, 25.295582, 22.001087, 22.560315, 38.979333, 41.340757, 40.28938, 41.332289, 39.734164, 40.344718, 40.968803, 41.325813, 40.721073, 41.061503, 44.871533, 48.012179, 41.338366, 42.445601, 42.010343, 42.436934, 45.875217, 48.208327, 45.134237, 46.786509, 45.135376, 46.394665, 45.150734, 45.742257, 47.480099, 50.065931, 42.217982, 43.46329, 37.014057, 40.662848, 42.221079, 47.315558, 27.723432, 30.46385, 48.913298, 49.644555, 48.83396, 49.436824, 46.944059, 48.376613, 47.654503, 48.466331, 42.854333, 44.907682, 47.600253, 48.440245, 48.410926, 48.903468, 42.229292, 42.908294, 52.822466, 53.58012, 50.703491, 51.656037, 42.29378, 44.393379, 42.296912, 45.385809, 34.679282, 37.027699, 30.740622, 37.066377, 28.241967, 30.403134, 47.271949, 48.49848, 25.235818, 27.774976, 42.217425, 42.542102, 43.429763, 44.691016, 44.687044, 44.995758, 48.880431, 49.320551, 49.282865, 49.626267, 50.711607, 51.308382, 52.908547, 53.333963, 52.904419, 53.109706, 52.902338, 53.251938, 51.639701, 52.402205, 42.231045, 42.693581, 43.062756, 43.892771, 42.664519, 43.075927, 44.372942, 45.1815, 44.376327, 44.975476, 47.304623, 48.054453, 45.353174, 46.808493, 40.563653, 42.041556, 40.582164, 41.4064, 38.51618, 40.179105, 35.789745, 37.023144, 26.825402, 27.757641, 27.193806, 27.745766, 29.144229, 30.375186, 29.567889, 30.059102, 30.041938, 30.378006, 29.995047, 30.382338, 48.48834, 49.169021, 22.392816, 22.595333, 7.439914, 11.500161, 3.766676, 9.000793, 12.640512, 17.406563]
      , ec = 3E3
      , fc = 2.0E-5
      , gc = 3.0E-6
      , hc = 0.0174532925194
      , ic = 0.0065
      , jc = 0.0060
      , kc = 4E4
      , lc = 0
      , mc = 3
      , nc = 1.0E-10
      , oc = 6370996.81
      , pc = 1E8;
    function qc(a, b, c) {
        for (var e = Wb, f = 0; f < e; f += 2)
            if (a.lng >= b[f] && a.lng <= b[f + 1] && a.lat >= c[f] && a.lat <= c[f + 1])
                return p;
        return t
    }
    function rc(a) {
        var b = a.lng
          , c = a.lat
          , a = Math.sqrt(b * b + c * c) + Math.sin(c * ec * hc) * fc
          , b = Math.atan2(c, b) + Math.cos(b * ec * hc) * gc;
        return {
            lng: a * Math.cos(b) + ic,
            lat: a * Math.sin(b) + jc
        }
    }
    function sc(a) {
        var b = tc
          , c = {}
          , e = a.lng
          , f = a.lat
          , g = 1
          , i = a.lng
          , k = a.lat
          , m = e - g
          , n = 0
          , o = f + g
          , s = 0
          , v = e - g
          , w = 0
          , y = f - g
          , z = 0
          , B = e + g
          , C = 0
          , E = f - g
          , F = 0
          , G = e + g
          , K = 0
          , O = f + g
          , M = 0
          , o = m = 0
          , o = uc(b, e, f)
          , m = o.lng
          , o = o.lat;
        if (1.0E-6 >= vc(m, o, i, k))
            return c.lng = e,
            c.lat = f,
            c;
        for (; ; ) {
            m = e - g;
            o = f + g;
            v = e - g;
            y = f - g;
            B = e + g;
            E = f - g;
            G = e + g;
            O = f + g;
            e = uc(b, m, o);
            n = e.lng;
            s = e.lat;
            e = uc(b, v, y);
            w = e.lng;
            z = e.lat;
            e = uc(b, B, E);
            C = e.lng;
            F = e.lat;
            e = uc(b, G, O);
            K = e.lng;
            M = e.lat;
            e = vc(n, s, i, k);
            n = vc(w, z, i, k);
            w = vc(C, F, i, k);
            K = vc(K, M, i, k);
            if (1.0E-6 > e)
                return c.lng = m,
                c.lat = o,
                c;
            if (1.0E-6 > n)
                return c.lng = v,
                c.lat = y,
                c;
            if (1.0E-6 > w)
                return c.lng = B,
                c.lat = E,
                c;
            if (1.0E-6 > K)
                return c.lng = G,
                c.lat = O,
                c;
            C = 1 / e;
            n = 1 / n;
            w = 1 / w;
            K = 1 / K;
            e = (m * C + v * n + B * w + G * K) / (C + n + w + K);
            f = (o * C + y * n + E * w + O * K) / (C + n + w + K);
            o = uc(b, e, f);
            m = o.lng;
            o = o.lat;
            if (1.0E-6 >= vc(m, o, i, k))
                return c.lng = e,
                c.lat = f,
                c;
            g *= 0.6;
            if (1.0E-6 > g) {
                a: {
                    c = (a.lng + 0.03 - (a.lng - 0.03)) / 1.0E-4 + 0.5;
                    g = (a.lat + 0.03 - (a.lat - 0.03)) / 1.0E-4 + 0.5;
                    i = a.lng * pc;
                    k = a.lat * pc;
                    y = 1.0E-4 * pc;
                    m = i - y;
                    o = i + y;
                    v = k - y;
                    B = k + y;
                    C = n = w = K = l;
                    G = n = y = E = w = K = 0;
                    b(a);
                    C = l;
                    for (O = 0; O <= c; O++) {
                        for (e = 0; e <= g; e++)
                            if (C = b(l),
                            K = l.lng * pc,
                            w = l.lat * pc,
                            n = C.lng * pc,
                            C = C.lat * pc,
                            !(n < m || C < v || n > o || C > B)) {
                                K -= n;
                                w -= C;
                                n = Math.sqrt((i - n) * (i - n) + (k - C) * (k - C));
                                if (1 > n) {
                                    c = {};
                                    c.lng = l.lng;
                                    c.lat = l.lat;
                                    break a
                                }
                                E += 1 * K / n;
                                y += 1 * w / n;
                                G += 1 / n
                            }
                        E /= G * pc;
                        y /= G * pc
                    }
                    b = E * pc / pc;
                    g = y * pc / pc;
                    c = {};
                    c.lng = a.lng + b;
                    c.lat = a.lat + g
                }
                return c
            }
        }
    }
    function uc(a, b, c) {
        a = a({
            lng: b,
            lat: c
        });
        b = {};
        b.lng = a.lng;
        b.lat = a.lat;
        return b
    }
    function wc(a, b, c, e) {
        var f = arguments.length;
        this.yg = {};
        this.Fg = {};
        0 !== f && 4 === f && this.normalize(a, b, c, e)
    }
    wc.prototype.contains = function(a) {
        return a.lng > this.yg.lng && a.lng < this.Fg.lng && a.lat > this.yg.lat && a.lat < this.Fg.lat ? mc : Math.abs(a.lng - this.yg.lng) < nc || Math.abs(a.lng - this.Fg.lng) < nc || Math.abs(a.lat - this.yg.lat) < nc || Math.abs(a.y - this.Fg.lat) > nc ? 2 : lc
    }
    ;
    wc.prototype.normalize = function(a, b, c, e) {
        a > c ? (this.yg.lng = c,
        this.Fg.lng = a) : (this.yg.lng = a,
        this.Fg.lng = c);
        b > e ? (this.yg.lat = e,
        this.Fg.lat = b) : (this.yg.lat = b,
        this.Fg.lat = e)
    }
    ;
    function xc(a, b, c, e) {
        this.Nt = {
            lng: a,
            lat: b
        };
        this.Jw = {
            lng: c,
            lat: e
        };
        this.Dx = new wc(a,b,c,e)
    }
    function yc(a, b) {
        var c = a.lat * hc
          , e = b.lat * hc
          , f = c - e
          , g = a.lng * hc - b.lng * hc;
        return 2 * Math.asin(Math.sqrt(Math.sin(f / 2) * Math.sin(f / 2) + Math.cos(c) * Math.cos(e) * Math.sin(g / 2) * Math.sin(g / 2))) * oc
    }
    function vc(a, b, c, e) {
        return Math.sqrt((a - c) * (a - c) + (b - e) * (b - e))
    }
    function zc(a, b, c) {
        return (b.lng - a.lng) * (c.lat - a.lat) - (c.lng - a.lng) * (b.lat - a.lat)
    }
    function tc(a) {
        var b = {};
        if (a.lng < Ub[0] - 0.4 || a.lat < Ub[1] - 0.4 || a.lng > Ub[2] + 0.4 || a.lat > Ub[3] + 0.4)
            return b.lng = a.lng,
            b.lat = a.lat,
            b;
        if (qc(a, cc, dc))
            return b = rc(a);
        for (var b = 0, c = kc, e = 0, f = new wc, g = 0, e = 0; e < Zb; ++e)
            bc[e] <= a.lat ? bc[(e + 1) % Zb] > a.lat && 0 < zc({
                lng: ac[e],
                lat: bc[e]
            }, {
                lng: ac[(e + 1) % Zb],
                lat: bc[(e + 1) % Zb]
            }, a) && ++g : bc[(e + 1) % Zb] <= a.lat && 0 > zc({
                lng: ac[e],
                lat: bc[e]
            }, {
                lng: ac[(e + 1) % Zb],
                lat: bc[(e + 1) % Zb]
            }, a) && --g;
        if ((0 === g ? lc : mc) === lc) {
            for (g = 0; g < Zb; ++g)
                if (e = new xc(ac[g],bc[g],ac[(g + 1) % Zb],bc[(g + 1) % Zb]),
                f.yg.lng = e.Dx.yg.lng - 0.5,
                f.yg.lat = e.Dx.yg.lat - 0.5,
                f.Fg.lng = e.Dx.Fg.lng + 0.5,
                f.Fg.lat = e.Dx.Fg.lat + 0.5,
                f.contains(a) !== lc) {
                    var i;
                    var k = e.Nt.lng
                      , m = e.Nt.lat
                      , n = e.Jw.lng
                      , o = e.Jw.lat;
                    i = o - m;
                    var s = k - n;
                    !(Math.abs(i - 0) > nc) && !(Math.abs(s - 0) > nc) ? i = e.Nt : (k = n * m - k * o,
                    m = s * a.lng - i * a.lat,
                    n = i * i - s * s,
                    i = {
                        lng: (s * m - i * k) / n,
                        lat: -(i * m + s * k) / n
                    });
                    s = 180;
                    k = 90;
                    m = -180;
                    n = -90;
                    n = e.Nt;
                    o = e.Jw;
                    s = n.lng < o.lng ? n.lng : o.lng;
                    k = n.lat < o.lat ? n.lat : o.lat;
                    m = n.lng < o.lng ? n.lng : o.lng;
                    n = n.lat < o.lat ? n.lat : o.lat;
                    i.lng <= m && i.lng >= s && i.lng <= n && i.lat >= k ? (e = a.lat * hc,
                    s = a.lng * hc,
                    k = i.lat * hc,
                    i = i.lng * hc,
                    m = Math.cos(e) * Math.cos(k),
                    e = m * Math.cos(s) * Math.cos(i) + m * Math.sin(s) * Math.sin(i) + Math.sin(e) * Math.sin(k),
                    -1 > e ? e = -1 : 1 < e && (e = 1),
                    e = Math.acos(e) * oc) : (i = yc(a, e.Nt),
                    e = yc(a, e.Jw),
                    e = i < e ? i : e);
                    e < c && (c = e)
                }
            c < kc && (b = (kc - c) / kc)
        } else
            b = 1;
        c = rc(a);
        return b = {
            lng: a.lng + (c.lng - a.lng) * b,
            lat: a.lat + (c.lat - a.lat) * b
        }
    }
    function Ac(a) {
        var b = {};
        if (a.lng < Vb[0] - 0.4 || a.lat < Vb[1] - 0.4 || a.lng > Vb[2] + 0.4 || a.lat > Vb[3] + 0.4)
            return b.lng = a.lng,
            b.lat = a.lat,
            b;
        if (qc(a, Xb, Yb)) {
            var b = a.lng - ic
              , c = a.lat - jc
              , a = Math.sqrt(b * b + c * c) - Math.sin(c * ec * hc) * fc
              , b = Math.atan2(c, b) - Math.cos(b * ec * hc) * gc;
            return b = {
                lng: a * Math.cos(b),
                lat: a * Math.sin(b)
            }
        }
        c = tc(a);
        return a.lng === c.lng && a.lat === c.lng ? (b.lng = a.lng,
        b.lat = a.lat,
        b) : sc(a)
    }
    function Ya(a, b) {
        if (3 === b && a instanceof Q) {
            var c = tc(a);
            return new J(c.lng,c.lat)
        }
        return a
    }
    function cb(a, b) {
        if (3 === b && a instanceof J) {
            var c = Ac(a);
            return new Q(c.lng,c.lat)
        }
        return 5 === b && a instanceof J ? new Q(a.lng,a.lat) : a
    }
    ;function oa(a, b) {
        if (b) {
            var c = (1E5 * Math.random()).toFixed(0);
            D._rd["_cbk" + c] = function(a) {
                b && b(a);
                delete D._rd["_cbk" + c]
            }
            ;
            a += "&callback=BMap._rd._cbk" + c
        }
        var e = L("script", {
            type: "text/javascript"
        });
        e.charset = "utf-8";
        e.src = a;
        e.addEventListener ? e.addEventListener("load", function(a) {
            a = a.target;
            a.parentNode.removeChild(a)
        }, t) : e.attachEvent && e.attachEvent("onreadystatechange", function() {
            var a = window.event.srcElement;
            a && ("loaded" == a.readyState || "complete" == a.readyState) && a.parentNode.removeChild(a)
        });
        setTimeout(function() {
            document.getElementsByTagName("head")[0].appendChild(e);
            e = q
        }, 1)
    }
    ;var Bc = {
        map: "cizcvq",
        common: "g1wth0",
        style: "n4zjcm",
        tile: "1qjctf",
        groundoverlay: "hanqlf",
        pointcollection: "mzctia",
        marker: "qq2pj0",
        symbol: "xnfufp",
        canvablepath: "bi2unv",
        vmlcontext: "3wsb1f",
        markeranimation: "vbzta0",
        poly: "r3d5ve",
        draw: "vwbruq",
        drawbysvg: "x3soav",
        drawbyvml: "f1hgzi",
        drawbycanvas: "5tncw1",
        infowindow: "z32str",
        oppc: "dw4zr4",
        opmb: "lix5dg",
        menu: "vhxxn0",
        control: "ihttwx",
        navictrl: "4xrrj2",
        geoctrl: "2j1jki",
        copyrightctrl: "1ezsod",
        citylistcontrol: "fjkpbq",
        scommon: "dnbhjq",
        local: "i0prg0",
        route: "0nwj3m",
        othersearch: "3bi0vd",
        mapclick: "vferzx",
        buslinesearch: "g5wey4",
        hotspot: "5ak1wj",
        autocomplete: "hg2dum",
        coordtrans: "su4y5t",
        coordtransutils: "0kslnk",
        convertor: "khwhiz",
        clayer: "w3ptjt",
        pservice: "xzax22",
        pcommon: "wajq4y",
        panorama: "i3rlep",
        panoramaflash: "amklzb"
    };
    A.py = function() {
        function a(a) {
            return e && !!c[b + a + "_" + Bc[a]]
        }
        var b = "BMap_"
          , c = window.localStorage
          , e = "localStorage"in window && c !== q && c !== l;
        return {
            AY: e,
            set: function(a, g) {
                if (e) {
                    for (var i = b + a + "_", k = c.length, m; k--; )
                        m = c.key(k),
                        -1 < m.indexOf(i) && c.removeItem(m);
                    try {
                        c.setItem(b + a + "_" + Bc[a], g)
                    } catch (n) {
                        c.clear()
                    }
                }
            },
            get: function(f) {
                return e && a(f) ? c.getItem(b + f + "_" + Bc[f]) : t
            },
            PJ: a
        }
    }();
    function Ta() {}
    A.object.extend(Ta, {
        Bj: {
            bG: -1,
            xP: 0,
            Np: 1
        },
        WK: function() {
            var a = "canvablepath";
            if (!I() || !Qb())
                Pb() || (Ob() ? a = "vmlcontext" : Qb());
            return {
                tile: ["style"],
                control: [],
                marker: ["symbol"],
                symbol: ["canvablepath", "common"],
                canvablepath: "canvablepath" === a ? [] : [a],
                vmlcontext: [],
                style: [],
                poly: ["marker", "drawbycanvas", "drawbysvg", "drawbyvml"],
                drawbysvg: ["draw"],
                drawbyvml: ["draw"],
                drawbycanvas: ["draw"],
                infowindow: ["common", "marker"],
                menu: [],
                oppc: [],
                opmb: [],
                scommon: [],
                local: ["scommon"],
                route: ["scommon"],
                othersearch: ["scommon"],
                autocomplete: ["scommon"],
                citylistcontrol: ["autocomplete"],
                mapclick: ["scommon"],
                buslinesearch: ["route"],
                hotspot: [],
                coordtransutils: ["coordtrans"],
                convertor: [],
                clayer: ["tile"],
                pservice: [],
                pcommon: ["style", "pservice"],
                panorama: ["pcommon"],
                panoramaflash: ["pcommon"]
            }
        },
        e5: {},
        TF: {
            IP: D.oa + "getmodules?v=3.0",
            dU: 5E3
        },
        gC: t,
        Qd: {
            tl: {},
            gn: [],
            Dv: []
        },
        load: function(a, b, c) {
            var e = this.ob(a);
            if (e.Le == this.Bj.Np)
                c && b();
            else {
                if (e.Le == this.Bj.bG) {
                    this.UJ(a);
                    this.hN(a);
                    var f = this;
                    f.gC == t && (f.gC = p,
                    setTimeout(function() {
                        for (var a = [], b = 0, c = f.Qd.gn.length; b < c; b++) {
                            var e = f.Qd.gn[b]
                              , n = "";
                            ia.py.PJ(e) ? n = ia.py.get(e) : (n = "",
                            a.push(e + "_" + Bc[e]));
                            f.Qd.Dv.push({
                                zM: e,
                                rE: n
                            })
                        }
                        f.gC = t;
                        f.Qd.gn.length = 0;
                        0 == a.length ? f.DK() : oa(f.TF.IP + "&mod=" + a.join(","))
                    }, 1));
                    e.Le = this.Bj.xP
                }
                e.zu.push(b)
            }
        },
        UJ: function(a) {
            if (a && this.WK()[a])
                for (var a = this.WK()[a], b = 0; b < a.length; b++)
                    this.UJ(a[b]),
                    this.Qd.tl[a[b]] || this.hN(a[b])
        },
        hN: function(a) {
            for (var b = 0; b < this.Qd.gn.length; b++)
                if (this.Qd.gn[b] == a)
                    return;
            this.Qd.gn.push(a)
        },
        RZ: function(a, b) {
            var c = this.ob(a);
            try {
                eval(b)
            } catch (e) {
                return
            }
            c.Le = this.Bj.Np;
            for (var f = 0, g = c.zu.length; f < g; f++)
                c.zu[f]();
            c.zu.length = 0
        },
        PJ: function(a, b) {
            var c = this;
            c.timeout = setTimeout(function() {
                c.Qd.tl[a].Le != c.Bj.Np ? (c.remove(a),
                c.load(a, b)) : clearTimeout(c.timeout)
            }, c.TF.dU)
        },
        ob: function(a) {
            this.Qd.tl[a] || (this.Qd.tl[a] = {},
            this.Qd.tl[a].Le = this.Bj.bG,
            this.Qd.tl[a].zu = []);
            return this.Qd.tl[a]
        },
        remove: function(a) {
            delete this.ob(a)
        },
        cV: function(a, b) {
            for (var c = this.Qd.Dv, e = p, f = 0, g = c.length; f < g; f++)
                "" == c[f].rE && (c[f].zM == a ? c[f].rE = b : e = t);
            e && this.DK()
        },
        DK: function() {
            for (var a = this.Qd.Dv, b = 0, c = a.length; b < c; b++)
                this.RZ(a[b].zM, a[b].rE);
            this.Qd.Dv.length = 0
        }
    });
    function R(a, b) {
        this.x = a || 0;
        this.y = b || 0;
        this.x = this.x;
        this.y = this.y
    }
    R.prototype.Sb = function(a) {
        return a && a.x == this.x && a.y == this.y
    }
    ;
    function N(a, b) {
        this.width = a || 0;
        this.height = b || 0
    }
    N.prototype.Sb = function(a) {
        return a && this.width == a.width && this.height == a.height
    }
    ;
    function lb(a, b, c) {
        var e = new XMLHttpRequest;
        e.open("POST", a, p);
        e.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        e.timeout = 1E4;
        e.ontimeout = u();
        e.onreadystatechange = function() {
            4 === this.readyState && 200 === this.status && c && c(e.responseText)
        }
        ;
        e.send(b)
    }
    ;function kb(a, b) {
        a && (this.Jb = a,
        this.ca = "spot" + kb.ca++,
        b = b || {},
        this.Yg = b.text || "",
        this.jv = b.offsets ? b.offsets.slice(0) : [5, 5, 5, 5],
        this.oB = b.userData || q,
        this.Ih = b.minZoom || q,
        this.Gf = b.maxZoom || q)
    }
    kb.ca = 0;
    A.extend(kb.prototype, {
        ya: function(a) {
            this.Ih == q && (this.Ih = a.M.fc);
            this.Gf == q && (this.Gf = a.M.mc)
        },
        va: function(a) {
            if (a instanceof Q || a instanceof J)
                this.Jb = a
        },
        la: x("Jb"),
        Gt: ba("Yg"),
        zD: x("Yg"),
        setUserData: ba("oB"),
        getUserData: x("oB")
    });
    function Cc() {
        this.P = q;
        this.Kb = "control";
        this.Ua = this.GJ = p
    }
    A.lang.xa(Cc, A.lang.Ha, "Control");
    A.extend(Cc.prototype, {
        initialize: function(a) {
            this.P = a;
            if (this.R)
                return a.ab.appendChild(this.R),
                this.R
        },
        Ge: function(a) {
            !this.R && (this.initialize && $a(this.initialize)) && (this.R = this.initialize(a));
            this.m = this.m || {
                Eg: t
            };
            this.cB();
            this.pr();
            this.R && (this.R.Oq = this)
        },
        cB: function() {
            var a = this.R;
            if (a) {
                var b = a.style;
                b.position = "absolute";
                b.zIndex = this.wu || "10";
                b.MozUserSelect = "none";
                b.WebkitTextSizeAdjust = "none";
                this.m.Eg || A.U.hb(a, "BMap_noprint");
                I() || A.V(a, "contextmenu", na)
            }
        },
        remove: function() {
            this.P = q;
            this.R && (this.R.parentNode && this.R.parentNode.removeChild(this.R),
            this.R = this.R.Oq = q)
        },
        Fa: function() {
            this.R = Db(this.P.ab, "<div unselectable='on'></div>");
            this.Ua == t && A.U.$(this.R);
            return this.R
        },
        pr: function() {
            this.rc(this.m.anchor)
        },
        rc: function(a) {
            if (this.b2 || !Za(a) || isNaN(a) || a < Dc || 3 < a)
                a = this.defaultAnchor;
            this.m = this.m || {
                Eg: t
            };
            this.m.Ea = this.m.Ea || this.defaultOffset;
            var b = this.m.anchor;
            this.m.anchor = a;
            if (this.R) {
                var c = this.R
                  , e = this.m.Ea.width
                  , f = this.m.Ea.height;
                c.style.left = c.style.top = c.style.right = c.style.bottom = "auto";
                switch (a) {
                case Dc:
                    c.style.top = f + "px";
                    c.style.left = e + "px";
                    break;
                case Ec:
                    c.style.top = f + "px";
                    c.style.right = e + "px";
                    break;
                case Fc:
                    c.style.bottom = f + "px";
                    c.style.left = e + "px";
                    break;
                case 3:
                    c.style.bottom = f + "px",
                    c.style.right = e + "px"
                }
                c = ["TL", "TR", "BL", "BR"];
                A.U.qc(this.R, "anchor" + c[b]);
                A.U.hb(this.R, "anchor" + c[a])
            }
        },
        bD: function() {
            return this.m.anchor
        },
        getContainer: x("R"),
        Ld: function(a) {
            a instanceof N && (this.m = this.m || {
                Eg: t
            },
            this.m.Ea = new N(a.width,a.height),
            this.R && this.rc(this.m.anchor))
        },
        hj: function() {
            return this.m.Ea
        },
        Yc: x("R"),
        show: function() {
            this.Ua != p && (this.Ua = p,
            this.R && A.U.show(this.R))
        },
        $: function() {
            this.Ua != t && (this.Ua = t,
            this.R && A.U.$(this.R))
        },
        isPrintable: function() {
            return !!this.m.Eg
        },
        Oc: function() {
            return !this.R && !this.P ? t : !!this.Ua
        }
    });
    var Dc = 0
      , Ec = 1
      , Fc = 2;
    function mb(a) {
        Cc.call(this);
        a = a || {};
        this.m = {
            Eg: t,
            fF: a.showZoomInfo || p,
            anchor: a.anchor,
            Ea: a.offset,
            type: a.type,
            qW: a.enableGeolocation || t
        };
        this.defaultAnchor = I() ? 3 : Dc;
        this.defaultOffset = new N(10,10);
        this.rc(a.anchor);
        this.Pm(a.type);
        this.yf()
    }
    A.lang.xa(mb, Cc, "NavigationControl");
    A.extend(mb.prototype, {
        initialize: function(a) {
            this.P = a;
            return this.R
        },
        Pm: function(a) {
            this.m.type = Za(a) && 0 <= a && 3 >= a ? a : 0
        },
        Vo: function() {
            return this.m.type
        },
        yf: function() {
            var a = this;
            Ta.load("navictrl", function() {
                a.xf()
            })
        }
    });
    function Gc(a) {
        Cc.call(this);
        a = a || {};
        this.m = {
            anchor: a.anchor || Fc,
            Ea: a.offset || new N(10,30),
            B_: a.showAddressBar !== t,
            L2: a.enableAutoLocation || t,
            rM: a.locationIcon || q
        };
        var b = this;
        this.wu = 1200;
        b.v0 = [];
        this.oe = [];
        Ta.load("geoctrl", function() {
            (function e() {
                if (0 !== b.oe.length) {
                    var a = b.oe.shift();
                    b[a.method].apply(b, a.arguments);
                    e()
                }
            }
            )();
            b.HP()
        });
        Ra(Ka)
    }
    A.lang.xa(Gc, Cc, "GeolocationControl");
    A.extend(Gc.prototype, {
        location: function() {
            this.oe.push({
                method: "location",
                arguments: arguments
            })
        },
        getAddressComponent: da(q)
    });
    function Hc(a) {
        Cc.call(this);
        a = a || {};
        this.m = {
            Eg: t,
            anchor: a.anchor,
            Ea: a.offset
        };
        this.cc = [];
        this.defaultAnchor = Fc;
        this.defaultOffset = new N(5,2);
        this.rc(a.anchor);
        this.GJ = t;
        this.yf()
    }
    A.lang.xa(Hc, Cc, "CopyrightControl");
    A.object.extend(Hc.prototype, {
        initialize: function(a) {
            this.P = a;
            return this.R
        },
        Zv: function(a) {
            if (a && Za(a.id) && !isNaN(a.id)) {
                var b = {
                    bounds: q,
                    content: ""
                }, c;
                for (c in a)
                    b[c] = a[c];
                if (a = this.im(a.id))
                    for (var e in b)
                        a[e] = b[e];
                else
                    this.cc.push(b)
            }
        },
        im: function(a) {
            for (var b = 0, c = this.cc.length; b < c; b++)
                if (this.cc[b].id == a)
                    return this.cc[b]
        },
        iD: x("cc"),
        HE: function(a) {
            for (var b = 0, c = this.cc.length; b < c; b++)
                this.cc[b].id == a && (r = this.cc.splice(b, 1),
                b--,
                c = this.cc.length)
        },
        yf: function() {
            var a = this;
            Ta.load("copyrightctrl", function() {
                a.xf()
            })
        }
    });
    function ob(a) {
        Cc.call(this);
        a = a || {};
        this.m = {
            Eg: t,
            size: a.size || new N(150,150),
            padding: 5,
            bb: a.isOpen === p ? p : t,
            N0: 4,
            Ea: a.offset,
            anchor: a.anchor
        };
        this.defaultAnchor = 3;
        this.defaultOffset = new N(0,0);
        this.gq = this.hq = 13;
        this.rc(a.anchor);
        this.Be(this.m.size);
        this.yf()
    }
    A.lang.xa(ob, Cc, "OverviewMapControl");
    A.extend(ob.prototype, {
        initialize: function(a) {
            this.P = a;
            return this.R
        },
        rc: function(a) {
            Cc.prototype.rc.call(this, a)
        },
        qe: function() {
            this.qe.Tn = p;
            this.m.bb = !this.m.bb;
            this.R || (this.qe.Tn = t)
        },
        Be: function(a) {
            a instanceof N || (a = new N(150,150));
            a.width = 0 < a.width ? a.width : 150;
            a.height = 0 < a.height ? a.height : 150;
            this.m.size = a
        },
        xb: function() {
            return this.m.size
        },
        bb: function() {
            return this.m.bb
        },
        yf: function() {
            var a = this;
            Ta.load("control", function() {
                a.xf()
            })
        }
    });
    function Ic(a) {
        Cc.call(this);
        a = a || {};
        this.defaultAnchor = Dc;
        this.aV = a.canCheckSize === t ? t : p;
        this.$i = "";
        this.defaultOffset = new N(10,10);
        this.onChangeBefore = [];
        this.onChangeAfter = [];
        this.onChangeSuccess = [];
        this.m = {
            Eg: t,
            Ea: a.offset || this.defaultOffset,
            anchor: a.anchor || this.defaultAnchor,
            expand: !!a.expand
        };
        a.onChangeBefore && $a(a.onChangeBefore) && this.onChangeBefore.push(a.onChangeBefore);
        a.onChangeAfter && $a(a.onChangeAfter) && this.onChangeAfter.push(a.onChangeAfter);
        a.onChangeSuccess && $a(a.onChangeSuccess) && this.onChangeSuccess.push(a.onChangeSuccess);
        this.rc(a.anchor);
        this.yf()
    }
    A.lang.xa(Ic, Cc, "CityListControl");
    A.object.extend(Ic.prototype, {
        initialize: function(a) {
            this.P = a;
            return this.R
        },
        yf: function() {
            var a = this;
            Ta.load("citylistcontrol", function() {
                a.xf()
            }, p)
        }
    });
    function nb(a) {
        Cc.call(this);
        a = a || {};
        this.m = {
            Eg: t,
            color: "black",
            dd: "metric",
            Ea: a.offset
        };
        this.defaultAnchor = Fc;
        this.defaultOffset = new N(81,18);
        this.rc(a.anchor);
        this.Qh = {
            metric: {
                name: "metric",
                WJ: 1,
                KL: 1E3,
                tO: "\u7c73",
                uO: "\u516c\u91cc"
            },
            us: {
                name: "us",
                WJ: 3.2808,
                KL: 5280,
                tO: "\u82f1\u5c3a",
                uO: "\u82f1\u91cc"
            }
        };
        this.Qh[this.m.dd] || (this.m.dd = "metric");
        this.zI = q;
        this.ZH = {};
        this.yf()
    }
    A.lang.xa(nb, Cc, "ScaleControl");
    A.object.extend(nb.prototype, {
        initialize: function(a) {
            this.P = a;
            return this.R
        },
        Lk: function(a) {
            this.m.color = a + ""
        },
        h3: function() {
            return this.m.color
        },
        bF: function(a) {
            this.m.dd = this.Qh[a] && this.Qh[a].name || this.m.dd
        },
        PX: function() {
            return this.m.dd
        },
        yf: function() {
            var a = this;
            Ta.load("control", function() {
                a.xf()
            })
        }
    });
    var Jc = 0;
    function pb(a) {
        Cc.call(this);
        a = a || {};
        this.defaultAnchor = Ec;
        this.defaultOffset = new N(10,10);
        this.m = {
            Eg: t,
            lh: [Na, ab, Sa, Qa],
            LV: ["B_DIMENSIONAL_MAP", "B_SATELLITE_MAP", "B_NORMAL_MAP"],
            type: a.type || Jc,
            Ea: a.offset || this.defaultOffset,
            uW: p
        };
        this.rc(a.anchor);
        "[object Array]" == Object.prototype.toString.call(a.mapTypes) && (this.m.lh = a.mapTypes.slice(0));
        this.yf()
    }
    A.lang.xa(pb, Cc, "MapTypeControl");
    A.object.extend(pb.prototype, {
        initialize: function(a) {
            this.P = a;
            return this.R
        },
        qy: function(a) {
            this.P.Hn = a
        },
        yf: function() {
            var a = this;
            Ta.load("control", function() {
                a.xf()
            }, p)
        }
    });
    function Kc(a) {
        Cc.call(this);
        a = a || {};
        this.m = {
            Eg: t,
            Ea: a.offset,
            anchor: a.anchor
        };
        this.Ni = t;
        this.Hv = q;
        this.hI = new Lc({
            Se: "api"
        });
        this.iI = new Mc(q,{
            Se: "api"
        });
        this.defaultAnchor = Ec;
        this.defaultOffset = new N(10,10);
        this.rc(a.anchor);
        this.yf();
        Ra(wa)
    }
    A.lang.xa(Kc, Cc, "PanoramaControl");
    A.extend(Kc.prototype, {
        initialize: function(a) {
            this.P = a;
            return this.R
        },
        yf: function() {
            var a = this;
            Ta.load("control", function() {
                a.xf()
            })
        }
    });
    function Nc(a) {
        A.lang.Ha.call(this);
        this.m = {
            ab: q,
            cursor: "default"
        };
        this.m = A.extend(this.m, a);
        this.Kb = "contextmenu";
        this.P = q;
        this.Aa = [];
        this.If = [];
        this.Ee = [];
        this.Aw = this.Qr = q;
        this.Hh = t;
        var b = this;
        Ta.load("menu", function() {
            b.mb()
        })
    }
    A.lang.xa(Nc, A.lang.Ha, "ContextMenu");
    A.object.extend(Nc.prototype, {
        ya: function(a, b) {
            this.P = a;
            this.yl = b || q
        },
        remove: function() {
            this.P = this.yl = q
        },
        $v: function(a) {
            if (a && !("menuitem" != a.Kb || "" == a.Yg || 0 >= a.Vi)) {
                for (var b = 0, c = this.Aa.length; b < c; b++)
                    if (this.Aa[b] === a)
                        return;
                this.Aa.push(a);
                this.If.push(a)
            }
        },
        removeItem: function(a) {
            if (a && "menuitem" == a.Kb) {
                for (var b = 0, c = this.Aa.length; b < c; b++)
                    this.Aa[b] === a && (this.Aa[b].remove(),
                    this.Aa.splice(b, 1),
                    c--);
                b = 0;
                for (c = this.If.length; b < c; b++)
                    this.If[b] === a && (this.If[b].remove(),
                    this.If.splice(b, 1),
                    c--)
            }
        },
        zB: function() {
            this.Aa.push({
                Kb: "divider",
                Ij: this.Ee.length
            });
            this.Ee.push({
                U: q
            })
        },
        JE: function(a) {
            if (this.Ee[a]) {
                for (var b = 0, c = this.Aa.length; b < c; b++)
                    this.Aa[b] && ("divider" == this.Aa[b].Kb && this.Aa[b].Ij == a) && (this.Aa.splice(b, 1),
                    c--),
                    this.Aa[b] && ("divider" == this.Aa[b].Kb && this.Aa[b].Ij > a) && this.Aa[b].Ij--;
                this.Ee.splice(a, 1)
            }
        },
        Yc: x("R"),
        show: function() {
            this.Hh != p && (this.Hh = p)
        },
        $: function() {
            this.Hh != t && (this.Hh = t)
        },
        f_: function(a) {
            a && (this.m.cursor = a)
        },
        getItem: function(a) {
            return this.If[a]
        }
    });
    var Oc = H.sa + "menu_zoom_in.png"
      , Pc = H.sa + "menu_zoom_out.png";
    function Qc(a, b, c) {
        if (a && $a(b)) {
            A.lang.Ha.call(this);
            this.m = {
                width: 100,
                id: "",
                sm: ""
            };
            c = c || {};
            this.m.width = 1 * c.width ? c.width : 100;
            this.m.id = c.id ? c.id : "";
            this.m.sm = c.iconUrl ? c.iconUrl : "";
            this.Yg = a + "";
            this.$y = b;
            this.P = q;
            this.Kb = "menuitem";
            this.wr = this.Zu = this.R = this.Ch = q;
            this.Fh = p;
            var e = this;
            Ta.load("menu", function() {
                e.mb()
            })
        }
    }
    A.lang.xa(Qc, A.lang.Ha, "MenuItem");
    A.object.extend(Qc.prototype, {
        ya: function(a, b) {
            this.P = a;
            this.Ch = b
        },
        remove: function() {
            this.P = this.Ch = q
        },
        Gt: function(a) {
            a && (this.Yg = a + "")
        },
        Ub: function(a) {
            a && (this.m.sm = a)
        },
        Yc: x("R"),
        enable: function() {
            this.Fh = p
        },
        disable: function() {
            this.Fh = t
        }
    });
    function hb(a, b) {
        a && !b && (b = a);
        this.He = this.Wd = this.Me = this.Yd = this.Kl = this.wl = q;
        a && (this.Kl = new Q(a.lng,a.lat),
        this.wl = new Q(b.lng,b.lat),
        this.Me = a.lng,
        this.Yd = a.lat,
        this.He = b.lng,
        this.Wd = b.lat)
    }
    A.object.extend(hb.prototype, {
        rj: function() {
            return !this.Kl || !this.wl
        },
        Sb: function(a) {
            return !(a instanceof hb) || this.rj() ? t : this.Ve().Sb(a.Ve()) && this.Qf().Sb(a.Qf())
        },
        Ve: x("Kl"),
        Qf: x("wl"),
        rV: function(a) {
            return !(a instanceof hb) || this.rj() || a.rj() ? t : a.Me > this.Me && a.He < this.He && a.Yd > this.Yd && a.Wd < this.Wd
        },
        Nb: function() {
            return this.rj() ? q : new Q((this.Me + this.He) / 2,(this.Yd + this.Wd) / 2)
        },
        Os: function(a) {
            if (!(a instanceof hb) || Math.max(a.Me, a.He) < Math.min(this.Me, this.He) || Math.min(a.Me, a.He) > Math.max(this.Me, this.He) || Math.max(a.Yd, a.Wd) < Math.min(this.Yd, this.Wd) || Math.min(a.Yd, a.Wd) > Math.max(this.Yd, this.Wd))
                return q;
            var b = Math.max(this.Me, a.Me)
              , c = Math.min(this.He, a.He)
              , e = Math.max(this.Yd, a.Yd)
              , a = Math.min(this.Wd, a.Wd);
            return new hb(new Q(b,e),new Q(c,a))
        },
        Mr: function(a) {
            return !(a instanceof Q || a instanceof J) || this.rj() ? t : a.lng >= this.Me && a.lng <= this.He && a.lat >= this.Yd && a.lat <= this.Wd
        },
        extend: function(a) {
            if (a instanceof Q || a instanceof J) {
                var b = a.lng
                  , a = a.lat;
                this.Kl || (this.Kl = new Q(0,0));
                this.wl || (this.wl = new Q(0,0));
                if (!this.Me || this.Me > b)
                    this.Kl.lng = this.Me = b;
                if (!this.He || this.He < b)
                    this.wl.lng = this.He = b;
                if (!this.Yd || this.Yd > a)
                    this.Kl.lat = this.Yd = a;
                if (!this.Wd || this.Wd < a)
                    this.wl.lat = this.Wd = a
            }
        },
        sF: function() {
            return this.rj() ? new Q(0,0) : new Q(Math.abs(this.He - this.Me),Math.abs(this.Wd - this.Yd))
        }
    });
    function Q(a, b) {
        isNaN(a) && (a = Nb(a),
        a = isNaN(a) ? 0 : a);
        bb(a) && (a = parseFloat(a));
        isNaN(b) && (b = Nb(b),
        b = isNaN(b) ? 0 : b);
        bb(b) && (b = parseFloat(b));
        this.lng = a;
        this.lat = b
    }
    Q.VD = function(a) {
        return a && 180 >= a.lng && -180 <= a.lng && 74 >= a.lat && -74 <= a.lat
    }
    ;
    Q.prototype.Sb = function(a) {
        return a && this.lat == a.lat && this.lng == a.lng
    }
    ;
    function J(a, b) {
        isNaN(a) && (a = Nb(a),
        a = isNaN(a) ? 0 : a);
        bb(a) && (a = parseFloat(a));
        isNaN(b) && (b = Nb(b),
        b = isNaN(b) ? 0 : b);
        bb(b) && (b = parseFloat(b));
        this.lng = a;
        this.lat = b;
        this.Se = "inner"
    }
    J.VD = function(a) {
        return a && 180 >= a.lng && -180 <= a.lng && 74 >= a.lat && -74 <= a.lat
    }
    ;
    J.prototype.Sb = function(a) {
        return a && this.lat == a.lat && this.lng == a.lng
    }
    ;
    function Rc() {}
    Rc.prototype.zg = function() {
        aa("lngLatToPoint\u65b9\u6cd5\u672a\u5b9e\u73b0")
    }
    ;
    Rc.prototype.vj = function() {
        aa("pointToLngLat\u65b9\u6cd5\u672a\u5b9e\u73b0")
    }
    ;
    function Sc() {}
    ;var gb = {
        YJ: function(a, b, c) {
            Ta.load("coordtransutils", function() {
                gb.CU(a, b, c)
            }, p)
        },
        XJ: function(a, b, c) {
            Ta.load("coordtransutils", function() {
                gb.BU(a, b, c)
            }, p)
        }
    };
    function Tc() {
        this.Ta = [];
        var a = this;
        Ta.load("convertor", function() {
            a.FP()
        })
    }
    A.xa(Tc, A.lang.Ha, "Convertor");
    A.extend(Tc.prototype, {
        translate: function(a, b, c, e) {
            this.Ta.push({
                method: "translate",
                arguments: [a, b, c, e]
            })
        }
    });
    V(Tc.prototype, {
        translate: Tc.prototype.translate
    });
    function T() {}
    T.prototype = new Rc;
    A.extend(T, {
        $O: 6370996.81,
        fG: [1.289059486E7, 8362377.87, 5591021, 3481989.83, 1678043.12, 0],
        nu: [86, 60, 45, 30, 15, 0],
        fP: [[1.410526172116255E-8, 8.98305509648872E-6, -1.9939833816331, 200.9824383106796, -187.2403703815547, 91.6087516669843, -23.38765649603339, 2.57121317296198, -0.03801003308653, 1.73379812E7], [-7.435856389565537E-9, 8.983055097726239E-6, -0.78625201886289, 96.32687599759846, -1.85204757529826, -59.36935905485877, 47.40033549296737, -16.50741931063887, 2.28786674699375, 1.026014486E7], [-3.030883460898826E-8, 8.98305509983578E-6, 0.30071316287616, 59.74293618442277, 7.357984074871, -25.38371002664745, 13.45380521110908, -3.29883767235584, 0.32710905363475, 6856817.37], [-1.981981304930552E-8, 8.983055099779535E-6, 0.03278182852591, 40.31678527705744, 0.65659298677277, -4.44255534477492, 0.85341911805263, 0.12923347998204, -0.04625736007561, 4482777.06], [3.09191371068437E-9, 8.983055096812155E-6, 6.995724062E-5, 23.10934304144901, -2.3663490511E-4, -0.6321817810242, -0.00663494467273, 0.03430082397953, -0.00466043876332, 2555164.4], [2.890871144776878E-9, 8.983055095805407E-6, -3.068298E-8, 7.47137025468032, -3.53937994E-6, -0.02145144861037, -1.234426596E-5, 1.0322952773E-4, -3.23890364E-6, 826088.5]],
        cG: [[-0.0015702102444, 111320.7020616939, 1704480524535203, -10338987376042340, 26112667856603880, -35149669176653700, 26595700718403920, -10725012454188240, 1800819912950474, 82.5], [8.277824516172526E-4, 111320.7020463578, 6.477955746671607E8, -4.082003173641316E9, 1.077490566351142E10, -1.517187553151559E10, 1.205306533862167E10, -5.124939663577472E9, 9.133119359512032E8, 67.5], [0.00337398766765, 111320.7020202162, 4481351.045890365, -2.339375119931662E7, 7.968221547186455E7, -1.159649932797253E8, 9.723671115602145E7, -4.366194633752821E7, 8477230.501135234, 52.5], [0.00220636496208, 111320.7020209128, 51751.86112841131, 3796837.749470245, 992013.7397791013, -1221952.21711287, 1340652.697009075, -620943.6990984312, 144416.9293806241, 37.5], [-3.441963504368392E-4, 111320.7020576856, 278.2353980772752, 2485758.690035394, 6070.750963243378, 54821.18345352118, 9540.606633304236, -2710.55326746645, 1405.483844121726, 22.5], [-3.218135878613132E-4, 111320.7020701615, 0.00369383431289, 823725.6402795718, 0.46104986909093, 2351.343141331292, 1.58060784298199, 8.77738589078284, 0.37238884252424, 7.45]],
        n3: function(a, b) {
            if (!a || !b)
                return 0;
            var c, e, a = this.dc(a);
            if (!a)
                return 0;
            c = this.Tk(a.lng);
            e = this.Tk(a.lat);
            b = this.dc(b);
            return !b ? 0 : this.ue(c, this.Tk(b.lng), e, this.Tk(b.lat))
        },
        uk: function(a, b) {
            if (!a || !b)
                return 0;
            a.lng = this.pD(a.lng, -180, 180);
            a.lat = this.vD(a.lat, -74, 74);
            b.lng = this.pD(b.lng, -180, 180);
            b.lat = this.vD(b.lat, -74, 74);
            return this.ue(this.Tk(a.lng), this.Tk(b.lng), this.Tk(a.lat), this.Tk(b.lat))
        },
        dc: function(a) {
            if (a === q || a === l)
                return new J(0,0);
            var b, c;
            b = new J(Math.abs(a.lng),Math.abs(a.lat));
            for (var e = 0; e < this.fG.length; e++)
                if (b.lat >= this.fG[e]) {
                    c = this.fP[e];
                    break
                }
            a = this.ZJ(a, c);
            return a = new J(a.lng,a.lat)
        },
        Wa: function(a) {
            if (a === q || a === l || 180 < a.lng || -180 > a.lng || 90 < a.lat || -90 > a.lat)
                return new J(0,0);
            var b, c;
            a.lng = this.pD(a.lng, -180, 180);
            a.lat = this.vD(a.lat, -85, 85);
            b = new J(a.lng,a.lat);
            for (var e = 0; e < this.nu.length; e++)
                if (b.lat >= this.nu[e]) {
                    c = this.cG[e];
                    break
                }
            if (!c)
                for (e = 0; e < this.nu.length; e++)
                    if (b.lat <= -this.nu[e]) {
                        c = this.cG[e];
                        break
                    }
            a = this.ZJ(a, c);
            return a = new J(a.lng,a.lat)
        },
        ZJ: function(a, b) {
            if (a && b) {
                var c = b[0] + b[1] * Math.abs(a.lng)
                  , e = Math.abs(a.lat) / b[9]
                  , e = b[2] + b[3] * e + b[4] * e * e + b[5] * e * e * e + b[6] * e * e * e * e + b[7] * e * e * e * e * e + b[8] * e * e * e * e * e * e
                  , c = c * (0 > a.lng ? -1 : 1)
                  , e = e * (0 > a.lat ? -1 : 1);
                return new J(c,e)
            }
        },
        ue: function(a, b, c, e) {
            return this.$O * Math.acos(Math.sin(c) * Math.sin(e) + Math.cos(c) * Math.cos(e) * Math.cos(b - a))
        },
        Tk: function(a) {
            return Math.PI * a / 180
        },
        N5: function(a) {
            return 180 * a / Math.PI
        },
        vD: function(a, b, c) {
            b != q && (a = Math.max(a, b));
            c != q && (a = Math.min(a, c));
            return a
        },
        pD: function(a, b, c) {
            for (; a > c; )
                a -= c - b;
            for (; a < b; )
                a += c - b;
            return a
        }
    });
    A.extend(T.prototype, {
        ii: function(a) {
            return T.Wa(a)
        },
        zg: function(a) {
            a = T.Wa(a);
            return new R(a.lng,a.lat)
        },
        nh: function(a) {
            return T.dc(a)
        },
        vj: function(a) {
            a = new J(a.x,a.y);
            a = T.dc(a);
            return new Q(a.lng,a.lat)
        },
        yc: function(a, b, c, e, f) {
            if (a)
                return a = this.ii(a, f),
                b = this.Xb(b),
                new R(Math.round((a.lng - c.lng) / b + e.width / 2),Math.round((c.lat - a.lat) / b + e.height / 2))
        },
        TY: function(a, b, c, e) {
            if (a)
                return b = this.Xb(b),
                new R(Math.round((a.lng - c.lng) / b + e.width / 2),Math.round((c.lat - a.lat) / b + e.height / 2))
        },
        Zb: function(a, b, c, e, f) {
            if (a)
                return b = this.Xb(b),
                this.nh(new J(c.lng + b * (a.x - e.width / 2),c.lat - b * (a.y - e.height / 2)), f)
        },
        Xb: function(a) {
            return Math.pow(2, 18 - a)
        },
        CN: ba("Ia")
    });
    function jb() {
        this.$i = "bj"
    }
    jb.prototype = new T;
    A.extend(jb.prototype, {
        ii: function(a, b) {
            return this.qQ(b, T.Wa(a))
        },
        nh: function(a, b) {
            return T.dc(this.rQ(b, a))
        },
        lngLatToPointFor3D: function(a, b) {
            var c = this
              , e = T.Wa(a);
            Ta.load("coordtrans", function() {
                var a = Sc.tD(c.$i || "bj", e)
                  , a = new R(a.x,a.y);
                b && b(a)
            }, p)
        },
        pointToLngLatFor3D: function(a, b) {
            var c = this
              , e = new Q(a.x,a.y);
            Ta.load("coordtrans", function() {
                var a = Sc.qD(c.$i || "bj", e)
                  , a = new Q(a.lng,a.lat)
                  , a = T.dc(a);
                b && b(a)
            }, p)
        },
        qQ: function(a, b) {
            if (Ta.ob("coordtrans").Le == Ta.Bj.Np) {
                var c = Sc.tD(a || "bj", b);
                return new Q(c.x,c.y)
            }
            Ta.load("coordtrans", u());
            return new Q(0,0)
        },
        rQ: function(a, b) {
            if (Ta.ob("coordtrans").Le == Ta.Bj.Np) {
                var c = Sc.qD(a || "bj", b);
                return new Q(c.lng,c.lat)
            }
            Ta.load("coordtrans", u());
            return new Q(0,0)
        },
        Xb: function(a) {
            return Math.pow(2, 20 - a)
        },
        CN: ba("Ia")
    });
    function Vc() {
        this.Kb = "overlay"
    }
    A.lang.xa(Vc, A.lang.Ha, "Overlay");
    Vc.zk = function(a) {
        a *= 1;
        return !a ? 0 : -1E5 * a << 1
    }
    ;
    A.extend(Vc.prototype, {
        Ge: function(a) {
            if (!this.ba && $a(this.initialize) && (this.ba = this.initialize(a)))
                this.ba.style.WebkitUserSelect = "none";
            this.draw()
        },
        initialize: function() {
            aa("initialize\u65b9\u6cd5\u672a\u5b9e\u73b0")
        },
        draw: function() {
            aa("draw\u65b9\u6cd5\u672a\u5b9e\u73b0")
        },
        remove: function() {
            this.ba && this.ba.parentNode && this.ba.parentNode.removeChild(this.ba);
            this.ba = q;
            this.dispatchEvent(new P("onremove"))
        },
        $: function() {
            this.ba && A.U.$(this.ba)
        },
        show: function() {
            this.ba && A.U.show(this.ba)
        },
        Oc: function() {
            return !this.ba || "none" == this.ba.style.display || "hidden" == this.ba.style.visibility ? t : p
        }
    });
    D.Ze(function(a) {
        function b(a, b) {
            var c = L("div")
              , i = c.style;
            i.position = "absolute";
            i.top = i.left = i.width = i.height = "0";
            i.zIndex = b;
            a.appendChild(c);
            return c
        }
        var c = a.aa;
        c.Pc = a.Pc = b(a.platform, 200);
        a.Xd.VC = b(c.Pc, 800);
        a.Xd.mE = b(c.Pc, 700);
        a.Xd.JK = b(c.Pc, 600);
        a.Xd.eE = b(c.Pc, 500);
        a.Xd.vM = b(c.Pc, 400);
        a.Xd.wM = b(c.Pc, 300);
        a.Xd.FO = b(c.Pc, 201);
        a.Xd.at = b(c.Pc, 200)
    });
    function ib() {
        A.lang.Ha.call(this);
        Vc.call(this);
        this.map = q;
        this.Ua = p;
        this.Db = q;
        this.SG = 0
    }
    A.lang.xa(ib, Vc, "OverlayInternal");
    A.extend(ib.prototype, {
        initialize: function(a) {
            this.map = a;
            A.lang.Ha.call(this, this.ca);
            return q
        },
        Vw: x("map"),
        draw: u(),
        Cj: u(),
        remove: function() {
            this.map = q;
            A.lang.Dw(this.ca);
            Vc.prototype.remove.call(this)
        },
        $: function() {
            this.Ua !== t && (this.Ua = t)
        },
        show: function() {
            this.Ua !== p && (this.Ua = p)
        },
        Oc: function() {
            return !this.ba ? t : !!this.Ua
        },
        Ra: x("ba"),
        BN: function(a) {
            var a = a || {}, b;
            for (b in a)
                this.K[b] = a[b]
        },
        Cp: ba("zIndex"),
        ej: function() {
            this.K.ej = p
        },
        UV: function() {
            this.K.ej = t
        },
        jo: ba("jg"),
        mp: function() {
            this.jg = q
        }
    });
    function Wc() {
        this.map = q;
        this.Ba = {};
        this.De = []
    }
    D.Ze(function(a) {
        var b = new Wc;
        b.map = a;
        a.Ba = b.Ba;
        a.De = b.De;
        a.addEventListener("load", function(a) {
            b.draw(a)
        });
        a.addEventListener("moveend", function(a) {
            b.draw(a)
        });
        A.fa.na && 8 > A.fa.na || "BackCompat" === document.compatMode ? a.addEventListener("zoomend", function(a) {
            setTimeout(function() {
                b.draw(a)
            }, 20)
        }) : a.addEventListener("zoomend", function(a) {
            b.draw(a)
        });
        a.addEventListener("maptypechange", function(a) {
            b.draw(a)
        });
        a.addEventListener("addoverlay", function(a) {
            a = a.target;
            if (a instanceof ib)
                b.Ba[a.ca] || (b.Ba[a.ca] = a);
            else {
                for (var e = t, f = 0, g = b.De.length; f < g; f++)
                    if (b.De[f] === a) {
                        e = p;
                        break
                    }
                e || b.De.push(a)
            }
        });
        a.addEventListener("removeoverlay", function(a) {
            a = a.target;
            if (a instanceof ib)
                delete b.Ba[a.ca];
            else
                for (var e = 0, f = b.De.length; e < f; e++)
                    if (b.De[e] === a) {
                        b.De.splice(e, 1);
                        break
                    }
        });
        a.addEventListener("clearoverlays", function() {
            this.Wc();
            for (var a in b.Ba)
                b.Ba[a].K.ej && (b.Ba[a].remove(),
                delete b.Ba[a]);
            a = 0;
            for (var e = b.De.length; a < e; a++)
                b.De[a].enableMassClear !== t && (b.De[a].remove(),
                b.De[a] = q,
                b.De.splice(a, 1),
                a--,
                e--)
        });
        a.addEventListener("infowindowopen", function() {
            var a = this.Db;
            a && (A.U.$(a.zc),
            A.U.$(a.$b))
        });
        a.addEventListener("movestart", function() {
            this.ih() && this.ih().FI()
        });
        a.addEventListener("moveend", function() {
            this.ih() && this.ih().uI()
        })
    });
    Wc.prototype.draw = function(a) {
        if (D.Qp) {
            var b = D.Qp.ws(this.map);
            "canvas" === b.Kb && b.canvas && b.lQ(b.canvas.getContext("2d"))
        }
        for (var c in this.Ba)
            this.Ba[c].draw(a);
        A.jc.Mb(this.De, function(a) {
            a.draw()
        });
        this.map.aa.sb && this.map.aa.sb.va();
        D.Qp && b.ZE()
    }
    ;
    function Xc(a) {
        ib.call(this);
        a = a || {};
        this.K = {
            strokeColor: a.strokeColor || "#3a6bdb",
            nc: a.strokeWeight || 5,
            ud: a.strokeOpacity || 0.65,
            strokeStyle: a.strokeStyle || "solid",
            ej: a.enableMassClear === t ? t : p,
            wk: q,
            lm: q,
            kf: a.enableEditing === p ? p : t,
            AM: 5,
            t0: t,
            gf: a.enableClicking === t ? t : p,
            fi: a.icons && 0 < a.icons.length ? a.icons : q,
            PW: a.geodesic === p ? p : t,
            iE: a.linkRight === p ? p : t
        };
        0 >= this.K.nc && (this.K.nc = 5);
        if (0 > this.K.ud || 1 < this.K.ud)
            this.K.ud = 0.65;
        if (0 > this.K.tg || 1 < this.K.tg)
            this.K.tg = 0.65;
        "solid" != this.K.strokeStyle && "dashed" != this.K.strokeStyle && (this.K.strokeStyle = "solid");
        this.ba = q;
        this.vu = new hb(0,0);
        this.ef = [];
        this.oc = [];
        this.Va = {}
    }
    A.lang.xa(Xc, ib, "Graph");
    Xc.Sw = function(a) {
        var b = [];
        if (!a)
            return b;
        bb(a) && A.jc.Mb(a.split(";"), function(a) {
            a = a.split(",");
            b.push(new Q(a[0],a[1]))
        });
        "[object Array]" == Object.prototype.toString.apply(a) && 0 < a.length && (b = a);
        return b
    }
    ;
    Xc.xE = [0.09, 0.0050, 1.0E-4, 1.0E-5];
    A.extend(Xc.prototype, {
        initialize: function(a) {
            this.map = a;
            return q
        },
        draw: u(),
        or: function(a) {
            this.ef.length = 0;
            this.ka = Xc.Sw(a).slice(0);
            this.zh()
        },
        ke: function(a) {
            this.or(a)
        },
        zh: function() {
            if (this.ka) {
                var a = this;
                a.vu = new hb;
                A.jc.Mb(this.ka, function(b) {
                    a.vu.extend(b)
                })
            }
        },
        Ue: x("ka"),
        Om: function(a, b) {
            b && this.ka[a] && (this.ef.length = 0,
            this.ka[a] = new Q(b.lng,b.lat),
            this.zh())
        },
        setStrokeColor: function(a) {
            this.K.strokeColor = a
        },
        HX: function() {
            return this.K.strokeColor
        },
        Bp: function(a) {
            0 < a && (this.K.nc = a)
        },
        lL: function() {
            return this.K.nc
        },
        zp: function(a) {
            a == l || (1 < a || 0 > a) || (this.K.ud = a)
        },
        IX: function() {
            return this.K.ud
        },
        zt: function(a) {
            1 < a || 0 > a || (this.K.tg = a)
        },
        bX: function() {
            return this.K.tg
        },
        Ap: function(a) {
            "solid" != a && "dashed" != a || (this.K.strokeStyle = a)
        },
        kL: function() {
            return this.K.strokeStyle
        },
        setFillColor: function(a) {
            this.K.fillColor = a || ""
        },
        aX: function() {
            return this.K.fillColor
        },
        te: x("vu"),
        remove: function() {
            this.map && this.map.removeEventListener("onmousemove", this.Wu);
            ib.prototype.remove.call(this);
            this.ef.length = 0
        },
        kf: function() {
            if (!(2 > this.ka.length)) {
                this.K.kf = p;
                var a = this;
                Ta.load("poly", function() {
                    a.Pl()
                }, p)
            }
        },
        TV: function() {
            this.K.kf = t;
            var a = this;
            Ta.load("poly", function() {
                a.jk()
            }, p)
        },
        YW: function() {
            return this.K.kf
        },
        eX: function() {
            for (var a = [], b = 0; b < this.ka.length - 1; b++)
                var c = this.WU(this.ka[b], this.ka[b + 1])
                  , a = a.concat(c);
            return a = a.concat(this.ka[this.ka.length - 1])
        },
        WU: function(a, b) {
            if (a.Sb(b))
                return [a];
            var c = T.ue(U(a.lng), U(a.lat), U(b.lng), U(b.lat))
              , c = T.uk(a, b);
            if (25E4 > c)
                return [a];
            var e = []
              , c = Math.round(c / 15E4)
              , f = this.JJ(a, b);
            e.push(a);
            for (var g = 0; g < c; g++) {
                var i = this.KJ(a, b, g / c, f);
                e.push(i)
            }
            e.push(b);
            return e
        },
        KJ: function(a, b, c, e) {
            var f = U(a.lat)
              , g = U(b.lat)
              , a = U(a.lng)
              , i = U(b.lng)
              , b = Math.sin((1 - c) * e) / Math.sin(e)
              , c = Math.sin(c * e) / Math.sin(e)
              , e = b * Math.cos(f) * Math.cos(a) + c * Math.cos(g) * Math.cos(i)
              , a = b * Math.cos(f) * Math.sin(a) + c * Math.cos(g) * Math.sin(i);
            return new Q(180 * (Math.atan2(a, e) / Math.PI),180 * (Math.atan2(b * Math.sin(f) + c * Math.sin(g), Math.sqrt(Math.pow(e, 2) + Math.pow(a, 2))) / Math.PI))
        },
        JJ: function(a, b) {
            var c = U(a.lat)
              , e = U(b.lat);
            return Math.acos(Math.sin(c) * Math.sin(e) + Math.cos(c) * Math.cos(e) * Math.cos(Math.abs(U(b.lng) - U(a.lng))))
        }
    });
    function Yc(a) {
        ib.call(this);
        this.ba = this.map = q;
        this.K = {
            width: 0,
            height: 0,
            Ea: new N(0,0),
            opacity: 1,
            background: "transparent",
            zx: 1,
            hM: "#000",
            KY: "solid",
            point: q
        };
        this.BN(a);
        this.point = this.K.point
    }
    A.lang.xa(Yc, ib, "Division");
    A.extend(Yc.prototype, {
        Cj: function() {
            var a = this.K
              , b = this.content
              , c = ['<div class="BMap_Division" style="position:absolute;'];
            c.push("width:" + a.width + "px;display:block;");
            c.push("overflow:hidden;");
            "none" != a.borderColor && c.push("border:" + a.zx + "px " + a.KY + " " + a.hM + ";");
            c.push("opacity:" + a.opacity + "; filter:(opacity=" + 100 * a.opacity + ")");
            c.push("background:" + a.background + ";");
            c.push('z-index:60;">');
            c.push(b);
            c.push("</div>");
            this.ba = Db(this.map.Rf().mE, c.join(""))
        },
        initialize: function(a) {
            this.map = a;
            this.Cj();
            this.ba && A.V(this.ba, I() ? "touchstart" : "mousedown", function(a) {
                ma(a)
            });
            return this.ba
        },
        draw: function() {
            var a = this.map.Ye(this.K.point);
            this.K.Ea = new N(-Math.round(this.K.width / 2) - Math.round(this.K.zx),-Math.round(this.K.height / 2) - Math.round(this.K.zx));
            this.ba.style.left = a.x + this.K.Ea.width + "px";
            this.ba.style.top = a.y + this.K.Ea.height + "px"
        },
        la: function() {
            return this.K.point
        },
        A1: function() {
            return this.map.Qn(this.la())
        },
        va: function(a) {
            this.K.point = a;
            this.draw()
        },
        g_: function(a, b) {
            this.K.width = Math.round(a);
            this.K.height = Math.round(b);
            this.ba && (this.ba.style.width = this.K.width + "px",
            this.ba.style.height = this.K.height + "px",
            this.draw())
        }
    });
    function Zc(a, b, c) {
        a && b && (this.imageUrl = a,
        this.size = b,
        a = new N(Math.floor(b.width / 2),Math.floor(b.height / 2)),
        c = c || {},
        a = c.anchor || a,
        b = c.imageOffset || new N(0,0),
        this.imageSize = c.imageSize,
        this.anchor = a,
        this.imageOffset = b,
        this.infoWindowAnchor = c.infoWindowAnchor || this.anchor,
        this.printImageUrl = c.printImageUrl || "")
    }
    A.extend(Zc.prototype, {
        DN: function(a) {
            a && (this.imageUrl = a)
        },
        x_: function(a) {
            a && (this.printImageUrl = a)
        },
        Be: function(a) {
            a && (this.size = new N(a.width,a.height))
        },
        rc: function(a) {
            a && (this.anchor = new N(a.width,a.height))
        },
        At: function(a) {
            a && (this.imageOffset = new N(a.width,a.height))
        },
        l_: function(a) {
            a && (this.infoWindowAnchor = new N(a.width,a.height))
        },
        i_: function(a) {
            a && (this.imageSize = new N(a.width,a.height))
        },
        toString: da("Icon")
    });
    function $c(a, b) {
        if (a) {
            b = b || {};
            this.style = {
                anchor: b.anchor || new N(0,0),
                fillColor: b.fillColor || "#000",
                tg: b.fillOpacity || 0,
                scale: b.scale || 1,
                rotation: b.rotation || 0,
                strokeColor: b.strokeColor || "#000",
                ud: b.strokeOpacity || 1,
                nc: b.strokeWeight
            };
            this.Kb = "number" === typeof a ? a : "UserDefined";
            this.Di = this.style.anchor;
            this.Tq = new N(0,0);
            this.anchor = q;
            this.QA = a;
            var c = this;
            Ta.load("symbol", function() {
                c.mn()
            }, p)
        }
    }
    A.extend($c.prototype, {
        setPath: ba("QA"),
        setAnchor: function(a) {
            this.Di = this.style.anchor = a
        },
        setRotation: function(a) {
            this.style.rotation = a
        },
        setScale: function(a) {
            this.style.scale = a
        },
        setStrokeWeight: function(a) {
            this.style.nc = a
        },
        setStrokeColor: function(a) {
            a = A.Kr.XB(a, this.style.ud);
            this.style.strokeColor = a
        },
        setStrokeOpacity: function(a) {
            this.style.ud = a
        },
        setFillOpacity: function(a) {
            this.style.tg = a
        },
        setFillColor: function(a) {
            this.style.fillColor = a
        }
    });
    function ad(a, b, c, e) {
        a && (this.ov = {},
        this.HK = e ? !!e : t,
        this.Uc = [],
        this.Q_ = a instanceof $c ? a : q,
        this.nI = b === l ? p : !!(b.indexOf("%") + 1),
        this.Wj = isNaN(parseFloat(b)) ? 1 : this.nI ? parseFloat(b) / 100 : parseFloat(b),
        this.oI = !!(c.indexOf("%") + 1),
        this.repeat = c != l ? this.oI ? parseFloat(c) / 100 : parseFloat(c) : 0)
    }
    ;function bd(a, b) {
        A.lang.Ha.call(this);
        this.content = a;
        this.map = q;
        b = b || {};
        this.K = {
            width: b.width || 0,
            height: b.height || 0,
            maxWidth: b.maxWidth || 730,
            Ea: b.offset || new N(0,0),
            title: b.title || "",
            oE: b.maxContent || "",
            fh: b.enableMaximize || t,
            hs: b.enableAutoPan === t ? t : p,
            EC: b.enableCloseOnClick === t ? t : p,
            margin: b.margin || [10, 10, 40, 10],
            TB: b.collisions || [[10, 10], [10, 10], [10, 10], [10, 10]],
            dY: t,
            hZ: b.onClosing || da(p),
            AK: t,
            JC: b.enableParano === p ? p : t,
            message: b.message,
            MC: b.enableSearchTool === p ? p : t,
            ix: b.headerContent || "",
            FC: b.enableContentScroll || t
        };
        if (0 != this.K.width && (220 > this.K.width && (this.K.width = 220),
        730 < this.K.width))
            this.K.width = 730;
        if (0 != this.K.height && (60 > this.K.height && (this.K.height = 60),
        650 < this.K.height))
            this.K.height = 650;
        if (0 != this.K.maxWidth && (220 > this.K.maxWidth && (this.K.maxWidth = 220),
        730 < this.K.maxWidth))
            this.K.maxWidth = 730;
        this.de = t;
        this.yi = H.sa;
        this.tb = q;
        var c = this;
        Ta.load("infowindow", function() {
            c.mb()
        })
    }
    A.lang.xa(bd, A.lang.Ha, "InfoWindow");
    A.extend(bd.prototype, {
        setWidth: function(a) {
            !a && 0 != a || (isNaN(a) || 0 > a) || (0 != a && (220 > a && (a = 220),
            730 < a && (a = 730)),
            this.K.width = a)
        },
        setHeight: function(a) {
            !a && 0 != a || (isNaN(a) || 0 > a) || (0 != a && (60 > a && (a = 60),
            650 < a && (a = 650)),
            this.K.height = a)
        },
        IN: function(a) {
            !a && 0 != a || (isNaN(a) || 0 > a) || (0 != a && (220 > a && (a = 220),
            730 < a && (a = 730)),
            this.K.maxWidth = a)
        },
        Dc: function(a) {
            this.K.title = a
        },
        getTitle: function() {
            return this.K.title
        },
        bd: ba("content"),
        tk: x("content"),
        Ct: function(a) {
            this.K.oE = a + ""
        },
        je: u(),
        hs: function() {
            this.K.hs = p
        },
        disableAutoPan: function() {
            this.K.hs = t
        },
        enableCloseOnClick: function() {
            this.K.EC = p
        },
        disableCloseOnClick: function() {
            this.K.EC = t
        },
        fh: function() {
            this.K.fh = p
        },
        Fw: function() {
            this.K.fh = t
        },
        show: function() {
            this.Ua = p
        },
        $: function() {
            this.Ua = t
        },
        close: function() {
            this.$()
        },
        Cx: function() {
            this.de = p
        },
        restore: function() {
            this.de = t
        },
        Oc: function() {
            return this.bb()
        },
        bb: da(t),
        la: function() {
            if (this.tb && this.tb.la)
                return this.tb.la()
        },
        hj: function() {
            return this.K.Ea
        }
    });
    Ma.prototype.$c = function(a, b) {
        if (a instanceof bd && (b instanceof Q || b instanceof J)) {
            var c = this.aa;
            c.xm ? c.xm.va(b) : (c.xm = new W(b,{
                icon: new Zc(H.sa + "blank.gif",{
                    width: 1,
                    height: 1
                }),
                offset: new N(0,0),
                clickable: t
            }),
            c.xm.jR = 1);
            this.Pa(c.xm);
            c.xm.$c(a)
        }
    }
    ;
    Ma.prototype.Wc = function() {
        var a = this.aa.sb || this.aa.nl;
        a && a.tb && a.tb.Wc()
    }
    ;
    ib.prototype.$c = function(a) {
        this.map && (this.map.Wc(),
        a.Ua = p,
        this.map.aa.nl = a,
        a.tb = this,
        A.lang.Ha.call(a, a.ca))
    }
    ;
    ib.prototype.Wc = function() {
        this.map && this.map.aa.nl && (this.map.aa.nl.Ua = t,
        A.lang.Dw(this.map.aa.nl.ca),
        this.map.aa.nl = q)
    }
    ;
    function cd(a, b) {
        ib.call(this);
        this.content = a;
        this.ba = this.map = q;
        b = b || {};
        this.K = {
            width: 0,
            Ea: b.offset || new N(0,0),
            Gp: {
                backgroundColor: "#fff",
                border: "1px solid #f00",
                padding: "1px",
                whiteSpace: "nowrap",
                font: "12px " + H.fontFamily,
                zIndex: "80",
                MozUserSelect: "none"
            },
            position: b.position || q,
            ej: b.enableMassClear === t ? t : p,
            gf: p,
            left: b.left === p ? p : t,
            right: b.right === p ? p : t
        };
        0 > this.K.width && (this.K.width = 0);
        Jb(b.enableClicking) && (this.K.gf = b.enableClicking);
        this.point = this.K.position;
        var c = this;
        Ta.load("marker", function() {
            c.mb()
        })
    }
    A.lang.xa(cd, ib, "Label");
    A.extend(cd.prototype, {
        la: function() {
            return this.Ln ? this.Ln.la() : this.map ? cb(this.point, this.map.M.Ia) : this.point
        },
        Oj: function() {
            return this.Ln ? this.Ln.Oj() : this.point
        },
        va: function(a) {
            if ((a instanceof Q || a instanceof J) && !this.Ww())
                this.point = this.K.position = new Q(a.lng,a.lat)
        },
        bd: ba("content"),
        YE: function(a) {
            0 <= a && 1 >= a && (this.K.opacity = a)
        },
        Ld: function(a) {
            a instanceof N && (this.K.Ea = new N(a.width,a.height))
        },
        hj: function() {
            return this.K.Ea
        },
        Md: function(a) {
            a = a || {};
            this.K.Gp = A.extend(this.K.Gp, a)
        },
        ti: function(a) {
            return this.Md(a)
        },
        Dc: function(a) {
            this.K.title = a || ""
        },
        getTitle: function() {
            return this.K.title
        },
        HN: function(a) {
            this.point = (this.Ln = a) ? this.K.position = a.Oj() : this.K.position = q
        },
        Ww: function() {
            return this.Ln || q
        },
        tk: x("content")
    });
    function dd(a, b) {
        if (0 !== arguments.length) {
            ib.apply(this, arguments);
            b = b || {};
            this.K = {
                ib: a,
                opacity: b.opacity || 1,
                Zo: b.imageURL || "",
                Zr: b.displayOnMinLevel || 1,
                ej: b.enableMassClear === t ? t : p,
                Yr: b.displayOnMaxLevel || 19,
                K_: b.stretch || t
            };
            0 === b.opacity && (this.K.opacity = 0);
            var c = this;
            Ta.load("groundoverlay", function() {
                c.mb()
            })
        }
    }
    A.lang.xa(dd, ib, "GroundOverlay");
    A.extend(dd.prototype, {
        setBounds: function(a) {
            this.K.ib = a
        },
        getBounds: function() {
            return this.K.ib
        },
        setOpacity: function(a) {
            this.K.opacity = a
        },
        getOpacity: function() {
            return this.K.opacity
        },
        setImageURL: function(a) {
            this.K.Zo = a
        },
        getImageURL: function() {
            return this.K.Zo
        },
        setDisplayOnMinLevel: function(a) {
            this.K.Zr = a
        },
        getDisplayOnMinLevel: function() {
            return this.K.Zr
        },
        setDisplayOnMaxLevel: function(a) {
            this.K.Yr = a
        },
        getDisplayOnMaxLevel: function() {
            return this.K.Yr
        }
    });
    var ed = 3
      , fd = 4;
    function gd() {
        var a = document.createElement("canvas");
        return !(!a.getContext || !a.getContext("2d"))
    }
    function hd(a, b) {
        var c = this;
        gd() && (a === l && aa(Error("\u6ca1\u6709\u4f20\u5165points\u6570\u636e")),
        "[object Array]" !== Object.prototype.toString.call(a) && aa(Error("points\u6570\u636e\u4e0d\u662f\u6570\u7ec4")),
        b = b || {},
        ib.apply(c, arguments),
        c.ha = {
            ka: a
        },
        c.K = {
            shape: b.shape || ed,
            size: b.size || fd,
            color: b.color || "#fa937e",
            ej: p
        },
        this.NA = [],
        this.oe = [],
        Ta.load("pointcollection", function() {
            for (var a = 0, b; b = c.NA[a]; a++)
                c[b.method].apply(c, b.arguments);
            for (a = 0; b = c.oe[a]; a++)
                c[b.method].apply(c, b.arguments)
        }))
    }
    A.lang.xa(hd, ib, "PointCollection");
    A.extend(hd.prototype, {
        initialize: function(a) {
            this.NA && this.NA.push({
                method: "initialize",
                arguments: arguments
            })
        },
        setPoints: function(a) {
            this.oe && this.oe.push({
                method: "setPoints",
                arguments: arguments
            })
        },
        setStyles: function(a) {
            this.oe && this.oe.push({
                method: "setStyles",
                arguments: arguments
            })
        },
        clear: function() {
            this.oe && this.oe.push({
                method: "clear",
                arguments: arguments
            })
        },
        remove: function() {
            this.oe && this.oe.push({
                method: "remove",
                arguments: arguments
            })
        }
    });
    var id = new Zc(H.sa + "marker_red_sprite.png",new N(19,25),{
        anchor: new N(10,25),
        infoWindowAnchor: new N(10,0)
    })
      , jd = new Zc(H.sa + "marker_red_sprite.png",new N(20,11),{
        anchor: new N(6,11),
        imageOffset: new N(-19,-13)
    });
    function W(a, b) {
        ib.call(this);
        b = b || {};
        this.point = a;
        this.Ia = (this.cq = this.map = q) ? this.map.M.Ia : 5;
        this.K = {
            Ea: b.offset || new N(0,0),
            ve: b.icon || id,
            Nk: jd,
            title: b.title || "",
            label: q,
            EJ: b.baseZIndex || 0,
            gf: p,
            n6: t,
            aE: t,
            ej: b.enableMassClear === t ? t : p,
            pc: t,
            jN: b.raiseOnDrag === p ? p : t,
            rN: t,
            Gd: b.draggingCursor || H.Gd,
            rotation: b.rotation || 0,
            left: b.left === p ? p : t,
            right: b.right === p ? p : t
        };
        b.icon && !b.shadow && (this.K.Nk = q);
        b.enableDragging && (this.K.pc = b.enableDragging);
        Jb(b.enableClicking) && (this.K.gf = b.enableClicking);
        var c = this;
        Ta.load("marker", function() {
            c.mb()
        })
    }
    W.qu = Vc.zk(-90) + 1E6;
    W.XF = W.qu + 1E6;
    A.lang.xa(W, ib, "Marker");
    A.extend(W.prototype, {
        Ub: function(a) {
            if (a instanceof Zc || a instanceof $c)
                this.K.ve = a
        },
        Oo: function() {
            return this.K.ve
        },
        iy: function(a) {
            a instanceof Zc && (this.K.Nk = a)
        },
        getShadow: function() {
            return this.K.Nk
        },
        Mm: function(a) {
            this.K.label = a || q
        },
        oD: function() {
            return this.K.label
        },
        pc: function() {
            this.K.pc = p
        },
        mC: function() {
            this.K.pc = t
        },
        Oj: x("point"),
        la: function() {
            return this.point instanceof Q || this.point instanceof J ? this.map ? cb(this.point, this.map.M.Ia) : new Q(this.point.lng,this.point.lat) : this.point
        },
        va: function(a) {
            if (a instanceof Q || a instanceof J)
                this.point = this.map ? Ya(a, this.map.M.Ia) : new J(a.lng,a.lat)
        },
        ui: function(a, b) {
            this.K.aE = !!a;
            a && (this.uG = b || 0)
        },
        Dc: function(a) {
            this.K.title = a + ""
        },
        getTitle: function() {
            return this.K.title
        },
        Ld: function(a) {
            a instanceof N && (this.K.Ea = a)
        },
        hj: function() {
            return this.K.Ea
        },
        Lm: ba("cq"),
        yp: function(a) {
            this.K.rotation = a
        },
        iL: function() {
            return this.K.rotation
        }
    });
    function kd(a) {
        this.options = a || {};
        this.lZ = this.options.paneName || "labelPane";
        this.zIndex = this.options.zIndex || 0;
        this.sV = this.options.contextType || "2d"
    }
    kd.prototype = new Vc;
    kd.prototype.initialize = function(a) {
        this.P = a;
        var b = this.canvas = document.createElement("canvas")
          , c = this.canvas.getContext(this.sV);
        b.style.cssText = "position:absolute;left:0;top:0;z-index:" + this.zIndex + ";";
        ld(this);
        md(c);
        a.getPanes()[this.lZ].appendChild(b);
        var e = this;
        a.addEventListener("resize", function() {
            ld(e);
            md(c);
            e.mb()
        });
        return this.canvas
    }
    ;
    function ld(a) {
        var b = a.P.xb()
          , a = a.canvas;
        a.width = b.width;
        a.height = b.height;
        a.style.width = a.width + "px";
        a.style.height = a.height + "px"
    }
    function md(a) {
        var b = (window.devicePixelRatio || 1) / (a.FU || a.i6 || a.F4 || a.G4 || a.K4 || a.FU || 1)
          , c = a.canvas.width
          , e = a.canvas.height;
        a.canvas.width = c * b;
        a.canvas.height = e * b;
        a.canvas.style.width = c + "px";
        a.canvas.style.height = e + "px";
        a.scale(b, b)
    }
    kd.prototype.draw = function() {
        var a = this
          , b = arguments;
        clearTimeout(a.Z_);
        a.Z_ = setTimeout(function() {
            a.mb.apply(a, b)
        }, 15)
    }
    ;
    ea = kd.prototype;
    ea.mb = function() {
        var a = this.P;
        this.canvas.style.left = -a.offsetX + "px";
        this.canvas.style.top = -a.offsetY + "px";
        this.dispatchEvent("draw");
        this.options.update && this.options.update.apply(this, arguments)
    }
    ;
    ea.Ra = x("canvas");
    ea.show = function() {
        this.canvas || this.P.Pa(this);
        this.canvas.style.display = "block"
    }
    ;
    ea.$ = function() {
        this.canvas.style.display = "none"
    }
    ;
    ea.Cp = function(a) {
        this.canvas.style.zIndex = a
    }
    ;
    ea.zk = x("zIndex");
    function nd(a, b) {
        Xc.call(this, b);
        b = b || {};
        this.K.tg = b.fillOpacity ? b.fillOpacity : 0.65;
        this.K.fillColor = "" == b.fillColor ? "" : b.fillColor ? b.fillColor : "#fff";
        this.ke(a);
        var c = this;
        Ta.load("poly", function() {
            c.mb()
        })
    }
    A.lang.xa(nd, Xc, "Polygon");
    A.extend(nd.prototype, {
        ke: function(a, b) {
            this.bo = Xc.Sw(a).slice(0);
            var c = Xc.Sw(a).slice(0);
            1 < c.length && c.push(new Q(c[0].lng,c[0].lat));
            Xc.prototype.ke.call(this, c, b)
        },
        Om: function(a, b) {
            this.bo[a] && (this.bo[a] = new Q(b.lng,b.lat),
            this.ka[a] = new Q(b.lng,b.lat),
            0 == a && !this.ka[0].Sb(this.ka[this.ka.length - 1]) && (this.ka[this.ka.length - 1] = new Q(b.lng,b.lat)),
            this.zh())
        },
        Ue: function() {
            var a = this.bo;
            0 == a.length && (a = this.ka);
            return a
        }
    });
    function od(a, b) {
        Xc.call(this, b);
        this.or(a);
        var c = this;
        Ta.load("poly", function() {
            c.mb()
        })
    }
    A.lang.xa(od, Xc, "Polyline");
    function pd(a, b, c) {
        this.point = a;
        this.Da = Math.abs(b);
        nd.call(this, [], c)
    }
    pd.xE = [0.01, 1.0E-4, 1.0E-5, 4.0E-6];
    A.lang.xa(pd, nd, "Circle");
    A.extend(pd.prototype, {
        initialize: function(a) {
            this.map = a;
            this.ka = this.Ru(this.point, this.Da);
            this.zh();
            return q
        },
        Nb: function() {
            return this.map ? cb(this.point, this.map.M.Ia) : this.point
        },
        Ou: x("point"),
        tf: function(a) {
            a && (this.point = a)
        },
        gL: x("Da"),
        uf: function(a) {
            this.Da = Math.abs(a)
        },
        Ru: function(a, b) {
            if (!a || !b || !this.map)
                return [];
            for (var c = [], e = b / 6378800, f = Math.PI / 180 * a.lat, g = Math.PI / 180 * a.lng, i = 0; 360 > i; i += 9) {
                var k = Math.PI / 180 * i
                  , m = Math.asin(Math.sin(f) * Math.cos(e) + Math.cos(f) * Math.sin(e) * Math.cos(k))
                  , k = new Q(((g - Math.atan2(Math.sin(k) * Math.sin(e) * Math.cos(f), Math.cos(e) - Math.sin(f) * Math.sin(m)) + Math.PI) % (2 * Math.PI) - Math.PI) * (180 / Math.PI),m * (180 / Math.PI));
                c.push(k)
            }
            e = c[0];
            c.push(new Q(e.lng,e.lat));
            return c
        }
    });
    var qd = {};
    function rd(a) {
        this.map = a;
        this.tj = [];
        this.Zf = [];
        this.Hg = [];
        this.UU = 300;
        this.EE = 0;
        this.Ag = {};
        this.Zi = {};
        this.Dk = 0;
        this.UD = p;
        this.IV = {};
        this.Kn = this.nq(1);
        this.og = this.nq(2);
        this.xl = this.nq(3);
        this.gg = this.nq(4);
        a.platform.appendChild(this.Kn);
        a.platform.appendChild(this.og);
        a.platform.appendChild(this.xl);
        a.platform.appendChild(this.gg);
        var b = 256 * Math.pow(2, 15)
          , c = 3 * b
          , a = T.Wa(new J(180,0)).lng
          , c = c - a
          , b = -3 * b
          , e = T.Wa(new J(-180,0)).lng;
        this.uA = a;
        this.vA = e;
        this.rA = c + (e - b);
        this.TH = a - e
    }
    D.Ze(function(a) {
        var b = new rd(a);
        b.ya();
        a.$e = b
    });
    A.extend(rd.prototype, {
        ya: function() {
            var a = this
              , b = a.map;
            b.addEventListener("loadcode", function() {
                a.ep()
            });
            b.addEventListener("addtilelayer", function(b) {
                a.Ne(b)
            });
            b.addEventListener("removetilelayer", function(b) {
                a.Yf(b)
            });
            b.addEventListener("setmaptype", function(b) {
                a.Gg(b)
            });
            b.addEventListener("zoomstartcode", function(b) {
                a.Lc(b)
            });
            b.addEventListener("setcustomstyles", function(b) {
                a.Bt(b.target);
                a.Wf(p)
            });
            b.addEventListener("initindoorlayer", function(b) {
                a.PD(b)
            })
        },
        ep: function() {
            var a = this;
            if (A.fa.na)
                try {
                    document.execCommand("BackgroundImageCache", t, p)
                } catch (b) {}
            this.loaded || a.px();
            a.Wf();
            this.loaded || (this.loaded = p,
            Ta.load("tile", function() {
                a.GP()
            }))
        },
        PD: function(a) {
            this.au = new sd(this);
            this.au.Ne(new td(this.map,this.au,a.We))
        },
        px: function() {
            for (var a = this.map.wa().df, b = 0; b < a.length; b++) {
                var c = new ud;
                A.extend(c, a[b]);
                this.tj.push(c);
                c.ya(this.map, this.Kn)
            }
            this.Bt()
        },
        nq: function(a) {
            var b = L("div");
            b.style.position = "absolute";
            b.style.overflow = "visible";
            b.style.left = b.style.top = "0";
            b.style.zIndex = a;
            return b
        },
        zf: function() {
            this.Dk--;
            var a = this;
            this.UD && (this.map.dispatchEvent(new P("onfirsttileloaded")),
            this.UD = t);
            0 == this.Dk && (this.Ii && (clearTimeout(this.Ii),
            this.Ii = q),
            this.Ii = setTimeout(function() {
                if (a.Dk == 0) {
                    a.map.dispatchEvent(new P("ontilesloaded"));
                    a.UD = p
                }
                a.Ii = q
            }, 80))
        },
        AD: function(a, b) {
            return "TILE-" + b.ca + "-" + a[0] + "-" + a[1] + "-" + a[2]
        },
        lx: function(a) {
            var b = a.Gb;
            b && Cb(b) && b.parentNode.removeChild(b);
            delete this.Ag[a.name];
            a.loaded || (vd(a),
            a.Gb = q,
            a.ym = q)
        },
        qL: function(a, b, c) {
            var e = this.map
              , f = e.wa()
              , g = e.Xa
              , i = e.Tb
              , k = f.Xb(g)
              , m = this.VW()
              , n = m[0]
              , o = m[1]
              , s = m[2]
              , v = m[3]
              , w = m[4]
              , c = "undefined" != typeof c ? c : 0
              , f = f.Id()
              , m = e.ca.replace(/^TANGRAM_/, "");
            for (this.Ce ? this.Ce.length = 0 : this.Ce = []; n < s; n++)
                for (var y = o; y < v; y++) {
                    var z = n
                      , B = y;
                    this.Ce.push([z, B]);
                    z = m + "_" + b + "_" + z + "_" + B + "_" + g;
                    this.IV[z] = z
                }
            this.Ce.sort(function(a) {
                return function(b, c) {
                    return 0.4 * Math.abs(b[0] - a[0]) + 0.6 * Math.abs(b[1] - a[1]) - (0.4 * Math.abs(c[0] - a[0]) + 0.6 * Math.abs(c[1] - a[1]))
                }
            }([w[0] - 1, w[1] - 1]));
            i = [Math.round(-i.lng / k), Math.round(i.lat / k)];
            n = -e.offsetY + e.height / 2;
            a.style.left = -e.offsetX + e.width / 2 + "px";
            a.style.top = n + "px";
            this.Oe ? this.Oe.length = 0 : this.Oe = [];
            n = 0;
            for (e = a.childNodes.length; n < e; n++)
                y = a.childNodes[n],
                y.Lq = t,
                this.Oe.push(y);
            if (n = this.Bm)
                for (var C in n)
                    delete n[C];
            else
                this.Bm = {};
            this.Pe ? this.Pe.length = 0 : this.Pe = [];
            n = 0;
            for (e = this.Ce.length; n < e; n++) {
                C = this.Ce[n][0];
                k = this.Ce[n][1];
                y = 0;
                for (o = this.Oe.length; y < o; y++)
                    if (s = this.Oe[y],
                    s.id == m + "_" + b + "_" + C + "_" + k + "_" + g) {
                        s.Lq = p;
                        this.Bm[s.id] = s;
                        break
                    }
            }
            n = 0;
            for (e = this.Oe.length; n < e; n++)
                s = this.Oe[n],
                s.Lq || this.Pe.push(s);
            this.pF = [];
            y = (f + c) * this.map.M.devicePixelRatio;
            n = 0;
            for (e = this.Ce.length; n < e; n++)
                C = this.Ce[n][0],
                k = this.Ce[n][1],
                v = C * f + i[0] - c / 2,
                w = (-1 - k) * f + i[1] - c / 2,
                z = m + "_" + b + "_" + C + "_" + k + "_" + g,
                o = this.Bm[z],
                s = q,
                o ? (s = o.style,
                s.left = v + "px",
                s.top = w + "px",
                o.yn || this.pF.push([C, k, o])) : (0 < this.Pe.length ? (o = this.Pe.shift(),
                o.getContext("2d").clearRect(-c / 2, -c / 2, y, y),
                s = o.style) : (o = document.createElement("canvas"),
                s = o.style,
                s.position = "absolute",
                s.width = f + c + "px",
                s.height = f + c + "px",
                this.DY() && (s.WebkitTransform = "scale(1.001)"),
                o.setAttribute("width", y),
                o.setAttribute("height", y),
                a.appendChild(o)),
                o.id = z,
                s.left = v + "px",
                s.top = w + "px",
                -1 < z.indexOf("bg") && (v = "#F3F1EC",
                this.map.M.DU && (v = this.map.M.DU),
                s.background = v ? v : ""),
                this.pF.push([C, k, o])),
                o.style.visibility = "";
            n = 0;
            for (e = this.Pe.length; n < e; n++)
                this.Pe[n].style.visibility = "hidden";
            return this.pF
        },
        DY: function() {
            return /M040/i.test(navigator.userAgent)
        },
        VW: function() {
            var a = this.map
              , b = a.wa()
              , c = b.vL(a.Xa)
              , e = a.Tb
              , f = Math.ceil(e.lng / c)
              , g = Math.ceil(e.lat / c)
              , b = b.Id()
              , c = [f, g, (e.lng - f * c) / c * b, (e.lat - g * c) / c * b];
            return [c[0] - Math.ceil((a.width / 2 - c[2]) / b), c[1] - Math.ceil((a.height / 2 - c[3]) / b), c[0] + Math.ceil((a.width / 2 + c[2]) / b), c[1] + Math.ceil((a.height / 2 + c[3]) / b), c]
        },
        E_: function(a, b, c, e) {
            var f = this;
            f.p2 = b;
            var g = this.map.wa()
              , i = f.AD(a, c)
              , k = g.Id()
              , b = [a[0] * k + b[0], (-1 - a[1]) * k + b[1]]
              , m = this.Ag[i];
            if (this.map.wa() !== ab && this.map.wa() !== Sa) {
                var n = this.gw(a[0], a[2]).offsetX;
                b[0] += n;
                b.H1 = n
            }
            m && m.Gb ? (Ab(m.Gb, b),
            e && (e = new R(a[0],a[1]),
            g = this.map.M.xe ? this.map.M.xe.style : "normal",
            e = c.getTilesUrl(e, a[2], g),
            m.loaded = t,
            wd(m, e)),
            m.loaded ? this.zf() : xd(m, function() {
                f.zf()
            })) : (m = this.Zi[i]) && m.Gb ? (c.Ib.insertBefore(m.Gb, c.Ib.lastChild),
            this.Ag[i] = m,
            Ab(m.Gb, b),
            e && (e = new R(a[0],a[1]),
            g = this.map.M.xe ? this.map.M.xe.style : "normal",
            e = c.getTilesUrl(e, a[2], g),
            m.loaded = t,
            wd(m, e)),
            m.loaded ? this.zf() : xd(m, function() {
                f.zf()
            })) : (m = k * Math.pow(2, g.Te() - a[2]),
            new J(a[0] * m,a[1] * m),
            e = new R(a[0],a[1]),
            g = this.map.M.xe ? this.map.M.xe.style : "normal",
            e = c.getTilesUrl(e, a[2], g),
            m = new yd(this,e,b,a,c),
            xd(m, function() {
                f.zf()
            }),
            m.Jn(),
            this.Ag[i] = m)
        },
        zf: function() {
            this.Dk--;
            var a = this;
            0 == this.Dk && (this.Ii && (clearTimeout(this.Ii),
            this.Ii = q),
            this.Ii = setTimeout(function() {
                if (a.Dk == 0) {
                    a.map.dispatchEvent(new P("ontilesloaded"));
                    if (va) {
                        if (qa && ra && ua) {
                            var b = eb()
                              , c = a.map.xb();
                            setTimeout(function() {
                                Ra(5030, {
                                    load_script_time: ra - qa,
                                    load_tiles_time: b - ua,
                                    map_width: c.width,
                                    map_height: c.height,
                                    map_size: c.width * c.height
                                })
                            }, 1E4);
                            D.aq("cus.fire", "time", {
                                z_imgfirstloaded: b - ua
                            })
                        }
                        va = t
                    }
                }
                a.Ii = q
            }, 80))
        },
        AD: function(a, b) {
            return this.map.wa() === Qa ? "TILE-" + b.ca + "-" + this.map.nw + "-" + a[0] + "-" + a[1] + "-" + a[2] : "TILE-" + b.ca + "-" + a[0] + "-" + a[1] + "-" + a[2]
        },
        lx: function(a) {
            var b = a.Gb;
            b && (zd(b),
            Cb(b) && b.parentNode.removeChild(b));
            delete this.Ag[a.name];
            a.loaded || (zd(b),
            vd(a),
            a.Gb = q,
            a.ym = q)
        },
        gw: function(a, b) {
            for (var c = 0, e = 6 * Math.pow(2, b - 3), f = e / 2 - 1, g = -e / 2; a > f; )
                a -= e,
                c -= this.rA;
            for (; a < g; )
                a += e,
                c += this.rA;
            c = Math.round(c / Math.pow(2, 18 - b));
            return {
                offsetX: c,
                Zl: a
            }
        },
        YU: function(a) {
            for (var b = a.lng; b > this.uA; )
                b -= this.TH;
            for (; b < this.vA; )
                b += this.TH;
            a.lng = b;
            return a
        },
        ZU: function(a, b) {
            for (var c = 256 * Math.pow(2, 18 - b), e = Math.floor(this.uA / c), f = Math.floor(this.vA / c), c = Math.floor(this.rA / c), g = [], i = 0; i < a.length; i++) {
                var k = a[i]
                  , m = k[0]
                  , k = k[1];
                if (m >= e) {
                    var m = m + c
                      , n = "id_" + m + "_" + k + "_" + b;
                    a[n] || (a[n] = p,
                    g.push([m, k]))
                } else
                    m <= f && (m -= c,
                    n = "id_" + m + "_" + k + "_" + b,
                    a[n] || (a[n] = p,
                    g.push([m, k])))
            }
            for (i = 0; i < g.length; i++)
                a.push(g[i]);
            return a
        },
        Wf: function(a) {
            if (!this.map.M.sg) {
                var b = this;
                if (b.map.wa() == Qa)
                    Ta.load("coordtrans", function() {
                        b.map.Lb || (b.map.Lb = Qa.sk(b.map.bh),
                        b.map.nw = Qa.TK(b.map.Lb));
                        b.VH()
                    }, p);
                else {
                    if (a && a)
                        for (var c in this.Zi)
                            delete this.Zi[c];
                    b.VH(a)
                }
            }
        },
        VH: function(a) {
            var b = this.tj.concat(this.Zf)
              , c = b.length
              , e = this.map
              , f = e.wa()
              , g = e.Tb
              , i = e.width
              , i = e.wa().Xb(e.Xa) * i
              , i = this.tY(g.lng - i / 2, g.lng + i / 2);
            this.map.wa() !== ab && this.map.wa() !== Sa && (g = this.YU(g));
            for (var k = 0; k < c; k++) {
                var m = b[k];
                if (m.fc && e.Xa < m.fc)
                    break;
                if (m.fw) {
                    var n = this.Ib = m.Ib;
                    if (a) {
                        var o = n;
                        if (o && o.childNodes)
                            for (var s = o.childNodes.length, v = s - 1; 0 <= v; v--)
                                s = o.childNodes[v],
                                o.removeChild(s),
                                s = q
                    }
                    if (this.map.Od()) {
                        this.og.style.display = "block";
                        n.style.display = "none";
                        this.map.dispatchEvent(new P("vectorchanged"), {
                            isvector: p
                        });
                        continue
                    } else
                        n.style.display = "block",
                        this.og.style.display = "none",
                        this.map.dispatchEvent(new P("vectorchanged"), {
                            isvector: t
                        })
                }
                if (!m.G1 && !(m.vx && !this.map.Od() || m.VL && this.map.Od())) {
                    e = this.map;
                    f = e.wa();
                    n = f.jj();
                    s = e.Xa;
                    g = e.Tb;
                    f == Qa && g.Sb(new J(0,0)) && (g = e.Tb = n.ii(e.ae, e.Lb));
                    var w = f.Xb(s)
                      , n = f.vL(s)
                      , o = Math.ceil(g.lng / n)
                      , y = Math.ceil(g.lat / n)
                      , z = f.Id()
                      , n = [o, y, (g.lng - o * n) / n * z, (g.lat - y * n) / n * z]
                      , y = i ? 1.5 * (e.width / 2) : e.width / 2
                      , v = n[0] - Math.ceil((y - n[2]) / z)
                      , o = n[1] - Math.ceil((e.height / 2 - n[3]) / z)
                      , y = n[0] + Math.ceil((y + n[2]) / z)
                      , B = 0;
                    f === Qa && 15 == e.ja() && (B = 1);
                    f = n[1] + Math.ceil((e.height / 2 + n[3]) / z) + B;
                    this.zJ = new J(g.lng,g.lat);
                    var C = this.Ag, z = -this.zJ.lng / w, B = this.zJ.lat / w, g = [Math.ceil(z), Math.ceil(B)], w = e.ja(), E;
                    for (E in C) {
                        var F = C[E]
                          , G = F.info;
                        (G[2] != w || G[2] == w && (v > G[0] || y <= G[0] || o > G[1] || f <= G[1])) && this.lx(F)
                    }
                    C = -e.offsetX + e.width / 2;
                    F = -e.offsetY + e.height / 2;
                    m.Ib && (m.Ib.style.left = Math.ceil(z + C) - g[0] + "px",
                    m.Ib.style.top = Math.ceil(B + F) - g[1] + "px",
                    m.Ib.style.WebkitTransform = "translate3d(0,0,0)");
                    z = [];
                    for (e.qB = []; v < y; v++)
                        for (B = o; B < f; B++)
                            z.push([v, B]),
                            e.qB.push({
                                x: v,
                                y: B
                            });
                    this.map.wa() !== ab && this.map.wa() !== Sa && (z = this.ZU(z, s));
                    z.sort(function(a) {
                        return function(b, c) {
                            return 0.4 * Math.abs(b[0] - a[0]) + 0.6 * Math.abs(b[1] - a[1]) - (0.4 * Math.abs(c[0] - a[0]) + 0.6 * Math.abs(c[1] - a[1]))
                        }
                    }([n[0] - 1, n[1] - 1]));
                    s = z.length;
                    this.Dk += s;
                    for (v = 0; v < s; v++)
                        this.E_([z[v][0], z[v][1], w], g, m, a)
                }
            }
        },
        tY: function(a, b) {
            return a < this.vA || b > this.uA
        },
        Ne: function(a) {
            var b = this
              , c = a.target;
            b.map.Od();
            c.Wm && this.map.Ne(c.Wm);
            if (c.vx) {
                for (a = 0; a < b.Hg.length; a++)
                    if (b.Hg[a] == c)
                        return;
                Ta.load("vector", function() {
                    c.ya(b.map, b.og);
                    b.Hg.push(c)
                }, p)
            } else {
                for (a = 0; a < b.Zf.length; a++)
                    if (b.Zf[a] == c)
                        return;
                c.ya(this.map, this.xl);
                b.Zf.push(c)
            }
        },
        Yf: function(a) {
            a = a.target;
            this.map.Od();
            a.Wm && this.map.Yf(a.Wm);
            if (a.vx)
                for (var b = 0, c = this.Hg.length; b < c; b++)
                    a == this.Hg[b] && this.Hg.splice(b, 1);
            else {
                b = 0;
                for (c = this.Zf.length; b < c; b++)
                    a == this.Zf[b] && this.Zf.splice(b, 1)
            }
            a.remove()
        },
        Gg: function() {
            for (var a = this.tj, b = 0, c = a.length; b < c; b++)
                a[b].remove();
            delete this.Ib;
            this.tj = [];
            this.Zi = this.Ag = {};
            this.px();
            this.Wf()
        },
        Lc: function() {
            var a = this;
            a.xd && A.U.$(a.xd);
            setTimeout(function() {
                a.Wf();
                a.map.dispatchEvent(new P("onzoomend"))
            }, 10)
        },
        b6: u(),
        Bt: function(a) {
            var b = this.map.wa();
            if (!this.map.Od() && (a ? this.map.M.N_ = a : a = this.map.M.N_,
            a))
                for (var c = q, c = "2" == D.$t ? [D.url.proto + D.url.domain.main_domain_cdn.other[0] + "/"] : [D.url.proto + D.url.domain.main_domain_cdn.baidu[0] + "/", D.url.proto + D.url.domain.main_domain_cdn.baidu[1] + "/", D.url.proto + D.url.domain.main_domain_cdn.baidu[2] + "/"], e = 0, f; f = this.tj[e]; e++)
                    if (f.z_ == p) {
                        b.m.mc = 18;
                        f.getTilesUrl = function(b, e) {
                            var f = b.x
                              , f = this.map.$e.gw(f, e).Zl
                              , m = b.y
                              , n = Tb("normal")
                              , o = 1;
                            this.map.mx() && (o = 2);
                            n = "customimage/tile?&x=" + f + "&y=" + m + "&z=" + e + "&udt=" + n + "&scale=" + o + "&ak=" + pa;
                            n = a.styleStr ? n + ("&styles=" + encodeURIComponent(a.styleStr)) : n + ("&customid=" + a.style);
                            return c[Math.abs(f + m) % c.length] + n
                        }
                        ;
                        break
                    }
        }
    });
    function yd(a, b, c, e, f) {
        this.ym = a;
        this.position = c;
        this.Bu = [];
        this.name = a.AD(e, f);
        this.info = e;
        this.$I = f.Vs();
        e = L("img");
        Bb(e);
        e.MK = t;
        var g = e.style
          , a = a.map.wa();
        g.position = "absolute";
        g.border = "none";
        g.width = a.Id() + "px";
        g.height = a.Id() + "px";
        g.left = c[0] + "px";
        g.top = c[1] + "px";
        g.maxWidth = "none";
        this.Gb = e;
        this.src = b;
        Ad && (this.Gb.style.opacity = 0);
        var i = this;
        this.Gb.onload = function() {
            D.LY.tQ();
            i.loaded = p;
            if (i.ym) {
                var a = i.ym
                  , b = a.Zi;
                if (!b[i.name]) {
                    a.EE++;
                    b[i.name] = i
                }
                if (i.Gb && !Cb(i.Gb) && f.Ib) {
                    f.Ib.appendChild(i.Gb);
                    if (A.fa.na <= 6 && A.fa.na > 0 && i.$I)
                        i.Gb.style.cssText = i.Gb.style.cssText + (';filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src="' + i.src + '",sizingMethod=scale);')
                }
                var c = a.EE - a.UU, e;
                for (e in b) {
                    if (c <= 0)
                        break;
                    if (!a.Ag[e]) {
                        b[e].ym = q;
                        var g = b[e].Gb;
                        if (g && g.parentNode) {
                            g.parentNode.removeChild(g);
                            zd(g)
                        }
                        g = q;
                        b[e].Gb = q;
                        delete b[e];
                        a.EE--;
                        c--
                    }
                }
                Ad && new wb({
                    Ic: 20,
                    duration: 200,
                    za: function(a) {
                        if (i.Gb && i.Gb.style)
                            i.Gb.style.opacity = a * 1
                    },
                    finish: function() {
                        i.Gb && i.Gb.style && delete i.Gb.style.opacity
                    }
                });
                vd(i)
            }
        }
        ;
        this.Gb.onerror = function() {
            vd(i);
            if (i.ym) {
                var a = i.ym.map.wa();
                if (a.m.PC) {
                    i.error = p;
                    i.Gb.src = a.m.PC;
                    i.Gb && !Cb(i.Gb) && f.Ib.appendChild(i.Gb)
                }
            }
        }
        ;
        e = q
    }
    function xd(a, b) {
        a.Bu.push(b)
    }
    yd.prototype.Jn = function() {
        this.Gb.src = 0 < A.fa.na && 6 >= A.fa.na && this.$I ? H.sa + "blank.gif" : "" !== this.src && this.Gb.src == this.src ? this.src + "&t = " + Date.now() : this.src
    }
    ;
    function vd(a) {
        for (var b = 0; b < a.Bu.length; b++)
            a.Bu[b]();
        a.Bu.length = 0
    }
    function zd(a) {
        if (a) {
            a.onload = a.onerror = q;
            var b = a.attributes, c, e, f;
            if (b) {
                e = b.length;
                for (c = 0; c < e; c += 1)
                    f = b[c].name,
                    $a(a[f]) && (a[f] = q)
            }
            if (b = a.children) {
                e = b.length;
                for (c = 0; c < e; c += 1)
                    zd(a.children[c])
            }
        }
    }
    function wd(a, b) {
        a.src = b;
        a.Jn()
    }
    var Ad = !A.fa.na || 8 < A.fa.na;
    function ud(a) {
        this.We = a || {};
        this.uV = this.We.copyright || q;
        this.n0 = this.We.transparentPng || t;
        this.fw = this.We.baseLayer || t;
        this.zIndex = this.We.zIndex || 0;
        this.ca = ud.aS++
    }
    ud.aS = 0;
    A.lang.xa(ud, A.lang.Ha, "TileLayer");
    A.extend(ud.prototype, {
        ya: function(a, b) {
            this.fw && (this.zIndex = -100);
            this.map = a;
            if (!this.Ib) {
                var c = L("div")
                  , e = c.style;
                e.position = "absolute";
                e.overflow = "visible";
                e.zIndex = this.zIndex;
                e.left = Math.ceil(-a.offsetX + a.width / 2) + "px";
                e.top = Math.ceil(-a.offsetY + a.height / 2) + "px";
                b.appendChild(c);
                this.Ib = c
            }
        },
        remove: function() {
            this.Ib && this.Ib.parentNode && (this.Ib.innerHTML = "",
            this.Ib.parentNode.removeChild(this.Ib));
            delete this.Ib
        },
        Vs: x("n0"),
        getTilesUrl: function(a, b) {
            if (this.map.wa() !== ab && this.map.wa() !== Sa)
                var c = this.map.$e.gw(a.x, b).Zl;
            var e = "";
            this.We.tileUrlTemplate && (e = this.We.tileUrlTemplate.replace(/\{X\}/, c),
            e = e.replace(/\{Y\}/, a.y),
            e = e.replace(/\{Z\}/, b));
            return e
        },
        im: x("uV"),
        wa: function() {
            return this.Sa || Na
        }
    });
    function Bd(a) {
        ud.call(this, a);
        this.m = a || {};
        this.VL = p;
        if (this.m.predictDate) {
            if (1 > this.m.predictDate.weekday || 7 < this.m.predictDate.weekday)
                this.m.predictDate = 1;
            if (0 > this.m.predictDate.hour || 23 < this.m.predictDate.hour)
                this.m.predictDate.hour = 0
        }
        this.cU = D.url.proto + D.url.domain.traffic + "/traffic/"
    }
    Bd.prototype = new ud;
    Bd.prototype.ya = function(a, b) {
        ud.prototype.ya.call(this, a, b);
        this.P = a
    }
    ;
    Bd.prototype.Vs = da(p);
    Bd.prototype.getTilesUrl = function(a, b) {
        var c = "";
        this.m.predictDate ? c = "HistoryService?day=" + (this.m.predictDate.weekday - 1) + "&hour=" + this.m.predictDate.hour + "&t=" + (new Date).getTime() + "&" : (c = "TrafficTileService?time=" + (new Date).getTime() + "&",
        c += "label=web2D&v=016&");
        var c = this.cU + c + "level=" + b + "&x=" + a.x + "&y=" + a.y
          , e = 1;
        this.P.mx() && (e = 2);
        return (c + "&scaler=" + e).replace(/-(\d+)/gi, "M$1")
    }
    ;
    var Cd = [D.url.proto + D.url.domain.TILES_YUN_HOST[0] + "/georender/gss", D.url.proto + D.url.domain.TILES_YUN_HOST[1] + "/georender/gss", D.url.proto + D.url.domain.TILES_YUN_HOST[2] + "/georender/gss", D.url.proto + D.url.domain.TILES_YUN_HOST[3] + "/georender/gss"]
      , Dd = D.url.proto + D.url.domain.main_domain_nocdn.baidu + "/style/poi/rangestyle"
      , Ed = 100;
    function qb(a, b) {
        ud.call(this);
        var c = this;
        this.VL = p;
        try {
            document.createElement("canvas").getContext("2d")
        } catch (e) {}
        Kb(a) ? b = a || {} : (c.xn = a,
        b = b || {});
        b.geotableId && (c.Bf = b.geotableId);
        b.databoxId && (c.xn = b.databoxId);
        var f = D.nd + "geosearch";
        c.cb = {
            dN: b.pointDensity || Ed,
            ZX: f + "/detail/",
            $X: f + "/v2/detail/",
            wJ: b.age || 36E5,
            ut: b.q || "",
            Y_: "png",
            Z3: [5, 5, 5, 5],
            HY: {
                backgroundColor: "#FFFFD5",
                borderColor: "#808080"
            },
            DB: b.ak || pa,
            cO: b.tags || "",
            filter: b.filter || "",
            UN: b.sortby || "",
            GD: b.hotspotName || "tile_md_" + (1E5 * Math.random()).toFixed(0),
            zF: p
        };
        Ta.load("clayer", function() {
            c.Rd()
        })
    }
    qb.prototype = new ud;
    qb.prototype.ya = function(a, b) {
        ud.prototype.ya.call(this, a, b);
        this.P = a
    }
    ;
    qb.prototype.getTilesUrl = function(a, b) {
        var c = a.x
          , e = a.y
          , f = this.cb
          , c = Cd[Math.abs(c + e) % Cd.length] + "/image?grids=" + c + "_" + e + "_" + b + "&q=" + f.ut + "&tags=" + f.cO + "&filter=" + f.filter + "&sortby=" + f.UN + "&ak=" + this.cb.DB + "&age=" + f.wJ + "&page_size=" + f.dN + "&format=" + f.Y_;
        f.zF || (f = (1E5 * Math.random()).toFixed(0),
        c += "&timeStamp=" + f);
        this.Bf ? c += "&geotable_id=" + this.Bf : this.xn && (c += "&databox_id=" + this.xn);
        return c
    }
    ;
    qb.prototype.enableUseCache = function() {
        this.cb.zF = p
    }
    ;
    qb.prototype.disableUseCache = function() {
        this.cb.zF = t
    }
    ;
    qb.BT = /^point\(|\)$/ig;
    qb.CT = /\s+/;
    qb.ET = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    var Fd = {};
    function Gd(a, b) {
        this.hd = a;
        this.JP = 18;
        this.m = {
            vy: 256,
            Bc: new T
        };
        A.extend(this.m, b || {})
    }
    var Hd = [0, 0, 0, 8, 7, 7, 6, 6, 5, 5, 4, 3, 3, 3, 2, 2, 1, 1, 0, 0, 0, 0]
      , Id = [512, 2048, 4096, 32768, 65536, 262144, 1048576, 4194304, 8388608]
      , Jd = [0, 0, 0, 3, 5, 5, 7, 7, 9, 9, 10, 12, 12, 12, 15, 15, 17, 17, 19, 19, 19, 19]
      , Kd = [0, 0, 0, 256, 256, 512, 256, 512, 256, 512, 256, 256, 512, 1024, 256, 512, 512, 1024, 512, 1024, 2048, 4096];
    Gd.prototype = {
        getName: x("hd"),
        Id: function(a) {
            return "na" === this.hd ? Kd[a] : this.m.vy
        },
        vs: function(a) {
            return "na" === this.hd ? Jd[a] : a
        },
        jj: function() {
            return this.m.Bc
        },
        Xb: function(a) {
            return Math.pow(2, this.JP - a)
        },
        rD: function(a) {
            return "na" === this.hd ? Id[Hd[a]] : this.Xb(a) * this.Id(a)
        }
    };
    var Ld = {
        drawPoly: function(a, b, c, e, f, g) {
            var i = a[1];
            if (i)
                for (var a = a[6], k = 0; k < i.length; k++) {
                    var m = i[k][0]
                      , n = f.nj(m, "polygon", c, g);
                    if (n && n.length)
                        for (var o = i[k][1], s = 0; s < o.length; s++) {
                            var v = o[s][1];
                            f.Oc(v[0], c) && (v["cache" + c] || (v["cache" + c] = f.Dm(v[1], c, e, a)),
                            v = v["cache" + c],
                            f.P.io(b.canvas.id, v, {
                                type: "polygon",
                                Vb: m,
                                style: n
                            }),
                            this.kW(b, v, n, c))
                        }
                }
        },
        kW: function(a, b, c, e) {
            c = c[0];
            if (!c.Vb || !(6 < e && (71013 === c.Vb || 71012 === c.Vb || 71011 === c.Vb) || 6 === e && (71011 === c.Vb || 71012 === c.Vb) || 5 === e && (71011 === c.Vb || 71013 === c.Vb) || 5 > e && (71012 === c.Vb || 71013 === c.Vb))) {
                a.fillStyle = c.Mw;
                a.beginPath();
                a.moveTo(b[0], b[1]);
                for (var e = 2, f = b.length; e < f; e += 2)
                    a.lineTo(b[e], b[e + 1]);
                a.closePath();
                c.borderWidth && (a.strokeStyle = c.ro,
                a.lineWidth = c.borderWidth / 2,
                a.stroke());
                a.fill()
            }
        },
        drawGaoqingRoadBorder: function(a, b, c, e, f) {
            var g = a[1];
            if (g)
                for (var a = a[6], i = 0; i < g.length; i++) {
                    var k = g[i][0]
                      , m = f.nj(k, "polygon", c);
                    if (m && m.length && m[0].borderWidth)
                        for (var n = g[i][1], o = 0; o < n.length; o++) {
                            var s = n[o][1];
                            f.Oc(s[0], c) && (s["cache" + c] || (s["cache" + c] = f.Dm(s[1], c, e, a)),
                            s = s["cache" + c],
                            f.P.io(b.canvas.id, s, {
                                type: "polygon",
                                Vb: k,
                                style: m
                            }),
                            this.mW(b, s, m))
                        }
                }
        },
        drawGaoqingRoadFill: function(a, b, c, e, f) {
            var g = a[1];
            if (g)
                for (var a = a[6], i = 0; i < g.length; i++) {
                    var k = g[i][0]
                      , m = f.nj(k, "polygon", c);
                    if (m && m.length)
                        for (var n = g[i][1], o = 0; o < n.length; o++) {
                            var s = n[o][1];
                            f.Oc(s[0], c) && (s["cache" + c] || (s["cache" + c] = f.Dm(s[1], c, e, a)),
                            s = s["cache" + c],
                            f.P.io(b.canvas.id, s, {
                                type: "polygon",
                                Vb: k,
                                style: m
                            }),
                            this.nW(b, s, m))
                        }
                }
        },
        mW: function(a, b, c) {
            c = c[0];
            a.beginPath();
            a.moveTo(b[0], b[1]);
            for (var e = 2, f = b.length; e < f; e += 2)
                a.lineTo(b[e], b[e + 1]);
            a.closePath();
            a.strokeStyle = c.ro;
            a.lineWidth = c.borderWidth / 2;
            a.stroke()
        },
        nW: function(a, b, c) {
            a.fillStyle = c[0].Mw;
            a.beginPath();
            a.moveTo(b[0], b[1]);
            for (var c = 2, e = b.length; c < e; c += 2)
                a.lineTo(b[c], b[c + 1]);
            a.closePath();
            a.fill()
        }
    };
    var Md = {
        drawArrow: function(a, b, c, e, f, g) {
            b.lineWidth = 1.5;
            b.lineCap = "butt";
            b.lineJoin = "miter";
            b.strokeStyle = "rgba(153,153,153,1)";
            var i = a[7];
            if (i) {
                a = i[1];
                e = g.Dm(i[0], c, e);
                for (i = 0; i < a.length; i++)
                    if (g.Oc(a[i], c)) {
                        var k = e[4 * i]
                          , m = e[4 * i + 1]
                          , n = e[4 * i + 2]
                          , o = e[4 * i + 3]
                          , s = (k + n) / 2
                          , v = (m + o) / 2
                          , n = (k - n) / f
                          , o = (m - o) / f
                          , k = s + n / 2
                          , n = s - n / 2
                          , m = v + o / 2
                          , o = v - o / 2;
                        this.dW(b, k, m, n, o)
                    }
            }
        },
        dW: function(a, b, c, e, f) {
            a.beginPath();
            a.moveTo(b, c);
            a.lineTo(e, f);
            a.stroke();
            c = this.VU([b, c], [e, f]);
            b = c[0];
            c = c[1];
            a.beginPath();
            a.moveTo(b[0], b[1]);
            a.lineTo(c[0], c[1]);
            a.lineTo(e, f);
            a.closePath();
            a.stroke()
        },
        VU: function(a, b) {
            var c = b[0] - a[0]
              , e = b[1] - a[1]
              , f = 1.8 * Math.sqrt(c * c + e * e)
              , g = b[0] + 4.8410665352790705 * (c / f)
              , f = b[1] + 4.8410665352790705 * (e / f)
              , c = Math.atan2(e, c) + Math.PI;
            return [[g + 4.8410665352790705 * Math.cos(c - 0.3), f + 4.8410665352790705 * Math.sin(c - 0.3)], [g + 4.8410665352790705 * Math.cos(c + 0.3), f + 4.8410665352790705 * Math.sin(c + 0.3)]]
        }
    };
    var Nd = {
        drawHregion: function(a, b, c, e, f) {
            var g = a[1];
            if (g)
                for (var a = a[6], i = 0; i < g.length; i++) {
                    var k = g[i][0]
                      , m = f.nj(k, "polygon3d", c);
                    if (m && m.length)
                        for (var n = g[i][1], o = 0; o < n.length; o++) {
                            var s = n[o][2];
                            if (f.Oc(s[0], c)) {
                                var v = s[2];
                                s["cache" + c] || (s["cache" + c] = f.Dm(s[1], c, e, a));
                                s = s["cache" + c];
                                f.P.io(b.canvas.id, s, {
                                    type: "polygon",
                                    Vb: k,
                                    style: m
                                });
                                this.lW(b, s, v, m)
                            }
                        }
                }
        },
        lW: function(a, b, c, e) {
            e = e[0];
            if (!(c < e.filter)) {
                a.fillStyle = e.EW;
                a.beginPath();
                a.moveTo(b[0], b[1]);
                for (var c = 2, f = b.length; c < f; c += 2)
                    a.lineTo(b[c], b[c + 1]);
                a.closePath();
                e.borderWidth && (a.strokeStyle = e.ro,
                a.lineWidth = e.borderWidth / 2,
                a.stroke());
                a.fill()
            }
        }
    };
    var Od = {
        parse: function(a, b, c, e, f) {
            for (var g = e.P, i = g.ja(), k = Math.pow(2, 18 - i), m = g.Bc.ii(g.Nb()), n = m.lng, o = m.lat, m = g.xb(), s = m.width, v = m.height, m = [], w = 0; w < a.length; w++) {
                var y = []
                  , z = a[w].W_;
                y.x = z[0];
                y.y = z[1];
                y.m6 = z[2];
                for (var B = (z[0] * c * k - n) / k + s / 2, C = (o - (z[1] + 1) * c * k) / k + v / 2, E = 0; E < a[w].length; E++)
                    a[w][E].aM ? this.$M(a[w][E].aM, z, e, b, c, B, C, i, k, s, v, y) : a[w][E].fY ? this.$M(a[w][E].fY, z, e, b, c, B, C, i, k, s, v, y, p, window.d4) : this.rZ(a[w][E].IY, z, e, b, c, B, C, i, k, s, v, y, f);
                m.push(y)
            }
            if (/collision=0/.test(location.search)) {
                a = [];
                for (w = 0; w < m.length; w++)
                    for (E = 0; E < m[w].length; E++)
                        a.push(m[w][E])
            } else
                a = this.EZ(m, e.P.ja());
            g.jV();
            for (w = 0; w < a.length; w++)
                if (c = a[w],
                !c.Qs)
                    if (E = [c.Uf, c.Vf, c.Uf, c.mi, c.li, c.mi, c.li, c.Vf, c.Uf, c.Vf],
                    c.style && g.io("poi", E, {
                        type: "polygon",
                        Vb: c.style.Vb,
                        style: c.style
                    }),
                    "fixed" === c.type) {
                        E = t;
                        c.ve && (c.style && 4 === c.direction) && (E = p);
                        if (c.ve)
                            if (E) {
                                var F = this;
                                this.fs(b, c, e, E, function(a) {
                                    for (var c = 0; c < a.vf.length; c++)
                                        F.uK(b, a.vf[c].be, a.vf[c].ce, a.vf[c].text, a.style, e)
                                })
                            } else
                                this.fs(b, c, e);
                        if (c.style && !E)
                            for (E = 0; E < c.vf.length; E++)
                                this.uK(b, c.vf[E].be, c.vf[E].ce, c.vf[E].text, c.style, e)
                    } else if ("line" === c.type)
                        for (E = 0; E < c.KO.length; E++)
                            f = c.KO[E],
                            Od.gW(b, f.be, f.ce, f.yU, f.IO, f.width, f.height, c.style, e);
            return m
        },
        $M: function(a, b, c, e, f, g, i, k, m, n, o, s, v, w) {
            if (a = a[1])
                for (b = 0; b < a.length; b++) {
                    var y = a[b]
                      , z = y[0]
                      , B = c.nj(z, "point", k, w)
                      , z = c.nj(z, "pointText", k, w)
                      , y = y[1]
                      , C = q
                      , E = 100
                      , F = 0
                      , G = 0;
                    B && B[0] && (B = B[0],
                    C = B.ve,
                    E = B.zoom || 100);
                    z = z && z[0] ? z[0] : q;
                    for (B = 0; B < y.length; B++) {
                        var K = y[B][4];
                        if (K && c.Oc(K[2], k)) {
                            var O = Math.round(K[0] / 100) / m + g
                              , M = f - Math.round(K[1] / 100) / m + i;
                            if (v || !(-50 > O || -50 > M || O > n + 50 || M > o + 50)) {
                                var S = K[7] || ""
                                  , ca = {
                                    type: "fixed",
                                    uid: K[3] || "",
                                    name: S,
                                    Xx: K[4],
                                    Ls: q,
                                    vf: [],
                                    Lx: [O, M],
                                    style: z
                                };
                                if (C) {
                                    var Z = window.iconSetInfo_high[C] || window.iconSetInfo_high["MapRes/" + C];
                                    if (!Z) {
                                        var Aa = C.charCodeAt(0);
                                        48 <= Aa && 57 >= Aa && (Z = window.iconSetInfo_high["_" + C])
                                    }
                                    Z && (F = Z[2],
                                    G = Z[3],
                                    F = F / 2 * E / 100,
                                    G = G / 2 * E / 100,
                                    ca.Ls = {
                                        be: O - F / 2,
                                        ce: M - G / 2,
                                        width: F,
                                        height: G
                                    },
                                    ca.ve = C)
                                }
                                if (z) {
                                    K = K[5];
                                    "number" !== typeof K && (K = 0);
                                    var ta = Z = 0
                                      , Aa = (z.fontSize || 12) / 2
                                      , Ga = 0.2 * Aa;
                                    e.font = Od.Rw(z, c);
                                    var S = S.split("\\")
                                      , sa = S.length;
                                    ca.direction = K;
                                    for (var Va = 0; Va < sa; Va++) {
                                        var Fe = S[Va]
                                          , Uc = e.measureText(Fe).width;
                                        switch (K) {
                                        case 3:
                                            ta = M - Aa / 2 * sa - Ga * (sa - 1) / 2;
                                            Z = O - Uc - F / 2;
                                            ta = ta + Aa * Va + Ga * Va;
                                            break;
                                        case 1:
                                            ta = M - Aa / 2 * sa - Ga * (sa - 1) / 2;
                                            Z = O + F / 2;
                                            ta = ta + Aa * Va + Ga * Va;
                                            break;
                                        case 2:
                                            ta = M - G / 2 - Aa * sa - Ga * (sa - 1) - Ga;
                                            Z = O - Uc / 2;
                                            ta = ta + Aa * Va + Ga * Va;
                                            break;
                                        case 0:
                                            ta = M + G / 2 + Ga / 2;
                                            Z = O - Uc / 2;
                                            ta = ta + Aa * Va + Ga * Va;
                                            break;
                                        case 4:
                                            ta = M - Aa / 2 * sa - Ga * (sa - 1) / 2,
                                            Z = O - Uc / 2,
                                            ta = ta + Aa * Va + Ga * Va
                                        }
                                        ca.vf.push({
                                            be: Z,
                                            ce: ta,
                                            width: Uc,
                                            height: Aa,
                                            text: Fe
                                        })
                                    }
                                }
                                s.push(ca)
                            }
                        }
                    }
                }
        },
        rZ: function(a, b, c, e, f, g, i, k, m, n, o, s, v) {
            b = a[7].length;
            if ((n = c.nj(a[0], "pointText", k)) && n.length) {
                n = n[0];
                e.font = Od.Rw(n, c);
                for (var o = n.fontSize / 2, w = a[1], y = a[2], z = y.split("").length, B = a[4], C = B.slice(0, 2), E = 2; E < B.length; E += 2)
                    C[E] = C[E - 2] + B[E],
                    C[E + 1] = C[E - 1] + B[E + 1];
                for (E = 2; E < B.length; E += 2)
                    0 === E % (2 * z) || 1 === E % (2 * z) || (C[E] = C[E - 2] + B[E] / v,
                    C[E + 1] = C[E - 1] + B[E + 1] / v);
                for (v = 0; v < b; v++)
                    if (c.Oc(a[7][v], k)) {
                        var E = []
                          , F = l
                          , G = l
                          , K = l
                          , O = l
                          , M = y.split("");
                        a[6][v] && M.reverse();
                        for (var B = 2 * v * z, B = C.slice(B, B + 2 * z), S = 0; S < z; S++) {
                            var ca = a[5][z * v + S]
                              , Z = B[2 * S] / 100 / m + g
                              , Aa = f - B[2 * S + 1] / 100 / m + i
                              , ta = M[S]
                              , Ga = e.measureText(ta).width;
                            if (F === l)
                                F = Z - Ga / 2,
                                G = Aa - o / 2,
                                K = F + Ga,
                                O = G + o;
                            else {
                                var sa = Z - Ga / 2
                                  , Va = Aa - o / 2;
                                sa < F && (F = sa);
                                Va < G && (G = Va);
                                sa + Ga > K && (K = sa + Ga);
                                Va + o > O && (O = Va + o)
                            }
                            E.push({
                                IO: ta,
                                be: Z,
                                ce: Aa,
                                yU: ca,
                                width: Ga,
                                height: o
                            })
                        }
                        s.push({
                            type: "line",
                            Xx: w,
                            style: n,
                            KO: E,
                            Uf: F,
                            Vf: G,
                            li: K,
                            mi: O
                        })
                    }
            }
        },
        fs: function(a, b, c, e, f) {
            var g = b.ve;
            if ("lanche" !== g)
                if (Od.nx[g])
                    this.rK(a, b, Od.nx[g], e, f);
                else if (c = c.$K(g)) {
                    var i = new Image;
                    i.setAttribute("crossOrigin", "anonymous");
                    var k = this;
                    i.onload = function() {
                        Od.nx[g] = this;
                        k.rK(a, b, this, e, f);
                        i.onload = q
                    }
                    ;
                    i.src = c
                }
        },
        rK: function(a, b, c, e, f) {
            var g = b.Ls
              , i = g.be
              , k = g.ce
              , m = q
              , n = q
              , o = p
              , s = b.style ? b.style.Vb : q;
            if (b.style && 62203 === s) {
                for (var v = n = m = 0; v < b.vf.length; v++)
                    m < b.vf[v].width && (m = b.vf[v].width),
                    n += 20;
                m = Math.ceil(m) + 10
            }
            e && 519 === s && (o = t);
            m !== q && n !== q ? this.jW(a, b, c, 8, m, n) : e && o ? (m = Math.ceil(b.vf[0].width) + 6,
            this.cW(a, b, c, 12, m, c.height / 2)) : a.drawImage(c, i, k, g.width, g.height);
            f && f(b)
        },
        jW: function(a, b, c, e, f, g) {
            var i = b.Lx[0] - f / 2
              , b = b.Lx[1] - g / 2;
            0 < navigator.userAgent.indexOf("iPhone") && (b += 1);
            var k = e / 2;
            a.drawImage(c, 0, 0, e, e, i, b, k, k);
            a.drawImage(c, e, 0, 1, e, i + k, b, f - 2 * k, k);
            a.drawImage(c, c.width - e, 0, e, e, i + f - k, b, k, k);
            a.drawImage(c, 0, e, e, 1, i, b + k, k, g - 2 * k);
            a.drawImage(c, e, e, 1, 1, i + k, b + k, f - 2 * k, g - 2 * k);
            a.drawImage(c, c.width - e, e, e, 1, i + f - k, b + k, k, g - 2 * k);
            a.drawImage(c, 0, c.height - e, e, e, i, b + g - k, k, k);
            a.drawImage(c, e, c.height - e, 1, e, i + k, b + g - k, f - 2 * k, k);
            a.drawImage(c, c.width - e, c.height - e, e, e, i + f - k, b + g - k, k, k)
        },
        cW: function(a, b, c, e, f, g) {
            var i = b.Lx[0] - f / 2
              , b = b.Lx[1] - g / 2
              , g = e / 2;
            a.drawImage(c, 0, 0, e, c.height, i, b, g, c.height / 2);
            a.drawImage(c, e, 0, 1, c.height, i + g, b, f - 2 * g, c.height / 2);
            a.drawImage(c, c.width - e, 0, e, c.height, i + f - g, b, g, c.height / 2)
        },
        gW: function(a, b, c, e, f, g, i, k, m) {
            a.font = Od.Rw(k, m);
            a.fillStyle = k.KK;
            g /= 2;
            i /= 2;
            a.save();
            a.translate(b, c);
            a.rotate(-e / 180 * Math.PI);
            0 < k.fx && (a.lineWidth = k.fx,
            a.strokeStyle = k.AL,
            a.strokeText(f, -g, -i));
            a.fillText(f, -g, -i);
            a.restore()
        },
        uK: function(a, b, c, e, f, g) {
            a.font = Od.Rw(f, g);
            a.fillStyle = f.KK;
            0 < f.fx && (a.lineWidth = f.fx,
            a.strokeStyle = f.AL,
            a.strokeText(e, b, c));
            a.fillText(e, b, c)
        },
        Rw: function(a, b) {
            var c = a.fontSize / 2
              , e = 10 * a.fontWeight;
            return e = b.WD ? e + " bold" + (" " + c + "px") + ' arial, "PingFang SC", sans-serif' : e + (" " + c + "px") + " arial, sans-serif"
        },
        EZ: function(a, b) {
            var c = []
              , e = 0;
            5 === b && (e = 1);
            a.sort(function(a, b) {
                return a.x * a.y < b.x * b.y ? -1 : 1
            });
            for (var f = 0, g = a.length; f < g; f++)
                for (var i = a[f], k = 0, m = i.length; k < m; k++) {
                    var n = i[k]
                      , o = l
                      , s = l
                      , v = l
                      , w = l;
                    if ("fixed" === n.type) {
                        var y = n.Ls
                          , z = n.vf;
                        y && (o = y.be,
                        s = y.ce,
                        v = y.be + y.width,
                        w = y.ce + y.height);
                        for (y = 0; y < z.length; y++) {
                            var B = z[y];
                            o !== l ? (B.be < o && (o = B.be),
                            B.ce < s && (s = B.ce),
                            B.be + B.width > v && (v = B.be + B.width),
                            B.ce + B.height > w && (w = B.ce + B.height)) : (o = B.be,
                            s = B.ce,
                            v = B.be + B.width,
                            w = B.ce + B.height)
                        }
                    } else
                        "line" === n.type ? (o = n.Uf,
                        s = n.Vf,
                        v = n.li,
                        w = n.mi) : "biaopai" === n.type && (w = n.a5,
                        o = w.be,
                        s = w.ce,
                        v = w.be + w.width,
                        w = w.ce + w.height);
                    o !== l && (n.Uf = o,
                    n.Vf = s,
                    n.li = v,
                    n.mi = w,
                    c.push(n))
                }
            c.sort(function(a, b) {
                return b.Xx - a.Xx || b.Uf - a.Uf || b.Vf - a.Vf
            });
            f = 0;
            for (g = c.length; f < g; f++) {
                m = c[f];
                m.Qs = t;
                m.CJ = [];
                for (k = f + 1; k < g; k++)
                    i = c[k],
                    m.li - e < i.Uf || (m.Uf > i.li - e || m.mi - e < i.Vf || m.Vf > i.mi - e) || m.CJ.push(k)
            }
            f = 0;
            for (g = c.length; f < g; f++)
                if (k = c[f],
                k.Qs === t) {
                    e = k.CJ;
                    k = 0;
                    for (m = e.length; k < m; k++)
                        c[e[k]].Qs = p
                }
            return c
        },
        nx: {}
    };
    var Pd = ["round", "butt", "square"]
      , Qd = ["miter", "round", "bevel"]
      , Rd = {
        daojiao: [{
            stroke: "#FF6600",
            Cb: 1,
            Ab: "round",
            Bb: "round",
            td: [4, 3]
        }],
        daojiao_bai: [{
            stroke: "#f5f3f0",
            Cb: 1,
            Ab: "round",
            Bb: "round",
            td: [4, 3]
        }],
        junhuoxian: [{
            stroke: "#DB7093",
            Cb: 1,
            Ab: "round",
            Bb: "round",
            td: [4, 3]
        }],
        lundu: [{
            stroke: "#5c91c5",
            Cb: 1,
            Ab: "round",
            Bb: "round",
            td: [10, 11]
        }],
        shengjie: [{
            stroke: "#737373",
            Cb: 1,
            Ab: "round",
            Bb: "round",
            td: [6, 3]
        }],
        weidingguojie: [{
            stroke: "#aea08a",
            Cb: 1,
            Ab: "round",
            Bb: "round",
            td: [4, 3]
        }],
        weidingguojie_guowai: [{
            stroke: "#a29e96",
            Cb: 2,
            Ab: "round",
            Bb: "round",
            td: [4, 3]
        }],
        weidingguojie_guonei: [{
            stroke: "#b5a37c",
            Cb: 2,
            Ab: "round",
            Bb: "round",
            td: [4, 3]
        }]
    }
      , Sd = {};
    function Td(a, b, c) {
        if (/^tielu|^MapRes\/tielu/.test(a)) {
            if ("off" === window[c + "zoomFrontStyle"][b].bmapRailwayVisibility)
                return [];
            var e = "#ffffff"
              , f = "#949494";
            window[c + "zoomFrontStyle"] && (window[c + "zoomFrontStyle"][b] && window[c + "zoomFrontStyle"][b].bmapRailwayStrokeColor) && (e = window[c + "zoomFrontStyle"][b].bmapRailwayStrokeColor);
            window[c + "zoomFrontStyle"] && (window[c + "zoomFrontStyle"][b] && window[c + "zoomFrontStyle"][b].bmapRailwayFillColor) && (f = window[c + "zoomFrontStyle"][b].bmapRailwayFillColor);
            if (4 <= b && 9 >= b || 10 <= b && 16 >= b)
                return [{
                    stroke: e,
                    Cb: 1.5,
                    Ab: "butt",
                    Bb: "round",
                    td: [10, 11]
                }, {
                    stroke: f,
                    Cb: 2,
                    Ab: "round",
                    Bb: "round"
                }];
            if (17 <= b && 18 >= b)
                return [{
                    stroke: e,
                    Cb: 2.5,
                    Ab: "butt",
                    Bb: "round",
                    td: [15, 16]
                }, {
                    stroke: f,
                    Cb: 5,
                    Ab: "round",
                    Bb: "round"
                }];
            if (19 <= b && 20 >= b)
                return [{
                    stroke: e,
                    Cb: 4.5,
                    Ab: "butt",
                    Bb: "round",
                    td: [25, 26]
                }, {
                    stroke: f,
                    Cb: 5,
                    Ab: "round",
                    Bb: "round"
                }]
        } else if (0 === a.indexOf("ditie_zj") || 0 === a.indexOf("MapRes/ditie_zj")) {
            if (12 <= b && 16 >= b)
                return [{
                    stroke: "#868686",
                    Cb: 1,
                    Ab: "round",
                    Bb: "round",
                    td: [7, 4]
                }];
            if (17 <= b && 18 >= b || 19 <= b && 20 >= b)
                return [{
                    stroke: "#6e6e6e",
                    Cb: 1,
                    Ab: "round",
                    Bb: "round",
                    td: [7, 4]
                }]
        } else if (/^tongdaomian|^MapRes\/tongdaomian/.test(a)) {
            if (17 === b)
                return [{
                    stroke: "#e5e5e5",
                    Cb: 4,
                    Ab: "square",
                    Bb: "round"
                }, {
                    stroke: "#a8a8a8",
                    Cb: 6,
                    Ab: "square",
                    Bb: "round"
                }];
            if (18 === b)
                return [{
                    stroke: "#e5e5e5",
                    Cb: 6,
                    Ab: "square",
                    Bb: "round"
                }, {
                    stroke: "#a8a8a8",
                    Cb: 8,
                    Ab: "square",
                    Bb: "round"
                }];
            if (19 <= b && 21 >= b)
                return [{
                    stroke: "#e5e5e5",
                    Cb: 8,
                    Ab: "square",
                    Bb: "round"
                }, {
                    stroke: "#a8a8a8",
                    Cb: 10,
                    Ab: "square",
                    Bb: "round"
                }]
        } else if (/^jietizhongduan|^dixiatongdaojieti|^MapRes\/jietizhongduan|^MapRes\/dixiatongdaojieti/.test(a)) {
            if (17 === b)
                return [{
                    stroke: "#e5e5e5",
                    Cb: 4,
                    Ab: "butt",
                    Bb: "round",
                    td: [2, 1]
                }, {
                    stroke: "#bebebe",
                    Cb: 6,
                    Ab: "butt",
                    Bb: "round"
                }];
            if (18 === b)
                return [{
                    stroke: "#e5e5e5",
                    Cb: 6,
                    Ab: "butt",
                    Bb: "round",
                    td: [3, 1]
                }, {
                    stroke: "#bebebe",
                    Cb: 8,
                    Ab: "butt",
                    Bb: "round"
                }];
            if (19 <= b && 21 >= b)
                return [{
                    stroke: "#e5e5e5",
                    Cb: 8,
                    Ab: "butt",
                    Bb: "round",
                    td: [4, 2]
                }, {
                    stroke: "#bebebe",
                    Cb: 10,
                    Ab: "butt",
                    Bb: "round"
                }]
        } else if (/^guojietianqiao|^MapRes\/guojietianqiao/.test(a))
            return 18 === b ? [{
                stroke: "#ffffff",
                Cb: 6,
                Ab: "butt",
                Bb: "round",
                td: [4, 2]
            }, {
                stroke: "#bebebe",
                Cb: 8,
                Ab: "butt",
                Bb: "round"
            }] : [{
                stroke: "#ffffff",
                Cb: 8,
                Ab: "butt",
                Bb: "round",
                td: [4, 2]
            }, {
                stroke: "#bebebe",
                Cb: 10,
                Ab: "butt",
                Bb: "round"
            }];
        return Rd[a] || Rd[a.replace("MapRes/", "")]
    }
    var Ud = {
        drawLink: function(a, b, c, e, f) {
            this.ca = f.P.ca;
            var g = a[1];
            g && (a = a[6],
            this.sO(g, c, e, b, a, f, p),
            this.sO(g, c, e, b, a, f, t))
        },
        sO: function(a, b, c, e, f, g, i) {
            for (var k = 0; k < a.length; k++) {
                var m = a[k][0]
                  , n = g.nj(m, "line", b);
                if (n && n.length && (!i || n[0].borderWidth))
                    if (!n[0].Jo || Td(n[0].Jo, b, this.ca))
                        for (var o = a[k][1], s = 0; s < o.length; s++) {
                            var v = o[s][3];
                            g.Oc(v[0], b) && (v["cache" + b] || (v["cache" + b] = g.Dm(v[1], b, c, f)),
                            v = v["cache" + b],
                            g.P.io(e.canvas.id, v, {
                                type: "polyline",
                                Vb: m,
                                style: n
                            }),
                            this.hW(e, v, n, i, b))
                        }
            }
        },
        drawSingleTexture: function(a, b, c, e, f) {
            var g = a[1];
            if (g)
                for (var a = a[6], i = 0; i < g.length; i++) {
                    var k = f.nj(g[i][0], "line", c);
                    if (k && k.length)
                        for (var m = g[i][1], n = 0; n < m.length; n++) {
                            var o = m[n][11];
                            if (f.Oc(o[0], c)) {
                                var s;
                                o["cache" + c] || (o["cache" + c] = f.Dm(o[1], c, e, a));
                                s = o["cache" + c];
                                o = o[3];
                                o *= Math.pow(2, c - f.M0[c].Mc);
                                this.iW(b, s, k, o, f)
                            }
                        }
                }
        },
        iW: function(a, b, c, e, f) {
            var g = c[0].Jo
              , i = this;
            if (Sd[g])
                i.fs(b, e, a, Sd[g]);
            else if (c = f.$K(g)) {
                var k = new Image;
                k.onload = function() {
                    Sd[g] = k;
                    i.fs(b, e, a, k);
                    k.onload = q
                }
                ;
                k.src = c
            }
        },
        fs: function(a, b, c, e) {
            var f = [a[0], a[1]]
              , g = [a[2], a[3]]
              , a = g[0] - f[0]
              , g = g[1] - f[1]
              , f = [f[0] + a / 2, f[1] + g / 2]
              , i = Math.sqrt(a * a + g * g)
              , b = b / 10
              , a = Math.atan2(g, a);
            c.save();
            c.translate(f[0], f[1]);
            c.rotate(Math.PI / 2 + a);
            c.drawImage(e, -b / 2, -i / 2, b, i);
            c.restore()
        },
        hW: function(a, b, c, e, f) {
            c = c[0];
            if (!e && c.Jo && Td(c.Jo, f, this.ca))
                this.oW(a, b, c, Td(c.Jo, f, this.ca));
            else {
                a.beginPath();
                a.moveTo(b[0], b[1]);
                for (var f = 2, g = b.length; f < g; f += 2)
                    a.lineTo(b[f], b[f + 1]);
                c.borderWidth && e ? (a.strokeStyle = c.ro,
                a.lineCap = Pd[c.OU],
                a.lineJoin = Qd[1],
                a.lineWidth = c.borderWidth / 2,
                a.stroke()) : e || (a.strokeStyle = c.Mw,
                a.lineCap = Pd[c.DW],
                a.lineJoin = Qd[1],
                a.lineWidth = c.GK / 2,
                a.stroke())
            }
        },
        oW: function(a, b, c, e) {
            if (c = e[1]) {
                a.strokeStyle = c.stroke;
                a.lineCap = c.Ab;
                a.lineJoin = c.Bb;
                a.lineWidth = c.Cb;
                a.beginPath();
                a.moveTo(b[0], b[1]);
                for (var c = 2, f = b.length; c < f; c += 2)
                    a.lineTo(b[c], b[c + 1]);
                a.stroke()
            }
            if (e = e[0])
                if (e.td)
                    this.fW(a, b, e);
                else {
                    a.strokeStyle = e.stroke;
                    a.lineCap = e.Ab;
                    a.lineJoin = e.Bb;
                    a.lineWidth = e.Cb;
                    a.beginPath();
                    a.moveTo(b[0], b[1]);
                    c = 2;
                    for (f = b.length; c < f; c += 2)
                        a.lineTo(b[c], b[c + 1]);
                    a.stroke()
                }
        },
        fW: function(a, b, c) {
            a.strokeStyle = c.stroke;
            a.lineCap = c.Ab;
            a.lineJoin = c.Bb;
            a.lineWidth = c.Cb;
            var e = p
              , c = c.td[0];
            a.beginPath();
            for (var f = 0; f < b.length - 2; f += 2) {
                var g = b[f]
                  , i = b[f + 1]
                  , k = b[f + 2] - g
                  , m = b[f + 3] - i
                  , n = 0 !== k ? m / k : 0 < m ? 1E15 : -1E15
                  , m = Math.sqrt(k * k + m * m)
                  , o = c;
                for (a.moveTo(g, i); 0.1 <= m; ) {
                    o > m && (o = m);
                    var s = Math.sqrt(o * o / (1 + n * n));
                    0 > k && (s = -s);
                    g += s;
                    i += n * s;
                    a[e ? "lineTo" : "moveTo"](g, i);
                    m -= o;
                    e = !e
                }
            }
            a.stroke()
        }
    };
    var Vd = 3, Wd = 4, Xd = 7, Yd = 8, Zd = 15, $d = 16, ae = {}, be = {}, ce = {}, de, ee = {
        3: {
            start: 3,
            Mc: 3
        },
        4: {
            start: 4,
            Mc: 5
        },
        5: {
            start: 4,
            Mc: 5
        },
        6: {
            start: 6,
            Mc: 7
        },
        7: {
            start: 6,
            Mc: 7
        },
        8: {
            start: 8,
            Mc: 9
        },
        9: {
            start: 8,
            Mc: 9
        },
        10: {
            start: 10,
            Mc: 10
        },
        11: {
            start: 11,
            Mc: 12
        },
        12: {
            start: 11,
            Mc: 12
        },
        13: {
            start: 11,
            Mc: 12
        },
        14: {
            start: 14,
            Mc: 15
        },
        15: {
            start: 14,
            Mc: 15
        },
        16: {
            start: 16,
            Mc: 17
        },
        17: {
            start: 16,
            Mc: 17
        },
        18: {
            start: 18,
            Mc: 19
        },
        19: {
            start: 18,
            Mc: 19
        },
        20: {
            start: 18,
            Mc: 19
        },
        21: {
            start: 18,
            Mc: 19
        }
    };
    function fe(a) {
        this.P = a;
        this.Hc = a.M.devicePixelRatio;
        this.M0 = ee
    }
    fe.prototype = {
        uC: function(a, b, c, e, f, g, i, k, m) {
            this.P.YN = {};
            var n = this
              , o = n.P.ca;
            m || (m = 0);
            if (!window[o + "StyleBody"] && 100 > m)
                setTimeout(function() {
                    n.uC(a, b, c, e, f, g, i, k, m + 1)
                }, 100);
            else {
                de || (de = k);
                var s = b.getContext("2d")
                  , v = b.parentNode;
                v.removeChild(b);
                s.clearRect(0, 0, g, g);
                v.appendChild(b);
                v = this.Hc;
                1 < v && !b._scale && (s.scale(v, v),
                b._scale = p);
                s.fillStyle = this.ZM("#F5F3F0");
                window[o + "zoomFrontStyle"][f].bmapLandColor && (s.fillStyle = this.ZM(window[o + "zoomFrontStyle"][f].bmapLandColor));
                o = b.style.width;
                b.style.width = "0px";
                b.style.width = o;
                s.fillRect(0, 0, g, g);
                if (a[0])
                    for (o = 0; o < a[0].length; o++)
                        v = a[0][o],
                        v[0] === Xd && Ld.drawPoly(v, s, f, g, this);
                17 <= this.P.ja() ? (n.tK(a, s, f, g, i, c, e),
                b.yn = p) : setTimeout(function() {
                    if (!b.WG) {
                        n.tK(a, s, f, g, i, c, e);
                        b.yn = p
                    }
                }, 1)
            }
        },
        tK: function(a, b, c, e) {
            var f = this.P.ca;
            if (a[0])
                for (var g = 0; g < a[0].length; g++) {
                    var i = a[0][g]
                      , k = i[0];
                    k === Wd ? Ud.drawLink(i, b, c, e, this) : k === $d ? Ud.drawLink(i, b, c, e, this) : k === Zd ? (Ld.drawGaoqingRoadBorder(i, b, c, e, this),
                    Ld.drawGaoqingRoadFill(i, b, c, e, this)) : 18 === k ? window[f + "zoomFrontStyle"] && (window[f + "zoomFrontStyle"][c] && "off" !== window[f + "zoomFrontStyle"][c].bmapRoadarrowVisibility) && Md.drawArrow(i, b, c, e, Math.pow(2, c - ee[c].Mc), this) : k === Yd ? Nd.drawHregion(i, b, c, e, this) : 19 === k && Ud.drawSingleTexture(i, b, c, e, this)
                }
        },
        sK: function(a, b, c, e, f, g, i) {
            var k = this
              , m = k.P.ca;
            i || (i = 0);
            !window[m + "StyleBody"] && 100 > i ? setTimeout(function() {
                k.sK(a, b, c, e, f, g, i + 1)
            }, 100) : (de || (de = b),
            a.yZ = Od.parse(a, c, e, this, f))
        },
        nj: function(a, b, c, e) {
            var f = a + "-" + b + "-" + c;
            if (e)
                return ae[f] || (ae[f] = this.vg(a, b, c, e)),
                ae[f];
            this.P.YN[f] = this.vg(a, b, c);
            return this.P.YN[f]
        },
        vg: function(a, b, c, e) {
            var f = this.P.ca, g;
            g = e || window[f + "_bmap_baseFs"];
            f = window[f + "StyleBody"];
            e = g[2];
            if ("arrow" === b)
                return this.nZ(e[2]);
            switch (b) {
            case "point":
                e = e[0];
                f = f[0] || {};
                break;
            case "pointText":
                e = e[1];
                f = f[1] || {};
                break;
            case "line":
                e = e[3];
                f = f[3] || {};
                break;
            case "polygon":
                e = e[4];
                f = f[4] || {};
                break;
            case "polygon3d":
                e = e[5],
                f = f[5] || {}
            }
            var i = []
              , c = g[1][c - 1][0][a];
            if (!c)
                return i;
            for (g = 0; g < c.length; g++) {
                var k = f[c[g]] || e[c[g]];
                if (k) {
                    switch (b) {
                    case "polygon":
                        k = this.wZ(k, a);
                        break;
                    case "line":
                        k = this.sZ(k, a);
                        break;
                    case "pointText":
                        k = this.uZ(k, a);
                        break;
                    case "point":
                        k = this.tZ(k, a);
                        break;
                    case "polygon3d":
                        k = this.vZ(k, a)
                    }
                    k.H5 = c[g];
                    i[i.length] = k
                }
            }
            return i
        },
        uZ: function(a, b) {
            return {
                Vb: b,
                KK: this.Dg(a[0]),
                AL: this.Dg(a[1]),
                f2: this.Dg(a[2]),
                fontSize: a[3],
                fx: a[4],
                fontWeight: a[5],
                fontStyle: a[6],
                PV: a[7]
            }
        },
        tZ: function(a, b) {
            return {
                Vb: b,
                Xx: a[0],
                Z5: a[1],
                ve: a[2],
                bY: a[3],
                I4: a[4],
                PV: a[5],
                zoom: a[6]
            }
        },
        sZ: function(a, b) {
            return {
                Vb: b,
                ro: this.Dg(a[0]),
                Mw: this.Dg(a[1]),
                borderWidth: a[2],
                GK: a[3],
                OU: a[4],
                DW: a[5],
                R3: a[6],
                S3: a[7],
                T3: a[8],
                l4: a[9],
                m4: a[10],
                PU: a[11],
                Jo: a[12],
                QU: a[13],
                R2: a[14],
                j4: a[15],
                P3: a[16],
                H4: a[17],
                m5: a[18]
            }
        },
        wZ: function(a, b) {
            return {
                Vb: b,
                Mw: this.Dg(a[0]),
                ro: this.Dg(a[1]),
                borderWidth: a[2],
                PU: a[3],
                QU: a[4],
                h6: a[5],
                O3: a[6],
                L5: a[7],
                M5: this.Dg(a[8])
            }
        },
        vZ: function(a, b) {
            return {
                Vb: b,
                filter: a[0],
                kN: a[1],
                Q3: a[2],
                borderWidth: a[3],
                ro: this.Dg(a[4]),
                EW: this.Dg(a[5]),
                Q2: this.Dg(a[6]),
                Y4: a[7]
            }
        },
        nZ: function(a) {
            for (var b in a)
                return a = a[b],
                {
                    color: this.Dg(a[0]),
                    bY: a[1],
                    ve: a[2]
                }
        },
        Dg: function(a) {
            var b = a;
            if (ce[b])
                return ce[b];
            a >>>= 0;
            ce[b] = "rgba(" + (a & 255) + "," + (a >> 8 & 255) + "," + (a >> 16 & 255) + "," + (a >> 24 & 255) / 255 + ")";
            return ce[b]
        },
        ZM: function(a) {
            a = a.replace("#", "");
            6 === a.length && (a += "ff");
            for (var b = "rgba(", c = 0; 8 > c; c += 2)
                b = 6 > c ? b + (parseInt(a.slice(c, c + 2), 16) + ",") : b + (parseInt(a.slice(c, c + 2), 16) / 255 + ")");
            return b
        },
        Oc: function(a, b) {
            var c;
            be[a] || (c = a.toString(2),
            8 > c.length && (c = Array(8 - c.length + 1).join("0") + c),
            be[a] = c);
            c = be[a];
            return "1" === c[b - ee[b].start]
        },
        Dm: function(a, b, c) {
            var e = []
              , b = Math.pow(2, b - ee[b].Mc) / 100
              , f = a[0] * b
              , g = a[1] * b;
            e[e.length] = f;
            e[e.length] = c - g;
            for (var i = 2; i < a.length; i += 2)
                f += a[i] * b,
                g += a[i + 1] * b,
                e[e.length] = f,
                e[e.length] = c - g;
            return e
        },
        $K: function(a) {
            if (a) {
                var b = a.length % de.length
                  , c = this.gX();
                return de[b] + a + ".png?v=" + c.BF + "&udt=" + c.xF
            }
        },
        gX: function() {
            if (this.KD)
                return this.KD;
            var a = "undefined" !== typeof MSV ? MSV.A4 : {};
            // console.log(a, a.version);
            return this.KD = {
                BF: a ? a.version : "001",
                xF: a.o0 ? a.o0 : "20150621"
            }
        }
    };
    P = A.lang.ku;
    Vd = 3;
    Wd = 4;
    Xd = 7;
    Yd = 8;
    Zd = 15;
    $d = 16;
    function td(a, b, c) {
        c = c || {};
        this.P = a;
        this.Ov = b;
        this.Hc = b.kN;
        this.cb = {
            X_: "na",
            zIndex: 0,
            eO: c.tileUrls || {
                http: ["http://online0.map.bdimg.com/pvd/?qt=vtile", "http://online1.map.bdimg.com/pvd/?qt=vtile", "http://online2.map.bdimg.com/pvd/?qt=vtile", "http://online3.map.bdimg.com/pvd/?qt=vtile", "http://online4.map.bdimg.com/pvd/?qt=vtile"],
                https: ["https://ss0.bdstatic.com/8bo_dTSlR1gBo1vgoIiO_jowehsv/pvd/?qt=vtile", "https://ss1.bdstatic.com/8bo_dTSlR1gBo1vgoIiO_jowehsv/pvd/?qt=vtile", "https://ss2.bdstatic.com/8bo_dTSlR1gBo1vgoIiO_jowehsv/pvd/?qt=vtile", "https://ss3.bdstatic.com/8bo_dTSlR1gBo1vgoIiO_jowehsv/pvd/?qt=vtile", "https://ss0.bdstatic.com/8bo_dTSlQ1gBo1vgoIiO_jowehsv/pvd/?qt=vtile"]
            },
            JD: c.iconUrls || ["https://ss0.bdstatic.com/8bo_dTSlR1gBo1vgoIiO_jowehsv/sty/map_icons2x/", "https://ss1.bdstatic.com/8bo_dTSlR1gBo1vgoIiO_jowehsv/sty/map_icons2x/"],
            dF: p
        };
        this.nB = "";
        this.xS = {};
        var c = c.urlOpts || {
            styles: "pl",
            extdata: 1,
            textimg: 0,
            mesh3d: 0,
            limit: 30
        }, e;
        for (e in c)
            c.hasOwnProperty(e) && (this.nB = this.nB + "&" + e + "=" + c[e]);
        this.dh = {};
        this.Rr = [];
        this.Ws = 0;
        this.tx = t;
        this.nx = {};
        a = this.cb.X_;
        Fd[a] ? a = Fd[a] : (b = new Gd(a,l),
        a = Fd[a] = b);
        this.Dd = a;
        this.P.Dd = this.Dd
    }
    window.VectorIndoorTileLayer = "VectorIndoorTileLayer";
    ea = td.prototype;
    ea.ya = function() {
        var a = this.P
          , b = a.$e;
        if (!this.co) {
            var c = b.nq(this.cb.zIndex);
            c.style.WebkitTransform = "translate3d(0px, 0px, 0)";
            this.co = c
        }
        b.gg.appendChild(this.co);
        b.e4 = c;
        if (this.cb.dF) {
            ge(this);
            var e = this;
            a.addEventListener("checkvectorclick", function(a) {
                var b;
                a: {
                    b = a.offsetX;
                    var c = a.offsetY
                      , k = e.Rr.yZ;
                    if (k)
                        for (var m = 0; m < k.length; m++)
                            for (var n = k[m], o = 0; o < n.length; o++)
                                if (a = n[o],
                                !a.Qs && a.Ls && b > a.Uf && b < a.li && c > a.Vf && c < a.mi) {
                                    b = a.Ls;
                                    b = {
                                        type: 9,
                                        name: a.name,
                                        uid: a.uid,
                                        point: {
                                            x: b.be + b.width / 2,
                                            y: b.ce + 6
                                        }
                                    };
                                    break a
                                }
                    b = q
                }
                b && (a = new P("onvectorclick"),
                a.a4 = b,
                a.Se = "base",
                this.dispatchEvent(a))
            })
        }
    }
    ;
    function ge(a) {
        var b = a.P
          , c = b.$e
          , e = a.Hc
          , f = b.xb()
          , g = f.width
          , f = f.height
          , i = L("canvas");
        i.style.cssText = "position: absolute;left:0;top:0;width:" + g + "px;height:" + f + "px;z-index:2;";
        i.width = g * e;
        i.height = f * e;
        a.xx = i;
        a.bp = i.getContext("2d");
        a.bp.scale(e, e);
        a.bp.textBaseline = "top";
        c.gg.appendChild(i);
        b.hS = i
    }
    ea.LX = x("Dd");
    ea.update = function(a, b) {
        b = b || {};
        this.yF = b.yF;
        b.gm && (this.p0 = b.gm);
        if (this.cb.dF && (b.Xl && this.Xl(),
        b.F_)) {
            var c = this.Hc
              , e = this.P.xb()
              , f = e.width
              , e = e.height
              , g = this.xx
              , i = g.style;
            i.width = f + "px";
            i.height = e + "px";
            g.width = f * c;
            g.height = e * c;
            this.bp.scale(c, c);
            this.bp.textBaseline = "top"
        }
        if (b.c6) {
            c = this.co;
            f = 0;
            for (e = c.childNodes.length; f < e; f++)
                c.childNodes[f].yn = t
        }
        this.Bw = a;
        this.ep(a)
    }
    ;
    ea.ep = function(a) {
        this.Rr = [];
        var b = this.P
          , c = b.ja()
          , e = b.Bc.ii(b.ae)
          , f = this.Dd.Xb(c)
          , e = [Math.round(-e.lng / f), Math.round(e.lat / f)]
          , f = this.Dd.Id(c)
          , g = b.ca.replace(/^TANGRAM_/, "")
          , i = this.Dd.vs(c)
          , b = this.P
          , k = -b.offsetY + b.height / 2
          , m = this.co;
        m.style.left = -b.offsetX + b.width / 2 + "px";
        m.style.top = k + "px";
        this.Oe ? this.Oe.length = 0 : this.Oe = [];
        b = 0;
        for (k = m.childNodes.length; b < k; b++) {
            var n = m.childNodes[b];
            n.Lq = t;
            this.Oe.push(n)
        }
        if (b = this.Bm)
            for (var o in b)
                delete b[o];
        else
            this.Bm = {};
        this.Pe ? this.Pe.length = 0 : this.Pe = [];
        b = 0;
        for (k = a.length; b < k; b++) {
            var n = a[b][0]
              , s = a[b][1];
            o = 0;
            for (var v = this.Oe.length; o < v; o++) {
                var w = this.Oe[o];
                if (w.id === g + "_" + n + "_" + s + "_" + i + "_" + c) {
                    w.Lq = p;
                    this.Bm[w.id] = w;
                    break
                }
            }
        }
        b = 0;
        for (k = this.Oe.length; b < k; b++)
            w = this.Oe[b],
            w.Lq || (w.rB = q,
            delete w.rB,
            w.yn = t,
            this.Pe.push(w));
        o = [];
        v = f * this.Hc;
        b = 0;
        for (k = a.length; b < k; b++) {
            var n = a[b][0]
              , s = a[b][1]
              , w = n * f + e[0]
              , y = (-1 - s) * f + e[1]
              , z = g + "_" + n + "_" + s + "_" + i + "_" + c
              , B = this.Bm[z]
              , C = q;
            if (B)
                C = B.style,
                C.left = w + "px",
                C.top = y + "px",
                C.width = f + "px",
                C.height = f + "px",
                B.yn ? B.oF && B.oF && this.Rr.push(B.oF) : (B.WG = p,
                B.rB = q,
                delete B.rB,
                o.push([n, s, B]));
            else {
                if (0 < this.Pe.length) {
                    var B = this.Pe.shift()
                      , E = B.getContext("2d");
                    B.getAttribute("width") !== v && (B._scale = t);
                    B.setAttribute("width", v);
                    B.setAttribute("height", v);
                    C = B.style;
                    C.width = f + "px";
                    C.height = f + "px";
                    E.clearRect(0, 0, v, v)
                } else
                    B = document.createElement("canvas"),
                    C = B.style,
                    C.position = "absolute",
                    this.cb.backgroundColor && (C.background = this.cb.backgroundColor),
                    C.width = f + "px",
                    C.height = f + "px",
                    B.setAttribute("width", v),
                    B.setAttribute("height", v),
                    m.appendChild(B);
                B.id = z;
                C.left = w + "px";
                C.top = y + "px";
                o.push([n, s, B])
            }
            B.style.visibility = ""
        }
        b = 0;
        for (k = this.Pe.length; b < k; b++)
            this.Pe[b].style.visibility = "hidden";
        if (0 === o.length) {
            he(this);
            a = this.P.ca.replace(/^TANGRAM_/, "");
            c = this.P.ja();
            e = this.Dd.vs(c);
            f = {};
            for (g = 0; g < this.Bw.length; g++)
                i = this.Bw[g],
                i = a + "_" + i[0] + "_" + i[1] + "_" + e + "_" + c,
                this.dh[i] && (f[i] = this.dh[i],
                this.yF && this.Ov.vC.uC(this.dh[i].D0, this.dh[i].V_, this.dh[i].Zl, this.dh[i].Jm, this.dh[i].lE, this.Dd.Id(this.dh[i].lE), this.Dd.rD(this.dh[i].lE), this.cb.JD));
            this.dh = f
        } else {
            this.Ws = o.length;
            this.tx = t;
            c = this.Dd.vs(this.P.ja());
            for (e = 0; e < a.length; e++)
                a[e][3] = c;
            for (e = 0; e < o.length; e++)
                a = o[e][2],
                f = o[e][0],
                g = o[e][1],
                o[e][3] = c,
                a.yn = t,
                a.WG = t,
                ie(this, f, g, c, a)
        }
    }
    ;
    function ie(a, b, c, e, f) {
        var g = b + "_" + c + "_" + e
          , i = a.xS;
        if (i[g]) {
            if ("loading" === i[g].status)
                return
        } else
            i[g] = {
                status: "init",
                sN: 0
            };
        var k = a
          , m = k.P
          , n = []
          , n = "0" === D.$t ? k.cb.eO.http : k.cb.eO.https
          , o = Math.abs(b + c) % n.length
          , s = "x=" + b + "&y=" + c + "&z=" + e
          , v = je(a.Ov)
          , w = v.BF
          , v = v.xF
          , y = "_" + (0 > b ? "_" : "") + (0 > c ? "$" : "") + parseInt(Math.abs(b) + "" + Math.abs(c) + "" + e, 10).toString(36)
          , s = s + a.nB + "v=" + w + "&udt=" + v + "&fn=window." + y
          , w = n[o] + "&" + s
          , w = n[o] + "&param=" + window.encodeURIComponent(Mb(s));
        window[y] = function(a) {
            clearTimeout(i[g].Sk);
            i[g] = q;
            if (a) {
                var n = m.ja(), o;
                a: {
                    for (o = 0; o < k.Bw.length; o++) {
                        var s = k.Bw[o];
                        if (s[0] === b && s[1] === c && s[3] === e) {
                            o = p;
                            break a
                        }
                    }
                    o = t
                }
                if (o !== t) {
                    o = new P("updateindoor");
                    o.IndoorCanvas = [];
                    o.IndoorCanvas.push({
                        canvasDom: f,
                        data: a,
                        canvasID: f.id,
                        ratio: k.Hc
                    });
                    m.dispatchEvent(o);
                    if (m.M.ok) {
                        if (k.dh[f.id] = {
                            D0: a,
                            V_: f,
                            Zl: b,
                            Jm: c,
                            lE: n
                        },
                        k.Ov.vC.uC(a, f, b, c, n, k.Dd.Id(n), k.Dd.rD(n), k.cb.JD),
                        k.cb.dF) {
                            n = [];
                            n.W_ = [b, c, e];
                            if (a[0])
                                for (o = 0; o < a[0].length; o++)
                                    a[0][o][0] === Vd && n.push({
                                        aM: a[0][o]
                                    });
                            if (a[2])
                                for (o = 0; o < a[2].length; o++)
                                    n.push({
                                        IY: a[2][o]
                                    });
                            f.oF = n;
                            k.Rr.push(n);
                            k.tx === t && k.Ws--;
                            (0 === k.Ws || k.tx === p) && he(k)
                        }
                    } else
                        k.Ws--,
                        (0 === k.Ws || k.tx === p) && he(k);
                    delete window[y]
                }
            }
        }
        ;
        oa(w);
        i[g].status = "loading";
        k = a;
        i[g].Sk = setTimeout(function() {
            3 > i[g].sN ? (i[g].sN++,
            i[g].status = "init",
            ie(k, b, c, e, f)) : i[g] = q
        }, 4E3)
    }
    function he(a) {
        if (a.xx) {
            var b = a.P;
            a.xx.style.left = -b.offsetX + "px";
            a.xx.style.top = -b.offsetY + "px";
            var c = new P("updateindoorlabel");
            c.labelCanvasDom = b.hS;
            b.dispatchEvent(c);
            if (b.M.ok) {
                a.Xl();
                var c = a.Dd
                  , e = b.ja()
                  , f = c.vs(b.ja());
                a.Ov.vC.sK(a.Rr, a.cb.JD, a.bp, c.Id(e), Math.pow(2, e - f), e);
                "moving" !== a.p0 && b.dispatchEvent(new P("ontilesloaded"))
            }
        }
    }
    ea.Xl = function() {
        var a = this.P.xb()
          , b = this.Hc;
        this.bp.clearRect(0, 0, a.width * b, a.height * b)
    }
    ;
    ea.remove = function() {
        var a = this.P.$e;
        this.co && a.gg.removeChild(this.co)
    }
    ;
    function sd(a) {
        this.P = a.map;
        this.df = [];
        this.yr = {};
        this.kN = this.P.M.devicePixelRatio;
        this.vC = new fe(this.P);
        this.ya()
    }
    window.VectorIndoorTileMgr = "VectorIndoorTileMgr";
    ea = sd.prototype;
    ea.ya = function() {
        var a = this
          , b = this.P;
        b.addEventListener("addtilelayer", function(b) {
            a.Ne(b.target)
        });
        b.addEventListener("removetilelayer", function(b) {
            a.Yf(b.target)
        });
        setTimeout(function() {
            b.addEventListener("onmoveend", function(b) {
                "centerAndZoom" !== b.yz && a.update({
                    gm: "moveend"
                })
            });
            b.addEventListener("onmoving", function() {
                a.update({
                    gm: "moving"
                })
            });
            b.addEventListener("onzoomend", function(b) {
                "centerAndZoom" !== b.yz && a.update({
                    Xl: p,
                    gm: "zoomend"
                })
            });
            b.addEventListener("centerandzoom", function() {
                a.update({
                    Xl: p,
                    gm: "centerandzoom"
                })
            });
            b.addEventListener("onupdatestyles", function() {
                a.update({
                    Xl: p,
                    yF: p,
                    gm: "updatestyles"
                });
                a.P.tf(a.P.Nb());
                setTimeout(function() {
                    a.P.dispatchEvent(new P("onvectordrawend"))
                }, 10)
            });
            b.addEventListener("onmaptypechange", function(b) {
                b.Sa === Na && a.update({
                    Xl: p,
                    gm: "maptypechange"
                })
            })
        }, 1);
        b.addEventListener("indoor_data_refresh", u());
        b.addEventListener("onresize", function() {
            a.update({
                F_: p
            })
        });
        a.update()
    }
    ;
    ea.Ne = function(a) {
        if (a instanceof td) {
            for (var b = 0; b < this.df.length; b++)
                if (this.df[b] === a)
                    return;
            this.df.push(a);
            a.ya();
            this.P.loaded && this.update()
        }
    }
    ;
    ea.Yf = function(a) {
        if (a instanceof td) {
            for (var b = 0; b < this.df.length; b++)
                if (this.df[b] === a) {
                    this.df.splice(b, 1);
                    break
                }
            a.remove()
        }
    }
    ;
    ea.qL = function(a) {
        var b = a.getName();
        if (this.yr[b])
            return this.yr[b];
        var c = this.P
          , e = c.ja()
          , f = c.Tb
          , g = a.rD(e);
        c.ca.replace(/^TANGRAM_/, "");
        var i = Math.ceil(f.lng / g)
          , k = Math.ceil(f.lat / g)
          , a = a.Id(e)
          , m = [i, k, (f.lng / g - i) * a, (f.lat / g - k) * a]
          , e = m[0] - Math.ceil((c.width / 2 - m[2]) / a)
          , f = m[1] - Math.ceil((c.height / 2 - m[3]) / a)
          , g = m[0] + Math.ceil((c.width / 2 + m[2]) / a)
          , c = m[1] + Math.ceil((c.height / 2 + m[3]) / a);
        this.Ce ? this.Ce.length = 0 : this.Ce = [];
        for (a = e; a < g; a++)
            for (e = f; e < c; e++)
                this.Ce.push([a, e]);
        this.Ce.sort(function(a) {
            return function(b, c) {
                return 0.4 * Math.abs(b[0] - a[0]) + 0.6 * Math.abs(b[1] - a[1]) - (0.4 * Math.abs(c[0] - a[0]) + 0.6 * Math.abs(c[1] - a[1]))
            }
        }([i, k]));
        this.yr[b] = this.Ce.slice(0);
        return this.yr[b]
    }
    ;
    function je(a) {
        if (a.CF)
            return a.CF;
        a.CF = {
            BF: "001",
            xF: Tb("normal")
        };
        return a.CF
    }
    ea.update = function(a) {
        this.yr = {};
        for (var b = 0; b < this.df.length; b++) {
            var c = this.df[b]
              , e = this.qL(c.Dd);
            c.update(e, a)
        }
    }
    ;
    function ke(a, b, c) {
        this.hd = a;
        this.df = b instanceof ud ? [b] : b.slice(0);
        c = c || {};
        this.m = {
            $_: c.tips || "",
            fE: "",
            fc: c.minZoom || 4,
            mc: c.maxZoom || 18,
            Y3: c.minZoom || 4,
            X3: c.maxZoom || 18,
            vy: 256,
            nF: c.textColor || "black",
            PC: c.errorImageUrl || "",
            ib: new hb(new Q(-21364736,-16023552),new Q(23855104,19431424)),
            Bc: c.projection || new T
        };
        1 <= this.df.length && (this.df[0].fw = p);
        A.extend(this.m, c)
    }
    A.extend(ke.prototype, {
        getName: x("hd"),
        Fs: function() {
            return this.m.$_
        },
        v3: function() {
            return this.m.fE
        },
        KX: function() {
            return this.df[0]
        },
        K3: x("df"),
        Id: function() {
            return this.m.vy
        },
        mf: function() {
            return this.m.fc
        },
        Te: function() {
            return this.m.mc
        },
        setMaxZoom: function(a) {
            this.m.mc = a
        },
        pm: function() {
            return this.m.nF
        },
        jj: function() {
            return this.m.Bc
        },
        o3: function() {
            return this.m.PC
        },
        Id: function() {
            return this.m.vy
        },
        Xb: function(a) {
            return Math.pow(2, 18 - a)
        },
        vL: function(a) {
            return this.Xb(a) * this.Id()
        },
        $E: function(a) {
            this.jj().CN(a)
        }
    });
    var le = [D.url.proto + D.url.domain.TILE_BASE_URLS[0] + "/it/", D.url.proto + D.url.domain.TILE_BASE_URLS[1] + "/it/", D.url.proto + D.url.domain.TILE_BASE_URLS[2] + "/it/", D.url.proto + D.url.domain.TILE_BASE_URLS[3] + "/it/", D.url.proto + D.url.domain.TILE_BASE_URLS[4] + "/it/"]
      , ne = [D.url.proto + D.url.domain.TILE_ONLINE_URLS[0] + "/tile/", D.url.proto + D.url.domain.TILE_ONLINE_URLS[1] + "/tile/", D.url.proto + D.url.domain.TILE_ONLINE_URLS[2] + "/tile/", D.url.proto + D.url.domain.TILE_ONLINE_URLS[3] + "/tile/"]
      , oe = {
        dark: "dl",
        light: "ll",
        normal: "pl"
    }
      , pe = new ud;
    pe.z_ = p;
    pe.getTilesUrl = function(a, b, c) {
        var e = a.x
          , a = a.y
          , f = Tb("normal")
          , g = 1
          , c = oe[c];
        this.map.mx() && (g = 2);
        e = this.map.$e.gw(e, b).Zl;
        return (ne[Math.abs(e + a) % ne.length] + "?qt=vtile&x=" + (e + "").replace(/-/gi, "M") + "&y=" + (a + "").replace(/-/gi, "M") + "&z=" + b + "&styles=" + c + "&scaler=" + g + (6 == A.fa.na ? "&color_dep=32&colors=50" : "") + "&udt=" + f + "&from=jsapi3_0").replace(/-(\d+)/gi, "M$1")
    }
    ;
    var Na = new ke("\u5730\u56fe",pe,{
        tips: "\u663e\u793a\u666e\u901a\u5730\u56fe",
        maxZoom: 19
    })
      , qe = new ud;
    qe.dO = [D.url.proto + D.url.domain.TIlE_PERSPECT_URLS[0] + "/resource/mappic/", D.url.proto + D.url.domain.TIlE_PERSPECT_URLS[1] + "/resource/mappic/", D.url.proto + D.url.domain.TIlE_PERSPECT_URLS[2] + "/resource/mappic/", D.url.proto + D.url.domain.TIlE_PERSPECT_URLS[3] + "/resource/mappic/"];
    qe.getTilesUrl = function(a, b) {
        var c = a.x
          , e = a.y
          , f = 256 * Math.pow(2, 20 - b)
          , e = Math.round((9998336 - f * e) / f) - 1;
        return url = this.dO[Math.abs(c + e) % this.dO.length] + this.map.Lb + "/" + this.map.nw + "/3/lv" + (21 - b) + "/" + c + "," + e + ".jpg"
    }
    ;
    var Qa = new ke("\u4e09\u7ef4",qe,{
        tips: "\u663e\u793a\u4e09\u7ef4\u5730\u56fe",
        minZoom: 15,
        maxZoom: 20,
        textColor: "white",
        projection: new jb
    });
    Qa.Xb = function(a) {
        return Math.pow(2, 20 - a)
    }
    ;
    Qa.sk = function(a) {
        if (!a)
            return "";
        var b = H.NB, c;
        for (c in b)
            if (-1 < a.search(c))
                return b[c].Sx;
        return ""
    }
    ;
    Qa.TK = function(a) {
        return {
            bj: 2,
            gz: 1,
            sz: 14,
            sh: 4
        }[a]
    }
    ;
    var re = new ud({
        fw: p
    });
    re.getTilesUrl = function(a, b) {
        var c = a.x
          , e = a.y;
        return (le[Math.abs(c + e) % le.length] + "u=x=" + c + ";y=" + e + ";z=" + b + ";v=009;type=sate&fm=46&udt=" + Tb("satellite")).replace(/-(\d+)/gi, "M$1")
    }
    ;
    var ab = new ke("\u536b\u661f",re,{
        tips: "\u663e\u793a\u536b\u661f\u5f71\u50cf",
        minZoom: 4,
        maxZoom: 19,
        textColor: "white"
    })
      , se = new ud({
        transparentPng: p
    });
    se.getTilesUrl = function(a, b) {
        var c = a.x
          , e = a.y
          , f = Tb("satelliteStreet");
        return (ne[Math.abs(c + e) % ne.length] + "?qt=vtile&x=" + (c + "").replace(/-/gi, "M") + "&y=" + (e + "").replace(/-/gi, "M") + "&z=" + b + "&styles=sl" + (6 == A.fa.na ? "&color_dep=32&colors=50" : "") + "&udt=" + f).replace(/-(\d+)/gi, "M$1")
    }
    ;
    var Sa = new ke("\u6df7\u5408",[re, se],{
        tips: "\u663e\u793a\u5e26\u6709\u8857\u9053\u7684\u536b\u661f\u5f71\u50cf",
        labelText: "\u8def\u7f51",
        minZoom: 4,
        maxZoom: 19,
        textColor: "white"
    });
    var te = 1
      , ue = {};
    window.Q0 = ue;
    function X(a, b) {
        A.lang.Ha.call(this);
        this.Ad = {};
        this.Nm(a);
        b = b || {};
        b.pa = b.renderOptions || {};
        this.m = {
            pa: {
                Oa: b.pa.panel || q,
                map: b.pa.map || q,
                ah: b.pa.autoViewport || p,
                xt: b.pa.selectFirstResult,
                Js: b.pa.highlightMode,
                pc: b.pa.enableDragging || t
            },
            ht: b.onSearchComplete || u(),
            PM: b.onMarkersSet || u(),
            OM: b.onInfoHtmlSet || u(),
            RM: b.onResultsHtmlSet || u(),
            NM: b.onGetBusListComplete || u(),
            MM: b.onGetBusLineComplete || u(),
            KM: b.onBusListHtmlSet || u(),
            JM: b.onBusLineHtmlSet || u(),
            vE: b.onPolylinesSet || u(),
            np: b.reqFrom || ""
        };
        this.m.pa.ah = "undefined" != typeof b && "undefined" != typeof b.renderOptions && "undefined" != typeof b.renderOptions.autoViewport ? b.renderOptions.autoViewport : p;
        this.m.pa.Oa = A.Ec(this.m.pa.Oa)
    }
    A.xa(X, A.lang.Ha);
    A.extend(X.prototype, {
        getResults: function() {
            return this.Gc ? this.Fi : this.ma
        },
        enableAutoViewport: function() {
            this.m.pa.ah = p
        },
        disableAutoViewport: function() {
            this.m.pa.ah = t
        },
        Nm: function(a) {
            a && (this.Ad.src = a)
        },
        Ft: function(a) {
            this.m.ht = a || u()
        },
        setMarkersSetCallback: function(a) {
            this.m.PM = a || u()
        },
        setPolylinesSetCallback: function(a) {
            this.m.vE = a || u()
        },
        setInfoHtmlSetCallback: function(a) {
            this.m.OM = a || u()
        },
        setResultsHtmlSetCallback: function(a) {
            this.m.RM = a || u()
        },
        nm: x("Le")
    });
    var ve = {
        hG: D.nd,
        pb: function(a, b, c, e, f) {
            this.HZ(b);
            var g = (1E5 * Math.random()).toFixed(0);
            D._rd["_cbk" + g] = function(b) {
                b.result && b.result.error && 202 === b.result.error ? alert("\u8be5AK\u56e0\u4e3a\u6076\u610f\u884c\u4e3a\u5df2\u7ecf\u88ab\u7ba1\u7406\u5458\u5c01\u7981\uff01") : (c = c || {},
                a && a(b, c),
                delete D._rd["_cbk" + g])
            }
            ;
            e = e || "";
            b = c && c.u0 ? Ib(b, encodeURI) : Ib(b, encodeURIComponent);
            this.hG = c && c.CK ? c.qN ? c.qN : D.fp : D.nd;
            e = this.hG + e + "?" + b + "&ie=utf-8&oue=1&fromproduct=jsapi";
            f || (e += "&res=api");
            e = e + ("&callback=BMap._rd._cbk" + g) + ("&ak=" + pa);
            oa(e)
        },
        HZ: function(a) {
            if (a.qt) {
                var b = "";
                switch (a.qt) {
                case "bt":
                    b = "z_qt|bt";
                    break;
                case "nav":
                    b = "z_qt|nav";
                    break;
                case "walk":
                    b = "z_qt|walk";
                    break;
                case "bse":
                    b = "z_qt|bse";
                    break;
                case "nse":
                    b = "z_qt|nse";
                    break;
                case "drag":
                    b = "z_qt|drag"
                }
                "" !== b && D.alog("cus.fire", "count", b)
            }
        }
    };
    window.d1 = ve;
    D._rd = {};
    var db = {};
    window.c1 = db;
    db.mN = function(a) {
        a = a.replace(/<\/?[^>]*>/g, "");
        return a = a.replace(/[ | ]* /g, " ")
    }
    ;
    db.oZ = function(a) {
        return a.replace(/([1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0|[1-9]\d*),([1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0|[1-9]\d*)(,)/g, "$1,$2;")
    }
    ;
    db.pZ = function(a, b) {
        return a.replace(RegExp("(((-?\\d+)(\\.\\d+)?),((-?\\d+)(\\.\\d+)?);)(((-?\\d+)(\\.\\d+)?),((-?\\d+)(\\.\\d+)?);){" + b + "}", "ig"), "$1")
    }
    ;
    var we = 2
      , xe = 6
      , ye = 8
      , ze = 2
      , Ae = 3
      , Be = 6
      , Ce = 0
      , De = "bt"
      , Ee = "nav"
      , Ie = "walk"
      , Je = "bl"
      , Ke = "bsl"
      , Le = "ride"
      , Me = 15
      , Ne = 18;
    D.I = window.Instance = A.lang.Nc;
    function Oe(a, b, c) {
        A.lang.Ha.call(this);
        if (a) {
            this.ab = "object" == typeof a ? a : A.Ec(a);
            this.page = 1;
            this.Jd = 100;
            this.AJ = "pg";
            this.Xf = 4;
            this.LJ = b;
            this.update = p;
            a = {
                page: 1,
                R5: 100,
                Jd: 100,
                Xf: 4,
                AJ: "pg",
                update: p
            };
            c || (c = a);
            for (var e in c)
                "undefined" != typeof c[e] && (this[e] = c[e]);
            this.za()
        }
    }
    A.extend(Oe.prototype, {
        za: function() {
            this.ya()
        },
        ya: function() {
            this.eV();
            this.ab.innerHTML = this.DV()
        },
        eV: function() {
            isNaN(parseInt(this.page)) && (this.page = 1);
            isNaN(parseInt(this.Jd)) && (this.Jd = 1);
            1 > this.page && (this.page = 1);
            1 > this.Jd && (this.Jd = 1);
            this.page > this.Jd && (this.page = this.Jd);
            this.page = parseInt(this.page);
            this.Jd = parseInt(this.Jd)
        },
        B3: function() {
            location.search.match(RegExp("[?&]?" + this.AJ + "=([^&]*)[&$]?", "gi"));
            this.page = RegExp.$1
        },
        DV: function() {
            var a = []
              , b = this.page - 1
              , c = this.page + 1;
            a.push('<p style="margin:0;padding:0;white-space:nowrap">');
            if (!(1 > b)) {
                if (this.page >= this.Xf) {
                    var e;
                    a.push('<span style="margin-right:3px"><a style="color:#7777cc" href="javascript:void(0)" onclick="{temp1}">\u9996\u9875</a></span>'.replace("{temp1}", "BMap.I('" + this.ca + "').toPage(1);"))
                }
                a.push('<span style="margin-right:3px"><a style="color:#7777cc" href="javascript:void(0)" onclick="{temp2}">\u4e0a\u4e00\u9875</a></span>'.replace("{temp2}", "BMap.I('" + this.ca + "').toPage(" + b + ");"))
            }
            if (this.page < this.Xf)
                e = 0 == this.page % this.Xf ? this.page - this.Xf - 1 : this.page - this.page % this.Xf + 1,
                b = e + this.Xf - 1;
            else {
                e = Math.floor(this.Xf / 2);
                var f = this.Xf % 2 - 1
                  , b = this.Jd > this.page + e ? this.page + e : this.Jd;
                e = this.page - e - f
            }
            this.page > this.Jd - this.Xf && this.page >= this.Xf && (e = this.Jd - this.Xf + 1,
            b = this.Jd);
            for (f = e; f <= b; f++)
                0 < f && (f == this.page ? a.push('<span style="margin-right:3px">' + f + "</span>") : 1 <= f && f <= this.Jd && (e = '<span><a style="color:#7777cc;margin-right:3px" href="javascript:void(0)" onclick="{temp3}">[' + f + "]</a></span>",
                a.push(e.replace("{temp3}", "BMap.I('" + this.ca + "').toPage(" + f + ");"))));
            c > this.Jd || a.push('<span><a style="color:#7777cc" href="javascript:void(0)" onclick="{temp4}">\u4e0b\u4e00\u9875</a></span>'.replace("{temp4}", "BMap.I('" + this.ca + "').toPage(" + c + ");"));
            a.push("</p>");
            return a.join("")
        },
        toPage: function(a) {
            a = a ? a : 1;
            "function" == typeof this.LJ && (this.LJ(a),
            this.page = a);
            this.update && this.za()
        }
    });
    function fb(a, b) {
        X.call(this, a, b);
        b = b || {};
        b.renderOptions = b.renderOptions || {};
        this.xp(b.pageCapacity);
        "undefined" != typeof b.renderOptions.selectFirstResult && !b.renderOptions.selectFirstResult ? this.nC() : this.HC();
        this.Ba = [];
        this.wf = [];
        this.gb = -1;
        this.Ta = [];
        var c = this;
        Ta.load("local", function() {
            c.cz()
        }, p)
    }
    A.xa(fb, X, "LocalSearch");
    fb.Pp = 10;
    fb.Z0 = 1;
    fb.dn = 100;
    fb.WF = 2E3;
    fb.eG = 1E5;
    A.extend(fb.prototype, {
        search: function(a, b) {
            this.Ta.push({
                method: "search",
                arguments: [a, b]
            })
        },
        Km: function(a, b, c) {
            this.Ta.push({
                method: "searchInBounds",
                arguments: [a, b, c]
            })
        },
        up: function(a, b, c, e) {
            this.Ta.push({
                method: "searchNearby",
                arguments: [a, b, c, e]
            })
        },
        Qe: function() {
            delete this.Ma;
            delete this.Le;
            delete this.ma;
            delete this.ta;
            this.gb = -1;
            this.Za();
            this.m.pa.Oa && (this.m.pa.Oa.innerHTML = "")
        },
        qm: u(),
        HC: function() {
            this.m.pa.xt = p
        },
        nC: function() {
            this.m.pa.xt = t
        },
        xp: function(a) {
            this.m.Fk = "number" == typeof a && !isNaN(a) ? 1 > a ? fb.Pp : a > fb.dn ? fb.Pp : a : fb.Pp
        },
        nf: function() {
            return this.m.Fk
        },
        toString: da("LocalSearch")
    });
    var Pe = fb.prototype;
    V(Pe, {
        clearResults: Pe.Qe,
        setPageCapacity: Pe.xp,
        getPageCapacity: Pe.nf,
        gotoPage: Pe.qm,
        searchNearby: Pe.up,
        searchInBounds: Pe.Km,
        search: Pe.search,
        enableFirstResultSelection: Pe.HC,
        disableFirstResultSelection: Pe.nC
    });
    function Qe(a, b) {
        X.call(this, a, b)
    }
    A.xa(Qe, X, "BaseRoute");
    A.extend(Qe.prototype, {
        Qe: u()
    });
    function Re(a, b) {
        X.call(this, a, b);
        b = b || {};
        this.Et(b.policy);
        this.GN(b.intercityPolicy);
        this.QN(b.transitTypePolicy);
        this.xp(b.pageCapacity);
        this.Eb = De;
        this.Vp = te;
        this.Ba = [];
        this.gb = -1;
        this.m.An = b.enableTraffic || t;
        this.Ta = [];
        var c = this;
        Ta.load("route", function() {
            c.Rd()
        })
    }
    Re.dn = 100;
    Re.aP = [0, 1, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 1, 1, 1];
    Re.bP = [0, 3, 4, 0, 0, 0, 5];
    A.xa(Re, Qe, "TransitRoute");
    A.extend(Re.prototype, {
        Et: function(a) {
            this.m.ie = 0 <= a && 5 >= a ? a : 0
        },
        GN: function(a) {
            this.m.vm = 0 <= a && 2 >= a ? a : 0
        },
        QN: function(a) {
            this.m.Tm = 0 <= a && 2 >= a ? a : 0
        },
        eA: function(a, b) {
            this.Ta.push({
                method: "_internalSearch",
                arguments: [a, b]
            })
        },
        search: function(a, b) {
            this.Ta.push({
                method: "search",
                arguments: [a, b]
            })
        },
        xp: function(a) {
            if ("string" === typeof a && (a = parseInt(a, 10),
            isNaN(a))) {
                this.m.Fk = Re.dn;
                return
            }
            this.m.Fk = "number" !== typeof a ? Re.dn : 1 <= a && a <= Re.dn ? Math.round(a) : Re.dn
        },
        toString: da("TransitRoute"),
        Q1: function(a) {
            return a.replace(/\(.*\)/, "")
        }
    });
    var Se = Re.prototype;
    V(Se, {
        _internalSearch: Se.eA
    });
    function Te(a, b) {
        X.call(this, a, b);
        this.Ba = [];
        this.gb = -1;
        this.Ta = [];
        var c = this
          , e = this.m.pa;
        1 !== e.Js && 2 !== e.Js && (e.Js = 1);
        this.Ku = this.m.pa.pc ? p : t;
        Ta.load("route", function() {
            c.Rd()
        });
        this.RD && this.RD()
    }
    Te.qP = " \u73af\u5c9b \u65e0\u5c5e\u6027\u9053\u8def \u4e3b\u8def \u9ad8\u901f\u8fde\u63a5\u8def \u4ea4\u53c9\u70b9\u5185\u8def\u6bb5 \u8fde\u63a5\u9053\u8def \u505c\u8f66\u573a\u5185\u90e8\u9053\u8def \u670d\u52a1\u533a\u5185\u90e8\u9053\u8def \u6865 \u6b65\u884c\u8857 \u8f85\u8def \u531d\u9053 \u5168\u5c01\u95ed\u9053\u8def \u672a\u5b9a\u4e49\u4ea4\u901a\u533a\u57df POI\u8fde\u63a5\u8def \u96a7\u9053 \u6b65\u884c\u9053 \u516c\u4ea4\u4e13\u7528\u9053 \u63d0\u524d\u53f3\u8f6c\u9053".split(" ");
    A.xa(Te, Qe, "DWRoute");
    A.extend(Te.prototype, {
        search: function(a, b, c) {
            this.Ta.push({
                method: "search",
                arguments: [a, b, c]
            })
        }
    });
    function Ue(a, b) {
        Te.call(this, a, b);
        b = b || {};
        this.m.An = b.enableTraffic || t;
        this.Et(b.policy);
        this.Eb = Ee;
        this.Vp = Ae
    }
    A.xa(Ue, Te, "DrivingRoute");
    Ue.prototype.Et = function(a) {
        this.m.ie = 0 <= a && 5 >= a ? a : 0
    }
    ;
    function Ve(a, b) {
        Te.call(this, a, b);
        this.Eb = Ie;
        this.Vp = ze;
        this.Ku = t
    }
    A.xa(Ve, Te, "WalkingRoute");
    function We(a, b) {
        Te.call(this, a, b);
        this.Eb = Le;
        this.Vp = Be;
        this.Ku = t
    }
    A.xa(We, Te, "RidingRoute");
    function Xe(a, b) {
        A.lang.Ha.call(this);
        this.Tf = [];
        this.Hk = [];
        this.m = b;
        this.sj = a;
        this.map = this.m.pa.map || q;
        this.yN = this.m.yN;
        this.Db = q;
        this.lk = 0;
        this.kF = "";
        this.lf = 1;
        this.OC = "";
        this.op = [0, 0, 0, 0, 0, 0, 0];
        this.mM = [];
        this.Pr = [1, 1, 1, 1, 1, 1, 1];
        this.lO = [1, 1, 1, 1, 1, 1, 1];
        this.pp = [0, 0, 0, 0, 0, 0, 0];
        this.Im = [0, 0, 0, 0, 0, 0, 0];
        this.Hb = [{
            B: "",
            Ed: 0,
            Um: 0,
            x: 0,
            y: 0,
            ra: -1
        }, {
            B: "",
            Ed: 0,
            Um: 0,
            x: 0,
            y: 0,
            ra: -1
        }, {
            B: "",
            Ed: 0,
            Um: 0,
            x: 0,
            y: 0,
            ra: -1
        }, {
            B: "",
            Ed: 0,
            Um: 0,
            x: 0,
            y: 0,
            ra: -1
        }, {
            B: "",
            Ed: 0,
            Um: 0,
            x: 0,
            y: 0,
            ra: -1
        }, {
            B: "",
            Ed: 0,
            Um: 0,
            x: 0,
            y: 0,
            ra: -1
        }, {
            B: "",
            Ed: 0,
            Um: 0,
            x: 0,
            y: 0,
            ra: -1
        }];
        this.Xh = -1;
        this.Vt = [];
        this.vF = [];
        Ta.load("route", u())
    }
    A.lang.xa(Xe, A.lang.Ha, "RouteAddr");
    var Ye = navigator.userAgent;
    /ipad|iphone|ipod|iph/i.test(Ye);
    var Ze = /android/i.test(Ye);
    function $e(a) {
        this.We = a || {}
    }
    A.extend($e.prototype, {
        xN: function(a, b, c) {
            var e = this;
            Ta.load("route", function() {
                e.Rd(a, b, c)
            })
        }
    });
    function af(a) {
        this.m = {};
        A.extend(this.m, a);
        this.Ta = [];
        var b = this;
        Ta.load("othersearch", function() {
            b.Rd()
        })
    }
    A.xa(af, A.lang.Ha, "Geocoder");
    A.extend(af.prototype, {
        mm: function(a, b, c) {
            this.Ta.push({
                method: "getPoint",
                arguments: [a, b, c]
            })
        },
        km: function(a, b, c) {
            this.Ta.push({
                method: "getLocation",
                arguments: [a, b, c]
            })
        },
        toString: da("Geocoder")
    });
    var bf = af.prototype;
    V(bf, {
        getPoint: bf.mm,
        getLocation: bf.km
    });
    function Geolocation(a) {
        a = a || {};
        this.M = {
            timeout: a.timeout || 1E4,
            maximumAge: a.maximumAge || 6E5,
            enableHighAccuracy: a.enableHighAccuracy || t,
            zi: a.SDKLocation || t
        };
        this.oe = [];
        var b = this;
        Ta.load("othersearch", function() {
            for (var a = 0, e; e = b.oe[a]; a++)
                b[e.method].apply(b, e.arguments)
        })
    }
    A.extend(Geolocation.prototype, {
        getCurrentPosition: function(a, b) {
            this.oe.push({
                method: "getCurrentPosition",
                arguments: arguments
            })
        },
        getStatus: function() {
            return we
        },
        enableSDKLocation: function() {
            I() && (this.M.zi = p)
        },
        disableSDKLocation: function() {
            this.M.zi = t
        }
    });
    function cf(a) {
        a = a || {};
        a.pa = a.renderOptions || {};
        this.m = {
            pa: {
                map: a.pa.map || q
            }
        };
        this.Ta = [];
        var b = this;
        Ta.load("othersearch", function() {
            b.Rd()
        })
    }
    A.xa(cf, A.lang.Ha, "LocalCity");
    A.extend(cf.prototype, {
        get: function(a) {
            this.Ta.push({
                method: "get",
                arguments: [a]
            })
        },
        toString: da("LocalCity")
    });
    function df() {
        this.Ta = [];
        var a = this;
        Ta.load("othersearch", function() {
            a.Rd()
        })
    }
    A.xa(df, A.lang.Ha, "Boundary");
    A.extend(df.prototype, {
        get: function(a, b) {
            this.Ta.push({
                method: "get",
                arguments: [a, b]
            })
        },
        toString: da("Boundary")
    });
    function ef(a, b) {
        X.call(this, a, b);
        this.nP = Je;
        this.pP = Me;
        this.mP = Ke;
        this.oP = Ne;
        this.Ta = [];
        var c = this;
        Ta.load("buslinesearch", function() {
            c.Rd()
        })
    }
    ef.$u = H.sa + "iw_plus.gif";
    ef.gS = H.sa + "iw_minus.gif";
    ef.ZT = H.sa + "stop_icon.png";
    A.xa(ef, X);
    A.extend(ef.prototype, {
        getBusList: function(a) {
            this.Ta.push({
                method: "getBusList",
                arguments: [a]
            })
        },
        getBusLine: function(a) {
            this.Ta.push({
                method: "getBusLine",
                arguments: [a]
            })
        },
        setGetBusListCompleteCallback: function(a) {
            this.m.NM = a || u()
        },
        setGetBusLineCompleteCallback: function(a) {
            this.m.MM = a || u()
        },
        setBusListHtmlSetCallback: function(a) {
            this.m.KM = a || u()
        },
        setBusLineHtmlSetCallback: function(a) {
            this.m.JM = a || u()
        },
        setPolylinesSetCallback: function(a) {
            this.m.vE = a || u()
        }
    });
    function ff(a) {
        X.call(this, a);
        a = a || {};
        this.cb = {
            input: a.input || q,
            GB: a.baseDom || q,
            types: a.types || [],
            ht: a.onSearchComplete || u()
        };
        this.Ad.src = a.location || "\u5168\u56fd";
        this.Wi = "";
        this.ng = q;
        this.HH = "";
        this.Mi();
        Ra(Ja);
        var b = this;
        Ta.load("autocomplete", function() {
            b.Rd()
        })
    }
    A.xa(ff, X, "Autocomplete");
    A.extend(ff.prototype, {
        Mi: u(),
        show: u(),
        $: u(),
        aF: function(a) {
            this.cb.types = a
        },
        Nm: function(a) {
            this.Ad.src = a
        },
        search: ba("Wi"),
        ey: ba("HH"),
        Ft: function(a) {
            this.cb.ht = a
        }
    });
    var Ua;
    function Pa(a, b) {
        function c() {
            f.m.visible ? ("inter" === f.Je && Wa() && f.m.haveBreakId && f.m.indoorExitControl === p ? A.U.show(f.Iq) : A.U.$(f.Iq),
            this.m.closeControl && this.Af && this.P && this.P.Ra() === this.R ? A.U.show(f.Af) : A.U.$(f.Af),
            this.m.forceCloseControl && A.U.show(f.Af)) : (A.U.$(f.Af),
            A.U.$(f.Iq))
        }
        this.R = "string" == typeof a ? A.ea(a) : a;
        this.ca = gf++;
        this.m = {
            enableScrollWheelZoom: p,
            panoramaRenderer: Oa() ? "javascript" : "flash",
            swfSrc: D.di("main_domain_nocdn", "res/swf/") + "APILoader.swf",
            visible: p,
            indoorExitControl: p,
            indoorFloorControl: t,
            linksControl: p,
            clickOnRoad: p,
            navigationControl: p,
            closeControl: p,
            indoorSceneSwitchControl: p,
            albumsControl: t,
            albumsControlOptions: {},
            copyrightControlOptions: {},
            forceCloseControl: t,
            haveBreakId: t
        };
        var b = b || {}, e;
        for (e in b)
            this.m[e] = b[e];
        b.closeControl === p && (this.m.forceCloseControl = p);
        b.useWebGL === t && Oa(t);
        this.Ka = {
            heading: 0,
            pitch: 0
        };
        this.In = [];
        this.Jb = this.fb = q;
        this.$j = this.Fq();
        this.Ba = [];
        this.Lc = 1;
        this.Je = this.ES = this.fl = "";
        this.Ie = {};
        this.Mf = q;
        this.Ug = [];
        this.Yq = [];
        "cvsRender" == this.$j || Oa() ? (this.Sj = 90,
        this.Uj = -90) : "cssRender" == this.$j && (this.Sj = 45,
        this.Uj = -45);
        this.cr = t;
        var f = this;
        this.Jn = function() {
            this.$j === "flashRender" ? Ta.load("panoramaflash", function() {
                f.Mi()
            }, p) : Ta.load("panorama", function() {
                f.mb()
            }, p);
            b.Se == "api" ? Ra(Ea) : Ra(Fa);
            this.Jn = u()
        }
        ;
        this.m.rS !== p && (this.Jn(),
        D.aq("cus.fire", "count", "z_loadpanoramacount"));
        this.jT(this.R);
        this.addEventListener("id_changed", function() {
            Ra(Da, {
                from: b.Se
            })
        });
        this.BP();
        this.addEventListener("indoorexit_options_changed", c);
        this.addEventListener("scene_type_changed", c);
        this.addEventListener("onclose_options_changed", c);
        this.addEventListener("onvisible_changed", c)
    }
    var hf = 4
      , jf = 1
      , kf = 5
      , gf = 0;
    A.lang.xa(Pa, A.lang.Ha, "Panorama");
    A.extend(Pa.prototype, {
        BP: function() {
            var a = this
              , b = this.Af = L("div");
            b.className = "pano_close";
            b.style.cssText = "z-index: 1201;display: none";
            b.title = "\u9000\u51fa\u5168\u666f";
            b.onclick = function() {
                a.$()
            }
            ;
            this.R.appendChild(b);
            var c = this.Iq = L("a");
            c.className = "pano_pc_indoor_exit";
            c.style.cssText = "z-index: 1201;display: none";
            c.innerHTML = '<span style="float:right;margin-right:12px;">\u51fa\u53e3</span>';
            c.title = "\u9000\u51fa\u5ba4\u5185\u666f";
            c.onclick = function() {
                a.Io()
            }
            ;
            this.R.appendChild(c);
            window.ActiveXObject && !document.addEventListener && (b.style.backgroundColor = "rgb(37,37,37)",
            c.style.backgroundColor = "rgb(37,37,37)")
        },
        Io: u(),
        jT: function(a) {
            var b, c;
            b = a.style;
            c = Xa(a).position;
            "absolute" != c && "relative" != c && (b.position = "relative",
            b.zIndex = 0);
            if ("absolute" === c || "relative" === c)
                if (a = Xa(a).zIndex,
                !a || "auto" === a)
                    b.zIndex = 0
        },
        mX: x("In"),
        Wb: x("fb"),
        MX: x("Iv"),
        PN: x("Iv"),
        la: x("Jb"),
        Ja: x("Ka"),
        ja: x("Lc"),
        gj: x("fl"),
        D3: function() {
            return this.L1 || []
        },
        x3: x("ES"),
        Es: x("Je"),
        hy: function(a) {
            a !== this.Je && (this.Je = a,
            this.dispatchEvent(new P("onscene_type_changed")))
        },
        ON: function(a) {
            a !== kf && (kf = a)
        },
        JN: function(a) {
            a !== hf && (hf = a)
        },
        Cc: function(a, b, c) {
            "object" === typeof b && (c = b,
            b = l);
            a != this.fb && (this.ql = this.fb,
            this.rl = this.Jb,
            this.fb = a,
            this.Je = b || "street",
            this.Jb = q,
            c && c.pov && this.rd(c.pov))
        },
        va: function(a) {
            a.Sb(this.Jb) || (this.ql = this.fb,
            this.rl = this.Jb,
            this.Jb = a,
            this.fb = q)
        },
        rd: function(a) {
            if (a) {
                var a = this.Ka.pitch
                  , b = this.Ka.heading
                  , b = this.fC(b);
                a > this.Sj ? a = this.Sj : a < this.Uj && (a = this.Uj);
                this.cr = p;
                this.Ka.pitch = a;
                this.Ka.heading = b
            }
        },
        u_: function(a, b) {
            this.Uj = 0 <= a ? 0 : a;
            this.Sj = 0 >= b ? 0 : b
        },
        fC: function(a) {
            return a - 360 * Math.floor(a / 360)
        },
        Qc: function(a) {
            a != this.Lc && (a > hf && (a = hf),
            a < jf && (a = jf),
            a != this.Lc && (this.Lc = a),
            "cssRender" === this.$j && this.rd(this.Ka))
        },
        aB: function() {
            if (this.P)
                for (var a = this.P.Zw(), b = 0; b < a.length; b++)
                    (a[b]instanceof W || a[b]instanceof cd) && a[b].point && this.Ba.push(a[b])
        },
        XE: ba("P"),
        Dt: function(a) {
            this.Mf = a || "none"
        },
        wj: function(a) {
            for (var b in a) {
                if ("object" == typeof a[b])
                    for (var c in a[b])
                        this.m[b][c] = a[b][c];
                else
                    this.m[b] = a[b];
                a.closeControl === p && (this.m.forceCloseControl = p);
                a.closeControl === t && (this.m.forceCloseControl = t);
                switch (b) {
                case "linksControl":
                    this.dispatchEvent(new P("onlinks_visible_changed"));
                    break;
                case "clickOnRoad":
                    this.dispatchEvent(new P("onclickonroad_changed"));
                    break;
                case "navigationControl":
                    this.dispatchEvent(new P("onnavigation_visible_changed"));
                    break;
                case "indoorSceneSwitchControl":
                    this.dispatchEvent(new P("onindoor_default_switch_mode_changed"));
                    break;
                case "albumsControl":
                    this.dispatchEvent(new P("onalbums_visible_changed"));
                    break;
                case "albumsControlOptions":
                    this.dispatchEvent(new P("onalbums_options_changed"));
                    break;
                case "copyrightControlOptions":
                    this.dispatchEvent(new P("oncopyright_options_changed"));
                    break;
                case "closeControl":
                    this.dispatchEvent(new P("onclose_options_changed"));
                    break;
                case "indoorExitControl":
                    this.dispatchEvent(new P("onindoorexit_options_changed"));
                    break;
                case "indoorFloorControl":
                    this.dispatchEvent(new P("onindoorfloor_options_changed"))
                }
            }
        },
        Bk: function() {
            this.zl.style.visibility = "hidden"
        },
        ly: function() {
            this.zl.style.visibility = "visible"
        },
        tW: function() {
            this.m.enableScrollWheelZoom = p
        },
        VV: function() {
            this.m.enableScrollWheelZoom = t
        },
        show: function() {
            this.m.visible = p
        },
        $: function() {
            this.m.visible = t
        },
        Fq: function() {
            return Wa() && !I() && "javascript" != this.m.panoramaRenderer ? "flashRender" : !I() && Qb() ? "cvsRender" : "cssRender"
        },
        Pa: function(a) {
            this.Ie[a.jd] = a
        },
        Ob: function(a) {
            delete this.Ie[a]
        },
        ex: function() {
            return this.m.visible
        },
        gh: function() {
            return new N(this.R.clientWidth,this.R.clientHeight)
        },
        Ra: x("R"),
        QK: function() {
            var a = D.di("baidumap", "?")
              , b = this.Wb();
            if (b) {
                var b = {
                    panotype: this.Es(),
                    heading: this.Ja().heading,
                    pitch: this.Ja().pitch,
                    pid: b,
                    panoid: b,
                    from: "api"
                }, c;
                for (c in b)
                    a += c + "=" + b[c] + "&"
            }
            return a.slice(0, -1)
        },
        jx: function() {
            this.wj({
                copyrightControlOptions: {
                    logoVisible: t
                }
            })
        },
        eF: function() {
            this.wj({
                copyrightControlOptions: {
                    logoVisible: p
                }
            })
        },
        yB: function(a) {
            function b(a, b) {
                return function() {
                    a.Yq.push({
                        yM: b,
                        xM: arguments
                    })
                }
            }
            for (var c = a.getPanoMethodList(), e = "", f = 0, g = c.length; f < g; f++)
                e = c[f],
                this[e] = b(this, e);
            this.Ug.push(a)
        },
        IE: function(a) {
            for (var b = this.Ug.length; b--; )
                this.Ug[b] === a && this.Ug.splice(b, 1)
        },
        WE: u()
    });
    var lf = Pa.prototype;
    V(lf, {
        setId: lf.Cc,
        setPosition: lf.va,
        setPov: lf.rd,
        setZoom: lf.Qc,
        setOptions: lf.wj,
        getId: lf.Wb,
        getPosition: lf.la,
        getPov: lf.Ja,
        getZoom: lf.ja,
        getLinks: lf.mX,
        getBaiduMapUrl: lf.QK,
        hideMapLogo: lf.jx,
        showMapLogo: lf.eF,
        enableDoubleClickZoom: lf.N2,
        disableDoubleClickZoom: lf.E2,
        enableScrollWheelZoom: lf.tW,
        disableScrollWheelZoom: lf.VV,
        show: lf.show,
        hide: lf.$,
        addPlugin: lf.yB,
        removePlugin: lf.IE,
        getVisible: lf.ex,
        addOverlay: lf.Pa,
        removeOverlay: lf.Ob,
        getSceneType: lf.Es,
        setPanoramaPOIType: lf.Dt,
        exitInter: lf.Io,
        setInteractiveState: lf.WE
    });
    V(window, {
        BMAP_PANORAMA_POI_HOTEL: "hotel",
        BMAP_PANORAMA_POI_CATERING: "catering",
        BMAP_PANORAMA_POI_MOVIE: "movie",
        BMAP_PANORAMA_POI_TRANSIT: "transit",
        BMAP_PANORAMA_POI_INDOOR_SCENE: "indoor_scene",
        BMAP_PANORAMA_POI_NONE: "none",
        BMAP_PANORAMA_INDOOR_SCENE: "inter",
        BMAP_PANORAMA_STREET_SCENE: "street"
    });
    function mf() {
        A.lang.Ha.call(this);
        this.jd = "PanoramaOverlay_" + this.ca;
        this.W = q;
        this.Ua = p
    }
    A.lang.xa(mf, A.lang.Ha, "PanoramaOverlayBase");
    A.extend(mf.prototype, {
        z3: x("jd"),
        ya: function() {
            aa("initialize\u65b9\u6cd5\u672a\u5b9e\u73b0")
        },
        remove: function() {
            aa("remove\u65b9\u6cd5\u672a\u5b9e\u73b0")
        },
        Lf: function() {
            aa("_setOverlayProperty\u65b9\u6cd5\u672a\u5b9e\u73b0")
        }
    });
    function nf(a, b) {
        mf.call(this);
        var c = {
            position: q,
            altitude: 2,
            displayDistance: p
        }, b = b || {}, e;
        for (e in b)
            c[e] = b[e];
        this.Jb = c.position;
        this.Gj = a;
        this.bq = c.altitude;
        this.MQ = c.displayDistance;
        this.nF = c.color;
        this.DL = c.hoverColor;
        this.backgroundColor = c.backgroundColor;
        this.DJ = c.backgroundHoverColor;
        this.borderColor = c.borderColor;
        this.HJ = c.borderHoverColor;
        this.fontSize = c.fontSize;
        this.padding = c.padding;
        this.LD = c.imageUrl;
        this.size = c.size;
        this.we = c.image;
        this.width = c.width;
        this.height = c.height;
        this.eY = c.imageData;
        this.borderWidth = c.borderWidth
    }
    A.lang.xa(nf, mf, "PanoramaLabel");
    A.extend(nf.prototype, {
        d3: x("borderWidth"),
        getImageData: x("eY"),
        pm: x("nF"),
        s3: x("DL"),
        Z2: x("backgroundColor"),
        a3: x("DJ"),
        b3: x("borderColor"),
        c3: x("HJ"),
        q3: x("fontSize"),
        A3: x("padding"),
        t3: x("LD"),
        xb: x("size"),
        Tw: x("we"),
        va: function(a) {
            this.Jb = a;
            this.Lf("position", a)
        },
        la: x("Jb"),
        bd: function(a) {
            this.Gj = a;
            this.Lf("content", a)
        },
        tk: x("Gj"),
        QE: function(a) {
            this.bq = a;
            this.Lf("altitude", a)
        },
        Mo: x("bq"),
        Ja: function() {
            var a = this.la()
              , b = q
              , c = q;
            this.W && (c = this.W.la());
            if (a && c)
                if (a.Sb(c))
                    b = this.W.Ja();
                else {
                    b = {};
                    b.heading = of(a.lng - c.lng, a.lat - c.lat) || 0;
                    var a = b
                      , c = this.Mo()
                      , e = this.Dn();
                    a.pitch = Math.round(180 * (Math.atan(c / e) / Math.PI)) || 0
                }
            return b
        },
        Dn: function() {
            var a = 0, b, c;
            this.W && (b = this.W.la(),
            (c = this.la()) && !c.Sb(b) && (a = T.uk(b, c)));
            return a
        },
        $: function() {
            aa("hide\u65b9\u6cd5\u672a\u5b9e\u73b0")
        },
        show: function() {
            aa("show\u65b9\u6cd5\u672a\u5b9e\u73b0")
        },
        Lf: u()
    });
    var pf = nf.prototype;
    V(pf, {
        setPosition: pf.va,
        getPosition: pf.la,
        setContent: pf.bd,
        getContent: pf.tk,
        setAltitude: pf.QE,
        getAltitude: pf.Mo,
        getPov: pf.Ja,
        show: pf.show,
        hide: pf.$
    });
    function qf(a, b) {
        mf.call(this);
        var c = {
            icon: "",
            title: "",
            panoInfo: q,
            altitude: 2
        }, b = b || {}, e;
        for (e in b)
            c[e] = b[e];
        this.Jb = a;
        this.EH = c.icon;
        this.XI = c.title;
        this.bq = c.altitude;
        this.WS = c.panoInfo;
        this.Ka = {
            heading: 0,
            pitch: 0
        }
    }
    A.lang.xa(qf, mf, "PanoramaMarker");
    A.extend(qf.prototype, {
        va: function(a) {
            this.Jb = a;
            this.Lf("position", a)
        },
        la: x("Jb"),
        Dc: function(a) {
            this.XI = a;
            this.Lf("title", a)
        },
        To: x("XI"),
        Ub: function(a) {
            this.EH = icon;
            this.Lf("icon", a)
        },
        Oo: x("EH"),
        QE: function(a) {
            this.bq = a;
            this.Lf("altitude", a)
        },
        Mo: x("bq"),
        uD: x("WS"),
        Ja: function() {
            var a = q;
            if (this.W) {
                var a = this.W.la()
                  , b = this.la()
                  , a = of(b.lng - a.lng, b.lat - a.lat);
                isNaN(a) && (a = 0);
                a = {
                    heading: a,
                    pitch: 0
                }
            } else
                a = this.Ka;
            return a
        },
        Lf: u()
    });
    var rf = qf.prototype;
    V(rf, {
        setPosition: rf.va,
        getPosition: rf.la,
        setTitle: rf.Dc,
        getTitle: rf.To,
        setAltitude: rf.QE,
        getAltitude: rf.Mo,
        getPanoInfo: rf.uD,
        getIcon: rf.Oo,
        setIcon: rf.Ub,
        getPov: rf.Ja
    });
    function of(a, b) {
        var c = 0;
        if (0 !== a && 0 !== b) {
            var c = 180 * (Math.atan(a / b) / Math.PI)
              , e = 0;
            0 < a && 0 > b && (e = 90);
            0 > a && 0 > b && (e = 180);
            0 > a && 0 < b && (e = 270);
            c = (c + 90) % 90 + e
        } else
            0 === a ? c = 0 > b ? 180 : 0 : 0 === b && (c = 0 < a ? 90 : 270);
        return Math.round(c)
    }
    function Oa(a) {
        if ("boolean" === typeof sf)
            return sf;
        if (a === t || !window.WebGLRenderingContext)
            return sf = t;
        if (A.platform.pj) {
            a = 0;
            try {
                var b = q
                  , c = navigator.userAgent.toLowerCase();
                0 < c.indexOf("android") && (b = (c.match(/android [\d._]+/gi) + "").replace(/[^0-9|_.]/gi, "").replace(/_/gi, "."),
                b = parseInt(b.split(".")[0], 10));
                a = b
            } catch (e) {
                console.error("\u83b7\u53d6\u5b89\u5353\u7248\u672c\u5931\u8d25 => " + e)
            }
            if (5 > a)
                return sf = t
        }
        c = document.createElement("canvas");
        a = q;
        try {
            a = c.getContext("webgl")
        } catch (f) {
            sf = t
        }
        return sf = a === q ? t : p
    }
    var sf;
    function tf() {
        if ("boolean" === typeof uf)
            return uf;
        uf = p;
        if (A.platform.WD)
            return p;
        var a = navigator.userAgent;
        return -1 < a.indexOf("Chrome") || -1 < a.indexOf("SAMSUNG-GT-I9508") ? p : uf = t
    }
    var uf;
    function Mc(a, b) {
        this.W = a || q;
        var c = this;
        c.W && c.ga();
        Ta.load("pservice", function() {
            c.gQ()
        });
        "api" == (b || {}).Se ? Ra(Ha) : Ra(Ia);
        this.yd = {
            getPanoramaById: [],
            getPanoramaByLocation: [],
            getVisiblePOIs: [],
            getRecommendPanosById: [],
            getPanoramaVersions: [],
            checkPanoSupportByCityCode: [],
            getPanoramaByPOIId: [],
            getCopyrightProviders: []
        }
    }
    D.Gk(function(a) {
        "flashRender" !== a.Fq() && new Mc(a,{
            Se: "api"
        })
    });
    A.extend(Mc.prototype, {
        ga: function() {
            function a(a) {
                if (a) {
                    if (a.id != b.Iv) {
                        b.PN(a.id);
                        b.ha = a;
                        tf() || b.dispatchEvent(new P("onthumbnail_complete"));
                        b.fb != q && (b.rl = b._position);
                        for (var c in a)
                            if (a.hasOwnProperty(c))
                                switch (b["_" + c] = a[c],
                                c) {
                                case "position":
                                    b.Jb = a[c];
                                    break;
                                case "id":
                                    b.fb = a[c];
                                    break;
                                case "links":
                                    b.In = a[c];
                                    break;
                                case "zoom":
                                    b.Lc = a[c]
                                }
                        if (b.rl) {
                            var g = b.rl
                              , i = b._position;
                            c = g.lat;
                            var k = i.lat
                              , m = U(k - c)
                              , g = U(i.lng - g.lng);
                            c = Math.sin(m / 2) * Math.sin(m / 2) + Math.cos(U(c)) * Math.cos(U(k)) * Math.sin(g / 2) * Math.sin(g / 2);
                            b.TG = 6371E3 * 2 * Math.atan2(Math.sqrt(c), Math.sqrt(1 - c))
                        }
                        c = new P("ondataload");
                        b.show();
                        c.data = a;
                        b.dispatchEvent(c);
                        b.dispatchEvent(new P("onposition_changed"));
                        b.dispatchEvent(new P("onlinks_changed"));
                        b.dispatchEvent(new P("oncopyright_changed"), {
                            copyright: a.copyright
                        });
                        a.Vl ? (b.wj({
                            haveBreakId: p
                        }),
                        Wa() && b.m.closeControl && A.U.show(b.Iq)) : A.U.$(b.Iq)
                    }
                } else
                    b.fb = b.ql,
                    b.Jb = b.rl,
                    b.dispatchEvent(new P("onnoresult"))
            }
            var b = this.W
              , c = this;
            b.addEventListener("id_changed", function() {
                c.Ro(b.Wb(), a)
            });
            b.addEventListener("iid_changed", function() {
                c.Vg(Mc.al + "qt=idata&iid=" + b.Vz + "&fn=", function(b) {
                    if (b && b.result && 0 == b.result.error) {
                        var b = b.content[0].interinfo
                          , f = {};
                        f.Vl = b.BreakID;
                        for (var g = b.Defaultfloor, i = q, k = 0; k < b.Floors.length; k++)
                            if (b.Floors[k].Floor == g) {
                                i = b.Floors[k];
                                break
                            }
                        f.id = i.StartID || i.Points[0].PID;
                        c.Ro(f.id, a, f)
                    }
                })
            });
            b.addEventListener("position_changed_inner", function() {
                c.ij(b.la(), a)
            })
        },
        Ro: function(a, b) {
            this.yd.getPanoramaById.push(arguments)
        },
        ij: function(a, b, c) {
            this.yd.getPanoramaByLocation.push(arguments)
        },
        FD: function(a, b, c, e) {
            this.yd.getVisiblePOIs.push(arguments)
        },
        bx: function(a, b) {
            this.yd.getRecommendPanosById.push(arguments)
        },
        ax: function(a) {
            this.yd.getPanoramaVersions.push(arguments)
        },
        LB: function(a, b) {
            this.yd.checkPanoSupportByCityCode.push(arguments)
        },
        $w: function(a, b) {
            this.yd.getPanoramaByPOIId.push(arguments)
        },
        UK: function(a) {
            this.yd.getCopyrightProviders.push(arguments)
        }
    });
    var vf = Mc.prototype;
    V(vf, {
        getPanoramaById: vf.Ro,
        getPanoramaByLocation: vf.ij,
        getPanoramaByPOIId: vf.$w
    });
    function Lc(a) {
        ud.call(this);
        "api" == (a || {}).Se ? Ra(Ba) : Ra(Ca)
    }
    Lc.mG = D.di("pano", "tile/");
    Lc.prototype = new ud;
    Lc.prototype.getTilesUrl = function(a, b) {
        var c = Lc.mG[(a.x + a.y) % Lc.mG.length] + "?udt=20150114&qt=tile&styles=pl&x=" + a.x + "&y=" + a.y + "&z=" + b;
        A.fa.na && 6 >= A.fa.na && (c += "&color_dep=32");
        return c
    }
    ;
    Lc.prototype.Vs = da(p);
    wf.Vd = new T;
    function wf() {}
    A.extend(wf, {
        WV: function(a, b, c) {
            c = A.lang.Nc(c);
            b = {
                data: b
            };
            "position_changed" == a && (b.data = wf.Vd.vj(new R(b.data.mercatorX,b.data.mercatorY)));
            c.dispatchEvent(new P("on" + a), b)
        }
    });
    var xf = wf;
    V(xf, {
        dispatchFlashEvent: xf.WV
    });
    var yf = {
        dP: 50
    };
    yf.ou = D.di("pano")[0];
    yf.mu = {
        width: 220,
        height: 60
    };
    A.extend(yf, {
        ML: function(a, b, c, e) {
            if (!b || !c || !c.lngLat || !c.panoInstance)
                e();
            else {
                this.Pn === l && (this.Pn = new Mc(q,{
                    Se: "api"
                }));
                var f = this;
                this.Pn.LB(b, function(b) {
                    b ? f.Pn.ij(c.lngLat, yf.dP, function(b) {
                        if (b && b.id) {
                            var g = b.id
                              , m = b.ph
                              , b = b.qh
                              , n = Mc.Vd.zg(c.lngLat)
                              , o = f.JR(n, {
                                x: m,
                                y: b
                            })
                              , m = f.eL(g, o, 0, yf.mu.width, yf.mu.height);
                            a.content = f.KR(a.content, m, c.titleTip, c.beforeDomId);
                            a.addEventListener("open", function() {
                                ia.V(A.Ec("infoWndPano"), "click", function() {
                                    c.panoInstance.Cc(g);
                                    c.panoInstance.show();
                                    c.panoInstance.rd({
                                        heading: o,
                                        pitch: 0
                                    })
                                })
                            })
                        }
                        e()
                    }) : e()
                })
            }
        },
        KR: function(a, b, c, e) {
            var c = c || "", f;
            !e || !a.split(e)[0] ? (e = a,
            a = "") : (e = a.split(e)[0],
            f = e.lastIndexOf("<"),
            e = a.substring(0, f),
            a = a.substring(f));
            f = [];
            var g = yf.mu.width
              , i = yf.mu.height;
            f.push(e);
            f.push("<div id='infoWndPano' class='panoInfoBox' style='height:" + i + "px;width:" + g + "px; margin-top: -19px;'>");
            f.push("<img class='pano_thumnail_img' width='" + g + "' height='" + i + "' border='0' alt='" + c + "\u5916\u666f' title='" + c + "\u5916\u666f' src='" + b + "' onerror='Pano.PanoEntranceUtil.thumbnailNotFound(this, " + g + ", " + i + ");' />");
            f.push("<div class='panoInfoBoxTitleBg' style='width:" + g + "px;'></div><a href='javascript:void(0)' class='panoInfoBoxTitleContent' >\u8fdb\u5165\u5168\u666f&gt;&gt;</a>");
            f.push("</div>");
            f.push(a);
            return f.join("")
        },
        JR: function(a, b) {
            var c = 90 - 180 * Math.atan2(a.y - b.y, a.x - b.x) / Math.PI;
            0 > c && (c += 360);
            return c
        },
        eL: function(a, b, c, e, f) {
            var g = {
                panoId: a,
                panoHeading: b || 0,
                panoPitch: c || 0,
                width: e,
                height: f
            };
            return (yf.ou + "?qt=pr3d&fovy=75&quality=80&panoid={panoId}&heading={panoHeading}&pitch={panoPitch}&width={width}&height={height}").replace(/\{(.*?)\}/g, function(a, b) {
                return g[b]
            })
        }
    });
    var zf = document, Af = Math, Bf = zf.createElement("div").style, Cf;
    a: {
        for (var Df = ["t", "webkitT", "MozT", "msT", "OT"], Ef, Ff = 0, Gf = Df.length; Ff < Gf; Ff++)
            if (Ef = Df[Ff] + "ransform",
            Ef in Bf) {
                Cf = Df[Ff].substr(0, Df[Ff].length - 1);
                break a
            }
        Cf = t
    }
    var Hf = Cf ? "-" + Cf.toLowerCase() + "-" : ""
      , Jf = If("transform")
      , Kf = If("transitionProperty")
      , Lf = If("transitionDuration")
      , Mf = If("transformOrigin")
      , Nf = If("transitionTimingFunction")
      , Of = If("transitionDelay")
      , Ze = /android/gi.test(navigator.appVersion)
      , Pf = /iphone|ipad/gi.test(navigator.appVersion)
      , Qf = /hp-tablet/gi.test(navigator.appVersion)
      , Rf = If("perspective")in Bf
      , Sf = "ontouchstart"in window && !Qf
      , Tf = Cf !== t
      , Uf = If("transition")in Bf
      , Vf = "onorientationchange"in window ? "orientationchange" : "resize"
      , Wf = Sf ? "touchstart" : "mousedown"
      , Xf = Sf ? "touchmove" : "mousemove"
      , Yf = Sf ? "touchend" : "mouseup"
      , Zf = Sf ? "touchcancel" : "mouseup"
      , $f = Cf === t ? t : {
        "": "transitionend",
        webkit: "webkitTransitionEnd",
        Moz: "transitionend",
        O: "otransitionend",
        ms: "MSTransitionEnd"
    }[Cf]
      , ag = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(a) {
        return setTimeout(a, 1)
    }
      , cg = window.cancelRequestAnimationFrame || window.j6 || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout
      , dg = Rf ? " translateZ(0)" : "";
    function eg(a, b) {
        var c = this, e;
        c.Ym = "object" == typeof a ? a : zf.getElementById(a);
        c.Ym.style.overflow = "hidden";
        c.Pb = c.Ym.children[0];
        c.options = {
            Xo: p,
            Vm: p,
            x: 0,
            y: 0,
            so: p,
            RU: t,
            Ex: p,
            jE: p,
            Uk: p,
            wi: t,
            c0: 0,
            lw: t,
            gx: p,
            ei: p,
            xi: p,
            UC: Ze,
            kx: Pf,
            BW: Pf && Rf,
            NE: "",
            zoom: t,
            Wk: 1,
            Lp: 4,
            YV: 2,
            JO: "scroll",
            Mt: t,
            oy: 1,
            QM: q,
            IM: function(a) {
                a.preventDefault()
            },
            TM: q,
            HM: q,
            SM: q,
            GM: q,
            Kx: q,
            UM: q,
            LM: q,
            jp: q,
            VM: q,
            ip: q
        };
        for (e in b)
            c.options[e] = b[e];
        c.x = c.options.x;
        c.y = c.options.y;
        c.options.Uk = Tf && c.options.Uk;
        c.options.ei = c.options.Xo && c.options.ei;
        c.options.xi = c.options.Vm && c.options.xi;
        c.options.zoom = c.options.Uk && c.options.zoom;
        c.options.wi = Uf && c.options.wi;
        c.options.zoom && Ze && (dg = "");
        c.Pb.style[Kf] = c.options.Uk ? Hf + "transform" : "top left";
        c.Pb.style[Lf] = "0";
        c.Pb.style[Mf] = "0 0";
        c.options.wi && (c.Pb.style[Nf] = "cubic-bezier(0.33,0.66,0.66,1)");
        c.options.Uk ? c.Pb.style[Jf] = "translate(" + c.x + "px," + c.y + "px)" + dg : c.Pb.style.cssText += ";position:absolute;top:" + c.y + "px;left:" + c.x + "px";
        c.options.wi && (c.options.UC = p);
        c.refresh();
        c.ga(Vf, window);
        c.ga(Wf);
        !Sf && "none" != c.options.JO && (c.ga("DOMMouseScroll"),
        c.ga("mousewheel"));
        c.options.lw && (c.dV = setInterval(function() {
            c.eQ()
        }, 500));
        this.options.gx && (Event.prototype.stopImmediatePropagation || (document.body.removeEventListener = function(a, b, c) {
            var e = Node.prototype.removeEventListener;
            a === "click" ? e.call(document.body, a, b.CL || b, c) : e.call(document.body, a, b, c)
        }
        ,
        document.body.addEventListener = function(a, b, c) {
            var e = Node.prototype.addEventListener;
            a === "click" ? e.call(document.body, a, b.CL || (b.CL = function(a) {
                a.GZ || b(a)
            }
            ), c) : e.call(document.body, a, b, c)
        }
        ),
        c.ga("click", document.body, p))
    }
    eg.prototype = {
        enabled: p,
        x: 0,
        y: 0,
        xj: [],
        scale: 1,
        aC: 0,
        bC: 0,
        Xe: [],
        rf: [],
        FB: q,
        Ay: 0,
        handleEvent: function(a) {
            switch (a.type) {
            case Wf:
                if (!Sf && 0 !== a.button)
                    break;
                this.Bv(a);
                break;
            case Xf:
                this.GS(a);
                break;
            case Yf:
            case Zf:
                this.Lu(a);
                break;
            case Vf:
                this.UA();
                break;
            case "DOMMouseScroll":
            case "mousewheel":
                this.kU(a);
                break;
            case $f:
                this.hU(a);
                break;
            case "click":
                this.oQ(a)
            }
        },
        eQ: function() {
            !this.oh && (!this.Xk && !(this.Sl || this.dy == this.Pb.offsetWidth * this.scale && this.sp == this.Pb.offsetHeight * this.scale)) && this.refresh()
        },
        sv: function(a) {
            var b;
            this[a + "Scrollbar"] ? (this[a + "ScrollbarWrapper"] || (b = zf.createElement("div"),
            this.options.NE ? b.className = this.options.NE + a.toUpperCase() : b.style.cssText = "position:absolute;z-index:100;" + ("h" == a ? "height:7px;bottom:1px;left:2px;right:" + (this.xi ? "7" : "2") + "px" : "width:7px;bottom:" + (this.ei ? "7" : "2") + "px;top:2px;right:1px"),
            b.style.cssText += ";pointer-events:none;" + Hf + "transition-property:opacity;" + Hf + "transition-duration:" + (this.options.BW ? "350ms" : "0") + ";overflow:hidden;opacity:" + (this.options.kx ? "0" : "1"),
            this.Ym.appendChild(b),
            this[a + "ScrollbarWrapper"] = b,
            b = zf.createElement("div"),
            this.options.NE || (b.style.cssText = "position:absolute;z-index:100;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);" + Hf + "background-clip:padding-box;" + Hf + "box-sizing:border-box;" + ("h" == a ? "height:100%" : "width:100%") + ";" + Hf + "border-radius:3px;border-radius:3px"),
            b.style.cssText += ";pointer-events:none;" + Hf + "transition-property:" + Hf + "transform;" + Hf + "transition-timing-function:cubic-bezier(0.33,0.66,0.66,1);" + Hf + "transition-duration:0;" + Hf + "transform: translate(0,0)" + dg,
            this.options.wi && (b.style.cssText += ";" + Hf + "transition-timing-function:cubic-bezier(0.33,0.66,0.66,1)"),
            this[a + "ScrollbarWrapper"].appendChild(b),
            this[a + "ScrollbarIndicator"] = b),
            "h" == a ? (this.yL = this.zL.clientWidth,
            this.WX = Af.max(Af.round(this.yL * this.yL / this.dy), 8),
            this.VX.style.width = this.WX + "px") : (this.BO = this.CO.clientHeight,
            this.y0 = Af.max(Af.round(this.BO * this.BO / this.sp), 8),
            this.x0.style.height = this.y0 + "px"),
            this.VA(a, p)) : this[a + "ScrollbarWrapper"] && (Tf && (this[a + "ScrollbarIndicator"].style[Jf] = ""),
            this[a + "ScrollbarWrapper"].parentNode.removeChild(this[a + "ScrollbarWrapper"]),
            this[a + "ScrollbarWrapper"] = q,
            this[a + "ScrollbarIndicator"] = q)
        },
        UA: function() {
            var a = this;
            setTimeout(function() {
                a.refresh()
            }, Ze ? 200 : 0)
        },
        br: function(a, b) {
            this.Xk || (a = this.Xo ? a : 0,
            b = this.Vm ? b : 0,
            this.options.Uk ? this.Pb.style[Jf] = "translate(" + a + "px," + b + "px) scale(" + this.scale + ")" + dg : (a = Af.round(a),
            b = Af.round(b),
            this.Pb.style.left = a + "px",
            this.Pb.style.top = b + "px"),
            this.x = a,
            this.y = b,
            this.VA("h"),
            this.VA("v"))
        },
        VA: function(a, b) {
            var c = "h" == a ? this.x : this.y;
            this[a + "Scrollbar"] && (c *= this[a + "ScrollbarProp"],
            0 > c ? (this.options.UC || (c = this[a + "ScrollbarIndicatorSize"] + Af.round(3 * c),
            8 > c && (c = 8),
            this[a + "ScrollbarIndicator"].style["h" == a ? "width" : "height"] = c + "px"),
            c = 0) : c > this[a + "ScrollbarMaxScroll"] && (this.options.UC ? c = this[a + "ScrollbarMaxScroll"] : (c = this[a + "ScrollbarIndicatorSize"] - Af.round(3 * (c - this[a + "ScrollbarMaxScroll"])),
            8 > c && (c = 8),
            this[a + "ScrollbarIndicator"].style["h" == a ? "width" : "height"] = c + "px",
            c = this[a + "ScrollbarMaxScroll"] + (this[a + "ScrollbarIndicatorSize"] - c))),
            this[a + "ScrollbarWrapper"].style[Of] = "0",
            this[a + "ScrollbarWrapper"].style.opacity = b && this.options.kx ? "0" : "1",
            this[a + "ScrollbarIndicator"].style[Jf] = "translate(" + ("h" == a ? c + "px,0)" : "0," + c + "px)") + dg)
        },
        oQ: function(a) {
            if (a.eR === p)
                return this.uB = a.target,
                this.Lw = Date.now(),
                p;
            if (this.uB && this.Lw) {
                if (600 < Date.now() - this.Lw)
                    return this.Lw = this.uB = q,
                    p
            } else {
                for (var b = a.target; b != this.Pb && b != document.body; )
                    b = b.parentNode;
                if (b == document.body)
                    return p
            }
            for (b = a.target; 1 != b.nodeType; )
                b = b.parentNode;
            b = b.tagName.toLowerCase();
            if ("select" != b && "input" != b && "textarea" != b)
                return a.stopImmediatePropagation ? a.stopImmediatePropagation() : a.GZ = p,
                a.stopPropagation(),
                a.preventDefault(),
                this.Lw = this.uB = q,
                t
        },
        Bv: function(a) {
            var b = Sf ? a.touches[0] : a, c, e;
            if (this.enabled) {
                this.options.IM && this.options.IM.call(this, a);
                (this.options.wi || this.options.zoom) && this.ZI(0);
                this.Xk = this.Sl = this.oh = t;
                this.kC = this.jC = this.Uv = this.Tv = this.qC = this.pC = 0;
                this.options.zoom && (Sf && 1 < a.touches.length) && (e = Af.abs(a.touches[0].pageX - a.touches[1].pageX),
                c = Af.abs(a.touches[0].pageY - a.touches[1].pageY),
                this.e0 = Af.sqrt(e * e + c * c),
                this.Mx = Af.abs(a.touches[0].pageX + a.touches[1].pageX - 2 * this.FF) / 2 - this.x,
                this.Nx = Af.abs(a.touches[0].pageY + a.touches[1].pageY - 2 * this.GF) / 2 - this.y,
                this.options.jp && this.options.jp.call(this, a));
                if (this.options.Ex && (this.options.Uk ? (c = getComputedStyle(this.Pb, q)[Jf].replace(/[^0-9\-.,]/g, "").split(","),
                e = +(c[12] || c[4]),
                c = +(c[13] || c[5])) : (e = +getComputedStyle(this.Pb, q).left.replace(/[^0-9-]/g, ""),
                c = +getComputedStyle(this.Pb, q).top.replace(/[^0-9-]/g, "")),
                e != this.x || c != this.y))
                    this.options.wi ? this.Zd($f) : cg(this.FB),
                    this.xj = [],
                    this.br(e, c),
                    this.options.Kx && this.options.Kx.call(this);
                this.Vv = this.x;
                this.Wv = this.y;
                this.Qt = this.x;
                this.Rt = this.y;
                this.ph = b.pageX;
                this.qh = b.pageY;
                this.startTime = a.timeStamp || Date.now();
                this.options.TM && this.options.TM.call(this, a);
                this.ga(Xf, window);
                this.ga(Yf, window);
                this.ga(Zf, window)
            }
        },
        GS: function(a) {
            var b = Sf ? a.touches[0] : a
              , c = b.pageX - this.ph
              , e = b.pageY - this.qh
              , f = this.x + c
              , g = this.y + e
              , i = a.timeStamp || Date.now();
            this.options.HM && this.options.HM.call(this, a);
            if (this.options.zoom && Sf && 1 < a.touches.length)
                f = Af.abs(a.touches[0].pageX - a.touches[1].pageX),
                g = Af.abs(a.touches[0].pageY - a.touches[1].pageY),
                this.d0 = Af.sqrt(f * f + g * g),
                this.Xk = p,
                b = 1 / this.e0 * this.d0 * this.scale,
                b < this.options.Wk ? b = 0.5 * this.options.Wk * Math.pow(2, b / this.options.Wk) : b > this.options.Lp && (b = 2 * this.options.Lp * Math.pow(0.5, this.options.Lp / b)),
                this.cp = b / this.scale,
                f = this.Mx - this.Mx * this.cp + this.x,
                g = this.Nx - this.Nx * this.cp + this.y,
                this.Pb.style[Jf] = "translate(" + f + "px," + g + "px) scale(" + b + ")" + dg,
                this.options.VM && this.options.VM.call(this, a);
            else {
                this.ph = b.pageX;
                this.qh = b.pageY;
                if (0 < f || f < this.he)
                    f = this.options.so ? this.x + c / 2 : 0 <= f || 0 <= this.he ? 0 : this.he;
                if (g > this.pf || g < this.qd)
                    g = this.options.so ? this.y + e / 2 : g >= this.pf || 0 <= this.qd ? this.pf : this.qd;
                this.pC += c;
                this.qC += e;
                this.Tv = Af.abs(this.pC);
                this.Uv = Af.abs(this.qC);
                6 > this.Tv && 6 > this.Uv || (this.options.jE && (this.Tv > this.Uv + 5 ? (g = this.y,
                e = 0) : this.Uv > this.Tv + 5 && (f = this.x,
                c = 0)),
                this.oh = p,
                this.br(f, g),
                this.jC = 0 < c ? -1 : 0 > c ? 1 : 0,
                this.kC = 0 < e ? -1 : 0 > e ? 1 : 0,
                300 < i - this.startTime && (this.startTime = i,
                this.Qt = this.x,
                this.Rt = this.y),
                this.options.SM && this.options.SM.call(this, a))
            }
        },
        Lu: function(a) {
            if (!(Sf && 0 !== a.touches.length)) {
                var b = this, c = Sf ? a.changedTouches[0] : a, e, f, g = {
                    Ga: 0,
                    time: 0
                }, i = {
                    Ga: 0,
                    time: 0
                }, k = (a.timeStamp || Date.now()) - b.startTime;
                e = b.x;
                f = b.y;
                b.Zd(Xf, window);
                b.Zd(Yf, window);
                b.Zd(Zf, window);
                b.options.GM && b.options.GM.call(b, a);
                if (b.Xk)
                    e = b.scale * b.cp,
                    e = Math.max(b.options.Wk, e),
                    e = Math.min(b.options.Lp, e),
                    b.cp = e / b.scale,
                    b.scale = e,
                    b.x = b.Mx - b.Mx * b.cp + b.x,
                    b.y = b.Nx - b.Nx * b.cp + b.y,
                    b.Pb.style[Lf] = "200ms",
                    b.Pb.style[Jf] = "translate(" + b.x + "px," + b.y + "px) scale(" + b.scale + ")" + dg,
                    b.Xk = t,
                    b.refresh(),
                    b.options.ip && b.options.ip.call(b, a);
                else {
                    if (b.oh) {
                        if (300 > k && b.options.Ex) {
                            g = e ? b.UH(e - b.Qt, k, -b.x, b.dy - b.du + b.x, b.options.so ? b.du : 0) : g;
                            i = f ? b.UH(f - b.Rt, k, -b.y, 0 > b.qd ? b.sp - b.Zm + b.y - b.pf : 0, b.options.so ? b.Zm : 0) : i;
                            e = b.x + g.Ga;
                            f = b.y + i.Ga;
                            if (0 < b.x && 0 < e || b.x < b.he && e < b.he)
                                g = {
                                    Ga: 0,
                                    time: 0
                                };
                            if (b.y > b.pf && f > b.pf || b.y < b.qd && f < b.qd)
                                i = {
                                    Ga: 0,
                                    time: 0
                                }
                        }
                        g.Ga || i.Ga ? (c = Af.max(Af.max(g.time, i.time), 10),
                        b.options.Mt && (g = e - b.Vv,
                        i = f - b.Wv,
                        Af.abs(g) < b.options.oy && Af.abs(i) < b.options.oy ? b.scrollTo(b.Vv, b.Wv, 200) : (g = b.OI(e, f),
                        e = g.x,
                        f = g.y,
                        c = Af.max(g.time, c))),
                        b.scrollTo(Af.round(e), Af.round(f), c)) : b.options.Mt ? (g = e - b.Vv,
                        i = f - b.Wv,
                        Af.abs(g) < b.options.oy && Af.abs(i) < b.options.oy ? b.scrollTo(b.Vv, b.Wv, 200) : (g = b.OI(b.x, b.y),
                        (g.x != b.x || g.y != b.y) && b.scrollTo(g.x, g.y, g.time))) : b.Sn(200)
                    } else {
                        if (Sf)
                            if (b.lK && b.options.zoom)
                                clearTimeout(b.lK),
                                b.lK = q,
                                b.options.jp && b.options.jp.call(b, a),
                                b.zoom(b.ph, b.qh, 1 == b.scale ? b.options.YV : 1),
                                b.options.ip && setTimeout(function() {
                                    b.options.ip.call(b, a)
                                }, 200);
                            else if (this.options.gx) {
                                for (e = c.target; 1 != e.nodeType; )
                                    e = e.parentNode;
                                f = e.tagName.toLowerCase();
                                "select" != f && "input" != f && "textarea" != f ? (f = zf.createEvent("MouseEvents"),
                                f.initMouseEvent("click", p, p, a.view, 1, c.screenX, c.screenY, c.clientX, c.clientY, a.ctrlKey, a.altKey, a.shiftKey, a.metaKey, 0, q),
                                f.eR = p,
                                e.dispatchEvent(f)) : e.focus()
                            }
                        b.Sn(400)
                    }
                    b.options.UM && b.options.UM.call(b, a)
                }
            }
        },
        Sn: function(a) {
            var b = 0 <= this.x ? 0 : this.x < this.he ? this.he : this.x
              , c = this.y >= this.pf || 0 < this.qd ? this.pf : this.y < this.qd ? this.qd : this.y;
            if (b == this.x && c == this.y) {
                if (this.oh && (this.oh = t,
                this.options.Kx && this.options.Kx.call(this)),
                this.ei && this.options.kx && ("webkit" == Cf && (this.zL.style[Of] = "300ms"),
                this.zL.style.opacity = "0"),
                this.xi && this.options.kx)
                    "webkit" == Cf && (this.CO.style[Of] = "300ms"),
                    this.CO.style.opacity = "0"
            } else
                this.scrollTo(b, c, a || 0)
        },
        kU: function(a) {
            var b = this, c, e;
            if ("wheelDeltaX"in a)
                c = a.wheelDeltaX / 12,
                e = a.wheelDeltaY / 12;
            else if ("wheelDelta"in a)
                c = e = a.wheelDelta / 12;
            else if ("detail"in a)
                c = e = 3 * -a.detail;
            else
                return;
            if ("zoom" == b.options.JO) {
                if (e = b.scale * Math.pow(2, 1 / 3 * (e ? e / Math.abs(e) : 0)),
                e < b.options.Wk && (e = b.options.Wk),
                e > b.options.Lp && (e = b.options.Lp),
                e != b.scale)
                    !b.Ay && b.options.jp && b.options.jp.call(b, a),
                    b.Ay++,
                    b.zoom(a.pageX, a.pageY, e, 400),
                    setTimeout(function() {
                        b.Ay--;
                        !b.Ay && b.options.ip && b.options.ip.call(b, a)
                    }, 400)
            } else
                c = b.x + c,
                e = b.y + e,
                0 < c ? c = 0 : c < b.he && (c = b.he),
                e > b.pf ? e = b.pf : e < b.qd && (e = b.qd),
                0 > b.qd && b.scrollTo(c, e, 0)
        },
        hU: function(a) {
            a.target == this.Pb && (this.Zd($f),
            this.gB())
        },
        gB: function() {
            var a = this, b = a.x, c = a.y, e = Date.now(), f, g, i;
            a.Sl || (a.xj.length ? (f = a.xj.shift(),
            f.x == b && f.y == c && (f.time = 0),
            a.Sl = p,
            a.oh = p,
            a.options.wi) ? (a.ZI(f.time),
            a.br(f.x, f.y),
            a.Sl = t,
            f.time ? a.ga($f) : a.Sn(0)) : (i = function() {
                var k = Date.now(), m;
                if (k >= e + f.time) {
                    a.br(f.x, f.y);
                    a.Sl = t;
                    a.options.gZ && a.options.gZ.call(a);
                    a.gB()
                } else {
                    k = (k - e) / f.time - 1;
                    g = Af.sqrt(1 - k * k);
                    k = (f.x - b) * g + b;
                    m = (f.y - c) * g + c;
                    a.br(k, m);
                    if (a.Sl)
                        a.FB = ag(i)
                }
            }
            ,
            i()) : a.Sn(400))
        },
        ZI: function(a) {
            a += "ms";
            this.Pb.style[Lf] = a;
            this.ei && (this.VX.style[Lf] = a);
            this.xi && (this.x0.style[Lf] = a)
        },
        UH: function(a, b, c, e, f) {
            var b = Af.abs(a) / b
              , g = b * b / 0.0012;
            0 < a && g > c ? (c += f / (6 / (6.0E-4 * (g / b))),
            b = b * c / g,
            g = c) : 0 > a && g > e && (e += f / (6 / (6.0E-4 * (g / b))),
            b = b * e / g,
            g = e);
            return {
                Ga: g * (0 > a ? -1 : 1),
                time: Af.round(b / 6.0E-4)
            }
        },
        Wj: function(a) {
            for (var b = -a.offsetLeft, c = -a.offsetTop; a = a.offsetParent; )
                b -= a.offsetLeft,
                c -= a.offsetTop;
            a != this.Ym && (b *= this.scale,
            c *= this.scale);
            return {
                left: b,
                top: c
            }
        },
        OI: function(a, b) {
            var c, e, f;
            f = this.Xe.length - 1;
            c = 0;
            for (e = this.Xe.length; c < e; c++)
                if (a >= this.Xe[c]) {
                    f = c;
                    break
                }
            f == this.aC && (0 < f && 0 > this.jC) && f--;
            a = this.Xe[f];
            e = (e = Af.abs(a - this.Xe[this.aC])) ? 500 * (Af.abs(this.x - a) / e) : 0;
            this.aC = f;
            f = this.rf.length - 1;
            for (c = 0; c < f; c++)
                if (b >= this.rf[c]) {
                    f = c;
                    break
                }
            f == this.bC && (0 < f && 0 > this.kC) && f--;
            b = this.rf[f];
            c = (c = Af.abs(b - this.rf[this.bC])) ? 500 * (Af.abs(this.y - b) / c) : 0;
            this.bC = f;
            f = Af.round(Af.max(e, c)) || 200;
            return {
                x: a,
                y: b,
                time: f
            }
        },
        ga: function(a, b, c) {
            (b || this.Pb).addEventListener(a, this, !!c)
        },
        Zd: function(a, b, c) {
            (b || this.Pb).removeEventListener(a, this, !!c)
        },
        hC: ga(2),
        refresh: function() {
            var a, b, c, e = 0;
            b = 0;
            this.scale < this.options.Wk && (this.scale = this.options.Wk);
            this.du = this.Ym.clientWidth || 1;
            this.Zm = this.Ym.clientHeight || 1;
            this.pf = -this.options.c0 || 0;
            this.dy = Af.round(this.Pb.offsetWidth * this.scale);
            this.sp = Af.round((this.Pb.offsetHeight + this.pf) * this.scale);
            this.he = this.du - this.dy;
            this.qd = this.Zm - this.sp + this.pf;
            this.kC = this.jC = 0;
            this.options.QM && this.options.QM.call(this);
            this.Xo = this.options.Xo && 0 > this.he;
            this.Vm = this.options.Vm && (!this.options.RU && !this.Xo || this.sp > this.Zm);
            this.ei = this.Xo && this.options.ei;
            this.xi = this.Vm && this.options.xi && this.sp > this.Zm;
            a = this.Wj(this.Ym);
            this.FF = -a.left;
            this.GF = -a.top;
            if ("string" == typeof this.options.Mt) {
                this.Xe = [];
                this.rf = [];
                c = this.Pb.querySelectorAll(this.options.Mt);
                a = 0;
                for (b = c.length; a < b; a++)
                    e = this.Wj(c[a]),
                    e.left += this.FF,
                    e.top += this.GF,
                    this.Xe[a] = e.left < this.he ? this.he : e.left * this.scale,
                    this.rf[a] = e.top < this.qd ? this.qd : e.top * this.scale
            } else if (this.options.Mt) {
                for (this.Xe = []; e >= this.he; )
                    this.Xe[b] = e,
                    e -= this.du,
                    b++;
                this.he % this.du && (this.Xe[this.Xe.length] = this.he - this.Xe[this.Xe.length - 1] + this.Xe[this.Xe.length - 1]);
                b = e = 0;
                for (this.rf = []; e >= this.qd; )
                    this.rf[b] = e,
                    e -= this.Zm,
                    b++;
                this.qd % this.Zm && (this.rf[this.rf.length] = this.qd - this.rf[this.rf.length - 1] + this.rf[this.rf.length - 1])
            }
            this.sv("h");
            this.sv("v");
            this.Xk || (this.Pb.style[Lf] = "0",
            this.Sn(400))
        },
        scrollTo: function(a, b, c, e) {
            var f = a;
            this.stop();
            f.length || (f = [{
                x: a,
                y: b,
                time: c,
                IZ: e
            }]);
            a = 0;
            for (b = f.length; a < b; a++)
                f[a].IZ && (f[a].x = this.x - f[a].x,
                f[a].y = this.y - f[a].y),
                this.xj.push({
                    x: f[a].x,
                    y: f[a].y,
                    time: f[a].time || 0
                });
            this.gB()
        },
        disable: function() {
            this.stop();
            this.Sn(0);
            this.enabled = t;
            this.Zd(Xf, window);
            this.Zd(Yf, window);
            this.Zd(Zf, window)
        },
        enable: function() {
            this.enabled = p
        },
        stop: function() {
            this.options.wi ? this.Zd($f) : cg(this.FB);
            this.xj = [];
            this.Sl = this.oh = t
        },
        zoom: function(a, b, c, e) {
            var f = c / this.scale;
            this.options.Uk && (this.Xk = p,
            e = e === l ? 200 : e,
            a = a - this.FF - this.x,
            b = b - this.GF - this.y,
            this.x = a - a * f + this.x,
            this.y = b - b * f + this.y,
            this.scale = c,
            this.refresh(),
            this.x = 0 < this.x ? 0 : this.x < this.he ? this.he : this.x,
            this.y = this.y > this.pf ? this.pf : this.y < this.qd ? this.qd : this.y,
            this.Pb.style[Lf] = e + "ms",
            this.Pb.style[Jf] = "translate(" + this.x + "px," + this.y + "px) scale(" + c + ")" + dg,
            this.Xk = t)
        }
    };
    function If(a) {
        if ("" === Cf)
            return a;
        a = a.charAt(0).toUpperCase() + a.substr(1);
        return Cf + a
    }
    Bf = q;
    function fg(a) {
        this.m = {
            anchor: Fc,
            offset: new N(0,0),
            maxWidth: "100%",
            imageHeight: 80
        };
        var a = a || {}, b;
        for (b in a)
            this.m[b] = a[b];
        this.Hl = new Mc(q,{
            Se: "api"
        });
        this.Yj = [];
        this.W = q;
        this.fg = {
            height: this.m.imageHeight,
            width: this.m.imageHeight * gg
        };
        this.Rc = this.WA = this.Vl = this.Xc = q
    }
    var hg = [0, 1, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 4, 5, 5, 5, 6, 6, 7, 8, 8, 8, 9, 10]
      , ig = "\u5176\u4ed6 \u6b63\u95e8 \u623f\u578b \u8bbe\u65bd \u6b63\u95e8 \u9910\u996e\u8bbe\u65bd \u5176\u4ed6\u8bbe\u65bd \u6b63\u95e8 \u8bbe\u65bd \u89c2\u5f71\u5385 \u5176\u4ed6\u8bbe\u65bd".split(" ");
    D.Gk(function(a) {
        var b = q;
        a.addEventListener("position_changed", function() {
            a.m.visible && a.m.albumsControl === p && (b ? b.Yx(a.Wb()) : (b = new fg(a.m.albumsControlOptions),
            b.ya(a)))
        });
        a.addEventListener("albums_visible_changed", function() {
            a.m.albumsControl === p ? (b ? b.Yx(a.Wb()) : (b = new fg(a.m.albumsControlOptions),
            b.ya(a)),
            b.show()) : b.$()
        });
        a.addEventListener("albums_options_changed", function() {
            b && b.wj(a.m.albumsControlOptions)
        });
        a.addEventListener("visible_changed", function() {
            b && (a.ex() ? a.m.albumsControl === p && (b.R.style.visibility = "visible") : b.R.style.visibility = "hidden")
        })
    });
    var gg = 1.8;
    I() && (gg = 1);
    A.extend(fg.prototype, {
        wj: function(a) {
            for (var b in a)
                this.m[b] = a[b];
            a = this.m.imageHeight + "px";
            this.rc(this.m.anchor);
            this.R.style.width = isNaN(Number(this.m.maxWidth)) === p ? this.m.maxWidth : this.m.maxWidth + "px";
            this.R.style.height = a;
            this.dk.style.height = a;
            this.Oh.style.height = a;
            this.fg = {
                height: this.m.imageHeight,
                width: this.m.imageHeight * gg
            };
            this.ck.style.height = this.fg.height - 6 + "px";
            this.ck.style.width = this.fg.width - 6 + "px";
            this.Yx(this.W.Wb(), p)
        },
        ya: function(a) {
            this.W = a;
            this.Or();
            this.NP();
            this.mY();
            this.Yx(a.Wb())
        },
        Or: function() {
            var a = this.m.imageHeight + "px";
            this.R = L("div");
            var b = this.R.style;
            b.cssText = "background:rgb(37,37,37);background:rgba(37,37,37,0.9);";
            b.position = "absolute";
            b.zIndex = "2000";
            b.width = isNaN(Number(this.m.maxWidth)) === p ? this.m.maxWidth : this.m.maxWidth + "px";
            b.padding = "8px 0";
            b.visibility = "hidden";
            b.height = a;
            this.dk = L("div");
            b = this.dk.style;
            b.position = "absolute";
            b.overflow = "hidden";
            b.width = "100%";
            b.height = a;
            this.Oh = L("div");
            b = this.Oh.style;
            b.height = a;
            this.dk.appendChild(this.Oh);
            this.R.appendChild(this.dk);
            this.W.R.appendChild(this.R);
            this.ck = L("div", {
                "class": "pano_photo_item_seleted"
            });
            this.ck.style.height = this.fg.height - 6 + "px";
            this.ck.style.width = this.fg.width - 6 + "px";
            this.rc(this.m.anchor)
        },
        oH: function(a) {
            for (var b = this.Yj, c = b.length - 1; 0 <= c; c--)
                if (b[c].panoId == a)
                    return c;
            return -1
        },
        Yx: function(a, b) {
            if (b || !this.Yj[this.Xc] || !(this.Yj[this.Xc].panoId == a && 3 !== this.Yj[this.Xc].recoType)) {
                var c = this
                  , e = this.oH(a);
                !b && -1 !== e && this.Yj[e] && 3 !== this.Yj[e].recoType ? this.wp(e) : this.BX(function(a) {
                    for (var b = {}, e, k, m = t, n = [], o = 0, s = a.length; o < s; o++)
                        e = a[o].catlog,
                        k = a[o].floor,
                        l !== e && ("" === e && l !== k ? (m = p,
                        b[k] || (b[k] = []),
                        b[k].push(a[o])) : (b[hg[e]] || (b[hg[e]] = []),
                        b[hg[e]].push(a[o])));
                    for (var v in b)
                        m ? n.push({
                            data: v + "F",
                            index: v
                        }) : n.push({
                            data: ig[v],
                            index: v
                        });
                    c.HG = b;
                    c.Ki = n;
                    c.El(a);
                    0 == a.length ? c.$() : c.show()
                })
            }
        },
        EV: function() {
            if (!this.Hi) {
                var a = this.pX(this.Ki)
                  , b = L("div");
                b.style.cssText = ["width:" + 134 * this.Ki.length + "px;", "overflow:hidden;-ms-user-select:none;-moz-user-select:none;-webkit-user-select:none;"].join("");
                b.innerHTML = a;
                a = L("div");
                a.appendChild(b);
                a.style.cssText = "position:absolute;top:-25px;background:rgb(37,37,37);background:rgba(37,37,37,0.9);border-bottom:1px solid #4e596a;width:100%;line-height:25px;height:25px;overflow:scroll;outline:0";
                new eg(a,{
                    so: t,
                    Ex: p,
                    ei: t,
                    xi: t,
                    Vm: t,
                    jE: p,
                    lw: p,
                    gx: p
                });
                this.R.appendChild(a);
                for (var c = this, e = b.getElementsByTagName("span"), f = 0, g = e.length; f < g; f++)
                    b = e[f],
                    A.V(b, "click", function() {
                        if (this.getAttribute("dataindex")) {
                            c.El(c.HG[this.getAttribute("dataindex")]);
                            for (var a = 0, b = e.length; a < b; a++)
                                e[a].style.color = "#FFFFFF";
                            this.style.color = "#3383FF"
                        }
                    });
                this.Hi = a
            }
        },
        BV: function() {
            if (this.Hi)
                a = this.SK(this.Ki),
                this.cQ.innerHTML = a;
            else {
                var a = this.SK(this.Ki)
                  , b = L("ul")
                  , c = this;
                b.style.cssText = "list-style: none;padding:0px;margin:0px;display:block;width:60px;position:absolute;top:7px";
                b.innerHTML = a;
                A.V(b, "click", function(a) {
                    if (a = (a.srcElement || a.target).getAttribute("dataindex")) {
                        c.El(c.HG[a]);
                        for (var e = b.getElementsByTagName("li"), f = 0, g = e.length; f < g; f++)
                            e[f].childNodes[0].getAttribute("dataindex") === a ? A.U.hb(e[f], "pano_catlogLiActive") : A.U.qc(e[f], "pano_catlogLiActive")
                    }
                });
                var a = L("div")
                  , e = L("a")
                  , f = L("span")
                  , g = L("a")
                  , i = L("span")
                  , k = ["background:url(" + H.sa + "panorama/catlog_icon.png) no-repeat;", "display:block;width:10px;height:7px;margin:0 auto;"].join("");
                f.style.cssText = k + "background-position:-18px 0;";
                e.style.cssText = "background:#1C1C1C;display:block;position:absolute;width:58px;";
                i.style.cssText = k + "background-position:0 0;";
                g.style.cssText = "background:#1C1C1C;display:block;position:absolute;width:58px;";
                g.style.top = this.m.imageHeight - 7 + "px";
                a.style.cssText = "position:absolute;top:0px;left:0px;width:60px;";
                e.appendChild(f);
                g.appendChild(i);
                A.V(e, "mouseover", function() {
                    var a = parseInt(b.style.top, 10);
                    7 !== a && (f.style.backgroundPosition = "-27px 0");
                    new wb({
                        Ic: 60,
                        ac: xb.gs,
                        duration: 300,
                        za: function(c) {
                            b.style.top = a + (7 - a) * c + "px"
                        }
                    })
                });
                A.V(e, "mouseout", function() {
                    f.style.backgroundPosition = "-18px 0"
                });
                A.V(g, "mouseover", function() {
                    var a = parseInt(b.style.top, 10)
                      , e = c.m.imageHeight - 14;
                    if (!(parseInt(b.offsetHeight, 10) < e)) {
                        var f = e - parseInt(b.offsetHeight, 10) + 7;
                        f !== a && (i.style.backgroundPosition = "-9px 0");
                        new wb({
                            Ic: 60,
                            ac: xb.gs,
                            duration: 300,
                            za: function(c) {
                                b.style.top = a + (f - a) * c + "px"
                            }
                        })
                    }
                });
                A.V(g, "mouseout", function() {
                    i.style.backgroundPosition = "0 0"
                });
                a.appendChild(e);
                a.appendChild(g);
                e = L("div");
                e.style.cssText = ["position:absolute;z-index:2001;left:20px;", "height:" + this.m.imageHeight + "px;", "width:62px;overflow:hidden;background:rgb(37,37,37);background:rgba(37,37,37,0.9);"].join("");
                e.appendChild(b);
                e.appendChild(a);
                this.Hi = e;
                this.cQ = b;
                this.R.appendChild(e)
            }
        },
        CV: function() {
            if (this.Ki && !(0 >= this.Ki.length)) {
                var a = L("div");
                a.innerHTML = this.zz;
                a.style.cssText = "position:absolute;background:#252525";
                this.R.appendChild(a);
                this.js = a;
                this.Rc.hg.style.left = this.fg.width + 8 + "px";
                this.Hi && (this.Hi.style.left = parseInt(this.Hi.style.left, 10) + this.fg.width + 8 + "px");
                var b = this;
                A.V(a, "click", function() {
                    b.W.Cc(b.xW)
                })
            }
        },
        El: function(a) {
            this.Yj = a;
            this.m.showCatalog && (0 < this.Ki.length ? (Wa() ? this.BV() : this.EV(),
            this.Rc.offsetLeft = 60) : (this.js && (this.R.removeChild(this.js),
            this.js = q,
            this.Rc.hg.style.left = "0px"),
            this.Hi && (this.R.removeChild(this.Hi),
            this.Hi = q),
            this.Rc.offsetLeft = 0));
            var b = this.iX(a);
            Wa() && (this.Ki && 0 < this.Ki.length && this.m.showExit && this.zz) && (this.Rc.offsetLeft += this.fg.width + 8,
            this.js ? this.js.innerHTML = this.zz : this.CV());
            this.Oh.innerHTML = b;
            this.Oh.style.width = (this.fg.width + 8) * a.length + 8 + "px";
            a = this.R.offsetWidth;
            b = this.Oh.offsetWidth;
            this.Rc.ss && (b += this.Rc.ss());
            b < a - 2 * this.Rc.Ai - this.Rc.offsetLeft ? this.R.style.width = b + this.Rc.offsetLeft + "px" : (this.R.style.width = isNaN(Number(this.m.maxWidth)) === p ? this.m.maxWidth : this.m.maxWidth + "px",
            b < this.R.offsetWidth - 2 * this.Rc.Ai - this.Rc.offsetLeft && (this.R.style.width = b + this.Rc.offsetLeft + "px"));
            this.Rc.refresh();
            this.WA = this.Oh.children;
            this.Oh.appendChild(this.ck);
            this.ck.style.left = "-100000px";
            a = this.oH(this.W.Wb(), this.P1);
            -1 !== a && this.wp(a)
        },
        pX: function(a) {
            for (var b = "", c, e = 0, f = a.length; e < f; e++)
                c = '<div style="color:white;opacity:0.5;margin:0 35px;float:left;text-align: center"><span  dataIndex="' + a[e].index + '">' + a[e].data + "</span></div>",
                b += c;
            return b
        },
        SK: function(a) {
            for (var b = "", c, e = 0, f = a.length; e < f; e++)
                c = '<li class="pano_catlogLi"><span style="display:block;width:100%;" dataIndex="' + a[e].index + '">' + a[e].data + "</span></li>",
                b += c;
            return b
        },
        iX: function(a) {
            for (var b, c, e, f, g = [], i = this.fg.height, k = this.fg.width, m = 0; m < a.length; m++)
                b = a[m],
                recoType = b.recoType,
                e = b.panoId,
                f = b.name,
                c = b.heading,
                b = b.pitch,
                c = yf.eL(e, c, b, 198, 108),
                b = '<a href="javascript:void(0);" class="pano_photo_item" data-index="' + m + '"><img style="width:' + (k - 2) + "px;height:" + (i - 2) + 'px;" data-index="' + m + '" name="' + f + '" src="' + c + '" alt="' + f + '"/><span class="pano_photo_decs" data-index="' + m + '" style="width:' + k + "px;font-size:" + Math.floor(i / 6) + "px; line-height:" + Math.floor(i / 6) + 'px;"><em class="pano_poi_' + recoType + '"></em>' + f + "</span></a>",
                3 === recoType ? Wa() ? (this.zz = b,
                this.xW = e,
                a.splice(m, 1),
                m--) : (b = '<a href="javascript:void(0);" class="pano_photo_item" data-index="' + m + '"><img style="width:' + (k - 2) + "px;height:" + (i - 2) + 'px;" data-index="' + m + '" name="' + f + '" src="' + c + '" alt="' + f + '"/><div style="background:rgba(37,37,37,0.5);position:absolute;top:0px;left:0px;width:100%;height:100%;text-align: center;line-height:' + this.m.imageHeight + 'px;" data-index="' + m + '"><img src="' + H.sa + 'panorama/photoexit.png" style="border:none;vertical-align:middle;" data-index="' + m + '" alt=""/></div></a>',
                g.push(b)) : g.push(b);
            return g.join("")
        },
        BX: function(a) {
            var b = this
              , c = this.W.Wb();
            c && this.Hl.bx(c, function(e) {
                b.W.Wb() === c && a(e)
            })
        },
        rc: function(a) {
            if (!Za(a) || isNaN(a) || a < Dc || 3 < a)
                a = this.defaultAnchor;
            var b = this.R
              , c = this.m.offset.width
              , e = this.m.offset.height;
            b.style.left = b.style.top = b.style.right = b.style.bottom = "auto";
            switch (a) {
            case Dc:
                b.style.top = e + "px";
                b.style.left = c + "px";
                break;
            case Ec:
                b.style.top = e + "px";
                b.style.right = c + "px";
                break;
            case Fc:
                b.style.bottom = e + "px";
                b.style.left = c + "px";
                break;
            case 3:
                b.style.bottom = e + "px",
                b.style.right = c + "px"
            }
        },
        NP: function() {
            this.LP()
        },
        LP: function() {
            var a = this;
            A.V(this.R, "touchstart", function(a) {
                a.stopPropagation()
            });
            A.V(this.dk, "click", function(b) {
                if ((b = (b.srcElement || b.target).getAttribute("data-index")) && b != a.Xc)
                    a.wp(b),
                    a.W.Cc(a.Yj[b].panoId)
            });
            A.V(this.Oh, "mouseover", function(b) {
                b = (b.srcElement || b.target).getAttribute("data-index");
                b !== q && a.VJ(b, p)
            });
            this.W.addEventListener("size_changed", function() {
                isNaN(Number(a.m.maxWidth)) && a.wj({
                    maxWidth: a.m.maxWidth
                })
            })
        },
        wp: function(a) {
            this.ck.style.left = this.WA[a].offsetLeft + 8 + "px";
            this.ck.setAttribute("data-index", this.WA[a].getAttribute("data-index"));
            this.Xc = a;
            this.VJ(a)
        },
        VJ: function(a, b) {
            var c = this.fg.width + 8
              , e = 0;
            this.Rc.ss && (e = this.Rc.ss() / 2);
            var f = this.dk.offsetWidth - 2 * e
              , g = this.Oh.offsetLeft || this.Rc.x
              , g = g - e
              , i = -a * c;
            i > g && this.Rc.scrollTo(i + e);
            c = i - c;
            g -= f;
            c < g && (!b || b && 8 < i - g) && this.Rc.scrollTo(c + f + e)
        },
        mY: function() {
            this.Rc = I() ? new eg(this.dk,{
                so: t,
                Ex: p,
                ei: t,
                xi: t,
                Vm: t,
                jE: p,
                lw: p,
                gx: p
            }) : new jg(this.dk)
        },
        $: function() {
            this.R.style.visibility = "hidden"
        },
        show: function() {
            this.R.style.visibility = "visible"
        }
    });
    function jg(a) {
        this.R = a;
        this.Xg = a.children[0];
        this.rr = q;
        this.Ai = 20;
        this.offsetLeft = 0;
        this.ya()
    }
    jg.prototype = {
        ya: function() {
            this.Xg.style.position = "relative";
            this.refresh();
            this.Or();
            this.HB()
        },
        refresh: function() {
            this.Nn = this.R.offsetWidth - this.ss();
            this.tA = -(this.Xg.offsetWidth - this.Nn - this.Ai);
            this.ev = this.Ai + this.offsetLeft;
            this.Xg.style.left = this.ev + "px";
            this.Xg.children[0] && (this.rr = this.Xg.children[0].offsetWidth);
            this.hg && (this.hg.children[0].style.marginTop = this.jr.children[0].style.marginTop = this.hg.offsetHeight / 2 - this.hg.children[0].offsetHeight / 2 + "px")
        },
        ss: function() {
            return 2 * this.Ai
        },
        Or: function() {
            this.tv = L("div");
            this.tv.innerHTML = '<a class="pano_photo_arrow_l" style="background:rgb(37,37,37);background:rgba(37,37,37,0.9);" href="javascript:void(0)" title="\u4e0a\u4e00\u9875"><span class="pano_arrow_l"></span></a><a class="pano_photo_arrow_r" style="background:rgb(37,37,37);background:rgba(37,37,37,0.9);" href="javascript:void(0)" title="\u4e0b\u4e00\u9875"><span class="pano_arrow_r"></span></a>';
            this.hg = this.tv.children[0];
            this.jr = this.tv.children[1];
            this.R.appendChild(this.tv);
            this.hg.children[0].style.marginTop = this.jr.children[0].style.marginTop = this.hg.offsetHeight / 2 - this.hg.children[0].offsetHeight / 2 + "px"
        },
        HB: function() {
            var a = this;
            A.V(this.hg, "click", function() {
                a.scrollTo(a.Xg.offsetLeft + a.Nn)
            });
            A.V(this.jr, "click", function() {
                a.scrollTo(a.Xg.offsetLeft - a.Nn)
            })
        },
        iU: function() {
            A.U.qc(this.hg, "pano_arrow_disable");
            A.U.qc(this.jr, "pano_arrow_disable");
            var a = this.Xg.offsetLeft;
            a >= this.ev && A.U.hb(this.hg, "pano_arrow_disable");
            a - this.Nn <= this.tA && A.U.hb(this.jr, "pano_arrow_disable")
        },
        scrollTo: function(a) {
            a = a < this.Xg.offsetLeft ? Math.ceil((a - this.Ai - this.Nn) / this.rr) * this.rr + this.Nn + this.Ai - 8 : Math.ceil((a - this.Ai) / this.rr) * this.rr + this.Ai;
            a < this.tA ? a = this.tA : a > this.ev && (a = this.ev);
            var b = this.Xg.offsetLeft
              , c = this;
            new wb({
                Ic: 60,
                ac: xb.gs,
                duration: 300,
                za: function(e) {
                    c.Xg.style.left = b + (a - b) * e + "px"
                },
                finish: function() {
                    c.iU()
                }
            })
        }
    };
    D.Map = Ma;
    D.Hotspot = kb;
    D.MapType = ke;
    D.Point = Q;
    D.Pixel = R;
    D.Size = N;
    D.Bounds = hb;
    D.TileLayer = ud;
    D.Projection = Rc;
    D.MercatorProjection = T;
    D.PerspectiveProjection = jb;
    D.Copyright = function(a, b, c) {
        this.id = a;
        this.ib = b;
        this.content = c
    }
    ;
    D.Overlay = Vc;
    D.Label = cd;
    D.GroundOverlay = dd;
    D.PointCollection = hd;
    D.Marker = W;
    D.CanvasLayer = kd;
    D.Icon = Zc;
    D.IconSequence = ad;
    D.Symbol = $c;
    D.Polyline = od;
    D.Polygon = nd;
    D.InfoWindow = bd;
    D.Circle = pd;
    D.Control = Cc;
    D.NavigationControl = mb;
    D.GeolocationControl = Gc;
    D.OverviewMapControl = ob;
    D.CopyrightControl = Hc;
    D.ScaleControl = nb;
    D.MapTypeControl = pb;
    D.CityListControl = Ic;
    D.PanoramaControl = Kc;
    D.TrafficLayer = Bd;
    D.CustomLayer = qb;
    D.ContextMenu = Nc;
    D.MenuItem = Qc;
    D.LocalSearch = fb;
    D.TransitRoute = Re;
    D.DrivingRoute = Ue;
    D.WalkingRoute = Ve;
    D.RidingRoute = We;
    D.Autocomplete = ff;
    D.RouteSearch = $e;
    D.Geocoder = af;
    D.LocalCity = cf;
    D.Geolocation = Geolocation;
    D.Convertor = Tc;
    D.BusLineSearch = ef;
    D.Boundary = df;
    D.Panorama = Pa;
    D.PanoramaLabel = nf;
    D.PanoramaService = Mc;
    D.PanoramaCoverageLayer = Lc;
    D.PanoramaFlashInterface = wf;
    function V(a, b) {
        for (var c in b)
            a[c] = b[c]
    }
    V(window, {
        BMap: D,
        _jsload2: function(a, b) {
            ia.py.AY && ia.py.set(a, b);
            Ta.cV(a, b)
        },
        BMAP_API_VERSION: "2.0"
    });
    var kg = Ma.prototype;
    V(kg, {
        getBounds: kg.te,
        getCenter: kg.Nb,
        getMapType: kg.wa,
        getSize: kg.xb,
        setSize: kg.Be,
        getViewport: kg.Gs,
        getZoom: kg.ja,
        centerAndZoom: kg.od,
        panTo: kg.qi,
        panBy: kg.Cg,
        setCenter: kg.tf,
        setCurrentCity: kg.UE,
        setMapType: kg.Gg,
        setViewport: kg.vh,
        setZoom: kg.Qc,
        highResolutionEnabled: kg.mx,
        zoomTo: kg.Ig,
        zoomIn: kg.HF,
        zoomOut: kg.IF,
        addHotspot: kg.wB,
        removeHotspot: kg.KZ,
        clearHotspots: kg.qw,
        checkResize: kg.fV,
        addControl: kg.Fr,
        removeControl: kg.lN,
        getContainer: kg.Ra,
        addContextMenu: kg.jo,
        removeContextMenu: kg.mp,
        addOverlay: kg.Pa,
        removeOverlay: kg.Ob,
        clearOverlays: kg.SJ,
        openInfoWindow: kg.$c,
        closeInfoWindow: kg.Wc,
        pointToOverlayPixel: kg.Ye,
        overlayPixelToPoint: kg.XM,
        getInfoWindow: kg.ih,
        getOverlays: kg.Zw,
        getPanes: function() {
            return {
                floatPane: this.Xd.VC,
                markerMouseTarget: this.Xd.mE,
                floatShadow: this.Xd.JK,
                labelPane: this.Xd.eE,
                markerPane: this.Xd.vM,
                markerShadow: this.Xd.wM,
                mapPane: this.Xd.at,
                vertexPane: this.Xd.FO
            }
        },
        addTileLayer: kg.Ne,
        removeTileLayer: kg.Yf,
        pixelToPoint: kg.Zb,
        pointToPixel: kg.yc,
        setFeatureStyle: kg.A5,
        selectBaseElement: kg.t5,
        setMapStyle: kg.Bt,
        enable3DBuilding: kg.Do,
        disable3DBuilding: kg.SV,
        getPanorama: kg.Cs,
        initIndoorLayer: kg.nY,
        setNormalMapDisplay: kg.fy,
        setMapStyleV2: kg.o_,
        setBMapCopyrightOffset: kg.TE,
        getVectorContainer: kg.QX
    });
    V(window, {
        BMAP_COORD_BD09: 5,
        BMAP_COORD_GCJ02: 3
    });
    var lg = ke.prototype;
    V(lg, {
        getTileLayer: lg.KX,
        getMinZoom: lg.mf,
        getMaxZoom: lg.Te,
        getProjection: lg.jj,
        getTextColor: lg.pm,
        getTips: lg.Fs
    });
    V(window, {
        BMAP_NORMAL_MAP: Na,
        BMAP_PERSPECTIVE_MAP: Qa,
        BMAP_SATELLITE_MAP: ab,
        BMAP_HYBRID_MAP: Sa
    });
    var mg = T.prototype;
    V(mg, {
        lngLatToPoint: mg.zg,
        pointToLngLat: mg.vj
    });
    var ng = jb.prototype;
    V(ng, {
        lngLatToPoint: ng.zg,
        pointToLngLat: ng.vj
    });
    var og = hb.prototype;
    V(og, {
        equals: og.Sb,
        containsPoint: og.Mr,
        containsBounds: og.rV,
        intersects: og.Os,
        extend: og.extend,
        getCenter: og.Nb,
        isEmpty: og.rj,
        getSouthWest: og.Ve,
        getNorthEast: og.Qf,
        toSpan: og.sF
    });
    var pg = Vc.prototype;
    V(pg, {
        isVisible: pg.Oc,
        show: pg.show,
        hide: pg.$
    });
    Vc.getZIndex = Vc.zk;
    var qg = ib.prototype;
    V(qg, {
        openInfoWindow: qg.$c,
        closeInfoWindow: qg.Wc,
        enableMassClear: qg.ej,
        disableMassClear: qg.UV,
        show: qg.show,
        hide: qg.$,
        getMap: qg.Vw,
        addContextMenu: qg.jo,
        removeContextMenu: qg.mp
    });
    var rg = W.prototype;
    V(rg, {
        setIcon: rg.Ub,
        getIcon: rg.Oo,
        setPosition: rg.va,
        getPosition: rg.la,
        setOffset: rg.Ld,
        getOffset: rg.hj,
        getLabel: rg.oD,
        setLabel: rg.Mm,
        setTitle: rg.Dc,
        setTop: rg.ui,
        enableDragging: rg.pc,
        disableDragging: rg.mC,
        setZIndex: rg.Cp,
        getMap: rg.Vw,
        setAnimation: rg.Lm,
        setShadow: rg.iy,
        hide: rg.$,
        setRotation: rg.yp,
        getRotation: rg.iL
    });
    V(window, {
        BMAP_ANIMATION_DROP: 1,
        BMAP_ANIMATION_BOUNCE: 2
    });
    var sg = cd.prototype;
    V(sg, {
        setStyle: sg.Md,
        setStyles: sg.ti,
        setContent: sg.bd,
        setPosition: sg.va,
        getPosition: sg.la,
        setOffset: sg.Ld,
        getOffset: sg.hj,
        setTitle: sg.Dc,
        setZIndex: sg.Cp,
        getMap: sg.Vw,
        getContent: sg.tk
    });
    var tg = Zc.prototype;
    V(tg, {
        setImageUrl: tg.DN,
        setSize: tg.Be,
        setAnchor: tg.rc,
        setImageOffset: tg.At,
        setImageSize: tg.i_,
        setInfoWindowAnchor: tg.l_,
        setPrintImageUrl: tg.x_
    });
    var ug = bd.prototype;
    V(ug, {
        redraw: ug.je,
        setTitle: ug.Dc,
        setContent: ug.bd,
        getContent: ug.tk,
        getPosition: ug.la,
        enableMaximize: ug.fh,
        disableMaximize: ug.Fw,
        isOpen: ug.bb,
        setMaxContent: ug.Ct,
        maximize: ug.Cx,
        enableAutoPan: ug.hs
    });
    var vg = Xc.prototype;
    V(vg, {
        getPath: vg.Ue,
        setPath: vg.ke,
        setPositionAt: vg.Om,
        getStrokeColor: vg.HX,
        setStrokeWeight: vg.Bp,
        getStrokeWeight: vg.lL,
        setStrokeOpacity: vg.zp,
        getStrokeOpacity: vg.IX,
        setFillOpacity: vg.zt,
        getFillOpacity: vg.bX,
        setStrokeStyle: vg.Ap,
        getStrokeStyle: vg.kL,
        getFillColor: vg.aX,
        getBounds: vg.te,
        enableEditing: vg.kf,
        disableEditing: vg.TV,
        getEditing: vg.YW,
        getGeodesicPath: vg.eX
    });
    var wg = pd.prototype;
    V(wg, {
        setCenter: wg.tf,
        getCenter: wg.Nb,
        getRadius: wg.gL,
        setRadius: wg.uf
    });
    var xg = nd.prototype;
    V(xg, {
        getPath: xg.Ue,
        setPath: xg.ke,
        setPositionAt: xg.Om
    });
    var yg = kb.prototype;
    V(yg, {
        getPosition: yg.la,
        setPosition: yg.va,
        getText: yg.zD,
        setText: yg.Gt
    });
    Q.prototype.equals = Q.prototype.Sb;
    R.prototype.equals = R.prototype.Sb;
    N.prototype.equals = N.prototype.Sb;
    V(window, {
        BMAP_ANCHOR_TOP_LEFT: Dc,
        BMAP_ANCHOR_TOP_RIGHT: Ec,
        BMAP_ANCHOR_BOTTOM_LEFT: Fc,
        BMAP_ANCHOR_BOTTOM_RIGHT: 3
    });
    var zg = Cc.prototype;
    V(zg, {
        setAnchor: zg.rc,
        getAnchor: zg.bD,
        setOffset: zg.Ld,
        getOffset: zg.hj,
        show: zg.show,
        hide: zg.$,
        isVisible: zg.Oc,
        toString: zg.toString
    });
    var Ag = mb.prototype;
    V(Ag, {
        getType: Ag.Vo,
        setType: Ag.Pm
    });
    V(window, {
        BMAP_NAVIGATION_CONTROL_LARGE: 0,
        BMAP_NAVIGATION_CONTROL_SMALL: 1,
        BMAP_NAVIGATION_CONTROL_PAN: 2,
        BMAP_NAVIGATION_CONTROL_ZOOM: 3
    });
    var Bg = ob.prototype;
    V(Bg, {
        changeView: Bg.qe,
        setSize: Bg.Be,
        getSize: Bg.xb
    });
    var Cg = nb.prototype;
    V(Cg, {
        getUnit: Cg.PX,
        setUnit: Cg.bF
    });
    V(window, {
        BMAP_UNIT_METRIC: "metric",
        BMAP_UNIT_IMPERIAL: "us"
    });
    var Dg = Hc.prototype;
    V(Dg, {
        addCopyright: Dg.Zv,
        removeCopyright: Dg.HE,
        getCopyright: Dg.im,
        getCopyrightCollection: Dg.iD
    });
    V(window, {
        BMAP_MAPTYPE_CONTROL_HORIZONTAL: Jc,
        BMAP_MAPTYPE_CONTROL_DROPDOWN: 1,
        BMAP_MAPTYPE_CONTROL_MAP: 2
    });
    var Eg = ud.prototype;
    V(Eg, {
        getMapType: Eg.wa,
        getCopyright: Eg.im,
        isTransparentPng: Eg.Vs
    });
    var Fg = Nc.prototype;
    V(Fg, {
        addItem: Fg.$v,
        addSeparator: Fg.zB,
        removeSeparator: Fg.JE
    });
    var Gg = Qc.prototype;
    V(Gg, {
        setText: Gg.Gt
    });
    var Hg = X.prototype;
    V(Hg, {
        getStatus: Hg.nm,
        setSearchCompleteCallback: Hg.Ft,
        getPageCapacity: Hg.nf,
        setPageCapacity: Hg.xp,
        setLocation: Hg.Nm,
        disableFirstResultSelection: Hg.nC,
        enableFirstResultSelection: Hg.HC,
        gotoPage: Hg.qm,
        searchNearby: Hg.up,
        searchInBounds: Hg.Km,
        search: Hg.search
    });
    V(window, {
        BMAP_STATUS_SUCCESS: 0,
        BMAP_STATUS_CITY_LIST: 1,
        BMAP_STATUS_UNKNOWN_LOCATION: we,
        BMAP_STATUS_UNKNOWN_ROUTE: 3,
        BMAP_STATUS_INVALID_KEY: 4,
        BMAP_STATUS_INVALID_REQUEST: 5,
        BMAP_STATUS_PERMISSION_DENIED: xe,
        BMAP_STATUS_SERVICE_UNAVAILABLE: 7,
        BMAP_STATUS_TIMEOUT: ye
    });
    V(window, {
        BMAP_POI_TYPE_NORMAL: 0,
        BMAP_POI_TYPE_BUSSTOP: 1,
        BMAP_POI_TYPE_BUSLINE: 2,
        BMAP_POI_TYPE_SUBSTOP: 3,
        BMAP_POI_TYPE_SUBLINE: 4
    });
    V(window, {
        BMAP_TRANSIT_POLICY_RECOMMEND: 0,
        BMAP_TRANSIT_POLICY_LEAST_TIME: 4,
        BMAP_TRANSIT_POLICY_LEAST_TRANSFER: 1,
        BMAP_TRANSIT_POLICY_LEAST_WALKING: 2,
        BMAP_TRANSIT_POLICY_AVOID_SUBWAYS: 3,
        BMAP_TRANSIT_POLICY_FIRST_SUBWAYS: 5,
        BMAP_LINE_TYPE_BUS: 0,
        BMAP_LINE_TYPE_SUBWAY: 1,
        BMAP_LINE_TYPE_FERRY: 2,
        BMAP_LINE_TYPE_TRAIN: 3,
        BMAP_LINE_TYPE_AIRPLANE: 4,
        BMAP_LINE_TYPE_COACH: 5
    });
    V(window, {
        BMAP_TRANSIT_TYPE_POLICY_TRAIN: 0,
        BMAP_TRANSIT_TYPE_POLICY_AIRPLANE: 1,
        BMAP_TRANSIT_TYPE_POLICY_COACH: 2
    });
    V(window, {
        BMAP_INTERCITY_POLICY_LEAST_TIME: 0,
        BMAP_INTERCITY_POLICY_EARLY_START: 1,
        BMAP_INTERCITY_POLICY_CHEAP_PRICE: 2
    });
    V(window, {
        BMAP_TRANSIT_TYPE_IN_CITY: 0,
        BMAP_TRANSIT_TYPE_CROSS_CITY: 1
    });
    V(window, {
        BMAP_TRANSIT_PLAN_TYPE_ROUTE: 0,
        BMAP_TRANSIT_PLAN_TYPE_LINE: 1
    });
    var Ig = Qe.prototype;
    V(Ig, {
        clearResults: Ig.Qe
    });
    Se = Re.prototype;
    V(Se, {
        setPolicy: Se.Et,
        toString: Se.toString,
        setPageCapacity: Se.xp,
        setIntercityPolicy: Se.GN,
        setTransitTypePolicy: Se.QN
    });
    V(window, {
        BMAP_DRIVING_POLICY_DEFAULT: 0,
        BMAP_DRIVING_POLICY_AVOID_HIGHWAYS: 3,
        BMAP_DRIVING_POLICY_AVOID_CONGESTION: 5,
        BMAP_DRIVING_POLICY_FIRST_HIGHWAYS: 4
    });
    V(window, {
        BMAP_MODE_DRIVING: "driving",
        BMAP_MODE_TRANSIT: "transit",
        BMAP_MODE_WALKING: "walking",
        BMAP_MODE_NAVIGATION: "navigation"
    });
    var Jg = $e.prototype;
    V(Jg, {
        routeCall: Jg.xN
    });
    V(window, {
        BMAP_HIGHLIGHT_STEP: 1,
        BMAP_HIGHLIGHT_ROUTE: 2
    });
    V(window, {
        BMAP_ROUTE_TYPE_DRIVING: Ae,
        BMAP_ROUTE_TYPE_WALKING: ze,
        BMAP_ROUTE_TYPE_RIDING: Be
    });
    V(window, {
        BMAP_ROUTE_STATUS_NORMAL: Ce,
        BMAP_ROUTE_STATUS_EMPTY: 1,
        BMAP_ROUTE_STATUS_ADDRESS: 2
    });
    var Kg = Ue.prototype;
    V(Kg, {
        setPolicy: Kg.Et
    });
    var Lg = ff.prototype;
    V(Lg, {
        show: Lg.show,
        hide: Lg.$,
        setTypes: Lg.aF,
        setLocation: Lg.Nm,
        search: Lg.search,
        setInputValue: Lg.ey
    });
    V(qb.prototype, {});
    var Mg = df.prototype;
    V(Mg, {
        get: Mg.get
    });
    V(Lc.prototype, {});
    V(window, {
        BMAP_POINT_DENSITY_HIGH: 200,
        BMAP_POINT_DENSITY_MEDIUM: Ed,
        BMAP_POINT_DENSITY_LOW: 50
    });
    V(window, {
        BMAP_POINT_SHAPE_STAR: 1,
        BMAP_POINT_SHAPE_WATERDROP: 2,
        BMAP_POINT_SHAPE_CIRCLE: ed,
        BMAP_POINT_SHAPE_SQUARE: 4,
        BMAP_POINT_SHAPE_RHOMBUS: 5
    });
    V(window, {
        BMAP_POINT_SIZE_TINY: 1,
        BMAP_POINT_SIZE_SMALLER: 2,
        BMAP_POINT_SIZE_SMALL: 3,
        BMAP_POINT_SIZE_NORMAL: fd,
        BMAP_POINT_SIZE_BIG: 5,
        BMAP_POINT_SIZE_BIGGER: 6,
        BMAP_POINT_SIZE_HUGE: 7
    });
    V(window, {
        BMap_Symbol_SHAPE_CAMERA: 11,
        BMap_Symbol_SHAPE_WARNING: 12,
        BMap_Symbol_SHAPE_SMILE: 13,
        BMap_Symbol_SHAPE_CLOCK: 14,
        BMap_Symbol_SHAPE_POINT: 9,
        BMap_Symbol_SHAPE_PLANE: 10,
        BMap_Symbol_SHAPE_CIRCLE: 1,
        BMap_Symbol_SHAPE_RECTANGLE: 2,
        BMap_Symbol_SHAPE_RHOMBUS: 3,
        BMap_Symbol_SHAPE_STAR: 4,
        BMap_Symbol_SHAPE_BACKWARD_CLOSED_ARROW: 5,
        BMap_Symbol_SHAPE_FORWARD_CLOSED_ARROW: 6,
        BMap_Symbol_SHAPE_BACKWARD_OPEN_ARROW: 7,
        BMap_Symbol_SHAPE_FORWARD_OPEN_ARROW: 8
    });
    V(window, {
        BMAP_CONTEXT_MENU_ICON_ZOOMIN: Oc,
        BMAP_CONTEXT_MENU_ICON_ZOOMOUT: Pc
    });
    V(window, {
        BMAP_SYS_DRAWER: La,
        BMAP_SVG_DRAWER: 1,
        BMAP_VML_DRAWER: 2,
        BMAP_CANVAS_DRAWER: 3,
        BMAP_SVG_DRAWER_FIRST: 4
    });
    D.zU();
    D.C0();
}
)()

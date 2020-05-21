/*
 json2.js
 2015-05-03
 */
"object" !== typeof JSON && (JSON = {});
(function () {
    function m(a) {
        return 10 > a ? "0" + a : a
    }

    function r() {
        return this.valueOf()
    }

    function t(a) {
        u.lastIndex = 0;
        return u.test(a) ? '"' + a.replace(u, function (a) {
            var c = w[a];
            return "string" === typeof c ? c : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
        }) + '"' : '"' + a + '"'
    }

    function p(a, l) {
        var c, d, h, q, g = e,
            f, b = l[a];
        b && "object" === typeof b && "function" === typeof b.toJSON && (b = b.toJSON(a));
        "function" === typeof k && (b = k.call(l, a, b));
        switch (typeof b) {
            case "string":
                return t(b);
            case "number":
                return isFinite(b) ? String(b) :
                    "null";
            case "boolean":
            case "null":
                return String(b);
            case "object":
                if (!b) return "null";
                e += n;
                f = [];
                if ("[object Array]" === Object.prototype.toString.apply(b)) {
                    q = b.length;
                    for (c = 0; c < q; c += 1) f[c] = p(c, b) || "null";
                    h = 0 === f.length ? "[]" : e ? "[\n" + e + f.join(",\n" + e) + "\n" + g + "]" : "[" + f.join(",") + "]";
                    e = g;
                    return h
                }
                if (k && "object" === typeof k)
                    for (q = k.length, c = 0; c < q; c += 1) "string" === typeof k[c] && (d = k[c], (h = p(d, b)) && f.push(t(d) + (e ? ": " : ":") + h));
                else
                    for (d in b) Object.prototype.hasOwnProperty.call(b, d) && (h = p(d, b)) && f.push(t(d) + (e ?
                        ": " : ":") + h);
                h = 0 === f.length ? "{}" : e ? "{\n" + e + f.join(",\n" + e) + "\n" + g + "}" : "{" + f.join(",") + "}";
                e = g;
                return h
        }
    }
    var x = /^[\],:{}\s]*$/,
        y = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
        z = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
        A = /(?:^|:|,)(?:\s*\[)+/g,
        u = /[\\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        v = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
    "function" !== typeof Date.prototype.toJSON && (Date.prototype.toJSON = function () {
        return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + m(this.getUTCMonth() + 1) + "-" + m(this.getUTCDate()) + "T" + m(this.getUTCHours()) + ":" + m(this.getUTCMinutes()) + ":" + m(this.getUTCSeconds()) + "Z" : null
    }, Boolean.prototype.toJSON = r, Number.prototype.toJSON = r, String.prototype.toJSON = r);
    var e, n, w, k;
    "function" !== typeof JSON.stringify && (w = {
            "\b": "\\b",
            "\t": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\"
        }, JSON.stringify =
        function (a, l, c) {
            var d;
            n = e = "";
            if ("number" === typeof c)
                for (d = 0; d < c; d += 1) n += " ";
            else "string" === typeof c && (n = c);
            if ((k = l) && "function" !== typeof l && ("object" !== typeof l || "number" !== typeof l.length)) throw Error("JSON.stringify");
            return p("", {
                "": a
            })
        });
    "function" !== typeof JSON.parse && (JSON.parse = function (a, e) {
        function c(a, d) {
            var g, f, b = a[d];
            if (b && "object" === typeof b)
                for (g in b) Object.prototype.hasOwnProperty.call(b, g) && (f = c(b, g), void 0 !== f ? b[g] = f : delete b[g]);
            return e.call(a, d, b)
        }
        var d;
        a = String(a);
        v.lastIndex =
            0;
        v.test(a) && (a = a.replace(v, function (a) {
            return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
        }));
        if (x.test(a.replace(y, "@").replace(z, "]").replace(A, ""))) return d = eval("(" + a + ")"), "function" === typeof e ? c({
            "": d
        }, "") : d;
        throw new SyntaxError("JSON.parse");
    })
})();

(function () {
    var tiny$ = function (_) {
            return document.getElementById(_)
        },
        supportHtml5 = !!('classList' in document.createElement('div')),
        tiny$children = function (el, tagName) {
            return el.querySelectorAll(tagName)
        },
        hasClass = function (el, className) {
            if (supportHtml5) {
                return el.classList.contains(className)
            } else {
                return 0 <= el.className.indexOf(className) ? true : false
            }
        },
        addClass = function (el, className) {
            if (supportHtml5) {
                el.classList.add(className)
            } else {
                if (el.className) {
                    className = el.className + ' ' + className
                }
                el.className = className
            }
        },
        removeClass = function (el, className) {
            if (supportHtml5) {
                el.classList.remove(className)
            } else {
                if (el.className) {
                    className = el.className.replace(className, '');
                    className = trim(className)
                }
                el.className = className
            }
        },
        trim = function (str) {
            return str.replace(/^(\s|\u00A0)+/, "").replace(/(\s|\u00A0)+$/, "")
        },
        post$ = function (url, data, callback) {
            var xhr = new XMLHttpRequest();
            xhr.open('POST', url);
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            var postData = [];
            for (name in data) {
                postData.push(encodeURIComponent(name) + '=' + encodeURIComponent(data[name]))
            }
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if ((xhr.status > 199 && xhr.status < 301) || xhr.status == 304) {
                        callback.call(xhr, JSON.parse(xhr.responseText))
                    }
                }
            };
            xhr.send(postData.join('&'))
        };
    window.wpzan = function (post_id, user_id) {
        var $zan = tiny$("wp-zan-" + post_id);
        if (hasClass($zan, 'zaned')) {
            alert('你已经赞过我啦~~');
            return
        }
        if (post_id) {
            addClass($zan, 'zan-loader');
            post$(wpzan_ajax_url, {
                "action": "wpzan",
                "post_id": post_id,
                "user_id": user_id
            }, function (data) {
                if (data.status == 200) {
                    var $count = tiny$children($zan, 'span')[0];
                    addClass($zan, 'zaned');
                    removeClass($zan, 'zan-loader');
                    $count.innerHTML = data.count
                } else {
                    alert('你已经赞过我啦~~')
                }
            })
        }
    }

    var t = setInterval(function () {
        var target = jQuery("a.wp-zan").find('span')
        if (Number(target.text()) < 100) {
            target.text(100 + Number(target.text()))
        } else {
            clearInterval(t)
        }
    }, 10)
})();
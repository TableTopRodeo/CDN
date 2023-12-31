!function(e, t) {
    if ("object" == typeof exports && "object" == typeof module)
        module.exports = t();
    else if ("function" == typeof define && define.amd)
        define([], t);
    else {
        var n = t();
        for (var r in n)
            ("object" == typeof exports ? exports : e)[r] = n[r]
    }
}(window, function() {
    return function(e) {
        var t = {};
        function n(r) {
            if (t[r])
                return t[r].exports;
            var i = t[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return e[r].call(i.exports, i, i.exports, n),
                i.l = !0,
                i.exports
        }
        return n.m = e,
            n.c = t,
            n.d = function(e, t, r) {
                n.o(e, t) || Object.defineProperty(e, t, {
                    enumerable: !0,
                    get: r
                })
            }
            ,
            n.r = function(e) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module"
                }),
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    })
            }
            ,
            n.t = function(e, t) {
                if (1 & t && (e = n(e)),
                8 & t)
                    return e;
                if (4 & t && "object" == typeof e && e && e.__esModule)
                    return e;
                var r = Object.create(null);
                if (n.r(r),
                    Object.defineProperty(r, "default", {
                        enumerable: !0,
                        value: e
                    }),
                2 & t && "string" != typeof e)
                    for (var i in e)
                        n.d(r, i, function(t) {
                            return e[t]
                        }
                            .bind(null, i));
                return r
            }
            ,
            n.n = function(e) {
                var t = e && e.__esModule ? function() {
                            return e.default
                        }
                        : function() {
                            return e
                        }
                ;
                return n.d(t, "a", t),
                    t
            }
            ,
            n.o = function(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }
            ,
            n.p = "",
            n(n.s = 0)
    }([function(e, t, n) {
        "use strict";
        var r = AFRAME.utils.styleParser;
        if ("undefined" == typeof AFRAME)
            throw new Error("Component attempted to register before AFRAME was available.");
        AFRAME.registerComponent("event-set", {
            schema: {
                default: "",
                parse: function(e) {
                    return r.parse(e)
                }
            },
            multiple: !0,
            init: function() {
                this.eventHandler = null,
                    this.eventName = null
            },
            update: function(e) {
                this.removeEventListener(),
                    this.updateEventListener(),
                    this.addEventListener()
            },
            remove: function() {
                this.removeEventListener()
            },
            pause: function() {
                this.removeEventListener()
            },
            play: function() {
                this.addEventListener()
            },
            updateEventListener: function() {
                var e, t, n, r = this, i = this.data, o = this.el;
                e = i._event || this.id,
                    t = i._target,
                    n = t ? o.sceneEl.querySelector(t) : o,
                    this.eventName = e;
                var s = function() {
                    var e;
                    for (e in i)
                        "_event" !== e && "_target" !== e && AFRAME.utils.entity.setComponentProperty.call(r, n, e, i[e])
                };
                isNaN(i._delay) ? this.eventHandler = s : this.eventHandler = function() {
                    setTimeout(s, parseFloat(i._delay))
                }
            },
            addEventListener: function() {
                this.el.addEventListener(this.eventName, this.eventHandler)
            },
            removeEventListener: function() {
                this.el.removeEventListener(this.eventName, this.eventHandler)
            }
        })
    }
    ])
});

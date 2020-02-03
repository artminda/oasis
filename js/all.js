! function(e) {
	function t(a) {
		if (n[a]) return n[a].exports;
		var s = n[a] = {
			exports: {},
			id: a,
			loaded: !1
		};
		return e[a].call(s.exports, s, s.exports, t), s.loaded = !0, s.exports
	}
	var n = {};
	return t.m = e, t.c = n, t.p = "https://assets.bitrabbit.com/static/", t(0)
}(function(e) {
	for (var t in e)
		if (Object.prototype.hasOwnProperty.call(e, t)) switch (typeof e[t]) {
			case "function":
				break;
			case "object":
				e[t] = function(t) {
					var n = t.slice(1),
						a = e[t[0]];
					return function(e, t, s) {
						a.apply(this, [e, t, s].concat(n))
					}
				}(e[t]);
				break;
			default:
				e[t] = e[e[t]]
		}
	return e
}([function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	n(300);
	var s = n(227),
		r = a(s),
		i = window.$;
	localStorage.setItem("BRB_LOCAL", window.locale), i(r.default)
}, function(e, t, n) {
	(function(e) {
		! function(t, n) {
			e.exports = n()
		}(this, function() {
			"use strict";

			function t() {
				return Ha.apply(null, arguments)
			}

			function a(e) {
				Ha = e
			}

			function s(e) {
				return e instanceof Array || "[object Array]" === Object.prototype.toString.call(e)
			}

			function r(e) {
				return null != e && "[object Object]" === Object.prototype.toString.call(e)
			}

			function i(e) {
				if (Object.getOwnPropertyNames) return 0 === Object.getOwnPropertyNames(e).length;
				var t;
				for (t in e)
					if (e.hasOwnProperty(t)) return !1;
				return !0
			}

			function o(e) {
				return void 0 === e
			}

			function d(e) {
				return "number" == typeof e || "[object Number]" === Object.prototype.toString.call(e)
			}

			function _(e) {
				return e instanceof Date || "[object Date]" === Object.prototype.toString.call(e)
			}

			function u(e, t) {
				var n, a = [];
				for (n = 0; n < e.length; ++n) a.push(t(e[n], n));
				return a
			}

			function l(e, t) {
				return Object.prototype.hasOwnProperty.call(e, t)
			}

			function m(e, t) {
				for (var n in t) l(t, n) && (e[n] = t[n]);
				return l(t, "toString") && (e.toString = t.toString), l(t, "valueOf") && (e.valueOf = t.valueOf), e
			}

			function c(e, t, n, a) {
				return Tt(e, t, n, a, !0).utc()
			}

			function h() {
				return {
					empty: !1,
					unusedTokens: [],
					unusedInput: [],
					overflow: -2,
					charsLeftOver: 0,
					nullInput: !1,
					invalidMonth: null,
					invalidFormat: !1,
					userInvalidated: !1,
					iso: !1,
					parsedDateParts: [],
					meridiem: null,
					rfc2822: !1,
					weekdayMismatch: !1
				}
			}

			function f(e) {
				return null == e._pf && (e._pf = h()), e._pf
			}

			function M(e) {
				if (null == e._isValid) {
					var t = f(e),
						n = ja.call(t.parsedDateParts, function(e) {
							return null != e
						}),
						a = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && n);
					if (e._strict && (a = a && 0 === t.charsLeftOver && 0 === t.unusedTokens.length && void 0 === t.bigHour), null != Object.isFrozen && Object.isFrozen(e)) return a;
					e._isValid = a
				}
				return e._isValid
			}

			function y(e) {
				var t = c(NaN);
				return null != e ? m(f(t), e) : f(t).userInvalidated = !0, t
			}

			function L(e, t) {
				var n, a, s;
				if (o(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), o(t._i) || (e._i = t._i), o(t._f) || (e._f = t._f), o(t._l) || (e._l = t._l), o(t._strict) || (e._strict = t._strict), o(t._tzm) || (e._tzm = t._tzm), o(t._isUTC) || (e._isUTC = t._isUTC), o(t._offset) || (e._offset = t._offset), o(t._pf) || (e._pf = f(t)), o(t._locale) || (e._locale = t._locale), xa.length > 0)
					for (n = 0; n < xa.length; n++) a = xa[n], s = t[a], o(s) || (e[a] = s);
				return e
			}

			function p(e) {
				L(this, e), this._d = new Date(null != e._d ? e._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), Pa === !1 && (Pa = !0, t.updateOffset(this), Pa = !1)
			}

			function Y(e) {
				return e instanceof p || null != e && null != e._isAMomentObject
			}

			function g(e) {
				return e < 0 ? Math.ceil(e) || 0 : Math.floor(e)
			}

			function k(e) {
				var t = +e,
					n = 0;
				return 0 !== t && isFinite(t) && (n = g(t)), n
			}

			function v(e, t, n) {
				var a, s = Math.min(e.length, t.length),
					r = Math.abs(e.length - t.length),
					i = 0;
				for (a = 0; a < s; a++)(n && e[a] !== t[a] || !n && k(e[a]) !== k(t[a])) && i++;
				return i + r
			}

			function w(e) {
				t.suppressDeprecationWarnings === !1 && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e)
			}

			function D(e, n) {
				var a = !0;
				return m(function() {
					if (null != t.deprecationHandler && t.deprecationHandler(null, e), a) {
						for (var s, r = [], i = 0; i < arguments.length; i++) {
							if (s = "", "object" == typeof arguments[i]) {
								s += "\n[" + i + "] ";
								for (var o in arguments[0]) s += o + ": " + arguments[0][o] + ", ";
								s = s.slice(0, -2)
							} else s = arguments[i];
							r.push(s)
						}
						w(e + "\nArguments: " + Array.prototype.slice.call(r).join("") + "\n" + (new Error).stack), a = !1
					}
					return n.apply(this, arguments)
				}, n)
			}

			function T(e, n) {
				null != t.deprecationHandler && t.deprecationHandler(e, n), Oa[e] || (w(n), Oa[e] = !0)
			}

			function b(e) {
				return e instanceof Function || "[object Function]" === Object.prototype.toString.call(e)
			}

			function S(e) {
				var t, n;
				for (n in e) t = e[n], b(t) ? this[n] = t : this["_" + n] = t;
				this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
			}

			function H(e, t) {
				var n, a = m({}, e);
				for (n in t) l(t, n) && (r(e[n]) && r(t[n]) ? (a[n] = {}, m(a[n], e[n]), m(a[n], t[n])) : null != t[n] ? a[n] = t[n] : delete a[n]);
				for (n in e) l(e, n) && !l(t, n) && r(e[n]) && (a[n] = m({}, a[n]));
				return a
			}

			function j(e) {
				null != e && this.set(e)
			}

			function x(e, t, n) {
				var a = this._calendar[e] || this._calendar.sameElse;
				return b(a) ? a.call(t, n) : a
			}

			function P(e) {
				var t = this._longDateFormat[e],
					n = this._longDateFormat[e.toUpperCase()];
				return t || !n ? t : (this._longDateFormat[e] = n.replace(/MMMM|MM|DD|dddd/g, function(e) {
					return e.slice(1)
				}), this._longDateFormat[e])
			}

			function O() {
				return this._invalidDate
			}

			function A(e) {
				return this._ordinal.replace("%d", e)
			}

			function W(e, t, n, a) {
				var s = this._relativeTime[n];
				return b(s) ? s(e, t, n, a) : s.replace(/%d/i, e)
			}

			function F(e, t) {
				var n = this._relativeTime[e > 0 ? "future" : "past"];
				return b(n) ? n(t) : n.replace(/%s/i, t)
			}

			function E(e, t) {
				var n = e.toLowerCase();
				Ra[n] = Ra[n + "s"] = Ra[t] = e
			}

			function z(e) {
				return "string" == typeof e ? Ra[e] || Ra[e.toLowerCase()] : void 0
			}

			function C(e) {
				var t, n, a = {};
				for (n in e) l(e, n) && (t = z(n), t && (a[t] = e[n]));
				return a
			}

			function J(e, t) {
				Na[e] = t
			}

			function R(e) {
				var t = [];
				for (var n in e) t.push({
					unit: n,
					priority: Na[n]
				});
				return t.sort(function(e, t) {
					return e.priority - t.priority
				}), t
			}

			function N(e, t, n) {
				var a = "" + Math.abs(e),
					s = t - a.length,
					r = e >= 0;
				return (r ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, s)).toString().substr(1) + a
			}

			function I(e, t, n, a) {
				var s = a;
				"string" == typeof a && (s = function() {
					return this[a]()
				}), e && (Va[e] = s), t && (Va[t[0]] = function() {
					return N(s.apply(this, arguments), t[1], t[2])
				}), n && (Va[n] = function() {
					return this.localeData().ordinal(s.apply(this, arguments), e)
				})
			}

			function G(e) {
				return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "")
			}

			function U(e) {
				var t, n, a = e.match(Ia);
				for (t = 0, n = a.length; t < n; t++) Va[a[t]] ? a[t] = Va[a[t]] : a[t] = G(a[t]);
				return function(t) {
					var s, r = "";
					for (s = 0; s < n; s++) r += b(a[s]) ? a[s].call(t, e) : a[s];
					return r
				}
			}

			function V(e, t) {
				return e.isValid() ? (t = B(t, e.localeData()), Ua[t] = Ua[t] || U(t), Ua[t](e)) : e.localeData().invalidDate()
			}

			function B(e, t) {
				function n(e) {
					return t.longDateFormat(e) || e
				}
				var a = 5;
				for (Ga.lastIndex = 0; a >= 0 && Ga.test(e);) e = e.replace(Ga, n), Ga.lastIndex = 0, a -= 1;
				return e
			}

			function $(e, t, n) {
				us[e] = b(t) ? t : function(e, a) {
					return e && n ? n : t
				}
			}

			function K(e, t) {
				return l(us, e) ? us[e](t._strict, t._locale) : new RegExp(Z(e))
			}

			function Z(e) {
				return q(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(e, t, n, a, s) {
					return t || n || a || s
				}))
			}

			function q(e) {
				return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
			}

			function Q(e, t) {
				var n, a = t;
				for ("string" == typeof e && (e = [e]), d(t) && (a = function(e, n) {
						n[t] = k(e)
					}), n = 0; n < e.length; n++) ls[e[n]] = a
			}

			function X(e, t) {
				Q(e, function(e, n, a, s) {
					a._w = a._w || {}, t(e, a._w, a, s)
				})
			}

			function ee(e, t, n) {
				null != t && l(ls, e) && ls[e](t, n._a, n, e)
			}

			function te(e) {
				return ne(e) ? 366 : 365
			}

			function ne(e) {
				return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0
			}

			function ae() {
				return ne(this.year())
			}

			function se(e, n) {
				return function(a) {
					return null != a ? (ie(this, e, a), t.updateOffset(this, n), this) : re(this, e)
				}
			}

			function re(e, t) {
				return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN
			}

			function ie(e, t, n) {
				e.isValid() && !isNaN(n) && ("FullYear" === t && ne(e.year()) && 1 === e.month() && 29 === e.date() ? e._d["set" + (e._isUTC ? "UTC" : "") + t](n, e.month(), ue(n, e.month())) : e._d["set" + (e._isUTC ? "UTC" : "") + t](n))
			}

			function oe(e) {
				return e = z(e), b(this[e]) ? this[e]() : this
			}

			function de(e, t) {
				if ("object" == typeof e) {
					e = C(e);
					for (var n = R(e), a = 0; a < n.length; a++) this[n[a].unit](e[n[a].unit])
				} else if (e = z(e), b(this[e])) return this[e](t);
				return this
			}

			function _e(e, t) {
				return (e % t + t) % t
			}

			function ue(e, t) {
				if (isNaN(e) || isNaN(t)) return NaN;
				var n = _e(t, 12);
				return e += (t - n) / 12, 1 === n ? ne(e) ? 29 : 28 : 31 - n % 7 % 2
			}

			function le(e, t) {
				return e ? s(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || vs).test(t) ? "format" : "standalone"][e.month()] : s(this._months) ? this._months : this._months.standalone
			}

			function me(e, t) {
				return e ? s(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[vs.test(t) ? "format" : "standalone"][e.month()] : s(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
			}

			function ce(e, t, n) {
				var a, s, r, i = e.toLocaleLowerCase();
				if (!this._monthsParse)
					for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], a = 0; a < 12; ++a) r = c([2e3, a]), this._shortMonthsParse[a] = this.monthsShort(r, "").toLocaleLowerCase(), this._longMonthsParse[a] = this.months(r, "").toLocaleLowerCase();
				return n ? "MMM" === t ? (s = gs.call(this._shortMonthsParse, i), s !== -1 ? s : null) : (s = gs.call(this._longMonthsParse, i), s !== -1 ? s : null) : "MMM" === t ? (s = gs.call(this._shortMonthsParse, i), s !== -1 ? s : (s = gs.call(this._longMonthsParse, i), s !== -1 ? s : null)) : (s = gs.call(this._longMonthsParse, i), s !== -1 ? s : (s = gs.call(this._shortMonthsParse, i), s !== -1 ? s : null))
			}

			function he(e, t, n) {
				var a, s, r;
				if (this._monthsParseExact) return ce.call(this, e, t, n);
				for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), a = 0; a < 12; a++) {
					if (s = c([2e3, a]), n && !this._longMonthsParse[a] && (this._longMonthsParse[a] = new RegExp("^" + this.months(s, "").replace(".", "") + "$", "i"), this._shortMonthsParse[a] = new RegExp("^" + this.monthsShort(s, "").replace(".", "") + "$", "i")), n || this._monthsParse[a] || (r = "^" + this.months(s, "") + "|^" + this.monthsShort(s, ""), this._monthsParse[a] = new RegExp(r.replace(".", ""), "i")), n && "MMMM" === t && this._longMonthsParse[a].test(e)) return a;
					if (n && "MMM" === t && this._shortMonthsParse[a].test(e)) return a;
					if (!n && this._monthsParse[a].test(e)) return a
				}
			}

			function fe(e, t) {
				var n;
				if (!e.isValid()) return e;
				if ("string" == typeof t)
					if (/^\d+$/.test(t)) t = k(t);
					else if (t = e.localeData().monthsParse(t), !d(t)) return e;
				return n = Math.min(e.date(), ue(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n), e
			}

			function Me(e) {
				return null != e ? (fe(this, e), t.updateOffset(this, !0), this) : re(this, "Month")
			}

			function ye() {
				return ue(this.year(), this.month())
			}

			function Le(e) {
				return this._monthsParseExact ? (l(this, "_monthsRegex") || Ye.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (l(this, "_monthsShortRegex") || (this._monthsShortRegex = Ts), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex)
			}

			function pe(e) {
				return this._monthsParseExact ? (l(this, "_monthsRegex") || Ye.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (l(this, "_monthsRegex") || (this._monthsRegex = bs), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex)
			}

			function Ye() {
				function e(e, t) {
					return t.length - e.length
				}
				var t, n, a = [],
					s = [],
					r = [];
				for (t = 0; t < 12; t++) n = c([2e3, t]), a.push(this.monthsShort(n, "")), s.push(this.months(n, "")), r.push(this.months(n, "")), r.push(this.monthsShort(n, ""));
				for (a.sort(e), s.sort(e), r.sort(e), t = 0; t < 12; t++) a[t] = q(a[t]), s[t] = q(s[t]);
				for (t = 0; t < 24; t++) r[t] = q(r[t]);
				this._monthsRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + a.join("|") + ")", "i")
			}

			function ge(e, t, n, a, s, r, i) {
				var o = new Date(e, t, n, a, s, r, i);
				return e < 100 && e >= 0 && isFinite(o.getFullYear()) && o.setFullYear(e), o
			}

			function ke(e) {
				var t = new Date(Date.UTC.apply(null, arguments));
				return e < 100 && e >= 0 && isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e), t
			}

			function ve(e, t, n) {
				var a = 7 + t - n,
					s = (7 + ke(e, 0, a).getUTCDay() - t) % 7;
				return -s + a - 1
			}

			function we(e, t, n, a, s) {
				var r, i, o = (7 + n - a) % 7,
					d = ve(e, a, s),
					_ = 1 + 7 * (t - 1) + o + d;
				return _ <= 0 ? (r = e - 1, i = te(r) + _) : _ > te(e) ? (r = e + 1, i = _ - te(e)) : (r = e, i = _), {
					year: r,
					dayOfYear: i
				}
			}

			function De(e, t, n) {
				var a, s, r = ve(e.year(), t, n),
					i = Math.floor((e.dayOfYear() - r - 1) / 7) + 1;
				return i < 1 ? (s = e.year() - 1, a = i + Te(s, t, n)) : i > Te(e.year(), t, n) ? (a = i - Te(e.year(), t, n), s = e.year() + 1) : (s = e.year(), a = i), {
					week: a,
					year: s
				}
			}

			function Te(e, t, n) {
				var a = ve(e, t, n),
					s = ve(e + 1, t, n);
				return (te(e) - a + s) / 7
			}

			function be(e) {
				return De(e, this._week.dow, this._week.doy).week
			}

			function Se() {
				return this._week.dow
			}

			function He() {
				return this._week.doy
			}

			function je(e) {
				var t = this.localeData().week(this);
				return null == e ? t : this.add(7 * (e - t), "d")
			}

			function xe(e) {
				var t = De(this, 1, 4).week;
				return null == e ? t : this.add(7 * (e - t), "d")
			}

			function Pe(e, t) {
				return "string" != typeof e ? e : isNaN(e) ? (e = t.weekdaysParse(e), "number" == typeof e ? e : null) : parseInt(e, 10)
			}

			function Oe(e, t) {
				return "string" == typeof e ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e
			}

			function Ae(e, t) {
				return e ? s(this._weekdays) ? this._weekdays[e.day()] : this._weekdays[this._weekdays.isFormat.test(t) ? "format" : "standalone"][e.day()] : s(this._weekdays) ? this._weekdays : this._weekdays.standalone
			}

			function We(e) {
				return e ? this._weekdaysShort[e.day()] : this._weekdaysShort
			}

			function Fe(e) {
				return e ? this._weekdaysMin[e.day()] : this._weekdaysMin
			}

			function Ee(e, t, n) {
				var a, s, r, i = e.toLocaleLowerCase();
				if (!this._weekdaysParse)
					for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], a = 0; a < 7; ++a) r = c([2e3, 1]).day(a), this._minWeekdaysParse[a] = this.weekdaysMin(r, "").toLocaleLowerCase(), this._shortWeekdaysParse[a] = this.weekdaysShort(r, "").toLocaleLowerCase(), this._weekdaysParse[a] = this.weekdays(r, "").toLocaleLowerCase();
				return n ? "dddd" === t ? (s = gs.call(this._weekdaysParse, i), s !== -1 ? s : null) : "ddd" === t ? (s = gs.call(this._shortWeekdaysParse, i), s !== -1 ? s : null) : (s = gs.call(this._minWeekdaysParse, i), s !== -1 ? s : null) : "dddd" === t ? (s = gs.call(this._weekdaysParse, i), s !== -1 ? s : (s = gs.call(this._shortWeekdaysParse, i), s !== -1 ? s : (s = gs.call(this._minWeekdaysParse, i), s !== -1 ? s : null))) : "ddd" === t ? (s = gs.call(this._shortWeekdaysParse, i), s !== -1 ? s : (s = gs.call(this._weekdaysParse, i), s !== -1 ? s : (s = gs.call(this._minWeekdaysParse, i), s !== -1 ? s : null))) : (s = gs.call(this._minWeekdaysParse, i), s !== -1 ? s : (s = gs.call(this._weekdaysParse, i), s !== -1 ? s : (s = gs.call(this._shortWeekdaysParse, i), s !== -1 ? s : null)))
			}

			function ze(e, t, n) {
				var a, s, r;
				if (this._weekdaysParseExact) return Ee.call(this, e, t, n);
				for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), a = 0; a < 7; a++) {
					if (s = c([2e3, 1]).day(a), n && !this._fullWeekdaysParse[a] && (this._fullWeekdaysParse[a] = new RegExp("^" + this.weekdays(s, "").replace(".", ".?") + "$", "i"), this._shortWeekdaysParse[a] = new RegExp("^" + this.weekdaysShort(s, "").replace(".", ".?") + "$", "i"), this._minWeekdaysParse[a] = new RegExp("^" + this.weekdaysMin(s, "").replace(".", ".?") + "$", "i")), this._weekdaysParse[a] || (r = "^" + this.weekdays(s, "") + "|^" + this.weekdaysShort(s, "") + "|^" + this.weekdaysMin(s, ""), this._weekdaysParse[a] = new RegExp(r.replace(".", ""), "i")), n && "dddd" === t && this._fullWeekdaysParse[a].test(e)) return a;
					if (n && "ddd" === t && this._shortWeekdaysParse[a].test(e)) return a;
					if (n && "dd" === t && this._minWeekdaysParse[a].test(e)) return a;
					if (!n && this._weekdaysParse[a].test(e)) return a
				}
			}

			function Ce(e) {
				if (!this.isValid()) return null != e ? this : NaN;
				var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
				return null != e ? (e = Pe(e, this.localeData()), this.add(e - t, "d")) : t
			}

			function Je(e) {
				if (!this.isValid()) return null != e ? this : NaN;
				var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
				return null == e ? t : this.add(e - t, "d")
			}

			function Re(e) {
				if (!this.isValid()) return null != e ? this : NaN;
				if (null != e) {
					var t = Oe(e, this.localeData());
					return this.day(this.day() % 7 ? t : t - 7)
				}
				return this.day() || 7
			}

			function Ne(e) {
				return this._weekdaysParseExact ? (l(this, "_weekdaysRegex") || Ue.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (l(this, "_weekdaysRegex") || (this._weekdaysRegex = Ps), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex)
			}

			function Ie(e) {
				return this._weekdaysParseExact ? (l(this, "_weekdaysRegex") || Ue.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (l(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Os), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
			}

			function Ge(e) {
				return this._weekdaysParseExact ? (l(this, "_weekdaysRegex") || Ue.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (l(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = As), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
			}

			function Ue() {
				function e(e, t) {
					return t.length - e.length
				}
				var t, n, a, s, r, i = [],
					o = [],
					d = [],
					_ = [];
				for (t = 0; t < 7; t++) n = c([2e3, 1]).day(t), a = this.weekdaysMin(n, ""), s = this.weekdaysShort(n, ""), r = this.weekdays(n, ""), i.push(a), o.push(s), d.push(r), _.push(a), _.push(s), _.push(r);
				for (i.sort(e), o.sort(e), d.sort(e), _.sort(e), t = 0; t < 7; t++) o[t] = q(o[t]), d[t] = q(d[t]), _[t] = q(_[t]);
				this._weekdaysRegex = new RegExp("^(" + _.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + d.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + i.join("|") + ")", "i")
			}

			function Ve() {
				return this.hours() % 12 || 12
			}

			function Be() {
				return this.hours() || 24
			}

			function $e(e, t) {
				I(e, 0, 0, function() {
					return this.localeData().meridiem(this.hours(), this.minutes(), t)
				})
			}

			function Ke(e, t) {
				return t._meridiemParse
			}

			function Ze(e) {
				return "p" === (e + "").toLowerCase().charAt(0)
			}

			function qe(e, t, n) {
				return e > 11 ? n ? "pm" : "PM" : n ? "am" : "AM"
			}

			function Qe(e) {
				return e ? e.toLowerCase().replace("_", "-") : e
			}

			function Xe(e) {
				for (var t, n, a, s, r = 0; r < e.length;) {
					for (s = Qe(e[r]).split("-"), t = s.length, n = Qe(e[r + 1]), n = n ? n.split("-") : null; t > 0;) {
						if (a = et(s.slice(0, t).join("-"))) return a;
						if (n && n.length >= t && v(s, n, !0) >= t - 1) break;
						t--
					}
					r++
				}
				return Ws
			}

			function et(t) {
				var a = null;
				if (!Cs[t] && "undefined" != typeof e && e && e.exports) try {
					a = Ws._abbr, n(315)("./" + t), tt(a)
				} catch (e) {}
				return Cs[t]
			}

			function tt(e, t) {
				var n;
				return e && (n = o(t) ? st(e) : nt(e, t), n ? Ws = n : "undefined" != typeof console && console.warn && console.warn("Locale " + e + " not found. Did you forget to load it?")), Ws._abbr
			}

			function nt(e, t) {
				if (null !== t) {
					var n, a = zs;
					if (t.abbr = e, null != Cs[e]) T("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), a = Cs[e]._config;
					else if (null != t.parentLocale)
						if (null != Cs[t.parentLocale]) a = Cs[t.parentLocale]._config;
						else {
							if (n = et(t.parentLocale), null == n) return Js[t.parentLocale] || (Js[t.parentLocale] = []), Js[t.parentLocale].push({
								name: e,
								config: t
							}), null;
							a = n._config
						}
					return Cs[e] = new j(H(a, t)), Js[e] && Js[e].forEach(function(e) {
						nt(e.name, e.config)
					}), tt(e), Cs[e]
				}
				return delete Cs[e], null
			}

			function at(e, t) {
				if (null != t) {
					var n, a, s = zs;
					a = et(e), null != a && (s = a._config), t = H(s, t), n = new j(t), n.parentLocale = Cs[e], Cs[e] = n, tt(e)
				} else null != Cs[e] && (null != Cs[e].parentLocale ? Cs[e] = Cs[e].parentLocale : null != Cs[e] && delete Cs[e]);
				return Cs[e]
			}

			function st(e) {
				var t;
				if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e) return Ws;
				if (!s(e)) {
					if (t = et(e)) return t;
					e = [e]
				}
				return Xe(e)
			}

			function rt() {
				return Aa(Cs)
			}

			function it(e) {
				var t, n = e._a;
				return n && f(e).overflow === -2 && (t = n[cs] < 0 || n[cs] > 11 ? cs : n[hs] < 1 || n[hs] > ue(n[ms], n[cs]) ? hs : n[fs] < 0 || n[fs] > 24 || 24 === n[fs] && (0 !== n[Ms] || 0 !== n[ys] || 0 !== n[Ls]) ? fs : n[Ms] < 0 || n[Ms] > 59 ? Ms : n[ys] < 0 || n[ys] > 59 ? ys : n[Ls] < 0 || n[Ls] > 999 ? Ls : -1, f(e)._overflowDayOfYear && (t < ms || t > hs) && (t = hs), f(e)._overflowWeeks && t === -1 && (t = ps), f(e)._overflowWeekday && t === -1 && (t = Ys), f(e).overflow = t), e
			}

			function ot(e, t, n) {
				return null != e ? e : null != t ? t : n
			}

			function dt(e) {
				var n = new Date(t.now());
				return e._useUTC ? [n.getUTCFullYear(), n.getUTCMonth(), n.getUTCDate()] : [n.getFullYear(), n.getMonth(), n.getDate()]
			}

			function _t(e) {
				var t, n, a, s, r, i = [];
				if (!e._d) {
					for (a = dt(e), e._w && null == e._a[hs] && null == e._a[cs] && ut(e), null != e._dayOfYear && (r = ot(e._a[ms], a[ms]), (e._dayOfYear > te(r) || 0 === e._dayOfYear) && (f(e)._overflowDayOfYear = !0), n = ke(r, 0, e._dayOfYear), e._a[cs] = n.getUTCMonth(), e._a[hs] = n.getUTCDate()), t = 0; t < 3 && null == e._a[t]; ++t) e._a[t] = i[t] = a[t];
					for (; t < 7; t++) e._a[t] = i[t] = null == e._a[t] ? 2 === t ? 1 : 0 : e._a[t];
					24 === e._a[fs] && 0 === e._a[Ms] && 0 === e._a[ys] && 0 === e._a[Ls] && (e._nextDay = !0, e._a[fs] = 0), e._d = (e._useUTC ? ke : ge).apply(null, i), s = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[fs] = 24), e._w && "undefined" != typeof e._w.d && e._w.d !== s && (f(e).weekdayMismatch = !0)
				}
			}

			function ut(e) {
				var t, n, a, s, r, i, o, d;
				if (t = e._w, null != t.GG || null != t.W || null != t.E) r = 1, i = 4, n = ot(t.GG, e._a[ms], De(bt(), 1, 4).year), a = ot(t.W, 1), s = ot(t.E, 1), (s < 1 || s > 7) && (d = !0);
				else {
					r = e._locale._week.dow, i = e._locale._week.doy;
					var _ = De(bt(), r, i);
					n = ot(t.gg, e._a[ms], _.year), a = ot(t.w, _.week), null != t.d ? (s = t.d, (s < 0 || s > 6) && (d = !0)) : null != t.e ? (s = t.e + r, (t.e < 0 || t.e > 6) && (d = !0)) : s = r
				}
				a < 1 || a > Te(n, r, i) ? f(e)._overflowWeeks = !0 : null != d ? f(e)._overflowWeekday = !0 : (o = we(n, a, s, r, i), e._a[ms] = o.year, e._dayOfYear = o.dayOfYear)
			}

			function lt(e) {
				var t, n, a, s, r, i, o = e._i,
					d = Rs.exec(o) || Ns.exec(o);
				if (d) {
					for (f(e).iso = !0, t = 0, n = Gs.length; t < n; t++)
						if (Gs[t][1].exec(d[1])) {
							s = Gs[t][0], a = Gs[t][2] !== !1;
							break
						}
					if (null == s) return void(e._isValid = !1);
					if (d[3]) {
						for (t = 0, n = Us.length; t < n; t++)
							if (Us[t][1].exec(d[3])) {
								r = (d[2] || " ") + Us[t][0];
								break
							}
						if (null == r) return void(e._isValid = !1)
					}
					if (!a && null != r) return void(e._isValid = !1);
					if (d[4]) {
						if (!Is.exec(d[4])) return void(e._isValid = !1);
						i = "Z"
					}
					e._f = s + (r || "") + (i || ""), pt(e)
				} else e._isValid = !1
			}

			function mt(e, t, n, a, s, r) {
				var i = [ct(e), Ds.indexOf(t), parseInt(n, 10), parseInt(a, 10), parseInt(s, 10)];
				return r && i.push(parseInt(r, 10)), i
			}

			function ct(e) {
				var t = parseInt(e, 10);
				return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t
			}

			function ht(e) {
				return e.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim()
			}

			function ft(e, t, n) {
				if (e) {
					var a = js.indexOf(e),
						s = new Date(t[0], t[1], t[2]).getDay();
					if (a !== s) return f(n).weekdayMismatch = !0, n._isValid = !1, !1
				}
				return !0
			}

			function Mt(e, t, n) {
				if (e) return $s[e];
				if (t) return 0;
				var a = parseInt(n, 10),
					s = a % 100,
					r = (a - s) / 100;
				return 60 * r + s
			}

			function yt(e) {
				var t = Bs.exec(ht(e._i));
				if (t) {
					var n = mt(t[4], t[3], t[2], t[5], t[6], t[7]);
					if (!ft(t[1], n, e)) return;
					e._a = n, e._tzm = Mt(t[8], t[9], t[10]), e._d = ke.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), f(e).rfc2822 = !0
				} else e._isValid = !1
			}

			function Lt(e) {
				var n = Vs.exec(e._i);
				return null !== n ? void(e._d = new Date(+n[1])) : (lt(e), void(e._isValid === !1 && (delete e._isValid, yt(e), e._isValid === !1 && (delete e._isValid, t.createFromInputFallback(e)))))
			}

			function pt(e) {
				if (e._f === t.ISO_8601) return void lt(e);
				if (e._f === t.RFC_2822) return void yt(e);
				e._a = [], f(e).empty = !0;
				var n, a, s, r, i, o = "" + e._i,
					d = o.length,
					_ = 0;
				for (s = B(e._f, e._locale).match(Ia) || [], n = 0; n < s.length; n++) r = s[n], a = (o.match(K(r, e)) || [])[0], a && (i = o.substr(0, o.indexOf(a)), i.length > 0 && f(e).unusedInput.push(i), o = o.slice(o.indexOf(a) + a.length), _ += a.length), Va[r] ? (a ? f(e).empty = !1 : f(e).unusedTokens.push(r), ee(r, a, e)) : e._strict && !a && f(e).unusedTokens.push(r);
				f(e).charsLeftOver = d - _, o.length > 0 && f(e).unusedInput.push(o), e._a[fs] <= 12 && f(e).bigHour === !0 && e._a[fs] > 0 && (f(e).bigHour = void 0), f(e).parsedDateParts = e._a.slice(0), f(e).meridiem = e._meridiem, e._a[fs] = Yt(e._locale, e._a[fs], e._meridiem), _t(e), it(e)
			}

			function Yt(e, t, n) {
				var a;
				return null == n ? t : null != e.meridiemHour ? e.meridiemHour(t, n) : null != e.isPM ? (a = e.isPM(n), a && t < 12 && (t += 12), a || 12 !== t || (t = 0), t) : t
			}

			function gt(e) {
				var t, n, a, s, r;
				if (0 === e._f.length) return f(e).invalidFormat = !0, void(e._d = new Date(NaN));
				for (s = 0; s < e._f.length; s++) r = 0, t = L({}, e), null != e._useUTC && (t._useUTC = e._useUTC), t._f = e._f[s], pt(t), M(t) && (r += f(t).charsLeftOver, r += 10 * f(t).unusedTokens.length, f(t).score = r, (null == a || r < a) && (a = r, n = t));
				m(e, n || t)
			}

			function kt(e) {
				if (!e._d) {
					var t = C(e._i);
					e._a = u([t.year, t.month, t.day || t.date, t.hour, t.minute, t.second, t.millisecond], function(e) {
						return e && parseInt(e, 10)
					}), _t(e)
				}
			}

			function vt(e) {
				var t = new p(it(wt(e)));
				return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t
			}

			function wt(e) {
				var t = e._i,
					n = e._f;
				return e._locale = e._locale || st(e._l), null === t || void 0 === n && "" === t ? y({
					nullInput: !0
				}) : ("string" == typeof t && (e._i = t = e._locale.preparse(t)), Y(t) ? new p(it(t)) : (_(t) ? e._d = t : s(n) ? gt(e) : n ? pt(e) : Dt(e), M(e) || (e._d = null), e))
			}

			function Dt(e) {
				var n = e._i;
				o(n) ? e._d = new Date(t.now()) : _(n) ? e._d = new Date(n.valueOf()) : "string" == typeof n ? Lt(e) : s(n) ? (e._a = u(n.slice(0), function(e) {
					return parseInt(e, 10)
				}), _t(e)) : r(n) ? kt(e) : d(n) ? e._d = new Date(n) : t.createFromInputFallback(e)
			}

			function Tt(e, t, n, a, o) {
				var d = {};
				return n !== !0 && n !== !1 || (a = n, n = void 0), (r(e) && i(e) || s(e) && 0 === e.length) && (e = void 0), d._isAMomentObject = !0, d._useUTC = d._isUTC = o, d._l = n, d._i = e, d._f = t, d._strict = a, vt(d)
			}

			function bt(e, t, n, a) {
				return Tt(e, t, n, a, !1)
			}

			function St(e, t) {
				var n, a;
				if (1 === t.length && s(t[0]) && (t = t[0]), !t.length) return bt();
				for (n = t[0], a = 1; a < t.length; ++a) t[a].isValid() && !t[a][e](n) || (n = t[a]);
				return n
			}

			function Ht() {
				var e = [].slice.call(arguments, 0);
				return St("isBefore", e)
			}

			function jt() {
				var e = [].slice.call(arguments, 0);
				return St("isAfter", e)
			}

			function xt(e) {
				for (var t in e)
					if (gs.call(Qs, t) === -1 || null != e[t] && isNaN(e[t])) return !1;
				for (var n = !1, a = 0; a < Qs.length; ++a)
					if (e[Qs[a]]) {
						if (n) return !1;
						parseFloat(e[Qs[a]]) !== k(e[Qs[a]]) && (n = !0)
					}
				return !0
			}

			function Pt() {
				return this._isValid
			}

			function Ot() {
				return Qt(NaN)
			}

			function At(e) {
				var t = C(e),
					n = t.year || 0,
					a = t.quarter || 0,
					s = t.month || 0,
					r = t.week || 0,
					i = t.day || 0,
					o = t.hour || 0,
					d = t.minute || 0,
					_ = t.second || 0,
					u = t.millisecond || 0;
				this._isValid = xt(t), this._milliseconds = +u + 1e3 * _ + 6e4 * d + 1e3 * o * 60 * 60, this._days = +i + 7 * r, this._months = +s + 3 * a + 12 * n, this._data = {}, this._locale = st(), this._bubble()
			}

			function Wt(e) {
				return e instanceof At
			}

			function Ft(e) {
				return e < 0 ? Math.round(-1 * e) * -1 : Math.round(e)
			}

			function Et(e, t) {
				I(e, 0, 0, function() {
					var e = this.utcOffset(),
						n = "+";
					return e < 0 && (e = -e, n = "-"), n + N(~~(e / 60), 2) + t + N(~~e % 60, 2)
				})
			}

			function zt(e, t) {
				var n = (t || "").match(e);
				if (null === n) return null;
				var a = n[n.length - 1] || [],
					s = (a + "").match(Xs) || ["-", 0, 0],
					r = +(60 * s[1]) + k(s[2]);
				return 0 === r ? 0 : "+" === s[0] ? r : -r
			}

			function Ct(e, n) {
				var a, s;
				return n._isUTC ? (a = n.clone(), s = (Y(e) || _(e) ? e.valueOf() : bt(e).valueOf()) - a.valueOf(), a._d.setTime(a._d.valueOf() + s), t.updateOffset(a, !1), a) : bt(e).local()
			}

			function Jt(e) {
				return 15 * -Math.round(e._d.getTimezoneOffset() / 15)
			}

			function Rt(e, n, a) {
				var s, r = this._offset || 0;
				if (!this.isValid()) return null != e ? this : NaN;
				if (null != e) {
					if ("string" == typeof e) {
						if (e = zt(os, e), null === e) return this
					} else Math.abs(e) < 16 && !a && (e *= 60);
					return !this._isUTC && n && (s = Jt(this)), this._offset = e, this._isUTC = !0, null != s && this.add(s, "m"), r !== e && (!n || this._changeInProgress ? an(this, Qt(e - r, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, t.updateOffset(this, !0), this._changeInProgress = null)), this
				}
				return this._isUTC ? r : Jt(this)
			}

			function Nt(e, t) {
				return null != e ? ("string" != typeof e && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset()
			}

			function It(e) {
				return this.utcOffset(0, e)
			}

			function Gt(e) {
				return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(Jt(this), "m")), this
			}

			function Ut() {
				if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
				else if ("string" == typeof this._i) {
					var e = zt(is, this._i);
					null != e ? this.utcOffset(e) : this.utcOffset(0, !0)
				}
				return this
			}

			function Vt(e) {
				return !!this.isValid() && (e = e ? bt(e).utcOffset() : 0, (this.utcOffset() - e) % 60 === 0)
			}

			function Bt() {
				return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
			}

			function $t() {
				if (!o(this._isDSTShifted)) return this._isDSTShifted;
				var e = {};
				if (L(e, this), e = wt(e), e._a) {
					var t = e._isUTC ? c(e._a) : bt(e._a);
					this._isDSTShifted = this.isValid() && v(e._a, t.toArray()) > 0
				} else this._isDSTShifted = !1;
				return this._isDSTShifted
			}

			function Kt() {
				return !!this.isValid() && !this._isUTC
			}

			function Zt() {
				return !!this.isValid() && this._isUTC
			}

			function qt() {
				return !!this.isValid() && this._isUTC && 0 === this._offset
			}

			function Qt(e, t) {
				var n, a, s, r = e,
					i = null;
				return Wt(e) ? r = {
					ms: e._milliseconds,
					d: e._days,
					M: e._months
				} : d(e) ? (r = {}, t ? r[t] = e : r.milliseconds = e) : (i = er.exec(e)) ? (n = "-" === i[1] ? -1 : 1, r = {
					y: 0,
					d: k(i[hs]) * n,
					h: k(i[fs]) * n,
					m: k(i[Ms]) * n,
					s: k(i[ys]) * n,
					ms: k(Ft(1e3 * i[Ls])) * n
				}) : (i = tr.exec(e)) ? (n = "-" === i[1] ? -1 : ("+" === i[1], 1), r = {
					y: Xt(i[2], n),
					M: Xt(i[3], n),
					w: Xt(i[4], n),
					d: Xt(i[5], n),
					h: Xt(i[6], n),
					m: Xt(i[7], n),
					s: Xt(i[8], n)
				}) : null == r ? r = {} : "object" == typeof r && ("from" in r || "to" in r) && (s = tn(bt(r.from), bt(r.to)), r = {}, r.ms = s.milliseconds, r.M = s.months), a = new At(r), Wt(e) && l(e, "_locale") && (a._locale = e._locale), a
			}

			function Xt(e, t) {
				var n = e && parseFloat(e.replace(",", "."));
				return (isNaN(n) ? 0 : n) * t
			}

			function en(e, t) {
				var n = {
					milliseconds: 0,
					months: 0
				};
				return n.months = t.month() - e.month() + 12 * (t.year() - e.year()), e.clone().add(n.months, "M").isAfter(t) && --n.months, n.milliseconds = +t - +e.clone().add(n.months, "M"), n
			}

			function tn(e, t) {
				var n;
				return e.isValid() && t.isValid() ? (t = Ct(t, e), e.isBefore(t) ? n = en(e, t) : (n = en(t, e), n.milliseconds = -n.milliseconds, n.months = -n.months), n) : {
					milliseconds: 0,
					months: 0
				}
			}

			function nn(e, t) {
				return function(n, a) {
					var s, r;
					return null === a || isNaN(+a) || (T(t, "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), r = n, n = a, a = r), n = "string" == typeof n ? +n : n, s = Qt(n, a), an(this, s, e), this
				}
			}

			function an(e, n, a, s) {
				var r = n._milliseconds,
					i = Ft(n._days),
					o = Ft(n._months);
				e.isValid() && (s = null == s || s, o && fe(e, re(e, "Month") + o * a), i && ie(e, "Date", re(e, "Date") + i * a), r && e._d.setTime(e._d.valueOf() + r * a), s && t.updateOffset(e, i || o))
			}

			function sn(e, t) {
				var n = e.diff(t, "days", !0);
				return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse"
			}

			function rn(e, n) {
				var a = e || bt(),
					s = Ct(a, this).startOf("day"),
					r = t.calendarFormat(this, s) || "sameElse",
					i = n && (b(n[r]) ? n[r].call(this, a) : n[r]);
				return this.format(i || this.localeData().calendar(r, this, bt(a)))
			}

			function on() {
				return new p(this)
			}

			function dn(e, t) {
				var n = Y(e) ? e : bt(e);
				return !(!this.isValid() || !n.isValid()) && (t = z(o(t) ? "millisecond" : t), "millisecond" === t ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(t).valueOf())
			}

			function _n(e, t) {
				var n = Y(e) ? e : bt(e);
				return !(!this.isValid() || !n.isValid()) && (t = z(o(t) ? "millisecond" : t), "millisecond" === t ? this.valueOf() < n.valueOf() : this.clone().endOf(t).valueOf() < n.valueOf())
			}

			function un(e, t, n, a) {
				return a = a || "()", ("(" === a[0] ? this.isAfter(e, n) : !this.isBefore(e, n)) && (")" === a[1] ? this.isBefore(t, n) : !this.isAfter(t, n))
			}

			function ln(e, t) {
				var n, a = Y(e) ? e : bt(e);
				return !(!this.isValid() || !a.isValid()) && (t = z(t || "millisecond"), "millisecond" === t ? this.valueOf() === a.valueOf() : (n = a.valueOf(), this.clone().startOf(t).valueOf() <= n && n <= this.clone().endOf(t).valueOf()))
			}

			function mn(e, t) {
				return this.isSame(e, t) || this.isAfter(e, t)
			}

			function cn(e, t) {
				return this.isSame(e, t) || this.isBefore(e, t)
			}

			function hn(e, t, n) {
				var a, s, r;
				if (!this.isValid()) return NaN;
				if (a = Ct(e, this), !a.isValid()) return NaN;
				switch (s = 6e4 * (a.utcOffset() - this.utcOffset()), t = z(t)) {
					case "year":
						r = fn(this, a) / 12;
						break;
					case "month":
						r = fn(this, a);
						break;
					case "quarter":
						r = fn(this, a) / 3;
						break;
					case "second":
						r = (this - a) / 1e3;
						break;
					case "minute":
						r = (this - a) / 6e4;
						break;
					case "hour":
						r = (this - a) / 36e5;
						break;
					case "day":
						r = (this - a - s) / 864e5;
						break;
					case "week":
						r = (this - a - s) / 6048e5;
						break;
					default:
						r = this - a
				}
				return n ? r : g(r)
			}

			function fn(e, t) {
				var n, a, s = 12 * (t.year() - e.year()) + (t.month() - e.month()),
					r = e.clone().add(s, "months");
				return t - r < 0 ? (n = e.clone().add(s - 1, "months"), a = (t - r) / (r - n)) : (n = e.clone().add(s + 1, "months"), a = (t - r) / (n - r)), -(s + a) || 0
			}

			function Mn() {
				return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
			}

			function yn(e) {
				if (!this.isValid()) return null;
				var t = e !== !0,
					n = t ? this.clone().utc() : this;
				return n.year() < 0 || n.year() > 9999 ? V(n, t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : b(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3).toISOString().replace("Z", V(n, "Z")) : V(n, t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ")
			}

			function Ln() {
				if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
				var e = "moment",
					t = "";
				this.isLocal() || (e = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", t = "Z");
				var n = "[" + e + '("]',
					a = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY",
					s = "-MM-DD[T]HH:mm:ss.SSS",
					r = t + '[")]';
				return this.format(n + a + s + r)
			}

			function pn(e) {
				e || (e = this.isUtc() ? t.defaultFormatUtc : t.defaultFormat);
				var n = V(this, e);
				return this.localeData().postformat(n)
			}

			function Yn(e, t) {
				return this.isValid() && (Y(e) && e.isValid() || bt(e).isValid()) ? Qt({
					to: this,
					from: e
				}).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
			}

			function gn(e) {
				return this.from(bt(), e)
			}

			function kn(e, t) {
				return this.isValid() && (Y(e) && e.isValid() || bt(e).isValid()) ? Qt({
					from: this,
					to: e
				}).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
			}

			function vn(e) {
				return this.to(bt(), e)
			}

			function wn(e) {
				var t;
				return void 0 === e ? this._locale._abbr : (t = st(e), null != t && (this._locale = t), this)
			}

			function Dn() {
				return this._locale
			}

			function Tn(e) {
				switch (e = z(e)) {
					case "year":
						this.month(0);
					case "quarter":
					case "month":
						this.date(1);
					case "week":
					case "isoWeek":
					case "day":
					case "date":
						this.hours(0);
					case "hour":
						this.minutes(0);
					case "minute":
						this.seconds(0);
					case "second":
						this.milliseconds(0)
				}
				return "week" === e && this.weekday(0), "isoWeek" === e && this.isoWeekday(1), "quarter" === e && this.month(3 * Math.floor(this.month() / 3)), this
			}

			function bn(e) {
				return e = z(e), void 0 === e || "millisecond" === e ? this : ("date" === e && (e = "day"), this.startOf(e).add(1, "isoWeek" === e ? "week" : e).subtract(1, "ms"))
			}

			function Sn() {
				return this._d.valueOf() - 6e4 * (this._offset || 0)
			}

			function Hn() {
				return Math.floor(this.valueOf() / 1e3)
			}

			function jn() {
				return new Date(this.valueOf())
			}

			function xn() {
				var e = this;
				return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()]
			}

			function Pn() {
				var e = this;
				return {
					years: e.year(),
					months: e.month(),
					date: e.date(),
					hours: e.hours(),
					minutes: e.minutes(),
					seconds: e.seconds(),
					milliseconds: e.milliseconds()
				}
			}

			function On() {
				return this.isValid() ? this.toISOString() : null
			}

			function An() {
				return M(this)
			}

			function Wn() {
				return m({}, f(this))
			}

			function Fn() {
				return f(this).overflow
			}

			function En() {
				return {
					input: this._i,
					format: this._f,
					locale: this._locale,
					isUTC: this._isUTC,
					strict: this._strict
				}
			}

			function zn(e, t) {
				I(0, [e, e.length], 0, t)
			}

			function Cn(e) {
				return In.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
			}

			function Jn(e) {
				return In.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4)
			}

			function Rn() {
				return Te(this.year(), 1, 4)
			}

			function Nn() {
				var e = this.localeData()._week;
				return Te(this.year(), e.dow, e.doy)
			}

			function In(e, t, n, a, s) {
				var r;
				return null == e ? De(this, a, s).year : (r = Te(e, a, s), t > r && (t = r), Gn.call(this, e, t, n, a, s))
			}

			function Gn(e, t, n, a, s) {
				var r = we(e, t, n, a, s),
					i = ke(r.year, 0, r.dayOfYear);
				return this.year(i.getUTCFullYear()), this.month(i.getUTCMonth()), this.date(i.getUTCDate()), this
			}

			function Un(e) {
				return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3)
			}

			function Vn(e) {
				var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
				return null == e ? t : this.add(e - t, "d")
			}

			function Bn(e, t) {
				t[Ls] = k(1e3 * ("0." + e))
			}

			function $n() {
				return this._isUTC ? "UTC" : ""
			}

			function Kn() {
				return this._isUTC ? "Coordinated Universal Time" : ""
			}

			function Zn(e) {
				return bt(1e3 * e)
			}

			function qn() {
				return bt.apply(null, arguments).parseZone()
			}

			function Qn(e) {
				return e
			}

			function Xn(e, t, n, a) {
				var s = st(),
					r = c().set(a, t);
				return s[n](r, e)
			}

			function ea(e, t, n) {
				if (d(e) && (t = e, e = void 0), e = e || "", null != t) return Xn(e, t, n, "month");
				var a, s = [];
				for (a = 0; a < 12; a++) s[a] = Xn(e, a, n, "month");
				return s
			}

			function ta(e, t, n, a) {
				"boolean" == typeof e ? (d(t) && (n = t, t = void 0), t = t || "") : (t = e, n = t, e = !1, d(t) && (n = t, t = void 0), t = t || "");
				var s = st(),
					r = e ? s._week.dow : 0;
				if (null != n) return Xn(t, (n + r) % 7, a, "day");
				var i, o = [];
				for (i = 0; i < 7; i++) o[i] = Xn(t, (i + r) % 7, a, "day");
				return o
			}

			function na(e, t) {
				return ea(e, t, "months")
			}

			function aa(e, t) {
				return ea(e, t, "monthsShort")
			}

			function sa(e, t, n) {
				return ta(e, t, n, "weekdays")
			}

			function ra(e, t, n) {
				return ta(e, t, n, "weekdaysShort")
			}

			function ia(e, t, n) {
				return ta(e, t, n, "weekdaysMin")
			}

			function oa() {
				var e = this._data;
				return this._milliseconds = mr(this._milliseconds), this._days = mr(this._days), this._months = mr(this._months), e.milliseconds = mr(e.milliseconds), e.seconds = mr(e.seconds), e.minutes = mr(e.minutes), e.hours = mr(e.hours), e.months = mr(e.months), e.years = mr(e.years), this
			}

			function da(e, t, n, a) {
				var s = Qt(t, n);
				return e._milliseconds += a * s._milliseconds, e._days += a * s._days, e._months += a * s._months, e._bubble()
			}

			function _a(e, t) {
				return da(this, e, t, 1)
			}

			function ua(e, t) {
				return da(this, e, t, -1)
			}

			function la(e) {
				return e < 0 ? Math.floor(e) : Math.ceil(e)
			}

			function ma() {
				var e, t, n, a, s, r = this._milliseconds,
					i = this._days,
					o = this._months,
					d = this._data;
				return r >= 0 && i >= 0 && o >= 0 || r <= 0 && i <= 0 && o <= 0 || (r += 864e5 * la(ha(o) + i), i = 0, o = 0), d.milliseconds = r % 1e3, e = g(r / 1e3), d.seconds = e % 60, t = g(e / 60), d.minutes = t % 60, n = g(t / 60), d.hours = n % 24, i += g(n / 24), s = g(ca(i)), o += s, i -= la(ha(s)), a = g(o / 12), o %= 12, d.days = i, d.months = o, d.years = a, this
			}

			function ca(e) {
				return 4800 * e / 146097
			}

			function ha(e) {
				return 146097 * e / 4800
			}

			function fa(e) {
				if (!this.isValid()) return NaN;
				var t, n, a = this._milliseconds;
				if (e = z(e), "month" === e || "year" === e) return t = this._days + a / 864e5, n = this._months + ca(t), "month" === e ? n : n / 12;
				switch (t = this._days + Math.round(ha(this._months)), e) {
					case "week":
						return t / 7 + a / 6048e5;
					case "day":
						return t + a / 864e5;
					case "hour":
						return 24 * t + a / 36e5;
					case "minute":
						return 1440 * t + a / 6e4;
					case "second":
						return 86400 * t + a / 1e3;
					case "millisecond":
						return Math.floor(864e5 * t) + a;
					default:
						throw new Error("Unknown unit " + e)
				}
			}

			function Ma() {
				return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * k(this._months / 12) : NaN
			}

			function ya(e) {
				return function() {
					return this.as(e)
				}
			}

			function La() {
				return Qt(this)
			}

			function pa(e) {
				return e = z(e), this.isValid() ? this[e + "s"]() : NaN
			}

			function Ya(e) {
				return function() {
					return this.isValid() ? this._data[e] : NaN
				}
			}

			function ga() {
				return g(this.days() / 7)
			}

			function ka(e, t, n, a, s) {
				return s.relativeTime(t || 1, !!n, e, a)
			}

			function va(e, t, n) {
				var a = Qt(e).abs(),
					s = Sr(a.as("s")),
					r = Sr(a.as("m")),
					i = Sr(a.as("h")),
					o = Sr(a.as("d")),
					d = Sr(a.as("M")),
					_ = Sr(a.as("y")),
					u = s <= Hr.ss && ["s", s] || s < Hr.s && ["ss", s] || r <= 1 && ["m"] || r < Hr.m && ["mm", r] || i <= 1 && ["h"] || i < Hr.h && ["hh", i] || o <= 1 && ["d"] || o < Hr.d && ["dd", o] || d <= 1 && ["M"] || d < Hr.M && ["MM", d] || _ <= 1 && ["y"] || ["yy", _];
				return u[2] = t, u[3] = +e > 0, u[4] = n, ka.apply(null, u)
			}

			function wa(e) {
				return void 0 === e ? Sr : "function" == typeof e && (Sr = e, !0)
			}

			function Da(e, t) {
				return void 0 !== Hr[e] && (void 0 === t ? Hr[e] : (Hr[e] = t, "s" === e && (Hr.ss = t - 1), !0))
			}

			function Ta(e) {
				if (!this.isValid()) return this.localeData().invalidDate();
				var t = this.localeData(),
					n = va(this, !e, t);
				return e && (n = t.pastFuture(+this, n)), t.postformat(n)
			}

			function ba(e) {
				return (e > 0) - (e < 0) || +e
			}

			function Sa() {
				if (!this.isValid()) return this.localeData().invalidDate();
				var e, t, n, a = jr(this._milliseconds) / 1e3,
					s = jr(this._days),
					r = jr(this._months);
				e = g(a / 60), t = g(e / 60), a %= 60, e %= 60, n = g(r / 12), r %= 12;
				var i = n,
					o = r,
					d = s,
					_ = t,
					u = e,
					l = a ? a.toFixed(3).replace(/\.?0+$/, "") : "",
					m = this.asSeconds();
				if (!m) return "P0D";
				var c = m < 0 ? "-" : "",
					h = ba(this._months) !== ba(m) ? "-" : "",
					f = ba(this._days) !== ba(m) ? "-" : "",
					M = ba(this._milliseconds) !== ba(m) ? "-" : "";
				return c + "P" + (i ? h + i + "Y" : "") + (o ? h + o + "M" : "") + (d ? f + d + "D" : "") + (_ || u || l ? "T" : "") + (_ ? M + _ + "H" : "") + (u ? M + u + "M" : "") + (l ? M + l + "S" : "")
			}
			var Ha, ja;
			ja = Array.prototype.some ? Array.prototype.some : function(e) {
				for (var t = Object(this), n = t.length >>> 0, a = 0; a < n; a++)
					if (a in t && e.call(this, t[a], a, t)) return !0;
				return !1
			};
			var xa = t.momentProperties = [],
				Pa = !1,
				Oa = {};
			t.suppressDeprecationWarnings = !1, t.deprecationHandler = null;
			var Aa;
			Aa = Object.keys ? Object.keys : function(e) {
				var t, n = [];
				for (t in e) l(e, t) && n.push(t);
				return n
			};
			var Wa = {
					sameDay: "[Today at] LT",
					nextDay: "[Tomorrow at] LT",
					nextWeek: "dddd [at] LT",
					lastDay: "[Yesterday at] LT",
					lastWeek: "[Last] dddd [at] LT",
					sameElse: "L"
				},
				Fa = {
					LTS: "h:mm:ss A",
					LT: "h:mm A",
					L: "MM/DD/YYYY",
					LL: "MMMM D, YYYY",
					LLL: "MMMM D, YYYY h:mm A",
					LLLL: "dddd, MMMM D, YYYY h:mm A"
				},
				Ea = "Invalid date",
				za = "%d",
				Ca = /\d{1,2}/,
				Ja = {
					future: "in %s",
					past: "%s ago",
					s: "a few seconds",
					ss: "%d seconds",
					m: "a minute",
					mm: "%d minutes",
					h: "an hour",
					hh: "%d hours",
					d: "a day",
					dd: "%d days",
					M: "a month",
					MM: "%d months",
					y: "a year",
					yy: "%d years"
				},
				Ra = {},
				Na = {},
				Ia = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
				Ga = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
				Ua = {},
				Va = {},
				Ba = /\d/,
				$a = /\d\d/,
				Ka = /\d{3}/,
				Za = /\d{4}/,
				qa = /[+-]?\d{6}/,
				Qa = /\d\d?/,
				Xa = /\d\d\d\d?/,
				es = /\d\d\d\d\d\d?/,
				ts = /\d{1,3}/,
				ns = /\d{1,4}/,
				as = /[+-]?\d{1,6}/,
				ss = /\d+/,
				rs = /[+-]?\d+/,
				is = /Z|[+-]\d\d:?\d\d/gi,
				os = /Z|[+-]\d\d(?::?\d\d)?/gi,
				ds = /[+-]?\d+(\.\d{1,3})?/,
				_s = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
				us = {},
				ls = {},
				ms = 0,
				cs = 1,
				hs = 2,
				fs = 3,
				Ms = 4,
				ys = 5,
				Ls = 6,
				ps = 7,
				Ys = 8;
			I("Y", 0, 0, function() {
				var e = this.year();
				return e <= 9999 ? "" + e : "+" + e
			}), I(0, ["YY", 2], 0, function() {
				return this.year() % 100
			}), I(0, ["YYYY", 4], 0, "year"), I(0, ["YYYYY", 5], 0, "year"), I(0, ["YYYYYY", 6, !0], 0, "year"), E("year", "y"), J("year", 1), $("Y", rs), $("YY", Qa, $a), $("YYYY", ns, Za), $("YYYYY", as, qa), $("YYYYYY", as, qa), Q(["YYYYY", "YYYYYY"], ms), Q("YYYY", function(e, n) {
				n[ms] = 2 === e.length ? t.parseTwoDigitYear(e) : k(e)
			}), Q("YY", function(e, n) {
				n[ms] = t.parseTwoDigitYear(e)
			}), Q("Y", function(e, t) {
				t[ms] = parseInt(e, 10)
			}), t.parseTwoDigitYear = function(e) {
				return k(e) + (k(e) > 68 ? 1900 : 2e3)
			};
			var gs, ks = se("FullYear", !0);
			gs = Array.prototype.indexOf ? Array.prototype.indexOf : function(e) {
				var t;
				for (t = 0; t < this.length; ++t)
					if (this[t] === e) return t;
				return -1
			}, I("M", ["MM", 2], "Mo", function() {
				return this.month() + 1
			}), I("MMM", 0, 0, function(e) {
				return this.localeData().monthsShort(this, e)
			}), I("MMMM", 0, 0, function(e) {
				return this.localeData().months(this, e)
			}), E("month", "M"), J("month", 8), $("M", Qa), $("MM", Qa, $a), $("MMM", function(e, t) {
				return t.monthsShortRegex(e)
			}), $("MMMM", function(e, t) {
				return t.monthsRegex(e)
			}), Q(["M", "MM"], function(e, t) {
				t[cs] = k(e) - 1
			}), Q(["MMM", "MMMM"], function(e, t, n, a) {
				var s = n._locale.monthsParse(e, a, n._strict);
				null != s ? t[cs] = s : f(n).invalidMonth = e
			});
			var vs = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
				ws = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
				Ds = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
				Ts = _s,
				bs = _s;
			I("w", ["ww", 2], "wo", "week"), I("W", ["WW", 2], "Wo", "isoWeek"), E("week", "w"), E("isoWeek", "W"), J("week", 5), J("isoWeek", 5), $("w", Qa), $("ww", Qa, $a), $("W", Qa), $("WW", Qa, $a), X(["w", "ww", "W", "WW"], function(e, t, n, a) {
				t[a.substr(0, 1)] = k(e)
			});
			var Ss = {
				dow: 0,
				doy: 6
			};
			I("d", 0, "do", "day"), I("dd", 0, 0, function(e) {
				return this.localeData().weekdaysMin(this, e)
			}), I("ddd", 0, 0, function(e) {
				return this.localeData().weekdaysShort(this, e)
			}), I("dddd", 0, 0, function(e) {
				return this.localeData().weekdays(this, e)
			}), I("e", 0, 0, "weekday"), I("E", 0, 0, "isoWeekday"), E("day", "d"), E("weekday", "e"), E("isoWeekday", "E"), J("day", 11), J("weekday", 11), J("isoWeekday", 11), $("d", Qa), $("e", Qa), $("E", Qa), $("dd", function(e, t) {
				return t.weekdaysMinRegex(e)
			}), $("ddd", function(e, t) {
				return t.weekdaysShortRegex(e)
			}), $("dddd", function(e, t) {
				return t.weekdaysRegex(e)
			}), X(["dd", "ddd", "dddd"], function(e, t, n, a) {
				var s = n._locale.weekdaysParse(e, a, n._strict);
				null != s ? t.d = s : f(n).invalidWeekday = e
			}), X(["d", "e", "E"], function(e, t, n, a) {
				t[a] = k(e)
			});
			var Hs = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
				js = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
				xs = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
				Ps = _s,
				Os = _s,
				As = _s;
			I("H", ["HH", 2], 0, "hour"), I("h", ["hh", 2], 0, Ve), I("k", ["kk", 2], 0, Be), I("hmm", 0, 0, function() {
				return "" + Ve.apply(this) + N(this.minutes(), 2)
			}), I("hmmss", 0, 0, function() {
				return "" + Ve.apply(this) + N(this.minutes(), 2) + N(this.seconds(), 2)
			}), I("Hmm", 0, 0, function() {
				return "" + this.hours() + N(this.minutes(), 2)
			}), I("Hmmss", 0, 0, function() {
				return "" + this.hours() + N(this.minutes(), 2) + N(this.seconds(), 2)
			}), $e("a", !0), $e("A", !1), E("hour", "h"), J("hour", 13), $("a", Ke), $("A", Ke), $("H", Qa), $("h", Qa), $("k", Qa), $("HH", Qa, $a), $("hh", Qa, $a), $("kk", Qa, $a), $("hmm", Xa), $("hmmss", es), $("Hmm", Xa), $("Hmmss", es), Q(["H", "HH"], fs), Q(["k", "kk"], function(e, t, n) {
				var a = k(e);
				t[fs] = 24 === a ? 0 : a
			}), Q(["a", "A"], function(e, t, n) {
				n._isPm = n._locale.isPM(e), n._meridiem = e
			}), Q(["h", "hh"], function(e, t, n) {
				t[fs] = k(e), f(n).bigHour = !0
			}), Q("hmm", function(e, t, n) {
				var a = e.length - 2;
				t[fs] = k(e.substr(0, a)), t[Ms] = k(e.substr(a)), f(n).bigHour = !0
			}), Q("hmmss", function(e, t, n) {
				var a = e.length - 4,
					s = e.length - 2;
				t[fs] = k(e.substr(0, a)), t[Ms] = k(e.substr(a, 2)), t[ys] = k(e.substr(s)), f(n).bigHour = !0
			}), Q("Hmm", function(e, t, n) {
				var a = e.length - 2;
				t[fs] = k(e.substr(0, a)), t[Ms] = k(e.substr(a))
			}), Q("Hmmss", function(e, t, n) {
				var a = e.length - 4,
					s = e.length - 2;
				t[fs] = k(e.substr(0, a)), t[Ms] = k(e.substr(a, 2)), t[ys] = k(e.substr(s))
			});
			var Ws, Fs = /[ap]\.?m?\.?/i,
				Es = se("Hours", !0),
				zs = {
					calendar: Wa,
					longDateFormat: Fa,
					invalidDate: Ea,
					ordinal: za,
					dayOfMonthOrdinalParse: Ca,
					relativeTime: Ja,
					months: ws,
					monthsShort: Ds,
					week: Ss,
					weekdays: Hs,
					weekdaysMin: xs,
					weekdaysShort: js,
					meridiemParse: Fs
				},
				Cs = {},
				Js = {},
				Rs = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
				Ns = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
				Is = /Z|[+-]\d\d(?::?\d\d)?/,
				Gs = [
					["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
					["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
					["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
					["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
					["YYYY-DDD", /\d{4}-\d{3}/],
					["YYYY-MM", /\d{4}-\d\d/, !1],
					["YYYYYYMMDD", /[+-]\d{10}/],
					["YYYYMMDD", /\d{8}/],
					["GGGG[W]WWE", /\d{4}W\d{3}/],
					["GGGG[W]WW", /\d{4}W\d{2}/, !1],
					["YYYYDDD", /\d{7}/]
				],
				Us = [
					["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
					["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
					["HH:mm:ss", /\d\d:\d\d:\d\d/],
					["HH:mm", /\d\d:\d\d/],
					["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
					["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
					["HHmmss", /\d\d\d\d\d\d/],
					["HHmm", /\d\d\d\d/],
					["HH", /\d\d/]
				],
				Vs = /^\/?Date\((\-?\d+)/i,
				Bs = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
				$s = {
					UT: 0,
					GMT: 0,
					EDT: -240,
					EST: -300,
					CDT: -300,
					CST: -360,
					MDT: -360,
					MST: -420,
					PDT: -420,
					PST: -480
				};
			t.createFromInputFallback = D("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(e) {
				e._d = new Date(e._i + (e._useUTC ? " UTC" : ""))
			}), t.ISO_8601 = function() {}, t.RFC_2822 = function() {};
			var Ks = D("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
					var e = bt.apply(null, arguments);
					return this.isValid() && e.isValid() ? e < this ? this : e : y()
				}),
				Zs = D("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
					var e = bt.apply(null, arguments);
					return this.isValid() && e.isValid() ? e > this ? this : e : y()
				}),
				qs = function() {
					return Date.now ? Date.now() : +new Date
				},
				Qs = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];
			Et("Z", ":"), Et("ZZ", ""), $("Z", os), $("ZZ", os), Q(["Z", "ZZ"], function(e, t, n) {
				n._useUTC = !0, n._tzm = zt(os, e)
			});
			var Xs = /([\+\-]|\d\d)/gi;
			t.updateOffset = function() {};
			var er = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
				tr = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
			Qt.fn = At.prototype, Qt.invalid = Ot;
			var nr = nn(1, "add"),
				ar = nn(-1, "subtract");
			t.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", t.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
			var sr = D("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(e) {
				return void 0 === e ? this.localeData() : this.locale(e)
			});
			I(0, ["gg", 2], 0, function() {
				return this.weekYear() % 100
			}), I(0, ["GG", 2], 0, function() {
				return this.isoWeekYear() % 100
			}), zn("gggg", "weekYear"), zn("ggggg", "weekYear"), zn("GGGG", "isoWeekYear"), zn("GGGGG", "isoWeekYear"), E("weekYear", "gg"), E("isoWeekYear", "GG"), J("weekYear", 1), J("isoWeekYear", 1), $("G", rs), $("g", rs), $("GG", Qa, $a), $("gg", Qa, $a), $("GGGG", ns, Za), $("gggg", ns, Za), $("GGGGG", as, qa), $("ggggg", as, qa), X(["gggg", "ggggg", "GGGG", "GGGGG"], function(e, t, n, a) {
				t[a.substr(0, 2)] = k(e)
			}), X(["gg", "GG"], function(e, n, a, s) {
				n[s] = t.parseTwoDigitYear(e)
			}), I("Q", 0, "Qo", "quarter"), E("quarter", "Q"), J("quarter", 7), $("Q", Ba), Q("Q", function(e, t) {
				t[cs] = 3 * (k(e) - 1)
			}), I("D", ["DD", 2], "Do", "date"), E("date", "D"), J("date", 9), $("D", Qa), $("DD", Qa, $a), $("Do", function(e, t) {
				return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient
			}), Q(["D", "DD"], hs), Q("Do", function(e, t) {
				t[hs] = k(e.match(Qa)[0])
			});
			var rr = se("Date", !0);
			I("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), E("dayOfYear", "DDD"), J("dayOfYear", 4), $("DDD", ts), $("DDDD", Ka), Q(["DDD", "DDDD"], function(e, t, n) {
				n._dayOfYear = k(e)
			}), I("m", ["mm", 2], 0, "minute"), E("minute", "m"), J("minute", 14), $("m", Qa), $("mm", Qa, $a), Q(["m", "mm"], Ms);
			var ir = se("Minutes", !1);
			I("s", ["ss", 2], 0, "second"), E("second", "s"), J("second", 15), $("s", Qa), $("ss", Qa, $a), Q(["s", "ss"], ys);
			var or = se("Seconds", !1);
			I("S", 0, 0, function() {
				return ~~(this.millisecond() / 100)
			}), I(0, ["SS", 2], 0, function() {
				return ~~(this.millisecond() / 10)
			}), I(0, ["SSS", 3], 0, "millisecond"), I(0, ["SSSS", 4], 0, function() {
				return 10 * this.millisecond()
			}), I(0, ["SSSSS", 5], 0, function() {
				return 100 * this.millisecond()
			}), I(0, ["SSSSSS", 6], 0, function() {
				return 1e3 * this.millisecond()
			}), I(0, ["SSSSSSS", 7], 0, function() {
				return 1e4 * this.millisecond()
			}), I(0, ["SSSSSSSS", 8], 0, function() {
				return 1e5 * this.millisecond()
			}), I(0, ["SSSSSSSSS", 9], 0, function() {
				return 1e6 * this.millisecond()
			}), E("millisecond", "ms"), J("millisecond", 16), $("S", ts, Ba), $("SS", ts, $a), $("SSS", ts, Ka);
			var dr;
			for (dr = "SSSS"; dr.length <= 9; dr += "S") $(dr, ss);
			for (dr = "S"; dr.length <= 9; dr += "S") Q(dr, Bn);
			var _r = se("Milliseconds", !1);
			I("z", 0, 0, "zoneAbbr"), I("zz", 0, 0, "zoneName");
			var ur = p.prototype;
			ur.add = nr, ur.calendar = rn, ur.clone = on, ur.diff = hn, ur.endOf = bn, ur.format = pn, ur.from = Yn, ur.fromNow = gn, ur.to = kn, ur.toNow = vn, ur.get = oe, ur.invalidAt = Fn, ur.isAfter = dn, ur.isBefore = _n, ur.isBetween = un, ur.isSame = ln, ur.isSameOrAfter = mn, ur.isSameOrBefore = cn, ur.isValid = An, ur.lang = sr, ur.locale = wn, ur.localeData = Dn, ur.max = Zs, ur.min = Ks, ur.parsingFlags = Wn, ur.set = de, ur.startOf = Tn, ur.subtract = ar, ur.toArray = xn, ur.toObject = Pn, ur.toDate = jn, ur.toISOString = yn, ur.inspect = Ln, ur.toJSON = On, ur.toString = Mn, ur.unix = Hn, ur.valueOf = Sn, ur.creationData = En, ur.year = ks, ur.isLeapYear = ae, ur.weekYear = Cn, ur.isoWeekYear = Jn, ur.quarter = ur.quarters = Un, ur.month = Me, ur.daysInMonth = ye, ur.week = ur.weeks = je, ur.isoWeek = ur.isoWeeks = xe, ur.weeksInYear = Nn, ur.isoWeeksInYear = Rn, ur.date = rr, ur.day = ur.days = Ce, ur.weekday = Je, ur.isoWeekday = Re, ur.dayOfYear = Vn, ur.hour = ur.hours = Es, ur.minute = ur.minutes = ir, ur.second = ur.seconds = or, ur.millisecond = ur.milliseconds = _r, ur.utcOffset = Rt, ur.utc = It, ur.local = Gt, ur.parseZone = Ut, ur.hasAlignedHourOffset = Vt, ur.isDST = Bt, ur.isLocal = Kt, ur.isUtcOffset = Zt, ur.isUtc = qt, ur.isUTC = qt, ur.zoneAbbr = $n, ur.zoneName = Kn, ur.dates = D("dates accessor is deprecated. Use date instead.", rr), ur.months = D("months accessor is deprecated. Use month instead", Me), ur.years = D("years accessor is deprecated. Use year instead", ks), ur.zone = D("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", Nt), ur.isDSTShifted = D("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", $t);
			var lr = j.prototype;
			lr.calendar = x, lr.longDateFormat = P, lr.invalidDate = O, lr.ordinal = A, lr.preparse = Qn, lr.postformat = Qn, lr.relativeTime = W, lr.pastFuture = F, lr.set = S, lr.months = le, lr.monthsShort = me, lr.monthsParse = he, lr.monthsRegex = pe, lr.monthsShortRegex = Le, lr.week = be, lr.firstDayOfYear = He, lr.firstDayOfWeek = Se, lr.weekdays = Ae, lr.weekdaysMin = Fe, lr.weekdaysShort = We, lr.weekdaysParse = ze, lr.weekdaysRegex = Ne, lr.weekdaysShortRegex = Ie, lr.weekdaysMinRegex = Ge, lr.isPM = Ze, lr.meridiem = qe, tt("en", {
				dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
				ordinal: function(e) {
					var t = e % 10,
						n = 1 === k(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
					return e + n
				}
			}), t.lang = D("moment.lang is deprecated. Use moment.locale instead.", tt), t.langData = D("moment.langData is deprecated. Use moment.localeData instead.", st);
			var mr = Math.abs,
				cr = ya("ms"),
				hr = ya("s"),
				fr = ya("m"),
				Mr = ya("h"),
				yr = ya("d"),
				Lr = ya("w"),
				pr = ya("M"),
				Yr = ya("y"),
				gr = Ya("milliseconds"),
				kr = Ya("seconds"),
				vr = Ya("minutes"),
				wr = Ya("hours"),
				Dr = Ya("days"),
				Tr = Ya("months"),
				br = Ya("years"),
				Sr = Math.round,
				Hr = {
					ss: 44,
					s: 45,
					m: 45,
					h: 22,
					d: 26,
					M: 11
				},
				jr = Math.abs,
				xr = At.prototype;
			return xr.isValid = Pt, xr.abs = oa, xr.add = _a, xr.subtract = ua, xr.as = fa, xr.asMilliseconds = cr, xr.asSeconds = hr, xr.asMinutes = fr, xr.asHours = Mr, xr.asDays = yr, xr.asWeeks = Lr, xr.asMonths = pr, xr.asYears = Yr, xr.valueOf = Ma, xr._bubble = ma, xr.clone = La, xr.get = pa, xr.milliseconds = gr, xr.seconds = kr, xr.minutes = vr, xr.hours = wr, xr.days = Dr, xr.weeks = ga, xr.months = Tr, xr.years = br, xr.humanize = Ta, xr.toISOString = Sa, xr.toString = Sa, xr.toJSON = Sa, xr.locale = wn, xr.localeData = Dn, xr.toIsoString = D("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Sa), xr.lang = sr, I("X", 0, 0, "unix"), I("x", 0, 0, "valueOf"), $("x", rs), $("X", ds), Q("X", function(e, t, n) {
				n._d = new Date(1e3 * parseFloat(e, 10))
			}), Q("x", function(e, t, n) {
				n._d = new Date(k(e))
			}), t.version = "2.22.0", a(bt), t.fn = ur, t.min = Ht, t.max = jt, t.now = qs, t.utc = c, t.unix = Zn, t.months = na, t.isDate = _, t.locale = tt, t.invalid = y, t.duration = Qt, t.isMoment = Y, t.weekdays = sa, t.parseZone = qn, t.localeData = st, t.isDuration = Wt, t.monthsShort = aa, t.weekdaysMin = ia, t.defineLocale = nt, t.updateLocale = at, t.locales = rt, t.weekdaysShort = ra, t.normalizeUnits = z, t.relativeTimeRounding = wa, t.relativeTimeThreshold = Da, t.calendarFormat = sn, t.prototype = ur, t.HTML5_FMT = {
				DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
				DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
				DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
				DATE: "YYYY-MM-DD",
				TIME: "HH:mm",
				TIME_SECONDS: "HH:mm:ss",
				TIME_MS: "HH:mm:ss.SSS",
				WEEK: "YYYY-[W]WW",
				MONTH: "YYYY-MM"
			}, t
		})
	}).call(t, n(316)(e))
}, , , , function(e, t) {
	var n = e.exports = {
		version: "2.5.5"
	};
	"number" == typeof __e && (__e = n)
}, function(e, t) {
	"use strict";
	var n = String.prototype.replace,
		a = /%20/g;
	e.exports = {
		default: "RFC3986",
		formatters: {
			RFC1738: function(e) {
				return n.call(e, a, "+")
			},
			RFC3986: function(e) {
				return e
			}
		},
		RFC1738: "RFC1738",
		RFC3986: "RFC3986"
	}
}, function(e, t) {
	"use strict";
	var n = Object.prototype.hasOwnProperty,
		a = function() {
			for (var e = [], t = 0; t < 256; ++t) e.push("%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase());
			return e
		}(),
		s = function(e) {
			for (var t; e.length;) {
				var n = e.pop();
				if (t = n.obj[n.prop], Array.isArray(t)) {
					for (var a = [], s = 0; s < t.length; ++s) "undefined" != typeof t[s] && a.push(t[s]);
					n.obj[n.prop] = a
				}
			}
			return t
		};
	t.arrayToObject = function(e, t) {
		for (var n = t && t.plainObjects ? Object.create(null) : {}, a = 0; a < e.length; ++a) "undefined" != typeof e[a] && (n[a] = e[a]);
		return n
	}, t.merge = function(e, a, s) {
		if (!a) return e;
		if ("object" != typeof a) {
			if (Array.isArray(e)) e.push(a);
			else {
				if ("object" != typeof e) return [e, a];
				(s.plainObjects || s.allowPrototypes || !n.call(Object.prototype, a)) && (e[a] = !0)
			}
			return e
		}
		if ("object" != typeof e) return [e].concat(a);
		var r = e;
		return Array.isArray(e) && !Array.isArray(a) && (r = t.arrayToObject(e, s)), Array.isArray(e) && Array.isArray(a) ? (a.forEach(function(a, r) {
			n.call(e, r) ? e[r] && "object" == typeof e[r] ? e[r] = t.merge(e[r], a, s) : e.push(a) : e[r] = a
		}), e) : Object.keys(a).reduce(function(e, r) {
			var i = a[r];
			return n.call(e, r) ? e[r] = t.merge(e[r], i, s) : e[r] = i, e
		}, r)
	}, t.assign = function(e, t) {
		return Object.keys(t).reduce(function(e, n) {
			return e[n] = t[n], e
		}, e)
	}, t.decode = function(e) {
		try {
			return decodeURIComponent(e.replace(/\+/g, " "))
		} catch (t) {
			return e
		}
	}, t.encode = function(e) {
		if (0 === e.length) return e;
		for (var t = "string" == typeof e ? e : String(e), n = "", s = 0; s < t.length; ++s) {
			var r = t.charCodeAt(s);
			45 === r || 46 === r || 95 === r || 126 === r || r >= 48 && r <= 57 || r >= 65 && r <= 90 || r >= 97 && r <= 122 ? n += t.charAt(s) : r < 128 ? n += a[r] : r < 2048 ? n += a[192 | r >> 6] + a[128 | 63 & r] : r < 55296 || r >= 57344 ? n += a[224 | r >> 12] + a[128 | r >> 6 & 63] + a[128 | 63 & r] : (s += 1, r = 65536 + ((1023 & r) << 10 | 1023 & t.charCodeAt(s)), n += a[240 | r >> 18] + a[128 | r >> 12 & 63] + a[128 | r >> 6 & 63] + a[128 | 63 & r])
		}
		return n
	}, t.compact = function(e) {
		for (var t = [{
				obj: {
					o: e
				},
				prop: "o"
			}], n = [], a = 0; a < t.length; ++a)
			for (var r = t[a], i = r.obj[r.prop], o = Object.keys(i), d = 0; d < o.length; ++d) {
				var _ = o[d],
					u = i[_];
				"object" == typeof u && null !== u && n.indexOf(u) === -1 && (t.push({
					obj: i,
					prop: _
				}), n.push(u))
			}
		return s(t)
	}, t.isRegExp = function(e) {
		return "[object RegExp]" === Object.prototype.toString.call(e)
	}, t.isBuffer = function(e) {
		return null !== e && "undefined" != typeof e && !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e))
	}
}, function(e, t, n) {
	var a = n(48)("wks"),
		s = n(36),
		r = n(10).Symbol,
		i = "function" == typeof r,
		o = e.exports = function(e) {
			return a[e] || (a[e] = i && r[e] || (i ? r : s)("Symbol." + e))
		};
	o.store = a
}, function(e, t, n) {
	"use strict";
	var a = n(17),
		s = n(16),
		r = n(6);
	e.exports = {
		formats: r,
		parse: s,
		stringify: a
	}
}, function(e, t) {
	var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
	"number" == typeof __g && (__g = n)
}, function(e, t, n) {
	var a = n(24),
		s = n(79),
		r = n(50),
		i = Object.defineProperty;
	t.f = n(12) ? Object.defineProperty : function(e, t, n) {
		if (a(e), t = r(t, !0), a(n), s) try {
			return i(e, t, n)
		} catch (e) {}
		if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
		return "value" in n && (e[t] = n.value), e
	}
}, function(e, t, n) {
	e.exports = !n(19)(function() {
		return 7 != Object.defineProperty({}, "a", {
			get: function() {
				return 7
			}
		}).a
	})
}, function(e, t) {
	var n = {}.hasOwnProperty;
	e.exports = function(e, t) {
		return n.call(e, t)
	}
}, , , function(e, t, n) {
	"use strict";
	var a = n(7),
		s = Object.prototype.hasOwnProperty,
		r = {
			allowDots: !1,
			allowPrototypes: !1,
			arrayLimit: 20,
			decoder: a.decode,
			delimiter: "&",
			depth: 5,
			parameterLimit: 1e3,
			plainObjects: !1,
			strictNullHandling: !1
		},
		i = function(e, t) {
			for (var n = {}, a = t.ignoreQueryPrefix ? e.replace(/^\?/, "") : e, i = t.parameterLimit === 1 / 0 ? void 0 : t.parameterLimit, o = a.split(t.delimiter, i), d = 0; d < o.length; ++d) {
				var _, u, l = o[d],
					m = l.indexOf("]="),
					c = m === -1 ? l.indexOf("=") : m + 1;
				c === -1 ? (_ = t.decoder(l, r.decoder), u = t.strictNullHandling ? null : "") : (_ = t.decoder(l.slice(0, c), r.decoder), u = t.decoder(l.slice(c + 1), r.decoder)), s.call(n, _) ? n[_] = [].concat(n[_]).concat(u) : n[_] = u
			}
			return n
		},
		o = function(e, t, n) {
			for (var a = t, s = e.length - 1; s >= 0; --s) {
				var r, i = e[s];
				if ("[]" === i) r = [], r = r.concat(a);
				else {
					r = n.plainObjects ? Object.create(null) : {};
					var o = "[" === i.charAt(0) && "]" === i.charAt(i.length - 1) ? i.slice(1, -1) : i,
						d = parseInt(o, 10);
					!isNaN(d) && i !== o && String(d) === o && d >= 0 && n.parseArrays && d <= n.arrayLimit ? (r = [], r[d] = a) : r[o] = a
				}
				a = r
			}
			return a
		},
		d = function(e, t, n) {
			if (e) {
				var a = n.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e,
					r = /(\[[^[\]]*])/,
					i = /(\[[^[\]]*])/g,
					d = r.exec(a),
					_ = d ? a.slice(0, d.index) : a,
					u = [];
				if (_) {
					if (!n.plainObjects && s.call(Object.prototype, _) && !n.allowPrototypes) return;
					u.push(_)
				}
				for (var l = 0; null !== (d = i.exec(a)) && l < n.depth;) {
					if (l += 1, !n.plainObjects && s.call(Object.prototype, d[1].slice(1, -1)) && !n.allowPrototypes) return;
					u.push(d[1])
				}
				return d && u.push("[" + a.slice(d.index) + "]"), o(u, t, n)
			}
		};
	e.exports = function(e, t) {
		var n = t ? a.assign({}, t) : {};
		if (null !== n.decoder && void 0 !== n.decoder && "function" != typeof n.decoder) throw new TypeError("Decoder has to be a function.");
		if (n.ignoreQueryPrefix = n.ignoreQueryPrefix === !0, n.delimiter = "string" == typeof n.delimiter || a.isRegExp(n.delimiter) ? n.delimiter : r.delimiter, n.depth = "number" == typeof n.depth ? n.depth : r.depth, n.arrayLimit = "number" == typeof n.arrayLimit ? n.arrayLimit : r.arrayLimit, n.parseArrays = n.parseArrays !== !1, n.decoder = "function" == typeof n.decoder ? n.decoder : r.decoder, n.allowDots = "boolean" == typeof n.allowDots ? n.allowDots : r.allowDots, n.plainObjects = "boolean" == typeof n.plainObjects ? n.plainObjects : r.plainObjects, n.allowPrototypes = "boolean" == typeof n.allowPrototypes ? n.allowPrototypes : r.allowPrototypes, n.parameterLimit = "number" == typeof n.parameterLimit ? n.parameterLimit : r.parameterLimit, n.strictNullHandling = "boolean" == typeof n.strictNullHandling ? n.strictNullHandling : r.strictNullHandling, "" === e || null === e || "undefined" == typeof e) return n.plainObjects ? Object.create(null) : {};
		for (var s = "string" == typeof e ? i(e, n) : e, o = n.plainObjects ? Object.create(null) : {}, _ = Object.keys(s), u = 0; u < _.length; ++u) {
			var l = _[u],
				m = d(l, s[l], n);
			o = a.merge(o, m, n)
		}
		return a.compact(o)
	}
}, function(e, t, n) {
	"use strict";
	var a = n(7),
		s = n(6),
		r = {
			brackets: function(e) {
				return e + "[]"
			},
			indices: function(e, t) {
				return e + "[" + t + "]"
			},
			repeat: function(e) {
				return e
			}
		},
		i = Date.prototype.toISOString,
		o = {
			delimiter: "&",
			encode: !0,
			encoder: a.encode,
			encodeValuesOnly: !1,
			serializeDate: function(e) {
				return i.call(e)
			},
			skipNulls: !1,
			strictNullHandling: !1
		},
		d = function e(t, n, s, r, i, d, _, u, l, m, c, h) {
			var f = t;
			if ("function" == typeof _) f = _(n, f);
			else if (f instanceof Date) f = m(f);
			else if (null === f) {
				if (r) return d && !h ? d(n, o.encoder) : n;
				f = ""
			}
			if ("string" == typeof f || "number" == typeof f || "boolean" == typeof f || a.isBuffer(f)) {
				if (d) {
					var M = h ? n : d(n, o.encoder);
					return [c(M) + "=" + c(d(f, o.encoder))]
				}
				return [c(n) + "=" + c(String(f))]
			}
			var y = [];
			if ("undefined" == typeof f) return y;
			var L;
			if (Array.isArray(_)) L = _;
			else {
				var p = Object.keys(f);
				L = u ? p.sort(u) : p
			}
			for (var Y = 0; Y < L.length; ++Y) {
				var g = L[Y];
				i && null === f[g] || (y = Array.isArray(f) ? y.concat(e(f[g], s(n, g), s, r, i, d, _, u, l, m, c, h)) : y.concat(e(f[g], n + (l ? "." + g : "[" + g + "]"), s, r, i, d, _, u, l, m, c, h)))
			}
			return y
		};
	e.exports = function(e, t) {
		var n = e,
			i = t ? a.assign({}, t) : {};
		if (null !== i.encoder && void 0 !== i.encoder && "function" != typeof i.encoder) throw new TypeError("Encoder has to be a function.");
		var _ = "undefined" == typeof i.delimiter ? o.delimiter : i.delimiter,
			u = "boolean" == typeof i.strictNullHandling ? i.strictNullHandling : o.strictNullHandling,
			l = "boolean" == typeof i.skipNulls ? i.skipNulls : o.skipNulls,
			m = "boolean" == typeof i.encode ? i.encode : o.encode,
			c = "function" == typeof i.encoder ? i.encoder : o.encoder,
			h = "function" == typeof i.sort ? i.sort : null,
			f = "undefined" != typeof i.allowDots && i.allowDots,
			M = "function" == typeof i.serializeDate ? i.serializeDate : o.serializeDate,
			y = "boolean" == typeof i.encodeValuesOnly ? i.encodeValuesOnly : o.encodeValuesOnly;
		if ("undefined" == typeof i.format) i.format = s.default;
		else if (!Object.prototype.hasOwnProperty.call(s.formatters, i.format)) throw new TypeError("Unknown format option provided.");
		var L, p, Y = s.formatters[i.format];
		"function" == typeof i.filter ? (p = i.filter, n = p("", n)) : Array.isArray(i.filter) && (p = i.filter, L = p);
		var g = [];
		if ("object" != typeof n || null === n) return "";
		var k;
		k = i.arrayFormat in r ? i.arrayFormat : "indices" in i ? i.indices ? "indices" : "repeat" : "indices";
		var v = r[k];
		L || (L = Object.keys(n)), h && L.sort(h);
		for (var w = 0; w < L.length; ++w) {
			var D = L[w];
			l && null === n[D] || (g = g.concat(d(n[D], D, v, u, l, m ? c : null, p, h, f, M, Y, y)))
		}
		var T = g.join(_),
			b = i.addQueryPrefix === !0 ? "?" : "";
		return T.length > 0 ? b + T : ""
	}
}, function(e, t, n) {
	var a = n(10),
		s = n(5),
		r = n(77),
		i = n(20),
		o = n(13),
		d = "prototype",
		_ = function(e, t, n) {
			var u, l, m, c = e & _.F,
				h = e & _.G,
				f = e & _.S,
				M = e & _.P,
				y = e & _.B,
				L = e & _.W,
				p = h ? s : s[t] || (s[t] = {}),
				Y = p[d],
				g = h ? a : f ? a[t] : (a[t] || {})[d];
			h && (n = t);
			for (u in n) l = !c && g && void 0 !== g[u], l && o(p, u) || (m = l ? g[u] : n[u], p[u] = h && "function" != typeof g[u] ? n[u] : y && l ? r(m, a) : L && g[u] == m ? function(e) {
				var t = function(t, n, a) {
					if (this instanceof e) {
						switch (arguments.length) {
							case 0:
								return new e;
							case 1:
								return new e(t);
							case 2:
								return new e(t, n)
						}
						return new e(t, n, a)
					}
					return e.apply(this, arguments)
				};
				return t[d] = e[d], t
			}(m) : M && "function" == typeof m ? r(Function.call, m) : m, M && ((p.virtual || (p.virtual = {}))[u] = m, e & _.R && Y && !Y[u] && i(Y, u, m)))
		};
	_.F = 1, _.G = 2, _.S = 4, _.P = 8, _.B = 16, _.W = 32, _.U = 64, _.R = 128, e.exports = _
}, function(e, t) {
	e.exports = function(e) {
		try {
			return !!e()
		} catch (e) {
			return !0
		}
	}
}, function(e, t, n) {
	var a = n(11),
		s = n(28);
	e.exports = n(12) ? function(e, t, n) {
		return a.f(e, t, s(1, n))
	} : function(e, t, n) {
		return e[t] = n, e
	}
}, function(e, t, n) {
	var a = n(80),
		s = n(42);
	e.exports = function(e) {
		return a(s(e))
	}
}, function(e, t, n) {
	"use strict";

	function a(e) {
		var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
			n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
			a = r(e),
			s = r('\n  <div class="loading-container ' + (t ? "mask" : "") + '"><div class="loading"><div></div><div></div></div></div>\n  ');
		n ? a.prepend(s) : a.append(s)
	}

	function s(e) {
		r(".loading-container", r(e)).remove()
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.removeLoading = t.addLoading = void 0, n(301);
	var r = window.$;
	t.addLoading = a, t.removeLoading = s
}, function(e, t, n) {
	"use strict";

	function a() {
		r("body").append(i)
	}

	function s(e, t) {
		var n = r('\n    <div class="message ' + e + '">' + t + "</div>\n  ");
		i.append(n), setTimeout(function() {
			n.remove()
		}, 5e3)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.message = void 0, n(303);
	var r = window.$,
		i = r('\n<div class="message-container"></div>\n');
	t.default = a, t.message = s
}, function(e, t, n) {
	var a = n(25);
	e.exports = function(e) {
		if (!a(e)) throw TypeError(e + " is not an object!");
		return e
	}
}, function(e, t) {
	e.exports = function(e) {
		return "object" == typeof e ? null !== e : "function" == typeof e
	}
}, function(e, t) {
	e.exports = {}
}, function(e, t, n) {
	var a = n(84),
		s = n(43);
	e.exports = Object.keys || function(e) {
		return a(e, s)
	}
}, function(e, t) {
	e.exports = function(e, t) {
		return {
			enumerable: !(1 & e),
			configurable: !(2 & e),
			writable: !(4 & e),
			value: t
		}
	}
}, , , , , function(e, t) {
	"use strict";

	function n() {
		var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ".rucaptcha-img",
			t = arguments[1];
		window.rucaptcha && (s(e, t).attr("src", ""), s(e, t).attr("src", "/rucaptcha?_=" + (new Date).getTime() + parseInt(1e3 * Math.random(), 10)))
	}

	function a() {
		window.rucaptcha ? s(".rucaptcha-row").click(function(e) {
			s(e.target).hasClass("rucaptcha-row") ? n(".rucaptcha-img", e.target) : n(e.target)
		}) : s(".rucaptcha-row").each(function(e, t) {
			var n = s(t),
				a = n.prev(),
				r = a.prev(),
				i = s("input", a).attr("enter");
			s("input", r).attr("enter", i), n.remove(), a.remove()
		})
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.changeRucaptcha = n, t.default = a;
	var s = window.$
}, function(e, t) {
	t.f = {}.propertyIsEnumerable
}, function(e, t, n) {
	var a = n(42);
	e.exports = function(e) {
		return Object(a(e))
	}
}, function(e, t) {
	var n = 0,
		a = Math.random();
	e.exports = function(e) {
		return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + a).toString(36))
	}
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	t.__esModule = !0;
	var s = n(238),
		r = a(s);
	t.default = function(e) {
		if (Array.isArray(e)) {
			for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
			return n
		}
		return (0, r.default)(e)
	}
}, , , , function(e, t) {
	var n = {}.toString;
	e.exports = function(e) {
		return n.call(e).slice(8, -1)
	}
}, function(e, t) {
	e.exports = function(e) {
		if (void 0 == e) throw TypeError("Can't call method on  " + e);
		return e
	}
}, function(e, t) {
	e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
}, function(e, t) {
	e.exports = !0
}, function(e, t) {
	t.f = Object.getOwnPropertySymbols
}, function(e, t, n) {
	var a = n(11).f,
		s = n(13),
		r = n(8)("toStringTag");
	e.exports = function(e, t, n) {
		e && !s(e = n ? e : e.prototype, r) && a(e, r, {
			configurable: !0,
			value: t
		})
	}
}, function(e, t, n) {
	var a = n(48)("keys"),
		s = n(36);
	e.exports = function(e) {
		return a[e] || (a[e] = s(e))
	}
}, function(e, t, n) {
	var a = n(10),
		s = "__core-js_shared__",
		r = a[s] || (a[s] = {});
	e.exports = function(e) {
		return r[e] || (r[e] = {})
	}
}, function(e, t) {
	var n = Math.ceil,
		a = Math.floor;
	e.exports = function(e) {
		return isNaN(e = +e) ? 0 : (e > 0 ? a : n)(e)
	}
}, function(e, t, n) {
	var a = n(25);
	e.exports = function(e, t) {
		if (!a(e)) return e;
		var n, s;
		if (t && "function" == typeof(n = e.toString) && !a(s = n.call(e))) return s;
		if ("function" == typeof(n = e.valueOf) && !a(s = n.call(e))) return s;
		if (!t && "function" == typeof(n = e.toString) && !a(s = n.call(e))) return s;
		throw TypeError("Can't convert object to primitive value")
	}
}, function(e, t, n) {
	var a = n(10),
		s = n(5),
		r = n(44),
		i = n(52),
		o = n(11).f;
	e.exports = function(e) {
		var t = s.Symbol || (s.Symbol = r ? {} : a.Symbol || {});
		"_" == e.charAt(0) || e in t || o(t, e, {
			value: i.f(e)
		})
	}
}, function(e, t, n) {
	t.f = n(8)
}, , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var s = n(245),
		r = a(s),
		i = n(246),
		o = a(i),
		d = function() {
			function e() {
				(0, r.default)(this, e), this.handlers = {}, this.data = {}
			}
			return (0, o.default)(e, [{
				key: "bind",
				value: function(e, t) {
					this.handlers[e] ? this.handlers[e].push(t) : this.handlers[e] = [t]
				}
			}, {
				key: "call",
				value: function(e) {
					for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++) n[a - 1] = arguments[a];
					var s = this.handlers[e];
					s && s.forEach(function(e) {
						e.apply(void 0, n)
					})
				}
			}, {
				key: "set",
				value: function(e, t) {
					this.data[e] = t
				}
			}, {
				key: "get",
				value: function(e) {
					return this.data[e]
				}
			}]), e
		}(),
		_ = new d;
	t.default = _
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	t.__esModule = !0;
	var s = n(240),
		r = a(s);
	t.default = r.default || function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
		}
		return e
	}
}, function(e, t, n) {
	var a = n(256);
	e.exports = function(e, t, n) {
		if (a(e), void 0 === t) return e;
		switch (n) {
			case 1:
				return function(n) {
					return e.call(t, n)
				};
			case 2:
				return function(n, a) {
					return e.call(t, n, a)
				};
			case 3:
				return function(n, a, s) {
					return e.call(t, n, a, s)
				}
		}
		return function() {
			return e.apply(t, arguments)
		}
	}
}, function(e, t, n) {
	var a = n(25),
		s = n(10).document,
		r = a(s) && a(s.createElement);
	e.exports = function(e) {
		return r ? s.createElement(e) : {}
	}
}, function(e, t, n) {
	e.exports = !n(12) && !n(19)(function() {
		return 7 != Object.defineProperty(n(78)("div"), "a", {
			get: function() {
				return 7
			}
		}).a
	})
}, function(e, t, n) {
	var a = n(41);
	e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
		return "String" == a(e) ? e.split("") : Object(e)
	}
}, function(e, t, n) {
	"use strict";
	var a = n(44),
		s = n(18),
		r = n(85),
		i = n(20),
		o = n(26),
		d = n(266),
		_ = n(46),
		u = n(274),
		l = n(8)("iterator"),
		m = !([].keys && "next" in [].keys()),
		c = "@@iterator",
		h = "keys",
		f = "values",
		M = function() {
			return this
		};
	e.exports = function(e, t, n, y, L, p, Y) {
		d(n, t, y);
		var g, k, v, w = function(e) {
				if (!m && e in S) return S[e];
				switch (e) {
					case h:
						return function() {
							return new n(this, e)
						};
					case f:
						return function() {
							return new n(this, e)
						}
				}
				return function() {
					return new n(this, e)
				}
			},
			D = t + " Iterator",
			T = L == f,
			b = !1,
			S = e.prototype,
			H = S[l] || S[c] || L && S[L],
			j = H || w(L),
			x = L ? T ? w("entries") : j : void 0,
			P = "Array" == t ? S.entries || H : H;
		if (P && (v = u(P.call(new e)), v !== Object.prototype && v.next && (_(v, D, !0), a || "function" == typeof v[l] || i(v, l, M))), T && H && H.name !== f && (b = !0, j = function() {
				return H.call(this)
			}), a && !Y || !m && !b && S[l] || i(S, l, j), o[t] = j, o[D] = M, L)
			if (g = {
					values: T ? j : w(f),
					keys: p ? j : w(h),
					entries: x
				}, Y)
				for (k in g) k in S || r(S, k, g[k]);
			else s(s.P + s.F * (m || b), t, g);
		return g
	}
}, function(e, t, n) {
	var a = n(24),
		s = n(271),
		r = n(43),
		i = n(47)("IE_PROTO"),
		o = function() {},
		d = "prototype",
		_ = function() {
			var e, t = n(78)("iframe"),
				a = r.length,
				s = "<",
				i = ">";
			for (t.style.display = "none", n(262).appendChild(t), t.src = "javascript:", e = t.contentWindow.document, e.open(), e.write(s + "script" + i + "document.F=Object" + s + "/script" + i), e.close(), _ = e.F; a--;) delete _[d][r[a]];
			return _()
		};
	e.exports = Object.create || function(e, t) {
		var n;
		return null !== e ? (o[d] = a(e), n = new o, o[d] = null, n[i] = e) : n = _(), void 0 === t ? n : s(n, t)
	}
}, function(e, t, n) {
	var a = n(84),
		s = n(43).concat("length", "prototype");
	t.f = Object.getOwnPropertyNames || function(e) {
		return a(e, s)
	}
}, function(e, t, n) {
	var a = n(13),
		s = n(21),
		r = n(258)(!1),
		i = n(47)("IE_PROTO");
	e.exports = function(e, t) {
		var n, o = s(e),
			d = 0,
			_ = [];
		for (n in o) n != i && a(o, n) && _.push(n);
		for (; t.length > d;) a(o, n = t[d++]) && (~r(_, n) || _.push(n));
		return _
	}
}, function(e, t, n) {
	e.exports = n(20)
}, function(e, t, n) {
	var a = n(49),
		s = Math.min;
	e.exports = function(e) {
		return e > 0 ? s(a(e), 9007199254740991) : 0
	}
}, function(e, t, n) {
	"use strict";
	var a = n(276)(!0);
	n(81)(String, "String", function(e) {
		this._t = String(e), this._i = 0
	}, function() {
		var e, t = this._t,
			n = this._i;
		return n >= t.length ? {
			value: void 0,
			done: !0
		} : (e = a(t, n), this._i += e.length, {
			value: e,
			done: !1
		})
	})
}, function(e, t, n) {
	! function(e, t) {
		t(n(1))
	}(this, function(e) {
		"use strict";
		var t = e.defineLocale("af", {
			months: "Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember".split("_"),
			monthsShort: "Jan_Feb_Mrt_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des".split("_"),
			weekdays: "Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag".split("_"),
			weekdaysShort: "Son_Maa_Din_Woe_Don_Vry_Sat".split("_"),
			weekdaysMin: "So_Ma_Di_Wo_Do_Vr_Sa".split("_"),
			meridiemParse: /vm|nm/i,
			isPM: function(e) {
				return /^nm$/i.test(e)
			},
			meridiem: function(e, t, n) {
				return e < 12 ? n ? "vm" : "VM" : n ? "nm" : "NM"
			},
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd, D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Vandag om] LT",
				nextDay: "[Môre om] LT",
				nextWeek: "dddd [om] LT",
				lastDay: "[Gister om] LT",
				lastWeek: "[Laas] dddd [om] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "oor %s",
				past: "%s gelede",
				s: "'n paar sekondes",
				ss: "%d sekondes",
				m: "'n minuut",
				mm: "%d minute",
				h: "'n uur",
				hh: "%d ure",
				d: "'n dag",
				dd: "%d dae",
				M: "'n maand",
				MM: "%d maande",
				y: "'n jaar",
				yy: "%d jaar"
			},
			dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
			ordinal: function(e) {
				return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
			},
			week: {
				dow: 1,
				doy: 4
			}
		});
		return t
	})
}, function(e, t, n) {
	! function(e, t) {
		t(n(1))
	}(this, function(e) {
		"use strict";
		var t = e.defineLocale("ar-dz", {
			months: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
			monthsShort: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
			weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
			weekdaysShort: "احد_اثنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
			weekdaysMin: "أح_إث_ثلا_أر_خم_جم_سب".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[اليوم على الساعة] LT",
				nextDay: "[غدا على الساعة] LT",
				nextWeek: "dddd [على الساعة] LT",
				lastDay: "[أمس على الساعة] LT",
				lastWeek: "dddd [على الساعة] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "في %s",
				past: "منذ %s",
				s: "ثوان",
				ss: "%d ثانية",
				m: "دقيقة",
				mm: "%d دقائق",
				h: "ساعة",
				hh: "%d ساعات",
				d: "يوم",
				dd: "%d أيام",
				M: "شهر",
				MM: "%d أشهر",
				y: "سنة",
				yy: "%d سنوات"
			},
			week: {
				dow: 0,
				doy: 4
			}
		});
		return t
	})
}, function(e, t, n) {
	! function(e, t) {
		t(n(1))
	}(this, function(e) {
		"use strict";
		var t = e.defineLocale("ar-kw", {
			months: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
			monthsShort: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
			weekdays: "الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
			weekdaysShort: "احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
			weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[اليوم على الساعة] LT",
				nextDay: "[غدا على الساعة] LT",
				nextWeek: "dddd [على الساعة] LT",
				lastDay: "[أمس على الساعة] LT",
				lastWeek: "dddd [على الساعة] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "في %s",
				past: "منذ %s",
				s: "ثوان",
				ss: "%d ثانية",
				m: "دقيقة",
				mm: "%d دقائق",
				h: "ساعة",
				hh: "%d ساعات",
				d: "يوم",
				dd: "%d أيام",
				M: "شهر",
				MM: "%d أشهر",
				y: "سنة",
				yy: "%d سنوات"
			},
			week: {
				dow: 0,
				doy: 12
			}
		});
		return t
	})
}, function(e, t, n) {
	! function(e, t) {
		t(n(1))
	}(this, function(e) {
		"use strict";
		var t = {
				1: "1",
				2: "2",
				3: "3",
				4: "4",
				5: "5",
				6: "6",
				7: "7",
				8: "8",
				9: "9",
				0: "0"
			},
			n = function(e) {
				return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5
			},
			a = {
				s: ["أقل من ثانية", "ثانية واحدة", ["ثانيتان", "ثانيتين"], "%d ثوان", "%d ثانية", "%d ثانية"],
				m: ["أقل من دقيقة", "دقيقة واحدة", ["دقيقتان", "دقيقتين"], "%d دقائق", "%d دقيقة", "%d دقيقة"],
				h: ["أقل من ساعة", "ساعة واحدة", ["ساعتان", "ساعتين"], "%d ساعات", "%d ساعة", "%d ساعة"],
				d: ["أقل من يوم", "يوم واحد", ["يومان", "يومين"], "%d أيام", "%d يومًا", "%d يوم"],
				M: ["أقل من شهر", "شهر واحد", ["شهران", "شهرين"], "%d أشهر", "%d شهرا", "%d شهر"],
				y: ["أقل من عام", "عام واحد", ["عامان", "عامين"], "%d أعوام", "%d عامًا", "%d عام"]
			},
			s = function(e) {
				return function(t, s, r, i) {
					var o = n(t),
						d = a[e][n(t)];
					return 2 === o && (d = d[s ? 0 : 1]), d.replace(/%d/i, t)
				}
			},
			r = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"],
			i = e.defineLocale("ar-ly", {
				months: r,
				monthsShort: r,
				weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
				weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
				weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
				weekdaysParseExact: !0,
				longDateFormat: {
					LT: "HH:mm",
					LTS: "HH:mm:ss",
					L: "D/‏M/‏YYYY",
					LL: "D MMMM YYYY",
					LLL: "D MMMM YYYY HH:mm",
					LLLL: "dddd D MMMM YYYY HH:mm"
				},
				meridiemParse: /ص|م/,
				isPM: function(e) {
					return "م" === e
				},
				meridiem: function(e, t, n) {
					return e < 12 ? "ص" : "م"
				},
				calendar: {
					sameDay: "[اليوم عند الساعة] LT",
					nextDay: "[غدًا عند الساعة] LT",
					nextWeek: "dddd [عند الساعة] LT",
					lastDay: "[أمس عند الساعة] LT",
					lastWeek: "dddd [عند الساعة] LT",
					sameElse: "L"
				},
				relativeTime: {
					future: "بعد %s",
					past: "منذ %s",
					s: s("s"),
					ss: s("s"),
					m: s("m"),
					mm: s("m"),
					h: s("h"),
					hh: s("h"),
					d: s("d"),
					dd: s("d"),
					M: s("M"),
					MM: s("M"),
					y: s("y"),
					yy: s("y")
				},
				preparse: function(e) {
					return e.replace(/،/g, ",")
				},
				postformat: function(e) {
					return e.replace(/\d/g, function(e) {
						return t[e]
					}).replace(/,/g, "،")
				},
				week: {
					dow: 6,
					doy: 12
				}
			});
		return i
	})
}, function(e, t, n) {
	! function(e, t) {
		t(n(1))
	}(this, function(e) {
		"use strict";
		var t = e.defineLocale("ar-ma", {
			months: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
			monthsShort: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
			weekdays: "الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
			weekdaysShort: "احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
			weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[اليوم على الساعة] LT",
				nextDay: "[غدا على الساعة] LT",
				nextWeek: "dddd [على الساعة] LT",
				lastDay: "[أمس على الساعة] LT",
				lastWeek: "dddd [على الساعة] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "في %s",
				past: "منذ %s",
				s: "ثوان",
				ss: "%d ثانية",
				m: "دقيقة",
				mm: "%d دقائق",
				h: "ساعة",
				hh: "%d ساعات",
				d: "يوم",
				dd: "%d أيام",
				M: "شهر",
				MM: "%d أشهر",
				y: "سنة",
				yy: "%d سنوات"
			},
			week: {
				dow: 6,
				doy: 12
			}
		});
		return t
	})
}, function(e, t, n) {
	! function(e, t) {
		t(n(1))
	}(this, function(e) {
		"use strict";
		var t = {
				1: "١",
				2: "٢",
				3: "٣",
				4: "٤",
				5: "٥",
				6: "٦",
				7: "٧",
				8: "٨",
				9: "٩",
				0: "٠"
			},
			n = {
				"١": "1",
				"٢": "2",
				"٣": "3",
				"٤": "4",
				"٥": "5",
				"٦": "6",
				"٧": "7",
				"٨": "8",
				"٩": "9",
				"٠": "0"
			},
			a = e.defineLocale("ar-sa", {
				months: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
				monthsShort: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
				weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
				weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
				weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
				weekdaysParseExact: !0,
				longDateFormat: {
					LT: "HH:mm",
					LTS: "HH:mm:ss",
					L: "DD/MM/YYYY",
					LL: "D MMMM YYYY",
					LLL: "D MMMM YYYY HH:mm",
					LLLL: "dddd D MMMM YYYY HH:mm"
				},
				meridiemParse: /ص|م/,
				isPM: function(e) {
					return "م" === e
				},
				meridiem: function(e, t, n) {
					return e < 12 ? "ص" : "م"
				},
				calendar: {
					sameDay: "[اليوم على الساعة] LT",
					nextDay: "[غدا على الساعة] LT",
					nextWeek: "dddd [على الساعة] LT",
					lastDay: "[أمس على الساعة] LT",
					lastWeek: "dddd [على الساعة] LT",
					sameElse: "L"
				},
				relativeTime: {
					future: "في %s",
					past: "منذ %s",
					s: "ثوان",
					ss: "%d ثانية",
					m: "دقيقة",
					mm: "%d دقائق",
					h: "ساعة",
					hh: "%d ساعات",
					d: "يوم",
					dd: "%d أيام",
					M: "شهر",
					MM: "%d أشهر",
					y: "سنة",
					yy: "%d سنوات"
				},
				preparse: function(e) {
					return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function(e) {
						return n[e]
					}).replace(/،/g, ",")
				},
				postformat: function(e) {
					return e.replace(/\d/g, function(e) {
						return t[e]
					}).replace(/,/g, "،")
				},
				week: {
					dow: 0,
					doy: 6
				}
			});
		return a
	})
}, function(e, t, n) {
	! function(e, t) {
		t(n(1))
	}(this, function(e) {
		"use strict";
		var t = e.defineLocale("ar-tn", {
			months: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
			monthsShort: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
			weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
			weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
			weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[اليوم على الساعة] LT",
				nextDay: "[غدا على الساعة] LT",
				nextWeek: "dddd [على الساعة] LT",
				lastDay: "[أمس على الساعة] LT",
				lastWeek: "dddd [على الساعة] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "في %s",
				past: "منذ %s",
				s: "ثوان",
				ss: "%d ثانية",
				m: "دقيقة",
				mm: "%d دقائق",
				h: "ساعة",
				hh: "%d ساعات",
				d: "يوم",
				dd: "%d أيام",
				M: "شهر",
				MM: "%d أشهر",
				y: "سنة",
				yy: "%d سنوات"
			},
			week: {
				dow: 1,
				doy: 4
			}
		});
		return t
	})
}, function(e, t, n) {
	! function(e, t) {
		t(n(1))
	}(this, function(e) {
		"use strict";
		var t = {
				1: "١",
				2: "٢",
				3: "٣",
				4: "٤",
				5: "٥",
				6: "٦",
				7: "٧",
				8: "٨",
				9: "٩",
				0: "٠"
			},
			n = {
				"١": "1",
				"٢": "2",
				"٣": "3",
				"٤": "4",
				"٥": "5",
				"٦": "6",
				"٧": "7",
				"٨": "8",
				"٩": "9",
				"٠": "0"
			},
			a = function(e) {
				return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5
			},
			s = {
				s: ["أقل من ثانية", "ثانية واحدة", ["ثانيتان", "ثانيتين"], "%d ثوان", "%d ثانية", "%d ثانية"],
				m: ["أقل من دقيقة", "دقيقة واحدة", ["دقيقتان", "دقيقتين"], "%d دقائق", "%d دقيقة", "%d دقيقة"],
				h: ["أقل من ساعة", "ساعة واحدة", ["ساعتان", "ساعتين"], "%d ساعات", "%d ساعة", "%d ساعة"],
				d: ["أقل من يوم", "يوم واحد", ["يومان", "يومين"], "%d أيام", "%d يومًا", "%d يوم"],
				M: ["أقل من شهر", "شهر واحد", ["شهران", "شهرين"], "%d أشهر", "%d شهرا", "%d شهر"],
				y: ["أقل من عام", "عام واحد", ["عامان", "عامين"], "%d أعوام", "%d عامًا", "%d عام"]
			},
			r = function(e) {
				return function(t, n, r, i) {
					var o = a(t),
						d = s[e][a(t)];
					return 2 === o && (d = d[n ? 0 : 1]), d.replace(/%d/i, t)
				}
			},
			i = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"],
			o = e.defineLocale("ar", {
				months: i,
				monthsShort: i,
				weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
				weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
				weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
				weekdaysParseExact: !0,
				longDateFormat: {
					LT: "HH:mm",
					LTS: "HH:mm:ss",
					L: "D/‏M/‏YYYY",
					LL: "D MMMM YYYY",
					LLL: "D MMMM YYYY HH:mm",
					LLLL: "dddd D MMMM YYYY HH:mm"
				},
				meridiemParse: /ص|م/,
				isPM: function(e) {
					return "م" === e
				},
				meridiem: function(e, t, n) {
					return e < 12 ? "ص" : "م"
				},
				calendar: {
					sameDay: "[اليوم عند الساعة] LT",
					nextDay: "[غدًا عند الساعة] LT",
					nextWeek: "dddd [عند الساعة] LT",
					lastDay: "[أمس عند الساعة] LT",
					lastWeek: "dddd [عند الساعة] LT",
					sameElse: "L"
				},
				relativeTime: {
					future: "بعد %s",
					past: "منذ %s",
					s: r("s"),
					ss: r("s"),
					m: r("m"),
					mm: r("m"),
					h: r("h"),
					hh: r("h"),
					d: r("d"),
					dd: r("d"),
					M: r("M"),
					MM: r("M"),
					y: r("y"),
					yy: r("y")
				},
				preparse: function(e) {
					return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function(e) {
						return n[e]
					}).replace(/،/g, ",")
				},
				postformat: function(e) {
					return e.replace(/\d/g, function(e) {
						return t[e]
					}).replace(/,/g, "،")
				},
				week: {
					dow: 6,
					doy: 12
				}
			});
		return o
	})
}, function(e, t, n) {
	! function(e, t) {
		t(n(1))
	}(this, function(e) {
		"use strict";
		var t = {
				1: "-inci",
				5: "-inci",
				8: "-inci",
				70: "-inci",
				80: "-inci",
				2: "-nci",
				7: "-nci",
				20: "-nci",
				50: "-nci",
				3: "-üncü",
				4: "-üncü",
				100: "-üncü",
				6: "-ncı",
				9: "-uncu",
				10: "-uncu",
				30: "-uncu",
				60: "-ıncı",
				90: "-ıncı"
			},
			n = e.defineLocale("az", {
				months: "yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split("_"),
				monthsShort: "yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split("_"),
				weekdays: "Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə".split("_"),
				weekdaysShort: "Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən".split("_"),
				weekdaysMin: "Bz_BE_ÇA_Çə_CA_Cü_Şə".split("_"),
				weekdaysParseExact: !0,
				longDateFormat: {
					LT: "HH:mm",
					LTS: "HH:mm:ss",
					L: "DD.MM.YYYY",
					LL: "D MMMM YYYY",
					LLL: "D MMMM YYYY HH:mm",
					LLLL: "dddd, D MMMM YYYY HH:mm"
				},
				calendar: {
					sameDay: "[bugün saat] LT",
					nextDay: "[sabah saat] LT",
					nextWeek: "[gələn həftə] dddd [saat] LT",
					lastDay: "[dünən] LT",
					lastWeek: "[keçən həftə] dddd [saat] LT",
					sameElse: "L"
				},
				relativeTime: {
					future: "%s sonra",
					past: "%s əvvəl",
					s: "birneçə saniyyə",
					ss: "%d saniyə",
					m: "bir dəqiqə",
					mm: "%d dəqiqə",
					h: "bir saat",
					hh: "%d saat",
					d: "bir gün",
					dd: "%d gün",
					M: "bir ay",
					MM: "%d ay",
					y: "bir il",
					yy: "%d il"
				},
				meridiemParse: /gecə|səhər|gündüz|axşam/,
				isPM: function(e) {
					return /^(gündüz|axşam)$/.test(e)
				},
				meridiem: function(e, t, n) {
					return e < 4 ? "gecə" : e < 12 ? "səhər" : e < 17 ? "gündüz" : "axşam"
				},
				dayOfMonthOrdinalParse: /\d{1,2}-(ıncı|inci|nci|üncü|ncı|uncu)/,
				ordinal: function(e) {
					if (0 === e) return e + "-ıncı";
					var n = e % 10,
						a = e % 100 - n,
						s = e >= 100 ? 100 : null;
					return e + (t[n] || t[a] || t[s])
				},
				week: {
					dow: 1,
					doy: 7
				}
			});
		return n
	})
}, function(e, t, n) {
	! function(e, t) {
		t(n(1))
	}(this, function(e) {
		"use strict";

		function t(e, t) {
			var n = e.split("_");
			return t % 10 === 1 && t % 100 !== 11 ? n[0] : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? n[1] : n[2]
		}

		function n(e, n, a) {
			var s = {
				ss: n ? "секунда_секунды_секунд" : "секунду_секунды_секунд",
				mm: n ? "хвіліна_хвіліны_хвілін" : "хвіліну_хвіліны_хвілін",
				hh: n ? "гадзіна_гадзіны_гадзін" : "гадзіну_гадзіны_гадзін",
				dd: "дзень_дні_дзён",
				MM: "месяц_месяцы_месяцаў",
				yy: "год_гады_гадоў"
			};
			return "m" === a ? n ? "хвіліна" : "хвіліну" : "h" === a ? n ? "гадзіна" : "гадзіну" : e + " " + t(s[a], +e)
		}
		var a = e.defineLocale("be", {
			months: {
				format: "студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня".split("_"),
				standalone: "студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань".split("_")
			},
			monthsShort: "студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж".split("_"),
			weekdays: {
				format: "нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу".split("_"),
				standalone: "нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота".split("_"),
				isFormat: /\[ ?[Вв] ?(?:мінулую|наступную)? ?\] ?dddd/
			},
			weekdaysShort: "нд_пн_ат_ср_чц_пт_сб".split("_"),
			weekdaysMin: "нд_пн_ат_ср_чц_пт_сб".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D MMMM YYYY г.",
				LLL: "D MMMM YYYY г., HH:mm",
				LLLL: "dddd, D MMMM YYYY г., HH:mm"
			},
			calendar: {
				sameDay: "[Сёння ў] LT",
				nextDay: "[Заўтра ў] LT",
				lastDay: "[Учора ў] LT",
				nextWeek: function() {
					return "[У] dddd [ў] LT"
				},
				lastWeek: function() {
					switch (this.day()) {
						case 0:
						case 3:
						case 5:
						case 6:
							return "[У мінулую] dddd [ў] LT";
						case 1:
						case 2:
						case 4:
							return "[У мінулы] dddd [ў] LT"
					}
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "праз %s",
				past: "%s таму",
				s: "некалькі секунд",
				m: n,
				mm: n,
				h: n,
				hh: n,
				d: "дзень",
				dd: n,
				M: "месяц",
				MM: n,
				y: "год",
				yy: n
			},
			meridiemParse: /ночы|раніцы|дня|вечара/,
			isPM: function(e) {
				return /^(дня|вечара)$/.test(e)
			},
			meridiem: function(e, t, n) {
				return e < 4 ? "ночы" : e < 12 ? "раніцы" : e < 17 ? "дня" : "вечара"
			},
			dayOfMonthOrdinalParse: /\d{1,2}-(і|ы|га)/,
			ordinal: function(e, t) {
				switch (t) {
					case "M":
					case "d":
					case "DDD":
					case "w":
					case "W":
						return e % 10 !== 2 && e % 10 !== 3 || e % 100 === 12 || e % 100 === 13 ? e + "-ы" : e + "-і";
					case "D":
						return e + "-га";
					default:
						return e
				}
			},
			week: {
				dow: 1,
				doy: 7
			}
		});
		return a
	})
}, function(e, t, n) {
	! function(e, t) {
		t(n(1))
	}(this, function(e) {
		"use strict";
		var t = e.defineLocale("bg", {
			months: "януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември".split("_"),
			monthsShort: "янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек".split("_"),
			weekdays: "неделя_понеделник_вторник_сряда_четвъртък_петък_събота".split("_"),
			weekdaysShort: "нед_пон_вто_сря_чет_пет_съб".split("_"),
			weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
			longDateFormat: {
				LT: "H:mm",
				LTS: "H:mm:ss",
				L: "D.MM.YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY H:mm",
				LLLL: "dddd, D MMMM YYYY H:mm"
			},
			calendar: {
				sameDay: "[Днес в] LT",
				nextDay: "[Утре в] LT",
				nextWeek: "dddd [в] LT",
				lastDay: "[Вчера в] LT",
				lastWeek: function() {
					switch (this.day()) {
						case 0:
						case 3:
						case 6:
							return "[В изминалата] dddd [в] LT";
						case 1:
						case 2:
						case 4:
						case 5:
							return "[В изминалия] dddd [в] LT"
					}
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "след %s",
				past: "преди %s",
				s: "няколко секунди",
				ss: "%d секунди",
				m: "минута",
				mm: "%d минути",
				h: "час",
				hh: "%d часа",
				d: "ден",
				dd: "%d дни",
				M: "месец",
				MM: "%d месеца",
				y: "година",
				yy: "%d години"
			},
			dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
			ordinal: function(e) {
				var t = e % 10,
					n = e % 100;
				return 0 === e ? e + "-ев" : 0 === n ? e + "-ен" : n > 10 && n < 20 ? e + "-ти" : 1 === t ? e + "-ви" : 2 === t ? e + "-ри" : 7 === t || 8 === t ? e + "-ми" : e + "-ти"
			},
			week: {
				dow: 1,
				doy: 7
			}
		});
		return t
	})
}, function(e, t, n) {
	! function(e, t) {
		t(n(1))
	}(this, function(e) {
		"use strict";
		var t = e.defineLocale("bm", {
			months: "Zanwuyekalo_Fewuruyekalo_Marisikalo_Awirilikalo_Mɛkalo_Zuwɛnkalo_Zuluyekalo_Utikalo_Sɛtanburukalo_ɔkutɔburukalo_Nowanburukalo_Desanburukalo".split("_"),
			monthsShort: "Zan_Few_Mar_Awi_Mɛ_Zuw_Zul_Uti_Sɛt_ɔku_Now_Des".split("_"),
			weekdays: "Kari_Ntɛnɛn_Tarata_Araba_Alamisa_Juma_Sibiri".split("_"),
			weekdaysShort: "Kar_Ntɛ_Tar_Ara_Ala_Jum_Sib".split("_"),
			weekdaysMin: "Ka_Nt_Ta_Ar_Al_Ju_Si".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "MMMM [tile] D [san] YYYY",
				LLL: "MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm",
				LLLL: "dddd MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm"
			},
			calendar: {
				sameDay: "[Bi lɛrɛ] LT",
				nextDay: "[Sini lɛrɛ] LT",
				nextWeek: "dddd [don lɛrɛ] LT",
				lastDay: "[Kunu lɛrɛ] LT",
				lastWeek: "dddd [tɛmɛnen lɛrɛ] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s kɔnɔ",
				past: "a bɛ %s bɔ",
				s: "sanga dama dama",
				ss: "sekondi %d",
				m: "miniti kelen",
				mm: "miniti %d",
				h: "lɛrɛ kelen",
				hh: "lɛrɛ %d",
				d: "tile kelen",
				dd: "tile %d",
				M: "kalo kelen",
				MM: "kalo %d",
				y: "san kelen",
				yy: "san %d"
			},
			week: {
				dow: 1,
				doy: 4
			}
		});
		return t
	})
}, function(e, t, n) {
	! function(e, t) {
		t(n(1))
	}(this, function(e) {
		"use strict";
		var t = {
				1: "১",
				2: "২",
				3: "৩",
				4: "৪",
				5: "৫",
				6: "৬",
				7: "৭",
				8: "৮",
				9: "৯",
				0: "০"
			},
			n = {
				"১": "1",
				"২": "2",
				"৩": "3",
				"৪": "4",
				"৫": "5",
				"৬": "6",
				"৭": "7",
				"৮": "8",
				"৯": "9",
				"০": "0"
			},
			a = e.defineLocale("bn", {
				months: "জানুয়ারী_ফেব্রুয়ারি_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর".split("_"),
				monthsShort: "জানু_ফেব_মার্চ_এপ্র_মে_জুন_জুল_আগ_সেপ্ট_অক্টো_নভে_ডিসে".split("_"),
				weekdays: "রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পতিবার_শুক্রবার_শনিবার".split("_"),
				weekdaysShort: "রবি_সোম_মঙ্গল_বুধ_বৃহস্পতি_শুক্র_শনি".split("_"),
				weekdaysMin: "রবি_সোম_মঙ্গ_বুধ_বৃহঃ_শুক্র_শনি".split("_"),
				longDateFormat: {
					LT: "A h:mm সময়",
					LTS: "A h:mm:ss সময়",
					L: "DD/MM/YYYY",
					LL: "D MMMM YYYY",
					LLL: "D MMMM YYYY, A h:mm সময়",
					LLLL: "dddd, D MMMM YYYY, A h:mm সময়"
				},
				calendar: {
					sameDay: "[আজ] LT",
					nextDay: "[আগামীকাল] LT",
					nextWeek: "dddd, LT",
					lastDay: "[গতকাল] LT",
					lastWeek: "[গত] dddd, LT",
					sameElse: "L"
				},
				relativeTime: {
					future: "%s পরে",
					past: "%s আগে",
					s: "কয়েক সেকেন্ড",
					ss: "%d সেকেন্ড",
					m: "এক মিনিট",
					mm: "%d মিনিট",
					h: "এক ঘন্টা",
					hh: "%d ঘন্টা",
					d: "এক দিন",
					dd: "%d দিন",
					M: "এক মাস",
					MM: "%d মাস",
					y: "এক বছর",
					yy: "%d বছর"
				},
				preparse: function(e) {
					return e.replace(/[১২৩৪৫৬৭৮৯০]/g, function(e) {
						return n[e]
					})
				},
				postformat: function(e) {
					return e.replace(/\d/g, function(e) {
						return t[e]
					})
				},
				meridiemParse: /রাত|সকাল|দুপুর|বিকাল|রাত/,
				meridiemHour: function(e, t) {
					return 12 === e && (e = 0), "রাত" === t && e >= 4 || "দুপুর" === t && e < 5 || "বিকাল" === t ? e + 12 : e
				},
				meridiem: function(e, t, n) {
					return e < 4 ? "রাত" : e < 10 ? "সকাল" : e < 17 ? "দুপুর" : e < 20 ? "বিকাল" : "রাত"
				},
				week: {
					dow: 0,
					doy: 6
				}
			});
		return a
	})
}, function(e, t, n) {
	! function(e, t) {
		t(n(1))
	}(this, function(e) {
		"use strict";
		var t = {
				1: "༡",
				2: "༢",
				3: "༣",
				4: "༤",
				5: "༥",
				6: "༦",
				7: "༧",
				8: "༨",
				9: "༩",
				0: "༠"
			},
			n = {
				"༡": "1",
				"༢": "2",
				"༣": "3",
				"༤": "4",
				"༥": "5",
				"༦": "6",
				"༧": "7",
				"༨": "8",
				"༩": "9",
				"༠": "0"
			},
			a = e.defineLocale("bo", {
				months: "ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"),
				monthsShort: "ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"),
				weekdays: "གཟའ་ཉི་མ་_གཟའ་ཟླ་བ་_གཟའ་མིག་དམར་_གཟའ་ལྷག་པ་_གཟའ་ཕུར་བུ_གཟའ་པ་སངས་_གཟའ་སྤེན་པ་".split("_"),
				weekdaysShort: "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),
				weekdaysMin: "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),
				longDateFormat: {
					LT: "A h:mm",
					LTS: "A h:mm:ss",
					L: "DD/MM/YYYY",
					LL: "D MMMM YYYY",
					LLL: "D MMMM YYYY, A h:mm",
					LLLL: "dddd, D MMMM YYYY, A h:mm"
				},
				calendar: {
					sameDay: "[དི་རིང] LT",
					nextDay: "[སང་ཉིན] LT",
					nextWeek: "[བདུན་ཕྲག་རྗེས་མ], LT",
					lastDay: "[ཁ་སང] LT",
					lastWeek: "[བདུན་ཕྲག་མཐའ་མ] dddd, LT",
					sameElse: "L"
				},
				relativeTime: {
					future: "%s ལ་",
					past: "%s སྔན་ལ",
					s: "ལམ་སང",
					ss: "%d སྐར་ཆ།",
					m: "སྐར་མ་གཅིག",
					mm: "%d སྐར་མ",
					h: "ཆུ་ཚོད་གཅིག",
					hh: "%d ཆུ་ཚོད",
					d: "ཉིན་གཅིག",
					dd: "%d ཉིན་",
					M: "ཟླ་བ་གཅིག",
					MM: "%d ཟླ་བ",
					y: "ལོ་གཅིག",
					yy: "%d ལོ"
				},
				preparse: function(e) {
					return e.replace(/[༡༢༣༤༥༦༧༨༩༠]/g, function(e) {
						return n[e]
					})
				},
				postformat: function(e) {
					return e.replace(/\d/g, function(e) {
						return t[e]
					})
				},
				meridiemParse: /མཚན་མོ|ཞོགས་ཀས|ཉིན་གུང|དགོང་དག|མཚན་མོ/,
				meridiemHour: function(e, t) {
					return 12 === e && (e = 0), "མཚན་མོ" === t && e >= 4 || "ཉིན་གུང" === t && e < 5 || "དགོང་དག" === t ? e + 12 : e
				},
				meridiem: function(e, t, n) {
					return e < 4 ? "མཚན་མོ" : e < 10 ? "ཞོགས་ཀས" : e < 17 ? "ཉིན་གུང" : e < 20 ? "དགོང་དག" : "མཚན་མོ"
				},
				week: {
					dow: 0,
					doy: 6
				}
			});
		return a
	})
}, function(e, t, n) {
	! function(e, t) {
		t(n(1))
	}(this, function(e) {
		"use strict";

		function t(e, t, n) {
			var a = {
				mm: "munutenn",
				MM: "miz",
				dd: "devezh"
			};
			return e + " " + s(a[n], e)
		}

		function n(e) {
			switch (a(e)) {
				case 1:
				case 3:
				case 4:
				case 5:
				case 9:
					return e + " bloaz";
				default:
					return e + " vloaz"
			}
		}

		function a(e) {
			return e > 9 ? a(e % 10) : e
		}

		function s(e, t) {
			return 2 === t ? r(e) : e
		}

		function r(e) {
			var t = {
				m: "v",
				b: "v",
				d: "z"
			};
			return void 0 === t[e.charAt(0)] ? e : t[e.charAt(0)] + e.substring(1)
		}
		var i = e.defineLocale("br", {
			months: "Genver_C'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split("_"),
			monthsShort: "Gen_C'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split("_"),
			weekdays: "Sul_Lun_Meurzh_Merc'her_Yaou_Gwener_Sadorn".split("_"),
			weekdaysShort: "Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"),
			weekdaysMin: "Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "h[e]mm A",
				LTS: "h[e]mm:ss A",
				L: "DD/MM/YYYY",
				LL: "D [a viz] MMMM YYYY",
				LLL: "D [a viz] MMMM YYYY h[e]mm A",
				LLLL: "dddd, D [a viz] MMMM YYYY h[e]mm A"
			},
			calendar: {
				sameDay: "[Hiziv da] LT",
				nextDay: "[Warc'hoazh da] LT",
				nextWeek: "dddd [da] LT",
				lastDay: "[Dec'h da] LT",
				lastWeek: "dddd [paset da] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "a-benn %s",
				past: "%s 'zo",
				s: "un nebeud segondennoù",
				ss: "%d eilenn",
				m: "ur vunutenn",
				mm: t,
				h: "un eur",
				hh: "%d eur",
				d: "un devezh",
				dd: t,
				M: "ur miz",
				MM: t,
				y: "ur bloaz",
				yy: n
			},
			dayOfMonthOrdinalParse: /\d{1,2}(añ|vet)/,
			ordinal: function(e) {
				var t = 1 === e ? "añ" : "vet";
				return e + t
			},
			week: {
				dow: 1,
				doy: 4
			}
		});
		return i
	})
}, function(e, t, n) {
	! function(e, t) {
		t(n(1))
	}(this, function(e) {
		"use strict";

		function t(e, t, n) {
			var a = e + " ";
			switch (n) {
				case "ss":
					return a += 1 === e ? "sekunda" : 2 === e || 3 === e || 4 === e ? "sekunde" : "sekundi";
				case "m":
					return t ? "jedna minuta" : "jedne minute";
				case "mm":
					return a += 1 === e ? "minuta" : 2 === e || 3 === e || 4 === e ? "minute" : "minuta";
				case "h":
					return t ? "jedan sat" : "jednog sata";
				case "hh":
					return a += 1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati";
				case "dd":
					return a += 1 === e ? "dan" : "dana";
				case "MM":
					return a += 1 === e ? "mjesec" : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci";
				case "yy":
					return a += 1 === e ? "godina" : 2 === e || 3 === e || 4 === e ? "godine" : "godina"
			}
		}
		var n = e.defineLocale("bs", {
			months: "januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar".split("_"),
			monthsShort: "jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.".split("_"),
			monthsParseExact: !0,
			weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
			weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
			weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "H:mm",
				LTS: "H:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D. MMMM YYYY",
				LLL: "D. MMMM YYYY H:mm",
				LLLL: "dddd, D. MMMM YYYY H:mm"
			},
			calendar: {
				sameDay: "[danas u] LT",
				nextDay: "[sutra u] LT",
				nextWeek: function() {
					switch (this.day()) {
						case 0:
							return "[u] [nedjelju] [u] LT";
						case 3:
							return "[u] [srijedu] [u] LT";
						case 6:
							return "[u] [subotu] [u] LT";
						case 1:
						case 2:
						case 4:
						case 5:
							return "[u] dddd [u] LT"
					}
				},
				lastDay: "[jučer u] LT",
				lastWeek: function() {
					switch (this.day()) {
						case 0:
						case 3:
							return "[prošlu] dddd [u] LT";
						case 6:
							return "[prošle] [subote] [u] LT";
						case 1:
						case 2:
						case 4:
						case 5:
							return "[prošli] dddd [u] LT"
					}
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "za %s",
				past: "prije %s",
				s: "par sekundi",
				ss: t,
				m: t,
				mm: t,
				h: t,
				hh: t,
				d: "dan",
				dd: t,
				M: "mjesec",
				MM: t,
				y: "godinu",
				yy: t
			},
			dayOfMonthOrdinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 7
			}
		});
		return n
	})
}, function(e, t, n) {
	! function(e, t) {
		t(n(1))
	}(this, function(e) {
		"use strict";
		var t = e.defineLocale("ca", {
			months: {
				standalone: "gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split("_"),
				format: "de gener_de febrer_de març_d'abril_de maig_de juny_de juliol_d'agost_de setembre_d'octubre_de novembre_de desembre".split("_"),
				isFormat: /D[oD]?(\s)+MMMM/
			},
			monthsShort: "gen._febr._març_abr._maig_juny_jul._ag._set._oct._nov._des.".split("_"),
			monthsParseExact: !0,
			weekdays: "diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split("_"),
			weekdaysShort: "dg._dl._dt._dc._dj._dv._ds.".split("_"),
			weekdaysMin: "dg_dl_dt_dc_dj_dv_ds".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "H:mm",
				LTS: "H:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM [de] YYYY",
				ll: "D MMM YYYY",
				LLL: "D MMMM [de] YYYY [a les] H:mm",
				lll: "D MMM YYYY, H:mm",
				LLLL: "dddd D MMMM [de] YYYY [a les] H:mm",
				llll: "ddd D MMM YYYY, H:mm"
			},
			calendar: {
				sameDay: function() {
					return "[avui a " + (1 !== this.hours() ? "les" : "la") + "] LT"
				},
				nextDay: function() {
					return "[demà a " + (1 !== this.hours() ? "les" : "la") + "] LT"
				},
				nextWeek: function() {
					return "dddd [a " + (1 !== this.hours() ? "les" : "la") + "] LT"
				},
				lastDay: function() {
					return "[ahir a " + (1 !== this.hours() ? "les" : "la") + "] LT"
				},
				lastWeek: function() {
					return "[el] dddd [passat a " + (1 !== this.hours() ? "les" : "la") + "] LT"
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "d'aquí %s",
				past: "fa %s",
				s: "uns segons",
				ss: "%d segons",
				m: "un minut",
				mm: "%d minuts",
				h: "una hora",
				hh: "%d hores",
				d: "un dia",
				dd: "%d dies",
				M: "un mes",
				MM: "%d mesos",
				y: "un any",
				yy: "%d anys"
			},
			dayOfMonthOrdinalParse: /\d{1,2}(r|n|t|è|a)/,
			ordinal: function(e, t) {
				var n = 1 === e ? "r" : 2 === e ? "n" : 3 === e ? "r" : 4 === e ? "t" : "è";
				return "w" !== t && "W" !== t || (n = "a"), e + n
			},
			week: {
				dow: 1,
				doy: 4
			}
		});
		return t
	})
}, function(e, t, n) {
	! function(e, t) {
		t(n(1))
	}(this, function(e) {
		"use strict";

		function t(e) {
			return e > 1 && e < 5 && 1 !== ~~(e / 10)
		}

		function n(e, n, a, s) {
			var r = e + " ";
			switch (a) {
				case "s":
					return n || s ? "pár sekund" : "pár sekundami";
				case "ss":
					return n || s ? r + (t(e) ? "sekundy" : "sekund") : r + "sekundami";
				case "m":
					return n ? "minuta" : s ? "minutu" : "minutou";
				case "mm":
					return n || s ? r + (t(e) ? "minuty" : "minut") : r + "minutami";
				case "h":
					return n ? "hodina" : s ? "hodinu" : "hodinou";
				case "hh":
					return n || s ? r + (t(e) ? "hodiny" : "hodin") : r + "hodinami";
				case "d":
					return n || s ? "den" : "dnem";
				case "dd":
					return n || s ? r + (t(e) ? "dny" : "dní") : r + "dny";
				case "M":
					return n || s ? "měsíc" : "měsícem";
				case "MM":
					return n || s ? r + (t(e) ? "měsíce" : "měsíců") : r + "měsíci";
				case "y":
					return n || s ? "rok" : "rokem";
				case "yy":
					return n || s ? r + (t(e) ? "roky" : "let") : r + "lety"
			}
		}
		var a = "leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split("_"),
			s = "led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_"),
			r = e.defineLocale("cs", {
				months: a,
				monthsShort: s,
				monthsParse: function(e, t) {
					var n, a = [];
					for (n = 0; n < 12; n++) a[n] = new RegExp("^" + e[n] + "$|^" + t[n] + "$", "i");
					return a
				}(a, s),
				shortMonthsParse: function(e) {
					var t, n = [];
					for (t = 0; t < 12; t++) n[t] = new RegExp("^" + e[t] + "$", "i");
					return n
				}(s),
				longMonthsParse: function(e) {
					var t, n = [];
					for (t = 0; t < 12; t++) n[t] = new RegExp("^" + e[t] + "$", "i");
					return n
				}(a),
				weekdays: "neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split("_"),
				weekdaysShort: "ne_po_út_st_čt_pá_so".split("_"),
				weekdaysMin: "ne_po_út_st_čt_pá_so".split("_"),
				longDateFormat: {
					LT: "H:mm",
					LTS: "H:mm:ss",
					L: "DD.MM.YYYY",
					LL: "D. MMMM YYYY",
					LLL: "D. MMMM YYYY H:mm",
					LLLL: "dddd D. MMMM YYYY H:mm",
					l: "D. M. YYYY"
				},
				calendar: {
					sameDay: "[dnes v] LT",
					nextDay: "[zítra v] LT",
					nextWeek: function() {
						switch (this.day()) {
							case 0:
								return "[v neděli v] LT";
							case 1:
							case 2:
								return "[v] dddd [v] LT";
							case 3:
								return "[ve středu v] LT";
							case 4:
								return "[ve čtvrtek v] LT";
							case 5:
								return "[v pátek v] LT";
							case 6:
								return "[v sobotu v] LT"
						}
					},
					lastDay: "[včera v] LT",
					lastWeek: function() {
						switch (this.day()) {
							case 0:
								return "[minulou neděli v] LT";
							case 1:
							case 2:
								return "[minulé] dddd [v] LT";
							case 3:
								return "[minulou středu v] LT";
							case 4:
							case 5:
								return "[minulý] dddd [v] LT";
							case 6:
								return "[minulou sobotu v] LT"
						}
					},
					sameElse: "L"
				},
				relativeTime: {
					future: "za %s",
					past: "před %s",
					s: n,
					ss: n,
					m: n,
					mm: n,
					h: n,
					hh: n,
					d: n,
					dd: n,
					M: n,
					MM: n,
					y: n,
					yy: n
				},
				dayOfMonthOrdinalParse: /\d{1,2}\./,
				ordinal: "%d.",
				week: {
					dow: 1,
					doy: 4
				}
			});
		return r
	})
}, function(e, t, n) {
	! function(e, t) {
		t(n(1))
	}(this, function(e) {
		"use strict";
		var t = e.defineLocale("cv", {
			months: "кӑрлач_нарӑс_пуш_ака_май_ҫӗртме_утӑ_ҫурла_авӑн_юпа_чӳк_раштав".split("_"),
			monthsShort: "кӑр_нар_пуш_ака_май_ҫӗр_утӑ_ҫур_авн_юпа_чӳк_раш".split("_"),
			weekdays: "вырсарникун_тунтикун_ытларикун_юнкун_кӗҫнерникун_эрнекун_шӑматкун".split("_"),
			weekdaysShort: "выр_тун_ытл_юн_кӗҫ_эрн_шӑм".split("_"),
			weekdaysMin: "вр_тн_ыт_юн_кҫ_эр_шм".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD-MM-YYYY",
				LL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ]",
				LLL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm",
				LLLL: "dddd, YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm"
			},
			calendar: {
				sameDay: "[Паян] LT [сехетре]",
				nextDay: "[Ыран] LT [сехетре]",
				lastDay: "[Ӗнер] LT [сехетре]",
				nextWeek: "[Ҫитес] dddd LT [сехетре]",
				lastWeek: "[Иртнӗ] dddd LT [сехетре]",
				sameElse: "L"
			},
			relativeTime: {
				future: function(e) {
					var t = /сехет$/i.exec(e) ? "рен" : /ҫул$/i.exec(e) ? "тан" : "ран";
					return e + t
				},
				past: "%s каялла",
				s: "пӗр-ик ҫеккунт",
				ss: "%d ҫеккунт",
				m: "пӗр минут",
				mm: "%d минут",
				h: "пӗр сехет",
				hh: "%d сехет",
				d: "пӗр кун",
				dd: "%d кун",
				M: "пӗр уйӑх",
				MM: "%d уйӑх",
				y: "пӗр ҫул",
				yy: "%d ҫул"
			},
			dayOfMonthOrdinalParse: /\d{1,2}-мӗш/,
			ordinal: "%d-мӗш",
			week: {
				dow: 1,
				doy: 7
			}
		});
		return t
	})
}, function(e, t, n) {
	! function(e, t) {
		t(n(1))
	}(this, function(e) {
		"use strict";
		var t = e.defineLocale("cy", {
			months: "Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr".split("_"),
			monthsShort: "Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag".split("_"),
			weekdays: "Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn".split("_"),
			weekdaysShort: "Sul_Llun_Maw_Mer_Iau_Gwe_Sad".split("_"),
			weekdaysMin: "Su_Ll_Ma_Me_Ia_Gw_Sa".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd, D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Heddiw am] LT",
				nextDay: "[Yfory am] LT",
				nextWeek: "dddd [am] LT",
				lastDay: "[Ddoe am] LT",
				lastWeek: "dddd [diwethaf am] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "mewn %s",
				past: "%s yn ôl",
				s: "ychydig eiliadau",
				ss: "%d eiliad",
				m: "munud",
				mm: "%d munud",
				h: "awr",
				hh: "%d awr",
				d: "diwrnod",
				dd: "%d diwrnod",
				M: "mis",
				MM: "%d mis",
				y: "blwyddyn",
				yy: "%d flynedd"
			},
			dayOfMonthOrdinalParse: /\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,
			ordinal: function(e) {
				var t = e,
					n = "",
					a = ["", "af", "il", "ydd", "ydd", "ed", "ed", "ed", "fed", "fed", "fed", "eg", "fed", "eg", "eg", "fed", "eg", "eg", "fed", "eg", "fed"];
				return t > 20 ? n = 40 === t || 50 === t || 60 === t || 80 === t || 100 === t ? "fed" : "ain" : t > 0 && (n = a[t]), e + n
			},
			week: {
				dow: 1,
				doy: 4
			}
		});
		return t
	})
}, function(e, t, n) {
	! function(e, t) {
		t(n(1))
	}(this, function(e) {
		"use strict";
		var t = e.defineLocale("da", {
			months: "januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"),
			monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
			weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
			weekdaysShort: "søn_man_tir_ons_tor_fre_lør".split("_"),
			weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D. MMMM YYYY",
				LLL: "D. MMMM YYYY HH:mm",
				LLLL: "dddd [d.] D. MMMM YYYY [kl.] HH:mm"
			},
			calendar: {
				sameDay: "[i dag kl.] LT",
				nextDay: "[i morgen kl.] LT",
				nextWeek: "på dddd [kl.] LT",
				lastDay: "[i går kl.] LT",
				lastWeek: "[i] dddd[s kl.] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "om %s",
				past: "%s siden",
				s: "få sekunder",
				ss: "%d sekunder",
				m: "et minut",
				mm: "%d minutter",
				h: "en time",
				hh: "%d timer",
				d: "en dag",
				dd: "%d dage",
				M: "en måned",
				MM: "%d måneder",
				y: "et år",
				yy: "%d år"
			},
			dayOfMonthOrdinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		});
		return t
	})
}, function(e, t, n) {
	! function(e, t) {
		t(n(1))
	}(this, function(e) {
		"use strict";

		function t(e, t, n, a) {
			var s = {
				m: ["eine Minute", "einer Minute"],
				h: ["eine Stunde", "einer Stunde"],
				d: ["ein Tag", "einem Tag"],
				dd: [e + " Tage", e + " Tagen"],
				M: ["ein Monat", "einem Monat"],
				MM: [e + " Monate", e + " Monaten"],
				y: ["ein Jahr", "einem Jahr"],
				yy: [e + " Jahre", e + " Jahren"]
			};
			return t ? s[n][0] : s[n][1]
		}
		var n = e.defineLocale("de-at", {
			months: "Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
			monthsShort: "Jän._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
			monthsParseExact: !0,
			weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
			weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
			weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D. MMMM YYYY",
				LLL: "D. MMMM YYYY HH:mm",
				LLLL: "dddd, D. MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[heute um] LT [Uhr]",
				sameElse: "L",
				nextDay: "[morgen um] LT [Uhr]",
				nextWeek: "dddd [um] LT [Uhr]",
				lastDay: "[gestern um] LT [Uhr]",
				lastWeek: "[letzten] dddd [um] LT [Uhr]"
			},
			relativeTime: {
				future: "in %s",
				past: "vor %s",
				s: "ein paar Sekunden",
				ss: "%d Sekunden",
				m: t,
				mm: "%d Minuten",
				h: t,
				hh: "%d Stunden",
				d: t,
				dd: t,
				M: t,
				MM: t,
				y: t,
				yy: t
			},
			dayOfMonthOrdinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		});
		return n
	})
}, function(e, t, n) {
	! function(e, t) {
		t(n(1))
	}(this, function(e) {
		"use strict";

		function t(e, t, n, a) {
			var s = {
				m: ["eine Minute", "einer Minute"],
				h: ["eine Stunde", "einer Stunde"],
				d: ["ein Tag", "einem Tag"],
				dd: [e + " Tage", e + " Tagen"],
				M: ["ein Monat", "einem Monat"],
				MM: [e + " Monate", e + " Monaten"],
				y: ["ein Jahr", "einem Jahr"],
				yy: [e + " Jahre", e + " Jahren"]
			};
			return t ? s[n][0] : s[n][1]
		}
		var n = e.defineLocale("de-ch", {
			months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
			monthsShort: "Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
			monthsParseExact: !0,
			weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
			weekdaysShort: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
			weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D. MMMM YYYY",
				LLL: "D. MMMM YYYY HH:mm",
				LLLL: "dddd, D. MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[heute um] LT [Uhr]",
				sameElse: "L",
				nextDay: "[morgen um] LT [Uhr]",
				nextWeek: "dddd [um] LT [Uhr]",
				lastDay: "[gestern um] LT [Uhr]",
				lastWeek: "[letzten] dddd [um] LT [Uhr]"
			},
			relativeTime: {
				future: "in %s",
				past: "vor %s",
				s: "ein paar Sekunden",
				ss: "%d Sekunden",
				m: t,
				mm: "%d Minuten",
				h: t,
				hh: "%d Stunden",
				d: t,
				dd: t,
				M: t,
				MM: t,
				y: t,
				yy: t
			},
			dayOfMonthOrdinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		});
		return n
	})
}, function(e, t, n) {
	! function(e, t) {
		t(n(1))
	}(this, function(e) {
		"use strict";

		function t(e, t, n, a) {
			var s = {
				m: ["eine Minute", "einer Minute"],
				h: ["eine Stunde", "einer Stunde"],
				d: ["ein Tag", "einem Tag"],
				dd: [e + " Tage", e + " Tagen"],
				M: ["ein Monat", "einem Monat"],
				MM: [e + " Monate", e + " Monaten"],
				y: ["ein Jahr", "einem Jahr"],
				yy: [e + " Jahre", e + " Jahren"]
			};
			return t ? s[n][0] : s[n][1]
		}
		var n = e.defineLocale("de", {
			months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
			monthsShort: "Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
			monthsParseExact: !0,
			weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
			weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
			weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D. MMMM YYYY",
				LLL: "D. MMMM YYYY HH:mm",
				LLLL: "dddd, D. MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[heute um] LT [Uhr]",
				sameElse: "L",
				nextDay: "[morgen um] LT [Uhr]",
				nextWeek: "dddd [um] LT [Uhr]",
				lastDay: "[gestern um] LT [Uhr]",
				lastWeek: "[letzten] dddd [um] LT [Uhr]"
			},
			relativeTime: {
				future: "in %s",
				past: "vor %s",
				s: "ein paar Sekunden",
				ss: "%d Sekunden",
				m: t,
				mm: "%d Minuten",
				h: t,
				hh: "%d Stunden",
				d: t,
				dd: t,
				M: t,
				MM: t,
				y: t,
				yy: t
			},
			dayOfMonthOrdinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		});
		return n
	})
}, function(e, t, n) {
	! function(e, t) {
		t(n(1))
	}(this, function(e) {
		"use strict";
		var t = ["ޖެނުއަރީ", "ފެބްރުއަރީ", "މާރިޗު", "އޭޕްރީލު", "މޭ", "ޖޫން", "ޖުލައި", "އޯގަސްޓު", "ސެޕްޓެމްބަރު", "އޮކްޓޯބަރު", "ނޮވެމްބަރު", "ޑިސެމްބަރު"],
			n = ["އާދިއްތަ", "ހޯމަ", "އަންގާރަ", "ބުދަ", "ބުރާސްފަތި", "ހުކުރު", "ހޮނިހިރު"],
			a = e.defineLocale("dv", {
				months: t,
				monthsShort: t,
				weekdays: n,
				weekdaysShort: n,
				weekdaysMin: "އާދި_ހޯމަ_އަން_ބުދަ_ބުރާ_ހުކު_ހޮނި".split("_"),
				longDateFormat: {
					LT: "HH:mm",
					LTS: "HH:mm:ss",
					L: "D/M/YYYY",
					LL: "D MMMM YYYY",
					LLL: "D MMMM YYYY HH:mm",
					LLLL: "dddd D MMMM YYYY HH:mm"
				},
				meridiemParse: /މކ|މފ/,
				isPM: function(e) {
					return "މފ" === e
				},
				meridiem: function(e, t, n) {
					return e < 12 ? "މކ" : "މފ"
				},
				calendar: {
					sameDay: "[މިއަދު] LT",
					nextDay: "[މާދަމާ] LT",
					nextWeek: "dddd LT",
					lastDay: "[އިއްޔެ] LT",
					lastWeek: "[ފާއިތުވި] dddd LT",
					sameElse: "L"
				},
				relativeTime: {
					future: "ތެރޭގައި %s",
					past: "ކުރިން %s",
					s: "ސިކުންތުކޮޅެއް",
					ss: "d% ސިކުންތު",
					m: "މިނިޓެއް",
					mm: "މިނިޓު %d",
					h: "ގަޑިއިރެއް",
					hh: "ގަޑިއިރު %d",
					d: "ދުވަހެއް",
					dd: "ދުވަސް %d",
					M: "މަހެއް",
					MM: "މަސް %d",
					y: "އަހަރެއް",
					yy: "އަހަރު %d"
				},
				preparse: function(e) {
					return e.replace(/،/g, ",")
				},
				postformat: function(e) {
					return e.replace(/,/g, "،")
				},
				week: {
					dow: 7,
					doy: 12
				}
			});
		return a
	})
}, function(e, t, n) {
	! function(e, t) {
		t(n(1))
	}(this, function(e) {
		"use strict";

		function t(e) {
			return e instanceof Function || "[object Function]" === Object.prototype.toString.call(e)
		}
		var n = e.defineLocale("el", {
			monthsNominativeEl: "Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος".split("_"),
			monthsGenitiveEl: "Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου".split("_"),
			months: function(e, t) {
				return e ? "string" == typeof t && /D/.test(t.substring(0, t.indexOf("MMMM"))) ? this._monthsGenitiveEl[e.month()] : this._monthsNominativeEl[e.month()] : this._monthsNominativeEl
			},
			monthsShort: "Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ".split("_"),
			weekdays: "Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο".split("_"),
			weekdaysShort: "Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ".split("_"),
			weekdaysMin: "Κυ_Δε_Τρ_Τε_Πε_Πα_Σα".split("_"),
			meridiem: function(e, t, n) {
				return e > 11 ? n ? "μμ" : "ΜΜ" : n ? "πμ" : "ΠΜ"
			},
			isPM: function(e) {
				return "μ" === (e + "").toLowerCase()[0]
			},
			meridiemParse: /[ΠΜ]\.?Μ?\.?/i,
			longDateFormat: {
				LT: "h:mm A",
				LTS: "h:mm:ss A",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY h:mm A",
				LLLL: "dddd, D MMMM YYYY h:mm A"
			},
			calendarEl: {
				sameDay: "[Σήμερα {}] LT",
				nextDay: "[Αύριο {}] LT",
				nextWeek: "dddd [{}] LT",
				lastDay: "[Χθες {}] LT",
				lastWeek: function() {
					switch (this.day()) {
						case 6:
							return "[το προηγούμενο] dddd [{}] LT";
						default:
							return "[την προηγούμενη] dddd [{}] LT"
					}
				},
				sameElse: "L"
			},
			calendar: function(e, n) {
				var a = this._calendarEl[e],
					s = n && n.hours();
				return t(a) && (a = a.apply(n)), a.replace("{}", s % 12 === 1 ? "στη" : "στις")
			},
			relativeTime: {
				future: "σε %s",
				past: "%s πριν",
				s: "λίγα δευτερόλεπτα",
				ss: "%d δευτερόλεπτα",
				m: "ένα λεπτό",
				mm: "%d λεπτά",
				h: "μία ώρα",
				hh: "%d ώρες",
				d: "μία μέρα",
				dd: "%d μέρες",
				M: "ένας μήνας",
				MM: "%d μήνες",
				y: "ένας χρόνος",
				yy: "%d χρόνια"
			},
			dayOfMonthOrdinalParse: /\d{1,2}η/,
			ordinal: "%dη",
			week: {
				dow: 1,
				doy: 4
			}
		});
		return n
	})
}, function(e, t, n) {
	! function(e, t) {
		t(n(1))
	}(this, function(e) {
		"use strict";
		var t = e.defineLocale("en-au", {
			months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
			monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
			weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
			weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
			weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
			longDateFormat: {
				LT: "h:mm A",
				LTS: "h:mm:ss A",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY h:mm A",
				LLLL: "dddd, D MMMM YYYY h:mm A"
			},
			calendar: {
				sameDay: "[Today at] LT",
				nextDay: "[Tomorrow at] LT",
				nextWeek: "dddd [at] LT",
				lastDay: "[Yesterday at] LT",
				lastWeek: "[Last] dddd [at] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "in %s",
				past: "%s ago",
				s: "a few seconds",
				ss: "%d seconds",
				m: "a minute",
				mm: "%d minutes",
				h: "an hour",
				hh: "%d hours",
				d: "a day",
				dd: "%d days",
				M: "a month",
				MM: "%d months",
				y: "a year",
				yy: "%d years"
			},
			dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
			ordinal: function(e) {
				var t = e % 10,
					n = 1 === ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
				return e + n
			},
			week: {
				dow: 1,
				doy: 4
			}
		});
		return t
	})
}, function(e, t, n) {
	! function(e, t) {
		t(n(1))
	}(this, function(e) {
		"use strict";
		var t = e.defineLocale("en-ca", {
			months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
			monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
			weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
			weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
			weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
			longDateFormat: {
				LT: "h:mm A",
				LTS: "h:mm:ss A",
				L: "YYYY-MM-DD",
				LL: "MMMM D, YYYY",
				LLL: "MMMM D, YYYY h:mm A",
				LLLL: "dddd, MMMM D, YYYY h:mm A"
			},
			calendar: {
				sameDay: "[Today at] LT",
				nextDay: "[Tomorrow at] LT",
				nextWeek: "dddd [at] LT",
				lastDay: "[Yesterday at] LT",
				lastWeek: "[Last] dddd [at] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "in %s",
				past: "%s ago",
				s: "a few seconds",
				ss: "%d seconds",
				m: "a minute",
				mm: "%d minutes",
				h: "an hour",
				hh: "%d hours",
				d: "a day",
				dd: "%d days",
				M: "a month",
				MM: "%d months",
				y: "a year",
				yy: "%d years"
			},
			dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
			ordinal: function(e) {
				var t = e % 10,
					n = 1 === ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
				return e + n
			}
		});
		return t
	})
}, function(e, t, n) {
	! function(e, t) {
		t(n(1))
	}(this, function(e) {
		"use strict";
		var t = e.defineLocale("en-gb", {
			months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
			monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
			weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
			weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
			weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd, D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Today at] LT",
				nextDay: "[Tomorrow at] LT",
				nextWeek: "dddd [at] LT",
				lastDay: "[Yesterday at] LT",
				lastWeek: "[Last] dddd [at] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "in %s",
				past: "%s ago",
				s: "a few seconds",
				ss: "%d seconds",
				m: "a minute",
				mm: "%d minutes",
				h: "an hour",
				hh: "%d hours",
				d: "a day",
				dd: "%d days",
				M: "a month",
				MM: "%d months",
				y: "a year",
				yy: "%d years"
			},
			dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
			ordinal: function(e) {
				var t = e % 10,
					n = 1 === ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
				return e + n
			},
			week: {
				dow: 1,
				doy: 4
			}
		});
		return t
	})
}, function(e, t, n) {
	! function(e, t) {
		t(n(1))
	}(this, function(e) {
		"use strict";
		var t = e.defineLocale("en-ie", {
			months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
			monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
			weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
			weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
			weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD-MM-YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Today at] LT",
				nextDay: "[Tomorrow at] LT",
				nextWeek: "dddd [at] LT",
				lastDay: "[Yesterday at] LT",
				lastWeek: "[Last] dddd [at] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "in %s",
				past: "%s ago",
				s: "a few seconds",
				ss: "%d seconds",
				m: "a minute",
				mm: "%d minutes",
				h: "an hour",
				hh: "%d hours",
				d: "a day",
				dd: "%d days",
				M: "a month",
				MM: "%d months",
				y: "a year",
				yy: "%d years"
			},
			dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
			ordinal: function(e) {
				var t = e % 10,
					n = 1 === ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
				return e + n
			},
			week: {
				dow: 1,
				doy: 4
			}
		});
		return t
	})
}, function(e, t, n) {
	! function(e, t) {
		t(n(1))
	}(this, function(e) {
		"use strict";
		var t = e.defineLocale("en-il", {
			months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
			monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
			weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
			weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
			weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd, D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Today at] LT",
				nextDay: "[Tomorrow at] LT",
				nextWeek: "dddd [at] LT",
				lastDay: "[Yesterday at] LT",
				lastWeek: "[Last] dddd [at] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "in %s",
				past: "%s ago",
				s: "a few seconds",
				m: "a minute",
				mm: "%d minutes",
				h: "an hour",
				hh: "%d hours",
				d: "a day",
				dd: "%d days",
				M: "a month",
				MM: "%d months",
				y: "a year",
				yy: "%d years"
			},
			dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
			ordinal: function(e) {
				var t = e % 10,
					n = 1 === ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
				return e + n
			}
		});
		return t
	})
}, function(e, t, n) {
	! function(e, t) {
		t(n(1))
	}(this, function(e) {
		"use strict";
		var t = e.defineLocale("en-nz", {
			months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
			monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
			weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
			weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
			weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
			longDateFormat: {
				LT: "h:mm A",
				LTS: "h:mm:ss A",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY h:mm A",
				LLLL: "dddd, D MMMM YYYY h:mm A"
			},
			calendar: {
				sameDay: "[Today at] LT",
				nextDay: "[Tomorrow at] LT",
				nextWeek: "dddd [at] LT",
				lastDay: "[Yesterday at] LT",
				lastWeek: "[Last] dddd [at] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "in %s",
				past: "%s ago",
				s: "a few seconds",
				ss: "%d seconds",
				m: "a minute",
				mm: "%d minutes",
				h: "an hour",
				hh: "%d hours",
				d: "a day",
				dd: "%d days",
				M: "a month",
				MM: "%d months",
				y: "a year",
				yy: "%d years"
			},
			dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
			ordinal: function(e) {
				var t = e % 10,
					n = 1 === ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
				return e + n
			},
			week: {
				dow: 1,
				doy: 4
			}
		});
		return t
	})
}, function(e, t, n) {
	! function(e, t) {
		t(n(1))
	}(this, function(e) {
		"use strict";
		var t = e.defineLocale("eo", {
			months: "januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro".split("_"),
			monthsShort: "jan_feb_mar_apr_maj_jun_jul_aŭg_sep_okt_nov_dec".split("_"),
			weekdays: "dimanĉo_lundo_mardo_merkredo_ĵaŭdo_vendredo_sabato".split("_"),
			weekdaysShort: "dim_lun_mard_merk_ĵaŭ_ven_sab".split("_"),
			weekdaysMin: "di_lu_ma_me_ĵa_ve_sa".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "YYYY-MM-DD",
				LL: "D[-a de] MMMM, YYYY",
				LLL: "D[-a de] MMMM, YYYY HH:mm",
				LLLL: "dddd, [la] D[-a de] MMMM, YYYY HH:mm"
			},
			meridiemParse: /[ap]\.t\.m/i,
			isPM: function(e) {
				return "p" === e.charAt(0).toLowerCase()
			},
			meridiem: function(e, t, n) {
				return e > 11 ? n ? "p.t.m." : "P.T.M." : n ? "a.t.m." : "A.T.M."
			},
			calendar: {
				sameDay: "[Hodiaŭ je] LT",
				nextDay: "[Morgaŭ je] LT",
				nextWeek: "dddd [je] LT",
				lastDay: "[Hieraŭ je] LT",
				lastWeek: "[pasinta] dddd [je] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "post %s",
				past: "antaŭ %s",
				s: "sekundoj",
				ss: "%d sekundoj",
				m: "minuto",
				mm: "%d minutoj",
				h: "horo",
				hh: "%d horoj",
				d: "tago",
				dd: "%d tagoj",
				M: "monato",
				MM: "%d monatoj",
				y: "jaro",
				yy: "%d jaroj"
			},
			dayOfMonthOrdinalParse: /\d{1,2}a/,
			ordinal: "%da",
			week: {
				dow: 1,
				doy: 7
			}
		});
		return t
	})
}, function(e, t, n) {
	! function(e, t) {
		t(n(1))
	}(this, function(e) {
		"use strict";
		var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
			n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
			a = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i],
			s = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
			r = e.defineLocale("es-do", {
				months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
				monthsShort: function(e, a) {
					return e ? /-MMM-/.test(a) ? n[e.month()] : t[e.month()] : t
				},
				monthsRegex: s,
				monthsShortRegex: s,
				monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
				monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
				monthsParse: a,
				longMonthsParse: a,
				shortMonthsParse: a,
				weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
				weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
				weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
				weekdaysParseExact: !0,
				longDateFormat: {
					LT: "h:mm A",
					LTS: "h:mm:ss A",
					L: "DD/MM/YYYY",
					LL: "D [de] MMMM [de] YYYY",
					LLL: "D [de] MMMM [de] YYYY h:mm A",
					LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A"
				},
				calendar: {
					sameDay: function() {
						return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
					},
					nextDay: function() {
						return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
					},
					nextWeek: function() {
						return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
					},
					lastDay: function() {
						return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
					},
					lastWeek: function() {
						return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
					},
					sameElse: "L"
				},
				relativeTime: {
					future: "en %s",
					past: "hace %s",
					s: "unos segundos",
					ss: "%d segundos",
					m: "un minuto",
					mm: "%d minutos",
					h: "una hora",
					hh: "%d horas",
					d: "un día",
					dd: "%d días",
					M: "un mes",
					MM: "%d meses",
					y: "un año",
					yy: "%d años"
				},
				dayOfMonthOrdinalParse: /\d{1,2}º/,
				ordinal: "%dº",
				week: {
					dow: 1,
					doy: 4
				}
			});
		return r
	})
}, function(e, t, n) {
	! function(e, t) {
		t(n(1))
	}(this, function(e) {
		"use strict";
		var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
			n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
			a = e.defineLocale("es-us", {
				months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
				monthsShort: function(e, a) {
					return e ? /-MMM-/.test(a) ? n[e.month()] : t[e.month()] : t
				},
				monthsParseExact: !0,
				weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
				weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
				weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
				weekdaysParseExact: !0,
				longDateFormat: {
					LT: "h:mm A",
					LTS: "h:mm:ss A",
					L: "MM/DD/YYYY",
					LL: "MMMM [de] D [de] YYYY",
					LLL: "MMMM [de] D [de] YYYY h:mm A",
					LLLL: "dddd, MMMM [de] D [de] YYYY h:mm A"
				},
				calendar: {
					sameDay: function() {
						return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
					},
					nextDay: function() {
						return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
					},
					nextWeek: function() {
						return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
					},
					lastDay: function() {
						return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
					},
					lastWeek: function() {
						return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
					},
					sameElse: "L"
				},
				relativeTime: {
					future: "en %s",
					past: "hace %s",
					s: "unos segundos",
					ss: "%d segundos",
					m: "un minuto",
					mm: "%d minutos",
					h: "una hora",
					hh: "%d horas",
					d: "un día",
					dd: "%d días",
					M: "un mes",
					MM: "%d meses",
					y: "un año",
					yy: "%d años"
				},
				dayOfMonthOrdinalParse: /\d{1,2}º/,
				ordinal: "%dº",
				week: {
					dow: 0,
					doy: 6
				}
			});
		return a
	})
}, function(e, t, n) {
	! function(e, t) {
		t(n(1))
	}(this, function(e) {
		"use strict";
		var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
			n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
			a = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i],
			s = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
			r = e.defineLocale("es", {
				months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
				monthsShort: function(e, a) {
					return e ? /-MMM-/.test(a) ? n[e.month()] : t[e.month()] : t
				},
				monthsRegex: s,
				monthsShortRegex: s,
				monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
				monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
				monthsParse: a,
				longMonthsParse: a,
				shortMonthsParse: a,
				weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
				weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
				weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
				weekdaysParseExact: !0,
				longDateFormat: {
					LT: "H:mm",
					LTS: "H:mm:ss",
					L: "DD/MM/YYYY",
					LL: "D [de] MMMM [de] YYYY",
					LLL: "D [de] MMMM [de] YYYY H:mm",
					LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
				},
				calendar: {
					sameDay: function() {
						return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
					},
					nextDay: function() {
						return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
					},
					nextWeek: function() {
						return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
					},
					lastDay: function() {
						return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
					},
					lastWeek: function() {
						return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
					},
					sameElse: "L"
				},
				relativeTime: {
					future: "en %s",
					past: "hace %s",
					s: "unos segundos",
					ss: "%d segundos",
					m: "un minuto",
					mm: "%d minutos",
					h: "una hora",
					hh: "%d horas",
					d: "un día",
					dd: "%d días",
					M: "un mes",
					MM: "%d meses",
					y: "un año",
					yy: "%d años"
				},
				dayOfMonthOrdinalParse: /\d{1,2}º/,
				ordinal: "%dº",
				week: {
					dow: 1,
					doy: 4
				}
			});
		return r
	})
}, function(e, t, n) {
	! function(e, t) {
		t(n(1))
	}(this, function(e) {
		"use strict";

		function t(e, t, n, a) {
			var s = {
				s: ["mõne sekundi", "mõni sekund", "paar sekundit"],
				ss: [e + "sekundi", e + "sekundit"],
				m: ["ühe minuti", "üks minut"],
				mm: [e + " minuti", e + " minutit"],
				h: ["ühe tunni", "tund aega", "üks tund"],
				hh: [e + " tunni", e + " tundi"],
				d: ["ühe päeva", "üks päev"],
				M: ["kuu aja", "kuu aega", "üks kuu"],
				MM: [e + " kuu", e + " kuud"],
				y: ["ühe aasta", "aasta", "üks aasta"],
				yy: [e + " aasta", e + " aastat"]
			};
			return t ? s[n][2] ? s[n][2] : s[n][1] : a ? s[n][0] : s[n][1]
		}
		var n = e.defineLocale("et", {
			months: "jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"),
			monthsShort: "jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"),
			weekdays: "pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev".split("_"),
			weekdaysShort: "P_E_T_K_N_R_L".split("_"),
			weekdaysMin: "P_E_T_K_N_R_L".split("_"),
			longDateFormat: {
				LT: "H:mm",
				LTS: "H:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D. MMMM YYYY",
				LLL: "D. MMMM YYYY H:mm",
				LLLL: "dddd, D. MMMM YYYY H:mm"
			},
			calendar: {
				sameDay: "[Täna,] LT",
				nextDay: "[Homme,] LT",
				nextWeek: "[Järgmine] dddd LT",
				lastDay: "[Eile,] LT",
				lastWeek: "[Eelmine] dddd LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s pärast",
				past: "%s tagasi",
				s: t,
				ss: t,
				m: t,
				mm: t,
				h: t,
				hh: t,
				d: t,
				dd: "%d päeva",
				M: t,
				MM: t,
				y: t,
				yy: t
			},
			dayOfMonthOrdinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		});
		return n
	})
}, function(e, t, n) {
	! function(e, t) {
		t(n(1))
	}(this, function(e) {
		"use strict";
		var t = e.defineLocale("eu", {
			months: "urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split("_"),
			monthsShort: "urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split("_"),
			monthsParseExact: !0,
			weekdays: "igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split("_"),
			weekdaysShort: "ig._al._ar._az._og._ol._lr.".split("_"),
			weekdaysMin: "ig_al_ar_az_og_ol_lr".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "YYYY-MM-DD",
				LL: "YYYY[ko] MMMM[ren] D[a]",
				LLL: "YYYY[ko] MMMM[ren] D[a] HH:mm",
				LLLL: "dddd, YYYY[ko] MMMM[ren] D[a] HH:mm",
				l: "YYYY-M-D",
				ll: "YYYY[ko] MMM D[a]",
				lll: "YYYY[ko] MMM D[a] HH:mm",
				llll: "ddd, YYYY[ko] MMM D[a] HH:mm"
			},
			calendar: {
				sameDay: "[gaur] LT[etan]",
				nextDay: "[bihar] LT[etan]",
				nextWeek: "dddd LT[etan]",
				lastDay: "[atzo] LT[etan]",
				lastWeek: "[aurreko] dddd LT[etan]",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s barru",
				past: "duela %s",
				s: "segundo batzuk",
				ss: "%d segundo",
				m: "minutu bat",
				mm: "%d minutu",
				h: "ordu bat",
				hh: "%d ordu",
				d: "egun bat",
				dd: "%d egun",
				M: "hilabete bat",
				MM: "%d hilabete",
				y: "urte bat",
				yy: "%d urte"
			},
			dayOfMonthOrdinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 7
			}
		});
		return t
	})
}, function(e, t, n) {
	! function(e, t) {
		t(n(1))
	}(this, function(e) {
		"use strict";
		var t = {
				1: "۱",
				2: "۲",
				3: "۳",
				4: "۴",
				5: "۵",
				6: "۶",
				7: "۷",
				8: "۸",
				9: "۹",
				0: "۰"
			},
			n = {
				"۱": "1",
				"۲": "2",
				"۳": "3",
				"۴": "4",
				"۵": "5",
				"۶": "6",
				"۷": "7",
				"۸": "8",
				"۹": "9",
				"۰": "0"
			},
			a = e.defineLocale("fa", {
				months: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),
				monthsShort: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),
				weekdays: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
				weekdaysShort: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
				weekdaysMin: "ی_د_س_چ_پ_ج_ش".split("_"),
				weekdaysParseExact: !0,
				longDateFormat: {
					LT: "HH:mm",
					LTS: "HH:mm:ss",
					L: "DD/MM/YYYY",
					LL: "D MMMM YYYY",
					LLL: "D MMMM YYYY HH:mm",
					LLLL: "dddd, D MMMM YYYY HH:mm"
				},
				meridiemParse: /قبل از ظهر|بعد از ظهر/,
				isPM: function(e) {
					return /بعد از ظهر/.test(e)
				},
				meridiem: function(e, t, n) {
					return e < 12 ? "قبل از ظهر" : "بعد از ظهر"
				},
				calendar: {
					sameDay: "[امروز ساعت] LT",
					nextDay: "[فردا ساعت] LT",
					nextWeek: "dddd [ساعت] LT",
					lastDay: "[دیروز ساعت] LT",
					lastWeek: "dddd [پیش] [ساعت] LT",
					sameElse: "L"
				},
				relativeTime: {
					future: "در %s",
					past: "%s پیش",
					s: "چند ثانیه",
					ss: "ثانیه d%",
					m: "یک دقیقه",
					mm: "%d دقیقه",
					h: "یک ساعت",
					hh: "%d ساعت",
					d: "یک روز",
					dd: "%d روز",
					M: "یک ماه",
					MM: "%d ماه",
					y: "یک سال",
					yy: "%d سال"
				},
				preparse: function(e) {
					return e.replace(/[۰-۹]/g, function(e) {
						return n[e]
					}).replace(/،/g, ",")
				},
				postformat: function(e) {
					return e.replace(/\d/g, function(e) {
						return t[e]
					}).replace(/,/g, "،")
				},
				dayOfMonthOrdinalParse: /\d{1,2}م/,
				ordinal: "%dم",
				week: {
					dow: 6,
					doy: 12
				}
			});
		return a
	})
}, function(e, t, n) {
	! function(e, t) {
		t(n(1))
	}(this, function(e) {
		"use strict";

		function t(e, t, a, s) {
			var r = "";
			switch (a) {
				case "s":
					return s ? "muutaman sekunnin" : "muutama sekunti";
				case "ss":
					return s ? "sekunnin" : "sekuntia";
				case "m":
					return s ? "minuutin" : "minuutti";
				case "mm":
					r = s ? "minuutin" : "minuuttia";
					break;
				case "h":
					return s ? "tunnin" : "tunti";
				case "hh":
					r = s ? "tunnin" : "tuntia";
					break;
				case "d":
					return s ? "päivän" : "päivä";
				case "dd":
					r = s ? "päivän" : "päivää";
					break;
				case "M":
					return s ? "kuukauden" : "kuukausi";
				case "MM":
					r = s ? "kuukauden" : "kuukautta";
					break;
				case "y":
					return s ? "vuoden" : "vuosi";
				case "yy":
					r = s ? "vuoden" : "vuotta"
			}
			return r = n(e, s) + " " + r
		}

		function n(e, t) {
			return e < 10 ? t ? s[e] : a[e] : e
		}
		var a = "nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän".split(" "),
			s = ["nolla", "yhden", "kahden", "kolmen", "neljän", "viiden", "kuuden", a[7], a[8], a[9]],
			r = e.defineLocale("fi", {
				months: "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),
				monthsShort: "tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu".split("_"),
				weekdays: "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),
				weekdaysShort: "su_ma_ti_ke_to_pe_la".split("_"),
				weekdaysMin: "su_ma_ti_ke_to_pe_la".split("_"),
				longDateFormat: {
					LT: "HH.mm",
					LTS: "HH.mm.ss",
					L: "DD.MM.YYYY",
					LL: "Do MMMM[ta] YYYY",
					LLL: "Do MMMM[ta] YYYY, [klo] HH.mm",
					LLLL: "dddd, Do MMMM[ta] YYYY, [klo] HH.mm",
					l: "D.M.YYYY",
					ll: "Do MMM YYYY",
					lll: "Do MMM YYYY, [klo] HH.mm",
					llll: "ddd, Do MMM YYYY, [klo] HH.mm"
				},
				calendar: {
					sameDay: "[tänään] [klo] LT",
					nextDay: "[huomenna] [klo] LT",
					nextWeek: "dddd [klo] LT",
					lastDay: "[eilen] [klo] LT",
					lastWeek: "[viime] dddd[na] [klo] LT",
					sameElse: "L"
				},
				relativeTime: {
					future: "%s päästä",
					past: "%s sitten",
					s: t,
					ss: t,
					m: t,
					mm: t,
					h: t,
					hh: t,
					d: t,
					dd: t,
					M: t,
					MM: t,
					y: t,
					yy: t
				},
				dayOfMonthOrdinalParse: /\d{1,2}\./,
				ordinal: "%d.",
				week: {
					dow: 1,
					doy: 4
				}
			});
		return r
	})
}, function(e, t, n) {
	! function(e, t) {
		t(n(1))
	}(this, function(e) {
		"use strict";
		var t = e.defineLocale("fo", {
			months: "januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember".split("_"),
			monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
			weekdays: "sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur".split("_"),
			weekdaysShort: "sun_mán_týs_mik_hós_frí_ley".split("_"),
			weekdaysMin: "su_má_tý_mi_hó_fr_le".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd D. MMMM, YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Í dag kl.] LT",
				nextDay: "[Í morgin kl.] LT",
				nextWeek: "dddd [kl.] LT",
				lastDay: "[Í gjár kl.] LT",
				lastWeek: "[síðstu] dddd [kl] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "um %s",
				past: "%s síðani",
				s: "fá sekund",
				ss: "%d sekundir",
				m: "ein minutt",
				mm: "%d minuttir",
				h: "ein tími",
				hh: "%d tímar",
				d: "ein dagur",
				dd: "%d dagar",
				M: "ein mánaði",
				MM: "%d mánaðir",
				y: "eitt ár",
				yy: "%d ár"
			},
			dayOfMonthOrdinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		});
		return t
	})
}, function(e, t, n) {
	! function(e, t) {
		t(n(1))
	}(this, function(e) {
		"use strict";
		var t = e.defineLocale("fr-ca", {
			months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
			monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
			monthsParseExact: !0,
			weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
			weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
			weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "YYYY-MM-DD",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Aujourd’hui à] LT",
				nextDay: "[Demain à] LT",
				nextWeek: "dddd [à] LT",
				lastDay: "[Hier à] LT",
				lastWeek: "dddd [dernier à] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "dans %s",
				past: "il y a %s",
				s: "quelques secondes",
				ss: "%d secondes",
				m: "une minute",
				mm: "%d minutes",
				h: "une heure",
				hh: "%d heures",
				d: "un jour",
				dd: "%d jours",
				M: "un mois",
				MM: "%d mois",
				y: "un an",
				yy: "%d ans"
			},
			dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
			ordinal: function(e, t) {
				switch (t) {
					default:
						case "M":
						case "Q":
						case "D":
						case "DDD":
						case "d":
						return e + (1 === e ? "er" : "e");
					case "w":
							case "W":
							return e + (1 === e ? "re" : "e")
				}
			}
		});
		return t
	})
}, function(e, t, n) {
	! function(e, t) {
		t(n(1))
	}(this, function(e) {
		"use strict";
		var t = e.defineLocale("fr-ch", {
			months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
			monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
			monthsParseExact: !0,
			weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
			weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
			weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Aujourd’hui à] LT",
				nextDay: "[Demain à] LT",
				nextWeek: "dddd [à] LT",
				lastDay: "[Hier à] LT",
				lastWeek: "dddd [dernier à] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "dans %s",
				past: "il y a %s",
				s: "quelques secondes",
				ss: "%d secondes",
				m: "une minute",
				mm: "%d minutes",
				h: "une heure",
				hh: "%d heures",
				d: "un jour",
				dd: "%d jours",
				M: "un mois",
				MM: "%d mois",
				y: "un an",
				yy: "%d ans"
			},
			dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
			ordinal: function(e, t) {
				switch (t) {
					default:
						case "M":
						case "Q":
						case "D":
						case "DDD":
						case "d":
						return e + (1 === e ? "er" : "e");
					case "w":
							case "W":
							return e + (1 === e ? "re" : "e")
				}
			},
			week: {
				dow: 1,
				doy: 4
			}
		});
		return t
	})
}, function(e, t, n) {
	! function(e, t) {
		t(n(1))
	}(this, function(e) {
		"use strict";
		var t = e.defineLocale("fr", {
			months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
			monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
			monthsParseExact: !0,
			weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
			weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
			weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Aujourd’hui à] LT",
				nextDay: "[Demain à] LT",
				nextWeek: "dddd [à] LT",
				lastDay: "[Hier à] LT",
				lastWeek: "dddd [dernier à] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "dans %s",
				past: "il y a %s",
				s: "quelques secondes",
				ss: "%d secondes",
				m: "une minute",
				mm: "%d minutes",
				h: "une heure",
				hh: "%d heures",
				d: "un jour",
				dd: "%d jours",
				M: "un mois",
				MM: "%d mois",
				y: "un an",
				yy: "%d ans"
			},
			dayOfMonthOrdinalParse: /\d{1,2}(er|)/,
			ordinal: function(e, t) {
				switch (t) {
					case "D":
						return e + (1 === e ? "er" : "");
					default:
					case "M":
					case "Q":
					case "DDD":
					case "d":
						return e + (1 === e ? "er" : "e");
					case "w":
					case "W":
						return e + (1 === e ? "re" : "e")
				}
			},
			week: {
				dow: 1,
				doy: 4
			}
		});
		return t
	})
}, function(e, t, n) {
	! function(e, t) {
		t(n(1))
	}(this, function(e) {
		"use strict";
		var t = "jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.".split("_"),
			n = "jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
			a = e.defineLocale("fy", {
				months: "jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber".split("_"),
				monthsShort: function(e, a) {
					return e ? /-MMM-/.test(a) ? n[e.month()] : t[e.month()] : t
				},
				monthsParseExact: !0,
				weekdays: "snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon".split("_"),
				weekdaysShort: "si._mo._ti._wo._to._fr._so.".split("_"),
				weekdaysMin: "Si_Mo_Ti_Wo_To_Fr_So".split("_"),
				weekdaysParseExact: !0,
				longDateFormat: {
					LT: "HH:mm",
					LTS: "HH:mm:ss",
					L: "DD-MM-YYYY",
					LL: "D MMMM YYYY",
					LLL: "D MMMM YYYY HH:mm",
					LLLL: "dddd D MMMM YYYY HH:mm"
				},
				calendar: {
					sameDay: "[hjoed om] LT",
					nextDay: "[moarn om] LT",
					nextWeek: "dddd [om] LT",
					lastDay: "[juster om] LT",
					lastWeek: "[ôfrûne] dddd [om] LT",
					sameElse: "L"
				},
				relativeTime: {
					future: "oer %s",
					past: "%s lyn",
					s: "in pear sekonden",
					ss: "%d sekonden",
					m: "ien minút",
					mm: "%d minuten",
					h: "ien oere",
					hh: "%d oeren",
					d: "ien dei",
					dd: "%d dagen",
					M: "ien moanne",
					MM: "%d moannen",
					y: "ien jier",
					yy: "%d jierren"
				},
				dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
				ordinal: function(e) {
					return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
				},
				week: {
					dow: 1,
					doy: 4
				}
			});
		return a
	})
}, function(e, t, n) {
	! function(e, t) {
		t(n(1))
	}(this, function(e) {
		"use strict";
		var t = ["Am Faoilleach", "An Gearran", "Am Màrt", "An Giblean", "An Cèitean", "An t-Ògmhios", "An t-Iuchar", "An Lùnastal", "An t-Sultain", "An Dàmhair", "An t-Samhain", "An Dùbhlachd"],
			n = ["Faoi", "Gear", "Màrt", "Gibl", "Cèit", "Ògmh", "Iuch", "Lùn", "Sult", "Dàmh", "Samh", "Dùbh"],
			a = ["Didòmhnaich", "Diluain", "Dimàirt", "Diciadain", "Diardaoin", "Dihaoine", "Disathairne"],
			s = ["Did", "Dil", "Dim", "Dic", "Dia", "Dih", "Dis"],
			r = ["Dò", "Lu", "Mà", "Ci", "Ar", "Ha", "Sa"],
			i = e.defineLocale("gd", {
				months: t,
				monthsShort: n,
				monthsParseExact: !0,
				weekdays: a,
				weekdaysShort: s,
				weekdaysMin: r,
				longDateFormat: {
					LT: "HH:mm",
					LTS: "HH:mm:ss",
					L: "DD/MM/YYYY",
					LL: "D MMMM YYYY",
					LLL: "D MMMM YYYY HH:mm",
					LLLL: "dddd, D MMMM YYYY HH:mm"
				},
				calendar: {
					sameDay: "[An-diugh aig] LT",
					nextDay: "[A-màireach aig] LT",
					nextWeek: "dddd [aig] LT",
					lastDay: "[An-dè aig] LT",
					lastWeek: "dddd [seo chaidh] [aig] LT",
					sameElse: "L"
				},
				relativeTime: {
					future: "ann an %s",
					past: "bho chionn %s",
					s: "beagan diogan",
					ss: "%d diogan",
					m: "mionaid",
					mm: "%d mionaidean",
					h: "uair",
					hh: "%d uairean",
					d: "latha",
					dd: "%d latha",
					M: "mìos",
					MM: "%d mìosan",
					y: "bliadhna",
					yy: "%d bliadhna"
				},
				dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/,
				ordinal: function(e) {
					var t = 1 === e ? "d" : e % 10 === 2 ? "na" : "mh";
					return e + t
				},
				week: {
					dow: 1,
					doy: 4
				}
			});
		return i
	})
}, function(e, t, n) {
	! function(e, t) {
		t(n(1))
	}(this, function(e) {
		"use strict";
		var t = e.defineLocale("gl", {
			months: "xaneiro_febreiro_marzo_abril_maio_xuño_xullo_agosto_setembro_outubro_novembro_decembro".split("_"),
			monthsShort: "xan._feb._mar._abr._mai._xuñ._xul._ago._set._out._nov._dec.".split("_"),
			monthsParseExact: !0,
			weekdays: "domingo_luns_martes_mércores_xoves_venres_sábado".split("_"),
			weekdaysShort: "dom._lun._mar._mér._xov._ven._sáb.".split("_"),
			weekdaysMin: "do_lu_ma_mé_xo_ve_sá".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "H:mm",
				LTS: "H:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D [de] MMMM [de] YYYY",
				LLL: "D [de] MMMM [de] YYYY H:mm",
				LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
			},
			calendar: {
				sameDay: function() {
					return "[hoxe " + (1 !== this.hours() ? "ás" : "á") + "] LT"
				},
				nextDay: function() {
					return "[mañá " + (1 !== this.hours() ? "ás" : "á") + "] LT"
				},
				nextWeek: function() {
					return "dddd [" + (1 !== this.hours() ? "ás" : "a") + "] LT"
				},
				lastDay: function() {
					return "[onte " + (1 !== this.hours() ? "á" : "a") + "] LT"
				},
				lastWeek: function() {
					return "[o] dddd [pasado " + (1 !== this.hours() ? "ás" : "a") + "] LT"
				},
				sameElse: "L"
			},
			relativeTime: {
				future: function(e) {
					return 0 === e.indexOf("un") ? "n" + e : "en " + e
				},
				past: "hai %s",
				s: "uns segundos",
				ss: "%d segundos",
				m: "un minuto",
				mm: "%d minutos",
				h: "unha hora",
				hh: "%d horas",
				d: "un día",
				dd: "%d días",
				M: "un mes",
				MM: "%d meses",
				y: "un ano",
				yy: "%d anos"
			},
			dayOfMonthOrdinalParse: /\d{1,2}º/,
			ordinal: "%dº",
			week: {
				dow: 1,
				doy: 4
			}
		});
		return t
	})
}, function(e, t, n) {
	! function(e, t) {
		t(n(1))
	}(this, function(e) {
		"use strict";

		function t(e, t, n, a) {
			var s = {
				s: ["thodde secondanim", "thodde second"],
				ss: [e + " secondanim", e + " second"],
				m: ["eka mintan", "ek minute"],
				mm: [e + " mintanim", e + " mintam"],
				h: ["eka horan", "ek hor"],
				hh: [e + " horanim", e + " horam"],
				d: ["eka disan", "ek dis"],
				dd: [e + " disanim", e + " dis"],
				M: ["eka mhoinean", "ek mhoino"],
				MM: [e + " mhoineanim", e + " mhoine"],
				y: ["eka vorsan", "ek voros"],
				yy: [e + " vorsanim", e + " vorsam"]
			};
			return t ? s[n][0] : s[n][1]
		}
		var n = e.defineLocale("gom-latn", {
			months: "Janer_Febrer_Mars_Abril_Mai_Jun_Julai_Agost_Setembr_Otubr_Novembr_Dezembr".split("_"),
			monthsShort: "Jan._Feb._Mars_Abr._Mai_Jun_Jul._Ago._Set._Otu._Nov._Dez.".split("_"),
			monthsParseExact: !0,
			weekdays: "Aitar_Somar_Mongllar_Budvar_Brestar_Sukrar_Son'var".split("_"),
			weekdaysShort: "Ait._Som._Mon._Bud._Bre._Suk._Son.".split("_"),
			weekdaysMin: "Ai_Sm_Mo_Bu_Br_Su_Sn".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "A h:mm [vazta]",
				LTS: "A h:mm:ss [vazta]",
				L: "DD-MM-YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY A h:mm [vazta]",
				LLLL: "dddd, MMMM[achea] Do, YYYY, A h:mm [vazta]",
				llll: "ddd, D MMM YYYY, A h:mm [vazta]"
			},
			calendar: {
				sameDay: "[Aiz] LT",
				nextDay: "[Faleam] LT",
				nextWeek: "[Ieta to] dddd[,] LT",
				lastDay: "[Kal] LT",
				lastWeek: "[Fatlo] dddd[,] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s",
				past: "%s adim",
				s: t,
				ss: t,
				m: t,
				mm: t,
				h: t,
				hh: t,
				d: t,
				dd: t,
				M: t,
				MM: t,
				y: t,
				yy: t
			},
			dayOfMonthOrdinalParse: /\d{1,2}(er)/,
			ordinal: function(e, t) {
				switch (t) {
					case "D":
						return e + "er";
					default:
					case "M":
					case "Q":
					case "DDD":
					case "d":
					case "w":
					case "W":
						return e
				}
			},
			week: {
				dow: 1,
				doy: 4
			},
			meridiemParse: /rati|sokalli|donparam|sanje/,
			meridiemHour: function(e, t) {
				return 12 === e && (e = 0), "rati" === t ? e < 4 ? e : e + 12 : "sokalli" === t ? e : "donparam" === t ? e > 12 ? e : e + 12 : "sanje" === t ? e + 12 : void 0
			},
			meridiem: function(e, t, n) {
				return e < 4 ? "rati" : e < 12 ? "sokalli" : e < 16 ? "donparam" : e < 20 ? "sanje" : "rati"
			}
		});
		return n
	})
}, function(e, t, n) {
	! function(e, t) {
		t(n(1))
	}(this, function(e) {
		"use strict";
		var t = {
				1: "૧",
				2: "૨",
				3: "૩",
				4: "૪",
				5: "૫",
				6: "૬",
				7: "૭",
				8: "૮",
				9: "૯",
				0: "૦"
			},
			n = {
				"૧": "1",
				"૨": "2",
				"૩": "3",
				"૪": "4",
				"૫": "5",
				"૬": "6",
				"૭": "7",
				"૮": "8",
				"૯": "9",
				"૦": "0"
			},
			a = e.defineLocale("gu", {
				months: "જાન્યુઆરી_ફેબ્રુઆરી_માર્ચ_એપ્રિલ_મે_જૂન_જુલાઈ_ઑગસ્ટ_સપ્ટેમ્બર_ઑક્ટ્બર_નવેમ્બર_ડિસેમ્બર".split("_"),
				monthsShort: "જાન્યુ._ફેબ્રુ._માર્ચ_એપ્રિ._મે_જૂન_જુલા._ઑગ._સપ્ટે._ઑક્ટ્._નવે._ડિસે.".split("_"),
				monthsParseExact: !0,
				weekdays: "રવિવાર_સોમવાર_મંગળવાર_બુધ્વાર_ગુરુવાર_શુક્રવાર_શનિવાર".split("_"),
				weekdaysShort: "રવિ_સોમ_મંગળ_બુધ્_ગુરુ_શુક્ર_શનિ".split("_"),
				weekdaysMin: "ર_સો_મં_બુ_ગુ_શુ_શ".split("_"),
				longDateFormat: {
					LT: "A h:mm વાગ્યે",
					LTS: "A h:mm:ss વાગ્યે",
					L: "DD/MM/YYYY",
					LL: "D MMMM YYYY",
					LLL: "D MMMM YYYY, A h:mm વાગ્યે",
					LLLL: "dddd, D MMMM YYYY, A h:mm વાગ્યે"
				},
				calendar: {
					sameDay: "[આજ] LT",
					nextDay: "[કાલે] LT",
					nextWeek: "dddd, LT",
					lastDay: "[ગઇકાલે] LT",
					lastWeek: "[પાછલા] dddd, LT",
					sameElse: "L"
				},
				relativeTime: {
					future: "%s મા",
					past: "%s પેહલા",
					s: "અમુક પળો",
					ss: "%d સેકંડ",
					m: "એક મિનિટ",
					mm: "%d મિનિટ",
					h: "એક કલાક",
					hh: "%d કલાક",
					d: "એક દિવસ",
					dd: "%d દિવસ",
					M: "એક મહિનો",
					MM: "%d મહિનો",
					y: "એક વર્ષ",
					yy: "%d વર્ષ"
				},
				preparse: function(e) {
					return e.replace(/[૧૨૩૪૫૬૭૮૯૦]/g, function(e) {
						return n[e]
					})
				},
				postformat: function(e) {
					return e.replace(/\d/g, function(e) {
						return t[e]
					})
				},
				meridiemParse: /રાત|બપોર|સવાર|સાંજ/,
				meridiemHour: function(e, t) {
					return 12 === e && (e = 0), "રાત" === t ? e < 4 ? e : e + 12 : "સવાર" === t ? e : "બપોર" === t ? e >= 10 ? e : e + 12 : "સાંજ" === t ? e + 12 : void 0
				},
				meridiem: function(e, t, n) {
					return e < 4 ? "રાત" : e < 10 ? "સવાર" : e < 17 ? "બપોર" : e < 20 ? "સાંજ" : "રાત"
				},
				week: {
					dow: 0,
					doy: 6
				}
			});
		return a
	})
}, function(e, t, n) {
	! function(e, t) {
		t(n(1))
	}(this, function(e) {
		"use strict";
		var t = e.defineLocale("he", {
			months: "ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר".split("_"),
			monthsShort: "ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳".split("_"),
			weekdays: "ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת".split("_"),
			weekdaysShort: "א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳".split("_"),
			weekdaysMin: "א_ב_ג_ד_ה_ו_ש".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D [ב]MMMM YYYY",
				LLL: "D [ב]MMMM YYYY HH:mm",
				LLLL: "dddd, D [ב]MMMM YYYY HH:mm",
				l: "D/M/YYYY",
				ll: "D MMM YYYY",
				lll: "D MMM YYYY HH:mm",
				llll: "ddd, D MMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[היום ב־]LT",
				nextDay: "[מחר ב־]LT",
				nextWeek: "dddd [בשעה] LT",
				lastDay: "[אתמול ב־]LT",
				lastWeek: "[ביום] dddd [האחרון בשעה] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "בעוד %s",
				past: "לפני %s",
				s: "מספר שניות",
				ss: "%d שניות",
				m: "דקה",
				mm: "%d דקות",
				h: "שעה",
				hh: function(e) {
					return 2 === e ? "שעתיים" : e + " שעות"
				},
				d: "יום",
				dd: function(e) {
					return 2 === e ? "יומיים" : e + " ימים"
				},
				M: "חודש",
				MM: function(e) {
					return 2 === e ? "חודשיים" : e + " חודשים"
				},
				y: "שנה",
				yy: function(e) {
					return 2 === e ? "שנתיים" : e % 10 === 0 && 10 !== e ? e + " שנה" : e + " שנים"
				}
			},
			meridiemParse: /אחה"צ|לפנה"צ|אחרי הצהריים|לפני הצהריים|לפנות בוקר|בבוקר|בערב/i,
			isPM: function(e) {
				return /^(אחה"צ|אחרי הצהריים|בערב)$/.test(e)
			},
			meridiem: function(e, t, n) {
				return e < 5 ? "לפנות בוקר" : e < 10 ? "בבוקר" : e < 12 ? n ? 'לפנה"צ' : "לפני הצהריים" : e < 18 ? n ? 'אחה"צ' : "אחרי הצהריים" : "בערב"
			}
		});
		return t
	})
}, function(e, t, n) {
	! function(e, t) {
		t(n(1))
	}(this, function(e) {
		"use strict";
		var t = {
				1: "१",
				2: "२",
				3: "३",
				4: "४",
				5: "५",
				6: "६",
				7: "७",
				8: "८",
				9: "९",
				0: "०"
			},
			n = {
				"१": "1",
				"२": "2",
				"३": "3",
				"४": "4",
				"५": "5",
				"६": "6",
				"७": "7",
				"८": "8",
				"९": "9",
				"०": "0"
			},
			a = e.defineLocale("hi", {
				months: "जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर".split("_"),
				monthsShort: "जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.".split("_"),
				monthsParseExact: !0,
				weekdays: "रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),
				weekdaysShort: "रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि".split("_"),
				weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
				longDateFormat: {
					LT: "A h:mm बजे",
					LTS: "A h:mm:ss बजे",
					L: "DD/MM/YYYY",
					LL: "D MMMM YYYY",
					LLL: "D MMMM YYYY, A h:mm बजे",
					LLLL: "dddd, D MMMM YYYY, A h:mm बजे"
				},
				calendar: {
					sameDay: "[आज] LT",
					nextDay: "[कल] LT",
					nextWeek: "dddd, LT",
					lastDay: "[कल] LT",
					lastWeek: "[पिछले] dddd, LT",
					sameElse: "L"
				},
				relativeTime: {
					future: "%s में",
					past: "%s पहले",
					s: "कुछ ही क्षण",
					ss: "%d सेकंड",
					m: "एक मिनट",
					mm: "%d मिनट",
					h: "एक घंटा",
					hh: "%d घंटे",
					d: "एक दिन",
					dd: "%d दिन",
					M: "एक महीने",
					MM: "%d महीने",
					y: "एक वर्ष",
					yy: "%d वर्ष"
				},
				preparse: function(e) {
					return e.replace(/[१२३४५६७८९०]/g, function(e) {
						return n[e]
					})
				},
				postformat: function(e) {
					return e.replace(/\d/g, function(e) {
						return t[e]
					})
				},
				meridiemParse: /रात|सुबह|दोपहर|शाम/,
				meridiemHour: function(e, t) {
					return 12 === e && (e = 0), "रात" === t ? e < 4 ? e : e + 12 : "सुबह" === t ? e : "दोपहर" === t ? e >= 10 ? e : e + 12 : "शाम" === t ? e + 12 : void 0
				},
				meridiem: function(e, t, n) {
					return e < 4 ? "रात" : e < 10 ? "सुबह" : e < 17 ? "दोपहर" : e < 20 ? "शाम" : "रात"
				},
				week: {
					dow: 0,
					doy: 6
				}
			});
		return a
	})
}, function(e, t, n) {
	! function(e, t) {
		t(n(1))
	}(this, function(e) {
		"use strict";

		function t(e, t, n) {
			var a = e + " ";
			switch (n) {
				case "ss":
					return a += 1 === e ? "sekunda" : 2 === e || 3 === e || 4 === e ? "sekunde" : "sekundi";
				case "m":
					return t ? "jedna minuta" : "jedne minute";
				case "mm":
					return a += 1 === e ? "minuta" : 2 === e || 3 === e || 4 === e ? "minute" : "minuta";
				case "h":
					return t ? "jedan sat" : "jednog sata";
				case "hh":
					return a += 1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati";
				case "dd":
					return a += 1 === e ? "dan" : "dana";
				case "MM":
					return a += 1 === e ? "mjesec" : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci";
				case "yy":
					return a += 1 === e ? "godina" : 2 === e || 3 === e || 4 === e ? "godine" : "godina"
			}
		}
		var n = e.defineLocale("hr", {
			months: {
				format: "siječnja_veljače_ožujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split("_"),
				standalone: "siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_")
			},
			monthsShort: "sij._velj._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"),
			monthsParseExact: !0,
			weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
			weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
			weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "H:mm",
				LTS: "H:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D. MMMM YYYY",
				LLL: "D. MMMM YYYY H:mm",
				LLLL: "dddd, D. MMMM YYYY H:mm"
			},
			calendar: {
				sameDay: "[danas u] LT",
				nextDay: "[sutra u] LT",
				nextWeek: function() {
					switch (this.day()) {
						case 0:
							return "[u] [nedjelju] [u] LT";
						case 3:
							return "[u] [srijedu] [u] LT";
						case 6:
							return "[u] [subotu] [u] LT";
						case 1:
						case 2:
						case 4:
						case 5:
							return "[u] dddd [u] LT"
					}
				},
				lastDay: "[jučer u] LT",
				lastWeek: function() {
					switch (this.day()) {
						case 0:
						case 3:
							return "[prošlu] dddd [u] LT";
						case 6:
							return "[prošle] [subote] [u] LT";
						case 1:
						case 2:
						case 4:
						case 5:
							return "[prošli] dddd [u] LT"
					}
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "za %s",
				past: "prije %s",
				s: "par sekundi",
				ss: t,
				m: t,
				mm: t,
				h: t,
				hh: t,
				d: "dan",
				dd: t,
				M: "mjesec",
				MM: t,
				y: "godinu",
				yy: t
			},
			dayOfMonthOrdinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 7
			}
		});
		return n
	})
}, function(e, t, n) {
	! function(e, t) {
		t(n(1))
	}(this, function(e) {
		"use strict";

		function t(e, t, n, a) {
			var s = e;
			switch (n) {
				case "s":
					return a || t ? "néhány másodperc" : "néhány másodperce";
				case "ss":
					return s + (a || t) ? " másodperc" : " másodperce";
				case "m":
					return "egy" + (a || t ? " perc" : " perce");
				case "mm":
					return s + (a || t ? " perc" : " perce");
				case "h":
					return "egy" + (a || t ? " óra" : " órája");
				case "hh":
					return s + (a || t ? " óra" : " órája");
				case "d":
					return "egy" + (a || t ? " nap" : " napja");
				case "dd":
					return s + (a || t ? " nap" : " napja");
				case "M":
					return "egy" + (a || t ? " hónap" : " hónapja");
				case "MM":
					return s + (a || t ? " hónap" : " hónapja");
				case "y":
					return "egy" + (a || t ? " év" : " éve");
				case "yy":
					return s + (a || t ? " év" : " éve")
			}
			return ""
		}

		function n(e) {
			return (e ? "" : "[múlt] ") + "[" + a[this.day()] + "] LT[-kor]"
		}
		var a = "vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton".split(" "),
			s = e.defineLocale("hu", {
				months: "január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split("_"),
				monthsShort: "jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec".split("_"),
				weekdays: "vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split("_"),
				weekdaysShort: "vas_hét_kedd_sze_csüt_pén_szo".split("_"),
				weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"),
				longDateFormat: {
					LT: "H:mm",
					LTS: "H:mm:ss",
					L: "YYYY.MM.DD.",
					LL: "YYYY. MMMM D.",
					LLL: "YYYY. MMMM D. H:mm",
					LLLL: "YYYY. MMMM D., dddd H:mm"
				},
				meridiemParse: /de|du/i,
				isPM: function(e) {
					return "u" === e.charAt(1).toLowerCase()
				},
				meridiem: function(e, t, n) {
					return e < 12 ? n === !0 ? "de" : "DE" : n === !0 ? "du" : "DU"
				},
				calendar: {
					sameDay: "[ma] LT[-kor]",
					nextDay: "[holnap] LT[-kor]",
					nextWeek: function() {
						return n.call(this, !0)
					},
					lastDay: "[tegnap] LT[-kor]",
					lastWeek: function() {
						return n.call(this, !1)
					},
					sameElse: "L"
				},
				relativeTime: {
					future: "%s múlva",
					past: "%s",
					s: t,
					ss: t,
					m: t,
					mm: t,
					h: t,
					hh: t,
					d: t,
					dd: t,
					M: t,
					MM: t,
					y: t,
					yy: t
				},
				dayOfMonthOrdinalParse: /\d{1,2}\./,
				ordinal: "%d.",
				week: {
					dow: 1,
					doy: 4
				}
			});
		return s
	})
}, function(e, t, n) {
	! function(e, t) {
		t(n(1))
	}(this, function(e) {
		"use strict";
		var t = e.defineLocale("hy-am", {
			months: {
				format: "հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի".split("_"),
				standalone: "հունվար_փետրվար_մարտ_ապրիլ_մայիս_հունիս_հուլիս_օգոստոս_սեպտեմբեր_հոկտեմբեր_նոյեմբեր_դեկտեմբեր".split("_")
			},
			monthsShort: "հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ".split("_"),
			weekdays: "կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ".split("_"),
			weekdaysShort: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),
			weekdaysMin: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D MMMM YYYY թ.",
				LLL: "D MMMM YYYY թ., HH:mm",
				LLLL: "dddd, D MMMM YYYY թ., HH:mm"
			},
			calendar: {
				sameDay: "[այսօր] LT",
				nextDay: "[վաղը] LT",
				lastDay: "[երեկ] LT",
				nextWeek: function() {
					return "dddd [օրը ժամը] LT"
				},
				lastWeek: function() {
					return "[անցած] dddd [օրը ժամը] LT"
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "%s հետո",
				past: "%s առաջ",
				s: "մի քանի վայրկյան",
				ss: "%d վայրկյան",
				m: "րոպե",
				mm: "%d րոպե",
				h: "ժամ",
				hh: "%d ժամ",
				d: "օր",
				dd: "%d օր",
				M: "ամիս",
				MM: "%d ամիս",
				y: "տարի",
				yy: "%d տարի"
			},
			meridiemParse: /գիշերվա|առավոտվա|ցերեկվա|երեկոյան/,
			isPM: function(e) {
				return /^(ցերեկվա|երեկոյան)$/.test(e)
			},
			meridiem: function(e) {
				return e < 4 ? "գիշերվա" : e < 12 ? "առավոտվա" : e < 17 ? "ցերեկվա" : "երեկոյան"
			},
			dayOfMonthOrdinalParse: /\d{1,2}|\d{1,2}-(ին|րդ)/,
			ordinal: function(e, t) {
				switch (t) {
					case "DDD":
					case "w":
					case "W":
					case "DDDo":
						return 1 === e ? e + "-ին" : e + "-րդ";
					default:
						return e
				}
			},
			week: {
				dow: 1,
				doy: 7
			}
		});
		return t
	})
}, function(e, t, n) {
	! function(e, t) {
		t(n(1))
	}(this, function(e) {
		"use strict";
		var t = e.defineLocale("id", {
			months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"),
			monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Agt_Sep_Okt_Nov_Des".split("_"),
			weekdays: "Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),
			weekdaysShort: "Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),
			weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),
			longDateFormat: {
				LT: "HH.mm",
				LTS: "HH.mm.ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY [pukul] HH.mm",
				LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
			},
			meridiemParse: /pagi|siang|sore|malam/,
			meridiemHour: function(e, t) {
				return 12 === e && (e = 0), "pagi" === t ? e : "siang" === t ? e >= 11 ? e : e + 12 : "sore" === t || "malam" === t ? e + 12 : void 0
			},
			meridiem: function(e, t, n) {
				return e < 11 ? "pagi" : e < 15 ? "siang" : e < 19 ? "sore" : "malam"
			},
			calendar: {
				sameDay: "[Hari ini pukul] LT",
				nextDay: "[Besok pukul] LT",
				nextWeek: "dddd [pukul] LT",
				lastDay: "[Kemarin pukul] LT",
				lastWeek: "dddd [lalu pukul] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "dalam %s",
				past: "%s yang lalu",
				s: "beberapa detik",
				ss: "%d detik",
				m: "semenit",
				mm: "%d menit",
				h: "sejam",
				hh: "%d jam",
				d: "sehari",
				dd: "%d hari",
				M: "sebulan",
				MM: "%d bulan",
				y: "setahun",
				yy: "%d tahun"
			},
			week: {
				dow: 1,
				doy: 7
			}
		});
		return t
	})
}, function(e, t, n) {
	! function(e, t) {
		t(n(1))
	}(this, function(e) {
		"use strict";

		function t(e) {
			return e % 100 === 11 || e % 10 !== 1
		}

		function n(e, n, a, s) {
			var r = e + " ";
			switch (a) {
				case "s":
					return n || s ? "nokkrar sekúndur" : "nokkrum sekúndum";
				case "ss":
					return t(e) ? r + (n || s ? "sekúndur" : "sekúndum") : r + "sekúnda";
				case "m":
					return n ? "mínúta" : "mínútu";
				case "mm":
					return t(e) ? r + (n || s ? "mínútur" : "mínútum") : n ? r + "mínúta" : r + "mínútu";
				case "hh":
					return t(e) ? r + (n || s ? "klukkustundir" : "klukkustundum") : r + "klukkustund";
				case "d":
					return n ? "dagur" : s ? "dag" : "degi";
				case "dd":
					return t(e) ? n ? r + "dagar" : r + (s ? "daga" : "dögum") : n ? r + "dagur" : r + (s ? "dag" : "degi");
				case "M":
					return n ? "mánuður" : s ? "mánuð" : "mánuði";
				case "MM":
					return t(e) ? n ? r + "mánuðir" : r + (s ? "mánuði" : "mánuðum") : n ? r + "mánuður" : r + (s ? "mánuð" : "mánuði");
				case "y":
					return n || s ? "ár" : "ári";
				case "yy":
					return t(e) ? r + (n || s ? "ár" : "árum") : r + (n || s ? "ár" : "ári")
			}
		}
		var a = e.defineLocale("is", {
			months: "janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember".split("_"),
			monthsShort: "jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des".split("_"),
			weekdays: "sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur".split("_"),
			weekdaysShort: "sun_mán_þri_mið_fim_fös_lau".split("_"),
			weekdaysMin: "Su_Má_Þr_Mi_Fi_Fö_La".split("_"),
			longDateFormat: {
				LT: "H:mm",
				LTS: "H:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D. MMMM YYYY",
				LLL: "D. MMMM YYYY [kl.] H:mm",
				LLLL: "dddd, D. MMMM YYYY [kl.] H:mm"
			},
			calendar: {
				sameDay: "[í dag kl.] LT",
				nextDay: "[á morgun kl.] LT",
				nextWeek: "dddd [kl.] LT",
				lastDay: "[í gær kl.] LT",
				lastWeek: "[síðasta] dddd [kl.] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "eftir %s",
				past: "fyrir %s síðan",
				s: n,
				ss: n,
				m: n,
				mm: n,
				h: "klukkustund",
				hh: n,
				d: n,
				dd: n,
				M: n,
				MM: n,
				y: n,
				yy: n
			},
			dayOfMonthOrdinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		});
		return a
	})
}, function(e, t, n) {
	! function(e, t) {
		t(n(1))
	}(this, function(e) {
		"use strict";
		var t = e.defineLocale("it", {
			months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),
			monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),
			weekdays: "domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato".split("_"),
			weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"),
			weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Oggi alle] LT",
				nextDay: "[Domani alle] LT",
				nextWeek: "dddd [alle] LT",
				lastDay: "[Ieri alle] LT",
				lastWeek: function() {
					switch (this.day()) {
						case 0:
							return "[la scorsa] dddd [alle] LT";
						default:
							return "[lo scorso] dddd [alle] LT"
					}
				},
				sameElse: "L"
			},
			relativeTime: {
				future: function(e) {
					return (/^[0-9].+$/.test(e) ? "tra" : "in") + " " + e
				},
				past: "%s fa",
				s: "alcuni secondi",
				ss: "%d secondi",
				m: "un minuto",
				mm: "%d minuti",
				h: "un'ora",
				hh: "%d ore",
				d: "un giorno",
				dd: "%d giorni",
				M: "un mese",
				MM: "%d mesi",
				y: "un anno",
				yy: "%d anni"
			},
			dayOfMonthOrdinalParse: /\d{1,2}º/,
			ordinal: "%dº",
			week: {
				dow: 1,
				doy: 4
			}
		});
		return t
	})
}, function(e, t, n) {
	! function(e, t) {
		t(n(1))
	}(this, function(e) {
		"use strict";
		var t = e.defineLocale("ja", {
			months: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
			monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
			weekdays: "日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"),
			weekdaysShort: "日_月_火_水_木_金_土".split("_"),
			weekdaysMin: "日_月_火_水_木_金_土".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "YYYY/MM/DD",
				LL: "YYYY年M月D日",
				LLL: "YYYY年M月D日 HH:mm",
				LLLL: "YYYY年M月D日 dddd HH:mm",
				l: "YYYY/MM/DD",
				ll: "YYYY年M月D日",
				lll: "YYYY年M月D日 HH:mm",
				llll: "YYYY年M月D日(ddd) HH:mm"
			},
			meridiemParse: /午前|午後/i,
			isPM: function(e) {
				return "午後" === e
			},
			meridiem: function(e, t, n) {
				return e < 12 ? "午前" : "午後"
			},
			calendar: {
				sameDay: "[今日] LT",
				nextDay: "[明日] LT",
				nextWeek: function(e) {
					return e.week() < this.week() ? "[来週]dddd LT" : "dddd LT"
				},
				lastDay: "[昨日] LT",
				lastWeek: function(e) {
					return this.week() < e.week() ? "[先週]dddd LT" : "dddd LT"
				},
				sameElse: "L"
			},
			dayOfMonthOrdinalParse: /\d{1,2}日/,
			ordinal: function(e, t) {
				switch (t) {
					case "d":
					case "D":
					case "DDD":
						return e + "日";
					default:
						return e
				}
			},
			relativeTime: {
				future: "%s後",
				past: "%s前",
				s: "数秒",
				ss: "%d秒",
				m: "1分",
				mm: "%d分",
				h: "1時間",
				hh: "%d時間",
				d: "1日",
				dd: "%d日",
				M: "1ヶ月",
				MM: "%dヶ月",
				y: "1年",
				yy: "%d年"
			}
		});
		return t
	})
}, function(e, t, n) {
	! function(e, t) {
		t(n(1))
	}(this, function(e) {
		"use strict";
		var t = e.defineLocale("jv", {
			months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember".split("_"),
			monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des".split("_"),
			weekdays: "Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu".split("_"),
			weekdaysShort: "Min_Sen_Sel_Reb_Kem_Jem_Sep".split("_"),
			weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sp".split("_"),
			longDateFormat: {
				LT: "HH.mm",
				LTS: "HH.mm.ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY [pukul] HH.mm",
				LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
			},
			meridiemParse: /enjing|siyang|sonten|ndalu/,
			meridiemHour: function(e, t) {
				return 12 === e && (e = 0), "enjing" === t ? e : "siyang" === t ? e >= 11 ? e : e + 12 : "sonten" === t || "ndalu" === t ? e + 12 : void 0
			},
			meridiem: function(e, t, n) {
				return e < 11 ? "enjing" : e < 15 ? "siyang" : e < 19 ? "sonten" : "ndalu"
			},
			calendar: {
				sameDay: "[Dinten puniko pukul] LT",
				nextDay: "[Mbenjang pukul] LT",
				nextWeek: "dddd [pukul] LT",
				lastDay: "[Kala wingi pukul] LT",
				lastWeek: "dddd [kepengker pukul] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "wonten ing %s",
				past: "%s ingkang kepengker",
				s: "sawetawis detik",
				ss: "%d detik",
				m: "setunggal menit",
				mm: "%d menit",
				h: "setunggal jam",
				hh: "%d jam",
				d: "sedinten",
				dd: "%d dinten",
				M: "sewulan",
				MM: "%d wulan",
				y: "setaun",
				yy: "%d taun"
			},
			week: {
				dow: 1,
				doy: 7
			}
		});
		return t
	})
}, function(e, t, n) {
	! function(e, t) {
		t(n(1))
	}(this, function(e) {
		"use strict";
		var t = e.defineLocale("ka", {
			months: {
				standalone: "იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი".split("_"),
				format: "იანვარს_თებერვალს_მარტს_აპრილის_მაისს_ივნისს_ივლისს_აგვისტს_სექტემბერს_ოქტომბერს_ნოემბერს_დეკემბერს".split("_")
			},
			monthsShort: "იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ".split("_"),
			weekdays: {
				standalone: "კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი".split("_"),
				format: "კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს".split("_"),
				isFormat: /(წინა|შემდეგ)/
			},
			weekdaysShort: "კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ".split("_"),
			weekdaysMin: "კვ_ორ_სა_ოთ_ხუ_პა_შა".split("_"),
			longDateFormat: {
				LT: "h:mm A",
				LTS: "h:mm:ss A",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY h:mm A",
				LLLL: "dddd, D MMMM YYYY h:mm A"
			},
			calendar: {
				sameDay: "[დღეს] LT[-ზე]",
				nextDay: "[ხვალ] LT[-ზე]",
				lastDay: "[გუშინ] LT[-ზე]",
				nextWeek: "[შემდეგ] dddd LT[-ზე]",
				lastWeek: "[წინა] dddd LT-ზე",
				sameElse: "L"
			},
			relativeTime: {
				future: function(e) {
					return /(წამი|წუთი|საათი|წელი)/.test(e) ? e.replace(/ი$/, "ში") : e + "ში"
				},
				past: function(e) {
					return /(წამი|წუთი|საათი|დღე|თვე)/.test(e) ? e.replace(/(ი|ე)$/, "ის წინ") : /წელი/.test(e) ? e.replace(/წელი$/, "წლის წინ") : void 0
				},
				s: "რამდენიმე წამი",
				ss: "%d წამი",
				m: "წუთი",
				mm: "%d წუთი",
				h: "საათი",
				hh: "%d საათი",
				d: "დღე",
				dd: "%d დღე",
				M: "თვე",
				MM: "%d თვე",
				y: "წელი",
				yy: "%d წელი"
			},
			dayOfMonthOrdinalParse: /0|1-ლი|მე-\d{1,2}|\d{1,2}-ე/,
			ordinal: function(e) {
				return 0 === e ? e : 1 === e ? e + "-ლი" : e < 20 || e <= 100 && e % 20 === 0 || e % 100 === 0 ? "მე-" + e : e + "-ე"
			},
			week: {
				dow: 1,
				doy: 7
			}
		});
		return t
	})
}, function(e, t, n) {
	! function(e, t) {
		t(n(1))
	}(this, function(e) {
		"use strict";
		var t = {
				0: "-ші",
				1: "-ші",
				2: "-ші",
				3: "-ші",
				4: "-ші",
				5: "-ші",
				6: "-шы",
				7: "-ші",
				8: "-ші",
				9: "-шы",
				10: "-шы",
				20: "-шы",
				30: "-шы",
				40: "-шы",
				50: "-ші",
				60: "-шы",
				70: "-ші",
				80: "-ші",
				90: "-шы",
				100: "-ші"
			},
			n = e.defineLocale("kk", {
				months: "қаңтар_ақпан_наурыз_сәуір_мамыр_маусым_шілде_тамыз_қыркүйек_қазан_қараша_желтоқсан".split("_"),
				monthsShort: "қаң_ақп_нау_сәу_мам_мау_шіл_там_қыр_қаз_қар_жел".split("_"),
				weekdays: "жексенбі_дүйсенбі_сейсенбі_сәрсенбі_бейсенбі_жұма_сенбі".split("_"),
				weekdaysShort: "жек_дүй_сей_сәр_бей_жұм_сен".split("_"),
				weekdaysMin: "жк_дй_сй_ср_бй_жм_сн".split("_"),
				longDateFormat: {
					LT: "HH:mm",
					LTS: "HH:mm:ss",
					L: "DD.MM.YYYY",
					LL: "D MMMM YYYY",
					LLL: "D MMMM YYYY HH:mm",
					LLLL: "dddd, D MMMM YYYY HH:mm"
				},
				calendar: {
					sameDay: "[Бүгін сағат] LT",
					nextDay: "[Ертең сағат] LT",
					nextWeek: "dddd [сағат] LT",
					lastDay: "[Кеше сағат] LT",
					lastWeek: "[Өткен аптаның] dddd [сағат] LT",
					sameElse: "L"
				},
				relativeTime: {
					future: "%s ішінде",
					past: "%s бұрын",
					s: "бірнеше секунд",
					ss: "%d секунд",
					m: "бір минут",
					mm: "%d минут",
					h: "бір сағат",
					hh: "%d сағат",
					d: "бір күн",
					dd: "%d күн",
					M: "бір ай",
					MM: "%d ай",
					y: "бір жыл",
					yy: "%d жыл"
				},
				dayOfMonthOrdinalParse: /\d{1,2}-(ші|шы)/,
				ordinal: function(e) {
					var n = e % 10,
						a = e >= 100 ? 100 : null;
					return e + (t[e] || t[n] || t[a])
				},
				week: {
					dow: 1,
					doy: 7
				}
			});
		return n
	})
}, function(e, t, n) {
	! function(e, t) {
		t(n(1))
	}(this, function(e) {
		"use strict";
		var t = {
				1: "១",
				2: "២",
				3: "៣",
				4: "៤",
				5: "៥",
				6: "៦",
				7: "៧",
				8: "៨",
				9: "៩",
				0: "០"
			},
			n = {
				"១": "1",
				"២": "2",
				"៣": "3",
				"៤": "4",
				"៥": "5",
				"៦": "6",
				"៧": "7",
				"៨": "8",
				"៩": "9",
				"០": "0"
			},
			a = e.defineLocale("km", {
				months: "មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),
				monthsShort: "មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),
				weekdays: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),
				weekdaysShort: "អា_ច_អ_ព_ព្រ_សុ_ស".split("_"),
				weekdaysMin: "អា_ច_អ_ព_ព្រ_សុ_ស".split("_"),
				weekdaysParseExact: !0,
				longDateFormat: {
					LT: "HH:mm",
					LTS: "HH:mm:ss",
					L: "DD/MM/YYYY",
					LL: "D MMMM YYYY",
					LLL: "D MMMM YYYY HH:mm",
					LLLL: "dddd, D MMMM YYYY HH:mm"
				},
				meridiemParse: /ព្រឹក|ល្ងាច/,
				isPM: function(e) {
					return "ល្ងាច" === e
				},
				meridiem: function(e, t, n) {
					return e < 12 ? "ព្រឹក" : "ល្ងាច"
				},
				calendar: {
					sameDay: "[ថ្ងៃនេះ ម៉ោង] LT",
					nextDay: "[ស្អែក ម៉ោង] LT",
					nextWeek: "dddd [ម៉ោង] LT",
					lastDay: "[ម្សិលមិញ ម៉ោង] LT",
					lastWeek: "dddd [សប្តាហ៍មុន] [ម៉ោង] LT",
					sameElse: "L"
				},
				relativeTime: {
					future: "%sទៀត",
					past: "%sមុន",
					s: "ប៉ុន្មានវិនាទី",
					ss: "%d វិនាទី",
					m: "មួយនាទី",
					mm: "%d នាទី",
					h: "មួយម៉ោង",
					hh: "%d ម៉ោង",
					d: "មួយថ្ងៃ",
					dd: "%d ថ្ងៃ",
					M: "មួយខែ",
					MM: "%d ខែ",
					y: "មួយឆ្នាំ",
					yy: "%d ឆ្នាំ"
				},
				dayOfMonthOrdinalParse: /ទី\d{1,2}/,
				ordinal: "ទី%d",
				preparse: function(e) {
					return e.replace(/[១២៣៤៥៦៧៨៩០]/g, function(e) {
						return n[e]
					})
				},
				postformat: function(e) {
					return e.replace(/\d/g, function(e) {
						return t[e]
					})
				},
				week: {
					dow: 1,
					doy: 4
				}
			});
		return a
	})
}, function(e, t, n) {
	! function(e, t) {
		t(n(1))
	}(this, function(e) {
		"use strict";
		var t = {
				1: "೧",
				2: "೨",
				3: "೩",
				4: "೪",
				5: "೫",
				6: "೬",
				7: "೭",
				8: "೮",
				9: "೯",
				0: "೦"
			},
			n = {
				"೧": "1",
				"೨": "2",
				"೩": "3",
				"೪": "4",
				"೫": "5",
				"೬": "6",
				"೭": "7",
				"೮": "8",
				"೯": "9",
				"೦": "0"
			},
			a = e.defineLocale("kn", {
				months: "ಜನವರಿ_ಫೆಬ್ರವರಿ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂಬರ್_ಅಕ್ಟೋಬರ್_ನವೆಂಬರ್_ಡಿಸೆಂಬರ್".split("_"),
				monthsShort: "ಜನ_ಫೆಬ್ರ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂ_ಅಕ್ಟೋ_ನವೆಂ_ಡಿಸೆಂ".split("_"),
				monthsParseExact: !0,
				weekdays: "ಭಾನುವಾರ_ಸೋಮವಾರ_ಮಂಗಳವಾರ_ಬುಧವಾರ_ಗುರುವಾರ_ಶುಕ್ರವಾರ_ಶನಿವಾರ".split("_"),
				weekdaysShort: "ಭಾನು_ಸೋಮ_ಮಂಗಳ_ಬುಧ_ಗುರು_ಶುಕ್ರ_ಶನಿ".split("_"),
				weekdaysMin: "ಭಾ_ಸೋ_ಮಂ_ಬು_ಗು_ಶು_ಶ".split("_"),
				longDateFormat: {
					LT: "A h:mm",
					LTS: "A h:mm:ss",
					L: "DD/MM/YYYY",
					LL: "D MMMM YYYY",
					LLL: "D MMMM YYYY, A h:mm",
					LLLL: "dddd, D MMMM YYYY, A h:mm"
				},
				calendar: {
					sameDay: "[ಇಂದು] LT",
					nextDay: "[ನಾಳೆ] LT",
					nextWeek: "dddd, LT",
					lastDay: "[ನಿನ್ನೆ] LT",
					lastWeek: "[ಕೊನೆಯ] dddd, LT",
					sameElse: "L"
				},
				relativeTime: {
					future: "%s ನಂತರ",
					past: "%s ಹಿಂದೆ",
					s: "ಕೆಲವು ಕ್ಷಣಗಳು",
					ss: "%d ಸೆಕೆಂಡುಗಳು",
					m: "ಒಂದು ನಿಮಿಷ",
					mm: "%d ನಿಮಿಷ",
					h: "ಒಂದು ಗಂಟೆ",
					hh: "%d ಗಂಟೆ",
					d: "ಒಂದು ದಿನ",
					dd: "%d ದಿನ",
					M: "ಒಂದು ತಿಂಗಳು",
					MM: "%d ತಿಂಗಳು",
					y: "ಒಂದು ವರ್ಷ",
					yy: "%d ವರ್ಷ"
				},
				preparse: function(e) {
					return e.replace(/[೧೨೩೪೫೬೭೮೯೦]/g, function(e) {
						return n[e]
					})
				},
				postformat: function(e) {
					return e.replace(/\d/g, function(e) {
						return t[e]
					})
				},
				meridiemParse: /ರಾತ್ರಿ|ಬೆಳಿಗ್ಗೆ|ಮಧ್ಯಾಹ್ನ|ಸಂಜೆ/,
				meridiemHour: function(e, t) {
					return 12 === e && (e = 0), "ರಾತ್ರಿ" === t ? e < 4 ? e : e + 12 : "ಬೆಳಿಗ್ಗೆ" === t ? e : "ಮಧ್ಯಾಹ್ನ" === t ? e >= 10 ? e : e + 12 : "ಸಂಜೆ" === t ? e + 12 : void 0
				},
				meridiem: function(e, t, n) {
					return e < 4 ? "ರಾತ್ರಿ" : e < 10 ? "ಬೆಳಿಗ್ಗೆ" : e < 17 ? "ಮಧ್ಯಾಹ್ನ" : e < 20 ? "ಸಂಜೆ" : "ರಾತ್ರಿ"
				},
				dayOfMonthOrdinalParse: /\d{1,2}(ನೇ)/,
				ordinal: function(e) {
					return e + "ನೇ"
				},
				week: {
					dow: 0,
					doy: 6
				}
			});
		return a
	})
}, function(e, t, n) {
	! function(e, t) {
		t(n(1))
	}(this, function(e) {
		"use strict";
		var t = e.defineLocale("ko", {
			months: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
			monthsShort: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
			weekdays: "일요일_월요일_화요일_수요일_목요일_금요일_토요일".split("_"),
			weekdaysShort: "일_월_화_수_목_금_토".split("_"),
			weekdaysMin: "일_월_화_수_목_금_토".split("_"),
			longDateFormat: {
				LT: "A h:mm",
				LTS: "A h:mm:ss",
				L: "YYYY.MM.DD.",
				LL: "YYYY년 MMMM D일",
				LLL: "YYYY년 MMMM D일 A h:mm",
				LLLL: "YYYY년 MMMM D일 dddd A h:mm",
				l: "YYYY.MM.DD.",
				ll: "YYYY년 MMMM D일",
				lll: "YYYY년 MMMM D일 A h:mm",
				llll: "YYYY년 MMMM D일 dddd A h:mm"
			},
			calendar: {
				sameDay: "오늘 LT",
				nextDay: "내일 LT",
				nextWeek: "dddd LT",
				lastDay: "어제 LT",
				lastWeek: "지난주 dddd LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s 후",
				past: "%s 전",
				s: "몇 초",
				ss: "%d초",
				m: "1분",
				mm: "%d분",
				h: "한 시간",
				hh: "%d시간",
				d: "하루",
				dd: "%d일",
				M: "한 달",
				MM: "%d달",
				y: "일 년",
				yy: "%d년"
			},
			dayOfMonthOrdinalParse: /\d{1,2}(일|월|주)/,
			ordinal: function(e, t) {
				switch (t) {
					case "d":
					case "D":
					case "DDD":
						return e + "일";
					case "M":
						return e + "월";
					case "w":
					case "W":
						return e + "주";
					default:
						return e
				}
			},
			meridiemParse: /오전|오후/,
			isPM: function(e) {
				return "오후" === e
			},
			meridiem: function(e, t, n) {
				return e < 12 ? "오전" : "오후"
			}
		});
		return t
	})
}, function(e, t, n) {
	! function(e, t) {
		t(n(1))
	}(this, function(e) {
		"use strict";
		var t = {
				0: "-чү",
				1: "-чи",
				2: "-чи",
				3: "-чү",
				4: "-чү",
				5: "-чи",
				6: "-чы",
				7: "-чи",
				8: "-чи",
				9: "-чу",
				10: "-чу",
				20: "-чы",
				30: "-чу",
				40: "-чы",
				50: "-чү",
				60: "-чы",
				70: "-чи",
				80: "-чи",
				90: "-чу",
				100: "-чү"
			},
			n = e.defineLocale("ky", {
				months: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),
				monthsShort: "янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек".split("_"),
				weekdays: "Жекшемби_Дүйшөмбү_Шейшемби_Шаршемби_Бейшемби_Жума_Ишемби".split("_"),
				weekdaysShort: "Жек_Дүй_Шей_Шар_Бей_Жум_Ише".split("_"),
				weekdaysMin: "Жк_Дй_Шй_Шр_Бй_Жм_Иш".split("_"),
				longDateFormat: {
					LT: "HH:mm",
					LTS: "HH:mm:ss",
					L: "DD.MM.YYYY",
					LL: "D MMMM YYYY",
					LLL: "D MMMM YYYY HH:mm",
					LLLL: "dddd, D MMMM YYYY HH:mm"
				},
				calendar: {
					sameDay: "[Бүгүн саат] LT",
					nextDay: "[Эртең саат] LT",
					nextWeek: "dddd [саат] LT",
					lastDay: "[Кече саат] LT",
					lastWeek: "[Өткен аптанын] dddd [күнү] [саат] LT",
					sameElse: "L"
				},
				relativeTime: {
					future: "%s ичинде",
					past: "%s мурун",
					s: "бирнече секунд",
					ss: "%d секунд",
					m: "бир мүнөт",
					mm: "%d мүнөт",
					h: "бир саат",
					hh: "%d саат",
					d: "бир күн",
					dd: "%d күн",
					M: "бир ай",
					MM: "%d ай",
					y: "бир жыл",
					yy: "%d жыл"
				},
				dayOfMonthOrdinalParse: /\d{1,2}-(чи|чы|чү|чу)/,
				ordinal: function(e) {
					var n = e % 10,
						a = e >= 100 ? 100 : null;
					return e + (t[e] || t[n] || t[a])
				},
				week: {
					dow: 1,
					doy: 7
				}
			});
		return n
	})
}, function(e, t, n) {
	! function(e, t) {
		t(n(1))
	}(this, function(e) {
		"use strict";

		function t(e, t, n, a) {
			var s = {
				m: ["eng Minutt", "enger Minutt"],
				h: ["eng Stonn", "enger Stonn"],
				d: ["een Dag", "engem Dag"],
				M: ["ee Mount", "engem Mount"],
				y: ["ee Joer", "engem Joer"]
			};
			return t ? s[n][0] : s[n][1]
		}

		function n(e) {
			var t = e.substr(0, e.indexOf(" "));
			return s(t) ? "a " + e : "an " + e
		}

		function a(e) {
			var t = e.substr(0, e.indexOf(" "));
			return s(t) ? "viru " + e : "virun " + e
		}

		function s(e) {
			if (e = parseInt(e, 10), isNaN(e)) return !1;
			if (e < 0) return !0;
			if (e < 10) return 4 <= e && e <= 7;
			if (e < 100) {
				var t = e % 10,
					n = e / 10;
				return s(0 === t ? n : t)
			}
			if (e < 1e4) {
				for (; e >= 10;) e /= 10;
				return s(e)
			}
			return e /= 1e3, s(e)
		}
		var r = e.defineLocale("lb", {
			months: "Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
			monthsShort: "Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
			monthsParseExact: !0,
			weekdays: "Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg".split("_"),
			weekdaysShort: "So._Mé._Dë._Më._Do._Fr._Sa.".split("_"),
			weekdaysMin: "So_Mé_Dë_Më_Do_Fr_Sa".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "H:mm [Auer]",
				LTS: "H:mm:ss [Auer]",
				L: "DD.MM.YYYY",
				LL: "D. MMMM YYYY",
				LLL: "D. MMMM YYYY H:mm [Auer]",
				LLLL: "dddd, D. MMMM YYYY H:mm [Auer]"
			},
			calendar: {
				sameDay: "[Haut um] LT",
				sameElse: "L",
				nextDay: "[Muer um] LT",
				nextWeek: "dddd [um] LT",
				lastDay: "[Gëschter um] LT",
				lastWeek: function() {
					switch (this.day()) {
						case 2:
						case 4:
							return "[Leschten] dddd [um] LT";
						default:
							return "[Leschte] dddd [um] LT"
					}
				}
			},
			relativeTime: {
				future: n,
				past: a,
				s: "e puer Sekonnen",
				ss: "%d Sekonnen",
				m: t,
				mm: "%d Minutten",
				h: t,
				hh: "%d Stonnen",
				d: t,
				dd: "%d Deeg",
				M: t,
				MM: "%d Méint",
				y: t,
				yy: "%d Joer"
			},
			dayOfMonthOrdinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		});
		return r
	})
}, function(e, t, n) {
	! function(e, t) {
		t(n(1))
	}(this, function(e) {
		"use strict";
		var t = e.defineLocale("lo", {
			months: "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"),
			monthsShort: "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"),
			weekdays: "ອາທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),
			weekdaysShort: "ທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),
			weekdaysMin: "ທ_ຈ_ອຄ_ພ_ພຫ_ສກ_ສ".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "ວັນdddd D MMMM YYYY HH:mm"
			},
			meridiemParse: /ຕອນເຊົ້າ|ຕອນແລງ/,
			isPM: function(e) {
				return "ຕອນແລງ" === e
			},
			meridiem: function(e, t, n) {
				return e < 12 ? "ຕອນເຊົ້າ" : "ຕອນແລງ"
			},
			calendar: {
				sameDay: "[ມື້ນີ້ເວລາ] LT",
				nextDay: "[ມື້ອື່ນເວລາ] LT",
				nextWeek: "[ວັນ]dddd[ໜ້າເວລາ] LT",
				lastDay: "[ມື້ວານນີ້ເວລາ] LT",
				lastWeek: "[ວັນ]dddd[ແລ້ວນີ້ເວລາ] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "ອີກ %s",
				past: "%sຜ່ານມາ",
				s: "ບໍ່ເທົ່າໃດວິນາທີ",
				ss: "%d ວິນາທີ",
				m: "1 ນາທີ",
				mm: "%d ນາທີ",
				h: "1 ຊົ່ວໂມງ",
				hh: "%d ຊົ່ວໂມງ",
				d: "1 ມື້",
				dd: "%d ມື້",
				M: "1 ເດືອນ",
				MM: "%d ເດືອນ",
				y: "1 ປີ",
				yy: "%d ປີ"
			},
			dayOfMonthOrdinalParse: /(ທີ່)\d{1,2}/,
			ordinal: function(e) {
				return "ທີ່" + e
			}
		});
		return t
	})
}, function(e, t, n) {
	! function(e, t) {
		t(n(1))
	}(this, function(e) {
		"use strict";

		function t(e, t, n, a) {
			return t ? "kelios sekundės" : a ? "kelių sekundžių" : "kelias sekundes"
		}

		function n(e, t, n, a) {
			return t ? s(n)[0] : a ? s(n)[1] : s(n)[2]
		}

		function a(e) {
			return e % 10 === 0 || e > 10 && e < 20
		}

		function s(e) {
			return i[e].split("_")
		}

		function r(e, t, r, i) {
			var o = e + " ";
			return 1 === e ? o + n(e, t, r[0], i) : t ? o + (a(e) ? s(r)[1] : s(r)[0]) : i ? o + s(r)[1] : o + (a(e) ? s(r)[1] : s(r)[2])
		}
		var i = {
				ss: "sekundė_sekundžių_sekundes",
				m: "minutė_minutės_minutę",
				mm: "minutės_minučių_minutes",
				h: "valanda_valandos_valandą",
				hh: "valandos_valandų_valandas",
				d: "diena_dienos_dieną",
				dd: "dienos_dienų_dienas",
				M: "mėnuo_mėnesio_mėnesį",
				MM: "mėnesiai_mėnesių_mėnesius",
				y: "metai_metų_metus",
				yy: "metai_metų_metus"
			},
			o = e.defineLocale("lt", {
				months: {
					format: "sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"),
					standalone: "sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis".split("_"),
					isFormat: /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/
				},
				monthsShort: "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),
				weekdays: {
					format: "sekmadienį_pirmadienį_antradienį_trečiadienį_ketvirtadienį_penktadienį_šeštadienį".split("_"),
					standalone: "sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_"),
					isFormat: /dddd HH:mm/
				},
				weekdaysShort: "Sek_Pir_Ant_Tre_Ket_Pen_Šeš".split("_"),
				weekdaysMin: "S_P_A_T_K_Pn_Š".split("_"),
				weekdaysParseExact: !0,
				longDateFormat: {
					LT: "HH:mm",
					LTS: "HH:mm:ss",
					L: "YYYY-MM-DD",
					LL: "YYYY [m.] MMMM D [d.]",
					LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
					LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",
					l: "YYYY-MM-DD",
					ll: "YYYY [m.] MMMM D [d.]",
					lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
					llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"
				},
				calendar: {
					sameDay: "[Šiandien] LT",
					nextDay: "[Rytoj] LT",
					nextWeek: "dddd LT",
					lastDay: "[Vakar] LT",
					lastWeek: "[Praėjusį] dddd LT",
					sameElse: "L"
				},
				relativeTime: {
					future: "po %s",
					past: "prieš %s",
					s: t,
					ss: r,
					m: n,
					mm: r,
					h: n,
					hh: r,
					d: n,
					dd: r,
					M: n,
					MM: r,
					y: n,
					yy: r
				},
				dayOfMonthOrdinalParse: /\d{1,2}-oji/,
				ordinal: function(e) {
					return e + "-oji"
				},
				week: {
					dow: 1,
					doy: 4
				}
			});
		return o
	})
}, function(e, t, n) {
	! function(e, t) {
		t(n(1))
	}(this, function(e) {
		"use strict";

		function t(e, t, n) {
			return n ? t % 10 === 1 && t % 100 !== 11 ? e[2] : e[3] : t % 10 === 1 && t % 100 !== 11 ? e[0] : e[1]
		}

		function n(e, n, a) {
			return e + " " + t(r[a], e, n)
		}

		function a(e, n, a) {
			return t(r[a], e, n)
		}

		function s(e, t) {
			return t ? "dažas sekundes" : "dažām sekundēm"
		}
		var r = {
				ss: "sekundes_sekundēm_sekunde_sekundes".split("_"),
				m: "minūtes_minūtēm_minūte_minūtes".split("_"),
				mm: "minūtes_minūtēm_minūte_minūtes".split("_"),
				h: "stundas_stundām_stunda_stundas".split("_"),
				hh: "stundas_stundām_stunda_stundas".split("_"),
				d: "dienas_dienām_diena_dienas".split("_"),
				dd: "dienas_dienām_diena_dienas".split("_"),
				M: "mēneša_mēnešiem_mēnesis_mēneši".split("_"),
				MM: "mēneša_mēnešiem_mēnesis_mēneši".split("_"),
				y: "gada_gadiem_gads_gadi".split("_"),
				yy: "gada_gadiem_gads_gadi".split("_")
			},
			i = e.defineLocale("lv", {
				months: "janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris".split("_"),
				monthsShort: "jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec".split("_"),
				weekdays: "svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena".split("_"),
				weekdaysShort: "Sv_P_O_T_C_Pk_S".split("_"),
				weekdaysMin: "Sv_P_O_T_C_Pk_S".split("_"),
				weekdaysParseExact: !0,
				longDateFormat: {
					LT: "HH:mm",
					LTS: "HH:mm:ss",
					L: "DD.MM.YYYY.",
					LL: "YYYY. [gada] D. MMMM",
					LLL: "YYYY. [gada] D. MMMM, HH:mm",
					LLLL: "YYYY. [gada] D. MMMM, dddd, HH:mm"
				},
				calendar: {
					sameDay: "[Šodien pulksten] LT",
					nextDay: "[Rīt pulksten] LT",
					nextWeek: "dddd [pulksten] LT",
					lastDay: "[Vakar pulksten] LT",
					lastWeek: "[Pagājušā] dddd [pulksten] LT",
					sameElse: "L"
				},
				relativeTime: {
					future: "pēc %s",
					past: "pirms %s",
					s: s,
					ss: n,
					m: a,
					mm: n,
					h: a,
					hh: n,
					d: a,
					dd: n,
					M: a,
					MM: n,
					y: a,
					yy: n
				},
				dayOfMonthOrdinalParse: /\d{1,2}\./,
				ordinal: "%d.",
				week: {
					dow: 1,
					doy: 4
				}
			});
		return i
	})
}, function(e, t, n) {
	! function(e, t) {
		t(n(1))
	}(this, function(e) {
		"use strict";
		var t = {
				words: {
					ss: ["sekund", "sekunda", "sekundi"],
					m: ["jedan minut", "jednog minuta"],
					mm: ["minut", "minuta", "minuta"],
					h: ["jedan sat", "jednog sata"],
					hh: ["sat", "sata", "sati"],
					dd: ["dan", "dana", "dana"],
					MM: ["mjesec", "mjeseca", "mjeseci"],
					yy: ["godina", "godine", "godina"]
				},
				correctGrammaticalCase: function(e, t) {
					return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2]
				},
				translate: function(e, n, a) {
					var s = t.words[a];
					return 1 === a.length ? n ? s[0] : s[1] : e + " " + t.correctGrammaticalCase(e, s)
				}
			},
			n = e.defineLocale("me", {
				months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),
				monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),
				monthsParseExact: !0,
				weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
				weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
				weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
				weekdaysParseExact: !0,
				longDateFormat: {
					LT: "H:mm",
					LTS: "H:mm:ss",
					L: "DD.MM.YYYY",
					LL: "D. MMMM YYYY",
					LLL: "D. MMMM YYYY H:mm",
					LLLL: "dddd, D. MMMM YYYY H:mm"
				},
				calendar: {
					sameDay: "[danas u] LT",
					nextDay: "[sjutra u] LT",
					nextWeek: function() {
						switch (this.day()) {
							case 0:
								return "[u] [nedjelju] [u] LT";
							case 3:
								return "[u] [srijedu] [u] LT";
							case 6:
								return "[u] [subotu] [u] LT";
							case 1:
							case 2:
							case 4:
							case 5:
								return "[u] dddd [u] LT"
						}
					},
					lastDay: "[juče u] LT",
					lastWeek: function() {
						var e = ["[prošle] [nedjelje] [u] LT", "[prošlog] [ponedjeljka] [u] LT", "[prošlog] [utorka] [u] LT", "[prošle] [srijede] [u] LT", "[prošlog] [četvrtka] [u] LT", "[prošlog] [petka] [u] LT", "[prošle] [subote] [u] LT"];
						return e[this.day()]
					},
					sameElse: "L"
				},
				relativeTime: {
					future: "za %s",
					past: "prije %s",
					s: "nekoliko sekundi",
					ss: t.translate,
					m: t.translate,
					mm: t.translate,
					h: t.translate,
					hh: t.translate,
					d: "dan",
					dd: t.translate,
					M: "mjesec",
					MM: t.translate,
					y: "godinu",
					yy: t.translate
				},
				dayOfMonthOrdinalParse: /\d{1,2}\./,
				ordinal: "%d.",
				week: {
					dow: 1,
					doy: 7
				}
			});
		return n
	})
}, function(e, t, n) {
	! function(e, t) {
		t(n(1))
	}(this, function(e) {
		"use strict";
		var t = e.defineLocale("mi", {
			months: "Kohi-tāte_Hui-tanguru_Poutū-te-rangi_Paenga-whāwhā_Haratua_Pipiri_Hōngoingoi_Here-turi-kōkā_Mahuru_Whiringa-ā-nuku_Whiringa-ā-rangi_Hakihea".split("_"),
			monthsShort: "Kohi_Hui_Pou_Pae_Hara_Pipi_Hōngoi_Here_Mahu_Whi-nu_Whi-ra_Haki".split("_"),
			monthsRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
			monthsStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
			monthsShortRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
			monthsShortStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,2}/i,
			weekdays: "Rātapu_Mane_Tūrei_Wenerei_Tāite_Paraire_Hātarei".split("_"),
			weekdaysShort: "Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"),
			weekdaysMin: "Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY [i] HH:mm",
				LLLL: "dddd, D MMMM YYYY [i] HH:mm"
			},
			calendar: {
				sameDay: "[i teie mahana, i] LT",
				nextDay: "[apopo i] LT",
				nextWeek: "dddd [i] LT",
				lastDay: "[inanahi i] LT",
				lastWeek: "dddd [whakamutunga i] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "i roto i %s",
				past: "%s i mua",
				s: "te hēkona ruarua",
				ss: "%d hēkona",
				m: "he meneti",
				mm: "%d meneti",
				h: "te haora",
				hh: "%d haora",
				d: "he ra",
				dd: "%d ra",
				M: "he marama",
				MM: "%d marama",
				y: "he tau",
				yy: "%d tau"
			},
			dayOfMonthOrdinalParse: /\d{1,2}º/,
			ordinal: "%dº",
			week: {
				dow: 1,
				doy: 4
			}
		});
		return t
	})
}, function(e, t, n) {
	! function(e, t) {
		t(n(1))
	}(this, function(e) {
		"use strict";
		var t = e.defineLocale("mk", {
			months: "јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември".split("_"),
			monthsShort: "јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек".split("_"),
			weekdays: "недела_понеделник_вторник_среда_четврток_петок_сабота".split("_"),
			weekdaysShort: "нед_пон_вто_сре_чет_пет_саб".split("_"),
			weekdaysMin: "нe_пo_вт_ср_че_пе_сa".split("_"),
			longDateFormat: {
				LT: "H:mm",
				LTS: "H:mm:ss",
				L: "D.MM.YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY H:mm",
				LLLL: "dddd, D MMMM YYYY H:mm"
			},
			calendar: {
				sameDay: "[Денес во] LT",
				nextDay: "[Утре во] LT",
				nextWeek: "[Во] dddd [во] LT",
				lastDay: "[Вчера во] LT",
				lastWeek: function() {
					switch (this.day()) {
						case 0:
						case 3:
						case 6:
							return "[Изминатата] dddd [во] LT";
						case 1:
						case 2:
						case 4:
						case 5:
							return "[Изминатиот] dddd [во] LT"
					}
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "после %s",
				past: "пред %s",
				s: "неколку секунди",
				ss: "%d секунди",
				m: "минута",
				mm: "%d минути",
				h: "час",
				hh: "%d часа",
				d: "ден",
				dd: "%d дена",
				M: "месец",
				MM: "%d месеци",
				y: "година",
				yy: "%d години"
			},
			dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
			ordinal: function(e) {
				var t = e % 10,
					n = e % 100;
				return 0 === e ? e + "-ев" : 0 === n ? e + "-ен" : n > 10 && n < 20 ? e + "-ти" : 1 === t ? e + "-ви" : 2 === t ? e + "-ри" : 7 === t || 8 === t ? e + "-ми" : e + "-ти"
			},
			week: {
				dow: 1,
				doy: 7
			}
		});
		return t
	})
}, function(e, t, n) {
	! function(e, t) {
		t(n(1))
	}(this, function(e) {
		"use strict";
		var t = e.defineLocale("ml", {
			months: "ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ".split("_"),
			monthsShort: "ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.".split("_"),
			monthsParseExact: !0,
			weekdays: "ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച".split("_"),
			weekdaysShort: "ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി".split("_"),
			weekdaysMin: "ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ".split("_"),
			longDateFormat: {
				LT: "A h:mm -നു",
				LTS: "A h:mm:ss -നു",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY, A h:mm -നു",
				LLLL: "dddd, D MMMM YYYY, A h:mm -നു"
			},
			calendar: {
				sameDay: "[ഇന്ന്] LT",
				nextDay: "[നാളെ] LT",
				nextWeek: "dddd, LT",
				lastDay: "[ഇന്നലെ] LT",
				lastWeek: "[കഴിഞ്ഞ] dddd, LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s കഴിഞ്ഞ്",
				past: "%s മുൻപ്",
				s: "അൽപ നിമിഷങ്ങൾ",
				ss: "%d സെക്കൻഡ്",
				m: "ഒരു മിനിറ്റ്",
				mm: "%d മിനിറ്റ്",
				h: "ഒരു മണിക്കൂർ",
				hh: "%d മണിക്കൂർ",
				d: "ഒരു ദിവസം",
				dd: "%d ദിവസം",
				M: "ഒരു മാസം",
				MM: "%d മാസം",
				y: "ഒരു വർഷം",
				yy: "%d വർഷം"
			},
			meridiemParse: /രാത്രി|രാവിലെ|ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി/i,
			meridiemHour: function(e, t) {
				return 12 === e && (e = 0), "രാത്രി" === t && e >= 4 || "ഉച്ച കഴിഞ്ഞ്" === t || "വൈകുന്നേരം" === t ? e + 12 : e
			},
			meridiem: function(e, t, n) {
				return e < 4 ? "രാത്രി" : e < 12 ? "രാവിലെ" : e < 17 ? "ഉച്ച കഴിഞ്ഞ്" : e < 20 ? "വൈകുന്നേരം" : "രാത്രി"
			}
		});
		return t
	})
}, function(e, t, n) {
	! function(e, t) {
		t(n(1))
	}(this, function(e) {
		"use strict";

		function t(e, t, n, a) {
			switch (n) {
				case "s":
					return t ? "хэдхэн секунд" : "хэдхэн секундын";
				case "ss":
					return e + (t ? " секунд" : " секундын");
				case "m":
				case "mm":
					return e + (t ? " минут" : " минутын");
				case "h":
				case "hh":
					return e + (t ? " цаг" : " цагийн");
				case "d":
				case "dd":
					return e + (t ? " өдөр" : " өдрийн");
				case "M":
				case "MM":
					return e + (t ? " сар" : " сарын");
				case "y":
				case "yy":
					return e + (t ? " жил" : " жилийн");
				default:
					return e
			}
		}
		var n = e.defineLocale("mn", {
			months: "Нэгдүгээр сар_Хоёрдугаар сар_Гуравдугаар сар_Дөрөвдүгээр сар_Тавдугаар сар_Зургадугаар сар_Долдугаар сар_Наймдугаар сар_Есдүгээр сар_Аравдугаар сар_Арван нэгдүгээр сар_Арван хоёрдугаар сар".split("_"),
			monthsShort: "1 сар_2 сар_3 сар_4 сар_5 сар_6 сар_7 сар_8 сар_9 сар_10 сар_11 сар_12 сар".split("_"),
			monthsParseExact: !0,
			weekdays: "Ням_Даваа_Мягмар_Лхагва_Пүрэв_Баасан_Бямба".split("_"),
			weekdaysShort: "Ням_Дав_Мяг_Лха_Пүр_Баа_Бям".split("_"),
			weekdaysMin: "Ня_Да_Мя_Лх_Пү_Ба_Бя".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "YYYY-MM-DD",
				LL: "YYYY оны MMMMын D",
				LLL: "YYYY оны MMMMын D HH:mm",
				LLLL: "dddd, YYYY оны MMMMын D HH:mm"
			},
			meridiemParse: /ҮӨ|ҮХ/i,
			isPM: function(e) {
				return "ҮХ" === e
			},
			meridiem: function(e, t, n) {
				return e < 12 ? "ҮӨ" : "ҮХ"
			},
			calendar: {
				sameDay: "[Өнөөдөр] LT",
				nextDay: "[Маргааш] LT",
				nextWeek: "[Ирэх] dddd LT",
				lastDay: "[Өчигдөр] LT",
				lastWeek: "[Өнгөрсөн] dddd LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s дараа",
				past: "%s өмнө",
				s: t,
				ss: t,
				m: t,
				mm: t,
				h: t,
				hh: t,
				d: t,
				dd: t,
				M: t,
				MM: t,
				y: t,
				yy: t
			},
			dayOfMonthOrdinalParse: /\d{1,2} өдөр/,
			ordinal: function(e, t) {
				switch (t) {
					case "d":
					case "D":
					case "DDD":
						return e + " өдөр";
					default:
						return e
				}
			}
		});
		return n
	})
}, function(e, t, n) {
	! function(e, t) {
		t(n(1))
	}(this, function(e) {
		"use strict";

		function t(e, t, n, a) {
			var s = "";
			if (t) switch (n) {
				case "s":
					s = "काही सेकंद";
					break;
				case "ss":
					s = "%d सेकंद";
					break;
				case "m":
					s = "एक मिनिट";
					break;
				case "mm":
					s = "%d मिनिटे";
					break;
				case "h":
					s = "एक तास";
					break;
				case "hh":
					s = "%d तास";
					break;
				case "d":
					s = "एक दिवस";
					break;
				case "dd":
					s = "%d दिवस";
					break;
				case "M":
					s = "एक महिना";
					break;
				case "MM":
					s = "%d महिने";
					break;
				case "y":
					s = "एक वर्ष";
					break;
				case "yy":
					s = "%d वर्षे"
			} else switch (n) {
				case "s":
					s = "काही सेकंदां";
					break;
				case "ss":
					s = "%d सेकंदां";
					break;
				case "m":
					s = "एका मिनिटा";
					break;
				case "mm":
					s = "%d मिनिटां";
					break;
				case "h":
					s = "एका तासा";
					break;
				case "hh":
					s = "%d तासां";
					break;
				case "d":
					s = "एका दिवसा";
					break;
				case "dd":
					s = "%d दिवसां";
					break;
				case "M":
					s = "एका महिन्या";
					break;
				case "MM":
					s = "%d महिन्यां";
					break;
				case "y":
					s = "एका वर्षा";
					break;
				case "yy":
					s = "%d वर्षां"
			}
			return s.replace(/%d/i, e)
		}
		var n = {
				1: "१",
				2: "२",
				3: "३",
				4: "४",
				5: "५",
				6: "६",
				7: "७",
				8: "८",
				9: "९",
				0: "०"
			},
			a = {
				"१": "1",
				"२": "2",
				"३": "3",
				"४": "4",
				"५": "5",
				"६": "6",
				"७": "7",
				"८": "8",
				"९": "9",
				"०": "0"
			},
			s = e.defineLocale("mr", {
				months: "जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर".split("_"),
				monthsShort: "जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.".split("_"),
				monthsParseExact: !0,
				weekdays: "रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),
				weekdaysShort: "रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि".split("_"),
				weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
				longDateFormat: {
					LT: "A h:mm वाजता",
					LTS: "A h:mm:ss वाजता",
					L: "DD/MM/YYYY",
					LL: "D MMMM YYYY",
					LLL: "D MMMM YYYY, A h:mm वाजता",
					LLLL: "dddd, D MMMM YYYY, A h:mm वाजता"
				},
				calendar: {
					sameDay: "[आज] LT",
					nextDay: "[उद्या] LT",
					nextWeek: "dddd, LT",
					lastDay: "[काल] LT",
					lastWeek: "[मागील] dddd, LT",
					sameElse: "L"
				},
				relativeTime: {
					future: "%sमध्ये",
					past: "%sपूर्वी",
					s: t,
					ss: t,
					m: t,
					mm: t,
					h: t,
					hh: t,
					d: t,
					dd: t,
					M: t,
					MM: t,
					y: t,
					yy: t
				},
				preparse: function(e) {
					return e.replace(/[१२३४५६७८९०]/g, function(e) {
						return a[e]
					})
				},
				postformat: function(e) {
					return e.replace(/\d/g, function(e) {
						return n[e]
					})
				},
				meridiemParse: /रात्री|सकाळी|दुपारी|सायंकाळी/,
				meridiemHour: function(e, t) {
					return 12 === e && (e = 0), "रात्री" === t ? e < 4 ? e : e + 12 : "सकाळी" === t ? e : "दुपारी" === t ? e >= 10 ? e : e + 12 : "सायंकाळी" === t ? e + 12 : void 0
				},
				meridiem: function(e, t, n) {
					return e < 4 ? "रात्री" : e < 10 ? "सकाळी" : e < 17 ? "दुपारी" : e < 20 ? "सायंकाळी" : "रात्री"
				},
				week: {
					dow: 0,
					doy: 6
				}
			});
		return s
	})
}, function(e, t, n) {
	! function(e, t) {
		t(n(1))
	}(this, function(e) {
		"use strict";
		var t = e.defineLocale("ms-my", {
			months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
			monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
			weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
			weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
			weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
			longDateFormat: {
				LT: "HH.mm",
				LTS: "HH.mm.ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY [pukul] HH.mm",
				LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
			},
			meridiemParse: /pagi|tengahari|petang|malam/,
			meridiemHour: function(e, t) {
				return 12 === e && (e = 0), "pagi" === t ? e : "tengahari" === t ? e >= 11 ? e : e + 12 : "petang" === t || "malam" === t ? e + 12 : void 0
			},
			meridiem: function(e, t, n) {
				return e < 11 ? "pagi" : e < 15 ? "tengahari" : e < 19 ? "petang" : "malam"
			},
			calendar: {
				sameDay: "[Hari ini pukul] LT",
				nextDay: "[Esok pukul] LT",
				nextWeek: "dddd [pukul] LT",
				lastDay: "[Kelmarin pukul] LT",
				lastWeek: "dddd [lepas pukul] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "dalam %s",
				past: "%s yang lepas",
				s: "beberapa saat",
				ss: "%d saat",
				m: "seminit",
				mm: "%d minit",
				h: "sejam",
				hh: "%d jam",
				d: "sehari",
				dd: "%d hari",
				M: "sebulan",
				MM: "%d bulan",
				y: "setahun",
				yy: "%d tahun"
			},
			week: {
				dow: 1,
				doy: 7
			}
		});
		return t
	})
}, function(e, t, n) {
	! function(e, t) {
		t(n(1))
	}(this, function(e) {
		"use strict";
		var t = e.defineLocale("ms", {
			months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
			monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
			weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
			weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
			weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
			longDateFormat: {
				LT: "HH.mm",
				LTS: "HH.mm.ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY [pukul] HH.mm",
				LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
			},
			meridiemParse: /pagi|tengahari|petang|malam/,
			meridiemHour: function(e, t) {
				return 12 === e && (e = 0), "pagi" === t ? e : "tengahari" === t ? e >= 11 ? e : e + 12 : "petang" === t || "malam" === t ? e + 12 : void 0
			},
			meridiem: function(e, t, n) {
				return e < 11 ? "pagi" : e < 15 ? "tengahari" : e < 19 ? "petang" : "malam"
			},
			calendar: {
				sameDay: "[Hari ini pukul] LT",
				nextDay: "[Esok pukul] LT",
				nextWeek: "dddd [pukul] LT",
				lastDay: "[Kelmarin pukul] LT",
				lastWeek: "dddd [lepas pukul] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "dalam %s",
				past: "%s yang lepas",
				s: "beberapa saat",
				ss: "%d saat",
				m: "seminit",
				mm: "%d minit",
				h: "sejam",
				hh: "%d jam",
				d: "sehari",
				dd: "%d hari",
				M: "sebulan",
				MM: "%d bulan",
				y: "setahun",
				yy: "%d tahun"
			},
			week: {
				dow: 1,
				doy: 7
			}
		});
		return t
	})
}, function(e, t, n) {
	! function(e, t) {
		t(n(1))
	}(this, function(e) {
		"use strict";
		var t = e.defineLocale("mt", {
			months: "Jannar_Frar_Marzu_April_Mejju_Ġunju_Lulju_Awwissu_Settembru_Ottubru_Novembru_Diċembru".split("_"),
			monthsShort: "Jan_Fra_Mar_Apr_Mej_Ġun_Lul_Aww_Set_Ott_Nov_Diċ".split("_"),
			weekdays: "Il-Ħadd_It-Tnejn_It-Tlieta_L-Erbgħa_Il-Ħamis_Il-Ġimgħa_Is-Sibt".split("_"),
			weekdaysShort: "Ħad_Tne_Tli_Erb_Ħam_Ġim_Sib".split("_"),
			weekdaysMin: "Ħa_Tn_Tl_Er_Ħa_Ġi_Si".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd, D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Illum fil-]LT",
				nextDay: "[Għada fil-]LT",
				nextWeek: "dddd [fil-]LT",
				lastDay: "[Il-bieraħ fil-]LT",
				lastWeek: "dddd [li għadda] [fil-]LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "f’ %s",
				past: "%s ilu",
				s: "ftit sekondi",
				ss: "%d sekondi",
				m: "minuta",
				mm: "%d minuti",
				h: "siegħa",
				hh: "%d siegħat",
				d: "ġurnata",
				dd: "%d ġranet",
				M: "xahar",
				MM: "%d xhur",
				y: "sena",
				yy: "%d sni"
			},
			dayOfMonthOrdinalParse: /\d{1,2}º/,
			ordinal: "%dº",
			week: {
				dow: 1,
				doy: 4
			}
		});
		return t
	})
}, function(e, t, n) {
	! function(e, t) {
		t(n(1))
	}(this, function(e) {
		"use strict";
		var t = {
				1: "၁",
				2: "၂",
				3: "၃",
				4: "၄",
				5: "၅",
				6: "၆",
				7: "၇",
				8: "၈",
				9: "၉",
				0: "၀"
			},
			n = {
				"၁": "1",
				"၂": "2",
				"၃": "3",
				"၄": "4",
				"၅": "5",
				"၆": "6",
				"၇": "7",
				"၈": "8",
				"၉": "9",
				"၀": "0"
			},
			a = e.defineLocale("my", {
				months: "ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ".split("_"),
				monthsShort: "ဇန်_ဖေ_မတ်_ပြီ_မေ_ဇွန်_လိုင်_သြ_စက်_အောက်_နို_ဒီ".split("_"),
				weekdays: "တနင်္ဂနွေ_တနင်္လာ_အင်္ဂါ_ဗုဒ္ဓဟူး_ကြာသပတေး_သောကြာ_စနေ".split("_"),
				weekdaysShort: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),
				weekdaysMin: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),
				longDateFormat: {
					LT: "HH:mm",
					LTS: "HH:mm:ss",
					L: "DD/MM/YYYY",
					LL: "D MMMM YYYY",
					LLL: "D MMMM YYYY HH:mm",
					LLLL: "dddd D MMMM YYYY HH:mm"
				},
				calendar: {
					sameDay: "[ယနေ.] LT [မှာ]",
					nextDay: "[မနက်ဖြန်] LT [မှာ]",
					nextWeek: "dddd LT [မှာ]",
					lastDay: "[မနေ.က] LT [မှာ]",
					lastWeek: "[ပြီးခဲ့သော] dddd LT [မှာ]",
					sameElse: "L"
				},
				relativeTime: {
					future: "လာမည့် %s မှာ",
					past: "လွန်ခဲ့သော %s က",
					s: "စက္ကန်.အနည်းငယ်",
					ss: "%d စက္ကန့်",
					m: "တစ်မိနစ်",
					mm: "%d မိနစ်",
					h: "တစ်နာရီ",
					hh: "%d နာရီ",
					d: "တစ်ရက်",
					dd: "%d ရက်",
					M: "တစ်လ",
					MM: "%d လ",
					y: "တစ်နှစ်",
					yy: "%d နှစ်"
				},
				preparse: function(e) {
					return e.replace(/[၁၂၃၄၅၆၇၈၉၀]/g, function(e) {
						return n[e]
					})
				},
				postformat: function(e) {
					return e.replace(/\d/g, function(e) {
						return t[e]
					})
				},
				week: {
					dow: 1,
					doy: 4
				}
			});
		return a
	})
}, function(e, t, n) {
	! function(e, t) {
		t(n(1))
	}(this, function(e) {
		"use strict";
		var t = e.defineLocale("nb", {
			months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
			monthsShort: "jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),
			monthsParseExact: !0,
			weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
			weekdaysShort: "sø._ma._ti._on._to._fr._lø.".split("_"),
			weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D. MMMM YYYY",
				LLL: "D. MMMM YYYY [kl.] HH:mm",
				LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
			},
			calendar: {
				sameDay: "[i dag kl.] LT",
				nextDay: "[i morgen kl.] LT",
				nextWeek: "dddd [kl.] LT",
				lastDay: "[i går kl.] LT",
				lastWeek: "[forrige] dddd [kl.] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "om %s",
				past: "%s siden",
				s: "noen sekunder",
				ss: "%d sekunder",
				m: "ett minutt",
				mm: "%d minutter",
				h: "en time",
				hh: "%d timer",
				d: "en dag",
				dd: "%d dager",
				M: "en måned",
				MM: "%d måneder",
				y: "ett år",
				yy: "%d år"
			},
			dayOfMonthOrdinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		});
		return t
	})
}, function(e, t, n) {
	! function(e, t) {
		t(n(1))
	}(this, function(e) {
		"use strict";
		var t = {
				1: "१",
				2: "२",
				3: "३",
				4: "४",
				5: "५",
				6: "६",
				7: "७",
				8: "८",
				9: "९",
				0: "०"
			},
			n = {
				"१": "1",
				"२": "2",
				"३": "3",
				"४": "4",
				"५": "5",
				"६": "6",
				"७": "7",
				"८": "8",
				"९": "9",
				"०": "0"
			},
			a = e.defineLocale("ne", {
				months: "जनवरी_फेब्रुवरी_मार्च_अप्रिल_मई_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर".split("_"),
				monthsShort: "जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.".split("_"),
				monthsParseExact: !0,
				weekdays: "आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार".split("_"),
				weekdaysShort: "आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.".split("_"),
				weekdaysMin: "आ._सो._मं._बु._बि._शु._श.".split("_"),
				weekdaysParseExact: !0,
				longDateFormat: {
					LT: "Aको h:mm बजे",
					LTS: "Aको h:mm:ss बजे",
					L: "DD/MM/YYYY",
					LL: "D MMMM YYYY",
					LLL: "D MMMM YYYY, Aको h:mm बजे",
					LLLL: "dddd, D MMMM YYYY, Aको h:mm बजे"
				},
				preparse: function(e) {
					return e.replace(/[१२३४५६७८९०]/g, function(e) {
						return n[e]
					})
				},
				postformat: function(e) {
					return e.replace(/\d/g, function(e) {
						return t[e]
					})
				},
				meridiemParse: /राति|बिहान|दिउँसो|साँझ/,
				meridiemHour: function(e, t) {
					return 12 === e && (e = 0), "राति" === t ? e < 4 ? e : e + 12 : "बिहान" === t ? e : "दिउँसो" === t ? e >= 10 ? e : e + 12 : "साँझ" === t ? e + 12 : void 0
				},
				meridiem: function(e, t, n) {
					return e < 3 ? "राति" : e < 12 ? "बिहान" : e < 16 ? "दिउँसो" : e < 20 ? "साँझ" : "राति"
				},
				calendar: {
					sameDay: "[आज] LT",
					nextDay: "[भोलि] LT",
					nextWeek: "[आउँदो] dddd[,] LT",
					lastDay: "[हिजो] LT",
					lastWeek: "[गएको] dddd[,] LT",
					sameElse: "L"
				},
				relativeTime: {
					future: "%sमा",
					past: "%s अगाडि",
					s: "केही क्षण",
					ss: "%d सेकेण्ड",
					m: "एक मिनेट",
					mm: "%d मिनेट",
					h: "एक घण्टा",
					hh: "%d घण्टा",
					d: "एक दिन",
					dd: "%d दिन",
					M: "एक महिना",
					MM: "%d महिना",
					y: "एक बर्ष",
					yy: "%d बर्ष"
				},
				week: {
					dow: 0,
					doy: 6
				}
			});
		return a
	})
}, function(e, t, n) {
	! function(e, t) {
		t(n(1))
	}(this, function(e) {
		"use strict";
		var t = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),
			n = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
			a = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i],
			s = /^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
			r = e.defineLocale("nl-be", {
				months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
				monthsShort: function(e, a) {
					return e ? /-MMM-/.test(a) ? n[e.month()] : t[e.month()] : t
				},
				monthsRegex: s,
				monthsShortRegex: s,
				monthsStrictRegex: /^(januari|februari|maart|mei|ju[nl]i|april|augustus|september|oktober|november|december)/i,
				monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
				monthsParse: a,
				longMonthsParse: a,
				shortMonthsParse: a,
				weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
				weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
				weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"),
				weekdaysParseExact: !0,
				longDateFormat: {
					LT: "HH:mm",
					LTS: "HH:mm:ss",
					L: "DD/MM/YYYY",
					LL: "D MMMM YYYY",
					LLL: "D MMMM YYYY HH:mm",
					LLLL: "dddd D MMMM YYYY HH:mm"
				},
				calendar: {
					sameDay: "[vandaag om] LT",
					nextDay: "[morgen om] LT",
					nextWeek: "dddd [om] LT",
					lastDay: "[gisteren om] LT",
					lastWeek: "[afgelopen] dddd [om] LT",
					sameElse: "L"
				},
				relativeTime: {
					future: "over %s",
					past: "%s geleden",
					s: "een paar seconden",
					ss: "%d seconden",
					m: "één minuut",
					mm: "%d minuten",
					h: "één uur",
					hh: "%d uur",
					d: "één dag",
					dd: "%d dagen",
					M: "één maand",
					MM: "%d maanden",
					y: "één jaar",
					yy: "%d jaar"
				},
				dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
				ordinal: function(e) {
					return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
				},
				week: {
					dow: 1,
					doy: 4
				}
			});
		return r
	})
}, function(e, t, n) {
	! function(e, t) {
		t(n(1))
	}(this, function(e) {
		"use strict";
		var t = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),
			n = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
			a = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i],
			s = /^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
			r = e.defineLocale("nl", {
				months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
				monthsShort: function(e, a) {
					return e ? /-MMM-/.test(a) ? n[e.month()] : t[e.month()] : t
				},
				monthsRegex: s,
				monthsShortRegex: s,
				monthsStrictRegex: /^(januari|februari|maart|mei|ju[nl]i|april|augustus|september|oktober|november|december)/i,
				monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
				monthsParse: a,
				longMonthsParse: a,
				shortMonthsParse: a,
				weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
				weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
				weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"),
				weekdaysParseExact: !0,
				longDateFormat: {
					LT: "HH:mm",
					LTS: "HH:mm:ss",
					L: "DD-MM-YYYY",
					LL: "D MMMM YYYY",
					LLL: "D MMMM YYYY HH:mm",
					LLLL: "dddd D MMMM YYYY HH:mm"
				},
				calendar: {
					sameDay: "[vandaag om] LT",
					nextDay: "[morgen om] LT",
					nextWeek: "dddd [om] LT",
					lastDay: "[gisteren om] LT",
					lastWeek: "[afgelopen] dddd [om] LT",
					sameElse: "L"
				},
				relativeTime: {
					future: "over %s",
					past: "%s geleden",
					s: "een paar seconden",
					ss: "%d seconden",
					m: "één minuut",
					mm: "%d minuten",
					h: "één uur",
					hh: "%d uur",
					d: "één dag",
					dd: "%d dagen",
					M: "één maand",
					MM: "%d maanden",
					y: "één jaar",
					yy: "%d jaar"
				},
				dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
				ordinal: function(e) {
					return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
				},
				week: {
					dow: 1,
					doy: 4
				}
			});
		return r
	})
}, function(e, t, n) {
	! function(e, t) {
		t(n(1))
	}(this, function(e) {
		"use strict";
		var t = e.defineLocale("nn", {
			months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
			monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
			weekdays: "sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"),
			weekdaysShort: "sun_mån_tys_ons_tor_fre_lau".split("_"),
			weekdaysMin: "su_må_ty_on_to_fr_lø".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D. MMMM YYYY",
				LLL: "D. MMMM YYYY [kl.] H:mm",
				LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
			},
			calendar: {
				sameDay: "[I dag klokka] LT",
				nextDay: "[I morgon klokka] LT",
				nextWeek: "dddd [klokka] LT",
				lastDay: "[I går klokka] LT",
				lastWeek: "[Føregåande] dddd [klokka] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "om %s",
				past: "%s sidan",
				s: "nokre sekund",
				ss: "%d sekund",
				m: "eit minutt",
				mm: "%d minutt",
				h: "ein time",
				hh: "%d timar",
				d: "ein dag",
				dd: "%d dagar",
				M: "ein månad",
				MM: "%d månader",
				y: "eit år",
				yy: "%d år"
			},
			dayOfMonthOrdinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		});
		return t
	})
}, function(e, t, n) {
	! function(e, t) {
		t(n(1))
	}(this, function(e) {
		"use strict";
		var t = {
				1: "੧",
				2: "੨",
				3: "੩",
				4: "੪",
				5: "੫",
				6: "੬",
				7: "੭",
				8: "੮",
				9: "੯",
				0: "੦"
			},
			n = {
				"੧": "1",
				"੨": "2",
				"੩": "3",
				"੪": "4",
				"੫": "5",
				"੬": "6",
				"੭": "7",
				"੮": "8",
				"੯": "9",
				"੦": "0"
			},
			a = e.defineLocale("pa-in", {
				months: "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"),
				monthsShort: "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"),
				weekdays: "ਐਤਵਾਰ_ਸੋਮਵਾਰ_ਮੰਗਲਵਾਰ_ਬੁਧਵਾਰ_ਵੀਰਵਾਰ_ਸ਼ੁੱਕਰਵਾਰ_ਸ਼ਨੀਚਰਵਾਰ".split("_"),
				weekdaysShort: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),
				weekdaysMin: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),
				longDateFormat: {
					LT: "A h:mm ਵਜੇ",
					LTS: "A h:mm:ss ਵਜੇ",
					L: "DD/MM/YYYY",
					LL: "D MMMM YYYY",
					LLL: "D MMMM YYYY, A h:mm ਵਜੇ",
					LLLL: "dddd, D MMMM YYYY, A h:mm ਵਜੇ"
				},
				calendar: {
					sameDay: "[ਅਜ] LT",
					nextDay: "[ਕਲ] LT",
					nextWeek: "dddd, LT",
					lastDay: "[ਕਲ] LT",
					lastWeek: "[ਪਿਛਲੇ] dddd, LT",
					sameElse: "L"
				},
				relativeTime: {
					future: "%s ਵਿੱਚ",
					past: "%s ਪਿਛਲੇ",
					s: "ਕੁਝ ਸਕਿੰਟ",
					ss: "%d ਸਕਿੰਟ",
					m: "ਇਕ ਮਿੰਟ",
					mm: "%d ਮਿੰਟ",
					h: "ਇੱਕ ਘੰਟਾ",
					hh: "%d ਘੰਟੇ",
					d: "ਇੱਕ ਦਿਨ",
					dd: "%d ਦਿਨ",
					M: "ਇੱਕ ਮਹੀਨਾ",
					MM: "%d ਮਹੀਨੇ",
					y: "ਇੱਕ ਸਾਲ",
					yy: "%d ਸਾਲ"
				},
				preparse: function(e) {
					return e.replace(/[੧੨੩੪੫੬੭੮੯੦]/g, function(e) {
						return n[e]
					})
				},
				postformat: function(e) {
					return e.replace(/\d/g, function(e) {
						return t[e]
					})
				},
				meridiemParse: /ਰਾਤ|ਸਵੇਰ|ਦੁਪਹਿਰ|ਸ਼ਾਮ/,
				meridiemHour: function(e, t) {
					return 12 === e && (e = 0), "ਰਾਤ" === t ? e < 4 ? e : e + 12 : "ਸਵੇਰ" === t ? e : "ਦੁਪਹਿਰ" === t ? e >= 10 ? e : e + 12 : "ਸ਼ਾਮ" === t ? e + 12 : void 0
				},
				meridiem: function(e, t, n) {
					return e < 4 ? "ਰਾਤ" : e < 10 ? "ਸਵੇਰ" : e < 17 ? "ਦੁਪਹਿਰ" : e < 20 ? "ਸ਼ਾਮ" : "ਰਾਤ"
				},
				week: {
					dow: 0,
					doy: 6
				}
			});
		return a
	})
}, function(e, t, n) {
	! function(e, t) {
		t(n(1))
	}(this, function(e) {
		"use strict";

		function t(e) {
			return e % 10 < 5 && e % 10 > 1 && ~~(e / 10) % 10 !== 1
		}

		function n(e, n, a) {
			var s = e + " ";
			switch (a) {
				case "ss":
					return s + (t(e) ? "sekundy" : "sekund");
				case "m":
					return n ? "minuta" : "minutę";
				case "mm":
					return s + (t(e) ? "minuty" : "minut");
				case "h":
					return n ? "godzina" : "godzinę";
				case "hh":
					return s + (t(e) ? "godziny" : "godzin");
				case "MM":
					return s + (t(e) ? "miesiące" : "miesięcy");
				case "yy":
					return s + (t(e) ? "lata" : "lat")
			}
		}
		var a = "styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"),
			s = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_"),
			r = e.defineLocale("pl", {
				months: function(e, t) {
					return e ? "" === t ? "(" + s[e.month()] + "|" + a[e.month()] + ")" : /D MMMM/.test(t) ? s[e.month()] : a[e.month()] : a
				},
				monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),
				weekdays: "niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),
				weekdaysShort: "ndz_pon_wt_śr_czw_pt_sob".split("_"),
				weekdaysMin: "Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"),
				longDateFormat: {
					LT: "HH:mm",
					LTS: "HH:mm:ss",
					L: "DD.MM.YYYY",
					LL: "D MMMM YYYY",
					LLL: "D MMMM YYYY HH:mm",
					LLLL: "dddd, D MMMM YYYY HH:mm"
				},
				calendar: {
					sameDay: "[Dziś o] LT",
					nextDay: "[Jutro o] LT",
					nextWeek: function() {
						switch (this.day()) {
							case 0:
								return "[W niedzielę o] LT";
							case 2:
								return "[We wtorek o] LT";
							case 3:
								return "[W środę o] LT";
							case 6:
								return "[W sobotę o] LT";
							default:
								return "[W] dddd [o] LT"
						}
					},
					lastDay: "[Wczoraj o] LT",
					lastWeek: function() {
						switch (this.day()) {
							case 0:
								return "[W zeszłą niedzielę o] LT";
							case 3:
								return "[W zeszłą środę o] LT";
							case 6:
								return "[W zeszłą sobotę o] LT";
							default:
								return "[W zeszły] dddd [o] LT"
						}
					},
					sameElse: "L"
				},
				relativeTime: {
					future: "za %s",
					past: "%s temu",
					s: "kilka sekund",
					ss: n,
					m: n,
					mm: n,
					h: n,
					hh: n,
					d: "1 dzień",
					dd: "%d dni",
					M: "miesiąc",
					MM: n,
					y: "rok",
					yy: n
				},
				dayOfMonthOrdinalParse: /\d{1,2}\./,
				ordinal: "%d.",
				week: {
					dow: 1,
					doy: 4
				}
			});
		return r
	})
}, function(e, t, n) {
	! function(e, t) {
		t(n(1))
	}(this, function(e) {
		"use strict";
		var t = e.defineLocale("pt-br", {
			months: "janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),
			monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),
			weekdays: "Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split("_"),
			weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),
			weekdaysMin: "Do_2ª_3ª_4ª_5ª_6ª_Sá".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D [de] MMMM [de] YYYY",
				LLL: "D [de] MMMM [de] YYYY [às] HH:mm",
				LLLL: "dddd, D [de] MMMM [de] YYYY [às] HH:mm"
			},
			calendar: {
				sameDay: "[Hoje às] LT",
				nextDay: "[Amanhã às] LT",
				nextWeek: "dddd [às] LT",
				lastDay: "[Ontem às] LT",
				lastWeek: function() {
					return 0 === this.day() || 6 === this.day() ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT"
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "em %s",
				past: "há %s",
				s: "poucos segundos",
				ss: "%d segundos",
				m: "um minuto",
				mm: "%d minutos",
				h: "uma hora",
				hh: "%d horas",
				d: "um dia",
				dd: "%d dias",
				M: "um mês",
				MM: "%d meses",
				y: "um ano",
				yy: "%d anos"
			},
			dayOfMonthOrdinalParse: /\d{1,2}º/,
			ordinal: "%dº"
		});
		return t
	})
}, function(e, t, n) {
	! function(e, t) {
		t(n(1))
	}(this, function(e) {
		"use strict";
		var t = e.defineLocale("pt", {
			months: "janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),
			monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),
			weekdays: "Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split("_"),
			weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),
			weekdaysMin: "Do_2ª_3ª_4ª_5ª_6ª_Sá".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D [de] MMMM [de] YYYY",
				LLL: "D [de] MMMM [de] YYYY HH:mm",
				LLLL: "dddd, D [de] MMMM [de] YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Hoje às] LT",
				nextDay: "[Amanhã às] LT",
				nextWeek: "dddd [às] LT",
				lastDay: "[Ontem às] LT",
				lastWeek: function() {
					return 0 === this.day() || 6 === this.day() ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT"
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "em %s",
				past: "há %s",
				s: "segundos",
				ss: "%d segundos",
				m: "um minuto",
				mm: "%d minutos",
				h: "uma hora",
				hh: "%d horas",
				d: "um dia",
				dd: "%d dias",
				M: "um mês",
				MM: "%d meses",
				y: "um ano",
				yy: "%d anos"
			},
			dayOfMonthOrdinalParse: /\d{1,2}º/,
			ordinal: "%dº",
			week: {
				dow: 1,
				doy: 4
			}
		});
		return t
	})
}, function(e, t, n) {
	! function(e, t) {
		t(n(1))
	}(this, function(e) {
		"use strict";

		function t(e, t, n) {
			var a = {
					ss: "secunde",
					mm: "minute",
					hh: "ore",
					dd: "zile",
					MM: "luni",
					yy: "ani"
				},
				s = " ";
			return (e % 100 >= 20 || e >= 100 && e % 100 === 0) && (s = " de "), e + s + a[n]
		}
		var n = e.defineLocale("ro", {
			months: "ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split("_"),
			monthsShort: "ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split("_"),
			monthsParseExact: !0,
			weekdays: "duminică_luni_marți_miercuri_joi_vineri_sâmbătă".split("_"),
			weekdaysShort: "Dum_Lun_Mar_Mie_Joi_Vin_Sâm".split("_"),
			weekdaysMin: "Du_Lu_Ma_Mi_Jo_Vi_Sâ".split("_"),
			longDateFormat: {
				LT: "H:mm",
				LTS: "H:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY H:mm",
				LLLL: "dddd, D MMMM YYYY H:mm"
			},
			calendar: {
				sameDay: "[azi la] LT",
				nextDay: "[mâine la] LT",
				nextWeek: "dddd [la] LT",
				lastDay: "[ieri la] LT",
				lastWeek: "[fosta] dddd [la] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "peste %s",
				past: "%s în urmă",
				s: "câteva secunde",
				ss: t,
				m: "un minut",
				mm: t,
				h: "o oră",
				hh: t,
				d: "o zi",
				dd: t,
				M: "o lună",
				MM: t,
				y: "un an",
				yy: t
			},
			week: {
				dow: 1,
				doy: 7
			}
		});
		return n
	})
}, function(e, t, n) {
	! function(e, t) {
		t(n(1))
	}(this, function(e) {
		"use strict";

		function t(e, t) {
			var n = e.split("_");
			return t % 10 === 1 && t % 100 !== 11 ? n[0] : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? n[1] : n[2]
		}

		function n(e, n, a) {
			var s = {
				ss: n ? "секунда_секунды_секунд" : "секунду_секунды_секунд",
				mm: n ? "минута_минуты_минут" : "минуту_минуты_минут",
				hh: "час_часа_часов",
				dd: "день_дня_дней",
				MM: "месяц_месяца_месяцев",
				yy: "год_года_лет"
			};
			return "m" === a ? n ? "минута" : "минуту" : e + " " + t(s[a], +e)
		}
		var a = [/^янв/i, /^фев/i, /^мар/i, /^апр/i, /^ма[йя]/i, /^июн/i, /^июл/i, /^авг/i, /^сен/i, /^окт/i, /^ноя/i, /^дек/i],
			s = e.defineLocale("ru", {
				months: {
					format: "января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"),
					standalone: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_")
				},
				monthsShort: {
					format: "янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"),
					standalone: "янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_")
				},
				weekdays: {
					standalone: "воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),
					format: "воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу".split("_"),
					isFormat: /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/
				},
				weekdaysShort: "вс_пн_вт_ср_чт_пт_сб".split("_"),
				weekdaysMin: "вс_пн_вт_ср_чт_пт_сб".split("_"),
				monthsParse: a,
				longMonthsParse: a,
				shortMonthsParse: a,
				monthsRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
				monthsShortRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
				monthsStrictRegex: /^(январ[яь]|феврал[яь]|марта?|апрел[яь]|ма[яй]|июн[яь]|июл[яь]|августа?|сентябр[яь]|октябр[яь]|ноябр[яь]|декабр[яь])/i,
				monthsShortStrictRegex: /^(янв\.|февр?\.|мар[т.]|апр\.|ма[яй]|июн[ья.]|июл[ья.]|авг\.|сент?\.|окт\.|нояб?\.|дек\.)/i,
				longDateFormat: {
					LT: "H:mm",
					LTS: "H:mm:ss",
					L: "DD.MM.YYYY",
					LL: "D MMMM YYYY г.",
					LLL: "D MMMM YYYY г., H:mm",
					LLLL: "dddd, D MMMM YYYY г., H:mm"
				},
				calendar: {
					sameDay: "[Сегодня в] LT",
					nextDay: "[Завтра в] LT",
					lastDay: "[Вчера в] LT",
					nextWeek: function(e) {
						if (e.week() === this.week()) return 2 === this.day() ? "[Во] dddd [в] LT" : "[В] dddd [в] LT";
						switch (this.day()) {
							case 0:
								return "[В следующее] dddd [в] LT";
							case 1:
							case 2:
							case 4:
								return "[В следующий] dddd [в] LT";
							case 3:
							case 5:
							case 6:
								return "[В следующую] dddd [в] LT"
						}
					},
					lastWeek: function(e) {
						if (e.week() === this.week()) return 2 === this.day() ? "[Во] dddd [в] LT" : "[В] dddd [в] LT";
						switch (this.day()) {
							case 0:
								return "[В прошлое] dddd [в] LT";
							case 1:
							case 2:
							case 4:
								return "[В прошлый] dddd [в] LT";
							case 3:
							case 5:
							case 6:
								return "[В прошлую] dddd [в] LT"
						}
					},
					sameElse: "L"
				},
				relativeTime: {
					future: "через %s",
					past: "%s назад",
					s: "несколько секунд",
					ss: n,
					m: n,
					mm: n,
					h: "час",
					hh: n,
					d: "день",
					dd: n,
					M: "месяц",
					MM: n,
					y: "год",
					yy: n
				},
				meridiemParse: /ночи|утра|дня|вечера/i,
				isPM: function(e) {
					return /^(дня|вечера)$/.test(e)
				},
				meridiem: function(e, t, n) {
					return e < 4 ? "ночи" : e < 12 ? "утра" : e < 17 ? "дня" : "вечера"
				},
				dayOfMonthOrdinalParse: /\d{1,2}-(й|го|я)/,
				ordinal: function(e, t) {
					switch (t) {
						case "M":
						case "d":
						case "DDD":
							return e + "-й";
						case "D":
							return e + "-го";
						case "w":
						case "W":
							return e + "-я";
						default:
							return e
					}
				},
				week: {
					dow: 1,
					doy: 4
				}
			});
		return s
	})
}, function(e, t, n) {
	! function(e, t) {
		t(n(1))
	}(this, function(e) {
		"use strict";
		var t = ["جنوري", "فيبروري", "مارچ", "اپريل", "مئي", "جون", "جولاءِ", "آگسٽ", "سيپٽمبر", "آڪٽوبر", "نومبر", "ڊسمبر"],
			n = ["آچر", "سومر", "اڱارو", "اربع", "خميس", "جمع", "ڇنڇر"],
			a = e.defineLocale("sd", {
				months: t,
				monthsShort: t,
				weekdays: n,
				weekdaysShort: n,
				weekdaysMin: n,
				longDateFormat: {
					LT: "HH:mm",
					LTS: "HH:mm:ss",
					L: "DD/MM/YYYY",
					LL: "D MMMM YYYY",
					LLL: "D MMMM YYYY HH:mm",
					LLLL: "dddd، D MMMM YYYY HH:mm"
				},
				meridiemParse: /صبح|شام/,
				isPM: function(e) {
					return "شام" === e
				},
				meridiem: function(e, t, n) {
					return e < 12 ? "صبح" : "شام"
				},
				calendar: {
					sameDay: "[اڄ] LT",
					nextDay: "[سڀاڻي] LT",
					nextWeek: "dddd [اڳين هفتي تي] LT",
					lastDay: "[ڪالهه] LT",
					lastWeek: "[گزريل هفتي] dddd [تي] LT",
					sameElse: "L"
				},
				relativeTime: {
					future: "%s پوء",
					past: "%s اڳ",
					s: "چند سيڪنڊ",
					ss: "%d سيڪنڊ",
					m: "هڪ منٽ",
					mm: "%d منٽ",
					h: "هڪ ڪلاڪ",
					hh: "%d ڪلاڪ",
					d: "هڪ ڏينهن",
					dd: "%d ڏينهن",
					M: "هڪ مهينو",
					MM: "%d مهينا",
					y: "هڪ سال",
					yy: "%d سال"
				},
				preparse: function(e) {
					return e.replace(/،/g, ",")
				},
				postformat: function(e) {
					return e.replace(/,/g, "،")
				},
				week: {
					dow: 1,
					doy: 4
				}
			});
		return a
	})
}, function(e, t, n) {
	! function(e, t) {
		t(n(1))
	}(this, function(e) {
		"use strict";
		var t = e.defineLocale("se", {
			months: "ođđajagemánnu_guovvamánnu_njukčamánnu_cuoŋománnu_miessemánnu_geassemánnu_suoidnemánnu_borgemánnu_čakčamánnu_golggotmánnu_skábmamánnu_juovlamánnu".split("_"),
			monthsShort: "ođđj_guov_njuk_cuo_mies_geas_suoi_borg_čakč_golg_skáb_juov".split("_"),
			weekdays: "sotnabeaivi_vuossárga_maŋŋebárga_gaskavahkku_duorastat_bearjadat_lávvardat".split("_"),
			weekdaysShort: "sotn_vuos_maŋ_gask_duor_bear_láv".split("_"),
			weekdaysMin: "s_v_m_g_d_b_L".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD.MM.YYYY",
				LL: "MMMM D. [b.] YYYY",
				LLL: "MMMM D. [b.] YYYY [ti.] HH:mm",
				LLLL: "dddd, MMMM D. [b.] YYYY [ti.] HH:mm"
			},
			calendar: {
				sameDay: "[otne ti] LT",
				nextDay: "[ihttin ti] LT",
				nextWeek: "dddd [ti] LT",
				lastDay: "[ikte ti] LT",
				lastWeek: "[ovddit] dddd [ti] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s geažes",
				past: "maŋit %s",
				s: "moadde sekunddat",
				ss: "%d sekunddat",
				m: "okta minuhta",
				mm: "%d minuhtat",
				h: "okta diimmu",
				hh: "%d diimmut",
				d: "okta beaivi",
				dd: "%d beaivvit",
				M: "okta mánnu",
				MM: "%d mánut",
				y: "okta jahki",
				yy: "%d jagit"
			},
			dayOfMonthOrdinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		});
		return t
	})
}, function(e, t, n) {
	! function(e, t) {
		t(n(1))
	}(this, function(e) {
		"use strict";
		var t = e.defineLocale("si", {
			months: "ජනවාරි_පෙබරවාරි_මාර්තු_අප්‍රේල්_මැයි_ජූනි_ජූලි_අගෝස්තු_සැප්තැම්බර්_ඔක්තෝබර්_නොවැම්බර්_දෙසැම්බර්".split("_"),
			monthsShort: "ජන_පෙබ_මාර්_අප්_මැයි_ජූනි_ජූලි_අගෝ_සැප්_ඔක්_නොවැ_දෙසැ".split("_"),
			weekdays: "ඉරිදා_සඳුදා_අඟහරුවාදා_බදාදා_බ්‍රහස්පතින්දා_සිකුරාදා_සෙනසුරාදා".split("_"),
			weekdaysShort: "ඉරි_සඳු_අඟ_බදා_බ්‍රහ_සිකු_සෙන".split("_"),
			weekdaysMin: "ඉ_ස_අ_බ_බ්‍ර_සි_සෙ".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "a h:mm",
				LTS: "a h:mm:ss",
				L: "YYYY/MM/DD",
				LL: "YYYY MMMM D",
				LLL: "YYYY MMMM D, a h:mm",
				LLLL: "YYYY MMMM D [වැනි] dddd, a h:mm:ss"
			},
			calendar: {
				sameDay: "[අද] LT[ට]",
				nextDay: "[හෙට] LT[ට]",
				nextWeek: "dddd LT[ට]",
				lastDay: "[ඊයේ] LT[ට]",
				lastWeek: "[පසුගිය] dddd LT[ට]",
				sameElse: "L"
			},
			relativeTime: {
				future: "%sකින්",
				past: "%sකට පෙර",
				s: "තත්පර කිහිපය",
				ss: "තත්පර %d",
				m: "මිනිත්තුව",
				mm: "මිනිත්තු %d",
				h: "පැය",
				hh: "පැය %d",
				d: "දිනය",
				dd: "දින %d",
				M: "මාසය",
				MM: "මාස %d",
				y: "වසර",
				yy: "වසර %d"
			},
			dayOfMonthOrdinalParse: /\d{1,2} වැනි/,
			ordinal: function(e) {
				return e + " වැනි"
			},
			meridiemParse: /පෙර වරු|පස් වරු|පෙ.ව|ප.ව./,
			isPM: function(e) {
				return "ප.ව." === e || "පස් වරු" === e
			},
			meridiem: function(e, t, n) {
				return e > 11 ? n ? "ප.ව." : "පස් වරු" : n ? "පෙ.ව." : "පෙර වරු"
			}
		});
		return t
	})
}, function(e, t, n) {
	! function(e, t) {
		t(n(1))
	}(this, function(e) {
		"use strict";

		function t(e) {
			return e > 1 && e < 5
		}

		function n(e, n, a, s) {
			var r = e + " ";
			switch (a) {
				case "s":
					return n || s ? "pár sekúnd" : "pár sekundami";
				case "ss":
					return n || s ? r + (t(e) ? "sekundy" : "sekúnd") : r + "sekundami";
				case "m":
					return n ? "minúta" : s ? "minútu" : "minútou";
				case "mm":
					return n || s ? r + (t(e) ? "minúty" : "minút") : r + "minútami";
				case "h":
					return n ? "hodina" : s ? "hodinu" : "hodinou";
				case "hh":
					return n || s ? r + (t(e) ? "hodiny" : "hodín") : r + "hodinami";
				case "d":
					return n || s ? "deň" : "dňom";
				case "dd":
					return n || s ? r + (t(e) ? "dni" : "dní") : r + "dňami";
				case "M":
					return n || s ? "mesiac" : "mesiacom";
				case "MM":
					return n || s ? r + (t(e) ? "mesiace" : "mesiacov") : r + "mesiacmi";
				case "y":
					return n || s ? "rok" : "rokom";
				case "yy":
					return n || s ? r + (t(e) ? "roky" : "rokov") : r + "rokmi"
			}
		}
		var a = "január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split("_"),
			s = "jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_"),
			r = e.defineLocale("sk", {
				months: a,
				monthsShort: s,
				weekdays: "nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split("_"),
				weekdaysShort: "ne_po_ut_st_št_pi_so".split("_"),
				weekdaysMin: "ne_po_ut_st_št_pi_so".split("_"),
				longDateFormat: {
					LT: "H:mm",
					LTS: "H:mm:ss",
					L: "DD.MM.YYYY",
					LL: "D. MMMM YYYY",
					LLL: "D. MMMM YYYY H:mm",
					LLLL: "dddd D. MMMM YYYY H:mm"
				},
				calendar: {
					sameDay: "[dnes o] LT",
					nextDay: "[zajtra o] LT",
					nextWeek: function() {
						switch (this.day()) {
							case 0:
								return "[v nedeľu o] LT";
							case 1:
							case 2:
								return "[v] dddd [o] LT";
							case 3:
								return "[v stredu o] LT";
							case 4:
								return "[vo štvrtok o] LT";
							case 5:
								return "[v piatok o] LT";
							case 6:
								return "[v sobotu o] LT"
						}
					},
					lastDay: "[včera o] LT",
					lastWeek: function() {
						switch (this.day()) {
							case 0:
								return "[minulú nedeľu o] LT";
							case 1:
							case 2:
								return "[minulý] dddd [o] LT";
							case 3:
								return "[minulú stredu o] LT";
							case 4:
							case 5:
								return "[minulý] dddd [o] LT";
							case 6:
								return "[minulú sobotu o] LT"
						}
					},
					sameElse: "L"
				},
				relativeTime: {
					future: "za %s",
					past: "pred %s",
					s: n,
					ss: n,
					m: n,
					mm: n,
					h: n,
					hh: n,
					d: n,
					dd: n,
					M: n,
					MM: n,
					y: n,
					yy: n
				},
				dayOfMonthOrdinalParse: /\d{1,2}\./,
				ordinal: "%d.",
				week: {
					dow: 1,
					doy: 4
				}
			});
		return r
	})
}, function(e, t, n) {
	! function(e, t) {
		t(n(1))
	}(this, function(e) {
		"use strict";

		function t(e, t, n, a) {
			var s = e + " ";
			switch (n) {
				case "s":
					return t || a ? "nekaj sekund" : "nekaj sekundami";
				case "ss":
					return s += 1 === e ? t ? "sekundo" : "sekundi" : 2 === e ? t || a ? "sekundi" : "sekundah" : e < 5 ? t || a ? "sekunde" : "sekundah" : "sekund";
				case "m":
					return t ? "ena minuta" : "eno minuto";
				case "mm":
					return s += 1 === e ? t ? "minuta" : "minuto" : 2 === e ? t || a ? "minuti" : "minutama" : e < 5 ? t || a ? "minute" : "minutami" : t || a ? "minut" : "minutami";
				case "h":
					return t ? "ena ura" : "eno uro";
				case "hh":
					return s += 1 === e ? t ? "ura" : "uro" : 2 === e ? t || a ? "uri" : "urama" : e < 5 ? t || a ? "ure" : "urami" : t || a ? "ur" : "urami";
				case "d":
					return t || a ? "en dan" : "enim dnem";
				case "dd":
					return s += 1 === e ? t || a ? "dan" : "dnem" : 2 === e ? t || a ? "dni" : "dnevoma" : t || a ? "dni" : "dnevi";
				case "M":
					return t || a ? "en mesec" : "enim mesecem";
				case "MM":
					return s += 1 === e ? t || a ? "mesec" : "mesecem" : 2 === e ? t || a ? "meseca" : "mesecema" : e < 5 ? t || a ? "mesece" : "meseci" : t || a ? "mesecev" : "meseci";
				case "y":
					return t || a ? "eno leto" : "enim letom";
				case "yy":
					return s += 1 === e ? t || a ? "leto" : "letom" : 2 === e ? t || a ? "leti" : "letoma" : e < 5 ? t || a ? "leta" : "leti" : t || a ? "let" : "leti"
			}
		}
		var n = e.defineLocale("sl", {
			months: "januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),
			monthsShort: "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),
			monthsParseExact: !0,
			weekdays: "nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota".split("_"),
			weekdaysShort: "ned._pon._tor._sre._čet._pet._sob.".split("_"),
			weekdaysMin: "ne_po_to_sr_če_pe_so".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "H:mm",
				LTS: "H:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D. MMMM YYYY",
				LLL: "D. MMMM YYYY H:mm",
				LLLL: "dddd, D. MMMM YYYY H:mm"
			},
			calendar: {
				sameDay: "[danes ob] LT",
				nextDay: "[jutri ob] LT",
				nextWeek: function() {
					switch (this.day()) {
						case 0:
							return "[v] [nedeljo] [ob] LT";
						case 3:
							return "[v] [sredo] [ob] LT";
						case 6:
							return "[v] [soboto] [ob] LT";
						case 1:
						case 2:
						case 4:
						case 5:
							return "[v] dddd [ob] LT"
					}
				},
				lastDay: "[včeraj ob] LT",
				lastWeek: function() {
					switch (this.day()) {
						case 0:
							return "[prejšnjo] [nedeljo] [ob] LT";
						case 3:
							return "[prejšnjo] [sredo] [ob] LT";
						case 6:
							return "[prejšnjo] [soboto] [ob] LT";
						case 1:
						case 2:
						case 4:
						case 5:
							return "[prejšnji] dddd [ob] LT"
					}
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "čez %s",
				past: "pred %s",
				s: t,
				ss: t,
				m: t,
				mm: t,
				h: t,
				hh: t,
				d: t,
				dd: t,
				M: t,
				MM: t,
				y: t,
				yy: t
			},
			dayOfMonthOrdinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 7
			}
		});
		return n
	})
}, function(e, t, n) {
	! function(e, t) {
		t(n(1))
	}(this, function(e) {
		"use strict";
		var t = e.defineLocale("sq", {
			months: "Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor".split("_"),
			monthsShort: "Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj".split("_"),
			weekdays: "E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë".split("_"),
			weekdaysShort: "Die_Hën_Mar_Mër_Enj_Pre_Sht".split("_"),
			weekdaysMin: "D_H_Ma_Më_E_P_Sh".split("_"),
			weekdaysParseExact: !0,
			meridiemParse: /PD|MD/,
			isPM: function(e) {
				return "M" === e.charAt(0)
			},
			meridiem: function(e, t, n) {
				return e < 12 ? "PD" : "MD"
			},
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd, D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Sot në] LT",
				nextDay: "[Nesër në] LT",
				nextWeek: "dddd [në] LT",
				lastDay: "[Dje në] LT",
				lastWeek: "dddd [e kaluar në] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "në %s",
				past: "%s më parë",
				s: "disa sekonda",
				ss: "%d sekonda",
				m: "një minutë",
				mm: "%d minuta",
				h: "një orë",
				hh: "%d orë",
				d: "një ditë",
				dd: "%d ditë",
				M: "një muaj",
				MM: "%d muaj",
				y: "një vit",
				yy: "%d vite"
			},
			dayOfMonthOrdinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		});
		return t
	})
}, function(e, t, n) {
	! function(e, t) {
		t(n(1))
	}(this, function(e) {
		"use strict";
		var t = {
				words: {
					ss: ["секунда", "секунде", "секунди"],
					m: ["један минут", "једне минуте"],
					mm: ["минут", "минуте", "минута"],
					h: ["један сат", "једног сата"],
					hh: ["сат", "сата", "сати"],
					dd: ["дан", "дана", "дана"],
					MM: ["месец", "месеца", "месеци"],
					yy: ["година", "године", "година"]
				},
				correctGrammaticalCase: function(e, t) {
					return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2]
				},
				translate: function(e, n, a) {
					var s = t.words[a];
					return 1 === a.length ? n ? s[0] : s[1] : e + " " + t.correctGrammaticalCase(e, s)
				}
			},
			n = e.defineLocale("sr-cyrl", {
				months: "јануар_фебруар_март_април_мај_јун_јул_август_септембар_октобар_новембар_децембар".split("_"),
				monthsShort: "јан._феб._мар._апр._мај_јун_јул_авг._сеп._окт._нов._дец.".split("_"),
				monthsParseExact: !0,
				weekdays: "недеља_понедељак_уторак_среда_четвртак_петак_субота".split("_"),
				weekdaysShort: "нед._пон._уто._сре._чет._пет._суб.".split("_"),
				weekdaysMin: "не_по_ут_ср_че_пе_су".split("_"),
				weekdaysParseExact: !0,
				longDateFormat: {
					LT: "H:mm",
					LTS: "H:mm:ss",
					L: "DD.MM.YYYY",
					LL: "D. MMMM YYYY",
					LLL: "D. MMMM YYYY H:mm",
					LLLL: "dddd, D. MMMM YYYY H:mm"
				},
				calendar: {
					sameDay: "[данас у] LT",
					nextDay: "[сутра у] LT",
					nextWeek: function() {
						switch (this.day()) {
							case 0:
								return "[у] [недељу] [у] LT";
							case 3:
								return "[у] [среду] [у] LT";
							case 6:
								return "[у] [суботу] [у] LT";
							case 1:
							case 2:
							case 4:
							case 5:
								return "[у] dddd [у] LT"
						}
					},
					lastDay: "[јуче у] LT",
					lastWeek: function() {
						var e = ["[прошле] [недеље] [у] LT", "[прошлог] [понедељка] [у] LT", "[прошлог] [уторка] [у] LT", "[прошле] [среде] [у] LT", "[прошлог] [четвртка] [у] LT", "[прошлог] [петка] [у] LT", "[прошле] [суботе] [у] LT"];
						return e[this.day()]
					},
					sameElse: "L"
				},
				relativeTime: {
					future: "за %s",
					past: "пре %s",
					s: "неколико секунди",
					ss: t.translate,
					m: t.translate,
					mm: t.translate,
					h: t.translate,
					hh: t.translate,
					d: "дан",
					dd: t.translate,
					M: "месец",
					MM: t.translate,
					y: "годину",
					yy: t.translate
				},
				dayOfMonthOrdinalParse: /\d{1,2}\./,
				ordinal: "%d.",
				week: {
					dow: 1,
					doy: 7
				}
			});
		return n
	})
}, function(e, t, n) {
	! function(e, t) {
		t(n(1))
	}(this, function(e) {
		"use strict";
		var t = {
				words: {
					ss: ["sekunda", "sekunde", "sekundi"],
					m: ["jedan minut", "jedne minute"],
					mm: ["minut", "minute", "minuta"],
					h: ["jedan sat", "jednog sata"],
					hh: ["sat", "sata", "sati"],
					dd: ["dan", "dana", "dana"],
					MM: ["mesec", "meseca", "meseci"],
					yy: ["godina", "godine", "godina"]
				},
				correctGrammaticalCase: function(e, t) {
					return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2]
				},
				translate: function(e, n, a) {
					var s = t.words[a];
					return 1 === a.length ? n ? s[0] : s[1] : e + " " + t.correctGrammaticalCase(e, s)
				}
			},
			n = e.defineLocale("sr", {
				months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),
				monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),
				monthsParseExact: !0,
				weekdays: "nedelja_ponedeljak_utorak_sreda_četvrtak_petak_subota".split("_"),
				weekdaysShort: "ned._pon._uto._sre._čet._pet._sub.".split("_"),
				weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
				weekdaysParseExact: !0,
				longDateFormat: {
					LT: "H:mm",
					LTS: "H:mm:ss",
					L: "DD.MM.YYYY",
					LL: "D. MMMM YYYY",
					LLL: "D. MMMM YYYY H:mm",
					LLLL: "dddd, D. MMMM YYYY H:mm"
				},
				calendar: {
					sameDay: "[danas u] LT",
					nextDay: "[sutra u] LT",
					nextWeek: function() {
						switch (this.day()) {
							case 0:
								return "[u] [nedelju] [u] LT";
							case 3:
								return "[u] [sredu] [u] LT";
							case 6:
								return "[u] [subotu] [u] LT";
							case 1:
							case 2:
							case 4:
							case 5:
								return "[u] dddd [u] LT"
						}
					},
					lastDay: "[juče u] LT",
					lastWeek: function() {
						var e = ["[prošle] [nedelje] [u] LT", "[prošlog] [ponedeljka] [u] LT", "[prošlog] [utorka] [u] LT", "[prošle] [srede] [u] LT", "[prošlog] [četvrtka] [u] LT", "[prošlog] [petka] [u] LT", "[prošle] [subote] [u] LT"];
						return e[this.day()]
					},
					sameElse: "L"
				},
				relativeTime: {
					future: "za %s",
					past: "pre %s",
					s: "nekoliko sekundi",
					ss: t.translate,
					m: t.translate,
					mm: t.translate,
					h: t.translate,
					hh: t.translate,
					d: "dan",
					dd: t.translate,
					M: "mesec",
					MM: t.translate,
					y: "godinu",
					yy: t.translate
				},
				dayOfMonthOrdinalParse: /\d{1,2}\./,
				ordinal: "%d.",
				week: {
					dow: 1,
					doy: 7
				}
			});
		return n
	})
}, function(e, t, n) {
	! function(e, t) {
		t(n(1))
	}(this, function(e) {
		"use strict";
		var t = e.defineLocale("ss", {
			months: "Bhimbidvwane_Indlovana_Indlov'lenkhulu_Mabasa_Inkhwekhweti_Inhlaba_Kholwane_Ingci_Inyoni_Imphala_Lweti_Ingongoni".split("_"),
			monthsShort: "Bhi_Ina_Inu_Mab_Ink_Inh_Kho_Igc_Iny_Imp_Lwe_Igo".split("_"),
			weekdays: "Lisontfo_Umsombuluko_Lesibili_Lesitsatfu_Lesine_Lesihlanu_Umgcibelo".split("_"),
			weekdaysShort: "Lis_Umb_Lsb_Les_Lsi_Lsh_Umg".split("_"),
			weekdaysMin: "Li_Us_Lb_Lt_Ls_Lh_Ug".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "h:mm A",
				LTS: "h:mm:ss A",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY h:mm A",
				LLLL: "dddd, D MMMM YYYY h:mm A"
			},
			calendar: {
				sameDay: "[Namuhla nga] LT",
				nextDay: "[Kusasa nga] LT",
				nextWeek: "dddd [nga] LT",
				lastDay: "[Itolo nga] LT",
				lastWeek: "dddd [leliphelile] [nga] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "nga %s",
				past: "wenteka nga %s",
				s: "emizuzwana lomcane",
				ss: "%d mzuzwana",
				m: "umzuzu",
				mm: "%d emizuzu",
				h: "lihora",
				hh: "%d emahora",
				d: "lilanga",
				dd: "%d emalanga",
				M: "inyanga",
				MM: "%d tinyanga",
				y: "umnyaka",
				yy: "%d iminyaka"
			},
			meridiemParse: /ekuseni|emini|entsambama|ebusuku/,
			meridiem: function(e, t, n) {
				return e < 11 ? "ekuseni" : e < 15 ? "emini" : e < 19 ? "entsambama" : "ebusuku"
			},
			meridiemHour: function(e, t) {
				return 12 === e && (e = 0), "ekuseni" === t ? e : "emini" === t ? e >= 11 ? e : e + 12 : "entsambama" === t || "ebusuku" === t ? 0 === e ? 0 : e + 12 : void 0
			},
			dayOfMonthOrdinalParse: /\d{1,2}/,
			ordinal: "%d",
			week: {
				dow: 1,
				doy: 4
			}
		});
		return t
	})
}, function(e, t, n) {
	! function(e, t) {
		t(n(1))
	}(this, function(e) {
		"use strict";
		var t = e.defineLocale("sv", {
			months: "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),
			monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
			weekdays: "söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag".split("_"),
			weekdaysShort: "sön_mån_tis_ons_tor_fre_lör".split("_"),
			weekdaysMin: "sö_må_ti_on_to_fr_lö".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "YYYY-MM-DD",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY [kl.] HH:mm",
				LLLL: "dddd D MMMM YYYY [kl.] HH:mm",
				lll: "D MMM YYYY HH:mm",
				llll: "ddd D MMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Idag] LT",
				nextDay: "[Imorgon] LT",
				lastDay: "[Igår] LT",
				nextWeek: "[På] dddd LT",
				lastWeek: "[I] dddd[s] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "om %s",
				past: "för %s sedan",
				s: "några sekunder",
				ss: "%d sekunder",
				m: "en minut",
				mm: "%d minuter",
				h: "en timme",
				hh: "%d timmar",
				d: "en dag",
				dd: "%d dagar",
				M: "en månad",
				MM: "%d månader",
				y: "ett år",
				yy: "%d år"
			},
			dayOfMonthOrdinalParse: /\d{1,2}(e|a)/,
			ordinal: function(e) {
				var t = e % 10,
					n = 1 === ~~(e % 100 / 10) ? "e" : 1 === t ? "a" : 2 === t ? "a" : "e";
				return e + n
			},
			week: {
				dow: 1,
				doy: 4
			}
		});
		return t
	})
}, function(e, t, n) {
	! function(e, t) {
		t(n(1))
	}(this, function(e) {
		"use strict";
		var t = e.defineLocale("sw", {
			months: "Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba".split("_"),
			monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des".split("_"),
			weekdays: "Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi".split("_"),
			weekdaysShort: "Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos".split("_"),
			weekdaysMin: "J2_J3_J4_J5_Al_Ij_J1".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd, D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[leo saa] LT",
				nextDay: "[kesho saa] LT",
				nextWeek: "[wiki ijayo] dddd [saat] LT",
				lastDay: "[jana] LT",
				lastWeek: "[wiki iliyopita] dddd [saat] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s baadaye",
				past: "tokea %s",
				s: "hivi punde",
				ss: "sekunde %d",
				m: "dakika moja",
				mm: "dakika %d",
				h: "saa limoja",
				hh: "masaa %d",
				d: "siku moja",
				dd: "masiku %d",
				M: "mwezi mmoja",
				MM: "miezi %d",
				y: "mwaka mmoja",
				yy: "miaka %d"
			},
			week: {
				dow: 1,
				doy: 7
			}
		});
		return t
	})
}, function(e, t, n) {
	! function(e, t) {
		t(n(1))
	}(this, function(e) {
		"use strict";
		var t = {
				1: "௧",
				2: "௨",
				3: "௩",
				4: "௪",
				5: "௫",
				6: "௬",
				7: "௭",
				8: "௮",
				9: "௯",
				0: "௦"
			},
			n = {
				"௧": "1",
				"௨": "2",
				"௩": "3",
				"௪": "4",
				"௫": "5",
				"௬": "6",
				"௭": "7",
				"௮": "8",
				"௯": "9",
				"௦": "0"
			},
			a = e.defineLocale("ta", {
				months: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),
				monthsShort: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),
				weekdays: "ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை".split("_"),
				weekdaysShort: "ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி".split("_"),
				weekdaysMin: "ஞா_தி_செ_பு_வி_வெ_ச".split("_"),
				longDateFormat: {
					LT: "HH:mm",
					LTS: "HH:mm:ss",
					L: "DD/MM/YYYY",
					LL: "D MMMM YYYY",
					LLL: "D MMMM YYYY, HH:mm",
					LLLL: "dddd, D MMMM YYYY, HH:mm"
				},
				calendar: {
					sameDay: "[இன்று] LT",
					nextDay: "[நாளை] LT",
					nextWeek: "dddd, LT",
					lastDay: "[நேற்று] LT",
					lastWeek: "[கடந்த வாரம்] dddd, LT",
					sameElse: "L"
				},
				relativeTime: {
					future: "%s இல்",
					past: "%s முன்",
					s: "ஒரு சில விநாடிகள்",
					ss: "%d விநாடிகள்",
					m: "ஒரு நிமிடம்",
					mm: "%d நிமிடங்கள்",
					h: "ஒரு மணி நேரம்",
					hh: "%d மணி நேரம்",
					d: "ஒரு நாள்",
					dd: "%d நாட்கள்",
					M: "ஒரு மாதம்",
					MM: "%d மாதங்கள்",
					y: "ஒரு வருடம்",
					yy: "%d ஆண்டுகள்"
				},
				dayOfMonthOrdinalParse: /\d{1,2}வது/,
				ordinal: function(e) {
					return e + "வது"
				},
				preparse: function(e) {
					return e.replace(/[௧௨௩௪௫௬௭௮௯௦]/g, function(e) {
						return n[e]
					})
				},
				postformat: function(e) {
					return e.replace(/\d/g, function(e) {
						return t[e]
					})
				},
				meridiemParse: /யாமம்|வைகறை|காலை|நண்பகல்|எற்பாடு|மாலை/,
				meridiem: function(e, t, n) {
					return e < 2 ? " யாமம்" : e < 6 ? " வைகறை" : e < 10 ? " காலை" : e < 14 ? " நண்பகல்" : e < 18 ? " எற்பாடு" : e < 22 ? " மாலை" : " யாமம்"
				},
				meridiemHour: function(e, t) {
					return 12 === e && (e = 0), "யாமம்" === t ? e < 2 ? e : e + 12 : "வைகறை" === t || "காலை" === t ? e : "நண்பகல்" === t && e >= 10 ? e : e + 12
				},
				week: {
					dow: 0,
					doy: 6
				}
			});
		return a
	})
}, function(e, t, n) {
	! function(e, t) {
		t(n(1))
	}(this, function(e) {
		"use strict";
		var t = e.defineLocale("te", {
			months: "జనవరి_ఫిబ్రవరి_మార్చి_ఏప్రిల్_మే_జూన్_జూలై_ఆగస్టు_సెప్టెంబర్_అక్టోబర్_నవంబర్_డిసెంబర్".split("_"),
			monthsShort: "జన._ఫిబ్ర._మార్చి_ఏప్రి._మే_జూన్_జూలై_ఆగ._సెప్._అక్టో._నవ._డిసె.".split("_"),
			monthsParseExact: !0,
			weekdays: "ఆదివారం_సోమవారం_మంగళవారం_బుధవారం_గురువారం_శుక్రవారం_శనివారం".split("_"),
			weekdaysShort: "ఆది_సోమ_మంగళ_బుధ_గురు_శుక్ర_శని".split("_"),
			weekdaysMin: "ఆ_సో_మం_బు_గు_శు_శ".split("_"),
			longDateFormat: {
				LT: "A h:mm",
				LTS: "A h:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY, A h:mm",
				LLLL: "dddd, D MMMM YYYY, A h:mm"
			},
			calendar: {
				sameDay: "[నేడు] LT",
				nextDay: "[రేపు] LT",
				nextWeek: "dddd, LT",
				lastDay: "[నిన్న] LT",
				lastWeek: "[గత] dddd, LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s లో",
				past: "%s క్రితం",
				s: "కొన్ని క్షణాలు",
				ss: "%d సెకన్లు",
				m: "ఒక నిమిషం",
				mm: "%d నిమిషాలు",
				h: "ఒక గంట",
				hh: "%d గంటలు",
				d: "ఒక రోజు",
				dd: "%d రోజులు",
				M: "ఒక నెల",
				MM: "%d నెలలు",
				y: "ఒక సంవత్సరం",
				yy: "%d సంవత్సరాలు"
			},
			dayOfMonthOrdinalParse: /\d{1,2}వ/,
			ordinal: "%dవ",
			meridiemParse: /రాత్రి|ఉదయం|మధ్యాహ్నం|సాయంత్రం/,
			meridiemHour: function(e, t) {
				return 12 === e && (e = 0), "రాత్రి" === t ? e < 4 ? e : e + 12 : "ఉదయం" === t ? e : "మధ్యాహ్నం" === t ? e >= 10 ? e : e + 12 : "సాయంత్రం" === t ? e + 12 : void 0
			},
			meridiem: function(e, t, n) {
				return e < 4 ? "రాత్రి" : e < 10 ? "ఉదయం" : e < 17 ? "మధ్యాహ్నం" : e < 20 ? "సాయంత్రం" : "రాత్రి"
			},
			week: {
				dow: 0,
				doy: 6
			}
		});
		return t
	})
}, function(e, t, n) {
	! function(e, t) {
		t(n(1))
	}(this, function(e) {
		"use strict";
		var t = e.defineLocale("tet", {
			months: "Janeiru_Fevereiru_Marsu_Abril_Maiu_Juñu_Jullu_Agustu_Setembru_Outubru_Novembru_Dezembru".split("_"),
			monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
			weekdays: "Domingu_Segunda_Tersa_Kuarta_Kinta_Sesta_Sabadu".split("_"),
			weekdaysShort: "Dom_Seg_Ters_Kua_Kint_Sest_Sab".split("_"),
			weekdaysMin: "Do_Seg_Te_Ku_Ki_Ses_Sa".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd, D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Ohin iha] LT",
				nextDay: "[Aban iha] LT",
				nextWeek: "dddd [iha] LT",
				lastDay: "[Horiseik iha] LT",
				lastWeek: "dddd [semana kotuk] [iha] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "iha %s",
				past: "%s liuba",
				s: "minutu balun",
				ss: "minutu %d",
				m: "minutu ida",
				mm: "minutu %d",
				h: "oras ida",
				hh: "oras %d",
				d: "loron ida",
				dd: "loron %d",
				M: "fulan ida",
				MM: "fulan %d",
				y: "tinan ida",
				yy: "tinan %d"
			},
			dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
			ordinal: function(e) {
				var t = e % 10,
					n = 1 === ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
				return e + n
			},
			week: {
				dow: 1,
				doy: 4
			}
		});
		return t
	})
}, function(e, t, n) {
	! function(e, t) {
		t(n(1))
	}(this, function(e) {
		"use strict";
		var t = {
				0: "-ум",
				1: "-ум",
				2: "-юм",
				3: "-юм",
				4: "-ум",
				5: "-ум",
				6: "-ум",
				7: "-ум",
				8: "-ум",
				9: "-ум",
				10: "-ум",
				12: "-ум",
				13: "-ум",
				20: "-ум",
				30: "-юм",
				40: "-ум",
				50: "-ум",
				60: "-ум",
				70: "-ум",
				80: "-ум",
				90: "-ум",
				100: "-ум"
			},
			n = e.defineLocale("tg", {
				months: "январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split("_"),
				monthsShort: "янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"),
				weekdays: "якшанбе_душанбе_сешанбе_чоршанбе_панҷшанбе_ҷумъа_шанбе".split("_"),
				weekdaysShort: "яшб_дшб_сшб_чшб_пшб_ҷум_шнб".split("_"),
				weekdaysMin: "яш_дш_сш_чш_пш_ҷм_шб".split("_"),
				longDateFormat: {
					LT: "HH:mm",
					LTS: "HH:mm:ss",
					L: "DD/MM/YYYY",
					LL: "D MMMM YYYY",
					LLL: "D MMMM YYYY HH:mm",
					LLLL: "dddd, D MMMM YYYY HH:mm"
				},
				calendar: {
					sameDay: "[Имрӯз соати] LT",
					nextDay: "[Пагоҳ соати] LT",
					lastDay: "[Дирӯз соати] LT",
					nextWeek: "dddd[и] [ҳафтаи оянда соати] LT",
					lastWeek: "dddd[и] [ҳафтаи гузашта соати] LT",
					sameElse: "L"
				},
				relativeTime: {
					future: "баъди %s",
					past: "%s пеш",
					s: "якчанд сония",
					m: "як дақиқа",
					mm: "%d дақиқа",
					h: "як соат",
					hh: "%d соат",
					d: "як рӯз",
					dd: "%d рӯз",
					M: "як моҳ",
					MM: "%d моҳ",
					y: "як сол",
					yy: "%d сол"
				},
				meridiemParse: /шаб|субҳ|рӯз|бегоҳ/,
				meridiemHour: function(e, t) {
					return 12 === e && (e = 0), "шаб" === t ? e < 4 ? e : e + 12 : "субҳ" === t ? e : "рӯз" === t ? e >= 11 ? e : e + 12 : "бегоҳ" === t ? e + 12 : void 0
				},
				meridiem: function(e, t, n) {
					return e < 4 ? "шаб" : e < 11 ? "субҳ" : e < 16 ? "рӯз" : e < 19 ? "бегоҳ" : "шаб"
				},
				dayOfMonthOrdinalParse: /\d{1,2}-(ум|юм)/,
				ordinal: function(e) {
					var n = e % 10,
						a = e >= 100 ? 100 : null;
					return e + (t[e] || t[n] || t[a])
				},
				week: {
					dow: 1,
					doy: 7
				}
			});
		return n
	})
}, function(e, t, n) {
	! function(e, t) {
		t(n(1))
	}(this, function(e) {
		"use strict";
		var t = e.defineLocale("th", {
			months: "มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม".split("_"),
			monthsShort: "ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.".split("_"),
			monthsParseExact: !0,
			weekdays: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์".split("_"),
			weekdaysShort: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์".split("_"),
			weekdaysMin: "อา._จ._อ._พ._พฤ._ศ._ส.".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "H:mm",
				LTS: "H:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY เวลา H:mm",
				LLLL: "วันddddที่ D MMMM YYYY เวลา H:mm"
			},
			meridiemParse: /ก่อนเที่ยง|หลังเที่ยง/,
			isPM: function(e) {
				return "หลังเที่ยง" === e
			},
			meridiem: function(e, t, n) {
				return e < 12 ? "ก่อนเที่ยง" : "หลังเที่ยง"
			},
			calendar: {
				sameDay: "[วันนี้ เวลา] LT",
				nextDay: "[พรุ่งนี้ เวลา] LT",
				nextWeek: "dddd[หน้า เวลา] LT",
				lastDay: "[เมื่อวานนี้ เวลา] LT",
				lastWeek: "[วัน]dddd[ที่แล้ว เวลา] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "อีก %s",
				past: "%sที่แล้ว",
				s: "ไม่กี่วินาที",
				ss: "%d วินาที",
				m: "1 นาที",
				mm: "%d นาที",
				h: "1 ชั่วโมง",
				hh: "%d ชั่วโมง",
				d: "1 วัน",
				dd: "%d วัน",
				M: "1 เดือน",
				MM: "%d เดือน",
				y: "1 ปี",
				yy: "%d ปี"
			}
		});
		return t
	})
}, function(e, t, n) {
	! function(e, t) {
		t(n(1))
	}(this, function(e) {
		"use strict";
		var t = e.defineLocale("tl-ph", {
			months: "Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"),
			monthsShort: "Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"),
			weekdays: "Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"),
			weekdaysShort: "Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"),
			weekdaysMin: "Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "MM/D/YYYY",
				LL: "MMMM D, YYYY",
				LLL: "MMMM D, YYYY HH:mm",
				LLLL: "dddd, MMMM DD, YYYY HH:mm"
			},
			calendar: {
				sameDay: "LT [ngayong araw]",
				nextDay: "[Bukas ng] LT",
				nextWeek: "LT [sa susunod na] dddd",
				lastDay: "LT [kahapon]",
				lastWeek: "LT [noong nakaraang] dddd",
				sameElse: "L"
			},
			relativeTime: {
				future: "sa loob ng %s",
				past: "%s ang nakalipas",
				s: "ilang segundo",
				ss: "%d segundo",
				m: "isang minuto",
				mm: "%d minuto",
				h: "isang oras",
				hh: "%d oras",
				d: "isang araw",
				dd: "%d araw",
				M: "isang buwan",
				MM: "%d buwan",
				y: "isang taon",
				yy: "%d taon"
			},
			dayOfMonthOrdinalParse: /\d{1,2}/,
			ordinal: function(e) {
				return e
			},
			week: {
				dow: 1,
				doy: 4
			}
		});
		return t
	})
}, function(e, t, n) {
	! function(e, t) {
		t(n(1))
	}(this, function(e) {
		"use strict";

		function t(e) {
			var t = e;
			return t = e.indexOf("jaj") !== -1 ? t.slice(0, -3) + "leS" : e.indexOf("jar") !== -1 ? t.slice(0, -3) + "waQ" : e.indexOf("DIS") !== -1 ? t.slice(0, -3) + "nem" : t + " pIq"
		}

		function n(e) {
			var t = e;
			return t = e.indexOf("jaj") !== -1 ? t.slice(0, -3) + "Hu’" : e.indexOf("jar") !== -1 ? t.slice(0, -3) + "wen" : e.indexOf("DIS") !== -1 ? t.slice(0, -3) + "ben" : t + " ret"
		}

		function a(e, t, n, a) {
			var r = s(e);
			switch (n) {
				case "ss":
					return r + " lup";
				case "mm":
					return r + " tup";
				case "hh":
					return r + " rep";
				case "dd":
					return r + " jaj";
				case "MM":
					return r + " jar";
				case "yy":
					return r + " DIS"
			}
		}

		function s(e) {
			var t = Math.floor(e % 1e3 / 100),
				n = Math.floor(e % 100 / 10),
				a = e % 10,
				s = "";
			return t > 0 && (s += r[t] + "vatlh"), n > 0 && (s += ("" !== s ? " " : "") + r[n] + "maH"), a > 0 && (s += ("" !== s ? " " : "") + r[a]), "" === s ? "pagh" : s
		}
		var r = "pagh_wa’_cha’_wej_loS_vagh_jav_Soch_chorgh_Hut".split("_"),
			i = e.defineLocale("tlh", {
				months: "tera’ jar wa’_tera’ jar cha’_tera’ jar wej_tera’ jar loS_tera’ jar vagh_tera’ jar jav_tera’ jar Soch_tera’ jar chorgh_tera’ jar Hut_tera’ jar wa’maH_tera’ jar wa’maH wa’_tera’ jar wa’maH cha’".split("_"),
				monthsShort: "jar wa’_jar cha’_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa’maH_jar wa’maH wa’_jar wa’maH cha’".split("_"),
				monthsParseExact: !0,
				weekdays: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
				weekdaysShort: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
				weekdaysMin: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
				longDateFormat: {
					LT: "HH:mm",
					LTS: "HH:mm:ss",
					L: "DD.MM.YYYY",
					LL: "D MMMM YYYY",
					LLL: "D MMMM YYYY HH:mm",
					LLLL: "dddd, D MMMM YYYY HH:mm"
				},
				calendar: {
					sameDay: "[DaHjaj] LT",
					nextDay: "[wa’leS] LT",
					nextWeek: "LLL",
					lastDay: "[wa’Hu’] LT",
					lastWeek: "LLL",
					sameElse: "L"
				},
				relativeTime: {
					future: t,
					past: n,
					s: "puS lup",
					ss: a,
					m: "wa’ tup",
					mm: a,
					h: "wa’ rep",
					hh: a,
					d: "wa’ jaj",
					dd: a,
					M: "wa’ jar",
					MM: a,
					y: "wa’ DIS",
					yy: a
				},
				dayOfMonthOrdinalParse: /\d{1,2}\./,
				ordinal: "%d.",
				week: {
					dow: 1,
					doy: 4
				}
			});
		return i
	})
}, function(e, t, n) {
	! function(e, t) {
		t(n(1))
	}(this, function(e) {
		"use strict";
		var t = {
				1: "'inci",
				5: "'inci",
				8: "'inci",
				70: "'inci",
				80: "'inci",
				2: "'nci",
				7: "'nci",
				20: "'nci",
				50: "'nci",
				3: "'üncü",
				4: "'üncü",
				100: "'üncü",
				6: "'ncı",
				9: "'uncu",
				10: "'uncu",
				30: "'uncu",
				60: "'ıncı",
				90: "'ıncı"
			},
			n = e.defineLocale("tr", {
				months: "Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık".split("_"),
				monthsShort: "Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara".split("_"),
				weekdays: "Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi".split("_"),
				weekdaysShort: "Paz_Pts_Sal_Çar_Per_Cum_Cts".split("_"),
				weekdaysMin: "Pz_Pt_Sa_Ça_Pe_Cu_Ct".split("_"),
				longDateFormat: {
					LT: "HH:mm",
					LTS: "HH:mm:ss",
					L: "DD.MM.YYYY",
					LL: "D MMMM YYYY",
					LLL: "D MMMM YYYY HH:mm",
					LLLL: "dddd, D MMMM YYYY HH:mm"
				},
				calendar: {
					sameDay: "[bugün saat] LT",
					nextDay: "[yarın saat] LT",
					nextWeek: "[gelecek] dddd [saat] LT",
					lastDay: "[dün] LT",
					lastWeek: "[geçen] dddd [saat] LT",
					sameElse: "L"
				},
				relativeTime: {
					future: "%s sonra",
					past: "%s önce",
					s: "birkaç saniye",
					ss: "%d saniye",
					m: "bir dakika",
					mm: "%d dakika",
					h: "bir saat",
					hh: "%d saat",
					d: "bir gün",
					dd: "%d gün",
					M: "bir ay",
					MM: "%d ay",
					y: "bir yıl",
					yy: "%d yıl"
				},
				ordinal: function(e, n) {
					switch (n) {
						case "d":
						case "D":
						case "Do":
						case "DD":
							return e;
						default:
							if (0 === e) return e + "'ıncı";
							var a = e % 10,
								s = e % 100 - a,
								r = e >= 100 ? 100 : null;
							return e + (t[a] || t[s] || t[r])
					}
				},
				week: {
					dow: 1,
					doy: 7
				}
			});
		return n
	})
}, function(e, t, n) {
	! function(e, t) {
		t(n(1))
	}(this, function(e) {
		"use strict";

		function t(e, t, n, a) {
			var s = {
				s: ["viensas secunds", "'iensas secunds"],
				ss: [e + " secunds", "" + e + " secunds"],
				m: ["'n míut", "'iens míut"],
				mm: [e + " míuts", "" + e + " míuts"],
				h: ["'n þora", "'iensa þora"],
				hh: [e + " þoras", "" + e + " þoras"],
				d: ["'n ziua", "'iensa ziua"],
				dd: [e + " ziuas", "" + e + " ziuas"],
				M: ["'n mes", "'iens mes"],
				MM: [e + " mesen", "" + e + " mesen"],
				y: ["'n ar", "'iens ar"],
				yy: [e + " ars", "" + e + " ars"]
			};
			return a ? s[n][0] : t ? s[n][0] : s[n][1]
		}
		var n = e.defineLocale("tzl", {
			months: "Januar_Fevraglh_Març_Avrïu_Mai_Gün_Julia_Guscht_Setemvar_Listopäts_Noemvar_Zecemvar".split("_"),
			monthsShort: "Jan_Fev_Mar_Avr_Mai_Gün_Jul_Gus_Set_Lis_Noe_Zec".split("_"),
			weekdays: "Súladi_Lúneçi_Maitzi_Márcuri_Xhúadi_Viénerçi_Sáturi".split("_"),
			weekdaysShort: "Súl_Lún_Mai_Már_Xhú_Vié_Sát".split("_"),
			weekdaysMin: "Sú_Lú_Ma_Má_Xh_Vi_Sá".split("_"),
			longDateFormat: {
				LT: "HH.mm",
				LTS: "HH.mm.ss",
				L: "DD.MM.YYYY",
				LL: "D. MMMM [dallas] YYYY",
				LLL: "D. MMMM [dallas] YYYY HH.mm",
				LLLL: "dddd, [li] D. MMMM [dallas] YYYY HH.mm"
			},
			meridiemParse: /d\'o|d\'a/i,
			isPM: function(e) {
				return "d'o" === e.toLowerCase()
			},
			meridiem: function(e, t, n) {
				return e > 11 ? n ? "d'o" : "D'O" : n ? "d'a" : "D'A"
			},
			calendar: {
				sameDay: "[oxhi à] LT",
				nextDay: "[demà à] LT",
				nextWeek: "dddd [à] LT",
				lastDay: "[ieiri à] LT",
				lastWeek: "[sür el] dddd [lasteu à] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "osprei %s",
				past: "ja%s",
				s: t,
				ss: t,
				m: t,
				mm: t,
				h: t,
				hh: t,
				d: t,
				dd: t,
				M: t,
				MM: t,
				y: t,
				yy: t
			},
			dayOfMonthOrdinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		});
		return n
	})
}, function(e, t, n) {
	! function(e, t) {
		t(n(1))
	}(this, function(e) {
		"use strict";
		var t = e.defineLocale("tzm-latn", {
			months: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),
			monthsShort: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),
			weekdays: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
			weekdaysShort: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
			weekdaysMin: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[asdkh g] LT",
				nextDay: "[aska g] LT",
				nextWeek: "dddd [g] LT",
				lastDay: "[assant g] LT",
				lastWeek: "dddd [g] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "dadkh s yan %s",
				past: "yan %s",
				s: "imik",
				ss: "%d imik",
				m: "minuḍ",
				mm: "%d minuḍ",
				h: "saɛa",
				hh: "%d tassaɛin",
				d: "ass",
				dd: "%d ossan",
				M: "ayowr",
				MM: "%d iyyirn",
				y: "asgas",
				yy: "%d isgasn"
			},
			week: {
				dow: 6,
				doy: 12
			}
		});
		return t
	})
}, function(e, t, n) {
	! function(e, t) {
		t(n(1))
	}(this, function(e) {
		"use strict";
		var t = e.defineLocale("tzm", {
			months: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),
			monthsShort: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),
			weekdays: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
			weekdaysShort: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
			weekdaysMin: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[ⴰⵙⴷⵅ ⴴ] LT",
				nextDay: "[ⴰⵙⴽⴰ ⴴ] LT",
				nextWeek: "dddd [ⴴ] LT",
				lastDay: "[ⴰⵚⴰⵏⵜ ⴴ] LT",
				lastWeek: "dddd [ⴴ] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s",
				past: "ⵢⴰⵏ %s",
				s: "ⵉⵎⵉⴽ",
				ss: "%d ⵉⵎⵉⴽ",
				m: "ⵎⵉⵏⵓⴺ",
				mm: "%d ⵎⵉⵏⵓⴺ",
				h: "ⵙⴰⵄⴰ",
				hh: "%d ⵜⴰⵙⵙⴰⵄⵉⵏ",
				d: "ⴰⵙⵙ",
				dd: "%d oⵙⵙⴰⵏ",
				M: "ⴰⵢoⵓⵔ",
				MM: "%d ⵉⵢⵢⵉⵔⵏ",
				y: "ⴰⵙⴳⴰⵙ",
				yy: "%d ⵉⵙⴳⴰⵙⵏ"
			},
			week: {
				dow: 6,
				doy: 12
			}
		});
		return t
	})
}, function(e, t, n) {
	! function(e, t) {
		t(n(1))
	}(this, function(e) {
		"use strict";
		var t = e.defineLocale("ug-cn", {
			months: "يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر".split("_"),
			monthsShort: "يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر".split("_"),
			weekdays: "يەكشەنبە_دۈشەنبە_سەيشەنبە_چارشەنبە_پەيشەنبە_جۈمە_شەنبە".split("_"),
			weekdaysShort: "يە_دۈ_سە_چا_پە_جۈ_شە".split("_"),
			weekdaysMin: "يە_دۈ_سە_چا_پە_جۈ_شە".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "YYYY-MM-DD",
				LL: "YYYY-يىلىM-ئاينىڭD-كۈنى",
				LLL: "YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm",
				LLLL: "dddd، YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm"
			},
			meridiemParse: /يېرىم كېچە|سەھەر|چۈشتىن بۇرۇن|چۈش|چۈشتىن كېيىن|كەچ/,
			meridiemHour: function(e, t) {
				return 12 === e && (e = 0), "يېرىم كېچە" === t || "سەھەر" === t || "چۈشتىن بۇرۇن" === t ? e : "چۈشتىن كېيىن" === t || "كەچ" === t ? e + 12 : e >= 11 ? e : e + 12
			},
			meridiem: function(e, t, n) {
				var a = 100 * e + t;
				return a < 600 ? "يېرىم كېچە" : a < 900 ? "سەھەر" : a < 1130 ? "چۈشتىن بۇرۇن" : a < 1230 ? "چۈش" : a < 1800 ? "چۈشتىن كېيىن" : "كەچ"
			},
			calendar: {
				sameDay: "[بۈگۈن سائەت] LT",
				nextDay: "[ئەتە سائەت] LT",
				nextWeek: "[كېلەركى] dddd [سائەت] LT",
				lastDay: "[تۆنۈگۈن] LT",
				lastWeek: "[ئالدىنقى] dddd [سائەت] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s كېيىن",
				past: "%s بۇرۇن",
				s: "نەچچە سېكونت",
				ss: "%d سېكونت",
				m: "بىر مىنۇت",
				mm: "%d مىنۇت",
				h: "بىر سائەت",
				hh: "%d سائەت",
				d: "بىر كۈن",
				dd: "%d كۈن",
				M: "بىر ئاي",
				MM: "%d ئاي",
				y: "بىر يىل",
				yy: "%d يىل"
			},
			dayOfMonthOrdinalParse: /\d{1,2}(-كۈنى|-ئاي|-ھەپتە)/,
			ordinal: function(e, t) {
				switch (t) {
					case "d":
					case "D":
					case "DDD":
						return e + "-كۈنى";
					case "w":
					case "W":
						return e + "-ھەپتە";
					default:
						return e
				}
			},
			preparse: function(e) {
				return e.replace(/،/g, ",")
			},
			postformat: function(e) {
				return e.replace(/,/g, "،")
			},
			week: {
				dow: 1,
				doy: 7
			}
		});
		return t
	})
}, function(e, t, n) {
	! function(e, t) {
		t(n(1))
	}(this, function(e) {
		"use strict";

		function t(e, t) {
			var n = e.split("_");
			return t % 10 === 1 && t % 100 !== 11 ? n[0] : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? n[1] : n[2]
		}

		function n(e, n, a) {
			var s = {
				ss: n ? "секунда_секунди_секунд" : "секунду_секунди_секунд",
				mm: n ? "хвилина_хвилини_хвилин" : "хвилину_хвилини_хвилин",
				hh: n ? "година_години_годин" : "годину_години_годин",
				dd: "день_дні_днів",
				MM: "місяць_місяці_місяців",
				yy: "рік_роки_років"
			};
			return "m" === a ? n ? "хвилина" : "хвилину" : "h" === a ? n ? "година" : "годину" : e + " " + t(s[a], +e)
		}

		function a(e, t) {
			var n = {
				nominative: "неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split("_"),
				accusative: "неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу".split("_"),
				genitive: "неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи".split("_")
			};
			if (!e) return n.nominative;
			var a = /(\[[ВвУу]\]) ?dddd/.test(t) ? "accusative" : /\[?(?:минулої|наступної)? ?\] ?dddd/.test(t) ? "genitive" : "nominative";
			return n[a][e.day()]
		}

		function s(e) {
			return function() {
				return e + "о" + (11 === this.hours() ? "б" : "") + "] LT"
			}
		}
		var r = e.defineLocale("uk", {
			months: {
				format: "січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split("_"),
				standalone: "січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень".split("_")
			},
			monthsShort: "січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split("_"),
			weekdays: a,
			weekdaysShort: "нд_пн_вт_ср_чт_пт_сб".split("_"),
			weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D MMMM YYYY р.",
				LLL: "D MMMM YYYY р., HH:mm",
				LLLL: "dddd, D MMMM YYYY р., HH:mm"
			},
			calendar: {
				sameDay: s("[Сьогодні "),
				nextDay: s("[Завтра "),
				lastDay: s("[Вчора "),
				nextWeek: s("[У] dddd ["),
				lastWeek: function() {
					switch (this.day()) {
						case 0:
						case 3:
						case 5:
						case 6:
							return s("[Минулої] dddd [").call(this);
						case 1:
						case 2:
						case 4:
							return s("[Минулого] dddd [").call(this)
					}
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "за %s",
				past: "%s тому",
				s: "декілька секунд",
				ss: n,
				m: n,
				mm: n,
				h: "годину",
				hh: n,
				d: "день",
				dd: n,
				M: "місяць",
				MM: n,
				y: "рік",
				yy: n
			},
			meridiemParse: /ночі|ранку|дня|вечора/,
			isPM: function(e) {
				return /^(дня|вечора)$/.test(e)
			},
			meridiem: function(e, t, n) {
				return e < 4 ? "ночі" : e < 12 ? "ранку" : e < 17 ? "дня" : "вечора"
			},
			dayOfMonthOrdinalParse: /\d{1,2}-(й|го)/,
			ordinal: function(e, t) {
				switch (t) {
					case "M":
					case "d":
					case "DDD":
					case "w":
					case "W":
						return e + "-й";
					case "D":
						return e + "-го";
					default:
						return e
				}
			},
			week: {
				dow: 1,
				doy: 7
			}
		});
		return r
	})
}, function(e, t, n) {
	! function(e, t) {
		t(n(1))
	}(this, function(e) {
		"use strict";
		var t = ["جنوری", "فروری", "مارچ", "اپریل", "مئی", "جون", "جولائی", "اگست", "ستمبر", "اکتوبر", "نومبر", "دسمبر"],
			n = ["اتوار", "پیر", "منگل", "بدھ", "جمعرات", "جمعہ", "ہفتہ"],
			a = e.defineLocale("ur", {
				months: t,
				monthsShort: t,
				weekdays: n,
				weekdaysShort: n,
				weekdaysMin: n,
				longDateFormat: {
					LT: "HH:mm",
					LTS: "HH:mm:ss",
					L: "DD/MM/YYYY",
					LL: "D MMMM YYYY",
					LLL: "D MMMM YYYY HH:mm",
					LLLL: "dddd، D MMMM YYYY HH:mm"
				},
				meridiemParse: /صبح|شام/,
				isPM: function(e) {
					return "شام" === e
				},
				meridiem: function(e, t, n) {
					return e < 12 ? "صبح" : "شام"
				},
				calendar: {
					sameDay: "[آج بوقت] LT",
					nextDay: "[کل بوقت] LT",
					nextWeek: "dddd [بوقت] LT",
					lastDay: "[گذشتہ روز بوقت] LT",
					lastWeek: "[گذشتہ] dddd [بوقت] LT",
					sameElse: "L"
				},
				relativeTime: {
					future: "%s بعد",
					past: "%s قبل",
					s: "چند سیکنڈ",
					ss: "%d سیکنڈ",
					m: "ایک منٹ",
					mm: "%d منٹ",
					h: "ایک گھنٹہ",
					hh: "%d گھنٹے",
					d: "ایک دن",
					dd: "%d دن",
					M: "ایک ماہ",
					MM: "%d ماہ",
					y: "ایک سال",
					yy: "%d سال"
				},
				preparse: function(e) {
					return e.replace(/،/g, ",")
				},
				postformat: function(e) {
					return e.replace(/,/g, "،")
				},
				week: {
					dow: 1,
					doy: 4
				}
			});
		return a
	})
}, function(e, t, n) {
	! function(e, t) {
		t(n(1))
	}(this, function(e) {
		"use strict";
		var t = e.defineLocale("uz-latn", {
			months: "Yanvar_Fevral_Mart_Aprel_May_Iyun_Iyul_Avgust_Sentabr_Oktabr_Noyabr_Dekabr".split("_"),
			monthsShort: "Yan_Fev_Mar_Apr_May_Iyun_Iyul_Avg_Sen_Okt_Noy_Dek".split("_"),
			weekdays: "Yakshanba_Dushanba_Seshanba_Chorshanba_Payshanba_Juma_Shanba".split("_"),
			weekdaysShort: "Yak_Dush_Sesh_Chor_Pay_Jum_Shan".split("_"),
			weekdaysMin: "Ya_Du_Se_Cho_Pa_Ju_Sha".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "D MMMM YYYY, dddd HH:mm"
			},
			calendar: {
				sameDay: "[Bugun soat] LT [da]",
				nextDay: "[Ertaga] LT [da]",
				nextWeek: "dddd [kuni soat] LT [da]",
				lastDay: "[Kecha soat] LT [da]",
				lastWeek: "[O'tgan] dddd [kuni soat] LT [da]",
				sameElse: "L"
			},
			relativeTime: {
				future: "Yaqin %s ichida",
				past: "Bir necha %s oldin",
				s: "soniya",
				ss: "%d soniya",
				m: "bir daqiqa",
				mm: "%d daqiqa",
				h: "bir soat",
				hh: "%d soat",
				d: "bir kun",
				dd: "%d kun",
				M: "bir oy",
				MM: "%d oy",
				y: "bir yil",
				yy: "%d yil"
			},
			week: {
				dow: 1,
				doy: 7
			}
		});
		return t
	})
}, function(e, t, n) {
	! function(e, t) {
		t(n(1))
	}(this, function(e) {
		"use strict";
		var t = e.defineLocale("uz", {
			months: "январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split("_"),
			monthsShort: "янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"),
			weekdays: "Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба".split("_"),
			weekdaysShort: "Якш_Душ_Сеш_Чор_Пай_Жум_Шан".split("_"),
			weekdaysMin: "Як_Ду_Се_Чо_Па_Жу_Ша".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "D MMMM YYYY, dddd HH:mm"
			},
			calendar: {
				sameDay: "[Бугун соат] LT [да]",
				nextDay: "[Эртага] LT [да]",
				nextWeek: "dddd [куни соат] LT [да]",
				lastDay: "[Кеча соат] LT [да]",
				lastWeek: "[Утган] dddd [куни соат] LT [да]",
				sameElse: "L"
			},
			relativeTime: {
				future: "Якин %s ичида",
				past: "Бир неча %s олдин",
				s: "фурсат",
				ss: "%d фурсат",
				m: "бир дакика",
				mm: "%d дакика",
				h: "бир соат",
				hh: "%d соат",
				d: "бир кун",
				dd: "%d кун",
				M: "бир ой",
				MM: "%d ой",
				y: "бир йил",
				yy: "%d йил"
			},
			week: {
				dow: 1,
				doy: 7
			}
		});
		return t
	})
}, function(e, t, n) {
	! function(e, t) {
		t(n(1))
	}(this, function(e) {
		"use strict";
		var t = e.defineLocale("vi", {
			months: "tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12".split("_"),
			monthsShort: "Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"),
			monthsParseExact: !0,
			weekdays: "chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy".split("_"),
			weekdaysShort: "CN_T2_T3_T4_T5_T6_T7".split("_"),
			weekdaysMin: "CN_T2_T3_T4_T5_T6_T7".split("_"),
			weekdaysParseExact: !0,
			meridiemParse: /sa|ch/i,
			isPM: function(e) {
				return /^ch$/i.test(e)
			},
			meridiem: function(e, t, n) {
				return e < 12 ? n ? "sa" : "SA" : n ? "ch" : "CH"
			},
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM [năm] YYYY",
				LLL: "D MMMM [năm] YYYY HH:mm",
				LLLL: "dddd, D MMMM [năm] YYYY HH:mm",
				l: "DD/M/YYYY",
				ll: "D MMM YYYY",
				lll: "D MMM YYYY HH:mm",
				llll: "ddd, D MMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Hôm nay lúc] LT",
				nextDay: "[Ngày mai lúc] LT",
				nextWeek: "dddd [tuần tới lúc] LT",
				lastDay: "[Hôm qua lúc] LT",
				lastWeek: "dddd [tuần rồi lúc] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s tới",
				past: "%s trước",
				s: "vài giây",
				ss: "%d giây",
				m: "một phút",
				mm: "%d phút",
				h: "một giờ",
				hh: "%d giờ",
				d: "một ngày",
				dd: "%d ngày",
				M: "một tháng",
				MM: "%d tháng",
				y: "một năm",
				yy: "%d năm"
			},
			dayOfMonthOrdinalParse: /\d{1,2}/,
			ordinal: function(e) {
				return e
			},
			week: {
				dow: 1,
				doy: 4
			}
		});
		return t
	})
}, function(e, t, n) {
	! function(e, t) {
		t(n(1))
	}(this, function(e) {
		"use strict";
		var t = e.defineLocale("x-pseudo", {
			months: "J~áñúá~rý_F~ébrú~árý_~Márc~h_Áp~ríl_~Máý_~Júñé~_Júl~ý_Áú~gúst~_Sép~témb~ér_Ó~ctób~ér_Ñ~óvém~bér_~Décé~mbér".split("_"),
			monthsShort: "J~áñ_~Féb_~Már_~Ápr_~Máý_~Júñ_~Júl_~Áúg_~Sép_~Óct_~Ñóv_~Déc".split("_"),
			monthsParseExact: !0,
			weekdays: "S~úñdá~ý_Mó~ñdáý~_Túé~sdáý~_Wéd~ñésd~áý_T~húrs~dáý_~Fríd~áý_S~átúr~dáý".split("_"),
			weekdaysShort: "S~úñ_~Móñ_~Túé_~Wéd_~Thú_~Frí_~Sát".split("_"),
			weekdaysMin: "S~ú_Mó~_Tú_~Wé_T~h_Fr~_Sá".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd, D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[T~ódá~ý át] LT",
				nextDay: "[T~ómó~rró~w át] LT",
				nextWeek: "dddd [át] LT",
				lastDay: "[Ý~ést~érdá~ý át] LT",
				lastWeek: "[L~ást] dddd [át] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "í~ñ %s",
				past: "%s á~gó",
				s: "á ~féw ~sécó~ñds",
				ss: "%d s~écóñ~ds",
				m: "á ~míñ~úté",
				mm: "%d m~íñú~tés",
				h: "á~ñ hó~úr",
				hh: "%d h~óúrs",
				d: "á ~dáý",
				dd: "%d d~áýs",
				M: "á ~móñ~th",
				MM: "%d m~óñt~hs",
				y: "á ~ýéár",
				yy: "%d ý~éárs"
			},
			dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
			ordinal: function(e) {
				var t = e % 10,
					n = 1 === ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
				return e + n
			},
			week: {
				dow: 1,
				doy: 4
			}
		});
		return t
	})
}, function(e, t, n) {
	! function(e, t) {
		t(n(1))
	}(this, function(e) {
		"use strict";
		var t = e.defineLocale("yo", {
			months: "Sẹ́rẹ́_Èrèlè_Ẹrẹ̀nà_Ìgbé_Èbibi_Òkùdu_Agẹmo_Ògún_Owewe_Ọ̀wàrà_Bélú_Ọ̀pẹ̀̀".split("_"),
			monthsShort: "Sẹ́r_Èrl_Ẹrn_Ìgb_Èbi_Òkù_Agẹ_Ògú_Owe_Ọ̀wà_Bél_Ọ̀pẹ̀̀".split("_"),
			weekdays: "Àìkú_Ajé_Ìsẹ́gun_Ọjọ́rú_Ọjọ́bọ_Ẹtì_Àbámẹ́ta".split("_"),
			weekdaysShort: "Àìk_Ajé_Ìsẹ́_Ọjr_Ọjb_Ẹtì_Àbá".split("_"),
			weekdaysMin: "Àì_Aj_Ìs_Ọr_Ọb_Ẹt_Àb".split("_"),
			longDateFormat: {
				LT: "h:mm A",
				LTS: "h:mm:ss A",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY h:mm A",
				LLLL: "dddd, D MMMM YYYY h:mm A"
			},
			calendar: {
				sameDay: "[Ònì ni] LT",
				nextDay: "[Ọ̀la ni] LT",
				nextWeek: "dddd [Ọsẹ̀ tón'bọ] [ni] LT",
				lastDay: "[Àna ni] LT",
				lastWeek: "dddd [Ọsẹ̀ tólọ́] [ni] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "ní %s",
				past: "%s kọjá",
				s: "ìsẹjú aayá die",
				ss: "aayá %d",
				m: "ìsẹjú kan",
				mm: "ìsẹjú %d",
				h: "wákati kan",
				hh: "wákati %d",
				d: "ọjọ́ kan",
				dd: "ọjọ́ %d",
				M: "osù kan",
				MM: "osù %d",
				y: "ọdún kan",
				yy: "ọdún %d"
			},
			dayOfMonthOrdinalParse: /ọjọ́\s\d{1,2}/,
			ordinal: "ọjọ́ %d",
			week: {
				dow: 1,
				doy: 4
			}
		});
		return t
	})
}, function(e, t, n) {
	! function(e, t) {
		t(n(1))
	}(this, function(e) {
		"use strict";
		var t = e.defineLocale("zh-cn", {
			months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
			monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
			weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
			weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"),
			weekdaysMin: "日_一_二_三_四_五_六".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "YYYY/MM/DD",
				LL: "YYYY年M月D日",
				LLL: "YYYY年M月D日Ah点mm分",
				LLLL: "YYYY年M月D日ddddAh点mm分",
				l: "YYYY/M/D",
				ll: "YYYY年M月D日",
				lll: "YYYY年M月D日 HH:mm",
				llll: "YYYY年M月D日dddd HH:mm"
			},
			meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
			meridiemHour: function(e, t) {
				return 12 === e && (e = 0), "凌晨" === t || "早上" === t || "上午" === t ? e : "下午" === t || "晚上" === t ? e + 12 : e >= 11 ? e : e + 12
			},
			meridiem: function(e, t, n) {
				var a = 100 * e + t;
				return a < 600 ? "凌晨" : a < 900 ? "早上" : a < 1130 ? "上午" : a < 1230 ? "中午" : a < 1800 ? "下午" : "晚上"
			},
			calendar: {
				sameDay: "[今天]LT",
				nextDay: "[明天]LT",
				nextWeek: "[下]ddddLT",
				lastDay: "[昨天]LT",
				lastWeek: "[上]ddddLT",
				sameElse: "L"
			},
			dayOfMonthOrdinalParse: /\d{1,2}(日|月|周)/,
			ordinal: function(e, t) {
				switch (t) {
					case "d":
					case "D":
					case "DDD":
						return e + "日";
					case "M":
						return e + "月";
					case "w":
					case "W":
						return e + "周";
					default:
						return e
				}
			},
			relativeTime: {
				future: "%s内",
				past: "%s前",
				s: "几秒",
				ss: "%d 秒",
				m: "1 分钟",
				mm: "%d 分钟",
				h: "1 小时",
				hh: "%d 小时",
				d: "1 天",
				dd: "%d 天",
				M: "1 个月",
				MM: "%d 个月",
				y: "1 年",
				yy: "%d 年"
			},
			week: {
				dow: 1,
				doy: 4
			}
		});
		return t
	})
}, function(e, t, n) {
	! function(e, t) {
		t(n(1))
	}(this, function(e) {
		"use strict";
		var t = e.defineLocale("zh-hk", {
			months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
			monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
			weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
			weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
			weekdaysMin: "日_一_二_三_四_五_六".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "YYYY/MM/DD",
				LL: "YYYY年M月D日",
				LLL: "YYYY年M月D日 HH:mm",
				LLLL: "YYYY年M月D日dddd HH:mm",
				l: "YYYY/M/D",
				ll: "YYYY年M月D日",
				lll: "YYYY年M月D日 HH:mm",
				llll: "YYYY年M月D日dddd HH:mm"
			},
			meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
			meridiemHour: function(e, t) {
				return 12 === e && (e = 0), "凌晨" === t || "早上" === t || "上午" === t ? e : "中午" === t ? e >= 11 ? e : e + 12 : "下午" === t || "晚上" === t ? e + 12 : void 0
			},
			meridiem: function(e, t, n) {
				var a = 100 * e + t;
				return a < 600 ? "凌晨" : a < 900 ? "早上" : a < 1130 ? "上午" : a < 1230 ? "中午" : a < 1800 ? "下午" : "晚上"
			},
			calendar: {
				sameDay: "[今天]LT",
				nextDay: "[明天]LT",
				nextWeek: "[下]ddddLT",
				lastDay: "[昨天]LT",
				lastWeek: "[上]ddddLT",
				sameElse: "L"
			},
			dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
			ordinal: function(e, t) {
				switch (t) {
					case "d":
					case "D":
					case "DDD":
						return e + "日";
					case "M":
						return e + "月";
					case "w":
					case "W":
						return e + "週";
					default:
						return e
				}
			},
			relativeTime: {
				future: "%s內",
				past: "%s前",
				s: "幾秒",
				ss: "%d 秒",
				m: "1 分鐘",
				mm: "%d 分鐘",
				h: "1 小時",
				hh: "%d 小時",
				d: "1 天",
				dd: "%d 天",
				M: "1 個月",
				MM: "%d 個月",
				y: "1 年",
				yy: "%d 年"
			}
		});
		return t
	})
}, function(e, t, n) {
	! function(e, t) {
		t(n(1))
	}(this, function(e) {
		"use strict";
		var t = e.defineLocale("zh-tw", {
			months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
			monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
			weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
			weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
			weekdaysMin: "日_一_二_三_四_五_六".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "YYYY/MM/DD",
				LL: "YYYY年M月D日",
				LLL: "YYYY年M月D日 HH:mm",
				LLLL: "YYYY年M月D日dddd HH:mm",
				l: "YYYY/M/D",
				ll: "YYYY年M月D日",
				lll: "YYYY年M月D日 HH:mm",
				llll: "YYYY年M月D日dddd HH:mm"
			},
			meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
			meridiemHour: function(e, t) {
				return 12 === e && (e = 0), "凌晨" === t || "早上" === t || "上午" === t ? e : "中午" === t ? e >= 11 ? e : e + 12 : "下午" === t || "晚上" === t ? e + 12 : void 0
			},
			meridiem: function(e, t, n) {
				var a = 100 * e + t;
				return a < 600 ? "凌晨" : a < 900 ? "早上" : a < 1130 ? "上午" : a < 1230 ? "中午" : a < 1800 ? "下午" : "晚上"
			},
			calendar: {
				sameDay: "[今天] LT",
				nextDay: "[明天] LT",
				nextWeek: "[下]dddd LT",
				lastDay: "[昨天] LT",
				lastWeek: "[上]dddd LT",
				sameElse: "L"
			},
			dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
			ordinal: function(e, t) {
				switch (t) {
					case "d":
					case "D":
					case "DDD":
						return e + "日";
					case "M":
						return e + "月";
					case "w":
					case "W":
						return e + "週";
					default:
						return e
				}
			},
			relativeTime: {
				future: "%s內",
				past: "%s前",
				s: "幾秒",
				ss: "%d 秒",
				m: "1 分鐘",
				mm: "%d 分鐘",
				h: "1 小時",
				hh: "%d 小時",
				d: "1 天",
				dd: "%d 天",
				M: "1 個月",
				MM: "%d 個月",
				y: "1 年",
				yy: "%d 年"
			}
		});
		return t
	})
}, , , , , , , , , , function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}

	function s() {
		var e = c.timeline({
				easing: "easeInOutQuad",
				loop: !0
			}),
			t = [].concat((0, i.default)(document.querySelectorAll("#animeSvg polygon"))),
			n = [2, 3, 4, 5],
			a = n.map(function(e) {
				return t[e]
			}),
			s = [11, 19],
			r = s.map(function(e) {
				return t[e]
			}),
			o = [13, 14, 15, 17],
			_ = o.map(function(e) {
				return t[e]
			}),
			l = document.querySelector("#animeSvg g"),
			h = document.querySelector("#animeSvg ellipse");
		e.add({
			targets: a,
			offset: 1e3,
			duration: 100,
			points: function(e, t) {
				return u.default.polygon[n[t]].points
			}
		}).add({
			targets: a,
			offset: 1100,
			duration: 100,
			points: function(e, t) {
				return d.default.polygon[n[t]].points
			}
		}).add({
			targets: a,
			offset: 1200,
			duration: 100,
			points: function(e, t) {
				return u.default.polygon[n[t]].points
			}
		}).add({
			targets: a,
			offset: 1300,
			duration: 100,
			points: function(e, t) {
				return d.default.polygon[n[t]].points
			}
		}).add({
			targets: r,
			offset: 600,
			duration: 400,
			points: function(e, t) {
				return u.default.polygon[s[t]].points
			}
		}).add({
			targets: r,
			offset: 1e3,
			duration: 400,
			points: function(e, t) {
				return d.default.polygon[s[t]].points
			}
		}).add({
			targets: _,
			offset: 1200,
			duration: 300,
			points: function(e, t) {
				return u.default.polygon[o[t]].points
			}
		}).add({
			targets: _,
			offset: 1500,
			duration: 300,
			points: function(e, t) {
				return d.default.polygon[o[t]].points
			}
		}).add({
			targets: t,
			delay: function(e) {
				return 60 * parseInt(e.getAttribute("data-order"), 10)
			},
			offset: 3e3,
			duration: 600,
			points: function(e, t) {
				return m.default.polygon[t].points
			},
			fill: function(e, t) {
				return m.default.polygon[t].fill
			}
		}).add({
			targets: l,
			translateY: -30,
			easing: "gEasing",
			duration: 3e3,
			offset: 4740
		}).add({
			targets: h,
			opacity: .7,
			easing: "gEasing",
			duration: 3e3,
			offset: 4740
		}).add({
			targets: t,
			delay: function(e) {
				return 3e3 + 60 * parseInt(e.getAttribute("data-order"), 10)
			},
			offset: 4740,
			duration: 600,
			points: function(e, t) {
				return d.default.polygon[t].points
			},
			fill: function(e, t) {
				return d.default.polygon[t].fill
			}
		})
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = n(37),
		i = a(r);
	t.default = s;
	var o = n(313),
		d = a(o),
		_ = n(314),
		u = a(_),
		l = n(312),
		m = a(l),
		c = window.anime;
	c.easings.gEasing = function(e) {
		return -(Math.cos(e * Math.PI * 2) - 1)
	}
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}

	function s() {
		p.ajax(v(1)).done(function(e) {
			if (e.success) {
				var t = L.default.get("svg") || {};
				t.bai = e.data, L.default.set("svg", t), L.default.call("initIndex", "bai")
			}
		}), p.ajax(v(2)).done(function(e) {
			if (e.success) {
				var t = L.default.get("svg") || {};
				t["bai+"] = e.data, L.default.set("svg", t), L.default.call("initIndex", "bai+")
			}
		})
	}

	function r(e) {
		var t = p('.index[type="' + e + '"] .chart'),
			n = p("svg", t),
			a = t.innerWidth();
		return n.attr("width", a), n.attr("viewBox", "0 0 " + a + " " + w), a
	}

	function i(e) {
		var t = L.default.get("svg")[e].points,
			n = t.map(function(e) {
				return (0, h.default)({}, e, {
					price: parseFloat(e.price)
				})
			}),
			a = r(e),
			s = p('.index[type="' + e + '"] .chart svg'),
			i = p(".line line", s);
		i.attr("x2", a);
		var o = p(".polyline polyline", s),
			d = n.length,
			_ = a / (d - 1),
			u = Math.min.apply(Math, (0, m.default)(n.map(function(e) {
				return e.price
			}))),
			l = Math.max.apply(Math, (0, m.default)(n.map(function(e) {
				return e.price
			}))),
			c = w - 2 * D,
			f = n.map(function(e, t) {
				var n = e.price,
					s = void 0;
				s = t === d - 1 ? a : _ * t;
				var r = D + c - (n - u) / (l - u) * c;
				return s + "," + r
			});
		o.attr("points", f.join(" "));
		var M = p(".area polyline", s);
		M.attr("points", f.concat([a + "," + w, "0," + w]).join(" "));
		var y = p(".shadow polyline", s);
		y.attr("points", f.join(" "))
	}

	function o() {
		L.default.bind("initIndex", function(e) {
			var t = L.default.get("svg")[e],
				n = t.points,
				a = parseFloat(n[n.length - 1].price),
				s = (t.last_price - t.first_price) / t.first_price,
				r = p('.index[type="' + e + '"]');
			p(".value .v-value", r).addClass(s >= 0 ? "green-text" : "red-text"), p(".value .current .v-value", r).html("" + a), p(".value .change .v-value", r).html("" + (s >= 0 ? "+" : "-") + Math.abs(100 * s).toFixed(2) + "%"), p(".index-title .time.v-value", r).html(k + " - " + g), i(e)
		})
	}

	function d() {
		p(window).resize(function() {
			i("bai"), i("bai+")
		})
	}

	function _() {
		p("#indexes").click(function() {
			window.open("/bbi/" + window.locale.toLowerCase() + ".html")
		})
	}

	function u() {
		o(), d(), s(), _()
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var l = n(37),
		m = a(l),
		c = n(76),
		h = a(c),
		f = n(1),
		M = a(f),
		y = n(75),
		L = a(y),
		p = window.$,
		Y = new Date,
		g = (0, M.default)(Y).format("YYYY-MM-DD"),
		k = (0, M.default)(new Date(Y.getTime() - 10368e6)).format("YYYY-MM-DD"),
		v = function(e) {
			return "/web/etf/points/" + e + ".json?from=" + k + "&to=" + g
		},
		w = 108,
		D = 10;
	t.default = u
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}

	function s() {
		m = (m + 1) % l, u.css("margin-left", "-" + 100 * m + "%")
	}

	function r() {
		_ = d(".triangle").first();
		var e = d(".blocks").first();
		u = d(".blocks-m").first();
		var t = "";
		d.ajax({
			url: "https://assets.bitrabbit.com/data/homebanner." + window.locale.toLowerCase() + ".json",
			cache: !1
		}).done(function(n) {
			n.forEach(function(e) {
				t += e.link ? '<div class="block"><a target=\'_blank\' href="' + e.link + '"><img src="' + e.img + '"></a></div>' : '<div class="block"><img src="' + e.img + '"></div>'
			}), e.html(t), u.html(t), l = d(".blocks-m .block").length, setInterval(s, 5e3)
		}), c = .35 * window.innerHeight, d(window).scroll(function() {
			var e = d(window).scrollTop(),
				t = e / c,
				n = t > 1 ? 0 : h * (1 - t);
			_.css("height", n)
		}), (0, o.default)()
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = n(220),
		o = a(i),
		d = window.$,
		_ = void 0,
		u = void 0,
		l = void 0,
		m = 0,
		c = void 0,
		h = 50;
	t.default = r
}, function(e, t, n) {
	"use strict";

	function a() {
		var e = s(".horse").first(),
			t = "";
		s.ajax({
			url: "/web/bulletins.json?type=html5&locale=" + window.locale,
			method: "GET"
		}).done(function(n) {
			var a = n.data;
			a.forEach(function(n) {
				t += "\n      <a class='horse-link test' target=\"_blank\" href='" + n.link + '\'><img class="broadcast" src="https://assets.bitrabbit.com/upload/7c645b72-283b-42fa-ad42-bbbe91ab25ab.svg" />' + n.title + "</a>\n      ", e.html(t)
			})
		});
		var n = void 0;
		s(function() {
			n = setInterval(function() {
				s(".horse").animate({
					marginTop: "-25px"
				}, 2e3, function() {
					s(this).css({
						marginTop: "0px"
					}).find(".test:first").appendTo(this)
				})
			}, 2e3), s(".bulletin").hover(function() {
				clearInterval(n)
			}, function() {
				n = setInterval(function() {
					s(".horse").animate({
						marginTop: "-25px"
					}, 2e3, function() {
						s(this).css({
							marginTop: "0px"
						}).find(".test:first").appendTo(this)
					})
				}, 1500)
			})
		})
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), n(299);
	var s = window.$;
	t.default = a
}, function(e, t) {
	"use strict";

	function n(e) {
		if (!e) return "";
		var t = e.email;
		return t && t.indexOf("@brb.com") > -1 ? t.split("@")[0] : t
	}

	function a() {
		if (window.current_user) {
			var e = window.current_user,
				t = window.i18n,
				a = window.locale;
			s("#signinBtn").remove(), s("#slBtns").remove(), s(".welcome .opt").prepend('\n      <a target="_blank" href="/dashboard">\n        <button>' + t.dashboard + "</button>\n      </a>\n    "), s(".opt2").empty().append('\n      <a href="/signout?locale=' + a.toLowerCase() + '">' + t.logout + "</a>\n    "), s("#localChange").after('\n      <li id="user">\n        <a>' + n(e) + '</a>\n        <div class="menu">\n          <a target="_blank" href="/dashboard">' + t.dashboard + '</a>\n          <a href="/signout?locale=' + a.toLowerCase() + '">' + t.logout + "</a>\n        </div>\n      </li>\n    "), window.destroySignin(), window.destroySignup(), window.destroyForgetPassword(), window.destroyForgetPassword()
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.default = a;
	var s = window.$
}, function(e, t, n) {
	"use strict";

	function a() {
		h.fadeOut()
	}

	function s() {
		(0, u.changeRucaptcha)(), h.fadeIn()
	}

	function r() {
		l.ajax({
			url: "https://assets.bitrabbit.com/data/country_code.json",
			cache: !1
		}).done(function(e) {
			e.forEach(function(e) {
				y.push("<option value=" + e.code + ">" + e.name + "(+" + e.code + ")</option>")
			}), l("#forgetPasswordArea").html('<option value="">' + window.i18n.signup_please_choice + "</option>" + y.join(""))
		})
	}

	function i() {
		var e = l("#forgetGetRucaptchaAgain");
		0 === M ? (clearInterval(f), e.addClass("hidden").siblings("#forgetGetRucaptcha").removeClass("hidden"), e.find(".residual-time").text("60"), M = 60) : (M -= 1, e.find(".residual-time").text(M))
	}

	function o() {
		var e = window.i18n;
		h = l("#forgetPassword"), h.click(function(e) {
			e.delegateTarget === e.target && a()
		}), l(".row.choose button", h).click(function(e) {
			var t = l(e.target),
				n = l("#forgetPasswordArea");
			if (!t.hasClass("active")) {
				l(".row.choose button", h).removeClass("active"), t.addClass("active");
				var a = t.attr("data-type");
				h.removeClass("email phone").addClass(a), "phone" !== a || n.val() || r()
			}
		}), l("#forgetPasswordSubmit").click(function() {
			var t = l("#forgetPasswordEmail").val(),
				n = window.rucaptcha ? l("#forgetPasswordRucaptcha").val() : " ";
			return 0 === t.length || 0 === n.length ? void(0, d.message)("error", e.signup_empty) : m.test(t) ? ((0, _.addLoading)(l(".modal-content", h), !0, !0), void l.ajax({
				method: "POST",
				url: "/reset_passwords.json",
				data: {
					email: t,
					locale: window.locale,
					_rucaptcha: n
				}
			}).done(function(t) {
				t.success ? ((0, d.message)("success", e.forget_password_send_success), l(".success-msg").css("display", "block")) : t.errors && t.errors.forEach(function(e) {
					(0, d.message)("error", e.message)
				}), (0, u.changeRucaptcha)(), (0, _.removeLoading)(h)
			})) : void(0, d.message)("error", e.email_error)
		}), l("#forgetGetRucaptcha").click(function() {
			var t = l("#forgetPasswordArea").val(),
				n = l("#forgetPasswordPhone").val();
			if (0 === n.length) return void(0, d.message)("error", e.signup_empty);
			if (!c.test(n)) return void(0, d.message)("error", e.phone_error);
			window.ga("create", "UA-113346386-1", "auto"), window.ga("send", "pageview"), window.ga("send", "event", "ForgetPassword", "sendSms", "forget password send sms", 1);
			var a = "" + t + n;
			l.ajax({
				method: "POST",
				url: "/web/members/send_sms_reset_password.json",
				data: {
					phone_number: a,
					locale: window.locale,
					_rucaptcha: ""
				}
			}).done(function(t) {
				t.success ? ((0, d.message)("success", e.forget_phone_password_send_success), l("#forgetGetRucaptcha").addClass("hidden"), l("#forgetGetRucaptchaAgain").removeClass("hidden"), f = setInterval(i, 1e3)) : t.errors && t.errors.forEach(function(e) {
					(0, d.message)("error", e.message)
				}), (0, u.changeRucaptcha)()
			})
		}), l("#forgetPasswordPhoneSubmit").click(function() {
			var t = l("#forgetPasswordArea").val(),
				n = l("#forgetPasswordPhone").val(),
				a = l("#forgetPasswordPhonePass").val(),
				s = l("#forgetPasswordPhoneAgain").val(),
				r = l("#forgetPhoneRucaptcha").val(),
				i = window.rucaptcha ? l("#forgetPasswordPhoneRucaptcha").val() : " ";
			if (0 === n.length || 0 === i.length || 0 === r.length) return void(0, d.message)("error", e.signup_empty);
			if (!c.test(n)) return void(0, d.message)("error", e.phone_error);
			if (a !== s) return void(0, d.message)("error", e.signup_password_error);
			window.ga("create", "UA-113346386-1", "auto"), window.ga("send", "pageview"), window.ga("send", "event", "ForgetPassword", "submit", "forget password submit", 1);
			var o = "" + t + n;
			l.ajax({
				method: "PUT",
				url: "/reset_phone_passwords.json",
				data: {
					phone_number: o,
					password: a,
					verify_code: r,
					locale: window.locale,
					_rucaptcha: i
				}
			}).done(function(t) {
				t.success ? ((0, d.message)("success", e.reset_password_send_success), window.showSignin()) : t.errors && t.errors.forEach(function(e) {
					(0, d.message)("error", e.message)
				}), (0, u.changeRucaptcha)()
			})
		}), l("#forgetPasswordArea").change(function() {
			var e = l("#forgetPasswordArea").val();
			e.length > 0 ? l("#forgetPasswordPhonePrefix").html("<span>+" + e + "</span>") : l("#forgetPasswordPhonePrefix").html("")
		})
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var d = n(23),
		_ = n(22),
		u = n(33),
		l = window.$,
		m = /^[.a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
		c = /^\d+$/,
		h = void 0,
		f = null,
		M = 60,
		y = [];
	window.hideForgetPassword = a, window.showForgetPassword = function() {
		window.hideSignin(), window.hideSignup(), window.hideResetPassword(), s()
	}, window.destroyForgetPassword = function() {
		h.remove(), window.hideForgetPassword = window.showForgetPassword = function() {}
	}, t.default = o
}, function(e, t) {
	"use strict";

	function n() {
		a(".header-menu .menu-btn").click(function() {
			a(".header-menu ol").toggleClass("show")
		})
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.default = n;
	var a = window.$
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.default = function() {
		(0, r.default)(), (0, o.default)(), (0, _.default)(), (0, l.default)(), (0, c.default)(), (0, f.default)(), (0, y.default)(), (0, b.default)(), (0, p.default)(), (0, g.default)(), (0, H.default)(), j(".goto-signin").click(function() {
			window.showSignin()
		}), j(".goto-signup").click(function() {
			window.showSignup()
		}), j(".goto-forgetPassword").click(function() {
			window.showForgetPassword()
		}), j(".modal-close").click(function(e) {
			j(e.target).parent().parent().fadeOut()
		}), j(".modal input[type=text], .modal input[type=password]").watch(function(e, t) {
			var n = j(e.target);
			if ("\n" === t) {
				var a = j(n.attr("enter")).first();
				if (a.length > 0) {
					var s = a[0].nodeName;
					"INPUT" === s ? a.focus() : "BUTTON" === s && a.click()
				}
			}
		}), j(".qq").bind({
			click: function() {
				j(".qrcode").toggle()
			},
			mouseover: function() {
				j(".qrcode").show()
			},
			mouseout: function() {
				j(".qrcode").hide()
			}
		}), (0, v.default)(), (0, D.default)()
	};
	var s = n(33),
		r = a(s),
		i = n(226),
		o = a(i),
		d = n(222),
		_ = a(d),
		u = n(228),
		l = a(u),
		m = n(232),
		c = a(m),
		h = n(230),
		f = a(h),
		M = n(231),
		y = a(M),
		L = n(225),
		p = a(L),
		Y = n(229),
		g = a(Y),
		k = n(23),
		v = a(k),
		w = n(224),
		D = a(w),
		T = n(221),
		b = a(T),
		S = n(223),
		H = a(S),
		j = window.$;
	j.fn.watch = function(e) {
		return this.each(function() {
			j.data(this, "originVal", j(this).val()), j(this).on("keyup paste", function(t) {
				var n = j.data(this, "originVal"),
					a = j(this).val();
				n !== a && (j.data(this, "originVal", j(this).val()), e(t, a)), t.keyCode && 13 === t.keyCode && e(t, "\n")
			})
		})
	}
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}

	function s(e) {
		var t = e.toString();
		return 0 === t.length ? 0 : (t = t.split("."), 1 === t.length ? 0 : t[1].length)
	}

	function r(e) {
		return H.ajax({
			method: "DELETE",
			url: "/web/market_favorite.json?id=" + e
		})
	}

	function i(e) {
		return H.ajax({
			method: "POST",
			url: "/web/market_favorite.json",
			data: {
				id: e
			}
		})
	}

	function o() {
		return H.ajax({
			method: "GET",
			url: "/web/market_favorite.json"
		})
	}

	function d() {
		return H.ajax("/api/v2/markets")
	}

	function _(e) {
		var t = e[window.legalCurrency.key];
		return window.legalCurrency.sign + parseFloat(t).toFixed(3)
	}

	function u(e) {
		if (W[e.market] = e, e.market === O) {
			if (0 === e.currencies.length) {
				var t = H('<div class="no-currency">No data</div>');
				A.append(t)
			}
			e.currencies.forEach(function(t) {
				var n = H('\n        <div id="market_' + t.id + '" class="currency" data-market-id="' + t.id + '" data-market-name="' + t.name + '"></div>\n      ');
				A.append(n);
				var a = t.tags,
					s = t.currency,
					o = void 0,
					d = void 0,
					u = void 0,
					l = void 0,
					m = void 0,
					c = [];
				a && a.map(function(e) {
					switch (o = e.split("|")[0]) {
						case "super":
							u = "" + j.tags_super, l = "super", m = s + " " + j.tags_super_content;
							break;
						case "free":
							u = "" + j.tags_free, l = "free", m = s + " " + j.tags_free_content;
							break;
						case "giveaways":
							u = "" + j.tags_giveaways, l = "giveaways", m = s + " " + j.tags_giveaways_content;
							break;
						case "aridrop":
							u = "" + j.tags_aridrop, l = "airdrop", m = "" + s + j.tags_aridrop_content;
							break;
						case "lottery":
							u = "" + j.tags_lottery, l = "lottery", m = "" + s + j.tags_lottery_content;
							break;
						case "excellent":
							u = "" + j.tags_excellent, l = "excellent", m = "" + j.tags_excellent_content;
							break;
						case "st":
							u = "" + j.tags_st, l = "st", m = "" + j.tags_st_content;
							break;
						case "innovative":
							u = "" + j.tags_innovative, l = "innovative", m = "" + j.tags_innovative_content;
							break;
						case "game":
							u = "" + j.tags_game, l = "game", m = "" + j.tags_game_content
					}
					var t = e.split("|")[1];
					return d = t && JSON.parse(t).link, c.push({
						name: u,
						style: l,
						content: m,
						link: d
					}), o
				});
				var h = c.map(function(e) {
						var t = void 0;
						return t = e.link ? e.link : "", '<div class="' + e.style + ' tag">' + e.name + '<div class="tool-tip">' + e.content + '<a href="' + e.link + '">' + t + "</a></div></div>"
					}),
					f = t.down,
					M = String(t.last);
				M.indexOf("-") >= 0 && (M = "0" + String(Number(M) + 1).substr(1));
				var y = H(".tag-wrapper");
				n.html('\n        <div class= "favorite"><a class="favorite-button-' + t.id + '"><i class="' + (t.favorite ? "cancel-mark" : "mark") + '"></i></a></div>\n        <div class="name">' + t.name + '<div class="tag-wrapper">' + h.join(" ") + '</div></div>\n        <div class="price ' + (0, b.default)(f ? "red-text" : "green-text") + '"><div><tt>' + M + '</tt><tt class="legal-price">' + _(t) + '</tt></div></div>\n        <div class="change text-right ' + (0, b.default)(f ? "red-text" : "green-text") + '"><tt>' + (f ? "-" : "+") + Math.abs(100 * t.change).toFixed(2) + '%</tt></div>\n        <div class="high text-right"><tt>' + ("USDT" === e.market ? parseFloat(t.high).toFixed(2) : parseFloat(t.high).toFixed(8)) + '</tt></div>\n        <div class="low text-right"><tt>' + ("USDT" === e.market ? parseFloat(t.low).toFixed(2) : parseFloat(t.low).toFixed(8)) + '</tt></div>\n        <div class="volume text-right"><tt>' + Math.ceil(t.volume) + '</tt></div>\n        <div class="turnover text-right"><tt>' + parseFloat(t.turnover).toFixed(2) + "</tt></div>\n      "), y.click(function(e) {
					e.stopPropagation()
				}), n.click(function(e) {
					var t = H(e.currentTarget).attr("data-market-name");
					window.location = "/markets/" + t.replace("/", "_").toLowerCase()
				}), H(".favorite-button-" + t.id + ">i").click(function(a) {
					a.stopPropagation(), t.favorite ? r(t.id).done(function(s) {
						if (s.success) {
							if (e.market === "" + j.market_favorite) {
								if (n.remove(), 0 === A.children().length) {
									var r = H('<div class="no-currency">No data</div>');
									A.append(r)
								}
								for (var i = t.name.split("/")[1], o = W["" + i], d = 0; d < o.currencies.length; d += 1)
									if (o.currencies[d].id === t.id) {
										o.currencies[d].favorite = !1;
										break
									}
							} else t.favorite = !t.favorite, H(a.target).attr("class", "mark");
							for (var _ = -1, u = 0; u < W["" + j.market_favorite].currencies.length; u += 1)
								if (W["" + j.market_favorite].currencies[u].id === t.id) {
									_ = u;
									break
								}
							_ !== -1 && W["" + j.market_favorite].currencies.splice(_, 1)
						}
					}) : i(t.id).done(function(e) {
						e.success && (t.favorite = !t.favorite, H(a.target).attr("class", "cancel-mark"), W["" + j.market_favorite].currencies.push(t))
					})
				})
			})
		}
		window.current_user && H(".favorite").css("display", "flex")
	}

	function l(e) {
		function t() {
			var n = e.map(function(e) {
					return '<div data-tab="' + e.market + '" class="market-panel-title ' + (O === e.market ? "active" : "") + '">' + e.market + j.market + "</div>"
				}),
				a = P.find(".market-tabs");
			a.empty().append(n.join("")), A.empty(), e.forEach(function(e) {
				return u(e)
			}), a.click(function(e) {
				var n = H(e.target).attr("data-tab");
				O !== n && (O = n, H("[data-sort]").removeAttr("data-sort-active"), t())
			})
		}
		x.append(P), t()
	}

	function m(e, t) {
		var n = e.currencies[0],
			a = (0, D.default)(n.name),
			s = void 0,
			r = t.by;
		s = r ? "string" === a ? "asc" === t.type ? [].concat((0, v.default)(e.currencies)).sort(function(e, t) {
			return e[r] > t[r] ? 1 : -1
		}) : [].concat((0, v.default)(e.currencies)).sort(function(e, t) {
			return e[r] > t[r] ? -1 : 1
		}) : "asc" === t.type ? [].concat((0, v.default)(e.currencies)).sort(function(e, t) {
			return parseFloat(e[r]) > parseFloat(t[r]) ? 1 : -1
		}) : [].concat((0, v.default)(e.currencies)).sort(function(e, t) {
			return parseFloat(e[r]) > parseFloat(t[r]) ? -1 : 1
		}) : e.currencies, H("[data-sort]").removeAttr("data-sort-active"), r && H('[data-sort="' + r + '"]').attr("data-sort-active", t.type);
		var i = {
			market: e.market,
			currencies: s
		};
		A.empty(), u(i)
	}

	function c(e) {
		e.forEach(function(e) {
			F[e.market] = {
				by: void 0,
				type: "asc"
			}
		}), H(".market .header div[data-sort]").click(function(t) {
			var n = H(t.target),
				a = n.attr("data-sort"),
				s = F[O],
				r = s.by,
				i = s.type,
				o = void 0,
				d = "asc";
			r && r === a ? "asc" === i ? (o = r, d = "desc") : "desc" === i && (d = "asc") : o = a, s.by = o, s.type = d, m(e.filter(function(e) {
				return e.market === O
			})[0], s)
		})
	}

	function h(e) {
		var t = {};
		return e.filter(function(e) {
			return E.indexOf(e.id) === -1
		}).forEach(function(e, n) {
			var a = e.name.split("/");
			t[a[1]] || (t[a[1]] = [], 0 === n && (O = O || a[1]));
			var r = e.ticker,
				i = parseFloat(r.last),
				o = parseFloat(r.open),
				d = 0 === o ? 0 : (i - o) / o,
				_ = d < 0,
				u = s(e.bid_config.price_minmov),
				l = s(e.bid_config.min_amount),
				m = (0, g.default)({}, e, r, {
					change: d,
					down: _,
					currency: a[0]
				});
			["buy", "high", "last", "low", "open", "sell", "turnover"].forEach(function(e) {
				m[e] = Number(parseFloat(m[e]).toFixed(u))
			}), m.volume = Number(parseFloat(m.volume).toFixed(l)), t[a[1]].push(m)
		}), t = (0, p.default)(t).map(function(e) {
			return {
				market: e,
				currencies: t[e]
			}
		}), t.sort(function(e, t) {
			return e.market < t.market ? -1 : e.market === t.market ? 0 : 1
		}), t
	}

	function f(e) {
		var t = [];
		return e.forEach(function(e) {
			var n = e.ticker,
				a = parseFloat(n.last),
				r = parseFloat(n.open),
				i = 0 === r ? 0 : (a - r) / r,
				o = i < 0,
				d = s(e.bid_config.price_minmov),
				_ = s(e.bid_config.min_amount),
				u = !0,
				l = (0, g.default)({}, e, n, {
					change: i,
					down: o,
					favorite: u
				});
			["buy", "high", "last", "low", "open", "sell", "turnover"].forEach(function(e) {
				l[e] = Number(parseFloat(l[e]).toFixed(d))
			}), l.volume = Number(parseFloat(l.volume).toFixed(_)), t.push(l)
		}), t.sort(function(e, t) {
			return e.market < t.market ? -1 : e.market === t.market ? 0 : 1
		}), t
	}

	function M(e) {
		d().done(function(t) {
			var n = h(t);
			window.current_user ? o().done(function(t) {
				var a = {};
				t.success && (a.market = "" + j.market_favorite, a.currencies = f(t.data), n.push(a), l(n, e), e && (c(n), (0, S.removeLoading)("#markets")))
			}) : (l(n, e), e && (c(n), (0, S.removeLoading)("#markets")))
		}), setTimeout(M, 6e4)
	}

	function y() {
		x = H("#markets"), H.ajax({
			url: "https://assets.bitrabbit.com/data/home_hidden.json",
			cache: !1
		}).done(function(e) {
			E = e.hidden || [], M(!0)
		}), (0, S.addLoading)("#markets")
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var L = n(242),
		p = a(L),
		Y = n(76),
		g = a(Y),
		k = n(37),
		v = a(k),
		w = n(247),
		D = a(w),
		T = n(248),
		b = a(T),
		S = n(22);
	n(302);
	var H = window.$,
		j = window.i18n,
		x = void 0,
		P = H('\n  <div class="market" >\n    <div class="market-tabs-wrap">\n      <div class="market-tabs">\n      </div>\n    </div>\n    <div class="currency header">\n      <div class="favorite"></div>\n      <div class="name" data-sort="name">' + j.market_name + '</div>\n      <div class="price">' + j.market_price + '</div>\n      <div class="change text-right" data-sort="change">' + j.market_change + '</div>\n      <div class="high text-right">' + j.market_high + '</div>\n      <div class="low text-right">' + j.market_low + '</div>\n      <div class="volume text-right">' + j.market_volume + '</div>\n      <div class="turnover text-right" data-sort="turnover">' + j.market_turnover + '</div>\n    </div>\n    <div class="content"></div>\n  </div>\n'),
		O = void 0,
		A = P.find(".content"),
		W = {},
		F = {},
		E = [];
	t.default = y
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}

	function s() {
		m.fadeOut()
	}

	function r() {
		m.fadeIn()
	}

	function i() {
		var e = window.i18n;
		if (m = l("#resetPassword"), m.click(function(e) {
				e.delegateTarget === e.target && s()
			}), window.location.search.length > 0) {
			var t = d.default.parse(window.location.search.substr(1));
			"resetpassword" === t.open && r()
		}
		l("#resetPasswordSubmit").click(function() {
			var t = l("#resetPasswordNewPassword").val(),
				n = l("#resetPasswordNewPassword2").val();
			if (0 === t.length) return void(0, _.message)("error", e.reset_password_empty);
			if (t.length < 6) return void(0, _.message)("error", e.signup_passowrd_check);
			if (t !== n) return void(0, _.message)("error", e.signup_password_error);
			var a = d.default.parse(window.location.search.substr(1)).token;
			(0, u.addLoading)(l(".modal-content", m), !0, !0), l.ajax({
				method: "PUT",
				url: "/reset_passwords/" + a + ".json",
				data: {
					password: t,
					locale: window.locale
				}
			}).done(function(t) {
				(0, u.removeLoading)(m), t.success ? ((0, _.message)("success", e.reset_password_send_success), window.showSignin()) : t.errors && t.errors.forEach(function(e) {
					(0, _.message)("error", e.message)
				})
			})
		})
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var o = n(9),
		d = a(o),
		_ = n(23),
		u = n(22),
		l = window.$,
		m = void 0;
	window.hideResetPassword = s, window.showResetPassword = function() {
		window.hideSignin(), window.hideSignup(), window.hideForgetPassword(), r()
	}, window.destroyForgetPassword = function() {
		m.remove(), window.hideForgetPassword = window.showForgetPassword = function() {}
	}, t.default = i
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}

	function s() {
		h.fadeOut()
	}

	function r() {
		(0, m.changeRucaptcha)(), h.fadeIn()
	}

	function i(e, t, n) {
		var a = "/dashboard";
		if (window.location.search.length > 0) {
			var s = _.default.parse(window.location.search.substr(1));
			s.redirect_to && s.redirect_to.length > 0 && (a = decodeURIComponent(s.redirect_to))
		}(0, l.addLoading)(c(".modal-content", h), !0, !0), c.ajax({
			method: "POST",
			url: "/session.json",
			data: {
				email: e,
				password: t,
				locale: window.locale,
				_rucaptcha: n
			}
		}).done(function(e) {
			return e.success ? void(window.location = a) : (e.errors && e.errors.forEach(function(e) {
				(0, u.message)("error", e.message)
			}), (0, m.changeRucaptcha)(), void(0, l.removeLoading)(h))
		})
	}

	function o() {
		var e = window.i18n;
		if (h = c("#signin"), c(".signin-btn").click(function() {
				window.showSignin()
			}), c(".row.choose button", h).click(function(e) {
				var t = c(e.target);
				if (!t.hasClass("active")) {
					c(".row.choose button", h).removeClass("active"), t.addClass("active");
					var n = t.attr("data-type");
					h.removeClass("email phone").addClass(n)
				}
			}), window.location.search.length > 0) {
			var t = _.default.parse(window.location.search.substr(1));
			"signin" === t.open && r()
		}
		h.click(function(e) {
			e.delegateTarget === e.target && s()
		}), c("#signinSubmit").click(function() {
			var t = h.hasClass("email") ? "email" : "phone",
				n = void 0,
				a = c("#signinArea").val();
			n = "email" === t ? c("#signinEmail").val() : a + c("#signinPhone").val();
			var s = c("#signinPassword").val(),
				r = window.rucaptcha ? c("#signinRucaptcha").val() : " ";
			return 0 === n.length || 0 === s.length || 0 === r.length ? void(0, u.message)("error", e.signin_empty) : "phone" === t && 0 === a.length ? void(0, u.message)("error", e.signin_empty) : void i(n, s, r)
		}), c("#signinArea").change(function() {
			var e = c("#signinArea").val();
			e.length > 0 ? c("#signinPhonePrefix").html("<span>+" + e + "</span>") : c("#signinPhonePrefix").html("")
		})
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.signin = i;
	var d = n(9),
		_ = a(d),
		u = n(23),
		l = n(22),
		m = n(33),
		c = window.$,
		h = void 0;
	window.hideSignin = s, window.showSignin = function() {
		window.hideSignup(), window.hideForgetPassword(), window.hideResetPassword(), r()
	}, window.destroySignin = function() {
		h.remove(), window.hideSignin = window.showSignin = function() {}
	}, t.default = o
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}

	function s() {
		h.ajax({
			url: "https://assets.bitrabbit.com/data/country_code.json",
			cache: !1
		}).done(function(e) {
			e.forEach(function(e) {
				g.push("<option value=" + e.code + ">" + e.name + "(+" + e.code + ")</option>")
			}), h("#signupArea").html('<option value="">' + window.i18n.signup_please_choice + "</option>" + g.join("")), h("#signinArea").html('<option value="">' + window.i18n.signup_please_choice + "</option>" + g.join(""))
		})
	}

	function r() {
		Y.fadeOut()
	}

	function i() {
		(0, c.changeRucaptcha)(), Y.fadeIn()
	}

	function o() {
		var e = h("#signupGetRucaptchaAgain");
		0 === p ? (clearInterval(L), e.addClass("hidden").siblings("#signupGetRucaptcha").removeClass("hidden"), e.find(".residual-time").text("60"), p = 60) : (p -= 1, e.find(".residual-time").text(p))
	}

	function d() {
		var e = window.i18n;
		if (Y = h("#signup"), h(".signup-btn").click(function() {
				window.showSignup()
			}), s(), h("#hasCode").change(function() {
				var e = h("#hasCode").prop("checked");
				e ? h("#signupCodeRow").removeClass("hidden") : (h("#signupCode").val(""), h("#signupCodeRow").addClass("hidden"))
			}), h("#signupByPhone").click(function() {
				h(".email-row").addClass("hidden").find("#signupEmail").val(""), h(".phone-row").removeClass("hidden"), h("#signupByPhone").addClass("hidden").siblings("#signupByEmail").removeClass("hidden")
			}), h("#signupByEmail").click(function() {
				h(".phone-row").addClass("hidden").find("#signupPhone, #signupPhoneRucaptcha").val(""), h(".email-row").removeClass("hidden"), h("#signupByEmail").addClass("hidden").siblings("#signupByPhone").removeClass("hidden")
			}), h("#signupGetRucaptcha").click(function() {
				var t = h("#signupPhone").val(),
					n = h("#signupArea").val();
				return t && n ? isNaN(t) ? void(0, l.message)("error", e.phone_error) : (window.ga("create", "UA-113346386-1", "auto"), window.ga("send", "pageview"), window.ga("send", "event", "Register", "sendSms", "register send sms", 1), void h.ajax({
					method: "POST",
					url: "/web/members/send_sms.json",
					data: {
						phone_number: n + t,
						locale: window.locale,
						_rucaptcha: ""
					}
				}).done(function(t) {
					t.success ? ((0, l.message)("success", e.send_success), h("#signupGetRucaptcha").addClass("hidden"), h("#signupGetRucaptchaAgain").removeClass("hidden"), L = setInterval(o, 1e3)) : t.errors && t.errors.forEach(function(e) {
						(0, l.message)("error", e.message)
					})
				})) : void(0, l.message)("error", e.phone_empty)
			}), window.location.search.length > 0) {
			var t = u.default.parse(window.location.search.substr(1));
			t.code && t.code.length > 0 && (y.code = t.code, h("#hasCode").prop("checked", "checked"), h("#signupCodeRow").removeClass("hidden"), h("#signupCode").val(y.code)), t.activity_id && t.activity_id.length > 0 && (y.activity_id = t.activity_id)
		}
		if (Y.click(function(e) {
				e.delegateTarget === e.target && r()
			}), window.location.search.length > 0) {
			var n = u.default.parse(window.location.search.substr(1));
			"signup" === n.open && i()
		}
		h("#signupSubmit").click(function() {
			var t = h("#signupEmail").val(),
				n = h("#signupPhone").val(),
				a = h("#signupArea").val(),
				s = h(".phone-row").hasClass("hidden"),
				r = h("#signupPhoneRucaptcha").val(),
				i = h("#signupPassword").val(),
				o = h("#signupPassword2").val(),
				d = h("#allowSignup").prop("checked"),
				_ = h("#hasCode").prop("checked"),
				L = h("#signupCode").val(),
				p = h("#countryLimit").prop("checked"),
				g = window.rucaptcha ? h("#signupRucaptcha").val() : " ";
			if (s && (0 === t.length || 0 === i.length || 0 === o.length)) return void(0, l.message)("error", e.signup_empty);
			if (!s && (0 === n.length || 0 === r.length || 0 === i.length || 0 === o.length)) return void(0, l.message)("error", e.signup_empty);
			if (i !== o) return void(0, l.message)("error", e.signup_password_error);
			if (s && !f.test(t)) return void(0, l.message)("error", e.email_error);
			if (!s && !M.test(n)) return void(0, l.message)("error", e.phone_error);
			if (i.length < 6) return void(0, l.message)("error", e.signup_passowrd_check);
			if (!d) return void(0, l.message)("error", e.signup_not_check);
			if (_ && 0 === L.length) return void(0, l.message)("error", e.signup_empty);
			if (!p) return void(0, l.message)("error", e.country_limit);
			var k = {
				phone_number: n ? a + n : void 0,
				verify_code: r,
				email: t,
				password: i,
				password_confirmation: i,
				locale: window.locale,
				_rucaptcha: g
			};
			_ && (k.code = L, k.activity_id = y.activity_id), (0, m.addLoading)(h(".modal-content", Y), !0, !0);
			var v = window.innerWidth < 650 ? "/dashboard#/kyc" : "/dashboard#/account";
			if (window.location.search.length > 0) {
				var w = u.default.parse(window.location.search.substr(1));
				w.redirect_to && w.redirect_to.length > 0 && (v = decodeURIComponent(w.redirect_to))
			}
			n && !t && (window.ga("create", "UA-113346386-1", "auto"), window.ga("send", "pageview"), window.ga("send", "event", "Register", "submit", "register submit", 1)), h.ajax({
				method: "POST",
				url: "/identities.json",
				data: k
			}).done(function(e) {
				return e.success ? (localStorage.setItem("AREA_CODE", a), void(window.location = v)) : (e.errors && e.errors.forEach(function(e) {
					(0, l.message)("error", e.message)
				}), (0, c.changeRucaptcha)(), void(0, m.removeLoading)(Y))
			})
		}), h("#signupArea").change(function() {
			var e = h("#signupArea").val();
			e.length > 0 ? h("#signupPhonePrefix").html("<span>+" + e + "</span>") : h("#signupPhonePrefix").html("")
		})
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var _ = n(9),
		u = a(_),
		l = n(23),
		m = n(22),
		c = n(33),
		h = window.$,
		f = /^[.a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
		M = /^\d+$/,
		y = {},
		L = null,
		p = 60,
		Y = void 0,
		g = [];
	window.hideSignup = r, window.showSignup = function() {
		window.hideSignin(), window.hideForgetPassword(), window.hideResetPassword(), i()
	}, window.destroySignup = function() {
		Y.remove(), window.hideSignup = window.showSignup = function() {}
	}, t.default = d
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}

	function s() {
		_.ajax("/web/vote_markets.json?limit=2").done(function(e) {
			if (e.success) {
				u = e.data;
				var t = d.default.get("voteKind") || {};
				t.brb = u.brb, t.carrot = u.carrot, d.default.set("voteKind", t), d.default.call("init", "brb"), d.default.call("init", "carrot")
			}
		})
	}

	function r() {
		d.default.bind("init", function(e) {
			var t = d.default.get("voteKind")[e][0],
				n = t.name,
				a = t.icon,
				s = t.current,
				r = t.total,
				i = s / r,
				o = (100 * i).toFixed(2),
				u = _(".vote-wrapper").width(),
				l = _('.vote-panel[type="' + e + '"]');
			_(".logo", l).attr("src", a), _(".transaction", l).html("" + n), _(".vote-current", l).html(s), _(".total", l).html(r), _(".process", l).html(o), _(".vote-value", l).width(u * i)
		})
	}

	function i() {
		s(), r()
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), n(304);
	var o = n(75),
		d = a(o),
		_ = window.$,
		u = void 0;
	t.default = i
}, , , , , , function(e, t, n) {
	e.exports = {
		default: n(249),
		__esModule: !0
	}
}, , function(e, t, n) {
	e.exports = {
		default: n(251),
		__esModule: !0
	}
}, function(e, t, n) {
	e.exports = {
		default: n(252),
		__esModule: !0
	}
}, function(e, t, n) {
	e.exports = {
		default: n(253),
		__esModule: !0
	}
}, function(e, t, n) {
	e.exports = {
		default: n(254),
		__esModule: !0
	}
}, function(e, t, n) {
	e.exports = {
		default: n(255),
		__esModule: !0
	}
}, function(e, t) {
	"use strict";
	t.__esModule = !0, t.default = function(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	t.__esModule = !0;
	var s = n(241),
		r = a(s);
	t.default = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var a = t[n];
				a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), (0, r.default)(e, a.key, a)
			}
		}
		return function(t, n, a) {
			return n && e(t.prototype, n), a && e(t, a), t
		}
	}()
}, function(e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	t.__esModule = !0;
	var s = n(244),
		r = a(s),
		i = n(243),
		o = a(i),
		d = "function" == typeof o.default && "symbol" == typeof r.default ? function(e) {
			return typeof e
		} : function(e) {
			return e && "function" == typeof o.default && e.constructor === o.default && e !== o.default.prototype ? "symbol" : typeof e
		};
	t.default = "function" == typeof o.default && "symbol" === d(r.default) ? function(e) {
		return "undefined" == typeof e ? "undefined" : d(e)
	} : function(e) {
		return e && "function" == typeof o.default && e.constructor === o.default && e !== o.default.prototype ? "symbol" : "undefined" == typeof e ? "undefined" : d(e)
	}
}, function(e, t, n) {
	var a, s;
	/*!
	Copyright (c) 2016 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
	*/
	! function() {
		"use strict";

		function n() {
			for (var e = [], t = 0; t < arguments.length; t++) {
				var a = arguments[t];
				if (a) {
					var s = typeof a;
					if ("string" === s || "number" === s) e.push(a);
					else if (Array.isArray(a)) e.push(n.apply(null, a));
					else if ("object" === s)
						for (var i in a) r.call(a, i) && a[i] && e.push(i)
				}
			}
			return e.join(" ")
		}
		var r = {}.hasOwnProperty;
		"undefined" != typeof e && e.exports ? e.exports = n : (a = [], s = function() {
			return n
		}.apply(t, a), !(void 0 !== s && (e.exports = s)))
	}()
}, function(e, t, n) {
	n(87), n(279), e.exports = n(5).Array.from
}, , function(e, t, n) {
	n(281), e.exports = n(5).Object.assign
}, function(e, t, n) {
	n(282);
	var a = n(5).Object;
	e.exports = function(e, t, n) {
		return a.defineProperty(e, t, n)
	}
}, function(e, t, n) {
	n(283), e.exports = n(5).Object.keys
}, function(e, t, n) {
	n(285), n(284), n(286), n(287), e.exports = n(5).Symbol
}, function(e, t, n) {
	n(87), n(288), e.exports = n(52).f("iterator")
}, function(e, t) {
	e.exports = function(e) {
		if ("function" != typeof e) throw TypeError(e + " is not a function!");
		return e
	}
}, function(e, t) {
	e.exports = function() {}
}, function(e, t, n) {
	var a = n(21),
		s = n(86),
		r = n(277);
	e.exports = function(e) {
		return function(t, n, i) {
			var o, d = a(t),
				_ = s(d.length),
				u = r(i, _);
			if (e && n != n) {
				for (; _ > u;)
					if (o = d[u++], o != o) return !0
			} else
				for (; _ > u; u++)
					if ((e || u in d) && d[u] === n) return e || u || 0;
			return !e && -1
		}
	}
}, function(e, t, n) {
	var a = n(41),
		s = n(8)("toStringTag"),
		r = "Arguments" == a(function() {
			return arguments
		}()),
		i = function(e, t) {
			try {
				return e[t]
			} catch (e) {}
		};
	e.exports = function(e) {
		var t, n, o;
		return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof(n = i(t = Object(e), s)) ? n : r ? a(t) : "Object" == (o = a(t)) && "function" == typeof t.callee ? "Arguments" : o
	}
}, function(e, t, n) {
	"use strict";
	var a = n(11),
		s = n(28);
	e.exports = function(e, t, n) {
		t in e ? a.f(e, t, s(0, n)) : e[t] = n
	}
}, function(e, t, n) {
	var a = n(27),
		s = n(45),
		r = n(34);
	e.exports = function(e) {
		var t = a(e),
			n = s.f;
		if (n)
			for (var i, o = n(e), d = r.f, _ = 0; o.length > _;) d.call(e, i = o[_++]) && t.push(i);
		return t
	}
}, function(e, t, n) {
	var a = n(10).document;
	e.exports = a && a.documentElement
}, function(e, t, n) {
	var a = n(26),
		s = n(8)("iterator"),
		r = Array.prototype;
	e.exports = function(e) {
		return void 0 !== e && (a.Array === e || r[s] === e)
	}
}, function(e, t, n) {
	var a = n(41);
	e.exports = Array.isArray || function(e) {
		return "Array" == a(e)
	}
}, function(e, t, n) {
	var a = n(24);
	e.exports = function(e, t, n, s) {
		try {
			return s ? t(a(n)[0], n[1]) : t(n)
		} catch (t) {
			var r = e.return;
			throw void 0 !== r && a(r.call(e)), t
		}
	}
}, function(e, t, n) {
	"use strict";
	var a = n(82),
		s = n(28),
		r = n(46),
		i = {};
	n(20)(i, n(8)("iterator"), function() {
		return this
	}), e.exports = function(e, t, n) {
		e.prototype = a(i, {
			next: s(1, n)
		}), r(e, t + " Iterator")
	}
}, function(e, t, n) {
	var a = n(8)("iterator"),
		s = !1;
	try {
		var r = [7][a]();
		r.return = function() {
			s = !0
		}, Array.from(r, function() {
			throw 2
		})
	} catch (e) {}
	e.exports = function(e, t) {
		if (!t && !s) return !1;
		var n = !1;
		try {
			var r = [7],
				i = r[a]();
			i.next = function() {
				return {
					done: n = !0
				}
			}, r[a] = function() {
				return i
			}, e(r)
		} catch (e) {}
		return n
	}
}, function(e, t) {
	e.exports = function(e, t) {
		return {
			value: t,
			done: !!e
		}
	}
}, function(e, t, n) {
	var a = n(36)("meta"),
		s = n(25),
		r = n(13),
		i = n(11).f,
		o = 0,
		d = Object.isExtensible || function() {
			return !0
		},
		_ = !n(19)(function() {
			return d(Object.preventExtensions({}))
		}),
		u = function(e) {
			i(e, a, {
				value: {
					i: "O" + ++o,
					w: {}
				}
			})
		},
		l = function(e, t) {
			if (!s(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
			if (!r(e, a)) {
				if (!d(e)) return "F";
				if (!t) return "E";
				u(e)
			}
			return e[a].i
		},
		m = function(e, t) {
			if (!r(e, a)) {
				if (!d(e)) return !0;
				if (!t) return !1;
				u(e)
			}
			return e[a].w
		},
		c = function(e) {
			return _ && h.NEED && d(e) && !r(e, a) && u(e), e
		},
		h = e.exports = {
			KEY: a,
			NEED: !1,
			fastKey: l,
			getWeak: m,
			onFreeze: c
		}
}, function(e, t, n) {
	"use strict";
	var a = n(27),
		s = n(45),
		r = n(34),
		i = n(35),
		o = n(80),
		d = Object.assign;
	e.exports = !d || n(19)(function() {
		var e = {},
			t = {},
			n = Symbol(),
			a = "abcdefghijklmnopqrst";
		return e[n] = 7, a.split("").forEach(function(e) {
			t[e] = e
		}), 7 != d({}, e)[n] || Object.keys(d({}, t)).join("") != a
	}) ? function(e, t) {
		for (var n = i(e), d = arguments.length, _ = 1, u = s.f, l = r.f; d > _;)
			for (var m, c = o(arguments[_++]), h = u ? a(c).concat(u(c)) : a(c), f = h.length, M = 0; f > M;) l.call(c, m = h[M++]) && (n[m] = c[m]);
		return n
	} : d
}, function(e, t, n) {
	var a = n(11),
		s = n(24),
		r = n(27);
	e.exports = n(12) ? Object.defineProperties : function(e, t) {
		s(e);
		for (var n, i = r(t), o = i.length, d = 0; o > d;) a.f(e, n = i[d++], t[n]);
		return e
	}
}, function(e, t, n) {
	var a = n(34),
		s = n(28),
		r = n(21),
		i = n(50),
		o = n(13),
		d = n(79),
		_ = Object.getOwnPropertyDescriptor;
	t.f = n(12) ? _ : function(e, t) {
		if (e = r(e), t = i(t, !0), d) try {
			return _(e, t)
		} catch (e) {}
		if (o(e, t)) return s(!a.f.call(e, t), e[t])
	}
}, function(e, t, n) {
	var a = n(21),
		s = n(83).f,
		r = {}.toString,
		i = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
		o = function(e) {
			try {
				return s(e)
			} catch (e) {
				return i.slice()
			}
		};
	e.exports.f = function(e) {
		return i && "[object Window]" == r.call(e) ? o(e) : s(a(e))
	}
}, function(e, t, n) {
	var a = n(13),
		s = n(35),
		r = n(47)("IE_PROTO"),
		i = Object.prototype;
	e.exports = Object.getPrototypeOf || function(e) {
		return e = s(e), a(e, r) ? e[r] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? i : null
	}
}, function(e, t, n) {
	var a = n(18),
		s = n(5),
		r = n(19);
	e.exports = function(e, t) {
		var n = (s.Object || {})[e] || Object[e],
			i = {};
		i[e] = t(n), a(a.S + a.F * r(function() {
			n(1)
		}), "Object", i)
	}
}, function(e, t, n) {
	var a = n(49),
		s = n(42);
	e.exports = function(e) {
		return function(t, n) {
			var r, i, o = String(s(t)),
				d = a(n),
				_ = o.length;
			return d < 0 || d >= _ ? e ? "" : void 0 : (r = o.charCodeAt(d), r < 55296 || r > 56319 || d + 1 === _ || (i = o.charCodeAt(d + 1)) < 56320 || i > 57343 ? e ? o.charAt(d) : r : e ? o.slice(d, d + 2) : (r - 55296 << 10) + (i - 56320) + 65536)
		}
	}
}, function(e, t, n) {
	var a = n(49),
		s = Math.max,
		r = Math.min;
	e.exports = function(e, t) {
		return e = a(e), e < 0 ? s(e + t, 0) : r(e, t)
	}
}, function(e, t, n) {
	var a = n(259),
		s = n(8)("iterator"),
		r = n(26);
	e.exports = n(5).getIteratorMethod = function(e) {
		if (void 0 != e) return e[s] || e["@@iterator"] || r[a(e)]
	}
}, function(e, t, n) {
	"use strict";
	var a = n(77),
		s = n(18),
		r = n(35),
		i = n(265),
		o = n(263),
		d = n(86),
		_ = n(260),
		u = n(278);
	s(s.S + s.F * !n(267)(function(e) {
		Array.from(e)
	}), "Array", {
		from: function(e) {
			var t, n, s, l, m = r(e),
				c = "function" == typeof this ? this : Array,
				h = arguments.length,
				f = h > 1 ? arguments[1] : void 0,
				M = void 0 !== f,
				y = 0,
				L = u(m);
			if (M && (f = a(f, h > 2 ? arguments[2] : void 0, 2)), void 0 == L || c == Array && o(L))
				for (t = d(m.length), n = new c(t); t > y; y++) _(n, y, M ? f(m[y], y) : m[y]);
			else
				for (l = L.call(m), n = new c; !(s = l.next()).done; y++) _(n, y, M ? i(l, f, [s.value, y], !0) : s.value);
			return n.length = y, n
		}
	})
}, function(e, t, n) {
	"use strict";
	var a = n(257),
		s = n(268),
		r = n(26),
		i = n(21);
	e.exports = n(81)(Array, "Array", function(e, t) {
		this._t = i(e), this._i = 0, this._k = t
	}, function() {
		var e = this._t,
			t = this._k,
			n = this._i++;
		return !e || n >= e.length ? (this._t = void 0, s(1)) : "keys" == t ? s(0, n) : "values" == t ? s(0, e[n]) : s(0, [n, e[n]])
	}, "values"), r.Arguments = r.Array, a("keys"), a("values"), a("entries")
}, function(e, t, n) {
	var a = n(18);
	a(a.S + a.F, "Object", {
		assign: n(270)
	})
}, function(e, t, n) {
	var a = n(18);
	a(a.S + a.F * !n(12), "Object", {
		defineProperty: n(11).f
	})
}, function(e, t, n) {
	var a = n(35),
		s = n(27);
	n(275)("keys", function() {
		return function(e) {
			return s(a(e))
		}
	})
}, function(e, t) {}, function(e, t, n) {
	"use strict";
	var a = n(10),
		s = n(13),
		r = n(12),
		i = n(18),
		o = n(85),
		d = n(269).KEY,
		_ = n(19),
		u = n(48),
		l = n(46),
		m = n(36),
		c = n(8),
		h = n(52),
		f = n(51),
		M = n(261),
		y = n(264),
		L = n(24),
		p = n(25),
		Y = n(21),
		g = n(50),
		k = n(28),
		v = n(82),
		w = n(273),
		D = n(272),
		T = n(11),
		b = n(27),
		S = D.f,
		H = T.f,
		j = w.f,
		x = a.Symbol,
		P = a.JSON,
		O = P && P.stringify,
		A = "prototype",
		W = c("_hidden"),
		F = c("toPrimitive"),
		E = {}.propertyIsEnumerable,
		z = u("symbol-registry"),
		C = u("symbols"),
		J = u("op-symbols"),
		R = Object[A],
		N = "function" == typeof x,
		I = a.QObject,
		G = !I || !I[A] || !I[A].findChild,
		U = r && _(function() {
			return 7 != v(H({}, "a", {
				get: function() {
					return H(this, "a", {
						value: 7
					}).a
				}
			})).a
		}) ? function(e, t, n) {
			var a = S(R, t);
			a && delete R[t], H(e, t, n), a && e !== R && H(R, t, a)
		} : H,
		V = function(e) {
			var t = C[e] = v(x[A]);
			return t._k = e, t
		},
		B = N && "symbol" == typeof x.iterator ? function(e) {
			return "symbol" == typeof e
		} : function(e) {
			return e instanceof x
		},
		$ = function(e, t, n) {
			return e === R && $(J, t, n), L(e), t = g(t, !0), L(n), s(C, t) ? (n.enumerable ? (s(e, W) && e[W][t] && (e[W][t] = !1), n = v(n, {
				enumerable: k(0, !1)
			})) : (s(e, W) || H(e, W, k(1, {})), e[W][t] = !0), U(e, t, n)) : H(e, t, n)
		},
		K = function(e, t) {
			L(e);
			for (var n, a = M(t = Y(t)), s = 0, r = a.length; r > s;) $(e, n = a[s++], t[n]);
			return e
		},
		Z = function(e, t) {
			return void 0 === t ? v(e) : K(v(e), t)
		},
		q = function(e) {
			var t = E.call(this, e = g(e, !0));
			return !(this === R && s(C, e) && !s(J, e)) && (!(t || !s(this, e) || !s(C, e) || s(this, W) && this[W][e]) || t)
		},
		Q = function(e, t) {
			if (e = Y(e), t = g(t, !0), e !== R || !s(C, t) || s(J, t)) {
				var n = S(e, t);
				return !n || !s(C, t) || s(e, W) && e[W][t] || (n.enumerable = !0), n
			}
		},
		X = function(e) {
			for (var t, n = j(Y(e)), a = [], r = 0; n.length > r;) s(C, t = n[r++]) || t == W || t == d || a.push(t);
			return a
		},
		ee = function(e) {
			for (var t, n = e === R, a = j(n ? J : Y(e)), r = [], i = 0; a.length > i;) !s(C, t = a[i++]) || n && !s(R, t) || r.push(C[t]);
			return r
		};
	N || (x = function() {
		if (this instanceof x) throw TypeError("Symbol is not a constructor!");
		var e = m(arguments.length > 0 ? arguments[0] : void 0),
			t = function(n) {
				this === R && t.call(J, n), s(this, W) && s(this[W], e) && (this[W][e] = !1), U(this, e, k(1, n))
			};
		return r && G && U(R, e, {
			configurable: !0,
			set: t
		}), V(e)
	}, o(x[A], "toString", function() {
		return this._k
	}), D.f = Q, T.f = $, n(83).f = w.f = X, n(34).f = q, n(45).f = ee, r && !n(44) && o(R, "propertyIsEnumerable", q, !0), h.f = function(e) {
		return V(c(e))
	}), i(i.G + i.W + i.F * !N, {
		Symbol: x
	});
	for (var te = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), ne = 0; te.length > ne;) c(te[ne++]);
	for (var ae = b(c.store), se = 0; ae.length > se;) f(ae[se++]);
	i(i.S + i.F * !N, "Symbol", {
		for: function(e) {
			return s(z, e += "") ? z[e] : z[e] = x(e)
		},
		keyFor: function(e) {
			if (!B(e)) throw TypeError(e + " is not a symbol!");
			for (var t in z)
				if (z[t] === e) return t
		},
		useSetter: function() {
			G = !0
		},
		useSimple: function() {
			G = !1
		}
	}), i(i.S + i.F * !N, "Object", {
		create: Z,
		defineProperty: $,
		defineProperties: K,
		getOwnPropertyDescriptor: Q,
		getOwnPropertyNames: X,
		getOwnPropertySymbols: ee
	}), P && i(i.S + i.F * (!N || _(function() {
		var e = x();
		return "[null]" != O([e]) || "{}" != O({
			a: e
		}) || "{}" != O(Object(e))
	})), "JSON", {
		stringify: function(e) {
			for (var t, n, a = [e], s = 1; arguments.length > s;) a.push(arguments[s++]);
			if (n = t = a[1], (p(t) || void 0 !== e) && !B(e)) return y(t) || (t = function(e, t) {
				if ("function" == typeof n && (t = n.call(this, e, t)), !B(t)) return t
			}), a[1] = t, O.apply(P, a)
		}
	}), x[A][F] || n(20)(x[A], F, x[A].valueOf), l(x, "Symbol"), l(Math, "Math", !0), l(a.JSON, "JSON", !0)
}, function(e, t, n) {
	n(51)("asyncIterator")
}, function(e, t, n) {
	n(51)("observable")
}, function(e, t, n) {
	n(280);
	for (var a = n(10), s = n(20), r = n(26), i = n(8)("toStringTag"), o = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), d = 0; d < o.length; d++) {
		var _ = o[d],
			u = a[_],
			l = u && u.prototype;
		l && !l[i] && s(l, i, _), r[_] = r.Array
	}
}, , , , , , , , , , , function(e, t) {}, 299, 299, 299, 299, 299, , , , , , , , function(e, t) {
	e.exports = {
		polygon: [{
			fill: "#AB823C",
			points: "402.9 541 476.5 600.2 462.5 541.4"
		}, {
			fill: "#F3CA82",
			points: "476.5 600.2 394.4 600.2 402.9 541"
		}, {
			fill: "#F6DAA8",
			points: "342.9 90.3 261.3 94.1 270.3 166"
		}, {
			fill: "#F3CA82",
			points: "270.3 166 333.7 166 342.9 90.3"
		}, {
			fill: "#F3CA82",
			points: "486.1 94.1 414.8 166 472.8 169.8"
		}, {
			fill: "#F6DAA8",
			points: "486.1 94.1 409.6 91.6 414.8 166"
		}, {
			fill: "#F6DAA8",
			points: "523.8 166 215.4 140.1 414.8 212.2"
		}, {
			fill: "#F3CA82",
			points: "414.8 212.2 217.6 222 215.4 140.1"
		}, {
			fill: "#F3CA82",
			points: "486.1 238.1 562.2 271.8 342.9 351.5"
		}, {
			fill: "#E8BB6F",
			points: "479.4 351.5 342.9 351.5 553.8 415.4"
		}, {
			fill: "#E8BB6F",
			points: "245.6 541 306.4 600.2 297.2 542.1"
		}, {
			fill: "#F3CA82",
			points: "236.6 484.2 342.9 215.8 342.9 499.4"
		}, {
			fill: "#C99947",
			points: "342.9 499.4 507.3 544.6 187.8 548.5"
		}, {
			fill: "#F3CA82",
			points: "342.9 499.4 553.8 415.4 507.3 544.6"
		}, {
			fill: "#C99947",
			points: "342.9 351.5 553.8 415.4 459.2 453.1"
		}, {
			fill: "#F6DAA8",
			points: "262.7 219.1 342.9 215.8 236.6 484.2"
		}, {
			fill: "#F6D59B",
			points: "181.8 476.3 342.9 499.4 187.8 548.5"
		}, {
			fill: "#C99947",
			points: "245.6 541 233.2 600.2 306.4 600.2"
		}, {
			fill: "#D6A24B",
			points: "562.2 271.8 479.4 351.5 342.9 351.5"
		}, {
			fill: "#E8BB6F",
			points: "523.8 166 562.2 271.8 414.8 212.2"
		}]
	}
}, function(e, t) {
	e.exports = {
		polygon: [{
			fill: "#ab823c",
			points: "328.7 504.25 207.53 577.28 371.86 580.6 328.7 504.25"
		}, {
			fill: "#f3ca82",
			points: "446.55 627.08 220.81 647 351.94 534.13 446.55 627.08"
		}, {
			fill: "#ffd185",
			points: "434.94 44.45 258.99 59.39 293.84 134.09 434.94 44.45"
		}, {
			fill: "#f6daa8",
			points: "167.69 167.29 293.84 134.09 258.99 59.39 167.69 167.29"
		}, {
			fill: "#e8b051",
			points: "536.19 168.95 373.52 130.77 396.76 215.43 536.19 168.95"
		}, {
			fill: "#f3ca82",
			points: "373.52 130.77 167.69 167.29 396.76 215.43 373.52 130.77"
		}, {
			fill: "#fff1e9",
			points: "167.69 167.29 66.44 256.92 225.79 203.81 167.69 167.29"
		}, {
			fill: "#f3ca82",
			points: "66.44 256.92 162.71 326.64 69.75 308.38 66.44 256.92"
		}, {
			fill: "#f6daa8",
			points: "225.79 203.81 162.71 326.64 66.44 256.92 225.79 203.81"
		}, {
			fill: "#e8bb6f",
			points: "225.79 203.81 239.07 286.8 162.71 326.64 225.79 203.81"
		}, {
			fill: "#d6a24b",
			points: "239.07 286.8 162.71 326.64 222.47 446.15 239.07 286.8"
		}, {
			fill: "#c99947",
			points: "192.59 386.39 164.37 490.97 222.47 446.15 192.59 386.39"
		}, {
			fill: "#f3ca82",
			points: "239.07 286.8 536.19 532.47 272.26 485.99 239.07 286.8"
		}, {
			fill: "#e8bb6f",
			points: "577.69 351.54 579.35 427.89 466.47 429.55 577.69 351.54"
		}, {
			fill: "#f6e2bd",
			points: "479.75 363.16 516.27 311.7 501.33 424.57 479.75 363.16"
		}, {
			fill: "#f6daa8",
			points: "516.27 311.7 577.69 359.84 499.67 422.91 516.27 311.7"
		}, {
			fill: "#f6daa8",
			points: "239.07 286.8 469.79 311.7 536.19 532.47 239.07 286.8"
		}, {
			fill: "#f6d59b",
			points: "516.27 311.7 600.92 324.98 577.69 359.84 516.27 311.7"
		}, {
			fill: "#c99947",
			points: "272.26 485.99 446.55 627.08 536.19 532.47 272.26 485.99"
		}, {
			fill: "#f6daa8",
			points: "239.07 286.8 278.9 489.31 207.53 555.71 239.07 286.8"
		}]
	}
}, function(e, t) {
	e.exports = {
		polygon: [{
			fill: "#AB823C",
			points: "328.7 504.2 207.5 577.3 371.9 580.6"
		}, {
			fill: "#F3CA82",
			points: "446.6 627.1 220.8 647 351.9 534.1"
		}, {
			fill: "#F3CA82",
			points: "434.9 57.5 259 72.4 293.8 147.1"
		}, {
			fill: "#F6DAA8",
			points: "167.7 167.3 293.8 147.1 259 72.4"
		}, {
			fill: "#E8B051",
			points: "534.2 160.9 371.5 122.8 394.8 207.4"
		}, {
			fill: "#F3CA82",
			points: "371.5 122.8 167.7 167.3 394.8 207.4"
		}, {
			fill: "#FFF1E9",
			points: "167.7 167.3 66.4 256.9 225.8 203.8"
		}, {
			fill: "#F3CA82",
			points: "66.4 256.9 162.7 326.6 69.8 308.4"
		}, {
			fill: "#F6DAA8",
			points: "225.8 203.8 162.7 326.6 66.4 256.9"
		}, {
			fill: "#E8BB6F",
			points: "225.8 203.8 239.1 286.8 162.7 326.6"
		}, {
			fill: "#D6A24B",
			points: "239.1 286.8 162.7 326.6 222.5 446.2"
		}, {
			fill: "#C99947",
			points: "192.6 386.4 176 500 222.5 446.2"
		}, {
			fill: "#F3CA82",
			points: "239.1 286.8 536.2 532.5 272.3 486"
		}, {
			fill: "#E8BB6F",
			points: "581 340 584 410 466.5 429.6"
		}, {
			fill: "#F6E2BD",
			points: "479.8 363.2 508.3 306.7 501.3 424.6"
		}, {
			fill: "#F6DAA8",
			points: "508.3 306.7 577.7 359.8 499.7 422.9"
		}, {
			fill: "#F6DAA8",
			points: "239.1 286.8 469.8 311.7 536.2 532.5"
		}, {
			fill: "#F6D59B",
			points: "508.3 306.7 589 315 577.7 359.8"
		}, {
			fill: "#C99947",
			points: "272.3 486 446.6 627.1 536.2 532.5"
		}, {
			fill: "#F6DAA8",
			points: "239.1 286.8 278.9 489.3 196 545"
		}]
	}
}, function(e, t, n) {
	function a(e) {
		return n(s(e))
	}

	function s(e) {
		return r[e] || function() {
			throw new Error("Cannot find module '" + e + "'.")
		}()
	}
	var r = {
		"./af": 88,
		"./af.js": 88,
		"./ar": 95,
		"./ar-dz": 89,
		"./ar-dz.js": 89,
		"./ar-kw": 90,
		"./ar-kw.js": 90,
		"./ar-ly": 91,
		"./ar-ly.js": 91,
		"./ar-ma": 92,
		"./ar-ma.js": 92,
		"./ar-sa": 93,
		"./ar-sa.js": 93,
		"./ar-tn": 94,
		"./ar-tn.js": 94,
		"./ar.js": 95,
		"./az": 96,
		"./az.js": 96,
		"./be": 97,
		"./be.js": 97,
		"./bg": 98,
		"./bg.js": 98,
		"./bm": 99,
		"./bm.js": 99,
		"./bn": 100,
		"./bn.js": 100,
		"./bo": 101,
		"./bo.js": 101,
		"./br": 102,
		"./br.js": 102,
		"./bs": 103,
		"./bs.js": 103,
		"./ca": 104,
		"./ca.js": 104,
		"./cs": 105,
		"./cs.js": 105,
		"./cv": 106,
		"./cv.js": 106,
		"./cy": 107,
		"./cy.js": 107,
		"./da": 108,
		"./da.js": 108,
		"./de": 111,
		"./de-at": 109,
		"./de-at.js": 109,
		"./de-ch": 110,
		"./de-ch.js": 110,
		"./de.js": 111,
		"./dv": 112,
		"./dv.js": 112,
		"./el": 113,
		"./el.js": 113,
		"./en-au": 114,
		"./en-au.js": 114,
		"./en-ca": 115,
		"./en-ca.js": 115,
		"./en-gb": 116,
		"./en-gb.js": 116,
		"./en-ie": 117,
		"./en-ie.js": 117,
		"./en-il": 118,
		"./en-il.js": 118,
		"./en-nz": 119,
		"./en-nz.js": 119,
		"./eo": 120,
		"./eo.js": 120,
		"./es": 123,
		"./es-do": 121,
		"./es-do.js": 121,
		"./es-us": 122,
		"./es-us.js": 122,
		"./es.js": 123,
		"./et": 124,
		"./et.js": 124,
		"./eu": 125,
		"./eu.js": 125,
		"./fa": 126,
		"./fa.js": 126,
		"./fi": 127,
		"./fi.js": 127,
		"./fo": 128,
		"./fo.js": 128,
		"./fr": 131,
		"./fr-ca": 129,
		"./fr-ca.js": 129,
		"./fr-ch": 130,
		"./fr-ch.js": 130,
		"./fr.js": 131,
		"./fy": 132,
		"./fy.js": 132,
		"./gd": 133,
		"./gd.js": 133,
		"./gl": 134,
		"./gl.js": 134,
		"./gom-latn": 135,
		"./gom-latn.js": 135,
		"./gu": 136,
		"./gu.js": 136,
		"./he": 137,
		"./he.js": 137,
		"./hi": 138,
		"./hi.js": 138,
		"./hr": 139,
		"./hr.js": 139,
		"./hu": 140,
		"./hu.js": 140,
		"./hy-am": 141,
		"./hy-am.js": 141,
		"./id": 142,
		"./id.js": 142,
		"./is": 143,
		"./is.js": 143,
		"./it": 144,
		"./it.js": 144,
		"./ja": 145,
		"./ja.js": 145,
		"./jv": 146,
		"./jv.js": 146,
		"./ka": 147,
		"./ka.js": 147,
		"./kk": 148,
		"./kk.js": 148,
		"./km": 149,
		"./km.js": 149,
		"./kn": 150,
		"./kn.js": 150,
		"./ko": 151,
		"./ko.js": 151,
		"./ky": 152,
		"./ky.js": 152,
		"./lb": 153,
		"./lb.js": 153,
		"./lo": 154,
		"./lo.js": 154,
		"./lt": 155,
		"./lt.js": 155,
		"./lv": 156,
		"./lv.js": 156,
		"./me": 157,
		"./me.js": 157,
		"./mi": 158,
		"./mi.js": 158,
		"./mk": 159,
		"./mk.js": 159,
		"./ml": 160,
		"./ml.js": 160,
		"./mn": 161,
		"./mn.js": 161,
		"./mr": 162,
		"./mr.js": 162,
		"./ms": 164,
		"./ms-my": 163,
		"./ms-my.js": 163,
		"./ms.js": 164,
		"./mt": 165,
		"./mt.js": 165,
		"./my": 166,
		"./my.js": 166,
		"./nb": 167,
		"./nb.js": 167,
		"./ne": 168,
		"./ne.js": 168,
		"./nl": 170,
		"./nl-be": 169,
		"./nl-be.js": 169,
		"./nl.js": 170,
		"./nn": 171,
		"./nn.js": 171,
		"./pa-in": 172,
		"./pa-in.js": 172,
		"./pl": 173,
		"./pl.js": 173,
		"./pt": 175,
		"./pt-br": 174,
		"./pt-br.js": 174,
		"./pt.js": 175,
		"./ro": 176,
		"./ro.js": 176,
		"./ru": 177,
		"./ru.js": 177,
		"./sd": 178,
		"./sd.js": 178,
		"./se": 179,
		"./se.js": 179,
		"./si": 180,
		"./si.js": 180,
		"./sk": 181,
		"./sk.js": 181,
		"./sl": 182,
		"./sl.js": 182,
		"./sq": 183,
		"./sq.js": 183,
		"./sr": 185,
		"./sr-cyrl": 184,
		"./sr-cyrl.js": 184,
		"./sr.js": 185,
		"./ss": 186,
		"./ss.js": 186,
		"./sv": 187,
		"./sv.js": 187,
		"./sw": 188,
		"./sw.js": 188,
		"./ta": 189,
		"./ta.js": 189,
		"./te": 190,
		"./te.js": 190,
		"./tet": 191,
		"./tet.js": 191,
		"./tg": 192,
		"./tg.js": 192,
		"./th": 193,
		"./th.js": 193,
		"./tl-ph": 194,
		"./tl-ph.js": 194,
		"./tlh": 195,
		"./tlh.js": 195,
		"./tr": 196,
		"./tr.js": 196,
		"./tzl": 197,
		"./tzl.js": 197,
		"./tzm": 199,
		"./tzm-latn": 198,
		"./tzm-latn.js": 198,
		"./tzm.js": 199,
		"./ug-cn": 200,
		"./ug-cn.js": 200,
		"./uk": 201,
		"./uk.js": 201,
		"./ur": 202,
		"./ur.js": 202,
		"./uz": 204,
		"./uz-latn": 203,
		"./uz-latn.js": 203,
		"./uz.js": 204,
		"./vi": 205,
		"./vi.js": 205,
		"./x-pseudo": 206,
		"./x-pseudo.js": 206,
		"./yo": 207,
		"./yo.js": 207,
		"./zh-cn": 208,
		"./zh-cn.js": 208,
		"./zh-hk": 209,
		"./zh-hk.js": 209,
		"./zh-tw": 210,
		"./zh-tw.js": 210
	};
	a.keys = function() {
		return Object.keys(r)
	}, a.resolve = s, e.exports = a, a.id = 315
}, function(e, t) {
	e.exports = function(e) {
		return e.webpackPolyfill || (e.deprecate = function() {}, e.paths = [], e.children = [], e.webpackPolyfill = 1), e
	}
}]));
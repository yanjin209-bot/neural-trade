function getDefaultExportFromCjs(x2) {
  return x2 && x2.__esModule && Object.prototype.hasOwnProperty.call(x2, "default") ? x2["default"] : x2;
}
var jsxRuntime = { exports: {} };
var reactJsxRuntime_production_min = {};
var react = { exports: {} };
var react_production_min = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredReact_production_min;
function requireReact_production_min() {
  if (hasRequiredReact_production_min) return react_production_min;
  hasRequiredReact_production_min = 1;
  var l2 = Symbol.for("react.element"), n = Symbol.for("react.portal"), p2 = Symbol.for("react.fragment"), q2 = Symbol.for("react.strict_mode"), r2 = Symbol.for("react.profiler"), t = Symbol.for("react.provider"), u2 = Symbol.for("react.context"), v2 = Symbol.for("react.forward_ref"), w2 = Symbol.for("react.suspense"), x2 = Symbol.for("react.memo"), y2 = Symbol.for("react.lazy"), z2 = Symbol.iterator;
  function A2(a2) {
    if (null === a2 || "object" !== typeof a2) return null;
    a2 = z2 && a2[z2] || a2["@@iterator"];
    return "function" === typeof a2 ? a2 : null;
  }
  var B2 = { isMounted: function() {
    return false;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, C2 = Object.assign, D2 = {};
  function E2(a2, b2, e2) {
    this.props = a2;
    this.context = b2;
    this.refs = D2;
    this.updater = e2 || B2;
  }
  E2.prototype.isReactComponent = {};
  E2.prototype.setState = function(a2, b2) {
    if ("object" !== typeof a2 && "function" !== typeof a2 && null != a2) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, a2, b2, "setState");
  };
  E2.prototype.forceUpdate = function(a2) {
    this.updater.enqueueForceUpdate(this, a2, "forceUpdate");
  };
  function F2() {
  }
  F2.prototype = E2.prototype;
  function G2(a2, b2, e2) {
    this.props = a2;
    this.context = b2;
    this.refs = D2;
    this.updater = e2 || B2;
  }
  var H2 = G2.prototype = new F2();
  H2.constructor = G2;
  C2(H2, E2.prototype);
  H2.isPureReactComponent = true;
  var I2 = Array.isArray, J2 = Object.prototype.hasOwnProperty, K2 = { current: null }, L2 = { key: true, ref: true, __self: true, __source: true };
  function M2(a2, b2, e2) {
    var d2, c2 = {}, k2 = null, h2 = null;
    if (null != b2) for (d2 in void 0 !== b2.ref && (h2 = b2.ref), void 0 !== b2.key && (k2 = "" + b2.key), b2) J2.call(b2, d2) && !L2.hasOwnProperty(d2) && (c2[d2] = b2[d2]);
    var g2 = arguments.length - 2;
    if (1 === g2) c2.children = e2;
    else if (1 < g2) {
      for (var f2 = Array(g2), m2 = 0; m2 < g2; m2++) f2[m2] = arguments[m2 + 2];
      c2.children = f2;
    }
    if (a2 && a2.defaultProps) for (d2 in g2 = a2.defaultProps, g2) void 0 === c2[d2] && (c2[d2] = g2[d2]);
    return { $$typeof: l2, type: a2, key: k2, ref: h2, props: c2, _owner: K2.current };
  }
  function N2(a2, b2) {
    return { $$typeof: l2, type: a2.type, key: b2, ref: a2.ref, props: a2.props, _owner: a2._owner };
  }
  function O2(a2) {
    return "object" === typeof a2 && null !== a2 && a2.$$typeof === l2;
  }
  function escape(a2) {
    var b2 = { "=": "=0", ":": "=2" };
    return "$" + a2.replace(/[=:]/g, function(a3) {
      return b2[a3];
    });
  }
  var P2 = /\/+/g;
  function Q2(a2, b2) {
    return "object" === typeof a2 && null !== a2 && null != a2.key ? escape("" + a2.key) : b2.toString(36);
  }
  function R2(a2, b2, e2, d2, c2) {
    var k2 = typeof a2;
    if ("undefined" === k2 || "boolean" === k2) a2 = null;
    var h2 = false;
    if (null === a2) h2 = true;
    else switch (k2) {
      case "string":
      case "number":
        h2 = true;
        break;
      case "object":
        switch (a2.$$typeof) {
          case l2:
          case n:
            h2 = true;
        }
    }
    if (h2) return h2 = a2, c2 = c2(h2), a2 = "" === d2 ? "." + Q2(h2, 0) : d2, I2(c2) ? (e2 = "", null != a2 && (e2 = a2.replace(P2, "$&/") + "/"), R2(c2, b2, e2, "", function(a3) {
      return a3;
    })) : null != c2 && (O2(c2) && (c2 = N2(c2, e2 + (!c2.key || h2 && h2.key === c2.key ? "" : ("" + c2.key).replace(P2, "$&/") + "/") + a2)), b2.push(c2)), 1;
    h2 = 0;
    d2 = "" === d2 ? "." : d2 + ":";
    if (I2(a2)) for (var g2 = 0; g2 < a2.length; g2++) {
      k2 = a2[g2];
      var f2 = d2 + Q2(k2, g2);
      h2 += R2(k2, b2, e2, f2, c2);
    }
    else if (f2 = A2(a2), "function" === typeof f2) for (a2 = f2.call(a2), g2 = 0; !(k2 = a2.next()).done; ) k2 = k2.value, f2 = d2 + Q2(k2, g2++), h2 += R2(k2, b2, e2, f2, c2);
    else if ("object" === k2) throw b2 = String(a2), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b2 ? "object with keys {" + Object.keys(a2).join(", ") + "}" : b2) + "). If you meant to render a collection of children, use an array instead.");
    return h2;
  }
  function S2(a2, b2, e2) {
    if (null == a2) return a2;
    var d2 = [], c2 = 0;
    R2(a2, d2, "", "", function(a3) {
      return b2.call(e2, a3, c2++);
    });
    return d2;
  }
  function T2(a2) {
    if (-1 === a2._status) {
      var b2 = a2._result;
      b2 = b2();
      b2.then(function(b3) {
        if (0 === a2._status || -1 === a2._status) a2._status = 1, a2._result = b3;
      }, function(b3) {
        if (0 === a2._status || -1 === a2._status) a2._status = 2, a2._result = b3;
      });
      -1 === a2._status && (a2._status = 0, a2._result = b2);
    }
    if (1 === a2._status) return a2._result.default;
    throw a2._result;
  }
  var U2 = { current: null }, V2 = { transition: null }, W2 = { ReactCurrentDispatcher: U2, ReactCurrentBatchConfig: V2, ReactCurrentOwner: K2 };
  function X2() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  react_production_min.Children = { map: S2, forEach: function(a2, b2, e2) {
    S2(a2, function() {
      b2.apply(this, arguments);
    }, e2);
  }, count: function(a2) {
    var b2 = 0;
    S2(a2, function() {
      b2++;
    });
    return b2;
  }, toArray: function(a2) {
    return S2(a2, function(a3) {
      return a3;
    }) || [];
  }, only: function(a2) {
    if (!O2(a2)) throw Error("React.Children.only expected to receive a single React element child.");
    return a2;
  } };
  react_production_min.Component = E2;
  react_production_min.Fragment = p2;
  react_production_min.Profiler = r2;
  react_production_min.PureComponent = G2;
  react_production_min.StrictMode = q2;
  react_production_min.Suspense = w2;
  react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W2;
  react_production_min.act = X2;
  react_production_min.cloneElement = function(a2, b2, e2) {
    if (null === a2 || void 0 === a2) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a2 + ".");
    var d2 = C2({}, a2.props), c2 = a2.key, k2 = a2.ref, h2 = a2._owner;
    if (null != b2) {
      void 0 !== b2.ref && (k2 = b2.ref, h2 = K2.current);
      void 0 !== b2.key && (c2 = "" + b2.key);
      if (a2.type && a2.type.defaultProps) var g2 = a2.type.defaultProps;
      for (f2 in b2) J2.call(b2, f2) && !L2.hasOwnProperty(f2) && (d2[f2] = void 0 === b2[f2] && void 0 !== g2 ? g2[f2] : b2[f2]);
    }
    var f2 = arguments.length - 2;
    if (1 === f2) d2.children = e2;
    else if (1 < f2) {
      g2 = Array(f2);
      for (var m2 = 0; m2 < f2; m2++) g2[m2] = arguments[m2 + 2];
      d2.children = g2;
    }
    return { $$typeof: l2, type: a2.type, key: c2, ref: k2, props: d2, _owner: h2 };
  };
  react_production_min.createContext = function(a2) {
    a2 = { $$typeof: u2, _currentValue: a2, _currentValue2: a2, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null };
    a2.Provider = { $$typeof: t, _context: a2 };
    return a2.Consumer = a2;
  };
  react_production_min.createElement = M2;
  react_production_min.createFactory = function(a2) {
    var b2 = M2.bind(null, a2);
    b2.type = a2;
    return b2;
  };
  react_production_min.createRef = function() {
    return { current: null };
  };
  react_production_min.forwardRef = function(a2) {
    return { $$typeof: v2, render: a2 };
  };
  react_production_min.isValidElement = O2;
  react_production_min.lazy = function(a2) {
    return { $$typeof: y2, _payload: { _status: -1, _result: a2 }, _init: T2 };
  };
  react_production_min.memo = function(a2, b2) {
    return { $$typeof: x2, type: a2, compare: void 0 === b2 ? null : b2 };
  };
  react_production_min.startTransition = function(a2) {
    var b2 = V2.transition;
    V2.transition = {};
    try {
      a2();
    } finally {
      V2.transition = b2;
    }
  };
  react_production_min.unstable_act = X2;
  react_production_min.useCallback = function(a2, b2) {
    return U2.current.useCallback(a2, b2);
  };
  react_production_min.useContext = function(a2) {
    return U2.current.useContext(a2);
  };
  react_production_min.useDebugValue = function() {
  };
  react_production_min.useDeferredValue = function(a2) {
    return U2.current.useDeferredValue(a2);
  };
  react_production_min.useEffect = function(a2, b2) {
    return U2.current.useEffect(a2, b2);
  };
  react_production_min.useId = function() {
    return U2.current.useId();
  };
  react_production_min.useImperativeHandle = function(a2, b2, e2) {
    return U2.current.useImperativeHandle(a2, b2, e2);
  };
  react_production_min.useInsertionEffect = function(a2, b2) {
    return U2.current.useInsertionEffect(a2, b2);
  };
  react_production_min.useLayoutEffect = function(a2, b2) {
    return U2.current.useLayoutEffect(a2, b2);
  };
  react_production_min.useMemo = function(a2, b2) {
    return U2.current.useMemo(a2, b2);
  };
  react_production_min.useReducer = function(a2, b2, e2) {
    return U2.current.useReducer(a2, b2, e2);
  };
  react_production_min.useRef = function(a2) {
    return U2.current.useRef(a2);
  };
  react_production_min.useState = function(a2) {
    return U2.current.useState(a2);
  };
  react_production_min.useSyncExternalStore = function(a2, b2, e2) {
    return U2.current.useSyncExternalStore(a2, b2, e2);
  };
  react_production_min.useTransition = function() {
    return U2.current.useTransition();
  };
  react_production_min.version = "18.3.1";
  return react_production_min;
}
var hasRequiredReact;
function requireReact() {
  if (hasRequiredReact) return react.exports;
  hasRequiredReact = 1;
  {
    react.exports = requireReact_production_min();
  }
  return react.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredReactJsxRuntime_production_min;
function requireReactJsxRuntime_production_min() {
  if (hasRequiredReactJsxRuntime_production_min) return reactJsxRuntime_production_min;
  hasRequiredReactJsxRuntime_production_min = 1;
  var f2 = requireReact(), k2 = Symbol.for("react.element"), l2 = Symbol.for("react.fragment"), m2 = Object.prototype.hasOwnProperty, n = f2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p2 = { key: true, ref: true, __self: true, __source: true };
  function q2(c2, a2, g2) {
    var b2, d2 = {}, e2 = null, h2 = null;
    void 0 !== g2 && (e2 = "" + g2);
    void 0 !== a2.key && (e2 = "" + a2.key);
    void 0 !== a2.ref && (h2 = a2.ref);
    for (b2 in a2) m2.call(a2, b2) && !p2.hasOwnProperty(b2) && (d2[b2] = a2[b2]);
    if (c2 && c2.defaultProps) for (b2 in a2 = c2.defaultProps, a2) void 0 === d2[b2] && (d2[b2] = a2[b2]);
    return { $$typeof: k2, type: c2, key: e2, ref: h2, props: d2, _owner: n.current };
  }
  reactJsxRuntime_production_min.Fragment = l2;
  reactJsxRuntime_production_min.jsx = q2;
  reactJsxRuntime_production_min.jsxs = q2;
  return reactJsxRuntime_production_min;
}
var hasRequiredJsxRuntime;
function requireJsxRuntime() {
  if (hasRequiredJsxRuntime) return jsxRuntime.exports;
  hasRequiredJsxRuntime = 1;
  {
    jsxRuntime.exports = requireReactJsxRuntime_production_min();
  }
  return jsxRuntime.exports;
}
var jsxRuntimeExports = requireJsxRuntime();
var reactExports = requireReact();
const React = /* @__PURE__ */ getDefaultExportFromCjs(reactExports);
var client = {};
var reactDom = { exports: {} };
var reactDom_production_min = {};
var scheduler = { exports: {} };
var scheduler_production_min = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredScheduler_production_min;
function requireScheduler_production_min() {
  if (hasRequiredScheduler_production_min) return scheduler_production_min;
  hasRequiredScheduler_production_min = 1;
  (function(exports) {
    function f2(a2, b2) {
      var c2 = a2.length;
      a2.push(b2);
      a: for (; 0 < c2; ) {
        var d2 = c2 - 1 >>> 1, e2 = a2[d2];
        if (0 < g2(e2, b2)) a2[d2] = b2, a2[c2] = e2, c2 = d2;
        else break a;
      }
    }
    function h2(a2) {
      return 0 === a2.length ? null : a2[0];
    }
    function k2(a2) {
      if (0 === a2.length) return null;
      var b2 = a2[0], c2 = a2.pop();
      if (c2 !== b2) {
        a2[0] = c2;
        a: for (var d2 = 0, e2 = a2.length, w2 = e2 >>> 1; d2 < w2; ) {
          var m2 = 2 * (d2 + 1) - 1, C2 = a2[m2], n = m2 + 1, x2 = a2[n];
          if (0 > g2(C2, c2)) n < e2 && 0 > g2(x2, C2) ? (a2[d2] = x2, a2[n] = c2, d2 = n) : (a2[d2] = C2, a2[m2] = c2, d2 = m2);
          else if (n < e2 && 0 > g2(x2, c2)) a2[d2] = x2, a2[n] = c2, d2 = n;
          else break a;
        }
      }
      return b2;
    }
    function g2(a2, b2) {
      var c2 = a2.sortIndex - b2.sortIndex;
      return 0 !== c2 ? c2 : a2.id - b2.id;
    }
    if ("object" === typeof performance && "function" === typeof performance.now) {
      var l2 = performance;
      exports.unstable_now = function() {
        return l2.now();
      };
    } else {
      var p2 = Date, q2 = p2.now();
      exports.unstable_now = function() {
        return p2.now() - q2;
      };
    }
    var r2 = [], t = [], u2 = 1, v2 = null, y2 = 3, z2 = false, A2 = false, B2 = false, D2 = "function" === typeof setTimeout ? setTimeout : null, E2 = "function" === typeof clearTimeout ? clearTimeout : null, F2 = "undefined" !== typeof setImmediate ? setImmediate : null;
    "undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function G2(a2) {
      for (var b2 = h2(t); null !== b2; ) {
        if (null === b2.callback) k2(t);
        else if (b2.startTime <= a2) k2(t), b2.sortIndex = b2.expirationTime, f2(r2, b2);
        else break;
        b2 = h2(t);
      }
    }
    function H2(a2) {
      B2 = false;
      G2(a2);
      if (!A2) if (null !== h2(r2)) A2 = true, I2(J2);
      else {
        var b2 = h2(t);
        null !== b2 && K2(H2, b2.startTime - a2);
      }
    }
    function J2(a2, b2) {
      A2 = false;
      B2 && (B2 = false, E2(L2), L2 = -1);
      z2 = true;
      var c2 = y2;
      try {
        G2(b2);
        for (v2 = h2(r2); null !== v2 && (!(v2.expirationTime > b2) || a2 && !M2()); ) {
          var d2 = v2.callback;
          if ("function" === typeof d2) {
            v2.callback = null;
            y2 = v2.priorityLevel;
            var e2 = d2(v2.expirationTime <= b2);
            b2 = exports.unstable_now();
            "function" === typeof e2 ? v2.callback = e2 : v2 === h2(r2) && k2(r2);
            G2(b2);
          } else k2(r2);
          v2 = h2(r2);
        }
        if (null !== v2) var w2 = true;
        else {
          var m2 = h2(t);
          null !== m2 && K2(H2, m2.startTime - b2);
          w2 = false;
        }
        return w2;
      } finally {
        v2 = null, y2 = c2, z2 = false;
      }
    }
    var N2 = false, O2 = null, L2 = -1, P2 = 5, Q2 = -1;
    function M2() {
      return exports.unstable_now() - Q2 < P2 ? false : true;
    }
    function R2() {
      if (null !== O2) {
        var a2 = exports.unstable_now();
        Q2 = a2;
        var b2 = true;
        try {
          b2 = O2(true, a2);
        } finally {
          b2 ? S2() : (N2 = false, O2 = null);
        }
      } else N2 = false;
    }
    var S2;
    if ("function" === typeof F2) S2 = function() {
      F2(R2);
    };
    else if ("undefined" !== typeof MessageChannel) {
      var T2 = new MessageChannel(), U2 = T2.port2;
      T2.port1.onmessage = R2;
      S2 = function() {
        U2.postMessage(null);
      };
    } else S2 = function() {
      D2(R2, 0);
    };
    function I2(a2) {
      O2 = a2;
      N2 || (N2 = true, S2());
    }
    function K2(a2, b2) {
      L2 = D2(function() {
        a2(exports.unstable_now());
      }, b2);
    }
    exports.unstable_IdlePriority = 5;
    exports.unstable_ImmediatePriority = 1;
    exports.unstable_LowPriority = 4;
    exports.unstable_NormalPriority = 3;
    exports.unstable_Profiling = null;
    exports.unstable_UserBlockingPriority = 2;
    exports.unstable_cancelCallback = function(a2) {
      a2.callback = null;
    };
    exports.unstable_continueExecution = function() {
      A2 || z2 || (A2 = true, I2(J2));
    };
    exports.unstable_forceFrameRate = function(a2) {
      0 > a2 || 125 < a2 ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P2 = 0 < a2 ? Math.floor(1e3 / a2) : 5;
    };
    exports.unstable_getCurrentPriorityLevel = function() {
      return y2;
    };
    exports.unstable_getFirstCallbackNode = function() {
      return h2(r2);
    };
    exports.unstable_next = function(a2) {
      switch (y2) {
        case 1:
        case 2:
        case 3:
          var b2 = 3;
          break;
        default:
          b2 = y2;
      }
      var c2 = y2;
      y2 = b2;
      try {
        return a2();
      } finally {
        y2 = c2;
      }
    };
    exports.unstable_pauseExecution = function() {
    };
    exports.unstable_requestPaint = function() {
    };
    exports.unstable_runWithPriority = function(a2, b2) {
      switch (a2) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          a2 = 3;
      }
      var c2 = y2;
      y2 = a2;
      try {
        return b2();
      } finally {
        y2 = c2;
      }
    };
    exports.unstable_scheduleCallback = function(a2, b2, c2) {
      var d2 = exports.unstable_now();
      "object" === typeof c2 && null !== c2 ? (c2 = c2.delay, c2 = "number" === typeof c2 && 0 < c2 ? d2 + c2 : d2) : c2 = d2;
      switch (a2) {
        case 1:
          var e2 = -1;
          break;
        case 2:
          e2 = 250;
          break;
        case 5:
          e2 = 1073741823;
          break;
        case 4:
          e2 = 1e4;
          break;
        default:
          e2 = 5e3;
      }
      e2 = c2 + e2;
      a2 = { id: u2++, callback: b2, priorityLevel: a2, startTime: c2, expirationTime: e2, sortIndex: -1 };
      c2 > d2 ? (a2.sortIndex = c2, f2(t, a2), null === h2(r2) && a2 === h2(t) && (B2 ? (E2(L2), L2 = -1) : B2 = true, K2(H2, c2 - d2))) : (a2.sortIndex = e2, f2(r2, a2), A2 || z2 || (A2 = true, I2(J2)));
      return a2;
    };
    exports.unstable_shouldYield = M2;
    exports.unstable_wrapCallback = function(a2) {
      var b2 = y2;
      return function() {
        var c2 = y2;
        y2 = b2;
        try {
          return a2.apply(this, arguments);
        } finally {
          y2 = c2;
        }
      };
    };
  })(scheduler_production_min);
  return scheduler_production_min;
}
var hasRequiredScheduler;
function requireScheduler() {
  if (hasRequiredScheduler) return scheduler.exports;
  hasRequiredScheduler = 1;
  {
    scheduler.exports = requireScheduler_production_min();
  }
  return scheduler.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredReactDom_production_min;
function requireReactDom_production_min() {
  if (hasRequiredReactDom_production_min) return reactDom_production_min;
  hasRequiredReactDom_production_min = 1;
  var aa = requireReact(), ca = requireScheduler();
  function p2(a2) {
    for (var b2 = "https://reactjs.org/docs/error-decoder.html?invariant=" + a2, c2 = 1; c2 < arguments.length; c2++) b2 += "&args[]=" + encodeURIComponent(arguments[c2]);
    return "Minified React error #" + a2 + "; visit " + b2 + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var da = /* @__PURE__ */ new Set(), ea = {};
  function fa(a2, b2) {
    ha(a2, b2);
    ha(a2 + "Capture", b2);
  }
  function ha(a2, b2) {
    ea[a2] = b2;
    for (a2 = 0; a2 < b2.length; a2++) da.add(b2[a2]);
  }
  var ia = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement), ja = Object.prototype.hasOwnProperty, ka = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, la = {}, ma = {};
  function oa(a2) {
    if (ja.call(ma, a2)) return true;
    if (ja.call(la, a2)) return false;
    if (ka.test(a2)) return ma[a2] = true;
    la[a2] = true;
    return false;
  }
  function pa(a2, b2, c2, d2) {
    if (null !== c2 && 0 === c2.type) return false;
    switch (typeof b2) {
      case "function":
      case "symbol":
        return true;
      case "boolean":
        if (d2) return false;
        if (null !== c2) return !c2.acceptsBooleans;
        a2 = a2.toLowerCase().slice(0, 5);
        return "data-" !== a2 && "aria-" !== a2;
      default:
        return false;
    }
  }
  function qa(a2, b2, c2, d2) {
    if (null === b2 || "undefined" === typeof b2 || pa(a2, b2, c2, d2)) return true;
    if (d2) return false;
    if (null !== c2) switch (c2.type) {
      case 3:
        return !b2;
      case 4:
        return false === b2;
      case 5:
        return isNaN(b2);
      case 6:
        return isNaN(b2) || 1 > b2;
    }
    return false;
  }
  function v2(a2, b2, c2, d2, e2, f2, g2) {
    this.acceptsBooleans = 2 === b2 || 3 === b2 || 4 === b2;
    this.attributeName = d2;
    this.attributeNamespace = e2;
    this.mustUseProperty = c2;
    this.propertyName = a2;
    this.type = b2;
    this.sanitizeURL = f2;
    this.removeEmptyString = g2;
  }
  var z2 = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a2) {
    z2[a2] = new v2(a2, 0, false, a2, null, false, false);
  });
  [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a2) {
    var b2 = a2[0];
    z2[b2] = new v2(b2, 1, false, a2[1], null, false, false);
  });
  ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a2) {
    z2[a2] = new v2(a2, 2, false, a2.toLowerCase(), null, false, false);
  });
  ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a2) {
    z2[a2] = new v2(a2, 2, false, a2, null, false, false);
  });
  "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a2) {
    z2[a2] = new v2(a2, 3, false, a2.toLowerCase(), null, false, false);
  });
  ["checked", "multiple", "muted", "selected"].forEach(function(a2) {
    z2[a2] = new v2(a2, 3, true, a2, null, false, false);
  });
  ["capture", "download"].forEach(function(a2) {
    z2[a2] = new v2(a2, 4, false, a2, null, false, false);
  });
  ["cols", "rows", "size", "span"].forEach(function(a2) {
    z2[a2] = new v2(a2, 6, false, a2, null, false, false);
  });
  ["rowSpan", "start"].forEach(function(a2) {
    z2[a2] = new v2(a2, 5, false, a2.toLowerCase(), null, false, false);
  });
  var ra = /[\-:]([a-z])/g;
  function sa(a2) {
    return a2[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a2) {
    var b2 = a2.replace(
      ra,
      sa
    );
    z2[b2] = new v2(b2, 1, false, a2, null, false, false);
  });
  "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a2) {
    var b2 = a2.replace(ra, sa);
    z2[b2] = new v2(b2, 1, false, a2, "http://www.w3.org/1999/xlink", false, false);
  });
  ["xml:base", "xml:lang", "xml:space"].forEach(function(a2) {
    var b2 = a2.replace(ra, sa);
    z2[b2] = new v2(b2, 1, false, a2, "http://www.w3.org/XML/1998/namespace", false, false);
  });
  ["tabIndex", "crossOrigin"].forEach(function(a2) {
    z2[a2] = new v2(a2, 1, false, a2.toLowerCase(), null, false, false);
  });
  z2.xlinkHref = new v2("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
  ["src", "href", "action", "formAction"].forEach(function(a2) {
    z2[a2] = new v2(a2, 1, false, a2.toLowerCase(), null, true, true);
  });
  function ta(a2, b2, c2, d2) {
    var e2 = z2.hasOwnProperty(b2) ? z2[b2] : null;
    if (null !== e2 ? 0 !== e2.type : d2 || !(2 < b2.length) || "o" !== b2[0] && "O" !== b2[0] || "n" !== b2[1] && "N" !== b2[1]) qa(b2, c2, e2, d2) && (c2 = null), d2 || null === e2 ? oa(b2) && (null === c2 ? a2.removeAttribute(b2) : a2.setAttribute(b2, "" + c2)) : e2.mustUseProperty ? a2[e2.propertyName] = null === c2 ? 3 === e2.type ? false : "" : c2 : (b2 = e2.attributeName, d2 = e2.attributeNamespace, null === c2 ? a2.removeAttribute(b2) : (e2 = e2.type, c2 = 3 === e2 || 4 === e2 && true === c2 ? "" : "" + c2, d2 ? a2.setAttributeNS(d2, b2, c2) : a2.setAttribute(b2, c2)));
  }
  var ua = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, va = Symbol.for("react.element"), wa = Symbol.for("react.portal"), ya = Symbol.for("react.fragment"), za = Symbol.for("react.strict_mode"), Aa = Symbol.for("react.profiler"), Ba = Symbol.for("react.provider"), Ca = Symbol.for("react.context"), Da = Symbol.for("react.forward_ref"), Ea = Symbol.for("react.suspense"), Fa = Symbol.for("react.suspense_list"), Ga = Symbol.for("react.memo"), Ha = Symbol.for("react.lazy");
  var Ia = Symbol.for("react.offscreen");
  var Ja = Symbol.iterator;
  function Ka(a2) {
    if (null === a2 || "object" !== typeof a2) return null;
    a2 = Ja && a2[Ja] || a2["@@iterator"];
    return "function" === typeof a2 ? a2 : null;
  }
  var A2 = Object.assign, La;
  function Ma(a2) {
    if (void 0 === La) try {
      throw Error();
    } catch (c2) {
      var b2 = c2.stack.trim().match(/\n( *(at )?)/);
      La = b2 && b2[1] || "";
    }
    return "\n" + La + a2;
  }
  var Na = false;
  function Oa(a2, b2) {
    if (!a2 || Na) return "";
    Na = true;
    var c2 = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (b2) if (b2 = function() {
        throw Error();
      }, Object.defineProperty(b2.prototype, "props", { set: function() {
        throw Error();
      } }), "object" === typeof Reflect && Reflect.construct) {
        try {
          Reflect.construct(b2, []);
        } catch (l2) {
          var d2 = l2;
        }
        Reflect.construct(a2, [], b2);
      } else {
        try {
          b2.call();
        } catch (l2) {
          d2 = l2;
        }
        a2.call(b2.prototype);
      }
      else {
        try {
          throw Error();
        } catch (l2) {
          d2 = l2;
        }
        a2();
      }
    } catch (l2) {
      if (l2 && d2 && "string" === typeof l2.stack) {
        for (var e2 = l2.stack.split("\n"), f2 = d2.stack.split("\n"), g2 = e2.length - 1, h2 = f2.length - 1; 1 <= g2 && 0 <= h2 && e2[g2] !== f2[h2]; ) h2--;
        for (; 1 <= g2 && 0 <= h2; g2--, h2--) if (e2[g2] !== f2[h2]) {
          if (1 !== g2 || 1 !== h2) {
            do
              if (g2--, h2--, 0 > h2 || e2[g2] !== f2[h2]) {
                var k2 = "\n" + e2[g2].replace(" at new ", " at ");
                a2.displayName && k2.includes("<anonymous>") && (k2 = k2.replace("<anonymous>", a2.displayName));
                return k2;
              }
            while (1 <= g2 && 0 <= h2);
          }
          break;
        }
      }
    } finally {
      Na = false, Error.prepareStackTrace = c2;
    }
    return (a2 = a2 ? a2.displayName || a2.name : "") ? Ma(a2) : "";
  }
  function Pa(a2) {
    switch (a2.tag) {
      case 5:
        return Ma(a2.type);
      case 16:
        return Ma("Lazy");
      case 13:
        return Ma("Suspense");
      case 19:
        return Ma("SuspenseList");
      case 0:
      case 2:
      case 15:
        return a2 = Oa(a2.type, false), a2;
      case 11:
        return a2 = Oa(a2.type.render, false), a2;
      case 1:
        return a2 = Oa(a2.type, true), a2;
      default:
        return "";
    }
  }
  function Qa(a2) {
    if (null == a2) return null;
    if ("function" === typeof a2) return a2.displayName || a2.name || null;
    if ("string" === typeof a2) return a2;
    switch (a2) {
      case ya:
        return "Fragment";
      case wa:
        return "Portal";
      case Aa:
        return "Profiler";
      case za:
        return "StrictMode";
      case Ea:
        return "Suspense";
      case Fa:
        return "SuspenseList";
    }
    if ("object" === typeof a2) switch (a2.$$typeof) {
      case Ca:
        return (a2.displayName || "Context") + ".Consumer";
      case Ba:
        return (a2._context.displayName || "Context") + ".Provider";
      case Da:
        var b2 = a2.render;
        a2 = a2.displayName;
        a2 || (a2 = b2.displayName || b2.name || "", a2 = "" !== a2 ? "ForwardRef(" + a2 + ")" : "ForwardRef");
        return a2;
      case Ga:
        return b2 = a2.displayName || null, null !== b2 ? b2 : Qa(a2.type) || "Memo";
      case Ha:
        b2 = a2._payload;
        a2 = a2._init;
        try {
          return Qa(a2(b2));
        } catch (c2) {
        }
    }
    return null;
  }
  function Ra(a2) {
    var b2 = a2.type;
    switch (a2.tag) {
      case 24:
        return "Cache";
      case 9:
        return (b2.displayName || "Context") + ".Consumer";
      case 10:
        return (b2._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return a2 = b2.render, a2 = a2.displayName || a2.name || "", b2.displayName || ("" !== a2 ? "ForwardRef(" + a2 + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return b2;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return Qa(b2);
      case 8:
        return b2 === za ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if ("function" === typeof b2) return b2.displayName || b2.name || null;
        if ("string" === typeof b2) return b2;
    }
    return null;
  }
  function Sa(a2) {
    switch (typeof a2) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return a2;
      case "object":
        return a2;
      default:
        return "";
    }
  }
  function Ta(a2) {
    var b2 = a2.type;
    return (a2 = a2.nodeName) && "input" === a2.toLowerCase() && ("checkbox" === b2 || "radio" === b2);
  }
  function Ua(a2) {
    var b2 = Ta(a2) ? "checked" : "value", c2 = Object.getOwnPropertyDescriptor(a2.constructor.prototype, b2), d2 = "" + a2[b2];
    if (!a2.hasOwnProperty(b2) && "undefined" !== typeof c2 && "function" === typeof c2.get && "function" === typeof c2.set) {
      var e2 = c2.get, f2 = c2.set;
      Object.defineProperty(a2, b2, { configurable: true, get: function() {
        return e2.call(this);
      }, set: function(a3) {
        d2 = "" + a3;
        f2.call(this, a3);
      } });
      Object.defineProperty(a2, b2, { enumerable: c2.enumerable });
      return { getValue: function() {
        return d2;
      }, setValue: function(a3) {
        d2 = "" + a3;
      }, stopTracking: function() {
        a2._valueTracker = null;
        delete a2[b2];
      } };
    }
  }
  function Va(a2) {
    a2._valueTracker || (a2._valueTracker = Ua(a2));
  }
  function Wa(a2) {
    if (!a2) return false;
    var b2 = a2._valueTracker;
    if (!b2) return true;
    var c2 = b2.getValue();
    var d2 = "";
    a2 && (d2 = Ta(a2) ? a2.checked ? "true" : "false" : a2.value);
    a2 = d2;
    return a2 !== c2 ? (b2.setValue(a2), true) : false;
  }
  function Xa(a2) {
    a2 = a2 || ("undefined" !== typeof document ? document : void 0);
    if ("undefined" === typeof a2) return null;
    try {
      return a2.activeElement || a2.body;
    } catch (b2) {
      return a2.body;
    }
  }
  function Ya(a2, b2) {
    var c2 = b2.checked;
    return A2({}, b2, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: null != c2 ? c2 : a2._wrapperState.initialChecked });
  }
  function Za(a2, b2) {
    var c2 = null == b2.defaultValue ? "" : b2.defaultValue, d2 = null != b2.checked ? b2.checked : b2.defaultChecked;
    c2 = Sa(null != b2.value ? b2.value : c2);
    a2._wrapperState = { initialChecked: d2, initialValue: c2, controlled: "checkbox" === b2.type || "radio" === b2.type ? null != b2.checked : null != b2.value };
  }
  function ab(a2, b2) {
    b2 = b2.checked;
    null != b2 && ta(a2, "checked", b2, false);
  }
  function bb(a2, b2) {
    ab(a2, b2);
    var c2 = Sa(b2.value), d2 = b2.type;
    if (null != c2) if ("number" === d2) {
      if (0 === c2 && "" === a2.value || a2.value != c2) a2.value = "" + c2;
    } else a2.value !== "" + c2 && (a2.value = "" + c2);
    else if ("submit" === d2 || "reset" === d2) {
      a2.removeAttribute("value");
      return;
    }
    b2.hasOwnProperty("value") ? cb(a2, b2.type, c2) : b2.hasOwnProperty("defaultValue") && cb(a2, b2.type, Sa(b2.defaultValue));
    null == b2.checked && null != b2.defaultChecked && (a2.defaultChecked = !!b2.defaultChecked);
  }
  function db(a2, b2, c2) {
    if (b2.hasOwnProperty("value") || b2.hasOwnProperty("defaultValue")) {
      var d2 = b2.type;
      if (!("submit" !== d2 && "reset" !== d2 || void 0 !== b2.value && null !== b2.value)) return;
      b2 = "" + a2._wrapperState.initialValue;
      c2 || b2 === a2.value || (a2.value = b2);
      a2.defaultValue = b2;
    }
    c2 = a2.name;
    "" !== c2 && (a2.name = "");
    a2.defaultChecked = !!a2._wrapperState.initialChecked;
    "" !== c2 && (a2.name = c2);
  }
  function cb(a2, b2, c2) {
    if ("number" !== b2 || Xa(a2.ownerDocument) !== a2) null == c2 ? a2.defaultValue = "" + a2._wrapperState.initialValue : a2.defaultValue !== "" + c2 && (a2.defaultValue = "" + c2);
  }
  var eb = Array.isArray;
  function fb(a2, b2, c2, d2) {
    a2 = a2.options;
    if (b2) {
      b2 = {};
      for (var e2 = 0; e2 < c2.length; e2++) b2["$" + c2[e2]] = true;
      for (c2 = 0; c2 < a2.length; c2++) e2 = b2.hasOwnProperty("$" + a2[c2].value), a2[c2].selected !== e2 && (a2[c2].selected = e2), e2 && d2 && (a2[c2].defaultSelected = true);
    } else {
      c2 = "" + Sa(c2);
      b2 = null;
      for (e2 = 0; e2 < a2.length; e2++) {
        if (a2[e2].value === c2) {
          a2[e2].selected = true;
          d2 && (a2[e2].defaultSelected = true);
          return;
        }
        null !== b2 || a2[e2].disabled || (b2 = a2[e2]);
      }
      null !== b2 && (b2.selected = true);
    }
  }
  function gb(a2, b2) {
    if (null != b2.dangerouslySetInnerHTML) throw Error(p2(91));
    return A2({}, b2, { value: void 0, defaultValue: void 0, children: "" + a2._wrapperState.initialValue });
  }
  function hb(a2, b2) {
    var c2 = b2.value;
    if (null == c2) {
      c2 = b2.children;
      b2 = b2.defaultValue;
      if (null != c2) {
        if (null != b2) throw Error(p2(92));
        if (eb(c2)) {
          if (1 < c2.length) throw Error(p2(93));
          c2 = c2[0];
        }
        b2 = c2;
      }
      null == b2 && (b2 = "");
      c2 = b2;
    }
    a2._wrapperState = { initialValue: Sa(c2) };
  }
  function ib(a2, b2) {
    var c2 = Sa(b2.value), d2 = Sa(b2.defaultValue);
    null != c2 && (c2 = "" + c2, c2 !== a2.value && (a2.value = c2), null == b2.defaultValue && a2.defaultValue !== c2 && (a2.defaultValue = c2));
    null != d2 && (a2.defaultValue = "" + d2);
  }
  function jb(a2) {
    var b2 = a2.textContent;
    b2 === a2._wrapperState.initialValue && "" !== b2 && null !== b2 && (a2.value = b2);
  }
  function kb(a2) {
    switch (a2) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function lb(a2, b2) {
    return null == a2 || "http://www.w3.org/1999/xhtml" === a2 ? kb(b2) : "http://www.w3.org/2000/svg" === a2 && "foreignObject" === b2 ? "http://www.w3.org/1999/xhtml" : a2;
  }
  var mb, nb = (function(a2) {
    return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(b2, c2, d2, e2) {
      MSApp.execUnsafeLocalFunction(function() {
        return a2(b2, c2, d2, e2);
      });
    } : a2;
  })(function(a2, b2) {
    if ("http://www.w3.org/2000/svg" !== a2.namespaceURI || "innerHTML" in a2) a2.innerHTML = b2;
    else {
      mb = mb || document.createElement("div");
      mb.innerHTML = "<svg>" + b2.valueOf().toString() + "</svg>";
      for (b2 = mb.firstChild; a2.firstChild; ) a2.removeChild(a2.firstChild);
      for (; b2.firstChild; ) a2.appendChild(b2.firstChild);
    }
  });
  function ob(a2, b2) {
    if (b2) {
      var c2 = a2.firstChild;
      if (c2 && c2 === a2.lastChild && 3 === c2.nodeType) {
        c2.nodeValue = b2;
        return;
      }
    }
    a2.textContent = b2;
  }
  var pb = {
    animationIterationCount: true,
    aspectRatio: true,
    borderImageOutset: true,
    borderImageSlice: true,
    borderImageWidth: true,
    boxFlex: true,
    boxFlexGroup: true,
    boxOrdinalGroup: true,
    columnCount: true,
    columns: true,
    flex: true,
    flexGrow: true,
    flexPositive: true,
    flexShrink: true,
    flexNegative: true,
    flexOrder: true,
    gridArea: true,
    gridRow: true,
    gridRowEnd: true,
    gridRowSpan: true,
    gridRowStart: true,
    gridColumn: true,
    gridColumnEnd: true,
    gridColumnSpan: true,
    gridColumnStart: true,
    fontWeight: true,
    lineClamp: true,
    lineHeight: true,
    opacity: true,
    order: true,
    orphans: true,
    tabSize: true,
    widows: true,
    zIndex: true,
    zoom: true,
    fillOpacity: true,
    floodOpacity: true,
    stopOpacity: true,
    strokeDasharray: true,
    strokeDashoffset: true,
    strokeMiterlimit: true,
    strokeOpacity: true,
    strokeWidth: true
  }, qb = ["Webkit", "ms", "Moz", "O"];
  Object.keys(pb).forEach(function(a2) {
    qb.forEach(function(b2) {
      b2 = b2 + a2.charAt(0).toUpperCase() + a2.substring(1);
      pb[b2] = pb[a2];
    });
  });
  function rb(a2, b2, c2) {
    return null == b2 || "boolean" === typeof b2 || "" === b2 ? "" : c2 || "number" !== typeof b2 || 0 === b2 || pb.hasOwnProperty(a2) && pb[a2] ? ("" + b2).trim() : b2 + "px";
  }
  function sb(a2, b2) {
    a2 = a2.style;
    for (var c2 in b2) if (b2.hasOwnProperty(c2)) {
      var d2 = 0 === c2.indexOf("--"), e2 = rb(c2, b2[c2], d2);
      "float" === c2 && (c2 = "cssFloat");
      d2 ? a2.setProperty(c2, e2) : a2[c2] = e2;
    }
  }
  var tb = A2({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
  function ub(a2, b2) {
    if (b2) {
      if (tb[a2] && (null != b2.children || null != b2.dangerouslySetInnerHTML)) throw Error(p2(137, a2));
      if (null != b2.dangerouslySetInnerHTML) {
        if (null != b2.children) throw Error(p2(60));
        if ("object" !== typeof b2.dangerouslySetInnerHTML || !("__html" in b2.dangerouslySetInnerHTML)) throw Error(p2(61));
      }
      if (null != b2.style && "object" !== typeof b2.style) throw Error(p2(62));
    }
  }
  function vb(a2, b2) {
    if (-1 === a2.indexOf("-")) return "string" === typeof b2.is;
    switch (a2) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return false;
      default:
        return true;
    }
  }
  var wb = null;
  function xb(a2) {
    a2 = a2.target || a2.srcElement || window;
    a2.correspondingUseElement && (a2 = a2.correspondingUseElement);
    return 3 === a2.nodeType ? a2.parentNode : a2;
  }
  var yb = null, zb = null, Ab = null;
  function Bb(a2) {
    if (a2 = Cb(a2)) {
      if ("function" !== typeof yb) throw Error(p2(280));
      var b2 = a2.stateNode;
      b2 && (b2 = Db(b2), yb(a2.stateNode, a2.type, b2));
    }
  }
  function Eb(a2) {
    zb ? Ab ? Ab.push(a2) : Ab = [a2] : zb = a2;
  }
  function Fb() {
    if (zb) {
      var a2 = zb, b2 = Ab;
      Ab = zb = null;
      Bb(a2);
      if (b2) for (a2 = 0; a2 < b2.length; a2++) Bb(b2[a2]);
    }
  }
  function Gb(a2, b2) {
    return a2(b2);
  }
  function Hb() {
  }
  var Ib = false;
  function Jb(a2, b2, c2) {
    if (Ib) return a2(b2, c2);
    Ib = true;
    try {
      return Gb(a2, b2, c2);
    } finally {
      if (Ib = false, null !== zb || null !== Ab) Hb(), Fb();
    }
  }
  function Kb(a2, b2) {
    var c2 = a2.stateNode;
    if (null === c2) return null;
    var d2 = Db(c2);
    if (null === d2) return null;
    c2 = d2[b2];
    a: switch (b2) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (d2 = !d2.disabled) || (a2 = a2.type, d2 = !("button" === a2 || "input" === a2 || "select" === a2 || "textarea" === a2));
        a2 = !d2;
        break a;
      default:
        a2 = false;
    }
    if (a2) return null;
    if (c2 && "function" !== typeof c2) throw Error(p2(231, b2, typeof c2));
    return c2;
  }
  var Lb = false;
  if (ia) try {
    var Mb = {};
    Object.defineProperty(Mb, "passive", { get: function() {
      Lb = true;
    } });
    window.addEventListener("test", Mb, Mb);
    window.removeEventListener("test", Mb, Mb);
  } catch (a2) {
    Lb = false;
  }
  function Nb(a2, b2, c2, d2, e2, f2, g2, h2, k2) {
    var l2 = Array.prototype.slice.call(arguments, 3);
    try {
      b2.apply(c2, l2);
    } catch (m2) {
      this.onError(m2);
    }
  }
  var Ob = false, Pb = null, Qb = false, Rb = null, Sb = { onError: function(a2) {
    Ob = true;
    Pb = a2;
  } };
  function Tb(a2, b2, c2, d2, e2, f2, g2, h2, k2) {
    Ob = false;
    Pb = null;
    Nb.apply(Sb, arguments);
  }
  function Ub(a2, b2, c2, d2, e2, f2, g2, h2, k2) {
    Tb.apply(this, arguments);
    if (Ob) {
      if (Ob) {
        var l2 = Pb;
        Ob = false;
        Pb = null;
      } else throw Error(p2(198));
      Qb || (Qb = true, Rb = l2);
    }
  }
  function Vb(a2) {
    var b2 = a2, c2 = a2;
    if (a2.alternate) for (; b2.return; ) b2 = b2.return;
    else {
      a2 = b2;
      do
        b2 = a2, 0 !== (b2.flags & 4098) && (c2 = b2.return), a2 = b2.return;
      while (a2);
    }
    return 3 === b2.tag ? c2 : null;
  }
  function Wb(a2) {
    if (13 === a2.tag) {
      var b2 = a2.memoizedState;
      null === b2 && (a2 = a2.alternate, null !== a2 && (b2 = a2.memoizedState));
      if (null !== b2) return b2.dehydrated;
    }
    return null;
  }
  function Xb(a2) {
    if (Vb(a2) !== a2) throw Error(p2(188));
  }
  function Yb(a2) {
    var b2 = a2.alternate;
    if (!b2) {
      b2 = Vb(a2);
      if (null === b2) throw Error(p2(188));
      return b2 !== a2 ? null : a2;
    }
    for (var c2 = a2, d2 = b2; ; ) {
      var e2 = c2.return;
      if (null === e2) break;
      var f2 = e2.alternate;
      if (null === f2) {
        d2 = e2.return;
        if (null !== d2) {
          c2 = d2;
          continue;
        }
        break;
      }
      if (e2.child === f2.child) {
        for (f2 = e2.child; f2; ) {
          if (f2 === c2) return Xb(e2), a2;
          if (f2 === d2) return Xb(e2), b2;
          f2 = f2.sibling;
        }
        throw Error(p2(188));
      }
      if (c2.return !== d2.return) c2 = e2, d2 = f2;
      else {
        for (var g2 = false, h2 = e2.child; h2; ) {
          if (h2 === c2) {
            g2 = true;
            c2 = e2;
            d2 = f2;
            break;
          }
          if (h2 === d2) {
            g2 = true;
            d2 = e2;
            c2 = f2;
            break;
          }
          h2 = h2.sibling;
        }
        if (!g2) {
          for (h2 = f2.child; h2; ) {
            if (h2 === c2) {
              g2 = true;
              c2 = f2;
              d2 = e2;
              break;
            }
            if (h2 === d2) {
              g2 = true;
              d2 = f2;
              c2 = e2;
              break;
            }
            h2 = h2.sibling;
          }
          if (!g2) throw Error(p2(189));
        }
      }
      if (c2.alternate !== d2) throw Error(p2(190));
    }
    if (3 !== c2.tag) throw Error(p2(188));
    return c2.stateNode.current === c2 ? a2 : b2;
  }
  function Zb(a2) {
    a2 = Yb(a2);
    return null !== a2 ? $b(a2) : null;
  }
  function $b(a2) {
    if (5 === a2.tag || 6 === a2.tag) return a2;
    for (a2 = a2.child; null !== a2; ) {
      var b2 = $b(a2);
      if (null !== b2) return b2;
      a2 = a2.sibling;
    }
    return null;
  }
  var ac = ca.unstable_scheduleCallback, bc = ca.unstable_cancelCallback, cc = ca.unstable_shouldYield, dc = ca.unstable_requestPaint, B2 = ca.unstable_now, ec = ca.unstable_getCurrentPriorityLevel, fc = ca.unstable_ImmediatePriority, gc = ca.unstable_UserBlockingPriority, hc = ca.unstable_NormalPriority, ic = ca.unstable_LowPriority, jc = ca.unstable_IdlePriority, kc = null, lc = null;
  function mc(a2) {
    if (lc && "function" === typeof lc.onCommitFiberRoot) try {
      lc.onCommitFiberRoot(kc, a2, void 0, 128 === (a2.current.flags & 128));
    } catch (b2) {
    }
  }
  var oc = Math.clz32 ? Math.clz32 : nc, pc = Math.log, qc = Math.LN2;
  function nc(a2) {
    a2 >>>= 0;
    return 0 === a2 ? 32 : 31 - (pc(a2) / qc | 0) | 0;
  }
  var rc = 64, sc = 4194304;
  function tc(a2) {
    switch (a2 & -a2) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return a2 & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return a2 & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return a2;
    }
  }
  function uc(a2, b2) {
    var c2 = a2.pendingLanes;
    if (0 === c2) return 0;
    var d2 = 0, e2 = a2.suspendedLanes, f2 = a2.pingedLanes, g2 = c2 & 268435455;
    if (0 !== g2) {
      var h2 = g2 & ~e2;
      0 !== h2 ? d2 = tc(h2) : (f2 &= g2, 0 !== f2 && (d2 = tc(f2)));
    } else g2 = c2 & ~e2, 0 !== g2 ? d2 = tc(g2) : 0 !== f2 && (d2 = tc(f2));
    if (0 === d2) return 0;
    if (0 !== b2 && b2 !== d2 && 0 === (b2 & e2) && (e2 = d2 & -d2, f2 = b2 & -b2, e2 >= f2 || 16 === e2 && 0 !== (f2 & 4194240))) return b2;
    0 !== (d2 & 4) && (d2 |= c2 & 16);
    b2 = a2.entangledLanes;
    if (0 !== b2) for (a2 = a2.entanglements, b2 &= d2; 0 < b2; ) c2 = 31 - oc(b2), e2 = 1 << c2, d2 |= a2[c2], b2 &= ~e2;
    return d2;
  }
  function vc(a2, b2) {
    switch (a2) {
      case 1:
      case 2:
      case 4:
        return b2 + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return b2 + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function wc(a2, b2) {
    for (var c2 = a2.suspendedLanes, d2 = a2.pingedLanes, e2 = a2.expirationTimes, f2 = a2.pendingLanes; 0 < f2; ) {
      var g2 = 31 - oc(f2), h2 = 1 << g2, k2 = e2[g2];
      if (-1 === k2) {
        if (0 === (h2 & c2) || 0 !== (h2 & d2)) e2[g2] = vc(h2, b2);
      } else k2 <= b2 && (a2.expiredLanes |= h2);
      f2 &= ~h2;
    }
  }
  function xc(a2) {
    a2 = a2.pendingLanes & -1073741825;
    return 0 !== a2 ? a2 : a2 & 1073741824 ? 1073741824 : 0;
  }
  function yc() {
    var a2 = rc;
    rc <<= 1;
    0 === (rc & 4194240) && (rc = 64);
    return a2;
  }
  function zc(a2) {
    for (var b2 = [], c2 = 0; 31 > c2; c2++) b2.push(a2);
    return b2;
  }
  function Ac(a2, b2, c2) {
    a2.pendingLanes |= b2;
    536870912 !== b2 && (a2.suspendedLanes = 0, a2.pingedLanes = 0);
    a2 = a2.eventTimes;
    b2 = 31 - oc(b2);
    a2[b2] = c2;
  }
  function Bc(a2, b2) {
    var c2 = a2.pendingLanes & ~b2;
    a2.pendingLanes = b2;
    a2.suspendedLanes = 0;
    a2.pingedLanes = 0;
    a2.expiredLanes &= b2;
    a2.mutableReadLanes &= b2;
    a2.entangledLanes &= b2;
    b2 = a2.entanglements;
    var d2 = a2.eventTimes;
    for (a2 = a2.expirationTimes; 0 < c2; ) {
      var e2 = 31 - oc(c2), f2 = 1 << e2;
      b2[e2] = 0;
      d2[e2] = -1;
      a2[e2] = -1;
      c2 &= ~f2;
    }
  }
  function Cc(a2, b2) {
    var c2 = a2.entangledLanes |= b2;
    for (a2 = a2.entanglements; c2; ) {
      var d2 = 31 - oc(c2), e2 = 1 << d2;
      e2 & b2 | a2[d2] & b2 && (a2[d2] |= b2);
      c2 &= ~e2;
    }
  }
  var C2 = 0;
  function Dc(a2) {
    a2 &= -a2;
    return 1 < a2 ? 4 < a2 ? 0 !== (a2 & 268435455) ? 16 : 536870912 : 4 : 1;
  }
  var Ec, Fc, Gc, Hc, Ic, Jc = false, Kc = [], Lc = null, Mc = null, Nc = null, Oc = /* @__PURE__ */ new Map(), Pc = /* @__PURE__ */ new Map(), Qc = [], Rc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Sc(a2, b2) {
    switch (a2) {
      case "focusin":
      case "focusout":
        Lc = null;
        break;
      case "dragenter":
      case "dragleave":
        Mc = null;
        break;
      case "mouseover":
      case "mouseout":
        Nc = null;
        break;
      case "pointerover":
      case "pointerout":
        Oc.delete(b2.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Pc.delete(b2.pointerId);
    }
  }
  function Tc(a2, b2, c2, d2, e2, f2) {
    if (null === a2 || a2.nativeEvent !== f2) return a2 = { blockedOn: b2, domEventName: c2, eventSystemFlags: d2, nativeEvent: f2, targetContainers: [e2] }, null !== b2 && (b2 = Cb(b2), null !== b2 && Fc(b2)), a2;
    a2.eventSystemFlags |= d2;
    b2 = a2.targetContainers;
    null !== e2 && -1 === b2.indexOf(e2) && b2.push(e2);
    return a2;
  }
  function Uc(a2, b2, c2, d2, e2) {
    switch (b2) {
      case "focusin":
        return Lc = Tc(Lc, a2, b2, c2, d2, e2), true;
      case "dragenter":
        return Mc = Tc(Mc, a2, b2, c2, d2, e2), true;
      case "mouseover":
        return Nc = Tc(Nc, a2, b2, c2, d2, e2), true;
      case "pointerover":
        var f2 = e2.pointerId;
        Oc.set(f2, Tc(Oc.get(f2) || null, a2, b2, c2, d2, e2));
        return true;
      case "gotpointercapture":
        return f2 = e2.pointerId, Pc.set(f2, Tc(Pc.get(f2) || null, a2, b2, c2, d2, e2)), true;
    }
    return false;
  }
  function Vc(a2) {
    var b2 = Wc(a2.target);
    if (null !== b2) {
      var c2 = Vb(b2);
      if (null !== c2) {
        if (b2 = c2.tag, 13 === b2) {
          if (b2 = Wb(c2), null !== b2) {
            a2.blockedOn = b2;
            Ic(a2.priority, function() {
              Gc(c2);
            });
            return;
          }
        } else if (3 === b2 && c2.stateNode.current.memoizedState.isDehydrated) {
          a2.blockedOn = 3 === c2.tag ? c2.stateNode.containerInfo : null;
          return;
        }
      }
    }
    a2.blockedOn = null;
  }
  function Xc(a2) {
    if (null !== a2.blockedOn) return false;
    for (var b2 = a2.targetContainers; 0 < b2.length; ) {
      var c2 = Yc(a2.domEventName, a2.eventSystemFlags, b2[0], a2.nativeEvent);
      if (null === c2) {
        c2 = a2.nativeEvent;
        var d2 = new c2.constructor(c2.type, c2);
        wb = d2;
        c2.target.dispatchEvent(d2);
        wb = null;
      } else return b2 = Cb(c2), null !== b2 && Fc(b2), a2.blockedOn = c2, false;
      b2.shift();
    }
    return true;
  }
  function Zc(a2, b2, c2) {
    Xc(a2) && c2.delete(b2);
  }
  function $c() {
    Jc = false;
    null !== Lc && Xc(Lc) && (Lc = null);
    null !== Mc && Xc(Mc) && (Mc = null);
    null !== Nc && Xc(Nc) && (Nc = null);
    Oc.forEach(Zc);
    Pc.forEach(Zc);
  }
  function ad(a2, b2) {
    a2.blockedOn === b2 && (a2.blockedOn = null, Jc || (Jc = true, ca.unstable_scheduleCallback(ca.unstable_NormalPriority, $c)));
  }
  function bd(a2) {
    function b2(b3) {
      return ad(b3, a2);
    }
    if (0 < Kc.length) {
      ad(Kc[0], a2);
      for (var c2 = 1; c2 < Kc.length; c2++) {
        var d2 = Kc[c2];
        d2.blockedOn === a2 && (d2.blockedOn = null);
      }
    }
    null !== Lc && ad(Lc, a2);
    null !== Mc && ad(Mc, a2);
    null !== Nc && ad(Nc, a2);
    Oc.forEach(b2);
    Pc.forEach(b2);
    for (c2 = 0; c2 < Qc.length; c2++) d2 = Qc[c2], d2.blockedOn === a2 && (d2.blockedOn = null);
    for (; 0 < Qc.length && (c2 = Qc[0], null === c2.blockedOn); ) Vc(c2), null === c2.blockedOn && Qc.shift();
  }
  var cd = ua.ReactCurrentBatchConfig, dd = true;
  function ed(a2, b2, c2, d2) {
    var e2 = C2, f2 = cd.transition;
    cd.transition = null;
    try {
      C2 = 1, fd(a2, b2, c2, d2);
    } finally {
      C2 = e2, cd.transition = f2;
    }
  }
  function gd(a2, b2, c2, d2) {
    var e2 = C2, f2 = cd.transition;
    cd.transition = null;
    try {
      C2 = 4, fd(a2, b2, c2, d2);
    } finally {
      C2 = e2, cd.transition = f2;
    }
  }
  function fd(a2, b2, c2, d2) {
    if (dd) {
      var e2 = Yc(a2, b2, c2, d2);
      if (null === e2) hd(a2, b2, d2, id2, c2), Sc(a2, d2);
      else if (Uc(e2, a2, b2, c2, d2)) d2.stopPropagation();
      else if (Sc(a2, d2), b2 & 4 && -1 < Rc.indexOf(a2)) {
        for (; null !== e2; ) {
          var f2 = Cb(e2);
          null !== f2 && Ec(f2);
          f2 = Yc(a2, b2, c2, d2);
          null === f2 && hd(a2, b2, d2, id2, c2);
          if (f2 === e2) break;
          e2 = f2;
        }
        null !== e2 && d2.stopPropagation();
      } else hd(a2, b2, d2, null, c2);
    }
  }
  var id2 = null;
  function Yc(a2, b2, c2, d2) {
    id2 = null;
    a2 = xb(d2);
    a2 = Wc(a2);
    if (null !== a2) if (b2 = Vb(a2), null === b2) a2 = null;
    else if (c2 = b2.tag, 13 === c2) {
      a2 = Wb(b2);
      if (null !== a2) return a2;
      a2 = null;
    } else if (3 === c2) {
      if (b2.stateNode.current.memoizedState.isDehydrated) return 3 === b2.tag ? b2.stateNode.containerInfo : null;
      a2 = null;
    } else b2 !== a2 && (a2 = null);
    id2 = a2;
    return null;
  }
  function jd(a2) {
    switch (a2) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (ec()) {
          case fc:
            return 1;
          case gc:
            return 4;
          case hc:
          case ic:
            return 16;
          case jc:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var kd = null, ld = null, md = null;
  function nd() {
    if (md) return md;
    var a2, b2 = ld, c2 = b2.length, d2, e2 = "value" in kd ? kd.value : kd.textContent, f2 = e2.length;
    for (a2 = 0; a2 < c2 && b2[a2] === e2[a2]; a2++) ;
    var g2 = c2 - a2;
    for (d2 = 1; d2 <= g2 && b2[c2 - d2] === e2[f2 - d2]; d2++) ;
    return md = e2.slice(a2, 1 < d2 ? 1 - d2 : void 0);
  }
  function od(a2) {
    var b2 = a2.keyCode;
    "charCode" in a2 ? (a2 = a2.charCode, 0 === a2 && 13 === b2 && (a2 = 13)) : a2 = b2;
    10 === a2 && (a2 = 13);
    return 32 <= a2 || 13 === a2 ? a2 : 0;
  }
  function pd() {
    return true;
  }
  function qd() {
    return false;
  }
  function rd(a2) {
    function b2(b3, d2, e2, f2, g2) {
      this._reactName = b3;
      this._targetInst = e2;
      this.type = d2;
      this.nativeEvent = f2;
      this.target = g2;
      this.currentTarget = null;
      for (var c2 in a2) a2.hasOwnProperty(c2) && (b3 = a2[c2], this[c2] = b3 ? b3(f2) : f2[c2]);
      this.isDefaultPrevented = (null != f2.defaultPrevented ? f2.defaultPrevented : false === f2.returnValue) ? pd : qd;
      this.isPropagationStopped = qd;
      return this;
    }
    A2(b2.prototype, { preventDefault: function() {
      this.defaultPrevented = true;
      var a3 = this.nativeEvent;
      a3 && (a3.preventDefault ? a3.preventDefault() : "unknown" !== typeof a3.returnValue && (a3.returnValue = false), this.isDefaultPrevented = pd);
    }, stopPropagation: function() {
      var a3 = this.nativeEvent;
      a3 && (a3.stopPropagation ? a3.stopPropagation() : "unknown" !== typeof a3.cancelBubble && (a3.cancelBubble = true), this.isPropagationStopped = pd);
    }, persist: function() {
    }, isPersistent: pd });
    return b2;
  }
  var sd = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(a2) {
    return a2.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, td = rd(sd), ud = A2({}, sd, { view: 0, detail: 0 }), vd = rd(ud), wd, xd, yd, Ad = A2({}, ud, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zd, button: 0, buttons: 0, relatedTarget: function(a2) {
    return void 0 === a2.relatedTarget ? a2.fromElement === a2.srcElement ? a2.toElement : a2.fromElement : a2.relatedTarget;
  }, movementX: function(a2) {
    if ("movementX" in a2) return a2.movementX;
    a2 !== yd && (yd && "mousemove" === a2.type ? (wd = a2.screenX - yd.screenX, xd = a2.screenY - yd.screenY) : xd = wd = 0, yd = a2);
    return wd;
  }, movementY: function(a2) {
    return "movementY" in a2 ? a2.movementY : xd;
  } }), Bd = rd(Ad), Cd = A2({}, Ad, { dataTransfer: 0 }), Dd = rd(Cd), Ed = A2({}, ud, { relatedTarget: 0 }), Fd = rd(Ed), Gd = A2({}, sd, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Hd = rd(Gd), Id = A2({}, sd, { clipboardData: function(a2) {
    return "clipboardData" in a2 ? a2.clipboardData : window.clipboardData;
  } }), Jd = rd(Id), Kd = A2({}, sd, { data: 0 }), Ld = rd(Kd), Md = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, Nd = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, Od = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Pd(a2) {
    var b2 = this.nativeEvent;
    return b2.getModifierState ? b2.getModifierState(a2) : (a2 = Od[a2]) ? !!b2[a2] : false;
  }
  function zd() {
    return Pd;
  }
  var Qd = A2({}, ud, { key: function(a2) {
    if (a2.key) {
      var b2 = Md[a2.key] || a2.key;
      if ("Unidentified" !== b2) return b2;
    }
    return "keypress" === a2.type ? (a2 = od(a2), 13 === a2 ? "Enter" : String.fromCharCode(a2)) : "keydown" === a2.type || "keyup" === a2.type ? Nd[a2.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zd, charCode: function(a2) {
    return "keypress" === a2.type ? od(a2) : 0;
  }, keyCode: function(a2) {
    return "keydown" === a2.type || "keyup" === a2.type ? a2.keyCode : 0;
  }, which: function(a2) {
    return "keypress" === a2.type ? od(a2) : "keydown" === a2.type || "keyup" === a2.type ? a2.keyCode : 0;
  } }), Rd = rd(Qd), Sd = A2({}, Ad, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Td = rd(Sd), Ud = A2({}, ud, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zd }), Vd = rd(Ud), Wd = A2({}, sd, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Xd = rd(Wd), Yd = A2({}, Ad, {
    deltaX: function(a2) {
      return "deltaX" in a2 ? a2.deltaX : "wheelDeltaX" in a2 ? -a2.wheelDeltaX : 0;
    },
    deltaY: function(a2) {
      return "deltaY" in a2 ? a2.deltaY : "wheelDeltaY" in a2 ? -a2.wheelDeltaY : "wheelDelta" in a2 ? -a2.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Zd = rd(Yd), $d = [9, 13, 27, 32], ae2 = ia && "CompositionEvent" in window, be2 = null;
  ia && "documentMode" in document && (be2 = document.documentMode);
  var ce2 = ia && "TextEvent" in window && !be2, de2 = ia && (!ae2 || be2 && 8 < be2 && 11 >= be2), ee2 = String.fromCharCode(32), fe2 = false;
  function ge2(a2, b2) {
    switch (a2) {
      case "keyup":
        return -1 !== $d.indexOf(b2.keyCode);
      case "keydown":
        return 229 !== b2.keyCode;
      case "keypress":
      case "mousedown":
      case "focusout":
        return true;
      default:
        return false;
    }
  }
  function he2(a2) {
    a2 = a2.detail;
    return "object" === typeof a2 && "data" in a2 ? a2.data : null;
  }
  var ie2 = false;
  function je(a2, b2) {
    switch (a2) {
      case "compositionend":
        return he2(b2);
      case "keypress":
        if (32 !== b2.which) return null;
        fe2 = true;
        return ee2;
      case "textInput":
        return a2 = b2.data, a2 === ee2 && fe2 ? null : a2;
      default:
        return null;
    }
  }
  function ke(a2, b2) {
    if (ie2) return "compositionend" === a2 || !ae2 && ge2(a2, b2) ? (a2 = nd(), md = ld = kd = null, ie2 = false, a2) : null;
    switch (a2) {
      case "paste":
        return null;
      case "keypress":
        if (!(b2.ctrlKey || b2.altKey || b2.metaKey) || b2.ctrlKey && b2.altKey) {
          if (b2.char && 1 < b2.char.length) return b2.char;
          if (b2.which) return String.fromCharCode(b2.which);
        }
        return null;
      case "compositionend":
        return de2 && "ko" !== b2.locale ? null : b2.data;
      default:
        return null;
    }
  }
  var le2 = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
  function me2(a2) {
    var b2 = a2 && a2.nodeName && a2.nodeName.toLowerCase();
    return "input" === b2 ? !!le2[a2.type] : "textarea" === b2 ? true : false;
  }
  function ne2(a2, b2, c2, d2) {
    Eb(d2);
    b2 = oe(b2, "onChange");
    0 < b2.length && (c2 = new td("onChange", "change", null, c2, d2), a2.push({ event: c2, listeners: b2 }));
  }
  var pe2 = null, qe = null;
  function re2(a2) {
    se2(a2, 0);
  }
  function te2(a2) {
    var b2 = ue2(a2);
    if (Wa(b2)) return a2;
  }
  function ve2(a2, b2) {
    if ("change" === a2) return b2;
  }
  var we2 = false;
  if (ia) {
    var xe2;
    if (ia) {
      var ye2 = "oninput" in document;
      if (!ye2) {
        var ze = document.createElement("div");
        ze.setAttribute("oninput", "return;");
        ye2 = "function" === typeof ze.oninput;
      }
      xe2 = ye2;
    } else xe2 = false;
    we2 = xe2 && (!document.documentMode || 9 < document.documentMode);
  }
  function Ae() {
    pe2 && (pe2.detachEvent("onpropertychange", Be), qe = pe2 = null);
  }
  function Be(a2) {
    if ("value" === a2.propertyName && te2(qe)) {
      var b2 = [];
      ne2(b2, qe, a2, xb(a2));
      Jb(re2, b2);
    }
  }
  function Ce2(a2, b2, c2) {
    "focusin" === a2 ? (Ae(), pe2 = b2, qe = c2, pe2.attachEvent("onpropertychange", Be)) : "focusout" === a2 && Ae();
  }
  function De(a2) {
    if ("selectionchange" === a2 || "keyup" === a2 || "keydown" === a2) return te2(qe);
  }
  function Ee(a2, b2) {
    if ("click" === a2) return te2(b2);
  }
  function Fe(a2, b2) {
    if ("input" === a2 || "change" === a2) return te2(b2);
  }
  function Ge(a2, b2) {
    return a2 === b2 && (0 !== a2 || 1 / a2 === 1 / b2) || a2 !== a2 && b2 !== b2;
  }
  var He = "function" === typeof Object.is ? Object.is : Ge;
  function Ie(a2, b2) {
    if (He(a2, b2)) return true;
    if ("object" !== typeof a2 || null === a2 || "object" !== typeof b2 || null === b2) return false;
    var c2 = Object.keys(a2), d2 = Object.keys(b2);
    if (c2.length !== d2.length) return false;
    for (d2 = 0; d2 < c2.length; d2++) {
      var e2 = c2[d2];
      if (!ja.call(b2, e2) || !He(a2[e2], b2[e2])) return false;
    }
    return true;
  }
  function Je2(a2) {
    for (; a2 && a2.firstChild; ) a2 = a2.firstChild;
    return a2;
  }
  function Ke2(a2, b2) {
    var c2 = Je2(a2);
    a2 = 0;
    for (var d2; c2; ) {
      if (3 === c2.nodeType) {
        d2 = a2 + c2.textContent.length;
        if (a2 <= b2 && d2 >= b2) return { node: c2, offset: b2 - a2 };
        a2 = d2;
      }
      a: {
        for (; c2; ) {
          if (c2.nextSibling) {
            c2 = c2.nextSibling;
            break a;
          }
          c2 = c2.parentNode;
        }
        c2 = void 0;
      }
      c2 = Je2(c2);
    }
  }
  function Le(a2, b2) {
    return a2 && b2 ? a2 === b2 ? true : a2 && 3 === a2.nodeType ? false : b2 && 3 === b2.nodeType ? Le(a2, b2.parentNode) : "contains" in a2 ? a2.contains(b2) : a2.compareDocumentPosition ? !!(a2.compareDocumentPosition(b2) & 16) : false : false;
  }
  function Me2() {
    for (var a2 = window, b2 = Xa(); b2 instanceof a2.HTMLIFrameElement; ) {
      try {
        var c2 = "string" === typeof b2.contentWindow.location.href;
      } catch (d2) {
        c2 = false;
      }
      if (c2) a2 = b2.contentWindow;
      else break;
      b2 = Xa(a2.document);
    }
    return b2;
  }
  function Ne(a2) {
    var b2 = a2 && a2.nodeName && a2.nodeName.toLowerCase();
    return b2 && ("input" === b2 && ("text" === a2.type || "search" === a2.type || "tel" === a2.type || "url" === a2.type || "password" === a2.type) || "textarea" === b2 || "true" === a2.contentEditable);
  }
  function Oe(a2) {
    var b2 = Me2(), c2 = a2.focusedElem, d2 = a2.selectionRange;
    if (b2 !== c2 && c2 && c2.ownerDocument && Le(c2.ownerDocument.documentElement, c2)) {
      if (null !== d2 && Ne(c2)) {
        if (b2 = d2.start, a2 = d2.end, void 0 === a2 && (a2 = b2), "selectionStart" in c2) c2.selectionStart = b2, c2.selectionEnd = Math.min(a2, c2.value.length);
        else if (a2 = (b2 = c2.ownerDocument || document) && b2.defaultView || window, a2.getSelection) {
          a2 = a2.getSelection();
          var e2 = c2.textContent.length, f2 = Math.min(d2.start, e2);
          d2 = void 0 === d2.end ? f2 : Math.min(d2.end, e2);
          !a2.extend && f2 > d2 && (e2 = d2, d2 = f2, f2 = e2);
          e2 = Ke2(c2, f2);
          var g2 = Ke2(
            c2,
            d2
          );
          e2 && g2 && (1 !== a2.rangeCount || a2.anchorNode !== e2.node || a2.anchorOffset !== e2.offset || a2.focusNode !== g2.node || a2.focusOffset !== g2.offset) && (b2 = b2.createRange(), b2.setStart(e2.node, e2.offset), a2.removeAllRanges(), f2 > d2 ? (a2.addRange(b2), a2.extend(g2.node, g2.offset)) : (b2.setEnd(g2.node, g2.offset), a2.addRange(b2)));
        }
      }
      b2 = [];
      for (a2 = c2; a2 = a2.parentNode; ) 1 === a2.nodeType && b2.push({ element: a2, left: a2.scrollLeft, top: a2.scrollTop });
      "function" === typeof c2.focus && c2.focus();
      for (c2 = 0; c2 < b2.length; c2++) a2 = b2[c2], a2.element.scrollLeft = a2.left, a2.element.scrollTop = a2.top;
    }
  }
  var Pe = ia && "documentMode" in document && 11 >= document.documentMode, Qe2 = null, Re = null, Se2 = null, Te = false;
  function Ue(a2, b2, c2) {
    var d2 = c2.window === c2 ? c2.document : 9 === c2.nodeType ? c2 : c2.ownerDocument;
    Te || null == Qe2 || Qe2 !== Xa(d2) || (d2 = Qe2, "selectionStart" in d2 && Ne(d2) ? d2 = { start: d2.selectionStart, end: d2.selectionEnd } : (d2 = (d2.ownerDocument && d2.ownerDocument.defaultView || window).getSelection(), d2 = { anchorNode: d2.anchorNode, anchorOffset: d2.anchorOffset, focusNode: d2.focusNode, focusOffset: d2.focusOffset }), Se2 && Ie(Se2, d2) || (Se2 = d2, d2 = oe(Re, "onSelect"), 0 < d2.length && (b2 = new td("onSelect", "select", null, b2, c2), a2.push({ event: b2, listeners: d2 }), b2.target = Qe2)));
  }
  function Ve(a2, b2) {
    var c2 = {};
    c2[a2.toLowerCase()] = b2.toLowerCase();
    c2["Webkit" + a2] = "webkit" + b2;
    c2["Moz" + a2] = "moz" + b2;
    return c2;
  }
  var We = { animationend: Ve("Animation", "AnimationEnd"), animationiteration: Ve("Animation", "AnimationIteration"), animationstart: Ve("Animation", "AnimationStart"), transitionend: Ve("Transition", "TransitionEnd") }, Xe2 = {}, Ye = {};
  ia && (Ye = document.createElement("div").style, "AnimationEvent" in window || (delete We.animationend.animation, delete We.animationiteration.animation, delete We.animationstart.animation), "TransitionEvent" in window || delete We.transitionend.transition);
  function Ze(a2) {
    if (Xe2[a2]) return Xe2[a2];
    if (!We[a2]) return a2;
    var b2 = We[a2], c2;
    for (c2 in b2) if (b2.hasOwnProperty(c2) && c2 in Ye) return Xe2[a2] = b2[c2];
    return a2;
  }
  var $e = Ze("animationend"), af = Ze("animationiteration"), bf = Ze("animationstart"), cf = Ze("transitionend"), df = /* @__PURE__ */ new Map(), ef = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function ff(a2, b2) {
    df.set(a2, b2);
    fa(b2, [a2]);
  }
  for (var gf = 0; gf < ef.length; gf++) {
    var hf = ef[gf], jf = hf.toLowerCase(), kf = hf[0].toUpperCase() + hf.slice(1);
    ff(jf, "on" + kf);
  }
  ff($e, "onAnimationEnd");
  ff(af, "onAnimationIteration");
  ff(bf, "onAnimationStart");
  ff("dblclick", "onDoubleClick");
  ff("focusin", "onFocus");
  ff("focusout", "onBlur");
  ff(cf, "onTransitionEnd");
  ha("onMouseEnter", ["mouseout", "mouseover"]);
  ha("onMouseLeave", ["mouseout", "mouseover"]);
  ha("onPointerEnter", ["pointerout", "pointerover"]);
  ha("onPointerLeave", ["pointerout", "pointerover"]);
  fa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
  fa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
  fa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
  fa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
  fa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
  fa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var lf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), mf = new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
  function nf(a2, b2, c2) {
    var d2 = a2.type || "unknown-event";
    a2.currentTarget = c2;
    Ub(d2, b2, void 0, a2);
    a2.currentTarget = null;
  }
  function se2(a2, b2) {
    b2 = 0 !== (b2 & 4);
    for (var c2 = 0; c2 < a2.length; c2++) {
      var d2 = a2[c2], e2 = d2.event;
      d2 = d2.listeners;
      a: {
        var f2 = void 0;
        if (b2) for (var g2 = d2.length - 1; 0 <= g2; g2--) {
          var h2 = d2[g2], k2 = h2.instance, l2 = h2.currentTarget;
          h2 = h2.listener;
          if (k2 !== f2 && e2.isPropagationStopped()) break a;
          nf(e2, h2, l2);
          f2 = k2;
        }
        else for (g2 = 0; g2 < d2.length; g2++) {
          h2 = d2[g2];
          k2 = h2.instance;
          l2 = h2.currentTarget;
          h2 = h2.listener;
          if (k2 !== f2 && e2.isPropagationStopped()) break a;
          nf(e2, h2, l2);
          f2 = k2;
        }
      }
    }
    if (Qb) throw a2 = Rb, Qb = false, Rb = null, a2;
  }
  function D2(a2, b2) {
    var c2 = b2[of];
    void 0 === c2 && (c2 = b2[of] = /* @__PURE__ */ new Set());
    var d2 = a2 + "__bubble";
    c2.has(d2) || (pf(b2, a2, 2, false), c2.add(d2));
  }
  function qf(a2, b2, c2) {
    var d2 = 0;
    b2 && (d2 |= 4);
    pf(c2, a2, d2, b2);
  }
  var rf = "_reactListening" + Math.random().toString(36).slice(2);
  function sf(a2) {
    if (!a2[rf]) {
      a2[rf] = true;
      da.forEach(function(b3) {
        "selectionchange" !== b3 && (mf.has(b3) || qf(b3, false, a2), qf(b3, true, a2));
      });
      var b2 = 9 === a2.nodeType ? a2 : a2.ownerDocument;
      null === b2 || b2[rf] || (b2[rf] = true, qf("selectionchange", false, b2));
    }
  }
  function pf(a2, b2, c2, d2) {
    switch (jd(b2)) {
      case 1:
        var e2 = ed;
        break;
      case 4:
        e2 = gd;
        break;
      default:
        e2 = fd;
    }
    c2 = e2.bind(null, b2, c2, a2);
    e2 = void 0;
    !Lb || "touchstart" !== b2 && "touchmove" !== b2 && "wheel" !== b2 || (e2 = true);
    d2 ? void 0 !== e2 ? a2.addEventListener(b2, c2, { capture: true, passive: e2 }) : a2.addEventListener(b2, c2, true) : void 0 !== e2 ? a2.addEventListener(b2, c2, { passive: e2 }) : a2.addEventListener(b2, c2, false);
  }
  function hd(a2, b2, c2, d2, e2) {
    var f2 = d2;
    if (0 === (b2 & 1) && 0 === (b2 & 2) && null !== d2) a: for (; ; ) {
      if (null === d2) return;
      var g2 = d2.tag;
      if (3 === g2 || 4 === g2) {
        var h2 = d2.stateNode.containerInfo;
        if (h2 === e2 || 8 === h2.nodeType && h2.parentNode === e2) break;
        if (4 === g2) for (g2 = d2.return; null !== g2; ) {
          var k2 = g2.tag;
          if (3 === k2 || 4 === k2) {
            if (k2 = g2.stateNode.containerInfo, k2 === e2 || 8 === k2.nodeType && k2.parentNode === e2) return;
          }
          g2 = g2.return;
        }
        for (; null !== h2; ) {
          g2 = Wc(h2);
          if (null === g2) return;
          k2 = g2.tag;
          if (5 === k2 || 6 === k2) {
            d2 = f2 = g2;
            continue a;
          }
          h2 = h2.parentNode;
        }
      }
      d2 = d2.return;
    }
    Jb(function() {
      var d3 = f2, e3 = xb(c2), g3 = [];
      a: {
        var h3 = df.get(a2);
        if (void 0 !== h3) {
          var k3 = td, n = a2;
          switch (a2) {
            case "keypress":
              if (0 === od(c2)) break a;
            case "keydown":
            case "keyup":
              k3 = Rd;
              break;
            case "focusin":
              n = "focus";
              k3 = Fd;
              break;
            case "focusout":
              n = "blur";
              k3 = Fd;
              break;
            case "beforeblur":
            case "afterblur":
              k3 = Fd;
              break;
            case "click":
              if (2 === c2.button) break a;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              k3 = Bd;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              k3 = Dd;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              k3 = Vd;
              break;
            case $e:
            case af:
            case bf:
              k3 = Hd;
              break;
            case cf:
              k3 = Xd;
              break;
            case "scroll":
              k3 = vd;
              break;
            case "wheel":
              k3 = Zd;
              break;
            case "copy":
            case "cut":
            case "paste":
              k3 = Jd;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              k3 = Td;
          }
          var t = 0 !== (b2 & 4), J2 = !t && "scroll" === a2, x2 = t ? null !== h3 ? h3 + "Capture" : null : h3;
          t = [];
          for (var w2 = d3, u2; null !== w2; ) {
            u2 = w2;
            var F2 = u2.stateNode;
            5 === u2.tag && null !== F2 && (u2 = F2, null !== x2 && (F2 = Kb(w2, x2), null != F2 && t.push(tf(w2, F2, u2))));
            if (J2) break;
            w2 = w2.return;
          }
          0 < t.length && (h3 = new k3(h3, n, null, c2, e3), g3.push({ event: h3, listeners: t }));
        }
      }
      if (0 === (b2 & 7)) {
        a: {
          h3 = "mouseover" === a2 || "pointerover" === a2;
          k3 = "mouseout" === a2 || "pointerout" === a2;
          if (h3 && c2 !== wb && (n = c2.relatedTarget || c2.fromElement) && (Wc(n) || n[uf])) break a;
          if (k3 || h3) {
            h3 = e3.window === e3 ? e3 : (h3 = e3.ownerDocument) ? h3.defaultView || h3.parentWindow : window;
            if (k3) {
              if (n = c2.relatedTarget || c2.toElement, k3 = d3, n = n ? Wc(n) : null, null !== n && (J2 = Vb(n), n !== J2 || 5 !== n.tag && 6 !== n.tag)) n = null;
            } else k3 = null, n = d3;
            if (k3 !== n) {
              t = Bd;
              F2 = "onMouseLeave";
              x2 = "onMouseEnter";
              w2 = "mouse";
              if ("pointerout" === a2 || "pointerover" === a2) t = Td, F2 = "onPointerLeave", x2 = "onPointerEnter", w2 = "pointer";
              J2 = null == k3 ? h3 : ue2(k3);
              u2 = null == n ? h3 : ue2(n);
              h3 = new t(F2, w2 + "leave", k3, c2, e3);
              h3.target = J2;
              h3.relatedTarget = u2;
              F2 = null;
              Wc(e3) === d3 && (t = new t(x2, w2 + "enter", n, c2, e3), t.target = u2, t.relatedTarget = J2, F2 = t);
              J2 = F2;
              if (k3 && n) b: {
                t = k3;
                x2 = n;
                w2 = 0;
                for (u2 = t; u2; u2 = vf(u2)) w2++;
                u2 = 0;
                for (F2 = x2; F2; F2 = vf(F2)) u2++;
                for (; 0 < w2 - u2; ) t = vf(t), w2--;
                for (; 0 < u2 - w2; ) x2 = vf(x2), u2--;
                for (; w2--; ) {
                  if (t === x2 || null !== x2 && t === x2.alternate) break b;
                  t = vf(t);
                  x2 = vf(x2);
                }
                t = null;
              }
              else t = null;
              null !== k3 && wf(g3, h3, k3, t, false);
              null !== n && null !== J2 && wf(g3, J2, n, t, true);
            }
          }
        }
        a: {
          h3 = d3 ? ue2(d3) : window;
          k3 = h3.nodeName && h3.nodeName.toLowerCase();
          if ("select" === k3 || "input" === k3 && "file" === h3.type) var na = ve2;
          else if (me2(h3)) if (we2) na = Fe;
          else {
            na = De;
            var xa = Ce2;
          }
          else (k3 = h3.nodeName) && "input" === k3.toLowerCase() && ("checkbox" === h3.type || "radio" === h3.type) && (na = Ee);
          if (na && (na = na(a2, d3))) {
            ne2(g3, na, c2, e3);
            break a;
          }
          xa && xa(a2, h3, d3);
          "focusout" === a2 && (xa = h3._wrapperState) && xa.controlled && "number" === h3.type && cb(h3, "number", h3.value);
        }
        xa = d3 ? ue2(d3) : window;
        switch (a2) {
          case "focusin":
            if (me2(xa) || "true" === xa.contentEditable) Qe2 = xa, Re = d3, Se2 = null;
            break;
          case "focusout":
            Se2 = Re = Qe2 = null;
            break;
          case "mousedown":
            Te = true;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Te = false;
            Ue(g3, c2, e3);
            break;
          case "selectionchange":
            if (Pe) break;
          case "keydown":
          case "keyup":
            Ue(g3, c2, e3);
        }
        var $a;
        if (ae2) b: {
          switch (a2) {
            case "compositionstart":
              var ba = "onCompositionStart";
              break b;
            case "compositionend":
              ba = "onCompositionEnd";
              break b;
            case "compositionupdate":
              ba = "onCompositionUpdate";
              break b;
          }
          ba = void 0;
        }
        else ie2 ? ge2(a2, c2) && (ba = "onCompositionEnd") : "keydown" === a2 && 229 === c2.keyCode && (ba = "onCompositionStart");
        ba && (de2 && "ko" !== c2.locale && (ie2 || "onCompositionStart" !== ba ? "onCompositionEnd" === ba && ie2 && ($a = nd()) : (kd = e3, ld = "value" in kd ? kd.value : kd.textContent, ie2 = true)), xa = oe(d3, ba), 0 < xa.length && (ba = new Ld(ba, a2, null, c2, e3), g3.push({ event: ba, listeners: xa }), $a ? ba.data = $a : ($a = he2(c2), null !== $a && (ba.data = $a))));
        if ($a = ce2 ? je(a2, c2) : ke(a2, c2)) d3 = oe(d3, "onBeforeInput"), 0 < d3.length && (e3 = new Ld("onBeforeInput", "beforeinput", null, c2, e3), g3.push({ event: e3, listeners: d3 }), e3.data = $a);
      }
      se2(g3, b2);
    });
  }
  function tf(a2, b2, c2) {
    return { instance: a2, listener: b2, currentTarget: c2 };
  }
  function oe(a2, b2) {
    for (var c2 = b2 + "Capture", d2 = []; null !== a2; ) {
      var e2 = a2, f2 = e2.stateNode;
      5 === e2.tag && null !== f2 && (e2 = f2, f2 = Kb(a2, c2), null != f2 && d2.unshift(tf(a2, f2, e2)), f2 = Kb(a2, b2), null != f2 && d2.push(tf(a2, f2, e2)));
      a2 = a2.return;
    }
    return d2;
  }
  function vf(a2) {
    if (null === a2) return null;
    do
      a2 = a2.return;
    while (a2 && 5 !== a2.tag);
    return a2 ? a2 : null;
  }
  function wf(a2, b2, c2, d2, e2) {
    for (var f2 = b2._reactName, g2 = []; null !== c2 && c2 !== d2; ) {
      var h2 = c2, k2 = h2.alternate, l2 = h2.stateNode;
      if (null !== k2 && k2 === d2) break;
      5 === h2.tag && null !== l2 && (h2 = l2, e2 ? (k2 = Kb(c2, f2), null != k2 && g2.unshift(tf(c2, k2, h2))) : e2 || (k2 = Kb(c2, f2), null != k2 && g2.push(tf(c2, k2, h2))));
      c2 = c2.return;
    }
    0 !== g2.length && a2.push({ event: b2, listeners: g2 });
  }
  var xf = /\r\n?/g, yf = /\u0000|\uFFFD/g;
  function zf(a2) {
    return ("string" === typeof a2 ? a2 : "" + a2).replace(xf, "\n").replace(yf, "");
  }
  function Af(a2, b2, c2) {
    b2 = zf(b2);
    if (zf(a2) !== b2 && c2) throw Error(p2(425));
  }
  function Bf() {
  }
  var Cf = null, Df = null;
  function Ef(a2, b2) {
    return "textarea" === a2 || "noscript" === a2 || "string" === typeof b2.children || "number" === typeof b2.children || "object" === typeof b2.dangerouslySetInnerHTML && null !== b2.dangerouslySetInnerHTML && null != b2.dangerouslySetInnerHTML.__html;
  }
  var Ff = "function" === typeof setTimeout ? setTimeout : void 0, Gf = "function" === typeof clearTimeout ? clearTimeout : void 0, Hf = "function" === typeof Promise ? Promise : void 0, Jf = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof Hf ? function(a2) {
    return Hf.resolve(null).then(a2).catch(If);
  } : Ff;
  function If(a2) {
    setTimeout(function() {
      throw a2;
    });
  }
  function Kf(a2, b2) {
    var c2 = b2, d2 = 0;
    do {
      var e2 = c2.nextSibling;
      a2.removeChild(c2);
      if (e2 && 8 === e2.nodeType) if (c2 = e2.data, "/$" === c2) {
        if (0 === d2) {
          a2.removeChild(e2);
          bd(b2);
          return;
        }
        d2--;
      } else "$" !== c2 && "$?" !== c2 && "$!" !== c2 || d2++;
      c2 = e2;
    } while (c2);
    bd(b2);
  }
  function Lf(a2) {
    for (; null != a2; a2 = a2.nextSibling) {
      var b2 = a2.nodeType;
      if (1 === b2 || 3 === b2) break;
      if (8 === b2) {
        b2 = a2.data;
        if ("$" === b2 || "$!" === b2 || "$?" === b2) break;
        if ("/$" === b2) return null;
      }
    }
    return a2;
  }
  function Mf(a2) {
    a2 = a2.previousSibling;
    for (var b2 = 0; a2; ) {
      if (8 === a2.nodeType) {
        var c2 = a2.data;
        if ("$" === c2 || "$!" === c2 || "$?" === c2) {
          if (0 === b2) return a2;
          b2--;
        } else "/$" === c2 && b2++;
      }
      a2 = a2.previousSibling;
    }
    return null;
  }
  var Nf = Math.random().toString(36).slice(2), Of = "__reactFiber$" + Nf, Pf = "__reactProps$" + Nf, uf = "__reactContainer$" + Nf, of = "__reactEvents$" + Nf, Qf = "__reactListeners$" + Nf, Rf = "__reactHandles$" + Nf;
  function Wc(a2) {
    var b2 = a2[Of];
    if (b2) return b2;
    for (var c2 = a2.parentNode; c2; ) {
      if (b2 = c2[uf] || c2[Of]) {
        c2 = b2.alternate;
        if (null !== b2.child || null !== c2 && null !== c2.child) for (a2 = Mf(a2); null !== a2; ) {
          if (c2 = a2[Of]) return c2;
          a2 = Mf(a2);
        }
        return b2;
      }
      a2 = c2;
      c2 = a2.parentNode;
    }
    return null;
  }
  function Cb(a2) {
    a2 = a2[Of] || a2[uf];
    return !a2 || 5 !== a2.tag && 6 !== a2.tag && 13 !== a2.tag && 3 !== a2.tag ? null : a2;
  }
  function ue2(a2) {
    if (5 === a2.tag || 6 === a2.tag) return a2.stateNode;
    throw Error(p2(33));
  }
  function Db(a2) {
    return a2[Pf] || null;
  }
  var Sf = [], Tf = -1;
  function Uf(a2) {
    return { current: a2 };
  }
  function E2(a2) {
    0 > Tf || (a2.current = Sf[Tf], Sf[Tf] = null, Tf--);
  }
  function G2(a2, b2) {
    Tf++;
    Sf[Tf] = a2.current;
    a2.current = b2;
  }
  var Vf = {}, H2 = Uf(Vf), Wf = Uf(false), Xf = Vf;
  function Yf(a2, b2) {
    var c2 = a2.type.contextTypes;
    if (!c2) return Vf;
    var d2 = a2.stateNode;
    if (d2 && d2.__reactInternalMemoizedUnmaskedChildContext === b2) return d2.__reactInternalMemoizedMaskedChildContext;
    var e2 = {}, f2;
    for (f2 in c2) e2[f2] = b2[f2];
    d2 && (a2 = a2.stateNode, a2.__reactInternalMemoizedUnmaskedChildContext = b2, a2.__reactInternalMemoizedMaskedChildContext = e2);
    return e2;
  }
  function Zf(a2) {
    a2 = a2.childContextTypes;
    return null !== a2 && void 0 !== a2;
  }
  function $f() {
    E2(Wf);
    E2(H2);
  }
  function ag(a2, b2, c2) {
    if (H2.current !== Vf) throw Error(p2(168));
    G2(H2, b2);
    G2(Wf, c2);
  }
  function bg(a2, b2, c2) {
    var d2 = a2.stateNode;
    b2 = b2.childContextTypes;
    if ("function" !== typeof d2.getChildContext) return c2;
    d2 = d2.getChildContext();
    for (var e2 in d2) if (!(e2 in b2)) throw Error(p2(108, Ra(a2) || "Unknown", e2));
    return A2({}, c2, d2);
  }
  function cg(a2) {
    a2 = (a2 = a2.stateNode) && a2.__reactInternalMemoizedMergedChildContext || Vf;
    Xf = H2.current;
    G2(H2, a2);
    G2(Wf, Wf.current);
    return true;
  }
  function dg(a2, b2, c2) {
    var d2 = a2.stateNode;
    if (!d2) throw Error(p2(169));
    c2 ? (a2 = bg(a2, b2, Xf), d2.__reactInternalMemoizedMergedChildContext = a2, E2(Wf), E2(H2), G2(H2, a2)) : E2(Wf);
    G2(Wf, c2);
  }
  var eg = null, fg = false, gg = false;
  function hg(a2) {
    null === eg ? eg = [a2] : eg.push(a2);
  }
  function ig(a2) {
    fg = true;
    hg(a2);
  }
  function jg() {
    if (!gg && null !== eg) {
      gg = true;
      var a2 = 0, b2 = C2;
      try {
        var c2 = eg;
        for (C2 = 1; a2 < c2.length; a2++) {
          var d2 = c2[a2];
          do
            d2 = d2(true);
          while (null !== d2);
        }
        eg = null;
        fg = false;
      } catch (e2) {
        throw null !== eg && (eg = eg.slice(a2 + 1)), ac(fc, jg), e2;
      } finally {
        C2 = b2, gg = false;
      }
    }
    return null;
  }
  var kg = [], lg = 0, mg = null, ng = 0, og = [], pg = 0, qg = null, rg = 1, sg = "";
  function tg(a2, b2) {
    kg[lg++] = ng;
    kg[lg++] = mg;
    mg = a2;
    ng = b2;
  }
  function ug(a2, b2, c2) {
    og[pg++] = rg;
    og[pg++] = sg;
    og[pg++] = qg;
    qg = a2;
    var d2 = rg;
    a2 = sg;
    var e2 = 32 - oc(d2) - 1;
    d2 &= ~(1 << e2);
    c2 += 1;
    var f2 = 32 - oc(b2) + e2;
    if (30 < f2) {
      var g2 = e2 - e2 % 5;
      f2 = (d2 & (1 << g2) - 1).toString(32);
      d2 >>= g2;
      e2 -= g2;
      rg = 1 << 32 - oc(b2) + e2 | c2 << e2 | d2;
      sg = f2 + a2;
    } else rg = 1 << f2 | c2 << e2 | d2, sg = a2;
  }
  function vg(a2) {
    null !== a2.return && (tg(a2, 1), ug(a2, 1, 0));
  }
  function wg(a2) {
    for (; a2 === mg; ) mg = kg[--lg], kg[lg] = null, ng = kg[--lg], kg[lg] = null;
    for (; a2 === qg; ) qg = og[--pg], og[pg] = null, sg = og[--pg], og[pg] = null, rg = og[--pg], og[pg] = null;
  }
  var xg = null, yg = null, I2 = false, zg = null;
  function Ag(a2, b2) {
    var c2 = Bg(5, null, null, 0);
    c2.elementType = "DELETED";
    c2.stateNode = b2;
    c2.return = a2;
    b2 = a2.deletions;
    null === b2 ? (a2.deletions = [c2], a2.flags |= 16) : b2.push(c2);
  }
  function Cg(a2, b2) {
    switch (a2.tag) {
      case 5:
        var c2 = a2.type;
        b2 = 1 !== b2.nodeType || c2.toLowerCase() !== b2.nodeName.toLowerCase() ? null : b2;
        return null !== b2 ? (a2.stateNode = b2, xg = a2, yg = Lf(b2.firstChild), true) : false;
      case 6:
        return b2 = "" === a2.pendingProps || 3 !== b2.nodeType ? null : b2, null !== b2 ? (a2.stateNode = b2, xg = a2, yg = null, true) : false;
      case 13:
        return b2 = 8 !== b2.nodeType ? null : b2, null !== b2 ? (c2 = null !== qg ? { id: rg, overflow: sg } : null, a2.memoizedState = { dehydrated: b2, treeContext: c2, retryLane: 1073741824 }, c2 = Bg(18, null, null, 0), c2.stateNode = b2, c2.return = a2, a2.child = c2, xg = a2, yg = null, true) : false;
      default:
        return false;
    }
  }
  function Dg(a2) {
    return 0 !== (a2.mode & 1) && 0 === (a2.flags & 128);
  }
  function Eg(a2) {
    if (I2) {
      var b2 = yg;
      if (b2) {
        var c2 = b2;
        if (!Cg(a2, b2)) {
          if (Dg(a2)) throw Error(p2(418));
          b2 = Lf(c2.nextSibling);
          var d2 = xg;
          b2 && Cg(a2, b2) ? Ag(d2, c2) : (a2.flags = a2.flags & -4097 | 2, I2 = false, xg = a2);
        }
      } else {
        if (Dg(a2)) throw Error(p2(418));
        a2.flags = a2.flags & -4097 | 2;
        I2 = false;
        xg = a2;
      }
    }
  }
  function Fg(a2) {
    for (a2 = a2.return; null !== a2 && 5 !== a2.tag && 3 !== a2.tag && 13 !== a2.tag; ) a2 = a2.return;
    xg = a2;
  }
  function Gg(a2) {
    if (a2 !== xg) return false;
    if (!I2) return Fg(a2), I2 = true, false;
    var b2;
    (b2 = 3 !== a2.tag) && !(b2 = 5 !== a2.tag) && (b2 = a2.type, b2 = "head" !== b2 && "body" !== b2 && !Ef(a2.type, a2.memoizedProps));
    if (b2 && (b2 = yg)) {
      if (Dg(a2)) throw Hg(), Error(p2(418));
      for (; b2; ) Ag(a2, b2), b2 = Lf(b2.nextSibling);
    }
    Fg(a2);
    if (13 === a2.tag) {
      a2 = a2.memoizedState;
      a2 = null !== a2 ? a2.dehydrated : null;
      if (!a2) throw Error(p2(317));
      a: {
        a2 = a2.nextSibling;
        for (b2 = 0; a2; ) {
          if (8 === a2.nodeType) {
            var c2 = a2.data;
            if ("/$" === c2) {
              if (0 === b2) {
                yg = Lf(a2.nextSibling);
                break a;
              }
              b2--;
            } else "$" !== c2 && "$!" !== c2 && "$?" !== c2 || b2++;
          }
          a2 = a2.nextSibling;
        }
        yg = null;
      }
    } else yg = xg ? Lf(a2.stateNode.nextSibling) : null;
    return true;
  }
  function Hg() {
    for (var a2 = yg; a2; ) a2 = Lf(a2.nextSibling);
  }
  function Ig() {
    yg = xg = null;
    I2 = false;
  }
  function Jg(a2) {
    null === zg ? zg = [a2] : zg.push(a2);
  }
  var Kg = ua.ReactCurrentBatchConfig;
  function Lg(a2, b2, c2) {
    a2 = c2.ref;
    if (null !== a2 && "function" !== typeof a2 && "object" !== typeof a2) {
      if (c2._owner) {
        c2 = c2._owner;
        if (c2) {
          if (1 !== c2.tag) throw Error(p2(309));
          var d2 = c2.stateNode;
        }
        if (!d2) throw Error(p2(147, a2));
        var e2 = d2, f2 = "" + a2;
        if (null !== b2 && null !== b2.ref && "function" === typeof b2.ref && b2.ref._stringRef === f2) return b2.ref;
        b2 = function(a3) {
          var b3 = e2.refs;
          null === a3 ? delete b3[f2] : b3[f2] = a3;
        };
        b2._stringRef = f2;
        return b2;
      }
      if ("string" !== typeof a2) throw Error(p2(284));
      if (!c2._owner) throw Error(p2(290, a2));
    }
    return a2;
  }
  function Mg(a2, b2) {
    a2 = Object.prototype.toString.call(b2);
    throw Error(p2(31, "[object Object]" === a2 ? "object with keys {" + Object.keys(b2).join(", ") + "}" : a2));
  }
  function Ng(a2) {
    var b2 = a2._init;
    return b2(a2._payload);
  }
  function Og(a2) {
    function b2(b3, c3) {
      if (a2) {
        var d3 = b3.deletions;
        null === d3 ? (b3.deletions = [c3], b3.flags |= 16) : d3.push(c3);
      }
    }
    function c2(c3, d3) {
      if (!a2) return null;
      for (; null !== d3; ) b2(c3, d3), d3 = d3.sibling;
      return null;
    }
    function d2(a3, b3) {
      for (a3 = /* @__PURE__ */ new Map(); null !== b3; ) null !== b3.key ? a3.set(b3.key, b3) : a3.set(b3.index, b3), b3 = b3.sibling;
      return a3;
    }
    function e2(a3, b3) {
      a3 = Pg(a3, b3);
      a3.index = 0;
      a3.sibling = null;
      return a3;
    }
    function f2(b3, c3, d3) {
      b3.index = d3;
      if (!a2) return b3.flags |= 1048576, c3;
      d3 = b3.alternate;
      if (null !== d3) return d3 = d3.index, d3 < c3 ? (b3.flags |= 2, c3) : d3;
      b3.flags |= 2;
      return c3;
    }
    function g2(b3) {
      a2 && null === b3.alternate && (b3.flags |= 2);
      return b3;
    }
    function h2(a3, b3, c3, d3) {
      if (null === b3 || 6 !== b3.tag) return b3 = Qg(c3, a3.mode, d3), b3.return = a3, b3;
      b3 = e2(b3, c3);
      b3.return = a3;
      return b3;
    }
    function k2(a3, b3, c3, d3) {
      var f3 = c3.type;
      if (f3 === ya) return m2(a3, b3, c3.props.children, d3, c3.key);
      if (null !== b3 && (b3.elementType === f3 || "object" === typeof f3 && null !== f3 && f3.$$typeof === Ha && Ng(f3) === b3.type)) return d3 = e2(b3, c3.props), d3.ref = Lg(a3, b3, c3), d3.return = a3, d3;
      d3 = Rg(c3.type, c3.key, c3.props, null, a3.mode, d3);
      d3.ref = Lg(a3, b3, c3);
      d3.return = a3;
      return d3;
    }
    function l2(a3, b3, c3, d3) {
      if (null === b3 || 4 !== b3.tag || b3.stateNode.containerInfo !== c3.containerInfo || b3.stateNode.implementation !== c3.implementation) return b3 = Sg(c3, a3.mode, d3), b3.return = a3, b3;
      b3 = e2(b3, c3.children || []);
      b3.return = a3;
      return b3;
    }
    function m2(a3, b3, c3, d3, f3) {
      if (null === b3 || 7 !== b3.tag) return b3 = Tg(c3, a3.mode, d3, f3), b3.return = a3, b3;
      b3 = e2(b3, c3);
      b3.return = a3;
      return b3;
    }
    function q2(a3, b3, c3) {
      if ("string" === typeof b3 && "" !== b3 || "number" === typeof b3) return b3 = Qg("" + b3, a3.mode, c3), b3.return = a3, b3;
      if ("object" === typeof b3 && null !== b3) {
        switch (b3.$$typeof) {
          case va:
            return c3 = Rg(b3.type, b3.key, b3.props, null, a3.mode, c3), c3.ref = Lg(a3, null, b3), c3.return = a3, c3;
          case wa:
            return b3 = Sg(b3, a3.mode, c3), b3.return = a3, b3;
          case Ha:
            var d3 = b3._init;
            return q2(a3, d3(b3._payload), c3);
        }
        if (eb(b3) || Ka(b3)) return b3 = Tg(b3, a3.mode, c3, null), b3.return = a3, b3;
        Mg(a3, b3);
      }
      return null;
    }
    function r2(a3, b3, c3, d3) {
      var e3 = null !== b3 ? b3.key : null;
      if ("string" === typeof c3 && "" !== c3 || "number" === typeof c3) return null !== e3 ? null : h2(a3, b3, "" + c3, d3);
      if ("object" === typeof c3 && null !== c3) {
        switch (c3.$$typeof) {
          case va:
            return c3.key === e3 ? k2(a3, b3, c3, d3) : null;
          case wa:
            return c3.key === e3 ? l2(a3, b3, c3, d3) : null;
          case Ha:
            return e3 = c3._init, r2(
              a3,
              b3,
              e3(c3._payload),
              d3
            );
        }
        if (eb(c3) || Ka(c3)) return null !== e3 ? null : m2(a3, b3, c3, d3, null);
        Mg(a3, c3);
      }
      return null;
    }
    function y2(a3, b3, c3, d3, e3) {
      if ("string" === typeof d3 && "" !== d3 || "number" === typeof d3) return a3 = a3.get(c3) || null, h2(b3, a3, "" + d3, e3);
      if ("object" === typeof d3 && null !== d3) {
        switch (d3.$$typeof) {
          case va:
            return a3 = a3.get(null === d3.key ? c3 : d3.key) || null, k2(b3, a3, d3, e3);
          case wa:
            return a3 = a3.get(null === d3.key ? c3 : d3.key) || null, l2(b3, a3, d3, e3);
          case Ha:
            var f3 = d3._init;
            return y2(a3, b3, c3, f3(d3._payload), e3);
        }
        if (eb(d3) || Ka(d3)) return a3 = a3.get(c3) || null, m2(b3, a3, d3, e3, null);
        Mg(b3, d3);
      }
      return null;
    }
    function n(e3, g3, h3, k3) {
      for (var l3 = null, m3 = null, u2 = g3, w2 = g3 = 0, x2 = null; null !== u2 && w2 < h3.length; w2++) {
        u2.index > w2 ? (x2 = u2, u2 = null) : x2 = u2.sibling;
        var n2 = r2(e3, u2, h3[w2], k3);
        if (null === n2) {
          null === u2 && (u2 = x2);
          break;
        }
        a2 && u2 && null === n2.alternate && b2(e3, u2);
        g3 = f2(n2, g3, w2);
        null === m3 ? l3 = n2 : m3.sibling = n2;
        m3 = n2;
        u2 = x2;
      }
      if (w2 === h3.length) return c2(e3, u2), I2 && tg(e3, w2), l3;
      if (null === u2) {
        for (; w2 < h3.length; w2++) u2 = q2(e3, h3[w2], k3), null !== u2 && (g3 = f2(u2, g3, w2), null === m3 ? l3 = u2 : m3.sibling = u2, m3 = u2);
        I2 && tg(e3, w2);
        return l3;
      }
      for (u2 = d2(e3, u2); w2 < h3.length; w2++) x2 = y2(u2, e3, w2, h3[w2], k3), null !== x2 && (a2 && null !== x2.alternate && u2.delete(null === x2.key ? w2 : x2.key), g3 = f2(x2, g3, w2), null === m3 ? l3 = x2 : m3.sibling = x2, m3 = x2);
      a2 && u2.forEach(function(a3) {
        return b2(e3, a3);
      });
      I2 && tg(e3, w2);
      return l3;
    }
    function t(e3, g3, h3, k3) {
      var l3 = Ka(h3);
      if ("function" !== typeof l3) throw Error(p2(150));
      h3 = l3.call(h3);
      if (null == h3) throw Error(p2(151));
      for (var u2 = l3 = null, m3 = g3, w2 = g3 = 0, x2 = null, n2 = h3.next(); null !== m3 && !n2.done; w2++, n2 = h3.next()) {
        m3.index > w2 ? (x2 = m3, m3 = null) : x2 = m3.sibling;
        var t2 = r2(e3, m3, n2.value, k3);
        if (null === t2) {
          null === m3 && (m3 = x2);
          break;
        }
        a2 && m3 && null === t2.alternate && b2(e3, m3);
        g3 = f2(t2, g3, w2);
        null === u2 ? l3 = t2 : u2.sibling = t2;
        u2 = t2;
        m3 = x2;
      }
      if (n2.done) return c2(
        e3,
        m3
      ), I2 && tg(e3, w2), l3;
      if (null === m3) {
        for (; !n2.done; w2++, n2 = h3.next()) n2 = q2(e3, n2.value, k3), null !== n2 && (g3 = f2(n2, g3, w2), null === u2 ? l3 = n2 : u2.sibling = n2, u2 = n2);
        I2 && tg(e3, w2);
        return l3;
      }
      for (m3 = d2(e3, m3); !n2.done; w2++, n2 = h3.next()) n2 = y2(m3, e3, w2, n2.value, k3), null !== n2 && (a2 && null !== n2.alternate && m3.delete(null === n2.key ? w2 : n2.key), g3 = f2(n2, g3, w2), null === u2 ? l3 = n2 : u2.sibling = n2, u2 = n2);
      a2 && m3.forEach(function(a3) {
        return b2(e3, a3);
      });
      I2 && tg(e3, w2);
      return l3;
    }
    function J2(a3, d3, f3, h3) {
      "object" === typeof f3 && null !== f3 && f3.type === ya && null === f3.key && (f3 = f3.props.children);
      if ("object" === typeof f3 && null !== f3) {
        switch (f3.$$typeof) {
          case va:
            a: {
              for (var k3 = f3.key, l3 = d3; null !== l3; ) {
                if (l3.key === k3) {
                  k3 = f3.type;
                  if (k3 === ya) {
                    if (7 === l3.tag) {
                      c2(a3, l3.sibling);
                      d3 = e2(l3, f3.props.children);
                      d3.return = a3;
                      a3 = d3;
                      break a;
                    }
                  } else if (l3.elementType === k3 || "object" === typeof k3 && null !== k3 && k3.$$typeof === Ha && Ng(k3) === l3.type) {
                    c2(a3, l3.sibling);
                    d3 = e2(l3, f3.props);
                    d3.ref = Lg(a3, l3, f3);
                    d3.return = a3;
                    a3 = d3;
                    break a;
                  }
                  c2(a3, l3);
                  break;
                } else b2(a3, l3);
                l3 = l3.sibling;
              }
              f3.type === ya ? (d3 = Tg(f3.props.children, a3.mode, h3, f3.key), d3.return = a3, a3 = d3) : (h3 = Rg(f3.type, f3.key, f3.props, null, a3.mode, h3), h3.ref = Lg(a3, d3, f3), h3.return = a3, a3 = h3);
            }
            return g2(a3);
          case wa:
            a: {
              for (l3 = f3.key; null !== d3; ) {
                if (d3.key === l3) if (4 === d3.tag && d3.stateNode.containerInfo === f3.containerInfo && d3.stateNode.implementation === f3.implementation) {
                  c2(a3, d3.sibling);
                  d3 = e2(d3, f3.children || []);
                  d3.return = a3;
                  a3 = d3;
                  break a;
                } else {
                  c2(a3, d3);
                  break;
                }
                else b2(a3, d3);
                d3 = d3.sibling;
              }
              d3 = Sg(f3, a3.mode, h3);
              d3.return = a3;
              a3 = d3;
            }
            return g2(a3);
          case Ha:
            return l3 = f3._init, J2(a3, d3, l3(f3._payload), h3);
        }
        if (eb(f3)) return n(a3, d3, f3, h3);
        if (Ka(f3)) return t(a3, d3, f3, h3);
        Mg(a3, f3);
      }
      return "string" === typeof f3 && "" !== f3 || "number" === typeof f3 ? (f3 = "" + f3, null !== d3 && 6 === d3.tag ? (c2(a3, d3.sibling), d3 = e2(d3, f3), d3.return = a3, a3 = d3) : (c2(a3, d3), d3 = Qg(f3, a3.mode, h3), d3.return = a3, a3 = d3), g2(a3)) : c2(a3, d3);
    }
    return J2;
  }
  var Ug = Og(true), Vg = Og(false), Wg = Uf(null), Xg = null, Yg = null, Zg = null;
  function $g() {
    Zg = Yg = Xg = null;
  }
  function ah(a2) {
    var b2 = Wg.current;
    E2(Wg);
    a2._currentValue = b2;
  }
  function bh(a2, b2, c2) {
    for (; null !== a2; ) {
      var d2 = a2.alternate;
      (a2.childLanes & b2) !== b2 ? (a2.childLanes |= b2, null !== d2 && (d2.childLanes |= b2)) : null !== d2 && (d2.childLanes & b2) !== b2 && (d2.childLanes |= b2);
      if (a2 === c2) break;
      a2 = a2.return;
    }
  }
  function ch(a2, b2) {
    Xg = a2;
    Zg = Yg = null;
    a2 = a2.dependencies;
    null !== a2 && null !== a2.firstContext && (0 !== (a2.lanes & b2) && (dh = true), a2.firstContext = null);
  }
  function eh(a2) {
    var b2 = a2._currentValue;
    if (Zg !== a2) if (a2 = { context: a2, memoizedValue: b2, next: null }, null === Yg) {
      if (null === Xg) throw Error(p2(308));
      Yg = a2;
      Xg.dependencies = { lanes: 0, firstContext: a2 };
    } else Yg = Yg.next = a2;
    return b2;
  }
  var fh = null;
  function gh(a2) {
    null === fh ? fh = [a2] : fh.push(a2);
  }
  function hh(a2, b2, c2, d2) {
    var e2 = b2.interleaved;
    null === e2 ? (c2.next = c2, gh(b2)) : (c2.next = e2.next, e2.next = c2);
    b2.interleaved = c2;
    return ih(a2, d2);
  }
  function ih(a2, b2) {
    a2.lanes |= b2;
    var c2 = a2.alternate;
    null !== c2 && (c2.lanes |= b2);
    c2 = a2;
    for (a2 = a2.return; null !== a2; ) a2.childLanes |= b2, c2 = a2.alternate, null !== c2 && (c2.childLanes |= b2), c2 = a2, a2 = a2.return;
    return 3 === c2.tag ? c2.stateNode : null;
  }
  var jh = false;
  function kh(a2) {
    a2.updateQueue = { baseState: a2.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function lh(a2, b2) {
    a2 = a2.updateQueue;
    b2.updateQueue === a2 && (b2.updateQueue = { baseState: a2.baseState, firstBaseUpdate: a2.firstBaseUpdate, lastBaseUpdate: a2.lastBaseUpdate, shared: a2.shared, effects: a2.effects });
  }
  function mh(a2, b2) {
    return { eventTime: a2, lane: b2, tag: 0, payload: null, callback: null, next: null };
  }
  function nh(a2, b2, c2) {
    var d2 = a2.updateQueue;
    if (null === d2) return null;
    d2 = d2.shared;
    if (0 !== (K2 & 2)) {
      var e2 = d2.pending;
      null === e2 ? b2.next = b2 : (b2.next = e2.next, e2.next = b2);
      d2.pending = b2;
      return ih(a2, c2);
    }
    e2 = d2.interleaved;
    null === e2 ? (b2.next = b2, gh(d2)) : (b2.next = e2.next, e2.next = b2);
    d2.interleaved = b2;
    return ih(a2, c2);
  }
  function oh(a2, b2, c2) {
    b2 = b2.updateQueue;
    if (null !== b2 && (b2 = b2.shared, 0 !== (c2 & 4194240))) {
      var d2 = b2.lanes;
      d2 &= a2.pendingLanes;
      c2 |= d2;
      b2.lanes = c2;
      Cc(a2, c2);
    }
  }
  function ph(a2, b2) {
    var c2 = a2.updateQueue, d2 = a2.alternate;
    if (null !== d2 && (d2 = d2.updateQueue, c2 === d2)) {
      var e2 = null, f2 = null;
      c2 = c2.firstBaseUpdate;
      if (null !== c2) {
        do {
          var g2 = { eventTime: c2.eventTime, lane: c2.lane, tag: c2.tag, payload: c2.payload, callback: c2.callback, next: null };
          null === f2 ? e2 = f2 = g2 : f2 = f2.next = g2;
          c2 = c2.next;
        } while (null !== c2);
        null === f2 ? e2 = f2 = b2 : f2 = f2.next = b2;
      } else e2 = f2 = b2;
      c2 = { baseState: d2.baseState, firstBaseUpdate: e2, lastBaseUpdate: f2, shared: d2.shared, effects: d2.effects };
      a2.updateQueue = c2;
      return;
    }
    a2 = c2.lastBaseUpdate;
    null === a2 ? c2.firstBaseUpdate = b2 : a2.next = b2;
    c2.lastBaseUpdate = b2;
  }
  function qh(a2, b2, c2, d2) {
    var e2 = a2.updateQueue;
    jh = false;
    var f2 = e2.firstBaseUpdate, g2 = e2.lastBaseUpdate, h2 = e2.shared.pending;
    if (null !== h2) {
      e2.shared.pending = null;
      var k2 = h2, l2 = k2.next;
      k2.next = null;
      null === g2 ? f2 = l2 : g2.next = l2;
      g2 = k2;
      var m2 = a2.alternate;
      null !== m2 && (m2 = m2.updateQueue, h2 = m2.lastBaseUpdate, h2 !== g2 && (null === h2 ? m2.firstBaseUpdate = l2 : h2.next = l2, m2.lastBaseUpdate = k2));
    }
    if (null !== f2) {
      var q2 = e2.baseState;
      g2 = 0;
      m2 = l2 = k2 = null;
      h2 = f2;
      do {
        var r2 = h2.lane, y2 = h2.eventTime;
        if ((d2 & r2) === r2) {
          null !== m2 && (m2 = m2.next = {
            eventTime: y2,
            lane: 0,
            tag: h2.tag,
            payload: h2.payload,
            callback: h2.callback,
            next: null
          });
          a: {
            var n = a2, t = h2;
            r2 = b2;
            y2 = c2;
            switch (t.tag) {
              case 1:
                n = t.payload;
                if ("function" === typeof n) {
                  q2 = n.call(y2, q2, r2);
                  break a;
                }
                q2 = n;
                break a;
              case 3:
                n.flags = n.flags & -65537 | 128;
              case 0:
                n = t.payload;
                r2 = "function" === typeof n ? n.call(y2, q2, r2) : n;
                if (null === r2 || void 0 === r2) break a;
                q2 = A2({}, q2, r2);
                break a;
              case 2:
                jh = true;
            }
          }
          null !== h2.callback && 0 !== h2.lane && (a2.flags |= 64, r2 = e2.effects, null === r2 ? e2.effects = [h2] : r2.push(h2));
        } else y2 = { eventTime: y2, lane: r2, tag: h2.tag, payload: h2.payload, callback: h2.callback, next: null }, null === m2 ? (l2 = m2 = y2, k2 = q2) : m2 = m2.next = y2, g2 |= r2;
        h2 = h2.next;
        if (null === h2) if (h2 = e2.shared.pending, null === h2) break;
        else r2 = h2, h2 = r2.next, r2.next = null, e2.lastBaseUpdate = r2, e2.shared.pending = null;
      } while (1);
      null === m2 && (k2 = q2);
      e2.baseState = k2;
      e2.firstBaseUpdate = l2;
      e2.lastBaseUpdate = m2;
      b2 = e2.shared.interleaved;
      if (null !== b2) {
        e2 = b2;
        do
          g2 |= e2.lane, e2 = e2.next;
        while (e2 !== b2);
      } else null === f2 && (e2.shared.lanes = 0);
      rh |= g2;
      a2.lanes = g2;
      a2.memoizedState = q2;
    }
  }
  function sh(a2, b2, c2) {
    a2 = b2.effects;
    b2.effects = null;
    if (null !== a2) for (b2 = 0; b2 < a2.length; b2++) {
      var d2 = a2[b2], e2 = d2.callback;
      if (null !== e2) {
        d2.callback = null;
        d2 = c2;
        if ("function" !== typeof e2) throw Error(p2(191, e2));
        e2.call(d2);
      }
    }
  }
  var th = {}, uh = Uf(th), vh2 = Uf(th), wh = Uf(th);
  function xh(a2) {
    if (a2 === th) throw Error(p2(174));
    return a2;
  }
  function yh(a2, b2) {
    G2(wh, b2);
    G2(vh2, a2);
    G2(uh, th);
    a2 = b2.nodeType;
    switch (a2) {
      case 9:
      case 11:
        b2 = (b2 = b2.documentElement) ? b2.namespaceURI : lb(null, "");
        break;
      default:
        a2 = 8 === a2 ? b2.parentNode : b2, b2 = a2.namespaceURI || null, a2 = a2.tagName, b2 = lb(b2, a2);
    }
    E2(uh);
    G2(uh, b2);
  }
  function zh() {
    E2(uh);
    E2(vh2);
    E2(wh);
  }
  function Ah(a2) {
    xh(wh.current);
    var b2 = xh(uh.current);
    var c2 = lb(b2, a2.type);
    b2 !== c2 && (G2(vh2, a2), G2(uh, c2));
  }
  function Bh(a2) {
    vh2.current === a2 && (E2(uh), E2(vh2));
  }
  var L2 = Uf(0);
  function Ch(a2) {
    for (var b2 = a2; null !== b2; ) {
      if (13 === b2.tag) {
        var c2 = b2.memoizedState;
        if (null !== c2 && (c2 = c2.dehydrated, null === c2 || "$?" === c2.data || "$!" === c2.data)) return b2;
      } else if (19 === b2.tag && void 0 !== b2.memoizedProps.revealOrder) {
        if (0 !== (b2.flags & 128)) return b2;
      } else if (null !== b2.child) {
        b2.child.return = b2;
        b2 = b2.child;
        continue;
      }
      if (b2 === a2) break;
      for (; null === b2.sibling; ) {
        if (null === b2.return || b2.return === a2) return null;
        b2 = b2.return;
      }
      b2.sibling.return = b2.return;
      b2 = b2.sibling;
    }
    return null;
  }
  var Dh = [];
  function Eh() {
    for (var a2 = 0; a2 < Dh.length; a2++) Dh[a2]._workInProgressVersionPrimary = null;
    Dh.length = 0;
  }
  var Fh = ua.ReactCurrentDispatcher, Gh = ua.ReactCurrentBatchConfig, Hh = 0, M2 = null, N2 = null, O2 = null, Ih = false, Jh = false, Kh = 0, Lh = 0;
  function P2() {
    throw Error(p2(321));
  }
  function Mh(a2, b2) {
    if (null === b2) return false;
    for (var c2 = 0; c2 < b2.length && c2 < a2.length; c2++) if (!He(a2[c2], b2[c2])) return false;
    return true;
  }
  function Nh(a2, b2, c2, d2, e2, f2) {
    Hh = f2;
    M2 = b2;
    b2.memoizedState = null;
    b2.updateQueue = null;
    b2.lanes = 0;
    Fh.current = null === a2 || null === a2.memoizedState ? Oh : Ph;
    a2 = c2(d2, e2);
    if (Jh) {
      f2 = 0;
      do {
        Jh = false;
        Kh = 0;
        if (25 <= f2) throw Error(p2(301));
        f2 += 1;
        O2 = N2 = null;
        b2.updateQueue = null;
        Fh.current = Qh;
        a2 = c2(d2, e2);
      } while (Jh);
    }
    Fh.current = Rh;
    b2 = null !== N2 && null !== N2.next;
    Hh = 0;
    O2 = N2 = M2 = null;
    Ih = false;
    if (b2) throw Error(p2(300));
    return a2;
  }
  function Sh() {
    var a2 = 0 !== Kh;
    Kh = 0;
    return a2;
  }
  function Th() {
    var a2 = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    null === O2 ? M2.memoizedState = O2 = a2 : O2 = O2.next = a2;
    return O2;
  }
  function Uh() {
    if (null === N2) {
      var a2 = M2.alternate;
      a2 = null !== a2 ? a2.memoizedState : null;
    } else a2 = N2.next;
    var b2 = null === O2 ? M2.memoizedState : O2.next;
    if (null !== b2) O2 = b2, N2 = a2;
    else {
      if (null === a2) throw Error(p2(310));
      N2 = a2;
      a2 = { memoizedState: N2.memoizedState, baseState: N2.baseState, baseQueue: N2.baseQueue, queue: N2.queue, next: null };
      null === O2 ? M2.memoizedState = O2 = a2 : O2 = O2.next = a2;
    }
    return O2;
  }
  function Vh(a2, b2) {
    return "function" === typeof b2 ? b2(a2) : b2;
  }
  function Wh(a2) {
    var b2 = Uh(), c2 = b2.queue;
    if (null === c2) throw Error(p2(311));
    c2.lastRenderedReducer = a2;
    var d2 = N2, e2 = d2.baseQueue, f2 = c2.pending;
    if (null !== f2) {
      if (null !== e2) {
        var g2 = e2.next;
        e2.next = f2.next;
        f2.next = g2;
      }
      d2.baseQueue = e2 = f2;
      c2.pending = null;
    }
    if (null !== e2) {
      f2 = e2.next;
      d2 = d2.baseState;
      var h2 = g2 = null, k2 = null, l2 = f2;
      do {
        var m2 = l2.lane;
        if ((Hh & m2) === m2) null !== k2 && (k2 = k2.next = { lane: 0, action: l2.action, hasEagerState: l2.hasEagerState, eagerState: l2.eagerState, next: null }), d2 = l2.hasEagerState ? l2.eagerState : a2(d2, l2.action);
        else {
          var q2 = {
            lane: m2,
            action: l2.action,
            hasEagerState: l2.hasEagerState,
            eagerState: l2.eagerState,
            next: null
          };
          null === k2 ? (h2 = k2 = q2, g2 = d2) : k2 = k2.next = q2;
          M2.lanes |= m2;
          rh |= m2;
        }
        l2 = l2.next;
      } while (null !== l2 && l2 !== f2);
      null === k2 ? g2 = d2 : k2.next = h2;
      He(d2, b2.memoizedState) || (dh = true);
      b2.memoizedState = d2;
      b2.baseState = g2;
      b2.baseQueue = k2;
      c2.lastRenderedState = d2;
    }
    a2 = c2.interleaved;
    if (null !== a2) {
      e2 = a2;
      do
        f2 = e2.lane, M2.lanes |= f2, rh |= f2, e2 = e2.next;
      while (e2 !== a2);
    } else null === e2 && (c2.lanes = 0);
    return [b2.memoizedState, c2.dispatch];
  }
  function Xh(a2) {
    var b2 = Uh(), c2 = b2.queue;
    if (null === c2) throw Error(p2(311));
    c2.lastRenderedReducer = a2;
    var d2 = c2.dispatch, e2 = c2.pending, f2 = b2.memoizedState;
    if (null !== e2) {
      c2.pending = null;
      var g2 = e2 = e2.next;
      do
        f2 = a2(f2, g2.action), g2 = g2.next;
      while (g2 !== e2);
      He(f2, b2.memoizedState) || (dh = true);
      b2.memoizedState = f2;
      null === b2.baseQueue && (b2.baseState = f2);
      c2.lastRenderedState = f2;
    }
    return [f2, d2];
  }
  function Yh() {
  }
  function Zh(a2, b2) {
    var c2 = M2, d2 = Uh(), e2 = b2(), f2 = !He(d2.memoizedState, e2);
    f2 && (d2.memoizedState = e2, dh = true);
    d2 = d2.queue;
    $h(ai2.bind(null, c2, d2, a2), [a2]);
    if (d2.getSnapshot !== b2 || f2 || null !== O2 && O2.memoizedState.tag & 1) {
      c2.flags |= 2048;
      bi2(9, ci2.bind(null, c2, d2, e2, b2), void 0, null);
      if (null === Q2) throw Error(p2(349));
      0 !== (Hh & 30) || di2(c2, b2, e2);
    }
    return e2;
  }
  function di2(a2, b2, c2) {
    a2.flags |= 16384;
    a2 = { getSnapshot: b2, value: c2 };
    b2 = M2.updateQueue;
    null === b2 ? (b2 = { lastEffect: null, stores: null }, M2.updateQueue = b2, b2.stores = [a2]) : (c2 = b2.stores, null === c2 ? b2.stores = [a2] : c2.push(a2));
  }
  function ci2(a2, b2, c2, d2) {
    b2.value = c2;
    b2.getSnapshot = d2;
    ei2(b2) && fi2(a2);
  }
  function ai2(a2, b2, c2) {
    return c2(function() {
      ei2(b2) && fi2(a2);
    });
  }
  function ei2(a2) {
    var b2 = a2.getSnapshot;
    a2 = a2.value;
    try {
      var c2 = b2();
      return !He(a2, c2);
    } catch (d2) {
      return true;
    }
  }
  function fi2(a2) {
    var b2 = ih(a2, 1);
    null !== b2 && gi2(b2, a2, 1, -1);
  }
  function hi2(a2) {
    var b2 = Th();
    "function" === typeof a2 && (a2 = a2());
    b2.memoizedState = b2.baseState = a2;
    a2 = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Vh, lastRenderedState: a2 };
    b2.queue = a2;
    a2 = a2.dispatch = ii2.bind(null, M2, a2);
    return [b2.memoizedState, a2];
  }
  function bi2(a2, b2, c2, d2) {
    a2 = { tag: a2, create: b2, destroy: c2, deps: d2, next: null };
    b2 = M2.updateQueue;
    null === b2 ? (b2 = { lastEffect: null, stores: null }, M2.updateQueue = b2, b2.lastEffect = a2.next = a2) : (c2 = b2.lastEffect, null === c2 ? b2.lastEffect = a2.next = a2 : (d2 = c2.next, c2.next = a2, a2.next = d2, b2.lastEffect = a2));
    return a2;
  }
  function ji2() {
    return Uh().memoizedState;
  }
  function ki2(a2, b2, c2, d2) {
    var e2 = Th();
    M2.flags |= a2;
    e2.memoizedState = bi2(1 | b2, c2, void 0, void 0 === d2 ? null : d2);
  }
  function li2(a2, b2, c2, d2) {
    var e2 = Uh();
    d2 = void 0 === d2 ? null : d2;
    var f2 = void 0;
    if (null !== N2) {
      var g2 = N2.memoizedState;
      f2 = g2.destroy;
      if (null !== d2 && Mh(d2, g2.deps)) {
        e2.memoizedState = bi2(b2, c2, f2, d2);
        return;
      }
    }
    M2.flags |= a2;
    e2.memoizedState = bi2(1 | b2, c2, f2, d2);
  }
  function mi2(a2, b2) {
    return ki2(8390656, 8, a2, b2);
  }
  function $h(a2, b2) {
    return li2(2048, 8, a2, b2);
  }
  function ni2(a2, b2) {
    return li2(4, 2, a2, b2);
  }
  function oi2(a2, b2) {
    return li2(4, 4, a2, b2);
  }
  function pi2(a2, b2) {
    if ("function" === typeof b2) return a2 = a2(), b2(a2), function() {
      b2(null);
    };
    if (null !== b2 && void 0 !== b2) return a2 = a2(), b2.current = a2, function() {
      b2.current = null;
    };
  }
  function qi2(a2, b2, c2) {
    c2 = null !== c2 && void 0 !== c2 ? c2.concat([a2]) : null;
    return li2(4, 4, pi2.bind(null, b2, a2), c2);
  }
  function ri2() {
  }
  function si2(a2, b2) {
    var c2 = Uh();
    b2 = void 0 === b2 ? null : b2;
    var d2 = c2.memoizedState;
    if (null !== d2 && null !== b2 && Mh(b2, d2[1])) return d2[0];
    c2.memoizedState = [a2, b2];
    return a2;
  }
  function ti2(a2, b2) {
    var c2 = Uh();
    b2 = void 0 === b2 ? null : b2;
    var d2 = c2.memoizedState;
    if (null !== d2 && null !== b2 && Mh(b2, d2[1])) return d2[0];
    a2 = a2();
    c2.memoizedState = [a2, b2];
    return a2;
  }
  function ui2(a2, b2, c2) {
    if (0 === (Hh & 21)) return a2.baseState && (a2.baseState = false, dh = true), a2.memoizedState = c2;
    He(c2, b2) || (c2 = yc(), M2.lanes |= c2, rh |= c2, a2.baseState = true);
    return b2;
  }
  function vi2(a2, b2) {
    var c2 = C2;
    C2 = 0 !== c2 && 4 > c2 ? c2 : 4;
    a2(true);
    var d2 = Gh.transition;
    Gh.transition = {};
    try {
      a2(false), b2();
    } finally {
      C2 = c2, Gh.transition = d2;
    }
  }
  function wi2() {
    return Uh().memoizedState;
  }
  function xi2(a2, b2, c2) {
    var d2 = yi2(a2);
    c2 = { lane: d2, action: c2, hasEagerState: false, eagerState: null, next: null };
    if (zi2(a2)) Ai2(b2, c2);
    else if (c2 = hh(a2, b2, c2, d2), null !== c2) {
      var e2 = R2();
      gi2(c2, a2, d2, e2);
      Bi2(c2, b2, d2);
    }
  }
  function ii2(a2, b2, c2) {
    var d2 = yi2(a2), e2 = { lane: d2, action: c2, hasEagerState: false, eagerState: null, next: null };
    if (zi2(a2)) Ai2(b2, e2);
    else {
      var f2 = a2.alternate;
      if (0 === a2.lanes && (null === f2 || 0 === f2.lanes) && (f2 = b2.lastRenderedReducer, null !== f2)) try {
        var g2 = b2.lastRenderedState, h2 = f2(g2, c2);
        e2.hasEagerState = true;
        e2.eagerState = h2;
        if (He(h2, g2)) {
          var k2 = b2.interleaved;
          null === k2 ? (e2.next = e2, gh(b2)) : (e2.next = k2.next, k2.next = e2);
          b2.interleaved = e2;
          return;
        }
      } catch (l2) {
      } finally {
      }
      c2 = hh(a2, b2, e2, d2);
      null !== c2 && (e2 = R2(), gi2(c2, a2, d2, e2), Bi2(c2, b2, d2));
    }
  }
  function zi2(a2) {
    var b2 = a2.alternate;
    return a2 === M2 || null !== b2 && b2 === M2;
  }
  function Ai2(a2, b2) {
    Jh = Ih = true;
    var c2 = a2.pending;
    null === c2 ? b2.next = b2 : (b2.next = c2.next, c2.next = b2);
    a2.pending = b2;
  }
  function Bi2(a2, b2, c2) {
    if (0 !== (c2 & 4194240)) {
      var d2 = b2.lanes;
      d2 &= a2.pendingLanes;
      c2 |= d2;
      b2.lanes = c2;
      Cc(a2, c2);
    }
  }
  var Rh = { readContext: eh, useCallback: P2, useContext: P2, useEffect: P2, useImperativeHandle: P2, useInsertionEffect: P2, useLayoutEffect: P2, useMemo: P2, useReducer: P2, useRef: P2, useState: P2, useDebugValue: P2, useDeferredValue: P2, useTransition: P2, useMutableSource: P2, useSyncExternalStore: P2, useId: P2, unstable_isNewReconciler: false }, Oh = { readContext: eh, useCallback: function(a2, b2) {
    Th().memoizedState = [a2, void 0 === b2 ? null : b2];
    return a2;
  }, useContext: eh, useEffect: mi2, useImperativeHandle: function(a2, b2, c2) {
    c2 = null !== c2 && void 0 !== c2 ? c2.concat([a2]) : null;
    return ki2(
      4194308,
      4,
      pi2.bind(null, b2, a2),
      c2
    );
  }, useLayoutEffect: function(a2, b2) {
    return ki2(4194308, 4, a2, b2);
  }, useInsertionEffect: function(a2, b2) {
    return ki2(4, 2, a2, b2);
  }, useMemo: function(a2, b2) {
    var c2 = Th();
    b2 = void 0 === b2 ? null : b2;
    a2 = a2();
    c2.memoizedState = [a2, b2];
    return a2;
  }, useReducer: function(a2, b2, c2) {
    var d2 = Th();
    b2 = void 0 !== c2 ? c2(b2) : b2;
    d2.memoizedState = d2.baseState = b2;
    a2 = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: a2, lastRenderedState: b2 };
    d2.queue = a2;
    a2 = a2.dispatch = xi2.bind(null, M2, a2);
    return [d2.memoizedState, a2];
  }, useRef: function(a2) {
    var b2 = Th();
    a2 = { current: a2 };
    return b2.memoizedState = a2;
  }, useState: hi2, useDebugValue: ri2, useDeferredValue: function(a2) {
    return Th().memoizedState = a2;
  }, useTransition: function() {
    var a2 = hi2(false), b2 = a2[0];
    a2 = vi2.bind(null, a2[1]);
    Th().memoizedState = a2;
    return [b2, a2];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(a2, b2, c2) {
    var d2 = M2, e2 = Th();
    if (I2) {
      if (void 0 === c2) throw Error(p2(407));
      c2 = c2();
    } else {
      c2 = b2();
      if (null === Q2) throw Error(p2(349));
      0 !== (Hh & 30) || di2(d2, b2, c2);
    }
    e2.memoizedState = c2;
    var f2 = { value: c2, getSnapshot: b2 };
    e2.queue = f2;
    mi2(ai2.bind(
      null,
      d2,
      f2,
      a2
    ), [a2]);
    d2.flags |= 2048;
    bi2(9, ci2.bind(null, d2, f2, c2, b2), void 0, null);
    return c2;
  }, useId: function() {
    var a2 = Th(), b2 = Q2.identifierPrefix;
    if (I2) {
      var c2 = sg;
      var d2 = rg;
      c2 = (d2 & ~(1 << 32 - oc(d2) - 1)).toString(32) + c2;
      b2 = ":" + b2 + "R" + c2;
      c2 = Kh++;
      0 < c2 && (b2 += "H" + c2.toString(32));
      b2 += ":";
    } else c2 = Lh++, b2 = ":" + b2 + "r" + c2.toString(32) + ":";
    return a2.memoizedState = b2;
  }, unstable_isNewReconciler: false }, Ph = {
    readContext: eh,
    useCallback: si2,
    useContext: eh,
    useEffect: $h,
    useImperativeHandle: qi2,
    useInsertionEffect: ni2,
    useLayoutEffect: oi2,
    useMemo: ti2,
    useReducer: Wh,
    useRef: ji2,
    useState: function() {
      return Wh(Vh);
    },
    useDebugValue: ri2,
    useDeferredValue: function(a2) {
      var b2 = Uh();
      return ui2(b2, N2.memoizedState, a2);
    },
    useTransition: function() {
      var a2 = Wh(Vh)[0], b2 = Uh().memoizedState;
      return [a2, b2];
    },
    useMutableSource: Yh,
    useSyncExternalStore: Zh,
    useId: wi2,
    unstable_isNewReconciler: false
  }, Qh = { readContext: eh, useCallback: si2, useContext: eh, useEffect: $h, useImperativeHandle: qi2, useInsertionEffect: ni2, useLayoutEffect: oi2, useMemo: ti2, useReducer: Xh, useRef: ji2, useState: function() {
    return Xh(Vh);
  }, useDebugValue: ri2, useDeferredValue: function(a2) {
    var b2 = Uh();
    return null === N2 ? b2.memoizedState = a2 : ui2(b2, N2.memoizedState, a2);
  }, useTransition: function() {
    var a2 = Xh(Vh)[0], b2 = Uh().memoizedState;
    return [a2, b2];
  }, useMutableSource: Yh, useSyncExternalStore: Zh, useId: wi2, unstable_isNewReconciler: false };
  function Ci2(a2, b2) {
    if (a2 && a2.defaultProps) {
      b2 = A2({}, b2);
      a2 = a2.defaultProps;
      for (var c2 in a2) void 0 === b2[c2] && (b2[c2] = a2[c2]);
      return b2;
    }
    return b2;
  }
  function Di2(a2, b2, c2, d2) {
    b2 = a2.memoizedState;
    c2 = c2(d2, b2);
    c2 = null === c2 || void 0 === c2 ? b2 : A2({}, b2, c2);
    a2.memoizedState = c2;
    0 === a2.lanes && (a2.updateQueue.baseState = c2);
  }
  var Ei2 = { isMounted: function(a2) {
    return (a2 = a2._reactInternals) ? Vb(a2) === a2 : false;
  }, enqueueSetState: function(a2, b2, c2) {
    a2 = a2._reactInternals;
    var d2 = R2(), e2 = yi2(a2), f2 = mh(d2, e2);
    f2.payload = b2;
    void 0 !== c2 && null !== c2 && (f2.callback = c2);
    b2 = nh(a2, f2, e2);
    null !== b2 && (gi2(b2, a2, e2, d2), oh(b2, a2, e2));
  }, enqueueReplaceState: function(a2, b2, c2) {
    a2 = a2._reactInternals;
    var d2 = R2(), e2 = yi2(a2), f2 = mh(d2, e2);
    f2.tag = 1;
    f2.payload = b2;
    void 0 !== c2 && null !== c2 && (f2.callback = c2);
    b2 = nh(a2, f2, e2);
    null !== b2 && (gi2(b2, a2, e2, d2), oh(b2, a2, e2));
  }, enqueueForceUpdate: function(a2, b2) {
    a2 = a2._reactInternals;
    var c2 = R2(), d2 = yi2(a2), e2 = mh(c2, d2);
    e2.tag = 2;
    void 0 !== b2 && null !== b2 && (e2.callback = b2);
    b2 = nh(a2, e2, d2);
    null !== b2 && (gi2(b2, a2, d2, c2), oh(b2, a2, d2));
  } };
  function Fi2(a2, b2, c2, d2, e2, f2, g2) {
    a2 = a2.stateNode;
    return "function" === typeof a2.shouldComponentUpdate ? a2.shouldComponentUpdate(d2, f2, g2) : b2.prototype && b2.prototype.isPureReactComponent ? !Ie(c2, d2) || !Ie(e2, f2) : true;
  }
  function Gi2(a2, b2, c2) {
    var d2 = false, e2 = Vf;
    var f2 = b2.contextType;
    "object" === typeof f2 && null !== f2 ? f2 = eh(f2) : (e2 = Zf(b2) ? Xf : H2.current, d2 = b2.contextTypes, f2 = (d2 = null !== d2 && void 0 !== d2) ? Yf(a2, e2) : Vf);
    b2 = new b2(c2, f2);
    a2.memoizedState = null !== b2.state && void 0 !== b2.state ? b2.state : null;
    b2.updater = Ei2;
    a2.stateNode = b2;
    b2._reactInternals = a2;
    d2 && (a2 = a2.stateNode, a2.__reactInternalMemoizedUnmaskedChildContext = e2, a2.__reactInternalMemoizedMaskedChildContext = f2);
    return b2;
  }
  function Hi2(a2, b2, c2, d2) {
    a2 = b2.state;
    "function" === typeof b2.componentWillReceiveProps && b2.componentWillReceiveProps(c2, d2);
    "function" === typeof b2.UNSAFE_componentWillReceiveProps && b2.UNSAFE_componentWillReceiveProps(c2, d2);
    b2.state !== a2 && Ei2.enqueueReplaceState(b2, b2.state, null);
  }
  function Ii2(a2, b2, c2, d2) {
    var e2 = a2.stateNode;
    e2.props = c2;
    e2.state = a2.memoizedState;
    e2.refs = {};
    kh(a2);
    var f2 = b2.contextType;
    "object" === typeof f2 && null !== f2 ? e2.context = eh(f2) : (f2 = Zf(b2) ? Xf : H2.current, e2.context = Yf(a2, f2));
    e2.state = a2.memoizedState;
    f2 = b2.getDerivedStateFromProps;
    "function" === typeof f2 && (Di2(a2, b2, f2, c2), e2.state = a2.memoizedState);
    "function" === typeof b2.getDerivedStateFromProps || "function" === typeof e2.getSnapshotBeforeUpdate || "function" !== typeof e2.UNSAFE_componentWillMount && "function" !== typeof e2.componentWillMount || (b2 = e2.state, "function" === typeof e2.componentWillMount && e2.componentWillMount(), "function" === typeof e2.UNSAFE_componentWillMount && e2.UNSAFE_componentWillMount(), b2 !== e2.state && Ei2.enqueueReplaceState(e2, e2.state, null), qh(a2, c2, e2, d2), e2.state = a2.memoizedState);
    "function" === typeof e2.componentDidMount && (a2.flags |= 4194308);
  }
  function Ji2(a2, b2) {
    try {
      var c2 = "", d2 = b2;
      do
        c2 += Pa(d2), d2 = d2.return;
      while (d2);
      var e2 = c2;
    } catch (f2) {
      e2 = "\nError generating stack: " + f2.message + "\n" + f2.stack;
    }
    return { value: a2, source: b2, stack: e2, digest: null };
  }
  function Ki2(a2, b2, c2) {
    return { value: a2, source: null, stack: null != c2 ? c2 : null, digest: null != b2 ? b2 : null };
  }
  function Li2(a2, b2) {
    try {
      console.error(b2.value);
    } catch (c2) {
      setTimeout(function() {
        throw c2;
      });
    }
  }
  var Mi2 = "function" === typeof WeakMap ? WeakMap : Map;
  function Ni2(a2, b2, c2) {
    c2 = mh(-1, c2);
    c2.tag = 3;
    c2.payload = { element: null };
    var d2 = b2.value;
    c2.callback = function() {
      Oi2 || (Oi2 = true, Pi2 = d2);
      Li2(a2, b2);
    };
    return c2;
  }
  function Qi2(a2, b2, c2) {
    c2 = mh(-1, c2);
    c2.tag = 3;
    var d2 = a2.type.getDerivedStateFromError;
    if ("function" === typeof d2) {
      var e2 = b2.value;
      c2.payload = function() {
        return d2(e2);
      };
      c2.callback = function() {
        Li2(a2, b2);
      };
    }
    var f2 = a2.stateNode;
    null !== f2 && "function" === typeof f2.componentDidCatch && (c2.callback = function() {
      Li2(a2, b2);
      "function" !== typeof d2 && (null === Ri2 ? Ri2 = /* @__PURE__ */ new Set([this]) : Ri2.add(this));
      var c3 = b2.stack;
      this.componentDidCatch(b2.value, { componentStack: null !== c3 ? c3 : "" });
    });
    return c2;
  }
  function Si2(a2, b2, c2) {
    var d2 = a2.pingCache;
    if (null === d2) {
      d2 = a2.pingCache = new Mi2();
      var e2 = /* @__PURE__ */ new Set();
      d2.set(b2, e2);
    } else e2 = d2.get(b2), void 0 === e2 && (e2 = /* @__PURE__ */ new Set(), d2.set(b2, e2));
    e2.has(c2) || (e2.add(c2), a2 = Ti2.bind(null, a2, b2, c2), b2.then(a2, a2));
  }
  function Ui2(a2) {
    do {
      var b2;
      if (b2 = 13 === a2.tag) b2 = a2.memoizedState, b2 = null !== b2 ? null !== b2.dehydrated ? true : false : true;
      if (b2) return a2;
      a2 = a2.return;
    } while (null !== a2);
    return null;
  }
  function Vi2(a2, b2, c2, d2, e2) {
    if (0 === (a2.mode & 1)) return a2 === b2 ? a2.flags |= 65536 : (a2.flags |= 128, c2.flags |= 131072, c2.flags &= -52805, 1 === c2.tag && (null === c2.alternate ? c2.tag = 17 : (b2 = mh(-1, 1), b2.tag = 2, nh(c2, b2, 1))), c2.lanes |= 1), a2;
    a2.flags |= 65536;
    a2.lanes = e2;
    return a2;
  }
  var Wi2 = ua.ReactCurrentOwner, dh = false;
  function Xi2(a2, b2, c2, d2) {
    b2.child = null === a2 ? Vg(b2, null, c2, d2) : Ug(b2, a2.child, c2, d2);
  }
  function Yi2(a2, b2, c2, d2, e2) {
    c2 = c2.render;
    var f2 = b2.ref;
    ch(b2, e2);
    d2 = Nh(a2, b2, c2, d2, f2, e2);
    c2 = Sh();
    if (null !== a2 && !dh) return b2.updateQueue = a2.updateQueue, b2.flags &= -2053, a2.lanes &= ~e2, Zi2(a2, b2, e2);
    I2 && c2 && vg(b2);
    b2.flags |= 1;
    Xi2(a2, b2, d2, e2);
    return b2.child;
  }
  function $i2(a2, b2, c2, d2, e2) {
    if (null === a2) {
      var f2 = c2.type;
      if ("function" === typeof f2 && !aj(f2) && void 0 === f2.defaultProps && null === c2.compare && void 0 === c2.defaultProps) return b2.tag = 15, b2.type = f2, bj(a2, b2, f2, d2, e2);
      a2 = Rg(c2.type, null, d2, b2, b2.mode, e2);
      a2.ref = b2.ref;
      a2.return = b2;
      return b2.child = a2;
    }
    f2 = a2.child;
    if (0 === (a2.lanes & e2)) {
      var g2 = f2.memoizedProps;
      c2 = c2.compare;
      c2 = null !== c2 ? c2 : Ie;
      if (c2(g2, d2) && a2.ref === b2.ref) return Zi2(a2, b2, e2);
    }
    b2.flags |= 1;
    a2 = Pg(f2, d2);
    a2.ref = b2.ref;
    a2.return = b2;
    return b2.child = a2;
  }
  function bj(a2, b2, c2, d2, e2) {
    if (null !== a2) {
      var f2 = a2.memoizedProps;
      if (Ie(f2, d2) && a2.ref === b2.ref) if (dh = false, b2.pendingProps = d2 = f2, 0 !== (a2.lanes & e2)) 0 !== (a2.flags & 131072) && (dh = true);
      else return b2.lanes = a2.lanes, Zi2(a2, b2, e2);
    }
    return cj(a2, b2, c2, d2, e2);
  }
  function dj(a2, b2, c2) {
    var d2 = b2.pendingProps, e2 = d2.children, f2 = null !== a2 ? a2.memoizedState : null;
    if ("hidden" === d2.mode) if (0 === (b2.mode & 1)) b2.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, G2(ej, fj), fj |= c2;
    else {
      if (0 === (c2 & 1073741824)) return a2 = null !== f2 ? f2.baseLanes | c2 : c2, b2.lanes = b2.childLanes = 1073741824, b2.memoizedState = { baseLanes: a2, cachePool: null, transitions: null }, b2.updateQueue = null, G2(ej, fj), fj |= a2, null;
      b2.memoizedState = { baseLanes: 0, cachePool: null, transitions: null };
      d2 = null !== f2 ? f2.baseLanes : c2;
      G2(ej, fj);
      fj |= d2;
    }
    else null !== f2 ? (d2 = f2.baseLanes | c2, b2.memoizedState = null) : d2 = c2, G2(ej, fj), fj |= d2;
    Xi2(a2, b2, e2, c2);
    return b2.child;
  }
  function gj(a2, b2) {
    var c2 = b2.ref;
    if (null === a2 && null !== c2 || null !== a2 && a2.ref !== c2) b2.flags |= 512, b2.flags |= 2097152;
  }
  function cj(a2, b2, c2, d2, e2) {
    var f2 = Zf(c2) ? Xf : H2.current;
    f2 = Yf(b2, f2);
    ch(b2, e2);
    c2 = Nh(a2, b2, c2, d2, f2, e2);
    d2 = Sh();
    if (null !== a2 && !dh) return b2.updateQueue = a2.updateQueue, b2.flags &= -2053, a2.lanes &= ~e2, Zi2(a2, b2, e2);
    I2 && d2 && vg(b2);
    b2.flags |= 1;
    Xi2(a2, b2, c2, e2);
    return b2.child;
  }
  function hj(a2, b2, c2, d2, e2) {
    if (Zf(c2)) {
      var f2 = true;
      cg(b2);
    } else f2 = false;
    ch(b2, e2);
    if (null === b2.stateNode) ij(a2, b2), Gi2(b2, c2, d2), Ii2(b2, c2, d2, e2), d2 = true;
    else if (null === a2) {
      var g2 = b2.stateNode, h2 = b2.memoizedProps;
      g2.props = h2;
      var k2 = g2.context, l2 = c2.contextType;
      "object" === typeof l2 && null !== l2 ? l2 = eh(l2) : (l2 = Zf(c2) ? Xf : H2.current, l2 = Yf(b2, l2));
      var m2 = c2.getDerivedStateFromProps, q2 = "function" === typeof m2 || "function" === typeof g2.getSnapshotBeforeUpdate;
      q2 || "function" !== typeof g2.UNSAFE_componentWillReceiveProps && "function" !== typeof g2.componentWillReceiveProps || (h2 !== d2 || k2 !== l2) && Hi2(b2, g2, d2, l2);
      jh = false;
      var r2 = b2.memoizedState;
      g2.state = r2;
      qh(b2, d2, g2, e2);
      k2 = b2.memoizedState;
      h2 !== d2 || r2 !== k2 || Wf.current || jh ? ("function" === typeof m2 && (Di2(b2, c2, m2, d2), k2 = b2.memoizedState), (h2 = jh || Fi2(b2, c2, h2, d2, r2, k2, l2)) ? (q2 || "function" !== typeof g2.UNSAFE_componentWillMount && "function" !== typeof g2.componentWillMount || ("function" === typeof g2.componentWillMount && g2.componentWillMount(), "function" === typeof g2.UNSAFE_componentWillMount && g2.UNSAFE_componentWillMount()), "function" === typeof g2.componentDidMount && (b2.flags |= 4194308)) : ("function" === typeof g2.componentDidMount && (b2.flags |= 4194308), b2.memoizedProps = d2, b2.memoizedState = k2), g2.props = d2, g2.state = k2, g2.context = l2, d2 = h2) : ("function" === typeof g2.componentDidMount && (b2.flags |= 4194308), d2 = false);
    } else {
      g2 = b2.stateNode;
      lh(a2, b2);
      h2 = b2.memoizedProps;
      l2 = b2.type === b2.elementType ? h2 : Ci2(b2.type, h2);
      g2.props = l2;
      q2 = b2.pendingProps;
      r2 = g2.context;
      k2 = c2.contextType;
      "object" === typeof k2 && null !== k2 ? k2 = eh(k2) : (k2 = Zf(c2) ? Xf : H2.current, k2 = Yf(b2, k2));
      var y2 = c2.getDerivedStateFromProps;
      (m2 = "function" === typeof y2 || "function" === typeof g2.getSnapshotBeforeUpdate) || "function" !== typeof g2.UNSAFE_componentWillReceiveProps && "function" !== typeof g2.componentWillReceiveProps || (h2 !== q2 || r2 !== k2) && Hi2(b2, g2, d2, k2);
      jh = false;
      r2 = b2.memoizedState;
      g2.state = r2;
      qh(b2, d2, g2, e2);
      var n = b2.memoizedState;
      h2 !== q2 || r2 !== n || Wf.current || jh ? ("function" === typeof y2 && (Di2(b2, c2, y2, d2), n = b2.memoizedState), (l2 = jh || Fi2(b2, c2, l2, d2, r2, n, k2) || false) ? (m2 || "function" !== typeof g2.UNSAFE_componentWillUpdate && "function" !== typeof g2.componentWillUpdate || ("function" === typeof g2.componentWillUpdate && g2.componentWillUpdate(d2, n, k2), "function" === typeof g2.UNSAFE_componentWillUpdate && g2.UNSAFE_componentWillUpdate(d2, n, k2)), "function" === typeof g2.componentDidUpdate && (b2.flags |= 4), "function" === typeof g2.getSnapshotBeforeUpdate && (b2.flags |= 1024)) : ("function" !== typeof g2.componentDidUpdate || h2 === a2.memoizedProps && r2 === a2.memoizedState || (b2.flags |= 4), "function" !== typeof g2.getSnapshotBeforeUpdate || h2 === a2.memoizedProps && r2 === a2.memoizedState || (b2.flags |= 1024), b2.memoizedProps = d2, b2.memoizedState = n), g2.props = d2, g2.state = n, g2.context = k2, d2 = l2) : ("function" !== typeof g2.componentDidUpdate || h2 === a2.memoizedProps && r2 === a2.memoizedState || (b2.flags |= 4), "function" !== typeof g2.getSnapshotBeforeUpdate || h2 === a2.memoizedProps && r2 === a2.memoizedState || (b2.flags |= 1024), d2 = false);
    }
    return jj(a2, b2, c2, d2, f2, e2);
  }
  function jj(a2, b2, c2, d2, e2, f2) {
    gj(a2, b2);
    var g2 = 0 !== (b2.flags & 128);
    if (!d2 && !g2) return e2 && dg(b2, c2, false), Zi2(a2, b2, f2);
    d2 = b2.stateNode;
    Wi2.current = b2;
    var h2 = g2 && "function" !== typeof c2.getDerivedStateFromError ? null : d2.render();
    b2.flags |= 1;
    null !== a2 && g2 ? (b2.child = Ug(b2, a2.child, null, f2), b2.child = Ug(b2, null, h2, f2)) : Xi2(a2, b2, h2, f2);
    b2.memoizedState = d2.state;
    e2 && dg(b2, c2, true);
    return b2.child;
  }
  function kj(a2) {
    var b2 = a2.stateNode;
    b2.pendingContext ? ag(a2, b2.pendingContext, b2.pendingContext !== b2.context) : b2.context && ag(a2, b2.context, false);
    yh(a2, b2.containerInfo);
  }
  function lj(a2, b2, c2, d2, e2) {
    Ig();
    Jg(e2);
    b2.flags |= 256;
    Xi2(a2, b2, c2, d2);
    return b2.child;
  }
  var mj = { dehydrated: null, treeContext: null, retryLane: 0 };
  function nj(a2) {
    return { baseLanes: a2, cachePool: null, transitions: null };
  }
  function oj(a2, b2, c2) {
    var d2 = b2.pendingProps, e2 = L2.current, f2 = false, g2 = 0 !== (b2.flags & 128), h2;
    (h2 = g2) || (h2 = null !== a2 && null === a2.memoizedState ? false : 0 !== (e2 & 2));
    if (h2) f2 = true, b2.flags &= -129;
    else if (null === a2 || null !== a2.memoizedState) e2 |= 1;
    G2(L2, e2 & 1);
    if (null === a2) {
      Eg(b2);
      a2 = b2.memoizedState;
      if (null !== a2 && (a2 = a2.dehydrated, null !== a2)) return 0 === (b2.mode & 1) ? b2.lanes = 1 : "$!" === a2.data ? b2.lanes = 8 : b2.lanes = 1073741824, null;
      g2 = d2.children;
      a2 = d2.fallback;
      return f2 ? (d2 = b2.mode, f2 = b2.child, g2 = { mode: "hidden", children: g2 }, 0 === (d2 & 1) && null !== f2 ? (f2.childLanes = 0, f2.pendingProps = g2) : f2 = pj(g2, d2, 0, null), a2 = Tg(a2, d2, c2, null), f2.return = b2, a2.return = b2, f2.sibling = a2, b2.child = f2, b2.child.memoizedState = nj(c2), b2.memoizedState = mj, a2) : qj(b2, g2);
    }
    e2 = a2.memoizedState;
    if (null !== e2 && (h2 = e2.dehydrated, null !== h2)) return rj(a2, b2, g2, d2, h2, e2, c2);
    if (f2) {
      f2 = d2.fallback;
      g2 = b2.mode;
      e2 = a2.child;
      h2 = e2.sibling;
      var k2 = { mode: "hidden", children: d2.children };
      0 === (g2 & 1) && b2.child !== e2 ? (d2 = b2.child, d2.childLanes = 0, d2.pendingProps = k2, b2.deletions = null) : (d2 = Pg(e2, k2), d2.subtreeFlags = e2.subtreeFlags & 14680064);
      null !== h2 ? f2 = Pg(h2, f2) : (f2 = Tg(f2, g2, c2, null), f2.flags |= 2);
      f2.return = b2;
      d2.return = b2;
      d2.sibling = f2;
      b2.child = d2;
      d2 = f2;
      f2 = b2.child;
      g2 = a2.child.memoizedState;
      g2 = null === g2 ? nj(c2) : { baseLanes: g2.baseLanes | c2, cachePool: null, transitions: g2.transitions };
      f2.memoizedState = g2;
      f2.childLanes = a2.childLanes & ~c2;
      b2.memoizedState = mj;
      return d2;
    }
    f2 = a2.child;
    a2 = f2.sibling;
    d2 = Pg(f2, { mode: "visible", children: d2.children });
    0 === (b2.mode & 1) && (d2.lanes = c2);
    d2.return = b2;
    d2.sibling = null;
    null !== a2 && (c2 = b2.deletions, null === c2 ? (b2.deletions = [a2], b2.flags |= 16) : c2.push(a2));
    b2.child = d2;
    b2.memoizedState = null;
    return d2;
  }
  function qj(a2, b2) {
    b2 = pj({ mode: "visible", children: b2 }, a2.mode, 0, null);
    b2.return = a2;
    return a2.child = b2;
  }
  function sj(a2, b2, c2, d2) {
    null !== d2 && Jg(d2);
    Ug(b2, a2.child, null, c2);
    a2 = qj(b2, b2.pendingProps.children);
    a2.flags |= 2;
    b2.memoizedState = null;
    return a2;
  }
  function rj(a2, b2, c2, d2, e2, f2, g2) {
    if (c2) {
      if (b2.flags & 256) return b2.flags &= -257, d2 = Ki2(Error(p2(422))), sj(a2, b2, g2, d2);
      if (null !== b2.memoizedState) return b2.child = a2.child, b2.flags |= 128, null;
      f2 = d2.fallback;
      e2 = b2.mode;
      d2 = pj({ mode: "visible", children: d2.children }, e2, 0, null);
      f2 = Tg(f2, e2, g2, null);
      f2.flags |= 2;
      d2.return = b2;
      f2.return = b2;
      d2.sibling = f2;
      b2.child = d2;
      0 !== (b2.mode & 1) && Ug(b2, a2.child, null, g2);
      b2.child.memoizedState = nj(g2);
      b2.memoizedState = mj;
      return f2;
    }
    if (0 === (b2.mode & 1)) return sj(a2, b2, g2, null);
    if ("$!" === e2.data) {
      d2 = e2.nextSibling && e2.nextSibling.dataset;
      if (d2) var h2 = d2.dgst;
      d2 = h2;
      f2 = Error(p2(419));
      d2 = Ki2(f2, d2, void 0);
      return sj(a2, b2, g2, d2);
    }
    h2 = 0 !== (g2 & a2.childLanes);
    if (dh || h2) {
      d2 = Q2;
      if (null !== d2) {
        switch (g2 & -g2) {
          case 4:
            e2 = 2;
            break;
          case 16:
            e2 = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            e2 = 32;
            break;
          case 536870912:
            e2 = 268435456;
            break;
          default:
            e2 = 0;
        }
        e2 = 0 !== (e2 & (d2.suspendedLanes | g2)) ? 0 : e2;
        0 !== e2 && e2 !== f2.retryLane && (f2.retryLane = e2, ih(a2, e2), gi2(d2, a2, e2, -1));
      }
      tj();
      d2 = Ki2(Error(p2(421)));
      return sj(a2, b2, g2, d2);
    }
    if ("$?" === e2.data) return b2.flags |= 128, b2.child = a2.child, b2 = uj.bind(null, a2), e2._reactRetry = b2, null;
    a2 = f2.treeContext;
    yg = Lf(e2.nextSibling);
    xg = b2;
    I2 = true;
    zg = null;
    null !== a2 && (og[pg++] = rg, og[pg++] = sg, og[pg++] = qg, rg = a2.id, sg = a2.overflow, qg = b2);
    b2 = qj(b2, d2.children);
    b2.flags |= 4096;
    return b2;
  }
  function vj(a2, b2, c2) {
    a2.lanes |= b2;
    var d2 = a2.alternate;
    null !== d2 && (d2.lanes |= b2);
    bh(a2.return, b2, c2);
  }
  function wj(a2, b2, c2, d2, e2) {
    var f2 = a2.memoizedState;
    null === f2 ? a2.memoizedState = { isBackwards: b2, rendering: null, renderingStartTime: 0, last: d2, tail: c2, tailMode: e2 } : (f2.isBackwards = b2, f2.rendering = null, f2.renderingStartTime = 0, f2.last = d2, f2.tail = c2, f2.tailMode = e2);
  }
  function xj(a2, b2, c2) {
    var d2 = b2.pendingProps, e2 = d2.revealOrder, f2 = d2.tail;
    Xi2(a2, b2, d2.children, c2);
    d2 = L2.current;
    if (0 !== (d2 & 2)) d2 = d2 & 1 | 2, b2.flags |= 128;
    else {
      if (null !== a2 && 0 !== (a2.flags & 128)) a: for (a2 = b2.child; null !== a2; ) {
        if (13 === a2.tag) null !== a2.memoizedState && vj(a2, c2, b2);
        else if (19 === a2.tag) vj(a2, c2, b2);
        else if (null !== a2.child) {
          a2.child.return = a2;
          a2 = a2.child;
          continue;
        }
        if (a2 === b2) break a;
        for (; null === a2.sibling; ) {
          if (null === a2.return || a2.return === b2) break a;
          a2 = a2.return;
        }
        a2.sibling.return = a2.return;
        a2 = a2.sibling;
      }
      d2 &= 1;
    }
    G2(L2, d2);
    if (0 === (b2.mode & 1)) b2.memoizedState = null;
    else switch (e2) {
      case "forwards":
        c2 = b2.child;
        for (e2 = null; null !== c2; ) a2 = c2.alternate, null !== a2 && null === Ch(a2) && (e2 = c2), c2 = c2.sibling;
        c2 = e2;
        null === c2 ? (e2 = b2.child, b2.child = null) : (e2 = c2.sibling, c2.sibling = null);
        wj(b2, false, e2, c2, f2);
        break;
      case "backwards":
        c2 = null;
        e2 = b2.child;
        for (b2.child = null; null !== e2; ) {
          a2 = e2.alternate;
          if (null !== a2 && null === Ch(a2)) {
            b2.child = e2;
            break;
          }
          a2 = e2.sibling;
          e2.sibling = c2;
          c2 = e2;
          e2 = a2;
        }
        wj(b2, true, c2, null, f2);
        break;
      case "together":
        wj(b2, false, null, null, void 0);
        break;
      default:
        b2.memoizedState = null;
    }
    return b2.child;
  }
  function ij(a2, b2) {
    0 === (b2.mode & 1) && null !== a2 && (a2.alternate = null, b2.alternate = null, b2.flags |= 2);
  }
  function Zi2(a2, b2, c2) {
    null !== a2 && (b2.dependencies = a2.dependencies);
    rh |= b2.lanes;
    if (0 === (c2 & b2.childLanes)) return null;
    if (null !== a2 && b2.child !== a2.child) throw Error(p2(153));
    if (null !== b2.child) {
      a2 = b2.child;
      c2 = Pg(a2, a2.pendingProps);
      b2.child = c2;
      for (c2.return = b2; null !== a2.sibling; ) a2 = a2.sibling, c2 = c2.sibling = Pg(a2, a2.pendingProps), c2.return = b2;
      c2.sibling = null;
    }
    return b2.child;
  }
  function yj(a2, b2, c2) {
    switch (b2.tag) {
      case 3:
        kj(b2);
        Ig();
        break;
      case 5:
        Ah(b2);
        break;
      case 1:
        Zf(b2.type) && cg(b2);
        break;
      case 4:
        yh(b2, b2.stateNode.containerInfo);
        break;
      case 10:
        var d2 = b2.type._context, e2 = b2.memoizedProps.value;
        G2(Wg, d2._currentValue);
        d2._currentValue = e2;
        break;
      case 13:
        d2 = b2.memoizedState;
        if (null !== d2) {
          if (null !== d2.dehydrated) return G2(L2, L2.current & 1), b2.flags |= 128, null;
          if (0 !== (c2 & b2.child.childLanes)) return oj(a2, b2, c2);
          G2(L2, L2.current & 1);
          a2 = Zi2(a2, b2, c2);
          return null !== a2 ? a2.sibling : null;
        }
        G2(L2, L2.current & 1);
        break;
      case 19:
        d2 = 0 !== (c2 & b2.childLanes);
        if (0 !== (a2.flags & 128)) {
          if (d2) return xj(a2, b2, c2);
          b2.flags |= 128;
        }
        e2 = b2.memoizedState;
        null !== e2 && (e2.rendering = null, e2.tail = null, e2.lastEffect = null);
        G2(L2, L2.current);
        if (d2) break;
        else return null;
      case 22:
      case 23:
        return b2.lanes = 0, dj(a2, b2, c2);
    }
    return Zi2(a2, b2, c2);
  }
  var zj, Aj, Bj, Cj;
  zj = function(a2, b2) {
    for (var c2 = b2.child; null !== c2; ) {
      if (5 === c2.tag || 6 === c2.tag) a2.appendChild(c2.stateNode);
      else if (4 !== c2.tag && null !== c2.child) {
        c2.child.return = c2;
        c2 = c2.child;
        continue;
      }
      if (c2 === b2) break;
      for (; null === c2.sibling; ) {
        if (null === c2.return || c2.return === b2) return;
        c2 = c2.return;
      }
      c2.sibling.return = c2.return;
      c2 = c2.sibling;
    }
  };
  Aj = function() {
  };
  Bj = function(a2, b2, c2, d2) {
    var e2 = a2.memoizedProps;
    if (e2 !== d2) {
      a2 = b2.stateNode;
      xh(uh.current);
      var f2 = null;
      switch (c2) {
        case "input":
          e2 = Ya(a2, e2);
          d2 = Ya(a2, d2);
          f2 = [];
          break;
        case "select":
          e2 = A2({}, e2, { value: void 0 });
          d2 = A2({}, d2, { value: void 0 });
          f2 = [];
          break;
        case "textarea":
          e2 = gb(a2, e2);
          d2 = gb(a2, d2);
          f2 = [];
          break;
        default:
          "function" !== typeof e2.onClick && "function" === typeof d2.onClick && (a2.onclick = Bf);
      }
      ub(c2, d2);
      var g2;
      c2 = null;
      for (l2 in e2) if (!d2.hasOwnProperty(l2) && e2.hasOwnProperty(l2) && null != e2[l2]) if ("style" === l2) {
        var h2 = e2[l2];
        for (g2 in h2) h2.hasOwnProperty(g2) && (c2 || (c2 = {}), c2[g2] = "");
      } else "dangerouslySetInnerHTML" !== l2 && "children" !== l2 && "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && "autoFocus" !== l2 && (ea.hasOwnProperty(l2) ? f2 || (f2 = []) : (f2 = f2 || []).push(l2, null));
      for (l2 in d2) {
        var k2 = d2[l2];
        h2 = null != e2 ? e2[l2] : void 0;
        if (d2.hasOwnProperty(l2) && k2 !== h2 && (null != k2 || null != h2)) if ("style" === l2) if (h2) {
          for (g2 in h2) !h2.hasOwnProperty(g2) || k2 && k2.hasOwnProperty(g2) || (c2 || (c2 = {}), c2[g2] = "");
          for (g2 in k2) k2.hasOwnProperty(g2) && h2[g2] !== k2[g2] && (c2 || (c2 = {}), c2[g2] = k2[g2]);
        } else c2 || (f2 || (f2 = []), f2.push(
          l2,
          c2
        )), c2 = k2;
        else "dangerouslySetInnerHTML" === l2 ? (k2 = k2 ? k2.__html : void 0, h2 = h2 ? h2.__html : void 0, null != k2 && h2 !== k2 && (f2 = f2 || []).push(l2, k2)) : "children" === l2 ? "string" !== typeof k2 && "number" !== typeof k2 || (f2 = f2 || []).push(l2, "" + k2) : "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && (ea.hasOwnProperty(l2) ? (null != k2 && "onScroll" === l2 && D2("scroll", a2), f2 || h2 === k2 || (f2 = [])) : (f2 = f2 || []).push(l2, k2));
      }
      c2 && (f2 = f2 || []).push("style", c2);
      var l2 = f2;
      if (b2.updateQueue = l2) b2.flags |= 4;
    }
  };
  Cj = function(a2, b2, c2, d2) {
    c2 !== d2 && (b2.flags |= 4);
  };
  function Dj(a2, b2) {
    if (!I2) switch (a2.tailMode) {
      case "hidden":
        b2 = a2.tail;
        for (var c2 = null; null !== b2; ) null !== b2.alternate && (c2 = b2), b2 = b2.sibling;
        null === c2 ? a2.tail = null : c2.sibling = null;
        break;
      case "collapsed":
        c2 = a2.tail;
        for (var d2 = null; null !== c2; ) null !== c2.alternate && (d2 = c2), c2 = c2.sibling;
        null === d2 ? b2 || null === a2.tail ? a2.tail = null : a2.tail.sibling = null : d2.sibling = null;
    }
  }
  function S2(a2) {
    var b2 = null !== a2.alternate && a2.alternate.child === a2.child, c2 = 0, d2 = 0;
    if (b2) for (var e2 = a2.child; null !== e2; ) c2 |= e2.lanes | e2.childLanes, d2 |= e2.subtreeFlags & 14680064, d2 |= e2.flags & 14680064, e2.return = a2, e2 = e2.sibling;
    else for (e2 = a2.child; null !== e2; ) c2 |= e2.lanes | e2.childLanes, d2 |= e2.subtreeFlags, d2 |= e2.flags, e2.return = a2, e2 = e2.sibling;
    a2.subtreeFlags |= d2;
    a2.childLanes = c2;
    return b2;
  }
  function Ej(a2, b2, c2) {
    var d2 = b2.pendingProps;
    wg(b2);
    switch (b2.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return S2(b2), null;
      case 1:
        return Zf(b2.type) && $f(), S2(b2), null;
      case 3:
        d2 = b2.stateNode;
        zh();
        E2(Wf);
        E2(H2);
        Eh();
        d2.pendingContext && (d2.context = d2.pendingContext, d2.pendingContext = null);
        if (null === a2 || null === a2.child) Gg(b2) ? b2.flags |= 4 : null === a2 || a2.memoizedState.isDehydrated && 0 === (b2.flags & 256) || (b2.flags |= 1024, null !== zg && (Fj(zg), zg = null));
        Aj(a2, b2);
        S2(b2);
        return null;
      case 5:
        Bh(b2);
        var e2 = xh(wh.current);
        c2 = b2.type;
        if (null !== a2 && null != b2.stateNode) Bj(a2, b2, c2, d2, e2), a2.ref !== b2.ref && (b2.flags |= 512, b2.flags |= 2097152);
        else {
          if (!d2) {
            if (null === b2.stateNode) throw Error(p2(166));
            S2(b2);
            return null;
          }
          a2 = xh(uh.current);
          if (Gg(b2)) {
            d2 = b2.stateNode;
            c2 = b2.type;
            var f2 = b2.memoizedProps;
            d2[Of] = b2;
            d2[Pf] = f2;
            a2 = 0 !== (b2.mode & 1);
            switch (c2) {
              case "dialog":
                D2("cancel", d2);
                D2("close", d2);
                break;
              case "iframe":
              case "object":
              case "embed":
                D2("load", d2);
                break;
              case "video":
              case "audio":
                for (e2 = 0; e2 < lf.length; e2++) D2(lf[e2], d2);
                break;
              case "source":
                D2("error", d2);
                break;
              case "img":
              case "image":
              case "link":
                D2(
                  "error",
                  d2
                );
                D2("load", d2);
                break;
              case "details":
                D2("toggle", d2);
                break;
              case "input":
                Za(d2, f2);
                D2("invalid", d2);
                break;
              case "select":
                d2._wrapperState = { wasMultiple: !!f2.multiple };
                D2("invalid", d2);
                break;
              case "textarea":
                hb(d2, f2), D2("invalid", d2);
            }
            ub(c2, f2);
            e2 = null;
            for (var g2 in f2) if (f2.hasOwnProperty(g2)) {
              var h2 = f2[g2];
              "children" === g2 ? "string" === typeof h2 ? d2.textContent !== h2 && (true !== f2.suppressHydrationWarning && Af(d2.textContent, h2, a2), e2 = ["children", h2]) : "number" === typeof h2 && d2.textContent !== "" + h2 && (true !== f2.suppressHydrationWarning && Af(
                d2.textContent,
                h2,
                a2
              ), e2 = ["children", "" + h2]) : ea.hasOwnProperty(g2) && null != h2 && "onScroll" === g2 && D2("scroll", d2);
            }
            switch (c2) {
              case "input":
                Va(d2);
                db(d2, f2, true);
                break;
              case "textarea":
                Va(d2);
                jb(d2);
                break;
              case "select":
              case "option":
                break;
              default:
                "function" === typeof f2.onClick && (d2.onclick = Bf);
            }
            d2 = e2;
            b2.updateQueue = d2;
            null !== d2 && (b2.flags |= 4);
          } else {
            g2 = 9 === e2.nodeType ? e2 : e2.ownerDocument;
            "http://www.w3.org/1999/xhtml" === a2 && (a2 = kb(c2));
            "http://www.w3.org/1999/xhtml" === a2 ? "script" === c2 ? (a2 = g2.createElement("div"), a2.innerHTML = "<script><\/script>", a2 = a2.removeChild(a2.firstChild)) : "string" === typeof d2.is ? a2 = g2.createElement(c2, { is: d2.is }) : (a2 = g2.createElement(c2), "select" === c2 && (g2 = a2, d2.multiple ? g2.multiple = true : d2.size && (g2.size = d2.size))) : a2 = g2.createElementNS(a2, c2);
            a2[Of] = b2;
            a2[Pf] = d2;
            zj(a2, b2, false, false);
            b2.stateNode = a2;
            a: {
              g2 = vb(c2, d2);
              switch (c2) {
                case "dialog":
                  D2("cancel", a2);
                  D2("close", a2);
                  e2 = d2;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  D2("load", a2);
                  e2 = d2;
                  break;
                case "video":
                case "audio":
                  for (e2 = 0; e2 < lf.length; e2++) D2(lf[e2], a2);
                  e2 = d2;
                  break;
                case "source":
                  D2("error", a2);
                  e2 = d2;
                  break;
                case "img":
                case "image":
                case "link":
                  D2(
                    "error",
                    a2
                  );
                  D2("load", a2);
                  e2 = d2;
                  break;
                case "details":
                  D2("toggle", a2);
                  e2 = d2;
                  break;
                case "input":
                  Za(a2, d2);
                  e2 = Ya(a2, d2);
                  D2("invalid", a2);
                  break;
                case "option":
                  e2 = d2;
                  break;
                case "select":
                  a2._wrapperState = { wasMultiple: !!d2.multiple };
                  e2 = A2({}, d2, { value: void 0 });
                  D2("invalid", a2);
                  break;
                case "textarea":
                  hb(a2, d2);
                  e2 = gb(a2, d2);
                  D2("invalid", a2);
                  break;
                default:
                  e2 = d2;
              }
              ub(c2, e2);
              h2 = e2;
              for (f2 in h2) if (h2.hasOwnProperty(f2)) {
                var k2 = h2[f2];
                "style" === f2 ? sb(a2, k2) : "dangerouslySetInnerHTML" === f2 ? (k2 = k2 ? k2.__html : void 0, null != k2 && nb(a2, k2)) : "children" === f2 ? "string" === typeof k2 ? ("textarea" !== c2 || "" !== k2) && ob(a2, k2) : "number" === typeof k2 && ob(a2, "" + k2) : "suppressContentEditableWarning" !== f2 && "suppressHydrationWarning" !== f2 && "autoFocus" !== f2 && (ea.hasOwnProperty(f2) ? null != k2 && "onScroll" === f2 && D2("scroll", a2) : null != k2 && ta(a2, f2, k2, g2));
              }
              switch (c2) {
                case "input":
                  Va(a2);
                  db(a2, d2, false);
                  break;
                case "textarea":
                  Va(a2);
                  jb(a2);
                  break;
                case "option":
                  null != d2.value && a2.setAttribute("value", "" + Sa(d2.value));
                  break;
                case "select":
                  a2.multiple = !!d2.multiple;
                  f2 = d2.value;
                  null != f2 ? fb(a2, !!d2.multiple, f2, false) : null != d2.defaultValue && fb(
                    a2,
                    !!d2.multiple,
                    d2.defaultValue,
                    true
                  );
                  break;
                default:
                  "function" === typeof e2.onClick && (a2.onclick = Bf);
              }
              switch (c2) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  d2 = !!d2.autoFocus;
                  break a;
                case "img":
                  d2 = true;
                  break a;
                default:
                  d2 = false;
              }
            }
            d2 && (b2.flags |= 4);
          }
          null !== b2.ref && (b2.flags |= 512, b2.flags |= 2097152);
        }
        S2(b2);
        return null;
      case 6:
        if (a2 && null != b2.stateNode) Cj(a2, b2, a2.memoizedProps, d2);
        else {
          if ("string" !== typeof d2 && null === b2.stateNode) throw Error(p2(166));
          c2 = xh(wh.current);
          xh(uh.current);
          if (Gg(b2)) {
            d2 = b2.stateNode;
            c2 = b2.memoizedProps;
            d2[Of] = b2;
            if (f2 = d2.nodeValue !== c2) {
              if (a2 = xg, null !== a2) switch (a2.tag) {
                case 3:
                  Af(d2.nodeValue, c2, 0 !== (a2.mode & 1));
                  break;
                case 5:
                  true !== a2.memoizedProps.suppressHydrationWarning && Af(d2.nodeValue, c2, 0 !== (a2.mode & 1));
              }
            }
            f2 && (b2.flags |= 4);
          } else d2 = (9 === c2.nodeType ? c2 : c2.ownerDocument).createTextNode(d2), d2[Of] = b2, b2.stateNode = d2;
        }
        S2(b2);
        return null;
      case 13:
        E2(L2);
        d2 = b2.memoizedState;
        if (null === a2 || null !== a2.memoizedState && null !== a2.memoizedState.dehydrated) {
          if (I2 && null !== yg && 0 !== (b2.mode & 1) && 0 === (b2.flags & 128)) Hg(), Ig(), b2.flags |= 98560, f2 = false;
          else if (f2 = Gg(b2), null !== d2 && null !== d2.dehydrated) {
            if (null === a2) {
              if (!f2) throw Error(p2(318));
              f2 = b2.memoizedState;
              f2 = null !== f2 ? f2.dehydrated : null;
              if (!f2) throw Error(p2(317));
              f2[Of] = b2;
            } else Ig(), 0 === (b2.flags & 128) && (b2.memoizedState = null), b2.flags |= 4;
            S2(b2);
            f2 = false;
          } else null !== zg && (Fj(zg), zg = null), f2 = true;
          if (!f2) return b2.flags & 65536 ? b2 : null;
        }
        if (0 !== (b2.flags & 128)) return b2.lanes = c2, b2;
        d2 = null !== d2;
        d2 !== (null !== a2 && null !== a2.memoizedState) && d2 && (b2.child.flags |= 8192, 0 !== (b2.mode & 1) && (null === a2 || 0 !== (L2.current & 1) ? 0 === T2 && (T2 = 3) : tj()));
        null !== b2.updateQueue && (b2.flags |= 4);
        S2(b2);
        return null;
      case 4:
        return zh(), Aj(a2, b2), null === a2 && sf(b2.stateNode.containerInfo), S2(b2), null;
      case 10:
        return ah(b2.type._context), S2(b2), null;
      case 17:
        return Zf(b2.type) && $f(), S2(b2), null;
      case 19:
        E2(L2);
        f2 = b2.memoizedState;
        if (null === f2) return S2(b2), null;
        d2 = 0 !== (b2.flags & 128);
        g2 = f2.rendering;
        if (null === g2) if (d2) Dj(f2, false);
        else {
          if (0 !== T2 || null !== a2 && 0 !== (a2.flags & 128)) for (a2 = b2.child; null !== a2; ) {
            g2 = Ch(a2);
            if (null !== g2) {
              b2.flags |= 128;
              Dj(f2, false);
              d2 = g2.updateQueue;
              null !== d2 && (b2.updateQueue = d2, b2.flags |= 4);
              b2.subtreeFlags = 0;
              d2 = c2;
              for (c2 = b2.child; null !== c2; ) f2 = c2, a2 = d2, f2.flags &= 14680066, g2 = f2.alternate, null === g2 ? (f2.childLanes = 0, f2.lanes = a2, f2.child = null, f2.subtreeFlags = 0, f2.memoizedProps = null, f2.memoizedState = null, f2.updateQueue = null, f2.dependencies = null, f2.stateNode = null) : (f2.childLanes = g2.childLanes, f2.lanes = g2.lanes, f2.child = g2.child, f2.subtreeFlags = 0, f2.deletions = null, f2.memoizedProps = g2.memoizedProps, f2.memoizedState = g2.memoizedState, f2.updateQueue = g2.updateQueue, f2.type = g2.type, a2 = g2.dependencies, f2.dependencies = null === a2 ? null : { lanes: a2.lanes, firstContext: a2.firstContext }), c2 = c2.sibling;
              G2(L2, L2.current & 1 | 2);
              return b2.child;
            }
            a2 = a2.sibling;
          }
          null !== f2.tail && B2() > Gj && (b2.flags |= 128, d2 = true, Dj(f2, false), b2.lanes = 4194304);
        }
        else {
          if (!d2) if (a2 = Ch(g2), null !== a2) {
            if (b2.flags |= 128, d2 = true, c2 = a2.updateQueue, null !== c2 && (b2.updateQueue = c2, b2.flags |= 4), Dj(f2, true), null === f2.tail && "hidden" === f2.tailMode && !g2.alternate && !I2) return S2(b2), null;
          } else 2 * B2() - f2.renderingStartTime > Gj && 1073741824 !== c2 && (b2.flags |= 128, d2 = true, Dj(f2, false), b2.lanes = 4194304);
          f2.isBackwards ? (g2.sibling = b2.child, b2.child = g2) : (c2 = f2.last, null !== c2 ? c2.sibling = g2 : b2.child = g2, f2.last = g2);
        }
        if (null !== f2.tail) return b2 = f2.tail, f2.rendering = b2, f2.tail = b2.sibling, f2.renderingStartTime = B2(), b2.sibling = null, c2 = L2.current, G2(L2, d2 ? c2 & 1 | 2 : c2 & 1), b2;
        S2(b2);
        return null;
      case 22:
      case 23:
        return Hj(), d2 = null !== b2.memoizedState, null !== a2 && null !== a2.memoizedState !== d2 && (b2.flags |= 8192), d2 && 0 !== (b2.mode & 1) ? 0 !== (fj & 1073741824) && (S2(b2), b2.subtreeFlags & 6 && (b2.flags |= 8192)) : S2(b2), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(p2(156, b2.tag));
  }
  function Ij(a2, b2) {
    wg(b2);
    switch (b2.tag) {
      case 1:
        return Zf(b2.type) && $f(), a2 = b2.flags, a2 & 65536 ? (b2.flags = a2 & -65537 | 128, b2) : null;
      case 3:
        return zh(), E2(Wf), E2(H2), Eh(), a2 = b2.flags, 0 !== (a2 & 65536) && 0 === (a2 & 128) ? (b2.flags = a2 & -65537 | 128, b2) : null;
      case 5:
        return Bh(b2), null;
      case 13:
        E2(L2);
        a2 = b2.memoizedState;
        if (null !== a2 && null !== a2.dehydrated) {
          if (null === b2.alternate) throw Error(p2(340));
          Ig();
        }
        a2 = b2.flags;
        return a2 & 65536 ? (b2.flags = a2 & -65537 | 128, b2) : null;
      case 19:
        return E2(L2), null;
      case 4:
        return zh(), null;
      case 10:
        return ah(b2.type._context), null;
      case 22:
      case 23:
        return Hj(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Jj = false, U2 = false, Kj = "function" === typeof WeakSet ? WeakSet : Set, V2 = null;
  function Lj(a2, b2) {
    var c2 = a2.ref;
    if (null !== c2) if ("function" === typeof c2) try {
      c2(null);
    } catch (d2) {
      W2(a2, b2, d2);
    }
    else c2.current = null;
  }
  function Mj(a2, b2, c2) {
    try {
      c2();
    } catch (d2) {
      W2(a2, b2, d2);
    }
  }
  var Nj = false;
  function Oj(a2, b2) {
    Cf = dd;
    a2 = Me2();
    if (Ne(a2)) {
      if ("selectionStart" in a2) var c2 = { start: a2.selectionStart, end: a2.selectionEnd };
      else a: {
        c2 = (c2 = a2.ownerDocument) && c2.defaultView || window;
        var d2 = c2.getSelection && c2.getSelection();
        if (d2 && 0 !== d2.rangeCount) {
          c2 = d2.anchorNode;
          var e2 = d2.anchorOffset, f2 = d2.focusNode;
          d2 = d2.focusOffset;
          try {
            c2.nodeType, f2.nodeType;
          } catch (F2) {
            c2 = null;
            break a;
          }
          var g2 = 0, h2 = -1, k2 = -1, l2 = 0, m2 = 0, q2 = a2, r2 = null;
          b: for (; ; ) {
            for (var y2; ; ) {
              q2 !== c2 || 0 !== e2 && 3 !== q2.nodeType || (h2 = g2 + e2);
              q2 !== f2 || 0 !== d2 && 3 !== q2.nodeType || (k2 = g2 + d2);
              3 === q2.nodeType && (g2 += q2.nodeValue.length);
              if (null === (y2 = q2.firstChild)) break;
              r2 = q2;
              q2 = y2;
            }
            for (; ; ) {
              if (q2 === a2) break b;
              r2 === c2 && ++l2 === e2 && (h2 = g2);
              r2 === f2 && ++m2 === d2 && (k2 = g2);
              if (null !== (y2 = q2.nextSibling)) break;
              q2 = r2;
              r2 = q2.parentNode;
            }
            q2 = y2;
          }
          c2 = -1 === h2 || -1 === k2 ? null : { start: h2, end: k2 };
        } else c2 = null;
      }
      c2 = c2 || { start: 0, end: 0 };
    } else c2 = null;
    Df = { focusedElem: a2, selectionRange: c2 };
    dd = false;
    for (V2 = b2; null !== V2; ) if (b2 = V2, a2 = b2.child, 0 !== (b2.subtreeFlags & 1028) && null !== a2) a2.return = b2, V2 = a2;
    else for (; null !== V2; ) {
      b2 = V2;
      try {
        var n = b2.alternate;
        if (0 !== (b2.flags & 1024)) switch (b2.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (null !== n) {
              var t = n.memoizedProps, J2 = n.memoizedState, x2 = b2.stateNode, w2 = x2.getSnapshotBeforeUpdate(b2.elementType === b2.type ? t : Ci2(b2.type, t), J2);
              x2.__reactInternalSnapshotBeforeUpdate = w2;
            }
            break;
          case 3:
            var u2 = b2.stateNode.containerInfo;
            1 === u2.nodeType ? u2.textContent = "" : 9 === u2.nodeType && u2.documentElement && u2.removeChild(u2.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(p2(163));
        }
      } catch (F2) {
        W2(b2, b2.return, F2);
      }
      a2 = b2.sibling;
      if (null !== a2) {
        a2.return = b2.return;
        V2 = a2;
        break;
      }
      V2 = b2.return;
    }
    n = Nj;
    Nj = false;
    return n;
  }
  function Pj(a2, b2, c2) {
    var d2 = b2.updateQueue;
    d2 = null !== d2 ? d2.lastEffect : null;
    if (null !== d2) {
      var e2 = d2 = d2.next;
      do {
        if ((e2.tag & a2) === a2) {
          var f2 = e2.destroy;
          e2.destroy = void 0;
          void 0 !== f2 && Mj(b2, c2, f2);
        }
        e2 = e2.next;
      } while (e2 !== d2);
    }
  }
  function Qj(a2, b2) {
    b2 = b2.updateQueue;
    b2 = null !== b2 ? b2.lastEffect : null;
    if (null !== b2) {
      var c2 = b2 = b2.next;
      do {
        if ((c2.tag & a2) === a2) {
          var d2 = c2.create;
          c2.destroy = d2();
        }
        c2 = c2.next;
      } while (c2 !== b2);
    }
  }
  function Rj(a2) {
    var b2 = a2.ref;
    if (null !== b2) {
      var c2 = a2.stateNode;
      switch (a2.tag) {
        case 5:
          a2 = c2;
          break;
        default:
          a2 = c2;
      }
      "function" === typeof b2 ? b2(a2) : b2.current = a2;
    }
  }
  function Sj(a2) {
    var b2 = a2.alternate;
    null !== b2 && (a2.alternate = null, Sj(b2));
    a2.child = null;
    a2.deletions = null;
    a2.sibling = null;
    5 === a2.tag && (b2 = a2.stateNode, null !== b2 && (delete b2[Of], delete b2[Pf], delete b2[of], delete b2[Qf], delete b2[Rf]));
    a2.stateNode = null;
    a2.return = null;
    a2.dependencies = null;
    a2.memoizedProps = null;
    a2.memoizedState = null;
    a2.pendingProps = null;
    a2.stateNode = null;
    a2.updateQueue = null;
  }
  function Tj(a2) {
    return 5 === a2.tag || 3 === a2.tag || 4 === a2.tag;
  }
  function Uj(a2) {
    a: for (; ; ) {
      for (; null === a2.sibling; ) {
        if (null === a2.return || Tj(a2.return)) return null;
        a2 = a2.return;
      }
      a2.sibling.return = a2.return;
      for (a2 = a2.sibling; 5 !== a2.tag && 6 !== a2.tag && 18 !== a2.tag; ) {
        if (a2.flags & 2) continue a;
        if (null === a2.child || 4 === a2.tag) continue a;
        else a2.child.return = a2, a2 = a2.child;
      }
      if (!(a2.flags & 2)) return a2.stateNode;
    }
  }
  function Vj(a2, b2, c2) {
    var d2 = a2.tag;
    if (5 === d2 || 6 === d2) a2 = a2.stateNode, b2 ? 8 === c2.nodeType ? c2.parentNode.insertBefore(a2, b2) : c2.insertBefore(a2, b2) : (8 === c2.nodeType ? (b2 = c2.parentNode, b2.insertBefore(a2, c2)) : (b2 = c2, b2.appendChild(a2)), c2 = c2._reactRootContainer, null !== c2 && void 0 !== c2 || null !== b2.onclick || (b2.onclick = Bf));
    else if (4 !== d2 && (a2 = a2.child, null !== a2)) for (Vj(a2, b2, c2), a2 = a2.sibling; null !== a2; ) Vj(a2, b2, c2), a2 = a2.sibling;
  }
  function Wj(a2, b2, c2) {
    var d2 = a2.tag;
    if (5 === d2 || 6 === d2) a2 = a2.stateNode, b2 ? c2.insertBefore(a2, b2) : c2.appendChild(a2);
    else if (4 !== d2 && (a2 = a2.child, null !== a2)) for (Wj(a2, b2, c2), a2 = a2.sibling; null !== a2; ) Wj(a2, b2, c2), a2 = a2.sibling;
  }
  var X2 = null, Xj = false;
  function Yj(a2, b2, c2) {
    for (c2 = c2.child; null !== c2; ) Zj(a2, b2, c2), c2 = c2.sibling;
  }
  function Zj(a2, b2, c2) {
    if (lc && "function" === typeof lc.onCommitFiberUnmount) try {
      lc.onCommitFiberUnmount(kc, c2);
    } catch (h2) {
    }
    switch (c2.tag) {
      case 5:
        U2 || Lj(c2, b2);
      case 6:
        var d2 = X2, e2 = Xj;
        X2 = null;
        Yj(a2, b2, c2);
        X2 = d2;
        Xj = e2;
        null !== X2 && (Xj ? (a2 = X2, c2 = c2.stateNode, 8 === a2.nodeType ? a2.parentNode.removeChild(c2) : a2.removeChild(c2)) : X2.removeChild(c2.stateNode));
        break;
      case 18:
        null !== X2 && (Xj ? (a2 = X2, c2 = c2.stateNode, 8 === a2.nodeType ? Kf(a2.parentNode, c2) : 1 === a2.nodeType && Kf(a2, c2), bd(a2)) : Kf(X2, c2.stateNode));
        break;
      case 4:
        d2 = X2;
        e2 = Xj;
        X2 = c2.stateNode.containerInfo;
        Xj = true;
        Yj(a2, b2, c2);
        X2 = d2;
        Xj = e2;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!U2 && (d2 = c2.updateQueue, null !== d2 && (d2 = d2.lastEffect, null !== d2))) {
          e2 = d2 = d2.next;
          do {
            var f2 = e2, g2 = f2.destroy;
            f2 = f2.tag;
            void 0 !== g2 && (0 !== (f2 & 2) ? Mj(c2, b2, g2) : 0 !== (f2 & 4) && Mj(c2, b2, g2));
            e2 = e2.next;
          } while (e2 !== d2);
        }
        Yj(a2, b2, c2);
        break;
      case 1:
        if (!U2 && (Lj(c2, b2), d2 = c2.stateNode, "function" === typeof d2.componentWillUnmount)) try {
          d2.props = c2.memoizedProps, d2.state = c2.memoizedState, d2.componentWillUnmount();
        } catch (h2) {
          W2(c2, b2, h2);
        }
        Yj(a2, b2, c2);
        break;
      case 21:
        Yj(a2, b2, c2);
        break;
      case 22:
        c2.mode & 1 ? (U2 = (d2 = U2) || null !== c2.memoizedState, Yj(a2, b2, c2), U2 = d2) : Yj(a2, b2, c2);
        break;
      default:
        Yj(a2, b2, c2);
    }
  }
  function ak(a2) {
    var b2 = a2.updateQueue;
    if (null !== b2) {
      a2.updateQueue = null;
      var c2 = a2.stateNode;
      null === c2 && (c2 = a2.stateNode = new Kj());
      b2.forEach(function(b3) {
        var d2 = bk.bind(null, a2, b3);
        c2.has(b3) || (c2.add(b3), b3.then(d2, d2));
      });
    }
  }
  function ck(a2, b2) {
    var c2 = b2.deletions;
    if (null !== c2) for (var d2 = 0; d2 < c2.length; d2++) {
      var e2 = c2[d2];
      try {
        var f2 = a2, g2 = b2, h2 = g2;
        a: for (; null !== h2; ) {
          switch (h2.tag) {
            case 5:
              X2 = h2.stateNode;
              Xj = false;
              break a;
            case 3:
              X2 = h2.stateNode.containerInfo;
              Xj = true;
              break a;
            case 4:
              X2 = h2.stateNode.containerInfo;
              Xj = true;
              break a;
          }
          h2 = h2.return;
        }
        if (null === X2) throw Error(p2(160));
        Zj(f2, g2, e2);
        X2 = null;
        Xj = false;
        var k2 = e2.alternate;
        null !== k2 && (k2.return = null);
        e2.return = null;
      } catch (l2) {
        W2(e2, b2, l2);
      }
    }
    if (b2.subtreeFlags & 12854) for (b2 = b2.child; null !== b2; ) dk(b2, a2), b2 = b2.sibling;
  }
  function dk(a2, b2) {
    var c2 = a2.alternate, d2 = a2.flags;
    switch (a2.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        ck(b2, a2);
        ek(a2);
        if (d2 & 4) {
          try {
            Pj(3, a2, a2.return), Qj(3, a2);
          } catch (t) {
            W2(a2, a2.return, t);
          }
          try {
            Pj(5, a2, a2.return);
          } catch (t) {
            W2(a2, a2.return, t);
          }
        }
        break;
      case 1:
        ck(b2, a2);
        ek(a2);
        d2 & 512 && null !== c2 && Lj(c2, c2.return);
        break;
      case 5:
        ck(b2, a2);
        ek(a2);
        d2 & 512 && null !== c2 && Lj(c2, c2.return);
        if (a2.flags & 32) {
          var e2 = a2.stateNode;
          try {
            ob(e2, "");
          } catch (t) {
            W2(a2, a2.return, t);
          }
        }
        if (d2 & 4 && (e2 = a2.stateNode, null != e2)) {
          var f2 = a2.memoizedProps, g2 = null !== c2 ? c2.memoizedProps : f2, h2 = a2.type, k2 = a2.updateQueue;
          a2.updateQueue = null;
          if (null !== k2) try {
            "input" === h2 && "radio" === f2.type && null != f2.name && ab(e2, f2);
            vb(h2, g2);
            var l2 = vb(h2, f2);
            for (g2 = 0; g2 < k2.length; g2 += 2) {
              var m2 = k2[g2], q2 = k2[g2 + 1];
              "style" === m2 ? sb(e2, q2) : "dangerouslySetInnerHTML" === m2 ? nb(e2, q2) : "children" === m2 ? ob(e2, q2) : ta(e2, m2, q2, l2);
            }
            switch (h2) {
              case "input":
                bb(e2, f2);
                break;
              case "textarea":
                ib(e2, f2);
                break;
              case "select":
                var r2 = e2._wrapperState.wasMultiple;
                e2._wrapperState.wasMultiple = !!f2.multiple;
                var y2 = f2.value;
                null != y2 ? fb(e2, !!f2.multiple, y2, false) : r2 !== !!f2.multiple && (null != f2.defaultValue ? fb(
                  e2,
                  !!f2.multiple,
                  f2.defaultValue,
                  true
                ) : fb(e2, !!f2.multiple, f2.multiple ? [] : "", false));
            }
            e2[Pf] = f2;
          } catch (t) {
            W2(a2, a2.return, t);
          }
        }
        break;
      case 6:
        ck(b2, a2);
        ek(a2);
        if (d2 & 4) {
          if (null === a2.stateNode) throw Error(p2(162));
          e2 = a2.stateNode;
          f2 = a2.memoizedProps;
          try {
            e2.nodeValue = f2;
          } catch (t) {
            W2(a2, a2.return, t);
          }
        }
        break;
      case 3:
        ck(b2, a2);
        ek(a2);
        if (d2 & 4 && null !== c2 && c2.memoizedState.isDehydrated) try {
          bd(b2.containerInfo);
        } catch (t) {
          W2(a2, a2.return, t);
        }
        break;
      case 4:
        ck(b2, a2);
        ek(a2);
        break;
      case 13:
        ck(b2, a2);
        ek(a2);
        e2 = a2.child;
        e2.flags & 8192 && (f2 = null !== e2.memoizedState, e2.stateNode.isHidden = f2, !f2 || null !== e2.alternate && null !== e2.alternate.memoizedState || (fk = B2()));
        d2 & 4 && ak(a2);
        break;
      case 22:
        m2 = null !== c2 && null !== c2.memoizedState;
        a2.mode & 1 ? (U2 = (l2 = U2) || m2, ck(b2, a2), U2 = l2) : ck(b2, a2);
        ek(a2);
        if (d2 & 8192) {
          l2 = null !== a2.memoizedState;
          if ((a2.stateNode.isHidden = l2) && !m2 && 0 !== (a2.mode & 1)) for (V2 = a2, m2 = a2.child; null !== m2; ) {
            for (q2 = V2 = m2; null !== V2; ) {
              r2 = V2;
              y2 = r2.child;
              switch (r2.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Pj(4, r2, r2.return);
                  break;
                case 1:
                  Lj(r2, r2.return);
                  var n = r2.stateNode;
                  if ("function" === typeof n.componentWillUnmount) {
                    d2 = r2;
                    c2 = r2.return;
                    try {
                      b2 = d2, n.props = b2.memoizedProps, n.state = b2.memoizedState, n.componentWillUnmount();
                    } catch (t) {
                      W2(d2, c2, t);
                    }
                  }
                  break;
                case 5:
                  Lj(r2, r2.return);
                  break;
                case 22:
                  if (null !== r2.memoizedState) {
                    gk(q2);
                    continue;
                  }
              }
              null !== y2 ? (y2.return = r2, V2 = y2) : gk(q2);
            }
            m2 = m2.sibling;
          }
          a: for (m2 = null, q2 = a2; ; ) {
            if (5 === q2.tag) {
              if (null === m2) {
                m2 = q2;
                try {
                  e2 = q2.stateNode, l2 ? (f2 = e2.style, "function" === typeof f2.setProperty ? f2.setProperty("display", "none", "important") : f2.display = "none") : (h2 = q2.stateNode, k2 = q2.memoizedProps.style, g2 = void 0 !== k2 && null !== k2 && k2.hasOwnProperty("display") ? k2.display : null, h2.style.display = rb("display", g2));
                } catch (t) {
                  W2(a2, a2.return, t);
                }
              }
            } else if (6 === q2.tag) {
              if (null === m2) try {
                q2.stateNode.nodeValue = l2 ? "" : q2.memoizedProps;
              } catch (t) {
                W2(a2, a2.return, t);
              }
            } else if ((22 !== q2.tag && 23 !== q2.tag || null === q2.memoizedState || q2 === a2) && null !== q2.child) {
              q2.child.return = q2;
              q2 = q2.child;
              continue;
            }
            if (q2 === a2) break a;
            for (; null === q2.sibling; ) {
              if (null === q2.return || q2.return === a2) break a;
              m2 === q2 && (m2 = null);
              q2 = q2.return;
            }
            m2 === q2 && (m2 = null);
            q2.sibling.return = q2.return;
            q2 = q2.sibling;
          }
        }
        break;
      case 19:
        ck(b2, a2);
        ek(a2);
        d2 & 4 && ak(a2);
        break;
      case 21:
        break;
      default:
        ck(
          b2,
          a2
        ), ek(a2);
    }
  }
  function ek(a2) {
    var b2 = a2.flags;
    if (b2 & 2) {
      try {
        a: {
          for (var c2 = a2.return; null !== c2; ) {
            if (Tj(c2)) {
              var d2 = c2;
              break a;
            }
            c2 = c2.return;
          }
          throw Error(p2(160));
        }
        switch (d2.tag) {
          case 5:
            var e2 = d2.stateNode;
            d2.flags & 32 && (ob(e2, ""), d2.flags &= -33);
            var f2 = Uj(a2);
            Wj(a2, f2, e2);
            break;
          case 3:
          case 4:
            var g2 = d2.stateNode.containerInfo, h2 = Uj(a2);
            Vj(a2, h2, g2);
            break;
          default:
            throw Error(p2(161));
        }
      } catch (k2) {
        W2(a2, a2.return, k2);
      }
      a2.flags &= -3;
    }
    b2 & 4096 && (a2.flags &= -4097);
  }
  function hk(a2, b2, c2) {
    V2 = a2;
    ik(a2);
  }
  function ik(a2, b2, c2) {
    for (var d2 = 0 !== (a2.mode & 1); null !== V2; ) {
      var e2 = V2, f2 = e2.child;
      if (22 === e2.tag && d2) {
        var g2 = null !== e2.memoizedState || Jj;
        if (!g2) {
          var h2 = e2.alternate, k2 = null !== h2 && null !== h2.memoizedState || U2;
          h2 = Jj;
          var l2 = U2;
          Jj = g2;
          if ((U2 = k2) && !l2) for (V2 = e2; null !== V2; ) g2 = V2, k2 = g2.child, 22 === g2.tag && null !== g2.memoizedState ? jk(e2) : null !== k2 ? (k2.return = g2, V2 = k2) : jk(e2);
          for (; null !== f2; ) V2 = f2, ik(f2), f2 = f2.sibling;
          V2 = e2;
          Jj = h2;
          U2 = l2;
        }
        kk(a2);
      } else 0 !== (e2.subtreeFlags & 8772) && null !== f2 ? (f2.return = e2, V2 = f2) : kk(a2);
    }
  }
  function kk(a2) {
    for (; null !== V2; ) {
      var b2 = V2;
      if (0 !== (b2.flags & 8772)) {
        var c2 = b2.alternate;
        try {
          if (0 !== (b2.flags & 8772)) switch (b2.tag) {
            case 0:
            case 11:
            case 15:
              U2 || Qj(5, b2);
              break;
            case 1:
              var d2 = b2.stateNode;
              if (b2.flags & 4 && !U2) if (null === c2) d2.componentDidMount();
              else {
                var e2 = b2.elementType === b2.type ? c2.memoizedProps : Ci2(b2.type, c2.memoizedProps);
                d2.componentDidUpdate(e2, c2.memoizedState, d2.__reactInternalSnapshotBeforeUpdate);
              }
              var f2 = b2.updateQueue;
              null !== f2 && sh(b2, f2, d2);
              break;
            case 3:
              var g2 = b2.updateQueue;
              if (null !== g2) {
                c2 = null;
                if (null !== b2.child) switch (b2.child.tag) {
                  case 5:
                    c2 = b2.child.stateNode;
                    break;
                  case 1:
                    c2 = b2.child.stateNode;
                }
                sh(b2, g2, c2);
              }
              break;
            case 5:
              var h2 = b2.stateNode;
              if (null === c2 && b2.flags & 4) {
                c2 = h2;
                var k2 = b2.memoizedProps;
                switch (b2.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    k2.autoFocus && c2.focus();
                    break;
                  case "img":
                    k2.src && (c2.src = k2.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (null === b2.memoizedState) {
                var l2 = b2.alternate;
                if (null !== l2) {
                  var m2 = l2.memoizedState;
                  if (null !== m2) {
                    var q2 = m2.dehydrated;
                    null !== q2 && bd(q2);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(p2(163));
          }
          U2 || b2.flags & 512 && Rj(b2);
        } catch (r2) {
          W2(b2, b2.return, r2);
        }
      }
      if (b2 === a2) {
        V2 = null;
        break;
      }
      c2 = b2.sibling;
      if (null !== c2) {
        c2.return = b2.return;
        V2 = c2;
        break;
      }
      V2 = b2.return;
    }
  }
  function gk(a2) {
    for (; null !== V2; ) {
      var b2 = V2;
      if (b2 === a2) {
        V2 = null;
        break;
      }
      var c2 = b2.sibling;
      if (null !== c2) {
        c2.return = b2.return;
        V2 = c2;
        break;
      }
      V2 = b2.return;
    }
  }
  function jk(a2) {
    for (; null !== V2; ) {
      var b2 = V2;
      try {
        switch (b2.tag) {
          case 0:
          case 11:
          case 15:
            var c2 = b2.return;
            try {
              Qj(4, b2);
            } catch (k2) {
              W2(b2, c2, k2);
            }
            break;
          case 1:
            var d2 = b2.stateNode;
            if ("function" === typeof d2.componentDidMount) {
              var e2 = b2.return;
              try {
                d2.componentDidMount();
              } catch (k2) {
                W2(b2, e2, k2);
              }
            }
            var f2 = b2.return;
            try {
              Rj(b2);
            } catch (k2) {
              W2(b2, f2, k2);
            }
            break;
          case 5:
            var g2 = b2.return;
            try {
              Rj(b2);
            } catch (k2) {
              W2(b2, g2, k2);
            }
        }
      } catch (k2) {
        W2(b2, b2.return, k2);
      }
      if (b2 === a2) {
        V2 = null;
        break;
      }
      var h2 = b2.sibling;
      if (null !== h2) {
        h2.return = b2.return;
        V2 = h2;
        break;
      }
      V2 = b2.return;
    }
  }
  var lk = Math.ceil, mk = ua.ReactCurrentDispatcher, nk = ua.ReactCurrentOwner, ok = ua.ReactCurrentBatchConfig, K2 = 0, Q2 = null, Y2 = null, Z2 = 0, fj = 0, ej = Uf(0), T2 = 0, pk = null, rh = 0, qk = 0, rk = 0, sk = null, tk2 = null, fk = 0, Gj = Infinity, uk = null, Oi2 = false, Pi2 = null, Ri2 = null, vk = false, wk = null, xk = 0, yk = 0, zk = null, Ak = -1, Bk = 0;
  function R2() {
    return 0 !== (K2 & 6) ? B2() : -1 !== Ak ? Ak : Ak = B2();
  }
  function yi2(a2) {
    if (0 === (a2.mode & 1)) return 1;
    if (0 !== (K2 & 2) && 0 !== Z2) return Z2 & -Z2;
    if (null !== Kg.transition) return 0 === Bk && (Bk = yc()), Bk;
    a2 = C2;
    if (0 !== a2) return a2;
    a2 = window.event;
    a2 = void 0 === a2 ? 16 : jd(a2.type);
    return a2;
  }
  function gi2(a2, b2, c2, d2) {
    if (50 < yk) throw yk = 0, zk = null, Error(p2(185));
    Ac(a2, c2, d2);
    if (0 === (K2 & 2) || a2 !== Q2) a2 === Q2 && (0 === (K2 & 2) && (qk |= c2), 4 === T2 && Ck(a2, Z2)), Dk(a2, d2), 1 === c2 && 0 === K2 && 0 === (b2.mode & 1) && (Gj = B2() + 500, fg && jg());
  }
  function Dk(a2, b2) {
    var c2 = a2.callbackNode;
    wc(a2, b2);
    var d2 = uc(a2, a2 === Q2 ? Z2 : 0);
    if (0 === d2) null !== c2 && bc(c2), a2.callbackNode = null, a2.callbackPriority = 0;
    else if (b2 = d2 & -d2, a2.callbackPriority !== b2) {
      null != c2 && bc(c2);
      if (1 === b2) 0 === a2.tag ? ig(Ek.bind(null, a2)) : hg(Ek.bind(null, a2)), Jf(function() {
        0 === (K2 & 6) && jg();
      }), c2 = null;
      else {
        switch (Dc(d2)) {
          case 1:
            c2 = fc;
            break;
          case 4:
            c2 = gc;
            break;
          case 16:
            c2 = hc;
            break;
          case 536870912:
            c2 = jc;
            break;
          default:
            c2 = hc;
        }
        c2 = Fk(c2, Gk.bind(null, a2));
      }
      a2.callbackPriority = b2;
      a2.callbackNode = c2;
    }
  }
  function Gk(a2, b2) {
    Ak = -1;
    Bk = 0;
    if (0 !== (K2 & 6)) throw Error(p2(327));
    var c2 = a2.callbackNode;
    if (Hk() && a2.callbackNode !== c2) return null;
    var d2 = uc(a2, a2 === Q2 ? Z2 : 0);
    if (0 === d2) return null;
    if (0 !== (d2 & 30) || 0 !== (d2 & a2.expiredLanes) || b2) b2 = Ik(a2, d2);
    else {
      b2 = d2;
      var e2 = K2;
      K2 |= 2;
      var f2 = Jk();
      if (Q2 !== a2 || Z2 !== b2) uk = null, Gj = B2() + 500, Kk(a2, b2);
      do
        try {
          Lk();
          break;
        } catch (h2) {
          Mk(a2, h2);
        }
      while (1);
      $g();
      mk.current = f2;
      K2 = e2;
      null !== Y2 ? b2 = 0 : (Q2 = null, Z2 = 0, b2 = T2);
    }
    if (0 !== b2) {
      2 === b2 && (e2 = xc(a2), 0 !== e2 && (d2 = e2, b2 = Nk(a2, e2)));
      if (1 === b2) throw c2 = pk, Kk(a2, 0), Ck(a2, d2), Dk(a2, B2()), c2;
      if (6 === b2) Ck(a2, d2);
      else {
        e2 = a2.current.alternate;
        if (0 === (d2 & 30) && !Ok(e2) && (b2 = Ik(a2, d2), 2 === b2 && (f2 = xc(a2), 0 !== f2 && (d2 = f2, b2 = Nk(a2, f2))), 1 === b2)) throw c2 = pk, Kk(a2, 0), Ck(a2, d2), Dk(a2, B2()), c2;
        a2.finishedWork = e2;
        a2.finishedLanes = d2;
        switch (b2) {
          case 0:
          case 1:
            throw Error(p2(345));
          case 2:
            Pk(a2, tk2, uk);
            break;
          case 3:
            Ck(a2, d2);
            if ((d2 & 130023424) === d2 && (b2 = fk + 500 - B2(), 10 < b2)) {
              if (0 !== uc(a2, 0)) break;
              e2 = a2.suspendedLanes;
              if ((e2 & d2) !== d2) {
                R2();
                a2.pingedLanes |= a2.suspendedLanes & e2;
                break;
              }
              a2.timeoutHandle = Ff(Pk.bind(null, a2, tk2, uk), b2);
              break;
            }
            Pk(a2, tk2, uk);
            break;
          case 4:
            Ck(a2, d2);
            if ((d2 & 4194240) === d2) break;
            b2 = a2.eventTimes;
            for (e2 = -1; 0 < d2; ) {
              var g2 = 31 - oc(d2);
              f2 = 1 << g2;
              g2 = b2[g2];
              g2 > e2 && (e2 = g2);
              d2 &= ~f2;
            }
            d2 = e2;
            d2 = B2() - d2;
            d2 = (120 > d2 ? 120 : 480 > d2 ? 480 : 1080 > d2 ? 1080 : 1920 > d2 ? 1920 : 3e3 > d2 ? 3e3 : 4320 > d2 ? 4320 : 1960 * lk(d2 / 1960)) - d2;
            if (10 < d2) {
              a2.timeoutHandle = Ff(Pk.bind(null, a2, tk2, uk), d2);
              break;
            }
            Pk(a2, tk2, uk);
            break;
          case 5:
            Pk(a2, tk2, uk);
            break;
          default:
            throw Error(p2(329));
        }
      }
    }
    Dk(a2, B2());
    return a2.callbackNode === c2 ? Gk.bind(null, a2) : null;
  }
  function Nk(a2, b2) {
    var c2 = sk;
    a2.current.memoizedState.isDehydrated && (Kk(a2, b2).flags |= 256);
    a2 = Ik(a2, b2);
    2 !== a2 && (b2 = tk2, tk2 = c2, null !== b2 && Fj(b2));
    return a2;
  }
  function Fj(a2) {
    null === tk2 ? tk2 = a2 : tk2.push.apply(tk2, a2);
  }
  function Ok(a2) {
    for (var b2 = a2; ; ) {
      if (b2.flags & 16384) {
        var c2 = b2.updateQueue;
        if (null !== c2 && (c2 = c2.stores, null !== c2)) for (var d2 = 0; d2 < c2.length; d2++) {
          var e2 = c2[d2], f2 = e2.getSnapshot;
          e2 = e2.value;
          try {
            if (!He(f2(), e2)) return false;
          } catch (g2) {
            return false;
          }
        }
      }
      c2 = b2.child;
      if (b2.subtreeFlags & 16384 && null !== c2) c2.return = b2, b2 = c2;
      else {
        if (b2 === a2) break;
        for (; null === b2.sibling; ) {
          if (null === b2.return || b2.return === a2) return true;
          b2 = b2.return;
        }
        b2.sibling.return = b2.return;
        b2 = b2.sibling;
      }
    }
    return true;
  }
  function Ck(a2, b2) {
    b2 &= ~rk;
    b2 &= ~qk;
    a2.suspendedLanes |= b2;
    a2.pingedLanes &= ~b2;
    for (a2 = a2.expirationTimes; 0 < b2; ) {
      var c2 = 31 - oc(b2), d2 = 1 << c2;
      a2[c2] = -1;
      b2 &= ~d2;
    }
  }
  function Ek(a2) {
    if (0 !== (K2 & 6)) throw Error(p2(327));
    Hk();
    var b2 = uc(a2, 0);
    if (0 === (b2 & 1)) return Dk(a2, B2()), null;
    var c2 = Ik(a2, b2);
    if (0 !== a2.tag && 2 === c2) {
      var d2 = xc(a2);
      0 !== d2 && (b2 = d2, c2 = Nk(a2, d2));
    }
    if (1 === c2) throw c2 = pk, Kk(a2, 0), Ck(a2, b2), Dk(a2, B2()), c2;
    if (6 === c2) throw Error(p2(345));
    a2.finishedWork = a2.current.alternate;
    a2.finishedLanes = b2;
    Pk(a2, tk2, uk);
    Dk(a2, B2());
    return null;
  }
  function Qk(a2, b2) {
    var c2 = K2;
    K2 |= 1;
    try {
      return a2(b2);
    } finally {
      K2 = c2, 0 === K2 && (Gj = B2() + 500, fg && jg());
    }
  }
  function Rk(a2) {
    null !== wk && 0 === wk.tag && 0 === (K2 & 6) && Hk();
    var b2 = K2;
    K2 |= 1;
    var c2 = ok.transition, d2 = C2;
    try {
      if (ok.transition = null, C2 = 1, a2) return a2();
    } finally {
      C2 = d2, ok.transition = c2, K2 = b2, 0 === (K2 & 6) && jg();
    }
  }
  function Hj() {
    fj = ej.current;
    E2(ej);
  }
  function Kk(a2, b2) {
    a2.finishedWork = null;
    a2.finishedLanes = 0;
    var c2 = a2.timeoutHandle;
    -1 !== c2 && (a2.timeoutHandle = -1, Gf(c2));
    if (null !== Y2) for (c2 = Y2.return; null !== c2; ) {
      var d2 = c2;
      wg(d2);
      switch (d2.tag) {
        case 1:
          d2 = d2.type.childContextTypes;
          null !== d2 && void 0 !== d2 && $f();
          break;
        case 3:
          zh();
          E2(Wf);
          E2(H2);
          Eh();
          break;
        case 5:
          Bh(d2);
          break;
        case 4:
          zh();
          break;
        case 13:
          E2(L2);
          break;
        case 19:
          E2(L2);
          break;
        case 10:
          ah(d2.type._context);
          break;
        case 22:
        case 23:
          Hj();
      }
      c2 = c2.return;
    }
    Q2 = a2;
    Y2 = a2 = Pg(a2.current, null);
    Z2 = fj = b2;
    T2 = 0;
    pk = null;
    rk = qk = rh = 0;
    tk2 = sk = null;
    if (null !== fh) {
      for (b2 = 0; b2 < fh.length; b2++) if (c2 = fh[b2], d2 = c2.interleaved, null !== d2) {
        c2.interleaved = null;
        var e2 = d2.next, f2 = c2.pending;
        if (null !== f2) {
          var g2 = f2.next;
          f2.next = e2;
          d2.next = g2;
        }
        c2.pending = d2;
      }
      fh = null;
    }
    return a2;
  }
  function Mk(a2, b2) {
    do {
      var c2 = Y2;
      try {
        $g();
        Fh.current = Rh;
        if (Ih) {
          for (var d2 = M2.memoizedState; null !== d2; ) {
            var e2 = d2.queue;
            null !== e2 && (e2.pending = null);
            d2 = d2.next;
          }
          Ih = false;
        }
        Hh = 0;
        O2 = N2 = M2 = null;
        Jh = false;
        Kh = 0;
        nk.current = null;
        if (null === c2 || null === c2.return) {
          T2 = 1;
          pk = b2;
          Y2 = null;
          break;
        }
        a: {
          var f2 = a2, g2 = c2.return, h2 = c2, k2 = b2;
          b2 = Z2;
          h2.flags |= 32768;
          if (null !== k2 && "object" === typeof k2 && "function" === typeof k2.then) {
            var l2 = k2, m2 = h2, q2 = m2.tag;
            if (0 === (m2.mode & 1) && (0 === q2 || 11 === q2 || 15 === q2)) {
              var r2 = m2.alternate;
              r2 ? (m2.updateQueue = r2.updateQueue, m2.memoizedState = r2.memoizedState, m2.lanes = r2.lanes) : (m2.updateQueue = null, m2.memoizedState = null);
            }
            var y2 = Ui2(g2);
            if (null !== y2) {
              y2.flags &= -257;
              Vi2(y2, g2, h2, f2, b2);
              y2.mode & 1 && Si2(f2, l2, b2);
              b2 = y2;
              k2 = l2;
              var n = b2.updateQueue;
              if (null === n) {
                var t = /* @__PURE__ */ new Set();
                t.add(k2);
                b2.updateQueue = t;
              } else n.add(k2);
              break a;
            } else {
              if (0 === (b2 & 1)) {
                Si2(f2, l2, b2);
                tj();
                break a;
              }
              k2 = Error(p2(426));
            }
          } else if (I2 && h2.mode & 1) {
            var J2 = Ui2(g2);
            if (null !== J2) {
              0 === (J2.flags & 65536) && (J2.flags |= 256);
              Vi2(J2, g2, h2, f2, b2);
              Jg(Ji2(k2, h2));
              break a;
            }
          }
          f2 = k2 = Ji2(k2, h2);
          4 !== T2 && (T2 = 2);
          null === sk ? sk = [f2] : sk.push(f2);
          f2 = g2;
          do {
            switch (f2.tag) {
              case 3:
                f2.flags |= 65536;
                b2 &= -b2;
                f2.lanes |= b2;
                var x2 = Ni2(f2, k2, b2);
                ph(f2, x2);
                break a;
              case 1:
                h2 = k2;
                var w2 = f2.type, u2 = f2.stateNode;
                if (0 === (f2.flags & 128) && ("function" === typeof w2.getDerivedStateFromError || null !== u2 && "function" === typeof u2.componentDidCatch && (null === Ri2 || !Ri2.has(u2)))) {
                  f2.flags |= 65536;
                  b2 &= -b2;
                  f2.lanes |= b2;
                  var F2 = Qi2(f2, h2, b2);
                  ph(f2, F2);
                  break a;
                }
            }
            f2 = f2.return;
          } while (null !== f2);
        }
        Sk(c2);
      } catch (na) {
        b2 = na;
        Y2 === c2 && null !== c2 && (Y2 = c2 = c2.return);
        continue;
      }
      break;
    } while (1);
  }
  function Jk() {
    var a2 = mk.current;
    mk.current = Rh;
    return null === a2 ? Rh : a2;
  }
  function tj() {
    if (0 === T2 || 3 === T2 || 2 === T2) T2 = 4;
    null === Q2 || 0 === (rh & 268435455) && 0 === (qk & 268435455) || Ck(Q2, Z2);
  }
  function Ik(a2, b2) {
    var c2 = K2;
    K2 |= 2;
    var d2 = Jk();
    if (Q2 !== a2 || Z2 !== b2) uk = null, Kk(a2, b2);
    do
      try {
        Tk();
        break;
      } catch (e2) {
        Mk(a2, e2);
      }
    while (1);
    $g();
    K2 = c2;
    mk.current = d2;
    if (null !== Y2) throw Error(p2(261));
    Q2 = null;
    Z2 = 0;
    return T2;
  }
  function Tk() {
    for (; null !== Y2; ) Uk(Y2);
  }
  function Lk() {
    for (; null !== Y2 && !cc(); ) Uk(Y2);
  }
  function Uk(a2) {
    var b2 = Vk(a2.alternate, a2, fj);
    a2.memoizedProps = a2.pendingProps;
    null === b2 ? Sk(a2) : Y2 = b2;
    nk.current = null;
  }
  function Sk(a2) {
    var b2 = a2;
    do {
      var c2 = b2.alternate;
      a2 = b2.return;
      if (0 === (b2.flags & 32768)) {
        if (c2 = Ej(c2, b2, fj), null !== c2) {
          Y2 = c2;
          return;
        }
      } else {
        c2 = Ij(c2, b2);
        if (null !== c2) {
          c2.flags &= 32767;
          Y2 = c2;
          return;
        }
        if (null !== a2) a2.flags |= 32768, a2.subtreeFlags = 0, a2.deletions = null;
        else {
          T2 = 6;
          Y2 = null;
          return;
        }
      }
      b2 = b2.sibling;
      if (null !== b2) {
        Y2 = b2;
        return;
      }
      Y2 = b2 = a2;
    } while (null !== b2);
    0 === T2 && (T2 = 5);
  }
  function Pk(a2, b2, c2) {
    var d2 = C2, e2 = ok.transition;
    try {
      ok.transition = null, C2 = 1, Wk(a2, b2, c2, d2);
    } finally {
      ok.transition = e2, C2 = d2;
    }
    return null;
  }
  function Wk(a2, b2, c2, d2) {
    do
      Hk();
    while (null !== wk);
    if (0 !== (K2 & 6)) throw Error(p2(327));
    c2 = a2.finishedWork;
    var e2 = a2.finishedLanes;
    if (null === c2) return null;
    a2.finishedWork = null;
    a2.finishedLanes = 0;
    if (c2 === a2.current) throw Error(p2(177));
    a2.callbackNode = null;
    a2.callbackPriority = 0;
    var f2 = c2.lanes | c2.childLanes;
    Bc(a2, f2);
    a2 === Q2 && (Y2 = Q2 = null, Z2 = 0);
    0 === (c2.subtreeFlags & 2064) && 0 === (c2.flags & 2064) || vk || (vk = true, Fk(hc, function() {
      Hk();
      return null;
    }));
    f2 = 0 !== (c2.flags & 15990);
    if (0 !== (c2.subtreeFlags & 15990) || f2) {
      f2 = ok.transition;
      ok.transition = null;
      var g2 = C2;
      C2 = 1;
      var h2 = K2;
      K2 |= 4;
      nk.current = null;
      Oj(a2, c2);
      dk(c2, a2);
      Oe(Df);
      dd = !!Cf;
      Df = Cf = null;
      a2.current = c2;
      hk(c2);
      dc();
      K2 = h2;
      C2 = g2;
      ok.transition = f2;
    } else a2.current = c2;
    vk && (vk = false, wk = a2, xk = e2);
    f2 = a2.pendingLanes;
    0 === f2 && (Ri2 = null);
    mc(c2.stateNode);
    Dk(a2, B2());
    if (null !== b2) for (d2 = a2.onRecoverableError, c2 = 0; c2 < b2.length; c2++) e2 = b2[c2], d2(e2.value, { componentStack: e2.stack, digest: e2.digest });
    if (Oi2) throw Oi2 = false, a2 = Pi2, Pi2 = null, a2;
    0 !== (xk & 1) && 0 !== a2.tag && Hk();
    f2 = a2.pendingLanes;
    0 !== (f2 & 1) ? a2 === zk ? yk++ : (yk = 0, zk = a2) : yk = 0;
    jg();
    return null;
  }
  function Hk() {
    if (null !== wk) {
      var a2 = Dc(xk), b2 = ok.transition, c2 = C2;
      try {
        ok.transition = null;
        C2 = 16 > a2 ? 16 : a2;
        if (null === wk) var d2 = false;
        else {
          a2 = wk;
          wk = null;
          xk = 0;
          if (0 !== (K2 & 6)) throw Error(p2(331));
          var e2 = K2;
          K2 |= 4;
          for (V2 = a2.current; null !== V2; ) {
            var f2 = V2, g2 = f2.child;
            if (0 !== (V2.flags & 16)) {
              var h2 = f2.deletions;
              if (null !== h2) {
                for (var k2 = 0; k2 < h2.length; k2++) {
                  var l2 = h2[k2];
                  for (V2 = l2; null !== V2; ) {
                    var m2 = V2;
                    switch (m2.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Pj(8, m2, f2);
                    }
                    var q2 = m2.child;
                    if (null !== q2) q2.return = m2, V2 = q2;
                    else for (; null !== V2; ) {
                      m2 = V2;
                      var r2 = m2.sibling, y2 = m2.return;
                      Sj(m2);
                      if (m2 === l2) {
                        V2 = null;
                        break;
                      }
                      if (null !== r2) {
                        r2.return = y2;
                        V2 = r2;
                        break;
                      }
                      V2 = y2;
                    }
                  }
                }
                var n = f2.alternate;
                if (null !== n) {
                  var t = n.child;
                  if (null !== t) {
                    n.child = null;
                    do {
                      var J2 = t.sibling;
                      t.sibling = null;
                      t = J2;
                    } while (null !== t);
                  }
                }
                V2 = f2;
              }
            }
            if (0 !== (f2.subtreeFlags & 2064) && null !== g2) g2.return = f2, V2 = g2;
            else b: for (; null !== V2; ) {
              f2 = V2;
              if (0 !== (f2.flags & 2048)) switch (f2.tag) {
                case 0:
                case 11:
                case 15:
                  Pj(9, f2, f2.return);
              }
              var x2 = f2.sibling;
              if (null !== x2) {
                x2.return = f2.return;
                V2 = x2;
                break b;
              }
              V2 = f2.return;
            }
          }
          var w2 = a2.current;
          for (V2 = w2; null !== V2; ) {
            g2 = V2;
            var u2 = g2.child;
            if (0 !== (g2.subtreeFlags & 2064) && null !== u2) u2.return = g2, V2 = u2;
            else b: for (g2 = w2; null !== V2; ) {
              h2 = V2;
              if (0 !== (h2.flags & 2048)) try {
                switch (h2.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Qj(9, h2);
                }
              } catch (na) {
                W2(h2, h2.return, na);
              }
              if (h2 === g2) {
                V2 = null;
                break b;
              }
              var F2 = h2.sibling;
              if (null !== F2) {
                F2.return = h2.return;
                V2 = F2;
                break b;
              }
              V2 = h2.return;
            }
          }
          K2 = e2;
          jg();
          if (lc && "function" === typeof lc.onPostCommitFiberRoot) try {
            lc.onPostCommitFiberRoot(kc, a2);
          } catch (na) {
          }
          d2 = true;
        }
        return d2;
      } finally {
        C2 = c2, ok.transition = b2;
      }
    }
    return false;
  }
  function Xk(a2, b2, c2) {
    b2 = Ji2(c2, b2);
    b2 = Ni2(a2, b2, 1);
    a2 = nh(a2, b2, 1);
    b2 = R2();
    null !== a2 && (Ac(a2, 1, b2), Dk(a2, b2));
  }
  function W2(a2, b2, c2) {
    if (3 === a2.tag) Xk(a2, a2, c2);
    else for (; null !== b2; ) {
      if (3 === b2.tag) {
        Xk(b2, a2, c2);
        break;
      } else if (1 === b2.tag) {
        var d2 = b2.stateNode;
        if ("function" === typeof b2.type.getDerivedStateFromError || "function" === typeof d2.componentDidCatch && (null === Ri2 || !Ri2.has(d2))) {
          a2 = Ji2(c2, a2);
          a2 = Qi2(b2, a2, 1);
          b2 = nh(b2, a2, 1);
          a2 = R2();
          null !== b2 && (Ac(b2, 1, a2), Dk(b2, a2));
          break;
        }
      }
      b2 = b2.return;
    }
  }
  function Ti2(a2, b2, c2) {
    var d2 = a2.pingCache;
    null !== d2 && d2.delete(b2);
    b2 = R2();
    a2.pingedLanes |= a2.suspendedLanes & c2;
    Q2 === a2 && (Z2 & c2) === c2 && (4 === T2 || 3 === T2 && (Z2 & 130023424) === Z2 && 500 > B2() - fk ? Kk(a2, 0) : rk |= c2);
    Dk(a2, b2);
  }
  function Yk(a2, b2) {
    0 === b2 && (0 === (a2.mode & 1) ? b2 = 1 : (b2 = sc, sc <<= 1, 0 === (sc & 130023424) && (sc = 4194304)));
    var c2 = R2();
    a2 = ih(a2, b2);
    null !== a2 && (Ac(a2, b2, c2), Dk(a2, c2));
  }
  function uj(a2) {
    var b2 = a2.memoizedState, c2 = 0;
    null !== b2 && (c2 = b2.retryLane);
    Yk(a2, c2);
  }
  function bk(a2, b2) {
    var c2 = 0;
    switch (a2.tag) {
      case 13:
        var d2 = a2.stateNode;
        var e2 = a2.memoizedState;
        null !== e2 && (c2 = e2.retryLane);
        break;
      case 19:
        d2 = a2.stateNode;
        break;
      default:
        throw Error(p2(314));
    }
    null !== d2 && d2.delete(b2);
    Yk(a2, c2);
  }
  var Vk;
  Vk = function(a2, b2, c2) {
    if (null !== a2) if (a2.memoizedProps !== b2.pendingProps || Wf.current) dh = true;
    else {
      if (0 === (a2.lanes & c2) && 0 === (b2.flags & 128)) return dh = false, yj(a2, b2, c2);
      dh = 0 !== (a2.flags & 131072) ? true : false;
    }
    else dh = false, I2 && 0 !== (b2.flags & 1048576) && ug(b2, ng, b2.index);
    b2.lanes = 0;
    switch (b2.tag) {
      case 2:
        var d2 = b2.type;
        ij(a2, b2);
        a2 = b2.pendingProps;
        var e2 = Yf(b2, H2.current);
        ch(b2, c2);
        e2 = Nh(null, b2, d2, a2, e2, c2);
        var f2 = Sh();
        b2.flags |= 1;
        "object" === typeof e2 && null !== e2 && "function" === typeof e2.render && void 0 === e2.$$typeof ? (b2.tag = 1, b2.memoizedState = null, b2.updateQueue = null, Zf(d2) ? (f2 = true, cg(b2)) : f2 = false, b2.memoizedState = null !== e2.state && void 0 !== e2.state ? e2.state : null, kh(b2), e2.updater = Ei2, b2.stateNode = e2, e2._reactInternals = b2, Ii2(b2, d2, a2, c2), b2 = jj(null, b2, d2, true, f2, c2)) : (b2.tag = 0, I2 && f2 && vg(b2), Xi2(null, b2, e2, c2), b2 = b2.child);
        return b2;
      case 16:
        d2 = b2.elementType;
        a: {
          ij(a2, b2);
          a2 = b2.pendingProps;
          e2 = d2._init;
          d2 = e2(d2._payload);
          b2.type = d2;
          e2 = b2.tag = Zk(d2);
          a2 = Ci2(d2, a2);
          switch (e2) {
            case 0:
              b2 = cj(null, b2, d2, a2, c2);
              break a;
            case 1:
              b2 = hj(null, b2, d2, a2, c2);
              break a;
            case 11:
              b2 = Yi2(null, b2, d2, a2, c2);
              break a;
            case 14:
              b2 = $i2(null, b2, d2, Ci2(d2.type, a2), c2);
              break a;
          }
          throw Error(p2(
            306,
            d2,
            ""
          ));
        }
        return b2;
      case 0:
        return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : Ci2(d2, e2), cj(a2, b2, d2, e2, c2);
      case 1:
        return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : Ci2(d2, e2), hj(a2, b2, d2, e2, c2);
      case 3:
        a: {
          kj(b2);
          if (null === a2) throw Error(p2(387));
          d2 = b2.pendingProps;
          f2 = b2.memoizedState;
          e2 = f2.element;
          lh(a2, b2);
          qh(b2, d2, null, c2);
          var g2 = b2.memoizedState;
          d2 = g2.element;
          if (f2.isDehydrated) if (f2 = { element: d2, isDehydrated: false, cache: g2.cache, pendingSuspenseBoundaries: g2.pendingSuspenseBoundaries, transitions: g2.transitions }, b2.updateQueue.baseState = f2, b2.memoizedState = f2, b2.flags & 256) {
            e2 = Ji2(Error(p2(423)), b2);
            b2 = lj(a2, b2, d2, c2, e2);
            break a;
          } else if (d2 !== e2) {
            e2 = Ji2(Error(p2(424)), b2);
            b2 = lj(a2, b2, d2, c2, e2);
            break a;
          } else for (yg = Lf(b2.stateNode.containerInfo.firstChild), xg = b2, I2 = true, zg = null, c2 = Vg(b2, null, d2, c2), b2.child = c2; c2; ) c2.flags = c2.flags & -3 | 4096, c2 = c2.sibling;
          else {
            Ig();
            if (d2 === e2) {
              b2 = Zi2(a2, b2, c2);
              break a;
            }
            Xi2(a2, b2, d2, c2);
          }
          b2 = b2.child;
        }
        return b2;
      case 5:
        return Ah(b2), null === a2 && Eg(b2), d2 = b2.type, e2 = b2.pendingProps, f2 = null !== a2 ? a2.memoizedProps : null, g2 = e2.children, Ef(d2, e2) ? g2 = null : null !== f2 && Ef(d2, f2) && (b2.flags |= 32), gj(a2, b2), Xi2(a2, b2, g2, c2), b2.child;
      case 6:
        return null === a2 && Eg(b2), null;
      case 13:
        return oj(a2, b2, c2);
      case 4:
        return yh(b2, b2.stateNode.containerInfo), d2 = b2.pendingProps, null === a2 ? b2.child = Ug(b2, null, d2, c2) : Xi2(a2, b2, d2, c2), b2.child;
      case 11:
        return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : Ci2(d2, e2), Yi2(a2, b2, d2, e2, c2);
      case 7:
        return Xi2(a2, b2, b2.pendingProps, c2), b2.child;
      case 8:
        return Xi2(a2, b2, b2.pendingProps.children, c2), b2.child;
      case 12:
        return Xi2(a2, b2, b2.pendingProps.children, c2), b2.child;
      case 10:
        a: {
          d2 = b2.type._context;
          e2 = b2.pendingProps;
          f2 = b2.memoizedProps;
          g2 = e2.value;
          G2(Wg, d2._currentValue);
          d2._currentValue = g2;
          if (null !== f2) if (He(f2.value, g2)) {
            if (f2.children === e2.children && !Wf.current) {
              b2 = Zi2(a2, b2, c2);
              break a;
            }
          } else for (f2 = b2.child, null !== f2 && (f2.return = b2); null !== f2; ) {
            var h2 = f2.dependencies;
            if (null !== h2) {
              g2 = f2.child;
              for (var k2 = h2.firstContext; null !== k2; ) {
                if (k2.context === d2) {
                  if (1 === f2.tag) {
                    k2 = mh(-1, c2 & -c2);
                    k2.tag = 2;
                    var l2 = f2.updateQueue;
                    if (null !== l2) {
                      l2 = l2.shared;
                      var m2 = l2.pending;
                      null === m2 ? k2.next = k2 : (k2.next = m2.next, m2.next = k2);
                      l2.pending = k2;
                    }
                  }
                  f2.lanes |= c2;
                  k2 = f2.alternate;
                  null !== k2 && (k2.lanes |= c2);
                  bh(
                    f2.return,
                    c2,
                    b2
                  );
                  h2.lanes |= c2;
                  break;
                }
                k2 = k2.next;
              }
            } else if (10 === f2.tag) g2 = f2.type === b2.type ? null : f2.child;
            else if (18 === f2.tag) {
              g2 = f2.return;
              if (null === g2) throw Error(p2(341));
              g2.lanes |= c2;
              h2 = g2.alternate;
              null !== h2 && (h2.lanes |= c2);
              bh(g2, c2, b2);
              g2 = f2.sibling;
            } else g2 = f2.child;
            if (null !== g2) g2.return = f2;
            else for (g2 = f2; null !== g2; ) {
              if (g2 === b2) {
                g2 = null;
                break;
              }
              f2 = g2.sibling;
              if (null !== f2) {
                f2.return = g2.return;
                g2 = f2;
                break;
              }
              g2 = g2.return;
            }
            f2 = g2;
          }
          Xi2(a2, b2, e2.children, c2);
          b2 = b2.child;
        }
        return b2;
      case 9:
        return e2 = b2.type, d2 = b2.pendingProps.children, ch(b2, c2), e2 = eh(e2), d2 = d2(e2), b2.flags |= 1, Xi2(a2, b2, d2, c2), b2.child;
      case 14:
        return d2 = b2.type, e2 = Ci2(d2, b2.pendingProps), e2 = Ci2(d2.type, e2), $i2(a2, b2, d2, e2, c2);
      case 15:
        return bj(a2, b2, b2.type, b2.pendingProps, c2);
      case 17:
        return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : Ci2(d2, e2), ij(a2, b2), b2.tag = 1, Zf(d2) ? (a2 = true, cg(b2)) : a2 = false, ch(b2, c2), Gi2(b2, d2, e2), Ii2(b2, d2, e2, c2), jj(null, b2, d2, true, a2, c2);
      case 19:
        return xj(a2, b2, c2);
      case 22:
        return dj(a2, b2, c2);
    }
    throw Error(p2(156, b2.tag));
  };
  function Fk(a2, b2) {
    return ac(a2, b2);
  }
  function $k(a2, b2, c2, d2) {
    this.tag = a2;
    this.key = c2;
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
    this.index = 0;
    this.ref = null;
    this.pendingProps = b2;
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
    this.mode = d2;
    this.subtreeFlags = this.flags = 0;
    this.deletions = null;
    this.childLanes = this.lanes = 0;
    this.alternate = null;
  }
  function Bg(a2, b2, c2, d2) {
    return new $k(a2, b2, c2, d2);
  }
  function aj(a2) {
    a2 = a2.prototype;
    return !(!a2 || !a2.isReactComponent);
  }
  function Zk(a2) {
    if ("function" === typeof a2) return aj(a2) ? 1 : 0;
    if (void 0 !== a2 && null !== a2) {
      a2 = a2.$$typeof;
      if (a2 === Da) return 11;
      if (a2 === Ga) return 14;
    }
    return 2;
  }
  function Pg(a2, b2) {
    var c2 = a2.alternate;
    null === c2 ? (c2 = Bg(a2.tag, b2, a2.key, a2.mode), c2.elementType = a2.elementType, c2.type = a2.type, c2.stateNode = a2.stateNode, c2.alternate = a2, a2.alternate = c2) : (c2.pendingProps = b2, c2.type = a2.type, c2.flags = 0, c2.subtreeFlags = 0, c2.deletions = null);
    c2.flags = a2.flags & 14680064;
    c2.childLanes = a2.childLanes;
    c2.lanes = a2.lanes;
    c2.child = a2.child;
    c2.memoizedProps = a2.memoizedProps;
    c2.memoizedState = a2.memoizedState;
    c2.updateQueue = a2.updateQueue;
    b2 = a2.dependencies;
    c2.dependencies = null === b2 ? null : { lanes: b2.lanes, firstContext: b2.firstContext };
    c2.sibling = a2.sibling;
    c2.index = a2.index;
    c2.ref = a2.ref;
    return c2;
  }
  function Rg(a2, b2, c2, d2, e2, f2) {
    var g2 = 2;
    d2 = a2;
    if ("function" === typeof a2) aj(a2) && (g2 = 1);
    else if ("string" === typeof a2) g2 = 5;
    else a: switch (a2) {
      case ya:
        return Tg(c2.children, e2, f2, b2);
      case za:
        g2 = 8;
        e2 |= 8;
        break;
      case Aa:
        return a2 = Bg(12, c2, b2, e2 | 2), a2.elementType = Aa, a2.lanes = f2, a2;
      case Ea:
        return a2 = Bg(13, c2, b2, e2), a2.elementType = Ea, a2.lanes = f2, a2;
      case Fa:
        return a2 = Bg(19, c2, b2, e2), a2.elementType = Fa, a2.lanes = f2, a2;
      case Ia:
        return pj(c2, e2, f2, b2);
      default:
        if ("object" === typeof a2 && null !== a2) switch (a2.$$typeof) {
          case Ba:
            g2 = 10;
            break a;
          case Ca:
            g2 = 9;
            break a;
          case Da:
            g2 = 11;
            break a;
          case Ga:
            g2 = 14;
            break a;
          case Ha:
            g2 = 16;
            d2 = null;
            break a;
        }
        throw Error(p2(130, null == a2 ? a2 : typeof a2, ""));
    }
    b2 = Bg(g2, c2, b2, e2);
    b2.elementType = a2;
    b2.type = d2;
    b2.lanes = f2;
    return b2;
  }
  function Tg(a2, b2, c2, d2) {
    a2 = Bg(7, a2, d2, b2);
    a2.lanes = c2;
    return a2;
  }
  function pj(a2, b2, c2, d2) {
    a2 = Bg(22, a2, d2, b2);
    a2.elementType = Ia;
    a2.lanes = c2;
    a2.stateNode = { isHidden: false };
    return a2;
  }
  function Qg(a2, b2, c2) {
    a2 = Bg(6, a2, null, b2);
    a2.lanes = c2;
    return a2;
  }
  function Sg(a2, b2, c2) {
    b2 = Bg(4, null !== a2.children ? a2.children : [], a2.key, b2);
    b2.lanes = c2;
    b2.stateNode = { containerInfo: a2.containerInfo, pendingChildren: null, implementation: a2.implementation };
    return b2;
  }
  function al(a2, b2, c2, d2, e2) {
    this.tag = b2;
    this.containerInfo = a2;
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
    this.timeoutHandle = -1;
    this.callbackNode = this.pendingContext = this.context = null;
    this.callbackPriority = 0;
    this.eventTimes = zc(0);
    this.expirationTimes = zc(-1);
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
    this.entanglements = zc(0);
    this.identifierPrefix = d2;
    this.onRecoverableError = e2;
    this.mutableSourceEagerHydrationData = null;
  }
  function bl(a2, b2, c2, d2, e2, f2, g2, h2, k2) {
    a2 = new al(a2, b2, c2, h2, k2);
    1 === b2 ? (b2 = 1, true === f2 && (b2 |= 8)) : b2 = 0;
    f2 = Bg(3, null, null, b2);
    a2.current = f2;
    f2.stateNode = a2;
    f2.memoizedState = { element: d2, isDehydrated: c2, cache: null, transitions: null, pendingSuspenseBoundaries: null };
    kh(f2);
    return a2;
  }
  function cl(a2, b2, c2) {
    var d2 = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
    return { $$typeof: wa, key: null == d2 ? null : "" + d2, children: a2, containerInfo: b2, implementation: c2 };
  }
  function dl(a2) {
    if (!a2) return Vf;
    a2 = a2._reactInternals;
    a: {
      if (Vb(a2) !== a2 || 1 !== a2.tag) throw Error(p2(170));
      var b2 = a2;
      do {
        switch (b2.tag) {
          case 3:
            b2 = b2.stateNode.context;
            break a;
          case 1:
            if (Zf(b2.type)) {
              b2 = b2.stateNode.__reactInternalMemoizedMergedChildContext;
              break a;
            }
        }
        b2 = b2.return;
      } while (null !== b2);
      throw Error(p2(171));
    }
    if (1 === a2.tag) {
      var c2 = a2.type;
      if (Zf(c2)) return bg(a2, c2, b2);
    }
    return b2;
  }
  function el(a2, b2, c2, d2, e2, f2, g2, h2, k2) {
    a2 = bl(c2, d2, true, a2, e2, f2, g2, h2, k2);
    a2.context = dl(null);
    c2 = a2.current;
    d2 = R2();
    e2 = yi2(c2);
    f2 = mh(d2, e2);
    f2.callback = void 0 !== b2 && null !== b2 ? b2 : null;
    nh(c2, f2, e2);
    a2.current.lanes = e2;
    Ac(a2, e2, d2);
    Dk(a2, d2);
    return a2;
  }
  function fl(a2, b2, c2, d2) {
    var e2 = b2.current, f2 = R2(), g2 = yi2(e2);
    c2 = dl(c2);
    null === b2.context ? b2.context = c2 : b2.pendingContext = c2;
    b2 = mh(f2, g2);
    b2.payload = { element: a2 };
    d2 = void 0 === d2 ? null : d2;
    null !== d2 && (b2.callback = d2);
    a2 = nh(e2, b2, g2);
    null !== a2 && (gi2(a2, e2, g2, f2), oh(a2, e2, g2));
    return g2;
  }
  function gl(a2) {
    a2 = a2.current;
    if (!a2.child) return null;
    switch (a2.child.tag) {
      case 5:
        return a2.child.stateNode;
      default:
        return a2.child.stateNode;
    }
  }
  function hl(a2, b2) {
    a2 = a2.memoizedState;
    if (null !== a2 && null !== a2.dehydrated) {
      var c2 = a2.retryLane;
      a2.retryLane = 0 !== c2 && c2 < b2 ? c2 : b2;
    }
  }
  function il(a2, b2) {
    hl(a2, b2);
    (a2 = a2.alternate) && hl(a2, b2);
  }
  function jl() {
    return null;
  }
  var kl = "function" === typeof reportError ? reportError : function(a2) {
    console.error(a2);
  };
  function ll(a2) {
    this._internalRoot = a2;
  }
  ml.prototype.render = ll.prototype.render = function(a2) {
    var b2 = this._internalRoot;
    if (null === b2) throw Error(p2(409));
    fl(a2, b2, null, null);
  };
  ml.prototype.unmount = ll.prototype.unmount = function() {
    var a2 = this._internalRoot;
    if (null !== a2) {
      this._internalRoot = null;
      var b2 = a2.containerInfo;
      Rk(function() {
        fl(null, a2, null, null);
      });
      b2[uf] = null;
    }
  };
  function ml(a2) {
    this._internalRoot = a2;
  }
  ml.prototype.unstable_scheduleHydration = function(a2) {
    if (a2) {
      var b2 = Hc();
      a2 = { blockedOn: null, target: a2, priority: b2 };
      for (var c2 = 0; c2 < Qc.length && 0 !== b2 && b2 < Qc[c2].priority; c2++) ;
      Qc.splice(c2, 0, a2);
      0 === c2 && Vc(a2);
    }
  };
  function nl(a2) {
    return !(!a2 || 1 !== a2.nodeType && 9 !== a2.nodeType && 11 !== a2.nodeType);
  }
  function ol(a2) {
    return !(!a2 || 1 !== a2.nodeType && 9 !== a2.nodeType && 11 !== a2.nodeType && (8 !== a2.nodeType || " react-mount-point-unstable " !== a2.nodeValue));
  }
  function pl() {
  }
  function ql(a2, b2, c2, d2, e2) {
    if (e2) {
      if ("function" === typeof d2) {
        var f2 = d2;
        d2 = function() {
          var a3 = gl(g2);
          f2.call(a3);
        };
      }
      var g2 = el(b2, d2, a2, 0, null, false, false, "", pl);
      a2._reactRootContainer = g2;
      a2[uf] = g2.current;
      sf(8 === a2.nodeType ? a2.parentNode : a2);
      Rk();
      return g2;
    }
    for (; e2 = a2.lastChild; ) a2.removeChild(e2);
    if ("function" === typeof d2) {
      var h2 = d2;
      d2 = function() {
        var a3 = gl(k2);
        h2.call(a3);
      };
    }
    var k2 = bl(a2, 0, false, null, null, false, false, "", pl);
    a2._reactRootContainer = k2;
    a2[uf] = k2.current;
    sf(8 === a2.nodeType ? a2.parentNode : a2);
    Rk(function() {
      fl(b2, k2, c2, d2);
    });
    return k2;
  }
  function rl(a2, b2, c2, d2, e2) {
    var f2 = c2._reactRootContainer;
    if (f2) {
      var g2 = f2;
      if ("function" === typeof e2) {
        var h2 = e2;
        e2 = function() {
          var a3 = gl(g2);
          h2.call(a3);
        };
      }
      fl(b2, g2, a2, e2);
    } else g2 = ql(c2, b2, a2, e2, d2);
    return gl(g2);
  }
  Ec = function(a2) {
    switch (a2.tag) {
      case 3:
        var b2 = a2.stateNode;
        if (b2.current.memoizedState.isDehydrated) {
          var c2 = tc(b2.pendingLanes);
          0 !== c2 && (Cc(b2, c2 | 1), Dk(b2, B2()), 0 === (K2 & 6) && (Gj = B2() + 500, jg()));
        }
        break;
      case 13:
        Rk(function() {
          var b3 = ih(a2, 1);
          if (null !== b3) {
            var c3 = R2();
            gi2(b3, a2, 1, c3);
          }
        }), il(a2, 1);
    }
  };
  Fc = function(a2) {
    if (13 === a2.tag) {
      var b2 = ih(a2, 134217728);
      if (null !== b2) {
        var c2 = R2();
        gi2(b2, a2, 134217728, c2);
      }
      il(a2, 134217728);
    }
  };
  Gc = function(a2) {
    if (13 === a2.tag) {
      var b2 = yi2(a2), c2 = ih(a2, b2);
      if (null !== c2) {
        var d2 = R2();
        gi2(c2, a2, b2, d2);
      }
      il(a2, b2);
    }
  };
  Hc = function() {
    return C2;
  };
  Ic = function(a2, b2) {
    var c2 = C2;
    try {
      return C2 = a2, b2();
    } finally {
      C2 = c2;
    }
  };
  yb = function(a2, b2, c2) {
    switch (b2) {
      case "input":
        bb(a2, c2);
        b2 = c2.name;
        if ("radio" === c2.type && null != b2) {
          for (c2 = a2; c2.parentNode; ) c2 = c2.parentNode;
          c2 = c2.querySelectorAll("input[name=" + JSON.stringify("" + b2) + '][type="radio"]');
          for (b2 = 0; b2 < c2.length; b2++) {
            var d2 = c2[b2];
            if (d2 !== a2 && d2.form === a2.form) {
              var e2 = Db(d2);
              if (!e2) throw Error(p2(90));
              Wa(d2);
              bb(d2, e2);
            }
          }
        }
        break;
      case "textarea":
        ib(a2, c2);
        break;
      case "select":
        b2 = c2.value, null != b2 && fb(a2, !!c2.multiple, b2, false);
    }
  };
  Gb = Qk;
  Hb = Rk;
  var sl = { usingClientEntryPoint: false, Events: [Cb, ue2, Db, Eb, Fb, Qk] }, tl = { findFiberByHostInstance: Wc, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" };
  var ul = { bundleType: tl.bundleType, version: tl.version, rendererPackageName: tl.rendererPackageName, rendererConfig: tl.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ua.ReactCurrentDispatcher, findHostInstanceByFiber: function(a2) {
    a2 = Zb(a2);
    return null === a2 ? null : a2.stateNode;
  }, findFiberByHostInstance: tl.findFiberByHostInstance || jl, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
    var vl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!vl.isDisabled && vl.supportsFiber) try {
      kc = vl.inject(ul), lc = vl;
    } catch (a2) {
    }
  }
  reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sl;
  reactDom_production_min.createPortal = function(a2, b2) {
    var c2 = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
    if (!nl(b2)) throw Error(p2(200));
    return cl(a2, b2, null, c2);
  };
  reactDom_production_min.createRoot = function(a2, b2) {
    if (!nl(a2)) throw Error(p2(299));
    var c2 = false, d2 = "", e2 = kl;
    null !== b2 && void 0 !== b2 && (true === b2.unstable_strictMode && (c2 = true), void 0 !== b2.identifierPrefix && (d2 = b2.identifierPrefix), void 0 !== b2.onRecoverableError && (e2 = b2.onRecoverableError));
    b2 = bl(a2, 1, false, null, null, c2, false, d2, e2);
    a2[uf] = b2.current;
    sf(8 === a2.nodeType ? a2.parentNode : a2);
    return new ll(b2);
  };
  reactDom_production_min.findDOMNode = function(a2) {
    if (null == a2) return null;
    if (1 === a2.nodeType) return a2;
    var b2 = a2._reactInternals;
    if (void 0 === b2) {
      if ("function" === typeof a2.render) throw Error(p2(188));
      a2 = Object.keys(a2).join(",");
      throw Error(p2(268, a2));
    }
    a2 = Zb(b2);
    a2 = null === a2 ? null : a2.stateNode;
    return a2;
  };
  reactDom_production_min.flushSync = function(a2) {
    return Rk(a2);
  };
  reactDom_production_min.hydrate = function(a2, b2, c2) {
    if (!ol(b2)) throw Error(p2(200));
    return rl(null, a2, b2, true, c2);
  };
  reactDom_production_min.hydrateRoot = function(a2, b2, c2) {
    if (!nl(a2)) throw Error(p2(405));
    var d2 = null != c2 && c2.hydratedSources || null, e2 = false, f2 = "", g2 = kl;
    null !== c2 && void 0 !== c2 && (true === c2.unstable_strictMode && (e2 = true), void 0 !== c2.identifierPrefix && (f2 = c2.identifierPrefix), void 0 !== c2.onRecoverableError && (g2 = c2.onRecoverableError));
    b2 = el(b2, null, a2, 1, null != c2 ? c2 : null, e2, false, f2, g2);
    a2[uf] = b2.current;
    sf(a2);
    if (d2) for (a2 = 0; a2 < d2.length; a2++) c2 = d2[a2], e2 = c2._getVersion, e2 = e2(c2._source), null == b2.mutableSourceEagerHydrationData ? b2.mutableSourceEagerHydrationData = [c2, e2] : b2.mutableSourceEagerHydrationData.push(
      c2,
      e2
    );
    return new ml(b2);
  };
  reactDom_production_min.render = function(a2, b2, c2) {
    if (!ol(b2)) throw Error(p2(200));
    return rl(null, a2, b2, false, c2);
  };
  reactDom_production_min.unmountComponentAtNode = function(a2) {
    if (!ol(a2)) throw Error(p2(40));
    return a2._reactRootContainer ? (Rk(function() {
      rl(null, null, a2, false, function() {
        a2._reactRootContainer = null;
        a2[uf] = null;
      });
    }), true) : false;
  };
  reactDom_production_min.unstable_batchedUpdates = Qk;
  reactDom_production_min.unstable_renderSubtreeIntoContainer = function(a2, b2, c2, d2) {
    if (!ol(c2)) throw Error(p2(200));
    if (null == a2 || void 0 === a2._reactInternals) throw Error(p2(38));
    return rl(a2, b2, c2, false, d2);
  };
  reactDom_production_min.version = "18.3.1-next-f1338f8080-20240426";
  return reactDom_production_min;
}
var hasRequiredReactDom;
function requireReactDom() {
  if (hasRequiredReactDom) return reactDom.exports;
  hasRequiredReactDom = 1;
  function checkDCE() {
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
      return;
    }
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
    } catch (err) {
      console.error(err);
    }
  }
  {
    checkDCE();
    reactDom.exports = requireReactDom_production_min();
  }
  return reactDom.exports;
}
var hasRequiredClient;
function requireClient() {
  if (hasRequiredClient) return client;
  hasRequiredClient = 1;
  var m2 = requireReactDom();
  {
    client.createRoot = m2.createRoot;
    client.hydrateRoot = m2.hydrateRoot;
  }
  return client;
}
var clientExports = requireClient();
const ReactDOM = /* @__PURE__ */ getDefaultExportFromCjs(clientExports);
const LayoutGroupContext = reactExports.createContext({});
function useConstant(init) {
  const ref = reactExports.useRef(null);
  if (ref.current === null) {
    ref.current = init();
  }
  return ref.current;
}
const PresenceContext = reactExports.createContext(null);
const MotionConfigContext = reactExports.createContext({
  transformPagePoint: (p2) => p2,
  isStatic: false,
  reducedMotion: "never"
});
class PopChildMeasure extends reactExports.Component {
  getSnapshotBeforeUpdate(prevProps) {
    const element = this.props.childRef.current;
    if (element && prevProps.isPresent && !this.props.isPresent) {
      const size2 = this.props.sizeRef.current;
      size2.height = element.offsetHeight || 0;
      size2.width = element.offsetWidth || 0;
      size2.top = element.offsetTop;
      size2.left = element.offsetLeft;
    }
    return null;
  }
  /**
   * Required with getSnapshotBeforeUpdate to stop React complaining.
   */
  componentDidUpdate() {
  }
  render() {
    return this.props.children;
  }
}
function PopChild({ children, isPresent }) {
  const id2 = reactExports.useId();
  const ref = reactExports.useRef(null);
  const size2 = reactExports.useRef({
    width: 0,
    height: 0,
    top: 0,
    left: 0
  });
  const { nonce } = reactExports.useContext(MotionConfigContext);
  reactExports.useInsertionEffect(() => {
    const { width, height, top, left } = size2.current;
    if (isPresent || !ref.current || !width || !height)
      return;
    ref.current.dataset.motionPopId = id2;
    const style = document.createElement("style");
    if (nonce)
      style.nonce = nonce;
    document.head.appendChild(style);
    if (style.sheet) {
      style.sheet.insertRule(`
          [data-motion-pop-id="${id2}"] {
            position: absolute !important;
            width: ${width}px !important;
            height: ${height}px !important;
            top: ${top}px !important;
            left: ${left}px !important;
          }
        `);
    }
    return () => {
      document.head.removeChild(style);
    };
  }, [isPresent]);
  return jsxRuntimeExports.jsx(PopChildMeasure, { isPresent, childRef: ref, sizeRef: size2, children: reactExports.cloneElement(children, { ref }) });
}
const PresenceChild = ({ children, initial, isPresent, onExitComplete, custom, presenceAffectsLayout, mode }) => {
  const presenceChildren = useConstant(newChildrenMap);
  const id2 = reactExports.useId();
  const memoizedOnExitComplete = reactExports.useCallback((childId) => {
    presenceChildren.set(childId, true);
    for (const isComplete of presenceChildren.values()) {
      if (!isComplete)
        return;
    }
    onExitComplete && onExitComplete();
  }, [presenceChildren, onExitComplete]);
  const context = reactExports.useMemo(
    () => ({
      id: id2,
      initial,
      isPresent,
      custom,
      onExitComplete: memoizedOnExitComplete,
      register: (childId) => {
        presenceChildren.set(childId, false);
        return () => presenceChildren.delete(childId);
      }
    }),
    /**
     * If the presence of a child affects the layout of the components around it,
     * we want to make a new context value to ensure they get re-rendered
     * so they can detect that layout change.
     */
    presenceAffectsLayout ? [Math.random(), memoizedOnExitComplete] : [isPresent, memoizedOnExitComplete]
  );
  reactExports.useMemo(() => {
    presenceChildren.forEach((_2, key) => presenceChildren.set(key, false));
  }, [isPresent]);
  reactExports.useEffect(() => {
    !isPresent && !presenceChildren.size && onExitComplete && onExitComplete();
  }, [isPresent]);
  if (mode === "popLayout") {
    children = jsxRuntimeExports.jsx(PopChild, { isPresent, children });
  }
  return jsxRuntimeExports.jsx(PresenceContext.Provider, { value: context, children });
};
function newChildrenMap() {
  return /* @__PURE__ */ new Map();
}
function usePresence(subscribe = true) {
  const context = reactExports.useContext(PresenceContext);
  if (context === null)
    return [true, null];
  const { isPresent, onExitComplete, register } = context;
  const id2 = reactExports.useId();
  reactExports.useEffect(() => {
    if (subscribe)
      register(id2);
  }, [subscribe]);
  const safeToRemove = reactExports.useCallback(() => subscribe && onExitComplete && onExitComplete(id2), [id2, onExitComplete, subscribe]);
  return !isPresent && onExitComplete ? [false, safeToRemove] : [true];
}
const getChildKey = (child) => child.key || "";
function onlyElements(children) {
  const filtered = [];
  reactExports.Children.forEach(children, (child) => {
    if (reactExports.isValidElement(child))
      filtered.push(child);
  });
  return filtered;
}
const isBrowser = typeof window !== "undefined";
const useIsomorphicLayoutEffect = isBrowser ? reactExports.useLayoutEffect : reactExports.useEffect;
const AnimatePresence = ({ children, custom, initial = true, onExitComplete, presenceAffectsLayout = true, mode = "sync", propagate = false }) => {
  const [isParentPresent, safeToRemove] = usePresence(propagate);
  const presentChildren = reactExports.useMemo(() => onlyElements(children), [children]);
  const presentKeys = propagate && !isParentPresent ? [] : presentChildren.map(getChildKey);
  const isInitialRender = reactExports.useRef(true);
  const pendingPresentChildren = reactExports.useRef(presentChildren);
  const exitComplete = useConstant(() => /* @__PURE__ */ new Map());
  const [diffedChildren, setDiffedChildren] = reactExports.useState(presentChildren);
  const [renderedChildren, setRenderedChildren] = reactExports.useState(presentChildren);
  useIsomorphicLayoutEffect(() => {
    isInitialRender.current = false;
    pendingPresentChildren.current = presentChildren;
    for (let i = 0; i < renderedChildren.length; i++) {
      const key = getChildKey(renderedChildren[i]);
      if (!presentKeys.includes(key)) {
        if (exitComplete.get(key) !== true) {
          exitComplete.set(key, false);
        }
      } else {
        exitComplete.delete(key);
      }
    }
  }, [renderedChildren, presentKeys.length, presentKeys.join("-")]);
  const exitingChildren = [];
  if (presentChildren !== diffedChildren) {
    let nextChildren = [...presentChildren];
    for (let i = 0; i < renderedChildren.length; i++) {
      const child = renderedChildren[i];
      const key = getChildKey(child);
      if (!presentKeys.includes(key)) {
        nextChildren.splice(i, 0, child);
        exitingChildren.push(child);
      }
    }
    if (mode === "wait" && exitingChildren.length) {
      nextChildren = exitingChildren;
    }
    setRenderedChildren(onlyElements(nextChildren));
    setDiffedChildren(presentChildren);
    return;
  }
  const { forceRender } = reactExports.useContext(LayoutGroupContext);
  return jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: renderedChildren.map((child) => {
    const key = getChildKey(child);
    const isPresent = propagate && !isParentPresent ? false : presentChildren === renderedChildren || presentKeys.includes(key);
    const onExit = () => {
      if (exitComplete.has(key)) {
        exitComplete.set(key, true);
      } else {
        return;
      }
      let isEveryExitComplete = true;
      exitComplete.forEach((isExitComplete) => {
        if (!isExitComplete)
          isEveryExitComplete = false;
      });
      if (isEveryExitComplete) {
        forceRender === null || forceRender === void 0 ? void 0 : forceRender();
        setRenderedChildren(pendingPresentChildren.current);
        propagate && (safeToRemove === null || safeToRemove === void 0 ? void 0 : safeToRemove());
        onExitComplete && onExitComplete();
      }
    };
    return jsxRuntimeExports.jsx(PresenceChild, { isPresent, initial: !isInitialRender.current || initial ? void 0 : false, custom: isPresent ? void 0 : custom, presenceAffectsLayout, mode, onExitComplete: isPresent ? void 0 : onExit, children: child }, key);
  }) });
};
const noop = /* @__NO_SIDE_EFFECTS__ */ (any) => any;
let invariant = noop;
// @__NO_SIDE_EFFECTS__
function memo(callback) {
  let result;
  return () => {
    if (result === void 0)
      result = callback();
    return result;
  };
}
const progress = /* @__NO_SIDE_EFFECTS__ */ (from, to, value) => {
  const toFromDifference = to - from;
  return toFromDifference === 0 ? 1 : (value - from) / toFromDifference;
};
const secondsToMilliseconds = /* @__NO_SIDE_EFFECTS__ */ (seconds) => seconds * 1e3;
const millisecondsToSeconds = /* @__NO_SIDE_EFFECTS__ */ (milliseconds) => milliseconds / 1e3;
const MotionGlobalConfig = {
  useManualTiming: false
};
function createRenderStep(runNextFrame) {
  let thisFrame = /* @__PURE__ */ new Set();
  let nextFrame = /* @__PURE__ */ new Set();
  let isProcessing = false;
  let flushNextFrame = false;
  const toKeepAlive = /* @__PURE__ */ new WeakSet();
  let latestFrameData = {
    delta: 0,
    timestamp: 0,
    isProcessing: false
  };
  function triggerCallback(callback) {
    if (toKeepAlive.has(callback)) {
      step.schedule(callback);
      runNextFrame();
    }
    callback(latestFrameData);
  }
  const step = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (callback, keepAlive = false, immediate = false) => {
      const addToCurrentFrame = immediate && isProcessing;
      const queue = addToCurrentFrame ? thisFrame : nextFrame;
      if (keepAlive)
        toKeepAlive.add(callback);
      if (!queue.has(callback))
        queue.add(callback);
      return callback;
    },
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: (callback) => {
      nextFrame.delete(callback);
      toKeepAlive.delete(callback);
    },
    /**
     * Execute all schedule callbacks.
     */
    process: (frameData2) => {
      latestFrameData = frameData2;
      if (isProcessing) {
        flushNextFrame = true;
        return;
      }
      isProcessing = true;
      [thisFrame, nextFrame] = [nextFrame, thisFrame];
      thisFrame.forEach(triggerCallback);
      thisFrame.clear();
      isProcessing = false;
      if (flushNextFrame) {
        flushNextFrame = false;
        step.process(frameData2);
      }
    }
  };
  return step;
}
const stepsOrder = [
  "read",
  // Read
  "resolveKeyframes",
  // Write/Read/Write/Read
  "update",
  // Compute
  "preRender",
  // Compute
  "render",
  // Write
  "postRender"
  // Compute
];
const maxElapsed = 40;
function createRenderBatcher(scheduleNextBatch, allowKeepAlive) {
  let runNextFrame = false;
  let useDefaultElapsed = true;
  const state2 = {
    delta: 0,
    timestamp: 0,
    isProcessing: false
  };
  const flagRunNextFrame = () => runNextFrame = true;
  const steps = stepsOrder.reduce((acc, key) => {
    acc[key] = createRenderStep(flagRunNextFrame);
    return acc;
  }, {});
  const { read, resolveKeyframes, update, preRender, render, postRender } = steps;
  const processBatch = () => {
    const timestamp = performance.now();
    runNextFrame = false;
    state2.delta = useDefaultElapsed ? 1e3 / 60 : Math.max(Math.min(timestamp - state2.timestamp, maxElapsed), 1);
    state2.timestamp = timestamp;
    state2.isProcessing = true;
    read.process(state2);
    resolveKeyframes.process(state2);
    update.process(state2);
    preRender.process(state2);
    render.process(state2);
    postRender.process(state2);
    state2.isProcessing = false;
    if (runNextFrame && allowKeepAlive) {
      useDefaultElapsed = false;
      scheduleNextBatch(processBatch);
    }
  };
  const wake = () => {
    runNextFrame = true;
    useDefaultElapsed = true;
    if (!state2.isProcessing) {
      scheduleNextBatch(processBatch);
    }
  };
  const schedule = stepsOrder.reduce((acc, key) => {
    const step = steps[key];
    acc[key] = (process, keepAlive = false, immediate = false) => {
      if (!runNextFrame)
        wake();
      return step.schedule(process, keepAlive, immediate);
    };
    return acc;
  }, {});
  const cancel = (process) => {
    for (let i = 0; i < stepsOrder.length; i++) {
      steps[stepsOrder[i]].cancel(process);
    }
  };
  return { schedule, cancel, state: state2, steps };
}
const { schedule: frame, cancel: cancelFrame, state: frameData, steps: frameSteps } = createRenderBatcher(typeof requestAnimationFrame !== "undefined" ? requestAnimationFrame : noop, true);
const LazyContext = reactExports.createContext({ strict: false });
const featureProps = {
  animation: [
    "animate",
    "variants",
    "whileHover",
    "whileTap",
    "exit",
    "whileInView",
    "whileFocus",
    "whileDrag"
  ],
  exit: ["exit"],
  drag: ["drag", "dragControls"],
  focus: ["whileFocus"],
  hover: ["whileHover", "onHoverStart", "onHoverEnd"],
  tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
  pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
  inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
  layout: ["layout", "layoutId"]
};
const featureDefinitions = {};
for (const key in featureProps) {
  featureDefinitions[key] = {
    isEnabled: (props) => featureProps[key].some((name) => !!props[name])
  };
}
function loadFeatures(features) {
  for (const key in features) {
    featureDefinitions[key] = {
      ...featureDefinitions[key],
      ...features[key]
    };
  }
}
const validMotionProps = /* @__PURE__ */ new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport"
]);
function isValidMotionProp(key) {
  return key.startsWith("while") || key.startsWith("drag") && key !== "draggable" || key.startsWith("layout") || key.startsWith("onTap") || key.startsWith("onPan") || key.startsWith("onLayout") || validMotionProps.has(key);
}
let shouldForward = (key) => !isValidMotionProp(key);
function loadExternalIsValidProp(isValidProp) {
  if (!isValidProp)
    return;
  shouldForward = (key) => key.startsWith("on") ? !isValidMotionProp(key) : isValidProp(key);
}
try {
  loadExternalIsValidProp(require("@emotion/is-prop-valid").default);
} catch (_a) {
}
function filterProps(props, isDom, forwardMotionProps) {
  const filteredProps = {};
  for (const key in props) {
    if (key === "values" && typeof props.values === "object")
      continue;
    if (shouldForward(key) || forwardMotionProps === true && isValidMotionProp(key) || !isDom && !isValidMotionProp(key) || // If trying to use native HTML drag events, forward drag listeners
    props["draggable"] && key.startsWith("onDrag")) {
      filteredProps[key] = props[key];
    }
  }
  return filteredProps;
}
function MotionConfig({ children, isValidProp, ...config }) {
  isValidProp && loadExternalIsValidProp(isValidProp);
  config = { ...reactExports.useContext(MotionConfigContext), ...config };
  config.isStatic = useConstant(() => config.isStatic);
  const context = reactExports.useMemo(() => config, [
    JSON.stringify(config.transition),
    config.transformPagePoint,
    config.reducedMotion
  ]);
  return jsxRuntimeExports.jsx(MotionConfigContext.Provider, { value: context, children });
}
function createDOMMotionComponentProxy(componentFactory) {
  if (typeof Proxy === "undefined") {
    return componentFactory;
  }
  const componentCache = /* @__PURE__ */ new Map();
  const deprecatedFactoryFunction = (...args) => {
    return componentFactory(...args);
  };
  return new Proxy(deprecatedFactoryFunction, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (_target, key) => {
      if (key === "create")
        return componentFactory;
      if (!componentCache.has(key)) {
        componentCache.set(key, componentFactory(key));
      }
      return componentCache.get(key);
    }
  });
}
const MotionContext = reactExports.createContext({});
function isVariantLabel(v2) {
  return typeof v2 === "string" || Array.isArray(v2);
}
function isAnimationControls(v2) {
  return v2 !== null && typeof v2 === "object" && typeof v2.start === "function";
}
const variantPriorityOrder = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
];
const variantProps = ["initial", ...variantPriorityOrder];
function isControllingVariants(props) {
  return isAnimationControls(props.animate) || variantProps.some((name) => isVariantLabel(props[name]));
}
function isVariantNode(props) {
  return Boolean(isControllingVariants(props) || props.variants);
}
function getCurrentTreeVariants(props, context) {
  if (isControllingVariants(props)) {
    const { initial, animate } = props;
    return {
      initial: initial === false || isVariantLabel(initial) ? initial : void 0,
      animate: isVariantLabel(animate) ? animate : void 0
    };
  }
  return props.inherit !== false ? context : {};
}
function useCreateMotionContext(props) {
  const { initial, animate } = getCurrentTreeVariants(props, reactExports.useContext(MotionContext));
  return reactExports.useMemo(() => ({ initial, animate }), [variantLabelsAsDependency(initial), variantLabelsAsDependency(animate)]);
}
function variantLabelsAsDependency(prop) {
  return Array.isArray(prop) ? prop.join(" ") : prop;
}
const motionComponentSymbol = Symbol.for("motionComponentSymbol");
function isRefObject(ref) {
  return ref && typeof ref === "object" && Object.prototype.hasOwnProperty.call(ref, "current");
}
function useMotionRef(visualState, visualElement, externalRef) {
  return reactExports.useCallback(
    (instance) => {
      if (instance) {
        visualState.onMount && visualState.onMount(instance);
      }
      if (visualElement) {
        if (instance) {
          visualElement.mount(instance);
        } else {
          visualElement.unmount();
        }
      }
      if (externalRef) {
        if (typeof externalRef === "function") {
          externalRef(instance);
        } else if (isRefObject(externalRef)) {
          externalRef.current = instance;
        }
      }
    },
    /**
     * Only pass a new ref callback to React if we've received a visual element
     * factory. Otherwise we'll be mounting/remounting every time externalRef
     * or other dependencies change.
     */
    [visualElement]
  );
}
const camelToDash = (str) => str.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase();
const optimizedAppearDataId = "framerAppearId";
const optimizedAppearDataAttribute = "data-" + camelToDash(optimizedAppearDataId);
const { schedule: microtask } = createRenderBatcher(queueMicrotask, false);
const SwitchLayoutGroupContext = reactExports.createContext({});
function useVisualElement(Component, visualState, props, createVisualElement, ProjectionNodeConstructor) {
  var _a, _b;
  const { visualElement: parent } = reactExports.useContext(MotionContext);
  const lazyContext = reactExports.useContext(LazyContext);
  const presenceContext = reactExports.useContext(PresenceContext);
  const reducedMotionConfig = reactExports.useContext(MotionConfigContext).reducedMotion;
  const visualElementRef = reactExports.useRef(null);
  createVisualElement = createVisualElement || lazyContext.renderer;
  if (!visualElementRef.current && createVisualElement) {
    visualElementRef.current = createVisualElement(Component, {
      visualState,
      parent,
      props,
      presenceContext,
      blockInitialAnimation: presenceContext ? presenceContext.initial === false : false,
      reducedMotionConfig
    });
  }
  const visualElement = visualElementRef.current;
  const initialLayoutGroupConfig = reactExports.useContext(SwitchLayoutGroupContext);
  if (visualElement && !visualElement.projection && ProjectionNodeConstructor && (visualElement.type === "html" || visualElement.type === "svg")) {
    createProjectionNode$1(visualElementRef.current, props, ProjectionNodeConstructor, initialLayoutGroupConfig);
  }
  const isMounted = reactExports.useRef(false);
  reactExports.useInsertionEffect(() => {
    if (visualElement && isMounted.current) {
      visualElement.update(props, presenceContext);
    }
  });
  const optimisedAppearId = props[optimizedAppearDataAttribute];
  const wantsHandoff = reactExports.useRef(Boolean(optimisedAppearId) && !((_a = window.MotionHandoffIsComplete) === null || _a === void 0 ? void 0 : _a.call(window, optimisedAppearId)) && ((_b = window.MotionHasOptimisedAnimation) === null || _b === void 0 ? void 0 : _b.call(window, optimisedAppearId)));
  useIsomorphicLayoutEffect(() => {
    if (!visualElement)
      return;
    isMounted.current = true;
    window.MotionIsMounted = true;
    visualElement.updateFeatures();
    microtask.render(visualElement.render);
    if (wantsHandoff.current && visualElement.animationState) {
      visualElement.animationState.animateChanges();
    }
  });
  reactExports.useEffect(() => {
    if (!visualElement)
      return;
    if (!wantsHandoff.current && visualElement.animationState) {
      visualElement.animationState.animateChanges();
    }
    if (wantsHandoff.current) {
      queueMicrotask(() => {
        var _a2;
        (_a2 = window.MotionHandoffMarkAsComplete) === null || _a2 === void 0 ? void 0 : _a2.call(window, optimisedAppearId);
      });
      wantsHandoff.current = false;
    }
  });
  return visualElement;
}
function createProjectionNode$1(visualElement, props, ProjectionNodeConstructor, initialPromotionConfig) {
  const { layoutId, layout: layout2, drag: drag2, dragConstraints, layoutScroll, layoutRoot } = props;
  visualElement.projection = new ProjectionNodeConstructor(visualElement.latestValues, props["data-framer-portal-id"] ? void 0 : getClosestProjectingNode(visualElement.parent));
  visualElement.projection.setOptions({
    layoutId,
    layout: layout2,
    alwaysMeasureLayout: Boolean(drag2) || dragConstraints && isRefObject(dragConstraints),
    visualElement,
    /**
     * TODO: Update options in an effect. This could be tricky as it'll be too late
     * to update by the time layout animations run.
     * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
     * ensuring it gets called if there's no potential layout animations.
     *
     */
    animationType: typeof layout2 === "string" ? layout2 : "both",
    initialPromotionConfig,
    layoutScroll,
    layoutRoot
  });
}
function getClosestProjectingNode(visualElement) {
  if (!visualElement)
    return void 0;
  return visualElement.options.allowProjection !== false ? visualElement.projection : getClosestProjectingNode(visualElement.parent);
}
function createRendererMotionComponent({ preloadedFeatures, createVisualElement, useRender, useVisualState, Component }) {
  var _a, _b;
  preloadedFeatures && loadFeatures(preloadedFeatures);
  function MotionComponent(props, externalRef) {
    let MeasureLayout2;
    const configAndProps = {
      ...reactExports.useContext(MotionConfigContext),
      ...props,
      layoutId: useLayoutId(props)
    };
    const { isStatic } = configAndProps;
    const context = useCreateMotionContext(props);
    const visualState = useVisualState(props, isStatic);
    if (!isStatic && isBrowser) {
      useStrictMode();
      const layoutProjection = getProjectionFunctionality(configAndProps);
      MeasureLayout2 = layoutProjection.MeasureLayout;
      context.visualElement = useVisualElement(Component, visualState, configAndProps, createVisualElement, layoutProjection.ProjectionNode);
    }
    return jsxRuntimeExports.jsxs(MotionContext.Provider, { value: context, children: [MeasureLayout2 && context.visualElement ? jsxRuntimeExports.jsx(MeasureLayout2, { visualElement: context.visualElement, ...configAndProps }) : null, useRender(Component, props, useMotionRef(visualState, context.visualElement, externalRef), visualState, isStatic, context.visualElement)] });
  }
  MotionComponent.displayName = `motion.${typeof Component === "string" ? Component : `create(${(_b = (_a = Component.displayName) !== null && _a !== void 0 ? _a : Component.name) !== null && _b !== void 0 ? _b : ""})`}`;
  const ForwardRefMotionComponent = reactExports.forwardRef(MotionComponent);
  ForwardRefMotionComponent[motionComponentSymbol] = Component;
  return ForwardRefMotionComponent;
}
function useLayoutId({ layoutId }) {
  const layoutGroupId = reactExports.useContext(LayoutGroupContext).id;
  return layoutGroupId && layoutId !== void 0 ? layoutGroupId + "-" + layoutId : layoutId;
}
function useStrictMode(configAndProps, preloadedFeatures) {
  reactExports.useContext(LazyContext).strict;
}
function getProjectionFunctionality(props) {
  const { drag: drag2, layout: layout2 } = featureDefinitions;
  if (!drag2 && !layout2)
    return {};
  const combined = { ...drag2, ...layout2 };
  return {
    MeasureLayout: (drag2 === null || drag2 === void 0 ? void 0 : drag2.isEnabled(props)) || (layout2 === null || layout2 === void 0 ? void 0 : layout2.isEnabled(props)) ? combined.MeasureLayout : void 0,
    ProjectionNode: combined.ProjectionNode
  };
}
const lowercaseSVGElements = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view"
];
function isSVGComponent(Component) {
  if (
    /**
     * If it's not a string, it's a custom React component. Currently we only support
     * HTML custom React components.
     */
    typeof Component !== "string" || /**
     * If it contains a dash, the element is a custom HTML webcomponent.
     */
    Component.includes("-")
  ) {
    return false;
  } else if (
    /**
     * If it's in our list of lowercase SVG tags, it's an SVG component
     */
    lowercaseSVGElements.indexOf(Component) > -1 || /**
     * If it contains a capital letter, it's an SVG component
     */
    /[A-Z]/u.test(Component)
  ) {
    return true;
  }
  return false;
}
function getValueState(visualElement) {
  const state2 = [{}, {}];
  visualElement === null || visualElement === void 0 ? void 0 : visualElement.values.forEach((value, key) => {
    state2[0][key] = value.get();
    state2[1][key] = value.getVelocity();
  });
  return state2;
}
function resolveVariantFromProps(props, definition, custom, visualElement) {
  if (typeof definition === "function") {
    const [current, velocity] = getValueState(visualElement);
    definition = definition(custom !== void 0 ? custom : props.custom, current, velocity);
  }
  if (typeof definition === "string") {
    definition = props.variants && props.variants[definition];
  }
  if (typeof definition === "function") {
    const [current, velocity] = getValueState(visualElement);
    definition = definition(custom !== void 0 ? custom : props.custom, current, velocity);
  }
  return definition;
}
const isKeyframesTarget = (v2) => {
  return Array.isArray(v2);
};
const isCustomValue = (v2) => {
  return Boolean(v2 && typeof v2 === "object" && v2.mix && v2.toValue);
};
const resolveFinalValueInKeyframes = (v2) => {
  return isKeyframesTarget(v2) ? v2[v2.length - 1] || 0 : v2;
};
const isMotionValue = (value) => Boolean(value && value.getVelocity);
function resolveMotionValue(value) {
  const unwrappedValue = isMotionValue(value) ? value.get() : value;
  return isCustomValue(unwrappedValue) ? unwrappedValue.toValue() : unwrappedValue;
}
function makeState({ scrapeMotionValuesFromProps: scrapeMotionValuesFromProps2, createRenderState, onUpdate }, props, context, presenceContext) {
  const state2 = {
    latestValues: makeLatestValues(props, context, presenceContext, scrapeMotionValuesFromProps2),
    renderState: createRenderState()
  };
  if (onUpdate) {
    state2.onMount = (instance) => onUpdate({ props, current: instance, ...state2 });
    state2.onUpdate = (visualElement) => onUpdate(visualElement);
  }
  return state2;
}
const makeUseVisualState = (config) => (props, isStatic) => {
  const context = reactExports.useContext(MotionContext);
  const presenceContext = reactExports.useContext(PresenceContext);
  const make = () => makeState(config, props, context, presenceContext);
  return isStatic ? make() : useConstant(make);
};
function makeLatestValues(props, context, presenceContext, scrapeMotionValues) {
  const values = {};
  const motionValues = scrapeMotionValues(props, {});
  for (const key in motionValues) {
    values[key] = resolveMotionValue(motionValues[key]);
  }
  let { initial, animate } = props;
  const isControllingVariants$1 = isControllingVariants(props);
  const isVariantNode$1 = isVariantNode(props);
  if (context && isVariantNode$1 && !isControllingVariants$1 && props.inherit !== false) {
    if (initial === void 0)
      initial = context.initial;
    if (animate === void 0)
      animate = context.animate;
  }
  let isInitialAnimationBlocked = presenceContext ? presenceContext.initial === false : false;
  isInitialAnimationBlocked = isInitialAnimationBlocked || initial === false;
  const variantToSet = isInitialAnimationBlocked ? animate : initial;
  if (variantToSet && typeof variantToSet !== "boolean" && !isAnimationControls(variantToSet)) {
    const list = Array.isArray(variantToSet) ? variantToSet : [variantToSet];
    for (let i = 0; i < list.length; i++) {
      const resolved = resolveVariantFromProps(props, list[i]);
      if (resolved) {
        const { transitionEnd, transition, ...target } = resolved;
        for (const key in target) {
          let valueTarget = target[key];
          if (Array.isArray(valueTarget)) {
            const index = isInitialAnimationBlocked ? valueTarget.length - 1 : 0;
            valueTarget = valueTarget[index];
          }
          if (valueTarget !== null) {
            values[key] = valueTarget;
          }
        }
        for (const key in transitionEnd) {
          values[key] = transitionEnd[key];
        }
      }
    }
  }
  return values;
}
const transformPropOrder = [
  "transformPerspective",
  "x",
  "y",
  "z",
  "translateX",
  "translateY",
  "translateZ",
  "scale",
  "scaleX",
  "scaleY",
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "skew",
  "skewX",
  "skewY"
];
const transformProps = new Set(transformPropOrder);
const checkStringStartsWith = (token) => (key) => typeof key === "string" && key.startsWith(token);
const isCSSVariableName = /* @__PURE__ */ checkStringStartsWith("--");
const startsAsVariableToken = /* @__PURE__ */ checkStringStartsWith("var(--");
const isCSSVariableToken = (value) => {
  const startsWithToken = startsAsVariableToken(value);
  if (!startsWithToken)
    return false;
  return singleCssVariableRegex.test(value.split("/*")[0].trim());
};
const singleCssVariableRegex = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
const getValueAsType = (value, type) => {
  return type && typeof value === "number" ? type.transform(value) : value;
};
const clamp = (min, max, v2) => {
  if (v2 > max)
    return max;
  if (v2 < min)
    return min;
  return v2;
};
const number = {
  test: (v2) => typeof v2 === "number",
  parse: parseFloat,
  transform: (v2) => v2
};
const alpha = {
  ...number,
  transform: (v2) => clamp(0, 1, v2)
};
const scale = {
  ...number,
  default: 1
};
const createUnitType = (unit) => ({
  test: (v2) => typeof v2 === "string" && v2.endsWith(unit) && v2.split(" ").length === 1,
  parse: parseFloat,
  transform: (v2) => `${v2}${unit}`
});
const degrees = /* @__PURE__ */ createUnitType("deg");
const percent = /* @__PURE__ */ createUnitType("%");
const px = /* @__PURE__ */ createUnitType("px");
const vh = /* @__PURE__ */ createUnitType("vh");
const vw = /* @__PURE__ */ createUnitType("vw");
const progressPercentage = {
  ...percent,
  parse: (v2) => percent.parse(v2) / 100,
  transform: (v2) => percent.transform(v2 * 100)
};
const browserNumberValueTypes = {
  // Border props
  borderWidth: px,
  borderTopWidth: px,
  borderRightWidth: px,
  borderBottomWidth: px,
  borderLeftWidth: px,
  borderRadius: px,
  radius: px,
  borderTopLeftRadius: px,
  borderTopRightRadius: px,
  borderBottomRightRadius: px,
  borderBottomLeftRadius: px,
  // Positioning props
  width: px,
  maxWidth: px,
  height: px,
  maxHeight: px,
  top: px,
  right: px,
  bottom: px,
  left: px,
  // Spacing props
  padding: px,
  paddingTop: px,
  paddingRight: px,
  paddingBottom: px,
  paddingLeft: px,
  margin: px,
  marginTop: px,
  marginRight: px,
  marginBottom: px,
  marginLeft: px,
  // Misc
  backgroundPositionX: px,
  backgroundPositionY: px
};
const transformValueTypes = {
  rotate: degrees,
  rotateX: degrees,
  rotateY: degrees,
  rotateZ: degrees,
  scale,
  scaleX: scale,
  scaleY: scale,
  scaleZ: scale,
  skew: degrees,
  skewX: degrees,
  skewY: degrees,
  distance: px,
  translateX: px,
  translateY: px,
  translateZ: px,
  x: px,
  y: px,
  z: px,
  perspective: px,
  transformPerspective: px,
  opacity: alpha,
  originX: progressPercentage,
  originY: progressPercentage,
  originZ: px
};
const int = {
  ...number,
  transform: Math.round
};
const numberValueTypes = {
  ...browserNumberValueTypes,
  ...transformValueTypes,
  zIndex: int,
  size: px,
  // SVG
  fillOpacity: alpha,
  strokeOpacity: alpha,
  numOctaves: int
};
const translateAlias = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
};
const numTransforms = transformPropOrder.length;
function buildTransform(latestValues, transform, transformTemplate) {
  let transformString = "";
  let transformIsDefault = true;
  for (let i = 0; i < numTransforms; i++) {
    const key = transformPropOrder[i];
    const value = latestValues[key];
    if (value === void 0)
      continue;
    let valueIsDefault = true;
    if (typeof value === "number") {
      valueIsDefault = value === (key.startsWith("scale") ? 1 : 0);
    } else {
      valueIsDefault = parseFloat(value) === 0;
    }
    if (!valueIsDefault || transformTemplate) {
      const valueAsType = getValueAsType(value, numberValueTypes[key]);
      if (!valueIsDefault) {
        transformIsDefault = false;
        const transformName = translateAlias[key] || key;
        transformString += `${transformName}(${valueAsType}) `;
      }
      if (transformTemplate) {
        transform[key] = valueAsType;
      }
    }
  }
  transformString = transformString.trim();
  if (transformTemplate) {
    transformString = transformTemplate(transform, transformIsDefault ? "" : transformString);
  } else if (transformIsDefault) {
    transformString = "none";
  }
  return transformString;
}
function buildHTMLStyles(state2, latestValues, transformTemplate) {
  const { style, vars, transformOrigin } = state2;
  let hasTransform2 = false;
  let hasTransformOrigin = false;
  for (const key in latestValues) {
    const value = latestValues[key];
    if (transformProps.has(key)) {
      hasTransform2 = true;
      continue;
    } else if (isCSSVariableName(key)) {
      vars[key] = value;
      continue;
    } else {
      const valueAsType = getValueAsType(value, numberValueTypes[key]);
      if (key.startsWith("origin")) {
        hasTransformOrigin = true;
        transformOrigin[key] = valueAsType;
      } else {
        style[key] = valueAsType;
      }
    }
  }
  if (!latestValues.transform) {
    if (hasTransform2 || transformTemplate) {
      style.transform = buildTransform(latestValues, state2.transform, transformTemplate);
    } else if (style.transform) {
      style.transform = "none";
    }
  }
  if (hasTransformOrigin) {
    const { originX = "50%", originY = "50%", originZ = 0 } = transformOrigin;
    style.transformOrigin = `${originX} ${originY} ${originZ}`;
  }
}
const dashKeys = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
};
const camelKeys = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function buildSVGPath(attrs, length, spacing = 1, offset = 0, useDashCase = true) {
  attrs.pathLength = 1;
  const keys = useDashCase ? dashKeys : camelKeys;
  attrs[keys.offset] = px.transform(-offset);
  const pathLength = px.transform(length);
  const pathSpacing = px.transform(spacing);
  attrs[keys.array] = `${pathLength} ${pathSpacing}`;
}
function calcOrigin$1(origin, offset, size2) {
  return typeof origin === "string" ? origin : px.transform(offset + size2 * origin);
}
function calcSVGTransformOrigin(dimensions, originX, originY) {
  const pxOriginX = calcOrigin$1(originX, dimensions.x, dimensions.width);
  const pxOriginY = calcOrigin$1(originY, dimensions.y, dimensions.height);
  return `${pxOriginX} ${pxOriginY}`;
}
function buildSVGAttrs(state2, {
  attrX,
  attrY,
  attrScale,
  originX,
  originY,
  pathLength,
  pathSpacing = 1,
  pathOffset = 0,
  // This is object creation, which we try to avoid per-frame.
  ...latest
}, isSVGTag2, transformTemplate) {
  buildHTMLStyles(state2, latest, transformTemplate);
  if (isSVGTag2) {
    if (state2.style.viewBox) {
      state2.attrs.viewBox = state2.style.viewBox;
    }
    return;
  }
  state2.attrs = state2.style;
  state2.style = {};
  const { attrs, style, dimensions } = state2;
  if (attrs.transform) {
    if (dimensions)
      style.transform = attrs.transform;
    delete attrs.transform;
  }
  if (dimensions && (originX !== void 0 || originY !== void 0 || style.transform)) {
    style.transformOrigin = calcSVGTransformOrigin(dimensions, originX !== void 0 ? originX : 0.5, originY !== void 0 ? originY : 0.5);
  }
  if (attrX !== void 0)
    attrs.x = attrX;
  if (attrY !== void 0)
    attrs.y = attrY;
  if (attrScale !== void 0)
    attrs.scale = attrScale;
  if (pathLength !== void 0) {
    buildSVGPath(attrs, pathLength, pathSpacing, pathOffset, false);
  }
}
const createHtmlRenderState = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
const createSvgRenderState = () => ({
  ...createHtmlRenderState(),
  attrs: {}
});
const isSVGTag = (tag) => typeof tag === "string" && tag.toLowerCase() === "svg";
function renderHTML(element, { style, vars }, styleProp, projection) {
  Object.assign(element.style, style, projection && projection.getProjectionStyles(styleProp));
  for (const key in vars) {
    element.style.setProperty(key, vars[key]);
  }
}
const camelCaseAttributes = /* @__PURE__ */ new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust"
]);
function renderSVG(element, renderState, _styleProp, projection) {
  renderHTML(element, renderState, void 0, projection);
  for (const key in renderState.attrs) {
    element.setAttribute(!camelCaseAttributes.has(key) ? camelToDash(key) : key, renderState.attrs[key]);
  }
}
const scaleCorrectors = {};
function addScaleCorrector(correctors) {
  Object.assign(scaleCorrectors, correctors);
}
function isForcedMotionValue(key, { layout: layout2, layoutId }) {
  return transformProps.has(key) || key.startsWith("origin") || (layout2 || layoutId !== void 0) && (!!scaleCorrectors[key] || key === "opacity");
}
function scrapeMotionValuesFromProps$1(props, prevProps, visualElement) {
  var _a;
  const { style } = props;
  const newValues = {};
  for (const key in style) {
    if (isMotionValue(style[key]) || prevProps.style && isMotionValue(prevProps.style[key]) || isForcedMotionValue(key, props) || ((_a = visualElement === null || visualElement === void 0 ? void 0 : visualElement.getValue(key)) === null || _a === void 0 ? void 0 : _a.liveStyle) !== void 0) {
      newValues[key] = style[key];
    }
  }
  return newValues;
}
function scrapeMotionValuesFromProps(props, prevProps, visualElement) {
  const newValues = scrapeMotionValuesFromProps$1(props, prevProps, visualElement);
  for (const key in props) {
    if (isMotionValue(props[key]) || isMotionValue(prevProps[key])) {
      const targetKey = transformPropOrder.indexOf(key) !== -1 ? "attr" + key.charAt(0).toUpperCase() + key.substring(1) : key;
      newValues[targetKey] = props[key];
    }
  }
  return newValues;
}
function updateSVGDimensions(instance, renderState) {
  try {
    renderState.dimensions = typeof instance.getBBox === "function" ? instance.getBBox() : instance.getBoundingClientRect();
  } catch (e2) {
    renderState.dimensions = {
      x: 0,
      y: 0,
      width: 0,
      height: 0
    };
  }
}
const layoutProps = ["x", "y", "width", "height", "cx", "cy", "r"];
const svgMotionConfig = {
  useVisualState: makeUseVisualState({
    scrapeMotionValuesFromProps,
    createRenderState: createSvgRenderState,
    onUpdate: ({ props, prevProps, current, renderState, latestValues }) => {
      if (!current)
        return;
      let hasTransform2 = !!props.drag;
      if (!hasTransform2) {
        for (const key in latestValues) {
          if (transformProps.has(key)) {
            hasTransform2 = true;
            break;
          }
        }
      }
      if (!hasTransform2)
        return;
      let needsMeasure = !prevProps;
      if (prevProps) {
        for (let i = 0; i < layoutProps.length; i++) {
          const key = layoutProps[i];
          if (props[key] !== prevProps[key]) {
            needsMeasure = true;
          }
        }
      }
      if (!needsMeasure)
        return;
      frame.read(() => {
        updateSVGDimensions(current, renderState);
        frame.render(() => {
          buildSVGAttrs(renderState, latestValues, isSVGTag(current.tagName), props.transformTemplate);
          renderSVG(current, renderState);
        });
      });
    }
  })
};
const htmlMotionConfig = {
  useVisualState: makeUseVisualState({
    scrapeMotionValuesFromProps: scrapeMotionValuesFromProps$1,
    createRenderState: createHtmlRenderState
  })
};
function copyRawValuesOnly(target, source, props) {
  for (const key in source) {
    if (!isMotionValue(source[key]) && !isForcedMotionValue(key, props)) {
      target[key] = source[key];
    }
  }
}
function useInitialMotionValues({ transformTemplate }, visualState) {
  return reactExports.useMemo(() => {
    const state2 = createHtmlRenderState();
    buildHTMLStyles(state2, visualState, transformTemplate);
    return Object.assign({}, state2.vars, state2.style);
  }, [visualState]);
}
function useStyle(props, visualState) {
  const styleProp = props.style || {};
  const style = {};
  copyRawValuesOnly(style, styleProp, props);
  Object.assign(style, useInitialMotionValues(props, visualState));
  return style;
}
function useHTMLProps(props, visualState) {
  const htmlProps = {};
  const style = useStyle(props, visualState);
  if (props.drag && props.dragListener !== false) {
    htmlProps.draggable = false;
    style.userSelect = style.WebkitUserSelect = style.WebkitTouchCallout = "none";
    style.touchAction = props.drag === true ? "none" : `pan-${props.drag === "x" ? "y" : "x"}`;
  }
  if (props.tabIndex === void 0 && (props.onTap || props.onTapStart || props.whileTap)) {
    htmlProps.tabIndex = 0;
  }
  htmlProps.style = style;
  return htmlProps;
}
function useSVGProps(props, visualState, _isStatic, Component) {
  const visualProps = reactExports.useMemo(() => {
    const state2 = createSvgRenderState();
    buildSVGAttrs(state2, visualState, isSVGTag(Component), props.transformTemplate);
    return {
      ...state2.attrs,
      style: { ...state2.style }
    };
  }, [visualState]);
  if (props.style) {
    const rawStyles = {};
    copyRawValuesOnly(rawStyles, props.style, props);
    visualProps.style = { ...rawStyles, ...visualProps.style };
  }
  return visualProps;
}
function createUseRender(forwardMotionProps = false) {
  const useRender = (Component, props, ref, { latestValues }, isStatic) => {
    const useVisualProps = isSVGComponent(Component) ? useSVGProps : useHTMLProps;
    const visualProps = useVisualProps(props, latestValues, isStatic, Component);
    const filteredProps = filterProps(props, typeof Component === "string", forwardMotionProps);
    const elementProps = Component !== reactExports.Fragment ? { ...filteredProps, ...visualProps, ref } : {};
    const { children } = props;
    const renderedChildren = reactExports.useMemo(() => isMotionValue(children) ? children.get() : children, [children]);
    return reactExports.createElement(Component, {
      ...elementProps,
      children: renderedChildren
    });
  };
  return useRender;
}
function createMotionComponentFactory(preloadedFeatures, createVisualElement) {
  return function createMotionComponent2(Component, { forwardMotionProps } = { forwardMotionProps: false }) {
    const baseConfig = isSVGComponent(Component) ? svgMotionConfig : htmlMotionConfig;
    const config = {
      ...baseConfig,
      preloadedFeatures,
      useRender: createUseRender(forwardMotionProps),
      createVisualElement,
      Component
    };
    return createRendererMotionComponent(config);
  };
}
function shallowCompare(next, prev) {
  if (!Array.isArray(prev))
    return false;
  const prevLength = prev.length;
  if (prevLength !== next.length)
    return false;
  for (let i = 0; i < prevLength; i++) {
    if (prev[i] !== next[i])
      return false;
  }
  return true;
}
function resolveVariant(visualElement, definition, custom) {
  const props = visualElement.getProps();
  return resolveVariantFromProps(props, definition, custom !== void 0 ? custom : props.custom, visualElement);
}
const supportsScrollTimeline = /* @__PURE__ */ memo(() => window.ScrollTimeline !== void 0);
class BaseGroupPlaybackControls {
  constructor(animations2) {
    this.stop = () => this.runAll("stop");
    this.animations = animations2.filter(Boolean);
  }
  get finished() {
    return Promise.all(this.animations.map((animation) => "finished" in animation ? animation.finished : animation));
  }
  /**
   * TODO: Filter out cancelled or stopped animations before returning
   */
  getAll(propName) {
    return this.animations[0][propName];
  }
  setAll(propName, newValue) {
    for (let i = 0; i < this.animations.length; i++) {
      this.animations[i][propName] = newValue;
    }
  }
  attachTimeline(timeline, fallback) {
    const subscriptions = this.animations.map((animation) => {
      if (supportsScrollTimeline() && animation.attachTimeline) {
        return animation.attachTimeline(timeline);
      } else if (typeof fallback === "function") {
        return fallback(animation);
      }
    });
    return () => {
      subscriptions.forEach((cancel, i) => {
        cancel && cancel();
        this.animations[i].stop();
      });
    };
  }
  get time() {
    return this.getAll("time");
  }
  set time(time2) {
    this.setAll("time", time2);
  }
  get speed() {
    return this.getAll("speed");
  }
  set speed(speed) {
    this.setAll("speed", speed);
  }
  get startTime() {
    return this.getAll("startTime");
  }
  get duration() {
    let max = 0;
    for (let i = 0; i < this.animations.length; i++) {
      max = Math.max(max, this.animations[i].duration);
    }
    return max;
  }
  runAll(methodName) {
    this.animations.forEach((controls) => controls[methodName]());
  }
  flatten() {
    this.runAll("flatten");
  }
  play() {
    this.runAll("play");
  }
  pause() {
    this.runAll("pause");
  }
  cancel() {
    this.runAll("cancel");
  }
  complete() {
    this.runAll("complete");
  }
}
class GroupPlaybackControls extends BaseGroupPlaybackControls {
  then(onResolve, onReject) {
    return Promise.all(this.animations).then(onResolve).catch(onReject);
  }
}
function getValueTransition(transition, key) {
  return transition ? transition[key] || transition["default"] || transition : void 0;
}
const maxGeneratorDuration = 2e4;
function calcGeneratorDuration(generator) {
  let duration = 0;
  const timeStep = 50;
  let state2 = generator.next(duration);
  while (!state2.done && duration < maxGeneratorDuration) {
    duration += timeStep;
    state2 = generator.next(duration);
  }
  return duration >= maxGeneratorDuration ? Infinity : duration;
}
function isGenerator(type) {
  return typeof type === "function";
}
function attachTimeline(animation, timeline) {
  animation.timeline = timeline;
  animation.onfinish = null;
}
const isBezierDefinition = (easing) => Array.isArray(easing) && typeof easing[0] === "number";
const supportsFlags = {
  linearEasing: void 0
};
function memoSupports(callback, supportsFlag) {
  const memoized = /* @__PURE__ */ memo(callback);
  return () => {
    var _a;
    return (_a = supportsFlags[supportsFlag]) !== null && _a !== void 0 ? _a : memoized();
  };
}
const supportsLinearEasing = /* @__PURE__ */ memoSupports(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch (e2) {
    return false;
  }
  return true;
}, "linearEasing");
const generateLinearEasing = (easing, duration, resolution = 10) => {
  let points = "";
  const numPoints = Math.max(Math.round(duration / resolution), 2);
  for (let i = 0; i < numPoints; i++) {
    points += easing(/* @__PURE__ */ progress(0, numPoints - 1, i)) + ", ";
  }
  return `linear(${points.substring(0, points.length - 2)})`;
};
function isWaapiSupportedEasing(easing) {
  return Boolean(typeof easing === "function" && supportsLinearEasing() || !easing || typeof easing === "string" && (easing in supportedWaapiEasing || supportsLinearEasing()) || isBezierDefinition(easing) || Array.isArray(easing) && easing.every(isWaapiSupportedEasing));
}
const cubicBezierAsString = ([a2, b2, c2, d2]) => `cubic-bezier(${a2}, ${b2}, ${c2}, ${d2})`;
const supportedWaapiEasing = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: /* @__PURE__ */ cubicBezierAsString([0, 0.65, 0.55, 1]),
  circOut: /* @__PURE__ */ cubicBezierAsString([0.55, 0, 1, 0.45]),
  backIn: /* @__PURE__ */ cubicBezierAsString([0.31, 0.01, 0.66, -0.59]),
  backOut: /* @__PURE__ */ cubicBezierAsString([0.33, 1.53, 0.69, 0.99])
};
function mapEasingToNativeEasing(easing, duration) {
  if (!easing) {
    return void 0;
  } else if (typeof easing === "function" && supportsLinearEasing()) {
    return generateLinearEasing(easing, duration);
  } else if (isBezierDefinition(easing)) {
    return cubicBezierAsString(easing);
  } else if (Array.isArray(easing)) {
    return easing.map((segmentEasing) => mapEasingToNativeEasing(segmentEasing, duration) || supportedWaapiEasing.easeOut);
  } else {
    return supportedWaapiEasing[easing];
  }
}
const isDragging = {
  x: false,
  y: false
};
function isDragActive() {
  return isDragging.x || isDragging.y;
}
function resolveElements(elementOrSelector, scope, selectorCache) {
  var _a;
  if (elementOrSelector instanceof Element) {
    return [elementOrSelector];
  } else if (typeof elementOrSelector === "string") {
    let root = document;
    const elements = (_a = void 0) !== null && _a !== void 0 ? _a : root.querySelectorAll(elementOrSelector);
    return elements ? Array.from(elements) : [];
  }
  return Array.from(elementOrSelector);
}
function setupGesture(elementOrSelector, options) {
  const elements = resolveElements(elementOrSelector);
  const gestureAbortController = new AbortController();
  const eventOptions = {
    passive: true,
    ...options,
    signal: gestureAbortController.signal
  };
  const cancel = () => gestureAbortController.abort();
  return [elements, eventOptions, cancel];
}
function filterEvents$1(callback) {
  return (event) => {
    if (event.pointerType === "touch" || isDragActive())
      return;
    callback(event);
  };
}
function hover(elementOrSelector, onHoverStart, options = {}) {
  const [elements, eventOptions, cancel] = setupGesture(elementOrSelector, options);
  const onPointerEnter = filterEvents$1((enterEvent) => {
    const { target } = enterEvent;
    const onHoverEnd = onHoverStart(enterEvent);
    if (typeof onHoverEnd !== "function" || !target)
      return;
    const onPointerLeave = filterEvents$1((leaveEvent) => {
      onHoverEnd(leaveEvent);
      target.removeEventListener("pointerleave", onPointerLeave);
    });
    target.addEventListener("pointerleave", onPointerLeave, eventOptions);
  });
  elements.forEach((element) => {
    element.addEventListener("pointerenter", onPointerEnter, eventOptions);
  });
  return cancel;
}
const isNodeOrChild = (parent, child) => {
  if (!child) {
    return false;
  } else if (parent === child) {
    return true;
  } else {
    return isNodeOrChild(parent, child.parentElement);
  }
};
const isPrimaryPointer = (event) => {
  if (event.pointerType === "mouse") {
    return typeof event.button !== "number" || event.button <= 0;
  } else {
    return event.isPrimary !== false;
  }
};
const focusableElements = /* @__PURE__ */ new Set([
  "BUTTON",
  "INPUT",
  "SELECT",
  "TEXTAREA",
  "A"
]);
function isElementKeyboardAccessible(element) {
  return focusableElements.has(element.tagName) || element.tabIndex !== -1;
}
const isPressing = /* @__PURE__ */ new WeakSet();
function filterEvents(callback) {
  return (event) => {
    if (event.key !== "Enter")
      return;
    callback(event);
  };
}
function firePointerEvent(target, type) {
  target.dispatchEvent(new PointerEvent("pointer" + type, { isPrimary: true, bubbles: true }));
}
const enableKeyboardPress = (focusEvent, eventOptions) => {
  const element = focusEvent.currentTarget;
  if (!element)
    return;
  const handleKeydown = filterEvents(() => {
    if (isPressing.has(element))
      return;
    firePointerEvent(element, "down");
    const handleKeyup = filterEvents(() => {
      firePointerEvent(element, "up");
    });
    const handleBlur = () => firePointerEvent(element, "cancel");
    element.addEventListener("keyup", handleKeyup, eventOptions);
    element.addEventListener("blur", handleBlur, eventOptions);
  });
  element.addEventListener("keydown", handleKeydown, eventOptions);
  element.addEventListener("blur", () => element.removeEventListener("keydown", handleKeydown), eventOptions);
};
function isValidPressEvent(event) {
  return isPrimaryPointer(event) && !isDragActive();
}
function press(elementOrSelector, onPressStart, options = {}) {
  const [elements, eventOptions, cancelEvents] = setupGesture(elementOrSelector, options);
  const startPress = (startEvent) => {
    const element = startEvent.currentTarget;
    if (!isValidPressEvent(startEvent) || isPressing.has(element))
      return;
    isPressing.add(element);
    const onPressEnd = onPressStart(startEvent);
    const onPointerEnd = (endEvent, success) => {
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("pointercancel", onPointerCancel);
      if (!isValidPressEvent(endEvent) || !isPressing.has(element)) {
        return;
      }
      isPressing.delete(element);
      if (typeof onPressEnd === "function") {
        onPressEnd(endEvent, { success });
      }
    };
    const onPointerUp = (upEvent) => {
      onPointerEnd(upEvent, options.useGlobalTarget || isNodeOrChild(element, upEvent.target));
    };
    const onPointerCancel = (cancelEvent) => {
      onPointerEnd(cancelEvent, false);
    };
    window.addEventListener("pointerup", onPointerUp, eventOptions);
    window.addEventListener("pointercancel", onPointerCancel, eventOptions);
  };
  elements.forEach((element) => {
    if (!isElementKeyboardAccessible(element) && element.getAttribute("tabindex") === null) {
      element.tabIndex = 0;
    }
    const target = options.useGlobalTarget ? window : element;
    target.addEventListener("pointerdown", startPress, eventOptions);
    element.addEventListener("focus", (event) => enableKeyboardPress(event, eventOptions), eventOptions);
  });
  return cancelEvents;
}
function setDragLock(axis) {
  if (axis === "x" || axis === "y") {
    if (isDragging[axis]) {
      return null;
    } else {
      isDragging[axis] = true;
      return () => {
        isDragging[axis] = false;
      };
    }
  } else {
    if (isDragging.x || isDragging.y) {
      return null;
    } else {
      isDragging.x = isDragging.y = true;
      return () => {
        isDragging.x = isDragging.y = false;
      };
    }
  }
}
const positionalKeys = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...transformPropOrder
]);
let now;
function clearTime() {
  now = void 0;
}
const time = {
  now: () => {
    if (now === void 0) {
      time.set(frameData.isProcessing || MotionGlobalConfig.useManualTiming ? frameData.timestamp : performance.now());
    }
    return now;
  },
  set: (newTime) => {
    now = newTime;
    queueMicrotask(clearTime);
  }
};
function addUniqueItem(arr, item) {
  if (arr.indexOf(item) === -1)
    arr.push(item);
}
function removeItem(arr, item) {
  const index = arr.indexOf(item);
  if (index > -1)
    arr.splice(index, 1);
}
class SubscriptionManager {
  constructor() {
    this.subscriptions = [];
  }
  add(handler) {
    addUniqueItem(this.subscriptions, handler);
    return () => removeItem(this.subscriptions, handler);
  }
  notify(a2, b2, c2) {
    const numSubscriptions = this.subscriptions.length;
    if (!numSubscriptions)
      return;
    if (numSubscriptions === 1) {
      this.subscriptions[0](a2, b2, c2);
    } else {
      for (let i = 0; i < numSubscriptions; i++) {
        const handler = this.subscriptions[i];
        handler && handler(a2, b2, c2);
      }
    }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
function velocityPerSecond(velocity, frameDuration) {
  return frameDuration ? velocity * (1e3 / frameDuration) : 0;
}
const MAX_VELOCITY_DELTA = 30;
const isFloat = (value) => {
  return !isNaN(parseFloat(value));
};
class MotionValue {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   *
   * @internal
   */
  constructor(init, options = {}) {
    this.version = "11.18.2";
    this.canTrackVelocity = null;
    this.events = {};
    this.updateAndNotify = (v2, render = true) => {
      const currentTime = time.now();
      if (this.updatedAt !== currentTime) {
        this.setPrevFrameValue();
      }
      this.prev = this.current;
      this.setCurrent(v2);
      if (this.current !== this.prev && this.events.change) {
        this.events.change.notify(this.current);
      }
      if (render && this.events.renderRequest) {
        this.events.renderRequest.notify(this.current);
      }
    };
    this.hasAnimated = false;
    this.setCurrent(init);
    this.owner = options.owner;
  }
  setCurrent(current) {
    this.current = current;
    this.updatedAt = time.now();
    if (this.canTrackVelocity === null && current !== void 0) {
      this.canTrackVelocity = isFloat(this.current);
    }
  }
  setPrevFrameValue(prevFrameValue = this.current) {
    this.prevFrameValue = prevFrameValue;
    this.prevUpdatedAt = this.updatedAt;
  }
  /**
   * Adds a function that will be notified when the `MotionValue` is updated.
   *
   * It returns a function that, when called, will cancel the subscription.
   *
   * When calling `onChange` inside a React component, it should be wrapped with the
   * `useEffect` hook. As it returns an unsubscribe function, this should be returned
   * from the `useEffect` function to ensure you don't add duplicate subscribers..
   *
   * ```jsx
   * export const MyComponent = () => {
   *   const x = useMotionValue(0)
   *   const y = useMotionValue(0)
   *   const opacity = useMotionValue(1)
   *
   *   useEffect(() => {
   *     function updateOpacity() {
   *       const maxXY = Math.max(x.get(), y.get())
   *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
   *       opacity.set(newOpacity)
   *     }
   *
   *     const unsubscribeX = x.on("change", updateOpacity)
   *     const unsubscribeY = y.on("change", updateOpacity)
   *
   *     return () => {
   *       unsubscribeX()
   *       unsubscribeY()
   *     }
   *   }, [])
   *
   *   return <motion.div style={{ x }} />
   * }
   * ```
   *
   * @param subscriber - A function that receives the latest value.
   * @returns A function that, when called, will cancel this subscription.
   *
   * @deprecated
   */
  onChange(subscription) {
    return this.on("change", subscription);
  }
  on(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = new SubscriptionManager();
    }
    const unsubscribe = this.events[eventName].add(callback);
    if (eventName === "change") {
      return () => {
        unsubscribe();
        frame.read(() => {
          if (!this.events.change.getSize()) {
            this.stop();
          }
        });
      };
    }
    return unsubscribe;
  }
  clearListeners() {
    for (const eventManagers in this.events) {
      this.events[eventManagers].clear();
    }
  }
  /**
   * Attaches a passive effect to the `MotionValue`.
   *
   * @internal
   */
  attach(passiveEffect, stopPassiveEffect) {
    this.passiveEffect = passiveEffect;
    this.stopPassiveEffect = stopPassiveEffect;
  }
  /**
   * Sets the state of the `MotionValue`.
   *
   * @remarks
   *
   * ```jsx
   * const x = useMotionValue(0)
   * x.set(10)
   * ```
   *
   * @param latest - Latest value to set.
   * @param render - Whether to notify render subscribers. Defaults to `true`
   *
   * @public
   */
  set(v2, render = true) {
    if (!render || !this.passiveEffect) {
      this.updateAndNotify(v2, render);
    } else {
      this.passiveEffect(v2, this.updateAndNotify);
    }
  }
  setWithVelocity(prev, current, delta) {
    this.set(current);
    this.prev = void 0;
    this.prevFrameValue = prev;
    this.prevUpdatedAt = this.updatedAt - delta;
  }
  /**
   * Set the state of the `MotionValue`, stopping any active animations,
   * effects, and resets velocity to `0`.
   */
  jump(v2, endAnimation = true) {
    this.updateAndNotify(v2);
    this.prev = v2;
    this.prevUpdatedAt = this.prevFrameValue = void 0;
    endAnimation && this.stop();
    if (this.stopPassiveEffect)
      this.stopPassiveEffect();
  }
  /**
   * Returns the latest state of `MotionValue`
   *
   * @returns - The latest state of `MotionValue`
   *
   * @public
   */
  get() {
    return this.current;
  }
  /**
   * @public
   */
  getPrevious() {
    return this.prev;
  }
  /**
   * Returns the latest velocity of `MotionValue`
   *
   * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
   *
   * @public
   */
  getVelocity() {
    const currentTime = time.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || currentTime - this.updatedAt > MAX_VELOCITY_DELTA) {
      return 0;
    }
    const delta = Math.min(this.updatedAt - this.prevUpdatedAt, MAX_VELOCITY_DELTA);
    return velocityPerSecond(parseFloat(this.current) - parseFloat(this.prevFrameValue), delta);
  }
  /**
   * Registers a new animation to control this `MotionValue`. Only one
   * animation can drive a `MotionValue` at one time.
   *
   * ```jsx
   * value.start()
   * ```
   *
   * @param animation - A function that starts the provided animation
   *
   * @internal
   */
  start(startAnimation) {
    this.stop();
    return new Promise((resolve) => {
      this.hasAnimated = true;
      this.animation = startAnimation(resolve);
      if (this.events.animationStart) {
        this.events.animationStart.notify();
      }
    }).then(() => {
      if (this.events.animationComplete) {
        this.events.animationComplete.notify();
      }
      this.clearAnimation();
    });
  }
  /**
   * Stop the currently active animation.
   *
   * @public
   */
  stop() {
    if (this.animation) {
      this.animation.stop();
      if (this.events.animationCancel) {
        this.events.animationCancel.notify();
      }
    }
    this.clearAnimation();
  }
  /**
   * Returns `true` if this value is currently animating.
   *
   * @public
   */
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  /**
   * Destroy and clean up subscribers to this `MotionValue`.
   *
   * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
   * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
   * created a `MotionValue` via the `motionValue` function.
   *
   * @public
   */
  destroy() {
    this.clearListeners();
    this.stop();
    if (this.stopPassiveEffect) {
      this.stopPassiveEffect();
    }
  }
}
function motionValue(init, options) {
  return new MotionValue(init, options);
}
function setMotionValue(visualElement, key, value) {
  if (visualElement.hasValue(key)) {
    visualElement.getValue(key).set(value);
  } else {
    visualElement.addValue(key, motionValue(value));
  }
}
function setTarget(visualElement, definition) {
  const resolved = resolveVariant(visualElement, definition);
  let { transitionEnd = {}, transition = {}, ...target } = resolved || {};
  target = { ...target, ...transitionEnd };
  for (const key in target) {
    const value = resolveFinalValueInKeyframes(target[key]);
    setMotionValue(visualElement, key, value);
  }
}
function isWillChangeMotionValue(value) {
  return Boolean(isMotionValue(value) && value.add);
}
function addValueToWillChange(visualElement, key) {
  const willChange = visualElement.getValue("willChange");
  if (isWillChangeMotionValue(willChange)) {
    return willChange.add(key);
  }
}
function getOptimisedAppearId(visualElement) {
  return visualElement.props[optimizedAppearDataAttribute];
}
const calcBezier = (t, a1, a2) => (((1 - 3 * a2 + 3 * a1) * t + (3 * a2 - 6 * a1)) * t + 3 * a1) * t;
const subdivisionPrecision = 1e-7;
const subdivisionMaxIterations = 12;
function binarySubdivide(x2, lowerBound, upperBound, mX1, mX2) {
  let currentX;
  let currentT;
  let i = 0;
  do {
    currentT = lowerBound + (upperBound - lowerBound) / 2;
    currentX = calcBezier(currentT, mX1, mX2) - x2;
    if (currentX > 0) {
      upperBound = currentT;
    } else {
      lowerBound = currentT;
    }
  } while (Math.abs(currentX) > subdivisionPrecision && ++i < subdivisionMaxIterations);
  return currentT;
}
function cubicBezier(mX1, mY1, mX2, mY2) {
  if (mX1 === mY1 && mX2 === mY2)
    return noop;
  const getTForX = (aX) => binarySubdivide(aX, 0, 1, mX1, mX2);
  return (t) => t === 0 || t === 1 ? t : calcBezier(getTForX(t), mY1, mY2);
}
const mirrorEasing = (easing) => (p2) => p2 <= 0.5 ? easing(2 * p2) / 2 : (2 - easing(2 * (1 - p2))) / 2;
const reverseEasing = (easing) => (p2) => 1 - easing(1 - p2);
const backOut = /* @__PURE__ */ cubicBezier(0.33, 1.53, 0.69, 0.99);
const backIn = /* @__PURE__ */ reverseEasing(backOut);
const backInOut = /* @__PURE__ */ mirrorEasing(backIn);
const anticipate = (p2) => (p2 *= 2) < 1 ? 0.5 * backIn(p2) : 0.5 * (2 - Math.pow(2, -10 * (p2 - 1)));
const circIn = (p2) => 1 - Math.sin(Math.acos(p2));
const circOut = reverseEasing(circIn);
const circInOut = mirrorEasing(circIn);
const isZeroValueString = (v2) => /^0[^.\s]+$/u.test(v2);
function isNone(value) {
  if (typeof value === "number") {
    return value === 0;
  } else if (value !== null) {
    return value === "none" || value === "0" || isZeroValueString(value);
  } else {
    return true;
  }
}
const sanitize = (v2) => Math.round(v2 * 1e5) / 1e5;
const floatRegex = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function isNullish(v2) {
  return v2 == null;
}
const singleColorRegex = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;
const isColorString = (type, testProp) => (v2) => {
  return Boolean(typeof v2 === "string" && singleColorRegex.test(v2) && v2.startsWith(type) || testProp && !isNullish(v2) && Object.prototype.hasOwnProperty.call(v2, testProp));
};
const splitColor = (aName, bName, cName) => (v2) => {
  if (typeof v2 !== "string")
    return v2;
  const [a2, b2, c2, alpha2] = v2.match(floatRegex);
  return {
    [aName]: parseFloat(a2),
    [bName]: parseFloat(b2),
    [cName]: parseFloat(c2),
    alpha: alpha2 !== void 0 ? parseFloat(alpha2) : 1
  };
};
const clampRgbUnit = (v2) => clamp(0, 255, v2);
const rgbUnit = {
  ...number,
  transform: (v2) => Math.round(clampRgbUnit(v2))
};
const rgba = {
  test: /* @__PURE__ */ isColorString("rgb", "red"),
  parse: /* @__PURE__ */ splitColor("red", "green", "blue"),
  transform: ({ red, green, blue, alpha: alpha$1 = 1 }) => "rgba(" + rgbUnit.transform(red) + ", " + rgbUnit.transform(green) + ", " + rgbUnit.transform(blue) + ", " + sanitize(alpha.transform(alpha$1)) + ")"
};
function parseHex(v2) {
  let r2 = "";
  let g2 = "";
  let b2 = "";
  let a2 = "";
  if (v2.length > 5) {
    r2 = v2.substring(1, 3);
    g2 = v2.substring(3, 5);
    b2 = v2.substring(5, 7);
    a2 = v2.substring(7, 9);
  } else {
    r2 = v2.substring(1, 2);
    g2 = v2.substring(2, 3);
    b2 = v2.substring(3, 4);
    a2 = v2.substring(4, 5);
    r2 += r2;
    g2 += g2;
    b2 += b2;
    a2 += a2;
  }
  return {
    red: parseInt(r2, 16),
    green: parseInt(g2, 16),
    blue: parseInt(b2, 16),
    alpha: a2 ? parseInt(a2, 16) / 255 : 1
  };
}
const hex = {
  test: /* @__PURE__ */ isColorString("#"),
  parse: parseHex,
  transform: rgba.transform
};
const hsla = {
  test: /* @__PURE__ */ isColorString("hsl", "hue"),
  parse: /* @__PURE__ */ splitColor("hue", "saturation", "lightness"),
  transform: ({ hue, saturation, lightness, alpha: alpha$1 = 1 }) => {
    return "hsla(" + Math.round(hue) + ", " + percent.transform(sanitize(saturation)) + ", " + percent.transform(sanitize(lightness)) + ", " + sanitize(alpha.transform(alpha$1)) + ")";
  }
};
const color = {
  test: (v2) => rgba.test(v2) || hex.test(v2) || hsla.test(v2),
  parse: (v2) => {
    if (rgba.test(v2)) {
      return rgba.parse(v2);
    } else if (hsla.test(v2)) {
      return hsla.parse(v2);
    } else {
      return hex.parse(v2);
    }
  },
  transform: (v2) => {
    return typeof v2 === "string" ? v2 : v2.hasOwnProperty("red") ? rgba.transform(v2) : hsla.transform(v2);
  }
};
const colorRegex = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function test(v2) {
  var _a, _b;
  return isNaN(v2) && typeof v2 === "string" && (((_a = v2.match(floatRegex)) === null || _a === void 0 ? void 0 : _a.length) || 0) + (((_b = v2.match(colorRegex)) === null || _b === void 0 ? void 0 : _b.length) || 0) > 0;
}
const NUMBER_TOKEN = "number";
const COLOR_TOKEN = "color";
const VAR_TOKEN = "var";
const VAR_FUNCTION_TOKEN = "var(";
const SPLIT_TOKEN = "${}";
const complexRegex = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function analyseComplexValue(value) {
  const originalValue = value.toString();
  const values = [];
  const indexes = {
    color: [],
    number: [],
    var: []
  };
  const types = [];
  let i = 0;
  const tokenised = originalValue.replace(complexRegex, (parsedValue) => {
    if (color.test(parsedValue)) {
      indexes.color.push(i);
      types.push(COLOR_TOKEN);
      values.push(color.parse(parsedValue));
    } else if (parsedValue.startsWith(VAR_FUNCTION_TOKEN)) {
      indexes.var.push(i);
      types.push(VAR_TOKEN);
      values.push(parsedValue);
    } else {
      indexes.number.push(i);
      types.push(NUMBER_TOKEN);
      values.push(parseFloat(parsedValue));
    }
    ++i;
    return SPLIT_TOKEN;
  });
  const split = tokenised.split(SPLIT_TOKEN);
  return { values, split, indexes, types };
}
function parseComplexValue(v2) {
  return analyseComplexValue(v2).values;
}
function createTransformer(source) {
  const { split, types } = analyseComplexValue(source);
  const numSections = split.length;
  return (v2) => {
    let output = "";
    for (let i = 0; i < numSections; i++) {
      output += split[i];
      if (v2[i] !== void 0) {
        const type = types[i];
        if (type === NUMBER_TOKEN) {
          output += sanitize(v2[i]);
        } else if (type === COLOR_TOKEN) {
          output += color.transform(v2[i]);
        } else {
          output += v2[i];
        }
      }
    }
    return output;
  };
}
const convertNumbersToZero = (v2) => typeof v2 === "number" ? 0 : v2;
function getAnimatableNone$1(v2) {
  const parsed = parseComplexValue(v2);
  const transformer = createTransformer(v2);
  return transformer(parsed.map(convertNumbersToZero));
}
const complex = {
  test,
  parse: parseComplexValue,
  createTransformer,
  getAnimatableNone: getAnimatableNone$1
};
const maxDefaults = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function applyDefaultFilter(v2) {
  const [name, value] = v2.slice(0, -1).split("(");
  if (name === "drop-shadow")
    return v2;
  const [number2] = value.match(floatRegex) || [];
  if (!number2)
    return v2;
  const unit = value.replace(number2, "");
  let defaultValue = maxDefaults.has(name) ? 1 : 0;
  if (number2 !== value)
    defaultValue *= 100;
  return name + "(" + defaultValue + unit + ")";
}
const functionRegex = /\b([a-z-]*)\(.*?\)/gu;
const filter = {
  ...complex,
  getAnimatableNone: (v2) => {
    const functions = v2.match(functionRegex);
    return functions ? functions.map(applyDefaultFilter).join(" ") : v2;
  }
};
const defaultValueTypes = {
  ...numberValueTypes,
  // Color props
  color,
  backgroundColor: color,
  outlineColor: color,
  fill: color,
  stroke: color,
  // Border props
  borderColor: color,
  borderTopColor: color,
  borderRightColor: color,
  borderBottomColor: color,
  borderLeftColor: color,
  filter,
  WebkitFilter: filter
};
const getDefaultValueType = (key) => defaultValueTypes[key];
function getAnimatableNone(key, value) {
  let defaultValueType = getDefaultValueType(key);
  if (defaultValueType !== filter)
    defaultValueType = complex;
  return defaultValueType.getAnimatableNone ? defaultValueType.getAnimatableNone(value) : void 0;
}
const invalidTemplates = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function makeNoneKeyframesAnimatable(unresolvedKeyframes, noneKeyframeIndexes, name) {
  let i = 0;
  let animatableTemplate = void 0;
  while (i < unresolvedKeyframes.length && !animatableTemplate) {
    const keyframe = unresolvedKeyframes[i];
    if (typeof keyframe === "string" && !invalidTemplates.has(keyframe) && analyseComplexValue(keyframe).values.length) {
      animatableTemplate = unresolvedKeyframes[i];
    }
    i++;
  }
  if (animatableTemplate && name) {
    for (const noneIndex of noneKeyframeIndexes) {
      unresolvedKeyframes[noneIndex] = getAnimatableNone(name, animatableTemplate);
    }
  }
}
const isNumOrPxType = (v2) => v2 === number || v2 === px;
const getPosFromMatrix = (matrix, pos) => parseFloat(matrix.split(", ")[pos]);
const getTranslateFromMatrix = (pos2, pos3) => (_bbox, { transform }) => {
  if (transform === "none" || !transform)
    return 0;
  const matrix3d = transform.match(/^matrix3d\((.+)\)$/u);
  if (matrix3d) {
    return getPosFromMatrix(matrix3d[1], pos3);
  } else {
    const matrix = transform.match(/^matrix\((.+)\)$/u);
    if (matrix) {
      return getPosFromMatrix(matrix[1], pos2);
    } else {
      return 0;
    }
  }
};
const transformKeys = /* @__PURE__ */ new Set(["x", "y", "z"]);
const nonTranslationalTransformKeys = transformPropOrder.filter((key) => !transformKeys.has(key));
function removeNonTranslationalTransform(visualElement) {
  const removedTransforms = [];
  nonTranslationalTransformKeys.forEach((key) => {
    const value = visualElement.getValue(key);
    if (value !== void 0) {
      removedTransforms.push([key, value.get()]);
      value.set(key.startsWith("scale") ? 1 : 0);
    }
  });
  return removedTransforms;
}
const positionalValues = {
  // Dimensions
  width: ({ x: x2 }, { paddingLeft = "0", paddingRight = "0" }) => x2.max - x2.min - parseFloat(paddingLeft) - parseFloat(paddingRight),
  height: ({ y: y2 }, { paddingTop = "0", paddingBottom = "0" }) => y2.max - y2.min - parseFloat(paddingTop) - parseFloat(paddingBottom),
  top: (_bbox, { top }) => parseFloat(top),
  left: (_bbox, { left }) => parseFloat(left),
  bottom: ({ y: y2 }, { top }) => parseFloat(top) + (y2.max - y2.min),
  right: ({ x: x2 }, { left }) => parseFloat(left) + (x2.max - x2.min),
  // Transform
  x: getTranslateFromMatrix(4, 13),
  y: getTranslateFromMatrix(5, 14)
};
positionalValues.translateX = positionalValues.x;
positionalValues.translateY = positionalValues.y;
const toResolve = /* @__PURE__ */ new Set();
let isScheduled = false;
let anyNeedsMeasurement = false;
function measureAllKeyframes() {
  if (anyNeedsMeasurement) {
    const resolversToMeasure = Array.from(toResolve).filter((resolver) => resolver.needsMeasurement);
    const elementsToMeasure = new Set(resolversToMeasure.map((resolver) => resolver.element));
    const transformsToRestore = /* @__PURE__ */ new Map();
    elementsToMeasure.forEach((element) => {
      const removedTransforms = removeNonTranslationalTransform(element);
      if (!removedTransforms.length)
        return;
      transformsToRestore.set(element, removedTransforms);
      element.render();
    });
    resolversToMeasure.forEach((resolver) => resolver.measureInitialState());
    elementsToMeasure.forEach((element) => {
      element.render();
      const restore = transformsToRestore.get(element);
      if (restore) {
        restore.forEach(([key, value]) => {
          var _a;
          (_a = element.getValue(key)) === null || _a === void 0 ? void 0 : _a.set(value);
        });
      }
    });
    resolversToMeasure.forEach((resolver) => resolver.measureEndState());
    resolversToMeasure.forEach((resolver) => {
      if (resolver.suspendedScrollY !== void 0) {
        window.scrollTo(0, resolver.suspendedScrollY);
      }
    });
  }
  anyNeedsMeasurement = false;
  isScheduled = false;
  toResolve.forEach((resolver) => resolver.complete());
  toResolve.clear();
}
function readAllKeyframes() {
  toResolve.forEach((resolver) => {
    resolver.readKeyframes();
    if (resolver.needsMeasurement) {
      anyNeedsMeasurement = true;
    }
  });
}
function flushKeyframeResolvers() {
  readAllKeyframes();
  measureAllKeyframes();
}
class KeyframeResolver {
  constructor(unresolvedKeyframes, onComplete, name, motionValue2, element, isAsync = false) {
    this.isComplete = false;
    this.isAsync = false;
    this.needsMeasurement = false;
    this.isScheduled = false;
    this.unresolvedKeyframes = [...unresolvedKeyframes];
    this.onComplete = onComplete;
    this.name = name;
    this.motionValue = motionValue2;
    this.element = element;
    this.isAsync = isAsync;
  }
  scheduleResolve() {
    this.isScheduled = true;
    if (this.isAsync) {
      toResolve.add(this);
      if (!isScheduled) {
        isScheduled = true;
        frame.read(readAllKeyframes);
        frame.resolveKeyframes(measureAllKeyframes);
      }
    } else {
      this.readKeyframes();
      this.complete();
    }
  }
  readKeyframes() {
    const { unresolvedKeyframes, name, element, motionValue: motionValue2 } = this;
    for (let i = 0; i < unresolvedKeyframes.length; i++) {
      if (unresolvedKeyframes[i] === null) {
        if (i === 0) {
          const currentValue = motionValue2 === null || motionValue2 === void 0 ? void 0 : motionValue2.get();
          const finalKeyframe = unresolvedKeyframes[unresolvedKeyframes.length - 1];
          if (currentValue !== void 0) {
            unresolvedKeyframes[0] = currentValue;
          } else if (element && name) {
            const valueAsRead = element.readValue(name, finalKeyframe);
            if (valueAsRead !== void 0 && valueAsRead !== null) {
              unresolvedKeyframes[0] = valueAsRead;
            }
          }
          if (unresolvedKeyframes[0] === void 0) {
            unresolvedKeyframes[0] = finalKeyframe;
          }
          if (motionValue2 && currentValue === void 0) {
            motionValue2.set(unresolvedKeyframes[0]);
          }
        } else {
          unresolvedKeyframes[i] = unresolvedKeyframes[i - 1];
        }
      }
    }
  }
  setFinalKeyframe() {
  }
  measureInitialState() {
  }
  renderEndStyles() {
  }
  measureEndState() {
  }
  complete() {
    this.isComplete = true;
    this.onComplete(this.unresolvedKeyframes, this.finalKeyframe);
    toResolve.delete(this);
  }
  cancel() {
    if (!this.isComplete) {
      this.isScheduled = false;
      toResolve.delete(this);
    }
  }
  resume() {
    if (!this.isComplete)
      this.scheduleResolve();
  }
}
const isNumericalString = (v2) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(v2);
const splitCSSVariableRegex = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function parseCSSVariable(current) {
  const match = splitCSSVariableRegex.exec(current);
  if (!match)
    return [,];
  const [, token1, token2, fallback] = match;
  return [`--${token1 !== null && token1 !== void 0 ? token1 : token2}`, fallback];
}
function getVariableValue(current, element, depth = 1) {
  const [token, fallback] = parseCSSVariable(current);
  if (!token)
    return;
  const resolved = window.getComputedStyle(element).getPropertyValue(token);
  if (resolved) {
    const trimmed = resolved.trim();
    return isNumericalString(trimmed) ? parseFloat(trimmed) : trimmed;
  }
  return isCSSVariableToken(fallback) ? getVariableValue(fallback, element, depth + 1) : fallback;
}
const testValueType = (v2) => (type) => type.test(v2);
const auto = {
  test: (v2) => v2 === "auto",
  parse: (v2) => v2
};
const dimensionValueTypes = [number, px, percent, degrees, vw, vh, auto];
const findDimensionValueType = (v2) => dimensionValueTypes.find(testValueType(v2));
class DOMKeyframesResolver extends KeyframeResolver {
  constructor(unresolvedKeyframes, onComplete, name, motionValue2, element) {
    super(unresolvedKeyframes, onComplete, name, motionValue2, element, true);
  }
  readKeyframes() {
    const { unresolvedKeyframes, element, name } = this;
    if (!element || !element.current)
      return;
    super.readKeyframes();
    for (let i = 0; i < unresolvedKeyframes.length; i++) {
      let keyframe = unresolvedKeyframes[i];
      if (typeof keyframe === "string") {
        keyframe = keyframe.trim();
        if (isCSSVariableToken(keyframe)) {
          const resolved = getVariableValue(keyframe, element.current);
          if (resolved !== void 0) {
            unresolvedKeyframes[i] = resolved;
          }
          if (i === unresolvedKeyframes.length - 1) {
            this.finalKeyframe = keyframe;
          }
        }
      }
    }
    this.resolveNoneKeyframes();
    if (!positionalKeys.has(name) || unresolvedKeyframes.length !== 2) {
      return;
    }
    const [origin, target] = unresolvedKeyframes;
    const originType = findDimensionValueType(origin);
    const targetType = findDimensionValueType(target);
    if (originType === targetType)
      return;
    if (isNumOrPxType(originType) && isNumOrPxType(targetType)) {
      for (let i = 0; i < unresolvedKeyframes.length; i++) {
        const value = unresolvedKeyframes[i];
        if (typeof value === "string") {
          unresolvedKeyframes[i] = parseFloat(value);
        }
      }
    } else {
      this.needsMeasurement = true;
    }
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes, name } = this;
    const noneKeyframeIndexes = [];
    for (let i = 0; i < unresolvedKeyframes.length; i++) {
      if (isNone(unresolvedKeyframes[i])) {
        noneKeyframeIndexes.push(i);
      }
    }
    if (noneKeyframeIndexes.length) {
      makeNoneKeyframesAnimatable(unresolvedKeyframes, noneKeyframeIndexes, name);
    }
  }
  measureInitialState() {
    const { element, unresolvedKeyframes, name } = this;
    if (!element || !element.current)
      return;
    if (name === "height") {
      this.suspendedScrollY = window.pageYOffset;
    }
    this.measuredOrigin = positionalValues[name](element.measureViewportBox(), window.getComputedStyle(element.current));
    unresolvedKeyframes[0] = this.measuredOrigin;
    const measureKeyframe = unresolvedKeyframes[unresolvedKeyframes.length - 1];
    if (measureKeyframe !== void 0) {
      element.getValue(name, measureKeyframe).jump(measureKeyframe, false);
    }
  }
  measureEndState() {
    var _a;
    const { element, name, unresolvedKeyframes } = this;
    if (!element || !element.current)
      return;
    const value = element.getValue(name);
    value && value.jump(this.measuredOrigin, false);
    const finalKeyframeIndex = unresolvedKeyframes.length - 1;
    const finalKeyframe = unresolvedKeyframes[finalKeyframeIndex];
    unresolvedKeyframes[finalKeyframeIndex] = positionalValues[name](element.measureViewportBox(), window.getComputedStyle(element.current));
    if (finalKeyframe !== null && this.finalKeyframe === void 0) {
      this.finalKeyframe = finalKeyframe;
    }
    if ((_a = this.removedTransforms) === null || _a === void 0 ? void 0 : _a.length) {
      this.removedTransforms.forEach(([unsetTransformName, unsetTransformValue]) => {
        element.getValue(unsetTransformName).set(unsetTransformValue);
      });
    }
    this.resolveNoneKeyframes();
  }
}
const isAnimatable = (value, name) => {
  if (name === "zIndex")
    return false;
  if (typeof value === "number" || Array.isArray(value))
    return true;
  if (typeof value === "string" && // It's animatable if we have a string
  (complex.test(value) || value === "0") && // And it contains numbers and/or colors
  !value.startsWith("url(")) {
    return true;
  }
  return false;
};
function hasKeyframesChanged(keyframes2) {
  const current = keyframes2[0];
  if (keyframes2.length === 1)
    return true;
  for (let i = 0; i < keyframes2.length; i++) {
    if (keyframes2[i] !== current)
      return true;
  }
}
function canAnimate(keyframes2, name, type, velocity) {
  const originKeyframe = keyframes2[0];
  if (originKeyframe === null)
    return false;
  if (name === "display" || name === "visibility")
    return true;
  const targetKeyframe = keyframes2[keyframes2.length - 1];
  const isOriginAnimatable = isAnimatable(originKeyframe, name);
  const isTargetAnimatable = isAnimatable(targetKeyframe, name);
  if (!isOriginAnimatable || !isTargetAnimatable) {
    return false;
  }
  return hasKeyframesChanged(keyframes2) || (type === "spring" || isGenerator(type)) && velocity;
}
const isNotNull = (value) => value !== null;
function getFinalKeyframe(keyframes2, { repeat, repeatType = "loop" }, finalKeyframe) {
  const resolvedKeyframes = keyframes2.filter(isNotNull);
  const index = repeat && repeatType !== "loop" && repeat % 2 === 1 ? 0 : resolvedKeyframes.length - 1;
  return !index || finalKeyframe === void 0 ? resolvedKeyframes[index] : finalKeyframe;
}
const MAX_RESOLVE_DELAY = 40;
class BaseAnimation {
  constructor({ autoplay = true, delay: delay2 = 0, type = "keyframes", repeat = 0, repeatDelay = 0, repeatType = "loop", ...options }) {
    this.isStopped = false;
    this.hasAttemptedResolve = false;
    this.createdAt = time.now();
    this.options = {
      autoplay,
      delay: delay2,
      type,
      repeat,
      repeatDelay,
      repeatType,
      ...options
    };
    this.updateFinishedPromise();
  }
  /**
   * This method uses the createdAt and resolvedAt to calculate the
   * animation startTime. *Ideally*, we would use the createdAt time as t=0
   * as the following frame would then be the first frame of the animation in
   * progress, which would feel snappier.
   *
   * However, if there's a delay (main thread work) between the creation of
   * the animation and the first commited frame, we prefer to use resolvedAt
   * to avoid a sudden jump into the animation.
   */
  calcStartTime() {
    if (!this.resolvedAt)
      return this.createdAt;
    return this.resolvedAt - this.createdAt > MAX_RESOLVE_DELAY ? this.resolvedAt : this.createdAt;
  }
  /**
   * A getter for resolved data. If keyframes are not yet resolved, accessing
   * this.resolved will synchronously flush all pending keyframe resolvers.
   * This is a deoptimisation, but at its worst still batches read/writes.
   */
  get resolved() {
    if (!this._resolved && !this.hasAttemptedResolve) {
      flushKeyframeResolvers();
    }
    return this._resolved;
  }
  /**
   * A method to be called when the keyframes resolver completes. This method
   * will check if its possible to run the animation and, if not, skip it.
   * Otherwise, it will call initPlayback on the implementing class.
   */
  onKeyframesResolved(keyframes2, finalKeyframe) {
    this.resolvedAt = time.now();
    this.hasAttemptedResolve = true;
    const { name, type, velocity, delay: delay2, onComplete, onUpdate, isGenerator: isGenerator2 } = this.options;
    if (!isGenerator2 && !canAnimate(keyframes2, name, type, velocity)) {
      if (!delay2) {
        onUpdate && onUpdate(getFinalKeyframe(keyframes2, this.options, finalKeyframe));
        onComplete && onComplete();
        this.resolveFinishedPromise();
        return;
      } else {
        this.options.duration = 0;
      }
    }
    const resolvedAnimation = this.initPlayback(keyframes2, finalKeyframe);
    if (resolvedAnimation === false)
      return;
    this._resolved = {
      keyframes: keyframes2,
      finalKeyframe,
      ...resolvedAnimation
    };
    this.onPostResolved();
  }
  onPostResolved() {
  }
  /**
   * Allows the returned animation to be awaited or promise-chained. Currently
   * resolves when the animation finishes at all but in a future update could/should
   * reject if its cancels.
   */
  then(resolve, reject) {
    return this.currentFinishedPromise.then(resolve, reject);
  }
  flatten() {
    this.options.type = "keyframes";
    this.options.ease = "linear";
  }
  updateFinishedPromise() {
    this.currentFinishedPromise = new Promise((resolve) => {
      this.resolveFinishedPromise = resolve;
    });
  }
}
const mixNumber$1 = (from, to, progress2) => {
  return from + (to - from) * progress2;
};
function hueToRgb(p2, q2, t) {
  if (t < 0)
    t += 1;
  if (t > 1)
    t -= 1;
  if (t < 1 / 6)
    return p2 + (q2 - p2) * 6 * t;
  if (t < 1 / 2)
    return q2;
  if (t < 2 / 3)
    return p2 + (q2 - p2) * (2 / 3 - t) * 6;
  return p2;
}
function hslaToRgba({ hue, saturation, lightness, alpha: alpha2 }) {
  hue /= 360;
  saturation /= 100;
  lightness /= 100;
  let red = 0;
  let green = 0;
  let blue = 0;
  if (!saturation) {
    red = green = blue = lightness;
  } else {
    const q2 = lightness < 0.5 ? lightness * (1 + saturation) : lightness + saturation - lightness * saturation;
    const p2 = 2 * lightness - q2;
    red = hueToRgb(p2, q2, hue + 1 / 3);
    green = hueToRgb(p2, q2, hue);
    blue = hueToRgb(p2, q2, hue - 1 / 3);
  }
  return {
    red: Math.round(red * 255),
    green: Math.round(green * 255),
    blue: Math.round(blue * 255),
    alpha: alpha2
  };
}
function mixImmediate(a2, b2) {
  return (p2) => p2 > 0 ? b2 : a2;
}
const mixLinearColor = (from, to, v2) => {
  const fromExpo = from * from;
  const expo = v2 * (to * to - fromExpo) + fromExpo;
  return expo < 0 ? 0 : Math.sqrt(expo);
};
const colorTypes = [hex, rgba, hsla];
const getColorType = (v2) => colorTypes.find((type) => type.test(v2));
function asRGBA(color2) {
  const type = getColorType(color2);
  if (!Boolean(type))
    return false;
  let model = type.parse(color2);
  if (type === hsla) {
    model = hslaToRgba(model);
  }
  return model;
}
const mixColor = (from, to) => {
  const fromRGBA = asRGBA(from);
  const toRGBA = asRGBA(to);
  if (!fromRGBA || !toRGBA) {
    return mixImmediate(from, to);
  }
  const blended = { ...fromRGBA };
  return (v2) => {
    blended.red = mixLinearColor(fromRGBA.red, toRGBA.red, v2);
    blended.green = mixLinearColor(fromRGBA.green, toRGBA.green, v2);
    blended.blue = mixLinearColor(fromRGBA.blue, toRGBA.blue, v2);
    blended.alpha = mixNumber$1(fromRGBA.alpha, toRGBA.alpha, v2);
    return rgba.transform(blended);
  };
};
const combineFunctions = (a2, b2) => (v2) => b2(a2(v2));
const pipe = (...transformers) => transformers.reduce(combineFunctions);
const invisibleValues = /* @__PURE__ */ new Set(["none", "hidden"]);
function mixVisibility(origin, target) {
  if (invisibleValues.has(origin)) {
    return (p2) => p2 <= 0 ? origin : target;
  } else {
    return (p2) => p2 >= 1 ? target : origin;
  }
}
function mixNumber(a2, b2) {
  return (p2) => mixNumber$1(a2, b2, p2);
}
function getMixer(a2) {
  if (typeof a2 === "number") {
    return mixNumber;
  } else if (typeof a2 === "string") {
    return isCSSVariableToken(a2) ? mixImmediate : color.test(a2) ? mixColor : mixComplex;
  } else if (Array.isArray(a2)) {
    return mixArray;
  } else if (typeof a2 === "object") {
    return color.test(a2) ? mixColor : mixObject;
  }
  return mixImmediate;
}
function mixArray(a2, b2) {
  const output = [...a2];
  const numValues = output.length;
  const blendValue = a2.map((v2, i) => getMixer(v2)(v2, b2[i]));
  return (p2) => {
    for (let i = 0; i < numValues; i++) {
      output[i] = blendValue[i](p2);
    }
    return output;
  };
}
function mixObject(a2, b2) {
  const output = { ...a2, ...b2 };
  const blendValue = {};
  for (const key in output) {
    if (a2[key] !== void 0 && b2[key] !== void 0) {
      blendValue[key] = getMixer(a2[key])(a2[key], b2[key]);
    }
  }
  return (v2) => {
    for (const key in blendValue) {
      output[key] = blendValue[key](v2);
    }
    return output;
  };
}
function matchOrder(origin, target) {
  var _a;
  const orderedOrigin = [];
  const pointers = { color: 0, var: 0, number: 0 };
  for (let i = 0; i < target.values.length; i++) {
    const type = target.types[i];
    const originIndex = origin.indexes[type][pointers[type]];
    const originValue = (_a = origin.values[originIndex]) !== null && _a !== void 0 ? _a : 0;
    orderedOrigin[i] = originValue;
    pointers[type]++;
  }
  return orderedOrigin;
}
const mixComplex = (origin, target) => {
  const template = complex.createTransformer(target);
  const originStats = analyseComplexValue(origin);
  const targetStats = analyseComplexValue(target);
  const canInterpolate = originStats.indexes.var.length === targetStats.indexes.var.length && originStats.indexes.color.length === targetStats.indexes.color.length && originStats.indexes.number.length >= targetStats.indexes.number.length;
  if (canInterpolate) {
    if (invisibleValues.has(origin) && !targetStats.values.length || invisibleValues.has(target) && !originStats.values.length) {
      return mixVisibility(origin, target);
    }
    return pipe(mixArray(matchOrder(originStats, targetStats), targetStats.values), template);
  } else {
    return mixImmediate(origin, target);
  }
};
function mix(from, to, p2) {
  if (typeof from === "number" && typeof to === "number" && typeof p2 === "number") {
    return mixNumber$1(from, to, p2);
  }
  const mixer = getMixer(from);
  return mixer(from, to);
}
const velocitySampleDuration = 5;
function calcGeneratorVelocity(resolveValue, t, current) {
  const prevT = Math.max(t - velocitySampleDuration, 0);
  return velocityPerSecond(current - resolveValue(prevT), t - prevT);
}
const springDefaults = {
  // Default spring physics
  stiffness: 100,
  damping: 10,
  mass: 1,
  velocity: 0,
  // Default duration/bounce-based options
  duration: 800,
  // in ms
  bounce: 0.3,
  visualDuration: 0.3,
  // in seconds
  // Rest thresholds
  restSpeed: {
    granular: 0.01,
    default: 2
  },
  restDelta: {
    granular: 5e-3,
    default: 0.5
  },
  // Limits
  minDuration: 0.01,
  // in seconds
  maxDuration: 10,
  // in seconds
  minDamping: 0.05,
  maxDamping: 1
};
const safeMin = 1e-3;
function findSpring({ duration = springDefaults.duration, bounce = springDefaults.bounce, velocity = springDefaults.velocity, mass = springDefaults.mass }) {
  let envelope;
  let derivative;
  let dampingRatio = 1 - bounce;
  dampingRatio = clamp(springDefaults.minDamping, springDefaults.maxDamping, dampingRatio);
  duration = clamp(springDefaults.minDuration, springDefaults.maxDuration, /* @__PURE__ */ millisecondsToSeconds(duration));
  if (dampingRatio < 1) {
    envelope = (undampedFreq2) => {
      const exponentialDecay = undampedFreq2 * dampingRatio;
      const delta = exponentialDecay * duration;
      const a2 = exponentialDecay - velocity;
      const b2 = calcAngularFreq(undampedFreq2, dampingRatio);
      const c2 = Math.exp(-delta);
      return safeMin - a2 / b2 * c2;
    };
    derivative = (undampedFreq2) => {
      const exponentialDecay = undampedFreq2 * dampingRatio;
      const delta = exponentialDecay * duration;
      const d2 = delta * velocity + velocity;
      const e2 = Math.pow(dampingRatio, 2) * Math.pow(undampedFreq2, 2) * duration;
      const f2 = Math.exp(-delta);
      const g2 = calcAngularFreq(Math.pow(undampedFreq2, 2), dampingRatio);
      const factor = -envelope(undampedFreq2) + safeMin > 0 ? -1 : 1;
      return factor * ((d2 - e2) * f2) / g2;
    };
  } else {
    envelope = (undampedFreq2) => {
      const a2 = Math.exp(-undampedFreq2 * duration);
      const b2 = (undampedFreq2 - velocity) * duration + 1;
      return -safeMin + a2 * b2;
    };
    derivative = (undampedFreq2) => {
      const a2 = Math.exp(-undampedFreq2 * duration);
      const b2 = (velocity - undampedFreq2) * (duration * duration);
      return a2 * b2;
    };
  }
  const initialGuess = 5 / duration;
  const undampedFreq = approximateRoot(envelope, derivative, initialGuess);
  duration = /* @__PURE__ */ secondsToMilliseconds(duration);
  if (isNaN(undampedFreq)) {
    return {
      stiffness: springDefaults.stiffness,
      damping: springDefaults.damping,
      duration
    };
  } else {
    const stiffness = Math.pow(undampedFreq, 2) * mass;
    return {
      stiffness,
      damping: dampingRatio * 2 * Math.sqrt(mass * stiffness),
      duration
    };
  }
}
const rootIterations = 12;
function approximateRoot(envelope, derivative, initialGuess) {
  let result = initialGuess;
  for (let i = 1; i < rootIterations; i++) {
    result = result - envelope(result) / derivative(result);
  }
  return result;
}
function calcAngularFreq(undampedFreq, dampingRatio) {
  return undampedFreq * Math.sqrt(1 - dampingRatio * dampingRatio);
}
const durationKeys = ["duration", "bounce"];
const physicsKeys = ["stiffness", "damping", "mass"];
function isSpringType(options, keys) {
  return keys.some((key) => options[key] !== void 0);
}
function getSpringOptions(options) {
  let springOptions = {
    velocity: springDefaults.velocity,
    stiffness: springDefaults.stiffness,
    damping: springDefaults.damping,
    mass: springDefaults.mass,
    isResolvedFromDuration: false,
    ...options
  };
  if (!isSpringType(options, physicsKeys) && isSpringType(options, durationKeys)) {
    if (options.visualDuration) {
      const visualDuration = options.visualDuration;
      const root = 2 * Math.PI / (visualDuration * 1.2);
      const stiffness = root * root;
      const damping = 2 * clamp(0.05, 1, 1 - (options.bounce || 0)) * Math.sqrt(stiffness);
      springOptions = {
        ...springOptions,
        mass: springDefaults.mass,
        stiffness,
        damping
      };
    } else {
      const derived = findSpring(options);
      springOptions = {
        ...springOptions,
        ...derived,
        mass: springDefaults.mass
      };
      springOptions.isResolvedFromDuration = true;
    }
  }
  return springOptions;
}
function spring(optionsOrVisualDuration = springDefaults.visualDuration, bounce = springDefaults.bounce) {
  const options = typeof optionsOrVisualDuration !== "object" ? {
    visualDuration: optionsOrVisualDuration,
    keyframes: [0, 1],
    bounce
  } : optionsOrVisualDuration;
  let { restSpeed, restDelta } = options;
  const origin = options.keyframes[0];
  const target = options.keyframes[options.keyframes.length - 1];
  const state2 = { done: false, value: origin };
  const { stiffness, damping, mass, duration, velocity, isResolvedFromDuration } = getSpringOptions({
    ...options,
    velocity: -/* @__PURE__ */ millisecondsToSeconds(options.velocity || 0)
  });
  const initialVelocity = velocity || 0;
  const dampingRatio = damping / (2 * Math.sqrt(stiffness * mass));
  const initialDelta = target - origin;
  const undampedAngularFreq = /* @__PURE__ */ millisecondsToSeconds(Math.sqrt(stiffness / mass));
  const isGranularScale = Math.abs(initialDelta) < 5;
  restSpeed || (restSpeed = isGranularScale ? springDefaults.restSpeed.granular : springDefaults.restSpeed.default);
  restDelta || (restDelta = isGranularScale ? springDefaults.restDelta.granular : springDefaults.restDelta.default);
  let resolveSpring;
  if (dampingRatio < 1) {
    const angularFreq = calcAngularFreq(undampedAngularFreq, dampingRatio);
    resolveSpring = (t) => {
      const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
      return target - envelope * ((initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) / angularFreq * Math.sin(angularFreq * t) + initialDelta * Math.cos(angularFreq * t));
    };
  } else if (dampingRatio === 1) {
    resolveSpring = (t) => target - Math.exp(-undampedAngularFreq * t) * (initialDelta + (initialVelocity + undampedAngularFreq * initialDelta) * t);
  } else {
    const dampedAngularFreq = undampedAngularFreq * Math.sqrt(dampingRatio * dampingRatio - 1);
    resolveSpring = (t) => {
      const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
      const freqForT = Math.min(dampedAngularFreq * t, 300);
      return target - envelope * ((initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) * Math.sinh(freqForT) + dampedAngularFreq * initialDelta * Math.cosh(freqForT)) / dampedAngularFreq;
    };
  }
  const generator = {
    calculatedDuration: isResolvedFromDuration ? duration || null : null,
    next: (t) => {
      const current = resolveSpring(t);
      if (!isResolvedFromDuration) {
        let currentVelocity = 0;
        if (dampingRatio < 1) {
          currentVelocity = t === 0 ? /* @__PURE__ */ secondsToMilliseconds(initialVelocity) : calcGeneratorVelocity(resolveSpring, t, current);
        }
        const isBelowVelocityThreshold = Math.abs(currentVelocity) <= restSpeed;
        const isBelowDisplacementThreshold = Math.abs(target - current) <= restDelta;
        state2.done = isBelowVelocityThreshold && isBelowDisplacementThreshold;
      } else {
        state2.done = t >= duration;
      }
      state2.value = state2.done ? target : current;
      return state2;
    },
    toString: () => {
      const calculatedDuration = Math.min(calcGeneratorDuration(generator), maxGeneratorDuration);
      const easing = generateLinearEasing((progress2) => generator.next(calculatedDuration * progress2).value, calculatedDuration, 30);
      return calculatedDuration + "ms " + easing;
    }
  };
  return generator;
}
function inertia({ keyframes: keyframes2, velocity = 0, power = 0.8, timeConstant = 325, bounceDamping = 10, bounceStiffness = 500, modifyTarget, min, max, restDelta = 0.5, restSpeed }) {
  const origin = keyframes2[0];
  const state2 = {
    done: false,
    value: origin
  };
  const isOutOfBounds = (v2) => min !== void 0 && v2 < min || max !== void 0 && v2 > max;
  const nearestBoundary = (v2) => {
    if (min === void 0)
      return max;
    if (max === void 0)
      return min;
    return Math.abs(min - v2) < Math.abs(max - v2) ? min : max;
  };
  let amplitude = power * velocity;
  const ideal = origin + amplitude;
  const target = modifyTarget === void 0 ? ideal : modifyTarget(ideal);
  if (target !== ideal)
    amplitude = target - origin;
  const calcDelta = (t) => -amplitude * Math.exp(-t / timeConstant);
  const calcLatest = (t) => target + calcDelta(t);
  const applyFriction = (t) => {
    const delta = calcDelta(t);
    const latest = calcLatest(t);
    state2.done = Math.abs(delta) <= restDelta;
    state2.value = state2.done ? target : latest;
  };
  let timeReachedBoundary;
  let spring$1;
  const checkCatchBoundary = (t) => {
    if (!isOutOfBounds(state2.value))
      return;
    timeReachedBoundary = t;
    spring$1 = spring({
      keyframes: [state2.value, nearestBoundary(state2.value)],
      velocity: calcGeneratorVelocity(calcLatest, t, state2.value),
      // TODO: This should be passing * 1000
      damping: bounceDamping,
      stiffness: bounceStiffness,
      restDelta,
      restSpeed
    });
  };
  checkCatchBoundary(0);
  return {
    calculatedDuration: null,
    next: (t) => {
      let hasUpdatedFrame = false;
      if (!spring$1 && timeReachedBoundary === void 0) {
        hasUpdatedFrame = true;
        applyFriction(t);
        checkCatchBoundary(t);
      }
      if (timeReachedBoundary !== void 0 && t >= timeReachedBoundary) {
        return spring$1.next(t - timeReachedBoundary);
      } else {
        !hasUpdatedFrame && applyFriction(t);
        return state2;
      }
    }
  };
}
const easeIn = /* @__PURE__ */ cubicBezier(0.42, 0, 1, 1);
const easeOut = /* @__PURE__ */ cubicBezier(0, 0, 0.58, 1);
const easeInOut = /* @__PURE__ */ cubicBezier(0.42, 0, 0.58, 1);
const isEasingArray = (ease2) => {
  return Array.isArray(ease2) && typeof ease2[0] !== "number";
};
const easingLookup = {
  linear: noop,
  easeIn,
  easeInOut,
  easeOut,
  circIn,
  circInOut,
  circOut,
  backIn,
  backInOut,
  backOut,
  anticipate
};
const easingDefinitionToFunction = (definition) => {
  if (isBezierDefinition(definition)) {
    invariant(definition.length === 4);
    const [x1, y1, x2, y2] = definition;
    return cubicBezier(x1, y1, x2, y2);
  } else if (typeof definition === "string") {
    return easingLookup[definition];
  }
  return definition;
};
function createMixers(output, ease2, customMixer) {
  const mixers = [];
  const mixerFactory = customMixer || mix;
  const numMixers = output.length - 1;
  for (let i = 0; i < numMixers; i++) {
    let mixer = mixerFactory(output[i], output[i + 1]);
    if (ease2) {
      const easingFunction = Array.isArray(ease2) ? ease2[i] || noop : ease2;
      mixer = pipe(easingFunction, mixer);
    }
    mixers.push(mixer);
  }
  return mixers;
}
function interpolate(input, output, { clamp: isClamp = true, ease: ease2, mixer } = {}) {
  const inputLength = input.length;
  invariant(inputLength === output.length);
  if (inputLength === 1)
    return () => output[0];
  if (inputLength === 2 && output[0] === output[1])
    return () => output[1];
  const isZeroDeltaRange = input[0] === input[1];
  if (input[0] > input[inputLength - 1]) {
    input = [...input].reverse();
    output = [...output].reverse();
  }
  const mixers = createMixers(output, ease2, mixer);
  const numMixers = mixers.length;
  const interpolator = (v2) => {
    if (isZeroDeltaRange && v2 < input[0])
      return output[0];
    let i = 0;
    if (numMixers > 1) {
      for (; i < input.length - 2; i++) {
        if (v2 < input[i + 1])
          break;
      }
    }
    const progressInRange = /* @__PURE__ */ progress(input[i], input[i + 1], v2);
    return mixers[i](progressInRange);
  };
  return isClamp ? (v2) => interpolator(clamp(input[0], input[inputLength - 1], v2)) : interpolator;
}
function fillOffset(offset, remaining) {
  const min = offset[offset.length - 1];
  for (let i = 1; i <= remaining; i++) {
    const offsetProgress = /* @__PURE__ */ progress(0, remaining, i);
    offset.push(mixNumber$1(min, 1, offsetProgress));
  }
}
function defaultOffset(arr) {
  const offset = [0];
  fillOffset(offset, arr.length - 1);
  return offset;
}
function convertOffsetToTimes(offset, duration) {
  return offset.map((o2) => o2 * duration);
}
function defaultEasing(values, easing) {
  return values.map(() => easing || easeInOut).splice(0, values.length - 1);
}
function keyframes({ duration = 300, keyframes: keyframeValues, times, ease: ease2 = "easeInOut" }) {
  const easingFunctions = isEasingArray(ease2) ? ease2.map(easingDefinitionToFunction) : easingDefinitionToFunction(ease2);
  const state2 = {
    done: false,
    value: keyframeValues[0]
  };
  const absoluteTimes = convertOffsetToTimes(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    times && times.length === keyframeValues.length ? times : defaultOffset(keyframeValues),
    duration
  );
  const mapTimeToKeyframe = interpolate(absoluteTimes, keyframeValues, {
    ease: Array.isArray(easingFunctions) ? easingFunctions : defaultEasing(keyframeValues, easingFunctions)
  });
  return {
    calculatedDuration: duration,
    next: (t) => {
      state2.value = mapTimeToKeyframe(t);
      state2.done = t >= duration;
      return state2;
    }
  };
}
const frameloopDriver = (update) => {
  const passTimestamp = ({ timestamp }) => update(timestamp);
  return {
    start: () => frame.update(passTimestamp, true),
    stop: () => cancelFrame(passTimestamp),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => frameData.isProcessing ? frameData.timestamp : time.now()
  };
};
const generators = {
  decay: inertia,
  inertia,
  tween: keyframes,
  keyframes,
  spring
};
const percentToProgress = (percent2) => percent2 / 100;
class MainThreadAnimation extends BaseAnimation {
  constructor(options) {
    super(options);
    this.holdTime = null;
    this.cancelTime = null;
    this.currentTime = 0;
    this.playbackSpeed = 1;
    this.pendingPlayState = "running";
    this.startTime = null;
    this.state = "idle";
    this.stop = () => {
      this.resolver.cancel();
      this.isStopped = true;
      if (this.state === "idle")
        return;
      this.teardown();
      const { onStop } = this.options;
      onStop && onStop();
    };
    const { name, motionValue: motionValue2, element, keyframes: keyframes2 } = this.options;
    const KeyframeResolver$1 = (element === null || element === void 0 ? void 0 : element.KeyframeResolver) || KeyframeResolver;
    const onResolved = (resolvedKeyframes, finalKeyframe) => this.onKeyframesResolved(resolvedKeyframes, finalKeyframe);
    this.resolver = new KeyframeResolver$1(keyframes2, onResolved, name, motionValue2, element);
    this.resolver.scheduleResolve();
  }
  flatten() {
    super.flatten();
    if (this._resolved) {
      Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes));
    }
  }
  initPlayback(keyframes$1) {
    const { type = "keyframes", repeat = 0, repeatDelay = 0, repeatType, velocity = 0 } = this.options;
    const generatorFactory = isGenerator(type) ? type : generators[type] || keyframes;
    let mapPercentToKeyframes;
    let mirroredGenerator;
    if (generatorFactory !== keyframes && typeof keyframes$1[0] !== "number") {
      mapPercentToKeyframes = pipe(percentToProgress, mix(keyframes$1[0], keyframes$1[1]));
      keyframes$1 = [0, 100];
    }
    const generator = generatorFactory({ ...this.options, keyframes: keyframes$1 });
    if (repeatType === "mirror") {
      mirroredGenerator = generatorFactory({
        ...this.options,
        keyframes: [...keyframes$1].reverse(),
        velocity: -velocity
      });
    }
    if (generator.calculatedDuration === null) {
      generator.calculatedDuration = calcGeneratorDuration(generator);
    }
    const { calculatedDuration } = generator;
    const resolvedDuration = calculatedDuration + repeatDelay;
    const totalDuration = resolvedDuration * (repeat + 1) - repeatDelay;
    return {
      generator,
      mirroredGenerator,
      mapPercentToKeyframes,
      calculatedDuration,
      resolvedDuration,
      totalDuration
    };
  }
  onPostResolved() {
    const { autoplay = true } = this.options;
    this.play();
    if (this.pendingPlayState === "paused" || !autoplay) {
      this.pause();
    } else {
      this.state = this.pendingPlayState;
    }
  }
  tick(timestamp, sample = false) {
    const { resolved } = this;
    if (!resolved) {
      const { keyframes: keyframes3 } = this.options;
      return { done: true, value: keyframes3[keyframes3.length - 1] };
    }
    const { finalKeyframe, generator, mirroredGenerator, mapPercentToKeyframes, keyframes: keyframes2, calculatedDuration, totalDuration, resolvedDuration } = resolved;
    if (this.startTime === null)
      return generator.next(0);
    const { delay: delay2, repeat, repeatType, repeatDelay, onUpdate } = this.options;
    if (this.speed > 0) {
      this.startTime = Math.min(this.startTime, timestamp);
    } else if (this.speed < 0) {
      this.startTime = Math.min(timestamp - totalDuration / this.speed, this.startTime);
    }
    if (sample) {
      this.currentTime = timestamp;
    } else if (this.holdTime !== null) {
      this.currentTime = this.holdTime;
    } else {
      this.currentTime = Math.round(timestamp - this.startTime) * this.speed;
    }
    const timeWithoutDelay = this.currentTime - delay2 * (this.speed >= 0 ? 1 : -1);
    const isInDelayPhase = this.speed >= 0 ? timeWithoutDelay < 0 : timeWithoutDelay > totalDuration;
    this.currentTime = Math.max(timeWithoutDelay, 0);
    if (this.state === "finished" && this.holdTime === null) {
      this.currentTime = totalDuration;
    }
    let elapsed = this.currentTime;
    let frameGenerator = generator;
    if (repeat) {
      const progress2 = Math.min(this.currentTime, totalDuration) / resolvedDuration;
      let currentIteration = Math.floor(progress2);
      let iterationProgress = progress2 % 1;
      if (!iterationProgress && progress2 >= 1) {
        iterationProgress = 1;
      }
      iterationProgress === 1 && currentIteration--;
      currentIteration = Math.min(currentIteration, repeat + 1);
      const isOddIteration = Boolean(currentIteration % 2);
      if (isOddIteration) {
        if (repeatType === "reverse") {
          iterationProgress = 1 - iterationProgress;
          if (repeatDelay) {
            iterationProgress -= repeatDelay / resolvedDuration;
          }
        } else if (repeatType === "mirror") {
          frameGenerator = mirroredGenerator;
        }
      }
      elapsed = clamp(0, 1, iterationProgress) * resolvedDuration;
    }
    const state2 = isInDelayPhase ? { done: false, value: keyframes2[0] } : frameGenerator.next(elapsed);
    if (mapPercentToKeyframes) {
      state2.value = mapPercentToKeyframes(state2.value);
    }
    let { done } = state2;
    if (!isInDelayPhase && calculatedDuration !== null) {
      done = this.speed >= 0 ? this.currentTime >= totalDuration : this.currentTime <= 0;
    }
    const isAnimationFinished = this.holdTime === null && (this.state === "finished" || this.state === "running" && done);
    if (isAnimationFinished && finalKeyframe !== void 0) {
      state2.value = getFinalKeyframe(keyframes2, this.options, finalKeyframe);
    }
    if (onUpdate) {
      onUpdate(state2.value);
    }
    if (isAnimationFinished) {
      this.finish();
    }
    return state2;
  }
  get duration() {
    const { resolved } = this;
    return resolved ? /* @__PURE__ */ millisecondsToSeconds(resolved.calculatedDuration) : 0;
  }
  get time() {
    return /* @__PURE__ */ millisecondsToSeconds(this.currentTime);
  }
  set time(newTime) {
    newTime = /* @__PURE__ */ secondsToMilliseconds(newTime);
    this.currentTime = newTime;
    if (this.holdTime !== null || this.speed === 0) {
      this.holdTime = newTime;
    } else if (this.driver) {
      this.startTime = this.driver.now() - newTime / this.speed;
    }
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(newSpeed) {
    const hasChanged = this.playbackSpeed !== newSpeed;
    this.playbackSpeed = newSpeed;
    if (hasChanged) {
      this.time = /* @__PURE__ */ millisecondsToSeconds(this.currentTime);
    }
  }
  play() {
    if (!this.resolver.isScheduled) {
      this.resolver.resume();
    }
    if (!this._resolved) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped)
      return;
    const { driver = frameloopDriver, onPlay, startTime } = this.options;
    if (!this.driver) {
      this.driver = driver((timestamp) => this.tick(timestamp));
    }
    onPlay && onPlay();
    const now2 = this.driver.now();
    if (this.holdTime !== null) {
      this.startTime = now2 - this.holdTime;
    } else if (!this.startTime) {
      this.startTime = startTime !== null && startTime !== void 0 ? startTime : this.calcStartTime();
    } else if (this.state === "finished") {
      this.startTime = now2;
    }
    if (this.state === "finished") {
      this.updateFinishedPromise();
    }
    this.cancelTime = this.startTime;
    this.holdTime = null;
    this.state = "running";
    this.driver.start();
  }
  pause() {
    var _a;
    if (!this._resolved) {
      this.pendingPlayState = "paused";
      return;
    }
    this.state = "paused";
    this.holdTime = (_a = this.currentTime) !== null && _a !== void 0 ? _a : 0;
  }
  complete() {
    if (this.state !== "running") {
      this.play();
    }
    this.pendingPlayState = this.state = "finished";
    this.holdTime = null;
  }
  finish() {
    this.teardown();
    this.state = "finished";
    const { onComplete } = this.options;
    onComplete && onComplete();
  }
  cancel() {
    if (this.cancelTime !== null) {
      this.tick(this.cancelTime);
    }
    this.teardown();
    this.updateFinishedPromise();
  }
  teardown() {
    this.state = "idle";
    this.stopDriver();
    this.resolveFinishedPromise();
    this.updateFinishedPromise();
    this.startTime = this.cancelTime = null;
    this.resolver.cancel();
  }
  stopDriver() {
    if (!this.driver)
      return;
    this.driver.stop();
    this.driver = void 0;
  }
  sample(time2) {
    this.startTime = 0;
    return this.tick(time2, true);
  }
}
const acceleratedValues = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform"
  // TODO: Can be accelerated but currently disabled until https://issues.chromium.org/issues/41491098 is resolved
  // or until we implement support for linear() easing.
  // "background-color"
]);
function startWaapiAnimation(element, valueName, keyframes2, { delay: delay2 = 0, duration = 300, repeat = 0, repeatType = "loop", ease: ease2 = "easeInOut", times } = {}) {
  const keyframeOptions = { [valueName]: keyframes2 };
  if (times)
    keyframeOptions.offset = times;
  const easing = mapEasingToNativeEasing(ease2, duration);
  if (Array.isArray(easing))
    keyframeOptions.easing = easing;
  return element.animate(keyframeOptions, {
    delay: delay2,
    duration,
    easing: !Array.isArray(easing) ? easing : "linear",
    fill: "both",
    iterations: repeat + 1,
    direction: repeatType === "reverse" ? "alternate" : "normal"
  });
}
const supportsWaapi = /* @__PURE__ */ memo(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
const sampleDelta = 10;
const maxDuration = 2e4;
function requiresPregeneratedKeyframes(options) {
  return isGenerator(options.type) || options.type === "spring" || !isWaapiSupportedEasing(options.ease);
}
function pregenerateKeyframes(keyframes2, options) {
  const sampleAnimation = new MainThreadAnimation({
    ...options,
    keyframes: keyframes2,
    repeat: 0,
    delay: 0,
    isGenerator: true
  });
  let state2 = { done: false, value: keyframes2[0] };
  const pregeneratedKeyframes = [];
  let t = 0;
  while (!state2.done && t < maxDuration) {
    state2 = sampleAnimation.sample(t);
    pregeneratedKeyframes.push(state2.value);
    t += sampleDelta;
  }
  return {
    times: void 0,
    keyframes: pregeneratedKeyframes,
    duration: t - sampleDelta,
    ease: "linear"
  };
}
const unsupportedEasingFunctions = {
  anticipate,
  backInOut,
  circInOut
};
function isUnsupportedEase(key) {
  return key in unsupportedEasingFunctions;
}
class AcceleratedAnimation extends BaseAnimation {
  constructor(options) {
    super(options);
    const { name, motionValue: motionValue2, element, keyframes: keyframes2 } = this.options;
    this.resolver = new DOMKeyframesResolver(keyframes2, (resolvedKeyframes, finalKeyframe) => this.onKeyframesResolved(resolvedKeyframes, finalKeyframe), name, motionValue2, element);
    this.resolver.scheduleResolve();
  }
  initPlayback(keyframes2, finalKeyframe) {
    let { duration = 300, times, ease: ease2, type, motionValue: motionValue2, name, startTime } = this.options;
    if (!motionValue2.owner || !motionValue2.owner.current) {
      return false;
    }
    if (typeof ease2 === "string" && supportsLinearEasing() && isUnsupportedEase(ease2)) {
      ease2 = unsupportedEasingFunctions[ease2];
    }
    if (requiresPregeneratedKeyframes(this.options)) {
      const { onComplete, onUpdate, motionValue: motionValue3, element, ...options } = this.options;
      const pregeneratedAnimation = pregenerateKeyframes(keyframes2, options);
      keyframes2 = pregeneratedAnimation.keyframes;
      if (keyframes2.length === 1) {
        keyframes2[1] = keyframes2[0];
      }
      duration = pregeneratedAnimation.duration;
      times = pregeneratedAnimation.times;
      ease2 = pregeneratedAnimation.ease;
      type = "keyframes";
    }
    const animation = startWaapiAnimation(motionValue2.owner.current, name, keyframes2, { ...this.options, duration, times, ease: ease2 });
    animation.startTime = startTime !== null && startTime !== void 0 ? startTime : this.calcStartTime();
    if (this.pendingTimeline) {
      attachTimeline(animation, this.pendingTimeline);
      this.pendingTimeline = void 0;
    } else {
      animation.onfinish = () => {
        const { onComplete } = this.options;
        motionValue2.set(getFinalKeyframe(keyframes2, this.options, finalKeyframe));
        onComplete && onComplete();
        this.cancel();
        this.resolveFinishedPromise();
      };
    }
    return {
      animation,
      duration,
      times,
      type,
      ease: ease2,
      keyframes: keyframes2
    };
  }
  get duration() {
    const { resolved } = this;
    if (!resolved)
      return 0;
    const { duration } = resolved;
    return /* @__PURE__ */ millisecondsToSeconds(duration);
  }
  get time() {
    const { resolved } = this;
    if (!resolved)
      return 0;
    const { animation } = resolved;
    return /* @__PURE__ */ millisecondsToSeconds(animation.currentTime || 0);
  }
  set time(newTime) {
    const { resolved } = this;
    if (!resolved)
      return;
    const { animation } = resolved;
    animation.currentTime = /* @__PURE__ */ secondsToMilliseconds(newTime);
  }
  get speed() {
    const { resolved } = this;
    if (!resolved)
      return 1;
    const { animation } = resolved;
    return animation.playbackRate;
  }
  set speed(newSpeed) {
    const { resolved } = this;
    if (!resolved)
      return;
    const { animation } = resolved;
    animation.playbackRate = newSpeed;
  }
  get state() {
    const { resolved } = this;
    if (!resolved)
      return "idle";
    const { animation } = resolved;
    return animation.playState;
  }
  get startTime() {
    const { resolved } = this;
    if (!resolved)
      return null;
    const { animation } = resolved;
    return animation.startTime;
  }
  /**
   * Replace the default DocumentTimeline with another AnimationTimeline.
   * Currently used for scroll animations.
   */
  attachTimeline(timeline) {
    if (!this._resolved) {
      this.pendingTimeline = timeline;
    } else {
      const { resolved } = this;
      if (!resolved)
        return noop;
      const { animation } = resolved;
      attachTimeline(animation, timeline);
    }
    return noop;
  }
  play() {
    if (this.isStopped)
      return;
    const { resolved } = this;
    if (!resolved)
      return;
    const { animation } = resolved;
    if (animation.playState === "finished") {
      this.updateFinishedPromise();
    }
    animation.play();
  }
  pause() {
    const { resolved } = this;
    if (!resolved)
      return;
    const { animation } = resolved;
    animation.pause();
  }
  stop() {
    this.resolver.cancel();
    this.isStopped = true;
    if (this.state === "idle")
      return;
    this.resolveFinishedPromise();
    this.updateFinishedPromise();
    const { resolved } = this;
    if (!resolved)
      return;
    const { animation, keyframes: keyframes2, duration, type, ease: ease2, times } = resolved;
    if (animation.playState === "idle" || animation.playState === "finished") {
      return;
    }
    if (this.time) {
      const { motionValue: motionValue2, onUpdate, onComplete, element, ...options } = this.options;
      const sampleAnimation = new MainThreadAnimation({
        ...options,
        keyframes: keyframes2,
        duration,
        type,
        ease: ease2,
        times,
        isGenerator: true
      });
      const sampleTime = /* @__PURE__ */ secondsToMilliseconds(this.time);
      motionValue2.setWithVelocity(sampleAnimation.sample(sampleTime - sampleDelta).value, sampleAnimation.sample(sampleTime).value, sampleDelta);
    }
    const { onStop } = this.options;
    onStop && onStop();
    this.cancel();
  }
  complete() {
    const { resolved } = this;
    if (!resolved)
      return;
    resolved.animation.finish();
  }
  cancel() {
    const { resolved } = this;
    if (!resolved)
      return;
    resolved.animation.cancel();
  }
  static supports(options) {
    const { motionValue: motionValue2, name, repeatDelay, repeatType, damping, type } = options;
    if (!motionValue2 || !motionValue2.owner || !(motionValue2.owner.current instanceof HTMLElement)) {
      return false;
    }
    const { onUpdate, transformTemplate } = motionValue2.owner.getProps();
    return supportsWaapi() && name && acceleratedValues.has(name) && /**
     * If we're outputting values to onUpdate then we can't use WAAPI as there's
     * no way to read the value from WAAPI every frame.
     */
    !onUpdate && !transformTemplate && !repeatDelay && repeatType !== "mirror" && damping !== 0 && type !== "inertia";
  }
}
const underDampedSpring = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
};
const criticallyDampedSpring = (target) => ({
  type: "spring",
  stiffness: 550,
  damping: target === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
});
const keyframesTransition = {
  type: "keyframes",
  duration: 0.8
};
const ease = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
};
const getDefaultTransition = (valueKey, { keyframes: keyframes2 }) => {
  if (keyframes2.length > 2) {
    return keyframesTransition;
  } else if (transformProps.has(valueKey)) {
    return valueKey.startsWith("scale") ? criticallyDampedSpring(keyframes2[1]) : underDampedSpring;
  }
  return ease;
};
function isTransitionDefined({ when, delay: _delay, delayChildren, staggerChildren, staggerDirection, repeat, repeatType, repeatDelay, from, elapsed, ...transition }) {
  return !!Object.keys(transition).length;
}
const animateMotionValue = (name, value, target, transition = {}, element, isHandoff) => (onComplete) => {
  const valueTransition = getValueTransition(transition, name) || {};
  const delay2 = valueTransition.delay || transition.delay || 0;
  let { elapsed = 0 } = transition;
  elapsed = elapsed - /* @__PURE__ */ secondsToMilliseconds(delay2);
  let options = {
    keyframes: Array.isArray(target) ? target : [null, target],
    ease: "easeOut",
    velocity: value.getVelocity(),
    ...valueTransition,
    delay: -elapsed,
    onUpdate: (v2) => {
      value.set(v2);
      valueTransition.onUpdate && valueTransition.onUpdate(v2);
    },
    onComplete: () => {
      onComplete();
      valueTransition.onComplete && valueTransition.onComplete();
    },
    name,
    motionValue: value,
    element: isHandoff ? void 0 : element
  };
  if (!isTransitionDefined(valueTransition)) {
    options = {
      ...options,
      ...getDefaultTransition(name, options)
    };
  }
  if (options.duration) {
    options.duration = /* @__PURE__ */ secondsToMilliseconds(options.duration);
  }
  if (options.repeatDelay) {
    options.repeatDelay = /* @__PURE__ */ secondsToMilliseconds(options.repeatDelay);
  }
  if (options.from !== void 0) {
    options.keyframes[0] = options.from;
  }
  let shouldSkip = false;
  if (options.type === false || options.duration === 0 && !options.repeatDelay) {
    options.duration = 0;
    if (options.delay === 0) {
      shouldSkip = true;
    }
  }
  if (shouldSkip && !isHandoff && value.get() !== void 0) {
    const finalKeyframe = getFinalKeyframe(options.keyframes, valueTransition);
    if (finalKeyframe !== void 0) {
      frame.update(() => {
        options.onUpdate(finalKeyframe);
        options.onComplete();
      });
      return new GroupPlaybackControls([]);
    }
  }
  if (!isHandoff && AcceleratedAnimation.supports(options)) {
    return new AcceleratedAnimation(options);
  } else {
    return new MainThreadAnimation(options);
  }
};
function shouldBlockAnimation({ protectedKeys, needsAnimating }, key) {
  const shouldBlock = protectedKeys.hasOwnProperty(key) && needsAnimating[key] !== true;
  needsAnimating[key] = false;
  return shouldBlock;
}
function animateTarget(visualElement, targetAndTransition, { delay: delay2 = 0, transitionOverride, type } = {}) {
  var _a;
  let { transition = visualElement.getDefaultTransition(), transitionEnd, ...target } = targetAndTransition;
  if (transitionOverride)
    transition = transitionOverride;
  const animations2 = [];
  const animationTypeState = type && visualElement.animationState && visualElement.animationState.getState()[type];
  for (const key in target) {
    const value = visualElement.getValue(key, (_a = visualElement.latestValues[key]) !== null && _a !== void 0 ? _a : null);
    const valueTarget = target[key];
    if (valueTarget === void 0 || animationTypeState && shouldBlockAnimation(animationTypeState, key)) {
      continue;
    }
    const valueTransition = {
      delay: delay2,
      ...getValueTransition(transition || {}, key)
    };
    let isHandoff = false;
    if (window.MotionHandoffAnimation) {
      const appearId = getOptimisedAppearId(visualElement);
      if (appearId) {
        const startTime = window.MotionHandoffAnimation(appearId, key, frame);
        if (startTime !== null) {
          valueTransition.startTime = startTime;
          isHandoff = true;
        }
      }
    }
    addValueToWillChange(visualElement, key);
    value.start(animateMotionValue(key, value, valueTarget, visualElement.shouldReduceMotion && positionalKeys.has(key) ? { type: false } : valueTransition, visualElement, isHandoff));
    const animation = value.animation;
    if (animation) {
      animations2.push(animation);
    }
  }
  if (transitionEnd) {
    Promise.all(animations2).then(() => {
      frame.update(() => {
        transitionEnd && setTarget(visualElement, transitionEnd);
      });
    });
  }
  return animations2;
}
function animateVariant(visualElement, variant, options = {}) {
  var _a;
  const resolved = resolveVariant(visualElement, variant, options.type === "exit" ? (_a = visualElement.presenceContext) === null || _a === void 0 ? void 0 : _a.custom : void 0);
  let { transition = visualElement.getDefaultTransition() || {} } = resolved || {};
  if (options.transitionOverride) {
    transition = options.transitionOverride;
  }
  const getAnimation = resolved ? () => Promise.all(animateTarget(visualElement, resolved, options)) : () => Promise.resolve();
  const getChildAnimations = visualElement.variantChildren && visualElement.variantChildren.size ? (forwardDelay = 0) => {
    const { delayChildren = 0, staggerChildren, staggerDirection } = transition;
    return animateChildren(visualElement, variant, delayChildren + forwardDelay, staggerChildren, staggerDirection, options);
  } : () => Promise.resolve();
  const { when } = transition;
  if (when) {
    const [first, last] = when === "beforeChildren" ? [getAnimation, getChildAnimations] : [getChildAnimations, getAnimation];
    return first().then(() => last());
  } else {
    return Promise.all([getAnimation(), getChildAnimations(options.delay)]);
  }
}
function animateChildren(visualElement, variant, delayChildren = 0, staggerChildren = 0, staggerDirection = 1, options) {
  const animations2 = [];
  const maxStaggerDuration = (visualElement.variantChildren.size - 1) * staggerChildren;
  const generateStaggerDuration = staggerDirection === 1 ? (i = 0) => i * staggerChildren : (i = 0) => maxStaggerDuration - i * staggerChildren;
  Array.from(visualElement.variantChildren).sort(sortByTreeOrder).forEach((child, i) => {
    child.notify("AnimationStart", variant);
    animations2.push(animateVariant(child, variant, {
      ...options,
      delay: delayChildren + generateStaggerDuration(i)
    }).then(() => child.notify("AnimationComplete", variant)));
  });
  return Promise.all(animations2);
}
function sortByTreeOrder(a2, b2) {
  return a2.sortNodePosition(b2);
}
function animateVisualElement(visualElement, definition, options = {}) {
  visualElement.notify("AnimationStart", definition);
  let animation;
  if (Array.isArray(definition)) {
    const animations2 = definition.map((variant) => animateVariant(visualElement, variant, options));
    animation = Promise.all(animations2);
  } else if (typeof definition === "string") {
    animation = animateVariant(visualElement, definition, options);
  } else {
    const resolvedDefinition = typeof definition === "function" ? resolveVariant(visualElement, definition, options.custom) : definition;
    animation = Promise.all(animateTarget(visualElement, resolvedDefinition, options));
  }
  return animation.then(() => {
    visualElement.notify("AnimationComplete", definition);
  });
}
const numVariantProps = variantProps.length;
function getVariantContext(visualElement) {
  if (!visualElement)
    return void 0;
  if (!visualElement.isControllingVariants) {
    const context2 = visualElement.parent ? getVariantContext(visualElement.parent) || {} : {};
    if (visualElement.props.initial !== void 0) {
      context2.initial = visualElement.props.initial;
    }
    return context2;
  }
  const context = {};
  for (let i = 0; i < numVariantProps; i++) {
    const name = variantProps[i];
    const prop = visualElement.props[name];
    if (isVariantLabel(prop) || prop === false) {
      context[name] = prop;
    }
  }
  return context;
}
const reversePriorityOrder = [...variantPriorityOrder].reverse();
const numAnimationTypes = variantPriorityOrder.length;
function animateList(visualElement) {
  return (animations2) => Promise.all(animations2.map(({ animation, options }) => animateVisualElement(visualElement, animation, options)));
}
function createAnimationState(visualElement) {
  let animate = animateList(visualElement);
  let state2 = createState();
  let isInitialRender = true;
  const buildResolvedTypeValues = (type) => (acc, definition) => {
    var _a;
    const resolved = resolveVariant(visualElement, definition, type === "exit" ? (_a = visualElement.presenceContext) === null || _a === void 0 ? void 0 : _a.custom : void 0);
    if (resolved) {
      const { transition, transitionEnd, ...target } = resolved;
      acc = { ...acc, ...target, ...transitionEnd };
    }
    return acc;
  };
  function setAnimateFunction(makeAnimator) {
    animate = makeAnimator(visualElement);
  }
  function animateChanges(changedActiveType) {
    const { props } = visualElement;
    const context = getVariantContext(visualElement.parent) || {};
    const animations2 = [];
    const removedKeys = /* @__PURE__ */ new Set();
    let encounteredKeys = {};
    let removedVariantIndex = Infinity;
    for (let i = 0; i < numAnimationTypes; i++) {
      const type = reversePriorityOrder[i];
      const typeState = state2[type];
      const prop = props[type] !== void 0 ? props[type] : context[type];
      const propIsVariant = isVariantLabel(prop);
      const activeDelta = type === changedActiveType ? typeState.isActive : null;
      if (activeDelta === false)
        removedVariantIndex = i;
      let isInherited = prop === context[type] && prop !== props[type] && propIsVariant;
      if (isInherited && isInitialRender && visualElement.manuallyAnimateOnMount) {
        isInherited = false;
      }
      typeState.protectedKeys = { ...encounteredKeys };
      if (
        // If it isn't active and hasn't *just* been set as inactive
        !typeState.isActive && activeDelta === null || // If we didn't and don't have any defined prop for this animation type
        !prop && !typeState.prevProp || // Or if the prop doesn't define an animation
        isAnimationControls(prop) || typeof prop === "boolean"
      ) {
        continue;
      }
      const variantDidChange = checkVariantsDidChange(typeState.prevProp, prop);
      let shouldAnimateType = variantDidChange || // If we're making this variant active, we want to always make it active
      type === changedActiveType && typeState.isActive && !isInherited && propIsVariant || // If we removed a higher-priority variant (i is in reverse order)
      i > removedVariantIndex && propIsVariant;
      let handledRemovedValues = false;
      const definitionList = Array.isArray(prop) ? prop : [prop];
      let resolvedValues = definitionList.reduce(buildResolvedTypeValues(type), {});
      if (activeDelta === false)
        resolvedValues = {};
      const { prevResolvedValues = {} } = typeState;
      const allKeys = {
        ...prevResolvedValues,
        ...resolvedValues
      };
      const markToAnimate = (key) => {
        shouldAnimateType = true;
        if (removedKeys.has(key)) {
          handledRemovedValues = true;
          removedKeys.delete(key);
        }
        typeState.needsAnimating[key] = true;
        const motionValue2 = visualElement.getValue(key);
        if (motionValue2)
          motionValue2.liveStyle = false;
      };
      for (const key in allKeys) {
        const next = resolvedValues[key];
        const prev = prevResolvedValues[key];
        if (encounteredKeys.hasOwnProperty(key))
          continue;
        let valueHasChanged = false;
        if (isKeyframesTarget(next) && isKeyframesTarget(prev)) {
          valueHasChanged = !shallowCompare(next, prev);
        } else {
          valueHasChanged = next !== prev;
        }
        if (valueHasChanged) {
          if (next !== void 0 && next !== null) {
            markToAnimate(key);
          } else {
            removedKeys.add(key);
          }
        } else if (next !== void 0 && removedKeys.has(key)) {
          markToAnimate(key);
        } else {
          typeState.protectedKeys[key] = true;
        }
      }
      typeState.prevProp = prop;
      typeState.prevResolvedValues = resolvedValues;
      if (typeState.isActive) {
        encounteredKeys = { ...encounteredKeys, ...resolvedValues };
      }
      if (isInitialRender && visualElement.blockInitialAnimation) {
        shouldAnimateType = false;
      }
      const willAnimateViaParent = isInherited && variantDidChange;
      const needsAnimating = !willAnimateViaParent || handledRemovedValues;
      if (shouldAnimateType && needsAnimating) {
        animations2.push(...definitionList.map((animation) => ({
          animation,
          options: { type }
        })));
      }
    }
    if (removedKeys.size) {
      const fallbackAnimation = {};
      removedKeys.forEach((key) => {
        const fallbackTarget = visualElement.getBaseTarget(key);
        const motionValue2 = visualElement.getValue(key);
        if (motionValue2)
          motionValue2.liveStyle = true;
        fallbackAnimation[key] = fallbackTarget !== null && fallbackTarget !== void 0 ? fallbackTarget : null;
      });
      animations2.push({ animation: fallbackAnimation });
    }
    let shouldAnimate = Boolean(animations2.length);
    if (isInitialRender && (props.initial === false || props.initial === props.animate) && !visualElement.manuallyAnimateOnMount) {
      shouldAnimate = false;
    }
    isInitialRender = false;
    return shouldAnimate ? animate(animations2) : Promise.resolve();
  }
  function setActive(type, isActive) {
    var _a;
    if (state2[type].isActive === isActive)
      return Promise.resolve();
    (_a = visualElement.variantChildren) === null || _a === void 0 ? void 0 : _a.forEach((child) => {
      var _a2;
      return (_a2 = child.animationState) === null || _a2 === void 0 ? void 0 : _a2.setActive(type, isActive);
    });
    state2[type].isActive = isActive;
    const animations2 = animateChanges(type);
    for (const key in state2) {
      state2[key].protectedKeys = {};
    }
    return animations2;
  }
  return {
    animateChanges,
    setActive,
    setAnimateFunction,
    getState: () => state2,
    reset: () => {
      state2 = createState();
      isInitialRender = true;
    }
  };
}
function checkVariantsDidChange(prev, next) {
  if (typeof next === "string") {
    return next !== prev;
  } else if (Array.isArray(next)) {
    return !shallowCompare(next, prev);
  }
  return false;
}
function createTypeState(isActive = false) {
  return {
    isActive,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function createState() {
  return {
    animate: createTypeState(true),
    whileInView: createTypeState(),
    whileHover: createTypeState(),
    whileTap: createTypeState(),
    whileDrag: createTypeState(),
    whileFocus: createTypeState(),
    exit: createTypeState()
  };
}
class Feature {
  constructor(node) {
    this.isMounted = false;
    this.node = node;
  }
  update() {
  }
}
class AnimationFeature extends Feature {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(node) {
    super(node);
    node.animationState || (node.animationState = createAnimationState(node));
  }
  updateAnimationControlsSubscription() {
    const { animate } = this.node.getProps();
    if (isAnimationControls(animate)) {
      this.unmountControls = animate.subscribe(this.node);
    }
  }
  /**
   * Subscribe any provided AnimationControls to the component's VisualElement
   */
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate } = this.node.getProps();
    const { animate: prevAnimate } = this.node.prevProps || {};
    if (animate !== prevAnimate) {
      this.updateAnimationControlsSubscription();
    }
  }
  unmount() {
    var _a;
    this.node.animationState.reset();
    (_a = this.unmountControls) === null || _a === void 0 ? void 0 : _a.call(this);
  }
}
let id$1 = 0;
class ExitAnimationFeature extends Feature {
  constructor() {
    super(...arguments);
    this.id = id$1++;
  }
  update() {
    if (!this.node.presenceContext)
      return;
    const { isPresent, onExitComplete } = this.node.presenceContext;
    const { isPresent: prevIsPresent } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || isPresent === prevIsPresent) {
      return;
    }
    const exitAnimation = this.node.animationState.setActive("exit", !isPresent);
    if (onExitComplete && !isPresent) {
      exitAnimation.then(() => onExitComplete(this.id));
    }
  }
  mount() {
    const { register } = this.node.presenceContext || {};
    if (register) {
      this.unmount = register(this.id);
    }
  }
  unmount() {
  }
}
const animations = {
  animation: {
    Feature: AnimationFeature
  },
  exit: {
    Feature: ExitAnimationFeature
  }
};
function addDomEvent(target, eventName, handler, options = { passive: true }) {
  target.addEventListener(eventName, handler, options);
  return () => target.removeEventListener(eventName, handler);
}
function extractEventInfo(event) {
  return {
    point: {
      x: event.pageX,
      y: event.pageY
    }
  };
}
const addPointerInfo = (handler) => {
  return (event) => isPrimaryPointer(event) && handler(event, extractEventInfo(event));
};
function addPointerEvent(target, eventName, handler, options) {
  return addDomEvent(target, eventName, addPointerInfo(handler), options);
}
const distance = (a2, b2) => Math.abs(a2 - b2);
function distance2D(a2, b2) {
  const xDelta = distance(a2.x, b2.x);
  const yDelta = distance(a2.y, b2.y);
  return Math.sqrt(xDelta ** 2 + yDelta ** 2);
}
class PanSession {
  constructor(event, handlers, { transformPagePoint, contextWindow, dragSnapToOrigin = false } = {}) {
    this.startEvent = null;
    this.lastMoveEvent = null;
    this.lastMoveEventInfo = null;
    this.handlers = {};
    this.contextWindow = window;
    this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const info2 = getPanInfo(this.lastMoveEventInfo, this.history);
      const isPanStarted = this.startEvent !== null;
      const isDistancePastThreshold = distance2D(info2.offset, { x: 0, y: 0 }) >= 3;
      if (!isPanStarted && !isDistancePastThreshold)
        return;
      const { point: point2 } = info2;
      const { timestamp: timestamp2 } = frameData;
      this.history.push({ ...point2, timestamp: timestamp2 });
      const { onStart, onMove } = this.handlers;
      if (!isPanStarted) {
        onStart && onStart(this.lastMoveEvent, info2);
        this.startEvent = this.lastMoveEvent;
      }
      onMove && onMove(this.lastMoveEvent, info2);
    };
    this.handlePointerMove = (event2, info2) => {
      this.lastMoveEvent = event2;
      this.lastMoveEventInfo = transformPoint(info2, this.transformPagePoint);
      frame.update(this.updatePoint, true);
    };
    this.handlePointerUp = (event2, info2) => {
      this.end();
      const { onEnd, onSessionEnd, resumeAnimation } = this.handlers;
      if (this.dragSnapToOrigin)
        resumeAnimation && resumeAnimation();
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const panInfo = getPanInfo(event2.type === "pointercancel" ? this.lastMoveEventInfo : transformPoint(info2, this.transformPagePoint), this.history);
      if (this.startEvent && onEnd) {
        onEnd(event2, panInfo);
      }
      onSessionEnd && onSessionEnd(event2, panInfo);
    };
    if (!isPrimaryPointer(event))
      return;
    this.dragSnapToOrigin = dragSnapToOrigin;
    this.handlers = handlers;
    this.transformPagePoint = transformPagePoint;
    this.contextWindow = contextWindow || window;
    const info = extractEventInfo(event);
    const initialInfo = transformPoint(info, this.transformPagePoint);
    const { point } = initialInfo;
    const { timestamp } = frameData;
    this.history = [{ ...point, timestamp }];
    const { onSessionStart } = handlers;
    onSessionStart && onSessionStart(event, getPanInfo(initialInfo, this.history));
    this.removeListeners = pipe(addPointerEvent(this.contextWindow, "pointermove", this.handlePointerMove), addPointerEvent(this.contextWindow, "pointerup", this.handlePointerUp), addPointerEvent(this.contextWindow, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(handlers) {
    this.handlers = handlers;
  }
  end() {
    this.removeListeners && this.removeListeners();
    cancelFrame(this.updatePoint);
  }
}
function transformPoint(info, transformPagePoint) {
  return transformPagePoint ? { point: transformPagePoint(info.point) } : info;
}
function subtractPoint(a2, b2) {
  return { x: a2.x - b2.x, y: a2.y - b2.y };
}
function getPanInfo({ point }, history) {
  return {
    point,
    delta: subtractPoint(point, lastDevicePoint(history)),
    offset: subtractPoint(point, startDevicePoint(history)),
    velocity: getVelocity(history, 0.1)
  };
}
function startDevicePoint(history) {
  return history[0];
}
function lastDevicePoint(history) {
  return history[history.length - 1];
}
function getVelocity(history, timeDelta) {
  if (history.length < 2) {
    return { x: 0, y: 0 };
  }
  let i = history.length - 1;
  let timestampedPoint = null;
  const lastPoint = lastDevicePoint(history);
  while (i >= 0) {
    timestampedPoint = history[i];
    if (lastPoint.timestamp - timestampedPoint.timestamp > /* @__PURE__ */ secondsToMilliseconds(timeDelta)) {
      break;
    }
    i--;
  }
  if (!timestampedPoint) {
    return { x: 0, y: 0 };
  }
  const time2 = /* @__PURE__ */ millisecondsToSeconds(lastPoint.timestamp - timestampedPoint.timestamp);
  if (time2 === 0) {
    return { x: 0, y: 0 };
  }
  const currentVelocity = {
    x: (lastPoint.x - timestampedPoint.x) / time2,
    y: (lastPoint.y - timestampedPoint.y) / time2
  };
  if (currentVelocity.x === Infinity) {
    currentVelocity.x = 0;
  }
  if (currentVelocity.y === Infinity) {
    currentVelocity.y = 0;
  }
  return currentVelocity;
}
const SCALE_PRECISION = 1e-4;
const SCALE_MIN = 1 - SCALE_PRECISION;
const SCALE_MAX = 1 + SCALE_PRECISION;
const TRANSLATE_PRECISION = 0.01;
const TRANSLATE_MIN = 0 - TRANSLATE_PRECISION;
const TRANSLATE_MAX = 0 + TRANSLATE_PRECISION;
function calcLength(axis) {
  return axis.max - axis.min;
}
function isNear(value, target, maxDistance) {
  return Math.abs(value - target) <= maxDistance;
}
function calcAxisDelta(delta, source, target, origin = 0.5) {
  delta.origin = origin;
  delta.originPoint = mixNumber$1(source.min, source.max, delta.origin);
  delta.scale = calcLength(target) / calcLength(source);
  delta.translate = mixNumber$1(target.min, target.max, delta.origin) - delta.originPoint;
  if (delta.scale >= SCALE_MIN && delta.scale <= SCALE_MAX || isNaN(delta.scale)) {
    delta.scale = 1;
  }
  if (delta.translate >= TRANSLATE_MIN && delta.translate <= TRANSLATE_MAX || isNaN(delta.translate)) {
    delta.translate = 0;
  }
}
function calcBoxDelta(delta, source, target, origin) {
  calcAxisDelta(delta.x, source.x, target.x, origin ? origin.originX : void 0);
  calcAxisDelta(delta.y, source.y, target.y, origin ? origin.originY : void 0);
}
function calcRelativeAxis(target, relative, parent) {
  target.min = parent.min + relative.min;
  target.max = target.min + calcLength(relative);
}
function calcRelativeBox(target, relative, parent) {
  calcRelativeAxis(target.x, relative.x, parent.x);
  calcRelativeAxis(target.y, relative.y, parent.y);
}
function calcRelativeAxisPosition(target, layout2, parent) {
  target.min = layout2.min - parent.min;
  target.max = target.min + calcLength(layout2);
}
function calcRelativePosition(target, layout2, parent) {
  calcRelativeAxisPosition(target.x, layout2.x, parent.x);
  calcRelativeAxisPosition(target.y, layout2.y, parent.y);
}
function applyConstraints(point, { min, max }, elastic) {
  if (min !== void 0 && point < min) {
    point = elastic ? mixNumber$1(min, point, elastic.min) : Math.max(point, min);
  } else if (max !== void 0 && point > max) {
    point = elastic ? mixNumber$1(max, point, elastic.max) : Math.min(point, max);
  }
  return point;
}
function calcRelativeAxisConstraints(axis, min, max) {
  return {
    min: min !== void 0 ? axis.min + min : void 0,
    max: max !== void 0 ? axis.max + max - (axis.max - axis.min) : void 0
  };
}
function calcRelativeConstraints(layoutBox, { top, left, bottom, right }) {
  return {
    x: calcRelativeAxisConstraints(layoutBox.x, left, right),
    y: calcRelativeAxisConstraints(layoutBox.y, top, bottom)
  };
}
function calcViewportAxisConstraints(layoutAxis, constraintsAxis) {
  let min = constraintsAxis.min - layoutAxis.min;
  let max = constraintsAxis.max - layoutAxis.max;
  if (constraintsAxis.max - constraintsAxis.min < layoutAxis.max - layoutAxis.min) {
    [min, max] = [max, min];
  }
  return { min, max };
}
function calcViewportConstraints(layoutBox, constraintsBox) {
  return {
    x: calcViewportAxisConstraints(layoutBox.x, constraintsBox.x),
    y: calcViewportAxisConstraints(layoutBox.y, constraintsBox.y)
  };
}
function calcOrigin(source, target) {
  let origin = 0.5;
  const sourceLength = calcLength(source);
  const targetLength = calcLength(target);
  if (targetLength > sourceLength) {
    origin = /* @__PURE__ */ progress(target.min, target.max - sourceLength, source.min);
  } else if (sourceLength > targetLength) {
    origin = /* @__PURE__ */ progress(source.min, source.max - targetLength, target.min);
  }
  return clamp(0, 1, origin);
}
function rebaseAxisConstraints(layout2, constraints) {
  const relativeConstraints = {};
  if (constraints.min !== void 0) {
    relativeConstraints.min = constraints.min - layout2.min;
  }
  if (constraints.max !== void 0) {
    relativeConstraints.max = constraints.max - layout2.min;
  }
  return relativeConstraints;
}
const defaultElastic = 0.35;
function resolveDragElastic(dragElastic = defaultElastic) {
  if (dragElastic === false) {
    dragElastic = 0;
  } else if (dragElastic === true) {
    dragElastic = defaultElastic;
  }
  return {
    x: resolveAxisElastic(dragElastic, "left", "right"),
    y: resolveAxisElastic(dragElastic, "top", "bottom")
  };
}
function resolveAxisElastic(dragElastic, minLabel, maxLabel) {
  return {
    min: resolvePointElastic(dragElastic, minLabel),
    max: resolvePointElastic(dragElastic, maxLabel)
  };
}
function resolvePointElastic(dragElastic, label) {
  return typeof dragElastic === "number" ? dragElastic : dragElastic[label] || 0;
}
const createAxisDelta = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
});
const createDelta = () => ({
  x: createAxisDelta(),
  y: createAxisDelta()
});
const createAxis = () => ({ min: 0, max: 0 });
const createBox = () => ({
  x: createAxis(),
  y: createAxis()
});
function eachAxis(callback) {
  return [callback("x"), callback("y")];
}
function convertBoundingBoxToBox({ top, left, right, bottom }) {
  return {
    x: { min: left, max: right },
    y: { min: top, max: bottom }
  };
}
function convertBoxToBoundingBox({ x: x2, y: y2 }) {
  return { top: y2.min, right: x2.max, bottom: y2.max, left: x2.min };
}
function transformBoxPoints(point, transformPoint2) {
  if (!transformPoint2)
    return point;
  const topLeft = transformPoint2({ x: point.left, y: point.top });
  const bottomRight = transformPoint2({ x: point.right, y: point.bottom });
  return {
    top: topLeft.y,
    left: topLeft.x,
    bottom: bottomRight.y,
    right: bottomRight.x
  };
}
function isIdentityScale(scale2) {
  return scale2 === void 0 || scale2 === 1;
}
function hasScale({ scale: scale2, scaleX, scaleY }) {
  return !isIdentityScale(scale2) || !isIdentityScale(scaleX) || !isIdentityScale(scaleY);
}
function hasTransform(values) {
  return hasScale(values) || has2DTranslate(values) || values.z || values.rotate || values.rotateX || values.rotateY || values.skewX || values.skewY;
}
function has2DTranslate(values) {
  return is2DTranslate(values.x) || is2DTranslate(values.y);
}
function is2DTranslate(value) {
  return value && value !== "0%";
}
function scalePoint(point, scale2, originPoint) {
  const distanceFromOrigin = point - originPoint;
  const scaled = scale2 * distanceFromOrigin;
  return originPoint + scaled;
}
function applyPointDelta(point, translate, scale2, originPoint, boxScale) {
  if (boxScale !== void 0) {
    point = scalePoint(point, boxScale, originPoint);
  }
  return scalePoint(point, scale2, originPoint) + translate;
}
function applyAxisDelta(axis, translate = 0, scale2 = 1, originPoint, boxScale) {
  axis.min = applyPointDelta(axis.min, translate, scale2, originPoint, boxScale);
  axis.max = applyPointDelta(axis.max, translate, scale2, originPoint, boxScale);
}
function applyBoxDelta(box, { x: x2, y: y2 }) {
  applyAxisDelta(box.x, x2.translate, x2.scale, x2.originPoint);
  applyAxisDelta(box.y, y2.translate, y2.scale, y2.originPoint);
}
const TREE_SCALE_SNAP_MIN = 0.999999999999;
const TREE_SCALE_SNAP_MAX = 1.0000000000001;
function applyTreeDeltas(box, treeScale, treePath, isSharedTransition = false) {
  const treeLength = treePath.length;
  if (!treeLength)
    return;
  treeScale.x = treeScale.y = 1;
  let node;
  let delta;
  for (let i = 0; i < treeLength; i++) {
    node = treePath[i];
    delta = node.projectionDelta;
    const { visualElement } = node.options;
    if (visualElement && visualElement.props.style && visualElement.props.style.display === "contents") {
      continue;
    }
    if (isSharedTransition && node.options.layoutScroll && node.scroll && node !== node.root) {
      transformBox(box, {
        x: -node.scroll.offset.x,
        y: -node.scroll.offset.y
      });
    }
    if (delta) {
      treeScale.x *= delta.x.scale;
      treeScale.y *= delta.y.scale;
      applyBoxDelta(box, delta);
    }
    if (isSharedTransition && hasTransform(node.latestValues)) {
      transformBox(box, node.latestValues);
    }
  }
  if (treeScale.x < TREE_SCALE_SNAP_MAX && treeScale.x > TREE_SCALE_SNAP_MIN) {
    treeScale.x = 1;
  }
  if (treeScale.y < TREE_SCALE_SNAP_MAX && treeScale.y > TREE_SCALE_SNAP_MIN) {
    treeScale.y = 1;
  }
}
function translateAxis(axis, distance2) {
  axis.min = axis.min + distance2;
  axis.max = axis.max + distance2;
}
function transformAxis(axis, axisTranslate, axisScale, boxScale, axisOrigin = 0.5) {
  const originPoint = mixNumber$1(axis.min, axis.max, axisOrigin);
  applyAxisDelta(axis, axisTranslate, axisScale, originPoint, boxScale);
}
function transformBox(box, transform) {
  transformAxis(box.x, transform.x, transform.scaleX, transform.scale, transform.originX);
  transformAxis(box.y, transform.y, transform.scaleY, transform.scale, transform.originY);
}
function measureViewportBox(instance, transformPoint2) {
  return convertBoundingBoxToBox(transformBoxPoints(instance.getBoundingClientRect(), transformPoint2));
}
function measurePageBox(element, rootProjectionNode2, transformPagePoint) {
  const viewportBox = measureViewportBox(element, transformPagePoint);
  const { scroll } = rootProjectionNode2;
  if (scroll) {
    translateAxis(viewportBox.x, scroll.offset.x);
    translateAxis(viewportBox.y, scroll.offset.y);
  }
  return viewportBox;
}
const getContextWindow = ({ current }) => {
  return current ? current.ownerDocument.defaultView : null;
};
const elementDragControls = /* @__PURE__ */ new WeakMap();
class VisualElementDragControls {
  constructor(visualElement) {
    this.openDragLock = null;
    this.isDragging = false;
    this.currentDirection = null;
    this.originPoint = { x: 0, y: 0 };
    this.constraints = false;
    this.hasMutatedConstraints = false;
    this.elastic = createBox();
    this.visualElement = visualElement;
  }
  start(originEvent, { snapToCursor = false } = {}) {
    const { presenceContext } = this.visualElement;
    if (presenceContext && presenceContext.isPresent === false)
      return;
    const onSessionStart = (event) => {
      const { dragSnapToOrigin: dragSnapToOrigin2 } = this.getProps();
      dragSnapToOrigin2 ? this.pauseAnimation() : this.stopAnimation();
      if (snapToCursor) {
        this.snapToCursor(extractEventInfo(event).point);
      }
    };
    const onStart = (event, info) => {
      const { drag: drag2, dragPropagation, onDragStart } = this.getProps();
      if (drag2 && !dragPropagation) {
        if (this.openDragLock)
          this.openDragLock();
        this.openDragLock = setDragLock(drag2);
        if (!this.openDragLock)
          return;
      }
      this.isDragging = true;
      this.currentDirection = null;
      this.resolveConstraints();
      if (this.visualElement.projection) {
        this.visualElement.projection.isAnimationBlocked = true;
        this.visualElement.projection.target = void 0;
      }
      eachAxis((axis) => {
        let current = this.getAxisMotionValue(axis).get() || 0;
        if (percent.test(current)) {
          const { projection } = this.visualElement;
          if (projection && projection.layout) {
            const measuredAxis = projection.layout.layoutBox[axis];
            if (measuredAxis) {
              const length = calcLength(measuredAxis);
              current = length * (parseFloat(current) / 100);
            }
          }
        }
        this.originPoint[axis] = current;
      });
      if (onDragStart) {
        frame.postRender(() => onDragStart(event, info));
      }
      addValueToWillChange(this.visualElement, "transform");
      const { animationState } = this.visualElement;
      animationState && animationState.setActive("whileDrag", true);
    };
    const onMove = (event, info) => {
      const { dragPropagation, dragDirectionLock, onDirectionLock, onDrag } = this.getProps();
      if (!dragPropagation && !this.openDragLock)
        return;
      const { offset } = info;
      if (dragDirectionLock && this.currentDirection === null) {
        this.currentDirection = getCurrentDirection(offset);
        if (this.currentDirection !== null) {
          onDirectionLock && onDirectionLock(this.currentDirection);
        }
        return;
      }
      this.updateAxis("x", info.point, offset);
      this.updateAxis("y", info.point, offset);
      this.visualElement.render();
      onDrag && onDrag(event, info);
    };
    const onSessionEnd = (event, info) => this.stop(event, info);
    const resumeAnimation = () => eachAxis((axis) => {
      var _a;
      return this.getAnimationState(axis) === "paused" && ((_a = this.getAxisMotionValue(axis).animation) === null || _a === void 0 ? void 0 : _a.play());
    });
    const { dragSnapToOrigin } = this.getProps();
    this.panSession = new PanSession(originEvent, {
      onSessionStart,
      onStart,
      onMove,
      onSessionEnd,
      resumeAnimation
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin,
      contextWindow: getContextWindow(this.visualElement)
    });
  }
  stop(event, info) {
    const isDragging2 = this.isDragging;
    this.cancel();
    if (!isDragging2)
      return;
    const { velocity } = info;
    this.startAnimation(velocity);
    const { onDragEnd } = this.getProps();
    if (onDragEnd) {
      frame.postRender(() => onDragEnd(event, info));
    }
  }
  cancel() {
    this.isDragging = false;
    const { projection, animationState } = this.visualElement;
    if (projection) {
      projection.isAnimationBlocked = false;
    }
    this.panSession && this.panSession.end();
    this.panSession = void 0;
    const { dragPropagation } = this.getProps();
    if (!dragPropagation && this.openDragLock) {
      this.openDragLock();
      this.openDragLock = null;
    }
    animationState && animationState.setActive("whileDrag", false);
  }
  updateAxis(axis, _point, offset) {
    const { drag: drag2 } = this.getProps();
    if (!offset || !shouldDrag(axis, drag2, this.currentDirection))
      return;
    const axisValue = this.getAxisMotionValue(axis);
    let next = this.originPoint[axis] + offset[axis];
    if (this.constraints && this.constraints[axis]) {
      next = applyConstraints(next, this.constraints[axis], this.elastic[axis]);
    }
    axisValue.set(next);
  }
  resolveConstraints() {
    var _a;
    const { dragConstraints, dragElastic } = this.getProps();
    const layout2 = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(false) : (_a = this.visualElement.projection) === null || _a === void 0 ? void 0 : _a.layout;
    const prevConstraints = this.constraints;
    if (dragConstraints && isRefObject(dragConstraints)) {
      if (!this.constraints) {
        this.constraints = this.resolveRefConstraints();
      }
    } else {
      if (dragConstraints && layout2) {
        this.constraints = calcRelativeConstraints(layout2.layoutBox, dragConstraints);
      } else {
        this.constraints = false;
      }
    }
    this.elastic = resolveDragElastic(dragElastic);
    if (prevConstraints !== this.constraints && layout2 && this.constraints && !this.hasMutatedConstraints) {
      eachAxis((axis) => {
        if (this.constraints !== false && this.getAxisMotionValue(axis)) {
          this.constraints[axis] = rebaseAxisConstraints(layout2.layoutBox[axis], this.constraints[axis]);
        }
      });
    }
  }
  resolveRefConstraints() {
    const { dragConstraints: constraints, onMeasureDragConstraints } = this.getProps();
    if (!constraints || !isRefObject(constraints))
      return false;
    const constraintsElement = constraints.current;
    const { projection } = this.visualElement;
    if (!projection || !projection.layout)
      return false;
    const constraintsBox = measurePageBox(constraintsElement, projection.root, this.visualElement.getTransformPagePoint());
    let measuredConstraints = calcViewportConstraints(projection.layout.layoutBox, constraintsBox);
    if (onMeasureDragConstraints) {
      const userConstraints = onMeasureDragConstraints(convertBoxToBoundingBox(measuredConstraints));
      this.hasMutatedConstraints = !!userConstraints;
      if (userConstraints) {
        measuredConstraints = convertBoundingBoxToBox(userConstraints);
      }
    }
    return measuredConstraints;
  }
  startAnimation(velocity) {
    const { drag: drag2, dragMomentum, dragElastic, dragTransition, dragSnapToOrigin, onDragTransitionEnd } = this.getProps();
    const constraints = this.constraints || {};
    const momentumAnimations = eachAxis((axis) => {
      if (!shouldDrag(axis, drag2, this.currentDirection)) {
        return;
      }
      let transition = constraints && constraints[axis] || {};
      if (dragSnapToOrigin)
        transition = { min: 0, max: 0 };
      const bounceStiffness = dragElastic ? 200 : 1e6;
      const bounceDamping = dragElastic ? 40 : 1e7;
      const inertia2 = {
        type: "inertia",
        velocity: dragMomentum ? velocity[axis] : 0,
        bounceStiffness,
        bounceDamping,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...dragTransition,
        ...transition
      };
      return this.startAxisValueAnimation(axis, inertia2);
    });
    return Promise.all(momentumAnimations).then(onDragTransitionEnd);
  }
  startAxisValueAnimation(axis, transition) {
    const axisValue = this.getAxisMotionValue(axis);
    addValueToWillChange(this.visualElement, axis);
    return axisValue.start(animateMotionValue(axis, axisValue, 0, transition, this.visualElement, false));
  }
  stopAnimation() {
    eachAxis((axis) => this.getAxisMotionValue(axis).stop());
  }
  pauseAnimation() {
    eachAxis((axis) => {
      var _a;
      return (_a = this.getAxisMotionValue(axis).animation) === null || _a === void 0 ? void 0 : _a.pause();
    });
  }
  getAnimationState(axis) {
    var _a;
    return (_a = this.getAxisMotionValue(axis).animation) === null || _a === void 0 ? void 0 : _a.state;
  }
  /**
   * Drag works differently depending on which props are provided.
   *
   * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
   * - Otherwise, we apply the delta to the x/y motion values.
   */
  getAxisMotionValue(axis) {
    const dragKey = `_drag${axis.toUpperCase()}`;
    const props = this.visualElement.getProps();
    const externalMotionValue = props[dragKey];
    return externalMotionValue ? externalMotionValue : this.visualElement.getValue(axis, (props.initial ? props.initial[axis] : void 0) || 0);
  }
  snapToCursor(point) {
    eachAxis((axis) => {
      const { drag: drag2 } = this.getProps();
      if (!shouldDrag(axis, drag2, this.currentDirection))
        return;
      const { projection } = this.visualElement;
      const axisValue = this.getAxisMotionValue(axis);
      if (projection && projection.layout) {
        const { min, max } = projection.layout.layoutBox[axis];
        axisValue.set(point[axis] - mixNumber$1(min, max, 0.5));
      }
    });
  }
  /**
   * When the viewport resizes we want to check if the measured constraints
   * have changed and, if so, reposition the element within those new constraints
   * relative to where it was before the resize.
   */
  scalePositionWithinConstraints() {
    if (!this.visualElement.current)
      return;
    const { drag: drag2, dragConstraints } = this.getProps();
    const { projection } = this.visualElement;
    if (!isRefObject(dragConstraints) || !projection || !this.constraints)
      return;
    this.stopAnimation();
    const boxProgress = { x: 0, y: 0 };
    eachAxis((axis) => {
      const axisValue = this.getAxisMotionValue(axis);
      if (axisValue && this.constraints !== false) {
        const latest = axisValue.get();
        boxProgress[axis] = calcOrigin({ min: latest, max: latest }, this.constraints[axis]);
      }
    });
    const { transformTemplate } = this.visualElement.getProps();
    this.visualElement.current.style.transform = transformTemplate ? transformTemplate({}, "") : "none";
    projection.root && projection.root.updateScroll();
    projection.updateLayout();
    this.resolveConstraints();
    eachAxis((axis) => {
      if (!shouldDrag(axis, drag2, null))
        return;
      const axisValue = this.getAxisMotionValue(axis);
      const { min, max } = this.constraints[axis];
      axisValue.set(mixNumber$1(min, max, boxProgress[axis]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    elementDragControls.set(this.visualElement, this);
    const element = this.visualElement.current;
    const stopPointerListener = addPointerEvent(element, "pointerdown", (event) => {
      const { drag: drag2, dragListener = true } = this.getProps();
      drag2 && dragListener && this.start(event);
    });
    const measureDragConstraints = () => {
      const { dragConstraints } = this.getProps();
      if (isRefObject(dragConstraints) && dragConstraints.current) {
        this.constraints = this.resolveRefConstraints();
      }
    };
    const { projection } = this.visualElement;
    const stopMeasureLayoutListener = projection.addEventListener("measure", measureDragConstraints);
    if (projection && !projection.layout) {
      projection.root && projection.root.updateScroll();
      projection.updateLayout();
    }
    frame.read(measureDragConstraints);
    const stopResizeListener = addDomEvent(window, "resize", () => this.scalePositionWithinConstraints());
    const stopLayoutUpdateListener = projection.addEventListener("didUpdate", (({ delta, hasLayoutChanged }) => {
      if (this.isDragging && hasLayoutChanged) {
        eachAxis((axis) => {
          const motionValue2 = this.getAxisMotionValue(axis);
          if (!motionValue2)
            return;
          this.originPoint[axis] += delta[axis].translate;
          motionValue2.set(motionValue2.get() + delta[axis].translate);
        });
        this.visualElement.render();
      }
    }));
    return () => {
      stopResizeListener();
      stopPointerListener();
      stopMeasureLayoutListener();
      stopLayoutUpdateListener && stopLayoutUpdateListener();
    };
  }
  getProps() {
    const props = this.visualElement.getProps();
    const { drag: drag2 = false, dragDirectionLock = false, dragPropagation = false, dragConstraints = false, dragElastic = defaultElastic, dragMomentum = true } = props;
    return {
      ...props,
      drag: drag2,
      dragDirectionLock,
      dragPropagation,
      dragConstraints,
      dragElastic,
      dragMomentum
    };
  }
}
function shouldDrag(direction, drag2, currentDirection) {
  return (drag2 === true || drag2 === direction) && (currentDirection === null || currentDirection === direction);
}
function getCurrentDirection(offset, lockThreshold = 10) {
  let direction = null;
  if (Math.abs(offset.y) > lockThreshold) {
    direction = "y";
  } else if (Math.abs(offset.x) > lockThreshold) {
    direction = "x";
  }
  return direction;
}
class DragGesture extends Feature {
  constructor(node) {
    super(node);
    this.removeGroupControls = noop;
    this.removeListeners = noop;
    this.controls = new VisualElementDragControls(node);
  }
  mount() {
    const { dragControls } = this.node.getProps();
    if (dragControls) {
      this.removeGroupControls = dragControls.subscribe(this.controls);
    }
    this.removeListeners = this.controls.addListeners() || noop;
  }
  unmount() {
    this.removeGroupControls();
    this.removeListeners();
  }
}
const asyncHandler = (handler) => (event, info) => {
  if (handler) {
    frame.postRender(() => handler(event, info));
  }
};
class PanGesture extends Feature {
  constructor() {
    super(...arguments);
    this.removePointerDownListener = noop;
  }
  onPointerDown(pointerDownEvent) {
    this.session = new PanSession(pointerDownEvent, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: getContextWindow(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart, onPanStart, onPan, onPanEnd } = this.node.getProps();
    return {
      onSessionStart: asyncHandler(onPanSessionStart),
      onStart: asyncHandler(onPanStart),
      onMove: onPan,
      onEnd: (event, info) => {
        delete this.session;
        if (onPanEnd) {
          frame.postRender(() => onPanEnd(event, info));
        }
      }
    };
  }
  mount() {
    this.removePointerDownListener = addPointerEvent(this.node.current, "pointerdown", (event) => this.onPointerDown(event));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener();
    this.session && this.session.end();
  }
}
const globalProjectionState = {
  /**
   * Global flag as to whether the tree has animated since the last time
   * we resized the window
   */
  hasAnimatedSinceResize: true,
  /**
   * We set this to true once, on the first update. Any nodes added to the tree beyond that
   * update will be given a `data-projection-id` attribute.
   */
  hasEverUpdated: false
};
function pixelsToPercent(pixels, axis) {
  if (axis.max === axis.min)
    return 0;
  return pixels / (axis.max - axis.min) * 100;
}
const correctBorderRadius = {
  correct: (latest, node) => {
    if (!node.target)
      return latest;
    if (typeof latest === "string") {
      if (px.test(latest)) {
        latest = parseFloat(latest);
      } else {
        return latest;
      }
    }
    const x2 = pixelsToPercent(latest, node.target.x);
    const y2 = pixelsToPercent(latest, node.target.y);
    return `${x2}% ${y2}%`;
  }
};
const correctBoxShadow = {
  correct: (latest, { treeScale, projectionDelta }) => {
    const original = latest;
    const shadow = complex.parse(latest);
    if (shadow.length > 5)
      return original;
    const template = complex.createTransformer(latest);
    const offset = typeof shadow[0] !== "number" ? 1 : 0;
    const xScale = projectionDelta.x.scale * treeScale.x;
    const yScale = projectionDelta.y.scale * treeScale.y;
    shadow[0 + offset] /= xScale;
    shadow[1 + offset] /= yScale;
    const averageScale = mixNumber$1(xScale, yScale, 0.5);
    if (typeof shadow[2 + offset] === "number")
      shadow[2 + offset] /= averageScale;
    if (typeof shadow[3 + offset] === "number")
      shadow[3 + offset] /= averageScale;
    return template(shadow);
  }
};
class MeasureLayoutWithContext extends reactExports.Component {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement, layoutGroup, switchLayoutGroup, layoutId } = this.props;
    const { projection } = visualElement;
    addScaleCorrector(defaultScaleCorrectors);
    if (projection) {
      if (layoutGroup.group)
        layoutGroup.group.add(projection);
      if (switchLayoutGroup && switchLayoutGroup.register && layoutId) {
        switchLayoutGroup.register(projection);
      }
      projection.root.didUpdate();
      projection.addEventListener("animationComplete", () => {
        this.safeToRemove();
      });
      projection.setOptions({
        ...projection.options,
        onExitComplete: () => this.safeToRemove()
      });
    }
    globalProjectionState.hasEverUpdated = true;
  }
  getSnapshotBeforeUpdate(prevProps) {
    const { layoutDependency, visualElement, drag: drag2, isPresent } = this.props;
    const projection = visualElement.projection;
    if (!projection)
      return null;
    projection.isPresent = isPresent;
    if (drag2 || prevProps.layoutDependency !== layoutDependency || layoutDependency === void 0) {
      projection.willUpdate();
    } else {
      this.safeToRemove();
    }
    if (prevProps.isPresent !== isPresent) {
      if (isPresent) {
        projection.promote();
      } else if (!projection.relegate()) {
        frame.postRender(() => {
          const stack = projection.getStack();
          if (!stack || !stack.members.length) {
            this.safeToRemove();
          }
        });
      }
    }
    return null;
  }
  componentDidUpdate() {
    const { projection } = this.props.visualElement;
    if (projection) {
      projection.root.didUpdate();
      microtask.postRender(() => {
        if (!projection.currentAnimation && projection.isLead()) {
          this.safeToRemove();
        }
      });
    }
  }
  componentWillUnmount() {
    const { visualElement, layoutGroup, switchLayoutGroup: promoteContext } = this.props;
    const { projection } = visualElement;
    if (projection) {
      projection.scheduleCheckAfterUnmount();
      if (layoutGroup && layoutGroup.group)
        layoutGroup.group.remove(projection);
      if (promoteContext && promoteContext.deregister)
        promoteContext.deregister(projection);
    }
  }
  safeToRemove() {
    const { safeToRemove } = this.props;
    safeToRemove && safeToRemove();
  }
  render() {
    return null;
  }
}
function MeasureLayout(props) {
  const [isPresent, safeToRemove] = usePresence();
  const layoutGroup = reactExports.useContext(LayoutGroupContext);
  return jsxRuntimeExports.jsx(MeasureLayoutWithContext, { ...props, layoutGroup, switchLayoutGroup: reactExports.useContext(SwitchLayoutGroupContext), isPresent, safeToRemove });
}
const defaultScaleCorrectors = {
  borderRadius: {
    ...correctBorderRadius,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: correctBorderRadius,
  borderTopRightRadius: correctBorderRadius,
  borderBottomLeftRadius: correctBorderRadius,
  borderBottomRightRadius: correctBorderRadius,
  boxShadow: correctBoxShadow
};
function animateSingleValue(value, keyframes2, options) {
  const motionValue$1 = isMotionValue(value) ? value : motionValue(value);
  motionValue$1.start(animateMotionValue("", motionValue$1, keyframes2, options));
  return motionValue$1.animation;
}
function isSVGElement(element) {
  return element instanceof SVGElement && element.tagName !== "svg";
}
const compareByDepth = (a2, b2) => a2.depth - b2.depth;
class FlatTree {
  constructor() {
    this.children = [];
    this.isDirty = false;
  }
  add(child) {
    addUniqueItem(this.children, child);
    this.isDirty = true;
  }
  remove(child) {
    removeItem(this.children, child);
    this.isDirty = true;
  }
  forEach(callback) {
    this.isDirty && this.children.sort(compareByDepth);
    this.isDirty = false;
    this.children.forEach(callback);
  }
}
function delay(callback, timeout) {
  const start = time.now();
  const checkElapsed = ({ timestamp }) => {
    const elapsed = timestamp - start;
    if (elapsed >= timeout) {
      cancelFrame(checkElapsed);
      callback(elapsed - timeout);
    }
  };
  frame.read(checkElapsed, true);
  return () => cancelFrame(checkElapsed);
}
const borders = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"];
const numBorders = borders.length;
const asNumber = (value) => typeof value === "string" ? parseFloat(value) : value;
const isPx = (value) => typeof value === "number" || px.test(value);
function mixValues(target, follow, lead, progress2, shouldCrossfadeOpacity, isOnlyMember) {
  if (shouldCrossfadeOpacity) {
    target.opacity = mixNumber$1(
      0,
      // TODO Reinstate this if only child
      lead.opacity !== void 0 ? lead.opacity : 1,
      easeCrossfadeIn(progress2)
    );
    target.opacityExit = mixNumber$1(follow.opacity !== void 0 ? follow.opacity : 1, 0, easeCrossfadeOut(progress2));
  } else if (isOnlyMember) {
    target.opacity = mixNumber$1(follow.opacity !== void 0 ? follow.opacity : 1, lead.opacity !== void 0 ? lead.opacity : 1, progress2);
  }
  for (let i = 0; i < numBorders; i++) {
    const borderLabel = `border${borders[i]}Radius`;
    let followRadius = getRadius(follow, borderLabel);
    let leadRadius = getRadius(lead, borderLabel);
    if (followRadius === void 0 && leadRadius === void 0)
      continue;
    followRadius || (followRadius = 0);
    leadRadius || (leadRadius = 0);
    const canMix = followRadius === 0 || leadRadius === 0 || isPx(followRadius) === isPx(leadRadius);
    if (canMix) {
      target[borderLabel] = Math.max(mixNumber$1(asNumber(followRadius), asNumber(leadRadius), progress2), 0);
      if (percent.test(leadRadius) || percent.test(followRadius)) {
        target[borderLabel] += "%";
      }
    } else {
      target[borderLabel] = leadRadius;
    }
  }
  if (follow.rotate || lead.rotate) {
    target.rotate = mixNumber$1(follow.rotate || 0, lead.rotate || 0, progress2);
  }
}
function getRadius(values, radiusName) {
  return values[radiusName] !== void 0 ? values[radiusName] : values.borderRadius;
}
const easeCrossfadeIn = /* @__PURE__ */ compress(0, 0.5, circOut);
const easeCrossfadeOut = /* @__PURE__ */ compress(0.5, 0.95, noop);
function compress(min, max, easing) {
  return (p2) => {
    if (p2 < min)
      return 0;
    if (p2 > max)
      return 1;
    return easing(/* @__PURE__ */ progress(min, max, p2));
  };
}
function copyAxisInto(axis, originAxis) {
  axis.min = originAxis.min;
  axis.max = originAxis.max;
}
function copyBoxInto(box, originBox) {
  copyAxisInto(box.x, originBox.x);
  copyAxisInto(box.y, originBox.y);
}
function copyAxisDeltaInto(delta, originDelta) {
  delta.translate = originDelta.translate;
  delta.scale = originDelta.scale;
  delta.originPoint = originDelta.originPoint;
  delta.origin = originDelta.origin;
}
function removePointDelta(point, translate, scale2, originPoint, boxScale) {
  point -= translate;
  point = scalePoint(point, 1 / scale2, originPoint);
  if (boxScale !== void 0) {
    point = scalePoint(point, 1 / boxScale, originPoint);
  }
  return point;
}
function removeAxisDelta(axis, translate = 0, scale2 = 1, origin = 0.5, boxScale, originAxis = axis, sourceAxis = axis) {
  if (percent.test(translate)) {
    translate = parseFloat(translate);
    const relativeProgress = mixNumber$1(sourceAxis.min, sourceAxis.max, translate / 100);
    translate = relativeProgress - sourceAxis.min;
  }
  if (typeof translate !== "number")
    return;
  let originPoint = mixNumber$1(originAxis.min, originAxis.max, origin);
  if (axis === originAxis)
    originPoint -= translate;
  axis.min = removePointDelta(axis.min, translate, scale2, originPoint, boxScale);
  axis.max = removePointDelta(axis.max, translate, scale2, originPoint, boxScale);
}
function removeAxisTransforms(axis, transforms, [key, scaleKey, originKey], origin, sourceAxis) {
  removeAxisDelta(axis, transforms[key], transforms[scaleKey], transforms[originKey], transforms.scale, origin, sourceAxis);
}
const xKeys = ["x", "scaleX", "originX"];
const yKeys = ["y", "scaleY", "originY"];
function removeBoxTransforms(box, transforms, originBox, sourceBox) {
  removeAxisTransforms(box.x, transforms, xKeys, originBox ? originBox.x : void 0, sourceBox ? sourceBox.x : void 0);
  removeAxisTransforms(box.y, transforms, yKeys, originBox ? originBox.y : void 0, sourceBox ? sourceBox.y : void 0);
}
function isAxisDeltaZero(delta) {
  return delta.translate === 0 && delta.scale === 1;
}
function isDeltaZero(delta) {
  return isAxisDeltaZero(delta.x) && isAxisDeltaZero(delta.y);
}
function axisEquals(a2, b2) {
  return a2.min === b2.min && a2.max === b2.max;
}
function boxEquals(a2, b2) {
  return axisEquals(a2.x, b2.x) && axisEquals(a2.y, b2.y);
}
function axisEqualsRounded(a2, b2) {
  return Math.round(a2.min) === Math.round(b2.min) && Math.round(a2.max) === Math.round(b2.max);
}
function boxEqualsRounded(a2, b2) {
  return axisEqualsRounded(a2.x, b2.x) && axisEqualsRounded(a2.y, b2.y);
}
function aspectRatio(box) {
  return calcLength(box.x) / calcLength(box.y);
}
function axisDeltaEquals(a2, b2) {
  return a2.translate === b2.translate && a2.scale === b2.scale && a2.originPoint === b2.originPoint;
}
class NodeStack {
  constructor() {
    this.members = [];
  }
  add(node) {
    addUniqueItem(this.members, node);
    node.scheduleRender();
  }
  remove(node) {
    removeItem(this.members, node);
    if (node === this.prevLead) {
      this.prevLead = void 0;
    }
    if (node === this.lead) {
      const prevLead = this.members[this.members.length - 1];
      if (prevLead) {
        this.promote(prevLead);
      }
    }
  }
  relegate(node) {
    const indexOfNode = this.members.findIndex((member) => node === member);
    if (indexOfNode === 0)
      return false;
    let prevLead;
    for (let i = indexOfNode; i >= 0; i--) {
      const member = this.members[i];
      if (member.isPresent !== false) {
        prevLead = member;
        break;
      }
    }
    if (prevLead) {
      this.promote(prevLead);
      return true;
    } else {
      return false;
    }
  }
  promote(node, preserveFollowOpacity) {
    const prevLead = this.lead;
    if (node === prevLead)
      return;
    this.prevLead = prevLead;
    this.lead = node;
    node.show();
    if (prevLead) {
      prevLead.instance && prevLead.scheduleRender();
      node.scheduleRender();
      node.resumeFrom = prevLead;
      if (preserveFollowOpacity) {
        node.resumeFrom.preserveOpacity = true;
      }
      if (prevLead.snapshot) {
        node.snapshot = prevLead.snapshot;
        node.snapshot.latestValues = prevLead.animationValues || prevLead.latestValues;
      }
      if (node.root && node.root.isUpdating) {
        node.isLayoutDirty = true;
      }
      const { crossfade } = node.options;
      if (crossfade === false) {
        prevLead.hide();
      }
    }
  }
  exitAnimationComplete() {
    this.members.forEach((node) => {
      const { options, resumingFrom } = node;
      options.onExitComplete && options.onExitComplete();
      if (resumingFrom) {
        resumingFrom.options.onExitComplete && resumingFrom.options.onExitComplete();
      }
    });
  }
  scheduleRender() {
    this.members.forEach((node) => {
      node.instance && node.scheduleRender(false);
    });
  }
  /**
   * Clear any leads that have been removed this render to prevent them from being
   * used in future animations and to prevent memory leaks
   */
  removeLeadSnapshot() {
    if (this.lead && this.lead.snapshot) {
      this.lead.snapshot = void 0;
    }
  }
}
function buildProjectionTransform(delta, treeScale, latestTransform) {
  let transform = "";
  const xTranslate = delta.x.translate / treeScale.x;
  const yTranslate = delta.y.translate / treeScale.y;
  const zTranslate = (latestTransform === null || latestTransform === void 0 ? void 0 : latestTransform.z) || 0;
  if (xTranslate || yTranslate || zTranslate) {
    transform = `translate3d(${xTranslate}px, ${yTranslate}px, ${zTranslate}px) `;
  }
  if (treeScale.x !== 1 || treeScale.y !== 1) {
    transform += `scale(${1 / treeScale.x}, ${1 / treeScale.y}) `;
  }
  if (latestTransform) {
    const { transformPerspective, rotate, rotateX, rotateY, skewX, skewY } = latestTransform;
    if (transformPerspective)
      transform = `perspective(${transformPerspective}px) ${transform}`;
    if (rotate)
      transform += `rotate(${rotate}deg) `;
    if (rotateX)
      transform += `rotateX(${rotateX}deg) `;
    if (rotateY)
      transform += `rotateY(${rotateY}deg) `;
    if (skewX)
      transform += `skewX(${skewX}deg) `;
    if (skewY)
      transform += `skewY(${skewY}deg) `;
  }
  const elementScaleX = delta.x.scale * treeScale.x;
  const elementScaleY = delta.y.scale * treeScale.y;
  if (elementScaleX !== 1 || elementScaleY !== 1) {
    transform += `scale(${elementScaleX}, ${elementScaleY})`;
  }
  return transform || "none";
}
const metrics = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0
};
const isDebug = typeof window !== "undefined" && window.MotionDebug !== void 0;
const transformAxes = ["", "X", "Y", "Z"];
const hiddenVisibility = { visibility: "hidden" };
const animationTarget = 1e3;
let id = 0;
function resetDistortingTransform(key, visualElement, values, sharedAnimationValues) {
  const { latestValues } = visualElement;
  if (latestValues[key]) {
    values[key] = latestValues[key];
    visualElement.setStaticValue(key, 0);
    if (sharedAnimationValues) {
      sharedAnimationValues[key] = 0;
    }
  }
}
function cancelTreeOptimisedTransformAnimations(projectionNode) {
  projectionNode.hasCheckedOptimisedAppear = true;
  if (projectionNode.root === projectionNode)
    return;
  const { visualElement } = projectionNode.options;
  if (!visualElement)
    return;
  const appearId = getOptimisedAppearId(visualElement);
  if (window.MotionHasOptimisedAnimation(appearId, "transform")) {
    const { layout: layout2, layoutId } = projectionNode.options;
    window.MotionCancelOptimisedAnimation(appearId, "transform", frame, !(layout2 || layoutId));
  }
  const { parent } = projectionNode;
  if (parent && !parent.hasCheckedOptimisedAppear) {
    cancelTreeOptimisedTransformAnimations(parent);
  }
}
function createProjectionNode({ attachResizeListener, defaultParent, measureScroll, checkIsScrollRoot, resetTransform }) {
  return class ProjectionNode {
    constructor(latestValues = {}, parent = defaultParent === null || defaultParent === void 0 ? void 0 : defaultParent()) {
      this.id = id++;
      this.animationId = 0;
      this.children = /* @__PURE__ */ new Set();
      this.options = {};
      this.isTreeAnimating = false;
      this.isAnimationBlocked = false;
      this.isLayoutDirty = false;
      this.isProjectionDirty = false;
      this.isSharedProjectionDirty = false;
      this.isTransformDirty = false;
      this.updateManuallyBlocked = false;
      this.updateBlockedByResize = false;
      this.isUpdating = false;
      this.isSVG = false;
      this.needsReset = false;
      this.shouldResetTransform = false;
      this.hasCheckedOptimisedAppear = false;
      this.treeScale = { x: 1, y: 1 };
      this.eventHandlers = /* @__PURE__ */ new Map();
      this.hasTreeAnimated = false;
      this.updateScheduled = false;
      this.scheduleUpdate = () => this.update();
      this.projectionUpdateScheduled = false;
      this.checkUpdateFailed = () => {
        if (this.isUpdating) {
          this.isUpdating = false;
          this.clearAllSnapshots();
        }
      };
      this.updateProjection = () => {
        this.projectionUpdateScheduled = false;
        if (isDebug) {
          metrics.totalNodes = metrics.resolvedTargetDeltas = metrics.recalculatedProjection = 0;
        }
        this.nodes.forEach(propagateDirtyNodes);
        this.nodes.forEach(resolveTargetDelta);
        this.nodes.forEach(calcProjection);
        this.nodes.forEach(cleanDirtyNodes);
        if (isDebug) {
          window.MotionDebug.record(metrics);
        }
      };
      this.resolvedRelativeTargetAt = 0;
      this.hasProjected = false;
      this.isVisible = true;
      this.animationProgress = 0;
      this.sharedNodes = /* @__PURE__ */ new Map();
      this.latestValues = latestValues;
      this.root = parent ? parent.root || parent : this;
      this.path = parent ? [...parent.path, parent] : [];
      this.parent = parent;
      this.depth = parent ? parent.depth + 1 : 0;
      for (let i = 0; i < this.path.length; i++) {
        this.path[i].shouldResetTransform = true;
      }
      if (this.root === this)
        this.nodes = new FlatTree();
    }
    addEventListener(name, handler) {
      if (!this.eventHandlers.has(name)) {
        this.eventHandlers.set(name, new SubscriptionManager());
      }
      return this.eventHandlers.get(name).add(handler);
    }
    notifyListeners(name, ...args) {
      const subscriptionManager = this.eventHandlers.get(name);
      subscriptionManager && subscriptionManager.notify(...args);
    }
    hasListeners(name) {
      return this.eventHandlers.has(name);
    }
    /**
     * Lifecycles
     */
    mount(instance, isLayoutDirty = this.root.hasTreeAnimated) {
      if (this.instance)
        return;
      this.isSVG = isSVGElement(instance);
      this.instance = instance;
      const { layoutId, layout: layout2, visualElement } = this.options;
      if (visualElement && !visualElement.current) {
        visualElement.mount(instance);
      }
      this.root.nodes.add(this);
      this.parent && this.parent.children.add(this);
      if (isLayoutDirty && (layout2 || layoutId)) {
        this.isLayoutDirty = true;
      }
      if (attachResizeListener) {
        let cancelDelay;
        const resizeUnblockUpdate = () => this.root.updateBlockedByResize = false;
        attachResizeListener(instance, () => {
          this.root.updateBlockedByResize = true;
          cancelDelay && cancelDelay();
          cancelDelay = delay(resizeUnblockUpdate, 250);
          if (globalProjectionState.hasAnimatedSinceResize) {
            globalProjectionState.hasAnimatedSinceResize = false;
            this.nodes.forEach(finishAnimation);
          }
        });
      }
      if (layoutId) {
        this.root.registerSharedNode(layoutId, this);
      }
      if (this.options.animate !== false && visualElement && (layoutId || layout2)) {
        this.addEventListener("didUpdate", ({ delta, hasLayoutChanged, hasRelativeTargetChanged, layout: newLayout }) => {
          if (this.isTreeAnimationBlocked()) {
            this.target = void 0;
            this.relativeTarget = void 0;
            return;
          }
          const layoutTransition = this.options.transition || visualElement.getDefaultTransition() || defaultLayoutTransition;
          const { onLayoutAnimationStart, onLayoutAnimationComplete } = visualElement.getProps();
          const targetChanged = !this.targetLayout || !boxEqualsRounded(this.targetLayout, newLayout) || hasRelativeTargetChanged;
          const hasOnlyRelativeTargetChanged = !hasLayoutChanged && hasRelativeTargetChanged;
          if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || hasOnlyRelativeTargetChanged || hasLayoutChanged && (targetChanged || !this.currentAnimation)) {
            if (this.resumeFrom) {
              this.resumingFrom = this.resumeFrom;
              this.resumingFrom.resumingFrom = void 0;
            }
            this.setAnimationOrigin(delta, hasOnlyRelativeTargetChanged);
            const animationOptions = {
              ...getValueTransition(layoutTransition, "layout"),
              onPlay: onLayoutAnimationStart,
              onComplete: onLayoutAnimationComplete
            };
            if (visualElement.shouldReduceMotion || this.options.layoutRoot) {
              animationOptions.delay = 0;
              animationOptions.type = false;
            }
            this.startAnimation(animationOptions);
          } else {
            if (!hasLayoutChanged) {
              finishAnimation(this);
            }
            if (this.isLead() && this.options.onExitComplete) {
              this.options.onExitComplete();
            }
          }
          this.targetLayout = newLayout;
        });
      }
    }
    unmount() {
      this.options.layoutId && this.willUpdate();
      this.root.nodes.remove(this);
      const stack = this.getStack();
      stack && stack.remove(this);
      this.parent && this.parent.children.delete(this);
      this.instance = void 0;
      cancelFrame(this.updateProjection);
    }
    // only on the root
    blockUpdate() {
      this.updateManuallyBlocked = true;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = false;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || false;
    }
    // Note: currently only running on root node
    startUpdate() {
      if (this.isUpdateBlocked())
        return;
      this.isUpdating = true;
      this.nodes && this.nodes.forEach(resetSkewAndRotation);
      this.animationId++;
    }
    getTransformTemplate() {
      const { visualElement } = this.options;
      return visualElement && visualElement.getProps().transformTemplate;
    }
    willUpdate(shouldNotifyListeners = true) {
      this.root.hasTreeAnimated = true;
      if (this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear) {
        cancelTreeOptimisedTransformAnimations(this);
      }
      !this.root.isUpdating && this.root.startUpdate();
      if (this.isLayoutDirty)
        return;
      this.isLayoutDirty = true;
      for (let i = 0; i < this.path.length; i++) {
        const node = this.path[i];
        node.shouldResetTransform = true;
        node.updateScroll("snapshot");
        if (node.options.layoutRoot) {
          node.willUpdate(false);
        }
      }
      const { layoutId, layout: layout2 } = this.options;
      if (layoutId === void 0 && !layout2)
        return;
      const transformTemplate = this.getTransformTemplate();
      this.prevTransformTemplateValue = transformTemplate ? transformTemplate(this.latestValues, "") : void 0;
      this.updateSnapshot();
      shouldNotifyListeners && this.notifyListeners("willUpdate");
    }
    update() {
      this.updateScheduled = false;
      const updateWasBlocked = this.isUpdateBlocked();
      if (updateWasBlocked) {
        this.unblockUpdate();
        this.clearAllSnapshots();
        this.nodes.forEach(clearMeasurements);
        return;
      }
      if (!this.isUpdating) {
        this.nodes.forEach(clearIsLayoutDirty);
      }
      this.isUpdating = false;
      this.nodes.forEach(resetTransformStyle);
      this.nodes.forEach(updateLayout);
      this.nodes.forEach(notifyLayoutUpdate);
      this.clearAllSnapshots();
      const now2 = time.now();
      frameData.delta = clamp(0, 1e3 / 60, now2 - frameData.timestamp);
      frameData.timestamp = now2;
      frameData.isProcessing = true;
      frameSteps.update.process(frameData);
      frameSteps.preRender.process(frameData);
      frameSteps.render.process(frameData);
      frameData.isProcessing = false;
    }
    didUpdate() {
      if (!this.updateScheduled) {
        this.updateScheduled = true;
        microtask.read(this.scheduleUpdate);
      }
    }
    clearAllSnapshots() {
      this.nodes.forEach(clearSnapshot);
      this.sharedNodes.forEach(removeLeadSnapshots);
    }
    scheduleUpdateProjection() {
      if (!this.projectionUpdateScheduled) {
        this.projectionUpdateScheduled = true;
        frame.preRender(this.updateProjection, false, true);
      }
    }
    scheduleCheckAfterUnmount() {
      frame.postRender(() => {
        if (this.isLayoutDirty) {
          this.root.didUpdate();
        } else {
          this.root.checkUpdateFailed();
        }
      });
    }
    /**
     * Update measurements
     */
    updateSnapshot() {
      if (this.snapshot || !this.instance)
        return;
      this.snapshot = this.measure();
    }
    updateLayout() {
      if (!this.instance)
        return;
      this.updateScroll();
      if (!(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty) {
        return;
      }
      if (this.resumeFrom && !this.resumeFrom.instance) {
        for (let i = 0; i < this.path.length; i++) {
          const node = this.path[i];
          node.updateScroll();
        }
      }
      const prevLayout = this.layout;
      this.layout = this.measure(false);
      this.layoutCorrected = createBox();
      this.isLayoutDirty = false;
      this.projectionDelta = void 0;
      this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement } = this.options;
      visualElement && visualElement.notify("LayoutMeasure", this.layout.layoutBox, prevLayout ? prevLayout.layoutBox : void 0);
    }
    updateScroll(phase = "measure") {
      let needsMeasurement = Boolean(this.options.layoutScroll && this.instance);
      if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === phase) {
        needsMeasurement = false;
      }
      if (needsMeasurement) {
        const isRoot = checkIsScrollRoot(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase,
          isRoot,
          offset: measureScroll(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : isRoot
        };
      }
    }
    resetTransform() {
      if (!resetTransform)
        return;
      const isResetRequested = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout;
      const hasProjection = this.projectionDelta && !isDeltaZero(this.projectionDelta);
      const transformTemplate = this.getTransformTemplate();
      const transformTemplateValue = transformTemplate ? transformTemplate(this.latestValues, "") : void 0;
      const transformTemplateHasChanged = transformTemplateValue !== this.prevTransformTemplateValue;
      if (isResetRequested && (hasProjection || hasTransform(this.latestValues) || transformTemplateHasChanged)) {
        resetTransform(this.instance, transformTemplateValue);
        this.shouldResetTransform = false;
        this.scheduleRender();
      }
    }
    measure(removeTransform = true) {
      const pageBox = this.measurePageBox();
      let layoutBox = this.removeElementScroll(pageBox);
      if (removeTransform) {
        layoutBox = this.removeTransform(layoutBox);
      }
      roundBox(layoutBox);
      return {
        animationId: this.root.animationId,
        measuredBox: pageBox,
        layoutBox,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      var _a;
      const { visualElement } = this.options;
      if (!visualElement)
        return createBox();
      const box = visualElement.measureViewportBox();
      const wasInScrollRoot = ((_a = this.scroll) === null || _a === void 0 ? void 0 : _a.wasRoot) || this.path.some(checkNodeWasScrollRoot);
      if (!wasInScrollRoot) {
        const { scroll } = this.root;
        if (scroll) {
          translateAxis(box.x, scroll.offset.x);
          translateAxis(box.y, scroll.offset.y);
        }
      }
      return box;
    }
    removeElementScroll(box) {
      var _a;
      const boxWithoutScroll = createBox();
      copyBoxInto(boxWithoutScroll, box);
      if ((_a = this.scroll) === null || _a === void 0 ? void 0 : _a.wasRoot) {
        return boxWithoutScroll;
      }
      for (let i = 0; i < this.path.length; i++) {
        const node = this.path[i];
        const { scroll, options } = node;
        if (node !== this.root && scroll && options.layoutScroll) {
          if (scroll.wasRoot) {
            copyBoxInto(boxWithoutScroll, box);
          }
          translateAxis(boxWithoutScroll.x, scroll.offset.x);
          translateAxis(boxWithoutScroll.y, scroll.offset.y);
        }
      }
      return boxWithoutScroll;
    }
    applyTransform(box, transformOnly = false) {
      const withTransforms = createBox();
      copyBoxInto(withTransforms, box);
      for (let i = 0; i < this.path.length; i++) {
        const node = this.path[i];
        if (!transformOnly && node.options.layoutScroll && node.scroll && node !== node.root) {
          transformBox(withTransforms, {
            x: -node.scroll.offset.x,
            y: -node.scroll.offset.y
          });
        }
        if (!hasTransform(node.latestValues))
          continue;
        transformBox(withTransforms, node.latestValues);
      }
      if (hasTransform(this.latestValues)) {
        transformBox(withTransforms, this.latestValues);
      }
      return withTransforms;
    }
    removeTransform(box) {
      const boxWithoutTransform = createBox();
      copyBoxInto(boxWithoutTransform, box);
      for (let i = 0; i < this.path.length; i++) {
        const node = this.path[i];
        if (!node.instance)
          continue;
        if (!hasTransform(node.latestValues))
          continue;
        hasScale(node.latestValues) && node.updateSnapshot();
        const sourceBox = createBox();
        const nodeBox = node.measurePageBox();
        copyBoxInto(sourceBox, nodeBox);
        removeBoxTransforms(boxWithoutTransform, node.latestValues, node.snapshot ? node.snapshot.layoutBox : void 0, sourceBox);
      }
      if (hasTransform(this.latestValues)) {
        removeBoxTransforms(boxWithoutTransform, this.latestValues);
      }
      return boxWithoutTransform;
    }
    setTargetDelta(delta) {
      this.targetDelta = delta;
      this.root.scheduleUpdateProjection();
      this.isProjectionDirty = true;
    }
    setOptions(options) {
      this.options = {
        ...this.options,
        ...options,
        crossfade: options.crossfade !== void 0 ? options.crossfade : true
      };
    }
    clearMeasurements() {
      this.scroll = void 0;
      this.layout = void 0;
      this.snapshot = void 0;
      this.prevTransformTemplateValue = void 0;
      this.targetDelta = void 0;
      this.target = void 0;
      this.isLayoutDirty = false;
    }
    forceRelativeParentToResolveTarget() {
      if (!this.relativeParent)
        return;
      if (this.relativeParent.resolvedRelativeTargetAt !== frameData.timestamp) {
        this.relativeParent.resolveTargetDelta(true);
      }
    }
    resolveTargetDelta(forceRecalculation = false) {
      var _a;
      const lead = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = lead.isProjectionDirty);
      this.isTransformDirty || (this.isTransformDirty = lead.isTransformDirty);
      this.isSharedProjectionDirty || (this.isSharedProjectionDirty = lead.isSharedProjectionDirty);
      const isShared = Boolean(this.resumingFrom) || this !== lead;
      const canSkip = !(forceRecalculation || isShared && this.isSharedProjectionDirty || this.isProjectionDirty || ((_a = this.parent) === null || _a === void 0 ? void 0 : _a.isProjectionDirty) || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize);
      if (canSkip)
        return;
      const { layout: layout2, layoutId } = this.options;
      if (!this.layout || !(layout2 || layoutId))
        return;
      this.resolvedRelativeTargetAt = frameData.timestamp;
      if (!this.targetDelta && !this.relativeTarget) {
        const relativeParent = this.getClosestProjectingParent();
        if (relativeParent && relativeParent.layout && this.animationProgress !== 1) {
          this.relativeParent = relativeParent;
          this.forceRelativeParentToResolveTarget();
          this.relativeTarget = createBox();
          this.relativeTargetOrigin = createBox();
          calcRelativePosition(this.relativeTargetOrigin, this.layout.layoutBox, relativeParent.layout.layoutBox);
          copyBoxInto(this.relativeTarget, this.relativeTargetOrigin);
        } else {
          this.relativeParent = this.relativeTarget = void 0;
        }
      }
      if (!this.relativeTarget && !this.targetDelta)
        return;
      if (!this.target) {
        this.target = createBox();
        this.targetWithTransforms = createBox();
      }
      if (this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target) {
        this.forceRelativeParentToResolveTarget();
        calcRelativeBox(this.target, this.relativeTarget, this.relativeParent.target);
      } else if (this.targetDelta) {
        if (Boolean(this.resumingFrom)) {
          this.target = this.applyTransform(this.layout.layoutBox);
        } else {
          copyBoxInto(this.target, this.layout.layoutBox);
        }
        applyBoxDelta(this.target, this.targetDelta);
      } else {
        copyBoxInto(this.target, this.layout.layoutBox);
      }
      if (this.attemptToResolveRelativeTarget) {
        this.attemptToResolveRelativeTarget = false;
        const relativeParent = this.getClosestProjectingParent();
        if (relativeParent && Boolean(relativeParent.resumingFrom) === Boolean(this.resumingFrom) && !relativeParent.options.layoutScroll && relativeParent.target && this.animationProgress !== 1) {
          this.relativeParent = relativeParent;
          this.forceRelativeParentToResolveTarget();
          this.relativeTarget = createBox();
          this.relativeTargetOrigin = createBox();
          calcRelativePosition(this.relativeTargetOrigin, this.target, relativeParent.target);
          copyBoxInto(this.relativeTarget, this.relativeTargetOrigin);
        } else {
          this.relativeParent = this.relativeTarget = void 0;
        }
      }
      if (isDebug) {
        metrics.resolvedTargetDeltas++;
      }
    }
    getClosestProjectingParent() {
      if (!this.parent || hasScale(this.parent.latestValues) || has2DTranslate(this.parent.latestValues)) {
        return void 0;
      }
      if (this.parent.isProjecting()) {
        return this.parent;
      } else {
        return this.parent.getClosestProjectingParent();
      }
    }
    isProjecting() {
      return Boolean((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    calcProjection() {
      var _a;
      const lead = this.getLead();
      const isShared = Boolean(this.resumingFrom) || this !== lead;
      let canSkip = true;
      if (this.isProjectionDirty || ((_a = this.parent) === null || _a === void 0 ? void 0 : _a.isProjectionDirty)) {
        canSkip = false;
      }
      if (isShared && (this.isSharedProjectionDirty || this.isTransformDirty)) {
        canSkip = false;
      }
      if (this.resolvedRelativeTargetAt === frameData.timestamp) {
        canSkip = false;
      }
      if (canSkip)
        return;
      const { layout: layout2, layoutId } = this.options;
      this.isTreeAnimating = Boolean(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation);
      if (!this.isTreeAnimating) {
        this.targetDelta = this.relativeTarget = void 0;
      }
      if (!this.layout || !(layout2 || layoutId))
        return;
      copyBoxInto(this.layoutCorrected, this.layout.layoutBox);
      const prevTreeScaleX = this.treeScale.x;
      const prevTreeScaleY = this.treeScale.y;
      applyTreeDeltas(this.layoutCorrected, this.treeScale, this.path, isShared);
      if (lead.layout && !lead.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1)) {
        lead.target = lead.layout.layoutBox;
        lead.targetWithTransforms = createBox();
      }
      const { target } = lead;
      if (!target) {
        if (this.prevProjectionDelta) {
          this.createProjectionDeltas();
          this.scheduleRender();
        }
        return;
      }
      if (!this.projectionDelta || !this.prevProjectionDelta) {
        this.createProjectionDeltas();
      } else {
        copyAxisDeltaInto(this.prevProjectionDelta.x, this.projectionDelta.x);
        copyAxisDeltaInto(this.prevProjectionDelta.y, this.projectionDelta.y);
      }
      calcBoxDelta(this.projectionDelta, this.layoutCorrected, target, this.latestValues);
      if (this.treeScale.x !== prevTreeScaleX || this.treeScale.y !== prevTreeScaleY || !axisDeltaEquals(this.projectionDelta.x, this.prevProjectionDelta.x) || !axisDeltaEquals(this.projectionDelta.y, this.prevProjectionDelta.y)) {
        this.hasProjected = true;
        this.scheduleRender();
        this.notifyListeners("projectionUpdate", target);
      }
      if (isDebug) {
        metrics.recalculatedProjection++;
      }
    }
    hide() {
      this.isVisible = false;
    }
    show() {
      this.isVisible = true;
    }
    scheduleRender(notifyAll = true) {
      var _a;
      (_a = this.options.visualElement) === null || _a === void 0 ? void 0 : _a.scheduleRender();
      if (notifyAll) {
        const stack = this.getStack();
        stack && stack.scheduleRender();
      }
      if (this.resumingFrom && !this.resumingFrom.instance) {
        this.resumingFrom = void 0;
      }
    }
    createProjectionDeltas() {
      this.prevProjectionDelta = createDelta();
      this.projectionDelta = createDelta();
      this.projectionDeltaWithTransform = createDelta();
    }
    setAnimationOrigin(delta, hasOnlyRelativeTargetChanged = false) {
      const snapshot = this.snapshot;
      const snapshotLatestValues = snapshot ? snapshot.latestValues : {};
      const mixedValues = { ...this.latestValues };
      const targetDelta = createDelta();
      if (!this.relativeParent || !this.relativeParent.options.layoutRoot) {
        this.relativeTarget = this.relativeTargetOrigin = void 0;
      }
      this.attemptToResolveRelativeTarget = !hasOnlyRelativeTargetChanged;
      const relativeLayout = createBox();
      const snapshotSource = snapshot ? snapshot.source : void 0;
      const layoutSource = this.layout ? this.layout.source : void 0;
      const isSharedLayoutAnimation = snapshotSource !== layoutSource;
      const stack = this.getStack();
      const isOnlyMember = !stack || stack.members.length <= 1;
      const shouldCrossfadeOpacity = Boolean(isSharedLayoutAnimation && !isOnlyMember && this.options.crossfade === true && !this.path.some(hasOpacityCrossfade));
      this.animationProgress = 0;
      let prevRelativeTarget;
      this.mixTargetDelta = (latest) => {
        const progress2 = latest / 1e3;
        mixAxisDelta(targetDelta.x, delta.x, progress2);
        mixAxisDelta(targetDelta.y, delta.y, progress2);
        this.setTargetDelta(targetDelta);
        if (this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout) {
          calcRelativePosition(relativeLayout, this.layout.layoutBox, this.relativeParent.layout.layoutBox);
          mixBox(this.relativeTarget, this.relativeTargetOrigin, relativeLayout, progress2);
          if (prevRelativeTarget && boxEquals(this.relativeTarget, prevRelativeTarget)) {
            this.isProjectionDirty = false;
          }
          if (!prevRelativeTarget)
            prevRelativeTarget = createBox();
          copyBoxInto(prevRelativeTarget, this.relativeTarget);
        }
        if (isSharedLayoutAnimation) {
          this.animationValues = mixedValues;
          mixValues(mixedValues, snapshotLatestValues, this.latestValues, progress2, shouldCrossfadeOpacity, isOnlyMember);
        }
        this.root.scheduleUpdateProjection();
        this.scheduleRender();
        this.animationProgress = progress2;
      };
      this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(options) {
      this.notifyListeners("animationStart");
      this.currentAnimation && this.currentAnimation.stop();
      if (this.resumingFrom && this.resumingFrom.currentAnimation) {
        this.resumingFrom.currentAnimation.stop();
      }
      if (this.pendingAnimation) {
        cancelFrame(this.pendingAnimation);
        this.pendingAnimation = void 0;
      }
      this.pendingAnimation = frame.update(() => {
        globalProjectionState.hasAnimatedSinceResize = true;
        this.currentAnimation = animateSingleValue(0, animationTarget, {
          ...options,
          onUpdate: (latest) => {
            this.mixTargetDelta(latest);
            options.onUpdate && options.onUpdate(latest);
          },
          onComplete: () => {
            options.onComplete && options.onComplete();
            this.completeAnimation();
          }
        });
        if (this.resumingFrom) {
          this.resumingFrom.currentAnimation = this.currentAnimation;
        }
        this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      if (this.resumingFrom) {
        this.resumingFrom.currentAnimation = void 0;
        this.resumingFrom.preserveOpacity = void 0;
      }
      const stack = this.getStack();
      stack && stack.exitAnimationComplete();
      this.resumingFrom = this.currentAnimation = this.animationValues = void 0;
      this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      if (this.currentAnimation) {
        this.mixTargetDelta && this.mixTargetDelta(animationTarget);
        this.currentAnimation.stop();
      }
      this.completeAnimation();
    }
    applyTransformsToTarget() {
      const lead = this.getLead();
      let { targetWithTransforms, target, layout: layout2, latestValues } = lead;
      if (!targetWithTransforms || !target || !layout2)
        return;
      if (this !== lead && this.layout && layout2 && shouldAnimatePositionOnly(this.options.animationType, this.layout.layoutBox, layout2.layoutBox)) {
        target = this.target || createBox();
        const xLength = calcLength(this.layout.layoutBox.x);
        target.x.min = lead.target.x.min;
        target.x.max = target.x.min + xLength;
        const yLength = calcLength(this.layout.layoutBox.y);
        target.y.min = lead.target.y.min;
        target.y.max = target.y.min + yLength;
      }
      copyBoxInto(targetWithTransforms, target);
      transformBox(targetWithTransforms, latestValues);
      calcBoxDelta(this.projectionDeltaWithTransform, this.layoutCorrected, targetWithTransforms, latestValues);
    }
    registerSharedNode(layoutId, node) {
      if (!this.sharedNodes.has(layoutId)) {
        this.sharedNodes.set(layoutId, new NodeStack());
      }
      const stack = this.sharedNodes.get(layoutId);
      stack.add(node);
      const config = node.options.initialPromotionConfig;
      node.promote({
        transition: config ? config.transition : void 0,
        preserveFollowOpacity: config && config.shouldPreserveFollowOpacity ? config.shouldPreserveFollowOpacity(node) : void 0
      });
    }
    isLead() {
      const stack = this.getStack();
      return stack ? stack.lead === this : true;
    }
    getLead() {
      var _a;
      const { layoutId } = this.options;
      return layoutId ? ((_a = this.getStack()) === null || _a === void 0 ? void 0 : _a.lead) || this : this;
    }
    getPrevLead() {
      var _a;
      const { layoutId } = this.options;
      return layoutId ? (_a = this.getStack()) === null || _a === void 0 ? void 0 : _a.prevLead : void 0;
    }
    getStack() {
      const { layoutId } = this.options;
      if (layoutId)
        return this.root.sharedNodes.get(layoutId);
    }
    promote({ needsReset, transition, preserveFollowOpacity } = {}) {
      const stack = this.getStack();
      if (stack)
        stack.promote(this, preserveFollowOpacity);
      if (needsReset) {
        this.projectionDelta = void 0;
        this.needsReset = true;
      }
      if (transition)
        this.setOptions({ transition });
    }
    relegate() {
      const stack = this.getStack();
      if (stack) {
        return stack.relegate(this);
      } else {
        return false;
      }
    }
    resetSkewAndRotation() {
      const { visualElement } = this.options;
      if (!visualElement)
        return;
      let hasDistortingTransform = false;
      const { latestValues } = visualElement;
      if (latestValues.z || latestValues.rotate || latestValues.rotateX || latestValues.rotateY || latestValues.rotateZ || latestValues.skewX || latestValues.skewY) {
        hasDistortingTransform = true;
      }
      if (!hasDistortingTransform)
        return;
      const resetValues = {};
      if (latestValues.z) {
        resetDistortingTransform("z", visualElement, resetValues, this.animationValues);
      }
      for (let i = 0; i < transformAxes.length; i++) {
        resetDistortingTransform(`rotate${transformAxes[i]}`, visualElement, resetValues, this.animationValues);
        resetDistortingTransform(`skew${transformAxes[i]}`, visualElement, resetValues, this.animationValues);
      }
      visualElement.render();
      for (const key in resetValues) {
        visualElement.setStaticValue(key, resetValues[key]);
        if (this.animationValues) {
          this.animationValues[key] = resetValues[key];
        }
      }
      visualElement.scheduleRender();
    }
    getProjectionStyles(styleProp) {
      var _a, _b;
      if (!this.instance || this.isSVG)
        return void 0;
      if (!this.isVisible) {
        return hiddenVisibility;
      }
      const styles = {
        visibility: ""
      };
      const transformTemplate = this.getTransformTemplate();
      if (this.needsReset) {
        this.needsReset = false;
        styles.opacity = "";
        styles.pointerEvents = resolveMotionValue(styleProp === null || styleProp === void 0 ? void 0 : styleProp.pointerEvents) || "";
        styles.transform = transformTemplate ? transformTemplate(this.latestValues, "") : "none";
        return styles;
      }
      const lead = this.getLead();
      if (!this.projectionDelta || !this.layout || !lead.target) {
        const emptyStyles = {};
        if (this.options.layoutId) {
          emptyStyles.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1;
          emptyStyles.pointerEvents = resolveMotionValue(styleProp === null || styleProp === void 0 ? void 0 : styleProp.pointerEvents) || "";
        }
        if (this.hasProjected && !hasTransform(this.latestValues)) {
          emptyStyles.transform = transformTemplate ? transformTemplate({}, "") : "none";
          this.hasProjected = false;
        }
        return emptyStyles;
      }
      const valuesToRender = lead.animationValues || lead.latestValues;
      this.applyTransformsToTarget();
      styles.transform = buildProjectionTransform(this.projectionDeltaWithTransform, this.treeScale, valuesToRender);
      if (transformTemplate) {
        styles.transform = transformTemplate(valuesToRender, styles.transform);
      }
      const { x: x2, y: y2 } = this.projectionDelta;
      styles.transformOrigin = `${x2.origin * 100}% ${y2.origin * 100}% 0`;
      if (lead.animationValues) {
        styles.opacity = lead === this ? (_b = (_a = valuesToRender.opacity) !== null && _a !== void 0 ? _a : this.latestValues.opacity) !== null && _b !== void 0 ? _b : 1 : this.preserveOpacity ? this.latestValues.opacity : valuesToRender.opacityExit;
      } else {
        styles.opacity = lead === this ? valuesToRender.opacity !== void 0 ? valuesToRender.opacity : "" : valuesToRender.opacityExit !== void 0 ? valuesToRender.opacityExit : 0;
      }
      for (const key in scaleCorrectors) {
        if (valuesToRender[key] === void 0)
          continue;
        const { correct, applyTo } = scaleCorrectors[key];
        const corrected = styles.transform === "none" ? valuesToRender[key] : correct(valuesToRender[key], lead);
        if (applyTo) {
          const num = applyTo.length;
          for (let i = 0; i < num; i++) {
            styles[applyTo[i]] = corrected;
          }
        } else {
          styles[key] = corrected;
        }
      }
      if (this.options.layoutId) {
        styles.pointerEvents = lead === this ? resolveMotionValue(styleProp === null || styleProp === void 0 ? void 0 : styleProp.pointerEvents) || "" : "none";
      }
      return styles;
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((node) => {
        var _a;
        return (_a = node.currentAnimation) === null || _a === void 0 ? void 0 : _a.stop();
      });
      this.root.nodes.forEach(clearMeasurements);
      this.root.sharedNodes.clear();
    }
  };
}
function updateLayout(node) {
  node.updateLayout();
}
function notifyLayoutUpdate(node) {
  var _a;
  const snapshot = ((_a = node.resumeFrom) === null || _a === void 0 ? void 0 : _a.snapshot) || node.snapshot;
  if (node.isLead() && node.layout && snapshot && node.hasListeners("didUpdate")) {
    const { layoutBox: layout2, measuredBox: measuredLayout } = node.layout;
    const { animationType } = node.options;
    const isShared = snapshot.source !== node.layout.source;
    if (animationType === "size") {
      eachAxis((axis) => {
        const axisSnapshot = isShared ? snapshot.measuredBox[axis] : snapshot.layoutBox[axis];
        const length = calcLength(axisSnapshot);
        axisSnapshot.min = layout2[axis].min;
        axisSnapshot.max = axisSnapshot.min + length;
      });
    } else if (shouldAnimatePositionOnly(animationType, snapshot.layoutBox, layout2)) {
      eachAxis((axis) => {
        const axisSnapshot = isShared ? snapshot.measuredBox[axis] : snapshot.layoutBox[axis];
        const length = calcLength(layout2[axis]);
        axisSnapshot.max = axisSnapshot.min + length;
        if (node.relativeTarget && !node.currentAnimation) {
          node.isProjectionDirty = true;
          node.relativeTarget[axis].max = node.relativeTarget[axis].min + length;
        }
      });
    }
    const layoutDelta = createDelta();
    calcBoxDelta(layoutDelta, layout2, snapshot.layoutBox);
    const visualDelta = createDelta();
    if (isShared) {
      calcBoxDelta(visualDelta, node.applyTransform(measuredLayout, true), snapshot.measuredBox);
    } else {
      calcBoxDelta(visualDelta, layout2, snapshot.layoutBox);
    }
    const hasLayoutChanged = !isDeltaZero(layoutDelta);
    let hasRelativeTargetChanged = false;
    if (!node.resumeFrom) {
      const relativeParent = node.getClosestProjectingParent();
      if (relativeParent && !relativeParent.resumeFrom) {
        const { snapshot: parentSnapshot, layout: parentLayout } = relativeParent;
        if (parentSnapshot && parentLayout) {
          const relativeSnapshot = createBox();
          calcRelativePosition(relativeSnapshot, snapshot.layoutBox, parentSnapshot.layoutBox);
          const relativeLayout = createBox();
          calcRelativePosition(relativeLayout, layout2, parentLayout.layoutBox);
          if (!boxEqualsRounded(relativeSnapshot, relativeLayout)) {
            hasRelativeTargetChanged = true;
          }
          if (relativeParent.options.layoutRoot) {
            node.relativeTarget = relativeLayout;
            node.relativeTargetOrigin = relativeSnapshot;
            node.relativeParent = relativeParent;
          }
        }
      }
    }
    node.notifyListeners("didUpdate", {
      layout: layout2,
      snapshot,
      delta: visualDelta,
      layoutDelta,
      hasLayoutChanged,
      hasRelativeTargetChanged
    });
  } else if (node.isLead()) {
    const { onExitComplete } = node.options;
    onExitComplete && onExitComplete();
  }
  node.options.transition = void 0;
}
function propagateDirtyNodes(node) {
  if (isDebug) {
    metrics.totalNodes++;
  }
  if (!node.parent)
    return;
  if (!node.isProjecting()) {
    node.isProjectionDirty = node.parent.isProjectionDirty;
  }
  node.isSharedProjectionDirty || (node.isSharedProjectionDirty = Boolean(node.isProjectionDirty || node.parent.isProjectionDirty || node.parent.isSharedProjectionDirty));
  node.isTransformDirty || (node.isTransformDirty = node.parent.isTransformDirty);
}
function cleanDirtyNodes(node) {
  node.isProjectionDirty = node.isSharedProjectionDirty = node.isTransformDirty = false;
}
function clearSnapshot(node) {
  node.clearSnapshot();
}
function clearMeasurements(node) {
  node.clearMeasurements();
}
function clearIsLayoutDirty(node) {
  node.isLayoutDirty = false;
}
function resetTransformStyle(node) {
  const { visualElement } = node.options;
  if (visualElement && visualElement.getProps().onBeforeLayoutMeasure) {
    visualElement.notify("BeforeLayoutMeasure");
  }
  node.resetTransform();
}
function finishAnimation(node) {
  node.finishAnimation();
  node.targetDelta = node.relativeTarget = node.target = void 0;
  node.isProjectionDirty = true;
}
function resolveTargetDelta(node) {
  node.resolveTargetDelta();
}
function calcProjection(node) {
  node.calcProjection();
}
function resetSkewAndRotation(node) {
  node.resetSkewAndRotation();
}
function removeLeadSnapshots(stack) {
  stack.removeLeadSnapshot();
}
function mixAxisDelta(output, delta, p2) {
  output.translate = mixNumber$1(delta.translate, 0, p2);
  output.scale = mixNumber$1(delta.scale, 1, p2);
  output.origin = delta.origin;
  output.originPoint = delta.originPoint;
}
function mixAxis(output, from, to, p2) {
  output.min = mixNumber$1(from.min, to.min, p2);
  output.max = mixNumber$1(from.max, to.max, p2);
}
function mixBox(output, from, to, p2) {
  mixAxis(output.x, from.x, to.x, p2);
  mixAxis(output.y, from.y, to.y, p2);
}
function hasOpacityCrossfade(node) {
  return node.animationValues && node.animationValues.opacityExit !== void 0;
}
const defaultLayoutTransition = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
};
const userAgentContains = (string) => typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(string);
const roundPoint = userAgentContains("applewebkit/") && !userAgentContains("chrome/") ? Math.round : noop;
function roundAxis(axis) {
  axis.min = roundPoint(axis.min);
  axis.max = roundPoint(axis.max);
}
function roundBox(box) {
  roundAxis(box.x);
  roundAxis(box.y);
}
function shouldAnimatePositionOnly(animationType, snapshot, layout2) {
  return animationType === "position" || animationType === "preserve-aspect" && !isNear(aspectRatio(snapshot), aspectRatio(layout2), 0.2);
}
function checkNodeWasScrollRoot(node) {
  var _a;
  return node !== node.root && ((_a = node.scroll) === null || _a === void 0 ? void 0 : _a.wasRoot);
}
const DocumentProjectionNode = createProjectionNode({
  attachResizeListener: (ref, notify) => addDomEvent(ref, "resize", notify),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => true
});
const rootProjectionNode = {
  current: void 0
};
const HTMLProjectionNode = createProjectionNode({
  measureScroll: (instance) => ({
    x: instance.scrollLeft,
    y: instance.scrollTop
  }),
  defaultParent: () => {
    if (!rootProjectionNode.current) {
      const documentNode = new DocumentProjectionNode({});
      documentNode.mount(window);
      documentNode.setOptions({ layoutScroll: true });
      rootProjectionNode.current = documentNode;
    }
    return rootProjectionNode.current;
  },
  resetTransform: (instance, value) => {
    instance.style.transform = value !== void 0 ? value : "none";
  },
  checkIsScrollRoot: (instance) => Boolean(window.getComputedStyle(instance).position === "fixed")
});
const drag = {
  pan: {
    Feature: PanGesture
  },
  drag: {
    Feature: DragGesture,
    ProjectionNode: HTMLProjectionNode,
    MeasureLayout
  }
};
function handleHoverEvent(node, event, lifecycle) {
  const { props } = node;
  if (node.animationState && props.whileHover) {
    node.animationState.setActive("whileHover", lifecycle === "Start");
  }
  const eventName = "onHover" + lifecycle;
  const callback = props[eventName];
  if (callback) {
    frame.postRender(() => callback(event, extractEventInfo(event)));
  }
}
class HoverGesture extends Feature {
  mount() {
    const { current } = this.node;
    if (!current)
      return;
    this.unmount = hover(current, (startEvent) => {
      handleHoverEvent(this.node, startEvent, "Start");
      return (endEvent) => handleHoverEvent(this.node, endEvent, "End");
    });
  }
  unmount() {
  }
}
class FocusGesture extends Feature {
  constructor() {
    super(...arguments);
    this.isActive = false;
  }
  onFocus() {
    let isFocusVisible = false;
    try {
      isFocusVisible = this.node.current.matches(":focus-visible");
    } catch (e2) {
      isFocusVisible = true;
    }
    if (!isFocusVisible || !this.node.animationState)
      return;
    this.node.animationState.setActive("whileFocus", true);
    this.isActive = true;
  }
  onBlur() {
    if (!this.isActive || !this.node.animationState)
      return;
    this.node.animationState.setActive("whileFocus", false);
    this.isActive = false;
  }
  mount() {
    this.unmount = pipe(addDomEvent(this.node.current, "focus", () => this.onFocus()), addDomEvent(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
function handlePressEvent(node, event, lifecycle) {
  const { props } = node;
  if (node.animationState && props.whileTap) {
    node.animationState.setActive("whileTap", lifecycle === "Start");
  }
  const eventName = "onTap" + (lifecycle === "End" ? "" : lifecycle);
  const callback = props[eventName];
  if (callback) {
    frame.postRender(() => callback(event, extractEventInfo(event)));
  }
}
class PressGesture extends Feature {
  mount() {
    const { current } = this.node;
    if (!current)
      return;
    this.unmount = press(current, (startEvent) => {
      handlePressEvent(this.node, startEvent, "Start");
      return (endEvent, { success }) => handlePressEvent(this.node, endEvent, success ? "End" : "Cancel");
    }, { useGlobalTarget: this.node.props.globalTapTarget });
  }
  unmount() {
  }
}
const observerCallbacks = /* @__PURE__ */ new WeakMap();
const observers = /* @__PURE__ */ new WeakMap();
const fireObserverCallback = (entry) => {
  const callback = observerCallbacks.get(entry.target);
  callback && callback(entry);
};
const fireAllObserverCallbacks = (entries) => {
  entries.forEach(fireObserverCallback);
};
function initIntersectionObserver({ root, ...options }) {
  const lookupRoot = root || document;
  if (!observers.has(lookupRoot)) {
    observers.set(lookupRoot, {});
  }
  const rootObservers = observers.get(lookupRoot);
  const key = JSON.stringify(options);
  if (!rootObservers[key]) {
    rootObservers[key] = new IntersectionObserver(fireAllObserverCallbacks, { root, ...options });
  }
  return rootObservers[key];
}
function observeIntersection(element, options, callback) {
  const rootInteresectionObserver = initIntersectionObserver(options);
  observerCallbacks.set(element, callback);
  rootInteresectionObserver.observe(element);
  return () => {
    observerCallbacks.delete(element);
    rootInteresectionObserver.unobserve(element);
  };
}
const thresholdNames = {
  some: 0,
  all: 1
};
class InViewFeature extends Feature {
  constructor() {
    super(...arguments);
    this.hasEnteredView = false;
    this.isInView = false;
  }
  startObserver() {
    this.unmount();
    const { viewport = {} } = this.node.getProps();
    const { root, margin: rootMargin, amount = "some", once } = viewport;
    const options = {
      root: root ? root.current : void 0,
      rootMargin,
      threshold: typeof amount === "number" ? amount : thresholdNames[amount]
    };
    const onIntersectionUpdate = (entry) => {
      const { isIntersecting } = entry;
      if (this.isInView === isIntersecting)
        return;
      this.isInView = isIntersecting;
      if (once && !isIntersecting && this.hasEnteredView) {
        return;
      } else if (isIntersecting) {
        this.hasEnteredView = true;
      }
      if (this.node.animationState) {
        this.node.animationState.setActive("whileInView", isIntersecting);
      }
      const { onViewportEnter, onViewportLeave } = this.node.getProps();
      const callback = isIntersecting ? onViewportEnter : onViewportLeave;
      callback && callback(entry);
    };
    return observeIntersection(this.node.current, options, onIntersectionUpdate);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver === "undefined")
      return;
    const { props, prevProps } = this.node;
    const hasOptionsChanged = ["amount", "margin", "root"].some(hasViewportOptionChanged(props, prevProps));
    if (hasOptionsChanged) {
      this.startObserver();
    }
  }
  unmount() {
  }
}
function hasViewportOptionChanged({ viewport = {} }, { viewport: prevViewport = {} } = {}) {
  return (name) => viewport[name] !== prevViewport[name];
}
const gestureAnimations = {
  inView: {
    Feature: InViewFeature
  },
  tap: {
    Feature: PressGesture
  },
  focus: {
    Feature: FocusGesture
  },
  hover: {
    Feature: HoverGesture
  }
};
const layout = {
  layout: {
    ProjectionNode: HTMLProjectionNode,
    MeasureLayout
  }
};
const prefersReducedMotion = { current: null };
const hasReducedMotionListener = { current: false };
function initPrefersReducedMotion() {
  hasReducedMotionListener.current = true;
  if (!isBrowser)
    return;
  if (window.matchMedia) {
    const motionMediaQuery = window.matchMedia("(prefers-reduced-motion)");
    const setReducedMotionPreferences = () => prefersReducedMotion.current = motionMediaQuery.matches;
    motionMediaQuery.addListener(setReducedMotionPreferences);
    setReducedMotionPreferences();
  } else {
    prefersReducedMotion.current = false;
  }
}
const valueTypes = [...dimensionValueTypes, color, complex];
const findValueType = (v2) => valueTypes.find(testValueType(v2));
const visualElementStore = /* @__PURE__ */ new WeakMap();
function updateMotionValuesFromProps(element, next, prev) {
  for (const key in next) {
    const nextValue = next[key];
    const prevValue = prev[key];
    if (isMotionValue(nextValue)) {
      element.addValue(key, nextValue);
    } else if (isMotionValue(prevValue)) {
      element.addValue(key, motionValue(nextValue, { owner: element }));
    } else if (prevValue !== nextValue) {
      if (element.hasValue(key)) {
        const existingValue = element.getValue(key);
        if (existingValue.liveStyle === true) {
          existingValue.jump(nextValue);
        } else if (!existingValue.hasAnimated) {
          existingValue.set(nextValue);
        }
      } else {
        const latestValue = element.getStaticValue(key);
        element.addValue(key, motionValue(latestValue !== void 0 ? latestValue : nextValue, { owner: element }));
      }
    }
  }
  for (const key in prev) {
    if (next[key] === void 0)
      element.removeValue(key);
  }
  return next;
}
const propEventHandlers = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
class VisualElement {
  /**
   * This method takes React props and returns found MotionValues. For example, HTML
   * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
   *
   * This isn't an abstract method as it needs calling in the constructor, but it is
   * intended to be one.
   */
  scrapeMotionValuesFromProps(_props, _prevProps, _visualElement) {
    return {};
  }
  constructor({ parent, props, presenceContext, reducedMotionConfig, blockInitialAnimation, visualState }, options = {}) {
    this.current = null;
    this.children = /* @__PURE__ */ new Set();
    this.isVariantNode = false;
    this.isControllingVariants = false;
    this.shouldReduceMotion = null;
    this.values = /* @__PURE__ */ new Map();
    this.KeyframeResolver = KeyframeResolver;
    this.features = {};
    this.valueSubscriptions = /* @__PURE__ */ new Map();
    this.prevMotionValues = {};
    this.events = {};
    this.propEventSubscriptions = {};
    this.notifyUpdate = () => this.notify("Update", this.latestValues);
    this.render = () => {
      if (!this.current)
        return;
      this.triggerBuild();
      this.renderInstance(this.current, this.renderState, this.props.style, this.projection);
    };
    this.renderScheduledAt = 0;
    this.scheduleRender = () => {
      const now2 = time.now();
      if (this.renderScheduledAt < now2) {
        this.renderScheduledAt = now2;
        frame.render(this.render, false, true);
      }
    };
    const { latestValues, renderState, onUpdate } = visualState;
    this.onUpdate = onUpdate;
    this.latestValues = latestValues;
    this.baseTarget = { ...latestValues };
    this.initialValues = props.initial ? { ...latestValues } : {};
    this.renderState = renderState;
    this.parent = parent;
    this.props = props;
    this.presenceContext = presenceContext;
    this.depth = parent ? parent.depth + 1 : 0;
    this.reducedMotionConfig = reducedMotionConfig;
    this.options = options;
    this.blockInitialAnimation = Boolean(blockInitialAnimation);
    this.isControllingVariants = isControllingVariants(props);
    this.isVariantNode = isVariantNode(props);
    if (this.isVariantNode) {
      this.variantChildren = /* @__PURE__ */ new Set();
    }
    this.manuallyAnimateOnMount = Boolean(parent && parent.current);
    const { willChange, ...initialMotionValues } = this.scrapeMotionValuesFromProps(props, {}, this);
    for (const key in initialMotionValues) {
      const value = initialMotionValues[key];
      if (latestValues[key] !== void 0 && isMotionValue(value)) {
        value.set(latestValues[key], false);
      }
    }
  }
  mount(instance) {
    this.current = instance;
    visualElementStore.set(instance, this);
    if (this.projection && !this.projection.instance) {
      this.projection.mount(instance);
    }
    if (this.parent && this.isVariantNode && !this.isControllingVariants) {
      this.removeFromVariantTree = this.parent.addVariantChild(this);
    }
    this.values.forEach((value, key) => this.bindToMotionValue(key, value));
    if (!hasReducedMotionListener.current) {
      initPrefersReducedMotion();
    }
    this.shouldReduceMotion = this.reducedMotionConfig === "never" ? false : this.reducedMotionConfig === "always" ? true : prefersReducedMotion.current;
    if (this.parent)
      this.parent.children.add(this);
    this.update(this.props, this.presenceContext);
  }
  unmount() {
    visualElementStore.delete(this.current);
    this.projection && this.projection.unmount();
    cancelFrame(this.notifyUpdate);
    cancelFrame(this.render);
    this.valueSubscriptions.forEach((remove) => remove());
    this.valueSubscriptions.clear();
    this.removeFromVariantTree && this.removeFromVariantTree();
    this.parent && this.parent.children.delete(this);
    for (const key in this.events) {
      this.events[key].clear();
    }
    for (const key in this.features) {
      const feature = this.features[key];
      if (feature) {
        feature.unmount();
        feature.isMounted = false;
      }
    }
    this.current = null;
  }
  bindToMotionValue(key, value) {
    if (this.valueSubscriptions.has(key)) {
      this.valueSubscriptions.get(key)();
    }
    const valueIsTransform = transformProps.has(key);
    const removeOnChange = value.on("change", (latestValue) => {
      this.latestValues[key] = latestValue;
      this.props.onUpdate && frame.preRender(this.notifyUpdate);
      if (valueIsTransform && this.projection) {
        this.projection.isTransformDirty = true;
      }
    });
    const removeOnRenderRequest = value.on("renderRequest", this.scheduleRender);
    let removeSyncCheck;
    if (window.MotionCheckAppearSync) {
      removeSyncCheck = window.MotionCheckAppearSync(this, key, value);
    }
    this.valueSubscriptions.set(key, () => {
      removeOnChange();
      removeOnRenderRequest();
      if (removeSyncCheck)
        removeSyncCheck();
      if (value.owner)
        value.stop();
    });
  }
  sortNodePosition(other) {
    if (!this.current || !this.sortInstanceNodePosition || this.type !== other.type) {
      return 0;
    }
    return this.sortInstanceNodePosition(this.current, other.current);
  }
  updateFeatures() {
    let key = "animation";
    for (key in featureDefinitions) {
      const featureDefinition = featureDefinitions[key];
      if (!featureDefinition)
        continue;
      const { isEnabled, Feature: FeatureConstructor } = featureDefinition;
      if (!this.features[key] && FeatureConstructor && isEnabled(this.props)) {
        this.features[key] = new FeatureConstructor(this);
      }
      if (this.features[key]) {
        const feature = this.features[key];
        if (feature.isMounted) {
          feature.update();
        } else {
          feature.mount();
          feature.isMounted = true;
        }
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  /**
   * Measure the current viewport box with or without transforms.
   * Only measures axis-aligned boxes, rotate and skew must be manually
   * removed with a re-render to work.
   */
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : createBox();
  }
  getStaticValue(key) {
    return this.latestValues[key];
  }
  setStaticValue(key, value) {
    this.latestValues[key] = value;
  }
  /**
   * Update the provided props. Ensure any newly-added motion values are
   * added to our map, old ones removed, and listeners updated.
   */
  update(props, presenceContext) {
    if (props.transformTemplate || this.props.transformTemplate) {
      this.scheduleRender();
    }
    this.prevProps = this.props;
    this.props = props;
    this.prevPresenceContext = this.presenceContext;
    this.presenceContext = presenceContext;
    for (let i = 0; i < propEventHandlers.length; i++) {
      const key = propEventHandlers[i];
      if (this.propEventSubscriptions[key]) {
        this.propEventSubscriptions[key]();
        delete this.propEventSubscriptions[key];
      }
      const listenerName = "on" + key;
      const listener = props[listenerName];
      if (listener) {
        this.propEventSubscriptions[key] = this.on(key, listener);
      }
    }
    this.prevMotionValues = updateMotionValuesFromProps(this, this.scrapeMotionValuesFromProps(props, this.prevProps, this), this.prevMotionValues);
    if (this.handleChildMotionValue) {
      this.handleChildMotionValue();
    }
    this.onUpdate && this.onUpdate(this);
  }
  getProps() {
    return this.props;
  }
  /**
   * Returns the variant definition with a given name.
   */
  getVariant(name) {
    return this.props.variants ? this.props.variants[name] : void 0;
  }
  /**
   * Returns the defined default transition on this component.
   */
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
  }
  /**
   * Add a child visual element to our set of children.
   */
  addVariantChild(child) {
    const closestVariantNode = this.getClosestVariantNode();
    if (closestVariantNode) {
      closestVariantNode.variantChildren && closestVariantNode.variantChildren.add(child);
      return () => closestVariantNode.variantChildren.delete(child);
    }
  }
  /**
   * Add a motion value and bind it to this visual element.
   */
  addValue(key, value) {
    const existingValue = this.values.get(key);
    if (value !== existingValue) {
      if (existingValue)
        this.removeValue(key);
      this.bindToMotionValue(key, value);
      this.values.set(key, value);
      this.latestValues[key] = value.get();
    }
  }
  /**
   * Remove a motion value and unbind any active subscriptions.
   */
  removeValue(key) {
    this.values.delete(key);
    const unsubscribe = this.valueSubscriptions.get(key);
    if (unsubscribe) {
      unsubscribe();
      this.valueSubscriptions.delete(key);
    }
    delete this.latestValues[key];
    this.removeValueFromRenderState(key, this.renderState);
  }
  /**
   * Check whether we have a motion value for this key
   */
  hasValue(key) {
    return this.values.has(key);
  }
  getValue(key, defaultValue) {
    if (this.props.values && this.props.values[key]) {
      return this.props.values[key];
    }
    let value = this.values.get(key);
    if (value === void 0 && defaultValue !== void 0) {
      value = motionValue(defaultValue === null ? void 0 : defaultValue, { owner: this });
      this.addValue(key, value);
    }
    return value;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(key, target) {
    var _a;
    let value = this.latestValues[key] !== void 0 || !this.current ? this.latestValues[key] : (_a = this.getBaseTargetFromProps(this.props, key)) !== null && _a !== void 0 ? _a : this.readValueFromInstance(this.current, key, this.options);
    if (value !== void 0 && value !== null) {
      if (typeof value === "string" && (isNumericalString(value) || isZeroValueString(value))) {
        value = parseFloat(value);
      } else if (!findValueType(value) && complex.test(target)) {
        value = getAnimatableNone(key, target);
      }
      this.setBaseTarget(key, isMotionValue(value) ? value.get() : value);
    }
    return isMotionValue(value) ? value.get() : value;
  }
  /**
   * Set the base target to later animate back to. This is currently
   * only hydrated on creation and when we first read a value.
   */
  setBaseTarget(key, value) {
    this.baseTarget[key] = value;
  }
  /**
   * Find the base target for a value thats been removed from all animation
   * props.
   */
  getBaseTarget(key) {
    var _a;
    const { initial } = this.props;
    let valueFromInitial;
    if (typeof initial === "string" || typeof initial === "object") {
      const variant = resolveVariantFromProps(this.props, initial, (_a = this.presenceContext) === null || _a === void 0 ? void 0 : _a.custom);
      if (variant) {
        valueFromInitial = variant[key];
      }
    }
    if (initial && valueFromInitial !== void 0) {
      return valueFromInitial;
    }
    const target = this.getBaseTargetFromProps(this.props, key);
    if (target !== void 0 && !isMotionValue(target))
      return target;
    return this.initialValues[key] !== void 0 && valueFromInitial === void 0 ? void 0 : this.baseTarget[key];
  }
  on(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = new SubscriptionManager();
    }
    return this.events[eventName].add(callback);
  }
  notify(eventName, ...args) {
    if (this.events[eventName]) {
      this.events[eventName].notify(...args);
    }
  }
}
class DOMVisualElement extends VisualElement {
  constructor() {
    super(...arguments);
    this.KeyframeResolver = DOMKeyframesResolver;
  }
  sortInstanceNodePosition(a2, b2) {
    return a2.compareDocumentPosition(b2) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(props, key) {
    return props.style ? props.style[key] : void 0;
  }
  removeValueFromRenderState(key, { vars, style }) {
    delete vars[key];
    delete style[key];
  }
  handleChildMotionValue() {
    if (this.childSubscription) {
      this.childSubscription();
      delete this.childSubscription;
    }
    const { children } = this.props;
    if (isMotionValue(children)) {
      this.childSubscription = children.on("change", (latest) => {
        if (this.current) {
          this.current.textContent = `${latest}`;
        }
      });
    }
  }
}
function getComputedStyle(element) {
  return window.getComputedStyle(element);
}
class HTMLVisualElement extends DOMVisualElement {
  constructor() {
    super(...arguments);
    this.type = "html";
    this.renderInstance = renderHTML;
  }
  readValueFromInstance(instance, key) {
    if (transformProps.has(key)) {
      const defaultType = getDefaultValueType(key);
      return defaultType ? defaultType.default || 0 : 0;
    } else {
      const computedStyle = getComputedStyle(instance);
      const value = (isCSSVariableName(key) ? computedStyle.getPropertyValue(key) : computedStyle[key]) || 0;
      return typeof value === "string" ? value.trim() : value;
    }
  }
  measureInstanceViewportBox(instance, { transformPagePoint }) {
    return measureViewportBox(instance, transformPagePoint);
  }
  build(renderState, latestValues, props) {
    buildHTMLStyles(renderState, latestValues, props.transformTemplate);
  }
  scrapeMotionValuesFromProps(props, prevProps, visualElement) {
    return scrapeMotionValuesFromProps$1(props, prevProps, visualElement);
  }
}
class SVGVisualElement extends DOMVisualElement {
  constructor() {
    super(...arguments);
    this.type = "svg";
    this.isSVGTag = false;
    this.measureInstanceViewportBox = createBox;
  }
  getBaseTargetFromProps(props, key) {
    return props[key];
  }
  readValueFromInstance(instance, key) {
    if (transformProps.has(key)) {
      const defaultType = getDefaultValueType(key);
      return defaultType ? defaultType.default || 0 : 0;
    }
    key = !camelCaseAttributes.has(key) ? camelToDash(key) : key;
    return instance.getAttribute(key);
  }
  scrapeMotionValuesFromProps(props, prevProps, visualElement) {
    return scrapeMotionValuesFromProps(props, prevProps, visualElement);
  }
  build(renderState, latestValues, props) {
    buildSVGAttrs(renderState, latestValues, this.isSVGTag, props.transformTemplate);
  }
  renderInstance(instance, renderState, styleProp, projection) {
    renderSVG(instance, renderState, styleProp, projection);
  }
  mount(instance) {
    this.isSVGTag = isSVGTag(instance.tagName);
    super.mount(instance);
  }
}
const createDomVisualElement = (Component, options) => {
  return isSVGComponent(Component) ? new SVGVisualElement(options) : new HTMLVisualElement(options, {
    allowProjection: Component !== reactExports.Fragment
  });
};
const createMotionComponent = /* @__PURE__ */ createMotionComponentFactory({
  ...animations,
  ...gestureAnimations,
  ...drag,
  ...layout
}, createDomVisualElement);
const motion = /* @__PURE__ */ createDOMMotionComponentProxy(createMotionComponent);
const api = window.neural;
function errMsg(e2) {
  const m2 = e2?.message ?? String(e2);
  return m2.replace(/^Error invoking remote method '[^']+': (Error: )?/, "");
}
let state = {
  ready: false,
  settings: null,
  tickers: {},
  conns: [],
  win: null,
  analyses: {},
  duals: {},
  progress: {},
  activeRequest: {},
  news: [],
  toasts: [],
  alerts: [],
  visible: true,
  settingsOpen: false,
  settingsTab: "models",
  historyVersion: 0
};
const listeners = /* @__PURE__ */ new Set();
function getState() {
  return state;
}
function setState(patch) {
  const p2 = typeof patch === "function" ? patch(state) : patch;
  state = { ...state, ...p2 };
  for (const l2 of listeners) l2();
}
function useStore(sel) {
  return reactExports.useSyncExternalStore(
    (cb) => {
      listeners.add(cb);
      return () => listeners.delete(cb);
    },
    () => sel(state)
  );
}
const tk = (s, m2) => `${s}|${m2}`;
function pushToast(a2) {
  setState((s) => ({ toasts: [a2, ...s.toasts].slice(0, 4), alerts: [a2, ...s.alerts].slice(0, 100) }));
  setTimeout(() => setState((s) => ({ toasts: s.toasts.filter((t) => t.id !== a2.id) })), a2.level === "critical" ? 12e3 : 7e3);
}
let initialized = false;
async function initStore() {
  if (initialized) return;
  initialized = true;
  const [settings, snap, win, news, alerts] = await Promise.all([
    api.invoke("settings:get"),
    api.invoke("market:snapshot"),
    api.invoke("win:state"),
    api.invoke("news:list"),
    api.invoke("alerts:list")
  ]);
  const tickers = {};
  for (const t of snap.tickers) tickers[tk(t.symbol, t.market)] = t;
  const analyses = {};
  const duals = {};
  for (const s of ["BTCUSDT", "ETHUSDT"]) {
    for (const m2 of ["spot", "perp"]) {
      const [a2, d2] = await Promise.all([api.invoke("analysis:latest", s, m2), api.invoke("analysis:latest-dual", s, m2)]);
      if (a2) analyses[tk(s, m2)] = a2;
      if (d2) duals[tk(s, m2)] = d2;
    }
  }
  setState({ ready: true, settings, tickers, conns: snap.conns, win, news, alerts, analyses, duals });
  api.on("settings:changed", (s) => setState({ settings: s }));
  api.on("market:tickers", (list) => {
    const next = { ...getState().tickers };
    for (const t of list) next[tk(t.symbol, t.market)] = t;
    setState({ tickers: next });
  });
  api.on("market:conn", (c2) => setState({ conns: c2 }));
  api.on("win:state", (w2) => setState({ win: w2 }));
  api.on("app:visibility", ({ visible }) => setState({ visible }));
  api.on("news:updated", (n) => setState({ news: n }));
  api.on("alerts:new", (a2) => pushToast(a2));
  api.on(
    "analysis:progress",
    (p2) => setState((s) => ({
      progress: { ...s.progress, [p2.symbol]: p2 },
      activeRequest: p2.state === "running" ? { ...s.activeRequest, [p2.symbol]: p2.requestId } : Object.fromEntries(Object.entries(s.activeRequest).filter(([k2]) => k2 !== p2.symbol))
    }))
  );
  api.on("analysis:result", (r2) => setState((s) => ({ analyses: { ...s.analyses, [tk(r2.symbol, r2.market_type)]: r2 }, historyVersion: s.historyVersion + 1 })));
  api.on("analysis:dual", (d2) => setState((s) => ({ duals: { ...s.duals, [tk(d2.symbol, d2.market_type)]: d2 } })));
}
async function patchSettings(p2) {
  const s = await api.invoke("settings:update", p2);
  setState({ settings: s });
  return s;
}
async function runAnalysis(symbol, market, dual) {
  setState((s) => ({ progress: { ...s.progress, [symbol]: { requestId: "pending", symbol, step: 0, total: 7, label: "准备中", state: "running" } } }));
  const { requestId } = await api.invoke("analysis:run", { symbol, market, dual });
  setState((s) => ({ activeRequest: { ...s.activeRequest, [symbol]: requestId } }));
}
function openSettings(tab = "models") {
  if (state.win && state.win.size !== "large") void api.invoke("win:set-size", "large");
  setState({ settingsOpen: true, settingsTab: tab });
}
const S$1 = ({ children, className, size: size2 = 14 }) => /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: size2, height: size2, viewBox: "0 0 16 16", fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round", className, children });
const IconPin = (p2) => /* @__PURE__ */ jsxRuntimeExports.jsxs(S$1, { ...p2, children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M9.5 2.5l4 4-2 1-2.5 2.5.5 3-1.5 1-6-6 1-1.5 3 .5L8.5 4.5z" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M5 11l-3 3" })
] });
const IconGhost = (p2) => /* @__PURE__ */ jsxRuntimeExports.jsxs(S$1, { ...p2, children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "8", cy: "8", r: "5.5", strokeDasharray: "2 2" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "8", cy: "8", r: "2" })
] });
const IconMouse = (p2) => /* @__PURE__ */ jsxRuntimeExports.jsxs(S$1, { ...p2, children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "4.5", y: "2", width: "7", height: "12", rx: "3.5" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M8 4.5v2" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M2 2l12 12" })
] });
const IconMin = (p2) => /* @__PURE__ */ jsxRuntimeExports.jsx(S$1, { ...p2, children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M3.5 8h9" }) });
const IconClose = (p2) => /* @__PURE__ */ jsxRuntimeExports.jsx(S$1, { ...p2, children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M4 4l8 8M12 4l-8 8" }) });
const IconGear = (p2) => /* @__PURE__ */ jsxRuntimeExports.jsxs(S$1, { ...p2, children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "8", cy: "8", r: "2.2" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M8 1.8v1.6M8 12.6v1.6M14.2 8h-1.6M3.4 8H1.8M12.4 3.6l-1.1 1.1M4.7 11.3l-1.1 1.1M12.4 12.4l-1.1-1.1M4.7 4.7L3.6 3.6" })
] });
const IconBolt = (p2) => /* @__PURE__ */ jsxRuntimeExports.jsx(S$1, { ...p2, children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M9 1.5L3.5 9H8l-1 5.5L12.5 7H8z" }) });
const IconRefresh = (p2) => /* @__PURE__ */ jsxRuntimeExports.jsxs(S$1, { ...p2, children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M13 8a5 5 0 11-1.5-3.6" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M13 2.5V5h-2.5" })
] });
const IconFocus = (p2) => /* @__PURE__ */ jsxRuntimeExports.jsxs(S$1, { ...p2, children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M2 5V2h3M11 2h3v3M14 11v3h-3M5 14H2v-3" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "8", cy: "8", r: "1.5" })
] });
const IconExternal = (p2) => /* @__PURE__ */ jsxRuntimeExports.jsx(S$1, { ...p2, children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M9 2.5h4.5V7M13.5 2.5L7.5 8.5M12 9.5V13a.5.5 0 01-.5.5h-8A.5.5 0 013 13V5a.5.5 0 01.5-.5H7" }) });
const IconStop = (p2) => /* @__PURE__ */ jsxRuntimeExports.jsx(S$1, { ...p2, children: /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "4", y: "4", width: "8", height: "8", rx: "1" }) });
const IconCheck = (p2) => /* @__PURE__ */ jsxRuntimeExports.jsx(S$1, { ...p2, children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M3 8.5l3 3 7-7" }) });
const IconAlert = (p2) => /* @__PURE__ */ jsxRuntimeExports.jsxs(S$1, { ...p2, children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M8 2l6.5 11.5h-13z" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M8 6.5v3M8 11.6v.2" })
] });
const IconSize = ({ s, ...p2 }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(S$1, { ...p2, children: [
  s === "L" && /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "1.5", y: "2.5", width: "13", height: "11", rx: "1" }),
  s === "M" && /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "3.5", y: "4.5", width: "9", height: "7", rx: "1" }),
  s === "S" && /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "5.5", y: "6", width: "5", height: "4", rx: "0.8" })
] });
const IconPlus = (p2) => /* @__PURE__ */ jsxRuntimeExports.jsx(S$1, { ...p2, children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M8 3v10M3 8h10" }) });
const IconTrash = (p2) => /* @__PURE__ */ jsxRuntimeExports.jsx(S$1, { ...p2, children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M3 4.5h10M6.5 4.5V3h3v1.5M4.5 4.5l.6 8.5h5.8l.6-8.5" }) });
function ConnDot() {
  const conns = useStore((s) => s.conns);
  const open = conns.filter((c2) => c2.status === "open").length;
  const cls = conns.length && open === conns.length ? "bg-up shadow-[0_0_6px_#28D7A4]" : open > 0 ? "bg-warn" : "bg-down animate-pulse";
  const title = conns.map((c2) => `${c2.exchange} ${c2.market}: ${c2.status}${c2.error ? " · " + c2.error : ""}`).join("\n") || "未连接";
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { title, className: `inline-block h-1.5 w-1.5 rounded-full ${cls}` });
}
function WindowControls({ compact = false }) {
  const win = useStore((s) => s.win);
  const sizes = [
    { k: "large", s: "L", t: "LARGE 1200×760" },
    { k: "medium", s: "M", t: "MEDIUM 760×480" },
    { k: "small", s: "S", t: "SMALL 340×200" }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "no-drag flex items-center gap-0.5", children: [
    !compact && sizes.map((x2) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { title: x2.t, className: `icon-btn ${win?.size === x2.k ? "on" : ""}`, onClick: () => api.invoke("win:set-size", x2.k), children: /* @__PURE__ */ jsxRuntimeExports.jsx(IconSize, { s: x2.s, size: 13 }) }, x2.k)),
    !compact && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mx-1 h-3 w-px bg-line2" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { title: "窗口置顶", className: `icon-btn ${win?.alwaysOnTop ? "on" : ""}`, onClick: () => api.invoke("win:set-top", !win?.alwaysOnTop), children: /* @__PURE__ */ jsxRuntimeExports.jsx(IconPin, { size: 13 }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { title: "一键透明 (Ctrl+Alt+T)", className: `icon-btn ${win?.ghost ? "on" : ""}`, onClick: () => api.invoke("win:toggle-ghost"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(IconGhost, { size: 13 }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { title: "鼠标穿透 (Ctrl+Alt+M 恢复)", className: `icon-btn ${win?.clickThrough ? "on" : ""}`, onClick: () => api.invoke("win:set-click-through", true), children: /* @__PURE__ */ jsxRuntimeExports.jsx(IconMouse, { size: 13 }) }),
    !compact && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { title: "专注模式", className: `icon-btn ${win?.focusMode ? "on" : ""}`, onClick: () => api.invoke("win:set-focus-mode", !win?.focusMode), children: /* @__PURE__ */ jsxRuntimeExports.jsx(IconFocus, { size: 13 }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { title: "设置", className: "icon-btn", onClick: () => openSettings(), children: /* @__PURE__ */ jsxRuntimeExports.jsx(IconGear, { size: 13 }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mx-1 h-3 w-px bg-line2" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { title: "最小化", className: "icon-btn", onClick: () => api.invoke("win:minimize"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(IconMin, { size: 13 }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { title: "隐藏到托盘 (Ctrl+Alt+H)", className: "icon-btn hover:!text-down", onClick: () => api.invoke("win:hide"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(IconClose, { size: 13 }) })
  ] });
}
function Logo({ small = false }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: small ? 14 : 16, height: small ? 14 : 16, viewBox: "0 0 16 16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M2 12 L6 5 L9 9 L14 3", fill: "none", stroke: "#00E5FF", strokeWidth: "1.6", strokeLinecap: "round", strokeLinejoin: "round" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "14", cy: "3", r: "1.4", fill: "#9061FF" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `num font-bold tracking-[0.22em] text-text ${small ? "text-[10px]" : "text-[11px]"}`, children: [
      "NEURAL",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-cyan", children: "·" }),
      "TRADE"
    ] })
  ] });
}
function priceDecimals(p2) {
  if (!isFinite(p2) || p2 === 0) return 2;
  const a2 = Math.abs(p2);
  if (a2 >= 1e4) return 1;
  if (a2 >= 100) return 2;
  if (a2 >= 1) return 3;
  return 5;
}
function fmtPrice(p2) {
  if (p2 === null || p2 === void 0 || !isFinite(p2)) return "—";
  return p2.toLocaleString("en-US", { minimumFractionDigits: priceDecimals(p2), maximumFractionDigits: priceDecimals(p2) });
}
function fmtPct(p2, digits = 2, sign = true) {
  if (p2 === null || p2 === void 0 || !isFinite(p2)) return "—";
  return `${sign && p2 > 0 ? "+" : ""}${p2.toFixed(digits)}%`;
}
function fmtCompact(n) {
  if (n === null || n === void 0 || !isFinite(n)) return "—";
  const a2 = Math.abs(n);
  if (a2 >= 1e9) return (n / 1e9).toFixed(2) + "B";
  if (a2 >= 1e6) return (n / 1e6).toFixed(2) + "M";
  if (a2 >= 1e3) return (n / 1e3).toFixed(1) + "K";
  return n.toFixed(2);
}
function fmtTime(t, withDate = false) {
  if (!t) return "—";
  const d2 = new Date(t);
  const p2 = (n) => String(n).padStart(2, "0");
  const hm = `${p2(d2.getHours())}:${p2(d2.getMinutes())}:${p2(d2.getSeconds())}`;
  return withDate ? `${p2(d2.getMonth() + 1)}-${p2(d2.getDate())} ${hm}` : hm;
}
function ago(t, now2 = Date.now()) {
  if (!t) return "—";
  const s = Math.max(0, Math.round((now2 - t) / 1e3));
  if (s < 60) return `${s}s 前`;
  if (s < 3600) return `${Math.floor(s / 60)}m 前`;
  if (s < 86400) return `${Math.floor(s / 3600)}h 前`;
  return `${Math.floor(s / 86400)}d 前`;
}
const coin = (s) => s.replace("USDT", "");
const SIGNAL_TEXT = { LONG: "考虑做多", SHORT: "考虑做空", WAIT: "观望" };
function AnimatedPrice({ value, className = "", format = fmtPrice }) {
  const prev = reactExports.useRef(value);
  const [flash, setFlash] = reactExports.useState("");
  reactExports.useEffect(() => {
    if (value !== null && value !== void 0 && prev.current !== null && prev.current !== void 0 && value !== prev.current) {
      setFlash(value > prev.current ? "flash-up" : "flash-down");
      const t = setTimeout(() => setFlash(""), 600);
      prev.current = value;
      return () => clearTimeout(t);
    }
    prev.current = value;
  }, [value]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `num ${className} ${flash}`, children: value === null || value === void 0 || value === 0 ? "—" : format(value) });
}
const SIG_STYLE = {
  LONG: { text: "LONG", cls: "border-up/60 bg-up/10 text-up", dot: "bg-up" },
  SHORT: { text: "SHORT", cls: "border-down/60 bg-down/10 text-down", dot: "bg-down" },
  WAIT: { text: "WAIT", cls: "border-warn/50 bg-warn/5 text-warn", dot: "bg-warn" }
};
function SignalBadge({ signal, size: size2 = "md", muted = false }) {
  const s = signal ? SIG_STYLE[signal] : { text: "—", cls: "border-line2 text-mute", dot: "bg-mute" };
  const pad2 = size2 === "lg" ? "px-3 py-1 text-[15px]" : size2 === "sm" ? "px-1.5 py-0 text-[10px]" : "px-2 py-0.5 text-[11px]";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", initial: false, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.span,
    {
      initial: { opacity: 0, y: 4, scale: 0.96 },
      animate: { opacity: muted ? 0.55 : 1, y: 0, scale: 1 },
      exit: { opacity: 0, y: -4 },
      transition: { duration: 0.22 },
      className: `num inline-flex items-center gap-1.5 rounded-sm border font-bold tracking-widest ${pad2} ${s.cls}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `h-1.5 w-1.5 rounded-full ${s.dot}` }),
        s.text
      ]
    },
    signal ?? "none"
  ) });
}
function TrendArrow({ trend }) {
  if (trend === "bull") return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-up", children: "▲" });
  if (trend === "bear") return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-down", children: "▼" });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-mute", children: "◆" });
}
function VerifyChip({ v: v2 }) {
  if (v2 === "official") return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "chip border-cyan/40 text-cyan", children: "官方" });
  if (v2 === "verified") return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "chip border-up/40 text-up", children: "多源核实" });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "chip border-warn/40 text-warn", children: "待核实" });
}
function Toggle({ checked, onChange, label, disabled }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: `inline-flex cursor-pointer items-center gap-2 ${disabled ? "opacity-40" : ""}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        disabled,
        onClick: () => onChange(!checked),
        className: `relative h-4 w-7 rounded-full border transition-colors ${checked ? "border-cyan/70 bg-cyan/25" : "border-line2 bg-bg"}`,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(motion.span, { layout: true, transition: { type: "spring", stiffness: 600, damping: 35 }, className: `absolute top-[1px] h-3 w-3 rounded-full ${checked ? "right-[1px] bg-cyan" : "left-[1px] bg-mute"}` })
      }
    ),
    label && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-text", children: label })
  ] });
}
function StrengthBar({ value }) {
  const v2 = Math.max(0, Math.min(100, value));
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1 w-full overflow-hidden rounded-full bg-line", children: /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { className: "h-full rounded-full bg-gradient-to-r from-cyan to-violet", initial: { width: 0 }, animate: { width: `${v2}%` }, transition: { duration: 0.5, ease: "easeOut" } }) });
}
function NumField({ label, value, onCommit, step = 1, min, max, suffix }) {
  const [v2, setV] = reactExports.useState(String(value));
  reactExports.useEffect(() => setV(String(value)), [value]);
  const commit = () => {
    const n = parseFloat(v2);
    if (isFinite(n) && n !== value) onCommit(n);
    else setV(String(value));
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "label", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "input num", type: "number", value: v2, step, min, max, onChange: (e2) => setV(e2.target.value), onBlur: commit, onKeyDown: (e2) => e2.key === "Enter" && commit() }),
      suffix && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "shrink-0 text-[10px] text-mute", children: suffix })
    ] })
  ] });
}
function Field({ label, children, hint }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "label", children: label }),
    children,
    hint && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-[10px] leading-4 text-mute", children: hint })
  ] });
}
function useNow(ms2 = 1e3) {
  const [n, setN] = reactExports.useState(Date.now());
  reactExports.useEffect(() => {
    const t = setInterval(() => setN(Date.now()), ms2);
    return () => clearInterval(t);
  }, [ms2]);
  return n;
}
function useTicker(s, m2) {
  return useStore((st2) => st2.tickers[tk(s, m2)]);
}
function useStale(updatedAt) {
  const now2 = useNow(2e3);
  const staleSec = useStore((s) => s.settings?.market.staleSeconds ?? 90);
  return !updatedAt || now2 - updatedAt > staleSec * 1e3;
}
function TickerCard({ symbol, market, active }) {
  const t = useTicker(symbol, market);
  const a2 = useStore((s) => s.analyses[tk(symbol, market)]);
  const stale = useStale(t?.updatedAt);
  const up = (t?.changePct ?? 0) >= 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "button",
    {
      onClick: () => patchSettings({ market: { symbol, marketType: market } }),
      className: `group relative flex min-w-0 flex-1 flex-col gap-1 rounded-md border px-3 py-2 text-left transition-all duration-200 ${active ? "border-cyan/50 bg-cyan/[0.04] shadow-glow" : "border-line bg-panel/80 hover:border-line2"}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "num text-[12px] font-bold tracking-wider", children: coin(symbol) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "chip border-line2 text-mute", children: market === "perp" ? "PERP" : "SPOT" }),
            t?.anomaly && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "chip animate-pulse border-warn/60 text-warn", children: [
              "异动 ",
              fmtPct(t.anomaly.pct, 1)
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SignalBadge, { signal: a2?.status === "ok" ? a2.signal : a2 ? "WAIT" : null, size: "sm", muted: a2?.status !== "ok" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedPrice, { value: t?.last, className: `text-[20px] font-semibold ${stale ? "text-mute" : ""}` }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `num text-[12px] ${up ? "text-up" : "text-down"}`, children: fmtPct(t?.changePct) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "num grid grid-cols-4 gap-x-2 text-[10px] text-mute", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            "H ",
            fmtPrice(t?.high24)
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            "L ",
            fmtPrice(t?.low24)
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            "额 ",
            fmtCompact(t?.quoteVol24)
          ] }),
          market === "perp" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { title: "资金费率 / 未平仓量", children: [
            "FR ",
            t?.fundingRate !== null && t?.fundingRate !== void 0 ? (t.fundingRate * 100).toFixed(4) + "%" : "—"
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            "量 ",
            fmtCompact(t?.vol24)
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "num flex justify-between text-[9px] text-mute/70", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: market === "perp" ? `OI ${fmtCompact(t?.openInterest)} ${coin(symbol)}` : " " }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: stale ? "text-down" : "", children: [
            stale ? "数据过期 " : "",
            fmtTime(t?.updatedAt)
          ] })
        ] })
      ]
    }
  );
}
function CompactRow({ symbol, market }) {
  const t = useTicker(symbol, market);
  const a2 = useStore((s) => s.analyses[tk(symbol, market)]);
  const stale = useStale(t?.updatedAt);
  const up = (t?.changePct ?? 0) >= 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2 px-3 py-1.5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex w-[54px] items-center gap-1.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TrendArrow, { trend: a2?.trend }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "num text-[12px] font-bold", children: coin(symbol) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 items-baseline justify-end gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedPrice, { value: t?.last, className: `text-[15px] font-semibold ${stale ? "text-mute" : ""}` }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `num w-[58px] text-right text-[11px] ${up ? "text-up" : "text-down"}`, children: fmtPct(t?.changePct) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-[64px] text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SignalBadge, { signal: a2?.status === "ok" ? a2.signal : a2 ? "WAIT" : null, size: "sm", muted: a2?.status !== "ok" }) })
  ] });
}
function size(_a) {
  var width = _a.width, height = _a.height;
  if (width < 0) {
    throw new Error("Negative width is not allowed for Size");
  }
  if (height < 0) {
    throw new Error("Negative height is not allowed for Size");
  }
  return {
    width,
    height
  };
}
function equalSizes(first, second) {
  return first.width === second.width && first.height === second.height;
}
var Observable = (
  /** @class */
  (function() {
    function Observable2(win) {
      var _this = this;
      this._resolutionListener = function() {
        return _this._onResolutionChanged();
      };
      this._resolutionMediaQueryList = null;
      this._observers = [];
      this._window = win;
      this._installResolutionListener();
    }
    Observable2.prototype.dispose = function() {
      this._uninstallResolutionListener();
      this._window = null;
    };
    Object.defineProperty(Observable2.prototype, "value", {
      get: function() {
        return this._window.devicePixelRatio;
      },
      enumerable: false,
      configurable: true
    });
    Observable2.prototype.subscribe = function(next) {
      var _this = this;
      var observer = { next };
      this._observers.push(observer);
      return {
        unsubscribe: function() {
          _this._observers = _this._observers.filter(function(o2) {
            return o2 !== observer;
          });
        }
      };
    };
    Observable2.prototype._installResolutionListener = function() {
      if (this._resolutionMediaQueryList !== null) {
        throw new Error("Resolution listener is already installed");
      }
      var dppx = this._window.devicePixelRatio;
      this._resolutionMediaQueryList = this._window.matchMedia("all and (resolution: ".concat(dppx, "dppx)"));
      this._resolutionMediaQueryList.addListener(this._resolutionListener);
    };
    Observable2.prototype._uninstallResolutionListener = function() {
      if (this._resolutionMediaQueryList !== null) {
        this._resolutionMediaQueryList.removeListener(this._resolutionListener);
        this._resolutionMediaQueryList = null;
      }
    };
    Observable2.prototype._reinstallResolutionListener = function() {
      this._uninstallResolutionListener();
      this._installResolutionListener();
    };
    Observable2.prototype._onResolutionChanged = function() {
      var _this = this;
      this._observers.forEach(function(observer) {
        return observer.next(_this._window.devicePixelRatio);
      });
      this._reinstallResolutionListener();
    };
    return Observable2;
  })()
);
function createObservable(win) {
  return new Observable(win);
}
var DevicePixelContentBoxBinding = (
  /** @class */
  (function() {
    function DevicePixelContentBoxBinding2(canvasElement, transformBitmapSize, options) {
      var _a;
      this._canvasElement = null;
      this._bitmapSizeChangedListeners = [];
      this._suggestedBitmapSize = null;
      this._suggestedBitmapSizeChangedListeners = [];
      this._devicePixelRatioObservable = null;
      this._canvasElementResizeObserver = null;
      this._canvasElement = canvasElement;
      this._canvasElementClientSize = size({
        width: this._canvasElement.clientWidth,
        height: this._canvasElement.clientHeight
      });
      this._transformBitmapSize = transformBitmapSize !== null && transformBitmapSize !== void 0 ? transformBitmapSize : (function(size2) {
        return size2;
      });
      this._allowResizeObserver = (_a = options === null || options === void 0 ? void 0 : options.allowResizeObserver) !== null && _a !== void 0 ? _a : true;
      this._chooseAndInitObserver();
    }
    DevicePixelContentBoxBinding2.prototype.dispose = function() {
      var _a, _b;
      if (this._canvasElement === null) {
        throw new Error("Object is disposed");
      }
      (_a = this._canvasElementResizeObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
      this._canvasElementResizeObserver = null;
      (_b = this._devicePixelRatioObservable) === null || _b === void 0 ? void 0 : _b.dispose();
      this._devicePixelRatioObservable = null;
      this._suggestedBitmapSizeChangedListeners.length = 0;
      this._bitmapSizeChangedListeners.length = 0;
      this._canvasElement = null;
    };
    Object.defineProperty(DevicePixelContentBoxBinding2.prototype, "canvasElement", {
      get: function() {
        if (this._canvasElement === null) {
          throw new Error("Object is disposed");
        }
        return this._canvasElement;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(DevicePixelContentBoxBinding2.prototype, "canvasElementClientSize", {
      get: function() {
        return this._canvasElementClientSize;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(DevicePixelContentBoxBinding2.prototype, "bitmapSize", {
      get: function() {
        return size({
          width: this.canvasElement.width,
          height: this.canvasElement.height
        });
      },
      enumerable: false,
      configurable: true
    });
    DevicePixelContentBoxBinding2.prototype.resizeCanvasElement = function(clientSize) {
      this._canvasElementClientSize = size(clientSize);
      this.canvasElement.style.width = "".concat(this._canvasElementClientSize.width, "px");
      this.canvasElement.style.height = "".concat(this._canvasElementClientSize.height, "px");
      this._invalidateBitmapSize();
    };
    DevicePixelContentBoxBinding2.prototype.subscribeBitmapSizeChanged = function(listener) {
      this._bitmapSizeChangedListeners.push(listener);
    };
    DevicePixelContentBoxBinding2.prototype.unsubscribeBitmapSizeChanged = function(listener) {
      this._bitmapSizeChangedListeners = this._bitmapSizeChangedListeners.filter(function(l2) {
        return l2 !== listener;
      });
    };
    Object.defineProperty(DevicePixelContentBoxBinding2.prototype, "suggestedBitmapSize", {
      get: function() {
        return this._suggestedBitmapSize;
      },
      enumerable: false,
      configurable: true
    });
    DevicePixelContentBoxBinding2.prototype.subscribeSuggestedBitmapSizeChanged = function(listener) {
      this._suggestedBitmapSizeChangedListeners.push(listener);
    };
    DevicePixelContentBoxBinding2.prototype.unsubscribeSuggestedBitmapSizeChanged = function(listener) {
      this._suggestedBitmapSizeChangedListeners = this._suggestedBitmapSizeChangedListeners.filter(function(l2) {
        return l2 !== listener;
      });
    };
    DevicePixelContentBoxBinding2.prototype.applySuggestedBitmapSize = function() {
      if (this._suggestedBitmapSize === null) {
        return;
      }
      var oldSuggestedSize = this._suggestedBitmapSize;
      this._suggestedBitmapSize = null;
      this._resizeBitmap(oldSuggestedSize);
      this._emitSuggestedBitmapSizeChanged(oldSuggestedSize, this._suggestedBitmapSize);
    };
    DevicePixelContentBoxBinding2.prototype._resizeBitmap = function(newSize) {
      var oldSize = this.bitmapSize;
      if (equalSizes(oldSize, newSize)) {
        return;
      }
      this.canvasElement.width = newSize.width;
      this.canvasElement.height = newSize.height;
      this._emitBitmapSizeChanged(oldSize, newSize);
    };
    DevicePixelContentBoxBinding2.prototype._emitBitmapSizeChanged = function(oldSize, newSize) {
      var _this = this;
      this._bitmapSizeChangedListeners.forEach(function(listener) {
        return listener.call(_this, oldSize, newSize);
      });
    };
    DevicePixelContentBoxBinding2.prototype._suggestNewBitmapSize = function(newSize) {
      var oldSuggestedSize = this._suggestedBitmapSize;
      var finalNewSize = size(this._transformBitmapSize(newSize, this._canvasElementClientSize));
      var newSuggestedSize = equalSizes(this.bitmapSize, finalNewSize) ? null : finalNewSize;
      if (oldSuggestedSize === null && newSuggestedSize === null) {
        return;
      }
      if (oldSuggestedSize !== null && newSuggestedSize !== null && equalSizes(oldSuggestedSize, newSuggestedSize)) {
        return;
      }
      this._suggestedBitmapSize = newSuggestedSize;
      this._emitSuggestedBitmapSizeChanged(oldSuggestedSize, newSuggestedSize);
    };
    DevicePixelContentBoxBinding2.prototype._emitSuggestedBitmapSizeChanged = function(oldSize, newSize) {
      var _this = this;
      this._suggestedBitmapSizeChangedListeners.forEach(function(listener) {
        return listener.call(_this, oldSize, newSize);
      });
    };
    DevicePixelContentBoxBinding2.prototype._chooseAndInitObserver = function() {
      var _this = this;
      if (!this._allowResizeObserver) {
        this._initDevicePixelRatioObservable();
        return;
      }
      isDevicePixelContentBoxSupported().then(function(isSupported) {
        return isSupported ? _this._initResizeObserver() : _this._initDevicePixelRatioObservable();
      });
    };
    DevicePixelContentBoxBinding2.prototype._initDevicePixelRatioObservable = function() {
      var _this = this;
      if (this._canvasElement === null) {
        return;
      }
      var win = canvasElementWindow(this._canvasElement);
      if (win === null) {
        throw new Error("No window is associated with the canvas");
      }
      this._devicePixelRatioObservable = createObservable(win);
      this._devicePixelRatioObservable.subscribe(function() {
        return _this._invalidateBitmapSize();
      });
      this._invalidateBitmapSize();
    };
    DevicePixelContentBoxBinding2.prototype._invalidateBitmapSize = function() {
      var _a, _b;
      if (this._canvasElement === null) {
        return;
      }
      var win = canvasElementWindow(this._canvasElement);
      if (win === null) {
        return;
      }
      var ratio = (_b = (_a = this._devicePixelRatioObservable) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : win.devicePixelRatio;
      var canvasRects = this._canvasElement.getClientRects();
      var newSize = (
        // eslint-disable-next-line no-negated-condition
        canvasRects[0] !== void 0 ? predictedBitmapSize(canvasRects[0], ratio) : size({
          width: this._canvasElementClientSize.width * ratio,
          height: this._canvasElementClientSize.height * ratio
        })
      );
      this._suggestNewBitmapSize(newSize);
    };
    DevicePixelContentBoxBinding2.prototype._initResizeObserver = function() {
      var _this = this;
      if (this._canvasElement === null) {
        return;
      }
      this._canvasElementResizeObserver = new ResizeObserver(function(entries) {
        var entry = entries.find(function(entry2) {
          return entry2.target === _this._canvasElement;
        });
        if (!entry || !entry.devicePixelContentBoxSize || !entry.devicePixelContentBoxSize[0]) {
          return;
        }
        var entrySize = entry.devicePixelContentBoxSize[0];
        var newSize = size({
          width: entrySize.inlineSize,
          height: entrySize.blockSize
        });
        _this._suggestNewBitmapSize(newSize);
      });
      this._canvasElementResizeObserver.observe(this._canvasElement, { box: "device-pixel-content-box" });
    };
    return DevicePixelContentBoxBinding2;
  })()
);
function bindTo(canvasElement, target) {
  {
    return new DevicePixelContentBoxBinding(canvasElement, target.transform, target.options);
  }
}
function canvasElementWindow(canvasElement) {
  return canvasElement.ownerDocument.defaultView;
}
function isDevicePixelContentBoxSupported() {
  return new Promise(function(resolve) {
    var ro = new ResizeObserver(function(entries) {
      resolve(entries.every(function(entry) {
        return "devicePixelContentBoxSize" in entry;
      }));
      ro.disconnect();
    });
    ro.observe(document.body, { box: "device-pixel-content-box" });
  }).catch(function() {
    return false;
  });
}
function predictedBitmapSize(canvasRect, ratio) {
  return size({
    width: Math.round(canvasRect.left * ratio + canvasRect.width * ratio) - Math.round(canvasRect.left * ratio),
    height: Math.round(canvasRect.top * ratio + canvasRect.height * ratio) - Math.round(canvasRect.top * ratio)
  });
}
var CanvasRenderingTarget2D = (
  /** @class */
  (function() {
    function CanvasRenderingTarget2D2(context, mediaSize, bitmapSize) {
      if (mediaSize.width === 0 || mediaSize.height === 0) {
        throw new TypeError("Rendering target could only be created on a media with positive width and height");
      }
      this._mediaSize = mediaSize;
      if (bitmapSize.width === 0 || bitmapSize.height === 0) {
        throw new TypeError("Rendering target could only be created using a bitmap with positive integer width and height");
      }
      this._bitmapSize = bitmapSize;
      this._context = context;
    }
    CanvasRenderingTarget2D2.prototype.useMediaCoordinateSpace = function(f2) {
      try {
        this._context.save();
        this._context.setTransform(1, 0, 0, 1, 0, 0);
        this._context.scale(this._horizontalPixelRatio, this._verticalPixelRatio);
        return f2({
          context: this._context,
          mediaSize: this._mediaSize
        });
      } finally {
        this._context.restore();
      }
    };
    CanvasRenderingTarget2D2.prototype.useBitmapCoordinateSpace = function(f2) {
      try {
        this._context.save();
        this._context.setTransform(1, 0, 0, 1, 0, 0);
        return f2({
          context: this._context,
          mediaSize: this._mediaSize,
          bitmapSize: this._bitmapSize,
          horizontalPixelRatio: this._horizontalPixelRatio,
          verticalPixelRatio: this._verticalPixelRatio
        });
      } finally {
        this._context.restore();
      }
    };
    Object.defineProperty(CanvasRenderingTarget2D2.prototype, "_horizontalPixelRatio", {
      get: function() {
        return this._bitmapSize.width / this._mediaSize.width;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(CanvasRenderingTarget2D2.prototype, "_verticalPixelRatio", {
      get: function() {
        return this._bitmapSize.height / this._mediaSize.height;
      },
      enumerable: false,
      configurable: true
    });
    return CanvasRenderingTarget2D2;
  })()
);
function tryCreateCanvasRenderingTarget2D(binding, contextOptions) {
  var mediaSize = binding.canvasElementClientSize;
  if (mediaSize.width === 0 || mediaSize.height === 0) {
    return null;
  }
  var bitmapSize = binding.bitmapSize;
  if (bitmapSize.width === 0 || bitmapSize.height === 0) {
    return null;
  }
  var context = binding.canvasElement.getContext("2d", contextOptions);
  if (context === null) {
    return null;
  }
  return new CanvasRenderingTarget2D(context, mediaSize, bitmapSize);
}
/*!
 * @license
 * TradingView Lightweight Charts™ v5.2.1
 * Copyright (c) 2026 TradingView, Inc.
 * Licensed under Apache License 2.0 https://www.apache.org/licenses/LICENSE-2.0
 */
const e = { title: "", visible: true, hitTestTolerance: 3, lastValueVisible: true, priceLineVisible: true, priceLineSource: 0, priceLineWidth: 1, priceLineColor: "", priceLineStyle: 2, baseLineVisible: true, baseLineWidth: 1, baseLineColor: "#B2B5BE", baseLineStyle: 0, priceFormat: { type: "price", precision: 2, minMove: 0.01 } };
var r, h;
function a(t, i) {
  const n = (function(t2, i2) {
    switch (t2) {
      case 0:
      default:
        return [];
      case 1:
        return [i2, i2];
      case 2:
        return [2 * i2, 2 * i2];
      case 3:
        return [6 * i2, 6 * i2];
      case 4:
        return [i2, 4 * i2];
    }
  })(i, t.lineWidth);
  return t.setLineDash(n), n;
}
function l(t, i, n, s) {
  t.beginPath();
  const e2 = t.lineWidth % 2 ? 0.5 : 0;
  t.moveTo(n, i + e2), t.lineTo(s, i + e2), t.stroke();
}
function o(t, i) {
  if (!t) throw new Error("Assertion failed" + (i ? ": " + i : ""));
}
function _(t) {
  if (void 0 === t) throw new Error("Value is undefined");
  return t;
}
function u(t) {
  if (null === t) throw new Error("Value is null");
  return t;
}
function c(t) {
  return u(_(t));
}
!(function(t) {
  t[t.Simple = 0] = "Simple", t[t.WithSteps = 1] = "WithSteps", t[t.Curved = 2] = "Curved";
})(r || (r = {})), (function(t) {
  t[t.Solid = 0] = "Solid", t[t.Dotted = 1] = "Dotted", t[t.Dashed = 2] = "Dashed", t[t.LargeDashed = 3] = "LargeDashed", t[t.SparseDotted = 4] = "SparseDotted";
})(h || (h = {}));
class d {
  constructor() {
    this.t = [];
  }
  i(t, i, n) {
    const s = { h: t, l: i, o: true === n };
    this.t.push(s);
  }
  _(t) {
    const i = this.t.findIndex(((i2) => t === i2.h));
    i > -1 && this.t.splice(i, 1);
  }
  u(t) {
    this.t = this.t.filter(((i) => i.l !== t));
  }
  p(t, i, n) {
    const s = [...this.t];
    this.t = this.t.filter(((t2) => !t2.o)), s.forEach(((s2) => s2.h(t, i, n)));
  }
  v() {
    return this.t.length > 0;
  }
  m() {
    this.t = [];
  }
}
function f(t, ...i) {
  for (const n of i) for (const i2 in n) void 0 !== n[i2] && Object.prototype.hasOwnProperty.call(n, i2) && !["__proto__", "constructor", "prototype"].includes(i2) && ("object" != typeof n[i2] || void 0 === t[i2] || Array.isArray(n[i2]) ? t[i2] = n[i2] : f(t[i2], n[i2]));
  return t;
}
function p(t) {
  return "number" == typeof t && isFinite(t);
}
function v(t) {
  return "number" == typeof t && t % 1 == 0;
}
function m(t) {
  return "string" == typeof t;
}
function w(t) {
  return "boolean" == typeof t;
}
function M(t) {
  const i = t;
  if (!i || "object" != typeof i) return i;
  let n, s, e2;
  for (s in n = Array.isArray(i) ? [] : {}, i) i.hasOwnProperty(s) && (e2 = i[s], n[s] = e2 && "object" == typeof e2 ? M(e2) : e2);
  return n;
}
function g(t) {
  return null !== t;
}
function b(t) {
  return null === t ? void 0 : t;
}
const S = "-apple-system, BlinkMacSystemFont, 'Trebuchet MS', Roboto, Ubuntu, sans-serif";
function x(t, i, n) {
  return void 0 === i && (i = S), `${n = void 0 !== n ? `${n} ` : ""}${t}px ${i}`;
}
class C {
  constructor(t) {
    this.M = { S: 1, C: 5, P: NaN, k: "", T: "", R: "", D: "", I: 0, V: 0, B: 0, A: 0, L: 0 }, this.O = t;
  }
  N() {
    const t = this.M, i = this.F(), n = this.W();
    return t.P === i && t.T === n || (t.P = i, t.T = n, t.k = x(i, n), t.A = 2.5 / 12 * i, t.I = t.A, t.V = i / 12 * t.C, t.B = i / 12 * t.C, t.L = 0), t.R = this.H(), t.D = this.U(), this.M;
  }
  H() {
    return this.O.N().layout.textColor;
  }
  U() {
    return this.O.$();
  }
  F() {
    return this.O.N().layout.fontSize;
  }
  W() {
    return this.O.N().layout.fontFamily;
  }
}
function y(t) {
  return t < 0 ? 0 : t > 255 ? 255 : Math.round(t) || 0;
}
function P(t) {
  return 0.199 * t[0] + 0.687 * t[1] + 0.114 * t[2];
}
class k {
  constructor(t, i) {
    this.j = /* @__PURE__ */ new Map(), this.q = t, i && (this.j = i);
  }
  Y(t, i) {
    if ("transparent" === t) return t;
    const n = this.K(t), s = n[3];
    return `rgba(${n[0]}, ${n[1]}, ${n[2]}, ${i * s})`;
  }
  G(t) {
    const i = this.K(t);
    return { Z: `rgb(${i[0]}, ${i[1]}, ${i[2]})`, X: P(i) > 160 ? "black" : "white" };
  }
  J(t) {
    return P(this.K(t));
  }
  tt(t, i, n) {
    const [s, e2, r2, h2] = this.K(t), [a2, l2, o2, _2] = this.K(i), u2 = [y(s + n * (a2 - s)), y(e2 + n * (l2 - e2)), y(r2 + n * (o2 - r2)), (c2 = h2 + n * (_2 - h2), c2 <= 0 || c2 > 1 ? Math.min(Math.max(c2, 0), 1) : Math.round(1e4 * c2) / 1e4)];
    var c2;
    return `rgba(${u2[0]}, ${u2[1]}, ${u2[2]}, ${u2[3]})`;
  }
  K(t) {
    const i = this.j.get(t);
    if (i) return i;
    const n = (function(t2) {
      const i2 = document.createElement("div");
      i2.style.display = "none", document.body.appendChild(i2), i2.style.color = t2;
      const n2 = window.getComputedStyle(i2).color;
      return document.body.removeChild(i2), n2;
    })(t), s = n.match(/^rgba?\s*\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d*\.?\d+))?\)$/);
    if (!s) {
      if (this.q.length) for (const i2 of this.q) {
        const n2 = i2(t);
        if (n2) return this.j.set(t, n2), n2;
      }
      throw new Error(`Failed to parse color: ${t}`);
    }
    const e2 = [parseInt(s[1], 10), parseInt(s[2], 10), parseInt(s[3], 10), s[4] ? parseFloat(s[4]) : 1];
    return this.j.set(t, e2), e2;
  }
}
class T {
  constructor() {
    this.it = [];
  }
  nt(t) {
    this.it = t;
  }
  st(t, i, n) {
    this.it.forEach(((s) => {
      s.st(t, i, n);
    }));
  }
}
class R {
  st(t, i, n) {
    t.useBitmapCoordinateSpace(((t2) => this.et(t2, i, n)));
  }
}
class D extends R {
  constructor() {
    super(...arguments), this.rt = null;
  }
  ht(t) {
    this.rt = t;
  }
  et({ context: t, horizontalPixelRatio: i, verticalPixelRatio: n }) {
    if (null === this.rt || null === this.rt.lt) return;
    const s = this.rt.lt, e2 = this.rt, r2 = Math.max(1, Math.floor(i)) % 2 / 2, h2 = (h3) => {
      t.beginPath();
      for (let a2 = s.to - 1; a2 >= s.from; --a2) {
        const s2 = e2.ot[a2], l2 = Math.round(s2._t * i) + r2, o2 = s2.ut * n, _2 = h3 * n + r2;
        t.moveTo(l2, o2), t.arc(l2, o2, _2, 0, 2 * Math.PI);
      }
      t.fill();
    };
    e2.ct > 0 && (t.fillStyle = e2.dt, h2(e2.ft + e2.ct)), t.fillStyle = e2.vt, h2(e2.ft);
  }
}
function I() {
  return { ot: [{ _t: 0, ut: 0, wt: 0, Mt: 0 }], vt: "", dt: "", ft: 0, ct: 0, lt: null };
}
const V = { from: 0, to: 1 };
class B {
  constructor(t, i, n) {
    this.gt = new T(), this.bt = [], this.St = [], this.xt = true, this.O = t, this.Ct = i, this.yt = n, this.gt.nt(this.bt);
  }
  Pt(t) {
    this.kt(), this.xt = true;
  }
  Tt() {
    return this.xt && (this.Rt(), this.xt = false), this.gt;
  }
  kt() {
    const t = this.yt.Dt();
    t.length !== this.bt.length && (this.St = t.map(I), this.bt = this.St.map(((t2) => {
      const i = new D();
      return i.ht(t2), i;
    })), this.gt.nt(this.bt));
  }
  Rt() {
    const t = 2 === this.Ct.N().mode || !this.Ct.It(), i = this.yt.Vt(), n = this.Ct.Bt(), s = this.O.Et();
    this.kt(), i.forEach(((i2, e2) => {
      const r2 = this.St[e2], h2 = i2.At(n), a2 = i2.Lt();
      !t && null !== h2 && i2.It() && null !== a2 ? (r2.vt = h2.zt, r2.ft = h2.ft, r2.ct = h2.Ot, r2.ot[0].Mt = h2.Mt, r2.ot[0].ut = i2.Ft().Nt(h2.Mt, a2.Wt), r2.dt = h2.Ht ?? this.O.Ut(r2.ot[0].ut / i2.Ft().$t()), r2.ot[0].wt = n, r2.ot[0]._t = s.jt(n), r2.lt = V) : r2.lt = null;
    }));
  }
}
class E extends R {
  constructor(t) {
    super(), this.qt = t;
  }
  et({ context: t, bitmapSize: i, horizontalPixelRatio: n, verticalPixelRatio: s }) {
    if (null === this.qt) return;
    const e2 = this.qt.Yt.It, r2 = this.qt.Kt.It;
    if (!e2 && !r2) return;
    const h2 = Math.round(this.qt._t * n), o2 = Math.round(this.qt.ut * s);
    t.lineCap = "butt", e2 && h2 >= 0 && (t.lineWidth = Math.floor(this.qt.Yt.ct * n), t.strokeStyle = this.qt.Yt.R, t.fillStyle = this.qt.Yt.R, a(t, this.qt.Yt.Gt), (function(t2, i2, n2, s2) {
      t2.beginPath();
      const e3 = t2.lineWidth % 2 ? 0.5 : 0;
      t2.moveTo(i2 + e3, n2), t2.lineTo(i2 + e3, s2), t2.stroke();
    })(t, h2, 0, i.height)), r2 && o2 >= 0 && (t.lineWidth = Math.floor(this.qt.Kt.ct * s), t.strokeStyle = this.qt.Kt.R, t.fillStyle = this.qt.Kt.R, a(t, this.qt.Kt.Gt), l(t, o2, 0, i.width));
  }
}
class A {
  constructor(t, i) {
    this.xt = true, this.Zt = { Yt: { ct: 1, Gt: 0, R: "", It: false }, Kt: { ct: 1, Gt: 0, R: "", It: false }, _t: 0, ut: 0 }, this.Xt = new E(this.Zt), this.Jt = t, this.yt = i;
  }
  Pt() {
    this.xt = true;
  }
  Tt(t) {
    return this.xt && (this.Rt(), this.xt = false), this.Xt;
  }
  Rt() {
    const t = this.Jt.It(), i = this.yt.Qt().N().crosshair, n = this.Zt;
    if (2 === i.mode) return n.Kt.It = false, void (n.Yt.It = false);
    n.Kt.It = t && this.Jt.ti(this.yt), n.Yt.It = t && this.Jt.ii(), n.Kt.ct = i.horzLine.width, n.Kt.Gt = i.horzLine.style, n.Kt.R = i.horzLine.color, n.Yt.ct = i.vertLine.width, n.Yt.Gt = i.vertLine.style, n.Yt.R = i.vertLine.color, n._t = this.Jt.ni(), n.ut = this.Jt.si();
  }
}
function L(t, i, n, s, e2, r2) {
  t.fillRect(i + r2, n, s - 2 * r2, r2), t.fillRect(i + r2, n + e2 - r2, s - 2 * r2, r2), t.fillRect(i, n, r2, e2), t.fillRect(i + s - r2, n, r2, e2);
}
function z(t, i, n, s, e2, r2) {
  t.save(), t.globalCompositeOperation = "copy", t.fillStyle = r2, t.fillRect(i, n, s, e2), t.restore();
}
function O(t, i, n, s, e2, r2) {
  t.beginPath(), t.roundRect ? t.roundRect(i, n, s, e2, r2) : (t.lineTo(i + s - r2[1], n), 0 !== r2[1] && t.arcTo(i + s, n, i + s, n + r2[1], r2[1]), t.lineTo(i + s, n + e2 - r2[2]), 0 !== r2[2] && t.arcTo(i + s, n + e2, i + s - r2[2], n + e2, r2[2]), t.lineTo(i + r2[3], n + e2), 0 !== r2[3] && t.arcTo(i, n + e2, i, n + e2 - r2[3], r2[3]), t.lineTo(i, n + r2[0]), 0 !== r2[0] && t.arcTo(i, n, i + r2[0], n, r2[0]));
}
function N(t, i, n, s, e2, r2, h2 = 0, a2 = [0, 0, 0, 0], l2 = "") {
  if (t.save(), !h2 || !l2 || l2 === r2) return O(t, i, n, s, e2, a2), t.fillStyle = r2, t.fill(), void t.restore();
  const o2 = h2 / 2;
  var _2;
  O(t, i + o2, n + o2, s - h2, e2 - h2, (_2 = -o2, a2.map(((t2) => 0 === t2 ? t2 : t2 + _2)))), "transparent" !== r2 && (t.fillStyle = r2, t.fill()), "transparent" !== l2 && (t.lineWidth = h2, t.strokeStyle = l2, t.closePath(), t.stroke()), t.restore();
}
function F(t, i, n, s, e2, r2, h2) {
  t.save(), t.globalCompositeOperation = "copy";
  const a2 = t.createLinearGradient(0, 0, 0, e2);
  a2.addColorStop(0, r2), a2.addColorStop(1, h2), t.fillStyle = a2, t.fillRect(i, n, s, e2), t.restore();
}
class W {
  constructor(t, i) {
    this.ht(t, i);
  }
  ht(t, i) {
    this.qt = t, this.ei = i;
  }
  $t(t, i) {
    return this.qt.It ? t.P + t.A + t.I : 0;
  }
  st(t, i, n, s) {
    if (!this.qt.It || 0 === this.qt.ri.length) return;
    const e2 = this.qt.R, r2 = this.ei.Z, h2 = t.useBitmapCoordinateSpace(((t2) => {
      const h3 = t2.context;
      h3.font = i.k;
      const a2 = this.hi(t2, i, n, s), l2 = a2.ai;
      return a2.li ? N(h3, l2.oi, l2._i, l2.ui, l2.ci, r2, l2.di, [l2.ft, 0, 0, l2.ft], r2) : N(h3, l2.fi, l2._i, l2.ui, l2.ci, r2, l2.di, [0, l2.ft, l2.ft, 0], r2), this.qt.pi && (h3.fillStyle = e2, h3.fillRect(l2.fi, l2.mi, l2.wi - l2.fi, l2.Mi)), this.qt.gi && (h3.fillStyle = i.D, h3.fillRect(a2.li ? l2.bi - l2.di : 0, l2._i, l2.di, l2.Si - l2._i)), a2;
    }));
    t.useMediaCoordinateSpace((({ context: t2 }) => {
      const n2 = h2.xi;
      t2.font = i.k, t2.textAlign = h2.li ? "right" : "left", t2.textBaseline = "middle", t2.fillStyle = e2, t2.fillText(this.qt.ri, n2.Ci, (n2._i + n2.Si) / 2 + n2.yi);
    }));
  }
  hi(t, i, n, s) {
    const { context: e2, bitmapSize: r2, mediaSize: h2, horizontalPixelRatio: a2, verticalPixelRatio: l2 } = t, o2 = this.qt.pi || !this.qt.Pi ? i.C : 0, _2 = this.qt.ki ? i.S : 0, u2 = i.A + this.ei.Ti, c2 = i.I + this.ei.Ri, d2 = i.V, f2 = i.B, p2 = this.qt.ri, v2 = i.P, m2 = n.Di(e2, p2), w2 = Math.ceil(n.Ii(e2, p2)), M2 = v2 + u2 + c2, g2 = i.S + d2 + f2 + w2 + o2, b2 = Math.max(1, Math.floor(l2));
    let S2 = Math.round(M2 * l2);
    S2 % 2 != b2 % 2 && (S2 += 1);
    const x2 = _2 > 0 ? Math.max(1, Math.floor(_2 * a2)) : 0, C2 = Math.round(g2 * a2), y2 = Math.round(o2 * a2), P2 = this.ei.Vi ?? this.ei.Bi ?? this.ei.Ei, k2 = Math.round(P2 * l2) - Math.floor(0.5 * l2), T2 = Math.floor(k2 + b2 / 2 - S2 / 2), R2 = T2 + S2, D2 = "right" === s, I2 = D2 ? h2.width - _2 : _2, V2 = D2 ? r2.width - x2 : x2;
    let B2, E2, A2;
    return D2 ? (B2 = V2 - C2, E2 = V2 - y2, A2 = I2 - o2 - d2 - _2) : (B2 = V2 + C2, E2 = V2 + y2, A2 = I2 + o2 + d2), { li: D2, ai: { _i: T2, mi: k2, Si: R2, ui: C2, ci: S2, ft: 2 * a2, di: x2, oi: B2, fi: V2, wi: E2, Mi: b2, bi: r2.width }, xi: { _i: T2 / l2, Si: R2 / l2, Ci: A2, yi: m2 } };
  }
}
class H {
  constructor(t) {
    this.Ai = { Ei: 0, Z: "#000", Ri: 0, Ti: 0 }, this.Li = { ri: "", It: false, pi: true, Pi: false, Ht: "", R: "#FFF", gi: false, ki: false }, this.zi = { ri: "", It: false, pi: false, Pi: true, Ht: "", R: "#FFF", gi: true, ki: true }, this.xt = true, this.Oi = new (t || W)(this.Li, this.Ai), this.Ni = new (t || W)(this.zi, this.Ai);
  }
  ri() {
    return this.Fi(), this.Li.ri;
  }
  Ei() {
    return this.Fi(), this.Ai.Ei;
  }
  Pt() {
    this.xt = true;
  }
  $t(t, i = false) {
    return Math.max(this.Oi.$t(t, i), this.Ni.$t(t, i));
  }
  Wi() {
    return this.Ai.Vi ?? null;
  }
  Hi() {
    return this.Ai.Vi ?? this.Ai.Bi ?? this.Ei();
  }
  Ui(t) {
    this.Ai.Bi = t ?? void 0;
  }
  $i() {
    return this.Fi(), this.Li.It || this.zi.It;
  }
  ji() {
    return this.Fi(), this.Li.It;
  }
  Tt(t) {
    return this.Fi(), this.Li.pi = this.Li.pi && t.N().ticksVisible, this.zi.pi = this.zi.pi && t.N().ticksVisible, this.Oi.ht(this.Li, this.Ai), this.Ni.ht(this.zi, this.Ai), this.Oi;
  }
  qi() {
    return this.Fi(), this.Oi.ht(this.Li, this.Ai), this.Ni.ht(this.zi, this.Ai), this.Ni;
  }
  Fi() {
    this.xt && (this.Li.pi = true, this.zi.pi = false, this.Yi(this.Li, this.zi, this.Ai));
  }
}
class U extends H {
  constructor(t, i, n) {
    super(), this.Jt = t, this.Ki = i, this.Gi = n;
  }
  Yi(t, i, n) {
    if (t.It = false, 2 === this.Jt.N().mode) return;
    const s = this.Jt.N().horzLine;
    if (!s.labelVisible) return;
    const e2 = this.Ki.Lt();
    if (!this.Jt.It() || this.Ki.Zi() || null === e2) return;
    const r2 = this.Ki.Xi().G(s.labelBackgroundColor);
    n.Z = r2.Z, t.R = r2.X;
    const h2 = 2 / 12 * this.Ki.P();
    n.Ti = h2, n.Ri = h2;
    const a2 = this.Gi(this.Ki);
    n.Ei = a2.Ei, t.ri = this.Ki.Ji(a2.Mt, e2), t.It = true;
  }
}
const $ = /[1-9]/g;
class j {
  constructor() {
    this.qt = null;
  }
  ht(t) {
    this.qt = t;
  }
  st(t, i) {
    if (null === this.qt || false === this.qt.It || 0 === this.qt.ri.length) return;
    const n = t.useMediaCoordinateSpace((({ context: t2 }) => (t2.font = i.k, Math.round(i.Qi.Ii(t2, u(this.qt).ri, $)))));
    if (n <= 0) return;
    const s = i.tn, e2 = n + 2 * s, r2 = e2 / 2, h2 = this.qt.nn;
    let a2 = this.qt.Ei, l2 = Math.floor(a2 - r2) + 0.5;
    l2 < 0 ? (a2 += Math.abs(0 - l2), l2 = Math.floor(a2 - r2) + 0.5) : l2 + e2 > h2 && (a2 -= Math.abs(h2 - (l2 + e2)), l2 = Math.floor(a2 - r2) + 0.5);
    const o2 = l2 + e2, _2 = Math.ceil(0 + i.S + i.C + i.A + i.P + i.I);
    t.useBitmapCoordinateSpace((({ context: t2, horizontalPixelRatio: n2, verticalPixelRatio: s2 }) => {
      const e3 = u(this.qt);
      t2.fillStyle = e3.Z;
      const r3 = Math.round(l2 * n2), h3 = Math.round(0 * s2), a3 = Math.round(o2 * n2), c2 = Math.round(_2 * s2), d2 = Math.round(2 * n2);
      if (t2.beginPath(), t2.moveTo(r3, h3), t2.lineTo(r3, c2 - d2), t2.arcTo(r3, c2, r3 + d2, c2, d2), t2.lineTo(a3 - d2, c2), t2.arcTo(a3, c2, a3, c2 - d2, d2), t2.lineTo(a3, h3), t2.fill(), e3.pi) {
        const r4 = Math.round(e3.Ei * n2), a4 = h3, l3 = Math.round((a4 + i.C) * s2);
        t2.fillStyle = e3.R;
        const o3 = Math.max(1, Math.floor(n2)), _3 = Math.floor(0.5 * n2);
        t2.fillRect(r4 - _3, a4, o3, l3 - a4);
      }
    })), t.useMediaCoordinateSpace((({ context: t2 }) => {
      const n2 = u(this.qt), e3 = 0 + i.S + i.C + i.A + i.P / 2;
      t2.font = i.k, t2.textAlign = "left", t2.textBaseline = "middle", t2.fillStyle = n2.R;
      const r3 = i.Qi.Di(t2, "Apr0");
      t2.translate(l2 + s, e3 + r3), t2.fillText(n2.ri, 0, 0);
    }));
  }
}
class q {
  constructor(t, i, n) {
    this.xt = true, this.Xt = new j(), this.Zt = { It: false, Z: "#4c525e", R: "white", ri: "", nn: 0, Ei: NaN, pi: true }, this.Ct = t, this.sn = i, this.Gi = n;
  }
  Pt() {
    this.xt = true;
  }
  Tt() {
    return this.xt && (this.Rt(), this.xt = false), this.Xt.ht(this.Zt), this.Xt;
  }
  Rt() {
    const t = this.Zt;
    if (t.It = false, 2 === this.Ct.N().mode) return;
    const i = this.Ct.N().vertLine;
    if (!i.labelVisible) return;
    const n = this.sn.Et();
    if (n.Zi()) return;
    t.nn = n.nn();
    const s = this.Gi();
    if (null === s) return;
    t.Ei = s.Ei;
    const e2 = n.en(this.Ct.Bt());
    t.ri = n.rn(u(e2)), t.It = true;
    const r2 = this.sn.Xi().G(i.labelBackgroundColor);
    t.Z = r2.Z, t.R = r2.X, t.pi = n.N().ticksVisible;
  }
}
class Y {
  constructor() {
    this.hn = null, this.an = 0;
  }
  ln() {
    return this.an;
  }
  _n(t) {
    this.an = t;
  }
  Ft() {
    return this.hn;
  }
  un(t) {
    this.hn = t;
  }
  cn(t) {
    return [];
  }
  dn() {
    return [];
  }
  It() {
    return true;
  }
}
var K;
!(function(t) {
  t[t.Normal = 0] = "Normal", t[t.Magnet = 1] = "Magnet", t[t.Hidden = 2] = "Hidden", t[t.MagnetOHLC = 3] = "MagnetOHLC";
})(K || (K = {}));
class G extends Y {
  constructor(t, i) {
    super(), this.yt = null, this.fn = NaN, this.pn = 0, this.vn = false, this.mn = /* @__PURE__ */ new Map(), this.wn = false, this.Mn = /* @__PURE__ */ new WeakMap(), this.gn = /* @__PURE__ */ new WeakMap(), this.bn = NaN, this.Sn = NaN, this.xn = NaN, this.Cn = NaN, this.sn = t, this.yn = i;
    this.Pn = /* @__PURE__ */ ((t2, i2) => (n2) => {
      const s = i2(), e2 = t2();
      if (n2 === u(this.yt).kn()) return { Mt: e2, Ei: s };
      {
        const t3 = u(n2.Lt());
        return { Mt: n2.Tn(s, t3), Ei: s };
      }
    })((() => this.fn), (() => this.Sn));
    const n = /* @__PURE__ */ ((t2, i2) => () => {
      const n2 = this.sn.Et().Rn(t2()), s = i2();
      return n2 && Number.isFinite(s) ? { wt: n2, Ei: s } : null;
    })((() => this.pn), (() => this.ni()));
    this.Dn = new q(this, t, n);
  }
  N() {
    return this.yn;
  }
  In(t, i) {
    this.xn = t, this.Cn = i;
  }
  Vn() {
    this.xn = NaN, this.Cn = NaN;
  }
  Bn() {
    return this.xn;
  }
  En() {
    return this.Cn;
  }
  An(t, i, n) {
    this.wn || (this.wn = true), this.vn = true, this.Ln(t, i, n);
  }
  Bt() {
    return this.pn;
  }
  ni() {
    return this.bn;
  }
  si() {
    return this.Sn;
  }
  It() {
    return this.vn;
  }
  zn() {
    this.vn = false, this.On(), this.fn = NaN, this.bn = NaN, this.Sn = NaN, this.yt = null, this.Vn(), this.Nn();
  }
  Fn(t) {
    if (!this.yn.doNotSnapToHiddenSeriesIndices) return t;
    const i = this.sn, n = i.Et();
    let s = null, e2 = null;
    for (const n2 of i.Wn()) {
      const i2 = n2.Un().Hn(t, -1);
      if (i2) {
        if (i2.$n === t) return t;
        (null === s || i2.$n > s) && (s = i2.$n);
      }
      const r3 = n2.Un().Hn(t, 1);
      if (r3) {
        if (r3.$n === t) return t;
        (null === e2 || r3.$n < e2) && (e2 = r3.$n);
      }
    }
    const r2 = [s, e2].filter(g);
    if (0 === r2.length) return t;
    const h2 = n.jt(t), a2 = r2.map(((t2) => Math.abs(h2 - n.jt(t2))));
    return r2[a2.indexOf(Math.min(...a2))];
  }
  jn(t) {
    let i = this.Mn.get(t);
    i || (i = new A(this, t), this.Mn.set(t, i));
    let n = this.gn.get(t);
    return n || (n = new B(this.sn, this, t), this.gn.set(t, n)), [i, n];
  }
  ti(t) {
    return t === this.yt && this.yn.horzLine.visible;
  }
  ii() {
    return this.yn.vertLine.visible;
  }
  qn(t, i) {
    this.vn && this.yt === t || this.mn.clear();
    const n = [];
    return this.yt === t && n.push(this.Yn(this.mn, i, this.Pn)), n;
  }
  dn() {
    return this.vn ? [this.Dn] : [];
  }
  Kn() {
    return this.yt;
  }
  Nn() {
    this.sn.Gn().forEach(((t) => {
      this.Mn.get(t)?.Pt(), this.gn.get(t)?.Pt();
    })), this.mn.forEach(((t) => t.Pt())), this.Dn.Pt();
  }
  Zn(t) {
    return t && !t.kn().Zi() ? t.kn() : null;
  }
  Ln(t, i, n) {
    this.Xn(t, i, n) && this.Nn();
  }
  Xn(t, i, n) {
    const s = this.bn, e2 = this.Sn, r2 = this.fn, h2 = this.pn, a2 = this.yt, l2 = this.Zn(n);
    this.pn = t, this.bn = isNaN(t) ? NaN : this.sn.Et().jt(t), this.yt = n;
    const o2 = null !== l2 ? l2.Lt() : null;
    return null !== l2 && null !== o2 ? (this.fn = i, this.Sn = l2.Nt(i, o2)) : (this.fn = NaN, this.Sn = NaN), s !== this.bn || e2 !== this.Sn || h2 !== this.pn || r2 !== this.fn || a2 !== this.yt;
  }
  On() {
    const t = this.sn.Jn().map(((t2) => t2.Un().Qn())).filter(g), i = 0 === t.length ? null : Math.max(...t);
    this.pn = null !== i ? i : NaN;
  }
  Yn(t, i, n) {
    let s = t.get(i);
    return void 0 === s && (s = new U(this, i, n), t.set(i, s)), s;
  }
}
function Z(t) {
  return "left" === t || "right" === t;
}
class X {
  constructor(t) {
    this.ts = /* @__PURE__ */ new Map(), this.ns = [], this.ss = t;
  }
  es(t, i) {
    const n = (function(t2, i2) {
      return void 0 === t2 ? i2 : { rs: Math.max(t2.rs, i2.rs), hs: t2.hs || i2.hs };
    })(this.ts.get(t), i);
    this.ts.set(t, n);
  }
  ls() {
    return this.ss;
  }
  _s(t) {
    const i = this.ts.get(t);
    return void 0 === i ? { rs: this.ss } : { rs: Math.max(this.ss, i.rs), hs: i.hs };
  }
  us() {
    this.cs(), this.ns = [{ ds: 0 }];
  }
  fs(t) {
    this.cs(), this.ns = [{ ds: 1, Wt: t }];
  }
  ps(t) {
    this.vs(), this.ns.push({ ds: 5, Wt: t });
  }
  cs() {
    this.vs(), this.ns.push({ ds: 6 });
  }
  ws() {
    this.cs(), this.ns = [{ ds: 4 }];
  }
  Ms(t) {
    this.cs(), this.ns.push({ ds: 2, Wt: t });
  }
  gs(t) {
    this.cs(), this.ns.push({ ds: 3, Wt: t });
  }
  bs() {
    return this.ns;
  }
  Ss(t) {
    for (const i of t.ns) this.xs(i);
    this.ss = Math.max(this.ss, t.ss), t.ts.forEach(((t2, i) => {
      this.es(i, t2);
    }));
  }
  static Cs() {
    return new X(2);
  }
  static ys() {
    return new X(3);
  }
  xs(t) {
    switch (t.ds) {
      case 0:
        this.us();
        break;
      case 1:
        this.fs(t.Wt);
        break;
      case 2:
        this.Ms(t.Wt);
        break;
      case 3:
        this.gs(t.Wt);
        break;
      case 4:
        this.ws();
        break;
      case 5:
        this.ps(t.Wt);
        break;
      case 6:
        this.vs();
    }
  }
  vs() {
    const t = this.ns.findIndex(((t2) => 5 === t2.ds));
    -1 !== t && this.ns.splice(t, 1);
  }
}
class J {
  formatTickmarks(t) {
    return t.map(((t2) => this.format(t2)));
  }
}
const Q = ".";
function tt(t, i) {
  if (!p(t)) return "n/a";
  if (!v(i)) throw new TypeError("invalid length");
  if (i < 0 || i > 16) throw new TypeError("invalid length");
  if (0 === i) return t.toString();
  return ("0000000000000000" + t.toString()).slice(-i);
}
class it extends J {
  constructor(t, i) {
    if (super(), i || (i = 1), p(t) && v(t) || (t = 100), t < 0) throw new TypeError("invalid base");
    this.Ki = t, this.Ps = i, this.ks();
  }
  format(t) {
    const i = t < 0 ? "−" : "";
    return t = Math.abs(t), i + this.Ts(t);
  }
  ks() {
    if (this.Rs = 0, this.Ki > 0 && this.Ps > 0) {
      let t = this.Ki;
      for (; t > 1; ) t /= 10, this.Rs++;
    }
  }
  Ts(t) {
    const i = this.Ki / this.Ps;
    let n = Math.floor(t), s = "";
    const e2 = void 0 !== this.Rs ? this.Rs : NaN;
    if (i > 1) {
      let r2 = +(Math.round(t * i) - n * i).toFixed(this.Rs);
      r2 >= i && (r2 -= i, n += 1), s = Q + tt(+r2.toFixed(this.Rs) * this.Ps, e2);
    } else n = Math.round(n * i) / i, e2 > 0 && (s = Q + tt(0, e2));
    return n.toFixed(0) + s;
  }
}
class nt extends it {
  constructor(t = 100) {
    super(t);
  }
  format(t) {
    return `${super.format(t)}%`;
  }
}
class st extends J {
  constructor(t) {
    super(), this.Ds = t;
  }
  format(t) {
    let i = "";
    return t < 0 && (i = "-", t = -t), t < 995 ? i + this.Is(t) : t < 999995 ? i + this.Is(t / 1e3) + "K" : t < 999999995 ? (t = 1e3 * Math.round(t / 1e3), i + this.Is(t / 1e6) + "M") : (t = 1e6 * Math.round(t / 1e6), i + this.Is(t / 1e9) + "B");
  }
  Is(t) {
    let i;
    const n = Math.pow(10, this.Ds);
    return i = (t = Math.round(t * n) / n) >= 1e-15 && t < 1 ? t.toFixed(this.Ds).replace(/\.?0+$/, "") : String(t), i.replace(/(\.[1-9]*)0+$/, ((t2, i2) => i2));
  }
}
const et = /[2-9]/g;
class rt {
  constructor(t = 50) {
    this.Vs = 0, this.Bs = 1, this.Es = 1, this.As = {}, this.Ls = /* @__PURE__ */ new Map(), this.zs = t;
  }
  Os() {
    this.Vs = 0, this.Ls.clear(), this.Bs = 1, this.Es = 1, this.As = {};
  }
  Ii(t, i, n) {
    return this.Ns(t, i, n).width;
  }
  Di(t, i, n) {
    const s = this.Ns(t, i, n);
    return ((s.actualBoundingBoxAscent || 0) - (s.actualBoundingBoxDescent || 0)) / 2;
  }
  Ns(t, i, n) {
    const s = n || et, e2 = String(i).replace(s, "0");
    if (this.Ls.has(e2)) return _(this.Ls.get(e2)).Fs;
    if (this.Vs === this.zs) {
      const t2 = this.As[this.Es];
      delete this.As[this.Es], this.Ls.delete(t2), this.Es++, this.Vs--;
    }
    t.save(), t.textBaseline = "middle";
    const r2 = t.measureText(e2);
    return t.restore(), 0 === r2.width && i.length || (this.Ls.set(e2, { Fs: r2, Ws: this.Bs }), this.As[this.Bs] = e2, this.Vs++, this.Bs++), r2;
  }
}
class ht {
  constructor(t) {
    this.Hs = null, this.M = null, this.Us = "right", this.$s = t;
  }
  js(t, i, n) {
    this.Hs = t, this.M = i, this.Us = n;
  }
  st(t) {
    null !== this.M && null !== this.Hs && this.Hs.st(t, this.M, this.$s, this.Us);
  }
}
class at {
  constructor(t, i, n) {
    this.qs = t, this.$s = new rt(50), this.Ys = i, this.O = n, this.F = -1, this.Xt = new ht(this.$s);
  }
  Tt() {
    const t = this.O.Ks(this.Ys);
    if (null === t) return null;
    const i = t.Gs(this.Ys) ? t.Zs() : this.Ys.Ft();
    if (null === i) return null;
    const n = t.Xs(i);
    if ("overlay" === n) return null;
    const s = this.O.Js();
    return s.P !== this.F && (this.F = s.P, this.$s.Os()), this.Xt.js(this.qs.qi(), s, n), this.Xt;
  }
}
class lt extends R {
  constructor() {
    super(...arguments), this.qt = null;
  }
  ht(t) {
    this.qt = t;
  }
  Qs(t, i) {
    if (!this.qt?.It) return null;
    const { ut: n, ct: s, te: e2 } = this.qt;
    return i >= n - s - 7 && i <= n + s + 7 ? { ie: this.qt, ne: Math.abs(i - n), se: 2, ee: "price-line", te: e2 } : null;
  }
  et({ context: t, bitmapSize: i, horizontalPixelRatio: n, verticalPixelRatio: s }) {
    if (null === this.qt) return;
    if (false === this.qt.It) return;
    const e2 = Math.round(this.qt.ut * s);
    e2 < 0 || e2 > i.height || (t.lineCap = "butt", t.strokeStyle = this.qt.R, t.lineWidth = Math.floor(this.qt.ct * n), a(t, this.qt.Gt), l(t, e2, 0, i.width));
  }
}
class ot {
  constructor(t) {
    this.re = { ut: 0, R: "rgba(0, 0, 0, 0)", ct: 1, Gt: 0, It: false }, this.he = new lt(), this.xt = true, this.ae = t, this.le = t.Qt(), this.he.ht(this.re);
  }
  Pt() {
    this.xt = true;
  }
  Tt() {
    return this.ae.It() ? (this.xt && (this.oe(), this.xt = false), this.he) : null;
  }
}
class _t extends ot {
  constructor(t) {
    super(t);
  }
  oe() {
    this.re.It = false;
    const t = this.ae.Ft(), i = t._e()._e;
    if (2 !== i && 3 !== i) return;
    const n = this.ae.N();
    if (!n.baseLineVisible || !this.ae.It()) return;
    const s = this.ae.Lt();
    null !== s && (this.re.It = true, this.re.ut = t.Nt(s.Wt, s.Wt), this.re.R = n.baseLineColor, this.re.ct = n.baseLineWidth, this.re.Gt = n.baseLineStyle);
  }
}
class ut extends R {
  constructor() {
    super(...arguments), this.qt = null;
  }
  ht(t) {
    this.qt = t;
  }
  ue() {
    return this.qt;
  }
  et({ context: t, horizontalPixelRatio: i, verticalPixelRatio: n }) {
    const s = this.qt;
    if (null === s) return;
    const e2 = Math.max(1, Math.floor(i)), r2 = e2 % 2 / 2, h2 = Math.round(s.ce.x * i) + r2, a2 = s.ce.y * n;
    t.fillStyle = s.de, t.beginPath();
    const l2 = Math.max(2, 1.5 * s.fe) * i;
    t.arc(h2, a2, l2, 0, 2 * Math.PI, false), t.fill(), t.fillStyle = s.pe, t.beginPath(), t.arc(h2, a2, s.ft * i, 0, 2 * Math.PI, false), t.fill(), t.lineWidth = e2, t.strokeStyle = s.ve, t.beginPath(), t.arc(h2, a2, s.ft * i + e2 / 2, 0, 2 * Math.PI, false), t.stroke();
  }
}
const ct = [{ me: 0, we: 0.25, Me: 4, ge: 10, be: 0.25, Se: 0, xe: 0.4, Ce: 0.8 }, { me: 0.25, we: 0.525, Me: 10, ge: 14, be: 0, Se: 0, xe: 0.8, Ce: 0 }, { me: 0.525, we: 1, Me: 14, ge: 14, be: 0, Se: 0, xe: 0, Ce: 0 }];
class dt {
  constructor(t) {
    this.Xt = new ut(), this.xt = true, this.ye = true, this.Pe = performance.now(), this.ke = this.Pe - 1, this.Te = t;
  }
  Re() {
    this.ke = this.Pe - 1, this.Pt();
  }
  De() {
    if (this.Pt(), 2 === this.Te.N().lastPriceAnimation) {
      const t = performance.now(), i = this.ke - t;
      if (i > 0) return void (i < 650 && (this.ke += 2600));
      this.Pe = t, this.ke = t + 2600;
    }
  }
  Pt() {
    this.xt = true;
  }
  Ie() {
    this.ye = true;
  }
  It() {
    return 0 !== this.Te.N().lastPriceAnimation;
  }
  Ve() {
    switch (this.Te.N().lastPriceAnimation) {
      case 0:
        return false;
      case 1:
        return true;
      case 2:
        return performance.now() <= this.ke;
    }
  }
  Tt() {
    return this.xt ? (this.Rt(), this.xt = false, this.ye = false) : this.ye && (this.Be(), this.ye = false), this.Xt;
  }
  Rt() {
    this.Xt.ht(null);
    const t = this.Te.Qt().Et(), i = t.Ee(), n = this.Te.Lt();
    if (null === i || null === n) return;
    const s = this.Te.Ae(true);
    if (s.Le || !i.ze(s.$n)) return;
    const e2 = { x: t.jt(s.$n), y: this.Te.Ft().Nt(s.Mt, n.Wt) }, r2 = s.R, h2 = this.Te.N().lineWidth, a2 = this.Oe(this.Ne(), r2);
    this.Xt.ht({ de: r2, fe: h2, pe: a2.pe, ve: a2.ve, ft: a2.ft, ce: e2 });
  }
  Be() {
    const t = this.Xt.ue();
    if (null !== t) {
      const i = this.Oe(this.Ne(), t.de);
      t.pe = i.pe, t.ve = i.ve, t.ft = i.ft;
    }
  }
  Ne() {
    return this.Ve() ? performance.now() - this.Pe : 2599;
  }
  Fe(t, i, n, s) {
    const e2 = n + (s - n) * i;
    return this.Te.Qt().Xi().Y(t, e2);
  }
  Oe(t, i) {
    const n = t % 2600 / 2600;
    let s;
    for (const t2 of ct) if (n >= t2.me && n <= t2.we) {
      s = t2;
      break;
    }
    o(void 0 !== s, "Last price animation internal logic error");
    const e2 = (n - s.me) / (s.we - s.me);
    return { pe: this.Fe(i, e2, s.be, s.Se), ve: this.Fe(i, e2, s.xe, s.Ce), ft: (r2 = e2, h2 = s.Me, a2 = s.ge, h2 + (a2 - h2) * r2) };
    var r2, h2, a2;
  }
}
class ft extends ot {
  constructor(t) {
    super(t);
  }
  oe() {
    const t = this.re;
    t.It = false;
    const i = this.ae.N();
    if (!i.priceLineVisible || !this.ae.It()) return;
    const n = this.ae.Ae(0 === i.priceLineSource);
    n.Le || (t.It = true, t.ut = n.Ei, t.R = this.ae.We(n.R), t.ct = i.priceLineWidth, t.Gt = i.priceLineStyle);
  }
}
class pt extends H {
  constructor(t) {
    super(), this.Jt = t;
  }
  Yi(t, i, n) {
    t.It = false, i.It = false;
    const s = this.Jt;
    if (!s.It()) return;
    const e2 = s.N(), r2 = e2.lastValueVisible, h2 = "" !== s.He(), a2 = 0 === e2.seriesLastValueMode, l2 = s.Ae(false);
    if (l2.Le) return;
    r2 && (t.ri = this.Ue(l2, r2, a2), t.It = 0 !== t.ri.length), (h2 || a2) && (i.ri = this.$e(l2, r2, h2, a2), i.It = i.ri.length > 0);
    const o2 = s.We(l2.R), _2 = this.Jt.Qt().Xi().G(o2);
    n.Z = _2.Z, n.Ei = l2.Ei, i.Ht = s.Qt().Ut(l2.Ei / s.Ft().$t()), t.Ht = o2, t.R = _2.X, i.R = _2.X;
  }
  $e(t, i, n, s) {
    let e2 = "";
    const r2 = this.Jt.He();
    return n && 0 !== r2.length && (e2 += `${r2} `), i && s && (e2 += this.Jt.Ft().je() ? t.qe : t.Ye), e2.trim();
  }
  Ue(t, i, n) {
    return i ? n ? this.Jt.Ft().je() ? t.Ye : t.qe : t.ri : "";
  }
}
function vt(t, i, n, s) {
  const e2 = Number.isFinite(i), r2 = Number.isFinite(n);
  return e2 && r2 ? t(i, n) : e2 || r2 ? e2 ? i : n : s;
}
class mt {
  constructor(t, i) {
    this.Ke = t, this.Ge = i;
  }
  Ze(t) {
    return null !== t && (this.Ke === t.Ke && this.Ge === t.Ge);
  }
  Xe() {
    return new mt(this.Ke, this.Ge);
  }
  Je() {
    return this.Ke;
  }
  Qe() {
    return this.Ge;
  }
  tr() {
    return this.Ge - this.Ke;
  }
  Zi() {
    return this.Ge === this.Ke || Number.isNaN(this.Ge) || Number.isNaN(this.Ke);
  }
  Ss(t) {
    return null === t ? this : new mt(vt(Math.min, this.Je(), t.Je(), -1 / 0), vt(Math.max, this.Qe(), t.Qe(), 1 / 0));
  }
  ir(t) {
    if (!p(t)) return;
    if (0 === this.Ge - this.Ke) return;
    const i = 0.5 * (this.Ge + this.Ke);
    let n = this.Ge - i, s = this.Ke - i;
    n *= t, s *= t, this.Ge = i + n, this.Ke = i + s;
  }
  nr(t) {
    p(t) && (this.Ge += t, this.Ke += t);
  }
  sr() {
    return { minValue: this.Ke, maxValue: this.Ge };
  }
  static er(t) {
    return null === t ? null : new mt(t.minValue, t.maxValue);
  }
}
class wt {
  constructor(t, i) {
    this.rr = t, this.hr = i || null;
  }
  ar() {
    return this.rr;
  }
  lr() {
    return this.hr;
  }
  sr() {
    return { priceRange: null === this.rr ? null : this.rr.sr(), margins: this.hr || void 0 };
  }
  static er(t) {
    return null === t ? null : new wt(mt.er(t.priceRange), t.margins);
  }
}
const Mt = [2, 4, 8, 16, 32, 64, 128, 256, 512], gt = "Custom series with conflation reducer must have a priceValueBuilder method";
class bt extends ot {
  constructor(t, i) {
    super(t), this._r = i;
  }
  oe() {
    const t = this.re;
    t.It = false;
    const i = this._r.N();
    if (!this.ae.It() || !i.lineVisible) return;
    const n = this._r.ur();
    null !== n && (t.It = true, t.ut = n, t.R = i.color, t.ct = i.lineWidth, t.Gt = i.lineStyle, t.te = this._r.N().id);
  }
}
class St extends H {
  constructor(t, i) {
    super(), this.Te = t, this._r = i;
  }
  Yi(t, i, n) {
    t.It = false, i.It = false;
    const s = this._r.N(), e2 = s.axisLabelVisible, r2 = "" !== s.title, h2 = this.Te;
    if (!e2 || !h2.It()) return;
    const a2 = this._r.ur();
    if (null === a2) return;
    r2 && (i.ri = s.title, i.It = true), i.Ht = h2.Qt().Ut(a2 / h2.Ft().$t()), t.ri = this.cr(s.price), t.It = true;
    const l2 = this.Te.Qt().Xi().G(s.axisLabelColor || s.color);
    n.Z = l2.Z;
    const o2 = s.axisLabelTextColor || l2.X;
    t.R = o2, i.R = o2, n.Ei = a2;
  }
  cr(t) {
    const i = this.Te.Lt();
    return null === i ? "" : this.Te.Ft().Ji(t, i.Wt);
  }
}
class xt {
  constructor(t, i) {
    this.Te = t, this.yn = i, this.dr = new bt(t, this), this.qs = new St(t, this), this.pr = new at(this.qs, t, t.Qt());
  }
  vr(t) {
    f(this.yn, t), this.Pt(), this.Te.Qt().mr();
  }
  N() {
    return this.yn;
  }
  wr() {
    return this.dr;
  }
  Mr() {
    return this.pr;
  }
  gr() {
    return this.qs;
  }
  Pt() {
    this.dr.Pt(), this.qs.Pt();
  }
  ur() {
    const t = this.Te, i = t.Ft();
    if (t.Qt().Et().Zi() || i.Zi()) return null;
    const n = t.Lt();
    return null === n ? null : i.Nt(this.yn.price, n.Wt);
  }
}
class Ct {
  constructor() {
    this.br = /* @__PURE__ */ new WeakMap();
  }
  Sr(t, i, n) {
    const s = 1 / i * n;
    if (t >= s) return 1;
    const e2 = s / t, r2 = Math.pow(2, Math.floor(Math.log2(e2)));
    return Math.min(r2, 512);
  }
  Cr(t, i, n, s = false, e2) {
    if (0 === t.length || i <= 1) return t;
    const r2 = this.yr(i);
    if (r2 <= 1) return t;
    const h2 = this.Pr(t);
    let a2 = h2.kr.get(r2);
    return void 0 !== a2 || (a2 = this.Tr(t, r2, n, s, e2, h2.kr), h2.kr.set(r2, a2)), a2;
  }
  Rr(t, i, n, s, e2 = false, r2) {
    if (n < 1 || 0 === t.length) return t;
    const h2 = this.Pr(t), a2 = h2.kr.get(n);
    if (!a2) return this.Cr(t, n, s, e2, r2);
    const l2 = this.Dr(t, i, n, a2, e2, s, r2);
    return h2.kr.set(n, l2), l2;
  }
  yr(t) {
    if (t <= 2) return 2;
    for (const i of Mt) if (t <= i) return i;
    return 512;
  }
  Ir(t) {
    if (0 === t.length) return 0;
    const i = t[0], n = t[t.length - 1];
    return 31 * t.length + 17 * i.$n + 13 * n.$n;
  }
  Tr(t, i, n, s = false, e2, r2 = /* @__PURE__ */ new Map()) {
    if (2 === i) return this.Vr(t, 2, n, s, e2);
    const h2 = i / 2;
    let a2 = r2.get(h2);
    return a2 || (a2 = this.Tr(t, h2, n, s, e2, r2), r2.set(h2, a2)), this.Br(a2, n, s, e2);
  }
  Vr(t, i, n, s = false, e2) {
    const r2 = this.Er(t, i, n, s, e2);
    return this.Ar(r2, s);
  }
  Br(t, i, n = false, s) {
    const e2 = this.Er(t, 2, i, n, s);
    return this.Ar(e2, n);
  }
  Er(t, i, n, s = false, e2) {
    const r2 = [];
    for (let h2 = 0; h2 < t.length; h2 += i) {
      if (t.length - h2 >= i) {
        const i2 = this.Lr(t[h2], t[h2 + 1], n, s, e2);
        i2.zr = false, r2.push(i2);
      } else if (0 === r2.length) r2.push(this.Or(t[h2], true));
      else {
        const i2 = r2[r2.length - 1];
        r2[r2.length - 1] = this.Nr(i2, t[h2], n, s, e2);
      }
    }
    return r2;
  }
  Fr(t, i) {
    return (t ?? 1) + (i ?? 1);
  }
  Lr(t, i, n, s = false, e2) {
    if (!s || !n || !e2) {
      const n2 = t.Wt[1] > i.Wt[1] ? t.Wt[1] : i.Wt[1], s2 = t.Wt[2] < i.Wt[2] ? t.Wt[2] : i.Wt[2];
      return { Wr: t.$n, Hr: i.$n, Ur: t.wt, $r: i.wt, jr: t.Wt[0], qr: n2, Yr: s2, Kr: i.Wt[3], Gr: this.Fr(t.Gr, i.Gr), Zr: void 0, zr: false };
    }
    const r2 = n(this.Xr(t, e2), this.Xr(i, e2)), h2 = e2(r2), a2 = h2.length ? h2[h2.length - 1] : 0;
    return { Wr: t.$n, Hr: i.$n, Ur: t.wt, $r: i.wt, jr: t.Wt[0], qr: Math.max(t.Wt[1], a2), Yr: Math.min(t.Wt[2], a2), Kr: a2, Gr: this.Fr(t.Gr, i.Gr), Zr: r2, zr: false };
  }
  Nr(t, i, n, s = false, e2) {
    if (!s || !n || !e2) return { Wr: t.Wr, Hr: i.$n, Ur: t.Ur, $r: i.wt, jr: t.jr, qr: t.qr > i.Wt[1] ? t.qr : i.Wt[1], Yr: t.Yr < i.Wt[2] ? t.Yr : i.Wt[2], Kr: i.Wt[3], Gr: t.Gr + (i.Gr ?? 1), Zr: t.Zr, zr: false };
    const r2 = t.Zr, h2 = this.Xr(i, e2), a2 = r2 ? { data: r2, index: t.Wr, originalTime: t.Ur, time: t.Ur, priceValues: e2(r2) } : null, l2 = a2 ? n(a2, h2) : h2.data, o2 = a2 ? e2(l2) : h2.priceValues, _2 = o2.length ? o2[o2.length - 1] : 0;
    return { Wr: t.Wr, Hr: i.$n, Ur: t.Ur, $r: i.wt, jr: t.jr, qr: Math.max(t.qr, _2), Yr: Math.min(t.Yr, _2), Kr: _2, Gr: t.Gr + (i.Gr ?? 1), Zr: l2, zr: false };
  }
  Jr(t, i, n, s, e2, r2, h2 = false, a2) {
    const l2 = i === s ? e2 : t[i];
    if (n - i == 1) return this.Or(l2, true);
    const o2 = i + 1 === s ? e2 : t[i + 1];
    let _2 = this.Lr(l2, o2, r2, h2, a2);
    for (let l3 = i + 2; l3 < n; l3++) {
      const i2 = l3 === s ? e2 : t[l3];
      _2 = this.Nr(_2, i2, r2, h2, a2);
    }
    return _2;
  }
  Xr(t, i) {
    const n = t.ue ?? {};
    return { data: t.ue, index: t.$n, originalTime: t.Qr, time: t.wt, priceValues: i(n) };
  }
  th(t, i = false) {
    const n = true === i, s = !!t.Zr;
    return { ...{ $n: t.Wr, wt: t.Ur, Qr: t.Ur, Wt: [n ? t.Kr : t.jr, t.qr, t.Yr, t.Kr], Gr: t.Gr }, ue: n ? s ? t.Zr : { wt: t.Ur } : void 0 };
  }
  Ar(t, i = false) {
    return t.map(((t2) => this.th(t2, i)));
  }
  Dr(t, i, n, s, e2 = false, r2, h2) {
    if (0 === s.length) return s;
    const a2 = t.length - 1, l2 = Math.floor(a2 / n) * n;
    if (Math.min(l2 + n, t.length) - l2 < n && t.length > n) {
      const s2 = t.slice();
      return s2[s2.length - 1] = i, this.Cr(s2, n, r2, e2, h2);
    }
    if (Math.floor((a2 - 1) / n) === Math.floor(a2 / n) || 1 === s.length) {
      const o2 = Math.min(l2 + n, t.length), _2 = o2 - l2;
      if (_2 <= 0) return s;
      const u2 = 1 === _2 ? this.Or(l2 === a2 ? i : t[l2], true) : this.Jr(t, l2, o2, a2, i, r2, e2, h2);
      return s[s.length - 1] = this.th(u2, e2), s;
    }
    {
      const s2 = t.slice();
      return s2[s2.length - 1] = i, this.Cr(s2, n, r2, e2, h2);
    }
  }
  Or(t, i = false) {
    return { Wr: t.$n, Hr: t.$n, Ur: t.wt, $r: t.wt, jr: t.Wt[0], qr: t.Wt[1], Yr: t.Wt[2], Kr: t.Wt[3], Gr: t.Gr ?? 1, Zr: t.ue, zr: i };
  }
  Pr(t) {
    const i = this.ih(t), n = this.Ir(t);
    return i.nh !== n && (i.kr.clear(), i.nh = n), i;
  }
  ih(t) {
    let i = this.br.get(t);
    return void 0 === i && (i = { nh: this.Ir(t), kr: /* @__PURE__ */ new Map() }, this.br.set(t, i)), i;
  }
}
class yt extends Y {
  constructor(t) {
    super(), this.sn = t;
  }
  Qt() {
    return this.sn;
  }
}
const Pt = { Bar: (t, i, n, s) => {
  const e2 = i.upColor, r2 = i.downColor, h2 = u(t(n, s)), a2 = c(h2.Wt[0]) <= c(h2.Wt[3]);
  return { sh: h2.R ?? (a2 ? e2 : r2) };
}, Candlestick: (t, i, n, s) => {
  const e2 = i.upColor, r2 = i.downColor, h2 = i.borderUpColor, a2 = i.borderDownColor, l2 = i.wickUpColor, o2 = i.wickDownColor, _2 = u(t(n, s)), d2 = c(_2.Wt[0]) <= c(_2.Wt[3]);
  return { sh: _2.R ?? (d2 ? e2 : r2), eh: _2.Ht ?? (d2 ? h2 : a2), rh: _2.hh ?? (d2 ? l2 : o2) };
}, Custom: (t, i, n, s) => ({ sh: u(t(n, s)).R ?? i.color }), Area: (t, i, n, s) => {
  const e2 = u(t(n, s));
  return { sh: e2.vt ?? i.lineColor, vt: e2.vt ?? i.lineColor, ah: e2.ah ?? i.topColor, oh: e2.oh ?? i.bottomColor };
}, Baseline: (t, i, n, s) => {
  const e2 = u(t(n, s));
  return { sh: e2.Wt[3] >= i.baseValue.price ? i.topLineColor : i.bottomLineColor, _h: e2._h ?? i.topLineColor, uh: e2.uh ?? i.bottomLineColor, dh: e2.dh ?? i.topFillColor1, fh: e2.fh ?? i.topFillColor2, ph: e2.ph ?? i.bottomFillColor1, mh: e2.mh ?? i.bottomFillColor2 };
}, Line: (t, i, n, s) => {
  const e2 = u(t(n, s));
  return { sh: e2.R ?? i.color, vt: e2.R ?? i.color };
}, Histogram: (t, i, n, s) => ({ sh: u(t(n, s)).R ?? i.color }) };
class kt {
  constructor(t) {
    this.wh = (t2, i) => void 0 !== i ? i.Wt : this.Te.Un().Mh(t2), this.Te = t, this.gh = Pt[t.bh()];
  }
  Sh(t, i) {
    return this.gh(this.wh, this.Te.N(), t, i);
  }
}
function Tt(t, i, n, s, e2 = 0, r2 = i.length) {
  let h2 = r2 - e2;
  for (; 0 < h2; ) {
    const r3 = h2 >> 1, a2 = e2 + r3;
    s(i[a2], n) === t ? (e2 = a2 + 1, h2 -= r3 + 1) : h2 = r3;
  }
  return e2;
}
const Rt = Tt.bind(null, true), Dt = Tt.bind(null, false);
var It;
!(function(t) {
  t[t.NearestLeft = -1] = "NearestLeft", t[t.None = 0] = "None", t[t.NearestRight = 1] = "NearestRight";
})(It || (It = {}));
const Vt = 30;
class Bt {
  constructor() {
    this.xh = [], this.Ch = /* @__PURE__ */ new Map(), this.yh = /* @__PURE__ */ new Map(), this.Ph = [];
  }
  kh() {
    return this.Th() > 0 ? this.xh[this.xh.length - 1] : null;
  }
  Rh() {
    return this.Th() > 0 ? this.Dh(0) : null;
  }
  Qn() {
    return this.Th() > 0 ? this.Dh(this.xh.length - 1) : null;
  }
  Th() {
    return this.xh.length;
  }
  Zi() {
    return 0 === this.Th();
  }
  ze(t) {
    return null !== this.Ih(t, 0);
  }
  Mh(t) {
    return this.Hn(t);
  }
  Hn(t, i = 0) {
    const n = this.Ih(t, i);
    return null === n ? null : { ...this.Vh(n), $n: this.Dh(n) };
  }
  Bh() {
    return this.xh;
  }
  Eh(t, i, n) {
    if (this.Zi()) return null;
    let s = null;
    for (const e2 of n) {
      s = Et(s, this.Ah(t, i, e2));
    }
    return s;
  }
  ht(t) {
    this.yh.clear(), this.Ch.clear(), this.xh = t, this.Ph = t.map(((t2) => t2.$n));
  }
  Lh() {
    return this.Ph;
  }
  Dh(t) {
    return this.xh[t].$n;
  }
  Vh(t) {
    return this.xh[t];
  }
  Ih(t, i) {
    const n = this.zh(t);
    if (null === n && 0 !== i) switch (i) {
      case -1:
        return this.Oh(t);
      case 1:
        return this.Nh(t);
      default:
        throw new TypeError("Unknown search mode");
    }
    return n;
  }
  Oh(t) {
    let i = this.Fh(t);
    return i > 0 && (i -= 1), i !== this.xh.length && this.Dh(i) < t ? i : null;
  }
  Nh(t) {
    const i = this.Wh(t);
    return i !== this.xh.length && t < this.Dh(i) ? i : null;
  }
  zh(t) {
    const i = this.Fh(t);
    return i === this.xh.length || t < this.xh[i].$n ? null : i;
  }
  Fh(t) {
    return Rt(this.xh, t, ((t2, i) => t2.$n < i));
  }
  Wh(t) {
    return Dt(this.xh, t, ((t2, i) => t2.$n > i));
  }
  Hh(t, i, n) {
    let s = null;
    for (let e2 = t; e2 < i; e2++) {
      const t2 = this.xh[e2].Wt[n];
      Number.isNaN(t2) || (null === s ? s = { Uh: t2, $h: t2 } : (t2 < s.Uh && (s.Uh = t2), t2 > s.$h && (s.$h = t2)));
    }
    return s;
  }
  Ah(t, i, n) {
    if (this.Zi()) return null;
    let s = null;
    const e2 = u(this.Rh()), r2 = u(this.Qn()), h2 = Math.max(t, e2), a2 = Math.min(i, r2), l2 = Math.ceil(h2 / Vt) * Vt, o2 = Math.max(l2, Math.floor(a2 / Vt) * Vt);
    {
      const t2 = this.Fh(h2), e3 = this.Wh(Math.min(a2, l2, i));
      s = Et(s, this.Hh(t2, e3, n));
    }
    let _2 = this.Ch.get(n);
    void 0 === _2 && (_2 = /* @__PURE__ */ new Map(), this.Ch.set(n, _2));
    for (let t2 = Math.max(l2 + 1, h2); t2 < o2; t2 += Vt) {
      const i2 = Math.floor(t2 / Vt);
      let e3 = _2.get(i2);
      if (void 0 === e3) {
        const t3 = this.Fh(i2 * Vt), s2 = this.Wh((i2 + 1) * Vt - 1);
        e3 = this.Hh(t3, s2, n), _2.set(i2, e3);
      }
      s = Et(s, e3);
    }
    {
      const t2 = this.Fh(o2), i2 = this.Wh(a2);
      s = Et(s, this.Hh(t2, i2, n));
    }
    return s;
  }
}
function Et(t, i) {
  if (null === t) return i;
  if (null === i) return t;
  return { Uh: Math.min(t.Uh, i.Uh), $h: Math.max(t.$h, i.$h) };
}
function At() {
  return new Bt();
}
const Lt = { setLineStyle: a };
class zt {
  constructor(t) {
    this.jh = t;
  }
  st(t, i, n) {
    this.jh.draw(t, Lt);
  }
  qh(t, i, n) {
    this.jh.drawBackground?.(t, Lt);
  }
}
class Ot {
  constructor(t) {
    this.Ls = null, this.Yh = t;
  }
  Tt() {
    const t = this.Yh.renderer();
    if (null === t) return null;
    if (this.Ls?.Kh === t) return this.Ls.Gh;
    const i = new zt(t);
    return this.Ls = { Kh: t, Gh: i }, i;
  }
  Zh() {
    return this.Yh.zOrder?.() ?? "normal";
  }
}
class Nt {
  constructor(t) {
    this.Xh = null, this.Jh = t;
  }
  Qh() {
    return this.Jh;
  }
  Nn() {
    this.Jh.updateAllViews?.();
  }
  jn() {
    const t = this.Jh.paneViews?.() ?? [];
    if (this.Xh?.Kh === t) return this.Xh.Gh;
    const i = t.map(((t2) => new Ot(t2)));
    return this.Xh = { Kh: t, Gh: i }, i;
  }
  Qs(t, i) {
    return this.Jh.hitTest?.(t, i) ?? null;
  }
}
let Ft = class extends Nt {
  cn() {
    return [];
  }
};
class Wt {
  constructor(t) {
    this.jh = t;
  }
  st(t, i, n) {
    this.jh.draw(t, Lt);
  }
  qh(t, i, n) {
    this.jh.drawBackground?.(t, Lt);
  }
}
class Ht {
  constructor(t) {
    this.Ls = null, this.Yh = t;
  }
  Tt() {
    const t = this.Yh.renderer();
    if (null === t) return null;
    if (this.Ls?.Kh === t) return this.Ls.Gh;
    const i = new Wt(t);
    return this.Ls = { Kh: t, Gh: i }, i;
  }
  Zh() {
    return this.Yh.zOrder?.() ?? "normal";
  }
}
function Ut(t) {
  return { ri: t.text(), Ei: t.coordinate(), Vi: t.fixedCoordinate?.(), R: t.textColor(), Z: t.backColor(), It: t.visible?.() ?? true, pi: t.tickVisible?.() ?? true };
}
class $t {
  constructor(t, i) {
    this.Xt = new j(), this.ta = t, this.ia = i;
  }
  Tt() {
    return this.Xt.ht({ nn: this.ia.nn(), ...Ut(this.ta) }), this.Xt;
  }
}
class jt extends H {
  constructor(t, i) {
    super(), this.ta = t, this.Ki = i;
  }
  Yi(t, i, n) {
    const s = Ut(this.ta);
    n.Z = s.Z, t.R = s.R;
    const e2 = 2 / 12 * this.Ki.P();
    n.Ti = e2, n.Ri = e2, n.Ei = s.Ei, n.Vi = s.Vi, t.ri = s.ri, t.It = s.It, t.pi = s.pi;
  }
}
class qt extends Nt {
  constructor(t, i) {
    super(t), this.na = null, this.sa = null, this.ea = null, this.ra = null, this.Te = i;
  }
  dn() {
    const t = this.Jh.timeAxisViews?.() ?? [];
    if (this.na?.Kh === t) return this.na.Gh;
    const i = this.Te.Qt().Et(), n = t.map(((t2) => new $t(t2, i)));
    return this.na = { Kh: t, Gh: n }, n;
  }
  qn() {
    const t = this.Jh.priceAxisViews?.() ?? [];
    if (this.sa?.Kh === t) return this.sa.Gh;
    const i = this.Te.Ft(), n = t.map(((t2) => new jt(t2, i)));
    return this.sa = { Kh: t, Gh: n }, n;
  }
  ha() {
    const t = this.Jh.priceAxisPaneViews?.() ?? [];
    if (this.ea?.Kh === t) return this.ea.Gh;
    const i = t.map(((t2) => new Ht(t2)));
    return this.ea = { Kh: t, Gh: i }, i;
  }
  aa() {
    const t = this.Jh.timeAxisPaneViews?.() ?? [];
    if (this.ra?.Kh === t) return this.ra.Gh;
    const i = t.map(((t2) => new Ht(t2)));
    return this.ra = { Kh: t, Gh: i }, i;
  }
  la(t, i) {
    return this.Jh.autoscaleInfo?.(t, i) ?? null;
  }
}
function Yt(t, i, n, s) {
  t.forEach(((t2) => {
    i(t2).forEach(((t3) => {
      t3.Zh() === n && s.push(t3);
    }));
  }));
}
function Kt(t) {
  return t.jn();
}
function Gt(t) {
  return t.ha();
}
function Zt(t) {
  return t.aa();
}
const Xt = ["Area", "Line", "Baseline"];
class Jt extends yt {
  constructor(t, i, n, s, e2) {
    super(t), this.qt = At(), this.dr = new ft(this), this.oa = [], this._a = new _t(this), this.ua = null, this.ca = null, this.da = null, this.fa = [], this.pa = new Ct(), this.va = /* @__PURE__ */ new Map(), this.ma = null, this.yn = n, this.wa = i;
    const r2 = new pt(this);
    if (this.mn = [r2], this.pr = new at(r2, this, t), Xt.includes(this.wa) && (this.ua = new dt(this)), this.Ma(), this.Yh = s(this, this.Qt(), e2), "Custom" === this.wa) {
      const t2 = this.Yh;
      t2.ga && this.ba(t2.ga);
    }
  }
  m() {
    null !== this.da && clearTimeout(this.da);
  }
  We(t) {
    return this.yn.priceLineColor || t;
  }
  Ae(t) {
    const i = { Le: true }, n = this.Ft();
    if (this.Qt().Et().Zi() || n.Zi() || this.qt.Zi()) return i;
    const s = this.Qt().Et().Ee(), e2 = this.Lt();
    if (null === s || null === e2) return i;
    let r2, h2;
    if (t) {
      const t2 = this.qt.kh();
      if (null === t2) return i;
      r2 = t2, h2 = t2.$n;
    } else {
      const t2 = this.qt.Hn(s.bi(), -1);
      if (null === t2) return i;
      if (r2 = this.qt.Mh(t2.$n), null === r2) return i;
      h2 = t2.$n;
    }
    const a2 = r2.Wt[3], l2 = this.Sa().Sh(h2, { Wt: r2 }), o2 = n.Nt(a2, e2.Wt);
    return { Le: false, Mt: a2, ri: n.Ji(a2, e2.Wt), qe: n.xa(a2), Ye: n.Ca(a2, e2.Wt), R: l2.sh, Ei: o2, $n: h2 };
  }
  Sa() {
    return null !== this.ca || (this.ca = new kt(this)), this.ca;
  }
  N() {
    return this.yn;
  }
  vr(t) {
    const i = this.Qt(), { priceScaleId: n, visible: s, priceFormat: e2 } = t;
    void 0 !== n && n !== this.yn.priceScaleId && i.ya(this, n), void 0 !== s && s !== this.yn.visible && i.Pa();
    const r2 = void 0 !== t.conflationThresholdFactor;
    f(this.yn, t), Object.prototype.hasOwnProperty.call(t, "autoscaleInfoProvider") && void 0 === t.autoscaleInfoProvider && (this.yn.autoscaleInfoProvider = void 0), r2 && (this.va.clear(), this.Qt().mr()), void 0 !== e2 && (this.Ma(), i.ka()), i.Ta(this), i.Ra(), this.Yh.Pt("options");
  }
  ht(t, i) {
    this.qt.ht(t), this.va.clear();
    const n = this.Qt().Et().N();
    n.enableConflation && n.precomputeConflationOnInit && this.Da(n.precomputeConflationPriority), this.Ia(), null !== this.ua && (i && i.Va ? this.ua.De() : 0 === t.length && this.ua.Re());
    const s = this.Qt().Ks(this);
    this.Qt().Ba(s), this.Qt().Ta(this), this.Qt().Ra(), this.Qt().mr();
  }
  Ia() {
    this.Yh.Pt("data");
  }
  Ea(t) {
    const i = new xt(this, t);
    return this.oa.push(i), this.Qt().Ta(this), i;
  }
  Aa(t) {
    const i = this.oa.indexOf(t);
    -1 !== i && this.oa.splice(i, 1), this.Qt().Ta(this);
  }
  La() {
    return this.oa;
  }
  bh() {
    return this.wa;
  }
  Lt() {
    const t = this.za();
    return null === t ? null : { Wt: t.Wt[3], Oa: t.wt };
  }
  za() {
    const t = this.Qt().Et().Ee();
    if (null === t) return null;
    const i = t.Na();
    return this.qt.Hn(i, 1);
  }
  Un() {
    return this.qt;
  }
  ba(t) {
    this.ma = t, this.va.clear();
  }
  Fa() {
    return !!this.Qt().Et().N().enableConflation && this.Wa() > 1;
  }
  Rr(t) {
    if (!this.Fa()) return;
    const i = this.Wa();
    if (!this.va.has(i)) return;
    const n = "Custom" === this.wa, s = n && this.ma || void 0, e2 = n && this.Yh.Ha ? (t2) => {
      const i2 = t2, n2 = this.Yh.Ha(i2);
      return Array.isArray(n2) ? n2 : ["number" == typeof n2 ? n2 : 0];
    } : void 0, r2 = this.pa.Rr(this.qt.Bh(), t, i, s, n, e2), h2 = At();
    h2.ht(r2), this.va.set(i, h2);
  }
  Ua() {
    const t = this.Qt().Et().N().enableConflation;
    if ("Custom" === this.wa && null === this.ma) return this.qt;
    if (!t) return this.qt;
    const i = this.Wa(), n = this.va.get(i);
    if (n) return n;
    this.$a(i);
    return this.va.get(i) ?? this.qt;
  }
  ja(t) {
    const i = this.qt.Mh(t);
    return null === i ? null : "Bar" === this.wa || "Candlestick" === this.wa || "Custom" === this.wa ? { jr: i.Wt[0], qr: i.Wt[1], Yr: i.Wt[2], Kr: i.Wt[3] } : i.Wt[3];
  }
  qa(t) {
    const i = [];
    Yt(this.fa, Kt, "top", i);
    const n = this.ua;
    return null !== n && n.It() ? (null === this.da && n.Ve() && (this.da = setTimeout((() => {
      this.da = null, this.Qt().Ya();
    }), 0)), n.Ie(), i.unshift(n), i) : i;
  }
  jn() {
    const t = [];
    this.Ka() || t.push(this._a), t.push(this.Yh, this.dr);
    const i = this.oa.map(((t2) => t2.wr()));
    return t.push(...i), Yt(this.fa, Kt, "normal", t), t;
  }
  Ga() {
    const t = this.Yh.Ga?.() ?? null;
    if (null === t) return null;
    const i = [];
    this.Ka() || i.push(this._a), i.push(...t.Za), Yt(this.fa, Kt, "normal", i);
    const n = [];
    n.push(...t.qa, this.dr);
    const s = this.oa.map(((t2) => t2.wr()));
    return n.push(...s), { Za: i, qa: n };
  }
  Xa() {
    return this.Ja(Kt, "bottom");
  }
  Qa(t) {
    return this.Ja(Gt, t);
  }
  tl(t) {
    return this.Ja(Zt, t);
  }
  il(t, i) {
    return this.fa.map(((n) => n.Qs(t, i))).filter(((t2) => null !== t2));
  }
  cn() {
    return [this.pr, ...this.oa.map(((t) => t.Mr()))];
  }
  qn(t, i) {
    if (i !== this.hn && !this.Ka()) return [];
    const n = [...this.mn];
    for (const t2 of this.oa) n.push(t2.gr());
    return this.fa.forEach(((t2) => {
      n.push(...t2.qn());
    })), n;
  }
  dn() {
    const t = [];
    return this.fa.forEach(((i) => {
      t.push(...i.dn());
    })), t;
  }
  la(t, i) {
    if (void 0 !== this.yn.autoscaleInfoProvider) {
      const n = this.yn.autoscaleInfoProvider((() => {
        const n2 = this.nl(t, i);
        return null === n2 ? null : n2.sr();
      }));
      return wt.er(n);
    }
    return this.nl(t, i);
  }
  Kh() {
    const t = this.yn.priceFormat;
    return t.base ?? 1 / t.minMove;
  }
  sl() {
    return this.el;
  }
  Nn() {
    this.Yh.Pt();
    for (const t of this.mn) t.Pt();
    for (const t of this.oa) t.Pt();
    this.dr.Pt(), this._a.Pt(), this.ua?.Pt(), this.fa.forEach(((t) => t.Nn()));
  }
  Ft() {
    return u(super.Ft());
  }
  At(t) {
    if (!(("Line" === this.wa || "Area" === this.wa || "Baseline" === this.wa) && this.yn.crosshairMarkerVisible)) return null;
    const i = this.qt.Mh(t);
    if (null === i) return null;
    return { Mt: i.Wt[3], ft: this.rl(), Ht: this.hl(), Ot: this.al(), zt: this.ll(t) };
  }
  He() {
    return this.yn.title;
  }
  It() {
    return this.yn.visible;
  }
  ol(t) {
    this.fa.push(new qt(t, this));
  }
  _l(t) {
    this.fa = this.fa.filter(((i) => i.Qh() !== t));
  }
  ul() {
    if ("Custom" === this.wa) return (t) => this.Yh.Ha(t);
  }
  cl() {
    if ("Custom" === this.wa) return (t) => this.Yh.dl(t);
  }
  fl() {
    return this.qt.Lh();
  }
  Ka() {
    return !Z(this.Ft().pl());
  }
  nl(t, i) {
    if (!v(t) || !v(i) || this.qt.Zi()) return null;
    const n = "Line" === this.wa || "Area" === this.wa || "Baseline" === this.wa || "Histogram" === this.wa ? [3] : [2, 1], s = this.qt.Eh(t, i, n);
    let e2 = null !== s ? new mt(s.Uh, s.$h) : null, r2 = null;
    if ("Histogram" === this.bh()) {
      const t2 = this.yn.base, i2 = new mt(t2, t2);
      e2 = null !== e2 ? e2.Ss(i2) : i2;
    }
    return this.fa.forEach(((n2) => {
      const s2 = n2.la(t, i);
      if (s2?.priceRange) {
        const t2 = new mt(s2.priceRange.minValue, s2.priceRange.maxValue);
        e2 = null !== e2 ? e2.Ss(t2) : t2;
      }
      s2?.margins && (r2 = s2.margins);
    })), new wt(e2, r2);
  }
  rl() {
    switch (this.wa) {
      case "Line":
      case "Area":
      case "Baseline":
        return this.yn.crosshairMarkerRadius;
    }
    return 0;
  }
  hl() {
    switch (this.wa) {
      case "Line":
      case "Area":
      case "Baseline": {
        const t = this.yn.crosshairMarkerBorderColor;
        if (0 !== t.length) return t;
      }
    }
    return null;
  }
  al() {
    switch (this.wa) {
      case "Line":
      case "Area":
      case "Baseline":
        return this.yn.crosshairMarkerBorderWidth;
    }
    return 0;
  }
  ll(t) {
    switch (this.wa) {
      case "Line":
      case "Area":
      case "Baseline": {
        const t2 = this.yn.crosshairMarkerBackgroundColor;
        if (0 !== t2.length) return t2;
      }
    }
    return this.Sa().Sh(t).sh;
  }
  Ma() {
    switch (this.yn.priceFormat.type) {
      case "custom": {
        const t = this.yn.priceFormat.formatter;
        this.el = { format: t, formatTickmarks: this.yn.priceFormat.tickmarksFormatter ?? ((i) => i.map(t)) };
        break;
      }
      case "volume":
        this.el = new st(this.yn.priceFormat.precision);
        break;
      case "percent":
        this.el = new nt(this.yn.priceFormat.precision);
        break;
      default: {
        const t = Math.pow(10, this.yn.priceFormat.precision);
        this.el = new it(t, this.yn.priceFormat.minMove * t);
      }
    }
    null !== this.hn && this.hn.vl();
  }
  Ja(t, i) {
    const n = [];
    return Yt(this.fa, t, i, n), n;
  }
  Wa() {
    const { ml: t, wl: i, Ml: n } = this.gl();
    return this.pa.Sr(t, i, n);
  }
  gl() {
    const t = this.Qt().Et(), i = t.ml(), n = window.devicePixelRatio || 1, s = t.N().conflationThresholdFactor;
    return { ml: i, wl: n, Ml: this.yn.conflationThresholdFactor ?? s ?? 1 };
  }
  bl(t) {
    const i = this.qt.Bh();
    let n;
    if ("Custom" === this.wa && null !== this.ma) {
      const s2 = this.ul();
      if (!s2) throw new Error(gt);
      n = this.pa.Cr(i, t, this.ma, true, ((t2) => s2(t2)));
    } else n = this.pa.Cr(i, t);
    const s = At();
    return s.ht(n), s;
  }
  $a(t) {
    const i = this.bl(t);
    this.va.set(t, i);
  }
  Da(t) {
    if ("Custom" === this.wa && (null === this.ma || !this.ul())) return;
    this.va.clear();
    const i = this.Qt().Et().Sl();
    for (const n of i) {
      const i2 = () => {
        this.xl(n);
      }, s = "object" == typeof window && window || "object" == typeof self && self;
      s?.yl?.Cl ? s.yl.Cl((() => {
        i2();
      }), { se: t }) : Promise.resolve().then((() => i2()));
    }
  }
  xl(t) {
    if (this.va.has(t)) return;
    if (0 === this.qt.Bh().length) return;
    const i = this.bl(t);
    this.va.set(t, i);
  }
}
const Qt = [3], ti = [0, 1, 2, 3];
class ii {
  constructor(t) {
    this.yn = t;
  }
  Pl(t, i, n) {
    let s = t;
    if (0 === this.yn.mode) return s;
    const e2 = n.kn(), r2 = e2.Lt();
    if (null === r2) return s;
    const h2 = e2.Nt(t, r2), a2 = n.kl().filter(((t2) => t2 instanceof Jt)).reduce(((t2, s2) => {
      if (n.Gs(s2) || !s2.It()) return t2;
      const e3 = s2.Ft(), r3 = s2.Un();
      if (e3.Zi() || !r3.ze(i)) return t2;
      const h3 = r3.Mh(i);
      if (null === h3) return t2;
      const a3 = c(s2.Lt()), l3 = 3 === this.yn.mode ? ti : Qt;
      return t2.concat(l3.map(((t3) => e3.Nt(h3.Wt[t3], a3.Wt))));
    }), []);
    if (0 === a2.length) return s;
    a2.sort(((t2, i2) => Math.abs(t2 - h2) - Math.abs(i2 - h2)));
    const l2 = a2[0];
    return s = e2.Tn(l2, r2), s;
  }
}
function ni(t, i, n) {
  return Math.min(Math.max(t, i), n);
}
function si(t, i, n) {
  return i - t <= n;
}
function ei(t) {
  const i = Math.ceil(t);
  return i % 2 == 0 ? i - 1 : i;
}
class ri extends R {
  constructor() {
    super(...arguments), this.qt = null;
  }
  ht(t) {
    this.qt = t;
  }
  et({ context: t, bitmapSize: i, horizontalPixelRatio: n, verticalPixelRatio: s }) {
    if (null === this.qt) return;
    const e2 = Math.max(1, Math.floor(n));
    t.lineWidth = e2, (function(t2, i2) {
      t2.save(), t2.lineWidth % 2 && t2.translate(0.5, 0.5), i2(), t2.restore();
    })(t, (() => {
      const r2 = u(this.qt);
      if (r2.Tl) {
        t.strokeStyle = r2.Rl, a(t, r2.Dl), t.beginPath();
        for (const s2 of r2.Il) {
          const r3 = Math.round(s2.Vl * n);
          t.moveTo(r3, -e2), t.lineTo(r3, i.height + e2);
        }
        t.stroke();
      }
      if (r2.Bl) {
        t.strokeStyle = r2.El, a(t, r2.Al), t.beginPath();
        for (const n2 of r2.Ll) {
          const r3 = Math.round(n2.Vl * s);
          t.moveTo(-e2, r3), t.lineTo(i.width + e2, r3);
        }
        t.stroke();
      }
    }));
  }
}
class hi {
  constructor(t) {
    this.Xt = new ri(), this.xt = true, this.yt = t;
  }
  Pt() {
    this.xt = true;
  }
  Tt() {
    if (this.xt) {
      const t = this.yt.Qt().N().grid, i = { Bl: t.horzLines.visible, Tl: t.vertLines.visible, El: t.horzLines.color, Rl: t.vertLines.color, Al: t.horzLines.style, Dl: t.vertLines.style, Ll: this.yt.kn().zl(), Il: (this.yt.Qt().Et().zl() || []).map(((t2) => ({ Vl: t2.coord }))) };
      this.Xt.ht(i), this.xt = false;
    }
    return this.Xt;
  }
}
class ai {
  constructor(t) {
    this.Yh = new hi(t);
  }
  wr() {
    return this.Yh;
  }
}
const li = { Ol: 4, Nl: 1e-4 };
function oi(t, i) {
  const n = 100 * (t - i) / i;
  return i < 0 ? -n : n;
}
function _i(t, i) {
  const n = oi(t.Je(), i), s = oi(t.Qe(), i);
  return new mt(n, s);
}
function ui(t, i) {
  const n = 100 * (t - i) / i + 100;
  return i < 0 ? -n : n;
}
function ci(t, i) {
  const n = ui(t.Je(), i), s = ui(t.Qe(), i);
  return new mt(n, s);
}
function di(t, i) {
  const n = Math.abs(t);
  if (n < 1e-15) return 0;
  const s = Math.log10(n + i.Nl) + i.Ol;
  return t < 0 ? -s : s;
}
function fi(t, i) {
  const n = Math.abs(t);
  if (n < 1e-15) return 0;
  const s = Math.pow(10, n - i.Ol) - i.Nl;
  return t < 0 ? -s : s;
}
function pi(t, i) {
  if (null === t) return null;
  const n = di(t.Je(), i), s = di(t.Qe(), i);
  return new mt(n, s);
}
function vi(t, i) {
  if (null === t) return null;
  const n = fi(t.Je(), i), s = fi(t.Qe(), i);
  return new mt(n, s);
}
function mi(t) {
  if (null === t) return li;
  const i = Math.abs(t.Qe() - t.Je());
  if (i >= 1 || i < 1e-15) return li;
  const n = Math.ceil(Math.abs(Math.log10(i))), s = li.Ol + n;
  return { Ol: s, Nl: 1 / Math.pow(10, s) };
}
class wi {
  constructor(t, i) {
    if (this.Fl = t, this.Wl = i, (function(t2) {
      if (t2 < 0) return false;
      if (t2 > 1e18) return true;
      for (let i2 = t2; i2 > 1; i2 /= 10) if (i2 % 10 != 0) return false;
      return true;
    })(this.Fl)) this.Hl = [2, 2.5, 2];
    else {
      this.Hl = [];
      for (let t2 = this.Fl; 1 !== t2; ) {
        if (t2 % 2 == 0) this.Hl.push(2), t2 /= 2;
        else {
          if (t2 % 5 != 0) throw new Error("unexpected base");
          this.Hl.push(2, 2.5), t2 /= 5;
        }
        if (this.Hl.length > 100) throw new Error("something wrong with base");
      }
    }
  }
  Ul(t, i, n) {
    const s = 0 === this.Fl ? 0 : 1 / this.Fl;
    let e2 = Math.pow(10, Math.max(0, Math.ceil(Math.log10(t - i)))), r2 = 0, h2 = this.Wl[0];
    for (; ; ) {
      const t2 = si(e2, s, 1e-14) && e2 > s + 1e-14, i2 = si(e2, n * h2, 1e-14), a3 = si(e2, 1, 1e-14);
      if (!(t2 && i2 && a3)) break;
      e2 /= h2, h2 = this.Wl[++r2 % this.Wl.length];
    }
    if (e2 <= s + 1e-14 && (e2 = s), e2 = Math.max(1, e2), this.Hl.length > 0 && (a2 = e2, l2 = 1, o2 = 1e-14, Math.abs(a2 - l2) < o2)) for (r2 = 0, h2 = this.Hl[0]; si(e2, n * h2, 1e-14) && e2 > s + 1e-14; ) e2 /= h2, h2 = this.Hl[++r2 % this.Hl.length];
    var a2, l2, o2;
    return e2;
  }
}
class Mi {
  constructor(t, i, n, s) {
    this.$l = [], this.Ki = t, this.Fl = i, this.jl = n, this.ql = s;
  }
  Ul(t, i) {
    if (t < i) throw new Error("high < low");
    const n = this.Ki.$t(), s = (t - i) * this.Yl() / n, e2 = new wi(this.Fl, [2, 2.5, 2]), r2 = new wi(this.Fl, [2, 2, 2.5]), h2 = new wi(this.Fl, [2.5, 2, 2]), a2 = [];
    return a2.push(e2.Ul(t, i, s), r2.Ul(t, i, s), h2.Ul(t, i, s)), (function(t2) {
      if (t2.length < 1) throw Error("array is empty");
      let i2 = t2[0];
      for (let n2 = 1; n2 < t2.length; ++n2) t2[n2] < i2 && (i2 = t2[n2]);
      return i2;
    })(a2);
  }
  Kl() {
    const t = this.Ki, i = t.Lt();
    if (null === i) return void (this.$l = []);
    const n = t.$t(), s = this.jl(n - 1, i), e2 = this.jl(0, i), r2 = this.Ki.N().entireTextOnly ? this.Gl() / 2 : 0, h2 = r2, a2 = n - 1 - r2, l2 = Math.max(s, e2), o2 = Math.min(s, e2);
    if (l2 === o2) return void (this.$l = []);
    const _2 = this.Ul(l2, o2);
    if (this.Zl(i, _2, l2, o2, h2, a2), t.Xl() && this.Jl(_2, o2, l2)) {
      const t2 = this.Ki.Ql();
      this.io(i, _2, h2, a2, t2, 2 * t2);
    }
    const u2 = this.$l.map(((t2) => t2.no)), c2 = this.Ki.so(u2);
    for (let t2 = 0; t2 < this.$l.length; t2++) this.$l[t2].eo = c2[t2];
  }
  zl() {
    return this.$l;
  }
  Gl() {
    return this.Ki.P();
  }
  Yl() {
    return Math.ceil(this.Gl() * this.Ki.N().tickMarkDensity);
  }
  Zl(t, i, n, s, e2, r2) {
    const h2 = this.$l, a2 = this.Ki;
    let l2 = n % i;
    l2 += l2 < 0 ? i : 0;
    const o2 = n >= s ? 1 : -1;
    let _2 = null, u2 = 0;
    for (let c2 = n - l2; c2 > s; c2 -= i) {
      const n2 = this.ql(c2, t, true);
      null !== _2 && Math.abs(n2 - _2) < this.Yl() || (n2 < e2 || n2 > r2 || (u2 < h2.length ? (h2[u2].Vl = n2, h2[u2].eo = a2.ro(c2), h2[u2].no = c2) : h2.push({ Vl: n2, eo: a2.ro(c2), no: c2 }), u2++, _2 = n2, a2.ho() && (i = this.Ul(c2 * o2, s))));
    }
    h2.length = u2;
  }
  io(t, i, n, s, e2, r2) {
    const h2 = this.$l, a2 = this.ao(t, n, e2, r2), l2 = this.ao(t, s, -r2, -e2), o2 = this.ql(0, t, true) - this.ql(i, t, true);
    h2.length > 0 && h2[0].Vl - a2.Vl < o2 / 2 && h2.shift(), h2.length > 0 && l2.Vl - h2[h2.length - 1].Vl < o2 / 2 && h2.pop(), h2.unshift(a2), h2.push(l2);
  }
  ao(t, i, n, s) {
    const e2 = (n + s) / 2, r2 = this.jl(i + n, t), h2 = this.jl(i + s, t), a2 = Math.min(r2, h2), l2 = Math.max(r2, h2), o2 = Math.max(0.1, this.Ul(l2, a2)), _2 = this.jl(i + e2, t), u2 = _2 - _2 % o2, c2 = this.ql(u2, t, true);
    return { eo: this.Ki.ro(u2), Vl: c2, no: u2 };
  }
  Jl(t, i, n) {
    let s = c(this.Ki.ar());
    return this.Ki.ho() && (s = vi(s, this.Ki.lo())), s.Je() - i < t && n - s.Qe() < t;
  }
}
function gi(t) {
  return t.slice().sort(((t2, i) => u(t2.ln()) - u(i.ln())));
}
var bi;
!(function(t) {
  t[t.Normal = 0] = "Normal", t[t.Logarithmic = 1] = "Logarithmic", t[t.Percentage = 2] = "Percentage", t[t.IndexedTo100 = 3] = "IndexedTo100";
})(bi || (bi = {}));
const Si = new nt(), xi = new it(100, 1);
class Ci {
  constructor(t, i, n, s, e2) {
    this.oo = 0, this._o = null, this.rr = null, this.uo = null, this.co = { do: false, fo: null }, this.po = false, this.vo = 0, this.mo = 0, this.wo = new d(), this.Mo = new d(), this.bo = [], this.So = null, this.xo = null, this.Co = null, this.yo = null, this.Po = null, this.el = xi, this.ko = mi(null), this.To = t, this.yn = i, this.Ro = n, this.Do = s, this.Io = e2, this.Vo = new Mi(this, 100, this.Bo.bind(this), this.Eo.bind(this));
  }
  pl() {
    return this.To;
  }
  N() {
    return this.yn;
  }
  vr(t) {
    if (f(this.yn, t), this.vl(), void 0 !== t.mode && this.Ao({ _e: t.mode }), void 0 !== t.scaleMargins) {
      const i = _(t.scaleMargins.top), n = _(t.scaleMargins.bottom);
      if (i < 0 || i > 1) throw new Error(`Invalid top margin - expect value between 0 and 1, given=${i}`);
      if (n < 0 || n > 1) throw new Error(`Invalid bottom margin - expect value between 0 and 1, given=${n}`);
      if (i + n > 1) throw new Error(`Invalid margins - sum of margins must be less than 1, given=${i + n}`);
      this.Lo(), this.Co = null;
    }
  }
  zo() {
    return this.yn.autoScale;
  }
  Oo() {
    return this.po;
  }
  ho() {
    return 1 === this.yn.mode;
  }
  je() {
    return 2 === this.yn.mode;
  }
  No() {
    return 3 === this.yn.mode;
  }
  lo() {
    return this.ko;
  }
  _e() {
    return { hs: this.yn.autoScale, Fo: this.yn.invertScale, _e: this.yn.mode };
  }
  Ao(t) {
    const i = this._e();
    let n = null;
    void 0 !== t.hs && (this.yn.autoScale = t.hs), void 0 !== t._e && (this.yn.mode = t._e, 2 !== t._e && 3 !== t._e || (this.yn.autoScale = true), this.co.do = false), 1 === i._e && t._e !== i._e && (!(function(t2, i2) {
      if (null === t2) return false;
      const n2 = fi(t2.Je(), i2), s2 = fi(t2.Qe(), i2);
      return isFinite(n2) && isFinite(s2);
    })(this.rr, this.ko) ? this.yn.autoScale = true : (n = vi(this.rr, this.ko), null !== n && this.Wo(n))), 1 === t._e && t._e !== i._e && (n = pi(this.rr, this.ko), null !== n && this.Wo(n));
    const s = i._e !== this.yn.mode;
    s && (2 === i._e || this.je()) && this.vl(), s && (3 === i._e || this.No()) && this.vl(), void 0 !== t.Fo && i.Fo !== t.Fo && (this.yn.invertScale = t.Fo, this.Ho()), this.Mo.p(i, this._e());
  }
  Uo() {
    return this.Mo;
  }
  P() {
    return this.Ro.fontSize;
  }
  $t() {
    return this.oo;
  }
  $o(t) {
    this.oo !== t && (this.oo = t, this.Lo(), this.Co = null);
  }
  jo() {
    if (this._o) return this._o;
    const t = this.$t() - this.qo() - this.Yo();
    return this._o = t, t;
  }
  ar() {
    return this.Ko(), this.rr;
  }
  Wo(t, i) {
    const n = this.rr;
    (i || null === n && null !== t || null !== n && !n.Ze(t)) && (this.Co = null, this.rr = t);
  }
  Go(t) {
    this.Wo(t), this.Zo(null !== t);
  }
  Zi() {
    return this.Ko(), 0 === this.oo || !this.rr || this.rr.Zi();
  }
  Xo(t) {
    return this.Fo() ? t : this.$t() - 1 - t;
  }
  Nt(t, i) {
    return this.je() ? t = oi(t, i) : this.No() && (t = ui(t, i)), this.Eo(t, i);
  }
  Jo(t, i, n) {
    this.Ko();
    const s = this.Yo(), e2 = u(this.ar()), r2 = e2.Je(), h2 = e2.Qe(), a2 = this.jo() - 1, l2 = this.Fo(), o2 = a2 / (h2 - r2), _2 = void 0 === n ? 0 : n.from, c2 = void 0 === n ? t.length : n.to, d2 = this.Qo();
    for (let n2 = _2; n2 < c2; n2++) {
      const e3 = t[n2], h3 = e3.Mt;
      if (isNaN(h3)) continue;
      let a3 = h3;
      null !== d2 && (a3 = d2(e3.Mt, i));
      const _3 = s + o2 * (a3 - r2), u2 = l2 ? _3 : this.oo - 1 - _3;
      e3.ut = u2;
    }
  }
  t_(t, i, n) {
    this.Ko();
    const s = this.Yo(), e2 = u(this.ar()), r2 = e2.Je(), h2 = e2.Qe(), a2 = this.jo() - 1, l2 = this.Fo(), o2 = a2 / (h2 - r2), _2 = void 0 === n ? 0 : n.from, c2 = void 0 === n ? t.length : n.to, d2 = this.Qo();
    for (let n2 = _2; n2 < c2; n2++) {
      const e3 = t[n2];
      let h3 = e3.jr, a3 = e3.qr, _3 = e3.Yr, u2 = e3.Kr;
      null !== d2 && (h3 = d2(e3.jr, i), a3 = d2(e3.qr, i), _3 = d2(e3.Yr, i), u2 = d2(e3.Kr, i));
      let c3 = s + o2 * (h3 - r2), f2 = l2 ? c3 : this.oo - 1 - c3;
      e3.i_ = f2, c3 = s + o2 * (a3 - r2), f2 = l2 ? c3 : this.oo - 1 - c3, e3.n_ = f2, c3 = s + o2 * (_3 - r2), f2 = l2 ? c3 : this.oo - 1 - c3, e3.s_ = f2, c3 = s + o2 * (u2 - r2), f2 = l2 ? c3 : this.oo - 1 - c3, e3.e_ = f2;
    }
  }
  Tn(t, i) {
    const n = this.Bo(t, i);
    return this.r_(n, i);
  }
  r_(t, i) {
    let n = t;
    return this.je() ? n = (function(t2, i2) {
      return i2 < 0 && (t2 = -t2), t2 / 100 * i2 + i2;
    })(n, i) : this.No() && (n = (function(t2, i2) {
      return t2 -= 100, i2 < 0 && (t2 = -t2), t2 / 100 * i2 + i2;
    })(n, i)), n;
  }
  kl() {
    return this.bo;
  }
  Dt() {
    return this.xo || (this.xo = gi(this.bo)), this.xo;
  }
  h_(t) {
    -1 === this.bo.indexOf(t) && (this.bo.push(t), this.vl(), this.a_());
  }
  l_(t) {
    const i = this.bo.indexOf(t);
    if (-1 === i) throw new Error("source is not attached to scale");
    this.bo.splice(i, 1), 0 === this.bo.length && (this.Ao({ hs: true }), this.Wo(null)), this.vl(), this.a_();
  }
  Lt() {
    let t = null;
    for (const i of this.bo) {
      const n = i.Lt();
      null !== n && ((null === t || n.Oa < t.Oa) && (t = n));
    }
    return null === t ? null : t.Wt;
  }
  Fo() {
    return this.yn.invertScale;
  }
  zl() {
    const t = null === this.Lt();
    if (null !== this.Co && (t || this.Co.o_ === t)) return this.Co.zl;
    this.Vo.Kl();
    const i = this.Vo.zl();
    return this.Co = { zl: i, o_: t }, this.wo.p(), i;
  }
  __() {
    return this.wo;
  }
  u_(t) {
    this.je() || this.No() || null === this.yo && null === this.uo && (this.Zi() || (this.yo = this.oo - t, this.uo = u(this.ar()).Xe()));
  }
  c_(t) {
    if (this.je() || this.No()) return;
    if (null === this.yo) return;
    this.Ao({ hs: false }), (t = this.oo - t) < 0 && (t = 0);
    let i = (this.yo + 0.2 * (this.oo - 1)) / (t + 0.2 * (this.oo - 1));
    const n = u(this.uo).Xe();
    i = Math.max(i, 0.1), n.ir(i), this.Wo(n);
  }
  d_() {
    this.je() || this.No() || (this.yo = null, this.uo = null);
  }
  f_(t) {
    this.zo() || null === this.Po && null === this.uo && (this.Zi() || (this.Po = t, this.uo = u(this.ar()).Xe()));
  }
  p_(t) {
    if (this.zo()) return;
    if (null === this.Po) return;
    const i = u(this.ar()).tr() / (this.jo() - 1);
    let n = t - this.Po;
    this.Fo() && (n *= -1);
    const s = n * i, e2 = u(this.uo).Xe();
    e2.nr(s), this.Wo(e2, true), this.Co = null;
  }
  v_() {
    this.zo() || null !== this.Po && (this.Po = null, this.uo = null);
  }
  sl() {
    return this.el || this.vl(), this.el;
  }
  Ji(t, i) {
    switch (this.yn.mode) {
      case 2:
        return this.m_(oi(t, i));
      case 3:
        return this.sl().format(ui(t, i));
      default:
        return this.cr(t);
    }
  }
  ro(t) {
    switch (this.yn.mode) {
      case 2:
        return this.m_(t);
      case 3:
        return this.sl().format(t);
      default:
        return this.cr(t);
    }
  }
  so(t) {
    switch (this.yn.mode) {
      case 2:
        return this.w_(t);
      case 3:
        return this.sl().formatTickmarks(t);
      default:
        return this.M_(t);
    }
  }
  xa(t) {
    return this.cr(t, u(this.So).sl());
  }
  Ca(t, i) {
    return t = oi(t, i), this.m_(t, Si);
  }
  g_() {
    return this.bo;
  }
  b_(t) {
    this.co = { fo: t, do: false };
  }
  Nn() {
    this.bo.forEach(((t) => t.Nn()));
  }
  Xl() {
    return this.yn.ensureEdgeTickMarksVisible && this.zo();
  }
  Ql() {
    return this.P() / 2;
  }
  vl() {
    this.Co = null;
    let t = 1 / 0;
    this.So = null;
    for (const i2 of this.bo) i2.ln() < t && (t = i2.ln(), this.So = i2);
    let i = 100;
    null !== this.So && (i = Math.round(this.So.Kh())), this.el = xi, this.je() ? (this.el = Si, i = 100) : this.No() ? (this.el = new it(100, 1), i = 100) : null !== this.So && (this.el = this.So.sl()), this.Vo = new Mi(this, i, this.Bo.bind(this), this.Eo.bind(this)), this.Vo.Kl();
  }
  a_() {
    this.xo = null;
  }
  S_() {
    return null === this.So || this.je() || this.No() ? 1 : 1 / this.So.Kh();
  }
  Xi() {
    return this.Io;
  }
  Zo(t) {
    this.po = t;
  }
  qo() {
    return this.Fo() ? this.yn.scaleMargins.bottom * this.$t() + this.mo : this.yn.scaleMargins.top * this.$t() + this.vo;
  }
  Yo() {
    return this.Fo() ? this.yn.scaleMargins.top * this.$t() + this.vo : this.yn.scaleMargins.bottom * this.$t() + this.mo;
  }
  Ko() {
    this.co.do || (this.co.do = true, this.x_());
  }
  Lo() {
    this._o = null;
  }
  Eo(t, i) {
    if (this.Ko(), this.Zi()) return 0;
    t = this.ho() && t ? di(t, this.ko) : t;
    const n = u(this.ar()), s = this.Yo() + (this.jo() - 1) * (t - n.Je()) / n.tr();
    return this.Xo(s);
  }
  Bo(t, i) {
    if (this.Ko(), this.Zi()) return 0;
    const n = this.Xo(t), s = u(this.ar()), e2 = s.Je() + s.tr() * ((n - this.Yo()) / (this.jo() - 1));
    return this.ho() ? fi(e2, this.ko) : e2;
  }
  Ho() {
    this.Co = null, this.Vo.Kl();
  }
  x_() {
    if (this.Oo() && !this.zo()) return;
    const t = this.co.fo;
    if (null === t) return;
    let i = null;
    const n = this.g_();
    let s = 0, e2 = 0;
    for (const r3 of n) {
      if (!r3.It()) continue;
      const n2 = r3.Lt();
      if (null === n2) continue;
      const h3 = r3.la(t.Na(), t.bi());
      let a2 = h3 && h3.ar();
      if (null !== a2) {
        switch (this.yn.mode) {
          case 1:
            a2 = pi(a2, this.ko);
            break;
          case 2:
            a2 = _i(a2, n2.Wt);
            break;
          case 3:
            a2 = ci(a2, n2.Wt);
        }
        if (i = null === i ? a2 : i.Ss(u(a2)), null !== h3) {
          const t2 = h3.lr();
          null !== t2 && (s = Math.max(s, t2.above), e2 = Math.max(e2, t2.below));
        }
      }
    }
    if (this.Xl() && (s = Math.max(s, this.Ql()), e2 = Math.max(e2, this.Ql())), s === this.vo && e2 === this.mo || (this.vo = s, this.mo = e2, this.Co = null, this.Lo()), null !== i) {
      if (i.Je() === i.Qe()) {
        const t2 = 5 * this.S_();
        this.ho() && (i = vi(i, this.ko)), i = new mt(i.Je() - t2, i.Qe() + t2), this.ho() && (i = pi(i, this.ko));
      }
      if (this.ho()) {
        const t2 = vi(i, this.ko), n2 = mi(t2);
        if (r2 = n2, h2 = this.ko, r2.Ol !== h2.Ol || r2.Nl !== h2.Nl) {
          const s2 = null !== this.uo ? vi(this.uo, this.ko) : null;
          this.ko = n2, i = pi(t2, n2), null !== s2 && (this.uo = pi(s2, n2));
        }
      }
      this.Wo(i);
    } else null === this.rr && (this.Wo(new mt(-0.5, 0.5)), this.ko = mi(null));
    var r2, h2;
  }
  Qo() {
    return this.je() ? oi : this.No() ? ui : this.ho() ? (t) => di(t, this.ko) : null;
  }
  C_(t, i, n) {
    return void 0 === i ? (void 0 === n && (n = this.sl()), n.format(t)) : i(t);
  }
  y_(t, i, n) {
    return void 0 === i ? (void 0 === n && (n = this.sl()), n.formatTickmarks(t)) : i(t);
  }
  cr(t, i) {
    return this.C_(t, this.Do.priceFormatter, i);
  }
  M_(t, i) {
    const n = this.Do.priceFormatter;
    return this.y_(t, this.Do.tickmarksPriceFormatter ?? (n ? (t2) => t2.map(n) : void 0), i);
  }
  m_(t, i) {
    return this.C_(t, this.Do.percentageFormatter, i);
  }
  w_(t, i) {
    const n = this.Do.percentageFormatter;
    return this.y_(t, this.Do.tickmarksPercentageFormatter ?? (n ? (t2) => t2.map(n) : void 0), i);
  }
}
function yi(t) {
  return t instanceof Jt;
}
class Pi {
  constructor(t, i) {
    this.bo = [], this.P_ = /* @__PURE__ */ new Map(), this.oo = 0, this.k_ = 0, this.T_ = 1, this.xo = null, this.R_ = null, this.D_ = false, this.I_ = new d(), this.fa = [], this.ia = t, this.sn = i, this.V_ = new ai(this);
    const n = i.N();
    this.B_ = this.E_("left", n.leftPriceScale), this.A_ = this.E_("right", n.rightPriceScale), this.B_.Uo().i(this.L_.bind(this, this.B_), this), this.A_.Uo().i(this.L_.bind(this, this.A_), this), this.z_(n);
  }
  z_(t) {
    if (t.leftPriceScale && this.B_.vr(t.leftPriceScale), t.rightPriceScale && this.A_.vr(t.rightPriceScale), t.localization && (this.B_.vl(), this.A_.vl()), t.overlayPriceScales) {
      const i = Array.from(this.P_.values());
      for (const n of i) {
        const i2 = u(n[0].Ft());
        i2.vr(t.overlayPriceScales), t.localization && i2.vl();
      }
    }
  }
  O_(t) {
    switch (t) {
      case "left":
        return this.B_;
      case "right":
        return this.A_;
    }
    return this.P_.has(t) ? _(this.P_.get(t))[0].Ft() : null;
  }
  m() {
    this.Qt().N_().u(this), this.B_.Uo().u(this), this.A_.Uo().u(this), this.bo.forEach(((t) => {
      t.m && t.m();
    })), this.fa = this.fa.filter(((t) => {
      const i = t.Qh();
      return i.detached && i.detached(), false;
    })), this.I_.p();
  }
  F_() {
    return this.T_;
  }
  W_(t) {
    this.T_ = t;
  }
  Qt() {
    return this.sn;
  }
  nn() {
    return this.k_;
  }
  $t() {
    return this.oo;
  }
  H_(t) {
    this.k_ = t, this.U_();
  }
  $o(t) {
    this.oo = t, this.B_.$o(t), this.A_.$o(t), this.bo.forEach(((i) => {
      if (this.Gs(i)) {
        const n = i.Ft();
        null !== n && n.$o(t);
      }
    })), this.U_();
  }
  j_(t) {
    this.D_ = t;
  }
  q_() {
    return this.D_;
  }
  Y_() {
    return this.bo.filter(yi);
  }
  kl() {
    return this.bo;
  }
  Gs(t) {
    const i = t.Ft();
    return null === i || this.B_ !== i && this.A_ !== i;
  }
  h_(t, i, n) {
    this.K_(t, i, n ? t.ln() : this.bo.length);
  }
  l_(t, i) {
    const n = this.bo.indexOf(t);
    o(-1 !== n, "removeDataSource: invalid data source"), this.bo.splice(n, 1), i || this.bo.forEach(((t2, i2) => t2._n(i2)));
    const s = u(t.Ft()).pl();
    if (this.P_.has(s)) {
      const i2 = _(this.P_.get(s)), n2 = i2.indexOf(t);
      -1 !== n2 && (i2.splice(n2, 1), 0 === i2.length && this.P_.delete(s));
    }
    const e2 = t.Ft();
    e2 && e2.kl().indexOf(t) >= 0 && (e2.l_(t), this.G_(e2)), this.Z_();
  }
  Xs(t) {
    return t === this.B_ ? "left" : t === this.A_ ? "right" : "overlay";
  }
  X_() {
    return this.B_;
  }
  J_() {
    return this.A_;
  }
  Q_(t, i) {
    t.u_(i);
  }
  tu(t, i) {
    t.c_(i), this.U_();
  }
  iu(t) {
    t.d_();
  }
  nu(t, i) {
    t.f_(i);
  }
  su(t, i) {
    t.p_(i), this.U_();
  }
  eu(t) {
    t.v_();
  }
  U_() {
    this.bo.forEach(((t) => {
      t.Nn();
    }));
  }
  kn() {
    const [t, i] = this.ru();
    let n = null;
    return t.N().visible && 0 !== t.kl().length ? n = t : i.N().visible && 0 !== i.kl().length ? n = i : 0 !== this.bo.length && (n = this.bo[0].Ft()), null === n && (n = this.Zs() ?? t), n;
  }
  Zs() {
    const [t, i] = this.ru();
    return t.N().visible ? t : i.N().visible ? i : null;
  }
  G_(t) {
    null !== t && t.zo() && this.hu(t);
  }
  au(t) {
    const i = this.ia.Ee();
    t.Ao({ hs: true }), null !== i && t.b_(i), this.U_();
  }
  lu() {
    this.hu(this.B_), this.hu(this.A_);
  }
  ou() {
    this.G_(this.B_), this.G_(this.A_), this.bo.forEach(((t) => {
      this.Gs(t) && this.G_(t.Ft());
    })), this.U_(), this.sn.mr();
  }
  Dt() {
    return null === this.xo && (this.xo = gi(this.bo)), this.xo;
  }
  _u() {
    const t = this.Dt(), i = this.sn.cu()?.uu, n = this.sn.N().hoveredSeriesOnTop, s = this.R_;
    if (null !== s && s.Kh === t && s.du === i && s.fu === n) return s.pu;
    const e2 = (function(t2, i2, n2) {
      if (!n2) return t2;
      const s2 = t2.indexOf(i2);
      if (-1 === s2 || s2 === t2.length - 1) return t2;
      const e3 = [];
      for (let i3 = 0; i3 < t2.length; i3++) i3 !== s2 && e3.push(t2[i3]);
      return e3.push(t2[s2]), e3;
    })(t, i, n);
    return this.R_ = { Kh: t, du: i, fu: n, pu: e2 }, e2;
  }
  vu(t, i) {
    i = ni(i, 0, this.bo.length - 1);
    const n = this.bo.indexOf(t);
    o(-1 !== n, "setSeriesOrder: invalid data source"), this.bo.splice(n, 1), this.bo.splice(i, 0, t), this.bo.forEach(((t2, i2) => t2._n(i2))), this.Z_();
    for (const t2 of [this.B_, this.A_]) t2.a_(), t2.vl();
    this.sn.mr();
  }
  Vt() {
    return this.Dt().filter(yi);
  }
  mu() {
    return this.I_;
  }
  wu() {
    return this.V_;
  }
  ol(t) {
    this.fa.push(new Ft(t));
  }
  _l(t) {
    this.fa = this.fa.filter(((i) => i.Qh() !== t)), t.detached && t.detached(), this.sn.mr();
  }
  Mu() {
    return this.fa;
  }
  il(t, i) {
    return this.fa.map(((n) => n.Qs(t, i))).filter(((t2) => null !== t2));
  }
  hu(t) {
    const i = t.g_();
    if (i && i.length > 0 && !this.ia.Zi()) {
      const i2 = this.ia.Ee();
      null !== i2 && t.b_(i2);
    }
    t.Nn();
  }
  K_(t, i, n) {
    let s = this.O_(i);
    if (null === s && (s = this.E_(i, this.sn.N().overlayPriceScales)), this.bo.splice(n, 0, t), !Z(i)) {
      const n2 = this.P_.get(i) || [];
      n2.push(t), this.P_.set(i, n2);
    }
    t._n(n), s.h_(t), t.un(s), this.G_(s), this.Z_();
  }
  Z_() {
    this.xo = null, this.R_ = null;
  }
  ru() {
    return "left" === this.sn.N().defaultVisiblePriceScaleId ? [this.B_, this.A_] : [this.A_, this.B_];
  }
  L_(t, i, n) {
    i._e !== n._e && this.hu(t);
  }
  E_(t, i) {
    const n = { visible: true, autoScale: true, ...M(i) }, s = new Ci(t, n, this.sn.N().layout, this.sn.N().localization, this.sn.Xi());
    return s.$o(this.$t()), s;
  }
}
function ki(t, i) {
  return null === i || (2 === t.se && 2 !== i.se || (2 !== i.se || 2 === t.se) && (t.ne !== i.ne && t.ne < i.ne));
}
function Ti(t) {
  return { te: t.te, ie: t.ie };
}
function Ri(t) {
  return { ne: t.distance ?? 0, se: t.hitTestPriority ?? ("marker" === t.itemType ? 2 : 0), ee: t.itemType ?? "primitive", gu: t.cursorStyle, te: t.externalId };
}
function Di(t) {
  return { uu: t.uu, bu: Ti(t.Su), gu: t.Su.gu, ee: t.Su.ee ?? "primitive" };
}
function Ii(t, i, n, s) {
  let e2 = null;
  for (const r2 of t) {
    let t2 = r2.Qs?.(i, n, s) ?? null;
    if (null === t2) {
      const e3 = r2.Tt(s);
      t2 = null !== e3 && e3.Qs ? e3.Qs(i, n) : null;
    }
    if (null !== t2) {
      const i2 = { xu: r2, Su: t2 };
      (null === e2 || ki(i2.Su, e2.Su)) && (e2 = i2);
    }
  }
  return e2;
}
function Vi(t) {
  return void 0 !== t.jn;
}
function Bi(t, i, n) {
  const s = [t, ...t.Dt()].reverse(), e2 = (function(t2, i2, n2) {
    let s2, e3, r3;
    for (const l2 of t2) {
      const t3 = l2.il?.(i2, n2) ?? [];
      for (const i3 of t3) {
        const t4 = Ri(i3);
        h3 = i3.zOrder, a2 = s2?.zOrder, (!a2 || "top" === h3 && "top" !== a2 || "normal" === h3 && "bottom" === a2 || i3.zOrder === s2?.zOrder && void 0 !== e3 && ki(t4, e3) || i3.zOrder === s2?.zOrder && void 0 === e3) && (s2 = i3, e3 = t4, r3 = l2);
      }
    }
    var h3, a2;
    return s2 && r3 && e3 ? { Su: e3, Cu: s2, uu: r3 } : null;
  })(s, i, n);
  if ("top" === e2?.Cu.zOrder) return Di(e2);
  let r2 = null, h2 = null;
  for (const a2 of s) {
    if (e2 && e2.uu === a2 && "bottom" !== e2.Cu.zOrder && !e2.Cu.isBackground) return r2 ?? Di(e2);
    if (Vi(a2)) {
      const s2 = Ii(a2.jn(t), i, n, t);
      if (null !== s2) {
        const t2 = { uu: a2, xu: s2.xu, bu: Ti(s2.Su), gu: s2.Su.gu, ee: s2.Su.ee ?? "primitive" };
        (null === r2 || ki(s2.Su, h2)) && (r2 = t2, h2 = s2.Su);
      }
    }
    if (e2 && e2.uu === a2 && "bottom" !== e2.Cu.zOrder && e2.Cu.isBackground) return r2 ?? Di(e2);
  }
  return null !== r2 ? r2 : e2?.Cu ? Di(e2) : null;
}
class Ei {
  constructor(t, i, n = 50) {
    this.Vs = 0, this.Bs = 1, this.Es = 1, this.Ls = /* @__PURE__ */ new Map(), this.As = /* @__PURE__ */ new Map(), this.yu = t, this.Pu = i, this.zs = n;
  }
  ku(t) {
    const i = t.time, n = this.Pu.cacheKey(i), s = this.Ls.get(n);
    if (void 0 !== s) return s.Tu;
    if (this.Vs === this.zs) {
      const t2 = this.As.get(this.Es);
      this.As.delete(this.Es), this.Ls.delete(_(t2)), this.Es++, this.Vs--;
    }
    const e2 = this.yu(t);
    return this.Ls.set(n, { Tu: e2, Ws: this.Bs }), this.As.set(this.Bs, n), this.Vs++, this.Bs++, e2;
  }
}
class Ai {
  constructor(t, i) {
    o(t <= i, "right should be >= left"), this.Ru = t, this.Du = i;
  }
  Na() {
    return this.Ru;
  }
  bi() {
    return this.Du;
  }
  Iu() {
    return this.Du - this.Ru + 1;
  }
  ze(t) {
    return this.Ru <= t && t <= this.Du;
  }
  Ze(t) {
    return this.Ru === t.Na() && this.Du === t.bi();
  }
}
function Li(t, i) {
  return null === t || null === i ? t === i : t.Ze(i);
}
class zi {
  constructor() {
    this.Vu = /* @__PURE__ */ new Map(), this.Ls = null, this.Bu = false;
  }
  Eu(t) {
    this.Bu = t, this.Ls = null;
  }
  Au(t, i) {
    this.Lu(i), this.Ls = null;
    for (let n = i; n < t.length; ++n) {
      const i2 = t[n];
      let s = this.Vu.get(i2.timeWeight);
      void 0 === s && (s = [], this.Vu.set(i2.timeWeight, s)), s.push({ index: n, time: i2.time, weight: i2.timeWeight, originalTime: i2.originalTime });
    }
  }
  zu(t, i, n, s, e2) {
    const r2 = Math.ceil(i / t);
    return null !== this.Ls && this.Ls.Ou === r2 && e2 === this.Ls.Nu && n === this.Ls.Fu || (this.Ls = { Nu: e2, Fu: n, zl: this.Wu(r2, n, s), Ou: r2 }), this.Ls.zl;
  }
  Lu(t) {
    if (0 === t) return void this.Vu.clear();
    const i = [];
    this.Vu.forEach(((n, s) => {
      t <= n[0].index ? i.push(s) : n.splice(Rt(n, t, ((i2) => i2.index < t)), 1 / 0);
    }));
    for (const t2 of i) this.Vu.delete(t2);
  }
  Wu(t, i, n) {
    let s = [];
    const e2 = (t2) => !i || n.has(t2.index);
    for (const i2 of Array.from(this.Vu.keys()).sort(((t2, i3) => i3 - t2))) {
      if (!this.Vu.get(i2)) continue;
      const n2 = s;
      s = [];
      const r2 = n2.length;
      let h2 = 0;
      const a2 = _(this.Vu.get(i2)), l2 = a2.length;
      let o2 = 1 / 0, u2 = -1 / 0;
      for (let i3 = 0; i3 < l2; i3++) {
        const l3 = a2[i3], _2 = l3.index;
        for (; h2 < r2; ) {
          const t2 = n2[h2], i4 = t2.index;
          if (!(i4 < _2 && e2(t2))) {
            o2 = i4;
            break;
          }
          h2++, s.push(t2), u2 = i4, o2 = 1 / 0;
        }
        if (o2 - _2 >= t && _2 - u2 >= t && e2(l3)) s.push(l3), u2 = _2;
        else if (this.Bu) return n2;
      }
      for (; h2 < r2; h2++) e2(n2[h2]) && s.push(n2[h2]);
    }
    return s;
  }
}
class Oi {
  constructor(t) {
    this.Hu = t;
  }
  Uu() {
    return null === this.Hu ? null : new Ai(Math.floor(this.Hu.Na()), Math.ceil(this.Hu.bi()));
  }
  $u() {
    return this.Hu;
  }
  static ju() {
    return new Oi(null);
  }
}
function Ni(t, i) {
  return t.weight > i.weight ? t : i;
}
class Fi {
  constructor(t, i, n, s) {
    this.k_ = 0, this.qu = null, this.Yu = [], this.Po = null, this.yo = null, this.Ku = new zi(), this.Gu = /* @__PURE__ */ new Map(), this.Zu = Oi.ju(), this.Xu = true, this.Ju = new d(), this.Qu = new d(), this.tc = new d(), this.nc = null, this.sc = null, this.ec = /* @__PURE__ */ new Map(), this.rc = -1, this.hc = [], this.ac = 1, this.yn = i, this.Do = n, this.lc = i.rightOffset, this.oc = i.barSpacing, this.sn = t, this._c(i), this.Pu = s, this.uc(), this.Ku.Eu(i.uniformDistribution), this.cc(), this.dc();
  }
  N() {
    return this.yn;
  }
  fc(t) {
    f(this.Do, t), this.vc(), this.uc();
  }
  vr(t, i) {
    f(this.yn, t), this.yn.fixLeftEdge && this.mc(), this.yn.fixRightEdge && this.wc(), void 0 !== t.barSpacing && this.sn.Ms(t.barSpacing), void 0 !== t.rightOffset && this.sn.gs(t.rightOffset), this._c(t), void 0 === t.minBarSpacing && void 0 === t.maxBarSpacing || this.sn.Ms(t.barSpacing ?? this.oc), void 0 !== t.ignoreWhitespaceIndices && t.ignoreWhitespaceIndices !== this.yn.ignoreWhitespaceIndices && this.dc(), this.vc(), this.uc(), void 0 === t.enableConflation && void 0 === t.conflationThresholdFactor || this.cc(), this.tc.p();
  }
  Rn(t) {
    return this.Yu[t]?.time ?? null;
  }
  en(t) {
    return this.Yu[t] ?? null;
  }
  Mc(t, i) {
    if (this.Yu.length < 1) return null;
    if (this.Pu.key(t) > this.Pu.key(this.Yu[this.Yu.length - 1].time)) return i ? this.Yu.length - 1 : null;
    const n = Rt(this.Yu, this.Pu.key(t), ((t2, i2) => this.Pu.key(t2.time) < i2));
    return this.Pu.key(t) < this.Pu.key(this.Yu[n].time) ? i ? n : null : n;
  }
  Zi() {
    return 0 === this.k_ || 0 === this.Yu.length || null === this.qu;
  }
  gc() {
    return this.Yu.length > 0;
  }
  Ee() {
    return this.bc(), this.Zu.Uu();
  }
  Sc() {
    return this.bc(), this.Zu.$u();
  }
  xc() {
    const t = this.Ee();
    if (null === t) return null;
    const i = { from: t.Na(), to: t.bi() };
    return this.Cc(i);
  }
  Cc(t) {
    const i = Math.round(t.from), n = Math.round(t.to), s = u(this.yc()), e2 = u(this.Pc());
    return { from: u(this.en(Math.max(s, i))), to: u(this.en(Math.min(e2, n))) };
  }
  kc(t) {
    return { from: u(this.Mc(t.from, true)), to: u(this.Mc(t.to, true)) };
  }
  nn() {
    return this.k_;
  }
  H_(t) {
    if (!isFinite(t) || t <= 0) return;
    if (this.k_ === t) return;
    const i = this.Sc(), n = this.k_;
    if (this.k_ = t, this.Xu = true, this.yn.lockVisibleTimeRangeOnResize && 0 !== n) {
      const i2 = this.oc * t / n;
      this.oc = i2;
    }
    if (this.yn.fixLeftEdge && null !== i && i.Na() <= 0) {
      const i2 = n - t;
      this.lc -= Math.round(i2 / this.oc) + 1, this.Xu = true;
    }
    this.Tc(), this.Rc();
  }
  jt(t) {
    if (this.Zi() || !v(t)) return 0;
    const i = this.Dc() + this.lc - t;
    return this.k_ - (i + 0.5) * this.oc - 1;
  }
  Ic(t, i) {
    const n = this.Dc(), s = void 0 === i ? 0 : i.from, e2 = void 0 === i ? t.length : i.to;
    for (let i2 = s; i2 < e2; i2++) {
      const s2 = t[i2].wt, e3 = n + this.lc - s2, r2 = this.k_ - (e3 + 0.5) * this.oc - 1;
      t[i2]._t = r2;
    }
  }
  Vc(t, i) {
    const n = Math.ceil(this.Bc(t));
    return i && this.yn.ignoreWhitespaceIndices && !this.Ec(n) ? this.Ac(n) : n;
  }
  gs(t) {
    this.Xu = true, this.lc = t, this.Rc(), this.sn.Lc(), this.sn.mr();
  }
  ml() {
    return this.oc;
  }
  Ms(t) {
    const i = this.oc;
    if (this.zc(t), void 0 !== this.yn.rightOffsetPixels && 0 !== i) {
      const t2 = this.lc * i / this.oc;
      this.lc = t2;
    }
    this.Rc(), this.sn.Lc(), this.sn.mr();
  }
  Oc() {
    return this.lc;
  }
  zl() {
    if (this.Zi()) return null;
    if (null !== this.sc) return this.sc;
    const t = this.oc, i = 5 * (this.sn.N().layout.fontSize + 4) / 8 * (this.yn.tickMarkMaxCharacterLength || 8), n = Math.round(i / t), s = u(this.Ee()), e2 = Math.max(s.Na(), s.Na() - n), r2 = Math.max(s.bi(), s.bi() - n), h2 = this.Ku.zu(t, i, this.yn.ignoreWhitespaceIndices, this.ec, this.rc), a2 = this.yc() + n, l2 = this.Pc() - n, o2 = this.Nc(), _2 = this.yn.fixLeftEdge || o2, c2 = this.yn.fixRightEdge || o2;
    let d2 = 0;
    for (const t2 of h2) {
      if (!(e2 <= t2.index && t2.index <= r2)) continue;
      let n2;
      d2 < this.hc.length ? (n2 = this.hc[d2], n2.coord = this.jt(t2.index), n2.label = this.Fc(t2), n2.weight = t2.weight) : (n2 = { needAlignCoordinate: false, coord: this.jt(t2.index), label: this.Fc(t2), weight: t2.weight }, this.hc.push(n2)), this.oc > i / 2 && !o2 ? n2.needAlignCoordinate = false : n2.needAlignCoordinate = _2 && t2.index <= a2 || c2 && t2.index >= l2, d2++;
    }
    return this.hc.length = d2, this.sc = this.hc, this.hc;
  }
  Wc() {
    let t;
    this.Xu = true, this.Ms(this.yn.barSpacing), t = void 0 !== this.yn.rightOffsetPixels ? this.yn.rightOffsetPixels / this.ml() : this.yn.rightOffset, this.gs(t);
  }
  Hc(t) {
    this.Xu = true, this.qu = t, this.Rc(), this.mc();
  }
  Uc(t, i) {
    const n = this.Bc(t), s = this.ml(), e2 = s + i * (s / 10);
    this.Ms(e2), this.yn.rightBarStaysOnScroll || this.gs(this.Oc() + (n - this.Bc(t)));
  }
  u_(t) {
    this.Po && this.v_(), null === this.yo && null === this.nc && (this.Zi() || (this.yo = t, this.$c()));
  }
  c_(t) {
    if (null === this.nc) return;
    const i = ni(this.k_ - t, 0, this.k_), n = ni(this.k_ - u(this.yo), 0, this.k_);
    0 !== i && 0 !== n && this.Ms(this.nc.ml * i / n);
  }
  d_() {
    null !== this.yo && (this.yo = null, this.jc());
  }
  f_(t) {
    null === this.Po && null === this.nc && (this.Zi() || (this.Po = t, this.$c()));
  }
  p_(t) {
    if (null === this.Po) return;
    const i = (this.Po - t) / this.ml();
    this.lc = u(this.nc).Oc + i, this.Xu = true, this.Rc();
  }
  v_() {
    null !== this.Po && (this.Po = null, this.jc());
  }
  qc() {
    this.Yc(this.yn.rightOffset);
  }
  Yc(t, i = 400) {
    if (!isFinite(t)) throw new RangeError("offset is required and must be finite number");
    if (!isFinite(i) || i <= 0) throw new RangeError("animationDuration (optional) must be finite positive number");
    const n = this.lc, s = performance.now();
    this.sn.ps({ Kc: (t2) => (t2 - s) / i >= 1, Gc: (e2) => {
      const r2 = (e2 - s) / i;
      return r2 >= 1 ? t : n + (t - n) * r2;
    } });
  }
  Pt(t, i) {
    this.Xu = true, this.Yu = t, this.Ku.Au(t, i), this.Rc();
  }
  Zc() {
    return this.Ju;
  }
  Xc() {
    return this.Qu;
  }
  Jc() {
    return this.tc;
  }
  Dc() {
    return this.qu || 0;
  }
  Qc(t, i) {
    const n = t.Iu(), s = i && this.yn.rightOffsetPixels || 0;
    this.zc((this.k_ - s) / n), this.lc = t.bi() - this.Dc(), i && (this.lc = s ? s / this.ml() : this.yn.rightOffset), this.Rc(), this.Xu = true, this.sn.Lc(), this.sn.mr();
  }
  td() {
    const t = this.yc(), i = this.Pc();
    if (null === t || null === i) return;
    const n = !this.yn.rightOffsetPixels && this.yn.rightOffset || 0;
    this.Qc(new Ai(t, i + n), true);
  }
  nd(t) {
    const i = new Ai(t.from, t.to);
    this.Qc(i);
  }
  rn(t) {
    return void 0 !== this.Do.timeFormatter ? this.Do.timeFormatter(t.originalTime) : this.Pu.formatHorzItem(t.time);
  }
  dc() {
    if (!this.yn.ignoreWhitespaceIndices) return;
    this.ec.clear();
    const t = this.sn.Jn();
    for (const i of t) for (const t2 of i.fl()) this.ec.set(t2, true);
    this.rc++;
  }
  sd() {
    return this.ac;
  }
  Sl() {
    const t = 1 / (window.devicePixelRatio || 1), i = this.yn.minBarSpacing;
    if (i >= t) return [1];
    const n = [1];
    let s = 2;
    for (; s <= 512; ) {
      i < t / s && n.push(s), s *= 2;
    }
    return n;
  }
  Nc() {
    const t = this.sn.N().handleScroll, i = this.sn.N().handleScale;
    return !(t.horzTouchDrag || t.mouseWheel || t.pressedMouseMove || t.vertTouchDrag || i.axisDoubleClickReset.time || i.axisPressedMouseMove.time || i.mouseWheel || i.pinch);
  }
  yc() {
    return 0 === this.Yu.length ? null : 0;
  }
  Pc() {
    return 0 === this.Yu.length ? null : this.Yu.length - 1;
  }
  ed(t) {
    return (this.k_ - 1 - t) / this.oc;
  }
  Bc(t) {
    const i = this.ed(t), n = this.Dc() + this.lc - i;
    return Math.round(1e6 * n) / 1e6;
  }
  zc(t) {
    const i = this.oc;
    this.oc = t, this.Tc(), i !== this.oc && (this.Xu = true, this.rd(), this.cc());
  }
  bc() {
    if (!this.Xu) return;
    if (this.Xu = false, this.Zi()) return void this.hd(Oi.ju());
    const t = this.Dc(), i = this.k_ / this.oc, n = this.lc + t, s = new Ai(n - i + 1, n);
    this.hd(new Oi(s));
  }
  Tc() {
    const t = ni(this.oc, this.ad(), this.ld());
    this.oc !== t && (this.oc = t, this.Xu = true);
  }
  ld() {
    return this.yn.maxBarSpacing > 0 ? this.yn.maxBarSpacing : 0.5 * this.k_;
  }
  ad() {
    return this.yn.fixLeftEdge && this.yn.fixRightEdge && 0 !== this.Yu.length ? this.k_ / this.Yu.length : this.yn.minBarSpacing;
  }
  cc() {
    if (!this.yn.enableConflation) return void (this.ac = 1);
    const t = 1 / (window.devicePixelRatio || 1) * (this.yn.conflationThresholdFactor ?? 1);
    if (this.oc >= t) return void (this.ac = 1);
    const i = t / this.oc, n = Math.pow(2, Math.floor(Math.log2(i)));
    this.ac = Math.min(n, 512);
  }
  Rc() {
    const t = this.od();
    null !== t && this.lc < t && (this.lc = t, this.Xu = true);
    const i = this._d();
    this.lc > i && (this.lc = i, this.Xu = true);
  }
  od() {
    const t = this.yc(), i = this.qu;
    if (null === t || null === i) return null;
    return t - i - 1 + (this.yn.fixLeftEdge ? this.k_ / this.oc : Math.min(2, this.Yu.length));
  }
  _d() {
    return this.yn.fixRightEdge ? 0 : this.k_ / this.oc - Math.min(2, this.Yu.length);
  }
  $c() {
    this.nc = { ml: this.ml(), Oc: this.Oc() };
  }
  jc() {
    this.nc = null;
  }
  Fc(t) {
    let i = this.Gu.get(t.weight);
    return void 0 === i && (i = new Ei(((t2) => this.ud(t2)), this.Pu), this.Gu.set(t.weight, i)), i.ku(t);
  }
  ud(t) {
    return this.Pu.formatTickmark(t, this.Do);
  }
  hd(t) {
    const i = this.Zu;
    this.Zu = t, Li(i.Uu(), this.Zu.Uu()) || this.Ju.p(), Li(i.$u(), this.Zu.$u()) || this.Qu.p(), this.rd();
  }
  rd() {
    this.sc = null;
  }
  vc() {
    this.rd(), this.Gu.clear();
  }
  uc() {
    this.Pu.updateFormatter(this.Do);
  }
  mc() {
    if (!this.yn.fixLeftEdge) return;
    const t = this.yc();
    if (null === t) return;
    const i = this.Ee();
    if (null === i) return;
    const n = i.Na() - t;
    if (n < 0) {
      const t2 = this.lc - n - 1;
      this.gs(t2);
    }
    this.Tc();
  }
  wc() {
    this.Rc(), this.Tc();
  }
  Ec(t) {
    return !this.yn.ignoreWhitespaceIndices || (this.ec.get(t) || false);
  }
  Ac(t) {
    const i = (function* (t2) {
      const i2 = Math.round(t2), n2 = i2 < t2;
      let s = 1;
      for (; ; ) n2 ? (yield i2 + s, yield i2 - s) : (yield i2 - s, yield i2 + s), s++;
    })(t), n = this.Pc();
    for (; n; ) {
      const t2 = i.next().value;
      if (this.ec.get(t2)) return t2;
      if (t2 < 0 || t2 > n) break;
    }
    return t;
  }
  _c(t) {
    if (void 0 !== t.rightOffsetPixels) {
      const i = t.rightOffsetPixels / (t.barSpacing || this.oc);
      this.sn.gs(i);
    }
  }
}
var Wi, Hi, Ui, $i, ji;
!(function(t) {
  t[t.OnTouchEnd = 0] = "OnTouchEnd", t[t.OnNextTap = 1] = "OnNextTap";
})(Wi || (Wi = {}));
class qi {
  constructor(t, i, n) {
    this.dd = [], this.fd = [], this.pd = null, this.k_ = 0, this.vd = null, this.md = new d(), this.wd = new d(), this.Md = null, this.gd = t, this.yn = i, this.Pu = n, this.Io = new k(this.yn.layout.colorParsers), this.bd = new C(this), this.ia = new Fi(this, i.timeScale, this.yn.localization, n), this.Ct = new G(this, i.crosshair), this.Sd = new ii(i.crosshair), i.addDefaultPane && (this.xd(0), this.dd[0].W_(2)), this.Cd = this.yd(0), this.Pd = this.yd(1);
  }
  ka() {
    this.kd(X.ys());
  }
  mr() {
    this.kd(X.Cs());
  }
  Ya() {
    this.kd(new X(1));
  }
  Ta(t) {
    const i = this.Td(t);
    this.kd(i);
  }
  cu() {
    return this.vd;
  }
  Rd(t) {
    if (this.vd?.uu === t?.uu && this.vd?.bu?.te === t?.bu?.te && this.vd?.bu?.ie === t?.bu?.ie && this.vd?.gu === t?.gu && this.vd?.ee === t?.ee) return;
    const i = this.vd;
    this.vd = t, null !== i && this.Ta(i.uu), null !== t && t.uu !== i?.uu && this.Ta(t.uu);
  }
  N() {
    return this.yn;
  }
  vr(t) {
    f(this.yn, t), this.dd.forEach(((i) => i.z_(t))), void 0 !== t.timeScale && this.ia.vr(t.timeScale), void 0 !== t.localization && this.ia.fc(t.localization), (t.leftPriceScale || t.rightPriceScale) && this.md.p(), this.Cd = this.yd(0), this.Pd = this.yd(1), this.ka();
  }
  Dd(t, i, n = 0) {
    const s = this.dd[n];
    if (void 0 === s) return;
    if ("left" === t) return f(this.yn, { leftPriceScale: i }), s.z_({ leftPriceScale: i }), this.md.p(), void this.ka();
    if ("right" === t) return f(this.yn, { rightPriceScale: i }), s.z_({ rightPriceScale: i }), this.md.p(), void this.ka();
    const e2 = this.Id(t, n);
    null !== e2 && (e2.Ft.vr(i), this.md.p());
  }
  Id(t, i) {
    const n = this.dd[i];
    if (void 0 === n) return null;
    const s = n.O_(t);
    return null !== s ? { Kn: n, Ft: s } : null;
  }
  Et() {
    return this.ia;
  }
  Gn() {
    return this.dd;
  }
  Vd() {
    return this.Ct;
  }
  Bd() {
    return this.wd;
  }
  Ed(t, i) {
    t.$o(i), this.Lc();
  }
  H_(t) {
    this.k_ = t, this.ia.H_(this.k_), this.dd.forEach(((i) => i.H_(t))), this.Lc();
  }
  Ad(t) {
    1 !== this.dd.length && (o(t >= 0 && t < this.dd.length, "Invalid pane index"), this.dd.splice(t, 1), this.ka());
  }
  Ld(t, i) {
    if (this.dd.length < 2) return;
    o(t >= 0 && t < this.dd.length, "Invalid pane index");
    const n = this.dd[t], s = this.dd.reduce(((t2, i2) => t2 + i2.F_()), 0), e2 = this.dd.reduce(((t2, i2) => t2 + i2.$t()), 0), r2 = e2 - 30 * (this.dd.length - 1);
    i = Math.min(r2, Math.max(30, i));
    const h2 = s / e2, a2 = n.$t();
    n.W_(i * h2);
    let l2 = i - a2, _2 = this.dd.length - 1;
    for (const t2 of this.dd) if (t2 !== n) {
      const i2 = Math.min(r2, Math.max(30, t2.$t() - l2 / _2));
      l2 -= t2.$t() - i2, _2 -= 1;
      const n2 = i2 * h2;
      t2.W_(n2);
    }
    this.ka();
  }
  zd(t, i) {
    o(t >= 0 && t < this.dd.length && i >= 0 && i < this.dd.length, "Invalid pane index");
    const n = this.dd[t], s = this.dd[i];
    this.dd[t] = s, this.dd[i] = n, this.ka();
  }
  Od(t, i) {
    if (o(t >= 0 && t < this.dd.length && i >= 0 && i < this.dd.length, "Invalid pane index"), t === i) return;
    const [n] = this.dd.splice(t, 1);
    this.dd.splice(i, 0, n), this.ka();
  }
  Q_(t, i, n) {
    t.Q_(i, n);
  }
  tu(t, i, n) {
    t.tu(i, n), this.Ra(), this.kd(this.Nd(t, 2));
  }
  iu(t, i) {
    t.iu(i), this.kd(this.Nd(t, 2));
  }
  nu(t, i, n) {
    i.zo() || t.nu(i, n);
  }
  su(t, i, n) {
    i.zo() || (t.su(i, n), this.Ra(), this.kd(this.Nd(t, 2)));
  }
  eu(t, i) {
    i.zo() || (t.eu(i), this.kd(this.Nd(t, 2)));
  }
  au(t, i) {
    t.au(i), this.kd(this.Nd(t, 2));
  }
  Fd(t) {
    this.ia.u_(t);
  }
  Wd(t, i) {
    const n = this.Et();
    if (n.Zi() || 0 === i) return;
    const s = n.nn();
    t = Math.max(1, Math.min(t, s)), n.Uc(t, i), this.Lc();
  }
  Hd(t) {
    this.Ud(0), this.$d(t), this.jd();
  }
  qd(t) {
    this.ia.c_(t), this.Lc();
  }
  Yd() {
    this.ia.d_(), this.mr();
  }
  Ud(t) {
    this.ia.f_(t);
  }
  $d(t) {
    this.ia.p_(t), this.Lc();
  }
  jd() {
    this.ia.v_(), this.mr();
  }
  Jn() {
    return this.fd;
  }
  Wn() {
    return null === this.pd && (this.pd = this.fd.filter(((t) => t.It()))), this.pd;
  }
  Pa() {
    this.pd = null;
  }
  Kd(t, i, n, s, e2) {
    this.Ct.In(t, i);
    let r2 = NaN, h2 = this.ia.Vc(t, true);
    const a2 = this.ia.Ee();
    null !== a2 && (h2 = Math.min(Math.max(a2.Na(), h2), a2.bi())), h2 = this.Ct.Fn(h2);
    const l2 = s.kn(), o2 = l2.Lt();
    if (null !== o2 && (r2 = l2.Tn(i, o2)), r2 = this.Sd.Pl(r2, h2, s), this.Ct.An(h2, r2, s), this.Ya(), !e2) {
      const e3 = Bi(s, t, i);
      this.Rd(e3 && { uu: e3.uu, bu: e3.bu, gu: e3.gu || null, ee: e3.ee }), this.wd.p(this.Ct.Bt(), { x: t, y: i }, n);
    }
  }
  Gd(t, i, n) {
    const s = n.kn(), e2 = s.Lt(), r2 = s.Nt(t, u(e2)), h2 = this.ia.Mc(i, true), a2 = this.ia.jt(u(h2));
    this.Kd(a2, r2, null, n, true);
  }
  Zd(t) {
    this.Vd().zn(), this.Ya(), t || this.wd.p(null, null, null);
  }
  Ra() {
    const t = this.Ct.Kn();
    if (null !== t) {
      const i = this.Ct.Bn(), n = this.Ct.En();
      this.Kd(i, n, null, t);
    }
    this.Ct.Nn();
  }
  Xd(t, i, n) {
    const s = this.ia.Rn(0);
    void 0 !== i && void 0 !== n && this.ia.Pt(i, n);
    const e2 = this.ia.Rn(0), r2 = this.ia.Dc(), h2 = this.ia.Ee();
    if (null !== h2 && null !== s && null !== e2) {
      const i2 = h2.ze(r2), a2 = this.Pu.key(s) > this.Pu.key(e2), l2 = null !== t && t > r2 && !a2, o2 = this.ia.N().allowShiftVisibleRangeOnWhitespaceReplacement, _2 = i2 && (!(void 0 === n) || o2) && this.ia.N().shiftVisibleRangeOnNewBar;
      if (l2 && !_2) {
        const i3 = t - r2;
        this.ia.gs(this.ia.Oc() - i3);
      }
    }
    this.ia.Hc(t);
  }
  Ba(t) {
    null !== t && t.ou();
  }
  Ks(t) {
    if ((function(t2) {
      return t2 instanceof Pi;
    })(t)) return t;
    const i = this.dd.find(((i2) => i2.Dt().includes(t)));
    return void 0 === i ? null : i;
  }
  Lc() {
    this.dd.forEach(((t) => t.ou())), this.Ra();
  }
  m() {
    this.dd.forEach(((t) => t.m())), this.dd.length = 0, this.yn.localization.priceFormatter = void 0, this.yn.localization.percentageFormatter = void 0, this.yn.localization.timeFormatter = void 0;
  }
  Jd() {
    return this.bd;
  }
  Js() {
    return this.bd.N();
  }
  N_() {
    return this.md;
  }
  Qd(t, i) {
    const n = this.xd(i);
    this.tf(t, n), this.fd.push(t), this.Pa(), 1 === this.fd.length ? this.ka() : this.mr();
  }
  if(t) {
    const i = this.Ks(t), n = this.fd.indexOf(t);
    o(-1 !== n, "Series not found");
    const s = u(i);
    this.fd.splice(n, 1), s.l_(t), t.m && t.m(), this.Pa(), this.ia.dc(), this.nf(s);
  }
  ya(t, i) {
    const n = u(this.Ks(t));
    n.l_(t, true), n.h_(t, i, true);
  }
  td() {
    const t = X.Cs();
    t.us(), this.kd(t);
  }
  sf(t) {
    const i = X.Cs();
    i.fs(t), this.kd(i);
  }
  ws() {
    const t = X.Cs();
    t.ws(), this.kd(t);
  }
  Ms(t) {
    const i = X.Cs();
    i.Ms(t), this.kd(i);
  }
  gs(t) {
    const i = X.Cs();
    i.gs(t), this.kd(i);
  }
  ps(t) {
    const i = X.Cs();
    i.ps(t), this.kd(i);
  }
  cs() {
    const t = X.Cs();
    t.cs(), this.kd(t);
  }
  ef() {
    const t = this.yn.defaultVisiblePriceScaleId, i = this.yn.leftPriceScale.visible;
    return i !== this.yn.rightPriceScale.visible ? i ? "left" : "right" : t;
  }
  rf(t, i) {
    o(i >= 0, "Index should be greater or equal to 0");
    if (i === this.hf(t)) return;
    const n = u(this.Ks(t));
    n.l_(t);
    const s = this.xd(i);
    this.tf(t, s);
    let e2 = false;
    0 === n.kl().length && (e2 = this.nf(n)), e2 || this.ka();
  }
  af() {
    return this.Pd;
  }
  $() {
    return this.Cd;
  }
  Ut(t) {
    const i = this.Pd, n = this.Cd;
    if (i === n) return i;
    if (t = Math.max(0, Math.min(100, Math.round(100 * t))), null === this.Md || this.Md.ah !== n || this.Md.oh !== i) this.Md = { ah: n, oh: i, lf: /* @__PURE__ */ new Map() };
    else {
      const i2 = this.Md.lf.get(t);
      if (void 0 !== i2) return i2;
    }
    const s = this.Io.tt(n, i, t / 100);
    return this.Md.lf.set(t, s), s;
  }
  _f(t) {
    return this.dd.indexOf(t);
  }
  Xi() {
    return this.Io;
  }
  uf() {
    return this.cf();
  }
  cf(t) {
    const i = new Pi(this.ia, this);
    this.dd.push(i);
    const n = t ?? this.dd.length - 1, s = X.ys();
    return s.es(n, { rs: 0, hs: true }), this.kd(s), i;
  }
  xd(t) {
    return o(t >= 0, "Index should be greater or equal to 0"), (t = Math.min(this.dd.length, t)) < this.dd.length ? this.dd[t] : this.cf(t);
  }
  hf(t) {
    return this.dd.findIndex(((i) => i.Y_().includes(t)));
  }
  Nd(t, i) {
    const n = new X(i);
    if (null !== t) {
      const s = this.dd.indexOf(t);
      n.es(s, { rs: i });
    }
    return n;
  }
  Td(t, i) {
    return void 0 === i && (i = 2), this.Nd(this.Ks(t), i);
  }
  kd(t) {
    this.gd && this.gd(t), this.dd.forEach(((t2) => t2.wu().wr().Pt()));
  }
  tf(t, i) {
    const n = t.N().priceScaleId, s = void 0 !== n ? n : this.ef();
    i.h_(t, s), Z(s) || t.vr(t.N());
  }
  yd(t) {
    const i = this.yn.layout;
    return "gradient" === i.background.type ? 0 === t ? i.background.topColor : i.background.bottomColor : i.background.color;
  }
  nf(t) {
    return !t.q_() && 0 === t.kl().length && this.dd.length > 1 && (this.dd.splice(this._f(t), 1), this.ka(), true);
  }
}
function Yi(t) {
  if (t >= 1) return 0;
  let i = 0;
  for (; i < 8; i++) {
    const n = Math.round(t);
    if (Math.abs(n - t) < 1e-8) return i;
    t *= 10;
  }
  return i;
}
function Ki(t) {
  return !p(t) && !m(t);
}
function Gi(t) {
  return p(t);
}
!(function(t) {
  t[t.Disabled = 0] = "Disabled", t[t.Continuous = 1] = "Continuous", t[t.OnDataUpdate = 2] = "OnDataUpdate";
})(Hi || (Hi = {})), (function(t) {
  t[t.LastBar = 0] = "LastBar", t[t.LastVisible = 1] = "LastVisible";
})(Ui || (Ui = {})), (function(t) {
  t.Solid = "solid", t.VerticalGradient = "gradient";
})($i || ($i = {})), (function(t) {
  t[t.Year = 0] = "Year", t[t.Month = 1] = "Month", t[t.DayOfMonth = 2] = "DayOfMonth", t[t.Time = 3] = "Time", t[t.TimeWithSeconds = 4] = "TimeWithSeconds";
})(ji || (ji = {}));
const Zi = (t) => t.getUTCFullYear();
function Xi(t, i, n) {
  return i.replace(/yyyy/g, ((t2) => tt(Zi(t2), 4))(t)).replace(/yy/g, ((t2) => tt(Zi(t2) % 100, 2))(t)).replace(/MMMM/g, ((t2, i2) => new Date(t2.getUTCFullYear(), t2.getUTCMonth(), 1).toLocaleString(i2, { month: "long" }))(t, n)).replace(/MMM/g, ((t2, i2) => new Date(t2.getUTCFullYear(), t2.getUTCMonth(), 1).toLocaleString(i2, { month: "short" }))(t, n)).replace(/MM/g, ((t2) => tt(((t3) => t3.getUTCMonth() + 1)(t2), 2))(t)).replace(/dd/g, ((t2) => tt(((t3) => t3.getUTCDate())(t2), 2))(t));
}
class Ji {
  constructor(t = "yyyy-MM-dd", i = "default") {
    this.df = t, this.ff = i;
  }
  ku(t) {
    return Xi(t, this.df, this.ff);
  }
}
class Qi {
  constructor(t) {
    this.pf = t || "%h:%m:%s";
  }
  ku(t) {
    return this.pf.replace("%h", tt(t.getUTCHours(), 2)).replace("%m", tt(t.getUTCMinutes(), 2)).replace("%s", tt(t.getUTCSeconds(), 2));
  }
}
const tn = { vf: "yyyy-MM-dd", mf: "%h:%m:%s", wf: " ", Mf: "default" };
class nn {
  constructor(t = {}) {
    const i = { ...tn, ...t };
    this.gf = new Ji(i.vf, i.Mf), this.bf = new Qi(i.mf), this.Sf = i.wf;
  }
  ku(t) {
    return `${this.gf.ku(t)}${this.Sf}${this.bf.ku(t)}`;
  }
}
function sn(t) {
  return 60 * t * 60 * 1e3;
}
function en(t) {
  return 60 * t * 1e3;
}
const rn = [{ xf: (hn = 1, 1e3 * hn), Cf: 10 }, { xf: en(1), Cf: 20 }, { xf: en(5), Cf: 21 }, { xf: en(30), Cf: 22 }, { xf: sn(1), Cf: 30 }, { xf: sn(3), Cf: 31 }, { xf: sn(6), Cf: 32 }, { xf: sn(12), Cf: 33 }];
var hn;
function an(t, i) {
  if (t.getUTCFullYear() !== i.getUTCFullYear()) return 70;
  if (t.getUTCMonth() !== i.getUTCMonth()) return 60;
  if (t.getUTCDate() !== i.getUTCDate()) return 50;
  for (let n = rn.length - 1; n >= 0; --n) if (Math.floor(i.getTime() / rn[n].xf) !== Math.floor(t.getTime() / rn[n].xf)) return rn[n].Cf;
  return 0;
}
function ln(t) {
  let i = t;
  if (m(t) && (i = _n(t)), !Ki(i)) throw new Error("time must be of type BusinessDay");
  const n = new Date(Date.UTC(i.year, i.month - 1, i.day, 0, 0, 0, 0));
  return { yf: Math.round(n.getTime() / 1e3), Pf: i };
}
function on(t) {
  if (!Gi(t)) throw new Error("time must be of type isUTCTimestamp");
  return { yf: t };
}
function _n(t) {
  const i = new Date(t);
  if (isNaN(i.getTime())) throw new Error(`Invalid date string=${t}, expected format=yyyy-mm-dd`);
  return { day: i.getUTCDate(), month: i.getUTCMonth() + 1, year: i.getUTCFullYear() };
}
function un(t) {
  m(t.time) && (t.time = _n(t.time));
}
class cn {
  options() {
    return this.yn;
  }
  setOptions(t) {
    this.yn = t, this.updateFormatter(t.localization);
  }
  preprocessData(t) {
    Array.isArray(t) ? (function(t2) {
      t2.forEach(un);
    })(t) : un(t);
  }
  createConverterToInternalObj(t) {
    return u((function(t2) {
      return 0 === t2.length ? null : Ki(t2[0].time) || m(t2[0].time) ? ln : on;
    })(t));
  }
  key(t) {
    return "object" == typeof t && "yf" in t ? t.yf : this.key(this.convertHorzItemToInternal(t));
  }
  cacheKey(t) {
    const i = t;
    return void 0 === i.Pf ? new Date(1e3 * i.yf).getTime() : new Date(Date.UTC(i.Pf.year, i.Pf.month - 1, i.Pf.day)).getTime();
  }
  convertHorzItemToInternal(t) {
    return Gi(i = t) ? on(i) : Ki(i) ? ln(i) : ln(_n(i));
    var i;
  }
  updateFormatter(t) {
    if (!this.yn) return;
    const i = t.dateFormat;
    this.yn.timeScale.timeVisible ? this.kf = new nn({ vf: i, mf: this.yn.timeScale.secondsVisible ? "%h:%m:%s" : "%h:%m", wf: "   ", Mf: t.locale }) : this.kf = new Ji(i, t.locale);
  }
  formatHorzItem(t) {
    const i = t;
    return this.kf.ku(new Date(1e3 * i.yf));
  }
  formatTickmark(t, i) {
    const n = (function(t2, i2, n2) {
      switch (t2) {
        case 0:
        case 10:
          return i2 ? n2 ? 4 : 3 : 2;
        case 20:
        case 21:
        case 22:
        case 30:
        case 31:
        case 32:
        case 33:
          return i2 ? 3 : 2;
        case 50:
          return 2;
        case 60:
          return 1;
        case 70:
          return 0;
      }
    })(t.weight, this.yn.timeScale.timeVisible, this.yn.timeScale.secondsVisible), s = this.yn.timeScale;
    if (void 0 !== s.tickMarkFormatter) {
      const e2 = s.tickMarkFormatter(t.originalTime, n, i.locale);
      if (null !== e2) return e2;
    }
    return (function(t2, i2, n2) {
      const s2 = {};
      switch (i2) {
        case 0:
          s2.year = "numeric";
          break;
        case 1:
          s2.month = "short";
          break;
        case 2:
          s2.day = "numeric";
          break;
        case 3:
          s2.hour12 = false, s2.hour = "2-digit", s2.minute = "2-digit";
          break;
        case 4:
          s2.hour12 = false, s2.hour = "2-digit", s2.minute = "2-digit", s2.second = "2-digit";
      }
      const e2 = void 0 === t2.Pf ? new Date(1e3 * t2.yf) : new Date(Date.UTC(t2.Pf.year, t2.Pf.month - 1, t2.Pf.day));
      return new Date(e2.getUTCFullYear(), e2.getUTCMonth(), e2.getUTCDate(), e2.getUTCHours(), e2.getUTCMinutes(), e2.getUTCSeconds(), e2.getUTCMilliseconds()).toLocaleString(n2, s2);
    })(t.time, n, i.locale);
  }
  maxTickMarkWeight(t) {
    let i = t.reduce(Ni, t[0]).weight;
    return i > 30 && i < 50 && (i = 30), i;
  }
  fillWeightsForPoints(t, i) {
    !(function(t2, i2 = 0) {
      if (0 === t2.length) return;
      let n = 0 === i2 ? null : t2[i2 - 1].time.yf, s = null !== n ? new Date(1e3 * n) : null, e2 = 0;
      for (let r2 = i2; r2 < t2.length; ++r2) {
        const i3 = t2[r2], h2 = new Date(1e3 * i3.time.yf);
        null !== s && (i3.timeWeight = an(h2, s)), e2 += i3.time.yf - (n || i3.time.yf), n = i3.time.yf, s = h2;
      }
      if (0 === i2 && t2.length > 1) {
        const i3 = Math.ceil(e2 / (t2.length - 1)), n2 = new Date(1e3 * (t2[0].time.yf - i3));
        t2[0].timeWeight = an(new Date(1e3 * t2[0].time.yf), n2);
      }
    })(t, i);
  }
  static Tf(t) {
    return f({ localization: { dateFormat: "dd MMM 'yy" } }, t ?? {});
  }
}
const dn = "undefined" != typeof window;
function fn() {
  return !!dn && window.navigator.userAgent.toLowerCase().indexOf("firefox") > -1;
}
function pn() {
  return !!dn && /iPhone|iPad|iPod/.test(window.navigator.platform);
}
function vn(t, i) {
  switch (t) {
    case "custom":
      return void 0 !== i ? "custom-object" : "series";
    case "price-line":
      return "custom-price-line";
    case "marker":
      return "series-marker";
    case "primitive":
      return "primitive";
    default:
      return "series";
  }
}
function mn(t) {
  return t + t % 2;
}
function wn(t) {
  dn && void 0 !== window.chrome && t.addEventListener("mousedown", ((t2) => {
    if (1 === t2.button) return t2.preventDefault(), false;
  }));
}
class Mn {
  constructor(t, i, n) {
    this.Rf = 0, this.Df = null, this.If = { _t: Number.NEGATIVE_INFINITY, ut: Number.POSITIVE_INFINITY }, this.Vf = 0, this.Bf = null, this.Ef = { _t: Number.NEGATIVE_INFINITY, ut: Number.POSITIVE_INFINITY }, this.Af = null, this.Lf = false, this.zf = null, this.Of = null, this.Nf = false, this.Ff = false, this.Wf = false, this.Hf = null, this.Uf = null, this.$f = null, this.jf = null, this.qf = null, this.Yf = null, this.Kf = null, this.Gf = 0, this.Zf = false, this.Xf = false, this.Jf = false, this.Qf = 0, this.tp = null, this.ip = !pn(), this.np = (t2) => {
      this.sp(t2);
    }, this.ep = (t2) => {
      if (this.rp(t2)) {
        const i2 = this.hp(t2);
        if (++this.Vf, this.Bf && this.Vf > 1) {
          const { ap: n2 } = this.lp(Sn(t2), this.Ef);
          n2 < 30 && !this.Wf && this.op(i2, this.up._p), this.cp();
        }
      } else {
        const i2 = this.hp(t2);
        if (++this.Rf, this.Df && this.Rf > 1) {
          const { ap: n2 } = this.lp(Sn(t2), this.If);
          n2 < 5 && !this.Ff && this.dp(i2, this.up.fp), this.pp();
        }
      }
    }, this.vp = t, this.up = i, this.yn = n, this.mp();
  }
  m() {
    null !== this.Hf && (this.Hf(), this.Hf = null), null !== this.Uf && (this.Uf(), this.Uf = null), null !== this.jf && (this.jf(), this.jf = null), null !== this.qf && (this.qf(), this.qf = null), null !== this.Yf && (this.Yf(), this.Yf = null), null !== this.$f && (this.$f(), this.$f = null), this.wp(), this.pp();
  }
  Mp(t) {
    this.jf && this.jf();
    const i = this.gp.bind(this);
    if (this.jf = () => {
      this.vp.removeEventListener("mousemove", i);
    }, this.vp.addEventListener("mousemove", i), this.rp(t)) return;
    const n = this.hp(t);
    this.dp(n, this.up.bp), this.ip = true;
  }
  pp() {
    null !== this.Df && clearTimeout(this.Df), this.Rf = 0, this.Df = null, this.If = { _t: Number.NEGATIVE_INFINITY, ut: Number.POSITIVE_INFINITY };
  }
  cp() {
    null !== this.Bf && clearTimeout(this.Bf), this.Vf = 0, this.Bf = null, this.Ef = { _t: Number.NEGATIVE_INFINITY, ut: Number.POSITIVE_INFINITY };
  }
  gp(t) {
    if (this.Jf || null !== this.Of) return;
    if (this.rp(t)) return;
    const i = this.hp(t);
    this.dp(i, this.up.Sp), this.ip = true;
  }
  xp(t) {
    const i = Cn(t.changedTouches, u(this.tp));
    if (null === i) return;
    if (this.Qf = xn(t), null !== this.Kf) return;
    if (this.Xf) return;
    this.Zf = true;
    const n = this.lp(Sn(i), u(this.Of)), { Cp: s, yp: e2, ap: r2 } = n;
    if (this.Nf || !(r2 < 5)) {
      if (!this.Nf) {
        const t2 = 0.5 * s, i2 = e2 >= t2 && !this.yn.Pp(), n2 = t2 > e2 && !this.yn.kp();
        i2 || n2 || (this.Xf = true), this.Nf = true, this.Wf = true, this.wp(), this.cp();
      }
      if (!this.Xf) {
        const n2 = this.hp(t, i);
        this.op(n2, this.up.Tp), bn(t);
      }
    }
  }
  Rp(t) {
    if (0 !== t.button) return;
    const i = this.lp(Sn(t), u(this.zf)), { ap: n } = i;
    if (n >= 5 && (this.Ff = true, this.pp()), this.Ff) {
      const i2 = this.hp(t);
      this.dp(i2, this.up.Dp);
    }
  }
  lp(t, i) {
    const n = Math.abs(i._t - t._t), s = Math.abs(i.ut - t.ut);
    return { Cp: n, yp: s, ap: n + s };
  }
  Ip(t) {
    let i = Cn(t.changedTouches, u(this.tp));
    if (null === i && 0 === t.touches.length && (i = t.changedTouches[0]), null === i) return;
    this.tp = null, this.Qf = xn(t), this.wp(), this.Of = null, this.Yf && (this.Yf(), this.Yf = null);
    const n = this.hp(t, i);
    if (this.op(n, this.up.Vp), ++this.Vf, this.Bf && this.Vf > 1) {
      const { ap: t2 } = this.lp(Sn(i), this.Ef);
      t2 < 30 && !this.Wf && this.op(n, this.up._p), this.cp();
    } else this.Wf || (this.op(n, this.up.Bp), this.up.Bp && bn(t));
    0 === this.Vf && bn(t), 0 === t.touches.length && this.Lf && (this.Lf = false, bn(t));
  }
  sp(t) {
    if (0 !== t.button) return;
    const i = this.hp(t);
    if (this.zf = null, this.Jf = false, this.qf && (this.qf(), this.qf = null), fn()) {
      this.vp.ownerDocument.documentElement.removeEventListener("mouseleave", this.np);
    }
    if (!this.rp(t)) if (this.dp(i, this.up.Ep), ++this.Rf, this.Df && this.Rf > 1) {
      const { ap: n } = this.lp(Sn(t), this.If);
      n < 5 && !this.Ff && this.dp(i, this.up.fp), this.pp();
    } else this.Ff || this.dp(i, this.up.Ap);
  }
  wp() {
    null !== this.Af && (clearTimeout(this.Af), this.Af = null);
  }
  Lp(t) {
    if (null !== this.tp) return;
    const i = t.changedTouches[0];
    this.tp = i.identifier, this.Qf = xn(t);
    const n = this.vp.ownerDocument.documentElement;
    this.Wf = false, this.Nf = false, this.Xf = false, this.Of = Sn(i), this.Yf && (this.Yf(), this.Yf = null);
    {
      const i2 = this.xp.bind(this), s2 = this.Ip.bind(this);
      this.Yf = () => {
        n.removeEventListener("touchmove", i2), n.removeEventListener("touchend", s2);
      }, n.addEventListener("touchmove", i2, { passive: false }), n.addEventListener("touchend", s2, { passive: false }), this.wp(), this.Af = setTimeout(this.zp.bind(this, t), 240);
    }
    const s = this.hp(t, i);
    this.op(s, this.up.Op), this.Bf || (this.Vf = 0, this.Bf = setTimeout(this.cp.bind(this), 500), this.Ef = Sn(i));
  }
  Np(t) {
    if (0 !== t.button) return;
    const i = this.vp.ownerDocument.documentElement;
    fn() && i.addEventListener("mouseleave", this.np), this.Ff = false, this.zf = Sn(t), this.qf && (this.qf(), this.qf = null);
    {
      const t2 = this.Rp.bind(this), n2 = this.sp.bind(this);
      this.qf = () => {
        i.removeEventListener("mousemove", t2), i.removeEventListener("mouseup", n2);
      }, i.addEventListener("mousemove", t2), i.addEventListener("mouseup", n2);
    }
    if (this.Jf = true, this.rp(t)) return;
    const n = this.hp(t);
    this.dp(n, this.up.Fp), this.Df || (this.Rf = 0, this.Df = setTimeout(this.pp.bind(this), 500), this.If = Sn(t));
  }
  mp() {
    this.vp.addEventListener("mouseenter", this.Mp.bind(this)), this.vp.addEventListener("touchcancel", this.wp.bind(this));
    {
      const t = this.vp.ownerDocument, i = (t2) => {
        this.up.Wp && (t2.composed && this.vp.contains(t2.composedPath()[0]) || t2.target && this.vp.contains(t2.target) || this.up.Wp());
      };
      this.Uf = () => {
        t.removeEventListener("touchstart", i);
      }, this.Hf = () => {
        t.removeEventListener("mousedown", i);
      }, t.addEventListener("mousedown", i), t.addEventListener("touchstart", i, { passive: true });
    }
    pn() && (this.$f = () => {
      this.vp.removeEventListener("dblclick", this.ep);
    }, this.vp.addEventListener("dblclick", this.ep)), this.vp.addEventListener("mouseleave", this.Hp.bind(this)), this.vp.addEventListener("touchstart", this.Lp.bind(this), { passive: true }), wn(this.vp), this.vp.addEventListener("mousedown", this.Np.bind(this)), this.Up(), this.vp.addEventListener("touchmove", (() => {
    }), { passive: false });
  }
  Up() {
    void 0 === this.up.$p && void 0 === this.up.jp && void 0 === this.up.qp || (this.vp.addEventListener("touchstart", ((t) => this.Yp(t.touches)), { passive: true }), this.vp.addEventListener("touchmove", ((t) => {
      if (2 === t.touches.length && null !== this.Kf && void 0 !== this.up.jp) {
        const i = gn(t.touches[0], t.touches[1]) / this.Gf;
        this.up.jp(this.Kf, i), bn(t);
      }
    }), { passive: false }), this.vp.addEventListener("touchend", ((t) => {
      this.Yp(t.touches);
    })));
  }
  Yp(t) {
    1 === t.length && (this.Zf = false), 2 !== t.length || this.Zf || this.Lf ? this.Kp() : this.Gp(t);
  }
  Gp(t) {
    const i = this.vp.getBoundingClientRect() || { left: 0, top: 0 };
    this.Kf = { _t: (t[0].clientX - i.left + (t[1].clientX - i.left)) / 2, ut: (t[0].clientY - i.top + (t[1].clientY - i.top)) / 2 }, this.Gf = gn(t[0], t[1]), void 0 !== this.up.$p && this.up.$p(), this.wp();
  }
  Kp() {
    null !== this.Kf && (this.Kf = null, void 0 !== this.up.qp && this.up.qp());
  }
  Hp(t) {
    if (this.jf && this.jf(), this.rp(t)) return;
    if (!this.ip) return;
    const i = this.hp(t);
    this.dp(i, this.up.Zp), this.ip = !pn();
  }
  zp(t) {
    const i = Cn(t.touches, u(this.tp));
    if (null === i) return;
    const n = this.hp(t, i);
    this.op(n, this.up.Xp), this.Wf = true, this.Lf = true;
  }
  rp(t) {
    return t.sourceCapabilities && void 0 !== t.sourceCapabilities.firesTouchEvents ? t.sourceCapabilities.firesTouchEvents : xn(t) < this.Qf + 500;
  }
  op(t, i) {
    i && i.call(this.up, t);
  }
  dp(t, i) {
    i && i.call(this.up, t);
  }
  hp(t, i) {
    const n = i || t, s = this.vp.getBoundingClientRect() || { left: 0, top: 0 };
    return { clientX: n.clientX, clientY: n.clientY, pageX: n.pageX, pageY: n.pageY, screenX: n.screenX, screenY: n.screenY, localX: n.clientX - s.left, localY: n.clientY - s.top, ctrlKey: t.ctrlKey, altKey: t.altKey, shiftKey: t.shiftKey, metaKey: t.metaKey, Jp: !t.type.startsWith("mouse") && "contextmenu" !== t.type && "click" !== t.type, Qp: t.type, tv: n.target, xu: t.view, iv: () => {
      "touchstart" !== t.type && bn(t);
    } };
  }
}
function gn(t, i) {
  const n = t.clientX - i.clientX, s = t.clientY - i.clientY;
  return Math.sqrt(n * n + s * s);
}
function bn(t) {
  t.cancelable && t.preventDefault();
}
function Sn(t) {
  return { _t: t.pageX, ut: t.pageY };
}
function xn(t) {
  return t.timeStamp || performance.now();
}
function Cn(t, i) {
  for (let n = 0; n < t.length; ++n) if (t[n].identifier === i) return t[n];
  return null;
}
class yn {
  constructor(t, i, n) {
    this.nv = null, this.sv = null, this.ev = true, this.rv = null, this.hv = t, this.av = t.lv()[i], this.ov = t.lv()[n], this._v = document.createElement("tr"), this._v.style.height = "1px", this.uv = document.createElement("td"), this.uv.style.position = "relative", this.uv.style.padding = "0", this.uv.style.margin = "0", this.uv.setAttribute("colspan", "3"), this.cv(), this._v.appendChild(this.uv), this.ev = this.hv.N().layout.panes.enableResize, this.ev ? this.dv() : (this.nv = null, this.sv = null);
  }
  m() {
    null !== this.sv && this.sv.m();
  }
  fv() {
    return this._v;
  }
  pv() {
    return size({ width: this.av.pv().width, height: 1 });
  }
  vv() {
    return size({ width: this.av.vv().width, height: 1 * window.devicePixelRatio });
  }
  mv(t, i, n) {
    const s = this.vv();
    t.fillStyle = this.hv.N().layout.panes.separatorColor, t.fillRect(i, n, s.width, s.height);
  }
  Pt() {
    this.cv(), this.hv.N().layout.panes.enableResize !== this.ev && (this.ev = this.hv.N().layout.panes.enableResize, this.ev ? this.dv() : (null !== this.nv && (this.uv.removeChild(this.nv.wv), this.uv.removeChild(this.nv.Mv), this.nv = null), null !== this.sv && (this.sv.m(), this.sv = null)));
  }
  dv() {
    const t = document.createElement("div"), i = t.style;
    i.position = "fixed", i.display = "none", i.zIndex = "49", i.top = "0", i.left = "0", i.width = "100%", i.height = "100%", i.cursor = "row-resize", this.uv.appendChild(t);
    const n = document.createElement("div"), s = n.style;
    s.position = "absolute", s.zIndex = "50", s.top = "-4px", s.height = "9px", s.width = "100%", s.backgroundColor = "", s.cursor = "row-resize", this.uv.appendChild(n);
    const e2 = { bp: this.gv.bind(this), Zp: this.bv.bind(this), Fp: this.Sv.bind(this), Op: this.Sv.bind(this), Dp: this.xv.bind(this), Tp: this.xv.bind(this), Ep: this.Cv.bind(this), Vp: this.Cv.bind(this) };
    this.sv = new Mn(n, e2, { Pp: () => false, kp: () => true }), this.nv = { Mv: n, wv: t };
  }
  cv() {
    this.uv.style.background = this.hv.N().layout.panes.separatorColor;
  }
  gv(t) {
    null !== this.nv && (this.nv.Mv.style.backgroundColor = this.hv.N().layout.panes.separatorHoverColor);
  }
  bv(t) {
    null !== this.nv && null === this.rv && (this.nv.Mv.style.backgroundColor = "");
  }
  Sv(t) {
    if (null === this.nv) return;
    const i = this.av.yv().F_() + this.ov.yv().F_(), n = i / (this.av.pv().height + this.ov.pv().height), s = 30 * n;
    i <= 2 * s || (this.rv = { Pv: t.pageY, kv: this.av.yv().F_(), Tv: i - s, Rv: i, Dv: n, Iv: s }, this.nv.wv.style.display = "block");
  }
  xv(t) {
    const i = this.rv;
    if (null === i) return;
    const n = (t.pageY - i.Pv) * i.Dv, s = ni(i.kv + n, i.Iv, i.Tv);
    this.av.yv().W_(s), this.ov.yv().W_(i.Rv - s), this.hv.Qt().ka();
  }
  Cv(t) {
    null !== this.rv && null !== this.nv && (this.rv = null, this.nv.wv.style.display = "none");
  }
}
function Pn(t, i) {
  return t.Vv - i.Vv;
}
function kn(t, i, n) {
  const s = (t.Vv - i.Vv) / (t.wt - i.wt);
  return Math.sign(s) * Math.min(Math.abs(s), n);
}
class Tn {
  constructor(t, i, n, s) {
    this.Bv = null, this.Ev = null, this.Av = null, this.Lv = null, this.zv = null, this.Ov = 0, this.Nv = 0, this.Fv = t, this.Wv = i, this.Hv = n, this.Ps = s;
  }
  Uv(t, i) {
    if (null !== this.Bv) {
      if (this.Bv.wt === i) return void (this.Bv.Vv = t);
      if (Math.abs(this.Bv.Vv - t) < this.Ps) return;
    }
    this.Lv = this.Av, this.Av = this.Ev, this.Ev = this.Bv, this.Bv = { wt: i, Vv: t };
  }
  me(t, i) {
    if (null === this.Bv || null === this.Ev) return;
    if (i - this.Bv.wt > 50) return;
    let n = 0;
    const s = kn(this.Bv, this.Ev, this.Wv), e2 = Pn(this.Bv, this.Ev), r2 = [s], h2 = [e2];
    if (n += e2, null !== this.Av) {
      const t2 = kn(this.Ev, this.Av, this.Wv);
      if (Math.sign(t2) === Math.sign(s)) {
        const i2 = Pn(this.Ev, this.Av);
        if (r2.push(t2), h2.push(i2), n += i2, null !== this.Lv) {
          const t3 = kn(this.Av, this.Lv, this.Wv);
          if (Math.sign(t3) === Math.sign(s)) {
            const i3 = Pn(this.Av, this.Lv);
            r2.push(t3), h2.push(i3), n += i3;
          }
        }
      }
    }
    let a2 = 0;
    for (let t2 = 0; t2 < r2.length; ++t2) a2 += h2[t2] / n * r2[t2];
    Math.abs(a2) < this.Fv || (this.zv = { Vv: t, wt: i }, this.Nv = a2, this.Ov = (function(t2, i2) {
      const n2 = Math.log(i2);
      return Math.log(1 * n2 / -t2) / n2;
    })(Math.abs(a2), this.Hv));
  }
  Gc(t) {
    const i = u(this.zv), n = t - i.wt;
    return i.Vv + this.Nv * (Math.pow(this.Hv, n) - 1) / Math.log(this.Hv);
  }
  Kc(t) {
    return null === this.zv || this.$v(t) === this.Ov;
  }
  $v(t) {
    const i = t - u(this.zv).wt;
    return Math.min(i, this.Ov);
  }
}
class Rn {
  constructor(t, i) {
    this.jv = void 0, this.qv = void 0, this.Yv = void 0, this.vn = false, this.Kv = t, this.Gv = i, this.Zv();
  }
  Pt() {
    this.Zv();
  }
  Xv() {
    this.jv && this.Kv.removeChild(this.jv), this.qv && this.Kv.removeChild(this.qv), this.jv = void 0, this.qv = void 0;
  }
  Jv() {
    return this.vn !== this.Qv() || this.Yv !== this.tm();
  }
  tm() {
    return this.Gv.Qt().Xi().J(this.Gv.N().layout.textColor) > 160 ? "dark" : "light";
  }
  Qv() {
    return this.Gv.N().layout.attributionLogo;
  }
  im() {
    const t = new URL(location.href);
    return t.hostname ? "&utm_source=" + t.hostname + t.pathname : "";
  }
  Zv() {
    this.Jv() && (this.Xv(), this.vn = this.Qv(), this.vn && (this.Yv = this.tm(), this.qv = document.createElement("style"), this.qv.innerText = "a#tv-attr-logo{--fill:#131722;--stroke:#fff;position:absolute;left:10px;bottom:10px;height:19px;width:35px;margin:0;padding:0;border:0;z-index:3;}a#tv-attr-logo[data-dark]{--fill:#D1D4DC;--stroke:#131722;}", this.jv = document.createElement("a"), this.jv.href = `https://www.tradingview.com/?utm_medium=lwc-link&utm_campaign=lwc-chart${this.im()}`, this.jv.title = "Charting by TradingView", this.jv.id = "tv-attr-logo", this.jv.target = "_blank", this.jv.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="35" height="19" fill="none"><g fill-rule="evenodd" clip-path="url(#a)" clip-rule="evenodd"><path fill="var(--stroke)" d="M2 0H0v10h6v9h21.4l.5-1.3 6-15 1-2.7H23.7l-.5 1.3-.2.6a5 5 0 0 0-7-.9V0H2Zm20 17h4l5.2-13 .8-2h-7l-1 2.5-.2.5-1.5 3.8-.3.7V17Zm-.8-10a3 3 0 0 0 .7-2.7A3 3 0 1 0 16.8 7h4.4ZM14 7V2H2v6h6v9h4V7h2Z"/><path fill="var(--fill)" d="M14 2H2v6h6v9h6V2Zm12 15h-7l6-15h7l-6 15Zm-7-9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/></g><defs><clipPath id="a"><path fill="var(--stroke)" d="M0 0h35v19H0z"/></clipPath></defs></svg>', this.jv.toggleAttribute("data-dark", "dark" === this.Yv), this.Kv.appendChild(this.qv), this.Kv.appendChild(this.jv)));
  }
}
function Dn(t, n) {
  const s = u(t.ownerDocument).createElement("canvas");
  t.appendChild(s);
  const e2 = bindTo(s, { options: { allowResizeObserver: true }, transform: (t2, i) => ({ width: Math.max(t2.width, i.width), height: Math.max(t2.height, i.height) }) });
  return e2.resizeCanvasElement(n), e2;
}
function In(t) {
  t.width = 1, t.height = 1, t.getContext("2d")?.clearRect(0, 0, 1, 1);
}
function Vn(t, i, n, s) {
  t.qh && t.qh(i, n, s);
}
function Bn(t, i, n, s) {
  t.st(i, n, s);
}
function En(t, i, n, s) {
  An(t(n, s), i, s);
}
function An(t, i, n) {
  for (const s of t) {
    const t2 = s.Tt(n);
    null !== t2 && i(t2);
  }
}
function Ln(t, i) {
  return (n) => {
    if (!(function(t2) {
      return void 0 !== t2.Ft;
    })(n)) return [];
    return (n.Ft()?.pl() ?? "") !== i ? [] : n.Qa?.(t) ?? [];
  };
}
function zn(t, i, n, s) {
  if (!t.length) return;
  let e2 = 0;
  const r2 = t[0].$t(s, true);
  let h2 = 1 === i ? n / 2 - (t[0].Hi() - r2 / 2) : t[0].Hi() - r2 / 2 - n / 2;
  h2 = Math.max(0, h2);
  for (let r3 = 1; r3 < t.length; r3++) {
    const a2 = t[r3], l2 = t[r3 - 1], o2 = l2.$t(s, false), _2 = a2.Hi(), u2 = l2.Hi();
    if (1 === i ? _2 > u2 - o2 : _2 < u2 + o2) {
      const s2 = u2 - o2 * i;
      a2.Ui(s2);
      const r4 = s2 - i * o2 / 2;
      if ((1 === i ? r4 < 0 : r4 > n) && h2 > 0) {
        const s3 = 1 === i ? -1 - r4 : r4 - n, a3 = Math.min(s3, h2);
        for (let n2 = e2; n2 < t.length; n2++) t[n2].Ui(t[n2].Hi() + i * a3);
        h2 -= a3;
      }
    } else e2 = r3, h2 = 1 === i ? u2 - o2 - _2 : _2 - (u2 + o2);
  }
}
class On {
  constructor(i, n, s, e2) {
    this.Ki = null, this.nm = null, this.sm = false, this.rm = new rt(200), this.hm = null, this.am = 0, this.lm = false, this.om = () => {
      this.lm || this.yt._m().Qt().mr();
    }, this.um = () => {
      this.lm || this.yt._m().Qt().mr();
    }, this.yt = i, this.yn = n, this.Ro = n.layout, this.bd = s, this.dm = "left" === e2, this.fm = Ln("normal", e2), this.pm = Ln("top", e2), this.vm = Ln("bottom", e2), this.uv = document.createElement("div"), this.uv.style.height = "100%", this.uv.style.overflow = "hidden", this.uv.style.width = "25px", this.uv.style.left = "0", this.uv.style.position = "relative", this.wm = Dn(this.uv, size({ width: 16, height: 16 })), this.wm.subscribeSuggestedBitmapSizeChanged(this.om);
    const r2 = this.wm.canvasElement;
    r2.style.position = "absolute", r2.style.zIndex = "1", r2.style.left = "0", r2.style.top = "0", this.Mm = Dn(this.uv, size({ width: 16, height: 16 })), this.Mm.subscribeSuggestedBitmapSizeChanged(this.um);
    const h2 = this.Mm.canvasElement;
    h2.style.position = "absolute", h2.style.zIndex = "2", h2.style.left = "0", h2.style.top = "0";
    const a2 = { Fp: this.Sv.bind(this), Op: this.Sv.bind(this), Dp: this.xv.bind(this), Tp: this.xv.bind(this), Wp: this.gm.bind(this), Ep: this.Cv.bind(this), Vp: this.Cv.bind(this), fp: this.bm.bind(this), _p: this.bm.bind(this), bp: this.Sm.bind(this), Zp: this.bv.bind(this) };
    this.sv = new Mn(this.Mm.canvasElement, a2, { Pp: () => !this.yn.handleScroll.vertTouchDrag, kp: () => true });
  }
  m() {
    this.sv.m(), this.Mm.unsubscribeSuggestedBitmapSizeChanged(this.um), In(this.Mm.canvasElement), this.Mm.dispose(), this.wm.unsubscribeSuggestedBitmapSizeChanged(this.om), In(this.wm.canvasElement), this.wm.dispose(), null !== this.Ki && this.Ki.__().u(this), this.Ki = null;
  }
  fv() {
    return this.uv;
  }
  P() {
    return this.Ro.fontSize;
  }
  xm() {
    const t = this.bd.N();
    return this.hm !== t.k && (this.rm.Os(), this.hm = t.k), t;
  }
  Cm() {
    if (null === this.Ki) return 0;
    let t = 0;
    const i = this.xm(), n = u(this.wm.canvasElement.getContext("2d", { colorSpace: this.yt._m().N().layout.colorSpace }));
    n.save();
    const s = this.Ki.zl();
    n.font = this.ym(), s.length > 0 && (t = Math.max(this.rm.Ii(n, s[0].eo), this.rm.Ii(n, s[s.length - 1].eo)));
    const e2 = this.Pm();
    for (let i2 = e2.length; i2--; ) {
      const s2 = this.rm.Ii(n, e2[i2].ri());
      s2 > t && (t = s2);
    }
    const r2 = this.Ki.Lt();
    if (null !== r2 && null !== this.nm && (2 !== (h2 = this.yn.crosshair).mode && h2.horzLine.visible && h2.horzLine.labelVisible)) {
      const i2 = this.Ki.Tn(1, r2), s2 = this.Ki.Tn(this.nm.height - 2, r2);
      t = Math.max(t, this.rm.Ii(n, this.Ki.Ji(Math.floor(Math.min(i2, s2)) + 0.11111111111111, r2)), this.rm.Ii(n, this.Ki.Ji(Math.ceil(Math.max(i2, s2)) - 0.11111111111111, r2)));
    }
    var h2;
    n.restore();
    const a2 = t || 34;
    return mn(Math.ceil(i.S + i.C + i.V + i.B + 5 + a2));
  }
  km(t) {
    null !== this.nm && equalSizes(this.nm, t) || (this.nm = t, this.lm = true, this.wm.resizeCanvasElement(t), this.Mm.resizeCanvasElement(t), this.lm = false, this.uv.style.width = `${t.width}px`, this.uv.style.height = `${t.height}px`);
  }
  Tm() {
    return u(this.nm).width;
  }
  un(t) {
    this.Ki !== t && (null !== this.Ki && this.Ki.__().u(this), this.Ki = t, t.__().i(this.wo.bind(this), this));
  }
  Ft() {
    return this.Ki;
  }
  Os() {
    const t = this.yt.yv();
    this.yt._m().Qt().au(t, u(this.Ft()));
  }
  Rm(t) {
    if (null === this.nm) return;
    const i = { colorSpace: this.yt._m().N().layout.colorSpace };
    if (1 !== t) {
      this.Dm(), this.wm.applySuggestedBitmapSize();
      const t2 = tryCreateCanvasRenderingTarget2D(this.wm, i);
      null !== t2 && (t2.useBitmapCoordinateSpace(((t3) => {
        this.Im(t3), this.Vm(t3);
      })), this.yt.Bm(t2, this.vm), this.Em(t2), this.yt.Bm(t2, this.fm), this.Am(t2));
    }
    this.Mm.applySuggestedBitmapSize();
    const n = tryCreateCanvasRenderingTarget2D(this.Mm, i);
    null !== n && (n.useBitmapCoordinateSpace((({ context: t2, bitmapSize: i2 }) => {
      t2.clearRect(0, 0, i2.width, i2.height);
    })), this.Lm(n), this.yt.Bm(n, this.pm));
  }
  vv() {
    return this.wm.bitmapSize;
  }
  mv(t, i, n, s) {
    const e2 = this.vv();
    if (e2.width > 0 && e2.height > 0 && (t.drawImage(this.wm.canvasElement, i, n), s)) {
      const s2 = this.Mm.canvasElement;
      t.drawImage(s2, i, n);
    }
  }
  Pt() {
    this.Ki?.zl();
  }
  Sv(t) {
    if (null === this.Ki || this.Ki.Zi() || !this.yn.handleScale.axisPressedMouseMove.price) return;
    const i = this.yt._m().Qt(), n = this.yt.yv();
    this.sm = true, i.Q_(n, this.Ki, t.localY);
  }
  xv(t) {
    if (null === this.Ki || !this.yn.handleScale.axisPressedMouseMove.price) return;
    const i = this.yt._m().Qt(), n = this.yt.yv(), s = this.Ki;
    i.tu(n, s, t.localY);
  }
  gm() {
    if (null === this.Ki || !this.yn.handleScale.axisPressedMouseMove.price) return;
    const t = this.yt._m().Qt(), i = this.yt.yv(), n = this.Ki;
    this.sm && (this.sm = false, t.iu(i, n));
  }
  Cv(t) {
    if (null === this.Ki || !this.yn.handleScale.axisPressedMouseMove.price) return;
    const i = this.yt._m().Qt(), n = this.yt.yv();
    this.sm = false, i.iu(n, this.Ki);
  }
  bm(t) {
    this.yn.handleScale.axisDoubleClickReset.price && this.Os();
  }
  Sm(t) {
    if (null === this.Ki) return;
    !this.yt._m().Qt().N().handleScale.axisPressedMouseMove.price || this.Ki.je() || this.Ki.No() || this.zm(1);
  }
  bv(t) {
    this.zm(0);
  }
  Pm() {
    const t = [], i = null === this.Ki ? void 0 : this.Ki;
    return ((n) => {
      for (let s = 0; s < n.length; ++s) {
        const e2 = n[s].qn(this.yt.yv(), i);
        for (let i2 = 0; i2 < e2.length; i2++) t.push(e2[i2]);
      }
    })(this.yt.yv().Dt()), t;
  }
  Im({ context: t, bitmapSize: i }) {
    const { width: n, height: s } = i, e2 = this.yt.yv().Qt(), r2 = e2.$(), h2 = e2.af();
    r2 === h2 ? z(t, 0, 0, n, s, r2) : F(t, 0, 0, n, s, r2, h2);
  }
  Vm({ context: t, bitmapSize: i, horizontalPixelRatio: n }) {
    if (null === this.nm || null === this.Ki || !this.Ki.N().borderVisible) return;
    t.fillStyle = this.Ki.N().borderColor;
    const s = Math.max(1, Math.floor(this.xm().S * n));
    let e2;
    e2 = this.dm ? i.width - s : 0, t.fillRect(e2, 0, s, i.height);
  }
  Em(t) {
    if (null === this.nm || null === this.Ki) return;
    const i = this.Ki.zl(), n = this.Ki.N(), s = this.xm(), e2 = this.dm ? this.nm.width - s.C : 0;
    n.borderVisible && n.ticksVisible && t.useBitmapCoordinateSpace((({ context: t2, horizontalPixelRatio: r2, verticalPixelRatio: h2 }) => {
      t2.fillStyle = n.borderColor;
      const a2 = Math.max(1, Math.floor(h2)), l2 = Math.floor(0.5 * h2), o2 = Math.round(s.C * r2);
      t2.beginPath();
      for (const n2 of i) t2.rect(Math.floor(e2 * r2), Math.round(n2.Vl * h2) - l2, o2, a2);
      t2.fill();
    })), t.useMediaCoordinateSpace((({ context: t2 }) => {
      t2.font = this.ym(), t2.fillStyle = n.textColor ?? this.Ro.textColor, t2.textAlign = this.dm ? "right" : "left", t2.textBaseline = "middle";
      const r2 = this.dm ? Math.round(e2 - s.V) : Math.round(e2 + s.C + s.V), h2 = i.map(((i2) => this.rm.Di(t2, i2.eo)));
      for (let n2 = i.length; n2--; ) {
        const s2 = i[n2];
        t2.fillText(s2.eo, r2, s2.Vl + h2[n2]);
      }
    }));
  }
  Dm() {
    if (null === this.nm || null === this.Ki) return;
    let t = this.nm.height / 2;
    const i = [], n = this.Ki.Dt().slice(), s = this.yt.yv(), e2 = this.xm();
    this.Ki === s.Zs() && this.yt.yv().Dt().forEach(((t2) => {
      s.Gs(t2) && n.push(t2);
    }));
    const r2 = this.Ki.kl()[0], h2 = this.Ki;
    n.forEach(((n2) => {
      const e3 = n2.qn(s, h2);
      e3.forEach(((t2) => {
        t2.$i() && null === t2.Wi() && (t2.Ui(null), i.push(t2));
      })), r2 === n2 && e3.length > 0 && (t = e3[0].Ei());
    }));
    this.Ki.N().alignLabels && this.Om(i, e2, t);
  }
  Om(t, i, n) {
    if (null === this.nm) return;
    const s = t.filter(((t2) => t2.Ei() <= n)), e2 = t.filter(((t2) => t2.Ei() > n));
    s.sort(((t2, i2) => i2.Ei() - t2.Ei())), s.length && e2.length && e2.push(s[0]), e2.sort(((t2, i2) => t2.Ei() - i2.Ei()));
    for (const n2 of t) {
      const t2 = Math.floor(n2.$t(i) / 2), s2 = n2.Ei();
      s2 > -t2 && s2 < t2 && n2.Ui(t2), s2 > this.nm.height - t2 && s2 < this.nm.height + t2 && n2.Ui(this.nm.height - t2);
    }
    zn(s, 1, this.nm.height, i), zn(e2, -1, this.nm.height, i);
  }
  Am(t) {
    if (null === this.nm) return;
    const i = this.Pm(), n = this.xm(), s = this.dm ? "right" : "left";
    i.forEach(((i2) => {
      if (i2.ji()) {
        i2.Tt(u(this.Ki)).st(t, n, this.rm, s);
      }
    }));
  }
  Lm(t) {
    if (null === this.nm || null === this.Ki) return;
    const i = this.yt._m().Qt(), n = [], s = this.yt.yv(), e2 = i.Vd().qn(s, this.Ki);
    e2.length && n.push(e2);
    const r2 = this.xm(), h2 = this.dm ? "right" : "left";
    n.forEach(((i2) => {
      i2.forEach(((i3) => {
        i3.Tt(u(this.Ki)).st(t, r2, this.rm, h2);
      }));
    }));
  }
  zm(t) {
    this.uv.style.cursor = 1 === t ? "ns-resize" : "default";
  }
  wo() {
    const t = this.Cm();
    this.am < t && this.yt._m().Qt().ka(), this.am = t;
  }
  ym() {
    return x(this.Ro.fontSize, this.Ro.fontFamily);
  }
}
function Nn(t, i) {
  return t.Xa?.(i) ?? [];
}
function Fn(t, i) {
  return t.jn?.(i) ?? [];
}
function Wn(t, i) {
  return t.cn?.(i) ?? [];
}
function Hn(t, i) {
  return t.qa?.(i) ?? [];
}
class Un {
  constructor(i, n) {
    this.nm = size({ width: 0, height: 0 }), this.Nm = null, this.Fm = null, this.Wm = null, this.Hm = null, this.Um = false, this.$m = new d(), this.jm = new d(), this.qm = 0, this.Ym = false, this.Km = null, this.Gm = false, this.Zm = null, this.Xm = null, this.lm = false, this.om = () => {
      this.lm || null === this.Jm || this.sn().mr();
    }, this.um = () => {
      this.lm || null === this.Jm || this.sn().mr();
    }, this.Gv = i, this.Jm = n, this.Jm.mu().i(this.Qm.bind(this), this, true), this.tw = document.createElement("td"), this.tw.style.padding = "0", this.tw.style.position = "relative";
    const s = document.createElement("div");
    s.style.width = "100%", s.style.height = "100%", s.style.position = "relative", s.style.overflow = "hidden", this.iw = document.createElement("td"), this.iw.style.padding = "0", this.nw = document.createElement("td"), this.nw.style.padding = "0", this.tw.appendChild(s), this.wm = Dn(s, size({ width: 16, height: 16 })), this.wm.subscribeSuggestedBitmapSizeChanged(this.om);
    const e2 = this.wm.canvasElement;
    e2.style.position = "absolute", e2.style.zIndex = "1", e2.style.left = "0", e2.style.top = "0", this.Mm = Dn(s, size({ width: 16, height: 16 })), this.Mm.subscribeSuggestedBitmapSizeChanged(this.um);
    const r2 = this.Mm.canvasElement;
    r2.style.position = "absolute", r2.style.zIndex = "2", r2.style.left = "0", r2.style.top = "0", this._v = document.createElement("tr"), this._v.appendChild(this.iw), this._v.appendChild(this.tw), this._v.appendChild(this.nw), this.sw(), this.sv = new Mn(this.Mm.canvasElement, this, { Pp: () => null === this.Km && !this.Gv.N().handleScroll.vertTouchDrag, kp: () => null === this.Km && !this.Gv.N().handleScroll.horzTouchDrag });
  }
  m() {
    null !== this.Nm && this.Nm.m(), null !== this.Fm && this.Fm.m(), this.Wm = null, this.Mm.unsubscribeSuggestedBitmapSizeChanged(this.um), In(this.Mm.canvasElement), this.Mm.dispose(), this.wm.unsubscribeSuggestedBitmapSizeChanged(this.om), In(this.wm.canvasElement), this.wm.dispose(), null !== this.Jm && (this.Jm.mu().u(this), this.Jm.m()), this.sv.m();
  }
  yv() {
    return u(this.Jm);
  }
  ew(t) {
    null !== this.Jm && this.Jm.mu().u(this), this.Jm = t, null !== this.Jm && this.Jm.mu().i(Un.prototype.Qm.bind(this), this, true), this.sw(), this.Gv.lv().indexOf(this) === this.Gv.lv().length - 1 ? (this.Wm = this.Wm ?? new Rn(this.tw, this.Gv), this.Wm.Pt()) : (this.Wm?.Xv(), this.Wm = null);
  }
  _m() {
    return this.Gv;
  }
  fv() {
    return this._v;
  }
  sw() {
    if (null !== this.Jm && (this.rw(), 0 !== this.sn().Jn().length)) {
      if (null !== this.Nm) {
        const t = this.Jm.X_();
        this.Nm.un(u(t));
      }
      if (null !== this.Fm) {
        const t = this.Jm.J_();
        this.Fm.un(u(t));
      }
    }
  }
  hw() {
    null !== this.Nm && this.Nm.Pt(), null !== this.Fm && this.Fm.Pt();
  }
  F_() {
    return null !== this.Jm ? this.Jm.F_() : 0;
  }
  W_(t) {
    this.Jm && this.Jm.W_(t);
  }
  bp(t) {
    if (!this.Jm) return;
    this.aw();
    const i = t.localX, n = t.localY;
    this.lw(i, n, t);
  }
  Fp(t) {
    this.aw(), this.ow(), this.lw(t.localX, t.localY, t);
  }
  Sp(t) {
    if (!this.Jm) return;
    this.aw();
    const i = t.localX, n = t.localY;
    this.lw(i, n, t);
  }
  Ap(t) {
    null !== this.Jm && (this.aw(), this.lw(t.localX, t.localY, t), this._w(t));
  }
  fp(t) {
    null !== this.Jm && this.uw(this.jm, t);
  }
  _p(t) {
    this.fp(t);
  }
  Dp(t) {
    this.aw(), this.cw(t), this.lw(t.localX, t.localY, t);
  }
  Ep(t) {
    null !== this.Jm && (this.aw(), this.Ym = false, this.dw(t));
  }
  Bp(t) {
    null !== this.Jm && this._w(t);
  }
  Xp(t) {
    if (this.Ym = true, null === this.Km) {
      const i = { x: t.localX, y: t.localY };
      this.fw(i, i, t);
    }
  }
  Zp(t) {
    null !== this.Jm && (this.aw(), this.Jm.Qt().Rd(null), this.pw());
  }
  mw() {
    return this.$m;
  }
  ww() {
    return this.jm;
  }
  $p() {
    this.qm = 1, this.sn().cs();
  }
  jp(t, i) {
    if (!this.Gv.N().handleScale.pinch) return;
    const n = 5 * (i - this.qm);
    this.qm = i, this.sn().Wd(t._t, n);
  }
  Op(t) {
    this.Ym = false, this.Gm = null !== this.Km, this.ow();
    const i = this.sn().Vd();
    null !== this.Km && i.It() && (this.Zm = { x: i.ni(), y: i.si() }, this.Km = { x: t.localX, y: t.localY });
  }
  Tp(t) {
    if (null === this.Jm) return;
    const i = t.localX, n = t.localY;
    if (null === this.Km) this.cw(t);
    else {
      this.Gm = false;
      const s = u(this.Zm), e2 = s.x + (i - this.Km.x), r2 = s.y + (n - this.Km.y);
      this.lw(e2, r2, t);
    }
  }
  Vp(t) {
    0 === this._m().N().trackingMode.exitMode && (this.Gm = true), this.Mw(), this.dw(t);
  }
  Qs(t, i) {
    const n = this.Jm;
    return null === n ? null : Bi(n, t, i);
  }
  gw(i, n) {
    u("left" === n ? this.Nm : this.Fm).km(size({ width: i, height: this.nm.height }));
  }
  pv() {
    return this.nm;
  }
  km(t) {
    equalSizes(this.nm, t) || (this.nm = t, this.lm = true, this.wm.resizeCanvasElement(t), this.Mm.resizeCanvasElement(t), this.lm = false, this.tw.style.width = t.width + "px", this.tw.style.height = t.height + "px");
  }
  bw() {
    const t = u(this.Jm);
    t.G_(t.X_()), t.G_(t.J_());
    for (const i of t.kl()) if (t.Gs(i)) {
      const n = i.Ft();
      null !== n && t.G_(n), i.Nn();
    }
    for (const i of t.Mu()) i.Nn();
  }
  vv() {
    return this.wm.bitmapSize;
  }
  mv(t, i, n, s) {
    const e2 = this.vv();
    if (e2.width > 0 && e2.height > 0 && (t.drawImage(this.wm.canvasElement, i, n), s)) {
      const s2 = this.Mm.canvasElement;
      null !== t && t.drawImage(s2, i, n);
    }
  }
  Rm(t) {
    if (0 === t) return;
    if (null === this.Jm) return;
    t > 1 && this.bw(), null !== this.Nm && this.Nm.Rm(t), null !== this.Fm && this.Fm.Rm(t);
    const i = { colorSpace: this.Gv.N().layout.colorSpace };
    if (1 !== t) {
      this.wm.applySuggestedBitmapSize();
      const t2 = tryCreateCanvasRenderingTarget2D(this.wm, i);
      null !== t2 && (t2.useBitmapCoordinateSpace(((t3) => {
        this.Im(t3);
      })), this.Jm && (this.Sw(t2, Nn), this.xw(t2), this.Sw(t2, Fn), this.Sw(t2, Wn)));
    }
    this.Mm.applySuggestedBitmapSize();
    const n = tryCreateCanvasRenderingTarget2D(this.Mm, i);
    null !== n && (n.useBitmapCoordinateSpace((({ context: t2, bitmapSize: i2 }) => {
      t2.clearRect(0, 0, i2.width, i2.height);
    })), this.Cw(n), this.Sw(n, Hn), this.Sw(n, Wn));
  }
  yw() {
    return this.Nm;
  }
  Pw() {
    return this.Fm;
  }
  Bm(t, i) {
    this.Sw(t, i);
  }
  Qm() {
    null !== this.Jm && this.Jm.mu().u(this), this.Jm = null;
  }
  _w(t) {
    this.uw(this.$m, t);
  }
  uw(t, i) {
    const n = i.localX, s = i.localY;
    t.v() && t.p(this.sn().Et().Vc(n), { x: n, y: s }, i);
  }
  Im({ context: t, bitmapSize: i }) {
    const { width: n, height: s } = i, e2 = this.sn(), r2 = e2.$(), h2 = e2.af();
    r2 === h2 ? z(t, 0, 0, n, s, h2) : F(t, 0, 0, n, s, r2, h2);
  }
  xw(t) {
    const i = u(this.Jm), n = i.wu().wr().Tt(i);
    null !== n && n.st(t, false);
  }
  Cw(t) {
    this.kw(t, Fn, Bn, this.sn().Vd());
  }
  Sw(t, i) {
    const n = u(this.Jm), s = i === Fn ? this.Tw() : null, e2 = null === s ? null : this.Rw(s, n), r2 = n.Mu();
    if (null === e2 || null === s) {
      const s2 = n._u();
      return this.Dw(t, i, Vn, r2, s2), void this.Dw(t, i, Bn, r2, s2);
    }
    const h2 = n.Dt(), a2 = (t2) => t2 === s ? e2.Za : void 0;
    this.Dw(t, i, Vn, r2, h2, a2), this.Dw(t, i, Bn, r2, h2, a2), this.kw(t, i, Vn, s, e2.qa), this.kw(t, i, Bn, s, e2.qa);
  }
  Dw(t, i, n, s, e2, r2) {
    for (const e3 of s) this.kw(t, i, n, e3);
    if (void 0 !== r2) for (const s2 of e2) this.kw(t, i, n, s2, r2(s2));
    else for (const s2 of e2) this.kw(t, i, n, s2);
  }
  Tw() {
    const t = u(this.Jm), i = t.Qt().cu()?.uu;
    if (!t.Qt().N().hoveredSeriesOnTop || void 0 === i) return null;
    for (const n of t.Dt()) if (n === i) return n;
    return null;
  }
  Rw(t, i) {
    const n = t.Ga?.(i) ?? null;
    return null === n || 0 === n.qa.length ? null : n;
  }
  kw(t, i, n, s, e2) {
    const r2 = u(this.Jm), h2 = r2.Qt().cu(), a2 = null !== h2 && h2.uu === s, l2 = null !== h2 && a2 && void 0 !== h2.bu ? h2.bu.ie : void 0, o2 = (i2) => n(i2, t, a2, l2);
    void 0 === e2 ? En(i, o2, s, r2) : An(e2, o2, r2);
  }
  rw() {
    if (null === this.Jm) return;
    const t = this.Gv, i = this.Jm.X_().N().visible, n = this.Jm.J_().N().visible;
    i || null === this.Nm || (this.iw.removeChild(this.Nm.fv()), this.Nm.m(), this.Nm = null), n || null === this.Fm || (this.nw.removeChild(this.Fm.fv()), this.Fm.m(), this.Fm = null);
    const s = t.Qt().Jd();
    i && null === this.Nm && (this.Nm = new On(this, t.N(), s, "left"), this.iw.appendChild(this.Nm.fv())), n && null === this.Fm && (this.Fm = new On(this, t.N(), s, "right"), this.nw.appendChild(this.Fm.fv()));
  }
  Iw(t) {
    return t.Jp && this.Ym || null !== this.Km;
  }
  lw(t, i, n) {
    t = Math.max(0, Math.min(t, this.nm.width - 1)), i = Math.max(0, Math.min(i, this.nm.height - 1)), this.sn().Kd(t, i, n, u(this.Jm));
  }
  pw() {
    this.sn().Zd();
  }
  Mw() {
    this.Gm && (this.Km = null, this.pw());
  }
  fw(t, i, n) {
    this.Km = t, this.Gm = false, this.lw(i.x, i.y, n);
    const s = this.sn().Vd();
    this.Zm = { x: s.ni(), y: s.si() };
  }
  sn() {
    return this.Gv.Qt();
  }
  dw(t) {
    if (!this.Um) return;
    const i = this.sn(), n = this.yv();
    if (i.eu(n, n.kn()), this.Hm = null, this.Um = false, i.jd(), null !== this.Xm) {
      const t2 = performance.now(), n2 = i.Et();
      this.Xm.me(n2.Oc(), t2), this.Xm.Kc(t2) || i.ps(this.Xm);
    }
  }
  aw() {
    this.Km = null;
  }
  ow() {
    if (!this.Jm) return;
    if (this.sn().cs(), document.activeElement !== document.body && document.activeElement !== document.documentElement) u(document.activeElement).blur();
    else {
      const t = document.getSelection();
      null !== t && t.removeAllRanges();
    }
    !this.Jm.kn().Zi() && this.sn().Et().Zi();
  }
  cw(t) {
    if (null === this.Jm) return;
    const i = this.sn(), n = i.Et();
    if (n.Zi()) return;
    const s = this.Gv.N(), e2 = s.handleScroll, r2 = s.kineticScroll;
    if ((!e2.pressedMouseMove || t.Jp) && (!e2.horzTouchDrag && !e2.vertTouchDrag || !t.Jp)) return;
    const h2 = this.Jm.kn(), a2 = performance.now();
    if (null !== this.Hm || this.Iw(t) || (this.Hm = { x: t.clientX, y: t.clientY, yf: a2, Vw: t.localX, Bw: t.localY }), null !== this.Hm && !this.Um && (this.Hm.x !== t.clientX || this.Hm.y !== t.clientY)) {
      if (t.Jp && r2.touch || !t.Jp && r2.mouse) {
        const t2 = n.ml();
        this.Xm = new Tn(0.2 / t2, 7 / t2, 0.997, 15 / t2), this.Xm.Uv(n.Oc(), this.Hm.yf);
      } else this.Xm = null;
      h2.Zi() || i.nu(this.Jm, h2, t.localY), i.Ud(t.localX), this.Um = true;
    }
    this.Um && (h2.Zi() || i.su(this.Jm, h2, t.localY), i.$d(t.localX), null !== this.Xm && this.Xm.Uv(n.Oc(), a2));
  }
}
class $n {
  constructor(i, n, s, e2, r2) {
    this.xt = true, this.nm = size({ width: 0, height: 0 }), this.om = () => this.Rm(3), this.dm = "left" === i, this.bd = s.Jd, this.yn = n, this.Ew = e2, this.Aw = r2, this.uv = document.createElement("div"), this.uv.style.width = "25px", this.uv.style.height = "100%", this.uv.style.overflow = "hidden", this.wm = Dn(this.uv, size({ width: 16, height: 16 })), this.wm.subscribeSuggestedBitmapSizeChanged(this.om);
  }
  m() {
    this.wm.unsubscribeSuggestedBitmapSizeChanged(this.om), In(this.wm.canvasElement), this.wm.dispose();
  }
  fv() {
    return this.uv;
  }
  pv() {
    return this.nm;
  }
  km(t) {
    equalSizes(this.nm, t) || (this.nm = t, this.wm.resizeCanvasElement(t), this.uv.style.width = `${t.width}px`, this.uv.style.height = `${t.height}px`, this.xt = true);
  }
  Rm(t) {
    if (t < 3 && !this.xt) return;
    if (0 === this.nm.width || 0 === this.nm.height) return;
    this.xt = false, this.wm.applySuggestedBitmapSize();
    const i = tryCreateCanvasRenderingTarget2D(this.wm, { colorSpace: this.yn.layout.colorSpace });
    null !== i && i.useBitmapCoordinateSpace(((t2) => {
      this.Im(t2), this.Vm(t2);
    }));
  }
  vv() {
    return this.wm.bitmapSize;
  }
  mv(t, i, n) {
    const s = this.vv();
    s.width > 0 && s.height > 0 && t.drawImage(this.wm.canvasElement, i, n);
  }
  Vm({ context: t, bitmapSize: i, horizontalPixelRatio: n, verticalPixelRatio: s }) {
    if (!this.Ew()) return;
    t.fillStyle = this.yn.timeScale.borderColor;
    const e2 = Math.floor(this.bd.N().S * n), r2 = Math.floor(this.bd.N().S * s), h2 = this.dm ? i.width - e2 : 0;
    t.fillRect(h2, 0, e2, r2);
  }
  Im({ context: t, bitmapSize: i }) {
    z(t, 0, 0, i.width, i.height, this.Aw());
  }
}
function jn(t) {
  return (i) => i.tl?.(t) ?? [];
}
const qn = jn("normal"), Yn = jn("top"), Kn = jn("bottom");
class Gn {
  constructor(i, n) {
    this.Lw = null, this.zw = null, this.M = null, this.Ow = false, this.nm = size({ width: 0, height: 0 }), this.Nw = new d(), this.rm = new rt(5), this.lm = false, this.om = () => {
      this.lm || this.Gv.Qt().mr();
    }, this.um = () => {
      this.lm || this.Gv.Qt().mr();
    }, this.Gv = i, this.Pu = n, this.yn = i.N().layout, this.jv = document.createElement("tr"), this.Fw = document.createElement("td"), this.Fw.style.padding = "0", this.Ww = document.createElement("td"), this.Ww.style.padding = "0", this.uv = document.createElement("td"), this.uv.style.height = "25px", this.uv.style.padding = "0", this.Hw = document.createElement("div"), this.Hw.style.width = "100%", this.Hw.style.height = "100%", this.Hw.style.position = "relative", this.Hw.style.overflow = "hidden", this.uv.appendChild(this.Hw), this.wm = Dn(this.Hw, size({ width: 16, height: 16 })), this.wm.subscribeSuggestedBitmapSizeChanged(this.om);
    const s = this.wm.canvasElement;
    s.style.position = "absolute", s.style.zIndex = "1", s.style.left = "0", s.style.top = "0", this.Mm = Dn(this.Hw, size({ width: 16, height: 16 })), this.Mm.subscribeSuggestedBitmapSizeChanged(this.um);
    const e2 = this.Mm.canvasElement;
    e2.style.position = "absolute", e2.style.zIndex = "2", e2.style.left = "0", e2.style.top = "0", this.jv.appendChild(this.Fw), this.jv.appendChild(this.uv), this.jv.appendChild(this.Ww), this.Uw(), this.Gv.Qt().N_().i(this.Uw.bind(this), this), this.sv = new Mn(this.Mm.canvasElement, this, { Pp: () => true, kp: () => !this.Gv.N().handleScroll.horzTouchDrag });
  }
  m() {
    this.sv.m(), null !== this.Lw && this.Lw.m(), null !== this.zw && this.zw.m(), this.Mm.unsubscribeSuggestedBitmapSizeChanged(this.um), In(this.Mm.canvasElement), this.Mm.dispose(), this.wm.unsubscribeSuggestedBitmapSizeChanged(this.om), In(this.wm.canvasElement), this.wm.dispose();
  }
  fv() {
    return this.jv;
  }
  $w() {
    return this.Lw;
  }
  jw() {
    return this.zw;
  }
  Fp(t) {
    if (this.Ow) return;
    this.Ow = true;
    const i = this.Gv.Qt();
    !i.Et().Zi() && this.Gv.N().handleScale.axisPressedMouseMove.time && i.Fd(t.localX);
  }
  Op(t) {
    this.Fp(t);
  }
  Wp() {
    const t = this.Gv.Qt();
    !t.Et().Zi() && this.Ow && (this.Ow = false, this.Gv.N().handleScale.axisPressedMouseMove.time && t.Yd());
  }
  Dp(t) {
    const i = this.Gv.Qt();
    !i.Et().Zi() && this.Gv.N().handleScale.axisPressedMouseMove.time && i.qd(t.localX);
  }
  Tp(t) {
    this.Dp(t);
  }
  Ep() {
    this.Ow = false;
    const t = this.Gv.Qt();
    t.Et().Zi() && !this.Gv.N().handleScale.axisPressedMouseMove.time || t.Yd();
  }
  Vp() {
    this.Ep();
  }
  fp() {
    this.Gv.N().handleScale.axisDoubleClickReset.time && this.Gv.Qt().ws();
  }
  _p() {
    this.fp();
  }
  bp() {
    this.Gv.Qt().N().handleScale.axisPressedMouseMove.time && this.zm(1);
  }
  Zp() {
    this.zm(0);
  }
  pv() {
    return this.nm;
  }
  qw() {
    return this.Nw;
  }
  Yw(i, s, e2) {
    equalSizes(this.nm, i) || (this.nm = i, this.lm = true, this.wm.resizeCanvasElement(i), this.Mm.resizeCanvasElement(i), this.lm = false, this.uv.style.width = `${i.width}px`, this.uv.style.height = `${i.height}px`, this.Nw.p(i)), null !== this.Lw && this.Lw.km(size({ width: s, height: i.height })), null !== this.zw && this.zw.km(size({ width: e2, height: i.height }));
  }
  Kw() {
    const t = this.Gw();
    return Math.ceil(t.S + t.C + t.P + t.A + t.I + t.Zw);
  }
  Pt() {
    this.Gv.Qt().Et().zl();
  }
  vv() {
    return this.wm.bitmapSize;
  }
  mv(t, i, n, s) {
    const e2 = this.vv();
    if (e2.width > 0 && e2.height > 0 && (t.drawImage(this.wm.canvasElement, i, n), s)) {
      const s2 = this.Mm.canvasElement;
      t.drawImage(s2, i, n);
    }
  }
  Rm(t) {
    if (0 === t) return;
    const i = { colorSpace: this.yn.colorSpace };
    if (1 !== t) {
      this.wm.applySuggestedBitmapSize();
      const n2 = tryCreateCanvasRenderingTarget2D(this.wm, i);
      null !== n2 && (n2.useBitmapCoordinateSpace(((t2) => {
        this.Im(t2), this.Vm(t2), this.Xw(n2, Kn);
      })), this.Em(n2), this.Xw(n2, qn)), null !== this.Lw && this.Lw.Rm(t), null !== this.zw && this.zw.Rm(t);
    }
    this.Mm.applySuggestedBitmapSize();
    const n = tryCreateCanvasRenderingTarget2D(this.Mm, i);
    null !== n && (n.useBitmapCoordinateSpace((({ context: t2, bitmapSize: i2 }) => {
      t2.clearRect(0, 0, i2.width, i2.height);
    })), this.Jw([...this.Gv.Qt().Jn(), this.Gv.Qt().Vd()], n), this.Xw(n, Yn));
  }
  Xw(t, i) {
    const n = this.Gv.Qt().Jn();
    for (const s of n) En(i, ((i2) => Vn(i2, t, false, void 0)), s, void 0);
    for (const s of n) En(i, ((i2) => Bn(i2, t, false, void 0)), s, void 0);
  }
  Im({ context: t, bitmapSize: i }) {
    z(t, 0, 0, i.width, i.height, this.Gv.Qt().af());
  }
  Vm({ context: t, bitmapSize: i, verticalPixelRatio: n }) {
    if (this.Gv.N().timeScale.borderVisible) {
      t.fillStyle = this.Qw();
      const s = Math.max(1, Math.floor(this.Gw().S * n));
      t.fillRect(0, 0, i.width, s);
    }
  }
  Em(t) {
    const i = this.Gv.Qt().Et(), n = i.zl();
    if (!n || 0 === n.length) return;
    const s = this.Pu.maxTickMarkWeight(n), e2 = this.Gw(), r2 = i.N();
    r2.borderVisible && r2.ticksVisible && t.useBitmapCoordinateSpace((({ context: t2, horizontalPixelRatio: i2, verticalPixelRatio: s2 }) => {
      t2.strokeStyle = this.Qw(), t2.fillStyle = this.Qw();
      const r3 = Math.max(1, Math.floor(i2)), h2 = Math.floor(0.5 * i2);
      t2.beginPath();
      const a2 = Math.round(e2.C * s2);
      for (let s3 = n.length; s3--; ) {
        const e3 = Math.round(n[s3].coord * i2);
        t2.rect(e3 - h2, 0, r3, a2);
      }
      t2.fill();
    })), t.useMediaCoordinateSpace((({ context: t2 }) => {
      const i2 = e2.S + e2.C + e2.A + e2.P / 2;
      t2.textAlign = "center", t2.textBaseline = "middle", t2.fillStyle = this.H(), t2.font = this.ym();
      for (const e3 of n) if (e3.weight < s) {
        const n2 = e3.needAlignCoordinate ? this.tM(t2, e3.coord, e3.label) : e3.coord;
        t2.fillText(e3.label, n2, i2);
      }
      this.Gv.N().timeScale.allowBoldLabels && (t2.font = this.iM());
      for (const e3 of n) if (e3.weight >= s) {
        const n2 = e3.needAlignCoordinate ? this.tM(t2, e3.coord, e3.label) : e3.coord;
        t2.fillText(e3.label, n2, i2);
      }
    }));
  }
  tM(t, i, n) {
    const s = this.rm.Ii(t, n), e2 = s / 2, r2 = Math.floor(i - e2) + 0.5;
    return r2 < 0 ? i += Math.abs(0 - r2) : r2 + s > this.nm.width && (i -= Math.abs(this.nm.width - (r2 + s))), i;
  }
  Jw(t, i) {
    const n = this.Gw();
    for (const s of t) for (const t2 of s.dn()) t2.Tt().st(i, n);
  }
  Qw() {
    return this.Gv.N().timeScale.borderColor;
  }
  H() {
    return this.yn.textColor;
  }
  F() {
    return this.yn.fontSize;
  }
  ym() {
    return x(this.F(), this.yn.fontFamily);
  }
  iM() {
    return x(this.F(), this.yn.fontFamily, "bold");
  }
  Gw() {
    null === this.M && (this.M = { S: 1, L: NaN, A: NaN, I: NaN, tn: NaN, C: 5, P: NaN, k: "", Qi: new rt(), Zw: 0 });
    const t = this.M, i = this.ym();
    if (t.k !== i) {
      const n = this.F();
      t.P = n, t.k = i, t.A = 3 * n / 12, t.I = 3 * n / 12, t.tn = 9 * n / 12, t.L = 0, t.Zw = 4 * n / 12, t.Qi.Os();
    }
    return this.M;
  }
  zm(t) {
    this.uv.style.cursor = 1 === t ? "ew-resize" : "default";
  }
  Uw() {
    const t = this.Gv.Qt(), i = t.N();
    i.leftPriceScale.visible || null === this.Lw || (this.Fw.removeChild(this.Lw.fv()), this.Lw.m(), this.Lw = null), i.rightPriceScale.visible || null === this.zw || (this.Ww.removeChild(this.zw.fv()), this.zw.m(), this.zw = null);
    const n = { Jd: this.Gv.Qt().Jd() }, s = () => i.leftPriceScale.borderVisible && t.Et().N().borderVisible, e2 = () => t.af();
    i.leftPriceScale.visible && null === this.Lw && (this.Lw = new $n("left", i, n, s, e2), this.Fw.appendChild(this.Lw.fv())), i.rightPriceScale.visible && null === this.zw && (this.zw = new $n("right", i, n, s, e2), this.Ww.appendChild(this.zw.fv()));
  }
}
const Zn = !!dn && !!navigator.userAgentData && navigator.userAgentData.brands.some(((t) => t.brand.includes("Chromium"))) && !!dn && (navigator?.userAgentData?.platform ? "Windows" === navigator.userAgentData.platform : navigator.userAgent.toLowerCase().indexOf("win") >= 0);
class Xn {
  constructor(t, i, n) {
    var s;
    this.nM = [], this.sM = [], this.eM = 0, this.oo = 0, this.k_ = 0, this.rM = 0, this.hM = 0, this.aM = null, this.lM = false, this.$m = new d(), this.jm = new d(), this.wd = new d(), this.oM = null, this._M = null, this.Kv = t, this.yn = i, this.Pu = n, this.jv = document.createElement("div"), this.jv.classList.add("tv-lightweight-charts"), this.jv.style.overflow = "hidden", this.jv.style.direction = "ltr", this.jv.style.width = "100%", this.jv.style.height = "100%", (s = this.jv).style.userSelect = "none", s.style.webkitUserSelect = "none", s.style.msUserSelect = "none", s.style.MozUserSelect = "none", s.style.webkitTapHighlightColor = "transparent", this.uM = document.createElement("table"), this.uM.setAttribute("cellspacing", "0"), this.jv.appendChild(this.uM), this.cM = this.dM.bind(this), Jn(this.yn) && this.fM(true), this.sn = new qi(this.gd.bind(this), this.yn, n), this.Qt().Bd().i(this.pM.bind(this), this), this.vM = new Gn(this, this.Pu), this.uM.appendChild(this.vM.fv());
    const e2 = i.autoSize && this.mM();
    let r2 = this.yn.width, h2 = this.yn.height;
    if (e2 || 0 === r2 || 0 === h2) {
      const i2 = t.getBoundingClientRect();
      r2 = r2 || i2.width, h2 = h2 || i2.height;
    }
    this.wM(r2, h2), this.MM(), t.appendChild(this.jv), this.gM(), this.sn.Et().Jc().i(this.sn.ka.bind(this.sn), this), this.sn.N_().i(this.sn.ka.bind(this.sn), this);
  }
  Qt() {
    return this.sn;
  }
  N() {
    return this.yn;
  }
  lv() {
    return this.nM;
  }
  bM() {
    return this.vM;
  }
  m() {
    this.fM(false), 0 !== this.eM && window.cancelAnimationFrame(this.eM), this.sn.Bd().u(this), this.sn.Et().Jc().u(this), this.sn.N_().u(this), this.sn.m();
    for (const t of this.nM) this.uM.removeChild(t.fv()), t.mw().u(this), t.ww().u(this), t.m();
    this.nM = [];
    for (const t of this.sM) this.SM(t);
    this.sM = [], u(this.vM).m(), null !== this.jv.parentElement && this.jv.parentElement.removeChild(this.jv), this.wd.m(), this.$m.m(), this.jm.m(), this.xM();
  }
  wM(i, n, s = false) {
    if (this.oo === n && this.k_ === i) return;
    const e2 = (function(i2) {
      const n2 = Math.floor(i2.width), s2 = Math.floor(i2.height);
      return size({ width: n2 - n2 % 2, height: s2 - s2 % 2 });
    })(size({ width: i, height: n }));
    this.oo = e2.height, this.k_ = e2.width;
    const r2 = this.oo + "px", h2 = this.k_ + "px";
    if (this.CM() || (u(this.jv).style.height = r2, u(this.jv).style.width = h2), this.uM.style.height = r2, this.uM.style.width = h2, s) {
      0 !== this.eM && (window.cancelAnimationFrame(this.eM), this.eM = 0), this.lM = false;
      const t = X.ys();
      null !== this.aM && (t.Ss(this.aM), this.aM = null), this.yM(t, performance.now());
    } else this.sn.ka();
  }
  Rm(t) {
    void 0 === t && (t = X.ys());
    for (let i = 0; i < this.nM.length; i++) this.nM[i].Rm(t._s(i).rs);
    this.yn.timeScale.visible && this.vM.Rm(t.ls());
  }
  vr(t) {
    const i = Jn(this.yn);
    this.sn.vr(t);
    const n = Jn(this.yn);
    n !== i && this.fM(n), t.layout?.panes && this.PM(), this.gM(), this.kM(t);
  }
  mw() {
    return this.$m;
  }
  ww() {
    return this.jm;
  }
  Bd() {
    return this.wd;
  }
  TM(t = false) {
    null !== this.aM && (this.yM(this.aM, performance.now()), this.aM = null);
    const i = this.RM(null), n = document.createElement("canvas");
    n.width = i.width, n.height = i.height;
    const s = u(n.getContext("2d"));
    return this.RM(s, t), n;
  }
  DM(t) {
    if ("left" === t && !this.IM()) return 0;
    if ("right" === t && !this.VM()) return 0;
    if (0 === this.nM.length) return 0;
    return u("left" === t ? this.nM[0].yw() : this.nM[0].Pw()).Tm();
  }
  CM() {
    return this.yn.autoSize && null !== this.oM;
  }
  Mv() {
    return this.jv;
  }
  BM(t) {
    this._M = t, this._M ? this.Mv().style.setProperty("cursor", t) : this.Mv().style.removeProperty("cursor");
  }
  EM() {
    return this._M;
  }
  AM(t) {
    return _(this.nM[t]).pv();
  }
  PM() {
    this.sM.forEach(((t) => {
      t.Pt();
    }));
  }
  kM(t) {
    (void 0 !== t.autoSize || !this.oM || void 0 === t.width && void 0 === t.height) && (t.autoSize && !this.oM && this.mM(), false === t.autoSize && null !== this.oM && this.xM(), t.autoSize || void 0 === t.width && void 0 === t.height || this.wM(t.width || this.k_, t.height || this.oo));
  }
  RM(i, n) {
    let s = 0, e2 = 0;
    const r2 = this.nM[0], h2 = (t, s2) => {
      let e3 = 0;
      for (let r3 = 0; r3 < this.nM.length; r3++) {
        const h3 = this.nM[r3], a3 = u("left" === t ? h3.yw() : h3.Pw()), l2 = a3.vv();
        if (null !== i && a3.mv(i, s2, e3, n), e3 += l2.height, r3 < this.nM.length - 1) {
          const t2 = this.sM[r3], n2 = t2.vv();
          null !== i && t2.mv(i, s2, e3), e3 += n2.height;
        }
      }
    };
    if (this.IM()) {
      h2("left", 0);
      s += u(r2.yw()).vv().width;
    }
    for (let t = 0; t < this.nM.length; t++) {
      const r3 = this.nM[t], h3 = r3.vv();
      if (null !== i && r3.mv(i, s, e2, n), e2 += h3.height, t < this.nM.length - 1) {
        const n2 = this.sM[t], r4 = n2.vv();
        null !== i && n2.mv(i, s, e2), e2 += r4.height;
      }
    }
    if (s += r2.vv().width, this.VM()) {
      h2("right", s);
      s += u(r2.Pw()).vv().width;
    }
    const a2 = (t, n2, s2) => {
      u("left" === t ? this.vM.$w() : this.vM.jw()).mv(u(i), n2, s2);
    };
    if (this.yn.timeScale.visible) {
      const t = this.vM.vv();
      if (null !== i) {
        let s2 = 0;
        this.IM() && (a2("left", s2, e2), s2 = u(r2.yw()).vv().width), this.vM.mv(i, s2, e2, n), s2 += t.width, this.VM() && a2("right", s2, e2);
      }
      e2 += t.height;
    }
    return size({ width: s, height: e2 });
  }
  LM() {
    let i = 0, n = 0, s = 0;
    for (const t of this.nM) this.IM() && (n = Math.max(n, u(t.yw()).Cm(), this.yn.leftPriceScale.minimumWidth)), this.VM() && (s = Math.max(s, u(t.Pw()).Cm(), this.yn.rightPriceScale.minimumWidth)), i += t.F_();
    n = mn(n), s = mn(s);
    const e2 = this.k_, r2 = this.oo, h2 = Math.max(e2 - n - s, 0), a2 = 1 * this.sM.length, l2 = this.yn.timeScale.visible;
    let o2 = l2 ? Math.max(this.vM.Kw(), this.yn.timeScale.minimumHeight) : 0;
    var _2;
    o2 = (_2 = o2) + _2 % 2;
    const c2 = a2 + o2, d2 = r2 < c2 ? 0 : r2 - c2, f2 = d2 / i;
    let p2 = 0;
    const v2 = window.devicePixelRatio || 1;
    for (let i2 = 0; i2 < this.nM.length; ++i2) {
      const e3 = this.nM[i2];
      e3.ew(this.sn.Gn()[i2]);
      let r3 = 0, a3 = 0;
      a3 = i2 === this.nM.length - 1 ? Math.ceil((d2 - p2) * v2) / v2 : Math.round(e3.F_() * f2 * v2) / v2, r3 = Math.max(a3, 2), p2 += r3, e3.km(size({ width: h2, height: r3 })), this.IM() && e3.gw(n, "left"), this.VM() && e3.gw(s, "right"), e3.yv() && this.sn.Ed(e3.yv(), r3);
    }
    this.vM.Yw(size({ width: l2 ? h2 : 0, height: o2 }), l2 ? n : 0, l2 ? s : 0), this.sn.H_(h2), this.rM !== n && (this.rM = n), this.hM !== s && (this.hM = s);
  }
  fM(t) {
    t ? this.jv.addEventListener("wheel", this.cM, { passive: false }) : this.jv.removeEventListener("wheel", this.cM);
  }
  zM(t) {
    switch (t.deltaMode) {
      case t.DOM_DELTA_PAGE:
        return 120;
      case t.DOM_DELTA_LINE:
        return 32;
    }
    return Zn ? 1 / window.devicePixelRatio : 1;
  }
  dM(t) {
    if (!(0 !== t.deltaX && this.yn.handleScroll.mouseWheel || 0 !== t.deltaY && this.yn.handleScale.mouseWheel)) return;
    const i = this.zM(t), n = i * t.deltaX / 100, s = -i * t.deltaY / 100;
    if (t.cancelable && t.preventDefault(), 0 !== s && this.yn.handleScale.mouseWheel) {
      const i2 = Math.sign(s) * Math.min(1, Math.abs(s)), n2 = t.clientX - this.jv.getBoundingClientRect().left;
      this.Qt().Wd(n2, i2);
    }
    0 !== n && this.yn.handleScroll.mouseWheel && this.Qt().Hd(-80 * n);
  }
  yM(t, i) {
    const n = t.ls();
    3 === n && this.OM(), 3 !== n && 2 !== n || (this.NM(t), this.FM(t, i), this.vM.Pt(), this.nM.forEach(((t2) => {
      t2.hw();
    })), 3 === this.aM?.ls() && (this.aM.Ss(t), this.OM(), this.NM(this.aM), this.FM(this.aM, i), t = this.aM, this.aM = null)), this.Rm(t);
  }
  FM(t, i) {
    for (const n of t.bs()) this.xs(n, i);
  }
  NM(t) {
    const i = this.sn.Gn();
    for (let n = 0; n < i.length; n++) t._s(n).hs && i[n].lu();
  }
  xs(t, i) {
    const n = this.sn.Et();
    switch (t.ds) {
      case 0:
        n.td();
        break;
      case 1:
        n.nd(t.Wt);
        break;
      case 2:
        n.Ms(t.Wt);
        break;
      case 3:
        n.gs(t.Wt);
        break;
      case 4:
        n.Wc();
        break;
      case 5:
        t.Wt.Kc(i) || n.gs(t.Wt.Gc(i));
    }
  }
  gd(t) {
    null !== this.aM ? this.aM.Ss(t) : this.aM = t, this.lM || (this.lM = true, this.eM = window.requestAnimationFrame(((t2) => {
      if (this.lM = false, this.eM = 0, null !== this.aM) {
        const i = this.aM;
        this.aM = null, this.yM(i, t2);
        for (const n of i.bs()) if (5 === n.ds && !n.Wt.Kc(t2)) {
          this.Qt().ps(n.Wt);
          break;
        }
      }
    })));
  }
  OM() {
    this.MM();
  }
  SM(t) {
    this.uM.removeChild(t.fv()), t.m();
  }
  MM() {
    const t = this.sn.Gn(), i = t.length, n = this.nM.length;
    for (let t2 = i; t2 < n; t2++) {
      const t3 = _(this.nM.pop());
      this.uM.removeChild(t3.fv()), t3.mw().u(this), t3.ww().u(this), t3.m();
      const i2 = this.sM.pop();
      void 0 !== i2 && this.SM(i2);
    }
    for (let s = n; s < i; s++) {
      const i2 = new Un(this, t[s]);
      if (i2.mw().i(this.WM.bind(this, i2), this), i2.ww().i(this.HM.bind(this, i2), this), this.nM.push(i2), s > 0) {
        const t2 = new yn(this, s - 1, s);
        this.sM.push(t2), this.uM.insertBefore(t2.fv(), this.vM.fv());
      }
      this.uM.insertBefore(i2.fv(), this.vM.fv());
    }
    for (let n2 = 0; n2 < i; n2++) {
      const i2 = t[n2], s = this.nM[n2];
      s.yv() !== i2 ? s.ew(i2) : s.sw();
    }
    this.gM(), this.LM();
  }
  UM(t, i, n, s) {
    const e2 = /* @__PURE__ */ new Map();
    if (null !== t) {
      this.sn.Jn().forEach(((i2) => {
        const n2 = i2.Un().Hn(t);
        null !== n2 && e2.set(i2, n2);
      }));
    }
    let r2;
    if (null !== t) {
      const i2 = this.sn.Et().en(t)?.originalTime;
      void 0 !== i2 && (r2 = i2);
    }
    const h2 = this.Qt().cu(), a2 = this.$M(s), l2 = (function(t2, i2) {
      const n2 = null !== t2 && t2.uu instanceof Jt ? t2.uu : void 0, s2 = t2?.bu?.te, e3 = void 0 !== i2 && -1 !== i2 ? i2 : void 0;
      return null === t2 || void 0 === t2.ee ? { jM: n2, qM: s2 } : { jM: n2, qM: s2, YM: { ds: t2.ee, KM: (r3 = t2.uu, h3 = t2.ee, r3 instanceof Pi ? "pane-primitive" : "marker" === h3 || "primitive" === h3 ? "series-primitive" : "series"), GM: vn(t2.ee, s2), Y_: n2, ZM: s2, XM: e3 } };
      var r3, h3;
    })(h2, a2);
    return { Qr: r2, $n: t ?? void 0, JM: i ?? void 0, XM: -1 !== a2 ? a2 : void 0, jM: l2.jM, QM: e2, qM: l2.qM, YM: l2.YM, tg: n ?? void 0 };
  }
  $M(t) {
    let i = -1;
    if (t) i = this.nM.indexOf(t);
    else {
      const t2 = this.Qt().Vd().Kn();
      null !== t2 && (i = this.Qt().Gn().indexOf(t2));
    }
    return i;
  }
  WM(t, i, n, s) {
    this.$m.p((() => this.UM(i, n, s, t)));
  }
  HM(t, i, n, s) {
    this.jm.p((() => this.UM(i, n, s, t)));
  }
  pM(t, i, n) {
    this.BM(this.Qt().cu()?.gu ?? null), this.wd.p((() => this.UM(t, i, n)));
  }
  gM() {
    const t = this.yn.timeScale.visible ? "" : "none";
    this.vM.fv().style.display = t;
  }
  IM() {
    return this.nM[0].yv().X_().N().visible;
  }
  VM() {
    return this.nM[0].yv().J_().N().visible;
  }
  mM() {
    return "ResizeObserver" in window && (this.oM = new ResizeObserver(((t) => {
      const i = t[t.length - 1];
      if (!i) return;
      const n = i.contentRect.width, s = i.contentRect.height;
      this.wM(n, s, true);
    })), this.oM.observe(this.Kv, { box: "border-box" }), true);
  }
  xM() {
    null !== this.oM && this.oM.disconnect(), this.oM = null;
  }
}
function Jn(t) {
  return Boolean(t.handleScroll.mouseWheel || t.handleScale.mouseWheel);
}
function Qn(t) {
  return void 0 === t.open && void 0 === t.value;
}
function ts(t) {
  return (function(t2) {
    return void 0 !== t2.open;
  })(t) || (function(t2) {
    return void 0 !== t2.value;
  })(t);
}
function is(t, i, n, s) {
  const e2 = n.value, r2 = { $n: i, wt: t, Wt: [e2, e2, e2, e2], Qr: s };
  return void 0 !== n.color && (r2.R = n.color), r2;
}
function ns(t, i, n, s) {
  const e2 = n.value, r2 = { $n: i, wt: t, Wt: [e2, e2, e2, e2], Qr: s };
  return void 0 !== n.lineColor && (r2.vt = n.lineColor), void 0 !== n.topColor && (r2.ah = n.topColor), void 0 !== n.bottomColor && (r2.oh = n.bottomColor), r2;
}
function ss(t, i, n, s) {
  const e2 = n.value, r2 = { $n: i, wt: t, Wt: [e2, e2, e2, e2], Qr: s };
  return void 0 !== n.topLineColor && (r2._h = n.topLineColor), void 0 !== n.bottomLineColor && (r2.uh = n.bottomLineColor), void 0 !== n.topFillColor1 && (r2.dh = n.topFillColor1), void 0 !== n.topFillColor2 && (r2.fh = n.topFillColor2), void 0 !== n.bottomFillColor1 && (r2.ph = n.bottomFillColor1), void 0 !== n.bottomFillColor2 && (r2.mh = n.bottomFillColor2), r2;
}
function es(t, i, n, s) {
  const e2 = { $n: i, wt: t, Wt: [n.open, n.high, n.low, n.close], Qr: s };
  return void 0 !== n.color && (e2.R = n.color), e2;
}
function rs(t, i, n, s) {
  const e2 = { $n: i, wt: t, Wt: [n.open, n.high, n.low, n.close], Qr: s };
  return void 0 !== n.color && (e2.R = n.color), void 0 !== n.borderColor && (e2.Ht = n.borderColor), void 0 !== n.wickColor && (e2.hh = n.wickColor), e2;
}
function hs(t, i, n, s, e2) {
  const r2 = _(e2)(n), h2 = Math.max(...r2), a2 = Math.min(...r2), l2 = r2[r2.length - 1], o2 = [l2, h2, a2, l2], { time: u2, color: c2, ...d2 } = n;
  return { $n: i, wt: t, Wt: o2, Qr: s, ue: d2, R: c2 };
}
function as(t) {
  return void 0 !== t.Wt;
}
function ls(t, i) {
  return void 0 !== i.customValues && (t.ig = i.customValues), t;
}
function os(t) {
  return (i, n, s, e2, r2, h2) => (function(t2, i2) {
    return i2 ? i2(t2) : Qn(t2);
  })(s, h2) ? ls({ wt: i, $n: n, Qr: e2 }, s) : ls(t(i, n, s, e2, r2), s);
}
function _s(t) {
  return { Candlestick: os(rs), Bar: os(es), Area: os(ns), Baseline: os(ss), Histogram: os(is), Line: os(is), Custom: os(hs) }[t];
}
function us(t) {
  return { $n: 0, ng: /* @__PURE__ */ new Map(), Oa: t };
}
function cs(t, i) {
  if (void 0 !== t && 0 !== t.length) return { sg: i.key(t[0].wt), eg: i.key(t[t.length - 1].wt) };
}
function ds(t) {
  let i;
  return t.forEach(((t2) => {
    void 0 === i && (i = t2.Qr);
  })), _(i);
}
class fs {
  constructor(t) {
    this.rg = /* @__PURE__ */ new Map(), this.hg = /* @__PURE__ */ new Map(), this.ag = /* @__PURE__ */ new Map(), this.lg = [], this.Pu = t;
  }
  m() {
    this.rg.clear(), this.hg.clear(), this.ag.clear(), this.lg = [];
  }
  og(t, i) {
    let n = 0 !== this.rg.size, s = false;
    const e2 = this.hg.get(t);
    if (void 0 !== e2) if (1 === this.hg.size) n = false, s = true, this.rg.clear();
    else for (const i2 of this.lg) i2.pointData.ng.delete(t) && (s = true);
    let r2 = [];
    if (0 !== i.length) {
      const n2 = i.map(((t2) => t2.time)), e3 = this.Pu.createConverterToInternalObj(i), h3 = _s(t.bh()), a2 = t.ul(), l2 = t.cl();
      r2 = i.map(((i2, r3) => {
        const o2 = e3(i2.time), _2 = this.Pu.key(o2);
        let u2 = this.rg.get(_2);
        void 0 === u2 && (u2 = us(o2), this.rg.set(_2, u2), s = true);
        const c2 = h3(o2, u2.$n, i2, n2[r3], a2, l2);
        return u2.ng.set(t, c2), c2;
      }));
    }
    n && this._g(), this.ug(t, r2);
    let h2 = -1;
    if (s) {
      const t2 = [];
      this.rg.forEach(((i2) => {
        t2.push({ timeWeight: 0, time: i2.Oa, pointData: i2, originalTime: ds(i2.ng) });
      })), t2.sort(((t3, i2) => this.Pu.key(t3.time) - this.Pu.key(i2.time))), h2 = this.cg(t2);
    }
    return this.dg(t, h2, (function(t2, i2, n2) {
      const s2 = cs(t2, n2), e3 = cs(i2, n2);
      if (void 0 !== s2 && void 0 !== e3) return { fg: false, Va: s2.eg >= e3.eg && s2.sg >= e3.sg };
    })(this.hg.get(t), e2, this.Pu));
  }
  if(t) {
    return this.og(t, []);
  }
  pg(t, i, n) {
    if (n && t.Fa()) throw new Error("Historical updates are not supported when conflation is enabled. Conflation requires data to be processed in order.");
    const s = i;
    !(function(t2) {
      void 0 === t2.Qr && (t2.Qr = t2.time);
    })(s), this.Pu.preprocessData(i);
    const e2 = this.Pu.createConverterToInternalObj([i])(i.time), r2 = this.ag.get(t);
    if (!n && void 0 !== r2 && this.Pu.key(e2) < this.Pu.key(r2)) throw new Error(`Cannot update oldest data, last time=${r2}, new time=${e2}`);
    let h2 = this.rg.get(this.Pu.key(e2));
    if (n && void 0 === h2) throw new Error("Cannot update non-existing data point when historicalUpdate is true");
    const a2 = void 0 === h2;
    void 0 === h2 && (h2 = us(e2), this.rg.set(this.Pu.key(e2), h2));
    const l2 = _s(t.bh()), o2 = t.ul(), _2 = t.cl(), u2 = l2(e2, h2.$n, i, s.Qr, o2, _2), c2 = !n && !a2 && void 0 !== r2 && this.Pu.key(e2) === this.Pu.key(r2);
    h2.ng.set(t, u2), n ? this.vg(t, u2, h2.$n) : c2 && t.Fa() && as(u2) ? (t.Rr(u2), this.mg(t, u2)) : this.mg(t, u2);
    const d2 = { Va: as(u2), fg: n };
    if (!a2) return this.dg(t, -1, d2);
    const f2 = { timeWeight: 0, time: h2.Oa, pointData: h2, originalTime: ds(h2.ng) }, p2 = Rt(this.lg, this.Pu.key(f2.time), ((t2, i2) => this.Pu.key(t2.time) < i2));
    this.lg.splice(p2, 0, f2);
    for (let t2 = p2; t2 < this.lg.length; ++t2) ps(this.lg[t2].pointData, t2);
    return this.Pu.fillWeightsForPoints(this.lg, p2), this.dg(t, p2, d2);
  }
  wg(t, i) {
    const n = this.hg.get(t);
    if (void 0 === n || i <= 0) return [[], this.Mg()];
    i = Math.min(i, n.length);
    const s = n.splice(-i).reverse();
    0 === n.length ? this.ag.delete(t) : this.ag.set(t, n[n.length - 1].wt);
    for (const i2 of s) {
      const n2 = this.rg.get(this.Pu.key(i2.wt));
      if (n2 && (n2.ng.delete(t), 0 === n2.ng.size)) {
        this.rg.delete(this.Pu.key(n2.Oa)), this.lg.splice(n2.$n, 1);
        for (let t2 = n2.$n; t2 < this.lg.length; ++t2) ps(this.lg[t2].pointData, t2);
      }
    }
    return [s, this.dg(t, this.lg.length - 1, { fg: false, Va: false })];
  }
  mg(t, i) {
    let n = this.hg.get(t);
    void 0 === n && (n = [], this.hg.set(t, n));
    const s = 0 !== n.length ? n[n.length - 1] : null;
    null === s || this.Pu.key(i.wt) > this.Pu.key(s.wt) ? as(i) && n.push(i) : as(i) ? n[n.length - 1] = i : n.splice(-1, 1), this.ag.set(t, i.wt);
  }
  vg(t, i, n) {
    const s = this.hg.get(t);
    if (void 0 === s) return;
    const e2 = Rt(s, n, ((t2, i2) => t2.$n < i2));
    as(i) ? s[e2] = i : s.splice(e2, 1);
  }
  ug(t, i) {
    0 !== i.length ? (this.hg.set(t, i.filter(as)), this.ag.set(t, i[i.length - 1].wt)) : (this.hg.delete(t), this.ag.delete(t));
  }
  _g() {
    for (const t of this.lg) 0 === t.pointData.ng.size && this.rg.delete(this.Pu.key(t.time));
  }
  cg(t) {
    let i = -1;
    for (let n = 0; n < this.lg.length && n < t.length; ++n) {
      const s = this.lg[n], e2 = t[n];
      if (this.Pu.key(s.time) !== this.Pu.key(e2.time)) {
        i = n;
        break;
      }
      e2.timeWeight = s.timeWeight, ps(e2.pointData, n);
    }
    if (-1 === i && this.lg.length !== t.length && (i = Math.min(this.lg.length, t.length)), -1 === i) return -1;
    for (let n = i; n < t.length; ++n) ps(t[n].pointData, n);
    return this.Pu.fillWeightsForPoints(t, i), this.lg = t, i;
  }
  gg() {
    if (0 === this.hg.size) return null;
    let t = 0;
    return this.hg.forEach(((i) => {
      0 !== i.length && (t = Math.max(t, i[i.length - 1].$n));
    })), t;
  }
  dg(t, i, n) {
    const s = this.Mg();
    if (-1 !== i) this.hg.forEach(((i2, e2) => {
      s.Y_.set(e2, { ue: i2, bg: e2 === t ? n : void 0 });
    })), this.hg.has(t) || s.Y_.set(t, { ue: [], bg: n }), s.Et.Sg = this.lg, s.Et.xg = i;
    else {
      const i2 = this.hg.get(t);
      s.Y_.set(t, { ue: i2 || [], bg: n });
    }
    return s;
  }
  Mg() {
    return { Y_: /* @__PURE__ */ new Map(), Et: { Dc: this.gg() } };
  }
}
function ps(t, i) {
  t.$n = i, t.ng.forEach(((t2) => {
    t2.$n = i;
  }));
}
function vs(t, i) {
  return t._t < i;
}
function ms(t, i) {
  return i < t._t;
}
function ws(t, i, n, s) {
  return Rt(t, i, vs, n, s);
}
function Ms(t, i, n, s) {
  return Dt(t, i, ms, n, s);
}
function gs(t, i, n) {
  return { ne: t, se: i, ee: n };
}
function bs(t, i, n, s) {
  return t >= i - s && t <= n + s;
}
function Ss(t, i, n, s, e2, r2) {
  const h2 = e2 - n, a2 = r2 - s;
  if (0 === h2 && 0 === a2) return Math.hypot(t - n, i - s);
  const l2 = ((t - n) * h2 + (i - s) * a2) / (h2 * h2 + a2 * a2), o2 = Math.max(0, Math.min(1, l2)), _2 = n + h2 * o2, u2 = s + a2 * o2;
  return Math.hypot(t - _2, i - u2);
}
const xs = [0, 0];
function Cs(t, i, n) {
  return void 0 === i || i.wt !== t.wt - 1 ? t._t - n / 2 : (i._t + t._t) / 2;
}
function ys(t, i, n) {
  return void 0 === i || i.wt !== t.wt + 1 ? t._t + n / 2 : (t._t + i._t) / 2;
}
function Ps(t, i, n, s, e2, r2, h2) {
  if (null === i || i.from >= i.to || 0 === t.length) return null;
  const a2 = e2 / 2 + r2, l2 = ws(t, n - a2, i.from, i.to), o2 = Ms(t, n + a2, l2, i.to);
  if (l2 >= o2) return null;
  let _2 = Number.POSITIVE_INFINITY;
  for (let a3 = l2; a3 < o2; a3++) {
    const l3 = t[a3], o3 = a3 > i.from ? t[a3 - 1] : void 0, u2 = a3 < i.to - 1 ? t[a3 + 1] : void 0, c2 = Cs(l3, o3, e2) - r2, d2 = ys(l3, u2, e2) + r2;
    if (n < c2 || n > d2) continue;
    h2(l3, xs);
    const f2 = xs[0], p2 = xs[1], v2 = Math.min(f2, p2), m2 = Math.max(f2, p2), w2 = v2 - r2, M2 = m2 + r2;
    if (s >= v2 && s <= m2) _2 = Math.min(_2, 0);
    else if (s >= w2 && s <= M2) {
      const t2 = Math.min(Math.abs(s - v2), Math.abs(m2 - s));
      _2 = Math.min(_2, t2);
    }
  }
  return Number.isFinite(_2) ? gs(_2, 0, "series-range") : null;
}
function ks(t, i) {
  return t.wt < i;
}
function Ts(t, i) {
  return i < t.wt;
}
function Rs(t, i, n) {
  const s = i.Na(), e2 = i.bi(), r2 = Rt(t, s, ks), h2 = Dt(t, e2, Ts);
  if (!n) return { from: r2, to: h2 };
  let a2 = r2, l2 = h2;
  return r2 > 0 && r2 < t.length && t[r2].wt >= s && (a2 = r2 - 1), h2 > 0 && h2 < t.length && t[h2 - 1].wt <= e2 && (l2 = h2 + 1), { from: a2, to: l2 };
}
class Ds {
  constructor(t, i, n) {
    this.Cg = true, this.yg = true, this.Pg = true, this.kg = [], this.Tg = null, this.Rg = -1, this.ae = t, this.le = i, this.Dg = n;
  }
  Pt(t) {
    this.Cg = true, "data" === t && (this.yg = true), "options" === t && (this.Pg = true);
  }
  Tt() {
    return this.ae.It() ? (this.Ig(), null === this.Tg ? null : this.Vg) : null;
  }
  Qs(t, i) {
    return this.ae.It() ? (this.Ig(), null === this.Tg ? null : this.Bg(t, i)) : null;
  }
  Bg(t, i) {
    return null;
  }
  Eg() {
    this.kg = this.kg.map(((t) => ({ ...t, ...this.ae.Sa().Sh(t.wt) })));
  }
  Ag() {
    this.Tg = null;
  }
  Ig() {
    const t = this.le.Et(), i = t.N().enableConflation ? t.sd() : 0;
    i !== this.Rg && (this.yg = true, this.Rg = i), this.yg && (this.Lg(), this.yg = false), this.Pg && (this.Eg(), this.Pg = false), this.Cg && (this.zg(), this.Cg = false);
  }
  zg() {
    const t = this.ae.Ft(), i = this.le.Et();
    if (this.Ag(), i.Zi() || t.Zi()) return;
    const n = i.Ee();
    if (null === n) return;
    if (0 === this.ae.Un().Th()) return;
    const s = this.ae.Lt();
    null !== s && (this.Tg = Rs(this.kg, n, this.Dg), this.Og(t, i, s.Wt), this.Ng());
  }
}
class Is {
  constructor(t, i) {
    this.Fg = t, this.Ki = i;
  }
  st(t, i, n) {
    this.Fg.draw(t, this.Ki, i, n);
  }
}
function Vs(t) {
  switch (t) {
    case "point":
      return 2;
    case "range":
      return 0;
    default:
      return 1;
  }
}
class Bs extends Ds {
  constructor(t, i, n) {
    super(t, i, false), this.Yh = n, this.Fg = this.Yh.renderer(), this.Vg = new Is(this.Fg, ((t2) => this.Wg(t2)));
  }
  get ga() {
    return this.Yh.conflationReducer;
  }
  Ha(t) {
    return this.Yh.priceValueBuilder(t);
  }
  dl(t) {
    return this.Yh.isWhitespace(t);
  }
  Bg(t, i) {
    const n = this.Fg.hitTest?.(t, i, ((t2) => this.Wg(t2)));
    if (null != n) return { ne: (s = n).distance, se: Vs(s.type), ee: "custom", gu: s.cursorStyle, te: s.objectId, ie: s.hitTestData };
    var s;
    const e2 = Ps(this.kg, this.Tg, t, i, this.le.Et().ml(), this.ae.N().hitTestTolerance, ((t2, i2) => {
      const n2 = t2.Hg;
      let s2 = NaN, e3 = NaN;
      if (void 0 !== n2 && !this.Yh.isWhitespace(n2)) for (const t3 of this.Yh.priceValueBuilder(n2)) {
        const i3 = this.Wg(t3);
        null !== i3 && (s2 = Number.isNaN(s2) ? i3 : Math.min(s2, i3), e3 = Number.isNaN(e3) ? i3 : Math.max(e3, i3));
      }
      i2[0] = s2, i2[1] = e3;
    }));
    return null === e2 ? null : { ...e2, ee: "custom" };
  }
  Lg() {
    const t = this.ae.Sa();
    this.kg = this.ae.Ua().Bh().map(((i) => ({ wt: i.$n, _t: NaN, ...t.Sh(i.$n), Hg: i.ue })));
  }
  Og(t, i) {
    i.Ic(this.kg, b(this.Tg));
  }
  Ng() {
    this.Yh.update({ bars: this.kg.map(Es), barSpacing: this.le.Et().ml(), visibleRange: this.Tg, conflationFactor: this.le.Et().sd() }, this.ae.N());
  }
  Wg(t) {
    const i = this.ae.Lt();
    return null === i ? null : this.ae.Ft().Nt(t, i.Wt);
  }
}
function Es(t) {
  return { x: t._t, time: t.wt, originalData: t.Hg, barColor: t.sh };
}
const As = { color: "#2196f3" }, Ls = (t, i, n) => {
  const s = c(n);
  return new Bs(t, i, s);
};
function zs(t) {
  const i = { value: t.Wt[3], time: t.Qr };
  return void 0 !== t.ig && (i.customValues = t.ig), i;
}
function Os(t) {
  const i = zs(t);
  return void 0 !== t.R && (i.color = t.R), i;
}
function Ns(t) {
  const i = zs(t);
  return void 0 !== t.vt && (i.lineColor = t.vt), void 0 !== t.ah && (i.topColor = t.ah), void 0 !== t.oh && (i.bottomColor = t.oh), i;
}
function Fs(t) {
  const i = zs(t);
  return void 0 !== t._h && (i.topLineColor = t._h), void 0 !== t.uh && (i.bottomLineColor = t.uh), void 0 !== t.dh && (i.topFillColor1 = t.dh), void 0 !== t.fh && (i.topFillColor2 = t.fh), void 0 !== t.ph && (i.bottomFillColor1 = t.ph), void 0 !== t.mh && (i.bottomFillColor2 = t.mh), i;
}
function Ws(t) {
  const i = { open: t.Wt[0], high: t.Wt[1], low: t.Wt[2], close: t.Wt[3], time: t.Qr };
  return void 0 !== t.ig && (i.customValues = t.ig), i;
}
function Hs(t) {
  const i = Ws(t);
  return void 0 !== t.R && (i.color = t.R), i;
}
function Us(t) {
  const i = Ws(t), { R: n, Ht: s, hh: e2 } = t;
  return void 0 !== n && (i.color = n), void 0 !== s && (i.borderColor = s), void 0 !== e2 && (i.wickColor = e2), i;
}
function $s(t) {
  return { Area: Ns, Line: Os, Baseline: Fs, Histogram: Os, Bar: Hs, Candlestick: Us, Custom: js }[t];
}
function js(t) {
  const i = t.Qr;
  return { ...t.ue, time: i };
}
const qs = { vertLine: { color: "#9598A1", width: 1, style: 3, visible: true, labelVisible: true, labelBackgroundColor: "#131722" }, horzLine: { color: "#9598A1", width: 1, style: 3, visible: true, labelVisible: true, labelBackgroundColor: "#131722" }, mode: 1, doNotSnapToHiddenSeriesIndices: false }, Ys = { vertLines: { color: "#D6DCDE", style: 0, visible: true }, horzLines: { color: "#D6DCDE", style: 0, visible: true } }, Ks = { background: { type: "solid", color: "#FFFFFF" }, textColor: "#191919", fontSize: 12, fontFamily: S, panes: { enableResize: true, separatorColor: "#E0E3EB", separatorHoverColor: "rgba(178, 181, 189, 0.2)" }, attributionLogo: true, colorSpace: "srgb", colorParsers: [] }, Gs = { autoScale: true, mode: 0, invertScale: false, alignLabels: true, borderVisible: true, borderColor: "#2B2B43", entireTextOnly: false, visible: false, ticksVisible: false, scaleMargins: { bottom: 0.1, top: 0.2 }, minimumWidth: 0, ensureEdgeTickMarksVisible: false, tickMarkDensity: 2.5 }, Zs = { rightOffset: 0, barSpacing: 6, minBarSpacing: 0.5, maxBarSpacing: 0, fixLeftEdge: false, fixRightEdge: false, lockVisibleTimeRangeOnResize: false, rightBarStaysOnScroll: false, borderVisible: true, borderColor: "#2B2B43", visible: true, timeVisible: false, secondsVisible: true, shiftVisibleRangeOnNewBar: true, allowShiftVisibleRangeOnWhitespaceReplacement: false, ticksVisible: false, uniformDistribution: false, minimumHeight: 0, allowBoldLabels: true, ignoreWhitespaceIndices: false, enableConflation: false, conflationThresholdFactor: 1, precomputeConflationOnInit: false, precomputeConflationPriority: "background" };
function Xs() {
  return { addDefaultPane: true, hoveredSeriesOnTop: true, width: 0, height: 0, autoSize: false, layout: Ks, crosshair: qs, grid: Ys, overlayPriceScales: { ...Gs }, leftPriceScale: { ...Gs, visible: false }, rightPriceScale: { ...Gs, visible: true }, defaultVisiblePriceScaleId: "right", timeScale: Zs, localization: { locale: dn ? navigator.language : "", dateFormat: "dd MMM 'yy" }, handleScroll: { mouseWheel: true, pressedMouseMove: true, horzTouchDrag: true, vertTouchDrag: true }, handleScale: { axisPressedMouseMove: { time: true, price: true }, axisDoubleClickReset: { time: true, price: true }, mouseWheel: true, pinch: true }, kineticScroll: { mouse: false, touch: true }, trackingMode: { exitMode: 1 } };
}
class Js {
  constructor(t, i, n) {
    this.hv = t, this.Ug = i, this.$g = n ?? 0;
  }
  applyOptions(t) {
    this.hv.Qt().Dd(this.Ug, t, this.$g);
  }
  options() {
    return this.Ki().N();
  }
  width() {
    return Z(this.Ug) ? this.hv.DM(this.Ug) : 0;
  }
  setVisibleRange(t) {
    this.setAutoScale(false), this.Ki().Go(new mt(t.from, t.to));
  }
  getVisibleRange() {
    let t, i, n = this.Ki().ar();
    if (null === n) return null;
    if (this.Ki().ho()) {
      const s = this.Ki().S_(), e2 = Yi(s);
      n = vi(n, this.Ki().lo()), t = Number((Math.round(n.Je() / s) * s).toFixed(e2)), i = Number((Math.round(n.Qe() / s) * s).toFixed(e2));
    } else t = n.Je(), i = n.Qe();
    return { from: t, to: i };
  }
  setAutoScale(t) {
    this.applyOptions({ autoScale: t });
  }
  Ki() {
    return u(this.hv.Qt().Id(this.Ug, this.$g)).Ft;
  }
}
class Qs {
  constructor(t, i, n, s) {
    this.hv = t, this.yt = n, this.jg = i, this.qg = s;
  }
  getHeight() {
    return this.yt.$t();
  }
  setHeight(t) {
    const i = this.hv.Qt(), n = i._f(this.yt);
    i.Ld(n, t);
  }
  getStretchFactor() {
    return this.yt.F_();
  }
  setStretchFactor(t) {
    this.yt.W_(t), this.hv.Qt().ka();
  }
  paneIndex() {
    return this.hv.Qt()._f(this.yt);
  }
  moveTo(t) {
    const i = this.paneIndex();
    i !== t && (o(t >= 0 && t < this.hv.lv().length, "Invalid pane index"), this.hv.Qt().Od(i, t));
  }
  getSeries() {
    return this.yt.Y_().map(((t) => this.jg(t))) ?? [];
  }
  getHTMLElement() {
    const t = this.hv.lv();
    return t && 0 !== t.length && t[this.paneIndex()] ? t[this.paneIndex()].fv() : null;
  }
  attachPrimitive(t) {
    this.yt.ol(t), t.attached && t.attached({ chart: this.qg, requestUpdate: () => this.yt.Qt().ka() });
  }
  detachPrimitive(t) {
    this.yt._l(t);
  }
  priceScale(t) {
    if (null === this.yt.O_(t)) throw new Error(`Cannot find price scale with id: ${t}`);
    return new Js(this.hv, t, this.paneIndex());
  }
  setPreserveEmptyPane(t) {
    this.yt.j_(t);
  }
  preserveEmptyPane() {
    return this.yt.q_();
  }
  addCustomSeries(t, i = {}, n = 0) {
    return this.qg.addCustomSeries(t, i, n);
  }
  addSeries(t, i = {}) {
    return this.qg.addSeries(t, i, this.paneIndex());
  }
}
const te = { color: "#FF0000", price: 0, lineStyle: 2, lineWidth: 1, lineVisible: true, axisLabelVisible: true, title: "", axisLabelColor: "", axisLabelTextColor: "" };
class ie {
  constructor(t) {
    this._r = t;
  }
  applyOptions(t) {
    this._r.vr(t);
  }
  options() {
    return this._r.N();
  }
  Yg() {
    return this._r;
  }
}
class ne {
  constructor(t, i, n, s, e2, r2) {
    this.Kg = new d(), this.ae = t, this.Gg = i, this.Zg = n, this.Pu = e2, this.qg = s, this.Xg = r2;
  }
  m() {
    this.Kg.m();
  }
  priceFormatter() {
    return this.ae.sl();
  }
  priceToCoordinate(t) {
    const i = this.ae.Lt();
    return null === i ? null : this.ae.Ft().Nt(t, i.Wt);
  }
  coordinateToPrice(t) {
    const i = this.ae.Lt();
    return null === i ? null : this.ae.Ft().Tn(t, i.Wt);
  }
  barsInLogicalRange(t) {
    if (null === t) return null;
    const i = new Oi(new Ai(t.from, t.to)).Uu(), n = this.ae.Un();
    if (n.Zi()) return null;
    const s = n.Hn(i.Na(), 1), e2 = n.Hn(i.bi(), -1), r2 = u(n.Rh()), h2 = u(n.Qn());
    if (null !== s && null !== e2 && s.$n > e2.$n) return { barsBefore: t.from - r2, barsAfter: h2 - t.to };
    const a2 = { barsBefore: null === s || s.$n === r2 ? t.from - r2 : s.$n - r2, barsAfter: null === e2 || e2.$n === h2 ? h2 - t.to : h2 - e2.$n };
    return null !== s && null !== e2 && (a2.from = s.Qr, a2.to = e2.Qr), a2;
  }
  setData(t) {
    this.Pu, this.ae.bh(), this.Gg.Jg(this.ae, t), this.Qg("full");
  }
  update(t, i = false) {
    this.ae.bh(), this.Gg.tb(this.ae, t, i), this.Qg("update");
  }
  pop(t = 1) {
    const i = this.Gg.ib(this.ae, t);
    0 !== i.length && this.Qg("update");
    const n = $s(this.seriesType());
    return i.map(((t2) => n(t2)));
  }
  dataByIndex(t, i) {
    const n = this.ae.Un().Hn(t, i);
    if (null === n) return null;
    return $s(this.seriesType())(n);
  }
  data() {
    const t = $s(this.seriesType());
    return this.ae.Un().Bh().map(((i) => t(i)));
  }
  subscribeDataChanged(t) {
    this.Kg.i(t);
  }
  unsubscribeDataChanged(t) {
    this.Kg._(t);
  }
  applyOptions(t) {
    this.ae.vr(t);
  }
  options() {
    return M(this.ae.N());
  }
  priceScale() {
    return this.Zg.priceScale(this.ae.Ft().pl(), this.getPane().paneIndex());
  }
  createPriceLine(t) {
    const i = f(M(te), t), n = this.ae.Ea(i);
    return new ie(n);
  }
  removePriceLine(t) {
    this.ae.Aa(t.Yg());
  }
  priceLines() {
    return this.ae.La().map(((t) => new ie(t)));
  }
  seriesType() {
    return this.ae.bh();
  }
  lastValueData(t) {
    const i = this.ae.Ae(t);
    return i.Le ? { noData: true } : { noData: false, price: i.Mt, color: i.R };
  }
  attachPrimitive(t) {
    this.ae.ol(t), t.attached && t.attached({ chart: this.qg, series: this, requestUpdate: () => this.ae.Qt().ka(), horzScaleBehavior: this.Pu });
  }
  detachPrimitive(t) {
    this.ae._l(t), t.detached && t.detached(), this.ae.Qt().ka();
  }
  getPane() {
    const t = this.ae, i = u(this.ae.Qt().Ks(t));
    return this.Xg(i);
  }
  moveToPane(t) {
    this.ae.Qt().rf(this.ae, t);
  }
  seriesOrder() {
    const t = this.ae.Qt().Ks(this.ae);
    return null === t ? -1 : t.Y_().indexOf(this.ae);
  }
  setSeriesOrder(t) {
    const i = this.ae.Qt().Ks(this.ae);
    null !== i && i.vu(this.ae, t);
  }
  Qg(t) {
    this.Kg.v() && this.Kg.p(t);
  }
}
class se {
  constructor(t, i, n) {
    this.nb = new d(), this.Qu = new d(), this.Nw = new d(), this.sn = t, this.ia = t.Et(), this.vM = i, this.ia.Zc().i(this.sb.bind(this)), this.ia.Xc().i(this.eb.bind(this)), this.vM.qw().i(this.rb.bind(this)), this.Pu = n;
  }
  m() {
    this.ia.Zc().u(this), this.ia.Xc().u(this), this.vM.qw().u(this), this.nb.m(), this.Qu.m(), this.Nw.m();
  }
  scrollPosition() {
    return this.ia.Oc();
  }
  scrollToPosition(t, i) {
    i ? this.ia.Yc(t, 1e3) : this.sn.gs(t);
  }
  scrollToRealTime() {
    this.ia.qc();
  }
  getVisibleRange() {
    const t = this.ia.xc();
    return null === t ? null : { from: t.from.originalTime, to: t.to.originalTime };
  }
  setVisibleRange(t) {
    const i = { from: this.Pu.convertHorzItemToInternal(t.from), to: this.Pu.convertHorzItemToInternal(t.to) }, n = this.ia.kc(i);
    this.sn.sf(n);
  }
  getVisibleLogicalRange() {
    const t = this.ia.Sc();
    return null === t ? null : { from: t.Na(), to: t.bi() };
  }
  setVisibleLogicalRange(t) {
    o(t.from <= t.to, "The from index cannot be after the to index."), this.sn.sf(t);
  }
  resetTimeScale() {
    this.sn.ws();
  }
  fitContent() {
    this.sn.td();
  }
  logicalToCoordinate(t) {
    const i = this.sn.Et();
    return i.Zi() ? null : i.jt(t);
  }
  coordinateToLogical(t) {
    return this.ia.Zi() ? null : this.ia.Vc(t);
  }
  timeToIndex(t, i) {
    const n = this.Pu.convertHorzItemToInternal(t);
    return this.ia.Mc(n, i);
  }
  timeToCoordinate(t) {
    const i = this.timeToIndex(t, false);
    return null === i ? null : this.ia.jt(i);
  }
  coordinateToTime(t) {
    const i = this.sn.Et(), n = i.Vc(t), s = i.en(n);
    return null === s ? null : s.originalTime;
  }
  width() {
    return this.vM.pv().width;
  }
  height() {
    return this.vM.pv().height;
  }
  subscribeVisibleTimeRangeChange(t) {
    this.nb.i(t);
  }
  unsubscribeVisibleTimeRangeChange(t) {
    this.nb._(t);
  }
  subscribeVisibleLogicalRangeChange(t) {
    this.Qu.i(t);
  }
  unsubscribeVisibleLogicalRangeChange(t) {
    this.Qu._(t);
  }
  subscribeSizeChange(t) {
    this.Nw.i(t);
  }
  unsubscribeSizeChange(t) {
    this.Nw._(t);
  }
  applyOptions(t) {
    this.ia.vr(t);
  }
  options() {
    return { ...M(this.ia.N()), barSpacing: this.ia.ml() };
  }
  sb() {
    this.nb.v() && this.nb.p(this.getVisibleRange());
  }
  eb() {
    this.Qu.v() && this.Qu.p(this.getVisibleLogicalRange());
  }
  rb(t) {
    this.Nw.p(t.width, t.height);
  }
}
function ee(t) {
  return (function(t2) {
    if (w(t2.handleScale)) {
      const i2 = t2.handleScale;
      t2.handleScale = { axisDoubleClickReset: { time: i2, price: i2 }, axisPressedMouseMove: { time: i2, price: i2 }, mouseWheel: i2, pinch: i2 };
    } else if (void 0 !== t2.handleScale) {
      const { axisPressedMouseMove: i2, axisDoubleClickReset: n } = t2.handleScale;
      w(i2) && (t2.handleScale.axisPressedMouseMove = { time: i2, price: i2 }), w(n) && (t2.handleScale.axisDoubleClickReset = { time: n, price: n });
    }
    const i = t2.handleScroll;
    w(i) && (t2.handleScroll = { horzTouchDrag: i, vertTouchDrag: i, mouseWheel: i, pressedMouseMove: i });
  })(t), t;
}
class re {
  constructor(t, i, n) {
    this.hb = /* @__PURE__ */ new Map(), this.ab = /* @__PURE__ */ new Map(), this.lb = new d(), this.ob = new d(), this._b = new d(), this.dd = /* @__PURE__ */ new WeakMap(), this.ub = new fs(i);
    const s = void 0 === n ? M(Xs()) : f(M(Xs()), ee(n));
    this.cb = i, this.hv = new Xn(t, s, i), this.hv.mw().i(((t2) => {
      this.lb.v() && this.lb.p(this.fb(t2()));
    }), this), this.hv.ww().i(((t2) => {
      this.ob.v() && this.ob.p(this.fb(t2()));
    }), this), this.hv.Bd().i(((t2) => {
      this._b.v() && this._b.p(this.fb(t2()));
    }), this);
    const e2 = this.hv.Qt();
    this.pb = new se(e2, this.hv.bM(), this.cb);
  }
  remove() {
    this.hv.mw().u(this), this.hv.ww().u(this), this.hv.Bd().u(this), this.pb.m(), this.hv.m(), this.hb.clear(), this.ab.clear(), this.lb.m(), this.ob.m(), this._b.m(), this.ub.m();
  }
  resize(t, i, n) {
    this.autoSizeActive() || this.hv.wM(t, i, n);
  }
  addCustomSeries(t, i = {}, n = 0) {
    const s = ((t2) => ({ type: "Custom", isBuiltIn: false, defaultOptions: { ...As, ...t2.defaultOptions() }, mb: Ls, wb: t2 }))(c(t));
    return this.Mb(s, i, n);
  }
  addSeries(t, i = {}, n = 0) {
    return this.Mb(t, i, n);
  }
  removeSeries(t) {
    const i = _(this.hb.get(t)), n = this.ub.if(i);
    this.hv.Qt().if(i), this.gb(n), this.hb.delete(t), this.ab.delete(i);
  }
  Jg(t, i) {
    this.gb(this.ub.og(t, i));
  }
  tb(t, i, n) {
    this.gb(this.ub.pg(t, i, n));
  }
  ib(t, i) {
    const [n, s] = this.ub.wg(t, i);
    return 0 !== n.length && this.gb(s), n;
  }
  subscribeClick(t) {
    this.lb.i(t);
  }
  unsubscribeClick(t) {
    this.lb._(t);
  }
  subscribeCrosshairMove(t) {
    this._b.i(t);
  }
  unsubscribeCrosshairMove(t) {
    this._b._(t);
  }
  subscribeDblClick(t) {
    this.ob.i(t);
  }
  unsubscribeDblClick(t) {
    this.ob._(t);
  }
  priceScale(t, i = 0) {
    return new Js(this.hv, t, i);
  }
  timeScale() {
    return this.pb;
  }
  applyOptions(t) {
    this.hv.vr(ee(t));
  }
  options() {
    return this.hv.N();
  }
  takeScreenshot(t = false, i = false) {
    let n, s;
    try {
      i || (n = this.hv.Qt().N().crosshair.mode, this.hv.vr({ crosshair: { mode: 2 } })), s = this.hv.TM(t);
    } finally {
      i || void 0 === n || this.hv.Qt().vr({ crosshair: { mode: n } });
    }
    return s;
  }
  addPane(t = false) {
    const i = this.hv.Qt().uf();
    return i.j_(t), this.bb(i);
  }
  removePane(t) {
    this.hv.Qt().Ad(t);
  }
  swapPanes(t, i) {
    this.hv.Qt().zd(t, i);
  }
  autoSizeActive() {
    return this.hv.CM();
  }
  chartElement() {
    return this.hv.Mv();
  }
  panes() {
    return this.hv.Qt().Gn().map(((t) => this.bb(t)));
  }
  paneSize(t = 0) {
    const i = this.hv.AM(t);
    return { height: i.height, width: i.width };
  }
  setCrosshairPosition(t, i, n) {
    const s = this.hb.get(n);
    if (void 0 === s) return;
    const e2 = this.hv.Qt().Ks(s);
    null !== e2 && this.hv.Qt().Gd(t, i, e2);
  }
  clearCrosshairPosition() {
    this.hv.Qt().Zd(true);
  }
  horzBehaviour() {
    return this.cb;
  }
  Mb(t, i = {}, n = 0) {
    o(void 0 !== t.mb), (function(t2) {
      if (void 0 === t2 || "custom" === t2.type) return;
      const i2 = t2;
      void 0 !== i2.minMove && void 0 === i2.precision && (i2.precision = Yi(i2.minMove));
    })(i.priceFormat), "Candlestick" === t.type && (function(t2) {
      void 0 !== t2.borderColor && (t2.borderUpColor = t2.borderColor, t2.borderDownColor = t2.borderColor), void 0 !== t2.wickColor && (t2.wickUpColor = t2.wickColor, t2.wickDownColor = t2.wickColor);
    })(i);
    const s = f(M(e), M(t.defaultOptions), i), r2 = t.mb, h2 = new Jt(this.hv.Qt(), t.type, s, r2, t.wb);
    this.hv.Qt().Qd(h2, n);
    const a2 = new ne(h2, this, this, this, this.cb, ((t2) => this.bb(t2)));
    return this.hb.set(a2, h2), this.ab.set(h2, a2), a2;
  }
  gb(t) {
    const i = this.hv.Qt();
    for (const i2 of t.Y_.keys()) i2.Ia();
    i.Xd(t.Et.Dc, t.Et.Sg, t.Et.xg), t.Y_.forEach(((t2, i2) => i2.ht(t2.ue, t2.bg))), i.Et().dc(), i.Lc();
  }
  Sb(t) {
    return _(this.ab.get(t));
  }
  xb(t) {
    return void 0 !== t && this.ab.has(t) ? this.Sb(t) : void 0;
  }
  fb(t) {
    const i = /* @__PURE__ */ new Map();
    t.QM.forEach(((t2, n2) => {
      const s2 = n2.bh(), e2 = $s(s2)(t2);
      if ("Custom" !== s2) o(ts(e2));
      else {
        const t3 = n2.cl();
        o(!t3 || false === t3(e2));
      }
      i.set(this.Sb(n2), e2);
    }));
    const n = this.xb(t.jM), s = void 0 === t.YM ? void 0 : { type: t.YM.ds, sourceKind: t.YM.KM, objectKind: t.YM.GM, series: this.xb(t.YM.Y_), objectId: t.YM.ZM, paneIndex: t.YM.XM };
    return { time: t.Qr, logical: t.$n, point: t.JM, paneIndex: t.XM, hoveredInfo: s, hoveredSeries: n, hoveredObjectId: t.qM, seriesData: i, sourceEvent: t.tg };
  }
  bb(t) {
    let i = this.dd.get(t);
    return i || (i = new Qs(this.hv, ((t2) => this.Sb(t2)), t, this), this.dd.set(t, i)), i;
  }
}
function he(t) {
  if (m(t)) {
    const i = document.getElementById(t);
    return o(null !== i, `Cannot find element in DOM with id=${t}`), i;
  }
  return t;
}
function ae(t, i, n) {
  const s = he(t), e2 = new re(s, i, n);
  return i.setOptions(e2.options()), e2;
}
function le(t, i) {
  return ae(t, new cn(), cn.Tf(i));
}
function _e(t, i, n, s) {
  return Math.hypot(n - t, s - i);
}
function ue(t, i, n, s, e2, r2, h2, a2 = 0) {
  if (0 === i.length || s.from >= i.length || s.to <= 0) return;
  const { context: l2, horizontalPixelRatio: o2, verticalPixelRatio: _2 } = t, u2 = i[s.from];
  let c2 = r2(t, u2), d2 = u2;
  if (s.to - s.from < 2) {
    const i2 = e2 / 2;
    l2.beginPath();
    const n2 = { _t: u2._t - i2, ut: u2.ut }, s2 = { _t: u2._t + i2, ut: u2.ut };
    l2.moveTo(n2._t * o2, n2.ut * _2), l2.lineTo(s2._t * o2, s2.ut * _2), h2(t, c2, n2, s2);
  } else {
    const e3 = a2 > 0;
    let f2 = 0;
    const p2 = (i2, n2) => {
      if (h2(t, c2, d2, n2), l2.beginPath(), c2 = i2, d2 = n2, e3) {
        const t2 = f2 % a2;
        l2.lineDashOffset = t2, f2 = t2;
      }
    };
    let v2 = d2;
    l2.beginPath(), l2.moveTo(u2._t * o2, u2.ut * _2);
    for (let h3 = s.from + 1; h3 < s.to; ++h3) {
      v2 = i[h3];
      const s2 = v2._t * o2, a3 = v2.ut * _2, u3 = r2(t, v2);
      switch (n) {
        case 0:
          if (l2.lineTo(s2, a3), e3) {
            const t2 = i[h3 - 1], n2 = t2._t * o2, e4 = t2.ut * _2;
            f2 += _e(n2, e4, s2, a3);
          }
          break;
        case 1: {
          const t2 = i[h3 - 1], n2 = t2.ut * _2;
          l2.lineTo(s2, n2), e3 && (f2 += Math.abs(v2._t - t2._t) * o2), u3 !== c2 && (p2(u3, v2), l2.lineTo(s2, n2)), l2.lineTo(s2, a3), e3 && (f2 += Math.abs(v2.ut - t2.ut) * _2);
          break;
        }
        case 2: {
          const [t2, n2] = pe(i, h3 - 1, h3), r3 = t2._t * o2, u4 = t2.ut * _2, c3 = n2._t * o2, d3 = n2.ut * _2;
          if (l2.bezierCurveTo(r3, u4, c3, d3, s2, a3), e3) {
            const t3 = i[h3 - 1], n3 = t3._t * o2, e4 = t3.ut * _2, l3 = _e(n3, e4, s2, a3), p3 = _e(n3, e4, r3, u4) + _e(r3, u4, c3, d3) + _e(c3, d3, s2, a3);
            f2 += (l3 + p3) / 2;
          }
          break;
        }
      }
      1 !== n && u3 !== c2 && (p2(u3, v2), l2.moveTo(s2, a3));
    }
    (d2 !== v2 || d2 === v2 && 1 === n) && h2(t, c2, d2, v2), e3 && (l2.lineDashOffset = 0);
  }
}
const ce = 6;
function de(t, i) {
  return { _t: t._t - i._t, ut: t.ut - i.ut };
}
function fe(t, i) {
  return { _t: t._t / i, ut: t.ut / i };
}
function pe(t, i, n) {
  const s = Math.max(0, i - 1), e2 = Math.min(t.length - 1, n + 1);
  var r2, h2;
  return [(r2 = t[i], h2 = fe(de(t[n], t[s]), ce), { _t: r2._t + h2._t, ut: r2.ut + h2.ut }), de(t[n], fe(de(t[e2], t[i]), ce))];
}
function ve(t, i) {
  const n = t.context;
  n.strokeStyle = i, n.stroke();
}
class me extends R {
  constructor() {
    super(...arguments), this.rt = null;
  }
  ht(t) {
    this.rt = t;
  }
  et(t) {
    if (null === this.rt) return;
    const { ot: i, lt: n, Cb: s, yb: e2, ct: r2, Gt: h2, Pb: l2 } = this.rt;
    if (null === n) return;
    const o2 = t.context;
    o2.lineCap = "butt", o2.lineWidth = r2 * t.verticalPixelRatio;
    const _2 = a(o2, h2);
    o2.lineJoin = "round";
    const u2 = this.kb.bind(this), c2 = (function(t2) {
      return t2.reduce(((t3, i2) => t3 + i2), 0);
    })(_2);
    void 0 !== e2 && ue(t, i, e2, n, s, u2, ve, c2), l2 && (function(t2, i2, n2, s2, e3) {
      if (s2.to - s2.from <= 0) return;
      const { horizontalPixelRatio: r3, verticalPixelRatio: h3, context: a2 } = t2;
      let l3 = null;
      const o3 = Math.max(1, Math.floor(r3)) % 2 / 2, _3 = n2 * h3 + o3;
      for (let n3 = s2.to - 1; n3 >= s2.from; --n3) {
        const s3 = i2[n3];
        if (s3) {
          const i3 = e3(t2, s3);
          i3 !== l3 && (null !== l3 && a2.fill(), a2.beginPath(), a2.fillStyle = i3, l3 = i3);
          const n4 = Math.round(s3._t * r3) + o3, u3 = s3.ut * h3;
          a2.moveTo(n4, u3), a2.arc(n4, u3, _3, 0, 2 * Math.PI);
        }
      }
      a2.fill();
    })(t, i, l2, n, u2);
  }
}
class we extends me {
  kb(t, i) {
    return i.vt;
  }
}
function Me(t, i, n, s, e2) {
  const r2 = 1 - e2;
  return r2 * r2 * r2 * t + 3 * r2 * r2 * e2 * i + 3 * r2 * e2 * e2 * n + e2 * e2 * e2 * s;
}
function ge(t, i, n, s, e2) {
  if (2 === n) {
    const [n2, r2] = pe(s, e2 - 1, e2);
    return [Math.min(t._t, i._t, n2._t, r2._t), Math.max(t._t, i._t, n2._t, r2._t)];
  }
  return [Math.min(t._t, i._t), Math.max(t._t, i._t)];
}
function be(t, i, n, s, e2, r2, h2, a2) {
  switch (e2) {
    case 1: {
      const e3 = Ss(t, i, n._t, n.ut, s._t, n.ut), r3 = Ss(t, i, s._t, n.ut, s._t, s.ut), h3 = Math.min(e3, r3);
      return h3 <= a2 ? h3 : null;
    }
    case 2: {
      const [e3, l2] = pe(r2, h2 - 1, h2), o2 = (function(t2, i2, n2) {
        let s2 = Number.POSITIVE_INFINITY, e4 = n2[0];
        for (let r3 = 1; r3 <= 12; r3++) {
          const h3 = r3 / 12, a3 = { _t: Me(n2[0]._t, n2[1]._t, n2[2]._t, n2[3]._t, h3), ut: Me(n2[0].ut, n2[1].ut, n2[2].ut, n2[3].ut, h3) };
          s2 = Math.min(s2, Ss(t2, i2, e4._t, e4.ut, a3._t, a3.ut)), e4 = a3;
        }
        return s2;
      })(t, i, [n, e3, l2, s]);
      return o2 <= a2 ? o2 : null;
    }
    default: {
      const e3 = Ss(t, i, n._t, n.ut, s._t, s.ut);
      return e3 <= a2 ? e3 : null;
    }
  }
}
class Se extends Ds {
  constructor(t, i) {
    super(t, i, true);
  }
  Og(t, i, n) {
    i.Ic(this.kg, b(this.Tg)), t.Jo(this.kg, n, b(this.Tg));
  }
  Tb(t, i) {
    return { wt: t, Mt: i, _t: NaN, ut: NaN };
  }
  Lg() {
    const t = this.ae.Sa();
    this.kg = this.ae.Ua().Bh().map(((i) => {
      let n;
      if ((i.Gr ?? 1) > 1) {
        const t2 = i.Wt[1], s = i.Wt[2], e2 = i.Wt[3];
        n = Math.abs(t2 - e2) > Math.abs(s - e2) ? t2 : s;
      } else n = i.Wt[3];
      return this.Rb(i.$n, n, t);
    }));
  }
}
class xe extends Se {
  Bg(t, i) {
    const n = this.ae.N();
    return (function(t2, i2, n2, s, e2, r2, h2, a2 = 0, l2 = 0) {
      if (null === i2 || i2.from >= i2.to || 0 === t2.length) return null;
      const o2 = Math.max(r2 / 2, h2 ?? 0) + l2;
      let _2 = Number.POSITIVE_INFINITY;
      if (void 0 !== h2) {
        const e3 = h2 + l2, r3 = ws(t2, n2 - e3, i2.from, i2.to), a3 = Ms(t2, n2 + e3, r3, i2.to);
        for (let i3 = r3; i3 < a3; i3++) {
          const e4 = t2[i3];
          if (!bs(n2, e4._t, e4._t, h2 + l2)) continue;
          const r4 = Math.hypot(n2 - e4._t, s - e4.ut);
          r4 <= h2 + l2 && (_2 = Math.min(_2, r4));
        }
      }
      if (i2.to - i2.from < 2) {
        const e3 = t2[i2.from], r3 = Math.max(a2 / 2, o2), h3 = Ss(n2, s, e3._t - r3, e3.ut, e3._t + r3, e3.ut);
        return h3 <= o2 && (_2 = Math.min(_2, h3)), Number.isFinite(_2) ? gs(_2, 2, "series-point") : null;
      }
      let u2 = Number.POSITIVE_INFINITY;
      const c2 = ws(t2, n2 - o2, i2.from, i2.to), d2 = Ms(t2, n2 + o2, c2, i2.to), f2 = Math.max(i2.from + 1, c2), p2 = Math.min(i2.to, d2 + 1);
      for (let i3 = f2; i3 < p2; i3++) {
        const r3 = t2[i3 - 1], h3 = t2[i3], [a3, l3] = ge(r3, h3, e2, t2, i3);
        if (!bs(n2, a3, l3, o2)) continue;
        const _3 = be(n2, s, r3, h3, e2, t2, i3, o2);
        null !== _3 && (u2 = Math.min(u2, _3));
      }
      return Number.isFinite(_2) ? gs(_2, 2, "series-point") : Number.isFinite(u2) ? gs(u2, 1, "series-line") : null;
    })(this.kg, this.Tg, t, i, n.lineType, n.lineVisible ? n.lineWidth : 1, n.pointMarkersVisible ? n.pointMarkersRadius || n.lineWidth / 2 + 2 : void 0, this.le.Et().ml(), n.hitTestTolerance);
  }
}
class Ce extends xe {
  constructor() {
    super(...arguments), this.Vg = new we();
  }
  Rb(t, i, n) {
    return { ...this.Tb(t, i), ...n.Sh(t) };
  }
  Ng() {
    const t = this.ae.N(), i = { ot: this.kg, Gt: t.lineStyle, yb: t.lineVisible ? t.lineType : void 0, ct: t.lineWidth, Pb: t.pointMarkersVisible ? t.pointMarkersRadius || t.lineWidth / 2 + 2 : void 0, lt: this.Tg, Cb: this.le.Et().ml() };
    this.Vg.ht(i);
  }
}
const ye = { type: "Line", isBuiltIn: true, defaultOptions: { color: "#2196f3", lineStyle: 0, lineWidth: 3, lineType: 0, lineVisible: true, crosshairMarkerVisible: true, crosshairMarkerRadius: 4, crosshairMarkerBorderColor: "", crosshairMarkerBorderWidth: 2, crosshairMarkerBackgroundColor: "", lastPriceAnimation: 0, pointMarkersVisible: false }, mb: (t, i) => new Ce(t, i) };
class Ke extends Ds {
  constructor(t, i) {
    super(t, i, false);
  }
  Bg(t, i) {
    return Ps(this.kg, this.Tg, t, i, this.le.Et().ml(), this.ae.N().hitTestTolerance, ((t2, i2) => {
      i2[0] = t2.n_, i2[1] = t2.s_;
    }));
  }
  Og(t, i, n) {
    i.Ic(this.kg, b(this.Tg)), t.t_(this.kg, n, b(this.Tg));
  }
  fS(t, i, n) {
    return { wt: t, jr: i.Wt[0], qr: i.Wt[1], Yr: i.Wt[2], Kr: i.Wt[3], _t: NaN, i_: NaN, n_: NaN, s_: NaN, e_: NaN };
  }
  Lg() {
    const t = this.ae.Sa();
    this.kg = this.ae.Ua().Bh().map(((i) => this.Rb(i.$n, i, t)));
  }
}
class Xe extends R {
  constructor() {
    super(...arguments), this.qt = null, this.oS = 0;
  }
  ht(t) {
    this.qt = t;
  }
  et(t) {
    if (null === this.qt || 0 === this.qt.Un.length || null === this.qt.lt) return;
    const { horizontalPixelRatio: i } = t;
    if (this.oS = (function(t2, i2) {
      if (t2 >= 2.5 && t2 <= 4) return Math.floor(3 * i2);
      const n2 = 1 - 0.2 * Math.atan(Math.max(4, t2) - 4) / (0.5 * Math.PI), s2 = Math.floor(t2 * n2 * i2), e2 = Math.floor(t2 * i2), r2 = Math.min(s2, e2);
      return Math.max(Math.floor(i2), r2);
    })(this.qt.ml, i), this.oS >= 2) {
      Math.floor(i) % 2 != this.oS % 2 && this.oS--;
    }
    const n = this.qt.Un;
    this.qt.pS && this.vS(t, n, this.qt.lt), this.qt.gi && this.Vm(t, n, this.qt.lt);
    const s = this.mS(i);
    (!this.qt.gi || this.oS > 2 * s) && this.wS(t, n, this.qt.lt);
  }
  vS(t, i, n) {
    if (null === this.qt) return;
    const { context: s, horizontalPixelRatio: e2, verticalPixelRatio: r2 } = t;
    let h2 = "", a2 = Math.min(Math.floor(e2), Math.floor(this.qt.ml * e2));
    a2 = Math.max(Math.floor(e2), Math.min(a2, this.oS));
    const l2 = Math.floor(0.5 * a2);
    let o2 = null;
    for (let t2 = n.from; t2 < n.to; t2++) {
      const n2 = i[t2];
      n2.rh !== h2 && (s.fillStyle = n2.rh, h2 = n2.rh);
      const _2 = Math.round(Math.min(n2.i_, n2.e_) * r2), u2 = Math.round(Math.max(n2.i_, n2.e_) * r2), c2 = Math.round(n2.n_ * r2), d2 = Math.round(n2.s_ * r2);
      let f2 = Math.round(e2 * n2._t) - l2;
      const p2 = f2 + a2 - 1;
      null !== o2 && (f2 = Math.max(o2 + 1, f2), f2 = Math.min(f2, p2));
      const v2 = p2 - f2 + 1;
      s.fillRect(f2, c2, v2, _2 - c2), s.fillRect(f2, u2 + 1, v2, d2 - u2), o2 = p2;
    }
  }
  mS(t) {
    let i = Math.floor(1 * t);
    this.oS <= 2 * i && (i = Math.floor(0.5 * (this.oS - 1)));
    const n = Math.max(Math.floor(t), i);
    return this.oS <= 2 * n ? Math.max(Math.floor(t), Math.floor(1 * t)) : n;
  }
  Vm(t, i, n) {
    if (null === this.qt) return;
    const { context: s, horizontalPixelRatio: e2, verticalPixelRatio: r2 } = t;
    let h2 = "";
    const a2 = this.mS(e2);
    let l2 = null;
    for (let t2 = n.from; t2 < n.to; t2++) {
      const n2 = i[t2];
      n2.eh !== h2 && (s.fillStyle = n2.eh, h2 = n2.eh);
      let o2 = Math.round(n2._t * e2) - Math.floor(0.5 * this.oS);
      const _2 = o2 + this.oS - 1, u2 = Math.round(Math.min(n2.i_, n2.e_) * r2), c2 = Math.round(Math.max(n2.i_, n2.e_) * r2);
      if (null !== l2 && (o2 = Math.max(l2 + 1, o2), o2 = Math.min(o2, _2)), this.qt.ml * e2 > 2 * a2) L(s, o2, u2, _2 - o2 + 1, c2 - u2 + 1, a2);
      else {
        const t3 = _2 - o2 + 1;
        s.fillRect(o2, u2, t3, c2 - u2 + 1);
      }
      l2 = _2;
    }
  }
  wS(t, i, n) {
    if (null === this.qt) return;
    const { context: s, horizontalPixelRatio: e2, verticalPixelRatio: r2 } = t;
    let h2 = "";
    const a2 = this.mS(e2);
    for (let t2 = n.from; t2 < n.to; t2++) {
      const n2 = i[t2];
      let l2 = Math.round(Math.min(n2.i_, n2.e_) * r2), o2 = Math.round(Math.max(n2.i_, n2.e_) * r2), _2 = Math.round(n2._t * e2) - Math.floor(0.5 * this.oS), u2 = _2 + this.oS - 1;
      if (n2.sh !== h2) {
        const t3 = n2.sh;
        s.fillStyle = t3, h2 = t3;
      }
      this.qt.gi && (_2 += a2, l2 += a2, u2 -= a2, o2 -= a2), l2 > o2 || s.fillRect(_2, l2, u2 - _2 + 1, o2 - l2 + 1);
    }
  }
}
class Je extends Ke {
  constructor() {
    super(...arguments), this.Vg = new Xe();
  }
  Rb(t, i, n) {
    return { ...this.fS(t, i, n), ...n.Sh(t) };
  }
  Ng() {
    const t = this.ae.N();
    this.Vg.ht({ Un: this.kg, ml: this.le.Et().ml(), pS: t.wickVisible, gi: t.borderVisible, lt: this.Tg });
  }
}
const Qe = { type: "Candlestick", isBuiltIn: true, defaultOptions: { upColor: "#26a69a", downColor: "#ef5350", wickVisible: true, borderVisible: true, borderColor: "#378658", borderUpColor: "#26a69a", borderDownColor: "#ef5350", wickColor: "#737375", wickUpColor: "#26a69a", wickDownColor: "#ef5350" }, mb: (t, i) => new Je(t, i) };
class tr extends R {
  constructor() {
    super(...arguments), this.qt = null, this.MS = [];
  }
  ht(t) {
    this.qt = t, this.MS = [];
  }
  et({ context: t, horizontalPixelRatio: i, verticalPixelRatio: n }) {
    if (null === this.qt || 0 === this.qt.ot.length || null === this.qt.lt) return;
    this.MS.length || this.gS(i);
    const s = Math.max(1, Math.floor(n)), e2 = Math.round(this.qt.bS * n) - Math.floor(s / 2), r2 = e2 + s;
    for (let i2 = this.qt.lt.from; i2 < this.qt.lt.to; i2++) {
      const h2 = this.qt.ot[i2], a2 = this.MS[i2 - this.qt.lt.from], l2 = Math.round(h2.ut * n);
      let o2, _2;
      t.fillStyle = h2.sh, l2 <= e2 ? (o2 = l2, _2 = r2) : (o2 = e2, _2 = l2 - Math.floor(s / 2) + s), t.fillRect(a2.Na, o2, a2.bi - a2.Na + 1, _2 - o2);
    }
  }
  gS(t) {
    if (null === this.qt || 0 === this.qt.ot.length || null === this.qt.lt) return void (this.MS = []);
    const i = Math.ceil(this.qt.ml * t) <= 1 ? 0 : Math.max(1, Math.floor(t)), n = Math.round(this.qt.ml * t) - i;
    this.MS = new Array(this.qt.lt.to - this.qt.lt.from);
    for (let i2 = this.qt.lt.from; i2 < this.qt.lt.to; i2++) {
      const s2 = this.qt.ot[i2], e2 = Math.round(s2._t * t);
      let r2, h2;
      if (n % 2) {
        const t2 = (n - 1) / 2;
        r2 = e2 - t2, h2 = e2 + t2;
      } else {
        const t2 = n / 2;
        r2 = e2 - t2, h2 = e2 + t2 - 1;
      }
      this.MS[i2 - this.qt.lt.from] = { Na: r2, bi: h2, SS: e2, ce: s2._t * t, wt: s2.wt };
    }
    for (let t2 = this.qt.lt.from + 1; t2 < this.qt.lt.to; t2++) {
      const n2 = this.MS[t2 - this.qt.lt.from], s2 = this.MS[t2 - this.qt.lt.from - 1];
      n2.wt === s2.wt + 1 && (n2.Na - s2.bi !== i + 1 && (s2.SS > s2.ce ? s2.bi = n2.Na - i - 1 : n2.Na = s2.bi + i + 1));
    }
    let s = Math.ceil(this.qt.ml * t);
    for (let t2 = this.qt.lt.from; t2 < this.qt.lt.to; t2++) {
      const i2 = this.MS[t2 - this.qt.lt.from];
      i2.bi < i2.Na && (i2.bi = i2.Na);
      const n2 = i2.bi - i2.Na + 1;
      s = Math.min(n2, s);
    }
    if (i > 0 && s < 4) for (let t2 = this.qt.lt.from; t2 < this.qt.lt.to; t2++) {
      const i2 = this.MS[t2 - this.qt.lt.from];
      i2.bi - i2.Na + 1 > s && (i2.SS > i2.ce ? i2.bi -= 1 : i2.Na += 1);
    }
  }
}
class ir extends Se {
  constructor() {
    super(...arguments), this.Vg = new tr();
  }
  Bg(t, i) {
    const n = this.ae.Ft().Nt(this.ae.N().base, u(this.ae.Lt()).Wt);
    return null === n ? null : Ps(this.kg, this.Tg, t, i, this.le.Et().ml(), this.ae.N().hitTestTolerance, ((t2, i2) => {
      i2[0] = t2.ut, i2[1] = n;
    }));
  }
  Rb(t, i, n) {
    return { ...this.Tb(t, i), ...n.Sh(t) };
  }
  Ng() {
    const t = { ot: this.kg, ml: this.le.Et().ml(), lt: this.Tg, bS: this.ae.Ft().Nt(this.ae.N().base, u(this.ae.Lt()).Wt) };
    this.Vg.ht(t);
  }
}
const nr = { type: "Histogram", isBuiltIn: true, defaultOptions: { color: "#26a69a", base: 0 }, mb: (t, i) => new ir(t, i) };
class br {
  constructor(t, i) {
    this.ae = t, this.Jh = i, this.CS();
  }
  detach() {
    this.ae.detachPrimitive(this.Jh);
  }
  getSeries() {
    return this.ae;
  }
  applyOptions(t) {
    this.Jh && this.Jh.vr && this.Jh.vr(t);
  }
  CS() {
    this.ae.attachPrimitive(this.Jh);
  }
}
const Sr = { autoScale: true, zOrder: "normal" };
function xr(t, i) {
  return ei(Math.min(Math.max(t, 12), 30) * i);
}
function Cr(t, i) {
  const n = "circle" === t ? 0.8 : "square" === t ? 0.7 : 1;
  return ei(Math.max(i, 12) * n);
}
function yr(t) {
  return (function(t2) {
    const i = Math.ceil(t2);
    return i % 2 != 0 ? i - 1 : i;
  })(xr(t, 1));
}
function Pr(t) {
  return Math.max(xr(t, 0.1), 3);
}
function kr(t, i, n) {
  return i ? t : n ? Math.ceil(t / 2) : 0;
}
function Tr(t, i, n, s) {
  const e2 = (Cr("arrowUp", s) - 1) / 2 * n.YS, r2 = (ei(s / 2) - 1) / 2 * n.YS;
  i.beginPath(), t ? (i.moveTo(n._t - e2, n.ut), i.lineTo(n._t, n.ut - e2), i.lineTo(n._t + e2, n.ut), i.lineTo(n._t + r2, n.ut), i.lineTo(n._t + r2, n.ut + e2), i.lineTo(n._t - r2, n.ut + e2), i.lineTo(n._t - r2, n.ut)) : (i.moveTo(n._t - e2, n.ut), i.lineTo(n._t, n.ut + e2), i.lineTo(n._t + e2, n.ut), i.lineTo(n._t + r2, n.ut), i.lineTo(n._t + r2, n.ut - e2), i.lineTo(n._t - r2, n.ut - e2), i.lineTo(n._t - r2, n.ut)), i.fill();
}
function Rr(t, i, n, s, e2, r2) {
  const h2 = (Cr("arrowUp", s) - 1) / 2, a2 = (ei(s / 2) - 1) / 2;
  if (e2 >= i - a2 - 2 && e2 <= i + a2 + 2 && r2 >= (t ? n : n - h2) - 2 && r2 <= (t ? n + h2 : n) + 2) return true;
  return (() => {
    if (e2 < i - h2 - 3 || e2 > i + h2 + 3 || r2 < (t ? n - h2 - 3 : n) || r2 > (t ? n : n + h2 + 3)) return false;
    const s2 = Math.abs(e2 - i);
    return Math.abs(r2 - n) + 3 >= s2 / 2;
  })();
}
class Dr {
  constructor() {
    this.qt = null, this.$s = new rt(), this.F = -1, this.W = "", this.hm = "", this.KS = "normal";
  }
  ht(t) {
    this.qt = t;
  }
  js(t, i, n) {
    this.F === t && this.W === i || (this.F = t, this.W = i, this.hm = x(t, i), this.$s.Os()), this.KS = n;
  }
  Qs(t, i) {
    if (null === this.qt || null === this.qt.lt) return null;
    for (let n = this.qt.lt.from; n < this.qt.lt.to; n++) {
      const s = this.qt.ot[n];
      if (s && Vr(s, t, i)) return { zOrder: "normal", externalId: s.te ?? "", itemType: "marker" };
    }
    return null;
  }
  draw(t) {
    "aboveSeries" !== this.KS && t.useBitmapCoordinateSpace(((t2) => {
      this.et(t2);
    }));
  }
  drawBackground(t) {
    "aboveSeries" === this.KS && t.useBitmapCoordinateSpace(((t2) => {
      this.et(t2);
    }));
  }
  et({ context: t, horizontalPixelRatio: i, verticalPixelRatio: n }) {
    if (null !== this.qt && null !== this.qt.lt) {
      t.textBaseline = "middle", t.font = this.hm;
      for (let s = this.qt.lt.from; s < this.qt.lt.to; s++) {
        const e2 = this.qt.ot[s];
        void 0 !== e2.ri && (e2.ri.nn = this.$s.Ii(t, e2.ri.GS), e2.ri.$t = this.F, e2.ri._t = e2._t - e2.ri.nn / 2), Ir(e2, t, i, n);
      }
    }
  }
}
function Ir(t, i, n, s) {
  i.fillStyle = t.R, void 0 !== t.ri && (function(t2, i2, n2, s2, e2, r2) {
    t2.save(), t2.scale(e2, r2), t2.fillText(i2, n2, s2), t2.restore();
  })(i, t.ri.GS, t.ri._t, t.ri.ut, n, s), (function(t2, i2, n2) {
    if (0 === t2.Th) return;
    switch (t2.ZS) {
      case "arrowDown":
        return void Tr(false, i2, n2, t2.Th);
      case "arrowUp":
        return void Tr(true, i2, n2, t2.Th);
      case "circle":
        return void (function(t3, i3, n3) {
          const s2 = (Cr("circle", n3) - 1) / 2;
          t3.beginPath(), t3.arc(i3._t, i3.ut, s2 * i3.YS, 0, 2 * Math.PI, false), t3.fill();
        })(i2, n2, t2.Th);
      case "square":
        return void (function(t3, i3, n3) {
          const s2 = Cr("square", n3), e2 = (s2 - 1) * i3.YS / 2, r2 = i3._t - e2, h2 = i3.ut - e2;
          t3.fillRect(r2, h2, s2 * i3.YS, s2 * i3.YS);
        })(i2, n2, t2.Th);
    }
    t2.ZS;
  })(t, i, (function(t2, i2, n2) {
    const s2 = Math.max(1, Math.floor(i2)) % 2 / 2;
    return { _t: Math.round(t2._t * i2) + s2, ut: t2.ut * n2, YS: i2 };
  })(t, n, s));
}
function Vr(t, i, n) {
  return !(void 0 === t.ri || !(function(t2, i2, n2, s, e2, r2) {
    const h2 = s / 2;
    return e2 >= t2 && e2 <= t2 + n2 && r2 >= i2 - h2 && r2 <= i2 + h2;
  })(t.ri._t, t.ri.ut, t.ri.nn, t.ri.$t, i, n)) || (function(t2, i2, n2) {
    if (0 === t2.Th) return false;
    switch (t2.ZS) {
      case "arrowDown":
        return Rr(true, t2._t, t2.ut, t2.Th, i2, n2);
      case "arrowUp":
        return Rr(false, t2._t, t2.ut, t2.Th, i2, n2);
      case "circle":
        return (function(t3, i3, n3, s, e2) {
          const r2 = 2 + Cr("circle", n3) / 2, h2 = t3 - s, a2 = i3 - e2;
          return Math.sqrt(h2 * h2 + a2 * a2) <= r2;
        })(t2._t, t2.ut, t2.Th, i2, n2);
      case "square":
        return (function(t3, i3, n3, s, e2) {
          const r2 = Cr("square", n3), h2 = (r2 - 1) / 2, a2 = t3 - h2, l2 = i3 - h2;
          return s >= a2 && s <= a2 + r2 && e2 >= l2 && e2 <= l2 + r2;
        })(t2._t, t2.ut, t2.Th, i2, n2);
    }
  })(t, i, n);
}
function Br(t) {
  return "atPriceTop" === t || "atPriceBottom" === t || "atPriceMiddle" === t;
}
function Er(t, i, n, s, e2, r2, h2, a2) {
  const l2 = (function(t2, i2, n2) {
    if (Br(i2.position) && void 0 !== i2.price) return i2.price;
    if ("value" in (s2 = t2) && "number" == typeof s2.value) return t2.value;
    var s2;
    if ((function(t3) {
      return "open" in t3 && "high" in t3 && "low" in t3 && "close" in t3;
    })(t2)) {
      if ("inBar" === i2.position) return t2.close;
      if ("aboveBar" === i2.position) return n2 ? t2.low : t2.high;
      if ("belowBar" === i2.position) return n2 ? t2.high : t2.low;
    }
  })(n, i, h2.priceScale().options().invertScale);
  if (void 0 === l2) return;
  const o2 = Br(i.position), _2 = a2.timeScale(), c2 = p(i.size) ? Math.max(i.size, 0) : 1, d2 = yr(_2.options().barSpacing) * c2, f2 = d2 / 2;
  t.Th = d2;
  switch (i.position) {
    case "inBar":
    case "atPriceMiddle":
      return t.ut = u(h2.priceToCoordinate(l2)), void (void 0 !== t.ri && (t.ri.ut = t.ut + f2 + r2 + 0.6 * e2));
    case "aboveBar":
    case "atPriceTop": {
      const i2 = o2 ? 0 : s.XS;
      return t.ut = u(h2.priceToCoordinate(l2)) - f2 - i2, void 0 !== t.ri && (t.ri.ut = t.ut - f2 - 0.6 * e2, s.XS += 1.2 * e2), void (o2 || (s.XS += d2 + r2));
    }
    case "belowBar":
    case "atPriceBottom": {
      const i2 = o2 ? 0 : s.JS;
      return t.ut = u(h2.priceToCoordinate(l2)) + f2 + i2, void 0 !== t.ri && (t.ri.ut = t.ut + f2 + r2 + 0.6 * e2, s.JS += 1.2 * e2), void (o2 || (s.JS += d2 + r2));
    }
  }
}
class Ar {
  constructor(t, i, n) {
    this.QS = [], this.xt = true, this.tx = true, this.Xt = new Dr(), this.Te = t, this.Gv = i, this.qt = { ot: [], lt: null }, this.yn = n;
  }
  renderer() {
    if (!this.Te.options().visible) return null;
    this.xt && this.Ig();
    const t = this.Gv.options().layout;
    return this.Xt.js(t.fontSize, t.fontFamily, this.yn.zOrder), this.Xt.ht(this.qt), this.Xt;
  }
  ix(t) {
    this.QS = t, this.Pt("data");
  }
  Pt(t) {
    this.xt = true, "data" === t && (this.tx = true);
  }
  nx(t) {
    this.xt = true, this.yn = t;
  }
  zOrder() {
    return "aboveSeries" === this.yn.zOrder ? "top" : this.yn.zOrder;
  }
  Ig() {
    const t = this.Gv.timeScale(), i = this.QS;
    this.tx && (this.qt.ot = i.map(((t2) => ({ wt: t2.time, _t: 0, ut: 0, Th: 0, ZS: t2.shape, R: t2.color, te: t2.id, sx: t2.sx, ri: void 0 }))), this.tx = false);
    const n = this.Gv.options().layout;
    this.qt.lt = null;
    const s = t.getVisibleLogicalRange();
    if (null === s) return;
    const e2 = new Ai(Math.floor(s.from), Math.ceil(s.to));
    if (null === this.Te.dataByIndex(0, 1)) return;
    if (0 === this.qt.ot.length) return;
    let r2 = NaN;
    const h2 = Pr(t.options().barSpacing), a2 = { XS: h2, JS: h2 };
    this.qt.lt = Rs(this.qt.ot, e2, true);
    for (let s2 = this.qt.lt.from; s2 < this.qt.lt.to; s2++) {
      const e3 = i[s2];
      e3.time !== r2 && (a2.XS = h2, a2.JS = h2, r2 = e3.time);
      const l2 = this.qt.ot[s2];
      l2._t = u(t.logicalToCoordinate(e3.time)), void 0 !== e3.text && e3.text.length > 0 && (l2.ri = { GS: e3.text, _t: 0, ut: 0, nn: 0, $t: 0 });
      const o2 = this.Te.dataByIndex(e3.time, 0);
      null !== o2 && Er(l2, e3, o2, a2, n.fontSize, h2, this.Te, this.Gv);
    }
    this.xt = false;
  }
}
function Lr(t) {
  return { ...Sr, ...t };
}
class zr {
  constructor(t) {
    this.Yh = null, this.QS = [], this.hx = [], this.lx = null, this.Te = null, this.Gv = null, this.ox = true, this._x = null, this.ux = null, this.vx = null, this.mx = true, this.yn = Lr(t);
  }
  attached(t) {
    this.wx(), this.Gv = t.chart, this.Te = t.series, this.Yh = new Ar(this.Te, u(this.Gv), this.yn), this.jS = t.requestUpdate, this.Te.subscribeDataChanged(((t2) => this.Qg(t2))), this.mx = true, this.DS();
  }
  DS() {
    this.jS && this.jS();
  }
  detached() {
    this.Te && this.lx && this.Te.unsubscribeDataChanged(this.lx), this.Gv = null, this.Te = null, this.Yh = null, this.lx = null;
  }
  ix(t) {
    this.mx = true, this.QS = t, this.wx(), this.ox = true, this.ux = null, this.DS();
  }
  Mx() {
    return this.QS;
  }
  paneViews() {
    return this.Yh ? [this.Yh] : [];
  }
  updateAllViews() {
    this.gx();
  }
  hitTest(t, i) {
    return this.Yh ? this.Yh.renderer()?.Qs(t, i) ?? null : null;
  }
  autoscaleInfo(t, i) {
    if (this.yn.autoScale && this.Yh) {
      const t2 = this.bx();
      if (t2) return { priceRange: null, margins: t2 };
    }
    return null;
  }
  vr(t) {
    this.yn = Lr({ ...this.yn, ...t }), this.DS && this.DS();
  }
  bx() {
    const t = u(this.Gv).timeScale().options().barSpacing;
    if (this.ox || t !== this.vx) {
      if (this.vx = t, this.QS.length > 0) {
        const i = Pr(t), n = 1.5 * yr(t) + 2 * i, s = this.Sx();
        this._x = { above: kr(n, s.aboveBar, s.inBar), below: kr(n, s.belowBar, s.inBar) };
      } else this._x = null;
      this.ox = false;
    }
    return this._x;
  }
  Sx() {
    return null === this.ux && (this.ux = this.QS.reduce(((t, i) => (t[i.position] || (t[i.position] = true), t)), { inBar: false, aboveBar: false, belowBar: false, atPriceTop: false, atPriceBottom: false, atPriceMiddle: false })), this.ux;
  }
  wx() {
    if (!this.mx || !this.Gv || !this.Te) return;
    const t = this.Gv.timeScale(), i = this.Te?.data();
    if (null == t.getVisibleLogicalRange() || !this.Te || 0 === i.length) return void (this.hx = []);
    const n = t.timeToIndex(u(i[0].time), true);
    this.hx = this.QS.map(((i2, s) => {
      const e2 = t.timeToIndex(i2.time, true), r2 = e2 < n ? 1 : -1, h2 = u(this.Te).dataByIndex(e2, r2), a2 = { time: t.timeToIndex(u(h2).time, false), position: i2.position, shape: i2.shape, color: i2.color, id: i2.id, sx: s, text: i2.text, size: i2.size, price: i2.price, Qr: i2.time };
      if ("atPriceTop" === i2.position || "atPriceBottom" === i2.position || "atPriceMiddle" === i2.position) {
        if (void 0 === i2.price) throw new Error(`Price is required for position ${i2.position}`);
        return { ...a2, position: i2.position, price: i2.price };
      }
      return { ...a2, position: i2.position, price: i2.price };
    })), this.mx = false;
  }
  gx(t) {
    this.Yh && (this.wx(), this.Yh.ix(this.hx), this.Yh.nx(this.yn), this.Yh.Pt(t));
  }
  Qg(t) {
    this.mx = true, this.DS();
  }
}
class Or extends br {
  constructor(t, i, n) {
    super(t, i), n && this.setMarkers(n);
  }
  setMarkers(t) {
    this.Jh.ix(t);
  }
  markers() {
    return this.Jh.Mx();
  }
}
function Nr(t, i, n) {
  const s = new Or(t, new zr({}));
  return i && s.setMarkers(i), s;
}
({ ...e });
const INTERVALS = ["1m", "5m", "15m", "30m", "1h", "4h", "1d", "1w"];
const ANALYSIS_FRAMES = ["15m", "1h", "4h", "1d"];
const COLORS = {
  up: "#28D7A4",
  down: "#FF5470",
  warn: "#FFB547",
  mute: "#7A8BA3",
  grid: "#152033"
};
function presetProvider(kind, id2) {
  if (kind === "openai") {
    return {
      id: "openai",
      kind,
      name: "OpenAI",
      baseUrl: "https://api.openai.com/v1",
      apiStyle: "responses",
      enabled: true,
      models: [],
      defaultModel: "",
      timeoutMs: 9e4,
      maxOutputTokens: 3e3,
      reasoning: "low",
      structured: "json_schema",
      allowLocalHttp: false
    };
  }
  if (kind === "deepseek") {
    return {
      id: "deepseek",
      kind,
      name: "DeepSeek",
      baseUrl: "https://api.deepseek.com",
      apiStyle: "chat",
      enabled: true,
      models: [
        { id: "deepseek-flash", enabled: true },
        { id: "deepseek-v4-pro", enabled: true }
      ],
      defaultModel: "deepseek-flash",
      timeoutMs: 12e4,
      maxOutputTokens: 3e3,
      reasoning: "off",
      structured: "json_object",
      allowLocalHttp: false
    };
  }
  return {
    id: `custom-${Date.now().toString(36)}`,
    kind: "openai_compatible",
    name: "自定义 OpenAI 兼容",
    baseUrl: "https://",
    apiStyle: "chat",
    enabled: true,
    models: [],
    defaultModel: "",
    timeoutMs: 9e4,
    maxOutputTokens: 3e3,
    reasoning: "off",
    structured: "json_object",
    allowLocalHttp: false
  };
}
({
  providers: [presetProvider("deepseek"), presetProvider("openai")]
});
const sec = (ms2) => Math.floor(ms2 / 1e3);
const pad = (n) => String(n).padStart(2, "0");
const localTime = (t) => {
  const d2 = new Date(t * 1e3);
  return `${d2.getFullYear()}-${pad(d2.getMonth() + 1)}-${pad(d2.getDate())} ${pad(d2.getHours())}:${pad(d2.getMinutes())}`;
};
const tick = (t, iv) => {
  const d2 = new Date(t * 1e3);
  if (iv === "1d" || iv === "1w") return `${pad(d2.getMonth() + 1)}/${pad(d2.getDate())}`;
  return d2.getHours() === 0 && d2.getMinutes() === 0 ? `${pad(d2.getMonth() + 1)}/${pad(d2.getDate())}` : `${pad(d2.getHours())}:${pad(d2.getMinutes())}`;
};
function bar(c2) {
  const up = c2.c >= c2.o;
  const base = { time: sec(c2.t), open: c2.o, high: c2.h, low: c2.l, close: c2.c };
  if (!c2.closed) return { ...base, color: up ? "rgba(40,215,164,0.45)" : "rgba(255,84,112,0.45)", wickColor: up ? "rgba(40,215,164,0.6)" : "rgba(255,84,112,0.6)", borderColor: "rgba(0,0,0,0)" };
  return base;
}
const vbar = (c2) => ({ time: sec(c2.t), value: c2.v, color: c2.c >= c2.o ? "rgba(40,215,164,0.28)" : "rgba(255,84,112,0.28)" });
const PATTERN_LABEL = {
  bullish_engulfing: "吞没",
  bearish_engulfing: "吞没",
  doji: "十",
  hammer: "锤",
  shooting_star: "流星",
  inverted_hammer: "倒锤",
  hanging_man: "吊颈"
};
function ChartPanel({ symbol, market, compact = false }) {
  const interval = useStore((s) => s.settings?.market.chartInterval ?? "15m");
  const analysis = useStore((s) => s.analyses[tk(symbol, market)]);
  const focus = useStore((s) => s.win?.focusMode ?? false);
  const [sub, setSub] = reactExports.useState(compact ? "none" : "rsi");
  const [show, setShow] = reactExports.useState({ ema: true, bb: false, vwap: false, levels: true, marks: true });
  const [loading, setLoading] = reactExports.useState(false);
  const [error, setError] = reactExports.useState("");
  const [legend, setLegend] = reactExports.useState(null);
  const box = reactExports.useRef(null);
  const chartRef = reactExports.useRef(null);
  const ser = reactExports.useRef({});
  const levelLines = reactExports.useRef([]);
  const planLines = reactExports.useRef([]);
  const overlayRef = reactExports.useRef(null);
  const candlesRef = reactExports.useRef([]);
  const reloadTimer = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (!box.current) return;
    const chart = le(box.current, {
      autoSize: true,
      layout: {
        background: { type: $i.Solid, color: "transparent" },
        textColor: COLORS.mute,
        fontFamily: '"JetBrains Mono", Consolas, monospace',
        fontSize: 10,
        panes: { separatorColor: "#1E2A3B", separatorHoverColor: "rgba(0,229,255,0.2)" }
      },
      grid: { vertLines: { color: COLORS.grid }, horzLines: { color: COLORS.grid } },
      crosshair: { mode: K.Normal, vertLine: { color: "rgba(0,229,255,0.35)", labelBackgroundColor: "#0D1320" }, horzLine: { color: "rgba(0,229,255,0.35)", labelBackgroundColor: "#0D1320" } },
      rightPriceScale: { borderColor: "#1E2A3B", scaleMargins: { top: 0.08, bottom: 0.22 } },
      timeScale: { borderColor: "#1E2A3B", timeVisible: true, secondsVisible: false, rightOffset: 6, tickMarkFormatter: (t) => tick(t, interval) },
      localization: { timeFormatter: (t) => localTime(t) }
    });
    chartRef.current = chart;
    const s = ser.current;
    s.candle = chart.addSeries(Qe, { upColor: COLORS.up, downColor: COLORS.down, wickUpColor: COLORS.up, wickDownColor: COLORS.down, borderVisible: false });
    s.vol = chart.addSeries(nr, { priceFormat: { type: "volume" }, priceScaleId: "vol", lastValueVisible: false, priceLineVisible: false });
    chart.priceScale("vol").applyOptions({ scaleMargins: { top: 0.82, bottom: 0 } });
    const line = (color2, width = 1, style = h.Solid) => chart.addSeries(ye, { color: color2, lineWidth: width, lineStyle: style, priceLineVisible: false, lastValueVisible: false, crosshairMarkerVisible: false });
    s.ema20 = line("#00E5FF");
    s.ema50 = line("#9061FF");
    s.ema200 = line("#FFB547");
    s.bbU = line("rgba(122,139,163,0.55)", 1, h.Dotted);
    s.bbL = line("rgba(122,139,163,0.55)", 1, h.Dotted);
    s.vwap = line("rgba(216,225,238,0.6)", 1, h.Dashed);
    if (sub === "rsi") {
      s.rsi = chart.addSeries(ye, { color: "#9061FF", lineWidth: 1, priceLineVisible: false, lastValueVisible: true }, 1);
      s.rsi.createPriceLine({ price: 70, color: "rgba(255,84,112,0.4)", lineWidth: 1, lineStyle: h.Dashed, axisLabelVisible: false, title: "" });
      s.rsi.createPriceLine({ price: 30, color: "rgba(40,215,164,0.4)", lineWidth: 1, lineStyle: h.Dashed, axisLabelVisible: false, title: "" });
    } else if (sub === "macd") {
      s.macd = chart.addSeries(nr, { priceLineVisible: false, lastValueVisible: true }, 1);
    }
    if (sub !== "none") chart.panes()[1]?.setHeight(compact ? 60 : 90);
    s.markers = Nr(s.candle, []);
    chart.subscribeCrosshairMove((p2) => {
      const d2 = p2.seriesData.get(s.candle);
      const v2 = p2.seriesData.get(s.vol);
      if (d2 && "open" in d2) setLegend({ o: d2.open, h: d2.high, l: d2.low, c: d2.close, v: v2?.value ?? 0 });
      else setLegend(null);
    });
    if (candlesRef.current.length) {
      applyCandles(candlesRef.current, false);
      if (overlayRef.current) applyOverlay(overlayRef.current);
    }
    return () => {
      levelLines.current = [];
      planLines.current = [];
      chart.remove();
      chartRef.current = null;
      ser.current = {};
    };
  }, [sub, interval]);
  function applyCandles(cs2, fit) {
    const s = ser.current;
    if (!s.candle || !s.vol) return;
    const d2 = priceDecimals(cs2[cs2.length - 1]?.c ?? 1);
    s.candle.applyOptions({ priceFormat: { type: "price", precision: d2, minMove: 1 / 10 ** d2 } });
    s.candle.setData(cs2.map(bar));
    s.vol.setData(cs2.map(vbar));
    if (fit) chartRef.current?.timeScale().scrollToRealTime();
  }
  function applyOverlay(o2) {
    const s = ser.current;
    const cv = (p2) => ({ time: p2.time, value: p2.value });
    s.ema20?.setData(show.ema ? o2.ema20.map(cv) : []);
    s.ema50?.setData(show.ema ? o2.ema50.map(cv) : []);
    s.ema200?.setData(show.ema ? o2.ema200.map(cv) : []);
    s.bbU?.setData(show.bb ? o2.bbUpper.map(cv) : []);
    s.bbL?.setData(show.bb ? o2.bbLower.map(cv) : []);
    s.vwap?.setData(show.vwap ? o2.vwap.map(cv) : []);
    s.rsi?.setData(o2.rsi.map(cv));
    s.macd?.setData(o2.macdHist.map((p2) => ({ time: p2.time, value: p2.value, color: p2.value >= 0 ? "rgba(40,215,164,0.6)" : "rgba(255,84,112,0.6)" })));
    for (const l2 of levelLines.current) s.candle?.removePriceLine(l2);
    levelLines.current = [];
    if (show.levels && s.candle) {
      for (const lv of o2.levels) {
        levelLines.current.push(
          s.candle.createPriceLine({
            price: lv.price,
            color: lv.kind === "support" ? "rgba(40,215,164,0.45)" : "rgba(255,84,112,0.45)",
            lineWidth: 1,
            lineStyle: h.SparseDotted,
            axisLabelVisible: !compact,
            title: compact ? "" : `${lv.kind === "support" ? "S" : "R"}×${lv.touches}`
          })
        );
      }
    }
    updateMarkers(o2);
  }
  function updateMarkers(o2) {
    const s = ser.current;
    if (!s.markers) return;
    if (!show.marks || !o2) {
      s.markers.setMarkers([]);
      return;
    }
    const ms2 = [];
    for (const p2 of o2.patterns) {
      if (p2.direction === "neutral" && compact) continue;
      ms2.push({
        time: sec(p2.time),
        position: p2.direction === "bear" ? "aboveBar" : "belowBar",
        shape: p2.direction === "bull" ? "arrowUp" : p2.direction === "bear" ? "arrowDown" : "circle",
        color: p2.direction === "bull" ? COLORS.up : p2.direction === "bear" ? COLORS.down : COLORS.mute,
        text: compact ? "" : PATTERN_LABEL[p2.name] + (p2.volumeConfirmed ? "·量" : ""),
        size: p2.direction === "neutral" ? 0.5 : 1
      });
    }
    for (const b2 of o2.breakouts) {
      ms2.push({
        time: sec(b2.time),
        position: b2.type === "breakout" || b2.type === "false_breakout_down" ? "belowBar" : "aboveBar",
        shape: "square",
        color: b2.type.startsWith("false") ? COLORS.warn : b2.type === "breakout" ? COLORS.up : COLORS.down,
        text: b2.type === "breakout" ? "突破" : b2.type === "breakdown" ? "跌破" : "假突破",
        size: 1
      });
    }
    ms2.sort((a2, b2) => a2.time - b2.time);
    s.markers.setMarkers(ms2);
  }
  async function load(fit) {
    setLoading(true);
    try {
      await api.invoke("market:watch", symbol, market, interval);
      const [cs2, ov] = await Promise.all([api.invoke("market:candles", symbol, market, interval), api.invoke("market:overlay", symbol, market, interval)]);
      candlesRef.current = cs2;
      overlayRef.current = ov;
      applyCandles(cs2, fit);
      if (ov) applyOverlay(ov);
      setError(cs2.length ? "" : "暂无 K 线数据");
    } catch (e2) {
      setError("K 线加载失败：" + (e2.message ?? ""));
    } finally {
      setLoading(false);
    }
  }
  reactExports.useEffect(() => {
    void load(true);
  }, [symbol, market, interval, sub]);
  reactExports.useEffect(() => {
    if (overlayRef.current) applyOverlay(overlayRef.current);
  }, [show]);
  reactExports.useEffect(() => {
    return api.on("market:candle", (ev) => {
      if (ev.symbol !== symbol || ev.market !== market || ev.interval !== interval) return;
      const s = ser.current;
      try {
        s.candle?.update(bar(ev.candle));
        s.vol?.update(vbar(ev.candle));
      } catch {
      }
      const list = candlesRef.current;
      if (list.length && list[list.length - 1].t === ev.candle.t) list[list.length - 1] = ev.candle;
      else if (!list.length || ev.candle.t > list[list.length - 1].t) list.push(ev.candle);
      if (ev.candle.closed) {
        if (reloadTimer.current) clearTimeout(reloadTimer.current);
        reloadTimer.current = setTimeout(() => void load(false), 800);
      }
    });
  }, [symbol, market, interval]);
  const connOk = useStore((s) => s.conns.find((c2) => c2.market === market)?.status === "open");
  const prevConn = reactExports.useRef(connOk);
  reactExports.useEffect(() => {
    if (connOk && prevConn.current === false) void load(false);
    prevConn.current = connOk;
  }, [connOk]);
  reactExports.useEffect(() => {
    const s = ser.current;
    if (!s.candle) return;
    for (const l2 of planLines.current) s.candle.removePriceLine(l2);
    planLines.current = [];
    const a2 = analysis;
    if (!a2 || a2.status !== "ok" || a2.signal === "WAIT" || !a2.entry_zone) return;
    const add = (price, color2, title, style = h.Dashed, width = 1) => {
      if (price === null || !s.candle) return;
      planLines.current.push(s.candle.createPriceLine({ price, color: color2, lineWidth: width, lineStyle: style, axisLabelVisible: true, title }));
    };
    add(a2.entry_zone[0], "rgba(0,229,255,0.7)", compact ? "" : "入场", h.Solid);
    add(a2.entry_zone[1], "rgba(0,229,255,0.7)", "", h.Solid);
    add(a2.stop_loss, COLORS.down, "SL", h.Dashed, 2);
    add(a2.take_profit_1, COLORS.up, "TP1");
    add(a2.take_profit_2, COLORS.up, "TP2", h.Dotted);
  }, [analysis, sub, interval, compact]);
  const ivs = compact ? ["5m", "15m", "1h", "4h"] : INTERVALS;
  const toggles = [
    ["ema", "EMA"],
    ["bb", "BOLL"],
    ["vwap", "VWAP"],
    ["levels", "S/R"],
    ["marks", "形态"]
  ];
  const last = candlesRef.current[candlesRef.current.length - 1];
  const lg = legend ?? (last ? { o: last.o, h: last.h, l: last.l, c: last.c, v: last.v } : null);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "panel relative flex h-full min-h-0 flex-col overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2 border-b border-line px-2 py-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-0.5", children: ivs.map((iv) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => patchSettings({ market: { chartInterval: iv } }), className: `num rounded px-1.5 py-0.5 text-[10px] transition-colors ${iv === interval ? "bg-cyan/15 text-cyan" : "text-mute hover:text-text"}`, children: iv }, iv)) }),
      !compact && !focus && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-0.5", children: [
        toggles.map(([k2, label]) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setShow((s) => ({ ...s, [k2]: !s[k2] })), className: `num rounded px-1.5 py-0.5 text-[10px] ${show[k2] ? "text-cyan" : "text-mute/60 hover:text-mute"}`, children: label }, k2)),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mx-1 h-3 w-px bg-line2" }),
        ["rsi", "macd", "none"].map((k2) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setSub(k2), className: `num rounded px-1.5 py-0.5 text-[10px] uppercase ${sub === k2 ? "text-violet" : "text-mute/60 hover:text-mute"}`, children: k2 === "none" ? "无副图" : k2 }, k2))
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "num pointer-events-none absolute left-2 top-8 z-10 flex gap-3 text-[10px] text-mute", children: lg && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        "O ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-text", children: fmtPrice(lg.o) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        "H ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-text", children: fmtPrice(lg.h) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        "L ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-text", children: fmtPrice(lg.l) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        "C ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: lg.c >= lg.o ? "text-up" : "text-down", children: fmtPrice(lg.c) })
      ] }),
      !compact && show.ema && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-cyan", children: "EMA20" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-violet", children: "EMA50" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-warn", children: "EMA200" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: box, className: "relative min-h-0 flex-1" }),
    last && !last.closed && !compact && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute bottom-1 left-2 text-[9px] text-mute/70", children: "半透明 K 线为未收盘临时数据，不参与确认信号" }),
    (loading || error) && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-x-0 top-1/2 text-center text-[11px] text-mute", children: error || (candlesRef.current.length ? "" : "加载 K 线…") })
  ] });
}
function AnalyzeButton({ symbol, market, compact = false }) {
  const p2 = useStore((s) => s.progress[symbol]);
  const reqId = useStore((s) => s.activeRequest[symbol]);
  const dual = useStore((s) => s.settings?.analysis.dualModel ?? false);
  const running = p2?.state === "running";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-1.5", children: !running ? /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "btn-primary flex-1", onClick: () => void runAnalysis(symbol, market, dual), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(IconBolt, { size: 13 }),
      "立即 AI 分析",
      dual && !compact ? "（双模型）" : ""
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1 overflow-hidden rounded border border-cyan/40 bg-cyan/5 px-2 py-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-y-0 left-0 w-1/3 animate-scan bg-gradient-to-r from-transparent via-cyan/15 to-transparent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex items-center justify-between text-[10px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate text-cyan", children: p2.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "num text-mute", children: [
            Math.max(0, p2.step),
            "/",
            p2.total
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn", title: "取消", disabled: !reqId || reqId === "pending", onClick: () => reqId && api.invoke("analysis:cancel", reqId), children: /* @__PURE__ */ jsxRuntimeExports.jsx(IconStop, { size: 12 }) })
    ] }) }),
    running && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-0.5", children: Array.from({ length: p2.total }).map((_2, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { className: `h-0.5 flex-1 rounded ${i < p2.step ? "bg-cyan" : "bg-line"}`, animate: { opacity: i === p2.step - 1 ? [0.4, 1, 0.4] : 1 }, transition: { repeat: Infinity, duration: 1.2 } }, i)) }),
    p2 && (p2.state === "error" || p2.state === "cancelled") && p2.detail && !compact && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-warn", children: p2.detail })
  ] });
}
function Row({ k: k2, v: v2, cls = "" }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline justify-between gap-2 border-b border-line/60 py-1 last:border-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-mute", children: k2 }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `num text-right text-[11px] ${cls}`, children: v2 })
  ] });
}
function List({ items, empty = "—", tone = "text" }) {
  if (!items.length) return /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-mute", children: empty });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1", children: items.map((x2, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: `flex gap-1.5 text-[11px] leading-[1.5] text-${tone}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-[6px] h-1 w-1 shrink-0 rounded-full bg-cyan/60" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "selectable", children: x2 })
  ] }, i)) });
}
function Section({ title, children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "panel-title", children: title }),
    children
  ] });
}
function Summary({ a: a2 }) {
  const dirCls = a2.signal === "LONG" ? "text-up" : a2.signal === "SHORT" ? "text-down" : "text-warn";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SignalBadge, { signal: a2.signal, size: "lg", muted: a2.status !== "ok" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[13px] font-semibold ${dirCls}`, children: SIGNAL_TEXT[a2.signal] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] text-mute", children: [
          "趋势 ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(TrendArrow, { trend: a2.trend }),
          " · 规则引擎 ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "num", children: a2.rule_bias }),
          a2.ai_signal && a2.ai_signal !== a2.signal && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-warn", children: [
            " · AI 原始 ",
            a2.ai_signal
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-24 space-y-1 text-right", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-mute", children: "证据强度（非胜率）" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "num text-[16px] font-semibold text-cyan", children: a2.signal_strength }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(StrengthBar, { value: a2.signal_strength })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "selectable text-[12px] leading-relaxed text-text", children: a2.summary }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded border border-line bg-bg/60 px-2.5 py-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { k: "参考价格 / 行情时间", v: `${fmtPrice(a2.reference_price)} · ${fmtTime(a2.market_time)}` }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { k: "潜在入场区域", v: a2.entry_zone ? `${fmtPrice(a2.entry_zone[0])} – ${fmtPrice(a2.entry_zone[1])}` : "—", cls: "text-cyan" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { k: "止损参考", v: fmtPrice(a2.stop_loss), cls: "text-down" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { k: "第一止盈 / 第二止盈", v: a2.take_profit_1 ? `${fmtPrice(a2.take_profit_1)} / ${fmtPrice(a2.take_profit_2)}` : "—", cls: "text-up" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { k: "风险收益比（扣成本，TP1）", v: a2.risk_reward_ratio !== null ? a2.risk_reward_ratio.toFixed(2) : "—" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { k: "交易成本影响", v: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-sans text-[10px]", children: a2.cost_impact }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "关键技术依据", children: /* @__PURE__ */ jsxRuntimeExports.jsx(List, { items: a2.technical_reasons.slice(0, 5) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "信号失效条件", children: /* @__PURE__ */ jsxRuntimeExports.jsx(List, { items: a2.invalidation_conditions }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "不确定性", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "selectable text-[11px] leading-relaxed text-mute", children: a2.uncertainty || "—" }) })
  ] });
}
function Professional({ a: a2 }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "市场结构", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "selectable text-[11px] text-text", children: a2.market_structure }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "多周期技术分析", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "selectable whitespace-pre-line text-[11px] leading-relaxed text-text", children: a2.professional }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "技术依据", children: /* @__PURE__ */ jsxRuntimeExports.jsx(List, { items: a2.technical_reasons }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "风险因素", children: /* @__PURE__ */ jsxRuntimeExports.jsx(List, { items: a2.risk_factors, tone: "warn" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { title: "数据质量", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: a2.data_quality.ok ? "text-up" : "text-down", children: a2.data_quality.ok ? "合格" : "不合格" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "num ml-2 text-mute", children: [
          "评分 ",
          a2.data_quality.score,
          " · 行情延迟 ",
          a2.data_quality.staleSeconds,
          "s · 新闻 ",
          a2.data_quality.newsCount,
          "（已核实 ",
          a2.data_quality.verifiedNewsCount,
          "）"
        ] })
      ] }),
      a2.data_quality.issues.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(List, { items: a2.data_quality.issues, tone: "warn" })
    ] }),
    a2.gating_notes.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "风险规则检查", children: /* @__PURE__ */ jsxRuntimeExports.jsx(List, { items: a2.gating_notes, tone: "mute" }) })
  ] });
}
function NewsImpact({ a: a2 }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "selectable text-[11px] leading-relaxed text-text", children: a2.news_impact.summary || "—" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
      a2.news_impact.items.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded border border-line bg-bg/50 p-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-1 flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(VerifyChip, { v: n.verification }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "chip border-line2 text-mute", children: n.nature === "fact" ? "事实" : n.nature === "report" ? "报道" : "观点" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "chip border-violet/40 text-violet", children: a2.mode === "ai" ? "AI 推测" : "规则判断" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "selectable text-[11px] text-text", children: n.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "selectable mt-1 text-[10px] text-mute", children: n.effect })
      ] }, n.id)),
      !a2.news_impact.items.length && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-mute", children: "模型未引用新闻，或时间窗内无相关新闻。" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "新闻来源（程序记录）", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
      a2.sources.news.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "flex w-full items-center gap-1.5 text-left text-[10px] text-mute hover:text-cyan", onClick: () => api.invoke("app:open-external", s.url), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(IconExternal, { size: 10 }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "truncate", children: [
          s.source,
          " · ",
          ago(s.publishedAt),
          " · ",
          s.title
        ] })
      ] }, i)),
      !a2.sources.news.length && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-mute", children: "—" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "行情来源", children: /* @__PURE__ */ jsxRuntimeExports.jsx(List, { items: a2.sources.market, tone: "mute" }) })
  ] });
}
function Paths({ a: a2 }) {
  const card = (title, cls, s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `rounded border p-2.5 ${cls}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-1.5 text-[11px] font-semibold", children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { k: "触发条件", v: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "selectable font-sans", children: s.trigger }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { k: "可能路径", v: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "selectable font-sans", children: s.path }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { k: "失效条件", v: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "selectable font-sans", children: s.invalidation }) })
  ] });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
    card("多头情景", "border-up/30 text-up", a2.scenarios.bull),
    card("空头情景", "border-down/30 text-down", a2.scenarios.bear),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-mute", children: "情景是条件性推演，不是预测。请以失效条件与风险预算管理仓位。" })
  ] });
}
function Dual({ d: d2 }) {
  const col = (r2) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 rounded border border-line bg-bg/50 p-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-1 truncate text-[10px] text-mute", children: [
      r2.model?.providerName,
      " · ",
      r2.model?.model ?? "—"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SignalBadge, { signal: r2.signal, muted: r2.status !== "ok" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "selectable mt-1.5 text-[10px] leading-relaxed text-text", children: r2.summary }),
    r2.status !== "ok" && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-[10px] text-warn", children: r2.unreliableReason })
  ] });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
      col(d2.a),
      col(d2.b)
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `rounded border px-2 py-1 text-[11px] ${d2.agree ? "border-up/30 text-up" : "border-warn/40 text-warn"}`, children: d2.agree ? "两模型方向一致" : "两模型方向存在分歧——请勿以投票方式决策" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "共同支持的依据", children: /* @__PURE__ */ jsxRuntimeExports.jsx(List, { items: d2.common, empty: "未识别到明显的共同依据" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "意见冲突", children: /* @__PURE__ */ jsxRuntimeExports.jsx(List, { items: d2.conflicts, empty: "无明显冲突", tone: "warn" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "规则引擎风险提示", children: /* @__PURE__ */ jsxRuntimeExports.jsx(List, { items: d2.ruleWarning, tone: "mute" }) })
  ] });
}
function History({ symbol }) {
  const ver = useStore((s) => s.historyVersion);
  const [items, setItems] = reactExports.useState([]);
  reactExports.useEffect(() => {
    void api.invoke("analysis:history", { symbol, limit: 60 }).then(setItems);
  }, [symbol, ver]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
    items.map((r2) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 border-b border-line/60 py-1.5 text-[10px]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "num w-[86px] text-mute", children: fmtTime(r2.timestamp, true) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SignalBadge, { signal: r2.signal, size: "sm", muted: r2.status !== "ok" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "num w-[70px] text-text", children: fmtPrice(r2.reference_price) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "truncate text-mute", children: [
        r2.mode === "ai" ? r2.model?.model : "规则",
        " · ",
        r2.trigger === "auto" ? "自动" : r2.trigger === "event" ? "事件" : "手动",
        r2.status !== "ok" && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-warn", children: " · 不可靠" })
      ] })
    ] }, r2.id)),
    !items.length && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-mute", children: "暂无历史信号" })
  ] });
}
function AIPanel({ symbol, market }) {
  const a2 = useStore((s) => s.analyses[tk(symbol, market)]);
  const d2 = useStore((s) => s.duals[tk(symbol, market)]);
  const hasModel = useStore((s) => !!s.settings?.providers.some((p2) => p2.enabled));
  const [tab, setTab] = reactExports.useState("summary");
  const [prevOk, setPrevOk] = reactExports.useState(null);
  reactExports.useEffect(() => {
    if (a2 && a2.status !== "ok") {
      void api.invoke("analysis:history", { symbol, limit: 30 }).then((list) => setPrevOk(list.find((x2) => x2.status === "ok" && x2.market_type === market) ?? null));
    } else setPrevOk(null);
  }, [a2, symbol, market]);
  const tabs = [
    ["summary", "简明结论"],
    ["pro", "专业技术"],
    ["news", "新闻影响"],
    ["paths", "多空路径"],
    ...d2 ? [["dual", "双模型"]] : [],
    ["history", "信号历史"]
  ];
  const shown = a2 && a2.status !== "ok" && prevOk && tab !== "history" ? prevOk : a2;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "panel flex h-full min-h-0 flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 border-b border-line p-2.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "panel-title", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-sm bg-violet" }),
          "AI SIGNAL ENGINE · ",
          coin(symbol),
          " ",
          market === "perp" ? "永续" : "现货"
        ] }),
        a2 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "num text-[9px] text-mute", title: a2.model ? `${a2.model.providerName} / ${a2.model.model}` : "基础指标分析", children: [
          a2.model ? a2.model.model : "RULES",
          " · ",
          ago(a2.timestamp)
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AnalyzeButton, { symbol, market })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex border-b border-line px-1", children: tabs.map(([k2, l2]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: `tab ${tab === k2 ? "active" : ""}`, onClick: () => setTab(k2), children: [
      l2,
      tab === k2 && /* @__PURE__ */ jsxRuntimeExports.jsx(motion.span, { layoutId: "ai-tab", className: "absolute inset-x-1 -bottom-px h-px bg-cyan" })
    ] }, k2)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-0 flex-1 overflow-y-auto p-3", children: [
      a2 && a2.status === "unreliable" && tab !== "history" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 flex gap-2 rounded border border-down/40 bg-down/5 p-2 text-[11px] text-down", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(IconAlert, { size: 14, className: "mt-0.5 shrink-0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: "无法生成可靠信号" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "selectable mt-0.5 text-[10px] text-down/80", children: a2.unreliableReason }),
          prevOk && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 text-[10px] text-mute", children: [
            "以下为上次有效分析（",
            fmtTime(prevOk.timestamp, true),
            "），仅作历史结果参考。"
          ] })
        ] })
      ] }),
      a2 && a2.mode === "rules_only" && a2.status === "ok" && tab !== "history" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 rounded border border-warn/30 bg-warn/5 p-2 text-[10px] text-warn", children: [
        a2.gating_notes[0],
        !hasModel && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "ml-2 underline", onClick: () => openSettings("models"), children: "配置 AI 模型" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: { opacity: 0, y: 6 }, animate: { opacity: shown && shown !== a2 ? 0.6 : 1, y: 0 }, exit: { opacity: 0 }, transition: { duration: 0.18 }, children: tab === "history" ? /* @__PURE__ */ jsxRuntimeExports.jsx(History, { symbol }) : tab === "dual" && d2 ? /* @__PURE__ */ jsxRuntimeExports.jsx(Dual, { d: d2 }) : !shown ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-10 text-center text-[11px] text-mute", children: [
        "尚无分析结果。",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "点击“立即 AI 分析”，或开启自动分析（每根 K 线收盘后触发）。"
      ] }) : tab === "summary" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Summary, { a: shown }) : tab === "pro" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Professional, { a: shown }) : tab === "news" ? /* @__PURE__ */ jsxRuntimeExports.jsx(NewsImpact, { a: shown }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Paths, { a: shown }) }, `${tab}-${shown?.id ?? "none"}`) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-line px-3 py-1.5 text-[9px] leading-4 text-mute/80", children: "决策辅助，不构成投资建议；不自动下单。信号强度为证据一致性评分，未经历史校准，不代表胜率。" })
  ] });
}
new Set(
  "a an the of to in on for and or with by at from as is are was were be been its it this that after over amid into new says say report reports update live price us u.s.".split(" ")
);
const CATEGORY_LABEL = {
  fed: "美联储",
  macro_data: "宏观数据",
  etf: "ETF",
  institutional: "机构资金",
  regulation: "监管",
  exchange: "交易所",
  onchain: "链上",
  security: "安全风险",
  geopolitical: "国际风险",
  market: "市场",
  other: "其他"
};
const SENTIMENT_LABEL = {
  bullish: "利多",
  bearish: "利空",
  neutral: "中性",
  uncertain: "不确定"
};
const SENT_CLS = { bullish: "border-up/40 text-up", bearish: "border-down/40 text-down", neutral: "border-line2 text-mute", uncertain: "border-violet/40 text-violet" };
const IMPACT_CLS = { high: "text-down", medium: "text-warn", low: "text-mute" };
const IMPACT_TXT = { high: "高影响", medium: "中影响", low: "低影响" };
function NewsCard({ n }) {
  const [open, setOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { layout: true, initial: { opacity: 0 }, animate: { opacity: 1 }, className: "border-b border-line/70 px-3 py-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-1 flex flex-wrap items-center gap-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `chip ${SENT_CLS[n.sentiment]}`, children: SENTIMENT_LABEL[n.sentiment] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(VerifyChip, { v: n.verification }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "chip border-line2 text-mute", children: CATEGORY_LABEL[n.category] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[10px] ${IMPACT_CLS[n.impact]}`, children: IMPACT_TXT[n.impact] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-mute", children: [
        "· ",
        n.nature === "fact" ? "事实" : n.nature === "report" ? "媒体报道" : "媒体观点"
      ] }),
      n.coins.filter((c2) => c2 === "BTC" || c2 === "ETH").map((c2) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "num text-[10px] text-cyan", children: c2 }, c2))
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "selectable text-left text-[11.5px] leading-snug text-text hover:text-cyan", onClick: () => setOpen((v2) => !v2), children: n.title }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 flex items-center justify-between text-[10px] text-mute", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { title: `发布 ${fmtTime(n.publishedAt, true)} · 抓取 ${fmtTime(n.fetchedAt, true)}`, children: [
        n.source,
        " · ",
        ago(n.publishedAt),
        n.corroboratedBy.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-up", children: [
          " · +",
          n.corroboratedBy.length,
          " 源"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "icon-btn h-5 w-5", title: "打开原文", onClick: () => api.invoke("app:open-external", n.url), children: /* @__PURE__ */ jsxRuntimeExports.jsx(IconExternal, { size: 11 }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: { height: 0, opacity: 0 }, animate: { height: "auto", opacity: 1 }, exit: { height: 0, opacity: 0 }, className: "overflow-hidden", children: [
      n.summary && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "selectable mt-1.5 text-[10.5px] leading-relaxed text-mute", children: n.summary }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 text-[10px] text-violet/80", children: [
        "情绪依据（规则）：",
        n.sentimentBasis.join("；")
      ] }),
      n.corroboratedBy.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-mute", children: [
        "同一事件其他来源：",
        n.corroboratedBy.join("、")
      ] })
    ] }) })
  ] });
}
function NewsPanel() {
  const news = useStore((s) => s.news);
  const [f2, setF] = reactExports.useState("all");
  const [busy, setBusy] = reactExports.useState(false);
  const list = reactExports.useMemo(() => {
    if (f2 === "all") return news;
    if (f2 === "high") return news.filter((n) => n.impact === "high");
    return news.filter((n) => n.coins.includes(f2));
  }, [news, f2]);
  const filters = [
    ["all", "全部"],
    ["BTC", "BTC"],
    ["ETH", "ETH"],
    ["MACRO", "宏观"],
    ["high", "高影响"]
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-full min-h-0 flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-line px-2 py-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-0.5", children: filters.map(([k2, l2]) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setF(k2), className: `rounded px-1.5 py-0.5 text-[10px] ${f2 === k2 ? "bg-cyan/15 text-cyan" : "text-mute hover:text-text"}`, children: l2 }, k2)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          className: "icon-btn",
          title: "刷新新闻",
          onClick: async () => {
            setBusy(true);
            try {
              setState({ news: await api.invoke("news:refresh") });
            } finally {
              setBusy(false);
            }
          },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(IconRefresh, { size: 12, className: busy ? "animate-spin" : "" })
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-0 flex-1 overflow-y-auto", children: [
      list.slice(0, 120).map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx(NewsCard, { n }, n.id)),
      !list.length && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "p-6 text-center text-[11px] text-mute", children: "暂无新闻。请检查新闻源设置或网络。" })
    ] })
  ] });
}
const LEVEL = { info: "border-cyan/40", warn: "border-warn/50", critical: "border-down/60" };
const DOT = { info: "bg-cyan", warn: "bg-warn", critical: "bg-down" };
function Toasts() {
  const toasts = useStore((s) => s.toasts);
  const focus = useStore((s) => s.win?.focusMode ?? false);
  const shown = focus ? toasts.filter((t) => t.level === "critical") : toasts;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none fixed bottom-3 right-3 z-50 flex w-[300px] flex-col gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: shown.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      layout: true,
      initial: { opacity: 0, x: 30 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: 30 },
      className: `pointer-events-auto rounded-md border bg-panel/95 p-2.5 shadow-lg backdrop-blur ${LEVEL[t.level]}`,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `mt-1 h-1.5 w-1.5 shrink-0 rounded-full ${DOT[t.level]}` }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] font-semibold text-text", children: t.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "selectable mt-0.5 text-[10px] leading-snug text-mute", children: t.body })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "icon-btn h-5 w-5", onClick: () => setState((s) => ({ toasts: s.toasts.filter((x2) => x2.id !== t.id) })), children: /* @__PURE__ */ jsxRuntimeExports.jsx(IconClose, { size: 10 }) })
      ] })
    },
    t.id
  )) }) });
}
function AlertsList() {
  const alerts = useStore((s) => s.alerts);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-full min-h-0 flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-line px-3 py-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-mute", children: [
        "最近 ",
        alerts.length,
        " 条提醒"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          className: "text-[10px] text-mute hover:text-down",
          onClick: async () => {
            await api.invoke("alerts:clear");
            setState({ alerts: [] });
          },
          children: "清空"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-0 flex-1 overflow-y-auto", children: [
      alerts.map((a2) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 border-b border-line/60 px-3 py-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${DOT[a2.level]}` }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-text", children: a2.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "num shrink-0 text-[9px] text-mute", children: fmtTime(a2.at, true) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "selectable text-[10px] text-mute", children: a2.body })
        ] })
      ] }, a2.id)),
      !alerts.length && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "p-6 text-center text-[11px] text-mute", children: "暂无提醒" })
    ] })
  ] });
}
function MtfStrip({ symbol, market }) {
  const [r2, setR] = reactExports.useState(null);
  reactExports.useEffect(() => {
    let alive = true;
    const load = () => api.invoke("rules:evaluate", symbol, market).then((x2) => alive && setR(x2)).catch(() => {
    });
    void load();
    const t = setInterval(load, 3e4);
    const off = api.on("market:candle", (ev) => ev.symbol === symbol && ev.market === market && ev.candle.closed && void load());
    return () => {
      alive = false;
      clearInterval(t);
      off();
    };
  }, [symbol, market]);
  const rules = r2?.rules;
  const atr = rules?.frames["1h"]?.indicators.atrPct;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "panel flex items-center gap-3 px-3 py-1.5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "panel-title", children: "规则引擎" }),
    ANALYSIS_FRAMES.map((iv) => {
      const st2 = rules?.frames[iv];
      const cls = !st2 ? "text-mute" : st2.trend === "bull" ? "text-up" : st2.trend === "bear" ? "text-down" : "text-warn";
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", title: st2 ? st2.notes.join("\n") : "数据不足", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "num text-[10px] text-mute", children: iv }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `num text-[11px] font-semibold ${cls}`, children: st2 ? (st2.score > 0 ? "+" : "") + st2.score : "—" })
      ] }, iv);
    }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-3 w-px bg-line2" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", title: "多周期加权综合评分（非胜率）", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-mute", children: "综合" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `num text-[11px] font-bold ${!rules ? "text-mute" : rules.compositeScore >= 30 ? "text-up" : rules.compositeScore <= -30 ? "text-down" : "text-warn"}`, children: rules ? rules.compositeScore : "—" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "num text-[10px] text-mute", children: rules?.bias ?? "" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "num text-[10px] text-mute", title: "1H ATR 占价格比例", children: [
      "ATR ",
      fmtPct(atr ?? null, 2, false)
    ] }),
    rules && !rules.dataQuality.ok && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "chip border-down/50 text-down", title: rules.dataQuality.issues.join("\n"), children: "数据异常" }),
    rules && rules.conflicts.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "chip truncate border-warn/40 text-warn", title: rules.conflicts.join("\n"), children: [
      "周期冲突 ",
      rules.conflicts.length
    ] })
  ] });
}
function LargeView() {
  const s = useStore((st2) => st2.settings);
  const focus = useStore((st2) => st2.win?.focusMode ?? false);
  const conns = useStore((st2) => st2.conns);
  const [side, setSide] = reactExports.useState("ai");
  const { symbol, marketType } = s.market;
  const exch = s.market.exchange === "okx" ? "OKX" : "BINANCE";
  const sideTab = focus ? "ai" : side;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid-bg flex h-full flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "drag flex h-[34px] shrink-0 items-center justify-between border-b border-line px-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Logo, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-[10px] text-mute", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ConnDot, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "num", children: exch }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: conns.every((c2) => c2.status === "open") ? "实时" : "重连中" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "no-drag flex rounded border border-line2 p-0.5", children: ["perp", "spot"].map((m2) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => patchSettings({ market: { marketType: m2 } }), className: `rounded-sm px-2 py-0.5 text-[10px] ${marketType === m2 ? "bg-cyan/15 text-cyan" : "text-mute hover:text-text"}`, children: m2 === "perp" ? "USDT 永续" : "现货" }, m2)) }),
        focus && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "chip border-violet/50 text-violet", children: "专注模式" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(WindowControls, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-0 flex-1 gap-2 p-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-w-0 flex-1 flex-col gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TickerCard, { symbol: "BTCUSDT", market: marketType, active: symbol === "BTCUSDT" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TickerCard, { symbol: "ETHUSDT", market: marketType, active: symbol === "ETHUSDT" })
        ] }),
        !focus && /* @__PURE__ */ jsxRuntimeExports.jsx(MtfStrip, { symbol, market: marketType }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-0 flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChartPanel, { symbol, market: marketType }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.aside, { layout: true, className: "flex w-[400px] shrink-0 flex-col gap-2", children: [
        !focus && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "panel flex shrink-0 px-1", children: [
          ["ai", "AI 分析"],
          ["news", "MARKET INTELLIGENCE"],
          ["alerts", "提醒"]
        ].map(([k2, l2]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setSide(k2), className: `tab flex-1 ${sideTab === k2 ? "active" : ""}`, children: [
          l2,
          sideTab === k2 && /* @__PURE__ */ jsxRuntimeExports.jsx(motion.span, { layoutId: "side-tab", className: "absolute inset-x-2 -bottom-px h-px bg-cyan" })
        ] }, k2)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-0 flex-1", children: [
          sideTab === "ai" && /* @__PURE__ */ jsxRuntimeExports.jsx(AIPanel, { symbol, market: marketType }),
          sideTab === "news" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "panel h-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(NewsPanel, {}) }),
          sideTab === "alerts" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "panel h-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AlertsList, {}) })
        ] })
      ] })
    ] })
  ] });
}
function SignalCard({ symbol }) {
  const m2 = useStore((s) => s.settings.market.marketType);
  const active = useStore((s) => s.settings.market.symbol === symbol);
  const a2 = useStore((s) => s.analyses[tk(symbol, m2)]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => patchSettings({ market: { symbol } }), className: `w-full rounded-md border p-2 text-left transition-colors ${active ? "border-cyan/50 bg-cyan/[0.04]" : "border-line bg-panel/80 hover:border-line2"}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "num text-[11px] font-bold", children: coin(symbol) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SignalBadge, { signal: a2 ? a2.status === "ok" ? a2.signal : "WAIT" : null, size: "sm", muted: a2?.status !== "ok" })
    ] }),
    a2 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 text-[10px] text-mute", children: [
        a2.status === "ok" ? SIGNAL_TEXT[a2.signal] : "无法生成可靠信号",
        " · ",
        ago(a2.timestamp)
      ] }),
      a2.entry_zone && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "num mt-1 grid grid-cols-3 gap-1 text-[9.5px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-cyan", children: [
          "入 ",
          fmtPrice((a2.entry_zone[0] + a2.entry_zone[1]) / 2)
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-down", children: [
          "损 ",
          fmtPrice(a2.stop_loss)
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-up", children: [
          "盈 ",
          fmtPrice(a2.take_profit_1)
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(StrengthBar, { value: a2.signal_strength }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1.5 line-clamp-3 text-[10px] leading-snug text-text/90", children: a2.summary })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-[10px] text-mute", children: "尚无分析" })
  ] });
}
function MediumView() {
  const s = useStore((st2) => st2.settings);
  const { symbol, marketType } = s.market;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid-bg flex h-full flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "drag flex h-[30px] shrink-0 items-center justify-between border-b border-line px-2.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Logo, { small: true }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ConnDot, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "num text-[9px] text-mute", children: marketType === "perp" ? "PERP" : "SPOT" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(WindowControls, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-0 flex-1 gap-2 p-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-w-0 flex-1 flex-col gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "panel divide-y divide-line/70", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CompactRow, { symbol: "BTCUSDT", market: marketType }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CompactRow, { symbol: "ETHUSDT", market: marketType })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-0 flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChartPanel, { symbol, market: marketType, compact: true }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex w-[230px] shrink-0 flex-col gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SignalCard, { symbol: "BTCUSDT" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SignalCard, { symbol: "ETHUSDT" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnalyzeButton, { symbol, market: marketType, compact: true }) })
      ] })
    ] })
  ] });
}
function SmallView() {
  const m2 = useStore((s) => s.settings.market.marketType);
  const p2 = useStore((s) => s.progress[s.settings.market.symbol]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "drag group grid-bg flex h-full flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-[26px] items-center justify-between px-2.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ConnDot, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "num text-[9px] tracking-[0.2em] text-mute", children: [
          "NEURAL·TRADE ",
          m2 === "perp" ? "PERP" : "SPOT"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center opacity-0 transition-opacity duration-200 group-hover:opacity-100", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "icon-btn no-drag", title: "展开为 MEDIUM", onClick: () => api.invoke("win:set-size", "medium"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(IconSize, { s: "M", size: 12 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(WindowControls, { compact: true })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 flex-col justify-center divide-y divide-line/60", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CompactRow, { symbol: "BTCUSDT", market: m2 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CompactRow, { symbol: "ETHUSDT", market: m2 })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-[3px] overflow-hidden", children: p2?.state === "running" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full w-1/3 animate-scan bg-gradient-to-r from-transparent via-cyan to-transparent" }) })
  ] });
}
const KIND_LABEL = { openai: "OpenAI", deepseek: "DeepSeek", openai_compatible: "OpenAI 兼容" };
function ModelHub() {
  const [list, setList] = reactExports.useState([]);
  const [sel, setSel] = reactExports.useState("");
  const [draft, setDraft] = reactExports.useState(null);
  const [key, setKey] = reactExports.useState("");
  const [msg, setMsg] = reactExports.useState(null);
  const [busy, setBusy] = reactExports.useState("");
  const [newModel, setNewModel] = reactExports.useState("");
  const [testModel, setTestModel] = reactExports.useState("");
  const [test2, setTest] = reactExports.useState(null);
  const cur = list.find((p2) => p2.id === sel);
  const refresh = async (keepSel) => {
    const l2 = await api.invoke("ai:providers");
    setList(l2);
    const id2 = keepSel ?? sel ?? l2[0]?.id;
    const p2 = l2.find((x2) => x2.id === id2) ?? l2[0];
    if (p2) {
      setSel(p2.id);
      const { hasKey: _h, keyHint: _k, ...cfg } = p2;
      setDraft(cfg);
      setTestModel(p2.defaultModel);
    }
  };
  reactExports.useEffect(() => {
    void refresh();
  }, []);
  const pick = (p2) => {
    setSel(p2.id);
    const { hasKey: _h, keyHint: _k, ...cfg } = p2;
    setDraft(cfg);
    setKey("");
    setMsg(null);
    setTest(null);
    setTestModel(p2.defaultModel);
  };
  const run = async (name, fn2) => {
    setBusy(name);
    setMsg(null);
    try {
      await fn2();
    } catch (e2) {
      setMsg({ ok: false, text: errMsg(e2) });
    } finally {
      setBusy("");
    }
  };
  const upd = (p2) => draft && setDraft({ ...draft, ...p2 });
  if (!draft) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-mute", children: "加载中…" });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-full gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex w-[180px] shrink-0 flex-col gap-1.5", children: [
      list.map((p2) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => pick(p2), className: `rounded border p-2 text-left transition-colors ${p2.id === sel ? "border-cyan/50 bg-cyan/5" : "border-line hover:border-line2"}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate text-[11px] font-semibold text-text", children: p2.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `h-1.5 w-1.5 rounded-full ${p2.enabled && p2.hasKey ? "bg-up" : p2.enabled ? "bg-warn" : "bg-mute"}` })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-0.5 text-[9.5px] text-mute", children: [
          KIND_LABEL[p2.kind],
          " · ",
          p2.hasKey ? `密钥 ${p2.keyHint}` : "未设置密钥"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "num truncate text-[9.5px] text-mute/80", children: p2.defaultModel || "未选择默认模型" })
      ] }, p2.id)),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 space-y-1", children: ["openai", "deepseek", "openai_compatible"].map((k2) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "btn w-full justify-start", onClick: () => run("add", async () => {
        const l2 = await api.invoke("ai:add-provider", k2);
        setList(l2);
        pick(l2[l2.length - 1]);
      }), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(IconPlus, { size: 11 }),
        " 添加 ",
        KIND_LABEL[k2]
      ] }, k2)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1 space-y-4 overflow-y-auto pr-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "服务商名称", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "input", value: draft.name, onChange: (e2) => upd({ name: e2.target.value }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "启用", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Toggle, { checked: draft.enabled, onChange: (v2) => upd({ enabled: v2 }), label: draft.enabled ? "已启用" : "已停用" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "API Base URL", hint: draft.kind === "openai" ? "官方：https://api.openai.com/v1" : draft.kind === "deepseek" ? "官方：https://api.deepseek.com" : "须为 HTTPS；本地模型可开启下方“允许本地 HTTP”", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "input num", value: draft.baseUrl, onChange: (e2) => upd({ baseUrl: e2.target.value }) }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "接口格式", hint: "OpenAI 优先 Responses API；DeepSeek 与多数兼容服务使用 Chat Completions", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: "input", value: draft.apiStyle, onChange: (e2) => upd({ apiStyle: e2.target.value }), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "responses", children: "Responses API" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "chat", children: "Chat Completions" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "结构化输出", hint: "不支持时自动降级：json_schema → json_object → 提示词约束", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: "input", value: draft.structured, onChange: (e2) => upd({ structured: e2.target.value }), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "json_schema", children: "JSON Schema（严格）" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "json_object", children: "JSON 模式" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "prompt_only", children: "仅提示词约束" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "推理模式（模型支持时生效）", hint: draft.kind === "deepseek" ? "DeepSeek：关闭=thinking disabled；其他档位映射 reasoning_effort" : "不支持的模型会自动去掉该参数重试", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: "input", value: draft.reasoning, onChange: (e2) => upd({ reasoning: e2.target.value }), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "off", children: "关闭" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "low", children: "低" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "medium", children: "中" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "high", children: "高" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "max", children: "最高" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(NumField, { label: "请求超时", value: Math.round(draft.timeoutMs / 1e3), suffix: "秒", onCommit: (v2) => upd({ timeoutMs: v2 * 1e3 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(NumField, { label: "最大输出 Token", value: draft.maxOutputTokens, step: 256, onCommit: (v2) => upd({ maxOutputTokens: v2 }) })
        ] }),
        draft.kind === "openai_compatible" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Toggle, { checked: draft.allowLocalHttp, onChange: (v2) => upd({ allowLocalHttp: v2 }), label: "允许本地 HTTP（仅 localhost / 127.0.0.1）" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded border border-line bg-bg/50 p-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "panel-title mb-2", children: "API KEY · 安全存储" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "input num", type: "password", autoComplete: "off", placeholder: cur?.hasKey ? `已保存（${cur.keyHint}），输入新密钥以更换` : "粘贴 API Key", value: key, onChange: (e2) => setKey(e2.target.value) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn-primary shrink-0", disabled: !key.trim() || busy === "key", onClick: () => run("key", async () => {
            setList(await api.invoke("ai:set-key", draft.id, key));
            setKey("");
            setMsg({ ok: true, text: "密钥已加密保存（Windows DPAPI）" });
          }), children: "保存密钥" }),
          cur?.hasKey && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn-danger shrink-0", onClick: () => run("delkey", async () => {
            setList(await api.invoke("ai:delete-key", draft.id));
            setMsg({ ok: true, text: "密钥已删除" });
          }), children: "删除" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1.5 text-[10px] leading-4 text-mute", children: "密钥仅保存在本机（safeStorage 加密），只在主进程发起 HTTPS 请求时使用，不会显示、不会写入日志，也不会发送给行情或新闻接口。" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded border border-line bg-bg/50 p-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-2 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "panel-title", children: "模型列表 · 默认分析模型" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn", disabled: !cur?.hasKey || busy === "models", onClick: () => run("models", async () => {
            await saveDraft();
            const r2 = await api.invoke("ai:fetch-models", draft.id);
            setMsg({ ok: r2.ok, text: r2.message });
            await refresh(draft.id);
          }), children: busy === "models" ? "获取中…" : "从接口获取可用模型" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-h-[180px] space-y-1 overflow-y-auto", children: [
          draft.models.map((m2, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 rounded px-1 py-0.5 hover:bg-white/[0.02]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "radio", name: "default-model", checked: draft.defaultModel === m2.id, onChange: () => upd({ defaultModel: m2.id, models: draft.models.map((x2, j2) => j2 === i ? { ...x2, enabled: true } : x2) }), title: "设为默认" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "num min-w-0 flex-1 truncate text-[11px] text-text", children: m2.id }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "input num w-[64px]", placeholder: "入 $/M", title: "输入价格 USD / 百万 Token（按官网填写）", value: m2.inputPrice ?? "", onChange: (e2) => upd({ models: draft.models.map((x2, j2) => j2 === i ? { ...x2, inputPrice: e2.target.value === "" ? void 0 : Number(e2.target.value) } : x2) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "input num w-[64px]", placeholder: "出 $/M", title: "输出价格 USD / 百万 Token", value: m2.outputPrice ?? "", onChange: (e2) => upd({ models: draft.models.map((x2, j2) => j2 === i ? { ...x2, outputPrice: e2.target.value === "" ? void 0 : Number(e2.target.value) } : x2) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Toggle, { checked: m2.enabled, onChange: (v2) => upd({ models: draft.models.map((x2, j2) => j2 === i ? { ...x2, enabled: v2 } : x2) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "icon-btn", title: "移除", onClick: () => upd({ models: draft.models.filter((_2, j2) => j2 !== i), defaultModel: draft.defaultModel === m2.id ? "" : draft.defaultModel }), children: /* @__PURE__ */ jsxRuntimeExports.jsx(IconTrash, { size: 11 }) })
          ] }, m2.id)),
          !draft.models.length && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-mute", children: "暂无模型：请点击“从接口获取”，或在下方手动输入模型 ID。" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "input num", placeholder: "手动输入模型 ID，例如 deepseek-v4-pro", value: newModel, onChange: (e2) => setNewModel(e2.target.value) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "btn shrink-0", disabled: !newModel.trim() || draft.models.some((m2) => m2.id === newModel.trim()), onClick: () => {
            upd({ models: [...draft.models, { id: newModel.trim(), enabled: true }], defaultModel: draft.defaultModel || newModel.trim() });
            setNewModel("");
          }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(IconPlus, { size: 11 }),
            " 添加"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1.5 text-[10px] text-mute", children: "价格留空则不统计费用（每日预算只按调用次数限制）。" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: "input w-[220px]", value: testModel, onChange: (e2) => setTestModel(e2.target.value), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "（仅验证密钥）" }),
          draft.models.map((m2) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: m2.id, children: m2.id }, m2.id))
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn", disabled: !cur?.hasKey || busy === "test", onClick: () => run("test", async () => {
          await saveDraft();
          setTest(await api.invoke("ai:test", draft.id, testModel || void 0));
        }), children: busy === "test" ? "测试中…" : "测试连接" }),
        test2 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `text-[11px] ${test2.ok ? "text-up" : "text-down"}`, children: [
          test2.ok ? "✓" : "✕",
          " ",
          test2.message,
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "num text-mute", children: [
            "(",
            test2.latencyMs,
            "ms",
            test2.status ? ` · HTTP ${test2.status}` : "",
            ")"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-t border-line pt-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "btn-primary", disabled: busy === "save", onClick: () => run("save", async () => {
            await saveDraft();
            setMsg({ ok: true, text: "配置已保存" });
          }), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(IconCheck, { size: 12 }),
            " 保存配置"
          ] }),
          msg && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[11px] ${msg.ok ? "text-up" : "text-down"}`, children: msg.text })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "btn-danger", onClick: () => {
          if (!confirm(`删除服务商“${draft.name}”及其密钥？`)) return;
          void run("del", async () => {
            const l2 = await api.invoke("ai:delete-provider", draft.id);
            setList(l2);
            if (l2[0]) pick(l2[0]);
          });
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(IconTrash, { size: 11 }),
          " 删除服务商"
        ] })
      ] })
    ] })
  ] });
  async function saveDraft() {
    if (!draft) return;
    const l2 = await api.invoke("ai:save-provider", draft);
    setList(l2);
  }
}
const TABS = [
  ["models", "AI MODEL HUB"],
  ["analysis", "分析与成本"],
  ["news", "新闻源"],
  ["market", "行情与网络"],
  ["risk", "风险管理"],
  ["alerts", "提醒"],
  ["window", "窗口与快捷键"],
  ["about", "安全与关于"]
];
function Grid({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-3", children });
}
function Card({ title, children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 rounded border border-line bg-bg/40 p-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "panel-title", children: title }),
    children
  ] });
}
function Usage() {
  const [u2, setU] = reactExports.useState(null);
  const ver = useStore((s) => s.historyVersion);
  reactExports.useEffect(() => {
    void api.invoke("usage:summary").then(setU);
  }, [ver]);
  if (!u2) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { title: "API 使用量（今日）", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "num grid grid-cols-4 gap-3 text-[11px]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "label", children: "调用" }),
        u2.today.calls,
        " / ",
        u2.limits.dailyCalls
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "label", children: "输入 Token" }),
        u2.today.inputTokens.toLocaleString()
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "label", children: "输出 Token" }),
        u2.today.outputTokens.toLocaleString()
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "label", children: "费用" }),
        "$",
        u2.today.cost.toFixed(4),
        " / $",
        u2.limits.dailyBudgetUsd
      ] })
    ] }),
    u2.today.unpricedCalls > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-warn", children: [
      u2.today.unpricedCalls,
      " 次调用的模型未配置价格，费用未计入（请在 AI MODEL HUB 填写价格）。"
    ] }),
    u2.byModel.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "num w-full text-[10px]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "text-mute", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left font-normal", children: "模型" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right font-normal", children: "次数" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right font-normal", children: "输入" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right font-normal", children: "输出" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right font-normal", children: "费用" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: u2.byModel.map((r2) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
          r2.providerId,
          "/",
          r2.model
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-right", children: r2.calls }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-right", children: r2.inputTokens.toLocaleString() }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-right", children: r2.outputTokens.toLocaleString() }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "text-right", children: [
          "$",
          r2.cost.toFixed(4)
        ] })
      ] }, r2.providerId + r2.model)) })
    ] })
  ] });
}
function AnalysisTab({ s }) {
  const a2 = s.analysis;
  const p2 = (x2) => patchSettings({ analysis: x2 });
  const providers = s.providers.filter((x2) => x2.enabled);
  const models = (id2) => s.providers.find((x2) => x2.id === id2)?.models.filter((m2) => m2.enabled) ?? [];
  const toggleSym = (sym) => p2({ autoSymbols: a2.autoSymbols.includes(sym) ? a2.autoSymbols.filter((x2) => x2 !== sym) : [...a2.autoSymbols, sym] });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { title: "模型选择", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Grid, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "主分析服务商", children: /* @__PURE__ */ jsxRuntimeExports.jsx("select", { className: "input", value: a2.primaryProviderId, onChange: (e2) => p2({ primaryProviderId: e2.target.value, primaryModel: "" }), children: providers.map((x2) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: x2.id, children: x2.name }, x2.id)) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "主分析模型", hint: "留空 = 使用服务商默认模型", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: "input", value: a2.primaryModel, onChange: (e2) => p2({ primaryModel: e2.target.value }), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "（默认模型）" }),
        models(a2.primaryProviderId).map((m2) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: m2.id, children: m2.id }, m2.id))
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "双模型对比", hint: "同一行情快照同时调用两个模型；会增加 API 消耗", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Toggle, { checked: a2.dualModel, onChange: (v2) => p2({ dualModel: v2 }), label: a2.dualModel ? "已开启" : "已关闭" }) }),
      a2.dualModel && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "对比服务商", children: /* @__PURE__ */ jsxRuntimeExports.jsx("select", { className: "input", value: a2.secondaryProviderId, onChange: (e2) => p2({ secondaryProviderId: e2.target.value, secondaryModel: "" }), children: providers.map((x2) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: x2.id, children: x2.name }, x2.id)) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "对比模型", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: "input", value: a2.secondaryModel, onChange: (e2) => p2({ secondaryModel: e2.target.value }), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "（默认模型）" }),
          models(a2.secondaryProviderId).map((m2) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: m2.id, children: m2.id }, m2.id))
        ] }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { title: "自动分析", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Grid, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "自动模式", hint: "仅在指定周期 K 线确认收盘后触发，不会随价格跳动调用", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Toggle, { checked: a2.autoEnabled, onChange: (v2) => p2({ autoEnabled: v2 }), label: a2.autoEnabled ? "已开启" : "已关闭" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "触发周期", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: "input", value: a2.autoInterval, onChange: (e2) => p2({ autoInterval: e2.target.value }), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "5m", children: "每 5 分钟 K 线收盘" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "15m", children: "每 15 分钟 K 线收盘" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "1h", children: "每 1 小时 K 线收盘" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "4h", children: "每 4 小时 K 线收盘" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "分析市场 / 币种", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: "input w-[90px]", value: a2.marketType, onChange: (e2) => p2({ marketType: e2.target.value }), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "perp", children: "永续" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "spot", children: "现货" })
        ] }),
        ["BTCUSDT", "ETHUSDT"].map((sym) => /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-1 text-[11px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", checked: a2.autoSymbols.includes(sym), onChange: () => toggleSym(sym) }),
          sym.replace("USDT", "")
        ] }, sym))
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "事件触发", hint: "重要突破（放量收盘）或已核实的重大新闻", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Toggle, { checked: a2.eventTriggers, onChange: (v2) => p2({ eventTriggers: v2 }), label: a2.eventTriggers ? "已开启" : "已关闭" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(NumField, { label: "事件冷却", value: a2.eventCooldownMin, suffix: "分钟", onCommit: (v2) => p2({ eventCooldownMin: v2 }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(NumField, { label: "事件去抖", value: a2.debounceSec, suffix: "秒", onCommit: (v2) => p2({ debounceSec: v2 }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(NumField, { label: "新闻时间窗口", value: a2.newsWindowHours, suffix: "小时", onCommit: (v2) => p2({ newsWindowHours: v2 }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(NumField, { label: "每次最多新闻条数", value: a2.maxNewsItems, onCommit: (v2) => p2({ maxNewsItems: v2 }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(NumField, { label: "分析结果缓存", value: a2.cacheMinutes, suffix: "分钟", onCommit: (v2) => p2({ cacheMinutes: v2 }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "发送衍生品数据", hint: "资金费率与未平仓量", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Toggle, { checked: a2.sendDerivatives, onChange: (v2) => p2({ sendDerivatives: v2 }) }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { title: "成本控制", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Grid, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(NumField, { label: "每日调用次数上限", value: a2.dailyCallLimit, onCommit: (v2) => p2({ dailyCallLimit: v2 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(NumField, { label: "每日费用预算", value: a2.dailyBudgetUsd, step: 0.5, suffix: "USD", onCommit: (v2) => p2({ dailyBudgetUsd: v2 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(NumField, { label: "每分钟调用上限", value: a2.perMinuteLimit, onCommit: (v2) => p2({ perMinuteLimit: v2 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(NumField, { label: "失败重试次数", value: a2.retries, onCommit: (v2) => p2({ retries: v2 }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-mute", children: "每次最大输出 Token 在 AI MODEL HUB 中按服务商设置。超出限额时自动降级为基础指标分析。" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Usage, {})
  ] });
}
function NewsTab({ s }) {
  const [list, setList] = reactExports.useState([]);
  const [keys, setKeys] = reactExports.useState({});
  const [tests, setTests] = reactExports.useState({});
  const [url, setUrl] = reactExports.useState("");
  const [name, setName] = reactExports.useState("");
  reactExports.useEffect(() => {
    void api.invoke("news:providers").then(setList);
  }, [s.news.providers]);
  const save = (providers) => patchSettings({ news: { providers } });
  const strip = (l2) => l2.map(({ hasKey: _h, lastStatus: _s2, ...p2 }) => p2);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { title: "新闻数据源（与 AI 接口独立）", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1.5", children: list.map((p2, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded border border-line p-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Toggle, { checked: p2.enabled, onChange: (v2) => save(strip(list).map((x2, j2) => j2 === i ? { ...x2, enabled: v2 } : x2)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-semibold text-text", children: p2.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "chip border-line2 text-mute", children: p2.kind.toUpperCase() }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: "input w-[110px]", value: p2.tier, onChange: (e2) => save(strip(list).map((x2, j2) => j2 === i ? { ...x2, tier: Number(e2.target.value) } : x2)), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: 1, children: "官方机构" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: 2, children: "专业媒体" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: 3, children: "其他" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "num min-w-0 flex-1 truncate text-[10px] text-mute", children: p2.url }),
          p2.lastStatus && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[10px] ${p2.lastStatus.ok ? "text-up" : "text-down"}`, title: p2.lastStatus.error, children: p2.lastStatus.ok ? `✓ ${p2.lastStatus.count}` : "✕ 失败" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn", onClick: async () => setTests({ ...tests, [p2.id]: await api.invoke("news:test", p2.id) }), children: "测试" }),
          p2.id.startsWith("custom-") && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "icon-btn", onClick: () => save(strip(list).filter((_2, j2) => j2 !== i)), children: /* @__PURE__ */ jsxRuntimeExports.jsx(IconTrash, { size: 11 }) })
        ] }),
        p2.needsKey && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1.5 flex gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "input num", type: "password", placeholder: p2.hasKey ? "已保存密钥（输入以更换）" : "API Key", value: keys[p2.id] ?? "", onChange: (e2) => setKeys({ ...keys, [p2.id]: e2.target.value }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn shrink-0", disabled: !keys[p2.id], onClick: async () => {
            setList(await api.invoke("news:set-key", p2.id, keys[p2.id]));
            setKeys({ ...keys, [p2.id]: "" });
          }, children: "保存密钥" }),
          p2.hasKey && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn-danger shrink-0", onClick: async () => setList(await api.invoke("news:delete-key", p2.id)), children: "删除" })
        ] }),
        tests[p2.id] && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `mt-1 text-[10px] ${tests[p2.id].ok ? "text-up" : "text-down"}`, children: tests[p2.id].message })
      ] }, p2.id)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "input w-[160px]", placeholder: "名称", value: name, onChange: (e2) => setName(e2.target.value) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "input num", placeholder: "RSS / Atom 地址（https://）", value: url, onChange: (e2) => setUrl(e2.target.value) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "btn shrink-0", disabled: !/^https:\/\//.test(url) || !name.trim(), onClick: () => {
          void save([...strip(list), { id: `custom-${Date.now().toString(36)}`, kind: "rss", name: name.trim(), url: url.trim(), enabled: true, tier: 3, needsKey: false }]);
          setUrl("");
          setName("");
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(IconPlus, { size: 11 }),
          " 添加 RSS"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(NumField, { label: "刷新间隔", value: s.news.refreshMinutes, suffix: "分钟", onCommit: (v2) => patchSettings({ news: { refreshMinutes: v2 } }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] leading-4 text-mute", children: "核实规则：官方机构发布 = 官方；同一事件被 ≥2 个独立专业来源报道 = 多源核实；其余 = 待核实。待核实新闻不会作为强信号的唯一依据。" })
  ] });
}
function MarketTab({ s }) {
  const m2 = s.market;
  const p2 = (x2) => patchSettings({ market: x2 });
  const txt = (label, k2) => /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label, children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "input num", defaultValue: String(m2[k2]), onBlur: (e2) => e2.target.value !== m2[k2] && p2({ [k2]: e2.target.value.trim() }) }) });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { title: "数据源", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Grid, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "交易所", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: "input", value: m2.exchange, onChange: (e2) => p2({ exchange: e2.target.value }), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "binance", children: "Binance（默认）" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "okx", children: "OKX" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(NumField, { label: "行情过期阈值", value: m2.staleSeconds, suffix: "秒", onCommit: (v2) => p2({ staleSeconds: v2 }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(NumField, { label: "异常波动阈值", value: m2.anomalyPct, step: 0.1, suffix: "%", onCommit: (v2) => p2({ anomalyPct: v2 }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(NumField, { label: "异常波动窗口", value: m2.anomalyWindowSec, suffix: "秒", onCommit: (v2) => p2({ anomalyWindowSec: v2 }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { title: "接口地址（高级）", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
        txt("Binance 现货 REST", "binanceSpotRest"),
        txt("Binance 现货 WS", "binanceSpotWs"),
        txt("Binance 合约 REST", "binanceFutRest"),
        txt("Binance 合约 WS（含 /market 路径）", "binanceFutWs"),
        txt("OKX REST", "okxRest"),
        txt("OKX WS（/public 与 /business 自动拼接）", "okxWs")
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn", onClick: () => api.invoke("settings:reset-section", "market").then((x2) => setState({ settings: x2 })), children: "恢复默认地址" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { title: "网络代理", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Grid, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "代理模式", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: "input", value: s.network.proxyMode, onChange: (e2) => patchSettings({ network: { proxyMode: e2.target.value } }), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "system", children: "跟随系统代理" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "direct", children: "直连" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "custom", children: "自定义" })
        ] }) }),
        s.network.proxyMode === "custom" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "代理地址", hint: "例：http://127.0.0.1:7890 或 socks5://127.0.0.1:1080；行情、新闻、AI 请求共用", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "input num", defaultValue: s.network.proxyUrl, onBlur: (e2) => patchSettings({ network: { proxyUrl: e2.target.value.trim() } }) }) }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn", onClick: () => api.invoke("market:reconnect"), children: "重新连接行情" })
    ] })
  ] });
}
function RiskTab({ s }) {
  const r2 = s.risk;
  const p2 = (x2) => patchSettings({ risk: x2 });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { title: "风险预算与成本估算", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Grid, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(NumField, { label: "账户规模", value: r2.accountSize, step: 100, suffix: "USDT", onCommit: (v2) => p2({ accountSize: v2 }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(NumField, { label: "单笔风险", value: r2.riskPct, step: 0.1, suffix: "%", onCommit: (v2) => p2({ riskPct: v2 }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(NumField, { label: "最低风险收益比", value: r2.minRR, step: 0.1, onCommit: (v2) => p2({ minRR: v2 }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(NumField, { label: "现货手续费（单边）", value: r2.feePctSpot, step: 0.01, suffix: "%", onCommit: (v2) => p2({ feePctSpot: v2 }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(NumField, { label: "合约手续费（单边）", value: r2.feePctPerp, step: 0.01, suffix: "%", onCommit: (v2) => p2({ feePctPerp: v2 }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(NumField, { label: "滑点估算（单边）", value: r2.slippagePct, step: 0.01, suffix: "%", onCommit: (v2) => p2({ slippagePct: v2 }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(NumField, { label: "ATR 止损倍数", value: r2.atrStopMult, step: 0.1, suffix: "×ATR", onCommit: (v2) => p2({ atrStopMult: v2 }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] leading-4 text-mute", children: "止损、止盈、入场区与风险收益比全部由程序基于 1H ATR 与多周期支撑阻力计算，扣除双边手续费与滑点后低于最低 RR 的方向会被强制改为观望。本软件只提供决策辅助，不接入交易权限、不自动下单。" })
  ] });
}
function AlertsTab({ s }) {
  const a2 = s.alerts;
  const p2 = (x2) => patchSettings({ alerts: x2 });
  const items = [
    ["enabled", "启用提醒"],
    ["desktop", "Windows 桌面通知"],
    ["breakout", "阻力突破 / 假突破"],
    ["supportBreak", "支撑跌破"],
    ["news", "突发重大新闻"],
    ["signalChange", "AI 信号变化"],
    ["network", "网络断线 / 恢复"],
    ["anomaly", "价格异常波动"]
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { title: "提醒", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-3", children: items.map(([k2, l2]) => /* @__PURE__ */ jsxRuntimeExports.jsx(Toggle, { checked: a2[k2], onChange: (v2) => p2({ [k2]: v2 }), label: l2 }, k2)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(NumField, { label: "同类提醒冷却", value: a2.cooldownMin, suffix: "分钟", onCommit: (v2) => p2({ cooldownMin: v2 }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-mute", children: "专注模式下只弹出严重级别提醒（如断线）。" })
  ] });
}
function WindowTab({ s }) {
  const w2 = s.window;
  const [errs, setErrs] = reactExports.useState([]);
  reactExports.useEffect(() => {
    void api.invoke("app:info").then((i) => setErrs(i.shortcutErrors));
  }, [w2.shortcuts]);
  const labels = [
    ["toggleVisible", "显示 / 隐藏窗口"],
    ["toggleGhost", "一键透明"],
    ["toggleClickThrough", "鼠标穿透开关"],
    ["sizeLarge", "切换 LARGE"],
    ["sizeMedium", "切换 MEDIUM"],
    ["sizeSmall", "切换 SMALL"],
    ["toggleTop", "置顶开关"],
    ["analyzeNow", "立即 AI 分析"],
    ["toggleFocus", "专注模式"]
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { title: "窗口", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Grid, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: `常规透明度 ${Math.round(w2.opacity * 100)}%`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "range", min: 15, max: 100, value: Math.round(w2.opacity * 100), onChange: (e2) => api.invoke("win:set-opacity", Number(e2.target.value) / 100), className: "w-full accent-cyan" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: `一键透明度 ${Math.round(w2.ghostOpacity * 100)}%`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "range", min: 15, max: 95, value: Math.round(w2.ghostOpacity * 100), onChange: (e2) => patchSettings({ window: { ghostOpacity: Number(e2.target.value) / 100 } }), className: "w-full accent-cyan" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "置顶", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Toggle, { checked: w2.alwaysOnTop, onChange: (v2) => api.invoke("win:set-top", v2) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "边缘吸附", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Toggle, { checked: w2.snap, onChange: (v2) => patchSettings({ window: { snap: v2 } }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(NumField, { label: "吸附距离", value: w2.snapThreshold, suffix: "px", onCommit: (v2) => patchSettings({ window: { snapThreshold: v2 } }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "减少动画", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Toggle, { checked: s.ui.reduceMotion, onChange: (v2) => patchSettings({ ui: { reduceMotion: v2 } }) }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] leading-4 text-mute", children: "透明度与鼠标穿透相互独立。无论窗口多透明、是否穿透，都可通过下方快捷键或托盘图标（双击 = 恢复正常）恢复操作。" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { title: "全局快捷键（Electron Accelerator 格式）", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-3", children: labels.map(([k2, l2]) => /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: l2, children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "input num", defaultValue: w2.shortcuts[k2], onBlur: (e2) => e2.target.value !== w2.shortcuts[k2] && patchSettings({ window: { shortcuts: { ...w2.shortcuts, [k2]: e2.target.value.trim() } } }) }) }, k2)) }),
      errs.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-down", children: [
        "注册失败：",
        errs.join("；")
      ] })
    ] })
  ] });
}
function AboutTab() {
  const [info, setInfo] = reactExports.useState(null);
  reactExports.useEffect(() => {
    void api.invoke("app:info").then(setInfo);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 text-[11px] leading-relaxed", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { title: "NEURAL TRADE", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "num", children: [
        "版本 ",
        info?.version,
        " · ",
        info?.platform
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: info?.encryption ? "text-up" : "text-down", children: [
        "系统安全存储：",
        info?.encryption ? "可用（DPAPI）" : "不可用 —— 无法保存密钥"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "selectable text-mute", children: [
        "数据目录：",
        info?.userData
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "selectable text-mute", children: [
        "日志：",
        info?.logPath,
        "（已自动脱敏）"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { title: "数据与安全", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc space-y-1 pl-4 text-mute", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "行情来自交易所公开接口，不需要也不保存交易所密钥，不具备下单能力。" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "AI 模型只接收程序整理的行情摘要、指标、新闻与风险约束；不会收到你的密钥、账户或本机信息。" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "模型不具备实时行情与联网能力；所有价格与新闻均由程序实时采集并附带来源与时间。" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "止损止盈与风险收益比由程序计算；AI 输出经 Zod 校验与风险规则闸门检查后才会显示。" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "信号强度为证据一致性评分，未经历史回测校准，不代表胜率；本软件不构成投资建议。" })
    ] }) })
  ] });
}
function SettingsModal() {
  const open = useStore((s2) => s2.settingsOpen);
  const tab = useStore((s2) => s2.settingsTab);
  const s = useStore((st2) => st2.settings);
  const [err, setErr] = reactExports.useState("");
  reactExports.useEffect(() => {
    const onKey = (e2) => e2.key === "Escape" && setState({ settingsOpen: false });
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  reactExports.useEffect(() => {
    const onErr = (e2) => setErr(errMsg(e2.reason));
    window.addEventListener("unhandledrejection", onErr);
    return () => window.removeEventListener("unhandledrejection", onErr);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: open && s && /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { className: "fixed inset-0 z-40 flex items-center justify-center bg-black/60", initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, onMouseDown: (e2) => e2.target === e2.currentTarget && setState({ settingsOpen: false }), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { className: "flex h-[92vh] max-h-[660px] w-[1080px] max-w-[96vw] flex-col overflow-hidden rounded-lg border border-line2 bg-panel shadow-2xl", initial: { scale: 0.97, y: 8 }, animate: { scale: 1, y: 0 }, exit: { scale: 0.97, y: 8 }, transition: { duration: 0.18 }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-line px-4 py-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "num text-[11px] font-bold tracking-[0.2em]", children: "CONFIG CENTER" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "icon-btn", onClick: () => setState({ settingsOpen: false }), children: /* @__PURE__ */ jsxRuntimeExports.jsx(IconClose, { size: 13 }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-0 flex-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "w-[150px] shrink-0 border-r border-line p-2", children: TABS.map(([k2, l2]) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setState({ settingsTab: k2 }), className: `relative mb-0.5 w-full rounded px-2.5 py-1.5 text-left text-[11px] transition-colors ${tab === k2 ? "bg-cyan/10 text-cyan" : "text-mute hover:bg-white/[0.03] hover:text-text"}`, children: l2 }, k2)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1 overflow-y-auto p-4", children: [
        tab === "models" && /* @__PURE__ */ jsxRuntimeExports.jsx(ModelHub, {}),
        tab === "analysis" && /* @__PURE__ */ jsxRuntimeExports.jsx(AnalysisTab, { s }),
        tab === "news" && /* @__PURE__ */ jsxRuntimeExports.jsx(NewsTab, { s }),
        tab === "market" && /* @__PURE__ */ jsxRuntimeExports.jsx(MarketTab, { s }),
        tab === "risk" && /* @__PURE__ */ jsxRuntimeExports.jsx(RiskTab, { s }),
        tab === "alerts" && /* @__PURE__ */ jsxRuntimeExports.jsx(AlertsTab, { s }),
        tab === "window" && /* @__PURE__ */ jsxRuntimeExports.jsx(WindowTab, { s }),
        tab === "about" && /* @__PURE__ */ jsxRuntimeExports.jsx(AboutTab, {})
      ] })
    ] }),
    err && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-t border-down/40 bg-down/10 px-4 py-1.5 text-[11px] text-down", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: err }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setErr(""), children: /* @__PURE__ */ jsxRuntimeExports.jsx(IconClose, { size: 11 }) })
    ] })
  ] }) }) });
}
function App() {
  const ready = useStore((s) => s.ready);
  const size2 = useStore((s) => s.win?.size ?? "large");
  const reduce = useStore((s) => (s.settings?.ui.reduceMotion ?? false) || (s.win?.focusMode ?? false));
  const visible = useStore((s) => s.visible);
  const clickThrough = useStore((s) => s.win?.clickThrough ?? false);
  reactExports.useEffect(() => {
    void initStore();
  }, []);
  if (!ready) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "drag grid-bg flex h-full flex-col items-center justify-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Logo, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px w-40 overflow-hidden bg-line", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full w-1/3 animate-scan bg-cyan" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-mute", children: "正在连接行情与加载配置…" })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(MotionConfig, { reducedMotion: reduce || !visible ? "always" : "never", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `relative h-full ${reduce ? "reduce-motion" : ""}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", initial: false, children: /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { className: "h-full", initial: { opacity: 0, scale: 0.985 }, animate: { opacity: 1, scale: 1 }, exit: { opacity: 0 }, transition: { duration: 0.16 }, children: size2 === "large" ? /* @__PURE__ */ jsxRuntimeExports.jsx(LargeView, {}) : size2 === "medium" ? /* @__PURE__ */ jsxRuntimeExports.jsx(MediumView, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(SmallView, {}) }, size2) }),
    clickThrough && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 rounded border border-violet/40" }),
    size2 !== "small" && /* @__PURE__ */ jsxRuntimeExports.jsx(Toasts, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SettingsModal, {})
  ] }) });
}
class ErrorBoundary extends React.Component {
  state = { error: null };
  static getDerivedStateFromError(error) {
    return { error };
  }
  render() {
    if (this.state.error) {
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "drag flex h-full flex-col items-center justify-center gap-3 bg-bg p-6 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[13px] text-down", children: "界面出现错误" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "selectable max-w-md text-[11px] text-mute", children: this.state.error.message }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn no-drag", onClick: () => location.reload(), children: "重新加载" })
      ] });
    }
    return this.props.children;
  }
}
ReactDOM.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ jsxRuntimeExports.jsx(React.StrictMode, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(ErrorBoundary, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(App, {}) }) })
);

// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"footer.js":[function(require,module,exports) {
var footer = document.getElementById('footer');
var footerContent = "\n<footer class=\"container-fluid mt-4\" style=\"color: whitesmoke\">\n<div class=\"container upper-content\">\n    <p\n        style=\"\n        text-align: start;\n        font-size: 0.8rem;\n        color: #000000;\n        border-bottom: 1px solid;\n        \"\n        >\n        1. Trade-in values will vary based on the condition, year, and\n        configuration of your eligible trade-in device. Not all devices are\n        eligible for credit. You must be at least 18 years old to be\n        eligible to trade in for credit or for an Apple Gift Card. Trade-in\n        value may be applied toward qualifying new device purchase, or added\n        to an Apple Gift Card. Actual value awarded is based on receipt of a\n        qualifying device matching the description provided when estimate\n        was made. Sales tax may be assessed on full value of a new device\n        purchase. In-store trade-in requires presentation of a valid photo\n        ID (local law may require saving this information). Offer may not be\n        available in all stores, and may vary between in-store and online\n        trade-in. Some stores may have additional requirements. Apple or its\n        trade-in partners reserve the right to refuse or limit quantity of\n        any trade-in transaction for any reason. More details are available\n        from Apple\u2019s trade-in partner for trade-in and recycling of eligible\n        devices. Restrictions and limitations may apply.\n        <br />\n        Available in the U.S. on apple.com, in the Apple Store app, and at\n        Apple Stores.\n        <br />\n        To access and use all Apple Card features and products available\n        only to Apple Card users, you must add Apple Card to Wallet on an\n        iPhone or iPad that supports and has the latest version of iOS or\n        iPadOS. Apple Card is subject to credit approval, available only for\n        qualifying applicants in the United States, and issued by Goldman\n        Sachs Bank USA, Salt Lake City Branch.\n        <br />\n        If you reside in the U.S. territories, please call Goldman Sachs at\n        877-255-5923 with questions about Apple Card.\n        <br />\n        Learn more about how Apple Card applications are evaluated at\n        support.apple.com/kb/HT209218.\n        <br />\n        A subscription is required for Apple TV+.\n        <br />\n        A subscription is required for Apple Arcade, Apple Fitness+, and\n        Apple Music.\n    </p>\n</div>\n<div class=\"container bottom-content\" style=\"display: flex\">\n    <div class=\"row\">\n        <div class=\"footer-title\">\n            <h5 style=\"color: #000000;\">Shop and Learn</h5>\n            <ul style=\"padding: 0 ; color:rgb(0, 0, 0)\">\n            <li><a href = \"#\">Store</a></li>\n            <li><a href = \"#\">Mac</a></li>\n            <li><a href = \"#\">iPad</a></li>\n            <li><a href = \"#\">iPhone</a></li>\n            <li><a href = \"#\">Watch</a></li>\n            <li><a href = \"#\">Vision</a></li>\n            <li><a href = \"#\">Airpods</a></li>\n            <li><a href = \"#\">TV & Home</a></li>\n            <li><a href = \"#\">AirTag</a></li>\n            <li><a href = \"#\">Accessories</a></li>\n            <li><a href = \"#\">Gift Cards</a></li>\n            </ul>\n        </div>\n        <div class=\"footer-title\">\n            <h5 style=\"color: #000000;\">Shop and Learn</h5>\n            <ul style=\"padding: 0 ; color:rgb(0, 0, 0)\">\n            <li><a href = \"#\">Store</a></li>\n            <li><a href = \"#\">Mac</a></li>\n            <li><a href = \"#\">iPad</a></li>\n            <li><a href = \"#\">iPhone</a></li>\n            </ul>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"footer-title\">\n            <h5 style=\"color: #000000;\">Shop and Learn</h5>\n            <ul style=\"padding: 0 ; color:rgb(0, 0, 0)\">\n            <li><a href = \"\">Store</a></li>\n            <li><a href = \"\">Mac</a></li>\n            <li><a href = \"\">iPad</a></li>\n            <li><a href = \"\">iPhone</a></li>\n            <li><a href = \"\">Watch</a></li>\n            <li><a href = \"\">Vision</a></li>\n            <li><a href = \"\">Airpods</a></li>\n            <li><a href = \"\">TV & Home</a></li>\n            <li><a href = \"\">AirTag</a></li>\n            <li><a href = \"\">Accessories</a></li>\n            <li><a href = \"\">Gift Cards</a></li>\n            </ul>\n        </div>\n        <div class=\"footer-title\">\n            <h5 style=\"color: #000000;\">Shop and Learn</h5>\n            <ul style=\"padding: 0 ; color:rgb(0, 0, 0)\">\n            <li><a href = \"\">Store</a></li>\n            <li><a href = \"\">Mac</a></li>\n            <li><a href = \"\">iPad</a></li>\n            <li><a href = \"\">iPhone</a></li>\n            </ul>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"footer-title\">\n            <h5 style=\"color: #000000;\">Shop and Learn</h5>\n            <ul style=\"padding: 0 ; color:rgb(0, 0, 0)\">\n            <li><a href = \"\">Store</a></li>\n            <li><a href = \"\">Mac</a></li>\n            <li><a href = \"\">iPad</a></li>\n            <li><a href = \"\">iPhone</a></li>\n            <li><a href = \"\">Watch</a></li>\n            <li><a href = \"\">Vision</a></li>\n            <li><a href = \"\">Airpods</a></li>\n            <li><a href = \"\">TV & Home</a></li>\n            <li><a href = \"\">AirTag</a></li>\n            <li><a href = \"\">Accessories</a></li>\n            <li><a href = \"\">Gift Cards</a></li>\n            </ul>\n        </div>\n        <div class=\"footer-title\">\n            <h5 style=\"color: #000000;\">Shop and Learn</h5>\n            <ul style=\"padding: 0 ; color:rgb(0, 0, 0)\">\n            <li><a href = \"\">Store</a></li>\n            <li><a href = \"\">Mac</a></li>\n            <li><a href = \"\">iPad</a></li>\n            <li><a href = \"\">iPhone</a></li>\n            </ul>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"footer-title\">\n            <h5 style=\"color: #000000;\">Shop and Learn</h5>\n            <ul style=\"padding: 0 ; color:rgb(0, 0, 0)\">\n            <li><a href = \"\">Store</a></li>\n            <li><a href = \"\">Mac</a></li>\n            <li><a href = \"\">iPad</a></li>\n            <li><a href = \"\">iPhone</a></li>\n            <li><a href = \"\">Watch</a></li>\n            <li><a href = \"\">Vision</a></li>\n            <li><a href = \"\">Airpods</a></li>\n            <li><a href = \"\">TV & Home</a></li>\n            <li><a href = \"\">AirTag</a></li>\n            <li><a href = \"\">Accessories</a></li>\n            <li><a href = \"\">Gift Cards</a></li>\n            </ul>\n        </div>\n        <div class=\"footer-title\">\n            <h5 style=\"color: #000000;\">Shop and Learn</h5>\n            <ul style=\"padding: 0 ; color:rgb(0, 0, 0)\">\n            <li><a href = \"\">Store</a></li>\n            <li><a href = \"\">Mac</a></li>\n            <li><a href = \"\">iPad</a></li>\n            <li><a href = \"\">iPhone</a></li>\n            </ul>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"footer-title\">\n            <h5 style=\"color: #000000;\">Shop and Learn</h5>\n            <ul style=\"padding: 0 ; color:rgb(0, 0, 0)\">\n            <li><a href = \"\">Store</a></li>\n            <li><a href = \"\">Mac</a></li>\n            <li><a href = \"\">iPad</a></li>\n            <li><a href = \"\">iPhone</a></li>\n            <li><a href = \"\">Watch</a></li>\n            <li><a href = \"\">Vision</a></li>\n            <li><a href = \"\">Airpods</a></li>\n            <li><a href = \"\">TV & Home</a></li>\n            <li><a href = \"\">AirTag</a></li>\n            <li><a href = \"\">Accessories</a></li>\n            <li><a href = \"\">Gift Cards</a></li>\n            </ul>\n        </div>\n        <div class=\"footer-title\">\n            <h5 style=\"color: #000000;\">Shop and Learn</h5>\n            <ul style=\"padding: 0 ; color:rgb(0, 0, 0)\">\n            <li><a href = \"\">Store</a></li>\n            <li><a href = \"\">Mac</a></li>\n            <li><a href = \"\">iPad</a></li>\n            <li><a href = \"\">iPhone</a></li>\n            </ul>\n        </div>\n    </div>\n</div>\n<div class=\"container contact-info\">\n    <p>\n        More ways to shop: <a href=\"\">Find an Apple Store</a> or\n        <a href=\"\">other retailer</a> near you. Or call 1-800-MY-APPLE.\n    </p>\n</div>\n<div\n    class=\"container copyright d-flex\"\n    style=\"justify-content: space-between; border-top: 2px solid ; flex-direction: column;\"\n    >\n    <div class=\"copy\">\n        <p>Copyright \xA9 2024 Apple Inc. All rights reserved.</p>\n    </div>\n    <div class=\"legal-stuff\">\n        <ul class=\"d-flex\" style=\"list-style: none; padding: 0px\">\n            <li style=\"border-right:1px solid; border-color: #000000; padding-right:5px ;\"><a href=\"\">Privacy</a></a></li>\n            <li style=\"border-right:1px solid; border-color: #000000; padding-right:5px ;\"><a href=\"\">Privacy</a></a></li>\n            <li style=\"border-right:1px solid; border-color: #000000; padding-right:5px ;\"><a href=\"\">Privacy</a></a></li>\n            <li style=\"border-right:1px solid; border-color: #000000; padding-right:5px ;\"><a href=\"\">Privacy</a></a></li>\n        </ul>\n    </div>\n    <div class=\"country\">\n        <p>United State</p>\n    </div>\n</div>\n\n<link href=\"./test.scss\" rel=\"stylesheet\" />\n</footer>\n";
footer.innerHTML = footerContent;
},{}],"../../../../../opt/homebrew/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "60053" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["../../../../../opt/homebrew/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","footer.js"], null)
//# sourceMappingURL=/footer.ef929a17.js.map
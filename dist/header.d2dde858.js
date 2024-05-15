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
})({"header.js":[function(require,module,exports) {
var header = document.getElementById('header');
var headerContent = "\n<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Document</title>\n    <link href=\"https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css\" rel=\"stylesheet\" integrity=\"sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH\" crossorigin=\"anonymous\">\n</head>\n<body>\n    <header>\n        <div class=\"container-fluid navigation\">\n            <div class=\"container\">\n                <ul class=\"nav d-flex\" style=\"list-style: none; padding: 0; white-space: nowrap; padding-top : 10px;\">\n                    <li class=\"logo\">\n                        <div class=\"apple-logo\" >\n                            <a href = \"./index.html\"><svg style=\"margin-top : -8px\" xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"44\" viewBox=\"0 0 16 44\"><path d=\"M8.02 16.23c-.73 0-1.86-.83-3.05-.8-1.57.02-3.01.91-3.82 2.32-1.63 2.83-.42 7.01 1.17 9.31.78 1.12 1.7 2.38 2.92 2.34 1.17-.05 1.61-.76 3.03-.76 1.41 0 1.81.76 3.05.73 1.26-.02 2.06-1.14 2.83-2.27.89-1.3 1.26-2.56 1.28-2.63-.03-.01-2.45-.94-2.48-3.74-.02-2.34 1.91-3.46 2-3.51-1.1-1.61-2.79-1.79-3.38-1.83-1.54-.12-2.83.84-3.55.84zm2.6-2.36c.65-.78 1.08-1.87.96-2.95-.93.04-2.05.62-2.72 1.4-.6.69-1.12 1.8-.98 2.86 1.03.08 2.09-.53 2.74-1.31\" fill=\"#000\"/></svg></a>\n                        </div> \n                    </li>\n                    <li class=\"hidden-nav \" id=\"store-nav\"><a href = \"#\">Store </a></li>\n                    <li class=\"hidden-nav \" id = 'mac-nav'><a href = \"#\">Mac </a></li>\n                    <li class=\"hidden-nav\" id = 'ipad-nav'><a href = \"#\">iPad </a></li>\n                    <li class=\"hidden-nav\" id=\"iwatch-nav\"><a href = \"#\">Watch </a></li>\n                    <li class=\"hidden-nav\" id=\"vision-nav\"><a href = \"#\">Vision </a></li>\n                    <li class=\"hidden-nav\" id=\"airpods\"><a href = \"#\">AirPods </a></li>\n                    <li class=\"hidden-nav\" id=\"tvhome-nav\"><a href = \"#\">TV & Home </a></li>\n                    <li class=\"hidden-nav\" id=\"entertainment-nav\"><a href = \"#\">Entertainment </a></li>\n                    <li class=\"hidden-nav\" id=\"accessories-nav\"><a href = \"#\">Accessories </a></li>\n                    <li class=\"hidden-nav\" id=\"support-nav\"><a href = \"#\">Support </a></li>\n                    <li class=\"logo d-flex\" style=\"justify-content: space-between;\">\n                        <div class=\"search\">\n                            <a href = \"\"><svg style=\"margin-top : -8px ; margin-right : 10px;\" xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"44\" viewBox=\"0 0 16 44\"><path d=\"M15.27 28.29l-4.06-4.06a6.113 6.113 0 0 0 1.35-3.83c0-3.39-2.76-6.15-6.15-6.15-3.39 0-6.15 2.76-6.15 6.15s2.76 6.15 6.15 6.15c1.43 0 2.75-.5 3.8-1.33l4.06 4.06 1-.99zM6.4 25.33a4.93 4.93 0 0 1-4.92-4.92c0-2.71 2.2-4.92 4.92-4.92s4.92 2.21 4.92 4.92c.01 2.71-2.2 4.92-4.92 4.92z\" fill=\"#000\"/></svg></a>\n                        </div>\n\n                        <div class=\"bag\">\n                            <a href = \"\"><svg style=\"margin-top : -8px\" xmlns=\"http://www.w3.org/2000/svg\" width=\"14\" height=\"44\" viewBox=\"0 0 14 44\"><path d=\"M12.5 15h-1.81c-.28-1.86-2.04-3-3.69-3s-3.42 1.14-3.69 3H1.5c-.83 0-1.5.67-1.5 1.5v11c0 .83.67 1.5 1.5 1.5h11c.83 0 1.5-.67 1.5-1.5v-11c0-.83-.67-1.5-1.5-1.5zM7 13c1.18 0 2.43.75 2.7 2H4.3c.27-1.25 1.52-2 2.7-2zm6 14.5c0 .28-.22.5-.5.5h-11c-.28 0-.5-.22-.5-.5v-11c0-.28.22-.5.5-.5h11c.28 0 .5.22.5.5v11z\" fill=\"#000\"/></svg></a>\n                        </div>\n                        \n                    </li>\n                    \n                </div>\n        </div>\n\n        <div class=\"hover-container\" style = \"width : 100% ; height : 30%\">\n            <div class=\"hover-content\" style=\"background-color:rgb(255, 255, 255 , .9);\">\n                <ul class=\"inner-content store d-flex\">\n                    <li style=\"max-width: 300px; padding-right: 10px;\" class=\"shop-sub mini\">Shop\n                        <ul>\n                            <li>Shop the latest</li>\n                            <li>Mac</li>\n                            <li>iPad</li>\n                            <li>iPhone</li>\n                            <li>Apple watch</li>\n                            <li>Vision Pro</li>\n                            <li>Accessories</li>\n                        </ul>\n                    </li>\n\n                    <li class = \"mini\" style=\"font-size: 1rem; max-width: 200px; margin-left: 10px;\">Quick link\n                        <ul>\n                            <li>Find a store</li>\n                            <li>Order status</li>\n                            <li>Apple trade in</li>\n                            <li>Financing</li>\n                        </ul>\n                    </li>\n\n                    <li  style=\"font-size: 1rem; max-width: 200px; margin-left: 10px;\" >Shop special store\n                        <ul>\n                            <li>Certified Refurbished</li>\n                            <li>Education</li>\n                            <li>Business</li>\n                            <li>Veterans and Military</li>\n                            <li>Government</li>\n                        </ul>\n                    </li>\n\n                </ul>\n            </div>\n        </div>\n    </header>\n    <style>\n\n    .shop-sub{\n        position : relative ;\n        left : 0px;\n        li{\n            font-size: 3em;\n            font-weight: 500;\n        }\n    }\n    .hover-content{\n        background-color : white !important;\n    }\n    </style>\n</body>\n</html>";
header.innerHTML = headerContent;
var store = document.querySelector('.store');
var hoverContainer = document.querySelector('.hover-container');
var content = document.querySelector('.hover-content');
var blury = document.querySelector('.container-wrapper');
var navElements = [document.getElementById('store-nav'), document.getElementById('mac-nav'), document.getElementById('ipad-nav'), document.getElementById('iwatch-nav'), document.getElementById('vision-nav'), document.getElementById('airpods'), document.getElementById('tvhome-nav'), document.getElementById('entertainment-nav'), document.getElementById('accessories-nav')];
function toggleContent(showContent) {
  content.style.transition = "ease-in-out .1s";
  content.style.opacity = showContent ? "1" : "0";
  content.style.height = showContent ? "700px" : "0px";
  store.style.visibility = showContent ? 'visible' : 'hidden';
  blury.style.filter = showContent ? 'blur(0.6rem)' : 'blur(0)';
  console.log(showContent ? 'in' : 'out');
}
navElements.forEach(function (nav) {
  nav.addEventListener('mouseover', function () {
    return toggleContent(true);
  });
  nav.addEventListener('mouseout', function () {
    return toggleContent(false);
  });
});
hoverContainer.addEventListener('mouseover', function () {
  toggleContent(true);
});
hoverContainer.addEventListener('mouseout', function () {
  toggleContent(false);
});
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
},{}]},{},["../../../../../opt/homebrew/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","header.js"], null)
//# sourceMappingURL=/header.d2dde858.js.map
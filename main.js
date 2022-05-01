<script>

"use strict";

if (typeof _w_attic == "undefined") {
    window._w_attic = "_w_pedant";
}

if (document.querySelector("input#" + window._w_attic) == null && typeof chrome != "undefined" && typeof chrome.runtime != "undefined" && typeof chrome.runtime.id != "undefined" && typeof chrome.runtime.getURL != "undefined") {
    let _w_purse = document.createElement("input");
    _w_purse.type = "hidden";
    _w_purse.id = _w_attic;
    (document.head || document.documentElement).appendChild(_w_purse);
    let _w_dagger = document.createElement("script");
    _w_dagger.type = "text/javascript";
    _w_dagger.src = chrome.runtime.getURL("/scripts/inspector.js");
    (document.head || document.documentElement).appendChild(_w_dagger);
} else if (!window._w_spin) {
    window._w_spin = function() {
        let _w_grave = [];
        let _w_flask = {};
        const _w_gnome = /(['"\s\n\r])[^'"\s\n\r]*?\.(apng|bmp|gif|ico|cur|jpg|jpeg|jfif|pjpeg|pjp|png|svg|tif|tiff|webp)(\?[^'"\s\n\r]*)?(?=['"\s\n\r])/gi;
        let _w_vogue = function(_w_gaggle) {
            _w_gaggle && _w_gaggle.forEach((function(item) {
                let _w_dike = item.replace(/[\\'"\s\n\r]+/gi, "");
                if (!_w_flask[_w_dike]) {
                    _w_flask[_w_dike] = true;
                    _w_grave.push(_w_dike);
                }
            }));
        };
        XMLHttpRequest.prototype.realSend = XMLHttpRequest.prototype.send;
        XMLHttpRequest.prototype.send = function(value) {
            this.addEventListener("load", (function() {
                if (!this.responseType || this.responseType === "text") {
                    let _w_gaggle = this.responseText.replace(/[<>]/gi, '"').match(_w_gnome);
                    _w_vogue(_w_gaggle);
                }
            }), false);
            this.realSend(value);
        };
        const _w_dune = window.fetch;
        window.fetch = function() {
            return new Promise(((resolve, reject) => {
                _w_dune.apply(this, arguments).then((function(response) {
                    response.clone && response.clone().text().then((function(_w_mite) {
                        let _w_gaggle = _w_mite.replace(/[<>]/gi, '"').match(_w_gnome);
                        _w_vogue(_w_gaggle);
                    }));
                    resolve(response);
                })).catch((function(response) {
                    reject(response);
                }));
            }));
        };
        setInterval((function() {
            let _w_purse = document.getElementById(_w_attic);
            if (_w_purse && _w_purse.value && _w_purse.value.length > 0 && _w_purse.value == _w_attic && _w_grave.length > 0) {
                _w_purse.value = JSON.stringify(_w_grave);
                _w_grave = [];
            }
        }), 512);
        return {
            _w_fern: function() {
                return _w_grave.length;
            }
        };
    }();
}
</script>
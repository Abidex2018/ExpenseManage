! function () {
    function Inline(defaults, form) {
        this.iframeLoaded = !1,
		this.iframeOpen = !1,
		this.defaults = defaults,
		this.loadButtonCSS(),
		this.setupIframe(),
		noBrowserIframeSupport() && (this.fallback = !0), form && (this.form = form, this.createButton()), this.listenForCloseEvent()
    }

    function randomId() {
        for (var text = "", possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", i = 0; 5 > i; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text
    }

    function isValid(defaults) {
        if (void 0 == defaults.key) throw new Error("Please provide your public key via the key attribute");
        if (void 0 == defaults.amount && void 0 == defaults.plan) throw new Error("Please provide transaction amount via the amount or plan attribute");
        if (void 0 == defaults.email && void 0 == defaults.customer_code) throw new Error("Please provide customer email via the email or customerCode attribute");
        var buttonNotFound = defaults.customButton && void 0 != defaults.customButton && void 0 == document.getElementById(defaults.customButton);
        if (buttonNotFound) throw new Error("Please ensure a button with id " + defaults.customButton + " is defined");
        return !0
    }

    function checkForParentForm(script) {
        if ("FORM" == script.parentElement.tagName) return !0;
        throw new Error("Please put your Paystack Inline javascript file inside of a form element")
    }

    function getParentForm(script) {
        return form = script.parentElement
    }

    function hasDataAttribute(script) {
        var result = !1,
            list = script.attributes;
        list = Array.prototype.slice.call(list);
        for (key in list) {
            var element = list[key].nodeName;
            element.indexOf("data") > -1 && (result = !0)
        }
        return result
    }

    function noBrowserIframeSupport() {
        var testIframe = document.createElement("iframe"),
            browserSupportsIframe = "onload" in testIframe;
        return browserSupportsIframe || console.warn("This browser does not support iframes. Please redirect to standard"), !browserSupportsIframe
    }

    function parseResponse(data, defaults) {
        var action, split, iframeId, reference, isThisIframe;
        return "string" == typeof data && (action = data.split(" ")[0]), action && (split = data.split(" "), iframeId = split[1], reference = split[2], isThisIframe = defaults.id == iframeId), {
            action: action,
            isThisIframe: isThisIframe,
            reference: reference
        }
    }

    function omitKeys(object, keys) {
        for (var _object = JSON.parse(JSON.stringify(object)), i = 0; i < keys.length; i++) delete _object[keys[i]];
        for (var key in _object) _object.hasOwnProperty(key) && !_object[key] && delete _object[key];
        return _object
    }

    function serialize(obj) {
        var pairs = [];
        for (var prop in obj) obj.hasOwnProperty(prop) && pairs.push(prop + "=" + obj[prop]);
        return pairs.join("&")
    }

    function isFunction(functionToCheck) {
        if (!functionToCheck) return !1;
        var getType = {};
        return functionToCheck && "[object Function]" === getType.toString.call(functionToCheck)
    }

    function cssLoad(url, callback) {
        function resolve() {
            resolved = !0;
            for (var i = 0, len = resolutions.length; len > i; i++) resolutions[i]()
        }

        function reject() {
            rejected = !0;
            for (var i = 0, len = rejections.length; len > i; i++) rejections[i]()
        }
        var promise, count, id, urlString, resolutions = [],
            rejections = [],
            resolved = !1,
            rejected = !1;
        this.count = this.count ? ++this.count : 1, count = this.count, urlString = url.split("/"), id = "load-css-" + urlString[urlString.length - 1], promise = {
            done: function (callback) {
                return resolutions.push(callback), resolved && callback(), promise
            },
            fail: function (callback) {
                return rejections.push(callback), rejected && callback(), promise
            }
        };
        var link = document.createElement("link");
        return link.setAttribute("id", id), link.setAttribute("rel", "stylesheet"), link.setAttribute("type", "text/css"), "undefined" != typeof link.addEventListener ? (link.addEventListener("load", resolve, !1), link.addEventListener("error", reject, !1)) : "undefined" != typeof link.attachEvent && link.attachEvent("onload", function () {
            var txt, cur, i = document.styleSheets.length;
            try {
                for (; i--;)
                    if (cur = document.styleSheets[i], cur.id === id) return txt = cur.cssText, void resolve()
            } catch (e) { }
            resolved || reject()
        }), PayMagic.loadedScripts = PayMagic.loadedScripts || {}, void 0 == PayMagic.loadedScripts[id] ? (PayMagic.loadedScripts[id] = !0, document.getElementsByTagName("head")[0].appendChild(link), link.setAttribute("href", url), promise) : !0
    }
    var config = {
        inlineBaseUrl: "https://paystack.com/",
        customUrl: "http://localhost:54711/"
    };
    Inline.prototype.loadButtonCSS = function () {
        var buttonPath = config.inlineBaseUrl + "assets/payment/css/button.min.css?ver=1";
        cssLoad(buttonPath)
    }, Inline.prototype.setupIframe = function () {
        var instance = this,
            htmlPath = config.customUrl + "tmp/inline.html",
            params = omitKeys(instance.defaults, ["customButton", "onClose", "callback"]),
            path = htmlPath + "?" + serialize(params),
            cssText = "z-index: 9999;\ndisplay: none;\nbackground: transparent;\nbackground: rgba(0,0,0,0.005);\nborder: 0px none transparent;\noverflow-x: hidden;\noverflow-y: hidden;\nvisibility: hidden;\nmargin: 0;\npadding: 0;\n-webkit-tap-highlight-color: transparent;\n-webkit-touch-callout: none; position: fixed;\nleft: 0;\ntop: 0;\nwidth: 100%;\nheight: 100%;";
        iframe = document.createElement("iframe"), iframe.setAttribute("frameBorder", "0"), iframe.setAttribute("allowtransparency", "true"), iframe.style.cssText = cssText, iframe.id = iframe.name = instance.defaults.id, iframe.src = path, iframe.className = "paystack_pop", document.body.appendChild(iframe), iframe.onload = function () {
            instance.iframeLoaded = !0
        }
    }, Inline.prototype.createButton = function () {
        var button, instance = this;
        instance.defaults.customButton ? (button = document.getElementById(instance.defaults.customButton), button.setAttribute("data-paystack", instance.defaults.id)) : (button = document.createElement("button"), button.innerHTML = "<span class='paystack-top-blue'>Pay Securely with Paystack</span><span class='paystack-body-image'> </span>", button.setAttribute("class", "paystack-trigger-btn"), button.setAttribute("data-paystack", instance.defaults.id), sourceScript.parentNode.insertBefore(button, sourceScript.nextSibling)), button.addEventListener("click", function (e) {
            e.preventDefault(), instance.openIframe()
        }, !1)
    }, Inline.prototype.listenForCloseEvent = function () {
        var instance = this,
            eventMethod = window.addEventListener ? "addEventListener" : "attachEvent",
            eventer = window[eventMethod],
            messageEvent = "attachEvent" == eventMethod ? "onmessage" : "message";
        eventer(messageEvent, function (e) {
            var data = e.data || e.message;
            if (data && ("string" == typeof data || data instanceof String)) {
                var response = parseResponse(data, instance.defaults);
                if ("PaystackClose" != response.action) return;
                if (!response.isThisIframe) return;
                response.reference ? instance.handleSuccess(response.reference) : instance.defaults.onClose && instance.callCloseCallback(), instance.closeIframe()
            }
        }, !1)
    }, Inline.prototype.openIframe = function () {
        var instance = this,
            open = function () {
                var iframe = document.getElementById(instance.defaults.id),
                    receiver = iframe.contentWindow;
                receiver.postMessage("PaystackOpen " + instance.defaults.id, "*"), iframe.style.display = "block", iframe.style.visibility = "visible", instance.iframeOpen = !0, document.body.style.overflow = "hidden"
            };
        instance.iframeLoaded ? open() : iframe.onload = function () {
            open(), instance.iframeLoaded = !0
        }
    }, Inline.prototype.closeIframe = function () {
        if (this.iframeOpen) {
            var iframe = document.getElementById(this.defaults.id);
            iframe.style.display = "none", iframe.style.visibility = "hidden", this.iframeOpen = !1, document.body.style.overflow = ""
        }
    }, Inline.prototype.handleSuccess = function (reference) {
        if (this.defaults.callback || this.form) {
            if (this.form) {
                var input = document.createElement("input");
                input.type = "hidden", input.value = reference, input.name = "reference", this.form.appendChild(input);
                var input = document.createElement("input");
                return input.type = "hidden", input.value = reference, input.name = "paystack-trxref", this.form.appendChild(input), void this.form.submit()
            }
            if (isFunction(this.defaults.callback)) {
                var response = {
                    reference: reference,
                    trxref: reference
                };
                this.defaults.callback.call(this, response)
            } else console.warn("Callback must be a function")
        }
    }, Inline.prototype.callCloseCallback = function () {
        this.defaults.onClose && (isFunction(this.defaults.onClose) ? this.defaults.onClose.call(this) : console.warn("onClose must be a function"))
    };
    var PayMagic = function () {
        return {
            Init: function (options, script) {
                var handler = "paymagic" + randomId(),
                    defaults = {
                        id: handler,
                        key: options.key || "",
                        ref: options.ref || "",
                        bank: options.bank || "",
                        label: options.label || "",
                        email: options.email || "",
                        amount: options.amount || "",
                        currency: options.currency || "NGN",
                        customButton: options.customButton || "",
                        firstname: options.firstname || "",
                        lastname: options.lastname || "",
                        phone: options.phone || "",
                        remark: options.remark || "",
                        payment_page: options.payment_page || "",
                        plan: options.plan || "",
                        quantity: options.quantity || "",
                        coupon: options.coupon || "",
                        customer_code: options.customerCode || "",
                        metadata: options.metadata ? JSON.stringify(options.metadata) : "",
                        onClose: options.onClose || "",
                        callback: options.callback || ""
                    };
                return isValid(defaults) ? script ? (checkForParentForm(script), void (window[handler] = new Inline(defaults, getParentForm(script)))) : new Inline(defaults, !1) : void 0
            }
        }
    }();
    window.PayMagic = PayMagic;
    var sourceScript = document.currentScript || function () {
        var scripts = document.getElementsByTagName("script");
        return scripts[scripts.length - 1]
    }();
    hasDataAttribute(sourceScript) && PayMagic.Init({
        key: sourceScript.getAttribute("data-key"),
        ref: sourceScript.getAttribute("data-ref"),
        bank: sourceScript.getAttribute("data-bank"),
        email: sourceScript.getAttribute("data-label"),
        email: sourceScript.getAttribute("data-email"),
        amount: sourceScript.getAttribute("data-amount"),
        currency: sourceScript.getAttribute("data-currency"),
        customButton: sourceScript.getAttribute("data-custom-button"),
        firstname: sourceScript.getAttribute("data-firstname"),
        lastname: sourceScript.getAttribute("data-lastname"),
        phone: sourceScript.getAttribute("data-phone"),
        remark: sourceScript.getAttribute("data-remark"),
        payment_page: sourceScript.getAttribute("data-payment-page"),
        plan: sourceScript.getAttribute("data-plan"),
        quantity: sourceScript.getAttribute("data-quantity"),
        coupon: sourceScript.getAttribute("data-coupon"),
        customerCode: sourceScript.getAttribute("data-customer-code"),
        metadata: sourceScript.getAttribute("data-metadata"),
        onClose: sourceScript.getAttribute("data-on-close"),
        callback: sourceScript.getAttribute("data-callback")
    }, sourceScript)
}();
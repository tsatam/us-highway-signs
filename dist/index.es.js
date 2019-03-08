import { createElement } from 'react';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = ".Sign-module_signWrapper__DjV-a {\n    height: 100%;\n    padding: 30px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}";
var styles = {"signWrapper":"Sign-module_signWrapper__DjV-a"};
styleInject(css);

var HighwaySystem;
(function (HighwaySystem) {
    HighwaySystem["INTERSTATE"] = "interstate";
    HighwaySystem["US_HIGHWAY"] = "us-highway";
    HighwaySystem["STATE"] = "state";
})(HighwaySystem || (HighwaySystem = {}));

var css$1 = ".UnknownSign-module_sign__13FdG {\n    font-weight: 600;\n    width: 100%;\n    height: 100%;\n}\n\n.UnknownSign-module_backdrop__3Jq3Y {\n    fill: #000;\n}\n\n.UnknownSign-module_circle__6NoxG {\n    stroke: none;\n    fill: #fff;\n}\n\n.UnknownSign-module_text__3xxJd {\n    text-anchor: middle;\n    dominant-baseline: middle;\n    font-size: 768px;\n    font-weight: 600;\n    fill: black;\n}\n\n.UnknownSign-module_text3Digit__3Hz_n {\n    transform: scaleX(0.7);\n}";
var styles$1 = {"sign":"UnknownSign-module_sign__13FdG","backdrop":"UnknownSign-module_backdrop__3Jq3Y","circle":"UnknownSign-module_circle__6NoxG","text":"UnknownSign-module_text__3xxJd","text3Digit":"UnknownSign-module_text3Digit__3Hz_n"};
styleInject(css$1);

function UnknownSign(props) {
    return createElement("svg", { className: styles$1.sign, viewBox: '-512 -512 1024 1024' },
        createElement("rect", { className: styles$1.backdrop, x: "-512", y: "-512", width: "1024", height: "1024", rx: "64", ry: "64" }),
        createElement("circle", { className: styles$1.circle, cx: "0", cy: "0", r: "491" }),
        createElement("text", { className: styles$1.text + " " + (props.routeNumber.length > 2 ? styles$1.text3Digit : undefined), textAnchor: "middle", dominantBaseline: "middle", x: "0", y: "75" }, props.routeNumber));
}

var UsState;
(function (UsState) {
    UsState["MICHIGAN"] = "michigan";
})(UsState || (UsState = {}));

var css$2 = ".MichiganStateSign-module_sign__1V1F5 {\n    font-weight: 600;\n    height: 100%;\n}\n\n.MichiganStateSign-module_backdrop__1KIm0 {\n    fill: #000;\n}\n\n.MichiganStateSign-module_diamond__2rwXE {\n    fill: #fff;\n    transform: rotate(45deg);\n}\n\n.MichiganStateSign-module_blockM__3j79W {\n    fill: #000;\n    stroke-width: 0;\n}\n\n.MichiganStateSign-module_text__3cltx {\n    text-anchor: middle;\n    dominant-baseline: middle;\n    font-size: 450px;\n    font-weight: 600;\n    fill: black;\n}\n\n.MichiganStateSign-module_text3Digit__2oYSe {\n    transform: scaleX(0.7);\n}";
var styles$2 = {"sign":"MichiganStateSign-module_sign__1V1F5","backdrop":"MichiganStateSign-module_backdrop__1KIm0","diamond":"MichiganStateSign-module_diamond__2rwXE","blockM":"MichiganStateSign-module_blockM__3j79W","text":"MichiganStateSign-module_text__3cltx","text3Digit":"MichiganStateSign-module_text3Digit__2oYSe"};
styleInject(css$2);

function MichiganStateSign(props) {
    return createElement("svg", { className: styles$2.sign, viewBox: '-512 -512 1024 1024' },
        createElement("rect", { className: styles$2.backdrop, x: "-512", y: "-512", width: "1024", height: "1024", rx: "64", ry: "64" }),
        createElement("rect", { className: styles$2.diamond, x: "-346", y: "-346", width: "686", height: "686" }),
        createElement("path", { className: styles$2.blockM, d: "M 0,0\n            m 0,-210\n            52,-52\n            0,60\n            -15,0\n            0,40\n            64,0\n            0,-40\n            -15,0\n            0,-72\n            15,0\n            0,-40\n            -50, 0\n            -52,52\n            -52,-52\n            -50,0\n            0,40\n            15,0\n            0,72\n            -15,0\n            0,40\n            64,0\n            0,-40\n            -15,0\n            0,-60\n            52,52\n            z" }),
        createElement("text", { className: styles$2.text + " " + (props.routeNumber.length > 2 ? styles$2.text3Digit : undefined), textAnchor: "middle", dominantBaseline: "middle", x: "0", y: "100" }, props.routeNumber));
}

function UsStateSign(props) {
    switch (props.state) {
        case UsState.MICHIGAN:
            return createElement(MichiganStateSign, __assign({}, props));
        default:
            return createElement(UnknownSign, __assign({}, props));
    }
}

var css$3 = ".UsHighwaySign-module_sign__1ZL3R {\n    font-weight: 600;\n    height: 100%;\n}\n\n.UsHighwaySign-module_backdrop__71Qj4 {\n    fill: #000;\n}\n\n.UsHighwaySign-module_shield__1-z57 {\n    fill: #fff;\n    stroke-width: 0;\n}\n\n.UsHighwaySign-module_text__2573u {\n    text-anchor: middle;\n    dominant-baseline: text-after-edge;\n    font-size: 28px;\n    font-weight: 600;\n    fill: black;\n}\n\n.UsHighwaySign-module_text3Digit__3LcJs {\n    transform: scaleX(0.7);\n}";
var styles$3 = {"sign":"UsHighwaySign-module_sign__1ZL3R","backdrop":"UsHighwaySign-module_backdrop__71Qj4","shield":"UsHighwaySign-module_shield__1-z57","text":"UsHighwaySign-module_text__2573u","text3Digit":"UsHighwaySign-module_text3Digit__3LcJs"};
styleInject(css$3);

function UsHighwaySign(props) {
    var is3Digit = props.routeNumber.length > 2;
    var A = is3Digit ? 60 : 48, B = 48, E = 13, F = is3Digit ? 8 : 2, G = 11, H = 5, J = 15, K = is3Digit ? 20 : 14, L = is3Digit ? 19 : 11, M = 9, N = 1, P = 3;
    return createElement("svg", { className: styles$3.sign, viewBox: [
            A / -2,
            B / -2,
            A,
            B
        ].join(' ') },
        createElement("rect", { className: styles$3.backdrop, x: A / -2, y: B / -2, width: A, height: B, rx: P, ry: P }),
        createElement("g", { className: styles$3.shield },
            createElement("path", { d: "M 0 " + ((B / -2) + N) + "\n                    a " + L + " " + L + " 0 0 0 " + K + " 0\n                    l " + M + " " + M + "\n                    a " + J + " " + J + " 0 0 0 -1 14\n                    A " + E + " " + E + " 0 0 1 " + ((A / 2) - N) + " " + ((B / 2) - (E + H)) + "\n                    a " + E + " " + E + " 0 0 1 " + -E + " " + E + "\n                    l " + -F + " 0\n                    A " + G + " " + G + " 0 0 0 0 " + ((B / 2) - N) + "\n                    z" }),
            createElement("path", { d: "M 0 " + ((B / -2) + N) + "\n                    a " + L + " " + L + " 0 0 1 " + -K + " 0\n                    l " + -M + " " + M + "\n                    a " + J + " " + J + " 0 0 1 1 14\n                    A " + E + " " + E + " 0 0 0 " + ((A / -2) + N) + " " + ((B / 2) - (E + H)) + "\n                    a " + E + " " + E + " 0 0 0 " + E + " " + E + "\n                    l " + F + " 0\n                    A " + G + " " + G + " 0 0 1 0 " + ((B / 2) - N) + "\n                    z" })),
        createElement("text", { className: styles$3.text, x: "0", y: (B / 2) - E + 4 }, props.routeNumber));
}

function RenderSign(props) {
    switch (props.system) {
        case HighwaySystem.US_HIGHWAY: {
            return createElement(UsHighwaySign, __assign({}, props));
        }
        case HighwaySystem.STATE: {
            return createElement(UsStateSign, __assign({}, props));
        }
        default: {
            return createElement(UnknownSign, __assign({}, props));
        }
    }
}
function Sign(props) {
    return createElement("div", { className: styles.signWrapper },
        createElement(RenderSign, __assign({}, props)));
}

export default Sign;
export { HighwaySystem, UsState };
//# sourceMappingURL=index.es.js.map

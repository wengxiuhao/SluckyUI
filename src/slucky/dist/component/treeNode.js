!function(e,r){if("object"==typeof exports&&"object"==typeof module)module.exports=r(require("react"),require("@babel/runtime/helpers/classCallCheck"),require("@babel/runtime/helpers/createClass"),require("@babel/runtime/helpers/possibleConstructorReturn"),require("@babel/runtime/helpers/getPrototypeOf"),require("@babel/runtime/helpers/inherits"),require("./details"));else if("function"==typeof define&&define.amd)define(["react","@babel/runtime/helpers/classCallCheck","@babel/runtime/helpers/createClass","@babel/runtime/helpers/possibleConstructorReturn","@babel/runtime/helpers/getPrototypeOf","@babel/runtime/helpers/inherits","./details"],r);else{var t="object"==typeof exports?r(require("react"),require("@babel/runtime/helpers/classCallCheck"),require("@babel/runtime/helpers/createClass"),require("@babel/runtime/helpers/possibleConstructorReturn"),require("@babel/runtime/helpers/getPrototypeOf"),require("@babel/runtime/helpers/inherits"),require("./details")):r(e.react,e["@babel/runtime/helpers/classCallCheck"],e["@babel/runtime/helpers/createClass"],e["@babel/runtime/helpers/possibleConstructorReturn"],e["@babel/runtime/helpers/getPrototypeOf"],e["@babel/runtime/helpers/inherits"],e["./details"]);for(var n in t)("object"==typeof exports?exports:e)[n]=t[n]}}(window,(function(e,r,t,n,o,i,l){return function(e){var r={};function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)t.d(n,o,function(r){return e[r]}.bind(null,o));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=67)}({0:function(r,t){r.exports=e},1:function(e,t){e.exports=r},2:function(e,r){e.exports=t},3:function(e,r){e.exports=n},39:function(e,r){e.exports=l},4:function(e,r){e.exports=o},5:function(e,r){e.exports=i},67:function(e,r,t){"use strict";t.r(r),t.d(r,"default",(function(){return y}));var n=t(1),o=t.n(n),i=t(2),l=t.n(i),s=t(3),u=t.n(s),a=t(4),p=t.n(a),c=t(5),f=t.n(c),b=t(0),m=t.n(b),h=t(39),d=t.n(h),y=function(e){function r(e){var t;return o()(this,r),(t=u()(this,p()(r).call(this,e))).state={_Tree:t.props.data||{}},t}return f()(r,e),l()(r,[{key:"componentWillReceiveProps",value:function(e){this.setState({_Tree:e.data})}},{key:"handleClickNode",value:function(e){this.props.onClick&&this.props.onClick(e)}},{key:"handleChangeCheckbox",value:function(e,r){console.log(r),this.handleClickNode(r)}},{key:"render",value:function(){var e=this,t=this.state._Tree.ch;return m.a.createElement("div",{className:"pl24"},t&&t.map((function(t,n){return t.ch?m.a.createElement("div",{className:"d-f",key:n},m.a.createElement("div",{className:"flex1"},m.a.createElement(d.a,{key:n,open:e.props.open||!1,summary:e.props.item&&e.props.item(t)},m.a.createElement(r,{data:t,onClick:function(r){return e.handleClickNode(r)},open:e.props.open||!1,item:function(r){return e.props.item&&e.props.item(r)}})))):m.a.createElement("div",{key:n,className:""},e.props.item&&e.props.item(t))})))}}]),r}(b.Component)}})}));
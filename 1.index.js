(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{860:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=s(n(2)),o=n(94),u=n(62),i=s(n(302)),l=n(136),c=s(n(300));function s(e){return e&&e.__esModule?e:{default:e}}var f=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.getNutrition=function(e){var t="https://api.nal.usda.gov/ndb/reports/?ndbno="+e+"&format=json&api_key="+c.default.apiKey;i.default.get(t).then(function(e){return n.props.getNutritionData(e)}).catch(function(e){console.error(e),n.props.popUpError()})},n.state={currentPage:1},n.handleChange=n.handleChange.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default.Component),r(t,[{key:"handleChange",value:function(e){this.setState({currentPage:Number(e.target.id)})}},{key:"render",value:function(){for(var e=this,t=this.props.searchData.searchResult,n=this.state.currentPage*c.default.resultPerPage,r=n-c.default.resultPerPage,o=t.slice(r,n),u=[],i=1;i<=Math.ceil(t.length/c.default.resultPerPage);i++)u.push(i);return a.default.createElement("div",{className:"resultlist-container"},a.default.createElement("ul",{className:"result-list"},o.map(function(t){return a.default.createElement("li",{onClick:function(){return e.getNutrition(t.ndbno)},className:"each-result-container",key:t.ndbno},a.default.createElement("span",{className:"header-result-container"},t.name),a.default.createElement("p",{className:"product-category-container"},"Type: ",t.group),a.default.createElement("i",{className:"material-icons"},"arrow_forward_ios"))})),a.default.createElement("ul",{className:"page-list"},u.map(function(t){return a.default.createElement("li",{id:t,onClick:e.handleChange,key:t},"[",t,"]")})))}}]),t}();t.default=(0,o.connect)(function(e){return e},function(e){return(0,u.bindActionCreators)({popUpError:l.popUpError,getNutritionData:l.getNutritionData},e)})(f)}}]);
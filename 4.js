(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{476:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=p(n(11)),o=n(88),u=n(56),i=p(n(540)),c=p(n(489)),l=p(n(178)),s=n(179),f=p(n(510));function p(e){return e&&e.__esModule?e:{default:e}}var h=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.componentDidMount=function(){var e=JSON.parse(localStorage.getItem("nutritionPageList"));e&&n.props.fetchNutritionPageContent(e)},n.searchValue=function(e){var t="https://api.nal.usda.gov/ndb/search/?format=json&q="+e+"&ds=Standard%20Reference&sort=r&max=50&offset=0&api_key="+f.default.apiKey;i.default.get(t).then(function(e){return n.props.getSearchData(e.data.list.item)}).catch(function(e){console.error(e),n.props.popUpError()})},n.handleChange=function(e){n.setState({value:e.target.value})},n.handleKeyPress=function(e){return"Enter"===e.key?n.searchValue(n.state.value):null},n.state={value:""},n.handleChange=n.handleChange.bind(n),n.handleKeyPress=n.handleKeyPress.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default.Component),r(t,[{key:"render",value:function(){var e=this;return a.default.createElement("div",{className:"search-container"},a.default.createElement("img",{className:"raddish-logo",src:"./src/js/images/raddish.png",alt:"raddish"}),a.default.createElement("h1",null,"M-Nutritioner"),a.default.createElement(c.default,{type:"text",value:this.state.value,onChange:this.handleChange,onKeyPress:this.handleKeyPress,placeholder:"Type product"}),a.default.createElement(l.default,{onClick:function(){return e.searchValue(e.state.value)}},"Search"))}}]),t}();t.default=(0,o.connect)(function(e){return e},function(e){return(0,u.bindActionCreators)({popUpError:s.popUpError,getSearchData:s.getSearchData,getNutritionData:s.getNutritionData,fetchNutritionPageContent:s.fetchNutritionPageContent},e)})(h)},510:function(e,t,n){"use strict";e.exports={apiKey:"yyrMO7Qv3IbCG81yxhMBin9L9DGue4B0iUGNjWPl",maxWeight:5e3,resultPerPage:7}}}]);
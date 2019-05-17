/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./templates/bidexchange.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./templates/AdaptorManager.js":
/*!*************************************!*\
  !*** ./templates/AdaptorManager.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nvar AdaptorManager = /** @class */ (function () {\n    function AdaptorManager() {\n    }\n    AdaptorManager.prototype.getBids = function (config, requestUrls) {\n        // gets api endpoints of all the providers and stores in the requestUrls map\n        var bidderData2 = [];\n        var floorprices;\n        var k = 0;\n        for (var i = 1; i <= config['adslots'].length;) {\n            for (var j = 0; j < config['providersMap'].length; j++) {\n                if (config['providersMap'][j].AdSlotID === i + 985120) {\n                    var sizesX = config['adslots'][i - 1].Size_height;\n                    var sizesY = config['adslots'][i - 1].Size_width;\n                    floorprices = config['providersMap'][j].FloorPrice;\n                    var externalPlacementId = config['providersMap'][k].PlacementID;\n                    var bidding = { 'AdSlotID': i + 985120, 'ExternalPlacementId': externalPlacementId, 'FloorPrice': floorprices, 'Size_height': sizesX, 'Size_width': sizesY };\n                    i++;\n                    k++;\n                    bidderData2.push(bidding);\n                    console.log(bidderData2);\n                    //break;\n                }\n            }\n        }\n        // fill payload\n        var payload = [];\n        payload.push({ bidderData: bidderData2 });\n        var bidderData3 = JSON.parse(JSON.stringify(bidderData2));\n        var bidderData4 = JSON.parse(JSON.stringify(bidderData2));\n        bidderData3[0].ExternalPlacementId = config['providersMap'][k++].PlacementID;\n        bidderData3[1].ExternalPlacementId = config['providersMap'][k++].PlacementID;\n        bidderData4[0].ExternalPlacementId = config['providersMap'][k++].PlacementID;\n        bidderData4[1].ExternalPlacementId = config['providersMap'][k++].PlacementID;\n        payload.push({ bidderData: bidderData3 });\n        payload.push({ bidderData: bidderData4 });\n        //        var payload = { bidderData: bidderData2 };\n        var baseUrl = 'http://localhost:5557';\n        var url = '';\n        var responses = [];\n        for (var r = 0; r < requestUrls.length; r++) {\n            url = baseUrl + requestUrls[r];\n            console.log(url);\n            var xhttp = new XMLHttpRequest();\n            xhttp.open(\"POST\", url, true);\n            xhttp.send(JSON.stringify(payload[r]));\n            xhttp.onreadystatechange = function () {\n                console.log(this.responseText);\n                responses.push(this.responseText);\n            };\n        }\n        return responses;\n    };\n    return AdaptorManager;\n}());\nexports[\"default\"] = AdaptorManager;\n\n\n//# sourceURL=webpack:///./templates/AdaptorManager.js?");

/***/ }),

/***/ "./templates/AuctionManager.js":
/*!*************************************!*\
  !*** ./templates/AuctionManager.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nvar AuctionManager = /** @class */ (function () {\n    function AuctionManager() {\n    }\n    AuctionManager.prototype.conductAuction = function (config, responses) {\n        // Slot Winner Array\n        var slotWinners = [];\n        for (var i = 0; i < config['adslots'].length; i++) {\n            slotWinners.push({\n                bidprice: 0,\n                AdCode: '',\n                Provider: '',\n                PlacementID: 0,\n                AdSlotID: 1\n            });\n        }\n        for (var j_1 = 0; j_1 < responses.length; j_1++) {\n            if (responses[j_1].bidderResponse[0].BidPrice > slotWinners[0].bidprice) {\n                slotWinners[0].bidprice = responses[j_1].bidderResponse[0].BidPrice;\n                slotWinners[0].Provider = responses[j_1].bidderResponse[0].Provider;\n                slotWinners[0].AdCode = responses[j_1].bidderResponse[0].Adcode;\n                slotWinners[0].AdSlotID = responses[j_1].bidderResponse[0].AdSlotID;\n                slotWinners[0].PlacementID = responses[j_1].bidderResponse[0].ExternalPlacementId;\n            }\n        }\n        for (var j_2 = 0; j_2 < responses.length; j_2++) {\n            if (responses[j_2].bidderResponse[1].BidPrice > slotWinners[1].bidprice) {\n                slotWinners[1].bidprice = responses[j_2].bidderResponse[1].BidPrice;\n                slotWinners[1].Provider = responses[j_2].bidderResponse[1].Provider;\n                slotWinners[1].AdCode = responses[j_2].bidderResponse[1].Adcode;\n                slotWinners[1].AdSlotID = responses[j_2].bidderResponse[1].AdSlotID;\n                slotWinners[1].PlacementID = responses[j_2].bidderResponse[1].ExternalPlacementId;\n            }\n        }\n        console.log(slotWinners);\n        return slotWinners;\n    };\n    AuctionManager.prototype.registerBids = function (responses) {\n        var slotwisebids = [];\n        var bidsarray = [];\n        for (var j_1 = 0; j_1 < responses.length; j_1++) {\n            bidsarray.push(responses[j_1].bidderResponse[0].BidPrice);\n        }\n        slotwisebids.push(bidsarray);\n        bidsarray = [];\n        for (var j_2 = 0; j_2 < responses.length; j_2++) {\n            bidsarray.push(responses[j_2].bidderResponse[1].BidPrice);\n        }\n        slotwisebids.push(bidsarray);\n        return slotwisebids;\n    };\n    return AuctionManager;\n}());\nexports[\"default\"] = AuctionManager;\n\n\n//# sourceURL=webpack:///./templates/AuctionManager.js?");

/***/ }),

/***/ "./templates/LogManager.js":
/*!*********************************!*\
  !*** ./templates/LogManager.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nvar LogManager = /** @class */ (function () {\n    function LogManager() {\n    }\n    LogManager.prototype.logData = function (config, providernames, slotwisebids, slotWinners, responses) {\n        var loggerobject = { \"PublisherID\": config['publishers'][0].PublisherID,\n            \"PublisherInfo\": []\n        };\n        for (var i = 1; i <= config['adslots'].length; i++) {\n            var infoobject = {\n                \"AdSlotID\": config['adslots'][i - 1].ID,\n                \"AdInfo\": {\n                    \"Participants\": providernames,\n                    \"Responses\": slotwisebids[i - 1],\n                    \"Winner\": slotWinners[i - 1].Provider\n                }\n            };\n            loggerobject.PublisherInfo.push(infoobject);\n        }\n        console.log(loggerobject);\n        var url = \"http://localhost:5557/api/generateLog\";\n        var xhttp = new XMLHttpRequest();\n        xhttp.open(\"POST\", url, true);\n        xhttp.send(JSON.stringify(loggerobject));\n        xhttp.onreadystatechange = function () {\n            console.log(this.responseText, \"log successful\");\n        };\n        var winnerobject = [];\n        for (var i_1 = 0; i_1 < slotWinners.length; i_1++) {\n            winnerobject.push({ \"AdSlotID\": slotWinners[i_1].AdSlotID, \"PlacementID\": slotWinners[i_1].PlacementID, \"PublisherID\": config['publishers'][0].PublisherID, \"Providername\": slotWinners[i_1].Provider });\n        }\n        var providerResponseObject = [];\n        for (var i_2 = 0; i_2 < responses.length; i_2++) {\n            for (var j = 0; j < config['adslots'].length; j++) {\n                var objresponse = Object.assign({}, responses[i_2].bidderResponse[j]);\n                objresponse.PublisherID = 1;\n                providerResponseObject.push(objresponse);\n            }\n        }\n        var participantsObject = [];\n        for (var i_3 = 0; i_3 < responses.length; i_3++) {\n            for (var j = 0; j < config['adslots'].length; j++) {\n                var objparticipants = Object.assign({}, responses[i_3].bidderResponse[j]);\n                delete objparticipants.Adcode;\n                delete objparticipants.BidPrice;\n                objparticipants.PublisherID = 1;\n                participantsObject.push(objparticipants);\n            }\n        }\n        console.log(\"Winnerobject:\", winnerobject);\n        console.log(\"ProviderResponseObject:\", providerResponseObject);\n        console.log(\"ParticipantObject:\", participantsObject);\n        var url2 = \"http://localhost:5557/api/postWinner\";\n        var xhttp2 = new XMLHttpRequest();\n        xhttp2.open(\"POST\", url2, true);\n        xhttp2.send(JSON.stringify(winnerobject));\n        xhttp2.onreadystatechange = function () {\n            console.log(this.responseText, \"log successful\");\n        };\n        var url3 = \"http://localhost:5557/api/postResponses\";\n        var xhttp3 = new XMLHttpRequest();\n        xhttp3.open(\"POST\", url3, true);\n        xhttp3.send(JSON.stringify(providerResponseObject));\n        xhttp3.onreadystatechange = function () {\n            console.log(this.responseText, \"log successful\");\n        };\n        var url4 = \"http://localhost:5557/api/postParticipants\";\n        var xhttp4 = new XMLHttpRequest();\n        xhttp4.open(\"POST\", url4, true);\n        xhttp4.send(JSON.stringify(participantsObject));\n        xhttp4.onreadystatechange = function () {\n            console.log(this.responseText, \"log successful\");\n        };\n    };\n    return LogManager;\n}());\nexports[\"default\"] = LogManager;\n\n\n//# sourceURL=webpack:///./templates/LogManager.js?");

/***/ }),

/***/ "./templates/bidexchange.js":
/*!**********************************!*\
  !*** ./templates/bidexchange.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nvar AdaptorManager_1 = __webpack_require__(/*! ./AdaptorManager */ \"./templates/AdaptorManager.js\");\nvar LogManager_1 = __webpack_require__(/*! ./LogManager */ \"./templates/LogManager.js\");\nvar AuctionManager_1 = __webpack_require__(/*! ./AuctionManager */ \"./templates/AuctionManager.js\");\nvar configfile_1 = __webpack_require__(/*! ./configfile */ \"./templates/configfile.js\");\nvar uniqueArray = function (arrArg) {\n    return arrArg.filter(function (elem, pos, arr) {\n        return arr.indexOf(elem) == pos;\n    });\n};\nvar providernames = [];\nvar mapobject = { 'div1': '', 'div2': '' };\nvar config = configfile_1.config;\nconsole.log(configfile_1.config);\nconsole.log(\"Hello\");\nvar entrypoint;\nvar requestUrls = [];\nvar slotWinners = [];\nvar slotwisebids = [];\nfor (var i = 0; i < config['Provider'].length; i++) {\n    entrypoint = config['Provider'][i].EntryPoint;\n    providernames.push(config['Provider'][i].NAME);\n    requestUrls.push(entrypoint);\n    console.log(requestUrls);\n}\n// Adaptor Manager\nvar adaptorobject = new AdaptorManager_1[\"default\"]();\nvar responses = adaptorobject.getBids(config, requestUrls);\nsetTimeout(function () {\n    responses = uniqueArray(responses);\n    responses.shift();\n    for (var i_1 = 0; i_1 < responses.length; i_1++) {\n        responses[i_1] = JSON.parse(responses[i_1]);\n    }\n    console.log(responses);\n    console.log(\"this is it\");\n    //  auction logic\n    var auctionobject = new AuctionManager_1[\"default\"]();\n    slotWinners = auctionobject.conductAuction(config, responses);\n    slotwisebids = auctionobject.registerBids(responses);\n    // map to store div and adslot\n    mapobject.div1 = slotWinners[0].AdCode;\n    mapobject.div2 = slotWinners[1].AdCode;\n    // call Log Manager\n    var loggerobject = new LogManager_1[\"default\"]();\n    loggerobject.logData(config, providernames, slotwisebids, slotWinners, responses);\n}, 100);\nwindow.getAdd = function (adId) {\n    var adcode = '';\n    for (var i_2 = 0; i_2 < config['providersMap'].length; i_2++) {\n        if (adId === config['providersMap'][i_2].DivID) {\n            var slot = config['providersMap'][i_2].AdSlotID;\n            for (var j = 0; j < slotWinners.length; j++) {\n                if (slot === slotWinners[j].AdSlotID) {\n                    adcode = slotWinners[j].AdCode;\n                }\n            }\n            break;\n        }\n    }\n    var ifrm = document.createElement(\"iframe\");\n    document.getElementById(adId).appendChild(ifrm);\n    ifrm.outerHTML = adcode;\n    //ifrm.style.width = \"640px\";\n    //ifrm.style.height = \"480px\";\n};\n\n\n//# sourceURL=webpack:///./templates/bidexchange.js?");

/***/ }),

/***/ "./templates/configfile.js":
/*!*********************************!*\
  !*** ./templates/configfile.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nvar config = { 'Provider': [{ \"ProviderID\": 1, \"NAME\": \"OpenX\", \"EntryPoint\": \"/api/OpenX\" }, { \"ProviderID\": 2, \"NAME\": \"NetApp\", \"EntryPoint\": \"/api/NetApp\" }, { \"ProviderID\": 3, \"NAME\": \"InMobi\", \"EntryPoint\": \"/api/InMobi\" }], 'providersMap': [{ \"RevenueShare\": \"0.2\", \"FloorPrice\": 2, \"PlacementID\": 1651, \"PublisherID\": 1, \"AdSlotID\": 985121, \"ProviderID\": 1, \"DivID\": \"div1\" }, { \"RevenueShare\": \"0.2\", \"FloorPrice\": 2, \"PlacementID\": 1652, \"PublisherID\": 1, \"AdSlotID\": 985121, \"ProviderID\": 2, \"DivID\": \"div1\" }, { \"RevenueShare\": \"0.2\", \"FloorPrice\": 2, \"PlacementID\": 1653, \"PublisherID\": 1, \"AdSlotID\": 985121, \"ProviderID\": 3, \"DivID\": \"div1\" }, { \"RevenueShare\": \"0.25\", \"FloorPrice\": 1, \"PlacementID\": 1654, \"PublisherID\": 1, \"AdSlotID\": 985122, \"ProviderID\": 1, \"DivID\": \"div2\" }, { \"RevenueShare\": \"0.25\", \"FloorPrice\": 1, \"PlacementID\": 1655, \"PublisherID\": 1, \"AdSlotID\": 985122, \"ProviderID\": 2, \"DivID\": \"div2\" }, { \"RevenueShare\": \"0.25\", \"FloorPrice\": 1, \"PlacementID\": 1656, \"PublisherID\": 1, \"AdSlotID\": 985122, \"ProviderID\": 3, \"DivID\": \"div2\" }], 'adslots': [{ \"ID\": 985121, \"NAME\": \"adslot1\", \"PublisherID\": 1, \"Size_height\": \"300\", \"Size_width\": \"250\" }, { \"ID\": 985122, \"NAME\": \"adslot2\", \"PublisherID\": 1, \"Size_height\": \"300\", \"Size_width\": \"250\" }], 'publishers': [{ \"PublisherID\": 1, \"NAME\": \"Forbes\", \"IsActive\": \"Y\" }] };\nexports.config = config;\n\n\n//# sourceURL=webpack:///./templates/configfile.js?");

/***/ })

/******/ });
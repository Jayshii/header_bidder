"use strict";
exports.__esModule = true;
var AdaptorManager_1 = require("./AdaptorManager");
var LogManager_1 = require("./LogManager");
var AuctionManager_1 = require("./AuctionManager");
var configfile_1 = require("./configfile");
var uniqueArray = function (arrArg) {
    return arrArg.filter(function (elem, pos, arr) {
        return arr.indexOf(elem) == pos;
    });
};
var providernames = [];
var mapobject = { 'div1': '', 'div2': '' };
var config = configfile_1.config;
console.log(configfile_1.config);
console.log("Hello");
var entrypoint;
var requestUrls = [];
var slotWinners = [];
var slotwisebids = [];
for (var i = 0; i < config['Provider'].length; i++) {
    entrypoint = config['Provider'][i].EntryPoint;
    providernames.push(config['Provider'][i].NAME);
    requestUrls.push(entrypoint);
    console.log(requestUrls);
}
// Adaptor Manager
var adaptorobject = new AdaptorManager_1["default"]();
var responses = adaptorobject.getBids(config, requestUrls);
setTimeout(function () {
    responses = uniqueArray(responses);
    responses.shift();
    for (var i_1 = 0; i_1 < responses.length; i_1++) {
        responses[i_1] = JSON.parse(responses[i_1]);
    }
    console.log(responses);
    console.log("this is it");
    //  auction logic
    var auctionobject = new AuctionManager_1["default"]();
    slotWinners = auctionobject.conductAuction(config, responses);
    slotwisebids = auctionobject.registerBids(responses);
    // map to store div and adslot
    mapobject.div1 = slotWinners[0].AdCode;
    mapobject.div2 = slotWinners[1].AdCode;
    // call Log Manager
    var loggerobject = new LogManager_1["default"]();
    loggerobject.logData(config, providernames, slotwisebids, slotWinners, responses);
}, 100);
window.getAdd = function (adId) {
    var adcode = '';
    for (var i_2 = 0; i_2 < config['providersMap'].length; i_2++) {
        if (adId === config['providersMap'][i_2].DivID) {
            var slot = config['providersMap'][i_2].AdSlotID;
            for (var j = 0; j < slotWinners.length; j++) {
                if (slot === slotWinners[j].AdSlotID) {
                    adcode = slotWinners[j].AdCode;
                }
            }
            break;
        }
    }
    var ifrm = document.createElement("iframe");
    document.getElementById(adId).appendChild(ifrm);
    ifrm.outerHTML = adcode;
    //ifrm.style.width = "640px";
    //ifrm.style.height = "480px";
};

"use strict";
exports.__esModule = true;
var LogManager = /** @class */ (function () {
    function LogManager() {
    }
    LogManager.prototype.logData = function (config, providernames, slotwisebids, slotWinners, responses) {
        var loggerobject = { "PublisherID": config['publishers'][0].PublisherID,
            "PublisherInfo": []
        };
        for (var i = 1; i <= config['adslots'].length; i++) {
            var infoobject = {
                "AdSlotID": config['adslots'][i - 1].ID,
                "AdInfo": {
                    "Participants": providernames,
                    "Responses": slotwisebids[i - 1],
                    "Winner": slotWinners[i - 1].Provider
                }
            };
            loggerobject.PublisherInfo.push(infoobject);
        }
        console.log(loggerobject);
        var url = "http://localhost:5557/api/generateLog";
        var xhttp = new XMLHttpRequest();
        xhttp.open("POST", url, true);
        xhttp.send(JSON.stringify(loggerobject));
        xhttp.onreadystatechange = function () {
            console.log(this.responseText, "log successful");
        };
        var winnerobject = [];
        for (var i_1 = 0; i_1 < slotWinners.length; i_1++) {
            winnerobject.push({ "AdSlotID": slotWinners[i_1].AdSlotID, "PlacementID": slotWinners[i_1].PlacementID, "PublisherID": config['publishers'][0].PublisherID, "Providername": slotWinners[i_1].Provider });
        }
        var providerResponseObject = [];
        for (var i_2 = 0; i_2 < responses.length; i_2++) {
            for (var j = 0; j < config['adslots'].length; j++) {
                var objresponse = Object.assign({}, responses[i_2].bidderResponse[j]);
                objresponse.PublisherID = 1;
                providerResponseObject.push(objresponse);
            }
        }
        var participantsObject = [];
        for (var i_3 = 0; i_3 < responses.length; i_3++) {
            for (var j = 0; j < config['adslots'].length; j++) {
                var objparticipants = Object.assign({}, responses[i_3].bidderResponse[j]);
                delete objparticipants.Adcode;
                delete objparticipants.BidPrice;
                objparticipants.PublisherID = 1;
                participantsObject.push(objparticipants);
            }
        }
        console.log("Winnerobject:", winnerobject);
        console.log("ProviderResponseObject:", providerResponseObject);
        console.log("ParticipantObject:", participantsObject);
        var url2 = "http://localhost:5557/api/postWinner";
        var xhttp2 = new XMLHttpRequest();
        xhttp2.open("POST", url2, true);
        xhttp2.send(JSON.stringify(winnerobject));
        xhttp2.onreadystatechange = function () {
            console.log(this.responseText, "log successful");
        };
        var url3 = "http://localhost:5557/api/postResponses";
        var xhttp3 = new XMLHttpRequest();
        xhttp3.open("POST", url3, true);
        xhttp3.send(JSON.stringify(providerResponseObject));
        xhttp3.onreadystatechange = function () {
            console.log(this.responseText, "log successful");
        };
        var url4 = "http://localhost:5557/api/postParticipants";
        var xhttp4 = new XMLHttpRequest();
        xhttp4.open("POST", url4, true);
        xhttp4.send(JSON.stringify(participantsObject));
        xhttp4.onreadystatechange = function () {
            console.log(this.responseText, "log successful");
        };
    };
    return LogManager;
}());
exports["default"] = LogManager;

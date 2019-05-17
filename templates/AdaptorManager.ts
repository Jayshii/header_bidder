export default class AdaptorManager {
    getBids(config,requestUrls){
          // gets api endpoints of all the providers and stores in the requestUrls map
        var bidderData2 = [];
        var floorprices;
        var k=0;
        for (var i = 1; i <= config['adslots'].length;) {
            for (var j = 0; j < config['providersMap'].length; j++) {
                if (config['providersMap'][j].AdSlotID === i+985120) {
                    var sizesX = config['adslots'][i - 1].Size_height;
                    var sizesY = config['adslots'][i - 1].Size_width;
                    floorprices = config['providersMap'][j].FloorPrice;
                    let externalPlacementId =  config['providersMap'][k].PlacementID;
                    var bidding = { 'AdSlotID': i+985120,'ExternalPlacementId': externalPlacementId, 'FloorPrice': floorprices, 'Size_height': sizesX,'Size_width': sizesY};
                    i++;
                    k++;
                    bidderData2.push(bidding);
                    console.log(bidderData2);
                    //break;
                }
            }
        }
        // fill payload
        var payload=[];
        payload.push({bidderData: bidderData2});
        let bidderData3 = JSON.parse(JSON.stringify(bidderData2));
        let bidderData4 = JSON.parse(JSON.stringify(bidderData2));
            bidderData3[0].ExternalPlacementId = config['providersMap'][k++].PlacementID;
            bidderData3[1].ExternalPlacementId = config['providersMap'][k++].PlacementID;
            bidderData4[0].ExternalPlacementId = config['providersMap'][k++].PlacementID;
            bidderData4[1].ExternalPlacementId = config['providersMap'][k++].PlacementID;
            payload.push({bidderData: bidderData3})
            payload.push({bidderData: bidderData4})
//        var payload = { bidderData: bidderData2 };
    
        var baseUrl = 'http://localhost:5557';
    var url = '';
    var responses = [];

    for (var r = 0; r < requestUrls.length; r++) {
        url = baseUrl + requestUrls[r];
        console.log(url);
        var xhttp = new XMLHttpRequest();
        xhttp.open("POST", url, true);
        xhttp.send(JSON.stringify(payload[r]));
        xhttp.onreadystatechange = function () {
            console.log(this.responseText);
            responses.push(this.responseText);
        };
    }
    return responses;
    }   
}


export default class AuctionManager {
    conductAuction(config,responses){

        // Slot Winner Array
 var slotWinners = [];       
for(let i =0;i<config['adslots'].length;i++){
    slotWinners.push({
        bidprice: 0,
        AdCode: '',
        Provider: '',
        PlacementID: 0,
        AdSlotID: 1,    
    });
}
        
        for (var j_1 = 0; j_1 < responses.length; j_1++) {
            if (responses[j_1].bidderResponse[0].BidPrice > slotWinners[0].bidprice) {
                slotWinners[0].bidprice = responses[j_1].bidderResponse[0].BidPrice;
                slotWinners[0].Provider = responses[j_1].bidderResponse[0].Provider;
                slotWinners[0].AdCode = responses[j_1].bidderResponse[0].Adcode;
                slotWinners[0].AdSlotID = responses[j_1].bidderResponse[0].AdSlotID;
                slotWinners[0].PlacementID = responses[j_1].bidderResponse[0].ExternalPlacementId;
            }
        }
        for (var j_2 = 0; j_2 < responses.length; j_2++) {
            if (responses[j_2].bidderResponse[1].BidPrice > slotWinners[1].bidprice) {
                slotWinners[1].bidprice = responses[j_2].bidderResponse[1].BidPrice;
                slotWinners[1].Provider = responses[j_2].bidderResponse[1].Provider;
                slotWinners[1].AdCode = responses[j_2].bidderResponse[1].Adcode;
                slotWinners[1].AdSlotID = responses[j_2].bidderResponse[1].AdSlotID;
                slotWinners[1].PlacementID = responses[j_2].bidderResponse[1].ExternalPlacementId;
            }
        }
        console.log(slotWinners);
        return slotWinners;
    }   

    registerBids(responses){
        var slotwisebids = [];
        let bidsarray = [];
        for (var j_1 = 0; j_1 < responses.length; j_1++) {
            bidsarray.push(responses[j_1].bidderResponse[0].BidPrice);
        }
        slotwisebids.push(bidsarray);
        bidsarray=[];
        for (var j_2 = 0; j_2 < responses.length; j_2++) {
            bidsarray.push(responses[j_2].bidderResponse[1].BidPrice);
        }
        slotwisebids.push(bidsarray);
        return slotwisebids;
    }
}


import AdaptorManager from './AdaptorManager'
import LogManager from './LogManager'
import AuctionManager from './AuctionManager'
import {config as config2} from './configfile'

var uniqueArray = function(arrArg) {
    return arrArg.filter(function(elem, pos,arr) {
    return arr.indexOf(elem) == pos;
      });
    };

var providernames = [];
var mapobject = {'div1':'','div2':''};

var config=config2
console.log(config2);
console.log("Hello");

var entrypoint;
var requestUrls = [];
var slotWinners=[];
var slotwisebids = [];
for (var i = 0; i < config['Provider'].length; i++) {
    entrypoint = config['Provider'][i].EntryPoint;
    providernames.push(config['Provider'][i].NAME);
    requestUrls.push(entrypoint);
    console.log(requestUrls);
}

    // Adaptor Manager
   var adaptorobject = new AdaptorManager();
    var responses = adaptorobject.getBids(config,requestUrls);

    setTimeout(function () {

        responses = uniqueArray(responses);
        responses.shift();
        for(let i=0;i<responses.length;i++){
            responses[i] = JSON.parse(responses[i])
        }
        console.log(responses);    
        console.log("this is it");

       //  auction logic
        var auctionobject = new AuctionManager();
         slotWinners = auctionobject.conductAuction(config,responses);
         slotwisebids = auctionobject.registerBids(responses);
        // map to store div and adslot
        mapobject.div1 = slotWinners[0].AdCode;
        mapobject.div2 = slotWinners[1].AdCode;
               
        // call Log Manager
        var loggerobject = new LogManager();
       loggerobject.logData(config,providernames,slotwisebids,slotWinners,responses);

    }, 100);


    window.getAdd = function(adId){
        let adcode='';
        for(let i=0;i<config['providersMap'].length;i++){
            if(adId === config['providersMap'][i].DivID){
                let slot = config['providersMap'][i].AdSlotID;
                for(let j=0;j<slotWinners.length;j++){
                    if(slot === slotWinners[j].AdSlotID){
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
    }

    




export default class LogManager {
    logData(config,providernames,slotwisebids,slotWinners,responses){
        var loggerobject = {"PublisherID":config['publishers'][0].PublisherID,
        "PublisherInfo":[]
        };
        
        for (var i = 1; i <= config['adslots'].length;i++) {
        let infoobject = {
        "AdSlotID":config['adslots'][i-1].ID,
        "AdInfo":{
        "Participants":providernames,
        "Responses":slotwisebids[i-1],
        "Winner":slotWinners[i-1].Provider
        }
        };
        loggerobject.PublisherInfo.push(infoobject);
        }
        console.log(loggerobject);
        let url = "http://localhost:5557/api/generateLog";
        var xhttp = new XMLHttpRequest();
                xhttp.open("POST", url, true);
                xhttp.send(JSON.stringify(loggerobject));
                xhttp.onreadystatechange = function () {
                    console.log(this.responseText,"log successful");
                };

         let winnerobject = [];
         for(let i=0;i<slotWinners.length;i++){
             winnerobject.push({"AdSlotID":slotWinners[i].AdSlotID,"PlacementID":slotWinners[i].PlacementID,"PublisherID":config['publishers'][0].PublisherID,"Providername":slotWinners[i].Provider})
         }  
         
         let providerResponseObject = [];
         for(let i=0;i<responses.length;i++){
             for(let j=0;j<config['adslots'].length;j++){
                let objresponse = Object.assign({},responses[i].bidderResponse[j]);
                objresponse.PublisherID = 1;
                providerResponseObject.push(objresponse);
             }
            }

            let participantsObject = [];
         for(let i=0;i<responses.length;i++){
             for(let j=0;j<config['adslots'].length;j++){
                let objparticipants = Object.assign({},responses[i].bidderResponse[j]);
                delete objparticipants.Adcode;
               delete objparticipants.BidPrice;
                objparticipants.PublisherID = 1;
                participantsObject.push(objparticipants);
             }
            }

            console.log("Winnerobject:",winnerobject);
            console.log("ProviderResponseObject:",providerResponseObject);
            console.log("ParticipantObject:",participantsObject);



        let url2 = "http://localhost:5557/api/postWinner";
        var xhttp2 = new XMLHttpRequest();
                xhttp2.open("POST", url2, true);
                xhttp2.send(JSON.stringify(winnerobject));
                xhttp2.onreadystatechange = function () {
                    console.log(this.responseText,"log successful");
                };
                
        let url3 = "http://localhost:5557/api/postResponses";
        var xhttp3 = new XMLHttpRequest();
                    xhttp3.open("POST", url3, true);
                    xhttp3.send(JSON.stringify(providerResponseObject));
                    xhttp3.onreadystatechange = function () {
                       console.log(this.responseText,"log successful");
                };

               let url4 = "http://localhost:5557/api/postParticipants";
        var xhttp4 = new XMLHttpRequest();
                    xhttp4.open("POST", url4, true);
                    xhttp4.send(JSON.stringify(participantsObject));
                   xhttp4.onreadystatechange = function () {
                       console.log(this.responseText,"log successful");
                };


          }
          
}


package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"math/rand"
	"net/http"
)

type providerBid struct {
	Bidprice int
	Name     string
}

var providerbid providerBid

func generateBidsForOpenX(w http.ResponseWriter, r *http.Request) {
	fmt.Println("Bids for OpenX")
	//	w.Header().Set("Content-Type", "application/json")
	//	var target string
	if r.Method == "POST" {
		body, err := ioutil.ReadAll(r.Body)
		//json.NewDecoder(r.Body).Decode(target)
		if err != nil {
			http.Error(w, "Error reading request body",
				http.StatusInternalServerError)
		}

		//log.Println(string(body))
		log.Println("Post for OpenX")
		json.Unmarshal(body, &bidmapobject)
		height := bidmapobject.BidderData[0].Size_height
		log.Println(height, "px")
		adcodes := `<!DOCTYPE html>
		<html>
		<head>
		</head>
		<body>
        <style type="text/css">
		body { text-size-adjust:none; -webkit-text-size-adjust: none; }
		{margin:0;padding:0}
		a{text-decoration:none;outline:none}
		a:hover{cursor:pointer; text-indent: 0}
		img{border:none}
		ul li{list-style:none}
		.clearfix:after{visibility: hidden;display:block;font-size: 0;content: " ";clear: both;height:0}
		* html .clearfix{zoom:1}
		*:first-child+html .clearfix{zoom:1}
		h1, h2, h3, h4, h5, h6 {font-weight: normal}
		body{background:#f4f4f4}
		h3{ font-family: arial; color: #000; font-size: 35px; text-align: center; height: %spx; line-height: %spx;}
		</style>
		<h3>OpenX Creative </h3>
		</body>`
		adcodes = fmt.Sprintf(adcodes, height, height)

		bidpriceobjectx.BidderResponse = nil
		// logic to populate bidprice object from bimapobject

		for i, num := range bidmapobject.BidderData {
			bid := rand.Intn(8)
			bidpriceobjecta := bidResponseTemp{AdSlotID: bidmapobject.BidderData[i].AdSlotID, BidPrice: bid + bidmapobject.BidderData[i].FloorPrice, Provider: "OpenX", Adcode: adcodes, ExternalPlacementId: bidmapobject.BidderData[i].ExternalPlacementId}
			bidpriceobjectx.BidderResponse = append(bidpriceobjectx.BidderResponse, bidpriceobjecta)
			log.Println(bidpriceobjectx, num)
		}

		e2, err2 := json.Marshal(bidpriceobjectx)
		if err2 != nil {
			fmt.Println(err)
		}

		log.Println(string(e2))

		w.Header().Set("Content-Type", "application/json")
		w.Header().Set("Access-Control-Allow-Origin", "*")
		fmt.Fprintf(w, string(e2))
		//json.NewEncoder(w).Encode(string(e))
	} else {
		http.Error(w, "Invalid request method", http.StatusMethodNotAllowed)
	}

}

func generateBidsForInMobi(w http.ResponseWriter, r *http.Request) {
	fmt.Println("Bids for InMobi")
	if r.Method == "POST" {
		body, err := ioutil.ReadAll(r.Body)
		if err != nil {
			http.Error(w, "Error reading request body",
				http.StatusInternalServerError)
		}

		//log.Println(string(body))
		//log.Println("Post for InMobi")
		json.Unmarshal(body, &bidmapobject)
		height := bidmapobject.BidderData[0].Size_height
		log.Println(height, "px")
		adcodes := `<!DOCTYPE html>
		<html>
		<head>
		</head>
		<body>
        <style type="text/css">
		body { text-size-adjust:none; -webkit-text-size-adjust: none; }
		{margin:0;padding:0}
		a{text-decoration:none;outline:none}
		a:hover{cursor:pointer; text-indent: 0}
		img{border:none}
		ul li{list-style:none}
		.clearfix:after{visibility: hidden;display:block;font-size: 0;content: " ";clear: both;height:0}
		* html .clearfix{zoom:1}
		*:first-child+html .clearfix{zoom:1}
		h1, h2, h3, h4, h5, h6 {font-weight: normal}
		body{background:#f4f4f4}
		h3{ font-family: arial; color: #000; font-size: 35px; text-align: center; height: %spx; line-height: %spx;}
		</style>
		<h3>InMobi Creative </h3>
		</body>`
		adcodes = fmt.Sprintf(adcodes, height, height)

		bidpriceobjecty.BidderResponse = nil

		for i, num := range bidmapobject.BidderData {
			bid := rand.Intn(8)
			bidpriceobjectb := bidResponseTemp{AdSlotID: bidmapobject.BidderData[i].AdSlotID, BidPrice: bid + bidmapobject.BidderData[i].FloorPrice, Provider: "InMobi", Adcode: adcodes, ExternalPlacementId: bidmapobject.BidderData[i].ExternalPlacementId}
			bidpriceobjecty.BidderResponse = append(bidpriceobjecty.BidderResponse, bidpriceobjectb)
			log.Println(bidpriceobjecty, num)
		}
		e2, err2 := json.Marshal(bidpriceobjecty)
		if err2 != nil {
			fmt.Println(err)
		}

		log.Println(string(e2))

		w.Header().Set("Content-Type", "application/json")
		w.Header().Set("Access-Control-Allow-Origin", "*")
		fmt.Fprintf(w, string(e2))

	} else {
		http.Error(w, "Invalid request method", http.StatusMethodNotAllowed)
	}
}

func generateBidsForNetApp(w http.ResponseWriter, r *http.Request) {
	fmt.Println("Bids for NetApp")
	if r.Method == "POST" {
		body, err := ioutil.ReadAll(r.Body)
		if err != nil {
			http.Error(w, "Error reading request body",
				http.StatusInternalServerError)
		}

		json.Unmarshal(body, &bidmapobject)
		height := bidmapobject.BidderData[0].Size_height
		log.Println(height)
		adcodes := `<!DOCTYPE html>
		<html>
		<head>
		</head>
		<body>
        <style type="text/css">
		body { text-size-adjust:none; -webkit-text-size-adjust: none; }
		{margin:0;padding:0}
		a{text-decoration:none;outline:none}
		a:hover{cursor:pointer; text-indent: 0}
		img{border:none}
		ul li{list-style:none}
		.clearfix:after{visibility: hidden;display:block;font-size: 0;content: " ";clear: both;height:0}
		* html .clearfix{zoom:1}
		*:first-child+html .clearfix{zoom:1}
		h1, h2, h3, h4, h5, h6 {font-weight: normal}
		body{background:#f4f4f4}
		h3{ font-family: arial; color: #000; font-size: 35px; text-align: center; height: %spx; line-height: %spx;}
		</style>
		<h3>NetApp Creative </h3>
		</body>`
		adcodes = fmt.Sprintf(adcodes, height, height)
		bidpriceobjectz.BidderResponse = nil

		for i, num := range bidmapobject.BidderData {
			bid := rand.Intn(8)
			bidpriceobjectc := bidResponseTemp{AdSlotID: bidmapobject.BidderData[i].AdSlotID, BidPrice: bid + bidmapobject.BidderData[i].FloorPrice, Provider: "NetApp", Adcode: adcodes, ExternalPlacementId: bidmapobject.BidderData[i].ExternalPlacementId}
			bidpriceobjectz.BidderResponse = append(bidpriceobjectz.BidderResponse, bidpriceobjectc)
			log.Println(bidpriceobjectz, num)
		}

		e2, err2 := json.Marshal(bidpriceobjectz)
		if err2 != nil {
			fmt.Println(err)
		}

		log.Println(string(e2))

		w.Header().Set("Content-Type", "application/json")
		w.Header().Set("Access-Control-Allow-Origin", "*")
		fmt.Fprintf(w, string(e2))
	} else {
		http.Error(w, "Invalid request method", http.StatusMethodNotAllowed)
	}
}

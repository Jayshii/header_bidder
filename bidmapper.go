package main

type bidMapper struct {
	BidderData []struct {
		AdSlotID            int    `json:"AdSlotID"`
		FloorPrice          int    `json:"FloorPrice"`
		Size_height         string `json:"Size_height"`
		Size_width          string `json:"Size_width"`
		ExternalPlacementId int    `json:"ExternalPlacementId"`
	} `json:"bidderData"`
}

type bidResponse struct {
	BidderResponse []struct {
		AdSlotID            int    `json:"AdSlotID"`
		BidPrice            int    `json:"BidPrice"`
		Provider            string `json:"Provider"`
		Adcode              string `json:"Adcode"`
		ExternalPlacementId int    `json:"ExternalPlacementId"`
	} `json:"bidderResponse"`
}

type bidResponseTemp struct {
	AdSlotID            int    `json:"AdSlotID"`
	BidPrice            int    `json:"BidPrice"`
	Provider            string `json:"Provider"`
	Adcode              string `json:"Adcode"`
	ExternalPlacementId int    `json:"ExternalPlacementId"`
}

type Winner []struct {
	AdSlotID     int    `json:"AdSlotID"`
	PlacementID  int    `json:"PlacementID"`
	PublisherID  int    `json:"PublisherID"`
	Providername string `json:"Providername"`
}

type Responses []struct {
	AdSlotID            int    `json:"AdSlotID"`
	BidPrice            int    `json:"BidPrice"`
	Provider            string `json:"Provider"`
	Adcode              string `json:"Adcode"`
	ExternalPlacementID int    `json:"ExternalPlacementId"`
	PublisherID         int    `json:"PublisherID"`
}

type Participant []struct {
	AdSlotID            int    `json:"AdSlotID"`
	Provider            string `json:"Provider"`
	ExternalPlacementID int    `json:"ExternalPlacementId"`
	PublisherID         int    `json:"PublisherID"`
}

var bidmapobject bidMapper
var winner Winner
var responses Responses
var participant Participant
var bidpriceobjectx bidResponse
var bidpriceobjecty bidResponse
var bidpriceobjectz bidResponse

var bidpriceobjecta bidResponseTemp
var bidpriceobjectb bidResponseTemp
var bidpriceobjectc bidResponseTemp

package main

type Provider struct {
	ProviderID int    `json:"ProviderID"`
	NAME       string `json:"NAME"`
	EntryPoint string `json:"EntryPoint"`
}

type ProviderMap struct {
	RevenueShare        string `json:"RevenueShare"`
	FloorPrice          int    `json:"FloorPrice"`
	ExternalPlacementID int    `json:"PlacementID"`
	ExternalPublisherID int    `json:"PublisherID"`
	AdSlotID            int    `json:"AdSlotID"`
	ProviderID          int    `json:"ProviderID"`
	DivID               string `json:"DivID"`
}

type Publisher struct {
	PublisherID int    `json:"PublisherID"`
	NAME        string `json:"NAME"`
	IsActive    string `json:"IsActive"`
}

type ADSLOT struct {
	ID          int    `json:"ID"`
	NAME        string `json:"NAME"`
	PublisherID int    `json:"PublisherID"`
	Size_height string `json:"Size_height"`
	Size_width  string `json:"Size_width"`
}

var provider_object Provider
var pmap_object ProviderMap
var adslot_object ADSLOT
var publisher_object Publisher

var provider []Provider
var pmap []ProviderMap
var adslot []ADSLOT
var publisher []Publisher

func main() {
	// generate application code
	GenerateApplicationCode()
	// handle api requests
	handleRequests()
}

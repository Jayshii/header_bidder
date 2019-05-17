package main

import (
	"database/sql"
	"fmt"
	"log"
	"strconv"

	_ "github.com/go-sql-driver/mysql"
)

func check(e error) {
	if e != nil {
		panic(e)
	}
}

func getProvidersList() {
	provider = nil
	db, err := sql.Open("mysql",
		"root:Jayshi@1509@tcp(127.0.0.1:3306)/HEADER_Bidder")

	check(err)
	fmt.Println("success")

	rows, err := db.Query("select ProviderID,NAME,EntryPoint from provider")

	check(err)
	defer rows.Close()
	for rows.Next() {
		err := rows.Scan(&provider_object.ProviderID, &provider_object.NAME, &provider_object.EntryPoint)
		provider = append(provider, Provider{
			ProviderID: provider_object.ProviderID,
			NAME:       provider_object.NAME,
			EntryPoint: provider_object.EntryPoint})
		check(err)
		log.Println(provider_object.ProviderID, provider_object.NAME, provider_object.EntryPoint)
	}
	err = rows.Err()
	check(err)
	defer db.Close()
}

func getProviderMapList(id string) {
	pmap = nil
	db, err := sql.Open("mysql",
		"root:Jayshi@1509@tcp(127.0.0.1:3306)/HEADER_Bidder")
	check(err)
	fmt.Println("success")
	filter, err := strconv.ParseInt(id, 10, 64)

	rows, err := db.Query("select * from AdProviderMap where ExternalPublisherID = ?", filter)
	check(err)

	defer rows.Close()
	for rows.Next() {
		err := rows.Scan(&pmap_object.RevenueShare, &pmap_object.ExternalPlacementID, &pmap_object.ExternalPublisherID, &pmap_object.FloorPrice, &pmap_object.AdSlotID, &pmap_object.ProviderID, &pmap_object.DivID)
		pmap = append(pmap, ProviderMap{
			RevenueShare:        pmap_object.RevenueShare,
			ExternalPlacementID: pmap_object.ExternalPlacementID,
			ExternalPublisherID: pmap_object.ExternalPublisherID,
			FloorPrice:          pmap_object.FloorPrice,
			AdSlotID:            pmap_object.AdSlotID,
			ProviderID:          pmap_object.ProviderID,
			DivID:               pmap_object.DivID})

		check(err)
		log.Println(pmap_object.RevenueShare, pmap_object.ExternalPlacementID, pmap_object.ExternalPublisherID, pmap_object.FloorPrice, pmap_object.AdSlotID, pmap_object.ProviderID, pmap_object.DivID)

	}
	err = rows.Err()
	check(err)
	defer db.Close()
}

func getPublishersList(id string) {
	publisher = nil
	fmt.Println(id)
	db, err := sql.Open("mysql",
		"root:Jayshi@1509@tcp(127.0.0.1:3306)/HEADER_Bidder")
	check(err)
	fmt.Println("success")
	filter, err := strconv.ParseInt(id, 10, 64)

	rows, err := db.Query("select * from Publisher where ID = ?", filter)
	check(err)
	defer rows.Close()
	for rows.Next() {
		err := rows.Scan(&publisher_object.PublisherID, &publisher_object.IsActive, &publisher_object.NAME)
		publisher = append(publisher, Publisher{
			PublisherID: publisher_object.PublisherID,
			NAME:        publisher_object.NAME,
			IsActive:    publisher_object.IsActive})
		check(err)
		log.Println(publisher_object.PublisherID, publisher_object.IsActive, publisher_object.NAME)
	}
	err = rows.Err()
	check(err)
	defer db.Close()
}

func getAdSlots(id string) {
	adslot = nil
	db, err := sql.Open("mysql",
		"root:Jayshi@1509@tcp(127.0.0.1:3306)/HEADER_Bidder")
	check(err)
	fmt.Println("success")
	filter, err := strconv.ParseInt(id, 10, 64)

	rows, err := db.Query("select * from ADSLOT where PublisherID = ?", filter)
	check(err)
	defer rows.Close()
	for rows.Next() {
		err := rows.Scan(&adslot_object.ID, &adslot_object.Size_height, &adslot_object.NAME, &adslot_object.PublisherID, &adslot_object.Size_width)
		adslot = append(adslot, ADSLOT{
			ID:          adslot_object.ID,
			NAME:        adslot_object.NAME,
			PublisherID: adslot_object.PublisherID,
			Size_height: adslot_object.Size_height,
			Size_width:  adslot_object.Size_width})
		check(err)
		log.Println(adslot_object.ID, adslot_object.Size_height, adslot_object.Size_width, adslot_object.NAME, adslot_object.PublisherID)
	}
	err = rows.Err()
	check(err)
	defer db.Close()
}

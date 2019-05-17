package main

import (
	"database/sql"
	"fmt"
	"log"
	"time"

	_ "github.com/go-sql-driver/mysql"
)

func postwinnerdb() {
	db, err := sql.Open("mysql",
		"root:Jayshi@1509@tcp(127.0.0.1:3306)/HEADER_Bidder")

	check(err)
	fmt.Println("success")
	for i, num := range winner {
		t := time.Now().Format(time.RFC850)
		sqlStatement := `INSERT INTO log_auctionwinner (publisherid, slotid, providername, placementid, timestamp) VALUES (?, ?, ?, ?, ?)`
		stmnts, err := db.Prepare(sqlStatement)
		if err != nil {
			panic(err)
		}
		stmnts.Exec(winner[i].PublisherID, winner[i].AdSlotID, winner[i].Providername, winner[i].PlacementID, t)
		log.Println(num)
		//fmt.Fprintf(w, string(e2))
	}
	defer db.Close()

}

func postresponsesdb() {
	db, err := sql.Open("mysql",
		"root:Jayshi@1509@tcp(127.0.0.1:3306)/HEADER_Bidder")

	check(err)
	fmt.Println("success")
	for i, num := range responses {
		t := time.Now().Format(time.RFC850)
		sqlStatement := `INSERT INTO Log_Providerresponses (PublisherID, SlotID, providername, PlacementID,BidResponse,AdCode,timestamp) VALUES (?, ?, ?, ?, ?, ?, ?)`
		stmnts, err := db.Prepare(sqlStatement)
		if err != nil {
			panic(err)
		}
		stmnts.Exec(responses[i].PublisherID, responses[i].AdSlotID, responses[i].Provider, responses[i].ExternalPlacementID, responses[i].BidPrice, responses[i].Adcode, t)
		log.Println(num)
		//fmt.Fprintf(w, string(e2))
	}
	defer db.Close()

}

func postparticipantsdb() {
	db, err := sql.Open("mysql",
		"root:Jayshi@1509@tcp(127.0.0.1:3306)/HEADER_Bidder")

	check(err)
	fmt.Println("success")
	for i, num := range participant {
		t := time.Now().Format(time.RFC850)
		sqlStatement := `INSERT INTO log_participants (PublisherID, SlotID, providername, PlacementID, timestamp) VALUES (?, ?, ?, ?, ?)`
		stmnts, err := db.Prepare(sqlStatement)
		if err != nil {
			panic(err)
		}
		stmnts.Exec(participant[i].PublisherID, participant[i].AdSlotID, participant[i].Provider, participant[i].ExternalPlacementID, t)
		log.Println(num)
		//fmt.Fprintf(w, string(e2))
	}
	defer db.Close()

}

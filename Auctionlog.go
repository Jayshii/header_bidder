package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
)

func postProviderResponses(w http.ResponseWriter, r *http.Request) {
	fmt.Println("Post for Participant Responses")
	if r.Method == "POST" {
		body, err := ioutil.ReadAll(r.Body)
		if err != nil {
			http.Error(w, "Error reading request body",
				http.StatusInternalServerError)
		}
		json.Unmarshal(body, &responses)
		w.Header().Set("Content-Type", "application/json")
		w.Header().Set("Access-Control-Allow-Origin", "*")
		postresponsesdb()
	}
}

func postAuctionParticipants(w http.ResponseWriter, r *http.Request) {
	fmt.Println("Post for Auction Participants")
	if r.Method == "POST" {
		body, err := ioutil.ReadAll(r.Body)
		fmt.Println(string(body))
		fmt.Println("like this")
		if err != nil {
			http.Error(w, "Error reading request body",
				http.StatusInternalServerError)
		}
		json.Unmarshal(body, &participant)
		fmt.Println(participant)
		fmt.Println("like this 2")
		w.Header().Set("Content-Type", "application/json")
		w.Header().Set("Access-Control-Allow-Origin", "*")
		postparticipantsdb()
	}
}

func postAuctionWinner(w http.ResponseWriter, r *http.Request) {
	fmt.Println("Post for Auction Winner")
	if r.Method == "POST" {
		body, err := ioutil.ReadAll(r.Body)
		if err != nil {
			http.Error(w, "Error reading request body",
				http.StatusInternalServerError)
		}
		log.Println(err)

		json.Unmarshal(body, &winner)
		w.Header().Set("Content-Type", "application/json")
		w.Header().Set("Access-Control-Allow-Origin", "*")
		postwinnerdb()
	}
}

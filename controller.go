package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"os"

	"github.com/gorilla/mux"
	_ "github.com/gorilla/mux"
)

func handleRequests() {
	//Init Router
	r := mux.NewRouter()
	pagesJSON, err := json.Marshal(pmap)

	check(err)

	fmt.Fprintf(os.Stdout, "%s", pagesJSON)

	fmt.Println(pmap)
	//r.PathPrefix("/").Handler(http.FileServer(rice.MustFindBox("templates").HTTPBox()))
	r.HandleFunc("/api", getConfigObject).Queries("publisherid", "{publisherid}").Methods("GET")
	r.HandleFunc("/api/generateLog", generateLogs).Methods("POST")
	r.HandleFunc("/api/OpenX", generateBidsForOpenX).Methods("POST")
	r.HandleFunc("/api/InMobi", generateBidsForInMobi).Methods("POST")
	r.HandleFunc("/api/NetApp", generateBidsForNetApp).Methods("POST")
	r.HandleFunc("/api/postResponses", postProviderResponses).Methods("POST")
	r.HandleFunc("/api/postParticipants", postAuctionParticipants).Methods("POST")
	r.HandleFunc("/api/postWinner", postAuctionWinner).Methods("POST")
	log.Fatal(http.ListenAndServe(":5557", r))
}

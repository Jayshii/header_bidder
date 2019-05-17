package main

import (
	"encoding/json"
	"fmt"
	"net/http"
	"os"

	"github.com/gorilla/mux"
)

func getConfigObject(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)
	publisherid := params["publisherid"]
	fmt.Printf(publisherid)
	getProvidersList()
	getProviderMapList(publisherid)
	getAdSlots(publisherid)
	getPublishersList(publisherid)
	w.Header().Set("Content-Type", "text/javascript")
	fmt.Fprintf(w, "var a=1;console.log(a);var config={'Provider':")
	json.NewEncoder(w).Encode(provider)
	fmt.Fprintf(w, ",'providersMap':")
	json.NewEncoder(w).Encode(pmap)
	fmt.Fprintf(w, ",'adslots':")
	json.NewEncoder(w).Encode(adslot)
	fmt.Fprintf(w, ",'publishers':")
	json.NewEncoder(w).Encode(publisher)
	fmt.Fprintf(w, "};")
	fmt.Fprintf(w, "console.log(config);")
	fmt.Fprintf(w, readContent)

	// create json for writing in configts file
	provider1, _ := json.Marshal(provider)
	pmap1, _ := json.Marshal(pmap)
	publisher1, _ := json.Marshal(publisher)
	adslot1, _ := json.Marshal(adslot)
	res := "export {config};" + "var config={'Provider':" + string(provider1) + ",'providersMap':" + string(pmap1) + ",'adslots':" + string(adslot1) + ",'publishers':" + string(publisher1) + "}"

	// create config ts file and write the config object in it

	f, err := os.Create("templates/configfile.ts")
	if err != nil {
		fmt.Println(err)
		return
	}

	l, err := f.WriteString(res)
	if err != nil {
		fmt.Println(err)
		f.Close()
		return
	}
	fmt.Println(l, "bytes written successfully")
	err = f.Close()
	if err != nil {
		fmt.Println(err)
		return
	}
}

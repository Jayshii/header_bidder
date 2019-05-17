package main

import (
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"os"
)

var results []string
var result string

func generateLogs(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "In the logger method")
	w.Header().Set("Content-Type", "text/javascript")
	//	json.NewEncoder(w).Encode(pmap)

	if r.Method == "POST" {
		body, err := ioutil.ReadAll(r.Body)
		if err != nil {
			http.Error(w, "Error reading request body",
				http.StatusInternalServerError)
		}
		//body = 'y'
		result = string(body)
		results = append(results, string(body))
		log.Println(string(body))
		log.Println("logger successful")
		fmt.Fprint(w, "POST done")
	} else {
		http.Error(w, "Invalid request method", http.StatusMethodNotAllowed)
	}

	// create new file and write log content in it

	f, err := os.Create("log.txt")
	if err != nil {
		fmt.Println(err)
		return
	}

	l, err := f.WriteString(result)
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

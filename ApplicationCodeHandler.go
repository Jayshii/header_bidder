package main

import (
	"fmt"
	"io/ioutil"
)

var (
	readContent string
)

func GenerateApplicationCode() {
	data, err := ioutil.ReadFile("dist/hb.js")
	if err != nil {
		fmt.Println("File reading error", err)
		return
	}
	readContent = string(data)
	//fmt.Println("Contents of file:", string(data))
}

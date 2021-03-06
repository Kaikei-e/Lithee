package main

import (
	"github.com/gin-contrib/static"
	"github.com/gin-gonic/gin"
)

func main() {
	router := gin.Default()

	router.Use(static.Serve("/", static.LocalFile("./svelteBuild", true)))

	err := router.Run(":9000")
	if err != nil {
		return
	}

}

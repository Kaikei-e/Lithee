package main

import (
	"github.com/gin-contrib/static"
	"github.com/gin-gonic/gin"
)

func main()  {
	router := gin.Default()

	router.Use(static.Serve("/", static.LocalFile("./svelteBuild", true)))

	router.Run(":9000")

}
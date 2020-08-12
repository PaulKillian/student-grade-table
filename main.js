var table = document.querySelector("table")
var newTable = new GradeTable(table)
var header = document.querySelector("header")
var newHeader = new PageHeader(header)

var newApp = new App(newTable, newHeader)
newApp.start()
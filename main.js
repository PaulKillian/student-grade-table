var table = document.querySelector("table")
var newTable = new GradeTable(table)
var header = document.querySelector("header")
var newHeader = new PageHeader(header)
var form = document.querySelector('form');
var newGrade = new GradeForm(form)

var newApp = new App(newTable, newHeader, newGrade)
newApp.start()
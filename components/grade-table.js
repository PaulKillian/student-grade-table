class GradeTable {
    constructor(tableElement, noGradesElement) {
        this.tableElement = tableElement
        this.noGradesElement = noGradesElement
    }

  updateGrades(grades) {
    var tbody = this.tableElement.querySelector("tbody");
    tbody.innerHTML = " "
    if (grades.length === 0) {
        var p = document.querySelector("p")
        p.classList.remove("d-none")
    }
    for (var i = 0; i < grades.length; i++) {
      var tr = this.renderGradeRow(grades[i], this.deleteGrade)
      tbody.appendChild(tr)
    }
  }

  onDeleteClick(deleteGrade) {
    this.deleteGrade = deleteGrade
  }

  renderGradeRow(data, deleteGrade) {
    var tbody = this.tableElement.querySelector("tbody");
    var operationsTr = document.createElement('tr')
    var operationsTd1 = document.createElement('td')
    operationsTd1.textContent = data.name
    var operationsTd2 = document.createElement('td')
    operationsTd2.textContent = data.course
    var operationsTd3 = document.createElement('td')
    operationsTd3.textContent = data.grade
    var operationsTd4 = document.createElement('td')
    var deleteButton = document.createElement('button')
    deleteButton.textContent = "DELETE"
    deleteButton.className = "btn btn-primary"
    tbody.appendChild(operationsTr)
    operationsTr.appendChild(operationsTd1)
    operationsTr.appendChild(operationsTd2)
    operationsTr.appendChild(operationsTd3)
    operationsTr.appendChild(operationsTd4)
    operationsTd4.appendChild(deleteButton)

    deleteButton.addEventListener('click', function() {
        deleteGrade(data.id)
    })
    return operationsTr
  }
}

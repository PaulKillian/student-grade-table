class GradeTable {
    constructor(tableElement) {
        this.tableElement = tableElement
    }

    updateGrades(grades) {
        var tbody = this.tableElement.querySelector("tbody");
        tbody.innerHTML = " "
        for(var i = 0; i < grades.length; i++) {
            var tr = document.createElement('tr')
            var name = document.createElement('td')
            name.textContent = grades[i].name
            var course = document.createElement('td')
            course.textContent = grades[i].course
            var grade = document.createElement('td')
            grade.textContent = grades[i].grade

            tbody.appendChild(tr)
            tr.appendChild(name)
            tr.appendChild(course)
            tr.appendChild(grade)

        }
    }
}

class App {
    constructor(gradeTable, pageHeader, gradeForm) {
        this.handleGetGradesError = this.handleGetGradesError.bind(this)
        this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this)
        this.gradeTable = gradeTable
				this.pageHeader = pageHeader
				this.gradeForm = gradeForm
				this.createGrade = this.createGrade.bind(this)
				this.handleCreateGradeError = this.handleCreateGradeError.bind(this)
				this.handleCreateGradeSuccess = this.handleCreateGradeSuccess.bind(this)
    }
    
    handleGetGradesError(error) {
        console.error(error)
    }

    handleGetGradesSuccess(grades) {
        this.gradeTable.updateGrades(grades)
        var allGrades = null
        for(var i = 0; i < grades.length; i++) {
            allGrades += grades[i].grade
        }
        var average = allGrades / grades.length;
        this.pageHeader.updateAverage(average)
		}
		
		createGrade() {
			$.ajax({
				type: "POST",
				url: "https://sgt.lfzprototypes.com/api/grades",
				data: {
					"name": "Paul",
					"course": "Web Development",
					"grade": "100"
				},
				
				headers: {
					"X-Access-Token": "t6jFgSWy"
				},
				
				error: this.handleCreateGradeError,
				success: this.handleCreateGradeSuccess
			})
		}

		handleCreateGradeError() {
			console.error(error)
		}

		handleCreateGradeSuccess() {
			this.getGrades()
		}

    getGrades() {
        $.ajax({
            type: "GET",
            url: "https://sgt.lfzprototypes.com/api/grades",
            headers: {
                "X-Access-Token": "t6jFgSWy"
            },
            error: this.handleGetGradesError,
            success: this.handleGetGradesSuccess

    })
    }

    start() {
				this.getGrades()
				this.gradeForm.onSubmit(this.createGrade)
    }

    }
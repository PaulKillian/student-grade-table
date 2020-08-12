class GradeForm {
	constructor(formElement) {
		this.formElement = formElement
		this.handleSubmit = this.handleSubmit.bind(this)
		var form = document.querySelector('form');
		form.addEventListener('submit', this.formElement)
	}

	onSubmit(createGrade) {
		this.createGrade = createGrade
	}

	handleSubmit(event) {
		event.preventDefault() 
			console.log("hi")
	}
}
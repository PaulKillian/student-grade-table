class PageHeader {
    constructor(headerElement) {
        this.headerElement = headerElement
    }
    updateAverage(newAverage) {
        console.log(newAverage)
        var headerBageContent = this.headerElement.querySelector(".badge")
        headerBageContent.textContent = newAverage
    }
}
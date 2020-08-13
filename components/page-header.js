class PageHeader {
  constructor(headerElement) {
    this.headerElement = headerElement
  }
  updateAverage(newAverage) {
    console.log(newAverage)
    var headerBadgeContent = this.headerElement.querySelector(".badge")
    headerBadgeContent.textContent = newAverage
  }
}

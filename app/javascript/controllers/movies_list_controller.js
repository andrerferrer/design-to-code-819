import { Controller } from 'stimulus'

export default class extends Controller {
  static targets = ['form', 'list', 'input']
  
  connect() {
    // console.log(this.formTarget)
    // console.log(this.listTarget)
    // console.log(this.inputTarget)
  }

  fetchMovies(event) {
    // get the input from the user
    
    // fetch the backend (like an API)
    const url = `${this.formTarget.action}?query=${this.inputTarget.value}`

    const options = {
      headers: {
        accept: 'text/plain'
      }
    }

    fetch(url, options)
      .then(res => res.text()) // parse the response
      .then((moviesHTML) => {
        // the response will be HTML, and we will update the DOM with it
        // console.log(moviesHTML)
        this.listTarget.outerHTML = moviesHTML
      })
  }
}

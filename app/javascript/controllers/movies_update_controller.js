import { Controller } from 'stimulus'

export default class extends Controller {
  static targets = ['infos', 'form']

  connect() {
    // console.log('hello world')
    // console.log(this.infosTarget)
    console.log(this.formTarget)
  }

  ninjaBomb() {
    // console.log('💣💣💣')
    this.infosTarget.classList.add('d-none')
    this.formTarget.classList.remove('d-none')
  }

  fetchMovie(event) {
    event.preventDefault();

    const url = this.formTarget.action
    console.log(url)
    const options = {
      headers: {
        accept: 'text/plain'
      },
      method: 'PATCH',
      body: new FormData(this.formTarget) // FormData.new(this.formTarget)
    }
    // fetch the application
    fetch(url, options)
      // handle the response
      .then(res => res.text())
      // update the dom with the response
      .then(movieCardHTML => this.element.outerHTML = movieCardHTML)
  }
}
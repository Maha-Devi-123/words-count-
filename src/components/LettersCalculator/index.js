import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {searchInput: ''}

  onSearch = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {searchInput} = this.state

    return (
      <div className="container">
        <div className="cal-con">
          {' '}
          <div>
            <h1 className="head">Calculate the Letters You enter</h1>
            <div className="label-can">
              <label htmlFor="inputElId" className="para">
                Enter the phrase
              </label>
              <input
                id="inputElId"
                className="search-bar"
                type="text"
                placeholder="Enter the phrase"
                onChange={this.onSearch}
              />
            </div>
            <div>
              <p className="btn" type="button">
                No.of letters: {searchInput.length}
              </p>
            </div>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="image-edit"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator

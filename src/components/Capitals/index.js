import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {
    isCapitals: '',
  }

  updateCapitals = value => {
    this.setState({
      isCapitals: value,
    })
  }

  onChangeCapitals = event => {
    this.setState({
      isCapitals: event.target.value,
    })
  }

  render() {
    const {isCapitals} = this.state
    const {countryAndCapitalsList} = this.props

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Countries And Capitals</h1>
          <p className="description">
            {countryAndCapitalsList} is capital of which country?
          </p>
          <ul className="Capitals-List">
            {countryAndCapitalsList.map(capital => (
              <li key={capital.id}>
                <button
                  type="button"
                  className="capital-btn"
                  onChange={this.onChangeCapitals}
                ></button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Capitals

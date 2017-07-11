import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import './Pokemon.css'
import PokemonUser from './PokemonUser'

class Pokemon extends Component {
  state = {
    username: ''
  }

  handleChange = (ev) => {
    this.setState({
      username: ev.target.value
    })
  }

  handleSubmit = (ev) => {
    ev.preventDefault()
    this.setState({username: ''})
    this.props.history.push(`/pokemon/${this.state.username}`)
  }

  render() {
    return (
      <div className="pokemon">
        <img 
          className="poke-logo" 
          src="http://thewhitonline.com/wp-content/uploads/2016/03/English_Pok%C3%A9mon_logo.svg_.png" 
          alt="pokemon logo" 
        />
        <form onSubmit={this.handleSubmit}>
          <div>
            <input 
              type="text"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <button>Look up a Pokemon</button>
          </div>
        </form>

        <Route exact path="/pokemon" render={() => <h3>Please enter a Pokemon name</h3>} />
        <Route path='/pokemon/:username' component={PokemonUser} />
      </div>
    )
  }
}

export default Pokemon
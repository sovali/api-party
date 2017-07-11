import React, { Component } from 'react'

import './PokemonUser.css'

class PokemonUser extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: {}
    }

    this.fetchUserData(props)  
  }

  fetchUserData(props) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${props.match.params.username}`)
      .then(data => data.json())
      .then(user => this.setState({ user }))
  }

  componentWillReceiveProps(nextProps) {
    const locationChanged = nextProps.location !== this.props.location
    if (locationChanged) {
      this.fetchUserData(nextProps)
    }
  }

  render() {
    const { user } = this.state
    return (
       <div className="pokemon-user">
       <img src={user.logo} alt="poke avatar" />
        <h2>{user.name}</h2>
        <h3>height: {user.height}</h3>
        <h3>weight: {user.weight}</h3>
        <h3>base experience: {user.base_experience}</h3>
        </div>
    )
  }
}
export default PokemonUser
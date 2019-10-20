import React, { Component } from 'react'
import Table from './Table'
import Form from './Form'


class App extends Component {
  state = {
    characters: [],
  }

  handleSubmit = character => {
    this.setState({ characters: [...this.state.characters, character] })
  }

  removeCharacter = index => {
    const { characters } = this.state

    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index
      }),
    })
  }

  render() {
    const { characters } = this.state

    return (
      <div className="container">
        <div className="col mt-5 mb-5">
          <h1>React Tutorial</h1>
          <p>Add a character with a name and a job to the table.</p>
          <p>Tutorial: <a href="https://www.taniarascia.com/getting-started-with-react/">https://www.taniarascia.com/getting-started-with-react/</a></p>
          <Table characterData={characters} removeCharacter={this.removeCharacter} />
          <p className="mt-5 mb-5"></p>
          <Form handleSubmit={this.handleSubmit} />
        </div>
      </div>
    )
  }
}

export default App
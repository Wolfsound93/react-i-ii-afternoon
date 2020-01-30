import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Card from './components/Card';
import data from './data';
import './components/styles/App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      data,
      id: 0
    };
    console.log(data);
  }

  handleChange = () => {
    let id = this.state.id;
    if (id > 0) {
      this.setState({ id: id - 1 });
    }
  };

  changeHandler = () => {
    let id = this.state.id;
    if (id < data.length - 1) {
      this.setState({ id: id + 1 });
    }

    // console.log(id);
  };

  render() {
    let id = this.state.id;
    const {
      name,
      city,
      country,
      employer,
      title,
      favoriteMovies
    } = this.state.data[id];

    // console.log(this.state.data);
    return (
      <div className='App'>
        <NavBar />
        <Card
          firstName={name.first}
          lastName={name.last}
          city={city}
          country={country}
          employer={employer}
          title={title}
          favoriteMovies={favoriteMovies}
        />
        <div className='Button'>
          <button onClick={this.handleChange}>
            <i className='fas fa-angle-left'></i> Back
          </button>
          <button onClick={this.changeHandler}>
            Next <i className='fas fa-angle-right'></i>
          </button>
        </div>
      </div>
    );
  }
}

export default App;

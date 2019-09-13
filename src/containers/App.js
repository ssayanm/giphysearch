import React, { Component } from 'react';
import GifList from '../components/GifList';
import DisplayGif from '../components/DisplayGif';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import request from 'superagent';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
        gifs: [],
        searchfield:''
    }
    this.onSearchChange = this.onSearchChange.bind(this);
  }

  // componentDidMount(){
  //   fetch(`http://api.giphy.com/v1/gifs/search?q=${this.state.searchfield.replace(/\s/g, '+')}&limit=5&api_key=vymc5XlA7eUV2Idx6Qv6nz61ltpL16sT`)
  //   .then(response => response.json())
  //   .then(users => this.setState({ searchfield: event.target.value }));    
  // }

  onSearchChange = (event) => {
    const url = `http://api.giphy.com/v1/gifs/search?q=${event.target.value.replace(/\s/g, '+')}&limit=10&api_key=vymc5XlA7eUV2Idx6Qv6nz61ltpL16sT`;
      request.get(url, (err, res) => {
            this.setState({ gifs: res.body.data })
        });
  }

  render(){  
    return !this.state.gifs.length ?
      (<div className="App tc">
        <h1 className="f1">Gif Search Engine</h1> 
      <SearchBox searchChange={this.onSearchChange}/>
      <DisplayGif gifs={this.state.gifs}/>
      </div>
      ):
    (
        <div className="App tc">
          <h1 className="f1">Gif Search Engine</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
            <ErrorBoundary>
              <GifList gifs={this.state.gifs}/>
            </ErrorBoundary>  
          </Scroll>
        </div>
      );
  }
}

export default App;

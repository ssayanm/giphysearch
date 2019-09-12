import React, { Component } from 'react';
import CardList from '../components/CardList';
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

  // componentDidMount(term){
  //   fetch(`http://api.giphy.com/v1/gifs/search?q=${term.replace(/\s/g, '+')}&api_key=vymc5XlA7eUV2Idx6Qv6nz61ltpL16sT`)
  //   .then(response => response.json())
  //   .then(users => this.setState({ gifs:users }));    
  // }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
    // this.setState({ gifs: res.body.data })
    const url = `http://api.giphy.com/v1/gifs/search?q=${this.state.searchfield.replace(/\s/g, '+')}&limit=5&api_key=vymc5XlA7eUV2Idx6Qv6nz61ltpL16sT`;
      request.get(url, (err, res) => {
            this.setState({ gifs: res.body.data })
            //this.setState({ searchfield: event.target.value });
        });

    console.log(url)
  }

 

  render(){
    const { gifs } = this.state;
    
    // const filterGifs = gifs.filter(gif => {
    //   return gif.name.toLowerCase().includes(searchfield.toLowerCase());
    // })
    
    return (
        <div className="App tc">
          <h1 className="f1">Gif Search Engine</h1>
          <SearchBox searchChange={this.onSearchChange}/>
         {/* <SearchBox searchChange={this.onSearchChange}/>*/}
          <Scroll>
            <ErrorBoundary>
              <CardList gifs={gifs}/>
            </ErrorBoundary>  
          </Scroll>
        </div>
      );
  }
}

export default App;

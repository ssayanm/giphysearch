import React, { Component } from "react";
import GifList from "../components/GifList";
import DisplayGif from "../components/DisplayGif";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
import "./App.css";

const API_URL = "http://api.giphy.com/v1/gifs/search?q=";
const API_KEY = "&api_key=vymc5XlA7eUV2Idx6Qv6nz61ltpL16sT";
const LIMIT = "&limit=10";
const DEFAULT_QUERY = "ryan";

class App extends Component {
  constructor() {
    super();
    this.state = {
      gifs: [],
      fgifs: [],
      searchfield: "",
    };
  }

  componentDidMount() {
    fetch(API_URL + DEFAULT_QUERY + API_KEY + LIMIT)
      .then((response) => response.json())
      .then((items) => {
        this.setState({ fgifs: items.data });
      });
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
    fetch(API_URL + event.target.value + API_KEY + LIMIT)
      .then((response) => response.json())
      .then((items) => {
        this.setState({ gifs: items.data });
      });
  };

  render() {
    const { gifs, fgifs } = this.state;
    return !gifs.length ? (
      <div className="App tc">
        <h1 className="f1">Gif Search Engine</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <DisplayGif fgifs={fgifs} />
        </Scroll>
      </div>
    ) : (
      <div className="App tc">
        <h1 className="f1">Gif Search Engine</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <ErrorBoundary>
            <GifList gifs={gifs} />
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
}

export default App;

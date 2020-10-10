import React from 'react';
import axios from "axios";

interface State {
  isLoading: boolean;
  movies: Array<number>;
}

class App extends React.Component<{}, State> {
  state: State = {
    isLoading: true,
    movies: []
  };

  componentDidMount() {
    axios.get("https://yts-proxy.now.sh/list_movies.json");
  }

  render() {
    const {isLoading} = this.state;
    return (
      <div>
        {isLoading ? "Loading..." : "we are ready"}
      </div>
    );
  }
}

export default App;

import "./App.css";

function App() {
  return (
    <div className="App border border-secondary-subtle m-5">
      <header className="SearchTile">
        <form className="mt-5">
          <input type="search" placeholder="Enter a city" autoFocus></input>
          <input type="submit"></input>
          <input
            type="submit"
            value="Current"
            className="ml-1 bg-success"
          ></input>
        </form>
      </header>
      <body>
        <h1>Lisbon</h1>
        <p>Thursday 15:54</p>
        <p>Clouds</p>
        <br />
        <p>
          14<span>℃</span>
        </p>
        <p>Precipitation: 82% </p>
        <p>Wind: 4km/h</p>
      </body>
    </div>
  );
}

export default App;

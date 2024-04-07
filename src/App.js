import { WeatherSvg } from "weather-icons-animated";
import "./App.css";

function App() {
  return (
    <div className="App border m-5 shadow-sm ">
      <div className="Container m-4">
        <header className="SearchTile ml-4 bg-primary-subtle">
          <form className="mt-5">
            <input
              type="search"
              placeholder="Enter a city"
              autoFocus
              required
              className="shadow-sm px-4 "
            ></input>
            <input
              type="submit"
              value="Search"
              className="bg-primary text-white"
            ></input>
            <input
              type="submit"
              value="Current"
              className="ml-1 bg-success text-white"
            ></input>
          </form>
        </header>
        <body className="ml-4 bg-primary-subtle">
          <h1>Lisbon</h1>
          <div className="lh-sm">
            <p>
              Thursday 15:54 <br /> <span>Clouds</span>
            </p>
          </div>
          <br />
          <div className="Top">
            <div className="TopNumber">
              14<span className="TopSpan">℃</span>
            </div>
            <div className="precipitation">
              <p>Precipitation: 82% </p>
              <p>Wind: 4km/h</p>
            </div>
          </div>
          <div className="Bottom">
            <div>
              <div>Fri</div>
              <div>
                <WeatherSvg state="cloudy" width={30} height={30} />
              </div>
              <div>13°</div>
            </div>
            <div>
              <div>Sat</div>
              <div>
                <WeatherSvg state="sunny" width={30} height={30} />
              </div>
              <div>15°</div>
            </div>
            <div>
              <div>Fri</div>
              <div>
                <WeatherSvg state="clear-night" width={30} height={30} />
              </div>
              <div>17°</div>
            </div>
            <div>
              <div>Sun</div>
              <div>
                <WeatherSvg state="rainy" width={30} height={30} />
              </div>
              <div>16°</div>
            </div>
            <div>
              <div>Mon</div>
              <div>
                <WeatherSvg state="sunny" width={30} height={30} />
              </div>
              <div>15°</div>
            </div>
          </div>
        </body>
        <footer>
          <p className="mt-4 fs-6 bottomFooter">
            This weather app was coded by Chinonye Okorie. It is open sourced on{" "}
            <a href="/">GitHub</a> and Hosted on <a href="/">Netlify</a>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;

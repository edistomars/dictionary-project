import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1 className="text-center">Dictionary</h1>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>
            {" "}
            <a
              href="https://github.com/edistomars/dictionary-project"
              target="_blank"
              rel="noreferrer"
            >
              Open-source code
            </a>{" "}
            by Marla Laystrom and{" "}
            <a
              href="https://vigorous-northcutt-c1e6d9.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              hosted on Netlify
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}

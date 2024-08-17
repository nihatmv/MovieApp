import "./App.css";
import Movie from "./components/Movie";
import Input from "./components/Input";

function App() {
  const movieApi = "http://www.omdbapi.com/?i=tt3896198&apikey=2dd15fb5";

  return (
    <div>
      {/* <Input /> */}
      <Movie />
    </div>
  );
}

export default App;

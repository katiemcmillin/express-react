import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import {useState} from "react"

function App() {
const [user, setUser] = useState(null)
  return (
    <div className="App">
      <Header />
      <Main setUser={setUser} user={user}/>
    </div>
  );
}

export default App;


import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";
import ListFirst from "./components/ListFirst";
import List2 from "./components/List2";
import "./App.css";
function App() {
  return (
    <center className="todo-container">
      <AppName />
      <div className="list-container">
        <AddToDo />
        <ListFirst />
        <List2 />
      </div>
      .
    </center>
  );
}

export default App;

import UserContext from "./UserContext";
import Home from "./Home";

function App() {
  const user = "Anto";

  return (
    <UserContext.Provider value={user}>
      <Home />
    </UserContext.Provider>
  );
}

export default App;

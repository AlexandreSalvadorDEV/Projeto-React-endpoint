import React from "react";
import UserList from "./components/UserList";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Lista de Usuários</h1>
      </header>
      <main>
        <UserList />
      </main>
    </div>
  );
}

export default App;

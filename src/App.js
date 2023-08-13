import React from "react";
import MyFrom from "./Components/MyForm";

function App() {
  return (
    <div>
      <h2>Forms</h2>
        <MyFrom user={{name: "Josias", email: "Josias@gmail.com" , bio: "Eu sou advogado", role: "admin"}}/>
    </div>
  );
}

export default App;

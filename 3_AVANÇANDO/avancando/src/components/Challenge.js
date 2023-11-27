import { useState } from "react";
import UserDetails from "./UserDetails";
function Challenge() {

  const [users, setUsers] = useState([
    { name: "Matheus", age: 31 , profissao: "Cantor"},
    { name: "Jones", age: 19,  profissao: "Mecanico" },
    { name: "Luiz", age: 14 , profissao: "Jogador"},
  ]);

  return (
    <div>
      {
        users.map((user) => (
          <UserDetails name={user.name} age={user.age} profissao={user.profissao}/>
        ))
      }      
    </div>
  )
}

export default Challenge;
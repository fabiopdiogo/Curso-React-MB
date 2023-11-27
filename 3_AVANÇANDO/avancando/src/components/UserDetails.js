import React from 'react'

function UserDetails({name,age,profissao}) {
  return (
    <div>
      <h2>Detalhes do carro:</h2>
      <ul>
        <li>Nome: {name}</li>
        <li>Idade: {age}</li>
        <li>Profissao: {profissao}</li>
      </ul>
      {age>18 && <p>Elegivel para habilitação</p>}
    </div>
  )
}

export default UserDetails;
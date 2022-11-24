import { useEffect, useState } from "react"

function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const headers = new Headers()

    headers.append('Accept', 'application/json')

    const response = fetch('http://localhost:3333/users', {
      headers 
    })
    .then(response => response.json())
    .then(data => {
      setUsers(data.data);
    })
  }, [])

  return (
    <>
      <ul>
        {users.map((user: any) => {
          return <li key={user.id}>{user.name}</li>
        })}
      </ul>
    </>
  )
}

export default App

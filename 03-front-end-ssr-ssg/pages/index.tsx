function App(props: { users: any[] }) {
  return (
    <>
      <ul>
        {props.users.map((user: any) => {
          return <li key={user.id}>{user.name}</li>
        })}
      </ul>
    </>
  )
}

{/*export const getServerSideProps =  async () => {
  const headers = new Headers()

    headers.append('Accept', 'application/json')

    const response = await fetch('http://localhost:3333/users', {headers})
    const data = await response.json()
    
    return {
      props: {
        users: data.data,
      }
    }
}*/}

export const getStaticProps =  async () => {
  const headers = new Headers()

    headers.append('Accept', 'application/json')

    const response = await fetch('http://localhost:3333/users', {headers})
    const data = await response.json()
    
    return {
      props: {
        users: data.data,
      },
      revalidate: 5,
    }
}

export default App
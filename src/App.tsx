import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from './components/LoginButton'
import LogoutButton from './components/LogoutButton'
import Profile from './components/Profile'
import Map from './components/Map'

import './App.css'

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <>
      <header>
        {isAuthenticated ? <LogoutButton /> : <LoginButton />}
      </header>
      <Profile />
      <Map />
    </>
  )
}

export default App

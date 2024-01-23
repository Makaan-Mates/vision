import { useAuth0 } from '@auth0/auth0-react'

const Landing = () => {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0()

  return (
    <div>
      <div className="text-2xl">Landing page</div>
      {isAuthenticated ? (
        <button
          onClick={() =>
            logout({ logoutParams: { returnTo: window.location.origin } })
          }
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Logout
        </button>
      ) : (
        <button
          onClick={() => loginWithRedirect({ appState: { targetUrl: '/home' } })}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Login
        </button>
      )}
    </div>
  )
}

export default Landing

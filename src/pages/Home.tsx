import { useAuth0 } from '@auth0/auth0-react'
const Home = () => {
  const { logout } = useAuth0()
  return (
    <div>
    <div className="text-2xl">Vision Home page</div>
    <button
          onClick={() =>
            logout({ logoutParams: { returnTo: window.location.origin } })
          }
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Logout
        </button>
    </div>
  )
}

export default Home
import { Link } from 'react-router'
import './App.css'
import RootNavs from './components/root-navs'


const navLinks = [
  {
    label: "Home", path: "/"
  },
  {
    label: "About", path: "/about"
  },
  {
    label: "Login", path: "/login"
  }

]

function App() {

  return (
    <>
      {/* <RootNavs /> */}
      <div className='flex bg-gray-100 min-h-screen'>
        <aside className='border-r border-gray-200 bg-white  w-64 fixed inset-y-0 flex flex-col'>
          <div className='px-4 py-3 flex-none'>
            <img className='w-40 mx-auto' src="https://limecabs.in/svgs/logo.svg" alt="logo" />
          </div>

          <nav className=' flex-1 overflow-y-auto' >

            {navLinks.map((item, i) => {
              return <Link className='block px-4 py-3 font-medium hover:bg-gray-500  border-l-4 border-transparent  transition-all duration-300' to={item.path} key={i}>{item.label}</Link>
            })}

          </nav>
        </aside>
        <div className=' ml-64 flex-1  '>
          <header className='flex  justify-between items-center gap-6 bg-blue-400 border-b border-gray-200 fixed top-0 left-64 right-0'>
            <p>hgkd</p>
            <p>hgkd</p>
          </header>
          <main className=' mt-10'>
            <RootNavs />
          </main>
        </div>
      </div>
    </>
  )
}

export default App

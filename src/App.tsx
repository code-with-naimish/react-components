import { NavLink } from 'react-router'
import './App.css'
import RootNavs from './components/root-navs'
import { FaGithub } from 'react-icons/fa6';
import { useState } from 'react';

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

  const [showSidebar, setShowSidebar] = useState<boolean>(true);

  const toggleAside = () => {
    if (showSidebar) {
      setShowSidebar(false)
    } else {
      setShowSidebar(true)
    }
  }

  return (
    <>
      {/* <RootNavs /> */}
      <div className='flex bg-gray-100 min-h-screen'>
        <aside className={` ${showSidebar ? 'translate-x-0' : '-translate-x-full'} transition-all duration-300 border-r border-gray-200 bg-white  w-64 fixed inset-y-0 flex flex-col`}  >
          <div className='px-4 py-3 flex-none'>
            <img className='w-40 mx-auto' src="https://limecabs.in/svgs/logo.svg" alt="logo" />
          </div>

          <nav className=' flex-1 overflow-y-auto' >

            {navLinks?.map((item, i) => {
              return <NavLink to={item?.path} key={i}
                className={({ isActive }) =>
                  [
                    isActive ? "bg-blue-500/10 text-blue-500 border-blue-500" : "border-transparent",
                    "block px-4 py-3 font-medium hover:bg-blue-500/10 hover:text-blue-500  border-l-4     transition-all"
                  ].join(" ")
                }
              >
                {item?.label}</NavLink>
            })}

          </nav>
        </aside>
        <div className={`${showSidebar ? 'ml-64' : ''} flex-1 flex flex-col overflow-x-auto`}>
          <header className={`${showSidebar ? 'left-64' : 'left-0'} flex  justify-between items-center gap-6 px-4 py-3.5 bg-white border-b border-gray-200 fixed top-0  right-0`}>
            <button onClick={toggleAside}>hello</button>

            <h1 className="text-xl text-primary font-medium">Welcome!
            </h1>
            <a href="https://github.com/code-with-naimish" target='_blank' className='flex items-center   text-xl justify-center w-10 h-10 rounded-full  border border-gray-200'>
              <FaGithub /></a>
          </header>
          <main className='flex-1 mt-[65px]  p-6 overflow-y-auto'>

            <RootNavs />
          </main>
        </div>
      </div>
    </>
  )
}

export default App

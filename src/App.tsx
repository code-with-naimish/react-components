import { NavLink } from 'react-router'
import './App.css'
import RootNavs from './components/root-navs'
import { FaGithub } from 'react-icons/fa6';
import { useState } from 'react';
import { RiMenu4Fill } from 'react-icons/ri';
import { MdOutlineClose } from 'react-icons/md';

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

  const [showSidebar, setShowSidebar] = useState<boolean>(false);

  const toggleAside = () => {
    setShowSidebar(prev => !prev)
  }

  const closeAside = () => {
    setShowSidebar(false)
  }

  return (
    <>
      {/* <RootNavs /> */}
      <div className='relative flex bg-gray-100 min-h-screen'>
        {showSidebar && <div onClick={closeAside} className=' backdrop-blur-sm md:hidden block bg-blue-500/10 absolute inset-0 z-50'></div>}
        <aside className={`z-[60] ${showSidebar ? 'translate-x-0' : 'md:translate-x-0 -translate-x-full'}   transition-all duration-300 border-r border-gray-200 bg-white  w-64 fixed inset-y-0 flex flex-col`}  >
          <button onClick={closeAside} className='text-lg absolute top-2 right-2 md:hidden block'>
            <MdOutlineClose />
          </button>
          <div className='px-4 py-3 flex-none'>
            <img className='w-40 mx-auto' src="https://limecabs.in/svgs/logo.svg" alt="logo" />
          </div>

          <nav className=' flex-1 overflow-y-auto' >

            {navLinks?.map((item, i) => {
              return <NavLink onClick={closeAside} to={item?.path} key={i}
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
        <div className="ml-0 md:ml-64 transition-all duration-300 flex-1 flex flex-col overflow-x-auto">
          <header className="left-0 md:left-64 transition-all duration-300 flex  justify-between items-center gap-6 px-4 py-3.5 bg-white border-b border-gray-200 fixed top-0  right-0">
            <div className='md:hidden flex items-center gap-4'>
              <button onClick={toggleAside} className='flex-none cursor-pointer flex items-center   text-xl justify-center w-10 h-10 rounded-lg  bg-blue-500/10 text-blue-500'><RiMenu4Fill /></button>
              <div className='  flex-none'>
                <img className='w-28 mx-auto' src="https://limecabs.in/svgs/logo.svg" alt="logo" />
              </div>
            </div>
            <h1 className="text-xl text-primary font-medium hidden md:block">Welcome!
            </h1>
            <a href="https://github.com/code-with-naimish" target='_blank' className='flex items-center   text-xl justify-center w-10 h-10 rounded-full  border border-gray-200'>
              <FaGithub /></a>
          </header>

          <main className='flex-1 mt-[69px]  p-6 overflow-y-auto'>

            <RootNavs />
          </main>
        </div>
      </div>
    </>
  )
}

export default App

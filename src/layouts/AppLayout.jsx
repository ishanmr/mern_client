import React from 'react'
import { NavLink, Outlet } from 'react-router'

function AppLayout() {

  const [isAppReady, updateStatus] = React.useState(false)
  
  setTimeout(() => {
    updateStatus(true)
  }, 1.5 * 1000)

  if (!isAppReady) {
    return (
      <div>
        Page Loading...
      </div>
    )
  }
  return (
    <div>
      <header>HEADER</header>
      <nav>
        <ul>
          <li><NavLink to={"/"}>Dashboard</NavLink></li>
          <li><NavLink to={"/student"}>Student</NavLink></li>
          <li><NavLink to={"/teacher"}>Teacher</NavLink></li>
          <li><NavLink to={"/staff"}>Staff</NavLink></li>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
      <footer>FOOTER</footer>
    </div>
  )
}

export default AppLayout
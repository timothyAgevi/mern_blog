import React from 'react'

const Nav = () => {
  return (
    <div>
<nav>
        <Link to ={"/"}> Homepage</Link> 
        <Link to ={"/login"}>Login</Link> 
        <Link to ={"/register"}>Register</Link> 
</nav>

    </div>
  )
}

export default Nav
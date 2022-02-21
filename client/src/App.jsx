import { HashRouter as Router,Link,Route,Routes}from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <nav> 
        { " "}
        <Link to ={"/"}> Homepage</Link> 
        <Link to ={"/login"}>Login</Link> 
        <Link to ={"/register"}>Register</Link> 
      </nav>
      <Routes>
      <Route path ="/" element={< Homepage />}/>
      <Route path ="/login" element={< LoginPage />}/>
      <Route path ="/register" element={< RegisterPage />}/>
      </Routes>
    </Router>
  )
}

export default App
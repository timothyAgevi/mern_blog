import { HashRouter as Router,Link,Route,Routes}from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <nav> <Link to ={"/"}> Homepage</Link> 
      </nav>
      <Routes>
      <Route path ="/" element={< Homepage />}/>
      <Route path ="/login" element={< LoginPage />}/>
      <Route path ="/" element={< RegisterPage />}/>
      </Routes>
    </Router>
  )
}

export default App
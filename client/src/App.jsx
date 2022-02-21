import { HashRouter as Router,Link,Route,Routes}from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <nav> <Link to ={"/"}> Homepage</Link> 
      </nav>
    </Router>
  )
}

export default App
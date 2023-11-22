import React from 'react'
import Dashboard from './Components/Dashboard/Dashboard'
import SignInSide from './Components/SignInSide/SignInSide.js'
import SignUp from './Components/SignUp/SignUp'


const func1 = () => {
  if(window.location.pathname ==='/Dashboard'){
    return <Dashboard />
  }
}

const func2 = () => {
  if(window.location.pathname ==='/'){
    return <SignInSide />
  }
}
const func3 = () => {
  if(window.location.pathname ==='/SignUp'){
    return <SignUp />
  }
}


const App = () => {
  return (
    <div className='ui container'>
      {func1()}
      {func2()}
      {func3()}
    </div>
  )
}

export default App
import React from 'react'
import Input from './components/input/Input'
import Intro from './components/intro/Intro'
import Main from './components/main/Main'

 
class App extends React.Component {
  
  render() {
    return (
      <div>
        <Intro/>
        <Main/>
        {/* <Input/> */}
      </div>
    )
  }
}

export default App

import './App.css'
import { useState }from 'react'
import UsingCss from './Components/UsingCss'
import UsingImg from './Components/UsingImg'

function App() {
  const [useimg, setUseimg] = useState(true)

  function typeToggle(e) {
    e.preventDefault();
    setUseimg(() => !useimg)
  }

  return (
    <div className="App">
      <div className="toggle">
        <button onClick={(e) => typeToggle(e)}>{useimg ? "Switch to CSS type" : "Switch to IMAGE type"}</button>
      </div>

      {useimg ? <UsingImg /> : <UsingCss /> }
    </div>
  );
}

export default App;
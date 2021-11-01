import './App.css'
import './styles.scss'
import Card from './components/Card.js'

function App() {
  return (
    <div className="App">
      <Card>
        Right Top
        <div className="glowWrapper">
            <div className="glow glow1"></div>
        </div>
      </ Card>
      <Card>
      Right Middle
        <div className="glowWrapper">
            <div className="glow glow2"></div>
        </div>
      </ Card>
      <Card>
      Right Bottom
        <div className="glowWrapper">
            <div className="glow glow3"></div>
        </div>
      </ Card>
      <Card>
      Right Top : Blur + Sharp
        <div className="glowWrapper">
            <div className="glow glow1"></div>
            <div className="glow glow1-sharp"></div>
        </div>
      </ Card>
    </div>
  );
}

export default App;

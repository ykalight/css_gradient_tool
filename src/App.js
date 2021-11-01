import { useState } from 'react'
import './App.css'
import './styles.scss'
import Card from './Components/Card.js'
import ColorSwatch from './Components/ColorSwatch.js'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const { Handle } = Slider;

function App() {
  const [originX, setOriginX] = useState('top')
  const [originY, setOriginY] = useState('right')
  const [width, setWidth] = useState(300)
  const [height, setHeight] = useState(200)
  const [widthUnit, setWidthUnit] = useState('px')
  const [heightUnit, setHeightUnit] = useState('px')
  const [blur, setBlur] = useState(46)
  const [opacity, setOpacity] = useState(69)
  const [skew, setSkew] = useState(-8)
  const [translateX, setTranslateX] = useState(10)
  const [translateY, setTranslateY] = useState(-70)
  const [translateXUnit, setTranslateXUnit] = useState('%')
  const [translateYUnit, setTranslateYUnit] = useState('%')
  const [top, setTop] = useState(0)
  const [right, setRight] = useState(0)
  const [topUnit, setTopUnit] = useState('px')
  const [rightUnit, setRightUnit] = useState('px')
  const [radius, setRadius] = useState(55)
  const [radiusUnit, setRadiusUnit] = useState('%')
  const [picker, setPicker] = useState(['#6c22bd', '#8b25bb', '#a52bb9', '#bc34b7', '#d040b5', '#e645a5', '#f55195', '#ff6188', '#ff796e', '#ff965b', '#f5b255', '#e1cd60'])

  const glowstyle = {
    position: 'absolute',
    transformOrigin: `${originX} ${originY}`,
    backgroundImage: `linear-gradient(to left, ${picker[0]}, ${picker[1]}, ${picker[2]}, ${picker[3]}, ${picker[4]}, ${picker[5]}, ${picker[6]}, ${picker[7]}, ${picker[8]}, ${picker[9]}, ${picker[10]}, ${picker[11]})`,
    width: `${width}${widthUnit}`,
    height: `${height}${heightUnit}`,
    filter: `blur(${blur}px)`,
    opacity: `${opacity}`,
    transform: `skewY(${skew}deg) translate(${translateX}${translateXUnit}, ${translateY}${translateYUnit})`,
    top: `${top}${topUnit}`,
    right: `${right}${rightUnit}`, 
    borderRadius: `${radius}${radiusUnit}`
  }

  const widthHandle = props => {
    const { value, dragging, index, ...restProps } = props;
    return <Handle value={value} {...restProps} onChange={setWidth(value)} />
  }
  const heightHandle = props => {
    const { value, dragging, index, ...restProps } = props;
    return <Handle value={value} {...restProps} onChange={setHeight(value)} />
  }
  const blurHandle = props => {
    const { value, dragging, index, ...restProps } = props;
    return <Handle value={value} {...restProps} onChange={setBlur(value)} />
  }
  const opacityHandle = props => {
    const { value, dragging, index, ...restProps } = props;
    return <Handle value={value} {...restProps} onChange={setOpacity(value/100)} />
  }
  const skewHandle = props => {
    const { value, dragging, index, ...restProps } = props;
    return <Handle value={value} {...restProps} onChange={setSkew(value)} />
  }
  const translateXHandle = props => {
    const { value, dragging, index, ...restProps } = props;
    return <Handle value={value} {...restProps} onChange={setTranslateX(value)} />
  }
  const translateYHandle = props => {
    const { value, dragging, index, ...restProps } = props;
    return <Handle value={value} {...restProps} onChange={setTranslateY(value)} />
  }
  const topHandle = props => {
    const { value, dragging, index, ...restProps } = props;
    return <Handle value={value} {...restProps} onChange={setTop(value)} />
  }
  const rightHandle = props => {
    const { value, dragging, index, ...restProps } = props;
    return <Handle value={value} {...restProps} onChange={setRight(value)} />
  }
  const radiusHandle = props => {
    const { value, dragging, index, ...restProps } = props;
    return <Handle value={value} {...restProps} onChange={setRadius(value)} />
  }

  // useEffect(() => {
  //   console.log(picker)
  // }, [picker])

  const handleChange = (color, id) => {
    const newArr = [...picker]
    newArr[id] = color;
    setPicker(newArr);
    // console.log(id)
  }

  return (
    <div className="App">
      <div className="cardWrapper">
        <Card>
          <h3>Card Sample</h3>
          <div className="glowWrapper">
              <div style={glowstyle}></div>
          </div>
        </ Card>
      </div>

      <div id="glowControl">
        <div className="col">

          <div className="row">
            <label>width: {width}{widthUnit}</label>
            <span>
              <select onChange={e => setWidthUnit(e.target.value)}>
                <option value="px" selected>px</option>
                <option value="%">%</option>
              </select>
            </span>
            <Slider min={0} max={500} defaultValue={width} handle={widthHandle} />
          </div>

          <div className="row">
            <label>height: {height}{heightUnit}</label>
            <span>
              <select onChange={e => setHeightUnit(e.target.value)}>
                  <option value="px" selected>px</option>
                  <option value="%">%</option>
                </select>
            </span>
            <Slider min={0} max={600} defaultValue={height} handle={heightHandle} />
          </div>

          <div className="row">
            <label>blur: {blur}px</label>
            <Slider min={0} max={200} defaultValue={blur} handle={blurHandle} />
          </div>

          <div className="row">
            <label>opacity: {opacity}</label>
            <Slider min={0} max={100} defaultValue={opacity} handle={opacityHandle} />
          </div>

          <div className="row">
            <label>skew: {skew} deg</label>
            <Slider min={-140} max={140} defaultValue={skew} handle={skewHandle} />
          </div>
        </div>

        <div className="col">
          <div className="row">
            <label>translateX: {translateX} {translateXUnit}</label>
            <span>
              <select onChange={e => setTranslateXUnit(e.target.value)}>
                  <option value="px">px</option>
                  <option value="%" selected>%</option>
                </select>
            </span>
            <Slider min={-200} max={200} defaultValue={translateX} handle={translateXHandle} />
          </div>

          <div className="row">
            <label>translateY: {translateY} {translateYUnit}</label>
            <span>
              <select onChange={e => setTranslateYUnit(e.target.value)}>
                  <option value="px">px</option>
                  <option value="%" selected>%</option>
                </select>
            </span>
            <Slider min={-200} max={200} defaultValue={translateY} handle={translateYHandle} />
          </div>

          <div className="row">
            <label>top: {top} {topUnit}</label>
            <span>
              <select onChange={e => setTopUnit(e.target.value)}>
                  <option value="px" selected>px</option>
                  <option value="%">%</option>
                </select>
            </span>
            <Slider min={-200} max={200} defaultValue={top} handle={topHandle} />
          </div>

          <div className="row">
            <label>right: {right} {rightUnit}</label>
            <span>
              <select onChange={e => setRightUnit(e.target.value)}>
                  <option value="px" selected>px</option>
                  <option value="%">%</option>
                </select>
            </span>
            <Slider min={-200} max={200} defaultValue={right} handle={rightHandle} />
          </div>
          
          <div className="row">
            <label>border-radius: {radius}{radiusUnit}</label>
            <span>
              <select onChange={e => setRadiusUnit(e.target.value)}>
                  <option value="px">px</option>
                  <option value="%" selected>%</option>
                </select>
            </span>
            <Slider min={0} max={100} defaultValue={radius} handle={radiusHandle} />
          </div>
        </div> 

        <div className="col">
          <div style={{display: 'flex', paddingTop: '30px'}}>
            <div style={{marginRight: '8px'}}>
              <ColorSwatch hex={picker[0]} colorIdx={0} handleChange={handleChange} /><br />
              <ColorSwatch hex={picker[1]} colorIdx={1} handleChange={handleChange} /><br />
              <ColorSwatch hex={picker[2]} colorIdx={2} handleChange={handleChange} /><br />
              <ColorSwatch hex={picker[3]} colorIdx={3} handleChange={handleChange} /><br />
              <ColorSwatch hex={picker[4]} colorIdx={4} handleChange={handleChange} /><br />
              <ColorSwatch hex={picker[5]} colorIdx={5} handleChange={handleChange} /><br />
            </div>
            <div>
              <ColorSwatch hex={picker[6]} colorIdx={6} handleChange={handleChange} /><br />
              <ColorSwatch hex={picker[7]} colorIdx={7} handleChange={handleChange} /><br />
              <ColorSwatch hex={picker[8]} colorIdx={8} handleChange={handleChange} /><br />
              <ColorSwatch hex={picker[9]} colorIdx={9} handleChange={handleChange} /><br />
              <ColorSwatch hex={picker[10]} colorIdx={10} handleChange={handleChange} /><br />
              <ColorSwatch hex={picker[11]} colorIdx={11} handleChange={handleChange} />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
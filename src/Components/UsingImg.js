import { useState, useEffect } from 'react'
import '../styles.scss'
import Card from './Card.js'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import glows from './glows.json'

const { Handle } = Slider;

function UsingImg() {
    const [glowImg, setGlowImg] = useState()
    const [bgsize, setBgsize] = useState(80)
    const [posX, setPosX] = useState(340)
    const [posY, setPosY] = useState(-160)
    const [opacity, setOpacity] = useState(100)
    const [swatch, setSwatch] = useState()
    const [glowstyle, setGlowstyle] = useState({})

    function changeGlow(filename) {
        setGlowImg(filename)
    }

    useEffect(() => {
        setGlowImg(glows[3].img)
        setSwatch(
            glows.map((item, i) => {
                return <div key={i} data-imgid={`${item.img}`}><img onClick={() => changeGlow(item.img)} alt={`${item.img}`} src={`http://products.alight.com/design/ads/assets/glow/${item.img}`} /></div>
            })
        )
    }, [])

    useEffect(() => {
        setGlowstyle(
            {
                position: 'absolute',
                transformOrigin: `top right`,
                backgroundOrigin: `border-box`,
                backgroundRepeat: `no-repeat`,
                width: `100%`,
                height: `100%`,
                opacity: `${opacity}`,
                backgroundSize: `${bgsize}%`,
                backgroundPosition: `${posX}px ${posY}px`,
                backgroundImage: `url(http://products.alight.com/design/ads/assets/glow/${glowImg})`
            }
        )
    }, [glowImg, opacity, bgsize, posY, posX])

    const bgsizeHandle = props => {
        const { value, dragging, index, ...restProps } = props;
        return <Handle value={value} {...restProps} onChange={setBgsize(value)} />
    }
    const posXHandle = props => {
        const { value, dragging, index, ...restProps } = props;
        return <Handle value={value} {...restProps} onChange={setPosX(value)} />
    }
    const posYHandle = props => {
        const { value, dragging, index, ...restProps } = props;
        return <Handle value={value} {...restProps} onChange={setPosY(value)} />
    }
    const opacityHandle = props => {
        const { value, dragging, index, ...restProps } = props;
        return <Handle value={value} {...restProps} onChange={setOpacity(value/100)} />
    }

    return (
        <div className="App">
            <div className="cardWrapper">
                <Card>
                    <h3>{glowImg}</h3>
                    <div className="glowWrapper">
                        <div style={glowstyle}></div>
                    </div>
                </ Card>
            </div>

            <div id="glowControl">
                <div className="col">
                    <div className="row">
                        <label>background size: {bgsize}%</label>
                        <Slider min={70} max={100} defaultValue={bgsize} handle={bgsizeHandle} />
                    </div>

                    <div className="row">
                        <label>X-position: {posX}px</label>
                        <Slider min={-200} max={400} defaultValue={posX} handle={posXHandle} />
                    </div>

                    <div className="row">
                        <label>Y-position: {posY}px</label>
                        <Slider min={-200} max={50} defaultValue={posY} handle={posYHandle} />
                    </div>

                    <div className="row">
                        <label>opacity: {opacity}</label>
                        <Slider min={50} max={100} defaultValue={opacity} handle={opacityHandle} />
                    </div>
                </div>

                <div className="col">
                    <div className="glowswatch">
                        {swatch}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UsingImg;
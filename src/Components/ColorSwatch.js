import { useState } from 'react'
import { ChromePicker } from 'react-color'

function ColorSwatch({ handleChange, hex, colorIdx}) {
    const [displayColorPicker, setDisplayColorPicker] = useState(false)

    const handleChangeComplete = (color) => {
        handleChange(color.hex, colorIdx)
      }

    const handleClose = () => {
        setDisplayColorPicker(false)
      }
    
      const handleClick = () => {
        setDisplayColorPicker(!displayColorPicker)
      };

  return (
    <>
        <div style={{fontSize: '.6em'}}>Color {colorIdx}</div>
        <div style={{padding: '1px', background: '#fff', borderRadius: '1px', boxShadow: '0 0 0 1px rgba(0,0,0,.1)', display: 'inline-block', cursor: 'pointer'}} onClick={ handleClick }>
          <div style={{width: '150px', height: '16px', padding: '4px', borderRadius: '2px', background: `${hex}`}}></div>
        </div>

        {displayColorPicker ? 
          <div style={{position: 'absolute', zIndex: '2'}}>
            <div style={{position: 'fixed', top: '0px', right: '0px', bottom: '0px', left: '0px',}} onClick={handleClose} />
            <ChromePicker 
              disableAlpha={ true }
              color={ hex }
              onChange={ handleChangeComplete } 
            />
          </div> : 
        null}
    </>
  );
}

export default ColorSwatch;
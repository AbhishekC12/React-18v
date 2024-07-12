import { useState } from "react";

export function ApplyStyle()
{
    const [fontFamily, setFontFamily] = useState('Arial');
    const [fontSize, setFontSize] = useState('20px');
    const [fontColor, setFontColor] = useState('#000000');
    const [textStyle, setTextStyle] = useState({color:fontColor, fontSize:fontSize, fontFamily:fontFamily});

    function handleFontSizeChange(e){
        setFontSize(e.target.value + 'px');
    }
    function handleColorchange(e){
        setFontColor(e.target.value);
    }
    function handleFontFamilyChange(e){
        setFontFamily(e.target.value);
    }


    function handleApplyClick(){
        setTextStyle({
            fontSize : fontSize,
            fontFamily: fontFamily,
            color: fontColor
        })
    }

    return (
        <div className="container-fluid">
           <fieldset className="w-25">
            <legend>Text Formatting</legend>
            <dl>
                <dt>Font Family</dt>
                <dd>
                    <select onChange={handleFontFamilyChange} className="form-select">
                        <option>Select Font</option>
                        <option>Arial</option>
                        <option>Algerian</option>
                    </select>
                </dd>
                <dt>Font Color</dt>
                <dd>
                    <input onChange={handleColorchange} type="color" className="form-control-color" />
                </dd>
                <dt>Font Size</dt>
                <dd>
                    1 <input onChange={handleFontSizeChange} type="range" min="10" max="100"  className="form-range" /> 100
                </dd>
            </dl>
            <button onClick={handleApplyClick} className="btn btn-primary">Apply</button>
           </fieldset>
           <div align="center">
              <p style={textStyle}>
                 Sample Text
              </p>
           </div>
        </div>
    )
}
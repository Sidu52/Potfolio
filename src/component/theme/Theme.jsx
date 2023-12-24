import React, { useState } from 'react'
import { GiCancel } from "react-icons/gi";
import { themeColors, DefaultTheme, headingColor, DefaultHeading, fontFamilies, DefaultFont, darkTheme } from '../../content/themeData';

export default function Theme({ darktheme, setDarktheme, setthemetoggle, themetoggle }) {

    console.log("Aa", darktheme)
    // const [darktheme, setDarktheme] = useState(false);
    const applydarkTheme = (selectedTheme) => {
        document.documentElement.style.setProperty('--bacground', selectedTheme.background);
        document.documentElement.style.setProperty('--secoundry-background', selectedTheme.secondary_background);
        document.documentElement.style.setProperty('--heading-primary-color', selectedTheme.heading);
        document.documentElement.style.setProperty('--heading--secondary-color', selectedTheme.secondary_heading);
        document.documentElement.style.setProperty('--sub-heading-color', selectedTheme.link);
        document.documentElement.style.setProperty('--small-heading-color', selectedTheme.small_heading);
    };

    const applyTheme = (selectedTheme) => {
        document.documentElement.style.setProperty('--bacground', selectedTheme.background);
        document.documentElement.style.setProperty('--secoundry-background', selectedTheme.secondary_background);
        document.documentElement.style.setProperty('--heading-primary-color', selectedTheme.heading);
        document.documentElement.style.setProperty('--heading--secondary-color', selectedTheme.secondary_heading);
        document.documentElement.style.setProperty('--sub-heading-color', selectedTheme.link);
        document.documentElement.style.setProperty('--small-heading-color', selectedTheme.small_heading);
    };
    const applyHeadingTheme = (selectedTheme) => {
        document.documentElement.style.setProperty('--heading-primary-color', selectedTheme.heading);
        document.documentElement.style.setProperty('--heading--secondary-color', selectedTheme.secondary_heading);
        document.documentElement.style.setProperty('--sub-heading-color', selectedTheme.link);
        document.documentElement.style.setProperty('--small-heading-color', selectedTheme.small_heading);
    };

    const applyFontFamily = (selectedTheme) => {
        document.documentElement.style.setProperty('--font-family-heading', selectedTheme.heading);
        document.documentElement.style.setProperty(' --font-family-subheading', selectedTheme.subheading);
    };
    return (
        <div className={`theme__box h-full flex flex-col gap-4 fixed top-0 right-0 z-10 mb-5 pb-10 px-6 overflow-y-scroll ${themetoggle ? 'visible' : 'hidden'}`}>
            <div className='theme__uppder_box flex items-center justify-between py-6'>
                <span className='theme__heading'>Portfolio</span>
                <span className='cancel--icon absolute top-2 right-2 text-xl' onClick={() => setthemetoggle(false)}><GiCancel /></span>
                <label class="ui-switch">
                    <input type="checkbox" checked={darktheme} />
                    <div class="slider">
                        <div onClick={() => {
                            setDarktheme(!darktheme)
                            applydarkTheme(!darktheme ? darkTheme : DefaultTheme)
                        }} style={{ backgroundColor: !darktheme ? "#ecd147" : "#000" }} class="circle"></div>
                    </div>
                </label>
            </div>
            <span className='theme__paragraph'>Use the template as-is or try different colors and fonts from the options below.</span>
            <div className='flex items-center justify-between'>
                <span className='theme__heading'>Try new look</span>
                <span className='theme__paragraph' onClick={() => applyTheme(DefaultTheme)} >Default</span>
            </div>
            <div className='flex items-center justify-between  border-2 border-solid border-black border-opacity-25 px-2 py-4' onClick={() => applyTheme(DefaultTheme)} >
                <span className='theme__paragraph'>DEFAULT COLORS</span>
                <span className='flex items-center gap-1'>
                    <span className=' theme_border w-4 h-4 border-2 border-solid border-opacity-25 rounded-full' style={{ backgroundColor: "#fefefe" }}></span>{/*background */}
                    <span className=' theme_border w-4 h-4 border-2 border-solid border-opacity-25 rounded-full' style={{ backgroundColor: "#eaeaea" }}></span>{/*secoundry_background */}
                    <span className=' theme_border w-4 h-4 border-2 border-solid border-opacity-25 rounded-full' style={{ backgroundColor: "#FFC448" }}></span>{/*heding primary color*/}
                    <span className=' theme_border w-4 h-4 border-2 border-solid border-opacity-25 rounded-full' style={{ backgroundColor: "#f4c665" }}></span>{/*heding secoundary color*/}
                    <span className=' theme_border w-4 h-4 border-2 border-solid border-opacity-25 rounded-full' style={{ backgroundColor: "#000000" }}></span>{/*sub heading color*/}
                    <span className=' theme_border w-4 h-4 border-2 border-solid border-opacity-25 rounded-full' style={{ backgroundColor: "#505050" }}></span>{/*small heading color*/}
                </span>
            </div>

            <div className='flex flex-wrap gap-1 justify-center'>
                {themeColors.map((item, index) => (
                    <div className='border-2 border-solid border-black border-opacity-25 px-2 py-4' key={index} onClick={() => applyTheme(item)}>
                        <span className='flex items-center gap-1'>
                            <span className='theme_border w-4 h-4 border-2 border-solid border-opacity-25 rounded-full' style={{ backgroundColor: item.background }}></span>
                            <span className='theme_border w-4 h-4 border-2 border-solid border-opacity-25 rounded-full' style={{ backgroundColor: item.secondary_background }}></span>
                            <span className='theme_border w-4 h-4 border-2 border-solid border-opacity-25 rounded-full' style={{ backgroundColor: item.heading }}></span>
                            <span className='theme_border w-4 h-4 border-2 border-solid border-opacity-25 rounded-full' style={{ backgroundColor: item.secondary_heading }}></span>
                            <span className='theme_border w-4 h-4 border-2 border-solid border-opacity-25 rounded-full' style={{ backgroundColor: item.link }}></span>
                            <span className='theme_border w-4 h-4 border-2 border-solid border-opacity-25 rounded-full' style={{ backgroundColor: item.small_heading }}></span>
                        </span>
                    </div>
                ))}
            </div>


            <div>
                <div className='flex items-center justify-between'>
                    <span className='theme__heading'>Try Other Heading</span>
                    <span className='theme__paragraph' onClick={() => applyHeadingTheme(DefaultHeading)}>Defalut</span>
                </div>
                <div className='flex flex-wrap gap-4 justify-center'>
                    {headingColor.map((item, index) => (
                        <div className='border-2 border-solid border-black border-opacity-25 px-2 py-4' key={index} onClick={() => applyHeadingTheme(item)}>
                            <span className='flex items-center gap-1'>
                                <span className='theme_border w-4 h-4 border-2 border-solid border-opacity-25 rounded-full' style={{ backgroundColor: item.heading }}></span>
                                <span className='theme_border w-4 h-4 border-2 border-solid border-opacity-25 rounded-full' style={{ backgroundColor: item.secondary_heading }}></span>
                                <span className='theme_border w-4 h-4 border-2 border-solid border-opacity-25 rounded-full' style={{ backgroundColor: item.link }}></span>
                                <span className='theme_border w-4 h-4 border-2 border-solid  border-opacity-25 rounded-full' style={{ backgroundColor: item.small_heading }}></span>
                            </span>
                        </div>
                    ))}
                </div>
            </div>


            {/* Font family options */}
            <div>
                <div className='flex items-center justify-between'>
                    <span className='theme__heading'>Try Other Font</span>
                    <span className='theme__paragraph' onClick={() => applyFontFamily(DefaultFont)}>Defalut</span>
                </div>
                <div className='flex flex-wrap gap-4 justify-center'>
                    {fontFamilies.map((item, index) => (
                        <div className='theme_border border-2 border-solid border-opacity-25 p-2' key={index} onClick={() => applyFontFamily(item)}>
                            <span className='flex items-center gap-1'>
                                <span className='theme__heading w-4 h-4' style={{ fontFamily: item.heading }}>A<span style={{ fontFamily: item.subheading }}>a</span></span>
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

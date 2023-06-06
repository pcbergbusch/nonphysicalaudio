/*
 * imports of react packages
 */
import React, { useEffect, useState } from "react"

/*
 * imports of implemented components and functions
 */
// import useComponentVisible from "../../hooks/useComponentVisible"
// import { getNameFirst } from "../../common/utilsUser"
import LogoImage from "../assets/images/npa_dark.PNG"

/*
 * imports of styles
 * order is important! custom styles must be imported last
 */
import "../App.scss"
import "./NavigationBar.scss"

/*
 * The leftmost navigation menu on the page
 */
const NavigationBar = () => {

  return (
    <div>
      <span
        className="flexRowCenter navigationBarContainer"
      >
        <span className="flexRow">
          <img src={LogoImage} className="logoImage"></img>
          <div style={{width: "2%"}}></div>
          <div className="landingPageMenuBarText">Nonphysical Audio</div>
        </span>
        <div style={{width: "60%"}}></div>
        <button className="button">Plugins</button>
        <button className="button">Apps</button>
        <button className="button">Mixes</button>
      </span>
    </div>
  )
}

export default NavigationBar

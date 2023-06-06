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
import "./BottomBar.scss"

/*
 * The leftmost navigation menu on the page
 */
const BottomBar = () => {

  return (
    <div className="bottomBarContainer">
      <span
        className="flexRow"
      >
        <div className="landingPageMenuBarText">Developed in Frankfurt | Contact | Impressum</div>
      </span>
    </div>
  )
}

export default BottomBar

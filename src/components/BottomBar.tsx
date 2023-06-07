/*
 * imports of react packages
 */
import React from "react"

/*
 * imports of implemented components and functions
 */

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
        <div className="bottomBarText">Developed in Frankfurt | Contact | Impressum</div>
      </span>
    </div>
  )
}

export default BottomBar

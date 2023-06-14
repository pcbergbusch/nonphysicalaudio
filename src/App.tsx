/*
 * imports of react packages
 */
import React, {useState} from "react"

/*
 * imports of implemented components and functions
 */
import LogoImage from "./assets/images/npa_dark_space.PNG"

/*
 * imports of styles
 * order is important! custom styles must be imported last
 */
import "./App.scss"

const App = () => {
  const [mainVisible, setMainVisible] = useState<boolean>(true)
  const [pluginsVisible, setPluginsVisible] = useState<boolean>(false)
  const [appsVisible, setAppsVisible] = useState<boolean>(false)
  const [mixesVisible, setMixesVisible] = useState<boolean>(false)
  const [contactVisible, setContactVisible] = useState<boolean>(false)
  const [impressumVisible, setImpressumVisible] = useState<boolean>(false)
  
  return (
    <div className="flexColumn" style={{backgroundColor: "black"}}
      // prevent the default browser right-click behaviour
      onContextMenu={(e) => {e.preventDefault()}}
    >
      <div
        className="flexRowCenter navigationBarContainer"
      >
        <div className="flexRow">
          <img src={LogoImage} className="logoImage"></img>
          <div
            className="button navigationBarText"
            onClick = {() => {
              setMainVisible(true)
              setPluginsVisible(false)
              setAppsVisible(false)
              setMixesVisible(false)
              setContactVisible(false)
              setImpressumVisible(false)
            }}
          >
              Nonphysical Audio
          </div>
        </div>
        <div style={{width: "60%"}}></div>
        <div
          className="button navigationBarText"
          onClick = {() => {
            setMainVisible(false)
            setPluginsVisible(true)
            setAppsVisible(false)
            setMixesVisible(false)
            setContactVisible(false)
            setImpressumVisible(false)
          }}
        >
          Plugins
        </div>
        <div
          className="button navigationBarText"
          onClick = {() => {
            setMainVisible(false)
            setPluginsVisible(false)
            setAppsVisible(true)
            setMixesVisible(false)
            setContactVisible(false)
            setImpressumVisible(false)
          }}
        >
          Apps
        </div>
        <div
          className="button navigationBarText"
          onClick = {() => {
            setMainVisible(false)
            setPluginsVisible(false)
            setAppsVisible(false)
            setMixesVisible(true)
            setContactVisible(false)
            setImpressumVisible(false)
          }}
        >
          Mixes
        </div>
      </div>
      {mainVisible && (
        <div className="pageContainer">
          <div
            className="pageTitle"
          >
            Nonphysical Audio
          </div>
          <div className="break"></div>
          <div
            className="pageText"
          >
              We are a team of scientists and engineers fascinated by the physics of sound
              and the psychology of music.
          </div>
          <div className="break"></div>
          <div
            className="pageText"
          >
            The left and right sides of our brains are fully connected.
          </div>
          <div className="break"></div>
          <div
            className="pageText"
          >
            We build non-linear models and non-physical solutions for audio synthesis and transformation.
          </div>
        </div>
      )}
      {pluginsVisible && (
        <div className="pageContainer">
          <div
            className="pageTitle"
          >
            Plugins
          </div>
          <div className="break"></div>
          <div
            className="pageText"
          >
              Too many plugins have too many parameters with weird names that no one understands.
          </div>
          <div className="break"></div>
          <div
            className="pageText"
          >
            Our plugins have at most 3 parameters and we use them ourselves in our mixes.
          </div>
          <div className="break"></div>
          <div
            className="pageText"
          >
            COMING SOON!
          </div>
        </div>
      )}
      {appsVisible && (
        <div className="pageContainer">
          <div
            className="pageTitle"
          >
            Apps
          </div>
          <div className="break"></div>
          <div
            className="pageText"
          >
              You can find these apps in the Google Play Store and in the Apple Store.
          </div>
          <div className="break"></div>
          <div
            className="pageText"
          >
            COMING SOON!
          </div>
        </div>
      )}
      {mixesVisible && (
        <div className="pageContainer">
          <div
            className="pageTitle"
          >
            Mixes
          </div>
          <div className="break"></div>
          <div
            className="pageText"
          >
              Enjoy these electronic remixes of original pipe organ compositions.
          </div>
          <div className="break"></div>
          <div
            className="pageText"
          >
            COMING SOON!
          </div>
        </div>
      )}
      {contactVisible && (
        <div className="pageContainer">
          <div
            className="pageTitle"
          >
            Contact
          </div>
          <div className="break"></div>
          <div
            className="pageText"
          >
            <p>Nonphysical Audio</p>
            <p>Frankfurt Germany</p>
          </div>
        </div>
      )}
      {impressumVisible && (
        <div className="pageContainer">
          <div
            className="pageTitle"
          >
            Impressum
          </div>
          <div className="break"></div>
          <p
            className="pageText"
          >
              COMING SOON!
          </p>
        </div>
      )}
      <div className="bottomBarContainer">
        <div
          className="flexRow"
        >
          <div
            className="button bottomBarText"
            onClick = {() => {
              setMainVisible(false)
              setPluginsVisible(false)
              setAppsVisible(false)
              setMixesVisible(false)
              setContactVisible(true)
              setImpressumVisible(false)
            }}
          >
            Contact
          </div>
          <div
            className="bottomBarText"
          >
            |
          </div>
          <div
            className="button bottomBarText"
            onClick = {() => {
              setMainVisible(false)
              setPluginsVisible(false)
              setAppsVisible(false)
              setMixesVisible(false)
              setContactVisible(false)
              setImpressumVisible(true)
            }}
          >
            Impressum
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

/*
 * imports of react packages
 */
import React from "react"
import { createRoot } from "react-dom/client"

/*
 * imports of implemented components and functions
 */
import App from "./App"

/*
 * imports of styles
 * order is important! custom styles must be imported last
 */

const container = document.getElementById("app")!
const root = createRoot(container)
root.render(
  <App />
)

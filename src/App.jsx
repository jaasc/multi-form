import React from "react"
import { MultiForm } from "./components/Context"
import Sidebar from "./components/Sidebar"
import Stepfive from "./components/steps/Stepfive"
import Stepfour from "./components/steps/Stepfour"
import Stepone from "./components/steps/Stepone"
import Stepthree from "./components/steps/Stepthree"
import Steptwo from "./components/steps/Steptwo"

function App() {
  const { activeForm } = MultiForm()
  
  return (
    <div className="flex flex-col md:flex-row">
      <Sidebar />
      {
        activeForm === 0 ? <Stepone/> :
        activeForm === 1 ? <Steptwo/> :
        activeForm === 2 ? <Stepthree/> :
        activeForm === 3 ? <Stepfour/> :
        <Stepfive/>
      } 
    </div>
  )
}

export default App

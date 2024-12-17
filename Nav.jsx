import React, { useState } from 'react'
// import React, {useState} from 'react'

// import React from 'react'
const App = () => {

const[name,setName] = useState ("hi")
function handlechange() { 

var names =["Learn","Master","Try"]
var random = Math.floor(Math.random() * names.length);
setName(name[random])

}

  return (
    <div>

      <p>lets {name} reacts</p>
      {<button onclick = {handlechange}>Change </button>}
    </div>
    
  )
}



export default App
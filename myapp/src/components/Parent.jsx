import React from 'react'
import Child from './Child'
import { useState } from 'react'
// import cuild2 from './Child2'
function Parent() {
    const [user,setUser]=useState("thi ddata is from child 1")

  return (<>
  <Child abc={user}/>

  </>
  )
}

export default Parent
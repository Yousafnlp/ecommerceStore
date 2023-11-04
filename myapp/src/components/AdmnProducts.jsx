import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function AdmnProducts() {
    let navigate = useNavigate()

    useEffect(()=>{
        navigate('/')
    })
  return (
      <></>
  )
}

export default AdmnProducts

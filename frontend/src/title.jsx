import React from 'react'

const title = ({name, subtitle}) => {
    console.log(name, subtitle);
  return (
    <>
        <div>{name}</div>
        {subtitle ? <h1>{subtitle}</h1> : <h2>no subtitle passed damn it</h2>}
    </>
    
  )
}

export default title
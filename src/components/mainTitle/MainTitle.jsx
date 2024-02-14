import React from 'react'

export const MainTitle = (props) => {
  const title = props.title;
  return (
    <div>
      <h2>{title}</h2>
      {/* <h2>{props.secondTitle}</h2> */}
    </div>
  )
}

export const SecondTitle = (props) => {
  const title = props.title;
  return (
    <div>
      <h2>{title}</h2>
      {/* <h2>{props.secondTitle}</h2> */}
    </div>
  )
}
// export default MainTitle
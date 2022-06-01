import React from "react";


export const Alert = ({msg, type, show}) => {
  return (
    show && <div className="alert">
      <p className={type}>{msg}</p>
    </div>
  )
}

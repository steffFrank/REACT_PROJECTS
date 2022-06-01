import React from "react";


export const Alert = ({msg, type, show}) => {
  return (
    show && <div className="alert">
      <p className={`alert-${type}`}>{msg}</p>
    </div>
  )
}

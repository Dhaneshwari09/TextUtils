import React from "react";

function Alert(props) {
  //for success conevrt into Success first letter upaercase
  const capitalize = (word) => {
    if (!word) return "";
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };

  return (
    <div style={{height: '50px'}}>
       { props.alert && 
          //alert-warning === alert-${props.alert.type} show type mean in green box
          <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
          </div>}
      </div>
  )
}

export default Alert;

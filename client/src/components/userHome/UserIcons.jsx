import React from "react";

function UserIcons(props) {
  return (
    <div>
      <div className="position-absolute " style={{ right: "20px",bottom:'30px', display:'flex',flexDirection:'column'}}>
        <img src="src\assets\like.png"style={{cursor:'pointer',zIndex:'999', width:'4vw'}} alt="" onClick={props.handleLike}/>
        <img className="mt-3"style={{cursor:'pointer',zIndex:'999', width:'4vw'}} src="src\assets\diamond.png" alt="" onClick={props.handleDiamond}/>
        <img className="mt-3"style={{cursor:'pointer',zIndex:'999', width:'4vw'}} src="src\assets\boost.png" alt="" onClick={props.handleBoost}/>
        <img className="mt-3"style={{cursor:'pointer',zIndex:'999', width:'4vw'}} src="src\assets\filter.png" alt="" onClick={props.handleFilter}/>
      </div>
    </div>
  );
}

export default UserIcons;

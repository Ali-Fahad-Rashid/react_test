import React from "react";
import { useState ,useEffect, useRef} from "react";

const MyTabsComponent = () => {
    // Use console.log() for debugging

        var [x, setx] = useState(true);
    var [y, sety] = useState(false);

const add= () =>{
setx(!x)

}


const add2= () =>{
sety(!y)

}


    return <div className="tabs">

        <button onClick={add}  className={ x ? "btn-active" : "btn"}>Section title 1</button>
        <button onClick={add2} className={ y ? "btn-active" : "btn"}>Section title 2</button>
        <div className="view">
           { x && <h6>Content of section 1</h6>}
                 { y && <h6>Content of section 2</h6>}
        </div>


    </div>;
};

export default MyTabsComponent;


import React from 'react';
import { useState ,useEffect, useRef} from "react";


const App6 =()=> {

  //  var interval 
    const intervalRef = useRef(null)

    var [items, setitems] = useState(['test',42,(<span> i am a span </span>)]);
    var [x, setx] = useState(0);
    var [y, sety] = useState(2000);

 useEffect(() => {
    Time()
  /*    return () => {
        console.log(`clearing interval`);
        clearInterval(interval.current);
      };   */
  }, []);

 const Time = ()=>{
    //clearInterval(interval.current);

    intervalRef.current = setInterval(() => {
        if(x>=items.length-1){
            setx(x=0);
        }
    else {
        setx(x=x+1);
    }    }, y)



}

const add1=()=> {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    if(intervalRef.current===null){
        Time()
        }
        
        if(x>=items.length-1){
        setx(x=0);
    //    sety(y=1000);


    }
else {
    setx(x=x+1);
   //   sety(y=1000);

}
 }
  
 const add2=()=> {
    clearInterval(intervalRef.current);
    intervalRef.current = null;//console.log(interval.current)
   // interval=null
    //console.log(interval.current)
    if(intervalRef.current===null){
    Time()
    }
    if(x==0){
        setx(x=items.length-1);
    //    sety(y=1000);
    }
    else {
        setx(x=x-1);
    //    sety(y=1000);

    }

}


    return (
      <div  style={{ margin:'100px'}}  className="todoListMain">

        <div className='current'>{items.length && items[x]
}


        </div>
         
       {items.length >2 &&  <div>
         <button onClick={add1} type="submit">Next </button>
            <button onClick={add2}  type="submit">previos </button> 
         </div>}

        </div>




    );
  

} 



export default App6;





/* import React from 'react';

let   myTimeout 


 class App extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
    //  a:true,
    //  b:true,
      x:0,
     y:1000,
      items:['test',42,(<span> i am a span </span>)]
    };



  }

  //componentDidUpdate=()=>{

 // }

 componentDidMount=()=>{
this.Time()
console.log(this.state.items.length)
}

Time = ()=>{

    myTimeout = setInterval(() => {
        if(this.state.x>=this.state.items.length-1){
            this.setState({ x: 0}) 
        
        }
        else {
            this.setState({ x: this.state.x+1}) 
        
        }
        
               }, this.state.y) 
}

  add1=()=> {
    clearTimeout(myTimeout);
    this.Time()
    if(this.state.x>=this.state.items.length-1){
        this.setState({ x: 0,y:1000 }) 


    }
else {
    this.setState({ x: this.state.x+1,y:1000 }) 


}
 }
  
 add2=()=> {
    clearTimeout(myTimeout);
    this.Time()
    if(this.state.x<1){
        this.setState({ x: this.state.items.length-1,y:1000 }) 

    }
    else {

        this.setState({ x: this.state.x-1,y:1000 }) 

    }

}

  render() {

    return (
      <div  style={{ margin:'100px'}}  className="todoListMain">

        <div className='current'>{this.state.items.length && this.state.items[this.state.x]
}


        </div>
         
       {this.state.items.length >this.state.items.length-1 &&  <div>
         <button style={this.state.a ? {color:'red'} : {color:'blue'} } onClick={this.add1} type="submit">Next </button>
            <button style={this.state.b ? {color:'red'} : {color:'blue'} } onClick={this.add2}  type="submit">previos </button> 
         </div>}

        </div>




    );
  }

} 



export default App;

 */
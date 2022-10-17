import React from 'react';
import { useState ,useEffect, useRef} from "react";

  const App5 =()=> {

    var [a, seta] = useState(true);
    var [b, setb] = useState(true);

    var [x, setx] = useState(100);
    var [y, sety] = useState(25);


   const add2=()=> {
        if(b){

            if(!a){

             //   this.setState({ y: this.state.y-1,b:false,a:true, x: x-1}) 
                seta(a=true)
                setb(b=false)
                setx(x=x-1)
                sety(y=y-1)
            }
                else {
        
                 //   this.setState({ y: this.state.y-1,b:false}) 
        
                 setb(b=false)
                 sety(y=y-1)


                }


    }
      else {

      //  this.setState({ y: this.state.y+1,b:true }) 
      setb(b=true)
      sety(y=y+1)
      }
    }
  const add1=()=> {
    if(a){
        if(!b){

       // this.setState({ x: this.state.x+1,a:false,b:true, y: this.state.y+1}) 
       seta(a=false)
       setb(b=true)
       setx(x=x+1)
       sety(y=y+1)

    }
        else {

         //   this.setState({ x: this.state.x+1,a:false}) 
         seta(a=false)
         setx(x=x+1)
        }
      }
      else {

       // this.setState({ x: this.state.x-1,a:true }) 
       seta(a=true)
       setx(x=x-1)
      }  }
  


    return (
      <div  style={{ margin:'100px'}}  className="todoListMain">
            <button  style={a ? {color:'red'} : {color:'blue'} } onClick={add1} type="submit">Like <span>{x}</span></button>
            <button   style={b ? {color:'red'} : {color:'blue'} }  onClick={add2}  type="submit">Unlike | <span>{y}</span></button>

        </div>




    );
  

} 



export default App5;




/* import React from 'react';
 class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      a:true,
      b:true,
      x:100,
      y:25,
    };



  }


    add2=()=> {
        if(this.state.b){

            if(!this.state.a){

                this.setState({ y: this.state.y-1,b:false,a:true, x: this.state.x-1}) 
            
            }
                else {
        
                    this.setState({ y: this.state.y-1,b:false}) 
        
                }


       // this.setState({ y: this.state.y-1,b:false }) 
      }
      else {

        this.setState({ y: this.state.y+1,b:true }) 

      }
    }
  add1=()=> {
    if(this.state.a){
        if(!this.state.b){

        this.setState({ x: this.state.x+1,a:false,b:true, y: this.state.y+1}) 
    
    }
        else {

            this.setState({ x: this.state.x+1,a:false}) 

        }
      }
      else {

        this.setState({ x: this.state.x-1,a:true }) 

      }  }
  
  render() {

    return (
      <div  style={{ margin:'100px'}}  className="todoListMain">
            <button  style={this.state.a ? {color:'red'} : {color:'blue'} } onClick={this.add1} type="submit">Like <span>{this.state.x}</span></button>
            <button   style={this.state.b ? {color:'red'} : {color:'blue'} }  onClick={this.add2}  type="submit">Unlike | <span>{this.state.y}</span></button>

        </div>




    );
  }

} 



export default App;

 */
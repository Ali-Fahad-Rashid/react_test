import React from 'react';
import { useState,useEffect } from "react";

const TodoItem = props =>  
<div>
{props.items?.map((link) => {
  //console.log( Math.random())
const fun2=(e)=>{
  props.fun(link.val)

}
  return (
    <div key={ Math.random()} className="image">
    <ul><li style={{fontSize:'50px'}} onClick={fun2} className={link.doneval ? 'is-done' : ''}
   // "is-done"
    > {link.val}</li></ul>
 
     </div>
  );
})}
</div>
 var co=0;

var flag =true;
const App4 = () => {


  var [add, setadd] = useState('Ali');
  var [items, setitems] = useState([
/*     {
       val: 'add',
    doneval: false
  
  } */

]);
  var [x, setx] = React.useState(0);
  var [y, sety] = useState(0);



  
  const change2=(v)=>{

   
/*     this.setState(
      this.state.items.map(item => {
          return item.val === v ?  (item.done = !item.done)  : item
      }
  )) */


  setitems(
    items.map(item => {
        return item.val === v ?  {
            ...item,
            doneval: !item.doneval
        }  : item
    }
))


    countFUn()


  }


  const  addItem=async (e)=> {
    e.preventDefault();
    //this.state.add.trim()
    if(add!==""){
      flag =true

      
      items.map(product => {
        if (product.val === add){
          flag =false;
        }
      }) 
  
  
  if(flag===true){ 
    var newItem = {
      val: add,
      doneval: false
    };

    setx(x=x+1);
    sety(y=y+1);
    setitems([...items, newItem])
    setadd('')

  }
  
  





 

  }
  }

 const changeadd=(e)=>{
    setadd(e.target.value.trim())
    console.log(items)
  }
  

  useEffect(() => {

    countFUn();

    console.log('the x has changed', x)
 }, [items])


  const countFUn=()=> {
co=0;
items.map((link) => {
if(link.doneval!==true){
  console.log(link.doneval)

co++
}
    })
    console.log(co)

   setx(co);


  }
  
 //   var i=0;
    return (
      <div  style={{margin:'100px'}}  className="todoListMain">
        <div className="header">
        <form onSubmit={addItem}>
            <input onChange={changeadd} value={add}>
            </input>
            <button disabled={false} type="submit">add</button>
          </form>

          <p className='task-counter'> {x} remaining out of {y} tasks</p>
{/*           <p className='task-counter'> {items[2].val}</p>
 */}
        </div>

   {/*      { <TodoItem
            items={items}
          fun={change2}
          
          /> } */}



{items.map((link) => {
  //console.log( Math.random())

  return (
    <div key={ Math.random()} className="image">
   <ul><li style={{fontSize:'50px'}} onClick={() => { 
    
 /*    setitems(
        items.map(item => {
            return item.val === link.val ?  {
                ...item,
                doneval: !item.doneval
            }  : item
        }
    )) */

    setitems(     
      items.map(product => {
      if (product.val === link.val) return {
        ...product,
        doneval: !product.doneval
    } 

      return product;
      
    })) 


   console.log(items)
 //co=0;
 //items.map((link) => {
/*   if(link.doneval===false){
 //co++
 
   //  })
     //console.log(co)
 
     setx(x++);
     console.log(x)
 }
     else {
      setx(x--);
      console.log(x)


     }  */
}} className={link.doneval ? 'is-done' : ''}
  // "is-done"
   > {link.val}</li></ul>

    </div>
  );
})


} 


<style>
{`
.is-done {
  text-decoration: line-through;
}`}

</style>

      </div>
    );
  

} 



export default App4;


/*     setitems(     
        items.map(product => {
        if (product.val === link.val) return (product.done = !product.done);
        return product;
      })) */
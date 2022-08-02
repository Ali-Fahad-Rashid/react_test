import React from 'react';

/* createTasks(item) {
  return <li key={item.key}>{item.text}</li>
} */

/* const addTask = title => {
  const newTasks = [...tasks, { title, completed: false }];
  setTasks(newTasks);
}; */

/* this.setState(
  this.state.products.map(product => {
    if (product.name === name) return (product.votes += vote);
    return product;
  })
); */

const TodoItem = props =>  
<div>
{props.items?.map((link) => {
  //console.log( Math.random())

  return (
    <div key={ Math.random()} className="image">
   <ul><li> {link}</li></ul>

    </div>
  );
})}
</div>

var flag =true;
 class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      add:'Ali'
    };

   // this.changeadd = this.changeadd.bind(this);
   // this.addItem = this.addItem.bind(this);

  }



  addItem=async (e)=> {
    e.preventDefault();
    //this.state.add.trim()
    if(this.state.add!==""){
      flag =true

      
      this.state.items.map(product => {
        if (product === this.state.add){
          flag =false;
  
  
        }
     
      }) 
  
  
  if(flag===true){ 
  
    this.setState({ items: [...this.state.items, this.state.add] }) //simple value
    this.state.add=""

  }
  
  





 

  }
  }

  changeadd=(e)=>{

  this.setState({ add: e.target.value.trim() }) //simple value
  console.log(this.state.items)




  }
  

  
  render() {
 //   var i=0;
    return (
      <div className="todoListMain">
        <div className="header">
        <form onSubmit={this.addItem}>
            <input onChange={this.changeadd} value={this.state.add}>
            </input>
            <button type="submit">add</button>
          </form>
        </div>



{/*         <div>
        {this.state.items?.map((link) => {
          console.log( Math.random())

          return (
            <div key={ Math.random()} className="image">
           <ul><li> {link}</li></ul>
        
            </div>
          );
        })}
      </div> */}

<TodoItem
            items={this.state.items}
          
          
          />


      </div>
    );
  }

} 



export default App;

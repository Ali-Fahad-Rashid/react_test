import { useState } from "react";
import axios from 'axios'

const api = 'https://example.com/api/items';
var delay = 2000;
var co= 500;
const App2 = () => {
const [title, setTitle] = useState('');
const [item, setItem] = useState();
const [loading, setLoading] = useState(false);
let myTimeout
  const handleSubmit = (e) => {
    //e.preventDefault();

   // setTimeout(() => console.log('Initial timeout!'), 1000);
   clearTimeout(myTimeout);

    myTimeout =  setTimeout(() => {  


    setTitle(e.target.value)



    setLoading(true)



// axios.get('https://example.com/api/items', { params: { q: title } }).then((res) => {

setItem(['Italy','span','iraq','dubai'])
console.log(item)
setLoading(false)

    //}) 

  }, delay)

  }

 


  return (
    <div className="wrapper">
            <div className= {loading ? 'is-loading control' : 'control'}>
        <input 
          type="text" 
          className="input"
          value={title}
          onChange={handleSubmit}
        />
<br></br>
{item && <div className="list is-hoverable">
{item.map(product => {
     return (

   <a key={ Math.random()}  href="#" style={{margin:'10px'}} className="list-item">{product}</a>

     )
      })}

    </div> }   </div>    </div>
  );
}
 
export default App2;



/*     onLogout() {
        this.props.history.push('/');
    } 
    
    
        return <Redirect to={{pathname: redirectTo}} push={true}/>



        state = { redirect: null };
render() {
  if (this.state.redirect) {
    return <Redirect to={this.state.redirect} />
  }
  return(
  // Your Code goes here
  )
}


<Redirect to={{
            pathname: '/order',
            state: { id: '123' }
        }}
/>

<Link to="/onboarding/profile" state={{ from: "occupation" }}>
  Next Step
</Link>


        */
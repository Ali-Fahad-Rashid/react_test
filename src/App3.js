import  React  from "react";
import axios from 'axios'

const api = 'https://example.com/api/items';
var delay = 2000;
var co= 500;
/* const App3 = () => {
const [title, setTitle] = useState('');
const [item, setItem] = useState();
const [loading, setLoading] = useState(false); */

var myTimeout


class App3 extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        item: [],
        loading:false,
        title:'hg',
      };
  
     // this.changeadd = this.changeadd.bind(this);
     // this.addItem = this.addItem.bind(this);

    }






   handleSubmit = (e) => {
    //e.preventDefault();

   // setTimeout(() => console.log('Initial timeout!'), 1000);
   clearTimeout(myTimeout);

    myTimeout =  setTimeout(() => {



        this.setState({loading:true,item: ['Italy','span','iraq','dubai']}) //simple value





// axios.get('https://example.com/api/items', { params: { q: title } }).then((res) => {

//setItem(['Italy','span','iraq','dubai'])
console.log(this.state.item)
console.log(this.state.title)

this.setState({ loading:false}) //simple value

    //}) 

  }, delay)

  }

 
render(){

  return (
    <div className="wrapper">
            <div className= {this.state.loading ? 'is-loading control' : 'control'}>
        <input 
          type="text" 
          className="input"
         // value={this.state.title}
          onChange={this.handleSubmit}
        />
<br></br>
{this.state.item && <div className="list is-hoverable">
{this.state.item.map(product => {
     return (

   <a key={ Math.random()}  href="#" style={{margin:'10px'}} className="list-item">{product}</a>

     )
      })}

    </div> }   </div>    </div>
  );}
}
 
export default App3;



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
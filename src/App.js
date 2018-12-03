import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Redirect, Prompt,Route, NavLink, HashRouter} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Navbar from'./component/navbar/navbar';
import Content from './component/content/content';
import Content1 from './component/content/content1'
import Footer from './component/footer/footer';

const User = ({match}) => {
  return ( <h1>Welcome User {match.params.username}</h1> );
}
class App extends Component {
  constructor(props) {
   localStorage.setItem('ss',false);
    super(props);
    this.state = {
        login: false,
        toDo: [
          1,2,3
        ]
    };
    localStorage.setItem('Array',this.state.toDo) 
}
updateState=()=> {
    this.setState(prevState => ({
      login: !prevState.login,
    }));

  localStorage.setItem('ss',true);
}
arrayUpdate=(event)=>{
this.setState(prevState =>({
  toDo : [...prevState.toDo,event] 
   }));     
localStorage.setItem('Array',this.state.toDo)  
}
arrayRemove=()=>
{
  var array = [...this.state.toDo];
  array.splice(array.indexOf())
  this.setState({ toDo:array  });
}
arrayRemoveParticular = (index) =>
{
  var array = [...this.state.toDo];
  array.splice(index,1)
  this.setState({ toDo:array  });
}
  render() {
    return (
     <React.Fragment>
        <Router>
        <div>
        <Navbar login={this.updateState} content={this.state}/>
        <Route  path='/' exact render ={
          ()=>{
            return(<Content array={this.state} arrayupdate={this.arrayUpdate} removearray={this.arrayRemove} removeparticular={this.arrayRemoveParticular}></Content>)
          }
        }/>
        <Route path='/content' exact render={
          ()=>{
            return(this.state.login ? (<Content1/>) : (<Redirect  to='/'/>))
          }
        }/>
        <Route path='/user/:username' exact render component={User}/>
        </div>
       
        </Router>
        <Footer></Footer>
     </React.Fragment>
    );
  }
  
}

export default App;

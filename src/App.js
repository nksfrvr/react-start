import React,{Component} from 'react';
import Ninjas from'./Ninjas';



class App extends Component{
  state = {
    ninjas:[
      {name:'yoshi', age : 33,belt:'black', id:1},
      {name:'ryu', age : 44,belt:'brown', id:2},
      {name:'sonik', age :21,belt:'green', id:3},
      {name:'magic', age :100,belt:'green', id:4},

    ]
  }
  render(){
    return(
      <div className= 'App'>
        <h1 className='ninja-title'> The Ninja List</h1>
        <Ninjas ninjas = {this.state.ninjas}/>
      </div>
    );
  }
}


export default App;

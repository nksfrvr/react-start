import React,{Component} from 'react';
import Ninjas from'./Ninjas';
import AddNinja from './AddNinja';



class App extends Component{
  state = {
    ninjas:[
      {name:'yoshi', age : 33,belt:'black', id:1},
      {name:'ryu', age : 44,belt:'brown', id:2},
      {name:'sonik', age :21,belt:'green', id:3},
      {name:'magic', age :100,belt:'green', id:4},
    ]
  }
  addNinja = (ninja)=>{
    //set a random id for ninja
    ninja.id = Math.random();
    //creat a new array and adding the object to it via spread op.(...)
    let ninjas = [...this.state.ninjas,ninja]
    //setstate with new list
    this.setState({
      ninjas:ninjas
    })
    

  }
  render(){
    return(
      <div className= 'App'>

        <AddNinja addNinja={this.addNinja}/>
        <Ninjas ninjas = {this.state.ninjas}/>
      </div>
    );
  }
}


export default App;

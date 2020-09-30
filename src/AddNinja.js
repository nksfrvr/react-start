import React, {Component} from 'react';

class AddNinja extends Component {
  state = {
    name :null,
    age:null,
    belt: null,
  }
  handleChange = (e)=>{
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e)=>{
    e.preventDefault();
    this.props.addNinja(this.state);
    
  }
  render() {
    return (
      <div className = 'AddNinja'>
        <form onSubmit={this.handleSubmit}>
          <input type = 'text' id = 'name' placeholder='add a ninja name' onChange={this.handleChange}/>
          <input type = 'text' id = 'age' placeholder='add a ninja age' onChange={this.handleChange}/ >
          <input type = 'text' id = 'belt' placeholder='add a ninja belt' onChange={this.handleChange}/>
          <button type='submit'>add another ninja</button>
        </form>
      </div>
    )
  }
}

export default AddNinja;

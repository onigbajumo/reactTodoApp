import React, {Component} from 'react';
import Header from './Header';
import Todoitems from './Todoitems';
import {NavLink} from 'react-router-dom';
class Todo extends Component{
    state = {
        todoitems : [],
        newTodo:"",
        // color: "blue"
   }
   handleSubmit = e => {
       e.preventDefault();
        this.setState(prevState => {
            if (prevState.todoitems.includes(prevState.newTodo)){}
            else 
            return {
                todoitems: prevState.todoitems.concat(this.state.newTodo),
                newTodo:""
            }
        })
    }
   handleChange = (e)=>{
    this.setState({newTodo: e.target.value})
}

componentDidUpdate(prevProps, prevState){
if ( prevState.todoitems.length !== 
    this.state.todoitems.length){
        const jsonState= 
        JSON.stringify(this.state.todoitems);
        localStorage.setItem("todoitems", jsonState)
    }
}
componentDidMount(){
    const itemsFromLocalStorage =
    localStorage.getItem("todoitems");
    const todoitemsFromLocalStorage =
    JSON.parse(itemsFromLocalStorage);

    if(todoitemsFromLocalStorage){
        this.setState(()=> ({
        todoitems:todoitemsFromLocalStorage
    }));
    }
    
}
handleColor = (e)=>{
    this.setState({
        color:e.target.value})
}
clickSubmit = (e)=>{
    e.preventDefault();
    console.log(e.target)
    console.log(this.state.newColor)
    this.setState ({
        color: e.target.value
})
}
handleRemoveOneItem = (individualitems)=> {
    console.log(individualitems)
    this.setState((prevState)=>{
       return{
        todoitems: prevState.todoitems.filter(item=> 
            item!==individualitems)
            }
       })
};
handleRemoveAllItem = (todoitems)=>{
    this.setState(()=>{
       return{
        todoitems:[]
       }})
};

    render(){
        // const stylein= {
        //     width: "100px",
        //     height: "100px",
        //     background: this.state.color
        // }
        
        return (
            <div>
                <NavLink to='/likes'>
                    got to like page
                </NavLink>
                <Header row1 = "Home" row2 = "Contact" row3 = "Support"
                row4="About Us" row5 = "Services"  />
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="">Todo Items</label> <br></br>
                    <input type="text" value={this.state.newTodo} onChange = {this.handleChange} ></input>
                    <button>Submit</button>
 
                </form>
                <div><button onClick={this.handleRemoveAllItem}>
                        Remove All
                        </button>
                    </div> 
                {
                    this.state.todoitems.map(item=>
                    <Todoitems individualitems={item} 
                    handleRemoveOneItem={this.handleRemoveOneItem}
                    />)
                }
               
            {/* <div style={stylein}>
                
            </div>
            <form onSubmit={this.clickSubmit}>
                <input tex="text" value = {this.state.newColor} onChange= {this.handleColor} name = "color"></input>
                <button>Change Color</button>
            </form> */}
            </div>
            
            
        )
    }
}
export default Todo;
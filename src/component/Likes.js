import React, {Component} from "react"
import {NavLink} from 'react-router-dom';
class Likes extends Component{
state={
likes : 0,
age: 20,
name: "Gbenga"
}
// decreaseLikes by 1 on click and set the prevState such that the likes don't go beyond 0
decreaseLikes = ()=> (
    this.setState((preState, propState)=>{
        return {
            likes:preState.likes > 0 ? preState.likes -1 : preState.likes = 0,
            name: "Onigbajumo Gbenga"
        }
    })
)
// increase the likes in the button by one on every click and never to exceed 5
increaseLikes = ()=> (
    this.setState((preState, propState)=>{
        return {
            likes:preState.likes < 5 ? preState.likes +1 : preState.likes = 5,
            name: "Onigbajumo Gbenga"
        }
    })
)
// Reset the likes in the button to the initial value on every click
resetLikes = () => {
    this.setState((preState, propState)=>{
        return {
            likes: preState.likes = 0,
            name : preState.name
        }
    }
    )
}
// Note: a variable cant be assigned inside a class function
// const {likes, age, name} = this.state
render(){
    // destrutured the data from this.state
    const {likes, age, name} = this.state
    return(
        <div>
            <NavLink to= '/'>
                go to home page
            </NavLink>
            <h3>This is my Likes App</h3>
            <p>
                Likes: {likes} <br></br>
                Name: {name} <br></br>
                <button onClick= {this.increaseLikes}>Likes</button>
                <button onClick = {this.decreaseLikes}>Unlike</button> <br></br>
                <button onClick = {this.resetLikes}>Reset</button>
            </p>
        </div>
        )
    }

}  
export default Likes;
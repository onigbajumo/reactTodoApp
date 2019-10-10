import React, {Component} from 'react';
import './Header.css'

class Header extends Component{
   
        constructor(props) {
            super(props);
            this.state = {scrollingLock : false};
            this.handleScroll = this.handleScroll.bind(this);
        }
  
      componentDidMount() {
            window.addEventListener('scroll', this.handleScroll);
        }
      
      componentWillUnmount() {
          window.removeEventListener('scroll',this.handleScroll);
        }
  
          handleScroll(){
          if(window.scrollY > 30){
          this.setState({
            scrollingLock: true
          })
      }
          else if(window.scrollY < 10){
          this.setState({
            scrollingLock: false
          })}
          }
          render(){
        const {row1, row2, row3, row4, row5} = this.props 
        return (
            <div className="header" style={{position: this.state.scrollingLock == true ? "fixed" :  "relative"}}>  
            <nav className="header_nav">
                <ul>
                    <li><a href="#"></a>{row1}</li>
                    <li><a href="#"></a>{row2}</li>
                    <li><a href="#"></a>{row3}</li>
                    <li><a href="#"></a>{row4}</li>
                    <li><a href="#"></a>{row5}</li>
                </ul>
            </nav>
             </div>
        )
    }
}
export default Header;
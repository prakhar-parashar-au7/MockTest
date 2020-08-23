import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class Home extends Component{
    render(){
        return(
            <div>
                  <h1>Home</h1>
            <a href="/login">loginaa</a>     
            <Link to="/login">Login</Link>
            <Link to="/">home</Link>
            </div>
           
        )
    }
}

export default Home
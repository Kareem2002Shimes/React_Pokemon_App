import React, { Component } from 'react';
import axios from 'axios';

class Post extends Component {
    constructor(props) {
        super(props); 
        this.state = { 
           userId : '',
           title: '',
           body: ''
         }
    }
    handleChange = (e)=>{
      this.setState({[e.target.name] : e.target.value })
    }
    handleSubmit = (e)=>{
        e.preventDefault();
        axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
        .then((response)=>{
            console.log(response)
        }).catch((error)=>{
            console.log(error)
        })
    }
    render() { 
        const {userId , title , body } = this.state
        return (  
        <div>
            <form onSubmit={this.handleSubmit}>
                <input
                 type='text' name='userId' value={userId} onChange={this.handleChange}
                
                ></input>
                <input
                 type='text' name='title' value={title} onChange={this.handleChange}
                 ></input>
                <input
                 type='text' name='body' value={body} onChange={this.handleChange}
                 ></input>
                 <button type='submit'>Submit</button>
            </form>
        </div> 
        );
    }
}
 
export default Post;
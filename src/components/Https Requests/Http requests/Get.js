import React, { Component } from 'react';
import axios from 'axios';

class Get extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts : [],
            errMsg: ''
        }
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts').then((response)=>{
          this.setState({posts : response.data})
         }).catch(err => {
             console.log(err)
            this.setState({errMsg : 'Error retreiving data'})
         })
    }
    
    render() { 
        const {posts , errMsg} = this.state
        return (
            <div>
                {
                    posts.length ? 
                    posts.map(post => <div key={post.id}>{post.title}</div>):
                    null
                }
                {
                    errMsg ? 
                    <div>{errMsg}</div>: null
                }
            </div>
         );
    }
}
 
export default Get;
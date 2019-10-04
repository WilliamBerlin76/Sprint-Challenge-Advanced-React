import React from 'react';
import axios from 'axios';

class Players extends React.Component{
    state = {
        player: []
    };
    componentDidMount(){
        axios.get(`http://localhost:5000/api/players`)
        .then(res => {
            console.log(res.data)
            this.setState({
                player: res.data
            })
        })
        .catch(err => {
            console.log('no data for u', err)
        })
    };


    render(){
        return(
            <div data-testid='cards'className='cards-container'>
               {this.state.player.map(item => {
                   return(
                       <div className="card">
                        <h3 className="label">Name:</h3>
                        <h3 key={item.id}>{item.name}</h3>
                        <h4 className="label">Country:</h4>
                        <p>{item.country}</p>
                       </div>
                   )
               })}
            </div>
        )
    }
}

export default Players;
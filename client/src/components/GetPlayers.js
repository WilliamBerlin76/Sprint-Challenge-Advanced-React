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
            <div data-testid='cards'className='playerCard'>
               {this.state.player.map(item => {
                   return(
                       <>
                        <h3 key={item.id}>Name: {item.name}</h3>
                        <p>Country: {item.country}</p>
                       </>
                   )
               })}
            </div>
        )
    }
}

export default Players;
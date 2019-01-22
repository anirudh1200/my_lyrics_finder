import React, { Component } from 'react';
import axios from 'axios';

const Context = React.createContext();

export class Provider extends Component{
    state = {
        song_list: [],
        heading: 'Top 10 Songs'
    }

    componentDidMount(){
        // https://cors-anywhere.herokuapp.com/ for allowing cors
        axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=in&apikey=${process.env.REACT_APP_MM_KEY}`)
            .then(res => {
                console.log(res);
                this.setState({ song_list: res.data.message.body.track_list });
            })
            .catch(err => console.log(err));
    }

    render(){
        return(
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;

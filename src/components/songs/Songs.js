import React, { Component, Fragment } from 'react';
import { Consumer } from '../../context';
import Spinner from '../layout/Spinner';
import Song from './Song';
import Typography from '@material-ui/core/Typography';
import grey from '@material-ui/core/colors/grey';
import Grid from '@material-ui/core/Grid';

class Songs extends Component{
    render(){
        const textColor = grey[50];
        return(
            <Consumer>
                {value => {
                    const { song_list, heading } = value;
                    console.log(song_list)
                    if(song_list){
                        return(
                            <Fragment>
                                <Typography variant='h4' align='center' style={{color: textColor}}>
                                    { heading }
                                </Typography>
                                <Grid container spacing={8}>
                                    {song_list.map(item => {
                                        return <Song key={item.track.track_id} song={item.track} setRedirect={this.setRedirect} />
                                    })}
                                </Grid>
                            </Fragment>
                        );
                    }else{
                        return <Spinner />
                    }
                }}
            </Consumer>
        )
    }
}

export default Songs;

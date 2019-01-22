import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import grey from '@material-ui/core/colors/grey';
import Icon from '@material-ui/core/Icon';
import Grid from '@material-ui/core/Grid';

const styles = {
  card: {
    margin: '20px 5%',
  },
  pos: {
    marginBottom: 12,
  },
};

function Song(props) {
  const { classes, song } = props;
  const textColor = grey[900];
  console.log(song);
  return (
    <Grid item xs={12} sm={6}>
        <Card className={classes.card} raised={true}>
          <CardContent>
            <Typography variant="h6" style={{lineHeight: '1.25'}} gutterBottom>
                { song.track_name }
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              { song.album_name }
            </Typography>
            <Typography component="p">
              { song.artist_name }
            </Typography>
          </CardContent>
          <CardActions>
            <Link to='/lyrics' style={{width: '100%', textDecoration: 'none'}}>
                <Button size="small" fullWidth={true} style={{background: textColor}} variant="contained" color="primary">
                        <Icon>chevron_right</Icon>
                        View Lyrics
                </Button>
            </Link>
          </CardActions>
        </Card>
    </Grid>
  );
}

Song.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Song);

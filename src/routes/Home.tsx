import React from 'react';
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";

import { Theme, createStyles, makeStyles, withStyles, WithStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

interface State {
  isLoading: boolean;
  movies: Array<any>;
}

const useStyles = createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      // backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: "100%",
      height: "100%",
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
  });


class Home extends React.Component<WithStyles, State> {

  state: State = {
    isLoading: true,
    movies: []
  };

  async componentDidMount() {
    const { data: { content } } = await axios.get("http://scrap.api.anyjava.net:8080/articles?size=20&page=0")
    this.setState({ movies: content, isLoading: false })
  }

  render() {
    const { isLoading, movies} = this.state;
    const { classes } = this.props;
    return (
      <main>
        {isLoading ? (
          <div className="loader">
            <span className="loader__text"> "Loading..." </span>
          </div>
        ) : (

            <div className={classes.root}>
              <GridList cellHeight={180} className={classes.gridList}>
                <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                  <ListSubheader component="div">December</ListSubheader>
                </GridListTile>
                {movies.map((tile) => (
                  <GridListTile key={tile.id}>
                    <img src={`https://img.anyjava.net/upload/${tile.images[0].url}`} alt={tile.subject} />
                    <GridListTileBar
                      title={tile.subject}
                      subtitle={<span>Hit: {tile.hit}</span>}
                      actionIcon={
                        <IconButton aria-label={`info about ${tile.subject}`} className={classes.icon}>
                          <InfoIcon />
                        </IconButton>
                      }
                    />
                  </GridListTile>
                ))}
              </GridList>
            </div>
          )}
      </main>
    );
  }
}

export default withStyles(useStyles)(Home);

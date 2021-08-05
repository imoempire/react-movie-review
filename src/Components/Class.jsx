import React, { Component } from "react";
import axios from "axios";
import { Card, ListGroup, ListGroupItem  } from "react-bootstrap";

export default class moviesClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }
  componentDidMount() {
    axios
      .get(
        "https://api.nytimes.com/svc/movies/v2/reviews/picks.json?offset=20&order=by-publication-date&api-key=foAUBWlINO96STrbBASQp91Ak4q2F0JL"
      )
      .then((res) => {
        this.setState({ movies: res.data.results });
      })
      .catch((error) => console.log(error));
  }

  render() {
    console.log(this.state);
    return (
      <div className="App-header" >
        <div>
          <h1>Movies</h1>
        </div>
        <div>
          {this.state.movies.map((movie) => (
            <div className="container">
              <div className="row">
              <div className="col-12">
              <div>
                <Card style={{ width: "30rem", }}>
                  <Card.Img
                    variant="top"
                    src= {movie.multimedia.src}
                  />
                  <Card.Body>
                    <Card.Title>{movie.display_title}</Card.Title>
                    <Card.Text>{movie.headline}</Card.Text>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroupItem>Critics Pick: {movie.critics_pick}</ListGroupItem>
                    <ListGroupItem>Byline: {movie.byline}</ListGroupItem>
                  </ListGroup>
                  <Card.Body>
                    <Card.Link href={movie.link.url}>Read More</Card.Link>
                  </Card.Body>
                </Card>
              </div>
              </div>
              </div>
              <hr />
              <br />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

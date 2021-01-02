import React from 'react';
import axios from "axios";
import Movie from "../components/Movie";
import ImageView from "../components/ImageView";
import "./Home.css";

import { Link } from "react-router-dom";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner'

interface State {
  isLoading: boolean;
  page: number;
  movies: Array<any>;
}


class Home extends React.Component<{}, State> {

  state: State = {
    isLoading: true,
    page: 0,
    movies: []
  };

  async componentDidMount() {
    const { page } = this.state;
    const { data: { content } } = await axios.get("http://scrap.api.anyjava.net:8080/articles?size=20&page=" + page)
    this.setState({ movies: content, isLoading: false })

    document.addEventListener('scroll', this.trackScrolling);
  }

  componentDidUpdate() {
    console.log('updated...');
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.trackScrolling);
  }

  trackScrolling = () => {
    const wrappedElement: (HTMLElement | null) = document.getElementById('container0');
    if (this.isBottom(wrappedElement)) {
      console.log('header bottom reached');
      this.appendPage();
      document.removeEventListener('scroll', this.trackScrolling);
    }
  }

  async appendPage() {
    this.state.page += 1;
    this.setState({isLoading: true})
    const { data: { content } } = await axios.get(process.env.REACT_APP_HOST_API + "/articles?size=20&page=" + this.state.page)
    this.setState({ movies: this.state.movies.concat(content), isLoading: false})
    document.addEventListener('scroll', this.trackScrolling);
  }

  isBottom(el: (HTMLElement | null)) {
    if (el === null || el === undefined) return false;
    console.log('isBottome ' + Math.abs(el.getBoundingClientRect().bottom) + " / " + window.innerHeight);
    return el.getBoundingClientRect().bottom - window.innerHeight < 1;
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <main>

        <div>
          <Row>

            {movies.map((tile) => (

              <div style={{ margin: '10px' }}>
                <Col sm={6} md={4}>
                  <Card style={{ width: '18rem' }}>
                    <Card.Body>
                      <Card.Title>{tile.subject}</Card.Title>
                      <a href={"https://clien.net" + tile.url}>
                        <Button variant="primary" size="sm">원본글</Button>
                      </a>
                    </Card.Body>
                    <ImageView images={tile.images}/>
                  </Card>
                </Col>
              </div>
            ))}
          </Row>
          {isLoading &&
            <div className="loader">
              <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
              </Spinner>
            </div>
          }
        </div>

      </main>
    );
  }
}

export default Home;

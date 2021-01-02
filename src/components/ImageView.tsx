import React from 'react';

import { Link } from "react-router-dom";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Image } from "react-bootstrap";

interface ImagesState {
  images: Array<any>,
  currentImageIndex: number
}

interface ImagesProps {
  images: Array<any>
}

class ImageView extends React.Component<ImagesProps, ImagesState> {
  state: ImagesState = {
    images: [],
    currentImageIndex: 0
  }

  constructor(props: ImagesProps) {
    super(props);
    this.state.images = props.images;
  }

  hasLeftButton = (): Boolean => {
    if (this.state.currentImageIndex < 1) return false;
    return true;
  }

  hasRightButton = (): Boolean => {
    return this.state.currentImageIndex < this.state.images.length - 1
  }

  clickPrev = () => {
    console.log(">>" + this.state.currentImageIndex)
    this.setState(current => ({currentImageIndex: current.currentImageIndex - 1}));
  }

  clickNext = () => {
    console.log(">>" + this.state.currentImageIndex)
    this.setState(current => ({currentImageIndex: current.currentImageIndex + 1}));
  }

  render() {
    return (
      <div>
        <Card.Img as={Image} fluid={true} className="img-fluid" variant="top" src={`https://img.anyjava.net/upload/${this.props.images[this.state.currentImageIndex].url}`} />
        <Row md={2}>
          <Col style={{ textAlign: "right" }}>
            {this.hasLeftButton() &&
              <Button size="sm" variant="light" onClick={this.clickPrev}>이전
                      <span className="glyphicon glyphicon-menu-left"></span>
              </Button>
            }
          </Col>
          <Col style={{ textAlign: "left" }}>
            {this.hasRightButton() &&
            <Button size="sm" variant="light" onClick={this.clickNext}>다음
                      <span className="glyphicon glyphicon-menu-right"></span>
            </Button>
            }
          </Col>
        </Row>
      </div>
    )
  }

}

export default ImageView;
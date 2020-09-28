import React from 'react'
import {Carousel} from 'react-bootstrap'
import "../App.css"

export default function Homepage() {
    return (
        <div className="card">
            <Carousel className="caroussel-item">
  <Carousel.Item>
    <img
      className="d-block w-100 h-50"
      src="https://picsum.photos/id/12/200/200"
      alt="First slide"
    />
    <Carousel.Caption>
      <h5>First slide label</h5>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block h-50 w-100"
      src="https://picsum.photos/id/10/200/200"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h5>Second slide label</h5>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block h-50 w-100"
      src="https://picsum.photos/id/11/200/200"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h5>Third slide label</h5>
      
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    )
}

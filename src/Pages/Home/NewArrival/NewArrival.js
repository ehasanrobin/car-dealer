import React from "react";
import { Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import useCars from "../../../Hooks/useCars";
import "./NewArrival.css";
const NewArrival = () => {
  const [cars] = useCars();

  return (
    <Container>
      <Row>
        <div className="arrival-title text-center">
          <sub>Check out our new cars</sub>
          <h3 className="double-bars">New Arrival</h3>
        </div>
      </Row>
      <Row>
        <Swiper
          slidesPerView={4}
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: 50,
            disableOnInteraction: false,
          }}
          loopFillGroupWithBlank={false}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            "@0.75": {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            "@1.00": {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            "@1.50": {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          pagination={{
            clickable: false,
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          {cars.map((car) => (
            <SwiperSlide>
              <Card as={Link} to={`/inventory/${car._id}`} className="cars-box">
                <Card.Img variant="top" src={car.img} />
                <Card.Body>
                  <Card.Title className="double-bars pb-2 position-relative">
                    {car.name}
                  </Card.Title>
                  <Card.Text className="pt-3">
                    <del>${car.regularPrice}</del>
                    &nbsp; ${car.discountPrice}
                  </Card.Text>
                </Card.Body>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </Row>
    </Container>
  );
};

export default NewArrival;

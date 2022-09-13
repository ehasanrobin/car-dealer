import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./Banner.css";
const Banner = () => {
  return (
    <section className="banner-section">
      <Container>
        <Row xl={2} className="align-items-center justify-content-center">
          <Col xl={4}>
            <div className="banner-content">
              <h1> 2016 mini cooper </h1>{" "}
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.Eligendi dolores blanditiis reiciendis sapiente
                perspiciatis inventore culpa doloremque amet laboriosam.Natus.{" "}
              </p>{" "}
              <button> search </button>{" "}
            </div>{" "}
          </Col>{" "}
          <Col xl={8}>
            {" "}
            {/* swipper slider  */}{" "}
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={false}
              modules={[EffectCoverflow, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src="https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2Fyc3xlbnwwfHwwfHw%3D&w=1000&q=80" />
              </SwiperSlide>{" "}
              <SwiperSlide>
                <img src="https://images.unsplash.com/photo-1628519592419-bf288f08cef5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHNwb3J0cyUyMGNhcnxlbnwwfHwwfHw%3D&w=1000&q=80" />
              </SwiperSlide>{" "}
              <SwiperSlide>
                <img src="https://w0.peakpx.com/wallpaper/171/129/HD-wallpaper-black-sports-car-thumbnail.jpg" />
              </SwiperSlide>{" "}
              <SwiperSlide>
                <img src="https://i.pinimg.com/originals/54/d1/a7/54d1a783ed918edc1f5d1df2738562cf.jpg" />
              </SwiperSlide>{" "}
              <SwiperSlide>
                <img src="https://cellularnews.com/wp-content/uploads/2020/03/Lamborghini-black-matte-325x485.jpg" />
              </SwiperSlide>{" "}
              <SwiperSlide>
                <img src="https://i.pinimg.com/736x/65/c7/80/65c780996778d36be38449aca5c0afb4.jpg" />
              </SwiperSlide>{" "}
              <SwiperSlide>
                <img src="https://images.unsplash.com/photo-1544482570-c8a1e3e69273?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFtYm9yZ2hpbmklMjBpbnRlcmlvcnxlbnwwfHwwfHw%3D&w=1000&q=80" />
              </SwiperSlide>{" "}
              <SwiperSlide>
                <img src="https://i.pinimg.com/originals/b3/1a/0e/b31a0e435ce786029f22a8dbc93975ad.jpg" />
              </SwiperSlide>{" "}
              <SwiperSlide>
                <img src="https://i.pinimg.com/originals/b3/1a/0e/b31a0e435ce786029f22a8dbc93975ad.jpg" />
              </SwiperSlide>{" "}
            </Swiper>{" "}
            {/* swipper slider  */}{" "}
          </Col>{" "}
        </Row>{" "}
      </Container>{" "}
    </section>
  );
};

export default Banner;

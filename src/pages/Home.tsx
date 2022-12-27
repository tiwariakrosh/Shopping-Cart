import HeroImg from "/assets/bg.webp"
import "./home.css"
import { Row, Col } from 'react-bootstrap'
import item from "../data/items.json"
import StoreItem from "../components/StoreItem"

const Home = () => {
  return (
    <>
      <div className="hero_container d-flex py-5">
        <div className="hero_text">
          <h1 className='mb-4'>Welcome to Easy Shopping!!</h1>
          <p>Best eshop in this town</p>
          <button className='btn btn-primary mt-2'>View More</button>
        </div>
        <div className="hero_image">
          <img src={HeroImg} alt="Hero Image" />
        </div>
      </div>
      <h2 className="mt-4 mb-3 text-center">Trending Products</h2>
      <Row md={2} xs={1} lg={3} className="g-4 mb-4">
        {item.map((data) => (
          <Col key={data.id}>
            <StoreItem {...data} />
          </Col>
        ))}
      </Row>
    </>

  )
}

export default Home
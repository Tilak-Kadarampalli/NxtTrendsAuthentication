// Write your JS code here
import Header from '../Header'
import './index.css'

const Home = () => (
  <div>
    <Header />
    <div className="home-cont">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
        alt="clothes that get you noticed"
      />
      <div>
        <h1>Clothes That Get YOU Noticed</h1>
        <p>
          Fashion is part of the daily air and it doesnot quiet help that it
          exchanges all the time.
        </p>
        <button type="button">Shop Now</button>
      </div>
    </div>
  </div>
)

export default Home

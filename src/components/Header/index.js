import './index.css'

const Header = () => (
  <div className="head-div">
    <img
      src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
      alt="website logo"
      className="web-logo"
    />

    <div className="icons-cont">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
        alt="nav logout"
        className="icons"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
        alt="nav home"
        className="icons"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
        alt="nav products"
        className="icons"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
        alt="nav cart"
        className="icons"
      />
      <ul>
        <li>Home</li>
        <li>Products</li>
        <li>Cart</li>
      </ul>

      <button type="button">Logout</button>
    </div>
  </div>
)

export default Header

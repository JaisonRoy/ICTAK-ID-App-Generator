import './Home.css'

import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <body>
        <div className="home">

          <div className="image">
            <img className="homeImg" src="https://i.pinimg.com/originals/05/06/b8/0506b84bb9125f8cbf61217243725e35.png" alt="" />
          </div>
          <div class="details">
            <h1 className="intro">Create your ID card instantly</h1>
            <p className="desc">Get your id card  and download easily</p>
            <div class="homeButtons">
              <NavLink className="homeBtn" to="/signup">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Get Started
              </NavLink>
            </div>
          </div>
        </div>

      </body>
    </>
  )
}
export default Home

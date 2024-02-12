import React from "react";

const Home = () => {
  return (
    <div className="template clear main-section">
      <div className="main clear">
        <div className="main-left clear">
          <h2>Adipicing The</h2>
          <h3>Eget Diam Amet</h3>
          <p>
            While surfing the web, travelers are often bombarded with
            information about any given destination a quick this
            <br />
            Google.
          </p>

          <div className="contact">
            <a href="/">Contact us</a>
          </div>
        </div>

        <div className="from-right">
          <div className="content">
            <h2>Online Booking From</h2>
            <p>To reserve seats please Complete and submit the booking from.</p>
          </div>
          <form>
            <label className="all-class">
              Full Name
              <input type="text" name="First name" placeholder="First Name" />
              <input type="name" name="last name" placeholder="Last Name" />
            </label>

            <label className="all-class">
              Email
              <input type="email" name="email" placeholder="Email" />
            </label>

            <label className="all-class">
              Area Code
              <input type="code" name="code" placeholder="Area Code" />
              <input type="any" name="number" placeholder="Phone Number" />
            </label>
            <label className="all-class">
              Date/Time
              <input type="date" name="date" />
              <input type="time" name="time" />
            </label>

            <div className="sel">
              <label className="all-class">
                Journey Type
                <select>
                  <option>Please Select</option>
                  <option>India</option>
                  <option>Nepal</option>
                </select>
              </label>
            </div>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>

      {/* footer-section start  */}
      {/* footer left start*/}
      <div className="footer-section template clear">
        <div className="footer">
          {/* footer left start */}
          <div className="footer-left">
            <h2>Lorem ipsum dolor sit amet consectetur</h2>
            <h3>Sagittis Ad portal</h3>

            <div className="cons clear">
              <ul>
                <li class="active">
                  <a href="/">consectetur</a>
                </li>
                <li>
                  <a href="/"> Adipiscing </a>
                </li>
              </ul>
            </div>

            <p>
              While surfing the web, travelers are often bombarded with
              information about any given destination. A quick Google search of
              “things to do in Sydney, Australia” will yield thousands of
              results, and it can quickly become overwhelmingWhile surfing the
              web, travelers are often bombarded with information about any
              given destination.travelers are often bombarded with information
              about any given destination.
            </p>

            <div className="more">
              <ul>
                <li>
                  <a href="/">Read more</a>
                </li>
              </ul>
            </div>
          </div>
          {/* footer left end */}

          {/* footer right start */}
          <div className="footer-right clear">
            <div class="images clear"></div>
          </div>
          {/* footer right end */}
          {/* footer-section start  */}
        </div>
      </div>
    </div>
  );
};

export default Home;

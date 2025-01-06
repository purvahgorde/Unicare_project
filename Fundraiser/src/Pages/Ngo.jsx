import React from 'react';
import './Ngo.css'; // Import your CSS styles here
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';

const Ngo= () => {
  return (
    <>
    <div>
      {/* <header>
        <nav>
          <div className="logo">
            <a href="#">Unicare</a>
          </div>
          <ul className="nav-links">
            <li><a href="About.html">About Us</a></li>
            <li><a href="#image">Information</a></li>
            <li><a href="#top">Our Top NGO's</a></li>
            <li><a href="#sectors">Our Sectors</a></li>
          </ul>
        </nav>
      </header> */}

      <div className="jumbotron">
        <div id="image">
          <img src="Images/wallpaper.png" alt="donation" />
          <div className="text" style={{ color: 'aliceblue', fontSize: '40px' }}>
            <h1>Big changes are caused by small help</h1>
          </div>

          <div className="searchbar">
            <input className="form-control" type="search" placeholder="Search For NGO's" aria-label="Search" />
            <button className="btn" type="submit">Search</button>
          </div>
        </div>
      </div>

      <div className="container">
  <h1>UNICARE</h1>
  <p className="tagline">India's Most Trusted Crowdfunding Platform</p>
  <div className="stats">
      <div className="stat-item">
          <h2>5M+</h2>
          <p>Donations</p>
      </div>
      <div className="stat-item">
          <h2>25M+</h2>
          <p>Lives Impacted</p>
      </div>
      <div className="stat-item">
          <h2>4000+</h2>
          <p>Verified Non-Profits</p>
      </div>
      <div className="stat-item">
          <h2>500+</h2>
          <p>Corporate Partners</p>
      </div>
  </div>
</div>

        <h2 id="top"><b>Our Top NGO's</b></h2>
        <a href="https://serudsindia.org/ngo-names-list/"><button className="btn">View All</button></a>

        <div className="row">
          {[
            { name: 'Bal Raksha Bharat', link: 'https://balrakshabharat.org/', img: 'Images/balraksha.png' },
            { name: 'Akshaya Patra', link: 'https://www.akshayapatra.org/', img: 'Images/akshya.png' },
            { name: 'Pratham', link: 'https://www.pratham.org/', img: 'Images/pratham.png' },
            { name: 'HelpAge India', link: 'https://www.helpageindia.org/', img: 'Images/helpage.png' },
            { name: 'Goonj', link: 'https://goonj.org/', img: 'Images/goonj.png' },
            { name: 'Give India Foundation', link: 'https://www.giveindia.org/', img: 'Images/giveindia.png' },
            { name: 'CRY', link: 'https://www.cry.org/', img: 'Images/cry.png' },
            { name: 'Smile Foundation', link: 'https://www.smilefoundationindia.org/', img: 'Images/smile.png' },
          ].map((ngo, index) => (
            <div className="col-md-3" key={index}>
              <div className="card">
                <div className="card-header">
                  <center><img src={ngo.img} alt={ngo.name} height="100%" width="100%" /></center>
                </div>
                <div className="card-body">
                  <center><a href={ngo.link}><b>{ngo.name}</b></a></center>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="location" style={{ backgroundColor: 'white' }}>
        <div className="row">
          <div className="col-md-6">
            <img src="Images/map.png" alt="map" />
          </div>
          <div className="col-md-6">
            <h4 style={{ marginTop: '40px' }}>Discover NGO's in your <b><i>state</i></b></h4>
            <div className="searchbar">
              <select id="state-dropdown">
                {[
                  "Andaman and Nicobar Island", "Andra Pradesh", "Arunachal Pradesh", "Assam", "Bihar",
                  "Chandigarh", "Chhattisgarh", "Dadra and Nagar Haveli", "Daman and Diu", "Delhi", "Goa",
                  "Gujrat", "Haryana", "Himachal Pradesh", "Jharkhand", "Jammu & Kashmir", "Karnataka",
                  "Kerala", "Ladakh", "Lakshadweep", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya",
                  "Mizoram", "Nagaland", "Odisha", "Punjab", "Puducherry", "Rajasthan", "Sikkim", "Tamil Nadu",
                  "Telangana", "Tripura", "Uttarakhand", "Uttar Pradesh", "West Bengal"
                ].map((state, index) => (
                  <option value={state} key={index}>{state}</option>
                ))}
              </select>
            </div>
            <div className="certified">
              <button className="btn">
                <a href="https://serudsindia.org/ngo-names-list/">Certified NGO's</a>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="top">
        <h2 id="sectors"><b>Top Sectors</b></h2>
        <hr />
        {[
          { sector: 'Education', img: 'Images/education.jpg' },
          { sector: 'Health', img: 'Images/health.jpg' },
          { sector: 'Environment', img: 'Images/environment.png' },
          { sector: 'Animals', img: 'Images/animals.jpg' },
          { sector: 'Senior Citizens', img: 'Images/sinior.png' },
          { sector: 'Food', img: 'Images/food.png' },
        ].map((item, index) => (
          <div className="row" key={index}>
            <div className="col-md-6" style={{ backgroundColor: '#CFD6C4' }}>
              <img src={item.img} alt={item.sector} />
              <h2>{item.sector}</h2>
            </div>
          </div>
        ))}
      </div>

      <footer>
        <div className="footer-container">
          <h5><center>Social Media Profiles</center></h5>
          <ul>
            <li><i className="bi bi-facebook"></i>&nbsp;Facebook</li>
            <li><i className="bi bi-instagram"></i>&nbsp;Instagram</li>
            <li><i className="bi bi-whatsapp"></i>&nbsp;WhatsApp</li>
          </ul>
          <p><center>&copy; 2024 Unicare Foundation | All Rights Reserved</center></p>
          <ul>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Terms & Conditions</a></li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Ngo;

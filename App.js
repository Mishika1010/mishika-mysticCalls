import React, { useState } from 'react';
import './StarRating.css';
import './App.css'
import StarRating from './StarRating'; 
import CommentSection from './CommentSection';
import DailyHoroscope from './DailyHoroscope';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

// import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
// import PaymentComponent from './PaymentComponent';
// import SuccessPage from './SuccessPage';
// import CancelPage from './CancelPage';

const App = () => {
  const [selectedRating, setSelectedRating] = useState(0);

  const handleRatingChange = (value) => {
    setSelectedRating(value);
  };
  

  return (
     //<Router>
          <div>
      <div className="firstmc">
        <nav class="nav_bar">
          <div class="Logosection">
            <img src="/favicon.png" class="logo" /> 
            <img src="/mystichead.png" class="logo_head" />
          </div>
        
          <ul class="Hover_underline_animation">
            <li><a href="#Home__content">Home</a></li>
            <li><a href="http://127.0.0.1:5500/index.html">Zodiac Finder</a></li>
            <li><a href="http://127.0.0.1:5500/indexdh.html">Daily Horoscope</a></li>
            <li><a href="#reach_comment">Comment Section</a></li>
            <li><a href="http://127.0.0.1:5500/mystic/src/pay.html">Payment</a></li>
            <li><a href="http://127.0.0.1:5500/team_section.html">About Us</a></li>
            {/* <li><Link to="/payment">Payment</Link></li> */}
  

          </ul>
          <div>
            <a href="#"><button class="button_login"> Log In </button> </a>
          </div>
        </nav>
        
        
        <div class="Home__content">
          <h3 class="Home_subtitle" id="anim_sub">
            ANSWER THE MYSTERIOUS CALLS OF YOUR STARS WITH
          </h3>
          <h1 class="Home_title" id="anim_title">
            <span >
              MYSTIC<br/>
              CALLS
            </span>
          </h1>
          <p class="Home_description" id="anim_p">
            Welcome to Mystic Calls. Dive into the cosmos and discover 
            the secrets hidden within the celestial bodies that shape our destinies. 
            Whether you're a seasoned astrologer or a curious seeker, 
            our intuitive zodiac finder awaits to unveil the mysteries 
            of your unique cosmic blueprint.
          </p>
          <div>
            <a href="#Get_started"><button class="Home_button" id="anim"> Get Started </button></a>
          </div>
        </div>
            
        <img src="/goldenclouds.png" class="Home_cloud1" id="anim_l" />
        <img src="/goldenclouds.png" class="Home_cloud3" id="anim" />
        <img src="/goldenclouds.png" class="Home_cloud4" id="anim" />
        <img src="/goldenclouds.png" class="Home_cloud5"id="anim_r" />
        <img src="/goldenclouds.png" class="Home_cloud2" id="anim_r" />
        <img src="/chakra5 (1).png" class="Home_chakra " id="anim_rotate" />
      </div>

      <section class="zodiac_content" id="Get_started">
        <img src="/chakra5 (1).png" class="bg_chakra" id="anim_rotate" />
        <div>
          <h1>Why is Zodiac Signs important?</h1> <br />
          <p>The fundamental principle behind astrology is that the position of the planets and stars at the time of our birth can influence
               our lives. 
              Zodiac signs are one way to gain this understanding. The zodiac can offer insights into our personalities, 
              our relationships, and our destiny. Sun signs are important because they offer guidance and understanding about ourselves 
              and others.</p>
              <br />
              <hr class="gold-hr" />
              <br />
          <h1>Unlocking the Mysteries of Zodiac Signs, Elements, and Qualities</h1>
          <br /><br />
          <p>In the enchanting world of astrology, each zodiac sign is imbued with its own unique blend of elemental energy
               and inherent qualities, shaping the tapestry of our personalities and influencing the trajectory of our lives. 
              Explore the profound connections between zodiac signs, elements, and qualities, and discover the hidden truths that lie within.
              The elements – fire, earth, air, and water – serve as the foundational building blocks of the zodiac, infusing each sign with its 
              own elemental essence and energy. Fire signs are passionate and dynamic, earth signs are grounded and practical, air signs are 
              intellectual and communicative, and water signs are emotional and intuitive. </p>
              <br></br><br></br>
        </div>
        <div class="Cloud_container">
          <img src="/goldenclouds.png" class="Home_cloud1" id="anim_l" />
          <img src="/goldenclouds.png" class="Home_cloud2" id="anim_r" />
        </div>
        <br />
              <hr class="gold-hr" />
              <br /><br />
        
      </section>
      
      <section class="comment_content" id="reach_comment">
        <div>
          <br></br>
          <h1>Please Rate Your Experience:</h1>
        </div>
        
        <CommentSection />
        <div class="Cloud2_container">
          <img src="/goldenclouds.png" class="Home_cloud6" id="anim_l" />
          <img src="/goldenclouds.png" class="Home_cloud7" id="anim_r" />
        </div>
  
      </section>

    </div>
  //   <Routes>
  //       <Route path="/payment" element={<PaymentComponent />} />
  //      <Route path="/success" element={<SuccessPage />} />
  //      <Route path="/cancel" element={<CancelPage />} />
  //      </Routes>
  // </Router>

  );
};

export default App;

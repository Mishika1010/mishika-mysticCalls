const Comment = () => {
    return (
      <div>
        <nav className="nav_bar">
          <div className="Logosection">
            <img src="favicon.png" className="logo" alt="Logo" /> 
            <img src="mystichead.png" className="logo_head" alt="Mystic Head" />
          </div>
          <ul className="Hover_underline_animation">
            <li><a href="http://127.0.0.1:5500/indexmc.html#">Home</a></li>
            <li><a href="#DOB_page">Zodiac Finder</a></li>
            <li><a href="#">Zodiac signs</a></li>
            <li><a href="#">About Us</a></li>
          </ul>
          <div>
            <a href="#"><button className="button_login"> Log In </button> </a>
          </div>
        </nav>
        <br /><br />
        <div className="wrapper">
          <div className="card">
            <br /><br />
            <form onSubmit={findZodiac}>
              <label htmlFor="name">Fill Your Name:</label>
              <br />
              <input type="text" id="name" required />
              <br /><br /><br />
              <label htmlFor="date">Your Date Of Birth</label><br />
              <input type="date" id="date" required />
              <br /><br /><br /><br />
              <input type="submit" value="Find your Zodiac" />
            </form>
          </div>
        </div>
        <img src="goldenclouds.png" className="Home_cloud1" id="anim_l" alt="Cloud" />
        <img src="goldenclouds.png" className="Home_cloud2" id="anim_r" alt="Cloud" />
        <div>
          <h1>Welcome to Mystic Calls</h1>
          <p>Explore the mysteries of the cosmos and share your thoughts below:</p>
          <CommentSection />
        </div>
      </div>
    );
  };
  
  export default Comment;
  
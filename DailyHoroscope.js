// DailyHoroscope.js
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const DailyHoroscope = () => {
//   const [horoscope, setHoroscope] = useState('');
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchHoroscope = async () => {
//       try {
//         const response = await axios.get(
//           `https://aztro.sameerkumar.website/?sign=aries&day=today`
//         );
//         setHoroscope(response.data);
//         setLoading(false);
//       } catch (error) {
//         setError(error.message);
//         setLoading(false);
//       }
//     };

//     fetchHoroscope();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div>
//       <h2>Daily Horoscope</h2>
//       <p>{horoscope}</p>
//     </div>
//   );
// };

// export default DailyHoroscope;
// import React, { useState } from 'react';
// import axios from 'axios';
// import './DailyHoroscope.css';

// const DailyHoroscope = () => {
//   const [zodiacSign, setZodiacSign] = useState('aries'); // Default zodiac sign
//   const [userName, setUserName] = useState('');
//   const [horoscope, setHoroscope] = useState('');

//   const handleZodiacChange = (e) => {
//     setZodiacSign(e.target.value);
//   };

//   const handleNameChange = (e) => {
//     setUserName(e.target.value);
//   };

//   const fetchHoroscope = async () => {
//     try {
//       const response = await axios.get('https://daily-horoscope-api.p.rapidapi.com/api/Daily-Horoscope-English/', {
//         params: {
//           zodiacSign: zodiacSign,
//           timePeriod: 'today'
//         },
//         headers: {
//           'X-RapidAPI-Key': 'ec5f86a090mshdc17443f48ce905p1ab92ejsn328f97595ecc',
//           'X-RapidAPI-Host': 'daily-horoscope-api.p.rapidapi.com'
//         }
//       });
//       setHoroscope(response.data.horoscope);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     fetchHoroscope();
//   };

//   return (
//     <div>
//       <h1>Daily Horoscope</h1>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Select Your Zodiac Sign:
//           <select value={zodiacSign} onChange={handleZodiacChange}>
//             <option value="aries">Aries</option>
//             {/* Add options for other zodiac signs */}
//           </select>
//         </label>
//         <br />
//         <label>
//           Enter Your Name:
//           <input type="text" value={userName} onChange={handleNameChange} />
//         </label>
//         <br />
//         <button type="submit">Get Horoscope</button>
//       </form>
//       {horoscope && (
//         <div>
//           <h2>{userName}'s Horoscope for Today ({zodiacSign.toUpperCase()})</h2>
//           <p>{horoscope}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default DailyHoroscope;
import React, { useState } from 'react';
import axios from 'axios';
import './DailyHoroscope.css';

const DailyHoroscope = () => {
  const [name, setName] = useState('');
  const [selectedDay, setSelectedDay] = useState('today');
  const [selectedSign, setSelectedSign] = useState('aries');
  const [horoscope, setHoroscope] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDayChange = (e) => {
    setSelectedDay(e.target.value);
  };

  const handleSignChange = (e) => {
    setSelectedSign(e.target.value);
  };

  const fetchHoroscope = async () => {
    setLoading(true);
    try {
      const options = {
        method: 'get',
        url: 'https://daily-horoscope3.p.rapidapi.com/api/1.0/get_daily_horoscope.php',
        params: {
          zodiacSign: selectedSign,
          timePeriod: selectedDay
        },
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'X-RapidAPI-Key': 'ec5f86a090mshdc17443f48ce905p1ab92ejsn328f97595ecc',
        'X-RapidAPI-Host': 'daily-horoscope3.p.rapidapi.com'
        }
      };
      const response = await axios.request(options);
      setHoroscope(response.data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchHoroscope();
  };

  return (
    <div className="container">
      <h1>Daily Horoscope</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Your Name:</label>
          <input type="text" id="name" value={name} onChange={handleNameChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="day">Select Day:</label>
          <select id="day" value={selectedDay} onChange={handleDayChange}>
            <option value="today">Today</option>
            <option value="yesterday">Yesterday</option>
            <option value="tomorrow">Tomorrow</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="sign">Select Your Zodiac Sign:</label>
          <select id="sign" value={selectedSign} onChange={handleSignChange}>
            <option value="aries">Aries</option>
            <option value="taurus">Taurus</option>
            <option value="gemini">Gemini</option>
            <option value="cancer">Cancer</option>
            <option value="leo">Leo</option>
            <option value="virgo">Virgo</option>
            <option value="libra">Libra</option>
            <option value="scorpio">Scorpio</option>
            <option value="sagittarius">Sagittarius</option>
            <option value="capricorn">Capricorn</option>
            <option value="aquarius">Aquarius</option>
            <option value="pisces">Pisces</option>
          </select>
        </div>
        <button type="submit" className="btn" disabled={loading}>
          {loading ? 'Loading...' : 'Get Horoscope'}
        </button>
      </form>
      {horoscope && (
        <div className="horoscope">
          <h2>{selectedDay.charAt(0).toUpperCase() + selectedDay.slice(1)}'s Horoscope</h2>
          <p>{horoscope}</p>
        </div>
      )}
      {error && <p className="error">Error: {error}</p>}
    </div>
  );
};

export default DailyHoroscope;

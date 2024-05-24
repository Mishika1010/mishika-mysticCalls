
import React, { useState, useEffect } from 'react';
import './CommentSection.css';
import StarRating from './StarRating';

const CommentSection = () => {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);
  const [comments, setComments] = useState([]);

  // Load comments from localStorage on component mount
  useEffect(() => {
    const storedComments = JSON.parse(localStorage.getItem('comments')) || [];
    setComments(storedComments);
  }, []);

  // Save comments to localStorage whenever comments state changes
  useEffect(() => {
    localStorage.setItem('comments', JSON.stringify(comments));
  }, [comments]);

  const handleStarChange = (value) => {
    setRating(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newComment = {
      name: name,
      comment: comment,
      rating: rating,
    };
    setComments([...comments, newComment]);
    setName('');
    setComment('');
    setRating(0);
  };

  return (
    <div className="wrapper">
        <div className='card'>
            <h2>Leave a Comment</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required/>
                </div>
        
        <div>
          <label htmlFor="comment">Comment:</label>
            <textarea
                id="comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                required/>
        </div>
        <div>
          <label htmlFor="rating">Rating:</label>
          <StarRating onChange={handleStarChange} />
        </div>
        <button class="submit_button" type="submit">Submit</button>
        <div className="comments-list">
            <br></br><br></br>
        
        <h1>Comments</h1>
        {comments.map((c, index) => (
          <div key={index} className="comment">
            <h3>{c.name}</h3>
            <p>Rating: {c.rating}</p>
            <p>{c.comment}</p>
          </div>
        ))}
    </div>
        
    </form></div>
    <br></br>
    
</div>
  );
};

export default CommentSection;

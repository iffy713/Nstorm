// import React, { useState, useEffect } from 'react';

// export default function RatingStars() {

// // Initialize the rating state variable with a value of 0
//     const [rating, setRating] = useState(0);
//     const [isHovering, setIsHovering] = useState(false);
//     console.log(rating)

// // Event handler for clicking on a star
//     const handleStarClick = (index) => {
//     setRating(index + 1);
//   }


// // Event handler for mouse enter and leave events
//   const handleMouseEnter = () => {
//     setIsHovering(true);
//   }
//   const handleMouseLeave = () => {
//     setIsHovering(false);
//   }

//     return(
//         <div
//             className="rating-stars"
//             onMouseEnter={handleMouseEnter}
//             onMouseLeave={handleMouseLeave}
//         >
//             {[1, 2, 3, 4, 5].map((star, index) => (
//                 <div
//                     key={star}
//                     className={`star${rating > index ? ' filled' : ''}`}
//                     onClick={() => handleStarClick(index)}
//                     style={{ color: isHovering ? 'black' : 'yellow' }}>
//                 &#9733;
//                 </div>
//             ))}
//         </div>
//     )
// }

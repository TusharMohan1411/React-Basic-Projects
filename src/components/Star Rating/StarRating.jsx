import { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import './StarRating.css';

export default function StarRating({ noOfStars = 10 }) {

    const [rating, setRating] = useState(0);
    const [hovering, setHovering] = useState(0);

    function handleClick(getCurrentIndex) {
        setRating(getCurrentIndex);
    }

    function handleMouseEnter(getCurrentIndex) {
        setHovering(getCurrentIndex);
    }

    function handleMouseLeave() {
        setHovering(rating);
    }

    return (
        <div id="star-rating">
            <h1>Star Ratings</h1>
            {
                [...Array(noOfStars)].map((_, index) => {
                    index += 1;
                    return <FaStar
                        key={index}
                        className={index <= (hovering || rating) ? 'active' : 'inActive'}
                        onClick={() => handleClick(index)}
                        onMouseMove={() => handleMouseEnter(index)}
                        onMouseLeave={() => handleMouseLeave(index)}
                        size={50}
                    />
                })
            }
        </div>
    )
}
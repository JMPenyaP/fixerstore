import React from 'react'
import {AiOutlineStar,AiFillStar} from "react-icons/ai"

function Stars(props) {
 
    return (
        <div  >
            {
                [... new Array(5)].map((star, index)=>{
                    return index < props.ratingValue ? < AiFillStar/> : <AiOutlineStar/>

                })
            }
            
        
        </div>
    );
}

export default Stars
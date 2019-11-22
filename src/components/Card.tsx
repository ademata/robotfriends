import React from 'react';
import './Card.css';

// var divStyle = {
// 	backgroundColor:'LightGreen', 
// 	display:'inline-block',
// 	borderRadius: 3,
// 	padding: 3,
// 	margin: 2.

// }

const Card = ({name, email, id}) => {
	return(
		<div className='bg-light-green tc dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img alt='robots' src={`https://robohash.org/${id}?'200x200'`}/>
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
}

export default Card;
import React from 'react';

interface ISearchBoxProps {
  searchChange(event: React.SyntheticEvent<HTMLInputElement>): void;
}

const SearchBox = ({searchChange}: ISearchBoxProps) => {
	return (
		<input 
			className='pa3 ba bg-green bg-lightest-blue'
			type='search' 
			placeholder='search robots'
			onChange={searchChange} 
		/>
	);
}

export default SearchBox;
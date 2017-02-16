import React, { PropTypes } from 'react';

export const SearchResult = ({ items, loading }) => (
  <div>
    {loading ?
      <p>Loading...</p>
      :
      <ul>
        {items.map(item => {
          const { volumeInfo } = item
          return (
            <li key={item.id}>
              { /* @TODO: Create a new component for images.
                <Picture
                  src={volumeInfo.imageLinks.thumbnail}
                  alt={volumeInfo.title}
                />
              */ }
              {volumeInfo.title}
            </li>
          )
        })}
      </ul>
    }
  </div>
);

SearchResult.defaultProps = {
  items: [],
  loading: false,
}

SearchResult.propTypes = {
  items: PropTypes.array,
  loading: PropTypes.bool,
};

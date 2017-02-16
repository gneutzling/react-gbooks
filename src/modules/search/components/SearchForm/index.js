import React, { PropTypes } from 'react'

export const SearchForm = (props) => (
  <form onSubmit={props.onSubmit}>
    <input
      type="text"
      name="search"
      placeholder="Search book by name"
      onChange={props.onChange}
    />
  </form>
)

SearchForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
}

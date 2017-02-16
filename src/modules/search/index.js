import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { SearchForm } from './components/SearchForm'
import { SearchResult } from './components/SearchResult'
import { search } from './actions'


export const Search = (props) => {
  const handleChange = (event) => {
    props.search(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <div>
      <SearchForm
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <SearchResult
        items={props.items}
        loading={props.pending}
      />
    </div>
  )
}


const mapStateToProps = (state) => {
  const { search } = state
  return {
    items: search.items,
    pending: search.pending,
  }
}

const mapDispatchToProps = (dispatch) => (bindActionCreators({
  search,
}, dispatch))

export default connect(mapStateToProps, mapDispatchToProps)(Search)

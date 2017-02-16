import React from 'react'
import { shallow } from 'enzyme'
import ConnectedSearch, { Search } from './index'
import { SearchForm } from './components/SearchForm'
import { SearchResult } from './components/SearchResult'

describe('Search module component', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Search />)
  })

  it('renders without crashing.', () => {
    expect(wrapper.length).toEqual(1)
  })

  it('renders SearchForm and SearchResult as child components.', () => {
    const form = wrapper.find(SearchForm)
    const result = wrapper.find(SearchResult)

    expect(form.length).toEqual(1)
    expect(result.length).toEqual(1)
  })
})

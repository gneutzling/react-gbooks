import React from 'react'
import { shallow } from 'enzyme'
import { SearchResult } from './index'

describe('SearchResult Component', () => {
  let props

  beforeEach(() => {
    props = {
      loading: false,
      items: [{
        id: 'abc123',
        volumeInfo: { title: 'Just a testing item' }
      }]
    }
  })

  it('renders without crashing.', () => {
    const wrapper = shallow(<SearchResult />)
    expect(wrapper.length).toBe(1)
  })

  it('not renders a list when loading prop is true.', () => {
    const wrapper = shallow(<SearchResult loading={true} />)
    const list = wrapper.find('ul')
    expect(list.length).toBe(0)
  })

  it('renders a list when loading prop is false.', () => {
    const wrapper = shallow(<SearchResult loading={false} />)
    const list = wrapper.find('ul')
    expect(list.length).toBe(1)
  })

  it('renders a list item according items prop.', () => {
    const wrapper = shallow(<SearchResult {...props} />)
    const listItem = wrapper.find('li')
    expect(listItem.at(0).key()).toEqual('abc123')
    expect(listItem.length).toBe(1)
    expect(listItem.text()).toContain('Just a testing item')
  })
})

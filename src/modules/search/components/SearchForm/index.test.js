import React from 'react'
import { shallow } from 'enzyme'
import { SearchForm } from './index'

describe('SearchForm Component', () => {
  it('renders without crashing.', () => {
    const wrapper = shallow(<SearchForm />)
    expect(wrapper.length).toBe(1)
  })

  it('onChange is called when input is changed.', () => {
    const onChangeMock = jest.fn()
    const onSubmitMock = jest.fn()
    const wrapper = shallow(
      <SearchForm
        onChange={onChangeMock}
        onSubmit={onSubmitMock}
      />
    )

    const input = wrapper.find('input')
    input.simulate('change', 'Testing')

    expect(onChangeMock).toBeCalledWith('Testing')
  })

  it('onSubmit is called correctly.', () => {
    const onChangeMock = jest.fn()
    const onSubmitMock = jest.fn()
    const wrapper = shallow(
      <SearchForm
        onChange={onChangeMock}
        onSubmit={onSubmitMock}
      />
    )

    const form = wrapper.find('form')
    form.simulate('submit')

    expect(onSubmitMock).toHaveBeenCalled()
  })
})

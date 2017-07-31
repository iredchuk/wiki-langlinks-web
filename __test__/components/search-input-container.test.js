import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-dom/test-utils'
import SearchInputContainer from '../../src/components/search-input-container'

function setup () {
  const onSearchMock = jest.fn()
  const component = TestUtils.renderIntoDocument(<SearchInputContainer onSearch={onSearchMock} />)
  const element = ReactDOM.findDOMNode(component)
  const input = element.querySelector('input')
  return { input, onSearchMock }
}

test('initial input value is empty', () => {
  const sut = setup()

  expect(sut.input.value).toBe('')
})

test('changing input to a nonempty value and pressing Enter triggers search with that value', () => {
  const sut = setup()

  sut.input.value = 'Test search query  '
  TestUtils.Simulate.change(sut.input)
  TestUtils.Simulate.keyDown(sut.input, { key: 'Enter', keyCode: 13 })

  expect(sut.onSearchMock.mock.calls).toEqual([ ['Test search query'] ])
})

test('changing input to an empty value and pressing Enter does not trigger search', () => {
  const sut = setup()

  sut.input.value = 'Test search query'
  TestUtils.Simulate.change(sut.input)
  sut.input.value = ''
  TestUtils.Simulate.change(sut.input)
  TestUtils.Simulate.keyDown(sut.input, { key: 'Enter', keyCode: 13 })

  expect(sut.onSearchMock.mock.calls).toEqual([])
})

test('changing input to a nonempty value and pressing Tab does not trigger search', () => {
  const sut = setup()

  sut.input.value = 'Test search query'
  TestUtils.Simulate.change(sut.input)
  TestUtils.Simulate.keyDown(sut.input, { key: 'Tab', keyCode: 9 })

  expect(sut.onSearchMock.mock.calls).toEqual([])
})

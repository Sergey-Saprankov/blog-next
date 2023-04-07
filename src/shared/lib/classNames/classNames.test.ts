import { classNames } from './classNames'

describe('classNames', () => {
  it('returns the correct string for a single class', () => {
    const result = classNames('button')

    expect(result).toEqual('button')
  })

  it('returns the correct string for multiple classes', () => {
    const result = classNames('button', { 'button--primary': true, 'button--disabled': false })

    expect(result).toEqual('button button--primary')
  })

  it('returns the correct string with additional classNames', () => {
    const result = classNames('button', { 'button--primary': true }, ['custom-class'])

    expect(result).toEqual('button button--primary custom-class')
  })

  it('returns an empty string for invalid input', () => {
    const result = classNames(null as any, undefined as any, [])

    expect(result).toEqual('')
  })
})

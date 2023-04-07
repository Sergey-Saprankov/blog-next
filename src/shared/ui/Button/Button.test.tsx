import { fireEvent, render, screen } from '@testing-library/react'

import { Button, ButtonSize, ButtonTheme } from './Button'

describe('Button component', () => {
  test('renders with default props', () => {
    render(<Button>Test</Button>)
    expect(screen.getByText('Test')).toBeInTheDocument()
  })

  test('renders with specified theme', () => {
    render(<Button theme={ButtonTheme.Secondary}>Test</Button>)
    expect(screen.getByText('Test')).toHaveClass('secondary')
  })

  test('theme, size test', () => {
    render(
      <Button size={ButtonSize.Small} theme={ButtonTheme.Clear}>
        Test
      </Button>
    )
    expect(screen.getByText('Test')).toHaveClass('small')
    screen.debug()
  })

  test('snapshot', () => {
    render(
      <Button size={ButtonSize.Small} theme={ButtonTheme.Clear}>
        Test
      </Button>
    )
    expect(screen.getByText('Test')).toMatchSnapshot()
    screen.debug()
  })

  test('calls onClick handler when clicked', () => {
    const handleClick = jest.fn()
    const { getByText } = render(<Button onClick={handleClick}>Click me</Button>)

    fireEvent.click(getByText('Click me'))
    expect(handleClick).toHaveBeenCalled()
  })
})

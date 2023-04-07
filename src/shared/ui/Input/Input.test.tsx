import { render, screen } from '@testing-library/react'

import { Input } from 'shared/ui/Input/Input'

describe('Input component', () => {
  test('presence in the document', () => {
    render(<Input>Test</Input>)
    expect(screen.getByText('Test')).toBeInTheDocument()

    screen.debug()
  })
})

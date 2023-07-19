import '@testing-library/jest-dom'
import { screen, render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Logo } from '.'

describe('<Logo/>', () => {
  it('should render Logo correctly ', () => {
    render(<Logo />)
    const logo = screen.getByRole('heading', { name: /tecnocrias/i })
    expect(logo).toBeInTheDocument()
    expect(logo).toHaveClass('logo__brand')
    expect(logo).toHaveStyle('font-weight: bold')
  })
  it('should match to snapshot', () => {
    const { container } = render(<Logo />)
    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="logo__wrapper"
        >
          <h1
            class="logo__brand"
          >
            _Tecnocrias
          </h1>
        </div>
      </div>
    `)
  })
})

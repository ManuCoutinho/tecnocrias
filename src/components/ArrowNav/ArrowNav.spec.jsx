import '@testing-library/jest-dom'
import { screen, render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { ArrowNav } from '.'

describe('<ArrowNav/>', () => {
  it('should render ArrowNav correctly ', () => {
    render(<ArrowNav nextSection="#about" />)
    expect(screen.getByTestId('arrow-down')).toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: /navigate to bottom/i })
    ).toHaveAttribute('href', '#about')
  })
  it('should match to snapshot ', () => {
    const { container } = render(<ArrowNav nextSection="#about" />)
    expect(container).toMatchInlineSnapshot(`
      <div>
        <span
          class="chevron"
          data-testid="arrow-down"
        >
          <a
            aria-label="navigate to bottom"
            href="#about"
          >
            <svg
              fill="currentColor"
              height="1em"
              viewBox="0 0 256 256"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M213.66,122.34a8,8,0,0,1,0,11.32l-80,80a8,8,0,0,1-11.32,0l-80-80a8,8,0,0,1,11.32-11.32L128,196.69l74.34-74.35A8,8,0,0,1,213.66,122.34Zm-91.32,11.32a8,8,0,0,0,11.32,0l80-80a8,8,0,0,0-11.32-11.32L128,116.69,53.66,42.34A8,8,0,0,0,42.34,53.66Z"
              />
            </svg>
          </a>
        </span>
      </div>
    `)
  })
})

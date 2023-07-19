import '@testing-library/jest-dom'
import { screen, render, within } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { SocialIcons } from '.'

describe('<SocialIcons/>', () => {
  it('should render SocialIcons correctly ', () => {
    render(<SocialIcons />)

    const wrapper = screen.getByRole('group')
    expect(
      within(wrapper).getByRole('link', { name: /discord/i })
    ).toHaveAttribute('href', 'https://discord.gg/adxvNfMM88')
  })
  it('should render SocialIcons correctly ', () => {
    const { container } = render(<SocialIcons />)

    expect(container).toMatchSnapshot()
  })
})

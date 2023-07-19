import '@testing-library/jest-dom'
import { screen, render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import {GridCards} from '.'

describe('<GridCards/>', () => {
  it('should render GridCards correctly ', () => {
    render(<GridCards/>)
    expect(screen.getByRole('heading')).toBeInTheDocument()
  })
 })

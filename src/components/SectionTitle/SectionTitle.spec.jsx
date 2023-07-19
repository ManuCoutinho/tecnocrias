import '@testing-library/jest-dom'
import { screen, render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import {SectionTitle} from '.'

describe('<SectionTitle/>', () => {
  it('should render SectionTitle correctly ', () => {
    render(<SectionTitle title='test' subtitle='bar'/>)
    expect(screen.getByText(/bar/i)).toBeInTheDocument()
  })
 })

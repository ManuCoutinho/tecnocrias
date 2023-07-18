import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home'
import Loading from '@/components/Loading'
import './styles/styles.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback={<Loading />}>
      <Home />
    </Suspense>
  </React.StrictMode>
)

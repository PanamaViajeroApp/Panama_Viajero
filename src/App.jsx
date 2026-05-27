import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

const GuideApp = lazy(() => import('./guide/GuideApp.jsx'))
const OfficialApp = lazy(() => import('./official/OfficialApp.jsx'))

function App() {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/official/*" element={<OfficialApp />} />
        <Route path="/*" element={<GuideApp />} />
      </Routes>
    </Suspense>
  )
}

export default App

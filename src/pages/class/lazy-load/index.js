import React, { lazy, Suspense, useState, useEffect } from 'react'
// import Demo from './demo'
const Demo = lazy(() => import('./demo'))

const Index = () => {
  const [flag, setFlag] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setFlag(true)
    }, 2000)
  })
  return (
    <div>
      {flag ? (
        <Suspense fallback={<h1>loading...</h1>}>
          <Demo />
        </Suspense>
      ) : null}
    </div>
  )
}

export default Index

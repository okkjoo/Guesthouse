import React, { lazy, Suspense } from 'react'

const LazyLoad = props => {
  const _renderLazy = () => {
    let Lazy
    const { component, delay, ...restProps } = props
    if (!component || component.constructor.name !== 'Promise') {
      Lazy = import('./error')
    }
    Lazy = lazy(() => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(component)
        })
      }, delay || 300)
    })

    return <Lazy {...restProps} />
  }
  return (
    <div>
      <Suspense fallback={<h5>loading...</h5>}>
        {_renderLazy()}
      </Suspense>
    </div>
  )
}

export default LazyLoad

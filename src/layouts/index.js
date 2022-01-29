import styles from './index.css'
import ErrorBoundary from '../components/ErrorBoundary'

function BasicLayout(props) {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>Yay! Welcome to umi!</h1>
      <ErrorBoundary>{props.children}</ErrorBoundary>
    </div>
  )
}

export default BasicLayout

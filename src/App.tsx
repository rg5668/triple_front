import Intro from 'pages/Intro'
import ResetStyles from 'styles/ResetStyles'
import Colors from 'constants/colors'

const App = ({}) => {
  return (
    <div className="App">
      <ResetStyles />
      <Colors />
      <Intro />
    </div>
  )
}

export default App

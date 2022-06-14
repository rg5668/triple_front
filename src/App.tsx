import React from 'react'
import styled from 'styled-components'
import GlobalStyles from 'styles/GlobalStyles'

const Text = styled.p`
  color: var(--color__primary);
`

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={process.env.PUBLIC_URL + `/assets/triple2x.png`} />
        <GlobalStyles />
        <Text>
          Edit <code>src/App.tsx</code> and save to reload.
        </Text>
        <p>Hello</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App

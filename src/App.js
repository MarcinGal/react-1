import React from 'react'
import Button from './Button'

const names = ['Ala', 'Ola', 'Ela']
const nameList = names.map((element, i) => { return <li key={element}>{element}</li> })
const App = (props) => (
  <div>
    <div>{names}</div>
    <ul>
      {
        nameList
      }
    </ul>
    <div>
      <Button
        label="Click me!"
        onClickHandler={() => alert('Click!')}
      />
    </div>
    <div>
      <Button
        label="kliknij!"
        onClickHandler={() => console.log('Kliknąłeś!')}
      />
    </div>
  </div>
)
export default App
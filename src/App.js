import React from 'react';

const names = ['Ala', 'Ola', 'Ela']

const App = (props) => (
  <div>
    <div>{names}</div>
    <ul>
      {
        names.map((element, i) => {
          return <li>{element}</li>
        })
      }
    </ul>
  </div>
)
export default App
import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'

export default function Content() {
  const { isOpen, themeStyle } = useContext(AppContext);

  return (
    <div
      className='content'
      style={{
        ...themeStyle,
        padding: '10px',
        gridColumn: isOpen ? '2 / 4' : '1 / 4',
      }}
    >
      <p>
        This is a poem.
        It'll continue in many more lines.
      </p>
      <br />
      <p>
        Let's continue this poem.
        This should be the last line.
      </p>
    </div>
  )
}

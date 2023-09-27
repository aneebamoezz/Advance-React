import React from 'react';
import Menu from "./Menu/index"

export default function App() {
  const sports = ["Tennis", "Pickleball", "Racquetball", "Squash"]
  
  return (
    <Menu>
      <Menu.Button>Sports</Menu.Button>
      <Menu.Dropdown>
        {sports.map(sport => (
          <Menu.Item key={sport}>{sport}</Menu.Item>
        ))}
      </Menu.Dropdown>
    </Menu>
  )
}


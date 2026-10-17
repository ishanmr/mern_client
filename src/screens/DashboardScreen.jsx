import React from 'react'

function DashboardScreen() {

  const [isAppReady, updateDashboard] = React.useState(false)

  setTimeout(() => {
    updateDashboard(true)
  }, 1.5*1000)

  if (!isAppReady) {
    return (
      <div>
        <h2>Dashboard Loading...</h2>
      </div>
    )
  }

  return (
    <div>
        <h1>This is dashboard screen</h1>
    </div>
  )
}

export default DashboardScreen
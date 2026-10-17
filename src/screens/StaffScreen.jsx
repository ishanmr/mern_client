import React from 'react'

function StaffScreen() {
  
    const [isAppReady, updateStaffs] = React.useState(false)
  
    setTimeout(() => {
      updateStaffs(true)
    }, 1.5*1000)
  
    if (!isAppReady) {
      return (
        <div>
          Staff's Screen Loading...
        </div>
      )
    }
  return (
    <div>
        <h1>Staff's screen</h1>
    </div>
  )
}

export default StaffScreen
import React from 'react'

function TeacherScreen() {
  
    const [isAppReady, updateTeachers] = React.useState(false)
  
    setTimeout(() => {
      updateTeachers(true)
    }, 1.5*1000)
  
    if (!isAppReady) {
      return (
        <div>
          <h2>Teacher's Screen Loading...</h2>
        </div>
      )
    }
  return (
    <div>
        <h1>Teacher's screen</h1>
    </div>
  )
}

export default TeacherScreen
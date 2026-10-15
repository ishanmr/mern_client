import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import DashboardScreen from './screens/DashboardScreen'
import AppLayout from './layouts/AppLayout'
import StudentScreen from './screens/StudentScreen'
import TeacherScreen from './screens/TeacherScreen'
import StaffScreen from './screens/StaffScreen'

function App() {
  return (
    
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AppLayout />}> 
            <Route index element={<DashboardScreen />}></Route>
            <Route path='/student' element={< StudentScreen />}> </Route>
            <Route path='/teacher' element={< TeacherScreen />}> </Route>
            <Route path='/staff' element={< StaffScreen />}> </Route>
            </Route>
        </Routes>
      </BrowserRouter>
 
  )
}

export default App
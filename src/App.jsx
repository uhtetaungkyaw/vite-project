import './App.css'
import Button from './components/button/Button'
import { MainTitle, SecondTitle } from './components/mainTitle/MainTitle'
import StudentList from './components/studentList/StudentList'
import SwitchTheme from './components/switchTheme/SwitchTheme'
import About from './pages/About'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Nav from './pages/Nav'
import Parent from './pages/Parent'
import Count from './pages/count/Count'
import TodoList from './pages/todoList/TodoList'
import  userContext  from './store/userContext'
// import Todo from './pages/Todo'
// import Login from './pages/login/Login'
import Home from './pages/Home'
import { BrowserRouter, Link, Route, Routes, useLocation } from 'react-router-dom'
import { useState } from 'react'
import BlogDetail from './pages/BlogDetail'

function App() {
  const user = {
    name: "Aung",
    age: 24,
  }
  const [userData,setUserData] = useState(user)

  

  return (
    <userContext.Provider value={userData}>
      
      <BrowserRouter>
        <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/blog' element={<Blog/>} />
        <Route path="/blog/:id" element={<BlogDetail/>} />
      {/* <MainTitle title="Title1"/> */}
      {/* <MainTitle title="titel1" /> */}
      {/* <MainTitle title="Title2" />
      <MainTitle title="Title3"/> */}
      {/* <SecondTitle />
      <MainTitle/>
        <Button/>
        <Parent/>
      <SwitchTheme/>
      <StudentList/> */}
      {/* <Login/> */}
      {/* <TodoList/> */}
      {/* <Count/> */}
    </Routes>
    </BrowserRouter>
    {/* <Count/> */}
    </userContext.Provider>
  )
}
export default App

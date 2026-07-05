import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './main.css'
import authService from "./appwrite/auth"
import {login, logout} from "./store/authSlice"
import { Footer, Header } from './components'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [])
  
  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-[#f8f8fb] '>
      <div className='w-full block'>
        <Header />
        <main>
          <PageStyled>
            <Outlet />
          </PageStyled>
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}
const PageStyled = styled.div`
  min-height: calc(100vh - 120px);
`;

export default App

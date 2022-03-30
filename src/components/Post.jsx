//sample page for react-router-dom 
import React from 'react'
import {Navigate, useNavigate, Routes,Route} from 'react-router-dom'

function Post() {
    const navigate = useNavigate()
    const status = 200
    //to redirect page

    if(status === 404) {
        return <Navigate to='/notfound' />
    }

    const onClick = () => {
        Navigate('/about')
    }

  return (
    <div>
        <h1>Post</h1>
        <button onClick={onClick}>Click</button>
        <Routes>
            <Route path='/show' element={<h1>Hello</h1>}/>
        </Routes>
    </div>
  )
}

export default Post

//must have Route path='/post/*' element={/Post} />  Asterix is needed for show
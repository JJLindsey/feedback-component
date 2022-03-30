import {useState} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {v4 as uuidv4} from 'uuid'
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackData from './data/FeedbackData';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutIconLink from './components/AboutIconLink';
import About from './pages/About'

function App() {
  const [feedback, setFeedback] = useState(FeedbackData)

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
  }

  const deleteFeedback = (id) => {
    if(window.confirm('Are you sure you want to delete?')){
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }
  
  return (
    <Router>
      <Header/>
      <div className='container'>
        <Routes>
          <Route path='/' element={
            <>
              <FeedbackForm  handleAdd={addFeedback}/>
              <FeedbackStats feedback={feedback}/>
              <FeedbackList  feedback={feedback}/>
            </>
          }
          ></Route>
          <Route path='/about' element={<About/>}/>
        </Routes>
        <AboutIconLink/>
      </div>
    </Router>
    
  );
}

export default App;

import {Link} from 'react-router-dom'
import Card from '../components/shared/Card'

function About() {
  return (
      <Card>
        <div className='about'>
        <h1>About this Project</h1>
        <p>This is a React App to leave feedback for a service or product</p>
        <p>version: 1.0.0</p>
        <p>
            <Link to="/">Back to Home
            </Link>
        </p>
        </div>
      </Card>
    
  )
}

export default About
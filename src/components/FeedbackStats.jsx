//import PropTypes from 'prop-types'
import {useContext} from 'react'
import FeedbackContext from '../context/FeedbackContext'


function FeedbackStats() {
    const {feedback} = useContext(FeedbackContext)
    //calculate ratongs average
    let average = feedback.reduce((acc, currVal) => {
        return acc + currVal.rating
    }, 0 ) / feedback.length
    //decimal place to 1
    average = average.toFixed(1).replace(/[.,]0$/, '')

    return (
        <div className='feedback-stats'>
            <h4>{feedback.length} Reviews</h4>
            <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
        </div>
    )
}

//no longer need to use since added useContext
// FeedbackStats.propTypes = {
//     feedback: PropTypes.array.isRequired
// }

export default FeedbackStats
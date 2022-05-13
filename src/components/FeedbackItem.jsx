import Card from './shared/Card'
//import FeedbackData from '../data/FeedbackData'
import PropTypes from 'prop-types'
import {BsXLg} from 'react-icons/bs'
import {useContext} from 'react'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackItem({item}) {
    const {deleteFeedback} = useContext(FeedbackContext)

    return (
        <Card reverse={true}>
            <div className="num-display">{item.rating}</div>
            <button onClick={() => deleteFeedback(item.id)} className="close"><BsXLg color='yellow'/></button>
            <div className="text-display">{item.text}</div>
        </Card>
    )
}

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired,
}

export default FeedbackItem
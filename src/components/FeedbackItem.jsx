import Card from './shared/Card'
//import FeedbackData from '../data/FeedbackData'
import PropTypes from 'prop-types'
import {BsXLg} from 'react-icons/bs'

function FeedbackItem({item, handleDelete}) {

    return (
        <Card reverse={true}>
            <div className="num-display">{item.rating}</div>
            <button onClick={() => handleDelete(item.id)} className="close"><BsXLg color='yellow'/></button>
            <div className="text-display">{item.text}</div>
        </Card>
    )
}

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired,
}

export default FeedbackItem
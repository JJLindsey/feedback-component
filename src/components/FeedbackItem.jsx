import Card from './shared/Card'
//import FeedbackData from '../data/FeedbackData'
import PropTypes from 'prop-types'

function FeedbackItem({item}) {

    return (
        <Card reverse={true}>
            <div className="num-display">{item.rating}</div>
            <div className="text-display">{item.text}</div>
        </Card>
    )
}

FeedbackItem = {
    item: PropTypes.object.isRequired,
}

export default FeedbackItem
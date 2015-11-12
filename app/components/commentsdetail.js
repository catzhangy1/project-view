import React from 'react';
import {Link} from 'react-router';
import CommentsStore from '../stores/CommentsStore';
import CommentsActions from '../actions/CommentsActions';

class CommentsDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = CommentsStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        CommentsStore.listen(this.onChange);
        //CommentsActions.getComments();
    }

    componentWillUnmount() {
        CommentsStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    render() {
        return (
            <div className = 'comments-container'>
                <img src= {this.props.comment.icon} width='60px' />
                <div className = 'comments'>
                    <span> <strong> {this.props.comment.user} </strong> {this.props.comment.date}</span>
                    <p> {this.props.comment.content} </p>

                    <span dangerouslySetInnerHTML={{__html: "<svg width='25px' height='25px'><use xlink:href='img/reply.svg#replySVG'></use></svg>"}} />

                    </div>
            </div>
        );
    }
}

export default CommentsDetail;
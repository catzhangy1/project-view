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
            <div className = 'comments'>
                <img src= {this.props.comment.icon} width='60px'/> <span> {this.props.comment.username} </span>
            </div>
        );
    }
}

export default CommentsDetail;
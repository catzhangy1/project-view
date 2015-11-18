import React from 'react';
import {Link} from 'react-router';
import CommentsStore from '../stores/CommentsStore';
import CommentsActions from '../actions/CommentsActions';
import CommentsDetail from "./CommentsDetail";
import CommentForm from "./CommentForm";

class Comments extends React.Component {
    constructor(props) {
        super(props);
        this.state = CommentsStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        CommentsStore.listen(this.onChange);
        CommentsActions.getComments();
    }

    componentWillUnmount() {
        CommentsStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    render() {
        let comments = this.state.comments.map(function (comment) {
            return <CommentsDetail
                        comment= {comment}/>
        });

        return (
            <div>
                <div className='header-title'>
                    <img src= "img/comment.svg" height='25px' width='25px'/>
                    <span> {this.state.size} Comments</span>
                </div>
                <div>
                    {comments}
                </div>

                <CommentForm postComments={CommentsActions.postComments}/>

            </div>
        );
    }
}

export default Comments;
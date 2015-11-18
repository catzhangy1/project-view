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

    updateValue(val) {
        this.setState({currentReplyTo: val});
    }

    updateReplyTo(val, username){
        let user = "@" + username;
        let oldComments = this.state.comments;
        this.setState({currentReplyTo: val, currentReplyToUser: user, comments: oldComments});
    }

    render() {
        const _this = this;
        let comments = this.state.comments.map(
            function (comment) {
                return <CommentsDetail
                     comment= {comment}
                     updateReplyTo={_this.updateReplyTo.bind(_this)}/>
            }
        );

        return (
            <div>
                <div className='header-title'>
                    <img src= "img/comment.svg" height='25px' width='25px'/>
                    <span> {this.state.size} Comments</span>
                </div>
                <div>
                    {comments}
                </div>
                <CommentForm
                    postComments={CommentsActions.postComments}
                    updateValue={this.updateValue.bind(this)}
                    value={this.state.currentReplyToUser}
                />
            </div>
        );
    }
}

export default Comments;
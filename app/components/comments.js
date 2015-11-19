import React from 'react';
import CommentsStore from '../stores/CommentsStore';
import CommentsActions from '../actions/CommentsActions';
import CommentsDetail from "./CommentsDetail";
import CommentForm from "./CommentForm";

/**
 * Comments is a container component for
 * 1) A list of CommentDetails for the project
 * 2) A CommentForm at the end
 */
class Comments extends React.Component {
    constructor(props) {
        super(props);
        this.state = CommentsStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        CommentsStore.listen(this.onChange);
        CommentsActions.getComments(this.props.userId, this.props.projectId);
    }

    componentWillUnmount() {
        CommentsStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    updateForm(val) {
        this.setState({currentReplyTo: val});
    }

    updateReplyTo(val, username){
        const user = "@" + username;
        this.setState({currentReplyTo: val, currentReplyToUser: user});
    }

    render() {
        let comments = this.state.comments.map((comment) => {
                return (
                    <CommentsDetail
                    comment={comment}
                    updateReplyTo={this.updateReplyTo.bind(this)}/>
                )
            }
        );

        return (
            <div>
                <div className='header-title'>
                    <img src= "/img/comment.svg" height='25px' width='25px'/>
                    <span> {this.state.size} Comments</span>
                </div>
                <div>
                    {comments}
                </div>
                <CommentForm
                    postComments={CommentsActions.postComments}
                    updateValue={this.updateForm.bind(this)}
                    value={this.state.currentReplyToUser}
                    replyId={this.state.currentReplyTo}
                    userId={this.props.userId}
                    projectId={this.props.projectId}
                />
            </div>
        );
    }
}

export default Comments;
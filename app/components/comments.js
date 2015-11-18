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

    postComments(body) {
        console.log('postComments');
        $.ajax({ url: 'https://api.diy.org/makers/hivetest/projects/566218/comments',
                 headers: {'x-diy-api-token': '30b28060b2b06a954c334ad2c92a8d85b58316d9'},
                 type: 'POST',
                 dataType: 'json',
                 data: body })
            .done((data) => {
                console.log(data);
            })
            .fail((jqXhr) => {
                console.log(jqXhr);
            });
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

                <CommentForm postComments={this.postComments}/>

            </div>
        );
    }
}

export default Comments;
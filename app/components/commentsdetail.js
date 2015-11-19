import React from 'react';
import CommentForm from "./CommentForm";

/**
 * CommentsDetail is a component that represents one "block" of comments, which consists of
 * 1) A comment replied directly to the project (replyId = 0)
 * 2) All comments that are in response of the master comment or one another
 */
class CommentsDetail extends React.Component {
    constructor(props) {
        super(props);
    }

    addReply(id, user) {
        this.props.updateReplyTo(id, user);
    }

    render() {
        const _this = this;
        const userUrl = `http://www.diy.org/${this.props.comment[0].url}`;
        let nestedComments = this.props.comment.slice().splice(1); //makes copy of nestedComments so props.comment is unmodified
        let comments = nestedComments.map(function (c) {
            let userURL = `http://www.diy.org/${c.url}`;
            return (
                <div className ='nested-comments-container' key={c.rawDate}>
                    <a href ={userURL}> <img src= {c.icon} width='60px' /> </a>
                    <div className = 'comments'>
                        <span><a href ={userURL}>  <strong> {c.user} </strong> </a>{c.date}</span>
                        <p> {c.content} </p>
                        <img src= "/img/reply.svg" onClick={_this.addReply.bind(_this, c.id, c.user)} height='25px' width='25px'/>
                    </div>
                </div>
            )
        });

        return (
            <div className = 'comments-container' key={this.props.comment[0].rawDate}>
                <a href ={userUrl}> <img src= {this.props.comment[0].icon} width='60px' /> </a>
                <div className = 'comments'>
                    <span>  <a href ={userUrl}> <strong> {this.props.comment[0].user} </strong> </a> {this.props.comment[0].date} </span>
                    <p> {this.props.comment[0].content} </p>
                    <img src= "/img/reply.svg" onClick={this.addReply.bind(this, this.props.comment[0].id, this.props.comment[0].user)} height='25px' width='25px'/>
                </div>
                <div>
                    {comments}
                </div>
            </div>
        );
    }
}

export default CommentsDetail;
import React from 'react';
import {Link} from 'react-router';
import CommentForm from "./CommentForm";

class CommentsDetail extends React.Component {
    constructor(props) {
        super(props);
    }

    addReply (id, user) {
        this.props.updateReplyTo(id, user);
    }

    render() {
        const _this = this;
        let nestedComments = this.props.comment.slice().splice(1); //makes copy of nestedComments so props.comment is unmodified
        let comments = nestedComments.map(function (c) {
            return (<div className ='nested-comments-container' key={c.rawDate}>
                <img src= {c.icon} width='60px' />
                <div className = 'comments'>
                    <span> <strong> {c.user} </strong> {c.date}</span>
                    <p> {c.content} </p>
                    <img src= "/img/reply.svg" onClick={_this.addReply.bind(_this, c.id, c.user)} height='25px' width='25px'/>
                </div>
            </div>)
        });

        return (
            <div className = 'comments-container' key={this.props.comment[0].rawDate}>
                <img src= {this.props.comment[0].icon} width='60px' />
                <div className = 'comments'>
                    <span> <strong> {this.props.comment[0].user} </strong> {this.props.comment[0].date}</span>
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
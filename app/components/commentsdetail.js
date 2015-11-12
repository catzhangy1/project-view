import React from 'react';
import {Link} from 'react-router';

class CommentsDetail extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    onChange(state) {
        this.setState(state);
    }

    render() {
        let comments = this.props.comment.splice(1).map(function (c) {
            return (<div className ='nested-comments-container'>
                <img src= {c.icon} width='60px' />
                <div className = 'comments'>
                    <span> <strong> {c.user} </strong> {c.date}</span>
                    <p> {c.content} </p>
                </div>
            </div>)
        });

        return (
            <div className = 'comments-container'>
                <img src= {this.props.comment[0].icon} width='60px' />
                <div className = 'comments'>
                    <span> <strong> {this.props.comment[0].user} </strong> {this.props.comment[0].date}</span>
                    <p> {this.props.comment[0].content} </p>

                    <span dangerouslySetInnerHTML={{__html: "<svg width='25px' height='25px'><use xlink:href='img/reply.svg#replySVG'></use></svg>"}} />

                </div>
                <div>
                    {comments}
                </div>
            </div>
        );
    }
}

export default CommentsDetail;
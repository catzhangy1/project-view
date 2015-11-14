import React from 'react';
import {Link} from 'react-router';
import CommentsActions from '../actions/CommentsActions';

class CommentForm extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.state = {
            icon: "",
            username: "",
            url: ""
        };
    }

    componentDidMount() {
        //CommentsStore.listen(this.onChange);
        //CommentsActions.getComments();
        this.getUserInfo();
        console.log(this.state);

    }

    getUserInfo() {
        let result = {};
        $.ajax({url: 'https://api.diy.org/makers/catzhangy1'})
            .done((data) => {
                data = data.response;
                this.setState({
                    username: data.nickname,
                    url: data.url,
                    icon: data.avatar.small.url,
                });
            })
            .fail((jqXhr) => {
                console.log(jqXhr);
                result = jqXhr;
            });
        return result;
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
            <img src= {this.state.icon} width='60px' />
            <div className = 'comments'>
                <span> <strong> {this.state.username} </strong> </span>
                <form className="commentForm">
                    <textarea type="text" maxlength="140" placeholder="Add a new comment" />
                    <br/>
                    <input type="submit" value="Post!" />
                </form>
            </div>
        </div>

        );
    }
}

export default CommentForm;



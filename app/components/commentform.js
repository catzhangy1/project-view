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
            url: "",
            value: ""
        };
    }

    componentDidMount() {
        this.getUserInfo();
    }

    getUserInfo() {
        let result = {};
        $.ajax({url: 'https://api.diy.org/makers/catzhangy1'})
            .done((data) => {
                data = data.response;
                this.setState({
                    username: data.nickname,
                    url: data.url,
                    icon: data.avatar.small.url
                });
            })
            .fail((jqXhr) => {
                console.log(jqXhr);
                result = jqXhr;
            });
        return result;
    }

    handleSubmit(e) {
        e.preventDefault();
        let result;
        let body = this.refs.text.value.trim();
        if(!body){
            return;
        }
        result = this.props.replyId == 0 ? {raw:body} : {raw:body, reply:this.props.replyId};
        this.props.postComments(JSON.stringify(result));
        this.refs.text.value = '';
    }

    updateForm() {
        let newValue = this.refs.text.value;
        this.props.updateValue(newValue);
    }

    componentWillUnmount() {
        CommentsStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    render() {
        return (
            <div className='comments-container'>
                <img src={this.state.icon} width='60px'/>

                <div className='comments'>
                    <span> <strong> {this.state.username} </strong> </span>

                    <div className="form-container">
                        <form className="commentForm" onSubmit={this.handleSubmit.bind(this)}>
                            <textarea type="text" maxLength="140" placeholder="Add a new comment" ref="text" value ={this.props.value} onChange={this.updateForm}/>
                            <input type="submit" value="Post"/>
                        </form>
                    </div>
                </div>
            </div>

        );
        }
}

export default CommentForm;



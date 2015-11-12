import React from 'react';
import {Link} from 'react-router';
import CommentsStore from '../stores/CommentsStore';
import CommentsActions from '../actions/CommentsActions';

class Comments extends React.Component {
    constructor(props) {
        super(props);
        this.state = CommentsStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        CommentsStore.listen(this.onChange);
        CommentsActions.getFavourites();
    }

    componentWillUnmount() {
        CommentsStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    render() {
        return <div></div>;
    }
}

export default Comments;
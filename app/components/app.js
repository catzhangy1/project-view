import React from 'react';


class App extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    onChange(state) {
        this.setState(state);
    }

    render() {
        console.log(this.props);
        //<ProjectView
        //    userId={this.props.params.user}
        //    projectId={this.props.params.project}
        //    router={this.props.history}/>
        return (
            <div>
            {this.props.children}
            </div>
        )
    }
}

export default App;
import React from 'react';


class App extends React.Component {
    constructor(props) {
        super(props);

    }

    onChange(state) {
        this.setState(state);
    }

    render() {
        return (
            <div>
            {this.props.children}
            </div>
        )
    }
}

export default App;
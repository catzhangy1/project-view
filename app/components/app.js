import React from 'react';

/**
 * App is the container component for all React components rendered.
 */
class App extends React.Component {
    constructor(props) {
        super(props);

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
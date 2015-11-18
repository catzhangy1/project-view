import React from 'react';
import ProjectView from './projectview';
import Favourites from './favourites';
import Comments from './comments';

class App extends React.Component {
    render() {
        return (
            <div className='outer-container'>
                <div className = 'upper-section'>
                    <div className ='inner-container'>
                        <ProjectView userId={this.props.params.user} projectId={this.props.params.project}/>
                    </div>
                </div>

                <div className = 'inner-container'>
                    <div className='row'>
                        <div className ='col-sm-8'>
                            <Comments userId={this.props.params.user} projectId={this.props.params.project}/>
                        </div>
                        <div className='col-md-4 col-sm-4'>
                            <Favourites userId={this.props.params.user} projectId={this.props.params.project}/>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default App;
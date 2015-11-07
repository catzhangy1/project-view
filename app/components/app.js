import React from 'react';
import ProjectView from './projectview';
import Favourites from './favourites';

class App extends React.Component {
    render() {
        return (
            <div>
                <div className="outer-container">
                    <ProjectView />
                </div>
                <div className="outer-container lower">
                    <div className='row'>
                        <div className='col-sm-8'>

                        </div>
                        <div className='col-sm-4'>
                            <Favourites />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
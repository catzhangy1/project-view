import React from 'react';
import ProjectView from './projectview';
import Favourites from './favourites';

class App extends React.Component {
    render() {
        return (
            <div className='outer-container'>
                <div className = 'upper-section'>
                    <div className ='inner-container'>
                        <ProjectView />
                    </div>
                </div>

                <div className = 'inner-container'>
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
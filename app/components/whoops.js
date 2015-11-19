import React from 'react';

class Whoops extends React.Component {
    render() {
        return (
            <div className='whoops-container'>
                <h3>!</h3>
                    <div className='text'>
                    <h1>Whoops-</h1>
                        <hr />
                        <p> Looks like the project you're looking for isn't here, or you're just wild! </p>
                        <hr/>
                        <p style={{color: '#FFAB97'}}> <i> Hint: Enter URL as validUser/validProjectId </i> </p>
                    </div>
            </div>
        );
    }
}

export default Whoops;
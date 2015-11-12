import React from 'react';
import {Link} from 'react-router';
import ProjectViewStore from '../stores/ProjectViewStore';
import ProjectViewAction from '../actions/ProjectViewAction';

class ProjectView extends React.Component {
    constructor(props) {
        super(props);
        this.state = ProjectViewStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        ProjectViewStore.listen(this.onChange);
        ProjectViewAction.getProject();
    }

    componentWillUnmount() {
        ProjectViewStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    render() {
        return (
            <div className='project-container'>
                <div className='row'>
                    <div className='col-md-8'>
                        <img src={this.state.project.contentSrc}/></div>
                    <div className='col-md-4 img'>
                        <h3>{this.state.project.title}</h3>
                        <p>{this.state.project.date}</p>

                        <footer>
                            <img src={this.state.project.iconsrc} />
                            <span> {this.state.project.username} </span>
                        </footer>
                    </div>
                </div>
            </div>
            //<footer>
            //    <div className='container'>
            //        <div className='row'>
            //            <div className='col-sm-5'>
            //                <h3 className='lead'><strong>Information</strong> and <strong>Copyright</strong></h3>
            //                <p>Powered by <strong>Node.js</strong>, <strong>MongoDB</strong> and <strong>React</strong> with Flux architecture and server-side rendering.</p>
            //                <p>You may view the <a href='https://github.com/sahat/newedenfaces-react'>Source Code</a> behind this project on GitHub.</p>
            //                <p>© 2015 Sahat Yalkabov.</p>
            //            </div>
            //            <div className='col-sm-7 hidden-xs'>
            //                <h3 className='lead'><strong>Leaderboard</strong> Top 5 Characters</h3>
            //                <ul className='list-inline'>
            //
            //                </ul>
            //            </div>
            //        </div>
            //    </div>
            //</footer>
        );
    }
}

export default ProjectView;
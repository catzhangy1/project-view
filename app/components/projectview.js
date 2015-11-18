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
        ProjectViewAction.getProject(this.props.userId, this.props.projectId);
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
                        <img src={this.state.project.contentSrc} width='auto'/></div>
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
        );
    }
}

export default ProjectView;
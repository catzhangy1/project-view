import React from 'react';
import {Link} from 'react-router';
import ProjectViewStore from '../stores/ProjectViewStore';
import ProjectViewAction from '../actions/ProjectViewAction';
import Favourites from './favourites';
import Comments from './comments';

class ProjectView extends React.Component {
    constructor(props) {
        super(props);
        this.state = ProjectViewStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        ProjectViewStore.listen(this.onChange);
        ProjectViewAction.getProject(this.props.params.user, this.props.params.project, this.props.history);
    }

    componentWillUnmount() {
        ProjectViewStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    render() {
        let comments = <br/>;
        let favourites = <br/>;
        if(this.state.loadSuccess){
            comments = <Comments userId={this.props.params.user} projectId={this.props.params.project}/>;
            favourites = <Favourites userId={this.props.params.user} projectId={this.props.params.project}/>;
        }

        return (
        <div className='outer-container'>
            <div className = 'upper-section'>
                <div className ='inner-container'>

                    <div className='project-container'>
                        <div className='row'>
                            <div className='col-md-8'>
                                <img src={this.state.project.contentSrc} width='auto'/>
                                <img id='favourite' src='/img/favorite.svg' width='50px' height='50px'/>
                            </div>
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
                </div>
            </div>

            <div className = 'inner-container'>
                <div className='row'>
                    <div className ='col-sm-8'>
                        {comments}
                    </div>
                    <div className='col-md-4 col-sm-4'>
                        {favourites}
                    </div>
                </div>
            </div>

        </div>

        );
    }
}

export default ProjectView;
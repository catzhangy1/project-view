import React from 'react';
import Modal from 'react-modal';
import ProjectViewStore from '../stores/ProjectViewStore';
import ProjectViewAction from '../actions/ProjectViewAction';
import Favourites from './favourites';
import Comments from './comments';

/**
 * ProjectView is a container component that renders the project view, which includes:
 * 1) the overview with img/video
 * 2) comments
 * 3) favourites
 */
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

    openModal(){
        this.setState({modalIsOpen: true});
    }

    closeModal() {
        this.setState({modalIsOpen: false});
    }

    render(){
        let comments, favourites, content, modal;
        comments = favourites = content = modal = <br/>;
        let userURL = `http://www.diy.org/${this.state.project.url}`;

        //load comments and favourites only if project can be found;
        if (this.state.loadSuccess){
            comments = <Comments userId={this.props.params.user} projectId={this.props.params.project} />;
            favourites = <Favourites userId={this.props.params.user} projectId={this.props.params.project} />;
        }

        //image and video display
        if (this.state.project.contentType == 'video'){
            modal = (
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal.bind(this)}>
                    <video width='auto' controls>
                    <source src={this.state.project.contentSrc[1]} />
                    Your browser does not support this video.
                    </video>
                </Modal>
            );
            content = (
                <div className='video'>
                    <img src={this.state.project.contentSrc[0]} width='auto' />
                    <img src='/img/play-btn.png' id='play-btn' width='75px' height='75px' onClick={this.openModal.bind(this)} />
                </div>
            );

        } else{
            content = (<img src={this.state.project.contentSrc} width='auto' />);
        }
        return (
            <div className='outer-container'>
            <div className = 'upper-section'>
                <div className ='inner-container'>
                    <div className='project-container'>
                        <div className='row'>
                            <div className='col-md-8'>
                                {content}
                                {modal}
                                <img id='favourite' src='/img/favorite.svg' width='50px' height='50px'/>
                            </div>
                            <div className='col-md-4 img'>
                                <h3>{this.state.project.title}</h3>
                                <p>{this.state.project.date}</p>
                                <footer>
                                    <a href={userURL}>
                                        <img src={this.state.project.iconsrc} />
                                        <span> {this.state.project.username} </span>
                                    </a>
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
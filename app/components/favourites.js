import React from 'react';
import {Link} from 'react-router';
import FavouritesStore from '../stores/FavouritesStore';
import FavouritesActions from '../actions/FavouritesActions';

class Favourites extends React.Component {
    constructor(props) {
        super(props);
        this.state = FavouritesStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        FavouritesStore.listen(this.onChange);
        FavouritesActions.getFavourites();
    }

    componentWillUnmount() {
        FavouritesStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    render() {

        return (
            <div className='header'>
                <img src= "img/favorite.svg" width='24px' height='24px'/>
                <span> {this.state.size} </span>
            </div>
            //<div className='project-container'>
            //    <div className='row'>
            //        <div className='col-sm-8'>
            //            <img src={this.state.project.contentSrc}/></div>
            //        <div className='col-sm-4 img'>
            //            <h3>{this.state.project.title}</h3>
            //            <p>{this.state.project.date}</p>
            //
            //            <footer>
            //                <img src={this.state.project.iconsrc} />
            //                <span> {this.state.project.username} </span>
            //            </footer>
            //        </div>
            //    </div>
            //</div>

        );
    }
}

export default Favourites;
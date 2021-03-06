import React from 'react';
import FavouritesStore from '../stores/FavouritesStore';
import FavouritesActions from '../actions/FavouritesActions';

/**
 * Favourites is a component that renders a list of users who favourited the project.
 */
class Favourites extends React.Component {
    constructor(props) {
        super(props);
        this.state = FavouritesStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        FavouritesStore.listen(this.onChange);
        FavouritesActions.getFavourites(this.props.userId, this.props.projectId);
    }

    componentWillUnmount() {
        FavouritesStore.unlisten(this.onChange);
    }

    truncate(a) {
        if(a.length > 16){ //conservative estimate on longest word allowed
            return a.slice(0,12).concat("...");
        }
        return a;
    }

    onChange(state) {
        this.setState(state);
    }


    render() {
        let _this = this;
        let users = this.state.favourites.map(function (user) {
            const url = `http://www.diy.org/${user.url}`;
            return (
                <div className = 'user'>
                    <a href ={url}>
                        <img src= {user.icon}/>
                        <span> {_this.truncate(user.username)} </span>
                    </a>
                </div>
            )
        });

        return (
            <div>
                <div className='header-title'>
                    <img src="/img/favorite.svg" width='24px' height='24px'/>
                    <span> {this.state.size} Favourites</span>
                </div>
                <div className='bi-section'>
                    {users}
                </div>
            </div>
        );
    }
}

export default Favourites;
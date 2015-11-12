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
        //let leaderboardCharacters = this.state.characters.map((character) => {
        //    return (
        //        <li key={character.characterId}>
        //            <Link to={'/characters/' + character.characterId}>
        //                <img className='thumb-md' src={'http://image.eveonline.com/Character/' + character.characterId + '_128.jpg'} />
        //            </Link>
        //        </li>
        //    )
        //});
        let users = this.state.favourites.map(function (user) {
            return <div className = 'user'>
                    <img src= {user.icon}/> <span> {user.username} </span>
                </div>

        });

        return (
            <div>
                <div className='header-title'>
                    <img src= "img/favorite.svg" width='24px' height='24px'/>
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
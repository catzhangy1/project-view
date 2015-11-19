import alt from '../alt';
import FavouritesActions from '../actions/FavouritesActions';

class FavouritesStore {
    constructor() {
        this.bindActions(FavouritesActions);
        this.favourites = [];
        this.size = 0;
    }

    onGetFavouritesSuccess(data) {
        this.favourites = data.map((a) => {
            return {
                "username": a.nickname,
                "url": a.url,
                "icon": a.avatar.icon.url
            }
        });
        this.size = data.length;
    }

    onGetFavouritesFail(jqXhr) {
        // Handle multiple response formats, fallback to HTTP status code number.
        toastr.error(jqXhr.responseJSON && jqXhr.responseJSON.message || jqXhr.responseText || jqXhr.statusText);
    }
}

export default alt.createStore(FavouritesStore);
import alt from '../alt';
import FavouritesActions from '../actions/FavouritesActions';

class FavouritesStore {
    constructor() {
        this.bindActions(FavouritesActions);
        this.favourites = [];
        this.size = 0;
    }

    onGetFavouritesSuccess(data) {
        this.favourites = data.map( function (a) {
        return {"username": a.nickname,
                "url": a.url,
                "icon": a.avatar.icon.url}
            }
        );
        this.size = data.length;
    }

    getDate(data) {
        const d = new Date(data);
        const date = (d.toDateString().split(" ")).splice(1);
        return [date[0], " ", date[1], ", ", date[2]].join("");
    }

    onGetTopCharactersFail(jqXhr) {
        // Handle multiple response formats, fallback to HTTP status code number.
        toastr.error(jqXhr.responseJSON && jqXhr.responseJSON.message || jqXhr.responseText || jqXhr.statusText);
    }
}

export default alt.createStore(FavouritesStore);
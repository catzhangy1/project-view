import alt from '../alt';

class FavouritesActions {
    constructor() {
        this.generateActions(
            'getFavouritesSuccess',
            'getFavouritesFail'
        );
    }

    getFavourites(userId, projectId) {
        if(!userId || !projectId) {
            return;
        }
        $.ajax({ url: `http://api.diy.org/makers/${userId}/projects/${projectId}/favorites` })
            .done((data) => {
                console.log(data);
                this.actions.getFavouritesSuccess(data.response)
            })
            .fail((jqXhr) => {
                this.actions.getFavouritesFail(jqXhr)
            });
    }
}

export default alt.createActions(FavouritesActions);
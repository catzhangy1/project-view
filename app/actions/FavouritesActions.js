import alt from '../alt';

class FavouritesActions {
    constructor() {
        this.generateActions(
            'getFavouritesSuccess',
            'getFavouritesFail'
        );
    }

    getFavourites() {
        //http://api.diy.org/makers/{maker_name}/projects/{project_id}

        $.ajax({ url: 'https://api.diy.org/makers/neptune/projects/814610/favorites' })
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
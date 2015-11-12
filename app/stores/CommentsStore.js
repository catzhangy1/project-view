import alt from '../alt';
import CommentsActions from '../actions/CommentsActions';

class CommentsStore {
    constructor() {
        this.bindActions(CommentsActions);
        this.comments = [];
        this.size = 0;
    }

    onGetCommentsSuccess(data) {
        this.comments = data.map( function (a) {
                return {"username": a.nickname,
                    "url": a.url,
                    "icon": a.avatar.icon.url}
            }
        );
        this.size = data.length;
    }


    onGetCommentsFail(jqXhr) {
        // Handle multiple response formats, fallback to HTTP status code number.
        toastr.error(jqXhr.responseJSON && jqXhr.responseJSON.message || jqXhr.responseText || jqXhr.statusText);
    }
}

export default alt.createStore(CommentsStore);

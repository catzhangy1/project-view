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
                return {"username": a.raw,
                    "user": a.maker.nickname,
                    "url": a.maker.url,
                    "icon": a.maker.avatar.small.url,
                    "date": a.stamp,
                    "content": a.raw,
                    "id": a.id,
                    "replyId": a.reply}
            }
        );
        console.log(this.comments);
        this.size = data.length;
    }


    onGetCommentsFail(jqXhr) {
        // Handle multiple response formats, fallback to HTTP status code number.
        toastr.error(jqXhr.responseJSON && jqXhr.responseJSON.message || jqXhr.responseText || jqXhr.statusText);
    }

    getElapsed(data) {
        const d = new Date(data);
        return '12 d';
        //return Math.floor((new Date() - d) / (1000 * 60 * 60 * 24));
    }
}

export default alt.createStore(CommentsStore);

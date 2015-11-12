import alt from '../alt';
import CommentsActions from '../actions/CommentsActions';

class CommentsStore {
    constructor() {
        this.bindActions(CommentsActions);
        this.comments = [];
        this.size = 0;
    }

    onGetCommentsSuccess(data) {
        let _this = this;
        this.comments = data.map( function (a) {
                return {
                    "user": a.maker.nickname,
                    "url": a.maker.url,
                    "icon": a.maker.avatar.small.url,
                    "date": _this.getElapsed(a.stamp),
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
        const days =  Math.floor((new Date() - d) / (1000 * 60 * 60 * 24));
        if ( days > 31) {
            return Math.floor(days/ 30) + "mo";
        } else {
            return days + "d";
        }
    }
}

export default alt.createStore(CommentsStore);

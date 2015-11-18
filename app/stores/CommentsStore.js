import alt from '../alt';
import CommentsActions from '../actions/CommentsActions';

class CommentsStore {
    constructor() {
        this.bindActions(CommentsActions);
        this.comments = [];
        this.threadStarters = [];
        this.commentsRaw = [];
        this.size = 0;
        this.currentReplyTo = 0;
        this.currentReplyToUser = '';


    }

    onGetCommentsSuccess(data) {
        let _this = this;

        this.commentsRaw = data.map( function (a) {
                return {
                    "user": a.maker.nickname,
                    "url": a.maker.url,
                    "icon": a.maker.avatar.small.url,
                    "date": _this.getElapsed(a.stamp),
                    "rawDate": a.stamp,
                    "content": a.raw,
                    "id": a.id,
                    "replyId": a.reply}
            }
        );

        this.threadStarters = this.commentsRaw.filter( function(a){
            return a.replyId == 0;
        });
        this.comments = this.threadStarters.map( function(a){
            return _this.commentsManager(a, _this.commentsRaw);
        })
        this.size = data.length;
    }

    commentsManager(obj, data) {
        let commentblock = [];
        commentblock.push([obj]);
        let currentReplyIds = [obj.id];
        let foundAll = false;
        while(!foundAll){
            let newReplyIds = [];
            commentblock.push(data.filter( function (a) {
                var result = currentReplyIds.some( function (o) {
                        return o == a.replyId;
                    });
                if(result) {
                    newReplyIds.push(a.id);
                };
                return result;
            }));
            if(newReplyIds.length > 0){
                currentReplyIds = newReplyIds;
                newReplyIds = [];
            } else {
                foundAll = true;
            }
        }
        commentblock.pop();
        commentblock = commentblock.reduce(function (a, b){
            return a.concat(b);
        });

        return commentblock;

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

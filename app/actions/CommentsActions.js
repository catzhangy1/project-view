import alt from '../alt';

class CommentsActions{
    constructor() {
        this.generateActions(
            'getCommentsSuccess',
            'getCommentsFail',
            'postCommentsFail'
        );
    }

    getComments(userId, projectId) {
        if (!userId || !projectId) {
            return;
        }
        $.ajax({url: `http://api.diy.org/makers/${userId}/projects/${projectId}/comments`})
            .done((data) => {
                this.actions.getCommentsSuccess(data.response);
            })
            .fail((jqXhr) => {
                this.actions.getCommentsFail(jqXhr);
            });
    }

    postComments(userId, projectId, body) {
        if(!userId || !projectId) {
            return;
        }
        $.ajax({url: `http://api.diy.org/makers/${userId}/projects/${projectId}/comments`,
                headers: {'x-diy-api-token': '30b28060b2b06a954c334ad2c92a8d85b58316d9'},
                type: 'POST',
                processData: false,
                contentType: 'application/json',
                data: body})
            .done((data) => {
                toastr.success('DIY', 'Your comment has been posted successfully!');
                this.actions.getComments(userId, projectId);
            })
            .fail((jqXhr) => {
                this.actions.postCommentsFail(jqXhr);
            });
    }
}

export default alt.createActions(CommentsActions);
import alt from '../alt';

class CommentsActions {
    constructor() {
        this.generateActions(
            'getCommentsSuccess',
            'getCommentsFail',
            'getUserInfoSuccess',
            'getUserInfoFail'
        );
    }

    getComments() {
        //http://api.diy.org/makers/{maker_name}/projects/{project_id}

        $.ajax({ url: 'http://api.diy.org/makers/hivetest/projects/566218/comments' })
            .done((data) => {
                console.log(data);
                this.actions.getCommentsSuccess(data.response)
            })
            .fail((jqXhr) => {
                this.actions.getCommentsFail(jqXhr)
            });
    }


    postComments(body) {
        const _this = this;
        $.ajax({ url: 'http://api.diy.org/makers/hivetest/projects/566218/comments',
                headers: {'x-diy-api-token': '30b28060b2b06a954c334ad2c92a8d85b58316d9'},
                type: 'POST',
                processData: false,
                contentType: 'application/json',
                data: body })
            .done((data) => {
                _this.actions.getComments();
            })
            .fail((jqXhr) => {
                this.actions.postCommentsFail(jqXhr);
            });
    }


}

export default alt.createActions(CommentsActions);
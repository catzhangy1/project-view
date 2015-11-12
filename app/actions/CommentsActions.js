import alt from '../alt';

class CommentsActions {
    constructor() {
        this.generateActions(
            'getCommentsSuccess',
            'getCommentsFail'
        );
    }

    getComments() {
        //http://api.diy.org/makers/{maker_name}/projects/{project_id}

        $.ajax({ url: 'https://api.diy.org/makers/neptune/projects/814610/comments' })
            .done((data) => {
                console.log(data);
                this.actions.getCommentsSuccess(data.response)
            })
            .fail((jqXhr) => {
                this.actions.getCommentsFail(jqXhr)
            });
    }
}

export default alt.createActions(CommentsActions);
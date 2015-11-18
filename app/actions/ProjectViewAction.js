import alt from '../alt';

class ProjectViewAction {
    constructor() {
        this.generateActions(
            'getProjectSuccess',
            'getProjectFail'
        );
    }

    getProject(userId, projectId) {
        if(!userId || !projectId) {
            return;
        }
        $.ajax({ url: `http://api.diy.org/makers/${userId}/projects/${projectId}/` })
            .done((data) => {
                console.log(data);
                this.actions.getProjectSuccess(data.response)
            })
            .fail((jqXhr) => {
                this.actions.getProjectFail(jqXhr)
            });
    }
}

export default alt.createActions(ProjectViewAction);
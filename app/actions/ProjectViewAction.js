import alt from '../alt';

class ProjectViewAction {
    constructor() {
        this.generateActions(
            'getProjectSuccess',
            'getProjectFail'
        );
    }

    getProject(userId, projectId, router) {
        if(!userId || !projectId) {
            return;
        }
        let result = true;
        $.ajax({ url: `http://api.diy.org/makers/${userId}/projects/${projectId}/` })
            .done((data) => {
                this.actions.getProjectSuccess(data.response)
            })
            .fail((jqXhr) => {
                this.actions.getProjectFail(jqXhr);
                router.pushState(null, "/");

            });
        return result;
    }
}

export default alt.createActions(ProjectViewAction);
import alt from '../alt';

class ProjectViewAction {
    constructor() {
        this.generateActions(
            'getProjectSuccess',
            'getProjectFail'
        );
    }

    getProject() {
        //http://api.diy.org/makers/{maker_name}/projects/{project_id}

        $.ajax({ url: 'http://api.diy.org/makers/guitarbrain/projects/959892' })
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
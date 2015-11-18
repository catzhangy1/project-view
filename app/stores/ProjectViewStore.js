import alt from '../alt';
import ProjectViewAction from '../actions/ProjectViewAction';

class ProjectViewStore {
    constructor() {
        this.bindActions(ProjectViewAction);
        this.project = {
            username: "",
            iconsrc: "",
            title: "",
            date: "",
            contentType:"",
            contentSrc:""}
    }

    onGetProjectSuccess(data) {
        this.project = {
            username: data.maker.nickname,
            iconsrc: data.maker.avatar.icon.url,
            title: data.title,
            date: this.getDate(data.stamp),
            contentType: data.clips[0].type,
            contentSrc: data.clips[0].assets.web_480.url
        }
    }

    getDate(data) {
        const d = new Date(data);
        const date = (d.toDateString().split(" ")).splice(1);
        return [date[0], " ", date[1], ", ", date[2]].join("");
    }

    onGetProjectFail(jqXhr) {
        // Handle multiple response formats, fallback to HTTP status code number.
        toastr.error(jqXhr.responseJSON && jqXhr.responseJSON.message || jqXhr.responseText || jqXhr.statusText);
    }
}

export default alt.createStore(ProjectViewStore);
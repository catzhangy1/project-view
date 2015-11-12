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

    //const rawDataToPost = (a) => {
    //    return {
    //        title: unescape(a.headline),
    //        body: unescape(a.copy),
    //        teaser: extractHtmlText(unescape(a.abstract)),
    //        published: new Date(a.published * 1000),
    //        authors: _.map(_.values(a.getAuthor), (author) => unescape(author)),
    //        images: _.map(_.values(a.media), cleanMedia),
    //        tags: _.map(_.values(a.tags), cleanTag),
    //        url: unescape(a.getURL),
    //    };
    //};

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
import alt from '../alt';
import ProjectViewAction from '../actions/ProjectViewAction';
import { Router } from 'react-router';

class ProjectViewStore {
    constructor() {
        this.bindActions(ProjectViewAction);
        this.project = {
            username: "",
            url: "",
            iconsrc: "",
            title: "",
            date: "",
            contentType:"",
            contentSrc:""};
        this.loadSuccess = false;
        this.modalIsOpen = false;
    }

    onGetProjectSuccess(data) {
        this.project = {
            username: data.maker.nickname,
            url: data.maker.url,
            iconsrc: data.maker.avatar.icon.url,
            title: data.title,
            date: this.getDate(data.stamp),
            contentType: data.clips[0].type,
            contentSrc: this.getContent(data, data.clips[0].type)
        }
        this.loadSuccess = true;
    }

    onGetProjectFail(q) {
        this.loadSuccess = false;
    }

    getContent(data, type){
        if(type == 'video'){
            return [data.clips[0].assets.web_480.url, data.clips[0].assets.video_mp4.url];
        } else{
            return data.clips[0].assets.web_480.url; //all assets should have web_480 preview
        }
    }

    getDate(data) {
        const d = new Date(data);
        const date = (d.toDateString().split(" ")).splice(1);
        return [date[0], " ", date[1], ", ", date[2]].join("");
    }
}

export default alt.createStore(ProjectViewStore);
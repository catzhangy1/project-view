import alt from '../alt';
import FavouritesActions from '../actions/FavouritesActions';

class FavouritesStore {
    constructor() {
        this.bindActions(FavouritesActions);
        this.favourites = [];
        this.size = 0;
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

    onGetFavouritesSuccess(data) {
    //    const articles = responseData[0].articles;
    //    const articlesMap = _.object(
    //        _.map(_.values(articles), (a) => [a.uid, rawDataToPost(a)]));
    //    postsCursor.merge(articlesMap);
    //    sectionIdsCursor.merge({[section]: _.keys(articlesMap)});
    //})
        this.favourites = data.map( function (a) {
        return {"username": a.nickname,
                "url": a.url,
                "icon": a.avatar.icon.url}
            }
        );
        this.size = data.length;
        console.log(this.favourites);
    }

    getDate(data) {
        const d = new Date(data);
        const date = (d.toDateString().split(" ")).splice(1);
        return [date[0], " ", date[1], ", ", date[2]].join("");
    }

    onGetTopCharactersFail(jqXhr) {
        // Handle multiple response formats, fallback to HTTP status code number.
        toastr.error(jqXhr.responseJSON && jqXhr.responseJSON.message || jqXhr.responseText || jqXhr.statusText);
    }
}

export default alt.createStore(FavouritesStore);
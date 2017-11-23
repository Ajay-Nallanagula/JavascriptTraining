var youtubeApi = (function youtube() {

    var url_search, key, url_videos;
    url_search = "https://www.googleapis.com/youtube/v3/search" 
    key = "AIzaSyCsVku6Yu-FIsQ2SlrZbYNQ58n_drZBMtM"
    //key1 = "AIzaSyA0MnWlMrelKfjezM_rRB4wp6Ptb98lxkg"; 
    url_videos = "https://www.googleapis.com/youtube/v3/videos";

    return {
        search: function youtubeSearch(searchText,nextPageToken,previousPageToken) {
            var token;
            var url =`${url_search}?part=snippet&maxResults=50&q=${searchText}&key=${key}&type=video`;
            if(nextPageToken||previousPageToken){
                token =nextPageToken||previousPageToken;
                url = url+"&pageToken="+token;
            }
            return fetch(url).then(function (response) {
                return response.json();
            });
        },

        videos: function videosList(videoIds) {
            var url = `${url_videos}?id=${videoIds}&part=snippet,statistics&key=${key}`;
            return fetch(url).then(function (response) {
                return response.json();
            });
        }
    }
}());
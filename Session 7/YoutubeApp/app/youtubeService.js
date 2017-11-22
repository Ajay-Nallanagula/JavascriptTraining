var youtubeApi = (function youtube() {

    // function makeApiCall(url) {
    //     return fetch(url, function (response) {
    //         return response.json();
    //     });
    // }
    var url_search, key, url_videos;
    url_search = "https://www.googleapis.com/youtube/v3/search" 
    key = "AIzaSyCsVku6Yu-FIsQ2SlrZbYNQ58n_drZBMtM"
    //key1 = "AIzaSyA0MnWlMrelKfjezM_rRB4wp6Ptb98lxkg"; 
    url_videos = "https://www.googleapis.com/youtube/v3/videos";

    return {
        //sayHi:function(){ console.log('sayHi');}
        search: function youtubeSearch(searchText) {
            var url = `${url_search}?part=snippet&maxResults=15&q=${searchText}&key=${key}&type=video`;
           // return makeApiCall(url);
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
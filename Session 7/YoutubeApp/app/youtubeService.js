var youtubeApi = (function youtube(appConstants) {
    
    return {
        search: function youtubeSearch(searchText,nextPageToken,previousPageToken) {
            var token,url;
            url =`${appConstants.url_search}?part=snippet&maxResults=50&q=${searchText}&key=${appConstants.key}&type=video`;
            if(nextPageToken||previousPageToken){
                token =nextPageToken||previousPageToken;
                url = url+"&pageToken="+token;
            }
            return fetch(url).then(function (response) {
                return response.json();
            });
        },

        videos: function videosList(videoIds) {
            var url;
            url = `${appConstants.url_videos}?id=${videoIds}&part=snippet,statistics&key=${appConstants.key}`;
            return fetch(url).then(function (response) {
                return response.json();
            });
        }
    }
}(appConstants));
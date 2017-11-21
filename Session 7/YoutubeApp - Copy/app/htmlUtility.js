var htmlUtility = (function utility(youtubeApi) {
    var createHtmlElements, setAttributes, btnSearchItemClick, extractPromise,videoIdsList;

    createHtmlElements = function createElements(elemType, attrObj) {
        var element = document.createElement(elemType);
        setAttributes(attrObj, element);
        return element;
    };

    setAttributes = function setHtmlAttributes(attrObj, element) {
        for (var item in attrObj) {
            element.setAttribute(item, attrObj[item]);
        }
    };

    btnSearchItemClick = function btnSearchClick(searchTxt) {
        return (function extractText() {
            if (searchTxt.value) {
                return youtubeApi.search(searchTxt.value).then(function (resp) {
                    return resp["items"];
                });
            }
        })();
    };

    videoIdsList = function videos(videoIds) {
        return youtubeApi.videos(videoIds).then(function (resp) {
            return resp;
        });
    };

    return {
        createHtmlElements: createHtmlElements,
        btnSearchItemClick: btnSearchItemClick,
        videoIdsList: videoIdsList
    };

})(youtubeApi);
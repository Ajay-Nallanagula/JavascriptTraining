var htmlUtility = (function utility(youtubeApi) {
    var createHtmlElements, setAttributes, btnSearchItemClick, videoIdsList,paginationCal;

    createHtmlElements = function createElements(elemType, attrObj) {
        var element = document.createElement(elemType);
        if (attrObj) {
            setAttributes(attrObj, element);
        }
        return element;
    };

    setAttributes = function setHtmlAttributes(attrObj, element) {
        for (var item in attrObj) {
            element.setAttribute(item, attrObj[item]);
        }
    };

    btnSearchItemClick = function btnSearchClick(searchTxt, nextPageToken, previousPageToken) {
        return (function extractText() {
            if (searchTxt.value) {
                return youtubeApi.search(searchTxt.value, nextPageToken, previousPageToken).then(function (resp) {
                    console.log(resp);
                    return {
                        "searchItems": resp["items"],
                        "nextPageToken": resp.nextPageToken,
                        "previousPageToken": resp.prevPageToken
                    };
                });
            }
        })();
    };

    videoIdsList = function videos(videoIds) {
        return youtubeApi.videos(videoIds).then(function (resp) {
            return resp;
        });
    };

  paginationCal = function paginationLogic(){
    var noOfPages = Math.floor(itemsArray.length / pageSize);
    var remainingItems = itemsArray.length % pageSize;
    noOfPages = (itemsArray.length % pageSize) ? noOfPages + 1 : noOfPages;
    return noOfPages;
  }
    return {
        createHtmlElements: createHtmlElements,
        btnSearchItemClick: btnSearchItemClick,
        videoIdsList: videoIdsList,
        paginationCal: paginationCal
    };

})(youtubeApi);

/*
<div class="container">
  <h2>Pagination</h2>
  <p>The .pagination class provides pagination links:</p>                  
  <ul class="pagination">
    <li><a href="#">1</a></li>
    <li><a href="#">2</a></li>
    <li><a href="#">3</a></li>
    <li><a href="#">4</a></li>
    <li><a href="#">5</a></li>
  </ul>
</div>

*/
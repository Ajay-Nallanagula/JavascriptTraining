var htmlUtility = (function utility(youtubeApi) {
    var createHtmlElements, setAttributes, btnSearchItemClick;

    createHtmlElements = function createElements(elemType, attrObj) {
        var element = document.createElement(elemType);
        setAttributes(attrObj, element);
        return element;
    }

    setAttributes = function setHtmlAttributes(attrObj, element) {
        for (var item in attrObj) {
            element.setAttribute(item, attrObj[item]);
        }
    }

    btnSearchItemClick = function btnSearchClick(searchTxt) {
        return function extractText() {
            if (searchTxt.value) {
                //alert(searchTxt.value);
            //Call youtubeApi here
            }
        }
        //ES6 fetch() feature https://scotch.io/tutorials/how-to-use-the-javascript-fetch-api-to-get-data
    }
    return {
        createHtmlElements: createHtmlElements,
        btnSearchItemClick: btnSearchItemClick
    };

})(youtubeApi);
//DON'T POLLUTE GLOBAL SCOPE
(function (appConstants) {

    //Textbox events start
    function txtChange(event) {
        isSearchTextChanged = true;
    }
    //Textbox events end

    //Pagination Related start
    function fetchNext50html() {
        if(document.querySelector("#txtSearch").value.length<1){
                   return false;
        }
        var paneldiv = htmlUtility.createHtmlElements('div', {
            'class': 'panelFoot'
        });
        var rowdiv = htmlUtility.createHtmlElements('div', {
            'class': 'row'
        });
        var coldiv = htmlUtility.createHtmlElements('div', {
            'class': 'col col-xs-4'
        });
        var coldivin = htmlUtility.createHtmlElements('div', {
            'class': 'col col-xs-8'
        });
        var ul = htmlUtility.createHtmlElements('ul', {
            'class': 'pagination hidden-xs pull-right'
        });
        var li = htmlUtility.createHtmlElements('li');
        var achr = htmlUtility.createHtmlElements('a', {
            'href': '#',
            'id': 'lnkNextPage'
        });
        achr.textContent = 'next';
        li.append(achr);
        ul.append(li);
        achr = htmlUtility.createHtmlElements('a', {
            'href': '#',
            'id': 'lnkPrevPage'
        });
        achr.textContent = 'prev';
        li.append(achr);
        ul.append(li);
        coldivin.appendChild(ul);
        paneldiv.appendChild(coldiv);
        paneldiv.appendChild(coldivin);
        return paneldiv;
    }

    function buildPagination() {
        var noOfPages, pagediv;
        if(document.querySelector("#txtSearch").value.length<1){
            return false;
 }
        pagediv = htmlUtility.createHtmlElements('div', {
            'class': 'container pagePadding',
            'id':'divfootpanel'
        });
        noOfPages = htmlUtility.paginationCal(itemsArray.length, appConstants.pageSize);

        pagediv.appendChild(buildPageStrip(noOfPages));
        return pagediv;
    }

    function buildPageStrip(noOfPages) {
        var unorderList, j;
        unorderList = htmlUtility.createHtmlElements('ul', {
            'class': 'pagination'
        });
        for (j = 1; j <= noOfPages; j++) {
            var li = htmlUtility.createHtmlElements('li');
            var lnk = htmlUtility.createHtmlElements('a', {
                "href": "#",
            });
            lnk.textContent = j;
            lnk.addEventListener("click", function () {
                var pageNo = parseInt(this.text);
                var endIndex = pageNo * appConstants.pageSize;
                var startIndex = endIndex - appConstants.pageSize;

                document.getElementById('dispVideos').innerHTML = '';
                displayVideosHorizontally(itemsArray.slice(startIndex, endIndex));
            })
            li.appendChild(lnk);
            unorderList.appendChild(li);
        }
        return unorderList;
    }

    function bindPaginationEvents(nextPageToken, previousPageToken) {
        var nextLnk, prevLnk, isNextStrip;

        isNextStrip = true;
        nextLnk = document.getElementById('lnkNextPage');
        prevLnk = document.getElementById('lnkPrevPage');

        nextLnk.addEventListener('click', function () {
            manipulateShowResults(isNextStrip);
        });

        prevLnk.addEventListener('click', function () {
            manipulateShowResults(isNextStrip);
        });
    }

    function videoMetadata(item) {
        var subdiv, divmeta;

        subdiv = document.createElement('div');
        divmeta = htmlUtility.createHtmlElements('div');

        divmeta.insertAdjacentHTML('beforeend', `<div><b>Published On: </b>${item.snippet.publishedAt}</div>`);
        subdiv.appendChild(divmeta);

        divmeta.insertAdjacentHTML('beforeend', `<div><b>ViewCount: </b>${item.statistics.viewCount}</div>`);
        subdiv.appendChild(divmeta);

        divmeta.insertAdjacentHTML('beforeend', `<div><b>Description: </b>${item.snippet.title}</div>`);
        subdiv.appendChild(divmeta);

        return subdiv;
    }

    function displayVideosHorizontally(array, videoDiv) {
        var tableRow, iframe, frameObj, td, table, tableBody, fetchNexthtml;

        tableRow = document.createElement("tr");
        nextSetdiv.innerHTML = '';

        frameObj = {
            "width": "420",
            "height": "345",
            "allowfullscreen": "allowfullscreen"
        };
        array.forEach(function (item) {
            td = document.createElement('td');
            frameObj.src = `https://www.youtube.com/embed/${item.id}`;
            iframe = htmlUtility.createHtmlElements('iframe', frameObj);
            td.appendChild(iframe);
            td.appendChild(videoMetadata(item));
            tableRow.appendChild(td);
        });

        table = htmlUtility.createHtmlElements('table', {
            "class": "tableSpacing"
        });

        tableBody = document.createElement('tbody');
        tableBody.appendChild(tableRow);
        table.appendChild(tableBody);
        dispVideos.appendChild(table);

        //Todo Need to fix this logic , to fetch next 50
        fetchNexthtml = fetchNext50html();
        nextSetdiv.appendChild(fetchNexthtml);
        bindPaginationEvents(nextPageToken, previousPageToken);
    }
    //Pagination Related End

    //Button click events start
    function btnClick() { //event, nextPageToken, previousPageToken
        if (document.querySelector("#txtSearch").value.length>0) {
            if(isSearchTextChanged){
            manipulateShowResults();
            isSearchTextChanged = false;
            }
        }
        else{
               document.querySelector("#divfootpanel").innerHTML='';
               dispVideos.innerHTML ='';
               nextSetdiv.innerHTML ='';
               isPageStripCreated=false;
        }
    }

    function manipulateShowResults(isNextStrip) {
        var result, newsearchItem;
        newsearchItem = document.querySelector("#txtSearch");
       // if(newsearchItem.value.length>0){
        document.getElementById('dispVideos').innerHTML = '';
        result = isNextStrip ? htmlUtility.btnSearchItemClick(newsearchItem, nextPageToken, previousPageToken) : htmlUtility.btnSearchItemClick(newsearchItem);
        return result.then(function (resp) {
            searchVideoInfo = '';
            resp.searchItems.forEach(function (respItem) {
                searchVideoInfo = `${searchVideoInfo}${respItem.id.videoId},`; //additional comma to be trimmed
            });
            nextPageToken = resp.nextPageToken || null;
            previousPageToken = resp.previousPageToken || null;
            //Api to videos Minimal info about video is title with link on youtube, preview, description, author, published date, count of views
            htmlUtility.videoIdsList(searchVideoInfo.slice(0, searchVideoInfo.length - 1)).then(function (resp) {
                itemsArray = resp.items;
                displayVideosHorizontally(itemsArray.slice(0, appConstants.pageSize), videoDiv);
                if (!isPageStripCreated) {
                    var paginate = buildPagination(); 
                    videoDiv.appendChild(paginate);
                    isPageStripCreated = true;
                }
            });
        });
    //}
    // else{
    //     videoDiv.innerHTML ='';
    // }
}
    //Button click events end

    //Variable declaration
    var body, div, innerdiv, isSearchTextChanged, searchtxt, attrObj, span, btnSearch, searchVideoInfo, videosList, dispVideos,
        nextSetdiv, videoItems, nextPageToken, previousPageToken, isPageStripCreated, itemsArray;

    isPageStripCreated = false;
    isSearchTextChanged = false;

    //accessing body element
    body = document.getElementsByTagName('body');

    //Outer div creation
    attrObj = {
        'class': 'container',
    };
    div = htmlUtility.createHtmlElements('div', attrObj);

    //Innerdiv creation
    attrObj = {
        'class': 'input-group'
    };
    innerdiv = htmlUtility.createHtmlElements('div', attrObj);

    //Search Text box creation 
    attrObj = {
        'type': 'text',
        'class': 'form-control',
        'placeholder': 'Search for...',
        'id': 'txtSearch'
    };
    searchtxt = htmlUtility.createHtmlElements('input', attrObj);

    //create span
    attrObj = {
        'class': 'input-group-btn'
    };
    span = htmlUtility.createHtmlElements('span', attrObj);

    //create button
    attrObj = {
        'id': 'btnSearch',
        'type': 'button',
        'class': 'btn btn-primary btn-bgk',
    }
    btnSearch = htmlUtility.createHtmlElements('button', attrObj);
    btnSearch.innerHTML = 'Search';


    //append section
    span.appendChild(btnSearch);
    innerdiv.appendChild(searchtxt);
    innerdiv.appendChild(span);
    div.appendChild(innerdiv);
    var videoDiv = htmlUtility.createHtmlElements('div', {
        "id": "player"
    });
    dispVideos = htmlUtility.createHtmlElements('div', {
        "id": 'dispVideos'
    });
    nextSetdiv = htmlUtility.createHtmlElements('div', {
        "id": 'nextSetdiv'
    });
    videoDiv.appendChild(dispVideos);
    videoDiv.appendChild(nextSetdiv);
    body[0].appendChild(div);
    body[0].appendChild(videoDiv);

    document.querySelector("#btnSearch").addEventListener("click", btnClick);
    document.querySelector("#txtSearch").addEventListener("change", txtChange);
    document.querySelector("#txtSearch").addEventListener("keydown",function(e){
        if(e.keyCode==13 ||e.which==13){
            btnClick();
        }
    });
})(appConstants);
//DON'T POLLUTE GLOBAL SCOPE
(function () {
    //Variable declaration
    var body, div, innerdiv, isSearchTextChanged, searchtxt, attrObj, span, btnSearch, searchVideoInfo, videosList, dispVideos,
        nextSetdiv, videoItems, nextPageToken, previousPageToken, isPageStripCreated, itemsArray, pageSize;

    isPageStripCreated = false;
    isSearchTextChanged = false;
    pageSize = 4;

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
    document.querySelector("#txtSearch").addEventListener("change", txtBlur);

    function fetchNext50html() {
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
        return str;
    }

    function txtBlur(event) {
        isSearchTextChanged = true;
    }

    //Pagination Related start
    function buildPagination() {
        var pagediv = htmlUtility.createHtmlElements('div', {
            'class': 'container pagePadding'
        });
        var noOfPages = Math.floor(itemsArray.length / pageSize);
        var remainingItems = itemsArray.length % pageSize;
        noOfPages = (itemsArray.length % pageSize) ? noOfPages + 1 : noOfPages;
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
                var endIndex = pageNo * pageSize;
                var startIndex = endIndex - pageSize;

                document.getElementById('dispVideos').innerHTML = '';
                displayVideosHorizontally(itemsArray.slice(startIndex, endIndex));
            })
            li.appendChild(lnk);
            unorderList.appendChild(li);
        }
        return unorderList;
    }

    function bindPaginationEvents(nextPageToken, previousPageToken) {
        var nextLnk, prevLnk;

        nextLnk = document.getElementById('lnkNextPage');
        prevLnk = document.getElementById('lnkPrevPage');

        nextLnk.addEventListener('click', function () {
            manipulateShowResults(true);
        });

        prevLnk.addEventListener('click', function () {
            manipulateShowResults(true);
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


    function btnClick(event, nextPageToken, previousPageToken) {
        if (isSearchTextChanged) {
            manipulateShowResults();
            isSearchTextChanged = false;
        }
    }

    function manipulateShowResults(isNextStrip) { //nextPageToken=null, previousPageToken=null, 
        var result, newsearchItem;
        newsearchItem = document.querySelector("#txtSearch");
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
                displayVideosHorizontally(itemsArray.slice(0, pageSize), videoDiv);
                if (!isPageStripCreated) {
                    var paginate = buildPagination(); //need to change these array
                    videoDiv.appendChild(paginate);
                    isPageStripCreated = true;
                }
            });
        });
    }
})();
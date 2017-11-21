//DON'T POLLUTE GLOBAL SCOPE
(function () {
    //Variable declaration
    var body, div, innerdiv, searchtxt, attrObj, span, btnSearch, searchVideoInfo, videosList;

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
    var videoDiv = htmlUtility.createHtmlElements('div',{"id":"player"});
    body[0].appendChild(div);
    body[0].appendChild(videoDiv);

    document.querySelector("#btnSearch").addEventListener("click", btnClick);

    function btnClick() {
        document.getElementById('player').innerHTML='';
        var result = htmlUtility.btnSearchItemClick(document.querySelector("#txtSearch"));

        return result.then(function (resp) {
            searchVideoInfo = '';
            for (var i = 0; i < resp.length; i++) {
                searchVideoInfo = `${searchVideoInfo}${resp[i].id.videoId},`;
            }

            //Api to videos Minimal info about video is title with link on youtube, preview, description, author, published date, count of views
            htmlUtility.videoIdsList(searchVideoInfo.slice(0, searchVideoInfo.length - 1)).then(function (resp) {
                for (var k = 0; k < resp.items.length; k++) {
                    var frameObj = {
                        "src": `https://www.youtube.com/embed/${resp.items[k].id}`,
                        "width": "420",
                        "height": "345"
                    };
                    var iframe = htmlUtility.createHtmlElements('iframe', frameObj);
                    var subdiv = document.createElement('div');
                    subdiv.innerHTML =`<div><b>Published On: </b>${resp.items[k].snippet.publishedAt}</div>
                                       <div><b>ViewCount: </b>${resp.items[k].statistics.viewCount}</div>
                                       <div><b>Description: </b>${resp.items[k].snippet.description}</div>`;
                    videoDiv.appendChild(iframe);
                    videoDiv.appendChild(subdiv);
                }
            });
        });
    }



})();
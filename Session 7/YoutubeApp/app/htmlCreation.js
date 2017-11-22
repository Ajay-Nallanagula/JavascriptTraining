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
    var videoDiv = htmlUtility.createHtmlElements('div', {
        "id": "player"
    });
    body[0].appendChild(div);
    body[0].appendChild(videoDiv);

    document.querySelector("#btnSearch").addEventListener("click", btnClick);

    function pagination() {
       var str =  `<div class="panelFoot">
        <div class="row">
          <div class="col col-xs-4">Page 1 of 5</div>
          <div class="col col-xs-8">
            <ul class="pagination hidden-xs pull-right">
              <li><a href="#">1</a></li>
              <li><a href="#">2</a></li>
              <li><a href="#">3</a></li>
              <li><a href="#">4</a></li>
              <li><a href="#">5</a></li>
            </ul>
            <ul class="pagination visible-xs pull-right">
                <li><a href="#">«</a></li>
                <li><a href="#">»</a></li>
            </ul>
          </div>
        </div>
      </div>`;
    
    return str;
    }




    function btnClick() {
        document.getElementById('player').innerHTML = '';
        var result = htmlUtility.btnSearchItemClick(document.querySelector("#txtSearch"));

        return result.then(function (resp) {
            searchVideoInfo = '';
            resp.forEach(function (respItem) {
                searchVideoInfo = `${searchVideoInfo}${respItem.id.videoId},`; //additional comma to be trimmed
            });

            //Api to videos Minimal info about video is title with link on youtube, preview, description, author, published date, count of views
            htmlUtility.videoIdsList(searchVideoInfo.slice(0, searchVideoInfo.length - 1)).then(function (resp) {
                   var tableRow = document.createElement("tr");

                    resp.items.forEach(function (item) {
                        // console.log(item);
                        var td = document.createElement('td');
                        var frameObj = {
                            "src": `https://www.youtube.com/embed/${item.id}`,
                            "width": "420",
                            "height": "345",
                            "allowfullscreen": "allowfullscreen"
                        };
                        var iframe = htmlUtility.createHtmlElements('iframe', frameObj);
                        var subdiv = document.createElement('div');
                        subdiv.innerHTML = `<div><b>Published On: </b>${item.snippet.publishedAt}</div>
                                       <div><b>ViewCount: </b>${item.statistics.viewCount}</div>
                                        <div><b>Description: </b>${item.snippet.title}</div>`;

                        td.appendChild(iframe);
                        td.appendChild(subdiv);
                        tableRow.appendChild(td);
                    });
                    var table = htmlUtility.createHtmlElements('table',{"class":"tableSpacing"});
                    var tableBody = document.createElement('tbody');
                    tableBody.appendChild(tableRow);
                    table.appendChild(tableBody);
                    videoDiv.appendChild(table);
                    var paginate = pagination();
                    videoDiv.insertAdjacentHTML('beforeend', paginate);
            });
        });
    }
})();
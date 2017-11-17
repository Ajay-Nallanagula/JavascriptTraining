//DON'T POLLUTE GLOBAL SCOPE
(function(){
//Variable declaration
var body, div, innerdiv, searchtxt, attrObj, span, btnSearch;

//accessing body element
body = document.getElementsByTagName('body');

//Outer div creation
attrObj = {     'class': 'container' };
div = htmlUtility.createHtmlElements('div',attrObj);

//Innerdiv creation
attrObj = {    'class': 'input-group'};
innerdiv = htmlUtility.createHtmlElements('div',attrObj);

//Search Text box creation 
attrObj = {'type': 'text','class': 'form-control','placeholder': 'Search for...','id':'txtSearch'};
searchtxt = htmlUtility.createHtmlElements('input',attrObj);

//create span
attrObj = {'class': 'input-group-btn'};
span = htmlUtility.createHtmlElements('span',attrObj);

//create button
attrObj = {
    'id': 'btnSearch',
    'type': 'button',
    'class': 'btn btn-primary btn-bgk',
}
btnSearch = htmlUtility.createHtmlElements('button',attrObj);
btnSearch.innerHTML = 'Search';

//append section
span.appendChild(btnSearch);
innerdiv.appendChild(searchtxt);
innerdiv.appendChild(span);
div.appendChild(innerdiv);
body[0].appendChild(div);

document.querySelector("#btnSearch").addEventListener("click",htmlUtility.btnSearchItemClick(document.querySelector("#txtSearch")));
})();


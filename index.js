function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  var rankedListItems = document.querySelector("ul.ranked-list li");
  for (var i = 0; i < rankedListItems.length; i++){
    rankedListItems[i].innerHtml = rankedListItems[i].innerHtml.parseInt() + n;
  }
}
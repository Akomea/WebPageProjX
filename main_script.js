function displayPhrase(){
  var article = document.getElementById('dailyPhrase');
  article.innerHTML = getRandomPhrase();
}

function getRandomPhrase(){
  var i = Math.floor(Math.random() * quotes.length);
  console.log(i);
  return quotes[i].content;
}

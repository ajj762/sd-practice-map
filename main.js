"use strict";

var data = [{"path_id":"Dick_Knecht","name":"Dick Knecht","image":"xxx.jpg","link":"https://www.columbiamissourian.com/","audio":"https://cpa.ds.npr.org/s237/audio/2022/05/take-a-moment-5-4-22.mp3"},
{"path_id":"Rob_Oliver","name":"Rob Oliver","image":"xxx.jpg","link":"https://www.columbiamissourian.com/","audio":"https://cpa.ds.npr.org/s237/audio/2022/05/take-a-moment-5-4-22.mp3"},
{"path_id":"Masters_family","name":"Masters family","image":"xxx.jpg","link":"https://www.columbiamissourian.com/","audio":"https://cpa.ds.npr.org/s237/audio/2022/05/take-a-moment-5-4-22.mp3"},
{"path_id":"Sharon_Weber1","name":"Sharon Weber","image":"xxx.jpg","link":"https://www.columbiamissourian.com/","audio":"https://cpa.ds.npr.org/s237/audio/2022/05/take-a-moment-5-4-22.mp3"},
{"path_id":"Darrel_Heimes","name":"Darrel Heimes","image":"xxx.jpg","link":"https://www.columbiamissourian.com/","audio":"https://cpa.ds.npr.org/s237/audio/2022/05/take-a-moment-5-4-22.mp3"},
{"path_id":"Delores_Allen","name":"Delores Allen","image":"xxx.jpg","link":"https://www.columbiamissourian.com/","audio":"https://cpa.ds.npr.org/s237/audio/2022/05/take-a-moment-5-4-22.mp3"},
{"path_id":"Sharon_Weber2","name":"Sharon Weber","image":"xxx.jpg","link":"https://www.columbiamissourian.com/","audio":"https://cpa.ds.npr.org/s237/audio/2022/05/take-a-moment-5-4-22.mp3"},
{"path_id":"Steve_Paula","name":"Steve Paula","image":"xxx.jpg","link":"https://www.columbiamissourian.com/","audio":"https://cpa.ds.npr.org/s237/audio/2022/05/take-a-moment-5-4-22.mp3"},
{"path_id":"Warren_Nelson","name":"Warren Nelson","image":"xxx.jpg","link":"https://www.columbiamissourian.com/","audio":"https://cpa.ds.npr.org/s237/audio/2022/05/take-a-moment-5-4-22.mp3"}]


var interviews = document.getElementById('points').getElementsByTagName('path');

console.log(points);

var textbox = document.getElementById("textbox");

console.log(textbox);

for (var i = 0; i<interviews.length; i++) {

  for (var k = 0; k<data.length; k++) {
  if (interviews[i].id === data[k].path_id) {
    console.log(data[k].path_id);
  var person = interviews[i];
  person.addEventListener("click", function() {

for (var j = 0; j<data.length; j++) {
    if (this.id === data[j].path_id) {
    textbox.innerHTML = '<h3>' + data[j].name + '</h3>' +
  	'<img src="' + data[j].image + '" alt=""/>' +
  	'<p><a href="' + data[j].link + '">More information about ' + data[j].name + '</a></p>' +
  	'<audio controls>	<source src="' + data[j].audio + '" type="audio/mpeg"></audio>'

}
}

  });
}
}
}

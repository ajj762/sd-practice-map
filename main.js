"use strict";

var data = [{"path_id":"Dick_Knecht","name":"Dick Knecht","image":"knecht.jpg","link":"https://listen.sdpb.org/weather/2022-03-02/condo-owner-recalls-72-flood-and-pretty-soon-they-wouldnt-scream-anymore","audio":"https://cpa.ds.npr.org/s237/audio/2022/05/take-a-moment-5-4-22.mp3"},
{"path_id":"Rob_Oliver","name":"Rob Oliver","image":"oliver.jpg","link":"https://listen.sdpb.org/arts-life/2022-04-13/50-years-ago-rapid-city-couple-reunited-after-harrowing-flood-ordeal","audio":"https://cpa.ds.npr.org/s237/audio/2022/05/take-a-moment-5-4-22.mp3"},
{"path_id":"Masters_family","name":"Masters family","image":"masters2.jpg","link":"https://listen.sdpb.org/arts-life/2022-03-16/mother-who-lost-children-in-flood-i-dont-think-you-ever-get-over-it-ever-ever-ever","audio":"https://cpa.ds.npr.org/s237/audio/2022/05/take-a-moment-5-4-22.mp3"},
{"path_id":"Sharon_Weber1","name":"Kay Schriever","image":"schriever2.jpg","link":"https://listen.sdpb.org/arts-life/2022-02-23/we-all-shouldve-been-in-therapy-recalling-the-black-hills-flood-50-years-later","audio":"https://cpa.ds.npr.org/s237/audio/2022/05/take-a-moment-5-4-22.mp3"},
{"path_id":"Darrel_Heimes","name":"Darrel Heimes","image":"heimes2.jpg","link":"https://listen.sdpb.org/weather/2022-03-30/50-years-after-flood-guard-soldier-still-haunted-by-recovery-mission","audio":"https://cpa.ds.npr.org/s237/audio/2022/05/take-a-moment-5-4-22.mp3"},
{"path_id":"Delores_Allen","name":"Delores Allen","image":"allen.jpg","link":"https://www.columbiamissourian.com/","audio":"https://cpa.ds.npr.org/s237/audio/2022/05/take-a-moment-5-4-22.mp3"},
{"path_id":"Sharon_Weber2","name":"Sharon Weber","image":"weber.jpg","link":"https://www.columbiamissourian.com/","audio":"https://cpa.ds.npr.org/s237/audio/2022/05/take-a-moment-5-4-22.mp3"},
{"path_id":"Steve_Paula","name":"Steve Paula","image":"xxx.jpg","link":"https://www.columbiamissourian.com/","audio":"https://cpa.ds.npr.org/s237/audio/2022/05/take-a-moment-5-4-22.mp3"},
{"path_id":"Warren_Nelson","name":"Warren Nelson","image":"nelson2.jpg","link":"https://listen.sdpb.org/arts-life/2022-02-09/warren-nelson-remembers-the-black-hills-flood-of-1972","audio":"https://cpa.ds.npr.org/s237/audio/2022/05/take-a-moment-5-4-22.mp3"},
{"path_id":"Tom_Haggerty","name":"Tom Haggerty","image":"haggerty.jpg","text":"“While the water was running straight back down behind our house, it was very eerie because you could hear people screaming for help as they floated by but I couldn't see you. I mean, it was so dark. It was. You couldn't see anything past the length of your arm. Occasionally there'll be lightning strikes but even that you couldn't see because the clouds were so thick.”","link":"https://listen.sdpb.org/arts-life/2022-04-27/survivor-recalls-1972-black-hills-flood","audio":"haggerty.wav"}];


var interviews = document.getElementById('points').getElementsByTagName('path');

var textbox = document.getElementById("textbox");

for (var i = 0; i<interviews.length; i++) {

for (var k = 0; k<data.length; k++) {
  if (interviews[i].id === data[k].path_id) {
  var person = interviews[i];
  person.addEventListener("click", function() {

for (var j = 0; j<data.length; j++) {
    if (this.id === data[j].path_id) {
    textbox.innerHTML = '<div class="flex-pic">' +
  	'<img src="' + data[j].image + '" alt=""/>' + '</div>' +
    '<div class="flex-text">' + '<h3>' + data[j].name + '</h3>' +
    '<p class="quote">' + data[j].text + '</p>' +
  	'<p><a href="' + data[j].link + '">More information about ' + data[j].name + '</a></p>' +
  	'<audio controls>	<source src="' + data[j].audio + '" type="audio/mpeg"></audio>' + '</div>';

              }
            }
          });
        }
      }
    }

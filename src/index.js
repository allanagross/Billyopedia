const onReady = (data) => {
  // YOUR CODE BELOW HERE //
  //CSS stylings

  $('.heading').css('color', 'black').css('font-size', '16');
            
  $('nav').css('font-size', '35px')
          .css('font-family', 'Avenir')
          .css('text-align', 'right')
          .css('text-outline', 'black');
          
  $('nav').css('border-radius', '25px')
          .css('font-family', 'Avenir')
          .css('margin-bottom', '10px')
          .css('background-position', 'center');
          
  $('main').css('border-radius', '15px')
  .css('font-family', 'Avenir');
  
  $('#section-bio')
  .css('font-family', 'Avenir')
  .css('border-radius', '2px')
  .css('font-size', '12px');

  $('#section-praise')
  .css('font-family', 'Avenir')
  .css('border-radius', '2px')
  .css('font-size', '12px');

  $('#section-quotes')
  .css('font-family', 'Avenir')
  .css('border-radius', '2px')
  .css('font-size', '12px');

  $('#list-top-rated').css('list-style', 'none');
  $('#section-bio p:last-child').remove();

//TODO 4


const topRated = data.discography.topRated;                             //topRated is build to access the object/key of topRated from Json
 
//Used map to return the top-rated recordings
const topRatedListItems = _.map(topRated, (recording) => {
return $('<li>').addClass('top-rated')                                  // returned list with 'top-rated' class
.attr('art', recording.art)                                             
.append($('<div>').addClass('top-rated-title').text(recording.title)
.css('font-size', '12px'))


});

//TODO 4.2 - append topRatedListItems to the unordered list at #list-top-rated

$('#list-top-rated').append(topRatedListItems).css('padding', 5);
 
//TODO 5.A - create and add section-recording below top-rated recordings section in the sidebar 
  
  let $secRecordings = $('<section>')                                   // create secRecordings
  .attr("id", 'section-recordings')                                     // id : section-recordings 
  .addClass("recordings")                                               // TODO 5.C addClass : recordings
  .appendTo($('#sidebar'));


 //TODO 5.B 

 let $otherRecordingsList = $('<ul>')                                   // ul
  .attr('id', 'list-recordings')                                        // id = 'list-recordings
  .addClass("list-recordings")                                          // 5.C add list-recordings class
  .appendTo('#section-recordings');                                     // append to the section-recordings from 5.A
 
 
 //TODO 5.D

 const otherRecordings = data.discography.recordings;                   //otherRecordings lets you access teh d.d.recordings from json
 
 let otherRecordsList = _.map(otherRecordings, (recording) => {         //use Map to create <li> and add title, art, and recording
  return $('<li>')
  .addClass('recording')
  .attr('title', recording.title)
  .attr('art', recording.art)
  .text(recording.title);
 }); 

 $('#list-recordings').append(otherRecordsList)
 .css('font-size', '12px'); 


 //TODO 6

 //Top Rated Album Container 
  $('#section-top-rated').prepend($('<div>').attr('id', 'image-container-top-rated').attr('class', 'image-container'));
 //By default create the first recording -- voice in the night.jpg
  $('#image-container-top-rated').prepend($('<img>').attr('src', 'images/album/voice-in-the-night.jpg').attr('class', 'image').attr('id', 'top-records-image'));
  
 //section-recordings

  $('#section-recordings')
  .prepend($('<div>')
   .attr('id', 'image-container-recording')
   .attr('class', 'image-container'));

  $('#image-container-recording')
   .append($('<img>')
   .attr('src', 'images/album/eastern-rebellion.jpg')
   .attr('class', 'image')
   .attr('id', 'other-records-image'));

  //TODO 7 - BillyIMG
  let billyImg = data.images.billy;
  
  var count = 0;                                                        //create a counter outside of the function 
  
  $('#image-billy').on('click', function(event){
    if(count === billyImg.length - 1) count = -1;                       //call the counter so we can move from img to img
    count = count + 1;
  
  $('#image-billy').attr('src', billyImg[count]);                       //connect the count/ billyIMG to the click-event
    return;
  })
 

 //TODO 8 - topRated album switch
 $('.top-rated').on('click', function(event){                           //create a click event on the top-rated <li>
  const currentEve = $(event.currentTarget);                            //keep target (currently clicked)
  return $('#top-records-image').attr('src', $(currentEve).attr('art'));//return the image of the current <li> clicked 
 });
 
 //TODO 8 - otherRecordings album switch
 $('.recording').on('click', function(event){                           //create a click event on the other recording <li>
  const currentEve = $(event.currentTarget);                            //keep target (currently clicked)
  $('#other-records-image').attr('src', $(currentEve).attr('art'));     //return the image of the current <li> clicked
 });
 
//TODO 9 - Table Ride

var createTable = function(equipment) {                                 //create the table with equip
var createRow = function(instrument) {                                  //and row with instrument
  var $row = $("<tr>");
  var $type = $("<td>").text(instrument.type);
  var $desc = $("<td>").text(instrument.desc).attr('class', 'instrument-desc');
  $row.append($type);
  $row.append($desc);
    return $row;
  };
            
var $table = $("<table>");
var $rows = equipment.map(createRow);
$table.append($rows);
  return $table;
};

// Appends Table to the Sidebar
$('#sidebar')
.append($('<section>').attr('id', 'section-rider'));
createTable(data.rider).appendTo('#section-rider').attr('id', 'table-rider')
.css('font-family', 'Avenir')
.css('border-radius', '2px')
.css('font-size', '12px');

// Adds a Header for Table
$('#section-rider')
.prepend($('<header>')
.text("Billy's Gear")
.attr('class', 'header')
.css('font-family', 'Avenir')
.css('border-radius', '2px')
.css('font-size', '18px'));

// Adds a Header for Instrument & Description
$('#table-rider').prepend($('<th>').text('Description')
.css('font-family', 'Avenir')
.css('border-radius', '2px')
.css('font-size', '16px'));

$('#table-rider').prepend($('<th>').text('Instrument')
.css('font-family', 'Avenir')
.css('border-radius', '2px')
.css('font-size', '16px'));


  // YOUR CODE ABOVE HERE //
};

const onFail = (error) => {
  console.error('getJSON on discography failed!');
};

$(document).ready(() => {
  $.getJSON('/src/data.json', onReady)
    .fail(onFail);
});

const onReady = (data) => {
  // YOUR CODE BELOW HERE //

  // Uncomment this to inspect all available data; delete when done //
  // EXAMPLE: Looping over top rated recordings; replace with your code //
  // const topRated = data.discography.topRated;
  // topRated.forEach((recording) => {
  //   console.log(recording);
  // });


  // YOUR CODE ABOVE HERE //
};

const onFail = (error) => {
  console.error('getJSON on discography failed!');
};

$(document).ready(() => {
  $.getJSON('/src/data.json', onReady)
    .fail(onFail);
});

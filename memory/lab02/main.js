var canvas = document.querySelector('#canvas');
var filter = new ImageFilter( canvas );

document.getElementById('btn-reset').addEventListener('click', function() {
  filter = new ImageFilter( canvas );
});
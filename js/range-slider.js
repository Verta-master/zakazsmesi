// Range sliders
$( function() {
  $( "#slider-range" ).slider({
    range: true,
    min: 300,
    max: 100000,
    values: [ 300, 75800 ],
    slide: function( event, ui ) {
      $( "#amount-min" ).val( ui.values[ 0 ] );
      $( "#amount-max" ).val( ui.values[ 1 ] );
    }
  });
  $( "#amount-min" ).val( $( "#slider-range" ).slider( "values", 0 ) );
  $( "#amount-max" ).val( $( "#slider-range" ).slider( "values", 1 ) );
});

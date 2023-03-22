var $ = jQuery.noConflict();

// Funtion to update html according to conditions
function updateFields(x = 'Just Energy - Residential', y = '4') {
  const rs = SolarData.find(val => val.type === x && val.quantity === y);
  document.getElementById('grant').innerHTML = '€ ' + rs.g_available;
  document.getElementById('lessgrant').innerHTML = '€ ' + rs.base_cost;
  document.getElementById('Monthlyent').innerHTML = '€ ' + rs.intro;
  document.getElementById('right_energy').innerHTML = rs.type;
  document.getElementById('democust').innerHTML = rs.quantity;
  document.getElementById('Monthlyentto').innerHTML = '€ ' + rs.intro;
  document.getElementById('kw').innerHTML = rs.sys_size/1000;
}

// Update data default on load
$(document).ready(function(){ updateFields(); });

// Update data on slider change
// $('#avologic-range').change(function(){
//   let cv = $('input[name="my_options"]:checked').val();
//   let rv = $('#avologic-range').val();
//   updateFields(cv, rv);
// });
document.getElementById('avologic-range').oninput = function() {
  let cv = $('input[name="my_options"]:checked').val();
  let rv = $('#avologic-range').val();
  updateFields(cv, rv); 
};
// Update data when energy type selected.
$('input[name="my_options"]').change(function(){
  let cv = $('input[name="my_options"]:checked').val();
  let rv = $('#avologic-range').val();
  updateFields(cv, rv);
});

// $("#up-front").prop('checked')
//   $("monPay").show();
// }

$(document).ready(function(){
  $("#monPay").show();
  $(".fina customnene").show();
});

$("#up-front").click(function($){
  if(this.checked){
    $("#monPay").show();
    $(".fina customnene").show();
    $(".finato").hide();
  }
});

$("#payupfront").click(function($){
  if(this.checked){
    $(".finato").show();
    $("#monPay").hide();
    $(".fina customnene").hide();
    $(".fina").hide();
  }
});

$("#energy-hot-water").click(function($){
  if(this.checked){
    $("#slidfour").hide();
    $("#slidfive").hide();
    $('#avologic-range').prop('min','6');
    $('#avologic-range').attr('value','6');
  }
});

$("#just-energy").click(function($){
  if(this.checked){
    $("#slidfour").show();
    $("#slidfive").show();
    $('#avologic-range').prop('min','4');
    $('#avologic-range').attr('value','4');
  }
});

$("#showfrom").click(function(){
  $("#fromofcal").show();
});


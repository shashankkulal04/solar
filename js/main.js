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
jQuery(document).ready(function(){ updateFields(); });

// Update data on slider change
// jQuery('#avologic-range').change(function(){
//   let cv = jQuery('input[name="my_options"]:checked').val();
//   let rv = jQuery('#avologic-range').val();
//   updateFields(cv, rv);
// });
document.getElementById('avologic-range').oninput = function() {
  let cv = jQuery('input[name="my_options"]:checked').val();
  let rv = jQuery('#avologic-range').val();
  updateFields(cv, rv); 
};
// Update data when energy type selected.
jQuery('input[name="my_options"]').change(function(){
  let cv = jQuery('input[name="my_options"]:checked').val();
  let rv = jQuery('#avologic-range').val();
  updateFields(cv, rv);
});

// jQuery("#up-front").prop('checked')
//   jQuery("monPay").show();
// }

jQuery(document).ready(function(){
  jQuery("#monPay").show();
  jQuery(".fina customnene").show();
});
jQuery("#up-front").click(function($){
  if(this.checked){
    jQuery("#monPay").show();
    jQuery(".fina customnene").show();
    jQuery(".finato").hide();
  }
});

jQuery("#payupfront").click(function($){
  if(this.checked){
    jQuery(".finato").show();
    jQuery("#monPay").hide();
    jQuery(".fina customnene").hide();
    jQuery(".fina").hide();
  }
});

jQuery("#energy-hot-water").click(function($){
  if(this.checked){
    jQuery("#slidfour").hide();
    jQuery("#slidfive").hide();
    jQuery('#avologic-range').prop('min','6');
    jQuery('#avologic-range').attr('value','6');
  }
});

jQuery("#just-energy").click(function($){
  if(this.checked){
    jQuery("#slidfour").show();
    jQuery("#slidfive").show();
    jQuery('#avologic-range').prop('min','4');
    jQuery('#avologic-range').attr('value','4');
  }
});

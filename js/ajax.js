var $ = jQuery.noConflict();

$(".fromsb").click(function(){
  let property = $('select[name="typeofproperty"]').val();
  let roof = $('select[name="roof"]').val();
  let installPanel = $('select[name="installpanel"]').val();
  let chimney = $('select[name="nearbychumeys"]').val();
  let homeMost = $('select[name="homemost"]').val();
  let name = $('#name').val();
  let email = $('#email').val();
  let pnumber = $("#pnumber").val();
  let eircode = $("#address-locator").val();

  console.log("Property: " + property + "/n");
  console.log("Roof: " + roof + "/n");
  console.log("Install: " + installPanel + "/n");
  console.log("chimney: " + chimney + "/n");
  console.log("homemost: " + homeMost + "/n");
  console.log("name: " + name + "/n");
  console.log("email: " + email + "/n");
  console.log("pnumber: " + pnumber + "/n");
  console.log("eircode: " + eircode + "/n");
});
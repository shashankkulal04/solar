

$("#country").change(function(){

var seli =  $(this).val();

document.getElementById("seli").innerHTML = seli;

// alert(seli);

var selValue = $( "#country option:selected" ).text();

document.cookie="selValue="+selValue+"; SameSite=None; Secure";

document.cookie="selValue="+selValue;

});



jQuery(document).ready(function(){

$("#Calc").hide();

$(".customeproducts2").hide();

$(".secpro").hide();

$(".leftsidee").hide();

$(".leftsideepr").hide();

// $("#showfrom").hide();

var g = $("#range").val();

       $(".finato").hide();

       $("#mygrant").hide();

        $("#myclientgross").hide();

       $(".upcoast").hide();

       $(".smalltxt2").hide();

document.getElementById("democust").innerHTML = g;

// alert(g);

var selectedCountry = $("#energy-hot-water").val();

if (selectedCountry == 'Just Energy - Residential'){

//   var mu = $("#democust").html();

//   if (mu == '5'){

//   // alert("there");

//  $(".range-value").css({"left": "8%"});

// }



  $(function(){

    $("#range").prop('min',4);

    $("#range").prop('max',20);



});

$("#range").attr("value","4");

$("#slidfive").show();

$("#slidfour").show();

  //alert(selectedCountry);

}

// function my_cusfunction(val){

//     alert(val);

//  }

// var upval = $("#up-front").val();



// document.cookie="upval="+upval+"; SameSite=None; Secure";

// var upval = $("#up-front").val();

// document.cookie="upvalto="+upvalto;

//





var upval = $("#up-front:checked").val();

document.cookie="upval="+upval+"; SameSite=None; Secure";

document.cookie="upval="+upval;



$(document).ready(function(){

  $('input[type=radio][name=finnaa]').change(function() {

      if (this.value == 'payupfrontselect') {

        $("#lessgrant").hide();

        $("#mygrant").show();



        $("#clientgross").hide();

        $("#myclientgross").hide();

        var upval = $(this).val();



        document.cookie="upval="+upval+"; SameSite=None; Secure";

        document.cookie="upval="+upval;

         $(".moncoast").hide();



         $(".upcoast").show();

         $(".fina").hide();

         $(".smalltxt2").show();

        $(".finato").show();

       //

      }

       if (this.value == 'finance') {

        $("#lessgrant").show();

        $("#mygrant").hide();

        $("#clientgross").hide();

        $("#myclientgross").hide();

          var upval = $(this).val();



          document.cookie="upval="+upval+"; SameSite=None; Secure";

          document.cookie="upval="+upval;

          $(".fina").show();

          $(".moncoast").show();

          $(".upcoast").hide();

          $(".smalltxt2").hide();

          $(".finato").hide();

        //

      }

  });

});

jQuery("#products").change(function(){

     var selectedCountry = $("input[name='my_options']:checked").val();

// alert(selectedCountry);

   //alert(selectedCountry);

   document.cookie="selectedCountry="+selectedCountry+"; SameSite=None; Secure";

   document.cookie="selectedCountry="+selectedCountry;

    //alert("You have selected the country - " + selectedCountry);



 var chirag = jQuery("#productsname").html(selectedCountry);

 var right_energy = jQuery("#right_energy").html(selectedCountry);

 if (selectedCountry == 'Just Energy - Residential'){

    var mu = $("#democust").html();

// if (mu == '4'){

//   $(".range-value").css({"left": "1%"});

// }

// if (mu == '5'){

//   alert("there");

//  $(".range-value").css({"left": "8%"});

// }

// if (mu == '5'){

//   alert("there");

//  $(".range-value").css({"left": "8%"});

// }

if (mu == '6'){



$(".range-value").css({"left": "14%"});

}

if (mu == '7'){



  $(".range-value").css({"left": "21%"});

}

if (mu == '8'){



  $(".range-value").css({"left": "26%"});

}

if (mu == '9'){



  $(".range-value").css({"left": "31%"});

}

if (mu == '10'){



  $(".range-value").css({"left": "38%"});

}

if (mu == '11'){



$(".range-value").css({"left": "44%"});

}

if (mu == '12'){



$(".range-value").css({"left": "50%"});

}

if (mu == '13'){



$(".range-value").css({"left": "56%"});

}

if (mu == '14'){



$(".range-value").css({"left": "62%"});

}

if (mu == '15'){



$(".range-value").css({"left": "69%"});

}

if (mu == '16'){



$(".range-value").css({"left": "75%"});

}

if (mu == '17'){



$(".range-value").css({"left": "81%"});

}

if (mu == '18'){



$(".range-value").css({"left": "87%"});

}

if (mu == '19'){



$(".range-value").css({"left": "94%"});

}

if (mu == '20'){



$(".range-value").css({"left": "100%"});

}



    $(function(){

    $("#range").prop('min',4);

    $("#range").prop('max',20);



});

$("#range").attr("value","4");

$("#slidfive").show();

$("#slidfour").show();





// var upval = $("#up-front").val();

// document.cookie="upval="+upval+"; SameSite=None; Secure";

    $(document).ready(function(){



      var upval = $("#up-front:checked").val();

document.cookie="upval="+upval+"; SameSite=None; Secure";

document.cookie="upval="+upval;

  $('input[type=radio][name=finnaa]').change(function() {



      if (this.value == 'payupfrontselect') {

        $("#lessgrant").hide();

        $("#mygrant").show();



        $("#clientgross").hide();

        $("#myclientgross").hide();



        var upval = $(this).val();





        document.cookie="upval="+upval+"; SameSite=None; Secure";   

        document.cookie="upval="+upval;

          $(".fina").hide();        $(".finato").show();        //



}

      if (this.value == 'finance') {

        $("#lessgrant").show();

        $("#mygrant").hide();

        $("#clientgross").hide();

        $("#myclientgross").hide();

          var upval = $(this).val();



          document.cookie="upval="+upval+"; SameSite=None; Secure";

          document.cookie="upval="+upval;

          $(".fina").show();

       $(".finato").hide();

         //

      }

  });

});

      $("#Calc").show();

    $(".leftsidee").show();

    $("#showfrom").show();



 const

range = document.getElementById('range'),

 rangeV = document.getElementById('rangeV'),

 setValue = ()=>{

const

 newValue = Number( (range.value - range.min) * 100 / (range.max - range.min) ),

  newPosition = 10 - (newValue * 0.2);

rangeV.innerHTML = `<span>${range.value}</span>`;

 rangeV.style.left = `calc(${newValue}% + (${newPosition}px))`;

  };

document.addEventListener("DOMContentLoaded", setValue);

range.addEventListener('range', setValue);

var slider = document.getElementById("range");

var f = slider.value;

document.getElementById("democust").innerHTML = f;



// alert(f)

//  alert(f);

if(f == "5"){

}

// document.getElementById("demo").innerHTML = f;

$(".leftsideepr").hide();

$(".rightpr").css("border-right", "1px solid");

$(".leftsidee").show();

document.getElementById("demo").innerHTML = f;

document.cookie="nopanel="+f+"; SameSite=None; Secure";

document.cookie="nopanel="+f;

//alert(f);

$("#Calc").show();

        jQuery(".prod2").hide();

     jQuery(".productsone").show();

 var year = "400";

    var kw = f * year;

    //alert(kw);

    

    

      let part = kw.toString().slice(0,1);

let partt = kw.toString().slice(1,2);

var kWh  = part+','+partt; 

      // var kWh  = kw.toString().slice(0, -2);

    

     document.cookie="kw="+kWh+"; SameSite=None; Secure";

     document.cookie="kw="+kWh;

    



    document.getElementById("kw").innerHTML =  kWh  ;

//grant Value

var a = '1800';

var b = '2000';

var res = a/b;

var resr = res.toFixed();

var grant = res* kw;

document.cookie="grant="+grant+"; SameSite=None; Secure";

document.cookie="grant="+grant;

// var grant = grantr.toFixed()

console.log(res);

document.getElementById("grant").innerHTML =  " €" + grant.toFixed();

document.getElementById("save").innerHTML =  " €" + grant.toFixed();

var ep = '8';

if (f == 6){



//alert("there");

$(".panelnone").hide();

$(".panelshow").show();

$(".hidenetofsix").hide();

$(".shownetofsix").show();

$(".showctoforsix").show();

$(".hidectoforsix").hide();

//$(".showtextforsix").show();



$(".hidetextforsix").hide();

var lessGrant = 15;

//alert(lessGrant);

document.cookie="lessGrant="+lessGrant+"; SameSite=None; Secure";

document.cookie="lessGrant="+lessGrant;

// alert(lessGrant);

document.getElementById("lessgrant").innerHTML = "€" + lessGrant.toFixed();

$(document).ready(function(){

  $('input[type=radio][name=finnaa]').change(function() {

      if (this.value == 'payupfrontselect') {

        $("#lessgrant").hide();

        $("#mygrant").show();



        $("#clientgross").hide();

        $("#myclientgross").hide();

        var upval = $(this).val();



        document.cookie="upval="+upval+"; SameSite=None; Secure";

        document.cookie="upval="+upval;

         $(".moncoast").hide();



         $(".upcoast").show();

         $(".fina").hide();

         $(".smalltxt2").show();

        $(".finato").show();

        $(".showtextforsix").show();

       //

      }

       if (this.value == 'finance') {

        $(".showtextforsix").hide();

        $("#lessgrant").show();

        $("#mygrant").hide();

        $("#clientgross").hide();

        $("#myclientgross").hide();

          var upval = $(this).val();



          document.cookie="upval="+upval+"; SameSite=None; Secure";

          document.cookie="upval="+upval;

          $(".fina").show();

          $(".moncoast").show();

          $(".upcoast").hide();

          $(".smalltxt2").hide();

          $(".finato").hide();

          $(".showtextforsix").hide();

        //

      }

  });

});





}

else{

$(".showtextforsix").hide();

$(".hidetextforsix").show();

  $(".hidenetofsix").show();

$(".shownetofsix").hide();

  $(".panelshow").hide();

  $(".panelnone").show();

  $(".showctoforsix").hide();

$(".hidectoforsix").show();



}



if (f >= 6 && f <=10){

 var E = '2000';

 var com = kw - E;

 var dval = '0.3';

var mul = com * dval;

var grant = mul + 1800;

document.cookie="grant="+grant+"; SameSite=None; Secure";

document.cookie="grant="+grant;

// var grant = grantn.toFixed();

document.getElementById("grant").innerHTML =  "€" + Number(grant).toFixed(0);

document.getElementById("save").innerHTML =  "€" + Number(grant).toFixed(0);

}

if(f == "11")



{

    var grant = '2400'

    document.cookie="grant="+grant+"; SameSite=None; Secure";

    document.cookie="grant="+grant;

    document.getElementById("grant").innerHTML = "€" + Number(grant).toFixed(0);

    document.getElementById("save").innerHTML = "€" + Number(grant).toFixed(0);

}

if(f >= 12)

{

    var grant = '2400'

    document.cookie="grant="+grant+"; SameSite=None; Secure";

    document.cookie="grant="+grant;

    document.getElementById("grant").innerHTML = "€" + grant ;

    document.getElementById("save").innerHTML = "€" + grant ;

}

var extrapanel = f-ep;

console.log(extrapanel);

var ep = '8';

var extrapanel = f-ep;

// var extrapanel = '0';



if(extrapanel <= 0){

  var extrapanel = '0'

    document.cookie="extrapanel="+extrapanel+"; SameSite=None; Secure";

    document.cookie="extrapanel="+extrapanel;

     document.getElementById("exp").innerHTML = extrapanel;



}

else{

    document.cookie="extrapanel="+extrapanel+"; SameSite=None; Secure";

     document.cookie="extrapanel="+extrapanel;

    document.getElementById("exp").innerHTML = extrapanel;

}

console.log(extrapanel);

var excostperpanel = '360';

var extracost = extrapanel * excostperpanel

document.cookie="extracost="+extracost+"; SameSite=None; Secure";

// document.cookie="extracost="+extracos;

document.getElementById("expcost").innerHTML = "€" + extracost ;

// var L = '5940';

// var ClientGross = extracost + L;

// document.getElementById("clientgross").innerHTML = ClientGross +' Cost (No Grant)';

//------------------------------------------------------------------------------------------------------------------------

//  New Price

//-------------------------------------------------------------------------------------------------------------------------



var basecost = '5940';

var fiv = 5;

var mi = 5940 + extracost;

var ser = $("#seli").html();

var stincov = parseInt(ser);

// alert(typeof(stincov));

var clientgros = mi + stincov;

var per = ser * 8;

var perdived = per / 100 ;

var myclientgross = clientgros - perdived;

document.cookie="myclientgross="+myclientgross+"; SameSite=None; Secure";

document.cookie="myclientgross="+myclientgross;

document.getElementById("myclientgross").innerHTML = "€" + myclientgross.toFixed();

if(f == 4 || f == 5){

  var fixedcost = '3339';

  var clientgros1 = fixedcost * 1.9;

  // alert(fixedcost);

}

if (f == 6 || f == 7 || f == 8){

  var fixedcost = '3840';

  var clientgros1 = fixedcost * 1.9;

//   document.cookie="clientgros="+clientgros+"; SameSite=None; Secure";

// document.getElementById("clientgross").innerHTML = "€" + clientgros;

//   // alert(fixedcost);



}

if (f > 8){

  var F8 = '360';

  dived = 360 * extrapanel;

  var fixedcost = 3840 + dived;

  var clientgros1 = fixedcost * 1.9;

//   alert("chirag");



//   alert(fixedcost);

//  // alert(cl);

//   // var clientgros = 5940 + extracost;

// document.cookie="clientgros="+clientgros+"; SameSite=None; Secure";



// document.getElementById("clientgross").innerHTML = "€" + clientgros;



}



 if(f == 4){

 var ProjectDes = 1490

  //var mi = clientgros1 - 1490;

 var mi = 3540 + grant;



//  alert(mi);

var ser = $("#seli").html();

var stincov = parseInt(ser);

// alert(typeof(stincov));



var clientgros = mi + stincov;

var per = ser * 8;

var perdived = per / 100 ;

var myclientgross = clientgros - perdived;

document.cookie="myclientgross="+myclientgross+"; SameSite=None; Secure";

document.cookie="myclientgross="+myclientgross;

document.getElementById("myclientgross").innerHTML = "€" + myclientgross.toFixed();

document.cookie="clientgros="+clientgros+"; SameSite=None; Secure";

document.cookie="clientgros="+clientgros;

document.getElementById("clientgross").innerHTML = "€" +  Number(clientgros).toFixed();

document.getElementById("clientgrossbo").innerHTML = "€" + Number(clientgros).toFixed();

 }

 if(f == 5){

 var ProjectDes = 1490

//  var mi = clientgros1 - 1162;

var mi = 4740 + grant;



var ser = $("#seli").html();

var stincov = parseInt(ser);

// alert(typeof(stincov));



var clientgros = mi + stincov;

var per = ser * 8;

var perdived = per / 100 ;

var myclientgross = clientgros - perdived;

document.cookie="myclientgross="+myclientgross+"; SameSite=None; Secure";

document.cookie="myclientgross="+myclientgross;

document.getElementById("myclientgross").innerHTML = "€" + myclientgross.toFixed();



 document.cookie="clientgros="+clientgros+"; SameSite=None; Secure";

 document.cookie="clientgros="+clientgros;

 document.getElementById("clientgross").innerHTML = "€" +  Number(clientgros).toFixed();

 document.getElementById("clientgrossbo").innerHTML = "€" + Number(clientgros).toFixed();

 }

 if(f == 6){

 var ProjectDes = 1490

//  var mi =  clientgros1 - 1179;

var mi = 4860 + grant;

var ser = $("#seli").html();

var stincov = parseInt(ser);

// alert(typeof(stincov));

var clientgros = mi + stincov;

var per = ser * 8;

var perdived = per / 100 ;

var myclientgross = clientgros - perdived;

document.cookie="myclientgross="+myclientgross+"; SameSite=None; Secure";

document.cookie="myclientgross="+myclientgross;

document.getElementById("myclientgross").innerHTML = "€" + myclientgross.toFixed();

 document.cookie="clientgros="+clientgros+"; SameSite=None; Secure";

 document.cookie="clientgros="+clientgros;

 document.getElementById("clientgross").innerHTML = "€" +  Number(clientgros).toFixed();

 document.getElementById("clientgrossbo").innerHTML = "€" + Number(clientgros).toFixed();

 }

 if(f == 7){

var ProjectDes = 1490

//  var mi = clientgros1 - 829;

var mi = 6715 + grant;

var ser = $("#seli").html();

var stincov = parseInt(ser);

// alert(typeof(stincov));

var clientgros = mi + stincov;

var per = ser * 8;

var perdived = per / 100 ;

var myclientgross = clientgros - perdived;

document.cookie="myclientgross="+myclientgross+"; SameSite=None; Secure";

document.cookie="myclientgross="+myclientgross;

document.getElementById("myclientgross").innerHTML = "€" + myclientgross.toFixed();

 document.cookie="clientgros="+clientgros+"; SameSite=None; Secure";

 document.cookie="clientgros="+clientgros;

 document.getElementById("clientgross").innerHTML = "€" +  Number(clientgros).toFixed();

 document.getElementById("clientgrossbo").innerHTML = "€" + Number(clientgros).toFixed();



 }

 if(f == 8){

 var ProjectDes = 1490

//  var mi = clientgros1 - 480;

var mi = 6595 + grant;

var ser = $("#seli").html();

var stincov = parseInt(ser);

// alert(typeof(stincov));

var clientgros = mi + stincov;

var per = ser * 8;

var perdived = per / 100 ;

var myclientgross = clientgros - perdived;

document.cookie="myclientgross="+myclientgross+"; SameSite=None; Secure";

document.cookie="myclientgross="+myclientgross;

document.getElementById("myclientgross").innerHTML = "€" + myclientgross.toFixed();

document.cookie="clientgros="+clientgros+"; SameSite=None; Secure";

document.cookie="clientgros="+clientgros;

document.getElementById("clientgross").innerHTML = "€" +  Number(clientgros).toFixed();

document.getElementById("clientgrossbo").innerHTML = "€" + Number(clientgros).toFixed();

 }

 if(f == 9){

 var ProjectDes = 1490

//  var mi = clientgros1 - 334;

var mi = 7296 + grant;

var ser = $("#seli").html();

var stincov = parseInt(ser);

// alert(typeof(stincov));

var clientgros = mi + stincov;

var per = ser * 8;

var perdived = per / 100 ;

var myclientgross = clientgros - perdived;

document.cookie="myclientgross="+myclientgross+"; SameSite=None; Secure";

document.cookie="myclientgross="+myclientgross;

document.getElementById("myclientgross").innerHTML = "€" + myclientgross.toFixed();

 document.cookie="clientgros="+clientgros+"; SameSite=None; Secure";

 document.cookie="clientgros="+clientgros;

 document.getElementById("clientgross").innerHTML = "€" +  Number(clientgros).toFixed();

 document.getElementById("clientgrossbo").innerHTML = "€" + Number(clientgros).toFixed();

 }

 if(f == 10){

 var ProjectDes = 1490

//  var mi = clientgros1 - 429;

var mi = 7997 + grant;

var ser = $("#seli").html();

var stincov = parseInt(ser);

// alert(typeof(stincov));

var clientgros = mi + stincov;

var per = ser * 8;

var perdived = per / 100 ;

var myclientgross = clientgros - perdived;

document.cookie="myclientgross="+myclientgross+"; SameSite=None; Secure";

document.cookie="myclientgross="+myclientgross;

document.getElementById("myclientgross").innerHTML = "€" + myclientgross.toFixed();

 document.cookie="clientgros="+clientgros+"; SameSite=None; Secure";

 document.cookie="clientgros="+clientgros;

 document.getElementById("clientgross").innerHTML = "€" +  Number(clientgros).toFixed();

 document.getElementById("clientgrossbo").innerHTML = "€" + Number(clientgros).toFixed();

 }

 if(f == 11){

  var grant = 2400

 var ProjectDes = 1490

//  var mi = clientgros1 - 288;

var mi = 8818 + 2400;



var ser = $("#seli").html();

var stincov = parseInt(ser);

// alert(typeof(stincov));

var clientgros = mi + stincov;

var per = ser * 8;

var perdived = per / 100 ;

var myclientgross = clientgros - perdived;

document.cookie="myclientgross="+myclientgross+"; SameSite=None; Secure";

document.cookie="myclientgross="+myclientgross;

document.getElementById("myclientgross").innerHTML = "€" + myclientgross.toFixed();

 document.cookie="clientgros="+clientgros+"; SameSite=None; Secure";

 document.cookie="clientgros="+clientgros;

 document.getElementById("clientgross").innerHTML = "€" +  Number(clientgros).toFixed();

 document.getElementById("clientgrossbo").innerHTML = "€" + Number(clientgros).toFixed();

 }

 if(f == 12){

 var ProjectDes = 1490

//  var mi = clientgros1 - 491;

var mi = 9638 + 2400;



var ser = $("#seli").html();

var stincov = parseInt(ser);

// alert(typeof(stincov));

var clientgros = mi + stincov;

var per = ser * 8;

var perdived = per / 100 ;

var myclientgross = clientgros - perdived;

document.cookie="myclientgross="+myclientgross+"; SameSite=None; Secure";

document.cookie="myclientgross="+myclientgross;

document.getElementById("myclientgross").innerHTML = "€" + myclientgross.toFixed();

 document.cookie="clientgros="+clientgros+"; SameSite=None; Secure";

 document.cookie="clientgros="+clientgros;

 document.getElementById("clientgross").innerHTML = "€" +  Number(clientgros).toFixed();

 document.getElementById("clientgrossbo").innerHTML = "€" + Number(clientgros).toFixed();

 }

 if(f == 13){

 var ProjectDes = 1490

//  var mi = clientgros1 - 456;

var mi = 10459 + 2400;

var ser = $("#seli").html();

var stincov = parseInt(ser);

// alert(typeof(stincov));

var clientgros = mi + stincov;

var per = ser * 8;

var perdived = per / 100 ;

var myclientgross = clientgros - perdived;

document.cookie="myclientgross="+myclientgross+"; SameSite=None; Secure";

document.cookie="myclientgross="+myclientgross;

document.getElementById("myclientgross").innerHTML = "€" + myclientgross.toFixed();

 document.cookie="clientgros="+clientgros+"; SameSite=None; Secure";

 document.cookie="clientgros="+clientgros;

 document.getElementById("clientgross").innerHTML = "€" +  Number(clientgros).toFixed();

 document.getElementById("clientgrossbo").innerHTML = "€" + Number(clientgros).toFixed();

 }

 if(f == 14){

 var ProjectDes = 1490

//  var mi = clientgros1 - 660;



 var mi = 11280 + 2400;

var ser = $("#seli").html();

var stincov = parseInt(ser);

// alert(typeof(stincov));

var clientgros = mi + stincov;

var per = ser * 8;

var perdived = per / 100 ;

var myclientgross = clientgros - perdived;

document.cookie="myclientgross="+myclientgross+"; SameSite=None; Secure";

document.cookie="myclientgross="+myclientgross;

document.getElementById("myclientgross").innerHTML = "€" + myclientgross.toFixed();

 document.cookie="clientgros="+clientgros+"; SameSite=None; Secure";

 document.cookie="clientgros="+clientgros;

 document.getElementById("clientgross").innerHTML = "€" +  Number(clientgros).toFixed();

 document.getElementById("clientgrossbo").innerHTML = "€" + Number(clientgros).toFixed();

}

 if(f == 15){

 var ProjectDes = 1490

//  var mi = clientgros1 - 624;

var mi = 12101 + 2400;

var ser = $("#seli").html();

var stincov = parseInt(ser);

// alert(typeof(stincov));

var clientgros = mi + stincov;

var per = ser * 8;

var perdived = per / 100 ;

var myclientgross = clientgros - perdived;

document.cookie="myclientgross="+myclientgross+"; SameSite=None; Secure";

document.cookie="myclientgross="+myclientgross;

document.getElementById("myclientgross").innerHTML = "€" + myclientgross.toFixed();

 document.cookie="clientgros="+clientgros+"; SameSite=None; Secure";

 document.cookie="clientgros="+clientgros;

 document.getElementById("clientgross").innerHTML = "€" +  Number(clientgros).toFixed();

 document.getElementById("clientgrossbo").innerHTML = "€" + Number(clientgros).toFixed();



 }

 if(f == 16){

 var ProjectDes = 1490

//  var mi = clientgros1 - 846;

var mi = 12922 + 2400;

var ser = $("#seli").html();

var stincov = parseInt(ser);

// alert(typeof(stincov));

var clientgros = mi + stincov;

var per = ser * 8;

var perdived = per / 100 ;

var myclientgross = clientgros - perdived;

document.cookie="myclientgross="+myclientgross+"; SameSite=None; Secure";

document.cookie="myclientgross="+myclientgross;

document.getElementById("myclientgross").innerHTML = "€" + myclientgross.toFixed();



 document.cookie="clientgros="+clientgros+"; SameSite=None; Secure";

 document.cookie="clientgros="+clientgros;

 document.getElementById("clientgross").innerHTML = "€" +  Number(clientgros).toFixed();

 document.getElementById("clientgrossbo").innerHTML = "€" + Number(clientgros).toFixed();



 }

 if(f == 17){

 var ProjectDes = 1490

//  var mi = clientgros1 - 792;

var mi = 13742 + 2400;

var ser = $("#seli").html();

var stincov = parseInt(ser);

// alert(typeof(stincov));

var clientgros = mi + stincov;

var per = ser * 8;

var perdived = per / 100 ;

var myclientgross = clientgros - perdived;

document.cookie="myclientgross="+myclientgross+"; SameSite=None; Secure";

document.cookie="myclientgross="+myclientgross;

document.getElementById("myclientgross").innerHTML = "€" + myclientgross.toFixed();

 document.cookie="clientgros="+clientgros+"; SameSite=None; Secure";

 document.cookie="clientgros="+clientgros;

 document.getElementById("clientgross").innerHTML = "€" +  Number(clientgros).toFixed();

 document.getElementById("clientgrossbo").innerHTML = "€" + Number(clientgros).toFixed();

 }

 if(f == 18){

 var ProjectDes = 1490

//  var mi = clientgros1 - 996;

var mi = 14563 + 2400;

var ser = $("#seli").html();

var stincov = parseInt(ser);

// alert(typeof(stincov));

var clientgros = mi + stincov;

var per = ser * 8;

var perdived = per / 100 ;

var myclientgross = clientgros - perdived;

document.cookie="myclientgross="+myclientgross+"; SameSite=None; Secure";

document.cookie="myclientgross="+myclientgross;

document.getElementById("myclientgross").innerHTML = "€" + myclientgross.toFixed();

 document.cookie="clientgros="+clientgros+"; SameSite=None; Secure";

 document.cookie="clientgros="+clientgros;

 document.getElementById("clientgross").innerHTML = "€" +  Number(clientgros).toFixed();

 document.getElementById("clientgrossbo").innerHTML = "€" + Number(clientgros).toFixed();

 }

 if(f == 19){

 var ProjectDes = 1490

//  var mi = clientgros1 - 960;

var mi = 15384 + 2400;

var ser = $("#seli").html();

var stincov = parseInt(ser);

// alert(typeof(stincov));

var clientgros = mi + stincov;

var per = ser * 8;

var perdived = per / 100 ;

var myclientgross = clientgros - perdived;

document.cookie="myclientgross="+myclientgross+"; SameSite=None; Secure";

document.cookie="myclientgross="+myclientgross;

document.getElementById("myclientgross").innerHTML = "€" + myclientgross.toFixed();

 document.cookie="clientgros="+clientgros+"; SameSite=None; Secure";

 document.cookie="clientgros="+clientgros;

document.getElementById("clientgross").innerHTML = "€" +  Number(clientgros).toFixed();

document.getElementById("clientgrossbo").innerHTML = "€" + Number(clientgros).toFixed();



 }

 if(f == 20){

 var ProjectDes = 1490

//  var mi = clientgros1 - 1164;

 var mi = 16205 + 2400;

var ser = $("#seli").html();

var stincov = parseInt(ser);

// alert(typeof(stincov));

var clientgros = mi + stincov;

var per = ser * 8;

var perdived = per / 100 ;

var myclientgross = clientgros - perdived;

document.cookie="myclientgross="+myclientgross+"; SameSite=None; Secure";

document.cookie="myclientgross="+myclientgross;

document.getElementById("myclientgross").innerHTML = "€" + myclientgross.toFixed();

 document.cookie="clientgros="+clientgros+"; SameSite=None; Secure";

 document.cookie="clientgros="+clientgros;

 document.getElementById("clientgross").innerHTML = "€" +  Number(clientgros).toFixed();

 document.getElementById("clientgrossbo").innerHTML = "€" + Number(clientgros).toFixed();

 }



document.cookie="clientgros="+clientgros+"; SameSite=None; Secure";

document.cookie="clientgros="+clientgros;

// alert(clientgros);

document.getElementById("clientgross").innerHTML = "€" +  Number(clientgros).toFixed();

document.getElementById("clientgrossbo").innerHTML = "€" + Number(clientgros).toFixed();

//console.log(clientgros);



if (f == 6){

  //alert("chirag"); 

  

 var ser = $("#seli").html();

var per = ser * 8;

// alert(per);

var perdived = per / 100 ;

 //alert(perdived);

var finalv = ser - perdived; 

// alert(finalv);

var my = 5718;



 var lessGrant =  my + finalv;

 

var ser = $("#seli").html();

var stincov = parseInt(ser);

document.cookie="lessGrant="+lessGrant+"; SameSite=None; Secure";

document.cookie="lessGrant="+lessGrant;

 //alert(lessGrant);

document.getElementById("lessgrant").innerHTML = "€" + lessGrant.toFixed();



// var nett = 11234;

// //alert(nett);

// document.cookie="nett="+nett+"; SameSite=None; Secure";







var nettee = 5107;

//alert(nettee);

 var nette = nettee + finalv;

 customedis = lessGrant - nette;

 //alert(customedis);

 document.getElementById("mysavec").innerHTML = "€" + customedis.toFixed();

//alert(nette);

document.cookie="nette="+nette+"; SameSite=None; Secure";

document.cookie="nette="+nette;

document.getElementById("nettshow").innerHTML = "€" + nette.toFixed();

document.getElementById("leftupforsix").innerHTML = "€" + nette.toFixed();





// var mygrant = my + + "; SameSite=None; Secure"; + "; SameSite=None; Secure";
var mygrant = my + finalv;
//alert(mygrant);

document.cookie="mygrant="+mygrant+"; SameSite=None; Secure";

document.cookie="mygrant="+mygrant;

document.getElementById("mygrant").innerHTML = "€" + Number(mygrant).toFixed();

document.getElementById("lessgranto").innerHTML = "€" + Number(mygrant).toFixed();

}

else{



  var lessGrant = clientgros - grant;

var ser = $("#seli").html();

var stincov = parseInt(ser);

document.cookie="lessGrant="+lessGrant+"; SameSite=None; Secure";

document.cookie="lessGrant="+lessGrant;

 //alert(lessGrant);

document.getElementById("lessgrant").innerHTML = "€" + lessGrant.toFixed();



var mygrant = lessGrant - perdived;

document.cookie="mygrant="+mygrant+"; SameSite=None; Secure";

document.cookie="mygrant="+mygrant;

document.getElementById("mygrant").innerHTML = "€" + Number(mygrant).toFixed();

document.getElementById("lessgranto").innerHTML = "€" + Number(mygrant).toFixed();



var nett =   cod - grant;

 var custnett = cod - grant;

 //  alert(nett);

document.cookie="nett="+nett+"; SameSite=None; Secure";

document.cookie="nett="+nett;

document.getElementById("nett").innerHTML = "€" + nett.toFixed();

document.getElementById("tup").innerHTML = "€" + nett.toFixed();



}



var per = ser * 8;

//alert(per);

var perdived = per / 100 ;

//var mygrant = lessGrant - perdived;

document.cookie="mygrant="+mygrant+"; SameSite=None; Secure";

document.cookie="mygrant="+mygrant;

document.getElementById("mygrant").innerHTML = "€" + Number(mygrant).toFixed();

document.getElementById("lessgranto").innerHTML = "€" + Number(mygrant).toFixed();

// console.log(lessGrant);

var upfrontpayment = clientgros * 0.92;

document.cookie="upfrontpayment="+upfrontpayment+"; SameSite=None; Secure";

document.cookie="upfrontpayment="+upfrontpayment;

document.getElementById("upfrontpayment").innerHTML = "€" + Number(clientgros).toFixed();

document.getElementById("upfrontpaymentto").innerHTML = "€" + upfrontpayment.toFixed();

console.log(upfrontpayment.toFixed());

document.getElementById("detail").innerHTML = "€" +  Number(clientgros).toFixed();

document.getElementById("detailone").innerHTML =  "€" + Number(grant).toFixed(0);

document.getElementById("detailto").innerHTML =  "€" + lessGrant.toFixed()

document.getElementById("finance").innerHTML =  "€" + upfrontpayment.toFixed() +' ';

const

  rangey = document.getElementById('rangey'),

  rangeZ = document.getElementById('rangeZ'),

  setVal = ()=>{

    const

      newValue = Number( (rangey.value - rangey.min) * 100 / (rangey.max - rangey.min) ),

      newPosition = 10 - (newValue * 0.2);

   rangeZ.innerHTML = `<span>${rangey.value}</span>`;

    rangeZ.style.left = `calc(${newValue}% + (${newPosition}px))`;

  };



  document.addEventListener("DOMContentLoaded", setVal);

rangey.addEventListener('input', setVal);

var sliderp = document.getElementById("rangey");

var year = sliderp.value;

document.cookie="year="+year+"; SameSite=None; Secure";

document.cookie="year="+year;

document.getElementById("demo").innerHTML = year;

var monthly = year * 12;

var ser = $("#seli").html();

 //alert(ser);

var divser = ser / monthly;

 //alert(divser);

var monthre = clientgros / monthly;

//  alert(divser);

// var monthre = clientgros / monthly;

// alert(monthre);

var monthlypay = clientgros / monthly;

//alert(monthlypay);

document.cookie="monthlypay="+monthlypay+"; SameSite=None; Secure";

document.cookie="monthlypay="+monthlypay;

var moplancountry = lessGrant / monthly;

//alert(moplancountry);

var monthlynetpalan = lessGrant / monthly;

// alert(monthlynetpalan);

document.cookie="monthlynetpalan="+monthlynetpalan+"; SameSite=None; Secure";

document.cookie="monthlynetpalan="+monthlynetpalan;

document.getElementById("ye").innerHTML = "€" + monthlypay.toFixed(2);

document.getElementById("Monthlyent").innerHTML = "€" + monthlynetpalan.toFixed(2);

document.getElementById("Monthlyentto").innerHTML = "€" +monthlynetpalan.toFixed(2);

// var upval = $("#up-front").val();

// document.cookie="upval="+upval+"; SameSite=None; Secure";



var upval = $("#up-front:checked").val();

document.cookie="upval="+upval+"; SameSite=None; Secure";

document.cookie="upval="+upval;

$(document).ready(function(){

  $('input[type=radio][name=finnaa]').change(function() {

      if (this.value == 'payupfrontselect') {

        $("#lessgrant").hide();

        $("#mygrant").show();

        $("#clientgross").hide();

        $("#myclientgross").hide();

        var upval = $(this).val();



        document.cookie="upval="+upval+"; SameSite=None; Secure";

        document.cookie="upval="+upval;

        $(".fina").hide();

        $(".fina").hide();

        $(".finato").show();

        //



     }

       if (this.value == 'finance') {

        $("#lessgrant").show();

        $("#mygrant").hide();

        $("#clientgross").hide();

        $("#myclientgross").hide();



          var upval = $(this).val();



         document.cookie="upval="+upval+"; SameSite=None; Secure";

         document.cookie="upval="+upval;

          $(".fina").show();

        $(".finato").hide();

        //

      }

  });

});



var cld = clientgros *  0.92;

// document.getElementById("cld").innerHTML = "€" + cld.toFixed();

// alert(cld);

var ser = $("#seli").html();

var per = ser * 8;

//alert(per);

var perdived = per / 100 ;

//alert(perdived);

 var finalv = ser - perdived;

 document.getElementById("finalv").innerHTML = "€" + finalv.toFixed();

var codval = clientgros * 0.92;

var cod = codval + finalv;

var discou = mygrant - nett;

document.getElementById("discou").innerHTML = "€" + discou.toFixed();

document.cookie="cod="+cod+"; SameSite=None; Secure";

document.cookie="cod="+cod;

document.getElementById("cod").innerHTML = "€" + cod.toFixed();

// alert(me)

window.onload = setTimeout(function(){

  var c = $("#nett").html();

document.getElementById("c").innerHTML =  c;

document.getElementById("cto").innerHTML =  c;

}, 5);

//  alert(c);

// var neting =

// alert(neting);

var nett =   cod - grant;

 var custnett = cod - grant;

 //  alert(nett);

document.cookie="nett="+nett+"; SameSite=None; Secure";

document.cookie="nett="+nett;

document.getElementById("nett").innerHTML = "€" + nett.toFixed();

document.getElementById("tup").innerHTML = "€" + nett.toFixed();

window.onload = setTimeout(function(){

  var grtval = $("#mygrant").html();

var gtvalto = $("#nett").html();

var iNum = parseInt(grtval);

var iNumto = parseInt(gtvalto);

var customedis = mygrant - nett;

document.getElementById("customvl").innerHTML = "€" + customedis.toFixed();

  // alert(customedis);

}, 100);

console.log(monthlynetpalan);

console.log(monthly);

sliderp.oninput = function() {

console.log(sliderp);

  var year = this.value;

 document.cookie="year="+year+"; SameSite=None; Secure";

 document.cookie="year="+year;

  document.getElementById("demo").innerHTML = year;

  var monthly = year * 12;

  var ser = $("#seli").html();

// alert(ser);

var divser = ser / monthly;

 //alert(divser);

var monthre = clientgros / monthly;

//  alert(divser);

// var monthre = clientgros / monthly;

// alert(monthre);

var monthlypay = clientgros / monthly;

// alert(monthlypay);

document.cookie="monthlypay="+monthlypay+"; SameSite=None; Secure";

document.cookie="monthlypay="+monthlypay;

// alert(ser);

//var monthlypay = clientgros / monthly;

document.cookie="monthlypay="+monthlypay+"; SameSite=None; Secure";

document.cookie="monthlypay="+monthlypay;

var moplancountry = lessGrant / monthly;

//alert(moplancountry);

var monthlynetpalan = lessGrant / monthly;

document.cookie="monthlynetpalan="+monthlynetpalan+"; SameSite=None; Secure";

document.cookie="monthlynetpalan="+monthlynetpalan;



document.getElementById("ye").innerHTML = "€" + monthlypay.toFixed(2);



document.getElementById("Monthlyent").innerHTML = "€" + monthlynetpalan.toFixed(2);



document.getElementById("Monthlyentto").innerHTML = "€" +monthlynetpalan.toFixed(2);

// var upval = $("#up-front").val();

// document.cookie="upval="+upval+"; SameSite=None; Secure";



var upval = $("#up-front:checked").val();

document.cookie="upval="+upval+"; SameSite=None; Secure";

document.cookie="upval="+upval;

$(document).ready(function(){

  $('input[type=radio][name=finnaa]').change(function() {

      if (this.value == 'payupfrontselect') {

        $("#lessgrant").hide();

        $("#mygrant").show();

        $("#clientgross").hide();

        $("#myclientgross").hide();

       var upval = $(this).val();



        document.cookie="upval="+upval+"; SameSite=None; Secure";

        document.cookie="upval="+upval;

      $(".fina").hide();

      $(".finato").show();

    //

   }

       if (this.value == 'finance') {

        $("#lessgrant").show();

        $("#mygrant").hide();

        $("#clientgross").hide();

        $("#myclientgross").hide();

          var upval = $(this).val();



         document.cookie="upval="+upval+"; SameSite=None; Secure";

         document.cookie="upval="+upval;

        $(".fina").show();

       $(".finato").hide();

          //

      }

 });

});

var cld = clientgros *  0.92;

// document.getElementById("cld").innerHTML = "€" + cld.toFixed();

var ser = $("#seli").html();

var per = ser * 8;

//alert(per);

var perdived = per / 100 ;

//alert(perdived);

 var finalv = ser - perdived;

document.getElementById("finalv").innerHTML = "€" + finalv.toFixed();

 //alert(finalv)

var codval = clientgros * 0.92;

// var cod = codval + finalv;

var cod = codval + 0;

var discou = mygrant - nett;

document.getElementById("discou").innerHTML = "€" + discou.toFixed();

document.cookie="cod="+cod+"; SameSite=None; Secure";

document.cookie="cod="+cod;

document.getElementById("cod").innerHTML = "€" + cod.toFixed();

// var neting = cod - grant;

var nett =  cod - grant;

var c = $("#nett").html();

document.getElementById("c").innerHTML =  c;

document.getElementById("cto").innerHTML =  c;

document.cookie="nett="+nett+"; SameSite=None; Secure";

document.cookie="nett="+nett;

document.getElementById("nett").innerHTML = "€" + nett.toFixed();

document.getElementById("tup").innerHTML = "€" + nett.toFixed();

window.onload = setTimeout(function(){

  var grtval = $("#mygrant").html();

var gtvalto = $("#nett").html();

var iNum = parseInt(grtval);

var iNumto = parseInt(gtvalto);

var customedis = mygrant - nett;

document.getElementById("customvl").innerHTML = "€" + customedis.toFixed();

  // alert(customedis);

}, 100);





console.log(monthlynetpalan);

console.log(monthly);

  }

var monthly = year * 12;

var ser = $("#seli").html();

// alert(ser);

var divser = ser / monthly;

 //alert(divser);

var monthre = clientgros / monthly;

//  alert(divser);

// var monthre = clientgros / monthly;

// alert(monthre);

var monthlypay = clientgros / monthly;

// alert(monthlypay);

document.cookie="monthlypay="+monthlypay+"; SameSite=None; Secure";

document.cookie="monthlypay="+monthlypay;

// alert(ser);



//var monthlypay = clientgros / monthly;

document.cookie="monthlypay="+monthlypay+"; SameSite=None; Secure";

document.cookie="monthlypay="+monthlypay;

var moplancountry = lessGrant / monthly;

//alert(moplancountry);

var monthlynetpalan = lessGrant / monthly;

document.cookie="monthlynetpalan="+monthlynetpalan+"; SameSite=None; Secure";

document.cookie="monthlynetpalan="+monthlynetpalan;



document.getElementById("ye").innerHTML = "€" + monthlypay.toFixed(2);



document.getElementById("Monthlyent").innerHTML = "€" + monthlynetpalan.toFixed(2);



document.getElementById("Monthlyentto").innerHTML = "€" +monthlynetpalan.toFixed(2);

// var upval = $("#up-front").val();

// document.cookie="upval="+upval+"; SameSite=None; Secure";





var upval = $("#up-front:checked").val();

document.cookie="upval="+upval+"; SameSite=None; Secure";

document.cookie="upval="+upval;

$(document).ready(function(){

  $('input[type=radio][name=finnaa]').change(function() {

      if (this.value == 'payupfrontselect') {

        $("#lessgrant").hide();

        $("#mygrant").show();

        $("#clientgross").hide();

        $("#myclientgross").hide();

        var upval = $(this).val();



        document.cookie="upval="+upval+"; SameSite=None; Secure";

        document.cookie="upval="+upval;

        $(".fina").hide();

      $(".finato").show();

     //

 }



      if (this.value == 'finance') {

        $("#lessgrant").show();

        $("#mygrant").hide();

        $("#clientgross").hide();

        $("#myclientgross").hide();

          var upval = $(this).val();



          document.cookie="upval="+upval+"; SameSite=None; Secure";

          document.cookie="upval="+upval;

     $(".fina").show();

      $(".finato").hide();

        //

      }

});

});

var cld = clientgros *  0.92;

// document.getElementById("cld").innerHTML = "€" + cld.toFixed();

var ser = $("#seli").html();

var per = ser * 8;

//alert(per);

var perdived = per / 100 ;

//alert(perdived);

 var finalv = ser - perdived;

 document.getElementById("finalv").innerHTML = "€" + finalv.toFixed();

 //alert(finalv)

var codval = clientgros * 0.92;

var cod = codval + 0;

var discou = mygrant - nett;

document.getElementById("discou").innerHTML = "€" + discou.toFixed();

document.cookie="cod="+cod+"; SameSite=None; Secure";

document.cookie="cod="+cod;

document.getElementById("cod").innerHTML = "€" + cod.toFixed();

var neting = cod - grant;

var nett =   cod - grant;

var c = $("#nett").html();

document.getElementById("c").innerHTML =  c;

document.getElementById("cto").innerHTML =  c;

document.cookie="nett="+nett+"; SameSite=None; Secure";

document.cookie="nett="+nett;

document.getElementById("nett").innerHTML = "€" + nett.toFixed();

document.getElementById("tup").innerHTML = "€" + nett.toFixed();

window.onload = setTimeout(function(){

  var grtval = $("#mygrant").html();

var gtvalto = $("#nett").html();

var iNum = parseInt(grtval);

var iNumto = parseInt(gtvalto);

var customedis = mygrant - nett;

document.getElementById("customvl").innerHTML = "€" + customedis.toFixed();

  // alert(customedis);

}, 100);

console.log(monthlynetpalan);

console.log(monthly);

$("#ale").hide();

slider.oninput = function() {

  var f = this.value;

  document.cookie="nopanel="+f+"; SameSite=None; Secure";

  document.cookie="nopanel="+f;

if(f < 4){

  document.getElementById("democust").innerHTML = f;

  $("#Calc").hide();

  $("#ale").show();

  var ale = "Plase Choos Min 4 ";

  document.getElementById("ale").innerHTML = ale;

}

else{

  document.getElementById("democust").innerHTML = f;

//alert(f);

  $("#Calc").show();

  $("#ale").hide();

}

  $(".leftsideepr").hide();

      $(".rightpr").css("border-right", "1px solid");

      $(".leftsidee").show();



    document.getElementById("demo").innerHTML = f;



  console.log(f);

        jQuery(".prod2").hide();

        jQuery(".productsone").show();

    var year = "400";

   var kw = f * year;

    //alert(kw);

     let part = kw.toString().slice(0,1);

let partt = kw.toString().slice(1,2);

var kWh  = part+','+partt; 

      // var kWh  = kw.toString().slice(0, -2);

    

     document.cookie="kw="+kWh+"; SameSite=None; Secure";

     document.cookie="kw="+kWh;

    



    document.getElementById("kw").innerHTML =  kWh  ;

//grant Value

var a = '1800';

var b = '2000';

var res = a/b;

var grant = res* kw;

document.cookie="grant="+grant+"; SameSite=None; Secure";

document.cookie="grant="+grant;

// document.cookie="grant="+kw;

// var grant = grantr.toFixed()

//alert(grant);

document.cookie="grant="+grant+"; SameSite=None; Secure";

document.cookie="grant="+grant;

document.getElementById("grant").innerHTML =  " €" + grant.toFixed();

document.getElementById("save").innerHTML =  " €" + grant.toFixed();

var ep = '8';



if (f >= 6 && f <=10){



    var E = '2000';

var com = kw - E;

var dval = '0.3';

var mul = com * dval;

var grant = mul + 1800;

// var grant = grantn.toFixed();

document.cookie="grant="+grant+"; SameSite=None; Secure";

document.cookie="grant="+grant;

document.getElementById("grant").innerHTML =  "€" + Number(grant).toFixed(0);

document.getElementById("save").innerHTML =  "€" + Number(grant).toFixed(0);

}

if(f == "11")

{

   var grant = '2400';

    document.cookie="grant="+grant+"; SameSite=None; Secure";

    document.cookie="grant="+grant;

   // alert("chirag");

   document.getElementById("grant").innerHTML = "€" + Number(grant).toFixed(0);

    document.getElementById("save").innerHTML = "€" + Number(grant).toFixed(0);



}

if(f >= 12)

{

   var grant = '2400';

 document.cookie="grant="+grant+"; SameSite=None; Secure";

 document.cookie="grant="+grant;

   document.getElementById("grant").innerHTML = "€" + grant ;

    document.getElementById("save").innerHTML = "€" + grant ;



}

var extrapanel = f-ep;

console.log(extrapanel);

var ep = '8';

var extrapanel = f-ep;

// var extrapanel = '0';

if(extrapanel <= 0){

  var extrapanel = '0'

   document.cookie="extrapanel="+extrapanel+"; SameSite=None; Secure";

   document.cookie="extrapanel="+extrapanel;

   document.getElementById("exp").innerHTML = extrapanel;

}



else{

    document.cookie="extrapanel="+extrapanel+"; SameSite=None; Secure";

    document.cookie="extrapanel="+extrapanel;

    document.getElementById("exp").innerHTML = extrapanel ;

}

console.log(extrapanel);

var excostperpanel = '360';

var extracost = extrapanel * excostperpanel

// alert(extracost);

document.cookie="extracost="+extracost+"; SameSite=None; Secure";

document.cookie="extracost="+extracost;

document.getElementById("expcost").innerHTML = "€" + extracost ;

// var L = '5940';

// var ClientGross = extracost + L;

// document.getElementById("clientgross").innerHTML = ClientGross +' Cost (No Grant)';

var basecost = '5940';

var fiv = 5;

if(f == 4 || f == 5){

  var fixedcost = '3339';

  var clientgros1 = fixedcost * 1.9;

  // alert(fixedcost);



}



if (f == 6 || f == 7 || f == 8){

  var fixedcost = '3840';

  var clientgros1 = fixedcost * 1.9;

//   document.cookie="clientgros="+clientgros+"; SameSite=None; Secure";

// document.getElementById("clientgross").innerHTML = "€" + clientgros;

//   // alert(fixedcost);

}

if (f > 8){



  var F8 = '360';

  dived = 360 * extrapanel;

  var fixedcost = 3840 + dived;

  var clientgros1 = fixedcost * 1.9;

//   alert("chirag");

//   alert(fixedcost);

//  // alert(cl);

//   // var clientgros = 5940 + extracost;

// document.cookie="clientgros="+clientgros+"; SameSite=None; Secure";

// document.getElementById("clientgross").innerHTML = "€" + clientgros;

}

 if(f == 4){

 var ProjectDes = 1490

 var mi = clientgros1 - 1429;

 // alert(clientgros1);

var ser = $("#seli").html();

var stincov = parseInt(ser);

// alert(ser);

var clientgros = 3540 + grant + stincov;

// alert(clientgros);

var per = ser * 8;

var perdived = per / 100 ;

var myclientgross = clientgros - perdived;

document.cookie="myclientgross="+myclientgross+"; SameSite=None; Secure";

document.cookie="myclientgross="+myclientgross;

document.getElementById("myclientgross").innerHTML = "€" + myclientgross.toFixed();

 document.cookie="clientgros="+clientgros+"; SameSite=None; Secure";

 document.cookie="clientgros="+clientgros;

 //document.getElementById("clientgross").innerHTML = "€" +  Number(clientgros).toFixed();

 document.getElementById("clientgrossbo").innerHTML = "€" + Number(clientgros).toFixed();

 }

 if(f == 5){

 var ProjectDes = 1490

var mi = clientgros1 - 1162;

var ser = $("#seli").html();

var stincov = parseInt(ser);

// alert(typeof(stincov));

var clientgros = 4740 + grant + stincov;

var per = ser * 8;

var perdived = per / 100 ;

var myclientgross = clientgros - perdived;

document.cookie="myclientgross="+myclientgross+"; SameSite=None; Secure";

document.cookie="myclientgross="+myclientgross;

document.getElementById("myclientgross").innerHTML = "€" + myclientgross.toFixed();

 document.cookie="clientgros="+clientgros+"; SameSite=None; Secure";

 document.cookie="clientgros="+clientgros;

 //document.getElementById("clientgross").innerHTML = "€" +  Number(clientgros).toFixed();

 document.getElementById("clientgrossbo").innerHTML = "€" + Number(clientgros).toFixed();

 }

 if(f == 6){

 var ProjectDes = 1490

 var mi = clientgros1 - 1179;

var ser = $("#seli").html();

var stincov = parseInt(ser);

// alert(typeof(stincov));

var clientgros = 5718 + grant + stincov;

var per = ser * 8;

var perdived = per / 100 ;

var myclientgross = clientgros - perdived;

document.cookie="myclientgross="+myclientgross+"; SameSite=None; Secure";

document.cookie="myclientgross="+myclientgross;

document.getElementById("myclientgross").innerHTML = "€" + myclientgross.toFixed();

 document.cookie="clientgros="+clientgros+"; SameSite=None; Secure";

 document.cookie="clientgros="+clientgros;

 //document.getElementById("clientgross").innerHTML = "€" +  Number(clientgros).toFixed();

 document.getElementById("clientgrossbo").innerHTML = "€" + Number(clientgros).toFixed();

 }

 if(f == 7){

 var ProjectDes = 1490

 var mi = clientgros1 - 829;

var ser = $("#seli").html();

var stincov = parseInt(ser);

// alert(typeof(stincov));

var clientgros = 6715 + grant + stincov;

var per = ser * 8;

var perdived = per / 100 ;

var myclientgross = clientgros - perdived;

document.cookie="myclientgross="+myclientgross+"; SameSite=None; Secure";

document.cookie="myclientgross="+myclientgross;

document.getElementById("myclientgross").innerHTML = "€" + myclientgross.toFixed();

 document.cookie="clientgros="+clientgros+"; SameSite=None; Secure";

 document.cookie="clientgros="+clientgros;

 //document.getElementById("clientgross").innerHTML = "€" +  Number(clientgros).toFixed();

document.getElementById("clientgrossbo").innerHTML = "€" + Number(clientgros).toFixed();

}

 if(f == 8){

 var ProjectDes = 1490

 var mi = clientgros1 - 480;

var ser = $("#seli").html();

var stincov = parseInt(ser);

// alert(typeof(stincov));

var clientgros = 6595 + grant + stincov;

var per = ser * 8;

var perdived = per / 100 ;

var myclientgross = clientgros - perdived;

document.cookie="myclientgross="+myclientgross+"; SameSite=None; Secure";

document.cookie="myclientgross="+myclientgross;

document.getElementById("myclientgross").innerHTML = "€" + myclientgross.toFixed();

 document.cookie="clientgros="+clientgros+"; SameSite=None; Secure";

 document.cookie="clientgros="+clientgros;

 //document.getElementById("clientgross").innerHTML = "€" +  Number(clientgros).toFixed();

document.getElementById("clientgrossbo").innerHTML = "€" + Number(clientgros).toFixed();

 }

 if(f == 9){

 var ProjectDes = 1490

 var mi = clientgros1 - 334;

var ser = $("#seli").html();

var stincov = parseInt(ser);

// alert(typeof(stincov));

var clientgros = 7296 + grant + stincov;

var per = ser * 8;

var perdived = per / 100 ;

var myclientgross = clientgros - perdived;

document.cookie="myclientgross="+myclientgross+"; SameSite=None; Secure";

document.cookie="myclientgross="+myclientgross;

document.getElementById("myclientgross").innerHTML = "€" + myclientgross.toFixed();

document.cookie="clientgros="+clientgros+"; SameSite=None; Secure";

document.cookie="clientgros="+clientgros;

//document.getElementById("clientgross").innerHTML = "€" +  Number(clientgros).toFixed();

document.getElementById("clientgrossbo").innerHTML = "€" + Number(clientgros).toFixed();

}

 if(f == 10){

 var ProjectDes = 1490

 var mi = clientgros1 - 429;

var ser = $("#seli").html();

var stincov = parseInt(ser);

// alert(typeof(stincov));

var clientgros = 7997 + grant + stincov;

var per = ser * 8;

var perdived = per / 100 ;

var myclientgross = clientgros - perdived;

document.cookie="myclientgross="+myclientgross+"; SameSite=None; Secure";

document.cookie="myclientgross="+myclientgross;

document.getElementById("myclientgross").innerHTML = "€" + myclientgross.toFixed();

 document.cookie="clientgros="+clientgros+"; SameSite=None; Secure";

 document.cookie="clientgros="+clientgros;

 //document.getElementById("clientgross").innerHTML = "€" +  Number(clientgros).toFixed();

document.getElementById("clientgrossbo").innerHTML = "€" + Number(clientgros).toFixed();

 }

 if(f == 11){

 var ProjectDes = 1490

 var mi = clientgros1 - 288;

var ser = $("#seli").html();

var stincov = parseInt(ser);

// alert(typeof(stincov));

var clientgros = 8818 + 2400 + stincov;

var per = ser * 8;

var perdived = per / 100 ;

var myclientgross = clientgros - perdived;

document.cookie="myclientgross="+myclientgross+"; SameSite=None; Secure";

document.cookie="myclientgross="+myclientgross;

document.getElementById("myclientgross").innerHTML = "€" + myclientgross.toFixed();

 document.cookie="clientgros="+clientgros+"; SameSite=None; Secure";

 document.cookie="clientgros="+clientgros;

 //document.getElementById("clientgross").innerHTML = "€" +  Number(clientgros).toFixed();

document.getElementById("clientgrossbo").innerHTML = "€" + Number(clientgros).toFixed();

 }

 if(f == 12){

 var ProjectDes = 1490

 var mi = clientgros1 - 491;

var ser = $("#seli").html();

var stincov = parseInt(ser);

// alert(typeof(stincov));

var clientgros = 9638 + 2400 + stincov;

var per = ser * 8;

var perdived = per / 100 ;

var myclientgross = clientgros - perdived;

document.cookie="myclientgross="+myclientgross+"; SameSite=None; Secure";

document.cookie="myclientgross="+myclientgross;

document.getElementById("myclientgross").innerHTML = "€" + myclientgross.toFixed();

 document.cookie="clientgros="+clientgros+"; SameSite=None; Secure";

 document.cookie="clientgros="+clientgros;

 //document.getElementById("clientgross").innerHTML = "€" +  Number(clientgros).toFixed();

document.getElementById("clientgrossbo").innerHTML = "€" + Number(clientgros).toFixed();

 }

 if(f == 13){



 var ProjectDes = 1490



 var mi = clientgros1 - 456;

var ser = $("#seli").html();

var stincov = parseInt(ser);

// alert(typeof(stincov));



var clientgros = 10459 + 2400 + stincov;



var per = ser * 8;

var perdived = per / 100 ;



var myclientgross = clientgros - perdived;





document.cookie="myclientgross="+myclientgross+"; SameSite=None; Secure";

document.cookie="myclientgross="+myclientgross;

document.getElementById("myclientgross").innerHTML = "€" + myclientgross.toFixed();



 document.cookie="clientgros="+clientgros+"; SameSite=None; Secure";

 document.cookie="clientgros="+clientgros;



 //document.getElementById("clientgross").innerHTML = "€" +  Number(clientgros).toFixed();

document.getElementById("clientgrossbo").innerHTML = "€" + Number(clientgros).toFixed();



 }





 if(f == 14){

 var ProjectDes = 1490

 var mi = clientgros1 - 660;

var ser = $("#seli").html();

var stincov = parseInt(ser);

// alert(typeof(stincov));

var clientgros = 11280 + 2400 + stincov;

var per = ser * 8;

var perdived = per / 100 ;

var myclientgross = clientgros - perdived;

document.cookie="myclientgross="+myclientgross+"; SameSite=None; Secure";

document.cookie="myclientgross="+myclientgross;

document.getElementById("myclientgross").innerHTML = "€" + myclientgross.toFixed();

 document.cookie="clientgros="+clientgros+"; SameSite=None; Secure";

 document.cookie="clientgros="+clientgros;

 //document.getElementById("clientgross").innerHTML = "€" +  Number(clientgros).toFixed();

document.getElementById("clientgrossbo").innerHTML = "€" + Number(clientgros).toFixed();

 }

 if(f == 15){

var ProjectDes = 1490

 var mi = clientgros1 - 624;

var ser = $("#seli").html();

var stincov = parseInt(ser);

// alert(typeof(stincov));

var clientgros = 12101 + 2400 + stincov;

var per = ser * 8;

var perdived = per / 100 ;

var myclientgross = clientgros - perdived;

document.cookie="myclientgross="+myclientgross+"; SameSite=None; Secure";

document.cookie="myclientgross="+myclientgross;

document.getElementById("myclientgross").innerHTML = "€" + myclientgross.toFixed();

 document.cookie="clientgros="+clientgros+"; SameSite=None; Secure";

 document.cookie="clientgros="+clientgros;

 //document.getElementById("clientgross").innerHTML = "€" +  Number(clientgros).toFixed();

document.getElementById("clientgrossbo").innerHTML = "€" + Number(clientgros).toFixed();

 }

 if(f == 16){

 var ProjectDes = 1490

 var mi = clientgros1 - 846;

var ser = $("#seli").html();

var stincov = parseInt(ser);

// alert(typeof(stincov));

var clientgros = 12922 + 2400 + stincov;

var per = ser * 8;

var perdived = per / 100 ;

var myclientgross = clientgros - perdived;

document.cookie="myclientgross="+myclientgross+"; SameSite=None; Secure";

document.cookie="myclientgross="+myclientgross;

document.getElementById("myclientgross").innerHTML = "€" + myclientgross.toFixed();

 document.cookie="clientgros="+clientgros+"; SameSite=None; Secure";

 document.cookie="clientgros="+clientgros;

 //document.getElementById("clientgross").innerHTML = "€" +  Number(clientgros).toFixed();

document.getElementById("clientgrossbo").innerHTML = "€" + Number(clientgros).toFixed();

 }

 if(f == 17){

 var ProjectDes = 1490

 var mi = clientgros1 - 792;

var ser = $("#seli").html();

var stincov = parseInt(ser);

// alert(typeof(stincov));

var clientgros = 13742 + 2400 + stincov;

var per = ser * 8;

var perdived = per / 100 ;

var myclientgross = clientgros - perdived;

document.cookie="myclientgross="+myclientgross+"; SameSite=None; Secure";

document.cookie="myclientgross="+myclientgross;

document.getElementById("myclientgross").innerHTML = "€" + myclientgross.toFixed();

 document.cookie="clientgros="+clientgros+"; SameSite=None; Secure";

 document.cookie="clientgros="+clientgros;

 //document.getElementById("clientgross").innerHTML = "€" +  Number(clientgros).toFixed();

document.getElementById("clientgrossbo").innerHTML = "€" + Number(clientgros).toFixed();

 }

 if(f == 18){

 var ProjectDes = 1490

 var mi = clientgros1 - 996;

var ser = $("#seli").html();

var stincov = parseInt(ser);

// alert(typeof(stincov));

var clientgros = 14563 + 2400 + stincov;

var per = ser * 8;

var perdived = per / 100 ;

var myclientgross = clientgros - perdived;

document.cookie="myclientgross="+myclientgross+"; SameSite=None; Secure";

document.cookie="myclientgross="+myclientgross;

document.getElementById("myclientgross").innerHTML = "€" + myclientgross.toFixed();

 document.cookie="clientgros="+clientgros+"; SameSite=None; Secure";

 document.cookie="clientgros="+clientgros;

 //document.getElementById("clientgross").innerHTML = "€" +  Number(clientgros).toFixed();

document.getElementById("clientgrossbo").innerHTML = "€" + Number(clientgros).toFixed();



 }

 if(f == 19){

 var ProjectDes = 1490

 var mi = clientgros1 - 960;

var ser = $("#seli").html();

var stincov = parseInt(ser);

// alert(typeof(stincov));

var clientgros = 15384 + 2400 + stincov;

var per = ser * 8;

var perdived = per / 100 ;

var myclientgross = clientgros - perdived;

document.cookie="myclientgross="+myclientgross+"; SameSite=None; Secure";

document.cookie="myclientgross="+myclientgross;

document.getElementById("myclientgross").innerHTML = "€" + myclientgross.toFixed();

 document.cookie="clientgros="+clientgros+"; SameSite=None; Secure";

 document.cookie="clientgros="+clientgros;

 //document.getElementById("clientgross").innerHTML = "€" +  Number(clientgros).toFixed();

document.getElementById("clientgrossbo").innerHTML = "€" + Number(clientgros).toFixed();



 }

 if(f == 20){

var ProjectDes = 1490

 var mi = clientgros1 - 1164;

var ser = $("#seli").html();

var stincov = parseInt(ser);

// alert(typeof(stincov));

var clientgros = 16205 + 2400 + stincov;

var per = ser * 8;

var perdived = per / 100 ;

var myclientgross = clientgros - perdived;

document.cookie="myclientgross="+myclientgross+"; SameSite=None; Secure";

document.cookie="myclientgross="+myclientgross;

document.getElementById("myclientgross").innerHTML = "€" + myclientgross.toFixed();

 document.cookie="clientgros="+clientgros+"; SameSite=None; Secure";

 document.cookie="clientgros="+clientgros;



 //document.getElementById("clientgross").innerHTML = "€" +  Number(clientgros).toFixed();

document.getElementById("clientgrossbo").innerHTML = "€" + Number(clientgros).toFixed();

 }

// var clientgros = 5940 + extracost;

// alert(clientgros);



// document.cookie="clientgros="+clientgros+"; SameSite=None; Secure";

// document.getElementById("clientgross").innerHTML = "€" + clientgros;

//console.log(clientgros);



var lessGrant = clientgros - grant;

var ser = $("#seli").html();

var stincov = parseInt(ser);

var per = ser * 8;

//alert(per);

var perdived = per / 100 ;

var mygrant = lessGrant - perdived;

document.cookie="mygrant="+mygrant+"; SameSite=None; Secure";

document.cookie="mygrant="+mygrant;

document.getElementById("mygrant").innerHTML = "€" + Number(mygrant).toFixed();

document.getElementById("lessgranto").innerHTML = "€" + Number(mygrant).toFixed();

document.cookie="lessGrant="+lessGrant+"; SameSite=None; Secure";

document.cookie="lessGrant="+lessGrant;

document.getElementById("lessgrant").innerHTML = "€" + lessGrant.toFixed();

// console.log(lessGrant);

var upfrontpayment = clientgros * 0.92;

document.cookie="upfrontpayment="+upfrontpayment+"; SameSite=None; Secure";

document.cookie="upfrontpayment="+upfrontpayment;

document.getElementById("upfrontpayment").innerHTML = "€" + Number(clientgros).toFixed();

document.getElementById("upfrontpaymentto").innerHTML = "€" + upfrontpayment.toFixed();

console.log(upfrontpayment.toFixed());

document.getElementById("detail").innerHTML = "€" +  Number(clientgros).toFixed();

document.getElementById("detailone").innerHTML =  "€" + Number(grant).toFixed(0);

document.getElementById("detailto").innerHTML =  "€" + lessGrant.toFixed()

document.getElementById("finance").innerHTML =  "€" + upfrontpayment.toFixed() +' ';



const

  rangey = document.getElementById('rangey'),

  rangeZ = document.getElementById('rangeZ'),

  setVal = ()=>{

    const

      newValue = Number( (rangey.value - rangey.min) * 100 / (rangey.max - rangey.min) ),

      newPosition = 10 - (newValue * 0.2);

    rangeZ.innerHTML = `<span>${rangey.value}</span>`;

    rangeZ.style.left = `calc(${newValue}% + (${newPosition}px))`;

  };

document.addEventListener("DOMContentLoaded", setVal);

rangey.addEventListener('input', setVal);

var sliderp = document.getElementById("rangey");

var year = sliderp.value;

document.cookie="year="+year+"; SameSite=None; Secure";

document.cookie="year="+year;

document.getElementById("demo").innerHTML = year;

var monthly = year * 12;

var ser = $("#seli").html();

// alert(ser);

var divser = ser / monthly;

 //alert(divser);

var monthre = clientgros / monthly;

//  alert(divser);

// var monthre = clientgros / monthly;

// alert(monthre);

var monthlypay = clientgros / monthly;

//alert(monthlypay);

document.cookie="monthlypay="+monthlypay+"; SameSite=None; Secure";

document.cookie="monthlypay="+monthlypay;

// alert(ser);

//var monthlypay = clientgros / monthly;

document.cookie="monthlypay="+monthlypay+"; SameSite=None; Secure";

document.cookie="monthlypay="+monthlypay;

var moplancountry = lessGrant / monthly;

//alert(moplancountry);

var monthlynetpalan = lessGrant / monthly;

document.cookie="monthlynetpalan="+monthlynetpalan+"; SameSite=None; Secure";

document.cookie="monthlynetpalan="+monthlynetpalan;

document.getElementById("ye").innerHTML = "€" + monthlypay.toFixed(2);

document.getElementById("Monthlyent").innerHTML = "€" + monthlynetpalan.toFixed(2);

document.getElementById("Monthlyentto").innerHTML = "€" +monthlynetpalan.toFixed(2);



// var upval = $("#up-front").val();

// document.cookie="upval="+upval+"; SameSite=None; Secure";





var upval = $("#up-front:checked").val();

document.cookie="upval="+upval+"; SameSite=None; Secure";

document.cookie="upval="+upval;

$(document).ready(function(){

 $('input[type=radio][name=finnaa]').change(function() {

      if (this.value == 'payupfrontselect') {

        $("#lessgrant").hide();

        $("#mygrant").show();

        $("#clientgross").hide();

        $("#myclientgross").hide();

        var upval = $(this).val();



       document.cookie="upval="+upval+"; SameSite=None; Secure";

       document.cookie="upval="+upval;

        $(".fina").hide();

        $(".finato").show();

       //

     }

       if (this.value == 'finance') {

        $("#lessgrant").show();

        $("#mygrant").hide();

        $("#clientgross").hide();

        $("#myclientgross").hide();

          var upval = $(this).val();



          document.cookie="upval="+upval+"; SameSite=None; Secure";

          document.cookie="upval="+upval;

      $(".fina").show();

        $(".finato").hide();

          //

      }

  });

});

var cld = clientgros *  0.92;

// document.getElementById("cld").innerHTML = "€" + cld.toFixed();

var ser = $("#seli").html();

var per = ser * 8;

//alert(per);

var perdived = per / 100 ;

//alert(perdived);

 var finalv = ser - perdived;

 document.getElementById("finalv").innerHTML = "€" + finalv.toFixed();

 //alert(finalv)

var codval = clientgros * 0.92;

var cod = codval + 0;

var discou = mygrant - nett;

document.getElementById("discou").innerHTML = "€" + discou.toFixed();

document.cookie="cod="+cod+"; SameSite=None; Secure";

document.cookie="cod="+cod;

document.getElementById("cod").innerHTML = "€" + cod.toFixed();

var neting = cod - grant;

var nett =   cod - grant;

document.cookie="nett="+nett+"; SameSite=None; Secure";

document.cookie="nett="+nett;

var c = $("#nett").html();

document.getElementById("c").innerHTML =  c;

document.getElementById("cto").innerHTML =  c;

document.getElementById("nett").innerHTML = "€" + nett.toFixed();

document.getElementById("tup").innerHTML = "€" + nett.toFixed();

window.onload = setTimeout(function(){

  var grtval = $("#mygrant").html();

var gtvalto = $("#nett").html();

var iNum = parseInt(grtval);

var iNumto = parseInt(gtvalto);

var customedis = mygrant - nett;

document.getElementById("customvl").innerHTML = "€" + customedis.toFixed();

  // alert(customedis);

}, 100);

console.log(monthlynetpalan);

console.log(monthly);

sliderp.oninput = function() {

console.log(sliderp);

  var year = this.value;

document.cookie="year="+year+"; SameSite=None; Secure";

document.cookie="year="+year;

  document.getElementById("demo").innerHTML = year;

  var monthly = year * 12;

  var ser = $("#seli").html();

// alert(ser);

var divser = ser / monthly;

 //alert(divser);

var monthre = clientgros / monthly;

//  alert(divser);

// var monthre = clientgros / monthly;

// alert(monthre);

var monthlypay = clientgros / monthly;

//alert(monthlypay);

document.cookie="monthlypay="+monthlypay+"; SameSite=None; Secure";

document.cookie="monthlypay="+monthlypay;

// alert(ser);

//var monthlypay = clientgros / monthly;

document.cookie="monthlypay="+monthlypay+"; SameSite=None; Secure";

document.cookie="monthlypay="+monthlypay;

var moplancountry = lessGrant / monthly;

//alert(moplancountry);

var monthlynetpalan = lessGrant / monthly;

document.cookie="monthlynetpalan="+monthlynetpalan+"; SameSite=None; Secure";

document.cookie="monthlynetpalan="+monthlynetpalan;

document.getElementById("ye").innerHTML = "€" + monthlypay.toFixed(2);

document.getElementById("Monthlyent").innerHTML = "€" + monthlynetpalan.toFixed(2);

document.getElementById("Monthlyentto").innerHTML = "€" +monthlynetpalan.toFixed(2);

// var upval = $("#up-front").val();

// document.cookie="upval="+upval+"; SameSite=None; Secure";





var upval = $("#up-front:checked").val();

document.cookie="upval="+upval+"; SameSite=None; Secure";

document.cookie="upval="+upval;

$(document).ready(function(){

  $('input[type=radio][name=finnaa]').change(function() {

      if (this.value == 'payupfrontselect') {

        $("#lessgrant").hide();

        $("#mygrant").show();

        $("#clientgross").hide();

        $("#myclientgross").hide();

        var upval = $(this).val();



        document.cookie="upval="+upval+"; SameSite=None; Secure";

        document.cookie="upval="+upval;

       $(".fina").hide();

       $(".finato").show();

        //

      }

       if (this.value == 'finance') {

        $("#lessgrant").show();

        $("#mygrant").hide();

        $("#clientgross").hide();

        $("#myclientgross").hide();

          var upval = $(this).val();



          document.cookie="upval="+upval+"; SameSite=None; Secure";

          document.cookie="upval="+upval;

           $(".fina").show();

        $(".finato").hide();

        //

   }

  });

});



var cld = clientgros *  0.92;

// document.getElementById("cld").innerHTML = "€" + cld.toFixed();

var ser = $("#seli").html();

var per = ser * 8;

//alert(per);

var perdived = per / 100 ;

//alert(perdived);

 var finalv = ser - perdived;

 document.getElementById("finalv").innerHTML = "€" + finalv.toFixed();

 //alert(finalv)

var codval = clientgros * 0.92;

var cod = codval + 0;

var discou = mygrant - nett;

document.getElementById("discou").innerHTML = "€" + discou.toFixed();

document.cookie="cod="+cod+"; SameSite=None; Secure";

document.cookie="cod="+cod;

document.getElementById("cod").innerHTML = "€" + cod.toFixed();

var neting = cod - grant;

var nett =   cod - grant;

var c = $("#nett").html();

document.getElementById("c").innerHTML =  c;

document.getElementById("cto").innerHTML =  c;

document.cookie="nett="+nett+"; SameSite=None; Secure";

document.cookie="nett="+nett;

document.getElementById("nett").innerHTML = "€" + nett.toFixed();

document.getElementById("tup").innerHTML = "€" + nett.toFixed();

window.onload = setTimeout(function(){

 var grtval = $("#mygrant").html();

var gtvalto = $("#nett").html();

var iNum = parseInt(grtval);

var iNumto = parseInt(gtvalto);

var customedis = mygrant - nett;

document.getElementById("customvl").innerHTML = "€" + customedis.toFixed();

  // alert(customedis);

}, 100);

console.log(monthlynetpalan);

console.log(monthly);

  }

  }

  $("#qoutefromcu").submit(function(event){

        event.preventDefault();

        var textinput = $("#fristname").val();

        var textinputem = $("#emailq").val();

       var textinputph = $("#phonenumber").val();

        var pa = g;

       //var test = '667'

     //console.log(test)

      $.ajax({

       url: '/wp-admin/admin-ajax.php',

        data: {

          'action': 'php_tutorial',

          'php_test': textinput,

           'php_testto': textinputem,

            'php_testthre': textinputph,

            'panelno': g,

            'grant': grant,

            'kw': kw,

            'extrapanel': extrapanel,

            'extracost': extracost,

            'clientgros': clientgros,

            'lessGrant': lessGrant,

            'upfrontpayment': upfrontpayment,

            'clientgros': clientgros,

          'grant': grant,

       'lessGrant': lessGrant,

           'upfrontpayment': upfrontpayment,

           'year':year,

           'monthlypay': monthlypay,

           'monthlynetpalan': monthlynetpalan

        },

        success: function(data){

          console.log('SUCCESS');

        }

      });

   });

  }

    if (selectedCountry == 'Energy & Hot Water Diverter'){

$("#leftupforsix").hide();

$("#tup").show();

$("#nettshow").hide();

$("#nett").show();



      // document.getElementById("democust").innerHTML = f;

var mu = $("#democust").html();

if (mu == '4'){

  //alert("hello");

      var g = 6;

      document.getElementById("democust").innerHTML = g;

      // document.getElementById("seconslidrg").innerHTML = g;

       //$(".range-value").hide();

       $(".range-value").addClass("intro");

       $(".intro").append("<span class='customno'> 6</span>");

       $(".range-value").css({"left": "1%"});



}

if (mu == '5'){

 // alert("hello");

      var g = 6;

      document.getElementById("democust").innerHTML = g;

      // document.getElementById("seconslidrg").innerHTML = g;

      $(".range-value").addClass("intro");

       $(".intro").append("<span class='customno'> 6</span>");

       $(".range-value").css({"left": "1%"});



}

if (mu == '6'){



$(".range-value").css({"left": "1%"});

}

if (mu == '7'){



  $(".range-value").css({"left": "38px"});

}

if (mu == '8'){



  $(".range-value").css({"left": "75px"});

}

if (mu == '9'){



  $(".range-value").css({"left": "111px"});

}

if (mu == '10'){



  $(".range-value").css({"left": "29%"});

}

if (mu == '11'){



$(".range-value").css({"left": "36%"});

}

if (mu == '12'){



$(".range-value").css({"left": "43%"});

}

if (mu == '13'){



$(".range-value").css({"left": "50%"});

}

if (mu == '14'){



$(".range-value").css({"left": "57%"});

}

if (mu == '15'){



$(".range-value").css({"left": "64%"});

}

if (mu == '16'){



$(".range-value").css({"left": "71%"});

}

if (mu == '17'){



$(".range-value").css({"left": "78%"});

}

if (mu == '18'){



$(".range-value").css({"left": "85%"});

}

if (mu == '19'){



$(".range-value").css({"left": "92%"});

}

if (mu == '20'){



$(".range-value").css({"left": "100%"});

}

//$(".range-value").css({"color": "red", "left": "calc(29.5% + 2.5px)"});



// alert(mu);

      $(function(){

    $("#range").prop('min',6);

    $("#range").prop('max',20);



});

$("#range").attr("value","6");

$("#slidfive").hide();

$("#slidfour").hide();

// $("#slidfive").css({"visibility": "hidden"});

// $("#slidfour").css({"visibility": "hidden"});

//$("#tickmarks").css({"margin-left": "-55px"});



        $(".leftsidee").show();

        $("#showfrom").show();

        const

        range = document.getElementById('range'),

        rangeV = document.getElementById('rangeV'),

        setValue = ()=>{

          const

            newValue = Number( (range.value - range.min) * 100 / (range.max - range.min) ),

          newPosition = 10 - (newValue * 0.2);

          rangeV.innerHTML = `<span>${range.value}</span>`;

          rangeV.style.left = `calc(${newValue}% + (${newPosition}px))`;



  };

document.addEventListener("DOMContentLoaded", setValue);

range.addEventListener('range', setValue);

var slider = document.getElementById("range");

var f = slider.value;

document.cookie="f="+f+"; SameSite=None; Secure";

document.cookie="f="+f;

// document.getElementById("demo").innerHTML = f;

$(".leftsideepr").hide();

      $(".rightpr").css("border-right", "1px solid");

      $(".leftsidee").show();

    document.getElementById("demo").innerHTML = f;

    console.log(f);

   $("#Calc").show();

        jQuery(".prod2").hide();

       jQuery(".productsone").show();

  var year = "400";

 var kw = f * year;

   let part = kw.toString().slice(0,1);

let partt = kw.toString().slice(1,2);

var kWh  = part+','+partt; 

      // var kWh  = kw.toString().slice(0, -2);

    

     document.cookie="kw="+kWh+"; SameSite=None; Secure";

     document.cookie="kw="+kWh;

    



    document.getElementById("kw").innerHTML =  kWh  ;

//grant Value

var a = '1800';

var b = '2000';

var res = a/b;

var grant = res* kw;

document.cookie="grant="+grant+"; SameSite=None; Secure";

document.cookie="grant="+grant;

// var grant = grantr.toFixed()

document.getElementById("grant").innerHTML =  " €" + grant.toFixed();

document.getElementById("save").innerHTML =  " €" + grant.toFixed();

var ep = '8';

if (f >= 6 && f <=10){

    var E = '2000';

var com = kw - E;

var dval = '0.3';

var mul = com * dval;

var grant = mul + 1800;

document.cookie="grant="+grant+"; SameSite=None; Secure";

document.cookie="grant="+grant;

// var grant = grantn.toFixed();

document.getElementById("grant").innerHTML =  "€" + Number(grant).toFixed(0);

document.getElementById("save").innerHTML =  "€" + Number(grant).toFixed(0);

}

if(f == "11")

{

    var grant = '2400';

    document.cookie="grant="+grant+"; SameSite=None; Secure";

    document.cookie="grant="+grant;

    document.getElementById("grant").innerHTML = "€" + Number(grant).toFixed(0);

    document.getElementById("save").innerHTML = "€" + Number(grant).toFixed(0);

}

if(f >= 12)

{

    var grant = '2400';

    document.cookie="grant="+grant+"; SameSite=None; Secure";

    document.cookie="grant="+grant;

    document.getElementById("grant").innerHTML = "€" + grant ;

    document.getElementById("save").innerHTML = "€" + grant ;

}

var extrapanel = f-ep;

console.log(extrapanel);

var ep = '8';

var extrapanel = f-ep;

// var extrapanel = '0';

if(extrapanel <= 0){

    var extrapanel = '0'

   document.cookie="extrapanel="+extrapanel+"; SameSite=None; Secure";

   document.cookie="extrapanel="+extrapanel;

    document.getElementById("exp").innerHTML = extrapanel;

}

else{

   document.cookie="extrapanel="+extrapanel+"; SameSite=None; Secure";

   document.cookie="extrapanel="+extrapanel;

    document.getElementById("exp").innerHTML = extrapanel;

}

console.log(extrapanel);

var excostperpanel = '360';

var extracost = extrapanel * excostperpanel

document.cookie="extracost="+extracost+"; SameSite=None; Secure";

document.cookie="extracost="+extracost;

document.getElementById("expcost").innerHTML = "€" + extracost ;

// var L = '5940';

// var ClientGross = extracost + L;

// document.getElementById("clientgross").innerHTML = ClientGross +' Cost (No Grant)';

// var basecost = '7140';

if (f == 4 || f == 5 ){

  var year = "400";

 var kw = 6 * year;

   let part = kw.toString().slice(0,1);

let partt = kw.toString().slice(1,2);

var kWh  = part+','+partt; 

      // var kWh  = kw.toString().slice(0, -2);

    

     document.cookie="kw="+kWh+"; SameSite=None; Secure";

    document.cookie="kw="+kWh;



    document.getElementById("kw").innerHTML =  kWh;

  var grant = 1920;

document.cookie="grant="+grant+"; SameSite=None; Secure";

document.cookie="grant="+grant;

// var grant = grantr.toFixed()

document.getElementById("grant").innerHTML =  " €" + grant.toFixed();

  

$("#cto").hide();

  var fixedcost = '4426';

 var mi = fixedcost * 1.9;

var ser = $("#seli").html();

var stincov = parseInt(ser);

// alert(typeof(stincov));

var clientgros = 6780 + 1920 + stincov;

var per = ser * 8;

var perdived = per / 100 ;

var kw = f * year;



var myclientgross = clientgros - perdived;

document.cookie="myclientgross="+myclientgross+"; SameSite=None; Secure";

document.cookie="myclientgross="+myclientgross;

document.getElementById("myclientgross").innerHTML = "€" + myclientgross.toFixed();

  var clientgros1 = fixedcost * 1.9;

 document.cookie="clientgros="+clientgros+"; SameSite=None; Secure";

 document.cookie="clientgros="+clientgros;

 document.getElementById("clientgross").innerHTML = "€" +  Number(clientgros).toFixed();

document.getElementById("clientgrossbo").innerHTML = "€" + Number(clientgros).toFixed();

  // alert(clientgros);

}

if ( f == 5 ){

   var year = "400";

 var kw = 6 * year;

   let part = kw.toString().slice(0,1);

let partt = kw.toString().slice(1,2);

var kWh  = part+','+partt; 

      // var kWh  = kw.toString().slice(0, -2);

    

     document.cookie="kw="+kWh+"; SameSite=None; Secure";

     document.cookie="kw="+kWh;

    



    document.getElementById("kw").innerHTML =  kWh  ;

  var grant = 1920;

document.cookie="grant="+grant+"; SameSite=None; Secure";

document.cookie="grant="+grant;

// var grant = grantr.toFixed()

document.getElementById("grant").innerHTML =  " €" + grant.toFixed();

  $("#cto").hide();

  var fixedcost = '4426';

 var mi = fixedcost * 1.9;

var ser = $("#seli").html();

var stincov = parseInt(ser);

// alert(typeof(stincov));

var clientgros = 6780 + grant + stincov;

var per = ser * 8;

var perdived = per / 100 ;

var myclientgross = clientgros - perdived;

document.cookie="myclientgross="+myclientgross+"; SameSite=None; Secure";

document.cookie="myclientgross="+myclientgross;

document.getElementById("myclientgross").innerHTML = "€" + myclientgross.toFixed();

  var clientgros1 = fixedcost * 1.9;

 document.cookie="clientgros="+clientgros+"; SameSite=None; Secure";

 document.cookie="clientgros="+clientgros;

 document.getElementById("clientgross").innerHTML = "€" +  Number(clientgros).toFixed();

document.getElementById("clientgrossbo").innerHTML = "€" + Number(clientgros).toFixed();

  // alert(clientgros);

}

if ( f == 6 ){

  

  var fixedcost = '4426';

 var mi = 6780 + grant;



var ser = $("#seli").html();

var stincov = parseInt(ser);

// alert(typeof(stincov));

var clientgros = mi + stincov;

var per = ser * 8;

var perdived = per / 100 ;

var myclientgross = clientgros - perdived;

document.cookie="myclientgross="+myclientgross+"; SameSite=None; Secure";

document.cookie="myclientgross="+myclientgross;

document.getElementById("myclientgross").innerHTML = "€" + myclientgross.toFixed();

  var clientgros1 = fixedcost * 1.9;

 document.cookie="clientgros="+clientgros+"; SameSite=None; Secure";

 document.cookie="clientgros="+clientgros;

 document.getElementById("clientgross").innerHTML = "€" +  Number(clientgros).toFixed();

document.getElementById("clientgrossbo").innerHTML = "€" + Number(clientgros).toFixed();

  // alert(clientgros);

}

if ( f == 7 ){

  var fixedcost = '4426';

//  var mi = fixedcost * 1.9;

var mi = 7380 + grant;

var ser = $("#seli").html();

var stincov = parseInt(ser);

// alert(typeof(stincov));

var clientgros = mi + stincov;

var per = ser * 8;

var perdived = per / 100 ;

var myclientgross = clientgros - perdived;

document.cookie="myclientgross="+myclientgross+"; SameSite=None; Secure";

document.cookie="myclientgross="+myclientgross;

document.getElementById("myclientgross").innerHTML = "€" + myclientgross.toFixed();

  var clientgros1 = fixedcost * 1.9;

 document.cookie="clientgros="+clientgros+"; SameSite=None; Secure";

 document.cookie="clientgros="+clientgros;

 document.getElementById("clientgross").innerHTML = "€" +  Number(clientgros).toFixed();

document.getElementById("clientgrossbo").innerHTML = "€" + Number(clientgros).toFixed();

  // alert(clientgros);

}



if ( f == 8 ){

  var fixedcost = '4426';

//  var mi = fixedcost * 1.9;

var mi = 7931 + grant;

var ser = $("#seli").html();

var stincov = parseInt(ser);

// alert(typeof(stincov));

var clientgros = mi + stincov;

var per = ser * 8;

var perdived = per / 100 ;

var myclientgross = clientgros - perdived;

document.cookie="myclientgross="+myclientgross+"; SameSite=None; Secure";

document.cookie="myclientgross="+myclientgross;

document.getElementById("myclientgross").innerHTML = "€" + myclientgross.toFixed();

  var clientgros1 = fixedcost * 1.9;

 document.cookie="clientgros="+clientgros+"; SameSite=None; Secure";

 document.cookie="clientgros="+clientgros;

 document.getElementById("clientgross").innerHTML = "€" +  Number(clientgros).toFixed();

document.getElementById("clientgrossbo").innerHTML = "€" + Number(clientgros).toFixed();

  // alert(clientgros);

}if(f > 8){

 var devid =  extrapanel * 360;

 var fixedcost = devid + 4426;

  var clientgros1 = fixedcost * 1.9;

}

if(f == 8){

// var mi = clientgros1 - 393;

var mi = 7931 + grant;

var ser = $("#seli").html();

var stincov = parseInt(ser);

// alert(typeof(stincov));

var clientgros = mi + stincov;

var per = ser * 8;

var perdived = per / 100 ;

var myclientgross = clientgros - perdived;

document.cookie="myclientgross="+myclientgross+"; SameSite=None; Secure";

document.cookie="myclientgross="+myclientgross;

document.getElementById("myclientgross").innerHTML = "€" + myclientgross.toFixed();

 document.cookie="clientgros="+clientgros+"; SameSite=None; Secure";

 document.cookie="clientgros="+clientgros;

 document.getElementById("clientgross").innerHTML = "€" +  Number(clientgros).toFixed();

document.getElementById("clientgrossbo").innerHTML = "€" + Number(clientgros).toFixed();

}

if(f == 9){

//  var mi = clientgros1 - 248;

var mi = 8632 + grant;

var ser = $("#seli").html();

var stincov = parseInt(ser);

// alert(typeof(stincov));

var clientgros = mi + stincov;

var per = ser * 8;

var perdived = per / 100 ;

var myclientgross = clientgros - perdived;

document.cookie="myclientgross="+myclientgross+"; SameSite=None; Secure";

document.cookie="myclientgross="+myclientgross;

document.getElementById("myclientgross").innerHTML = "€" + myclientgross.toFixed();

  document.cookie="clientgros="+clientgros+"; SameSite=None; Secure";

  document.cookie="clientgros="+clientgros;

  document.getElementById("clientgross").innerHTML = "€" +  Number(clientgros).toFixed();

document.getElementById("clientgrossbo").innerHTML = "€" + Number(clientgros).toFixed();

}

if(f == 10){

//  var mi = clientgros1 - 342;

var mi = 9333 + grant;

var ser = $("#seli").html();

var stincov = parseInt(ser);

// alert(typeof(stincov));

var clientgros = mi + stincov;

var per = ser * 8;

var perdived = per / 100 ;

var myclientgross = clientgros - perdived;

document.cookie="myclientgross="+myclientgross+"; SameSite=None; Secure";

document.cookie="myclientgross="+myclientgross;

document.getElementById("myclientgross").innerHTML = "€" + myclientgross.toFixed();

 document.cookie="clientgros="+clientgros+"; SameSite=None; Secure";

 document.cookie="clientgros="+clientgros;

 document.getElementById("clientgross").innerHTML = "€" +  Number(clientgros).toFixed();

document.getElementById("clientgrossbo").innerHTML = "€" + Number(clientgros).toFixed();

}

if(f == 11){

//  var mi = clientgros1 - 202;

var mi = 10039 + 2400;

var ser = $("#seli").html();

var stincov = parseInt(ser);

// alert(typeof(stincov));

var clientgros = mi + stincov;

var per = ser * 8;

var perdived = per / 100 ;

var myclientgross = clientgros - perdived;

document.cookie="myclientgross="+myclientgross+"; SameSite=None; Secure";

document.cookie="myclientgross="+myclientgross;

document.getElementById("myclientgross").innerHTML = "€" + myclientgross.toFixed();

  document.cookie="clientgros="+clientgros+"; SameSite=None; Secure";

  document.cookie="clientgros="+clientgros;

  document.getElementById("clientgross").innerHTML = "€" +  Number(clientgros).toFixed();

document.getElementById("clientgrossbo").innerHTML = "€" + Number(clientgros).toFixed();

}

if(f == 12){

//  var mi = clientgros1 - 405;

var mi = 10974 + 2400;

var ser = $("#seli").html();

var stincov = parseInt(ser);

// alert(typeof(stincov));

var clientgros = mi + stincov;

var per = ser * 8;

var perdived = per / 100 ;

var myclientgross = clientgros - perdived;

document.cookie="myclientgross="+myclientgross+"; SameSite=None; Secure";

document.cookie="myclientgross="+myclientgross;

document.getElementById("myclientgross").innerHTML = "€" + myclientgross.toFixed();

  document.cookie="clientgros="+clientgros+"; SameSite=None; Secure";

  document.cookie="clientgros="+clientgros;

  document.getElementById("clientgross").innerHTML = "€" +  Number(clientgros).toFixed();

document.getElementById("clientgrossbo").innerHTML = "€" + Number(clientgros).toFixed();

}

if(f == 13){

//  var mi = clientgros1 - 369;

var mi = 11795 + 2400;

var ser = $("#seli").html();

var stincov = parseInt(ser);

// alert(typeof(stincov));

var clientgros = mi + stincov;

var per = ser * 8;

var perdived = per / 100 ;

var myclientgross = clientgros - perdived;

document.cookie="myclientgross="+myclientgross+"; SameSite=None; Secure";

document.cookie="myclientgross="+myclientgross;

document.getElementById("myclientgross").innerHTML = "€" + myclientgross.toFixed();

  document.cookie="clientgros="+clientgros+"; SameSite=None; Secure";

  document.cookie="clientgros="+clientgros;

  document.getElementById("clientgross").innerHTML = "€" +  Number(clientgros).toFixed();

document.getElementById("clientgrossbo").innerHTML = "€" + Number(clientgros).toFixed();

}

if(f == 14){

//  var mi = clientgros1 - 573;

var mi = 12616 + 2400;

var ser = $("#seli").html();

var stincov = parseInt(ser);

// alert(typeof(stincov));

var clientgros = mi + stincov;

var per = ser * 8;

var perdived = per / 100 ;

var myclientgross = clientgros - perdived;

document.cookie="myclientgross="+myclientgross+"; SameSite=None; Secure";

document.cookie="myclientgross="+myclientgross;

document.getElementById("myclientgross").innerHTML = "€" + myclientgross.toFixed();

  document.cookie="clientgros="+clientgros+"; SameSite=None; Secure";

  document.cookie="clientgros="+clientgros;

  document.getElementById("clientgross").innerHTML = "€" +  Number(clientgros).toFixed();

document.getElementById("clientgrossbo").innerHTML = "€" + Number(clientgros).toFixed();

}

if(f == 15){

//  var mi = clientgros1 - 537;

var mi = 13437 + 2400;

var ser = $("#seli").html();

var stincov = parseInt(ser);

// alert(typeof(stincov));

var clientgros = mi + stincov;

var per = ser * 8;

var perdived = per / 100 ;

var myclientgross = clientgros - perdived;

document.cookie="myclientgross="+myclientgross+"; SameSite=None; Secure";

document.cookie="myclientgross="+myclientgross;

document.getElementById("myclientgross").innerHTML = "€" + myclientgross.toFixed();

  document.cookie="clientgros="+clientgros+"; SameSite=None; Secure";

  document.cookie="clientgros="+clientgros;

  document.getElementById("clientgross").innerHTML = "€" +  Number(clientgros).toFixed();

document.getElementById("clientgrossbo").innerHTML = "€" + Number(clientgros).toFixed();

}

if(f == 16){

//  var mi = clientgros1 - 741;

var mi = 14258 + 2400;

var ser = $("#seli").html();

var stincov = parseInt(ser);

// alert(typeof(stincov));

var clientgros = mi + stincov;

var per = ser * 8;

var perdived = per / 100 ;

var myclientgross = clientgros - perdived;

document.cookie="myclientgross="+myclientgross+"; SameSite=None; Secure";

document.cookie="myclientgross="+myclientgross;

document.getElementById("myclientgross").innerHTML = "€" + myclientgross.toFixed();

  document.cookie="clientgros="+clientgros+"; SameSite=None; Secure";

  document.getElementById("clientgross").innerHTML = "€" +  Number(clientgros).toFixed();

document.getElementById("clientgrossbo").innerHTML = "€" + Number(clientgros).toFixed();

}

if(f == 17){

// var mi = clientgros1 - 705;

var mi = 15078 + 2400;

var ser = $("#seli").html();

var stincov = parseInt(ser);

// alert(typeof(stincov));

var clientgros = mi + stincov;

var per = ser * 8;

var perdived = per / 100 ;

var myclientgross = clientgros - perdived;

document.cookie="myclientgross="+myclientgross+"; SameSite=None; Secure";

document.cookie="myclientgross="+myclientgross;

document.getElementById("myclientgross").innerHTML = "€" + myclientgross.toFixed();

 document.cookie="clientgros="+clientgros+"; SameSite=None; Secure";

 document.cookie="clientgros="+clientgros;

 document.getElementById("clientgross").innerHTML = "€" +  Number(clientgros).toFixed();

document.getElementById("clientgrossbo").innerHTML = "€" + Number(clientgros).toFixed();

}

if(f == 18){

// var mi = clientgros1 - 909;

var mi = 15899 + 2400;

var ser = $("#seli").html();

var stincov = parseInt(ser);

// alert(typeof(stincov));

var clientgros = mi + stincov;

var per = ser * 8;

var perdived = per / 100 ;

var myclientgross = clientgros - perdived;

document.cookie="myclientgross="+myclientgross+"; SameSite=None; Secure";

document.cookie="myclientgross="+myclientgross;

document.getElementById("myclientgross").innerHTML = "€" + myclientgross.toFixed();

document.cookie="clientgros="+clientgros+"; SameSite=None; Secure";

document.cookie="clientgros="+clientgros;

document.getElementById("clientgross").innerHTML = "€" +  Number(clientgros).toFixed();

document.getElementById("clientgrossbo").innerHTML = "€" + Number(clientgros).toFixed();

}

if(f == 19){

//  var mi = clientgros1 - 873;

var mi = 16720 + 2400;

var ser = $("#seli").html();

var stincov = parseInt(ser);

// alert(typeof(stincov));

var clientgros = mi + stincov;

var per = ser * 8;

var perdived = per / 100 ;

var myclientgross = clientgros - perdived;

document.cookie="myclientgross="+myclientgross+"; SameSite=None; Secure";

document.cookie="myclientgross="+myclientgross;

document.getElementById("myclientgross").innerHTML = "€" + myclientgross.toFixed();

  document.cookie="clientgros="+clientgros+"; SameSite=None; Secure";

  document.cookie="clientgros="+clientgros;

  document.getElementById("clientgross").innerHTML = "€" +  Number(clientgros).toFixed();

document.getElementById("clientgrossbo").innerHTML = "€" + Number(clientgros).toFixed();



}

if(f == 20){

//  var mi = clientgros1 - 1077;

var mi = 17541 + 2400;

var ser = $("#seli").html();

var stincov = parseInt(ser);

// alert(typeof(stincov));

var clientgros = mi + stincov;

var per = ser * 8;

var perdived = per / 100 ;

var myclientgross = clientgros - perdived;

document.cookie="myclientgross="+myclientgross+"; SameSite=None; Secure";

document.cookie="myclientgross="+myclientgross;

document.getElementById("myclientgross").innerHTML = "€" + myclientgross.toFixed();

  document.cookie="clientgros="+clientgros+"; SameSite=None; Secure";

  document.cookie="clientgros="+clientgros;

  document.getElementById("clientgross").innerHTML = "€" +  Number(clientgros).toFixed();

document.getElementById("clientgrossbo").innerHTML = "€" + Number(clientgros).toFixed();

}

var fiv = 5;

// var clientgros = 7140 + extracost;

// document.cookie="clientgros="+clientgros+"; SameSite=None; Secure";

// document.getElementById("clientgross").innerHTML = "€" + clientgros;

//console.log(clientgros);

var lessGrant = clientgros - grant;

var ser = $("#seli").html();

var stincov = parseInt(ser);

var per = ser * 8;

//alert(per);

var perdived = per / 100 ;

var mygrant = lessGrant - perdived;

document.cookie="mygrant="+mygrant+"; SameSite=None; Secure";

document.cookie="mygrant="+mygrant;

document.getElementById("mygrant").innerHTML = "€" + Number(mygrant).toFixed();

document.getElementById("lessgranto").innerHTML = "€" + Number(mygrant).toFixed();

//alert(perdived);

// alert(typeof(stincov));

// var lessGrant = stincov + mi;

document.cookie="lessGrant="+lessGrant+"; SameSite=None; Secure";

document.getElementById("lessgrant").innerHTML = "€" + lessGrant.toFixed();

// console.log(lessGrant);

var upfrontpayment = clientgros * 0.92;

document.cookie="upfrontpayment="+upfrontpayment+"; SameSite=None; Secure";

document.cookie="upfrontpayment="+upfrontpayment;

document.getElementById("upfrontpayment").innerHTML = "€" + Number(clientgros).toFixed();

document.getElementById("upfrontpaymentto").innerHTML = "€" + upfrontpayment.toFixed();

console.log(upfrontpayment.toFixed());

document.getElementById("detail").innerHTML = "€" +  Number(clientgros).toFixed();

document.getElementById("detailone").innerHTML =  "€" + Number(grant).toFixed(0);

document.getElementById("detailto").innerHTML =  "€" + lessGrant.toFixed()

document.getElementById("finance").innerHTML =  "€" + upfrontpayment.toFixed() +' ';



const

  rangey = document.getElementById('rangey'),

  rangeZ = document.getElementById('rangeZ'),



  setVal = ()=>{



  const

      newValue = Number( (rangey.value - rangey.min) * 100 / (rangey.max - rangey.min) ),

      newPosition = 10 - (newValue * 0.2);

    rangeZ.innerHTML = `<span>${rangey.value}</span>`;

    rangeZ.style.left = `calc(${newValue}% + (${newPosition}px))`;

  };

document.addEventListener("DOMContentLoaded", setVal);

rangey.addEventListener('input', setVal);

var sliderp = document.getElementById("rangey");

var year = sliderp.value;

document.cookie="year="+year+"; SameSite=None; Secure";

document.cookie="year="+year;

document.getElementById("demo").innerHTML = year;

var monthly = year * 12;

var ser = $("#seli").html();

// alert(ser);

var divser = ser / monthly;

//alert(divser);

var monthre = clientgros / monthly;

//  alert(divser);

// var monthre = clientgros / monthly;

// alert(monthre);

var monthlypay = clientgros / monthly;

//alert(monthlypay);

document.cookie="monthlypay="+monthlypay+"; SameSite=None; Secure";

document.cookie="monthlypay="+monthlypay;

// alert(ser);

//var monthlypay = clientgros / monthly;

document.cookie="monthlypay="+monthlypay+"; SameSite=None; Secure";

document.cookie="monthlypay="+monthlypay;

var moplancountry = lessGrant / monthly;

//alert(moplancountry);

var monthlynetpalan = lessGrant / monthly;

document.cookie="monthlynetpalan="+monthlynetpalan+"; SameSite=None; Secure";

document.cookie="monthlynetpalan="+monthlynetpalan;

document.getElementById("ye").innerHTML = "€" + monthlypay.toFixed(2);

// var upval = $("#up-front").val();

// document.cookie="upval="+upval+"; SameSite=None; Secure";





var upval = $("#up-front:checked").val();

document.cookie="upval="+upval+"; SameSite=None; Secure";

document.cookie="upval="+upval;

$(document).ready(function(){

  $('input[type=radio][name=finnaa]').change(function() {

      if (this.value == 'payupfrontselect') {

        $("#lessgrant").hide();

        $("#mygrant").show();

        $("#clientgross").hide();

        $("#myclientgross").hide();

        var upval = $(this).val();



        document.cookie="upval="+upval+"; SameSite=None; Secure";

        document.cookie="upval="+upval;

        $(".fina").hide();

        $(".finato").show();

       //

      }

       if (this.value == 'finance') {

        $("#lessgrant").show();

        $("#mygrant").hide();

        $("#clientgross").hide();

        $("#myclientgross").hide();

          var upval = $(this).val();



          document.cookie="upval="+upval+"; SameSite=None; Secure";

          $(".fina").show();

        $(".finato").hide();

        //

      }

  });

});

document.getElementById("Monthlyent").innerHTML = "€" + Math.ceil(monthlynetpalan);

document.getElementById("Monthlyentto").innerHTML = "€" + Math.ceil(monthlynetpalan);

var cld = clientgros *  0.92;

// document.getElementById("cld").innerHTML = "€" + cld.toFixed();

var ser = $("#seli").html();

var per = ser * 8;

//alert(per);

var perdived = per / 100 ;

//alert(perdived);

 var finalv = ser - perdived;

 document.getElementById("finalv").innerHTML = "€" + finalv.toFixed();

 //alert(finalv)

var codval = clientgros * 0.92;

var cod = codval + 0;

var discou = clientgros - 0;

document.getElementById("discou").innerHTML = "€" + discou.toFixed();

document.cookie="cod="+cod+"; SameSite=None; Secure";

document.cookie="cod="+cod;

document.getElementById("cod").innerHTML = "€" + cod.toFixed();

var neting = cod - grant;

var nett =   cod - grant;

var c = $("#nett").html();

document.getElementById("c").innerHTML =  c;

document.getElementById("cto").innerHTML =  c;

document.cookie="nett="+nett+"; SameSite=None; Secure";

document.cookie="nett="+nett;

document.getElementById("nett").innerHTML = "€" + nett.toFixed();

document.getElementById("tup").innerHTML = "€" + nett.toFixed();

window.onload = setTimeout(function(){

 var grtval = $("#mygrant").html();

var gtvalto = $("#nett").html();

var iNum = parseInt(grtval);

var iNumto = parseInt(gtvalto);

var customedis = mygrant - nett;

document.getElementById("customvl").innerHTML = "€" + customedis.toFixed();

  // alert(customedis);

}, 100);

console.log(monthlynetpalan);

console.log(monthly);

sliderp.oninput = function() {

console.log(sliderp);

  var year = this.value;

  document.cookie="year="+year+"; SameSite=None; Secure";

  document.cookie="year="+year;

  document.getElementById("demo").innerHTML = year;

  var monthly = year * 12;

  var ser = $("#seli").html();

// alert(ser);

var divser = ser / monthly;

 //alert(divser);

var monthre = clientgros / monthly;

//  alert(divser);

// var monthre = clientgros / monthly;

// alert(monthre);

var monthlypay = clientgros / monthly;

//alert(monthlypay);

document.cookie="monthlypay="+monthlypay+"; SameSite=None; Secure";

document.cookie="monthlypay="+monthlypay;

// alert(ser);

//var monthlypay = clientgros / monthly;

document.cookie="monthlypay="+monthlypay+"; SameSite=None; Secure";

document.cookie="monthlypay="+monthlypay;

var moplancountry = lessGrant / monthly;

//alert(moplancountry);

var monthlynetpalan = lessGrant / monthly;

document.cookie="monthlynetpalan="+monthlynetpalan+"; SameSite=None; Secure";

document.cookie="monthlynetpalan="+monthlynetpalan;

document.getElementById("ye").innerHTML = "€" + monthlypay.toFixed(2);

document.getElementById("Monthlyent").innerHTML = "€" + monthlynetpalan.toFixed(2);

document.getElementById("Monthlyentto").innerHTML = "€" +monthlynetpalan.toFixed(2);

// var upval = $("#up-front").val();

// document.cookie="upval="+upval+"; SameSite=None; Secure";



var upval = $("#up-front:checked").val();

document.cookie="upval="+upval+"; SameSite=None; Secure";

document.cookie="upval="+upval;

$(document).ready(function(){

  $('input[type=radio][name=finnaa]').change(function() {

      if (this.value == 'payupfrontselect') {

        $("#lessgrant").hide();

        $("#mygrant").show();

        $("#clientgross").hide();

        $("#myclientgross").hide();

        var upval = $(this).val();



        document.cookie="upval="+upval+"; SameSite=None; Secure";

        document.cookie="upval="+upval;

        $(".fina").hide();

        $(".finato").show();

       //

      }

      if (this.value == 'finance') {

        $("#lessgrant").show();

        $("#mygrant").hide();

        $("#clientgross").hide();

        $("#myclientgross").hide();

          var upval = $(this).val();



          document.cookie="upval="+upval+"; SameSite=None; Secure";

          document.cookie="upval="+upval;

       $(".fina").show();

        $(".finato").hide();

         //

      }

  });

});

var cld = clientgros *  0.92;

// document.getElementById("cld").innerHTML = "€" + cld.toFixed();

var ser = $("#seli").html();

var per = ser * 8;

//alert(per);

var perdived = per / 100 ;

//alert(perdived);

 var finalv = ser - perdived;

 document.getElementById("finalv").innerHTML = "€" + finalv.toFixed();

 //alert(finalv)

var codval = clientgros * 0.92;

var cod = codval + 0;

var discou = mygrant - nett;

document.getElementById("discou").innerHTML = "€" + discou.toFixed();

document.cookie="cod="+cod+"; SameSite=None; Secure";

document.cookie="cod="+cod;

document.getElementById("cod").innerHTML = "€" + cod.toFixed();

var neting = cod - grant;

var nett =  cod - grant;

var c = $("#nett").html();

document.getElementById("c").innerHTML =  c;

document.getElementById("cto").innerHTML =  c;

document.cookie="nett="+nett+"; SameSite=None; Secure";

document.cookie="nett="+nett;

document.getElementById("nett").innerHTML = "€" + nett.toFixed();

document.getElementById("tup").innerHTML = "€" + nett.toFixed();

window.onload = setTimeout(function(){

 var grtval = $("#mygrant").html();

var gtvalto = $("#nett").html();

var iNum = parseInt(grtval);

var iNumto = parseInt(gtvalto);

var customedis = mygrant - nett;

document.getElementById("customvl").innerHTML = "€" + customedis.toFixed();

  // alert(customedis);

}, 100);



console.log(monthlynetpalan);

console.log(monthly);

  }

var monthly = year * 12;

var ser = $("#seli").html();

// alert(ser);

var divser = ser / monthly;

//alert(divser);

var monthre = clientgros / monthly;

//  alert(divser);

// var monthre = clientgros / monthly;

// alert(monthre);

var monthlypay = clientgros / monthly;

//alert(monthlypay);

document.cookie="monthlypay="+monthlypay+"; SameSite=None; Secure";

document.cookie="monthlypay="+monthlypay;

//var monthlypay = clientgros / monthly;

document.cookie="monthlypay="+monthlypay+"; SameSite=None; Secure";

document.cookie="monthlypay="+monthlypay;

var moplancountry = lessGrant / monthly;

//alert(moplancountry);

var monthlynetpalan = lessGrant / monthly;

document.cookie="monthlynetpalan="+monthlynetpalan+"; SameSite=None; Secure";

document.cookie="monthlynetpalan="+monthlynetpalan;

document.getElementById("ye").innerHTML = "€" + monthlypay.toFixed(2);

document.getElementById("Monthlyent").innerHTML = "€" + monthlynetpalan.toFixed(2);

document.getElementById("Monthlyentto").innerHTML = "€" +monthlynetpalan.toFixed(2);

// var upval = $("#up-front").val();

// document.cookie="upval="+upval+"; SameSite=None; Secure";



var upval = $("#up-front:checked").val();

document.cookie="upval="+upval+"; SameSite=None; Secure";

document.cookie="upval="+upval;



$(document).ready(function(){

  $('input[type=radio][name=finnaa]').change(function() {

      if (this.value == 'payupfrontselect') {

 $("#lessgrant").hide();

        $("#mygrant").show();

        $("#clientgross").hide();

        $("#myclientgross").hide();

        var upval = $(this).val();



        document.cookie="upval="+upval+"; SameSite=None; Secure";

        document.cookie="upval="+upval;

        $(".fina").hide();

        $(".finato").show();

        //

      }

       if (this.value == 'finance') {

        $("#lessgrant").show();

        $("#mygrant").hide();

        $("#clientgross").hide();

        $("#myclientgross").hide();

          var upval = $(this).val();



          document.cookie="upval="+upval+"; SameSite=None; Secure";

          document.cookie="upval="+upval;

          $(".fina").show();

        $(".finato").hide();

          //



     }

  });

});

var cld = clientgros *  0.92;

// document.getElementById("cld").innerHTML = "€" + cld.toFixed();

var ser = $("#seli").html();

var per = ser * 8;

//alert(per);

var perdived = per / 100 ;

//alert(perdived);

 var finalv = ser - perdived;

 document.getElementById("finalv").innerHTML = "€" + finalv.toFixed();

1 //alert(finalv)

var codval = clientgros * 0.92;

var cod = codval + 0;

var discou = mygrant - nett;

document.getElementById("discou").innerHTML = "€" + discou.toFixed();

document.cookie="cod="+cod+"; SameSite=None; Secure";

document.cookie="cod="+cod;

document.getElementById("cod").innerHTML = "€" + cod.toFixed();

var neting = cod - grant;

var nett =   cod - grant;

var c = $("#nett").html();

document.getElementById("c").innerHTML =  c;

document.getElementById("cto").innerHTML =  c;

document.cookie="nett="+nett+"; SameSite=None; Secure";

document.cookie="nett="+nett;

document.getElementById("nett").innerHTML = "€" + nett.toFixed();

document.getElementById("tup").innerHTML = "€" + nett.toFixed();

window.onload = setTimeout(function(){

 var grtval = $("#mygrant").html();

var gtvalto = $("#nett").html();

var iNum = parseInt(grtval);

var iNumto = parseInt(gtvalto);

var customedis = mygrant - nett;

document.getElementById("customvl").innerHTML = "€" + customedis.toFixed();

  // alert(customedis);

}, 100);

console.log(monthlynetpalan);

console.log(monthly);

$("#ale").hide();

slider.oninput = function() {

 var f = this.value;

  document.cookie="f="+f+"; SameSite=None; Secure";

  document.cookie="f="+f;

  document.getElementById("demo").innerHTML = f;

  $(".leftsideepr").hide();

      $(".rightpr").css("border-right", "1px solid");

      $(".leftsidee").show();

    document.getElementById("demo").innerHTML = f;

  console.log(f);

    if(f < 4){

document.getElementById("democust").innerHTML = f;

// alert(f);

  $("#Calc").hide();

  $("#ale").show();

  var ale = "Plase Choos Min 4 ";

  document.getElementById("ale").innerHTML = ale;





}

else{

  document.getElementById("democust").innerHTML = f;

//alert(f);



  $("#Calc").show();

  $("#ale").hide();

}

        jQuery(".prod2").hide();

       jQuery(".productsone").show();

        var year = "400";

      var kw = f * year;

       let part = kw.toString().slice(0,1);

let partt = kw.toString().slice(1,2);

var kWh  = part+','+partt; 

      // var kWh  = kw.toString().slice(0, -2);

    

     document.cookie="kw="+kWh+"; SameSite=None; Secure";

    document.cookie="kw="+kWh;



    document.getElementById("kw").innerHTML =  kWh  ;

//grant Value

var a = '1800';

var b = '2000';

var res = a/b;

var grant = res* kw;

document.cookie="grant="+grant+"; SameSite=None; Secure";

document.cookie="grant="+grant;

// var grant = grantr.toFixed()

document.getElementById("grant").innerHTML =  " €" + grant.toFixed();

document.getElementById("save").innerHTML =  " €" + grant.toFixed();

var ep = '8';

if (f >= 6 && f <=10){

    var E = '2000';

var com = kw - E;

var dval = '0.3';

var mul = com * dval;

var grant = mul + 1800;

document.cookie="grant="+grant+"; SameSite=None; Secure";

document.cookie="grant="+grant;

// var grant = grantn.toFixed();

document.getElementById("grant").innerHTML =  "€" + Number(grant).toFixed(0);

document.getElementById("save").innerHTML =  "€" + Number(grant).toFixed(0);

}

if(f == "11")

{

    var grant = '2400';

   document.cookie="grant="+grant+"; SameSite=None; Secure";

   document.cookie="grant="+grant;

    document.getElementById("grant").innerHTML = "€" + Number(grant).toFixed(0);

    document.getElementById("save").innerHTML = "€" + Number(grant).toFixed(0);

}

if(f >= 12)

{

    var grant = '2400'

    document.cookie="grant="+grant+"; SameSite=None; Secure";

    document.cookie="grant="+grant;

    document.getElementById("grant").innerHTML = "€" + grant ;

    document.getElementById("save").innerHTML = "€" + grant ;

}

var extrapanel = f-ep;

console.log(extrapanel);

var ep = '8';

var extrapanel = f-ep;

// var extrapanel = '0';

if(extrapanel <= 0){

    var extrapanel = '0'

    document.cookie="extrapanel="+extrapanel+"; SameSite=None; Secure";

    document.cookie="extrapanel="+extrapanel;

    document.getElementById("exp").innerHTML = extrapanel;

}

else{

    document.cookie="extrapanel="+extrapanel+"; SameSite=None; Secure";

    document.cookie="extrapanel="+extrapanel;

    document.getElementById("exp").innerHTML = extrapanel;

}

console.log(extrapanel);

var excostperpanel = '360';

var extracost = extrapanel * excostperpanel

document.cookie="extracost="+extracost+"; SameSite=None; Secure";

document.cookie="extracost="+extracost;

document.getElementById("expcost").innerHTML = "€" + extracost ;

// var L = '7140';

// var ClientGross = extracost + L;

// document.getElementById("clientgross").innerHTML = ClientGross +' Cost (No Grant)';

var basecost = '7140';

var fiv = 5;

if (f == 4 || f == 5 || f == 6 || f == 7 || f == 8){



  var fixedcost = '4426';

var mi = fixedcost * 1.9;

var ser = $("#seli").html();

var stincov = parseInt(ser);

// alert(typeof(stincov));

var clientgros = 6780 + grant + stincov;

// var ch = 6775 + grant + stincov;

var per = ser * 8;

var perdived = per / 100 ;

var myclientgross = clientgros - perdived;

document.cookie="myclientgross="+myclientgross+"; SameSite=None; Secure";

document.cookie="myclientgross="+myclientgross;

document.getElementById("myclientgross").innerHTML = "€" + myclientgross.toFixed();

  var clientgros1 = fixedcost * 1.9;

  document.cookie="clientgros="+clientgros+"; SameSite=None; Secure";

  document.cookie="clientgros="+clientgros;

 //document.getElementById("clientgross").innerHTML = "€" +  Number(clientgros).toFixed();

document.getElementById("clientgrossbo").innerHTML = "€" + Number(clientgros).toFixed();

  // alert(clientgros);

}



if ( f == 7 ){

  var fixedcost = '4426';

var mi = fixedcost * 1.9;

var ser = $("#seli").html();

var stincov = parseInt(ser);

// alert(typeof(stincov));

var clientgros = 7380 + grant + stincov;

var per = ser * 8;

var perdived = per / 100 ;

var myclientgross = clientgros - perdived;

document.cookie="myclientgross="+myclientgross+"; SameSite=None; Secure";

document.cookie="myclientgross="+myclientgross;

document.getElementById("myclientgross").innerHTML = "€" + myclientgross.toFixed();

  var clientgros1 = fixedcost * 1.9;

  document.cookie="clientgros="+clientgros+"; SameSite=None; Secure";

  document.cookie="clientgros="+clientgros;

 //document.getElementById("clientgross").innerHTML = "€" +  Number(clientgros).toFixed();

document.getElementById("clientgrossbo").innerHTML = "€" + Number(clientgros).toFixed();

  // alert(clientgros);

}

if(f > 8){

  var devid =  extrapanel * 360;

  var fixedcost = devid + 4426;

  var clientgros1 = fixedcost * 1.9;

}

if(f == 8){

 var mi = clientgros1 - 393;

var ser = $("#seli").html();

var stincov = parseInt(ser);

// alert(typeof(stincov));

var clientgros = 7931 + grant + stincov;

var per = ser * 8;

var perdived = per / 100 ;

var myclientgross = clientgros - perdived;

document.cookie="myclientgross="+myclientgross+"; SameSite=None; Secure";

document.cookie="myclientgross="+myclientgross;

document.getElementById("myclientgross").innerHTML = "€" + myclientgross.toFixed();

  document.cookie="clientgros="+clientgros+"; SameSite=None; Secure";

  document.cookie="clientgros="+clientgros;

  //document.getElementById("clientgross").innerHTML = "€" +  Number(clientgros).toFixed();

document.getElementById("clientgrossbo").innerHTML = "€" + Number(clientgros).toFixed();

}

if(f == 9){

var mi = clientgros1 - 248;

var ser = $("#seli").html();

var stincov = parseInt(ser);

// alert(typeof(stincov));

var clientgros = 8632 + grant + stincov;

var per = ser * 8;

var perdived = per / 100 ;

var myclientgross = clientgros - perdived;

document.cookie="myclientgross="+myclientgross+"; SameSite=None; Secure";

document.cookie="myclientgross="+myclientgross;

document.getElementById("myclientgross").innerHTML = "€" + myclientgross.toFixed();

  document.cookie="clientgros="+clientgros+"; SameSite=None; Secure";

  document.cookie="clientgros="+clientgros;

  //document.getElementById("clientgross").innerHTML = "€" +  Number(clientgros).toFixed();

document.getElementById("clientgrossbo").innerHTML = "€" + Number(clientgros).toFixed();



}

if(f == 10){

  var mi = clientgros1 - 342;

var ser = $("#seli").html();

var stincov = parseInt(ser);

// alert(typeof(stincov));

var clientgros = 9333 + grant + stincov;

var per = ser * 8;

var perdived = per / 100 ;

var myclientgross = clientgros - perdived;

document.cookie="myclientgross="+myclientgross+"; SameSite=None; Secure";

document.cookie="myclientgross="+myclientgross;

document.getElementById("myclientgross").innerHTML = "€" + myclientgross.toFixed();

  document.cookie="clientgros="+clientgros+"; SameSite=None; Secure";

  document.cookie="clientgros="+clientgros;

  //document.getElementById("clientgross").innerHTML = "€" +  Number(clientgros).toFixed();

document.getElementById("clientgrossbo").innerHTML = "€" + Number(clientgros).toFixed();



}



if(f == 11){

var mi = clientgros1 - 202;

var ser = $("#seli").html();

var stincov = parseInt(ser);

// alert(typeof(stincov));

var clientgros = 10039 + 2400 + stincov;

var per = ser * 8;

var perdived = per / 100 ;

var myclientgross = clientgros - perdived;

document.cookie="myclientgross="+myclientgross+"; SameSite=None; Secure";

document.cookie="myclientgross="+myclientgross;

document.getElementById("myclientgross").innerHTML = "€" + myclientgross.toFixed();

  document.cookie="clientgros="+clientgros+"; SameSite=None; Secure";

  document.cookie="clientgros="+clientgros;

  //document.getElementById("clientgross").innerHTML = "€" +  Number(clientgros).toFixed();

document.getElementById("clientgrossbo").innerHTML = "€" + Number(clientgros).toFixed();

}

if(f == 12){

var mi = clientgros1 - 405;

var ser = $("#seli").html();

var stincov = parseInt(ser);

// alert(typeof(stincov));

var clientgros = 10974 + 2400 + stincov;

var per = ser * 8;

var perdived = per / 100 ;

var myclientgross = clientgros - perdived;

document.cookie="myclientgross="+myclientgross+"; SameSite=None; Secure";

document.cookie="myclientgross="+myclientgross;

document.getElementById("myclientgross").innerHTML = "€" + myclientgross.toFixed();

  document.cookie="clientgros="+clientgros+"; SameSite=None; Secure";

  document.cookie="clientgros="+clientgros;

  //document.getElementById("clientgross").innerHTML = "€" +  Number(clientgros).toFixed();

document.getElementById("clientgrossbo").innerHTML = "€" + Number(clientgros).toFixed();

}



if(f == 13){

var mi = clientgros1 - 369;

var ser = $("#seli").html();

var stincov = parseInt(ser);

// alert(typeof(stincov));

var clientgros = 11795 + 2400 + stincov;

var per = ser * 8;

var perdived = per / 100 ;

var myclientgross = clientgros - perdived;

document.cookie="myclientgross="+myclientgross+"; SameSite=None; Secure";

document.cookie="myclientgross="+myclientgross;

document.getElementById("myclientgross").innerHTML = "€" + myclientgross.toFixed();

 document.cookie="clientgros="+clientgros+"; SameSite=None; Secure";

 document.cookie="clientgros="+clientgros;

  //document.getElementById("clientgross").innerHTML = "€" +  Number(clientgros).toFixed();

document.getElementById("clientgrossbo").innerHTML = "€" + Number(clientgros).toFixed();

}

if(f == 14){

var mi = clientgros1 - 573;

var ser = $("#seli").html();

var stincov = parseInt(ser);

// alert(typeof(stincov));

var clientgros = 12616 + 2400 + stincov;

var per = ser * 8;

var perdived = per / 100 ;

var myclientgross = clientgros - perdived;

document.cookie="myclientgross="+myclientgross+"; SameSite=None; Secure";

document.cookie="myclientgross="+myclientgross;

document.getElementById("myclientgross").innerHTML = "€" + myclientgross.toFixed();

document.cookie="clientgros="+clientgros+"; SameSite=None; Secure";

document.cookie="clientgros="+clientgros;

  //document.getElementById("clientgross").innerHTML = "€" +  Number(clientgros).toFixed();



document.getElementById("clientgrossbo").innerHTML = "€" + Number(clientgros).toFixed();



}



if(f == 15){

var mi = clientgros1 - 537;

var ser = $("#seli").html();

var stincov = parseInt(ser);

// alert(typeof(stincov));

var clientgros = 13437 + 2400 + stincov;

var per = ser * 8;

var perdived = per / 100 ;

var myclientgross = clientgros - perdived;

document.cookie="myclientgross="+myclientgross+"; SameSite=None; Secure";

document.cookie="myclientgross="+myclientgross;

document.getElementById("myclientgross").innerHTML = "€" + myclientgross.toFixed();

  document.cookie="clientgros="+clientgros+"; SameSite=None; Secure";

  document.cookie="clientgros="+clientgros;

  //document.getElementById("clientgross").innerHTML = "€" +  Number(clientgros).toFixed();

document.getElementById("clientgrossbo").innerHTML = "€" + Number(clientgros).toFixed();

}

if(f == 16){

var mi = clientgros1 - 741;

var ser = $("#seli").html();

var stincov = parseInt(ser);

// alert(typeof(stincov));

var clientgros = 14258 + 2400 + stincov;

var per = ser * 8;

var perdived = per / 100 ;

var myclientgross = clientgros - perdived;

document.cookie="myclientgross="+myclientgross+"; SameSite=None; Secure";

document.cookie="myclientgross="+myclientgross;

document.getElementById("myclientgross").innerHTML = "€" + myclientgross.toFixed();

 document.cookie="clientgros="+clientgros+"; SameSite=None; Secure";

 document.cookie="clientgros="+clientgros;

  //document.getElementById("clientgross").innerHTML = "€" +  Number(clientgros).toFixed();

document.getElementById("clientgrossbo").innerHTML = "€" + Number(clientgros).toFixed();

}

if(f == 17){

var mi = clientgros1 - 705;

var ser = $("#seli").html();

var stincov = parseInt(ser);

// alert(typeof(stincov));

var clientgros = 15078 + 2400 + stincov;

var per = ser * 8;

var perdived = per / 100 ;

var myclientgross = clientgros - perdived;

document.cookie="myclientgross="+myclientgross+"; SameSite=None; Secure";

document.cookie="myclientgross="+myclientgross;

document.getElementById("myclientgross").innerHTML = "€" + myclientgross.toFixed();

  document.cookie="clientgros="+clientgros+"; SameSite=None; Secure";

  document.cookie="clientgros="+clientgros;

  //document.getElementById("clientgross").innerHTML = "€" +  Number(clientgros).toFixed();

document.getElementById("clientgrossbo").innerHTML = "€" + Number(clientgros).toFixed();

}

if(f == 18){

var mi = clientgros1 - 909;

var ser = $("#seli").html();

var stincov = parseInt(ser);

// alert(typeof(stincov));

var clientgros = 15899 + 2400 + stincov;

var per = ser * 8;

var perdived = per / 100 ;

var myclientgross = clientgros - perdived;

document.cookie="myclientgross="+myclientgross+"; SameSite=None; Secure";

document.cookie="myclientgross="+myclientgross;

document.getElementById("myclientgross").innerHTML = "€" + myclientgross.toFixed();

  document.cookie="clientgros="+clientgros+"; SameSite=None; Secure";

  document.cookie="clientgros="+clientgros;

  //document.getElementById("clientgross").innerHTML = "€" +  Number(clientgros).toFixed();

document.getElementById("clientgrossbo").innerHTML = "€" + Number(clientgros).toFixed();

}

if(f == 19){

var mi = clientgros1 - 873;

var ser = $("#seli").html();

var stincov = parseInt(ser);

// alert(typeof(stincov));

var clientgros = 16720 + 2400 + stincov;

var per = ser * 8;

var perdived = per / 100 ;

var myclientgross = clientgros - perdived;

document.cookie="myclientgross="+myclientgross+"; SameSite=None; Secure";

document.cookie="myclientgross="+myclientgross;

document.getElementById("myclientgross").innerHTML = "€" + myclientgross.toFixed();



  document.cookie="clientgros="+clientgros+"; SameSite=None; Secure";

  document.cookie="clientgros="+clientgros;

  //document.getElementById("clientgross").innerHTML = "€" +  Number(clientgros).toFixed();

document.getElementById("clientgrossbo").innerHTML = "€" + Number(clientgros).toFixed();

}

if(f == 20){

var mi = clientgros1 - 1077;

var ser = $("#seli").html();

var stincov = parseInt(ser);

// alert(typeof(stincov));

var clientgros = 17541 + 2400 + stincov;

var per = ser * 8;

var perdived = per / 100 ;

var myclientgross = clientgros - perdived;

document.cookie="myclientgross="+myclientgross+"; SameSite=None; Secure";

document.cookie="myclientgross="+myclientgross;

document.getElementById("myclientgross").innerHTML = "€" + myclientgross.toFixed();

  document.cookie="clientgros="+clientgros+"; SameSite=None; Secure";

  document.cookie="clientgros="+clientgros;

  //document.getElementById("clientgross").innerHTML = "€" +  Number(clientgros).toFixed();

document.getElementById("clientgrossbo").innerHTML = "€" + Number(clientgros).toFixed();

}

// var clientgros = 7140 + extracost;

// document.cookie="clientgros="+clientgros+"; SameSite=None; Secure";

// document.getElementById("clientgross").innerHTML = "€" + clientgros;

//console.log(clientgros);

var lessGrant = clientgros - grant;

var ser = $("#seli").html();

var stincov = parseInt(ser);

var per = ser * 8;

//alert(per);

var perdived = per / 100 ;

var mygrant = lessGrant - perdived;

document.cookie="mygrant="+mygrant+"; SameSite=None; Secure";

document.cookie="mygrant="+mygrant;

document.getElementById("mygrant").innerHTML = "€" + Number(mygrant).toFixed();

document.getElementById("lessgranto").innerHTML = "€" + Number(mygrant).toFixed();

// alert(typeof(stincov));

// var lessGrant = stincov + mi;

document.cookie="lessGrant="+lessGrant+"; SameSite=None; Secure";

document.cookie="lessGrant="+lessGrant;

document.getElementById("lessgrant").innerHTML = "€" + lessGrant.toFixed();

// console.log(lessGrant);

var upfrontpayment = clientgros * 0.92;

document.cookie="upfrontpayment="+upfrontpayment+"; SameSite=None; Secure";

document.cookie="upfrontpayment="+upfrontpayment;

document.getElementById("upfrontpayment").innerHTML = "€" + clientgros;

document.getElementById("upfrontpaymentto").innerHTML = "€" + upfrontpayment.toFixed();

console.log(upfrontpayment.toFixed());

document.getElementById("detail").innerHTML = "€" + clientgros;

document.getElementById("detailone").innerHTML =  "€" + Number(grant).toFixed(0);

document.getElementById("detailto").innerHTML =  "€" + lessGrant.toFixed()

document.getElementById("finance").innerHTML =  "€" + upfrontpayment.toFixed() +' ';

const

  rangey = document.getElementById('rangey'),

  rangeZ = document.getElementById('rangeZ'),

  setVal = ()=>{

   const

      newValue = Number( (rangey.value - rangey.min) * 100 / (rangey.max - rangey.min) ),

      newPosition = 10 - (newValue * 0.2);

    rangeZ.innerHTML = `<span>${rangey.value}</span>`;

   rangeZ.style.left = `calc(${newValue}% + (${newPosition}px))`;

};

document.addEventListener("DOMContentLoaded", setVal);

rangey.addEventListener('input', setVal);

var sliderp = document.getElementById("rangey");

var year = sliderp.value;

document.cookie="year="+year+"; SameSite=None; Secure";

document.cookie="year="+year;

document.getElementById("demo").innerHTML = year;

var monthly = year * 12;

var ser = $("#seli").html();

// alert(ser);

var divser = ser / monthly;

 //alert(divser);

var monthre = clientgros / monthly;

//  alert(divser);

// var monthre = clientgros / monthly;

// alert(monthre);

var monthlypay = clientgros / monthly;

//alert(monthlypay);

document.cookie="monthlypay="+monthlypay+"; SameSite=None; Secure";

document.cookie="monthlypay="+monthlypay;

//var monthlypay = clientgros / monthly;

document.cookie="monthlypay="+monthlypay+"; SameSite=None; Secure";

document.cookie="monthlypay="+monthlypay;

var moplancountry = lessGrant / monthly;

//alert(moplancountry);

var monthlynetpalan = lessGrant / monthly;

document.cookie="monthlynetpalan="+monthlynetpalan+"; SameSite=None; Secure";

document.cookie="monthlynetpalan="+monthlynetpalan;

document.getElementById("ye").innerHTML = "€" + monthlypay.toFixed(2);

document.getElementById("Monthlyent").innerHTML = "€" + monthlynetpalan.toFixed(2);

document.getElementById("Monthlyentto").innerHTML = "€" +monthlynetpalan.toFixed(2);



var upval = $("#up-front").val();

document.cookie="upval="+upval+"; SameSite=None; Secure";

document.cookie="upval="+upval;

$(document).ready(function(){

$('input[type=radio][name=finnaa]').change(function() {

      if (this.value == 'payupfrontselect') {

        $("#lessgrant").hide();

        $("#mygrant").show();

        $("#clientgross").hide();

        $("#myclientgross").hide();

        var upval = $(this).val();



        document.cookie="upval="+upval+"; SameSite=None; Secure";

        document.cookie="upval="+upval;

       $(".fina").hide();

        $(".finato").show();

       //

      }

       if (this.value == 'finance') {

        $("#lessgrant").show();

        $("#mygrant").hide();

        $("#clientgross").hide();

       $("#myclientgross").hide();

         var upval = $(this).val();



         document.cookie="upval="+upval+"; SameSite=None; Secure";

         document.cookie="upval="+upval;

          $(".fina").show();

       $(".finato").hide();

         //

      }

  });

});

var cld = clientgros *  0.92;

// document.getElementById("cld").innerHTML = "€" + cld.toFixed();

var ser = $("#seli").html();

var per = ser * 8;

//alert(per);

var perdived = per / 100 ;

//alert(perdived);

 var finalv = ser - perdived;

 document.getElementById("finalv").innerHTML = "€" + finalv.toFixed();

 //alert(finalv)

var codval = clientgros * 0.92;

var cod = codval + 0;

var discou = mygrant - nett;

document.getElementById("discou").innerHTML = "€" + discou.toFixed();

document.cookie="cod="+cod+"; SameSite=None; Secure";

document.cookie="cod="+cod;

document.getElementById("cod").innerHTML = "€" + cod.toFixed();

var neting = cod - grant;

var nett =  cod - grant;

var c = $("#nett").html();

document.getElementById("c").innerHTML =  c;

document.getElementById("cto").innerHTML =  c;

document.cookie="nett="+nett+"; SameSite=None; Secure";

document.cookie="nett="+nett;

document.getElementById("nett").innerHTML = "€" + nett.toFixed();

document.getElementById("tup").innerHTML = "€" + nett.toFixed();

window.onload = setTimeout(function(){

  var grtval = $("#mygrant").html();

var gtvalto = $("#nett").html();

var iNum = parseInt(grtval);



var iNumto = parseInt(gtvalto);

var customedis = mygrant - nett;

document.getElementById("customvl").innerHTML = "€" + customedis.toFixed();



  // alert(customedis);

}, 100);

console.log(monthlynetpalan);

console.log(monthly);

jQuery('#noyear').on('change', function() {

var year = ( this.value );

document.cookie="year="+year+"; SameSite=None; Secure";

document.cookie="year="+year;

var monthly = year * 12;

var ser = $("#seli").html();

// alert(ser);

var divser = ser / monthly;

//  alert(divser);

// var monthre = clientgros / monthly;

// alert(monthre);

var monthlypay = clientgros / monthly;

//alert(monthlypay);

document.cookie="monthlypay="+monthlypay+"; SameSite=None; Secure";

document.cookie="monthlypay="+monthlypay;

//var monthlypay = clientgros / monthly;

document.cookie="monthlypay="+monthlypay+"; SameSite=None; Secure";

document.cookie="monthlypay="+monthlypay

var moplancountry = lessGrant / monthly;

//alert(moplancountry);

var monthlynetpalan = lessGrant / monthly;

document.cookie="monthlynetpalan="+monthlynetpalan+"; SameSite=None; Secure";

document.cookie="monthlynetpalan="+monthlynetpalan;

document.getElementById("ye").innerHTML = "€" + monthlypay.toFixed(2);

document.getElementById("Monthlyent").innerHTML = "€" + monthlynetpalan.toFixed(2);

document.getElementById("Monthlyentto").innerHTML = "€" +monthlynetpalan.toFixed(2);

// var upval = $("#up-front").val();

// document.cookie="upval="+upval+"; SameSite=None; Secure";



var upval = $("#up-front:checked").val();

document.cookie="upval="+upval+"; SameSite=None; Secure";

document.cookie="upval="+upval;

$(document).ready(function(){

 $('input[type=radio][name=finnaa]').change(function() {

      if (this.value == 'payupfrontselect') {

        $("#lessgrant").hide();

        $("#mygrant").show();

        $("#clientgross").hide();

        $("#myclientgross").hide();

        var upval = $(this).val();



        document.cookie="upval="+upval+"; SameSite=None; Secure";

        document.cookie="upval="+upval;

        $(".fina").hide();

        $(".finato").show();

       //

    }

       if (this.value == 'finance') {

        $("#lessgrant").show();

        $("#mygrant").hide();

        $("#clientgross").hide();

        $("#myclientgross").hide();

          var upval = $(this).val();



          document.cookie="upval="+upval+"; SameSite=None; Secure";

          document.cookie="upval="+upval;

          $(".fina").show();

        $(".finato").hide();

         //

      }

  });

});

// alert(me)

var c = $("#nett").html();

document.getElementById("c").innerHTML =  c;

document.getElementById("cto").innerHTML =  c;

// alert(c);

var ser = $("#seli").html();

var per = ser * 8;

//alert(per);

var perdived = per / 100 ;

//alert(perdived);

 var finalv = ser - perdived;

 document.getElementById("finalv").innerHTML = "€" + finalv.toFixed();

 //alert(finalv)

var codval = clientgros * 0.92;

var cod = codval + 0;

var discou = mygrant - nett;

document.getElementById("discou").innerHTML = "€" + discou.toFixed();

document.cookie="cod="+cod+"; SameSite=None; Secure";

document.cookie="cod="+cod;

document.getElementById("cod").innerHTML = "€" + cod.toFixed();

var neting = cod - grant;

var nett =   cod - grant;

var c = $("#nett").html();

document.getElementById("c").innerHTML =  c;

document.getElementById("cto").innerHTML =  c;

document.cookie="nett="+nett+"; SameSite=None; Secure";

document.cookie="nett="+nett;

document.getElementById("nett").innerHTML = "€" + nett.toFixed();

document.getElementById("tup").innerHTML = "€" + nett.toFixed();

window.onload = setTimeout(function(){

  var grtval = $("#mygrant").html();

var gtvalto = $("#nett").html();

var iNum = parseInt(grtval);

var iNumto = parseInt(gtvalto);

var customedis = mygrant - nett;

document.getElementById("customvl").innerHTML = "€" + customedis.toFixed();

  // alert(customedis);

}, 100);

console.log(monthlynetpalan);

console.log(monthly);

});

  }

  $("#qoutefromcu").submit(function(event){

        event.preventDefault();

        var textinput = $("#fristname").val();

        var textinputem = $("#emailq").val();

        var textinputph = $("#phonenumber").val();

        var pa = f;

      //var test = '667'

      //console.log(test)

      $.ajax({

       url: '/wp-admin/admin-ajax.php',

       data: {

       'action': 'php_tutorial2',

      'php_test': textinput,

       'php_testto': textinputem,

       'php_testthre': textinputph,

        'panelno': pa

        //     'grant': grant,

        //     'kw': kw,

       //     'extrapanel': extrapanel,

      //     'extracost': extracost,

     //     'clientgros': clientgros,

     //     'lessGrant': lessGrant,

      //    'upfrontpayment': upfrontpayment,

       //    'clientgros': clientgros,

        //    'grant': grant,

        //    'lessGrant': lessGrant,

      //    'upfrontpayment': upfrontpayment,

      //    'year':year,

       //    'monthlypay': monthlypay,

     //    'monthlynetpalan': monthlynetpalan

    },

       success: function(data){

          console.log('SUCCESS');

        }

      });

    });

    }

  });

});

    //End

    const

  range = document.getElementById('range'),

 rangeV = document.getElementById('rangeV'),

  setValue = ()=>{

   const

      newValue = Number( (range.value - range.min) * 100 / (range.max - range.min) ),

      newPosition = 10 - (newValue * 0.2);

    rangeV.innerHTML = `<span>${range.value}</span>`;

    rangeV.style.left = `calc(${newValue}% + (${newPosition}px))`;

 };

document.addEventListener("DOMContentLoaded", setValue);

range.addEventListener('input', setValue);

var slider = document.getElementById("range");

var chirag = slider.value;

if(chirag == "5"){

  var ale = "Please Select Product";

  document.getElementById("ale").innerHTML = ale;

}

document.getElementById("demo").innerHTML = chirag;

$("#demo").hide();

slider.oninput = function() {

  var chirag = this.value

  if(chirag > 0){

  var ale = "Please Select Products";

  document.getElementById("ale").innerHTML = ale;



}

  var chirag = this.value;

  document.getElementById("demo").innerHTML = chirag;

  }

</script>

<style>





</style><script>

const





  rangey = document.getElementById('rangey'),





  rangeZ = document.getElementById('rangeZ'),





  setVal = ()=>{





    const





      newValue = Number( (rangey.value - rangey.min) * 100 / (rangey.max - rangey.min) ),





      newPosition = 10 - (newValue * 0.2);





    rangeZ.innerHTML = `<span>${rangey.value}</span>`;





    rangeZ.style.left = `calc(${newValue}% + (${newPosition}px))`;





  };





document.addEventListener("DOMContentLoaded", setVal);





rangey.addEventListener('input', setVal);

var sliderp = document.getElementById("rangey");



var year = sliderp.value;



document.cookie="year="+year+"; SameSite=None; Secure";

document.cookie="year="+year;



document.getElementById("demo").innerHTML = year;

// ---------------------------------------------------------------------------------------------------------------------





// script for from code





// var name_regex = /^[a-zA-Z]+$/;





// var email_regex = /^[w-.+]+@[a-zA-Z0-9.-]+.[a-zA-z0-9]{2,4}$/;





 // Function to show and hide the popup





 function QuotePopup() {





      $("#qoutefromcu").toggle();



    }





    //  var jk = "mohane";





    $(document).ready(function(){



    var email = $("#emailq").val();





    var phone = $("#phonenumber").val();





  $(".fromqoutbu").click(function(){



    var name =   $("#fristname").val();





    if(name.length == 0){





        //alert('please');





    }





    var email = $("#emailq").val();





    var phone = $("#phonenumber").val();



      if (name.length == 0 || email.lenght == 0 || phone.length == 0) {





        $(this).removeClass("fromqoutbu");





        $(this).addClass("fromqoutbu");





        $(this).removeClass("qoutfrom");





}





else{





    $(this).removeClass("fromqoutbu");





    $(this).addClass("qoutfrom");



}

//    dbclick();





    if($("p").hasClass("qoutfrom")){



   // alert(name);





    };



  });





});

// if($('p').hasClass('qoutfrom')){





//     alert("Actove");





// };





function dbclick() {





  //code executed on jQuery double click rather than mouse double click





  alert('dblclick');





};





// $("#sub").click(function(){





//    dbclick();





//     if($("p").hasClass("qoutfrom")){



//     alert("swda");





//     };





//   });

var name =   $("#fristname").val();



</script>



<!-- <p id="namee"></p> -->



<?php





//  include_once('from.php');





echo "<p id='namee'></p>";





// echo "name";





// echo $ch;





// echo $variablephp;





// echo $mohane = "<script type='text/javascript'> document.write(jk); </script>";





?>



<!-- <form id="dharma">





    <p> <input type="text" id="dharnmato"></p>





    <p><input type="submit"></p>





</form> -->



<script>



</script><?php







?><?php







?><?php





// global $wpdb;





// require_once( ABSPATH . 'wp-admin/includes/upgrade.php' );





// $sql_query_to_create_table = "CREATE TABLE `wp_3qoute_solar_calulation` (





//      `id` int(11) NOT NULL AUTO_INCREMENT,





//      `name` varchar(150) DEFAULT NULL,





//      `email` varchar(150) DEFAULT NULL,





//      `phone` varchar(150) DEFAULT NULL,





//      `panelno` varchar(150) DEFAULT NULL,





//      `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,





//      PRIMARY KEY (`id`)





//     ) ENGINE=MyISAM DEFAULT CHARSET=latin1"; /// sql query to create table





// dbDelta( $sql_query_to_create_table );





?><?php



?><?php





?><?php





// global $wpdb;





// require_once( ABSPATH . 'wp-admin/includes/upgrade.php' );





// $sql_query_to_create_table = "CREATE TABLE `wp_3qoute_solar_calulation` (





//     `id` int(11) NOT NULL AUTO_INCREMENT,





//     `name` varchar(150) DEFAULT NULL,





//     `email` varchar(150) DEFAULT NULL,





//     `phone` varchar(150) DEFAULT NULL,





//     `panelno` varchar(150) DEFAULT NULL,





//     `grant` varchar(150) DEFAULT NULL,





//     `kw` varchar(150) DEFAULT NULL,





//     `extrapanel` varchar(150) DEFAULT NULL,





//     `expcost` varchar(150) DEFAULT NULL,





//     `clientgross` varchar(150) DEFAULT NULL,





//     `lessgrant` varchar(150) DEFAULT NULL,





//     `upfrontpayment` varchar(150) DEFAULT NULL,





//     `discount` varchar(150) DEFAULT NULL,





//     `total` varchar(150) DEFAULT NULL,





//     `totalminesgrant` varchar(150) DEFAULT NULL,





//     `totalminesvalue` varchar(150) DEFAULT NULL,





//     `finance` varchar(150) DEFAULT NULL,





//     `year` varchar(150) DEFAULT NULL,





//     `monthlygrs` varchar(150) DEFAULT NULL,





//     `monthlynet` varchar(150) DEFAULT NULL,





//     'productname' varchar(150) DEFAULT NULL,





//     `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,





//     PRIMARY KEY (`id`)





//    ) ENGINE=MyISAM DEFAULT CHARSET=latin1"; /// sql query to create table





// dbDelta( $sql_query_to_create_table );





///////////////////////////////////



if ( isset( $_POST[ "submitt" ] ) ) {



?>

<style>

    button.fromsb {

    display: none;

}

</style>

<?php



$namenew = $_POST[ "fname" ];

// $propertytype = $_POST["propertytype"];

$typeofproperty = $_POST["typeofproperty"];

$roof = $_POST["roof"];

$installpanel = $_POST["installpanel"];

$nearbychumeys = $_POST["nearbychumeys"];

$homemost = $_POST["homemost"];

// echo $propertytype;

// echo $typeofproperty;

// echo $roof;

// echo $installpanel;

// exit();

$emailnew = $_POST[ "email" ];



$pno = $_POST[ 'pnumber' ];

$eircode = $_POST[ 'eircode' ];



$selectedCountry = $_COOKIE[ 'selectedCountry' ];

$selectedroduct = $_COOKIE[ 'selectedCountry' ];

$seller = $_COOKIE['From'];

// echo $selectedCountry;





///////////////////////////////////





if ( $selectedCountry == "Just Energy - Residential"   ) {



  $cm = $_COOKIE[ 'nopanel' ];

 $cm2 = $_COOKIE[ 'grant' ];

  $kw = $_COOKIE[ 'kw' ];

  $extrapanel = $_COOKIE[ 'extrapanel' ];

  $extracost = $_COOKIE[ 'extracost' ];

$clientgros = $_COOKIE[ 'clientgros' ];



 if($cm == 6){

  $lessGrant = $_COOKIE[ 'lessGrant' ];

  // $nett = "5107";

 $nett = $_COOKIE[ 'nette' ];

 }

 else{

  $lessGrant = $_COOKIE[ 'lessGrant' ];

   $nett = $_COOKIE[ 'nett' ];

 }

 $upfrontpayment = $_COOKIE[ 'upfrontpayment' ];

  $year = $_COOKIE[ 'year' ];

  $monthlypay = $_COOKIE[ 'monthlypay' ];

  $monthlynetpalan = $_COOKIE[ 'monthlynetpalan' ];

  $contry = $_COOKIE[ 'selValue' ];

 $cod = $_COOKIE['cod'];

  

  $mygrant = $_COOKIE[ 'mygrant' ];

  $myclientgross = $_COOKIE[ 'myclientgross'];

     echo $namenew;

     echo $emailnew;

      echo $cm; echo "</br>";

     echo $cm2; echo "</br>";

      echo $kw; echo "</br>";

     echo $extrapanel; echo "</br>";

     echo $extracost; echo "</br>";

      echo $clientgros; echo "</br>";

      echo $lessGrant; echo "</br>";

      echo $upfrontpayment; echo "</br>";

      echo $year; echo "</br>";

      echo $monthlypay; echo "</br>";

      echo $monthlynetpalan; echo "</br>";

      $selectedCountry = $_COOKIE['selectedCountry'];

      $seller = $_COOKIE['From'];

      // echo $selectedCountry;

  // $fullname = "Mr.Chirag Mohane";

  // $subject = 'MySolar POTENTIAL SAVINGS Quote';

  //     $headers = array('Content-Type: text/html; charset=UTF-8',

  //     'From: MySolar <info@mysolar.ie>');

  //     //$admin_email = get_option( 'admin_email' );

  //     $admin_email = "joe@cleverdigital.ie";

  //  $mailsent = wp_mail( $admin_email, $subject, $msgbody, $headers );

  $upval = $_COOKIE[ 'upval' ];

  $mygrant = $_COOKIE['mygrant'];

  $myclientgross = $_COOKIE['myclientgross'];

  

  

  

if ( $upval == 'finance'){

    global $wpdb;

    $wpdb->insert(

    "wp_3qoute_solar_calulation",



   array(

        "name" => $namenew,

        "email" => $emailnew,

       "phone" => $pno,

       "discount"=> $eircode,

       "panelno" => $cm,

    "grant" => $cm2,

       "kw" => $kw,

        "extrapanel" => $extrapanel,

        "expcost" => $extracost,

        "clientgross" => $clientgros,

      "lessgrant" => $lessGrant,

       "upfrontpayment" => $upfrontpayment,

        //  "discount"=>$clientgros,

        // "total"=>$cod,

       //"totalminesgrant"=>$nett,

         "totalminesvalue"=> $seller,

        "finance" => $contry,

        "year" => $year,

        "monthlygrs" => $monthlypay,

        "monthlynet" => $monthlynetpalan,

        "productname" => $selectedCountry,

        // "propertytype" => $propertytype,

        "typeofproperty" => $typeofproperty,

        "roof" => $roof,

        "installpanel" => $installpanel,

        "nearbychumeys" => $nearbychumeys,

        "homemost" => $homemost









      )



    );



    // echo "Product Name";

    $lastid = $wpdb->insert_id;



?>

<html xmlns="http://www.w3.org/1999/xhtml">

<head>

    <title></title>

     <style type="text/css">

        body

        {

            font-family: Arial;

            font-size: 10pt;

        }

        table

        {

            border: 1px solid #ccc;

            border-collapse: collapse;

        }

        table th

        {

            background-color: #F7F7F7;

            color: #333;

            font-weight: bold;

        }

        table th, table td

        {

            padding: 5px;

            border: 1px solid #ccc;

        }

    </style>

</head>

<body>

     <table id="tblCustomers" cellspacing="0" cellpadding="0">

        <tr>

            <th>Customer Id</th>

            <th>Name</th>

            <th>Country</th>

        </tr>

        <tr>

            <td>1</td>

            <td>John Hammond</td>

            <td>United States</td>

        </tr>

        <tr>

            <td>2</td>

            <td>Mudassar Khan</td>

            <td>India</td>

        </tr>

        <tr>

            <td>3</td>

            <td>Suzanne Mathews</td>

            <td>France</td>

        </tr>

        <tr>

            <td>4</td>

            <td>Robert Schidner</td>

            <td>Russia</td>

        </tr>

    </table>

    <br />

    

    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>

    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.22/pdfmake.min.js"></script>

    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/0.4.1/html2canvas.min.js"></script>

    <script type="text/javascript">

        $("body").on("click", "#btnExport", function () {

            html2canvas($('#tblCustomers')[0], {

                onrendered: function (canvas) {

                    var data = canvas.toDataURL();

                    var docDefinition = {

                        content: [{

                            image: data,

                            width: 500

                        }]

                    };

                    pdfMake.createPdf(docDefinition).download("Table.pdf");

                }

            });

        });

    </script>

</body>

</html>

<?php

$date = date('d-m-y');

$pdf = new FPDF();

$pdf->AddPage();

$pdf->SetFont('Arial','B',15);

$pdf->Image('https://mysolar.cleverdigital.ie/wp-content/uploads/2022/09/logo-1-150x150.png',15,5,'PNG');

  $pdf->Ln(40);



$pdf->AliasNbPages();



$pdf->Cell(10,1, "$namenew,");

 $pdf->Ln(5);

 $pdf->Cell(10,10, 'Quote No:  :CF-'.$lastid);

 

 $pdf->Multicell(175,10,'Date:' .$date,0,'R');

 $pdf->Ln(5);

$pdf->Cell(10,10, 'Name: '.$namenew);

$pdf->Ln(10);

// $pdf->Cell(10,10, 'Property Type: '.$propertytype);

// $pdf->Ln(10);

$pdf->Cell(10,10, 'What type of property do you live in?: '.$typeofproperty);

$pdf->Ln(10);

$pdf->Cell(10,10, 'What is the pitch of your roof?: '.$roof);

$pdf->Ln(10);

$pdf->Cell(10,10, 'What orientation is the roof you want to install panels on?: '.$installpanel);

$pdf->Ln(10);

$pdf->Cell(10,10, 'Do you have any shading on your roof from chimneys or nearby trees?: '.$nearbychumeys);

$pdf->Ln(10);

$pdf->Cell(10,10, 'During what part of the day are you home most?: '.$homemost);

$pdf->Ln(10);

$pdf->Cell(40,10, 'Phone Number: '.$pno);

 $pdf->Ln(10);

$pdf->Cell(40,10, 'Eircode: '.$eircode);

 $pdf->Ln(10);

 $pdf->Cell(40,10, 'County: '.$contry);

$pdf->Ln(10);

$pdf->Cell(40,10, 'Email Address: '.$emailnew);

 $pdf->Ln(15);

$pdf->Cell(40,10, 'Product Name: '.$selectedCountry);

 $pdf->Ln(10);

$pdf->Cell(40,10, 'Number of Panels: '.$cm);

$pdf->Ln(10);

$pdf->Cell(40,10, 'Estimated kWh  Generated: '.$kw);

$pdf->Ln(20);

//$pdf->Cell(40,10, 'Total Grant Available: '.round( $cm2 ));

$text = "Total Grant Available:  €". number_format( $cm2 );  

$pdf->Write(0,iconv('UTF-8', 'windows-1252', $text));

$pdf->Ln(10);

//$pdf->Cell(40,10, 'Total PV System Cost Without Grant: '.round( $clientgros ));

//$textto = "Total PV System Cost Without Grant:  €". number_format( $clientgros ); 

//$pdf->Write(0,iconv('UTF-8', 'windows-1252', $textto));

//$pdf->Ln(10);

//$pdf->Cell(40,10, 'Total PV System Cost When Grant Approved: '.round( $lessGrant ));

$textthree = "Total PV System Cost When Grant Approved:  €". number_format( $lessGrant ); 

$pdf->Write(0,iconv('UTF-8', 'windows-1252', $textthree));

$pdf->Ln(10);

$pdf->Cell(40,10, 'Contract Term (Years): '.$year);

$pdf->Ln(15);

//$pdf->Cell(40,10, 'Total Monthly Payment without Grant deducted: '. round( $monthlypay, 2 ));

//$textfour = "Total Monthly Payment without Grant deducted  €". number_format( $monthlypay, 2 ); 

//$pdf->Write(0,iconv('UTF-8', 'windows-1252', $textfour));

//$pdf->Ln(10);

//$pdf->Cell(40,10, 'Total Monthly Payment After Grant Deducted: '.round( $monthlynetpalan, 2 ));

$textfive = "Total Monthly Payment After Grant Deducted:  €". number_format( $monthlynetpalan, 2 ); 

$pdf->Write(0,iconv('UTF-8', 'windows-1252', $textfive));



$pdf->Ln(10);



$pdf->SetFont('Times','BI',13);





$pdf->Cell(10,0, 'Terms & Conditions');

$pdf->Ln(5);

$pdf->Cell(40,10, '* Savings based on standard electricity cost & south facing property.');

$pdf->Ln(10);

$pdf->Cell(40,10, '*  Final price subject to survey *.');

$pdf->Ln(10);

$pdf->Cell(40,10, '* Quote Expires In 30 days');

$pdf->Ln(15);

$pdf->Cell(10,0, 'Tel: 083 090 8912');

 

$pdf->Multicell(100,0,'Email: info@mysolar.ie',0,'R');



$pdf->Multicell(160,0,'Web: mysolar.ie',0,'R');

// $pdf->Ln(10);



// $pdf->Cell(10,0, 'Terms & Conditions');





// email stuff (change data below)



// $to = "joe@cleverdigital.ise,info@mysolar.ise"; 



$to = "joe@cleverdigital.ie,sales@mysolar.ie";

  



$from = "sales@mysolar.ie"; 

$subject = "SOLAR-CALCULATOR Quote";

$message = '<body style="background-color: #f6f6f6; font-family: sans-serif; -webkit-font-smoothing: antialiased; font-size: 14px; line-height: 1.4; margin: 0; padding: 0; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">

   <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="body" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f6f6f6; width: 100%;" width="100%" bgcolor="#f6f6f6" id="tblCustomers">

  <tr>

        <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;" valign="top">&nbsp;</td>

            <td class="container" style="font-family: sans-serif; font-size: 14px; vertical-align: top; display: block; max-width: 580px; padding: 10px; width: 580px; margin: 0 auto;" width="580" valign="top">

              <div class="content" style="box-sizing: border-box; display: block; margin: 0 auto; max-width: 580px; padding: 10px;">

                  <!-- START CENTERED WHITE CONTAINER -->

                    <table role="presentation" class="main" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background: #ffffff; border-radius: 3px; width: 100%;" width="100%">

                        <!-- START MAIN CONTENT AREA -->

                          <tr>

                           <td class="wrapper" style="font-family: sans-serif; font-size: 14px; vertical-align: top; box-sizing: border-box; padding: 20px;" valign="top">

                                <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;" width="100%"  >

                                  <tr>



                                   <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;" valign="top">

                                    <img src="https://mysolar.cleverdigital.ie/wp-content/uploads/2022/09/logo-1-150x150.png" height="150" width="150">

                                        <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; margin-bottom: 15px;">Hi,</p>

                                       <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; margin-bottom: 15px;">Many thanks for taking the time to contact us.</p>

                                       <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; margin-bottom: 15px;">This estimated quote is valid for 30 days</p>

                                       

                                          <p>Customer Name: ' . $namenew . '</p>

                                          

                                          <p>What type of property do you live in?: ' . $typeofproperty . '</p>

                                          <p>What is the pitch of your roof?: ' . $roof . '</p>

                                          <p>What orientation is the roof you want to install panels on?: ' . $installpanel . '</p>

                                          <p>Do you have any shading on your roof from chimneys or nearby trees?: ' . $nearbychumeys . '</p>

                                          <p>During what part of the day are you home most?: ' . $homemost . '</p>

                                          <p>Phone Number: ' . $pno . '</p>

                                          <p>Eircode: ' . $eircode . '</p>

                                          <p>County : ' . $contry . '</p>

                                         <p>Email Address: ' . $emailnew . '</p>

                                         <p>Products Name: ' . $selectedCountry . '</p>

                                          <p>Number Of Panel: ' . $cm . '</p>

                                         <p>Total Grant  : €' . round( $cm2 ) . '</p>

                                          <p>kWh : ' . $kw . '</p>

                                         

                                          <p> Total PV System Cost When Grant Approved  : €' . round( $lessGrant ) . '</p>

                                          <p> Contract Term (Years): ' . $year . '</p>

                                          

                                           <p>Total Monthly Payment After Grant Deducted: €' . number_format( $monthlynetpalan, 2 ) . '</p>

                                          

                                          <p>* Savings based on standard electricity cost & south facing property. </p>

                                          <p>Final price subject to survey</p>

                                        </td>

                                        </tr>

                                   </table>

                                    

                                    </td>

                                 </tr>

                                 <script>

                                 console.log("Hleoo ther");

                                 </script>

                            <!-- END MAIN CONTENT AREA -->

                             </table>

                             

                              

                             <!-- END CENTERED WHITE CONTAINER -->

                              <div class="footer" style="clear: both; margin-top: 10px; text-align: center; width: 100%;">

                             <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;" width="100%">

                            <tr>



                              <td class="content-block" style="font-family: sans-serif; vertical-align: top; padding-bottom: 10px; padding-top: 10px; color: #999999; font-size: 12px; text-align: center;" valign="top" align="center">

                              <span class="apple-link" style="color: #999999; font-size: 12px; text-align: center;">MySolar Registered in Ireland No.651647</span>

                            </td>

                            </tr>

                          </table>

                      </div>

                    <!-- END FOOTER -->

                  </div>

                </td>

              <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;" valign="top">&nbsp;</td>

         </tr>

        </table>

        </body>';



// a random hash will be necessary to send mixed content

$separator = md5(time());



// carriage return type (we use a PHP end of line constant)

$eol = PHP_EOL;



// attachment name

$filename = "MySolar.pdf";



// encode data (puts attachment in proper format)

$pdfdoc = $pdf->Output("", "S");

$attachment = chunk_split(base64_encode($pdfdoc));



// main header

$headers  = "From: ".$from.$eol;

$headers .= "MIME-Version: 1.0".$eol; 

$headers .= "Content-Type: multipart/mixed; boundary=\"".$separator."\"";

$headers .= 'Bcc: flogas@mysolar.ie';





// no more headers after this, we start the body! //



$body = "--".$separator.$eol;

$body .= "Content-Transfer-Encoding: 7bit".$eol.$eol;

//$body .= "This is a MIME encoded message.".$eol;



// message

$body .= "--".$separator.$eol;

$body .= "Content-Type: text/html; charset=\"iso-8859-1\"".$eol;

$body .= "Content-Transfer-Encoding: 8bit".$eol.$eol;

$body .= $message.$eol;



// attachment

$body .= "--".$separator.$eol;

$body .= "Content-Type: application/octet-stream; name=\"".$filename."\"".$eol; 

$body .= "Content-Transfer-Encoding: base64".$eol;

$body .= "Content-Disposition: attachment".$eol.$eol;

$body .= $attachment.$eol;

$body .= "--".$separator."--";



// send message

mail($to, $subject, $body, $headers); 

    

  

class PDF extends FPDF

{

  var $B=0;

  var $I=0;

  var $U=0;

  var $HREF='';

  var $ALIGN='';

 

  function WriteHTML($html)

  {

    //HTML parser

    $html=str_replace("\n",' ',$html);

    $a=preg_split('/<(.*)>/U',$html,-1,PREG_SPLIT_DELIM_CAPTURE);

    foreach($a as $i=>$e)

    {

      if($i%2==0)

      {

        //Text

        if($this->HREF)

          $this->PutLink($this->HREF,$e);

        elseif($this->ALIGN=='center')

          $this->Cell(0,5,$e,0,1,'C');

        else

          $this->Write(5,$e);

      }

      else

      {

        //Tag

        if($e[0]=='/')

          $this->CloseTag(strtoupper(substr($e,1)));

        else

        {

          //Extract properties

          $a2=explode(' ',$e);

          $tag=strtoupper(array_shift($a2));

          $prop=array();

          foreach($a2 as $v)

          {

            if(preg_match('/([^=]*)=["\']?([^"\']*)/',$v,$a3))

              $prop[strtoupper($a3[1])]=$a3[2];

          }

          $this->OpenTag($tag,$prop);

        }

      }

    }

  }

 

  function OpenTag($tag,$prop)

  {

    //Opening tag

    if($tag=='B' || $tag=='I' || $tag=='U')

      $this->SetStyle($tag,true);

    if($tag=='A')

      $this->HREF=$prop['HREF'];

    if($tag=='BR')

      $this->Ln(5);

    if($tag=='P')

      $this->ALIGN=$prop['ALIGN'];

    if($tag=='HR')

    {

      if( !empty($prop['WIDTH']) )

        $Width = $prop['WIDTH'];

      else

        $Width = $this->w - $this->lMargin-$this->rMargin;

      $this->Ln(2);

      $x = $this->GetX();

      $y = $this->GetY();

      $this->SetLineWidth(0.4);

      $this->Line($x,$y,$x+$Width,$y);

      $this->SetLineWidth(0.2);

      $this->Ln(2);

    }

  }

 

  function CloseTag($tag)

  {

    //Closing tag

    if($tag=='B' || $tag=='I' || $tag=='U')

      $this->SetStyle($tag,false);

    if($tag=='A')

      $this->HREF='';

    if($tag=='P')

      $this->ALIGN='';

  }

 

  function SetStyle($tag,$enable)

  {

    //Modify style and select corresponding font

    $this->$tag+=($enable ? 1 : -1);

    $style='';

    foreach(array('B','I','U') as $s)

      if($this->$s>0)

        $style.=$s;

    $this->SetFont('',$style);

  }

 

  function PutLink($URL,$txt)

  {

    //Put a hyperlink

    $this->SetTextColor(0,0,255);

    $this->SetStyle('U',true);

    $this->Write(5,$txt,$URL);

    $this->SetStyle('U',false);

    $this->SetTextColor(0);

  }



}





// class PDF extends FPDF

// {



// }

$date = date('d-m-y');





$pdf = new PDF();

$pdf->AddPage();

 //$pdf->WriteHTML("This is a <img src="https:mysolar.cleverdigital.ie/wp-content/uploads/2022/08/energy.png"> test");

//$pdf->WriteHTML('You can<br><p align="center">center a line</p>and add a horizontal rule:<br><hr>');



//$pdf->Image('http://chart.googleapis.com/chart?cht=p3&chd=t:60,40&chs=250x100&chl=Hello|World',60,30,90,0,'PNG');

// $pdf->Image('https://mysolar.cleverdigital.ie/wp-content/uploads/2022/08/energy.png',0,0);

//$pdf->Output();



// $pdf->WriteHTML('chirag');

$pdf->SetFont('Arial','B',15);

$pdf->AliasNbPages();

$pdf->Image('https://mysolar.cleverdigital.ie/wp-content/uploads/2022/09/logo-1-150x150.png',15,5,'PNG');

  $pdf->Ln(40);

//$pdf->Cell( 40, 40, $pdf->Image($image1, $pdf->GetX(), $pdf->GetY(), 33.78), 0, 0, 'L', false );

//$pdf->Cell(10,10, $image1);

//$pdf->Image('https://source.unsplash.com/random/13x22',60,30,90,0,'PNG');

$pdf->Cell(10,1, "$namenew,");

 $pdf->Ln(5);

 $pdf->Cell(10,10, 'Quote Now:  :CF-'.$lastid);

 

 $pdf->Multicell(175,10,'Date:' .$date,0,'R');

 $pdf->Ln(5);

$pdf->Cell(10,10, 'Name: '.$namenew);

// $pdf->WriteHTML('You can<br><p align="center">center a line</p><br><hr>');

$pdf->Ln(10);

// $pdf->Cell(10,10, 'Property Type: '.$propertytype);

//   $pdf->Ln(10);

  $pdf->Cell(10,10, 'What type of property do you live in?: '.$typeofproperty);

$pdf->Ln(10);

$pdf->Cell(10,10, 'What is the pitch of your roof?: '.$roof);

$pdf->Ln(10);

$pdf->Cell(10,10, 'What orientation is the roof you want to install panels on?: '.$installpanel);

$pdf->Ln(10);

$pdf->Cell(10,10, 'Do you have any shading on your roof from chimneys or nearby trees?: '.$nearbychumeys);

$pdf->Ln(10);

$pdf->Cell(10,10, 'During what part of the day are you home most?: '.$homemost);

$pdf->Ln(10);

$pdf->Cell(40,10, 'Phone Number: '.$pno);

 $pdf->Ln(10);

$pdf->Cell(40,10, 'Eircode: '.$eircode);

 $pdf->Ln(10);

 $pdf->Cell(40,10, 'County: '.$contry);

$pdf->Ln(10);

$pdf->Cell(40,10, 'Email Address: '.$emailnew);

 $pdf->Ln(15);

$pdf->Cell(40,10, 'Product Name: '.$selectedCountry);

 $pdf->Ln(10);

$pdf->Cell(40,10, 'Number of Panels: '.$cm);

$pdf->Ln(10);

$pdf->Cell(40,10, 'Estimated kWh  Generated: '.$kw);

$pdf->Ln(20);

//$pdf->Cell(40,10, 'Total Grant Available: '.round( $cm2 ));

$text = "Total Grant Available:  €". number_format( $cm2 );  

$pdf->Write(0,iconv('UTF-8', 'windows-1252', $text));

$pdf->Ln(10);

//$pdf->Cell(40,10, 'Total PV System Cost Without Grant: '.round( $clientgros ));

//$textto = "Total PV System Cost Without Grant:  €". number_format( $clientgros ); 

//$pdf->Write(0,iconv('UTF-8', 'windows-1252', $textto));

//$pdf->Ln(10);

//$pdf->Cell(40,10, 'Total PV System Cost When Grant Approved: '.round( $lessGrant ));

$textthree = "Total PV System Cost When Grant Approved:  €". number_format( $lessGrant ); 

$pdf->Write(0,iconv('UTF-8', 'windows-1252', $textthree));

$pdf->Ln(10);

$pdf->Cell(40,10, 'Contract Term (Years): '.$year);

$pdf->Ln(15);

//$pdf->Cell(40,10, 'Total Monthly Payment without Grant deducted: '. round( $monthlypay, 2 ));

//$textfour = "Total Monthly Payment without Grant deducted  €". number_format( $monthlypay, 2 ); 

//$pdf->Write(0,iconv('UTF-8', 'windows-1252', $textfour));

//$pdf->Ln(10);

//$pdf->Cell(40,10, 'Total Monthly Payment After Grant Deducted: '.round( $monthlynetpalan, 2 ));

$textfive = "Total Monthly Payment After Grant Deducted:  €". number_format( $monthlynetpalan, 2 ); 

$pdf->Write(0,iconv('UTF-8', 'windows-1252', $textfive));



$pdf->Ln(10);

$pdf->SetFont('Times','BI',13);

$pdf->Cell(10,0, 'Terms & Conditions');

$pdf->Ln(5);



$pdf->Cell(40,10, '* Savings based on standard electricity cost & south facing property.');

$pdf->Ln(10);

$pdf->Cell(40,10, '*  Final price subject to survey *.');

$pdf->Ln(10);

$pdf->Cell(40,10, '* Quote Expires In 30 days');

$pdf->Ln(15);

$pdf->Cell(10,0, 'Tel: 083 090 8912');

 

$pdf->Multicell(100,0,'Email: info@mysolar.ie',0,'R');



$pdf->Multicell(160,0,'Web: mysolar.ie',0,'R');

// $pdf->Ln(10);

// $pdf->Cell(10,0, 'Terms & Conditions');



// $pdf->Cell(40,10, '* Quote Expires In 30 days');

// $pdf->Ln(10);

// $pdf->Cell(10,10, 'Tel: 083 090 8912');

 

// $pdf->Multicell(100,10,'Email: info@mysolar.ie',0,'R');



// $pdf->Cell(40,10, '* Savings based on standard electricity cost & south facing property.');

// $pdf->Ln(10);

// $pdf->Cell(40,10, '*  Final price subject to survey *.');



// email stuff (change data below)

$to = $emailnew; 

$from = "sales@mysolar.ie"; 

$subject = "SOLAR-CALCULATOR Quote";

$message = '<body style="background-color: #f6f6f6; font-family: sans-serif; -webkit-font-smoothing: antialiased; font-size: 14px; line-height: 1.4; margin: 0; padding: 0; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">

   <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="body" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f6f6f6; width: 100%;" width="100%" bgcolor="#f6f6f6" id="tblCustomers">

  <tr>

        <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;" valign="top">&nbsp;</td>

            <td class="container" style="font-family: sans-serif; font-size: 14px; vertical-align: top; display: block; max-width: 580px; padding: 10px; width: 580px; margin: 0 auto;" width="580" valign="top">

              <div class="content" style="box-sizing: border-box; display: block; margin: 0 auto; max-width: 580px; padding: 10px;">

                  <!-- START CENTERED WHITE CONTAINER -->

                    <table role="presentation" class="main" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background: #ffffff; border-radius: 3px; width: 100%;" width="100%">

                        <!-- START MAIN CONTENT AREA -->

                          <tr>

                           <td class="wrapper" style="font-family: sans-serif; font-size: 14px; vertical-align: top; box-sizing: border-box; padding: 20px;" valign="top">

                                <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;" width="100%"  >

                                  <tr>



                                   <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;" valign="top">

                                    <img src="https://mysolar.cleverdigital.ie/wp-content/uploads/2022/09/logo-1-150x150.png" height="150" width="150">

                                       <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; margin-bottom: 15px;">Hi,</p>

                                       <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; margin-bottom: 15px;">Many thanks for taking the time to contact us.</p>

                                       <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; margin-bottom: 15px;">This estimated quote is valid for 30 days</p>

                                          <p>Customer Name: ' . $namenew . '</p>

                                          

                                          <p>What type of property do you live in?: ' . $typeofproperty . '</p>

                                          <p>What is the pitch of your roof?: ' . $roof . '</p>

                                          <p>What orientation is the roof you want to install panels on?: ' . $installpanel . '</p>

                                          <p>Do you have any shading on your roof from chimneys or nearby trees?: ' . $nearbychumeys . '</p>

                                          <p>During what part of the day are you home most?: ' . $homemost . '</p>

                                          <p>Phone Number: ' . $pno . '</p>

                                          <p>Eircode: ' . $eircode . '</p>

                                          <p>County : ' . $contry . '</p>

                                         <p>Email Address: ' . $emailnew . '</p>

                                         <p>Products Name: ' . $selectedCountry . '</p>

                                          <p>Number Of Panel: ' . $cm . '</p>

                                         <p>Total Grant  : €' . round( $cm2 ) . '</p>

                                          <p>kWh : ' . $kw . '</p> 

                                          <p> Total PV System Cost When Grant Approved  : €' . round( $lessGrant ) . '</p>

                                          <p> Contract Term (Years): ' . $year . '</p>

                                         

                                           <p>Total Monthly Payment After Grant Deducted: €' . number_format( $monthlynetpalan, 2 ) . '</p>

                                         

                                          <p>* Savings based on standard electricity cost & south facing property. </p>

                                          <p>Final price subject to survey</p>

                                        </td>

                                        </tr>

                                   </table>

                                    

                                    </td>

                                 </tr>

                                 <script>

                                 console.log("Hleoo ther");

                                 </script>

                            <!-- END MAIN CONTENT AREA -->

                             </table>

                             

                             

                             <!-- END CENTERED WHITE CONTAINER -->

                              <div class="footer" style="clear: both; margin-top: 10px; text-align: center; width: 100%;">

                             <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;" width="100%">

                            <tr>



                              <td class="content-block" style="font-family: sans-serif; vertical-align: top; padding-bottom: 10px; padding-top: 10px; color: #999999; font-size: 12px; text-align: center;" valign="top" align="center">

                              <span class="apple-link" style="color: #999999; font-size: 12px; text-align: center;">MySolar Registered in Ireland No.651647</span>

                            </td>

                            </tr>

                          </table>

                      </div>

                    <!-- END FOOTER -->

                  </div>

                </td>

              <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;" valign="top">&nbsp;</td>

         </tr>

        </table>

        </body>';



  // a random hash will be necessary to send mixed content

  $separator = md5(time());



  // carriage return type (we use a PHP end of line constant)

  $eol = PHP_EOL;



  // attachment name

  $filename = "MySolar.pdf";



  // encode data (puts attachment in proper format)

  $pdfdoc = $pdf->Output("", "S");

  $attachment = chunk_split(base64_encode($pdfdoc));



  // main header

  $headers  = "From: ".$from.$eol;

  $headers .= "MIME-Version: 1.0".$eol; 

  $headers .= "Content-Type: multipart/mixed; boundary=\"".$separator."\"";

  





  // no more headers after this, we start the body! //



  $body = "--".$separator.$eol;

  $body .= "Content-Transfer-Encoding: 7bit".$eol.$eol;

  //$body .= "This is a MIME encoded message.".$eol;



  // message

  $body .= "--".$separator.$eol;

  $body .= "Content-Type: text/html; charset=\"iso-8859-1\"".$eol;

  $body .= "Content-Transfer-Encoding: 8bit".$eol.$eol;

  $body .= $message.$eol;



  // attachment

  $body .= "--".$separator.$eol;

  $body .= "Content-Type: application/octet-stream; name=\"".$filename."\"".$eol; 

  $body .= "Content-Transfer-Encoding: base64".$eol;

  $body .= "Content-Disposition: attachment".$eol.$eol;

  $body .= $attachment.$eol;

  $body .= "--".$separator."--";



  // send message

  mail($to, $subject, $body, $headers);

  

   //////////// Bitrix API Monthly Payments (Just Energy Residential) ////////////////

    $result = CRest::call(

    'crm.lead.add',

    ['FIELDS' => 

      [

      //'TITLE' => 'MySolar Website Quotation/Calculator', 

    'TITLE' => $namenew,

      'NAME' => $namenew, 

      'ADDRESS' => $contry, 

      

      'UF_CRM_1663758814' => $lastid, 

      'UF_CRM_1663758895' => $eircode,

      'UF_CRM_1663758913' => $contry, 

      'UF_CRM_1663758926' => $selectedroduct, 

      'UF_CRM_1663758956' => $cm, 

      'UF_CRM_1663758977' => $kw, 

      'UF_CRM_1663758998' => '€'.$cm2, 

      'UF_CRM_1663759019' => '€'.$clientgros, 

      'UF_CRM_1663759040' => '€'.$mygrant, 

      'UF_CRM_1663759074' => $year, 

      'UF_CRM_1663759169' => '€'.number_format( $monthlypay, 2 ), 

      'UF_CRM_1663759180' => '€'.number_format( $monthlynetpalan, 2 ), 

      //'UF_CRM_1663759200' => '€'.$nett,  

      'UF_CRM_1659522970002' => $attachment,  

      'UF_CRM_1674039430' => $typeofproperty,

      'UF_CRM_1674039544' => $roof,

      'UF_CRM_1674039579' => $installpanel,

      'UF_CRM_1674039639' => $nearbychumeys,

      'UF_CRM_1674039674' => $homemost,

      

      //'SOURCE' => "API Integration Calculator Form", 

      'SOURCE_ID' => 'WEB', 
       'UF_CRM_1672303237' => '124',

      'EMAIL' => ['0' => ['VALUE' => $emailnew]], 

      'PHONE' => ['0' => ['VALUE' => $pno]], 

       ], 

    ]

  );  

  

    

 }





 if( $upval == 'payupfrontselect' ) {

    global $wpdb;

    $wpdb->insert(

      "wp_3qoute_solar_calulation",



      array(

        "name" => $namenew,

        "email" => $emailnew,

        "phone" => $pno,

        "discount" => $eircode,

        "panelno" => $cm,

        "grant" => $cm2,

        "kw" => $kw,

        "extrapanel" => $extrapanel,

        "expcost" => $extracost,

        "clientgross" => $myclientgross,

        "lessgrant" => $mygrant,

        "upfrontpayment" => $upfrontpayment,

        //  "discount"=>$clientgros,

       "total" => $cod,

        "totalminesgrant" => $nett,

         "totalminesvalue"=> $seller,

        "finance" => $contry,

        "year" => $year,

        //"monthlygrs" => $monthlypay,

     //"monthlynet" => $monthlynetpalan,

       "productname" => $selectedCountry,

    //   "propertytype" => $propertytype,

       "typeofproperty" => $typeofproperty,

       "roof" => $roof,

       "installpanel" => $installpanel,

       "nearbychumeys" => $nearbychumeys,

       "homemost" => $homemost

      )



    );

    

    

    $lastid = $wpdb->insert_id;

    $date = date('d-m-y');

  $pdf = new FPDF();

  $pdf->AddPage();

  $pdf->SetFont('Arial','B',15);

  $pdf->Image('https://mysolar.cleverdigital.ie/wp-content/uploads/2022/09/logo-1-150x150.png',15,5,'PNG');

    $pdf->Ln(40);



  $pdf->Cell(10,1, "$namenew,");



  $pdf->Ln(5);

  $pdf->Cell(10,10, 'Quote No:  :CF-'.$lastid);

   

   $pdf->Multicell(175,10,'Date:' .$date,0,'R');

  $pdf->Cell(10,10, 'Customer Name: '.$namenew);

  $pdf->Ln(10);

  // $pdf->Cell(10,10, 'Property Type: '.$propertytype);

  // $pdf->Ln(10);

  $pdf->Cell(10,10, 'What type of property do you live in?: '.$typeofproperty);

  $pdf->Ln(10);

  $pdf->Cell(10,10, 'What is the pitch of your roof?: '.$roof);

  $pdf->Ln(10);

  $pdf->Cell(10,10, 'What orientation is the roof you want to install panels on?: '.$installpanel);

  $pdf->Ln(10);

  $pdf->Cell(10,10, 'Do you have any shading on your roof from chimneys or nearby trees?: '.$nearbychumeys);

$pdf->Ln(10);

$pdf->Cell(10,10, 'During what part of the day are you home most?: '.$homemost);

$pdf->Ln(10);

  $pdf->Cell(40,10, 'Phone Number: '.$pno);

  $pdf->Ln(10);

  $pdf->Cell(40,10, 'Eircode: '.$eircode);

  $pdf->Ln(10);

  $pdf->Cell(40,10, 'County: '.$contry);

  $pdf->Ln(10);

  $pdf->Cell(40,10, 'Email Address: '.$emailnew);

  $pdf->Ln(15);

  $pdf->Cell(40,10, 'Product Name: '.$selectedCountry);

  $pdf->Ln(10);

  $pdf->Cell(40,10, 'Number of Panels: '.$cm);

  $pdf->Ln(10);

  $pdf->Cell(40,10, 'Estimated kWh  Generated: '.$kw);

  $pdf->Ln(20);

  //$pdf->Cell(40,10, 'Total Grant Available: €'.round( $cm2 ));

  $texttone = "Total Grant Available: €". number_format( $cm2 );  

  $pdf->Write(0,iconv('UTF-8', 'windows-1252', $texttone));

  $pdf->Ln(10);

  //$pdf->Cell(40,10, 'Total PV System Cost Without Grant: €'.round( $clientgros ));

  //$texttto = "Total PV System Cost Without Grant: €". number_format( $clientgros );  

  //$pdf->Write(0,iconv('UTF-8', 'windows-1252', $texttto));

  //$pdf->Ln(10);

  //$pdf->Cell(40,10, 'Total PV System Cost When Grant Approved: €'.round( $mygrant ));

  $texttfour = "Total PV System Cost When Grant Approved: €". number_format( $mygrant );  

  $pdf->Write(0,iconv('UTF-8', 'windows-1252', $texttfour));

  $pdf->Ln(10);

 // $pdf->Cell(40,10, 'Contract Term (Years): '.$year);

  $pdf->Ln(15);

  //$pdf->Cell(40,10, 'Discounted Upfront Payment With Grant: €'. round( $nett ));



  if($cm == 6){

 $texttofive = "Discounted Upfront Payment  Grant Deducted: €". number_format( $nett );  

    $pdf->Write(0,iconv('UTF-8', 'windows-1252', $texttofive));



    }

    else{

       $texttofive = "Discounted Upfront Payment With Grant: €". number_format( $nett );  

    $pdf->Write(0,iconv('UTF-8', 'windows-1252', $texttofive));



    }





  $pdf->Ln(25);



$pdf->SetFont('Times','BI',13);

$pdf->Cell(10,0, 'Terms & Conditions');

$pdf->Ln(5);

  $pdf->Cell(40,10, '* Savings based on standard electricity cost & south facing property.');

  $pdf->Ln(10);

  $pdf->Cell(40,10, '*  Final price subject to survey *.');

  $pdf->Ln(10);

  $pdf->Cell(40,10, '* Quote Expires In 30 days');

  $pdf->Ln(15);

  $pdf->Cell(10,0, 'Tel: 083 090 8912');

   

  $pdf->Multicell(100,0,'Email: info@mysolar.ie',0,'R');



  $pdf->Multicell(160,0,'Web: mysolar.ie',0,'R');



//  $pdf->Ln(10);

//  $pdf->Cell(10,0, 'Terms & Conditions');





  // email stuff (change data below)

 

$to = "joe@cleverdigital.ie,sales@mysolar.ie";

   



$from = "sales@mysolar.ie"; 

  $subject = "SOLAR-CALCULATOR Quote";

  if($cm == 6){

$message = '<body style="background-color: #f6f6f6; font-family: sans-serif; -webkit-font-smoothing: antialiased; font-size: 14px; line-height: 1.4; margin: 0; padding: 0; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">

     <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="body" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f6f6f6; width: 100%;" width="100%" bgcolor="#f6f6f6">

   <tr>

      <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;" valign="top">&nbsp;</td>

            <td class="container" style="font-family: sans-serif; font-size: 14px; vertical-align: top; display: block; max-width: 580px; padding: 10px; width: 580px; margin: 0 auto;" width="580" valign="top">

              <div class="content" style="box-sizing: border-box; display: block; margin: 0 auto; max-width: 580px; padding: 10px;">

                  <!-- START CENTERED WHITE CONTAINER -->

                  <table role="presentation" class="main" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background: #ffffff; border-radius: 3px; width: 100%;" width="100%">

                        <!-- START MAIN CONTENT AREA -->

                          <tr>

                           <td class="wrapper" style="font-family: sans-serif; font-size: 14px; vertical-align: top; box-sizing: border-box; padding: 20px;" valign="top">

                                <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;" width="100%">



                                 <tr>

                                      <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;" valign="top">

                                       <img src="https://mysolar.cleverdigital.ie/wp-content/uploads/2022/09/logo-1-150x150.png" height="150" width="150">

                                           <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; margin-bottom: 15px;">Hi,</p>

                                       <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; margin-bottom: 15px;">Many thanks for taking the time to contact us.</p>

                                       <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; margin-bottom: 15px;">This estimated quote is valid for 30 days</p>

                                          <p>Customer Name: ' . $namenew . '</p>

                                          

                                          <p>What type of property do you live in?: ' . $typeofproperty . '</p>

                                          <p>What is the pitch of your roof?: ' . $roof . '</p>

                                          <p>What orientation is the roof you want to install panels on?: ' . $installpanel . '</p>

                                          <p>Do you have any shading on your roof from chimneys or nearby trees?: ' . $nearbychumeys . '</p>

                                          <p>During what part of the day are you home most?: ' . $homemost . '</p>

                                         <p>Phone Number: ' . $pno . '</p>

                                         <p>Eircode: ' . $eircode . '</p>

                                         <p>County : ' . $contry . '</p>

                                          <p>Email Address: ' . $emailnew . '</p>

                                        <p>Products Name: ' . $selectedCountry . '</p>

                                         <p>Number Of Panel: ' . $cm . '</p>

                                          <p>Total Grant : €' . round( $cm2 ) . '</p>

                                         <p>kWh : ' . $kw . '</p>

                                         <p> Total PV System Cost When Grant Approved  : €' . round( $mygrant ) . '</p>

                     <p>Discounted Upfront Payment  Grant Deducted: €' . round( $nett ) . '</p>

                  

                    <p>* Savings based on standard electricity cost & south facing property. </p>

                      <p>Final price subject to survey</p>

                                        </td>

                                        </tr>

                                    </table>

                                   </td>

                                  </tr>

                            <!-- END MAIN CONTENT AREA -->

                             </table>

                          <!-- END CENTERED WHITE CONTAINER -->

                              <div class="footer" style="clear: both; margin-top: 10px; text-align: center; width: 100%;">

                              <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;" width="100%">

                              <tr>

                              <td class="content-block" style="font-family: sans-serif; vertical-align: top; padding-bottom: 10px; padding-top: 10px; color: #999999; font-size: 12px; text-align: center;" valign="top" align="center">

                              <span class="apple-link" style="color: #999999; font-size: 12px; text-align: center;">MySolar Registered in Ireland No.651647</span>

                            </td>

                            </tr>

                          </table>

                      </div>

                    <!-- END FOOTER -->

                  </div>

                </td>

              <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;" valign="top">&nbsp;</td>

          </tr>

        </table>

        </body>';

    }

    else{

      $message = '<body style="background-color: #f6f6f6; font-family: sans-serif; -webkit-font-smoothing: antialiased; font-size: 14px; line-height: 1.4; margin: 0; padding: 0; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">

     <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="body" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f6f6f6; width: 100%;" width="100%" bgcolor="#f6f6f6">

   <tr>

      <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;" valign="top">&nbsp;</td>

            <td class="container" style="font-family: sans-serif; font-size: 14px; vertical-align: top; display: block; max-width: 580px; padding: 10px; width: 580px; margin: 0 auto;" width="580" valign="top">

              <div class="content" style="box-sizing: border-box; display: block; margin: 0 auto; max-width: 580px; padding: 10px;">

                  <!-- START CENTERED WHITE CONTAINER -->

                  <table role="presentation" class="main" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background: #ffffff; border-radius: 3px; width: 100%;" width="100%">

                        <!-- START MAIN CONTENT AREA -->

                          <tr>

                           <td class="wrapper" style="font-family: sans-serif; font-size: 14px; vertical-align: top; box-sizing: border-box; padding: 20px;" valign="top">

                                <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;" width="100%">



                                 <tr>

                                      <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;" valign="top">

                                       <img src="https://mysolar.cleverdigital.ie/wp-content/uploads/2022/09/logo-1-150x150.png" height="150" width="150">

                                           <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; margin-bottom: 15px;">Hi,</p>

                                       <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; margin-bottom: 15px;">Many thanks for taking the time to contact us.</p>

                                       <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; margin-bottom: 15px;">This estimated quote is valid for 30 days</p>

                                          <p>Customer Name: ' . $namenew . '</p>

                                          

                                          <p>What type of property do you live in?: ' . $typeofproperty . '</p>

                                          <p>What is the pitch of your roof?: ' . $roof . '</p>

                                          <p>What orientation is the roof you want to install panels on?: ' . $installpanel . '</p>

                                          <p>Do you have any shading on your roof from chimneys or nearby trees?: ' . $nearbychumeys . '</p>

                                          <p>During what part of the day are you home most?: ' . $homemost . '</p>

                                         <p>Phone Number: ' . $pno . '</p>

                                         <p>Eircode: ' . $eircode . '</p>

                                         <p>County : ' . $contry . '</p>

                                          <p>Email Address: ' . $emailnew . '</p>

                                        <p>Products Name: ' . $selectedCountry . '</p>

                                         <p>Number Of Panel: ' . $cm . '</p>

                                          <p>Total Grant : €' . round( $cm2 ) . '</p>

                                         <p>kWh : ' . $kw . '</p>

                                         <p> Total PV System Cost When Grant Approved  : €' . round( $mygrant ) . '</p>

                     <p>Discounted Upfront Payment With Grant: €' . round( $nett ) . '</p>

                  

                    <p>* Savings based on standard electricity cost & south facing property. </p>

                      <p>Final price subject to survey</p>

                                        </td>

                                        </tr>

                                    </table>

                                   </td>

                                  </tr>

                            <!-- END MAIN CONTENT AREA -->

                             </table>

                          <!-- END CENTERED WHITE CONTAINER -->

                              <div class="footer" style="clear: both; margin-top: 10px; text-align: center; width: 100%;">

                              <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;" width="100%">

                              <tr>

                              <td class="content-block" style="font-family: sans-serif; vertical-align: top; padding-bottom: 10px; padding-top: 10px; color: #999999; font-size: 12px; text-align: center;" valign="top" align="center">

                              <span class="apple-link" style="color: #999999; font-size: 12px; text-align: center;">MySolar Registered in Ireland No.651647</span>

                            </td>

                            </tr>

                          </table>

                      </div>

                    <!-- END FOOTER -->

                  </div>

                </td>

              <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;" valign="top">&nbsp;</td>

          </tr>

        </table>

        </body>';

    }



    // a random hash will be necessary to send mixed content

    $separator = md5(time());



    // carriage return type (we use a PHP end of line constant)

    $eol = PHP_EOL;



    // attachment name

    $filename = "MySolar.pdf";



    // encode data (puts attachment in proper format)

    $pdfdoc = $pdf->Output("", "S");

    $attachment = chunk_split(base64_encode($pdfdoc));



    // main header

    $headers  = "From: ".$from.$eol;

    $headers .= "MIME-Version: 1.0".$eol; 

    $headers .= "Content-Type: multipart/mixed; boundary=\"".$separator."\"";

    $headers .= 'Bcc: flogas@mysolar.ie';





    // no more headers after this, we start the body! //



    $body = "--".$separator.$eol;

    $body .= "Content-Transfer-Encoding: 7bit".$eol.$eol;

    //$body .= "This is a MIME encoded message.".$eol;



    // message

    $body .= "--".$separator.$eol;

    $body .= "Content-Type: text/html; charset=\"iso-8859-1\"".$eol;

    $body .= "Content-Transfer-Encoding: 8bit".$eol.$eol;

    $body .= $message.$eol;



    // attachment

    $body .= "--".$separator.$eol;

    $body .= "Content-Type: application/octet-stream; name=\"".$filename."\"".$eol; 

    $body .= "Content-Transfer-Encoding: base64".$eol;

    $body .= "Content-Disposition: attachment".$eol.$eol;

    $body .= $attachment.$eol;

    $body .= "--".$separator."--";



    // send message

    mail($to, $subject, $body, $headers);



    $date = date('d-m-y');

    $pdf = new FPDF();

    $pdf->AddPage();

    $pdf->SetFont('Arial','B',15);

    $pdf->Image('https://mysolar.cleverdigital.ie/wp-content/uploads/2022/09/logo-1-150x150.png',15,5,'PNG');

      $pdf->Ln(40);

    $pdf->Cell(10,1, "$namenew,");



    $pdf->Ln(5);

    $pdf->Cell(10,10, 'Quote No:  :CF-'.$lastid);

     

    $pdf->Multicell(175,10,'Date:' .$date,0,'R');

    $pdf->Cell(10,10, 'Customer Name: '.$namenew);

    $pdf->Ln(10);

    // $pdf->Cell(10,10, 'Property Type: '.$propertytype);

    // $pdf->Ln(10);

    $pdf->Cell(10,10, 'What type of property do you live in?: '.$typeofproperty);

  $pdf->Ln(10);

  $pdf->Cell(10,10, 'What is the pitch of your roof?: '.$roof);

  $pdf->Ln(10);

  $pdf->Cell(10,10, 'What orientation is the roof you want to install panels on?: '.$installpanel);

  $pdf->Ln(10);

  $pdf->Cell(10,10, 'Do you have any shading on your roof from chimneys or nearby trees?: '.$nearbychumeys);

$pdf->Ln(10);

$pdf->Cell(10,10, 'During what part of the day are you home most?: '.$homemost);

$pdf->Ln(10);

    $pdf->Cell(40,10, 'Phone Number: '.$pno);

    $pdf->Ln(10);

    $pdf->Cell(40,10, 'Eircode: '.$eircode);

    $pdf->Ln(10);

    $pdf->Cell(40,10, 'County: '.$contry);

    $pdf->Ln(10);

    $pdf->Cell(40,10, 'Email Address: '.$emailnew);

    $pdf->Ln(15);

    $pdf->Cell(40,10, 'Product Name: '.$selectedCountry);

    $pdf->Ln(10);

    $pdf->Cell(40,10, 'Number of Panels: '.$cm);

    $pdf->Ln(10);

    $pdf->Cell(40,10, 'Estimated kWh  Generated: '.$kw);

    $pdf->Ln(20);

    //$pdf->Cell(40,10, 'Total Grant Available: €'.round( $cm2 ));

    $texttone = "Total Grant Available: €". number_format( $cm2 );  

    $pdf->Write(0,iconv('UTF-8', 'windows-1252', $texttone));

    $pdf->Ln(10);

    //$pdf->Cell(40,10, 'Total PV System Cost Without Grant: €'.round( $clientgros ));

    //$texttto = "Total PV System Cost Without Grant: €". number_format( $clientgros );  

    //$pdf->Write(0,iconv('UTF-8', 'windows-1252', $texttto));

    //$pdf->Ln(10);

    //$pdf->Cell(40,10, 'Total PV System Cost When Grant Approved: €'.round( $mygrant ));

    $texttfour = "Total PV System Cost When Grant Approved: €". number_format( $mygrant );  

    $pdf->Write(0,iconv('UTF-8', 'windows-1252', $texttfour));

    $pdf->Ln(10);

   // $pdf->Cell(40,10, 'Contract Term (Years): '.$year);

    $pdf->Ln(15);

    //$pdf->Cell(40,10, 'Discounted Upfront Payment With Grant: €'. round( $nett ));

    

     if($cm == 6){

$texttofive = "Discounted Upfront Payment Grant Deducted: €". number_format( $nett );  

    $pdf->Write(0,iconv('UTF-8', 'windows-1252', $texttofive));

 }

 else{

  $texttofive = "Discounted Upfront Payment With Grant: €". number_format( $nett );  

    $pdf->Write(0,iconv('UTF-8', 'windows-1252', $texttofive));

 }

    





    $pdf->Ln(25);



$pdf->SetFont('Times','BI',13);

$pdf->Cell(10,0, 'Terms & Conditions');

$pdf->Ln(5);

    $pdf->Cell(40,10, '* Savings based on standard electricity cost & south facing property.');

    $pdf->Ln(10);

    $pdf->Cell(40,10, '*  Final price subject to survey *.');

    $pdf->Ln(10);

    $pdf->Cell(40,10, '* Quote Expires In 30 days');



    $pdf->Ln(15);

    $pdf->Cell(10,0, 'Tel: 083 090 8912');

     

    $pdf->Multicell(100,0,'Email: info@mysolar.ie',0,'R');



    $pdf->Multicell(160,0,'Web: mysolar.ie',0,'R');

//    $pdf->Ln(10);

    

//    $pdf->Cell(10,0, 'Terms & Conditions');// email stuff (change data below)





    $to = $emailnew; 

    $from = "sales@mysolar.ie"; 

    $subject = "SOLAR-CALCULATOR Quote";

     if($cm == 6){

  

 $message = '<body style="background-color: #f6f6f6; font-family: sans-serif; -webkit-font-smoothing: antialiased; font-size: 14px; line-height: 1.4; margin: 0; padding: 0; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">

       <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="body" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f6f6f6; width: 100%;" width="100%" bgcolor="#f6f6f6">

     <tr>

        <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;" valign="top">&nbsp;</td>

            <td class="container" style="font-family: sans-serif; font-size: 14px; vertical-align: top; display: block; max-width: 580px; padding: 10px; width: 580px; margin: 0 auto;" width="580" valign="top">

              <div class="content" style="box-sizing: border-box; display: block; margin: 0 auto; max-width: 580px; padding: 10px;">

                 <!-- START CENTERED WHITE CONTAINER -->

               <table role="presentation" class="main" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background: #ffffff; border-radius: 3px; width: 100%;" width="100%">

                        <!-- START MAIN CONTENT AREA -->

                         <tr>

                            <td class="wrapper" style="font-family: sans-serif; font-size: 14px; vertical-align: top; box-sizing: border-box; padding: 20px;" valign="top">

                               <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;" width="100%">

                                 <tr>

                                   <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;" valign="top">

                                    <img src="https://mysolar.cleverdigital.ie/wp-content/uploads/2022/09/logo-1-150x150.png" height="150" width="150">

                                           <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; margin-bottom: 15px;">Hi,</p>

                                       <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; margin-bottom: 15px;">Many thanks for taking the time to contact us.</p>

                                       <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; margin-bottom: 15px;">This estimated quote is valid for 30 days</p>

                                          <p>Customer Name: ' . $namenew . '</p>

                                          

                                          <p>What type of property do you live in?: ' . $typeofproperty . '</p>

                                          <p>What is the pitch of your roof?: ' . $roof . '</p>

                                          <p>What orientation is the roof you want to install panels on?: ' . $installpanel . '</p>

                                          <p>Do you have any shading on your roof from chimneys or nearby trees?: ' . $nearbychumeys . '</p>

                                        <p>During what part of the day are you home most?: ' . $homemost . '</p>

                                         <p>Phone Number: ' . $pno . '</p>

                                         <p>Eircode: ' . $eircode . '</p>

                                         <p>County : ' . $contry . '</p>

                                          <p>Email Address: ' . $emailnew . '</p>

                                          <p>Products Name: ' . $selectedCountry . '</p>

                                        <p>Number Of Panel: ' . $cm . '</p>

                                      <p>Total Grant : €' . round( $cm2 ) . '</p>

                                          <p>kWh : ' . $kw . '</p>

                                          <p> Total PV System Cost When Grant Approved  : €' . round( $mygrant ) . '</p>

                                         <p>Discounted Upfront Payment  Grant Deducted: €' . round( $nett ) . '</p>

                                       

                                        <p>* Savings based on standard electricity cost & south facing property. </p>

                                          <p>Final price subject to survey</p>

                                        </td>

                                       </tr>

                                    </table>

                                    </td>

                                  </tr>

                          <!-- END MAIN CONTENT AREA -->

                             </table>

                             <!-- END CENTERED WHITE CONTAINER -->

                              <div class="footer" style="clear: both; margin-top: 10px; text-align: center; width: 100%;">

                             <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;" width="100%">

                              <tr>

                              <td class="content-block" style="font-family: sans-serif; vertical-align: top; padding-bottom: 10px; padding-top: 10px; color: #999999; font-size: 12px; text-align: center;" valign="top" align="center">

                              <span class="apple-link" style="color: #999999; font-size: 12px; text-align: center;">MySolar Registered in Ireland No.651647</span>

                           </td>

                          </tr>

                          </table>

                      </div>

                    <!-- END FOOTER -->

                  </div>

                </td>

             <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;" valign="top">&nbsp;</td>

          </tr>

        </table>

        </body>';

 }

 else{


  $message = '<body style="background-color: #f6f6f6; font-family: sans-serif; -webkit-font-smoothing: antialiased; font-size: 14px; line-height: 1.4; margin: 0; padding: 0; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">

       <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="body" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f6f6f6; width: 100%;" width="100%" bgcolor="#f6f6f6">

     <tr>

        <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;" valign="top">&nbsp;</td>

            <td class="container" style="font-family: sans-serif; font-size: 14px; vertical-align: top; display: block; max-width: 580px; padding: 10px; width: 580px; margin: 0 auto;" width="580" valign="top">

              <div class="content" style="box-sizing: border-box; display: block; margin: 0 auto; max-width: 580px; padding: 10px;">

                 <!-- START CENTERED WHITE CONTAINER -->

               <table role="presentation" class="main" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background: #ffffff; border-radius: 3px; width: 100%;" width="100%">

                        <!-- START MAIN CONTENT AREA -->

                         <tr>

                            <td class="wrapper" style="font-family: sans-serif; font-size: 14px; vertical-align: top; box-sizing: border-box; padding: 20px;" valign="top">

                               <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;" width="100%">

                                 <tr>

                                   <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;" valign="top">

                                    <img src="https://mysolar.cleverdigital.ie/wp-content/uploads/2022/09/logo-1-150x150.png" height="150" width="150">

                                           <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; margin-bottom: 15px;">Hi,</p>

                                       <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; margin-bottom: 15px;">Many thanks for taking the time to contact us.</p>

                                       <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; margin-bottom: 15px;">This estimated quote is valid for 30 days</p>

                                          <p>Customer Name: ' . $namenew . '</p>

                                          

                                          <p>What type of property do you live in?: ' . $typeofproperty . '</p>

                                          <p>What is the pitch of your roof?: ' . $roof . '</p>

                                          <p>What orientation is the roof you want to install panels on?: ' . $installpanel . '</p>

                                          <p>Do you have any shading on your roof from chimneys or nearby trees?: ' . $nearbychumeys . '</p>

                                          <p>During what part of the day are you home most?: ' . $homemost . '</p>

                                         <p>Phone Number: ' . $pno . '</p>

                                         <p>Eircode: ' . $eircode . '</p>

                                         <p>County : ' . $contry . '</p>

                                          <p>Email Address: ' . $emailnew . '</p>

                                          <p>Products Name: ' . $selectedCountry . '</p>

                                        <p>Number Of Panel: ' . $cm . '</p>

                                      <p>Total Grant : €' . round( $cm2 ) . '</p>

                                          <p>kWh : ' . $kw . '</p>

                                          <p> Total PV System Cost When Grant Approved  : €' . round( $mygrant ) . '</p>

                                         <p>Discounted Upfront Payment With Grant: €' . round( $nett ) . '</p>

                                       

                                        <p>* Savings based on standard electricity cost & south facing property. </p>

                                          <p>Final price subject to survey</p>

                                        </td>

                                       </tr>

                                    </table>

                                    </td>

                                  </tr>

                          <!-- END MAIN CONTENT AREA -->

                             </table>

                             <!-- END CENTERED WHITE CONTAINER -->

                              <div class="footer" style="clear: both; margin-top: 10px; text-align: center; width: 100%;">

                             <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;" width="100%">

                              <tr>

                              <td class="content-block" style="font-family: sans-serif; vertical-align: top; padding-bottom: 10px; padding-top: 10px; color: #999999; font-size: 12px; text-align: center;" valign="top" align="center">

                              <span class="apple-link" style="color: #999999; font-size: 12px; text-align: center;">MySolar Registered in Ireland No.651647</span>

                           </td>

                          </tr>

                          </table>

                      </div>

                    <!-- END FOOTER -->

                  </div>

                </td>

             <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;" valign="top">&nbsp;</td>

          </tr>

        </table>

        </body>';

 }

    



    // a random hash will be necessary to send mixed content

    $separator = md5(time());



    // carriage return type (we use a PHP end of line constant)

    $eol = PHP_EOL;



    // attachment name

    $filename = "MySolar.pdf";



    // encode data (puts attachment in proper format)

    $pdfdoc = $pdf->Output("", "S");

    $attachment = chunk_split(base64_encode($pdfdoc));



    // main header

    $headers  = "From: ".$from.$eol;

    $headers .= "MIME-Version: 1.0".$eol; 

    $headers .= "Content-Type: multipart/mixed; boundary=\"".$separator."\"";

    





    // no more headers after this, we start the body! //



    $body = "--".$separator.$eol;

    $body .= "Content-Transfer-Encoding: 7bit".$eol.$eol;

    //$body .= "This is a MIME encoded message.".$eol;



    // message

    $body .= "--".$separator.$eol;

    $body .= "Content-Type: text/html; charset=\"iso-8859-1\"".$eol;

    $body .= "Content-Transfer-Encoding: 8bit".$eol.$eol;

    $body .= $message.$eol;



    // attachment

    $body .= "--".$separator.$eol;

    $body .= "Content-Type: application/octet-stream; name=\"".$filename."\"".$eol; 

    $body .= "Content-Transfer-Encoding: base64".$eol;

    $body .= "Content-Disposition: attachment".$eol.$eol;

    $body .= $attachment.$eol;

    $body .= "--".$separator."--";



    // send message

    mail($to, $subject, $body, $headers);

    

    

    //////////// Bitrix API Pay Up Front (Just Energy Residential) ////////////////

    $result = CRest::call(

    'crm.lead.add',

    ['FIELDS' => 

      [

      //'TITLE' => 'MySolar Website Quotation/Calculator', 

    'TITLE' => $namenew,

      'NAME' => $namenew, 

      'ADDRESS' => $contry, 

      

      'UF_CRM_1663758814' => $lastid, 

      'UF_CRM_1663758895' => $eircode,

      'UF_CRM_1663758913' => $contry, 

      'UF_CRM_1663758926' => $selectedroduct, 

      'UF_CRM_1663758956' => $cm, 

      'UF_CRM_1663758977' => $kw, 

      'UF_CRM_1663758998' => '€'.$cm2, 

      'UF_CRM_1663759019' => '€'.$clientgros, 

      'UF_CRM_1663759040' => '€'.$mygrant, 

      //'UF_CRM_1663759074' => $year, 

      //'UF_CRM_1663759169' => '€'.number_format( $monthlypay, 2 ), 

      //'UF_CRM_1663759180' => '€'.number_format( $monthlynetpalan, 2 ), 

      'UF_CRM_1663759200' => '€'.number_format($nett),  

      'UF_CRM_1659522970002' => $attachment,  

      'UF_CRM_1674039430' => $typeofproperty,

      'UF_CRM_1674039544' => $roof,

      'UF_CRM_1674039579' => $installpanel,

      'UF_CRM_1674039639' => $nearbychumeys,

      'UF_CRM_1674039674' => $homemost,

      

      //'SOURCE' => "API Integration Calculator Form", 
      'SOURCE_ID' => 'WEB', 
       'UF_CRM_1672303237' => '124',

      'EMAIL' => ['0' => ['VALUE' => $emailnew]], 

      'PHONE' => ['0' => ['VALUE' => $pno]], 

       ], 

    ]

  );  

  

    

  }  // End payupfrontselect condtion of JUST Energy

  

  

}   // End condtion of JUST Energy main



if ( $selectedCountry == "Energy & Hot Water Diverter" ) {



  $f = $_COOKIE[ 'f' ];

  $cm2 = $_COOKIE[ 'grant' ];

  $kw = $_COOKIE[ 'kw' ];

  $cm = $_COOKIE[ 'nopanel' ];

  $cm2 = $_COOKIE[ 'grant' ];



  $kw = $_COOKIE[ 'kw' ];

  $extrapanel = $_COOKIE[ 'extrapanel' ];

  $extracost = $_COOKIE[ 'extracost' ];

  $clientgros = $_COOKIE[ 'clientgros' ];

 $lessGrant = $_COOKIE[ 'lessGrant' ];

  $upfrontpayment = $_COOKIE[ 'upfrontpayment' ];

  $year = $_COOKIE[ 'year' ];

  $monthlypay = $_COOKIE[ 'monthlypay' ];

  $monthlynetpalan = $_COOKIE[ 'monthlynetpalan' ];

  $contry = $_COOKIE[ 'selValue' ];

  $cod = $_COOKIE['cod'];

  $nett = $_COOKIE[ 'nett' ];

  $mygrant = $_COOKIE[ 'mygrant' ];

  $myclientgross = $_COOKIE[ 'myclientgross'];

  

  $lastid = $wpdb->insert_id;





  $upval = $_COOKIE[ 'upval' ];



  $mygrant = $_COOKIE['mygrant'];

  $myclientgross = $_COOKIE['myclientgross'];



  if ( $upval == 'finance' ){
global $wpdb;

$wpdb->insert(

    "wp_3qoute_solar_calulation",
    array(
      "name" => $namenew,
      "email" => $emailnew,
      "phone" => $pno,
      "discount"=> $eircode,
      "panelno" => $f,
      "grant" => $cm2,
      "kw" => $kw,
      "extrapanel" => $extrapanel,
      "expcost" => $extracost,
      "clientgross" => $myclientgross,
      "lessgrant" => $mygrant,
      "upfrontpayment" => $upfrontpayment,
      // //  "discount"=>$clientgros,
      "total" => $cod,
     // "totalminesgrant" => $nett,
       "totalminesvalue" => $seller,
      "finance" => $contry,
      "year" => $year,
      "monthlygrs" => $monthlypay,
      "monthlynet" => $monthlynetpalan,
      "productname" => $selectedCountry,
    //   "propertytype" => $propertytype,
      "typeofproperty" => $typeofproperty,
      "roof" => $roof,
      "installpanel" => $installpanel,
      "nearbychumeys" => $nearbychumeys,
      "homemost" => $homemost

    )



  );

  $lastid = $wpdb->insert_id;

  $date = date('d-m-y');

  $pdf = new FPDF();

  $pdf->AddPage();



  $pdf->SetFont('Arial','B',15);

  $pdf->Image('https://mysolar.cleverdigital.ie/wp-content/uploads/2022/09/logo-1-150x150.png',15,5,'PNG');

    $pdf->Ln(40);

  $pdf->Cell(10,1, "$namenew,");

  $pdf->Ln(5);

  $pdf->Cell(10,10, 'Quote No:  :CF-'.$lastid);



  $pdf->Multicell(175,10,'Date:' .$date,0,'R');

  $pdf->Ln(5);

  $pdf->Cell(10,10, 'Name: '.$namenew);

  $pdf->Ln(10);

  // $pdf->Cell(10,10, 'Property Type: '.$propertytype);

  // $pdf->Ln(10);

  $pdf->Cell(10,10, 'What type of property do you live in?: '.$typeofproperty);

  $pdf->Ln(10);

  $pdf->Cell(10,10, 'What is the pitch of your roof?: '.$roof);

  $pdf->Ln(10);

  $pdf->Cell(10,10, 'What orientation is the roof you want to install panels on?: '.$installpanel);

  $pdf->Ln(10);

  $pdf->Cell(10,10, 'Do you have any shading on your roof from chimneys or nearby trees?: '.$nearbychumeys);

$pdf->Ln(10);

$pdf->Cell(10,10, 'During what part of the day are you home most?: '.$homemost);

$pdf->Ln(10);

  $pdf->Cell(40,10, 'Phone Number: '.$pno);

  $pdf->Ln(10);

  $pdf->Cell(40,10, 'Eircode: '.$eircode);

  $pdf->Ln(10);

  $pdf->Cell(40,10, 'County: '.$contry);

  $pdf->Ln(10);

  $pdf->Cell(40,10, 'Email Address: '.$emailnew);

  $pdf->Ln(15);

  $pdf->Cell(40,10, 'Product Name: '.$selectedCountry);

  $pdf->Ln(10);

  $pdf->Cell(40,10, 'Number of Panels: '.$f);

  $pdf->Ln(10);

  $pdf->Cell(40,10, 'Estimated kWh  Generated: '.$kw);

  $pdf->Ln(20);

  //$pdf->Cell(40,10, 'Total Grant Available: €'.round( $cm2 ));

  $textothree = "Total Grant Available: €". number_format( $cm2 );  

  $pdf->Write(0,iconv('UTF-8', 'windows-1252', $textothree));

  $pdf->Ln(10);

  // $pdf->Cell(40,10, 'Total PV System Cost Without Grant: €'.round( $clientgros ));

  //$textffour = "Total PV System Cost Without Grant: €". number_format( $clientgros );  

  //$pdf->Write(0,iconv('UTF-8', 'windows-1252', $textffour));

  //$pdf->Ln(10);

  //$pdf->Cell(40,10, 'Total PV System Cost When Grant Approved: €'.round( $lessGrant ));

  $textffive = "Total PV System Cost When Grant Approved: €". number_format( $lessGrant );  

  $pdf->Write(0,iconv('UTF-8', 'windows-1252', $textffive));

  $pdf->Ln(10);

  $pdf->Cell(40,10, 'Contract Term (Years): '.$year);

  $pdf->Ln(15);

  //$pdf->Cell(40,10, 'Total Monthly Payment without Grant deducted: €'. round( $monthlypay, 2 ));

  //$textfsix = "Total Monthly Payment without Grant deducted: €". number_format( $monthlypay, 2 );  

  //$pdf->Write(0,iconv('UTF-8', 'windows-1252', $textfsix));

  //$pdf->Ln(10);

  //$pdf->Cell(40,10, 'Total Monthly Payment After Grant Deducted: €'.round( $monthlynetpalan, 2 ));

  $textfsev = "Total Monthly Payment After Grant Deducted: €". number_format( $monthlynetpalan, 2 );  

  $pdf->Write(0,iconv('UTF-8', 'windows-1252', $textfsev));

  $pdf->Ln(10);

$pdf->SetFont('Times','BI',13);

$pdf->Cell(10,0, 'Terms & Conditions');

$pdf->Ln(5);

  $pdf->Cell(40,10, '* Savings based on standard electricity cost & south facing property.');

  $pdf->Ln(10);

  $pdf->Cell(40,10, '*  Final price subject to survey *.');

  $pdf->Ln(10);

  $pdf->Cell(40,10, '* Quote Expires In 30 days');

  $pdf->Ln(15);

  $pdf->Cell(10,0, 'Tel: 083 090 8912');

   

  $pdf->Multicell(100,0,'Email: info@mysolar.ie',0,'R');



  $pdf->Multicell(160,0,'Web: mysolar.ie',0,'R');



//  $pdf->Ln(10);



//  $pdf->Cell(10,0, 'Terms & Conditions');



  // email stuff (change data below)

  

$to = "joe@cleverdigital.ie,sales@mysolar.ie";

   



$from = "sales@mysolar.ie"; 

  $subject = "SOLAR-CALCULATOR Quote";

  $message = '<body style="background-color: #f6f6f6; font-family: sans-serif; -webkit-font-smoothing: antialiased; font-size: 14px; line-height: 1.4; margin: 0; padding: 0; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">

     <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="body" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f6f6f6; width: 100%;" width="100%" bgcolor="#f6f6f6" id="tblCustomers">

    <tr>

      <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;" valign="top">&nbsp;</td>

        <td class="container" style="font-family: sans-serif; font-size: 14px; vertical-align: top; display: block; max-width: 580px; padding: 10px; width: 580px; margin: 0 auto;" width="580" valign="top">

          <div class="content" style="box-sizing: border-box; display: block; margin: 0 auto; max-width: 580px; padding: 10px;">

            <!-- START CENTERED WHITE CONTAINER -->

            <table role="presentation" class="main" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background: #ffffff; border-radius: 3px; width: 100%;" width="100%">

              <!-- START MAIN CONTENT AREA -->

                <tr>

                 <td class="wrapper" style="font-family: sans-serif; font-size: 14px; vertical-align: top; box-sizing: border-box; padding: 20px;" valign="top">

                  <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;" width="100%"  >

                    <tr>



                     <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;" valign="top">

                      <img src="https://mysolar.cleverdigital.ie/wp-content/uploads/2022/09/logo-1-150x150.png" height="150" width="150">

                        <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; margin-bottom: 15px;">Hi,</p>

                                       <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; margin-bottom: 15px;">Many thanks for taking the time to contact us.</p>

                                       <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; margin-bottom: 15px;">This estimated quote is valid for 30 days</p>

                        <p>Customer Name: ' . $namenew . '</p>

                        

                        <p>What type of property do you live in?: ' . $typeofproperty . '</p>

                        <p>What is the pitch of your roof?: ' . $roof . '</p>

                        <p>What orientation is the roof you want to install panels on?: ' . $installpanel . '</p>

                        <p>Do you have any shading on your roof from chimneys or nearby trees?: ' . $nearbychumeys . '</p>

                       <p>During what part of the day are you home most?: ' . $homemost . '</p>

                        <p>Phone Number: ' . $pno . '</p>

                        <p>Eircode: ' . $eircode . '</p>

                        <p>County : ' . $contry . '</p>

                       <p>Email Address: ' . $emailnew . '</p>

                       <p>Products Name: ' . $selectedCountry . '</p>

                        <p>Number Of Panel: ' . $f . '</p>

                       <p>Total Grant  : €' . round( $cm2 ) . '</p>

                        <p>kWh : ' . $kw . '</p>

                        <p> Total PV System Cost When Grant Approved  : €' . round( $lessGrant ) . '</p>

                        <p> Contract Term (Years): ' . $year . '</p>

                        

                         <p>Total Monthly Payment After Grant Deducted: €' . number_format( $monthlynetpalan, 2 ) . '</p>

                        

                        <p>* Savings based on standard electricity cost & south facing property. </p>

                        <p>Final price subject to survey</p>

                      </td>

                      </tr>

                     </table>

                    

                    </td>

                   </tr>

                   <script>

                   console.log("Hleoo ther");

                   </script>

                <!-- END MAIN CONTENT AREA -->

                 </table>

                 <!-- END CENTERED WHITE CONTAINER -->

                  <div class="footer" style="clear: both; margin-top: 10px; text-align: center; width: 100%;">

                 <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;" width="100%">

                <tr>



                  <td class="content-block" style="font-family: sans-serif; vertical-align: top; padding-bottom: 10px; padding-top: 10px; color: #999999; font-size: 12px; text-align: center;" valign="top" align="center">

                  <span class="apple-link" style="color: #999999; font-size: 12px; text-align: center;">MySolar Registered in Ireland No.651647</span>

                </td>

                </tr>

                </table>

              </div>

            <!-- END FOOTER -->

            </div>

          </td>

          <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;" valign="top">&nbsp;</td>

       </tr>

      </table>

      </body>';



  // a random hash will be necessary to send mixed content

  $separator = md5(time());



  // carriage return type (we use a PHP end of line constant)

  $eol = PHP_EOL;



  // attachment name

  $filename = "MySolar.pdf";



  // encode data (puts attachment in proper format)

  $pdfdoc = $pdf->Output("", "S");

  $attachment = chunk_split(base64_encode($pdfdoc));



  // main header

  $headers  = "From: ".$from.$eol;

  $headers .= "MIME-Version: 1.0".$eol; 

  $headers .= "Content-Type: multipart/mixed; boundary=\"".$separator."\"";

  $headers .= 'Bcc: flogas@mysolar.ie';





  // no more headers after this, we start the body! //



  $body = "--".$separator.$eol;

  $body .= "Content-Transfer-Encoding: 7bit".$eol.$eol;

  //$body .= "This is a MIME encoded message.".$eol;



  // message

  $body .= "--".$separator.$eol;

  $body .= "Content-Type: text/html; charset=\"iso-8859-1\"".$eol;

  $body .= "Content-Transfer-Encoding: 8bit".$eol.$eol;

  $body .= $message.$eol;



  // attachment

  $body .= "--".$separator.$eol;

  $body .= "Content-Type: application/octet-stream; name=\"".$filename."\"".$eol; 

  $body .= "Content-Transfer-Encoding: base64".$eol;

  $body .= "Content-Disposition: attachment".$eol.$eol;

  $body .= $attachment.$eol;

  $body .= "--".$separator."--";



  // send message

  mail($to, $subject, $body, $headers);



  $date = date('d-m-y');

  $pdf = new FPDF();

  $pdf->AddPage();

  $pdf->SetFont('Arial','B',15);

  $pdf->Image('https://mysolar.cleverdigital.ie/wp-content/uploads/2022/09/logo-1-150x150.png',15,5,'PNG');

    $pdf->Ln(40);

  $pdf->Cell(10,1, "$namenew,");

  $pdf->Ln(5);

  $pdf->Cell(10,10, 'Quote No:  :CF-'.$lastid);



  $pdf->Multicell(175,10,'Date:' .$date,0,'R');

  $pdf->Ln(5);

  $pdf->Cell(10,10, 'Name: '.$namenew);

  $pdf->Ln(10);

  // $pdf->Cell(10,10, 'Property Type: '.$propertytype);

  // $pdf->Ln(10);

  $pdf->Cell(10,10, 'What type of property do you live in?: '.$typeofproperty);

  $pdf->Ln(10);

  $pdf->Cell(10,10, 'What is the pitch of your roof?: '.$roof);

  $pdf->Ln(10);

  $pdf->Cell(10,10, 'What orientation is the roof you want to install panels on?: '.$installpanel);

  $pdf->Ln(10);

  $pdf->Cell(10,10, 'Do you have any shading on your roof from chimneys or nearby trees?: '.$nearbychumeys);

$pdf->Ln(10);

$pdf->Cell(10,10, 'During what part of the day are you home most?: '.$homemost);

$pdf->Ln(10);

  $pdf->Cell(40,10, 'Phone Number: '.$pno);

  $pdf->Ln(10);

  $pdf->Cell(40,10, 'Eircode: '.$eircode);

  $pdf->Ln(10);

  $pdf->Cell(40,10, 'County: '.$contry);

  $pdf->Ln(10);

  $pdf->Cell(40,10, 'Email Address: '.$emailnew);

  $pdf->Ln(15);

  $pdf->Cell(40,10, 'Product Name: '.$selectedCountry);

  $pdf->Ln(10);

  $pdf->Cell(40,10, 'Number of Panels: '.$f);

  $pdf->Ln(10);

  $pdf->Cell(40,10, 'Estimated kWh  Generated: '.$kw);

  $pdf->Ln(20);

  //$pdf->Cell(40,10, 'Total Grant Available: €'.round( $cm2 ));

  $textothree = "Total Grant Available: €". number_format( $cm2 );  

  $pdf->Write(0,iconv('UTF-8', 'windows-1252', $textothree));

  $pdf->Ln(10);

  // $pdf->Cell(40,10, 'Total PV System Cost Without Grant: €'.round( $clientgros ));

  //$textffour = "Total PV System Cost Without Grant: €". number_format( $clientgros );  

  //$pdf->Write(0,iconv('UTF-8', 'windows-1252', $textffour));

  //$pdf->Ln(10);

  //$pdf->Cell(40,10, 'Total PV System Cost When Grant Approved: €'.round( $lessGrant ));

  $textffive = "Total PV System Cost When Grant Approved: €". number_format( $lessGrant );  

  $pdf->Write(0,iconv('UTF-8', 'windows-1252', $textffive));

  $pdf->Ln(10);

  $pdf->Cell(40,10, 'Contract Term (Years): '.$year);

  $pdf->Ln(15);

  //$pdf->Cell(40,10, 'Total Monthly Payment without Grant deducted: €'. round( $monthlypay, 2 ));

  //$textfsix = "Total Monthly Payment without Grant deducted: €". number_format( $monthlypay, 2 );  

  //$pdf->Write(0,iconv('UTF-8', 'windows-1252', $textfsix));

  //$pdf->Ln(10);

  //$pdf->Cell(40,10, 'Total Monthly Payment After Grant Deducted: €'.round( $monthlynetpalan, 2 ));

  $textfsev = "Total Monthly Payment After Grant Deducted: €". number_format( $monthlynetpalan, 2 );  

  $pdf->Write(0,iconv('UTF-8', 'windows-1252', $textfsev));

  $pdf->Ln(10);

$pdf->SetFont('Times','BI',13);

$pdf->Cell(10,0, 'Terms & Conditions');

$pdf->Ln(5);

  $pdf->Cell(40,10, '* Savings based on standard electricity cost & south facing property.');

  $pdf->Ln(10);

  $pdf->Cell(40,10, '*  Final price subject to survey *.');

  $pdf->Ln(10);

  $pdf->Cell(40,10, '* Quote Expires In 30 days');

  $pdf->Ln(15);

  $pdf->Cell(10,0, 'Tel: 083 090 8912');

   

  $pdf->Multicell(100,0,'Email: info@mysolar.ie',0,'R');



  $pdf->Multicell(160,0,'Web: mysolar.ie',0,'R');

//  $pdf->Ln(10);



//  $pdf->Cell(10,0, 'Terms & Conditions');





  // email stuff (change data below)

  $to = $emailnew; 

  $from = "sales@mysolar.ie"; 

  $subject = "SOLAR-CALCULATOR Quote";

  $message = '<body style="background-color: #f6f6f6; font-family: sans-serif; -webkit-font-smoothing: antialiased; font-size: 14px; line-height: 1.4; margin: 0; padding: 0; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">

     <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="body" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f6f6f6; width: 100%;" width="100%" bgcolor="#f6f6f6" id="tblCustomers">

    <tr>

      <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;" valign="top">&nbsp;</td>

        <td class="container" style="font-family: sans-serif; font-size: 14px; vertical-align: top; display: block; max-width: 580px; padding: 10px; width: 580px; margin: 0 auto;" width="580" valign="top">

          <div class="content" style="box-sizing: border-box; display: block; margin: 0 auto; max-width: 580px; padding: 10px;">

            <!-- START CENTERED WHITE CONTAINER -->

            <table role="presentation" class="main" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background: #ffffff; border-radius: 3px; width: 100%;" width="100%">

              <!-- START MAIN CONTENT AREA -->

                <tr>

                 <td class="wrapper" style="font-family: sans-serif; font-size: 14px; vertical-align: top; box-sizing: border-box; padding: 20px;" valign="top">

                  <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;" width="100%"  >

                    <tr>



                     <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;" valign="top">

                      <img src="https://mysolar.cleverdigital.ie/wp-content/uploads/2022/09/logo-1-150x150.png" height="150" width="150">

                        <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; margin-bottom: 15px;">Hi,</p>

                                       <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; margin-bottom: 15px;">Many thanks for taking the time to contact us.</p>

                                       <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; margin-bottom: 15px;">This estimated quote is valid for 30 days</p>

                        <p>Customer Name: ' . $namenew . '</p>

                        

                        <p>What type of property do you live in?: ' . $typeofproperty . '</p>

                         <p>What is the pitch of your roof?: ' . $roof . '</p>

                         <p>What orientation is the roof you want to install panels on?: ' . $installpanel . '</p>

                         <p>Do you have any shading on your roof from chimneys or nearby trees?: ' . $nearbychumeys . '</p>

                        <p>During what part of the day are you home most?: ' . $homemost . '</p>

                        <p>Phone Number: ' . $pno . '</p>

                        <p>Eircode: ' . $eircode . '</p>

                        <p>County : ' . $contry . '</p>

                       <p>Email Address: ' . $emailnew . '</p>

                       <p>Products Name: ' . $selectedCountry . '</p>

                        <p>Number Of Panel: ' . $f . '</p>

                       <p>Total Grant  : €' . round( $cm2 ) . '</p>

                        <p>kWh : ' . $kw . '</p>

                        <p> Total PV System Cost When Grant Approved  : €' . round( $lessGrant ) . '</p>

                        <p> Contract Term (Years): ' . $year . '</p>

                        

                         <p>Total Monthly Payment After Grant Deducted: €' . number_format( $monthlynetpalan, 2 ) . '</p>

                       

                        <p>* Savings based on standard electricity cost & south facing property. </p>

                        <p>Final price subject to survey</p>

                      </td>

                      </tr>

                     </table>

                    

                    </td>

                   </tr>

                   <script>

                   console.log("Hleoo ther");

                   </script>

                <!-- END MAIN CONTENT AREA -->

                 </table>

                 

                

                 <!-- END CENTERED WHITE CONTAINER -->

                  <div class="footer" style="clear: both; margin-top: 10px; text-align: center; width: 100%;">

                 <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;" width="100%">

                <tr>



                  <td class="content-block" style="font-family: sans-serif; vertical-align: top; padding-bottom: 10px; padding-top: 10px; color: #999999; font-size: 12px; text-align: center;" valign="top" align="center">

                  <span class="apple-link" style="color: #999999; font-size: 12px; text-align: center;">MySolar Registered in Ireland No.651647</span>

                </td>

                </tr>

                </table>

              </div>

            <!-- END FOOTER -->

            </div>

          </td>

          <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;" valign="top">&nbsp;</td>

       </tr>

      </table>

      </body>';



  // a random hash will be necessary to send mixed content

  $separator = md5(time());



  // carriage return type (we use a PHP end of line constant)

  $eol = PHP_EOL;



  // attachment name

  $filename = "MySolar.pdf";



  // encode data (puts attachment in proper format)

  $pdfdoc = $pdf->Output("", "S");

  $attachment = chunk_split(base64_encode($pdfdoc));



  // main header

  $headers  = "From: ".$from.$eol;

  $headers .= "MIME-Version: 1.0".$eol; 

  $headers .= "Content-Type: multipart/mixed; boundary=\"".$separator."\"";

  





  // no more headers after this, we start the body! //



  $body = "--".$separator.$eol;

  $body .= "Content-Transfer-Encoding: 7bit".$eol.$eol;

  //$body .= "This is a MIME encoded message.".$eol;



  // message

  $body .= "--".$separator.$eol;

  $body .= "Content-Type: text/html; charset=\"iso-8859-1\"".$eol;

  $body .= "Content-Transfer-Encoding: 8bit".$eol.$eol;

  $body .= $message.$eol;



  // attachment

  $body .= "--".$separator.$eol;

  $body .= "Content-Type: application/octet-stream; name=\"".$filename."\"".$eol; 

  $body .= "Content-Transfer-Encoding: base64".$eol;

  $body .= "Content-Disposition: attachment".$eol.$eol;

  $body .= $attachment.$eol;

  $body .= "--".$separator."--";





  // send message

  mail($to, $subject, $body, $headers);

  

     //////////// Bitrix API Monthly Payments (Energy & Hot Water Diverter) ////////////////



    $result = CRest::call(

    'crm.lead.add',

    ['FIELDS' => 

      [

      //'TITLE' => 'MySolar Website Quotation/Calculator', 

    'TITLE' => $namenew,

      'NAME' => $namenew, 

      'ADDRESS' => $contry, 

      'UF_CRM_1663758814' => $lastid, 

      'UF_CRM_1663758895' => $eircode,

      'UF_CRM_1663758913' => $contry, 

      'UF_CRM_1663758926' => $selectedroduct, 

      'UF_CRM_1663758956' => $cm, 

      'UF_CRM_1663758977' => $kw, 

      'UF_CRM_1663758998' => '€'.$cm2, 

      'UF_CRM_1663759019' => '€'.$clientgros, 

      'UF_CRM_1663759040' => '€'.$mygrant, 

      'UF_CRM_1663759074' => $year, 

      'UF_CRM_1663759169' => '€'.number_format( $monthlypay, 2 ), 

      'UF_CRM_1663759180' => '€'.number_format( $monthlynetpalan, 2 ), 

      //'UF_CRM_1663759200' => '€'.$nett,  

      'UF_CRM_1659522970002' => $attachment,

      'UF_CRM_1674039430' => $typeofproperty,

      'UF_CRM_1674039544' => $roof,

      'UF_CRM_1674039579' => $installpanel,

      'UF_CRM_1674039639' => $nearbychumeys,

      'UF_CRM_1674039674' => $homemost,

      //'SOURCE' => "API Integration Calculator Form", 

      'SOURCE_ID' => 'WEB', 
       'UF_CRM_1672303237' => '124',

      'EMAIL' => ['0' => ['VALUE' => $emailnew]], 

      'PHONE' => ['0' => ['VALUE' => $pno]], 

       ], 



    ],



  );

  

  

  

  



}

  if ( $upval == 'payupfrontselect' ){

      $wpdb->insert(

    "wp_3qoute_solar_calulation",

    array(

      "name" => $namenew,

      "email" => $emailnew,

      "phone" => $pno,

      "discount"=> $eircode,

      "panelno" => $f,

      "grant" => $cm2,

      "kw" => $kw,

      "extrapanel" => $extrapanel,

      "expcost" => $extracost,

      "clientgross" => $myclientgross,

      "lessgrant" => $mygrant,

      "upfrontpayment" => $upfrontpayment,

      // //  "discount"=>$clientgros,

 "total" => $cod,

      "totalminesgrant" => $nett,

       "totalminesvalue"=> $seller,

      "finance" => $contry,

      "year" => $year,

    //  "monthlygrs" => $monthlypay,

     // "monthlynet" => $monthlynetpalan,

      "productname" => $selectedCountry,

    //   "propertytype" => $propertytype,

      "typeofproperty" => $typeofproperty,

      "roof" => $roof,

      "installpanel" => $installpanel,

      "nearbychumeys" => $nearbychumeys,

      "homemost" => $homemost

    )





  );

  $lastid = $wpdb->insert_id;

   

  $date = date('d-m-y');

  $pdf = new FPDF();

  $pdf->AddPage();

  $pdf->SetFont('Arial','B',15);

  $pdf->Image('https://mysolar.cleverdigital.ie/wp-content/uploads/2022/09/logo-1-150x150.png',15,5,'PNG');

    $pdf->Ln(40);

  $pdf->Cell(10,1, "$namenew,");

  $pdf->Ln(5);

  $pdf->Cell(10,10, 'Quote No:  :CF-'.$lastid);

   

   $pdf->Multicell(175,10,'Date:' .$date,0,'R');

  $pdf->Cell(10,10, 'Customer Name: '.$namenew);

  $pdf->Ln(10);

  

  $pdf->Ln(10);

  $pdf->Cell(10,10, 'What type of property do you live in?: '.$typeofproperty);

  $pdf->Ln(10);

  $pdf->Cell(10,10, 'What is the pitch of your roof?: '.$roof);

  $pdf->Ln(10);

  $pdf->Cell(10,10, 'What orientation is the roof you want to install panels on?: '.$installpanel);

  $pdf->Ln(10);

  $pdf->Cell(10,10, 'Do you have any shading on your roof from chimneys or nearby trees?: '.$nearbychumeys);

$pdf->Ln(10);

$pdf->Cell(10,10, 'During what part of the day are you home most?: '.$homemost);

$pdf->Ln(10);

  $pdf->Cell(40,10, 'Phone Number: '.$pno);

  $pdf->Ln(10);

  $pdf->Cell(40,10, 'Eircode: '.$eircode);

  $pdf->Ln(10);

  $pdf->Cell(40,10, 'County: '.$contry);

  $pdf->Ln(10);

  $pdf->Cell(40,10, 'Email Address: '.$emailnew);

  $pdf->Ln(15);

  $pdf->Cell(40,10, 'Product Name: '.$selectedCountry);

  $pdf->Ln(10);

  $pdf->Cell(40,10, 'Number of Panels: '.$f);

  $pdf->Ln(10);

  $pdf->Cell(40,10, 'Estimated kWh  Generated: '.$kw);

  $pdf->Ln(20);

  //$pdf->Cell(40,10, 'Total Grant Available: €'.round( $cm2 ));

  $texeone = "Total Grant Available: €". number_format( $cm2 );  

  $pdf->Write(0,iconv('UTF-8', 'windows-1252', $texeone));

  $pdf->Ln(10);

  //$pdf->Cell(40,10, 'Total PV System Cost When Grant Approved: €'.round( $myclientgross ));

  //$textesto = "Total PV System Cost Without Grant: €". number_format( $myclientgross );  

  //$pdf->Write(0,iconv('UTF-8', 'windows-1252', $textesto));

  //$pdf->Ln(10);

  //$pdf->Cell(40,10, 'Total PV System Cost When Grant Approved: €'.round( $mygrant ));

  $textseevthre = "Total PV System Cost When Grant Approved: €". number_format( $mygrant );  

  $pdf->Write(0,iconv('UTF-8', 'windows-1252', $textseevthre));

  $pdf->Ln(15);

  // $pdf->Cell(40,10, 'Discounted Upfront Payment With Grant: €'.round( $nett ));

  $textseevfour = "Discounted Upfront Payment With Grant: €". number_format( $nett );  

  $pdf->Write(0,iconv('UTF-8', 'windows-1252', $textseevfour));



  $pdf->Ln(25);

$pdf->SetFont('Times','BI',13);

$pdf->Cell(10,0, 'Terms & Conditions');

$pdf->Ln(5);

  $pdf->Cell(40,10, '* Savings based on standard electricity cost & south facing property.');

  $pdf->Ln(10);

  $pdf->Cell(40,10, '*  Final price subject to survey *.');

  $pdf->Ln(10);

  $pdf->Cell(40,10, '* Quote Expires In 30 days');

  $pdf->Ln(15);

  $pdf->Cell(10,0, 'Tel: 083 090 8912');

   

  $pdf->Multicell(100,0,'Email: info@mysolar.ie',0,'R');



  $pdf->Multicell(160,0,'Web: mysolar.ie',0,'R');



//  $pdf->Ln(10);

  

//  $pdf->Cell(10,0, 'Terms & Conditions');





// email stuff (change data below)



$to = "joe@cleverdigital.ie,sales@mysolar.ie";

   



$from = "sales@mysolar.ie"; 

$subject = "SOLAR-CALCULATOR Quote";

$message = '<body style="background-color: #f6f6f6; font-family: sans-serif; -webkit-font-smoothing: antialiased; font-size: 14px; line-height: 1.4; margin: 0; padding: 0; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">

    <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="body" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f6f6f6; width: 100%;" width="100%" bgcolor="#f6f6f6">

    <tr>

    <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;" valign="top">&nbsp;</td>

     <td class="container" style="font-family: sans-serif; font-size: 14px; vertical-align: top; display: block; max-width: 580px; padding: 10px; width: 580px; margin: 0 auto;" width="580" valign="top">

        <div class="content" style="box-sizing: border-box; display: block; margin: 0 auto; max-width: 580px; padding: 10px;">

                  <!-- START CENTERED WHITE CONTAINER -->

                 <table role="presentation" class="main" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background: #ffffff; border-radius: 3px; width: 100%;" width="100%">

                    <!-- START MAIN CONTENT AREA -->

                    <tr>

                      <td class="wrapper" style="font-family: sans-serif; font-size: 14px; vertical-align: top; box-sizing: border-box; padding: 20px;" valign="top">

                        <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;" width="100%">

                          <tr>

   <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;" valign="top">

    <img src="https://mysolar.cleverdigital.ie/wp-content/uploads/2022/09/logo-1-150x150.png" height="150" width="150">

                    <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; margin-bottom: 15px;">Hi,</p>

                                       <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; margin-bottom: 15px;">Many thanks for taking the time to contact us.</p>

                                       <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; margin-bottom: 15px;">This estimated quote is valid for 30 days</p>

  <p>Customer Name: ' . $namenew . '</p>

  

  <p>What type of property do you live in?: ' . $typeofproperty . '</p>

 <p>What is the pitch of your roof?: ' . $roof . '</p>

 <p>What orientation is the roof you want to install panels on?: ' . $installpanel . '</p>

 <p>Do you have any shading on your roof from chimneys or nearby trees?: ' . $nearbychumeys . '</p>

  <p>During what part of the day are you home most?: ' . $homemost . '</p>

  <p>Phone Number: ' . $pno . '</p>

  <p>Eircode: ' . $eircode . '</p>

  <p>County : ' . $contry . '</p>

  <p>Email Address: ' . $emailnew . '</p>

  <p>Product Name: ' . $selectedCountry . '</p>

  <p>Number Of Panel: ' . $f . '</p>

  <p>Total Grant : ' . round( $cm2 ) . '</p>

  <p>kw: ' . $kw . '</p>



                                 

                                <p> Total PV System Cost When Grant Approved : ' . round( $mygrant ) . '</p>

                              <p>Discounted Upfront Payment With Grant: ' . round( $nett ) . '</p>

                              

                              <p>* Savings based on standard electricity cost & south facing property. </p>

                                          <p>Final price subject to survey</p>

                             </td>

                          </tr>

                        </table>

                      </td>

                   </tr>

                  <!-- END MAIN CONTENT AREA -->

                 </table>

                <!-- END CENTERED WHITE CONTAINER -->

                <!-- START FOOTER -->

                  <div class="footer" style="clear: both; margin-top: 10px; text-align: center; width: 100%;">

                  <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;" width="100%">

                      <tr>

                        <td class="content-block" style="font-family: sans-serif; vertical-align: top; padding-bottom: 10px; padding-top: 10px; color: #999999; font-size: 12px; text-align: center;" valign="top" align="center">

                          <span class="apple-link" style="color: #999999; font-size: 12px; text-align: center;">MySolar Registered in Ireland No.651647</span>

                        </td>

                      </tr>

                    </table>

                  </div>

                  <!-- END FOOTER -->

               </div>

           </td>

             <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;" valign="top">&nbsp;</td>

            </tr>

          </table>

        </body>';



// a random hash will be necessary to send mixed content

$separator = md5(time());



// carriage return type (we use a PHP end of line constant)

$eol = PHP_EOL;



// attachment name

$filename = "MySolar.pdf";



// encode data (puts attachment in proper format)

$pdfdoc = $pdf->Output("", "S");

$attachment = chunk_split(base64_encode($pdfdoc));



// main header

$headers  = "From: ".$from.$eol;

$headers .= "MIME-Version: 1.0".$eol; 

$headers .= "Content-Type: multipart/mixed; boundary=\"".$separator."\"";

 $headers .= 'Bcc: flogas@mysolar.ie';





// no more headers after this, we start the body! //



$body = "--".$separator.$eol;

$body .= "Content-Transfer-Encoding: 7bit".$eol.$eol;

//$body .= "This is a MIME encoded message.".$eol;



// message

$body .= "--".$separator.$eol;

$body .= "Content-Type: text/html; charset=\"iso-8859-1\"".$eol;

$body .= "Content-Transfer-Encoding: 8bit".$eol.$eol;

$body .= $message.$eol;



// attachment

$body .= "--".$separator.$eol;

$body .= "Content-Type: application/octet-stream; name=\"".$filename."\"".$eol; 

$body .= "Content-Transfer-Encoding: base64".$eol;

$body .= "Content-Disposition: attachment".$eol.$eol;

$body .= $attachment.$eol;

$body .= "--".$separator."--";



// send message

mail($to, $subject, $body, $headers);





$date = date('d-m-y');

$pdf = new FPDF();

$pdf->AddPage();

$pdf->SetFont('Arial','B',15);

$pdf->Image('https://mysolar.cleverdigital.ie/wp-content/uploads/2022/09/logo-1-150x150.png',15,5,'PNG');

  $pdf->Ln(40);

$pdf->Cell(10,1, "$namenew,");

$pdf->Ln(5);

$pdf->Cell(10,10, 'Quote No:  :CF-'.$lastid);

 

 $pdf->Multicell(175,10,'Date:' .$date,0,'R');

$pdf->Cell(10,10, 'Customer Name: '.$namenew);

$pdf->Ln(10);

// $pdf->Cell(10,10, 'Property Type: '.$propertytype);

// $pdf->Ln(10);

$pdf->Cell(10,10, 'What type of property do you live in?: '.$typeofproperty);

$pdf->Ln(10);

$pdf->Cell(10,10, 'What is the pitch of your roof?: '.$roof);

$pdf->Ln(10);

$pdf->Cell(10,10, 'What orientation is the roof you want to install panels on?: '.$installpanel);

$pdf->Ln(10);

$pdf->Cell(10,10, 'Do you have any shading on your roof from chimneys or nearby trees?: '.$nearbychumeys);

$pdf->Ln(10);

$pdf->Cell(10,10, 'During what part of the day are you home most?: '.$homemost);

$pdf->Ln(10);

$pdf->Cell(40,10, 'Phone Number: '.$pno);

$pdf->Ln(10);

$pdf->Cell(40,10, 'Eircode: '.$eircode);

$pdf->Ln(10);

$pdf->Cell(40,10, 'County: '.$contry);

$pdf->Ln(10);

$pdf->Cell(40,10, 'Email Address: '.$emailnew);

$pdf->Ln(15);

$pdf->Cell(40,10, 'Product Name: '.$selectedCountry);

$pdf->Ln(10);

$pdf->Cell(40,10, 'Number of Panels: '.$f);

$pdf->Ln(10);

$pdf->Cell(40,10, 'Estimated kWh  Generated: '.$kw);

$pdf->Ln(20);

//$pdf->Cell(40,10, 'Total Grant Available: €'.round( $cm2 ));

$texsone = "Total Grant Available: €". number_format( $cm2 );  

$pdf->Write(0,iconv('UTF-8', 'windows-1252', $texsone));

$pdf->Ln(10);

//$pdf->Cell(40,10, 'Total PV System Cost When Grant Approved: €'.round( $myclientgross ));

//$textsto = "Total PV System Cost Without Grant: €". number_format( $myclientgross );  

//$pdf->Write(0,iconv('UTF-8', 'windows-1252', $textsto));

//$pdf->Ln(10);

//$pdf->Cell(40,10, 'Total PV System Cost When Grant Approved: €'.round( $mygrant ));

$textsevthre = "Total PV System Cost When Grant Approved: €". number_format( $mygrant );  

$pdf->Write(0,iconv('UTF-8', 'windows-1252', $textsevthre));

$pdf->Ln(15);

// $pdf->Cell(40,10, 'Discounted Upfront Payment With Grant: €'.round( $nett ));

$textsevfour = "Discounted Upfront Payment With Grant: €". number_format( $nett );  

$pdf->Write(0,iconv('UTF-8', 'windows-1252', $textsevfour));



$pdf->Ln(25);

$pdf->SetFont('Times','BI',13);

$pdf->Cell(10,0, 'Terms & Conditions');

$pdf->Ln(5);

$pdf->Cell(40,10, '* Savings based on standard electricity cost & south facing property.');

$pdf->Ln(10);

$pdf->Cell(40,10, '*  Final price subject to survey *.');

$pdf->Ln(10);

$pdf->Cell(40,10, '* Quote Expires In 30 days');

$pdf->Ln(15);

$pdf->Cell(10,0, 'Tel: 083 090 8912');

 

$pdf->Multicell(100,0,'Email: info@mysolar.ie',0,'R');



$pdf->Multicell(160,0,'Web: mysolar.ie',0,'R');

// $pdf->Ln(10);



// $pdf->Cell(10,0, 'Terms & Conditions');





// email stuff (change data below)

$to = $emailnew; 

$from = "sales@mysolar.ie"; 

$subject = "SOLAR-CALCULATOR Quote";

$message = '<body style="background-color: #f6f6f6; font-family: sans-serif; -webkit-font-smoothing: antialiased; font-size: 14px; line-height: 1.4; margin: 0; padding: 0; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">

    <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="body" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f6f6f6; width: 100%;" width="100%" bgcolor="#f6f6f6">

    <tr>

    <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;" valign="top">&nbsp;</td>

     <td class="container" style="font-family: sans-serif; font-size: 14px; vertical-align: top; display: block; max-width: 580px; padding: 10px; width: 580px; margin: 0 auto;" width="580" valign="top">

        <div class="content" style="box-sizing: border-box; display: block; margin: 0 auto; max-width: 580px; padding: 10px;">

                  <!-- START CENTERED WHITE CONTAINER -->

                 <table role="presentation" class="main" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background: #ffffff; border-radius: 3px; width: 100%;" width="100%">

                    <!-- START MAIN CONTENT AREA -->

                    <tr>

                      <td class="wrapper" style="font-family: sans-serif; font-size: 14px; vertical-align: top; box-sizing: border-box; padding: 20px;" valign="top">

                        <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;" width="100%">

                          <tr>

   <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;" valign="top">

    <img src="https://mysolar.cleverdigital.ie/wp-content/uploads/2022/09/logo-1-150x150.png" height="150" width="150">

                   <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; margin-bottom: 15px;">Hi,</p>

                                       <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; margin-bottom: 15px;">Many thanks for taking the time to contact us.</p>

                                       <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; margin-bottom: 15px;">This estimated quote is valid for 30 days</p>

  <p>Customer Name: ' . $namenew . '</p>

  

  <p>What type of property do you live in?: ' . $typeofproperty . '</p>

  <p>What is the pitch of your roof?: ' . $roof . '</p>

  <p>What orientation is the roof you want to install panels on?: ' . $installpanel . '</p>

  <p>Do you have any shading on your roof from chimneys or nearby trees?: ' . $nearbychumeys . '</p>

  <p>During what part of the day are you home most?: ' . $homemost . '</p>



  <p>Phone Number: ' . $pno . '</p>

  <p>Eircode: ' . $eircode . '</p>

  <p>County : ' . $contry . '</p>

  <p>Email Address: ' . $emailnew . '</p>

  <p>Product Name: ' . $selectedCountry . '</p>

  <p>Number Of Panel: ' . $f . '</p>

  <p>Total Grant : ' . round( $cm2 ) . '</p>

  <p>kw: ' . $kw . '</p>



                                  

                                <p> Total PV System Cost When Grant Approved : ' . round( $mygrant ) . '</p>

                              <p>Discounted Upfront Payment With Grant: ' . round( $nett ) . '</p>

                              

                              <p>* Savings based on standard electricity cost & south facing property. </p>

                                          <p>Final price subject to survey</p>

                             </td>

                          </tr>

                        </table>

                      </td>

                   </tr>

                  <!-- END MAIN CONTENT AREA -->

                 </table>

                <!-- END CENTERED WHITE CONTAINER -->

                <!-- START FOOTER -->

                  <div class="footer" style="clear: both; margin-top: 10px; text-align: center; width: 100%;">

                  <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;" width="100%">

                      <tr>

                        <td class="content-block" style="font-family: sans-serif; vertical-align: top; padding-bottom: 10px; padding-top: 10px; color: #999999; font-size: 12px; text-align: center;" valign="top" align="center">

                          <span class="apple-link" style="color: #999999; font-size: 12px; text-align: center;">MySolar Registered in Ireland No.651647</span>

                        </td>

                      </tr>

                    </table>

                  </div>

                  <!-- END FOOTER -->

               </div>

           </td>

             <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;" valign="top">&nbsp;</td>

            </tr>

          </table>

        </body>';



// a random hash will be necessary to send mixed content

$separator = md5(time());



// carriage return type (we use a PHP end of line constant)

$eol = PHP_EOL;



// attachment name

$filename = "MySolar.pdf";



// encode data (puts attachment in proper format)

$pdfdoc = $pdf->Output("", "S");

$attachment = chunk_split(base64_encode($pdfdoc));



// main header

$headers  = "From: ".$from.$eol;

$headers .= "MIME-Version: 1.0".$eol; 

$headers .= "Content-Type: multipart/mixed; boundary=\"".$separator."\"";







// no more headers after this, we start the body! //



$body = "--".$separator.$eol;

$body .= "Content-Transfer-Encoding: 7bit".$eol.$eol;

//$body .= "This is a MIME encoded message.".$eol;



// message

$body .= "--".$separator.$eol;

$body .= "Content-Type: text/html; charset=\"iso-8859-1\"".$eol;

$body .= "Content-Transfer-Encoding: 8bit".$eol.$eol;

$body .= $message.$eol;



// attachment

$body .= "--".$separator.$eol;

$body .= "Content-Type: application/octet-stream; name=\"".$filename."\"".$eol; 

$body .= "Content-Transfer-Encoding: base64".$eol;

$body .= "Content-Disposition: attachment".$eol.$eol;

$body .= $attachment.$eol;

$body .= "--".$separator."--";



// send message

mail($to, $subject, $body, $headers);  





  //////////// Bitrix API Pay Up Front (Energy & Hot Water Diverter) ////////////////



    $result = CRest::call(

    'crm.lead.add',

    ['FIELDS' => 

      [

      //'TITLE' => 'MySolar Website Quotation/Calculator', 

    'TITLE' => $namenew,

      'NAME' => $namenew, 

      'ADDRESS' => $contry, 

      'UF_CRM_1663758814' => $lastid, 

      'UF_CRM_1663758895' => $eircode,

      'UF_CRM_1663758913' => $contry, 

      'UF_CRM_1663758926' => $selectedroduct, 

      'UF_CRM_1663758956' => $cm, 

      'UF_CRM_1663758977' => $kw, 

      'UF_CRM_1663758998' => '€'.$cm2, 

      'UF_CRM_1663759019' => '€'.$clientgros, 

      'UF_CRM_1663759040' => '€'.$mygrant, 

      //'UF_CRM_1663759074' => $year, 

      //'UF_CRM_1663759169' => '€'.number_format( $monthlypay, 2 ), 

      //'UF_CRM_1663759180' => '€'.number_format( $monthlynetpalan, 2 ), 

      'UF_CRM_1663759200' => '€'.number_format($nett),  

      'UF_CRM_1659522970002' => $attachment,  

      'UF_CRM_1674039430' => $typeofproperty,

      'UF_CRM_1674039544' => $roof,

      'UF_CRM_1674039579' => $installpanel,

      'UF_CRM_1674039639' => $nearbychumeys,

      'UF_CRM_1674039674' => $homemost,

      //'SOURCE' => "API Integration Calculator Form", 
	
	  'SOURCE_ID' => 'WEB', 
       'UF_CRM_1672303237' => '124',

      'EMAIL' => ['0' => ['VALUE' => $emailnew]], 

      'PHONE' => ['0' => ['VALUE' => $pno]], 

       ], 



    ],



  );





}  // end payupfrontselect if condition





 }  // end Energy & Hot Water Diverter condition

?>

<script>

//     // window.location.replace("https://mysolar.ie/calculator-thanks/");

// var origin   = window.location.origin; 

  

//   // alert("hi from the script");



//   if(origin == 'https://mysolar.cleverdigital.ie'){

//    window.location.replace("https://mysolar.ie/calculator-thanks/");

//   }

//   else{

    

//    window.location.replace("https://mysolar.ie/thank-you-for-other-site/"); 

//   }

// var locaction = window.parent.location;



if ( window.location !== window.parent.location )

    {

      window.location.replace("https://mysolar.ie/thank-you-for-other-site/"); 

      var from = "From Iframe";

      document.cookie="From="+From+"; SameSite=None; Secure"

      document.cookie="From="+From;

   // alert("This Page Loaded From I iFrame");

        // alert(window.location);



    }

    else {

        window.location.replace("https://mysolar.ie/calculator-thanks/");

      var from = "From Mysolar";

         // alert("This Frame Not Loaded From iFrame");

         document.cookie="From="+From+"; SameSite=None; Secure"

         document.cookie="From="+From;

    }

</script><?php





//         } else





//             {





//                 ?><script>





        //                 alert("Please enter Valid Phone Number");





        //                </script><?php





//             }





//     }





//     else {





//        ?><script>





        //         alert("Please enter Valid Email");





        //        </script><?php





//     }





// }else{





//    ?><script>





        //    alert("Please enter Valid Name");





        //   </script><?php





// }





}





?><script>





    $("#fromofcal").hide();

$("#country").change(function(){



var seli =  $(this).val();



document.getElementById("seli").innerHTML = seli;



// alert(seli);var selValue = $( "#country option:selected" ).text();



document.cookie="selValue="+selValue+"; SameSite=None; Secure";

document.cookie="selValue="+selValue;



});



    $("#showfrom").click(function(){



var selicn = $("#country").val();   if(selicn == '00'){



    alert("Please Select Property Location");



    }



    else{$("#fromofcal").show();    }});





</script><script>





   $(".mod").click(function(){





    window.location.href = "https://mysolar.ie/grant-eligibility-requirements/";



  });





</script><style>



 

</style>

<script type="text/javascript">



  /*   $(".morein").click(function(){



     window.location.replace("https://mysolar.cleverdigital.ie/grant-eligibility-requirements/");



});

setTimeout(function(){

  var selicn = $("#country").val();

  if(selicn == '00'){

alert("Please Select property location");



}

}, 3000); */



</script>

<script>

/* function initMap() {

    var input = document.getElementById('searchMapInput');

  

    var autocomplete = new google.maps.places.Autocomplete(input);

   

    autocomplete.addListener('place_changed', function() {

        var place = autocomplete.getPlace();

        document.getElementById('location-snap').innerHTML = place.formatted_address;

        document.getElementById('lat-span').innerHTML = place.geometry.location.lat();

        document.getElementById('lon-span').innerHTML = place.geometry.location.lng();

    });

} */

</script>



 

<script>

    $(".fromsb").click(function(){ 

        var fomname = $("#name").val();

        var fomphone = $("#pnumber").val();

        var fomemail = $("#email").val();

        var foreircode = $("#address-locator").val();

        if (fomname != "" && fomphone != "" && fomemail != ""  && foreircode != ""  ){

            

            $( document ).ready(function() {

    $(".fromsb").hide();

    $(".loader").show();

});

        }

    });





</script>



<style type="text/css">

  .customnene{

    display: none !important;

  }

  .col-sm-4.txt-right p#clientgross {

    display: none !important;

}

p#cto {

    display: none !important;

}

 .customnene{

    display: none !important;

  }

  .col-sm-4.txt-right p#clientgross {

    display: none !important;

}

.gray-header {

    text-align: left;

}

.l-whitebox.mb-10 {

    background: white;

    border: 1px solid;

    text-align: left;

}

.gray-body label.form-check-label {

    color: black;

}

</style>

<script type="text/javascript">

//   const iframe =  document.getElementById("ifram");

// const currentURL = iframe.contentWindow.location.href;

// const currentURL = document.baseURI; 

// alert(currentURL)



  // var origin   = window.location.origin; 

  // alert(origin);

//   location = window.parent.location;

// alert(window.parent.location);

// alert("ji");

// alert(location);

  function iniFrame() {

  

  if ( window.location !== window.parent.location )

    {

      var From = '<?php echo $fromiframe; ?>';

      // alert (From);

  // alert("This Page Loaded From I iFrame");

      // var From = "Flogas";

      document.cookie="From="+From+"; SameSite=None; Secure"

      document.cookie="From="+From;

    $(".rightimg").css("background-image", "url(https://mysolar.cleverdigital.ie/wp-content/uploads/2023/01/image.jpg)");



        // alert(window.location);



    }

    else {

      // var From = "Mysolar";

      var From = '<?php echo $fromcore; ?>';

      // alert (From);

   // alert("This Frame Not Loaded From iFrame");

         document.cookie="From="+From+"; SameSite=None; Secure"

         document.cookie="From="+From;

           $(".rightimg").css("background-image", "url(https://mysolar.cleverdigital.ie/wp-content/uploads/2023/01/image.jpg)");



    }

}

 

// Calling iniFrame function

iniFrame();





</script>



<style type="text/css">

  @media (min-width: 320px) and (max-width: 767px){



  .loadforothere .col-md-12.col-lg-6.rightimg {

    margin-bottom: 150px;

}

}

@media(min-width: 768px) and (max-width: 991px){

  .loadforothere .col-md-12.col-lg-6.rightimg {

    margin-top: 12px;

    height: 826px;

    margin-bottom: 0;

}

}

 .loadforothere .range-wrap {

    margin-right: 23px;

    margin-top: 24px;

    width: auto !important;

    position: relative;

}

@media (min-width: 1098px) and (max-width: 1200px){

.container {

    max-width: 100%;

}

}

@media (min-width: 992px) and (max-width: 1097px){

  .col-md-12.col-lg-6.leftimg {

    display: contents;

}



.col-md-12.col-lg-6.rightimg {

    height: 826px;

    display: block;

    max-width: 100% !important;

    flex: 0 0 100%;

}

.loadforothere {

    padding: 5px 77px;

}

}



@media (min-width: 901px) and (max-width: 920px){

.r-whitebox {

    background: #fff;

    border-radius: 0px 30px 30px 0px;

    padding: 20px;

    position: inherit !important;

    left: 0px;

    top: 28%;

    bottom: 0%;

    color: #005baa;

    font-family: 'Roboto Slab', serif;

} 

} 

img.loader {

    left: 50%;

    position: absolute;

    top: 80%;

}

</style>

<script> 

        // $(document).ready(function() { 

        //     $("#showfrom").click(function() { 



        //         $(document).scrollTop($(document).height()); 

        //     }); 

        // }); 

        // $(document).ready(function() { 

        //     $("#showfrom").click(function() { 

        //         $("html, body").animate({ 

        //             scrollTop: $( 

        //               'html, body').get(1).scrollHeight 

        //         }, 1500); 

        //     }); 

        // }); 
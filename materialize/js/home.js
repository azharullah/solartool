$(document).ready(function() 
{

  $('.datepicker').pickadate({
        onSet: function( arg ){
            if ( 'select' in arg )
            { //prevent closing on selecting month/year
                this.close();
            }
        }
    });

    $(".results").css("visibility","hidden");
    $(".opthidden").css("visibility","hidden");
    
    $('select').material_select();

    $('.datepicker').pickadate({
    	selectMonths: true, // Creates a dropdown to control month
    	selectYears: 15 // Creates a dropdown of 15 years to control year
      // OnSet: function(){
      //   $(".picker__close").click();
      // }
  	});

  	$("#placelist").change(function(){

  		var placeval = $("#placelist :selected").val();
  		var placetext = $("#placelist :selected").text();

  			if(placeval == 1)
  			{
  				var a = 0.28;
  				var b = 0.48;
  				$("#place_custom").prop("disabled",true);
          $(".opthidden").css("visibility","hidden");
  			}
  			if(placeval == 2)
  			{
  				var a = 0.18;
  				var b = 0.64;
  				$("#place_custom").prop("disabled",true);
          $(".opthidden").css("visibility","hidden");
  			}
  			if(placeval == 3)
  			{
  				var a = 0.28;
  				var b = 0.47;
  				$("#place_custom").prop("disabled",true);
          $(".opthidden").css("visibility","hidden");
  			}
  			if(placeval == 4)
  			{
  				var a = 0.30;
  				var b = 0.44;
  				$("#place_custom").prop("disabled",true);
          $(".opthidden").css("visibility","hidden");
  			}
  			if(placeval == 5)
  			{
  				var a = 0.30;
  				var b = 0.48;
  				$("#place_custom").prop("disabled",true);
          $(".opthidden").css("visibility","hidden");
  			}
  			if(placeval == 6)
  			{
  				var a = 0.33;
  				var b = 0.46;
  				$("#place_custom").prop("disabled",true);
          $(".opthidden").css("visibility","hidden");
  			}
  			if(placeval == 7)
  			{
  				var a = 0.32;
  				var b = 0.55;
  				$("#place_custom").prop("disabled",true);
          $(".opthidden").css("visibility","hidden");
  			}
  			if(placeval == 8)
  			{
  				var a = 0.28;
  				var b = 0.42;
  				$("#place_custom").prop("disabled",true);
          $(".opthidden").css("visibility","hidden");
  			}
  			if(placeval == 9)
  			{
  				var a = 0.27;
  				var b = 0.43;
  				$("#place_custom").prop("disabled",true);
          $(".opthidden").css("visibility","hidden");
  			}
  			if(placeval == 10)
  			{
  				var a = 0.26;
  				var b = 0.39;
  				$("#place_custom").prop("disabled",true);
          $(".opthidden").css("visibility","hidden");
  			}
  			if(placeval == 11)
  			{
  				var a = 0.27;
  				var b = 0.50;
  				$("#place_custom").prop("disabled",true);
          $(".opthidden").css("visibility","hidden");
  			}
  			if(placeval == 12)
  			{
  				var a = 0.25;
  				var b = 0.57;
  				$("#place_custom").prop("disabled",true);
          $(".opthidden").css("visibility","hidden");
  			}
  			if(placeval == 13)
  			{
  				var a = 0.31;
  				var b = 0.43;
  				$("#place_custom").prop("disabled",true);
          $(".opthidden").css("visibility","hidden");
  			}
  			if(placeval == 14)
  			{
  				var a = 0.22;
  				var b = 0.57;
  				$("#place_custom").prop("disabled",true);
          $(".opthidden").css("visibility","hidden");
  			}
  			if(placeval == 15)
  			{
  				var a = 0.35;
  				var b = 0.40;
  				$("#place_custom").prop("disabled",true);
          $(".opthidden").css("visibility","hidden");
  			}
  			if(placeval == 16)
  			{
  				var a = 0.37;
  				var b = 0.39;
  				$("#place_custom").prop("disabled",true);
          $(".opthidden").css("visibility","hidden");
  			}
  			if(placeval == 17)
  			{
  				var a = 0.28;
  				var b = 0.47;
  				$("#place_custom").prop("disabled",true);
          $(".opthidden").css("visibility","hidden");
  			}
  			if(placeval == 18)
  			{
  				$("#place_custom").prop("disabled",false);
          $("#place_custom").css("visibility","visible");
  			}

  		var geocoder =  new google.maps.Geocoder();
  		geocoder.geocode( { 'address': placetext }, function(results, status) 
  		{
  			if (status == google.maps.GeocoderStatus.OK) 
  			{
  				$("#lat").val(Math.abs(results[0].geometry.location.lat()));
  				$("#long").val(Math.abs(results[0].geometry.location.lng()));
  			}
  			else
  			{
  				alert("Cannot fetch latitude and longitude online. Please enter manually" + status);
  			}
  		})

  		$("#place_custom").change(function(){
  			// alert($("#place_custom").val());
  			var newplacetext = $("#place_custom").val();
  			var geocoder =  new google.maps.Geocoder();
	  		geocoder.geocode( { 'address': newplacetext }, function(results, status) 
	  		{
	  			if (status == google.maps.GeocoderStatus.OK) 
	  			{
	  				$("#lat").val(Math.abs(results[0].geometry.location.lat()));
	  				$("#long").val(Math.abs(results[0].geometry.location.lng()));
	  			}
	  			else
	  			{
	  				alert("Cannot fetch latitude and longitude online. Please enter manually" + status);
	  			}
	  		})
  		})

  		$("#a").val(a);
  		$("#b").val(b);
  		// alert(a + " " + b + " " + lat + " " + long);

  	})

  	function daysInFebruary(year) {
	    if(year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
	        // Leap year
	        return 29;
	    } else {
	        // Not a leap year
	        return 28;
	    }
	}

	function dateToDay(date) {
	    var feb = daysInFebruary(date.getFullYear());
	    var aggregateMonths = [0, // January
	                           31, // February
	                           31 + feb, // March
	                           31 + feb + 31, // April
	                           31 + feb + 31 + 30, // May
	                           31 + feb + 31 + 30 + 31, // June
	                           31 + feb + 31 + 30 + 31 + 30, // July
	                           31 + feb + 31 + 30 + 31 + 30 + 31, // August
	                           31 + feb + 31 + 30 + 31 + 30 + 31 + 31, // September
	                           31 + feb + 31 + 30 + 31 + 30 + 31 + 31 + 30, // October
	                           31 + feb + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31, // November
	                           31 + feb + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30, // December
	                         ];
	    return aggregateMonths[date.getMonth()] + date.getDate();
	}

  	$("#day").change(function(){

  		var numdate = new Date($("#day").val());
  		$("#numdays").val((dateToDay(numdate)));

  	})

  	$("#submit").click(function(){

  		var error = false;

  		if( ($("#placelist").val() == 0) && ($("#place_custom").text() == null) )
  		{
  			error = true;
  		}
  		if($("#numdays").val() == 0)
  		{
  			error = true;
  		}
  		if($("#lat").val() == 0)
  		{
  			error = true;
  		}
  		if($("#long").val() == 0)
  		{
  			error = true;
  		}
  		if($("#a").val() == 0)
  		{
  			error = true;
  		}
  		if($("#b").val() == 0)
  		{
  			error = true;
  		}
  		if($("#nbar").val() == 0)
  		{
  			error = true;
  		}

  		if(error == false)
  		{
		  		if($("#placelist").val() != 18)
		  		{
		  			var location = $("#placelist :selected").text();
		  		}
		  		else
		  		{
		  			var location = $("#place_custom").text();
		  		}
		  		// var smalln = 17;
		  		var smalln = $("#numdays").val();
		  		// var latitude = 27.166;
		  		var latitude = $("#lat").val();
		  		var longitude = $("#long").val();
		  		// var avalue = 0.25;
		  		var avalue = $("#a").val();
		  		// var bvalue = 0.57;
		  		var bvalue = $("#b").val();
		  		// var avgsunshine = 7;
		  		var avgsunshine = $("#nbar").val();

		  		var delta = 23.45 * Math.sin( ((parseInt(360) * (parseInt(284)+parseInt(smalln))) / parseInt(365)) * (Math.PI/180) );
		  		delta = delta.toFixed(2);
		  		$("#delta").html(delta + " degrees");

		  		var omega = Math.acos ( -Math.tan(latitude * Math.PI / 180) * Math.tan(delta * Math.PI / 180)) * (180/Math.PI);
		  		omega = omega.toFixed(2);
				$("#omega").html(omega + " degrees");

				var capsnbar = (2/15) * omega;
				$("#capsnbar").html(capsnbar + " hours");

				var cons = 3600 * (24 / Math.PI) * 1.367;
				// cons = cons.toFixed(2);
				var middlecons = 1 + (0.033 * Math.cos( (360 * smalln / 365) * (Math.PI/180) ));
				// middlecons = middlecons.toFixed(2);
				var cosdeltacosphicosomega = Math.cos(latitude*Math.PI/180) * Math.cos(delta*Math.PI/180) * Math.sin(omega*Math.PI/180) ;
				// cosdeltacosphicosomega = cosdeltacosphicosomega.toFixed(2);
				var omegasinphisindelta = omega*(Math.PI/180) * Math.sin((latitude*Math.PI/180)) * Math.sin(delta*Math.PI/180);
				// omegasinphisindelta = omegasinphisindelta.toFixed(2);
				var hnotbar = cons * middlecons * (cosdeltacosphicosomega + omegasinphisindelta);
				// hnotbar = hnotbar.toFixed(2);
				$("#hnotbar").html(hnotbar + " kJ/m<sup>2</sup>-day");

				var hgbar = hnotbar * ( parseFloat(avalue) + ( parseFloat(bvalue) * ( avgsunshine / capsnbar ) ) );
				// hgbar = hgbar.toFixed(2);
				$("#hgbar").html(hgbar + " kJ/m<sup>2</sup>-day");
				// alert(hgbar)

				var hdbar = hgbar * ( 1.354 - ( 1.570 * (hgbar/hnotbar) ) );
				hdbar = hdbar.toFixed(2);
				$("#hdbar").html(hdbar + " kJ/m<sup>2</sup>-day");

				var hb = hgbar - hdbar;
				// hb = hb.toFixed(2);
				$("#hb").html(hb + " kJ/m<sup>2</sup>-day");

        $(".results").css("visibility","visible");

        // Scroll to bottom
        window.scrollTo(0,document.body.scrollHeight);

		}
		else
		{
			alert("Please enter all the fields correctly and try again!");
		}

  	})

});
let action;
let animal = "home";
let coords;

if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      coords = position.coords.latitude + " " + position.coords.longitude;
      console.log(coords)
    })
  }

$("#iwantcall").click(()=>{
    $("#frst").attr("href", "#iamcalling");
    $("#home").attr("href", "#iamcalling");
})

$("#iwanthelp").click(()=>{
    $("#home").attr("href", "#iamhelping");
    $("#frst").attr("href", "#iamhelping");
})

$("#helping-domowe").hide();

$("#frst").click(() => {
  //animal = "forest"
  $("#helping-lesne").show();
  $("#helping-domowe").hide();
  })

$("#home").click(() => {
  //animal = home
  $("#helping-domowe").show();
  $("#helping-lesne").hide();
  })

$("#frst").click(function(){
    var coordArr = coords.split(" ")
        $.post("http://155.158.2.60:80/dzikie", { "coords": { 
                                                    "lat": coordArr[0],
                                                    "lng": coordArr[1]
                                                },
                                      "type": "dzikie"
    }, function(data, status){
        console.log(data);
        $("#place1").text(data[0].name)
        $("#number1").text(data[0].phoneNr)
        $("#place2").text(data[1].name)
        $("#number2").text(data[1].phoneNr)
        $("#place3").text(data[2].name)
        $("#number3").text(data[2].phoneNr)
    }, "json");  
});

$("#home").click(function(){
    var coordArr = coords.split(" ")
        $.post("http://155.158.2.60:80/domowe", { "coords": { 
                                                    "lat": coordArr[0],
                                                    "lng": coordArr[1]
                                                },
                                      "type": "domowe"
    }, function(data, status){
        $("#place1").text(data[0].name)
        $("#number1").text(data[0].phoneNr)
        $("#place2").text(data[0].name)
        $("#number2").text(data[0].phoneNr)
        $("#place3").text(data[0].name)
        $("#number3").text(data[0].phoneNr)
    }, "json");   
});

//modal


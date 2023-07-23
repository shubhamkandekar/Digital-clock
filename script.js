function Displaytime () {
  let dateTime = new Date();
  let Dateinfo = new Date();

  let hrs = dateTime.getHours();
  let min = dateTime.getMinutes();
  let sec = dateTime.getSeconds();
  let period = document.getElementById('period');

  if(hrs >= 12){
    period.innerHTML = "Pm";
  }else{
    period.innerHTML = "Am";
  }
  if(hrs > 12){ 
    hrs = hrs-12
  }

  let dow =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturay"],
  Month = ["Jan","Feb","Mar","Apr","May","June","July","Aug","Sep","Nov","Dec"],
  Day = Dateinfo.getDate();
let currentDate = dow[Dateinfo.getDay()] + "," + Month[Dateinfo.getMonth()] + " " + Day ;
 document.getElementById('date').innerHTML= currentDate;

  document.getElementById('hrs').innerHTML= hrs;
  document.getElementById('min').innerHTML= min;
  document.getElementById('sec').innerHTML= sec;

}
setInterval(Displaytime, 10);


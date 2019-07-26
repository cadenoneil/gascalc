var chevroletmpg=14;
var toyotampg= 30.5;
var hondampg= 31;
var subarumpg= 28.5;
var nissanmpg= 29.5;
var mitsubishimpg= 27.5;

var carMPGMapping = {
  'chevroletTahoe': { mpg: 14.0, tank: 30 },
  'toyotaRav4': { mpg: 30.5, tank: 14.5},
  'hondaCRV': {mpg: 31, tank: 14},
  'subaruOutback': {mpg: 28.5, tank:14},
  'nissanRouge': {mpg: 29.5, tank: 14.5},
  'mitsubishiOutlander': {mpg:27.5, tank:16.6},
};

var mpg = $('#carSelection');

function calc() {
  console.log('2342');
  var gasPrice= document.getElementById('gasArea').value;
  var spentGas= document.getElementById('spentGas').value;
  
  console.log(mpg.val())
console.log(carMPGMapping);  
  var carInfo = carMPGMapping[mpg.val()];
  
  if (spentGas <= 0) {
     alert('you need money for gas, enter another value');
    return;
     }
  if (gasPrice <= 0){
    alert('either youre lying or there is a problem here, enter another value');
    return;
  }
  
  var miles = Math.round (carInfo.mpg * (spentGas / gasPrice))  ;
  
  // alert(gasPrice);
  //  alert(spentGas);
  //  alert(carMpg);
  // alert(miles);
  
  $('#results').val(miles)
  
  
  
  
}

// function calc() {
//   var gasPrice= document.getElementById('gasArea').value
// var spentGas= document.getElementById('spentGas').value
//   var miles =  toyotaMpg * (spentGas / gasPrice)  ;
  
//   alert(gasPrice);
//    alert(spentGas);
//    alert(toyotaMpg);
//   alert(miles);
// }

// function calc() {
//   var gasPrice= document.getElementById('gasArea').value
// var spentGas= document.getElementById('spentGas').value
//   var miles =  hondaMpg * (spentGas / gasPrice)  ;
  
//   alert(gasPrice);
//    alert(spentGas);
//    alert(hondaMpg);
//   alert(miles);
// }

// function calc() {
//   var gasPrice= document.getElementById('gasArea').value
// var spentGas= document.getElementById('spentGas').value
//   var miles =  subaruMpg * (spentGas / gasPrice)  ;
  
//   alert(gasPrice);
//    alert(spentGas);
//    alert(subaruMpg);
//   alert(miles);
// }

// function calc() {
//   var gasPrice= document.getElementById('gasArea').value
// var spentGas= document.getElementById('spentGas').value
//   var miles =  nissanMpg * (spentGas / gasPrice)  ;
  
//   alert(gasPrice);
//    alert(spentGas);
//    alert(nissanMpg);
//   alert(miles);
// }

// function calc() {
//   var gasPrice= document.getElementById('gasArea').value
// var spentGas= document.getElementById('spentGas').value
//   var miles =  mitsubishiMpg * (spentGas / gasPrice)  ;
  
//   alert(gasPrice);
//    alert(spentGas);
//    alert(mitsubishiMpg);
//   alert(miles);
// }
// if (mpg=="chevroletTahoe"){
//   var chevroletMpg=14;
// }

// if (mpg=="toyotaRav4"){
//   var toyotaMpg=30.5;
  
//  }

// if (mpg=="hondaCRV"){
//   var hondaMpg=31;
  
// }

// if (mpg=="subaruOutback"){
//   var subaruMpg=28.5;
  
// }

// if (mpg=="nissanRouge"){
//   var nissanMpg=29.5;
  
// }

// if (mpg=="mitsubishiOutlander"){
//   var mitsubishiMpg=27.5;
  
// }
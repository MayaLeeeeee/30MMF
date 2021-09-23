// <script>
// function btn(sample){
//   alert("This Opens On The Same Tab.");
// }
// </script>
//
//
// <script>
// function button(){
//   alert("You Will Jump To The Lower Part Of The Page.");
//
// }

const btn=document.getElementById('jump');

btn.addEventListener('click',function(){
  alert("You Will Jump To The Lower Part Of The Page.");
});

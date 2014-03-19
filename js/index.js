//sidebar
$('.ui.sidebar').first()
  .sidebar('attach events', '.toggle.item')
;
$('.toggle.item')
  .removeClass('disabled')
;
//modal
$('.ui.modal')
  .modal('attach events', '.showmodal.item', 'show')
;

var prebtn = document.getElementById("canvas");
prebtn.onclick = function(){
    var content = document.getElementById("contentinput").value;
   // var preview = document.getElementById("preview");
    alert(content);
    };
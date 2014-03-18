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


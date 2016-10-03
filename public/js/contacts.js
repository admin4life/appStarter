var vm = {
  rows: ko.observableArray(),
  search: ko.observable().extend({ rateLimit: 700 })
}
vm.delaySearch = ko.computed(function(){
  var term = vm.search();
  if(term){
    filterContacts(term);
  }
  else {filterContacts()}
})


var fillContent = document.getElementById('fillContent')


$('document').ready(allContacts);

function mainRender(res){
  if(res.page){
    $('#fillContent').html(res.page);
    ko.cleanNode(fillContent);
    ko.applyBindings(vm, fillContent);
  }
}
function allContacts(){
  $.get('/contacts', mainRender);
}
function filterContacts(term){
  $.post('/contacts', {term}, function(res){
    vm.rows(res.data);
  });
}

function selectContact(a,b) {
  console.log(a);
}

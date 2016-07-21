var x = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
function myFunction() {
       var input = document.getElementById('input');
       var div = document.getElementById('output');
       div.innerHTML = input.value;

     }

function myEmail() {
    var input = document.getElementById('email');
    if (input != x) {
      input.value = "Not a valid email address";
      }
}

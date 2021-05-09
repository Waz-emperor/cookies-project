

function checkCount() {
   if (sessionStorage.clickCount) {
      sessionStorage.clickCount = Number (sessionStorage.clickCount) + 1;
   }
   else {
       sessionStorage.clickCount = 1;
   }

   document.getElementById('res').innerHTML = "U've clicked it " + sessionStorage.clickCount + " times"

}

function checkCount2() {
    if (localStorage.clickCount) {
        localStorage.clickCount = Number (localStorage.clickCount) + 1;
    }

    else {
        localStorage.clickCount = 1;
    }

    document.getElementById('res2').innerHTML = "U've clicked it " + localStorage.clickCount + " times"
}

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000 ));
 var expires = 'expires=' + d.toGMTString();
 document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
}

function getCookie(cname){
    var name = cname + '=';
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length;  i++) {
       var c = ca[i];
       while(c.charAt(0)==' ') {
           c = c.substring(name.length, c.length);
       }
    }
    return '';
}

  function checkCookie() {
      var user = getCookie('username');
      if(user!='') {
          alert('hi again ' + user);
      }
      else {
          user = prompt('pls enter ur name:','');
          if(user!='' && user !=null) {
              setCookie('username',user,30);
          }
      }
  }
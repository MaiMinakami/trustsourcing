$(document).ready(function(){
          //ayax
            function loadUsers() {
                var xhr = new XMLHttpRequest();

                xhr.open('GET', 'https://api.myjson.com/bins/hlfxz', false);
                xhr.send();

                if (xhr.status !== 200) {
                  alert('Ошибка ' + xhr.status + ': ' + xhr.statusText);
                } else {
                  var data = JSON.parse(xhr.responseText);

                  var item = '';
                    for (var i=0, ln = data.length; i < ln; ++i) {
                      item += '<div class="card"><figure><img class="card__foto" src="' + data[i]["image"] + '"/><ul class="card__likes"><li><img class="card__star" src="'+ data[i]["starblack"] + '"/></li><li><img class="card__star" src="'+ data[i]["starblack"] + '"/></li><li><img class="card__star" src="'+ data[i]["starblack"] + '"/></li><li><img class="card__star" src="'+ data[i]["stargrey"] + '"/></li><li><img class="card__star" src="'+ data[i]["stargrey"] + '"/></li></ul>';
                      item += '<figcaption><h3 class="card__title"> '+ data[i]["title"] + '</h3>';
                      item += '<p class="card__descripton">'+ data[i]["paragraph"] + '</p></figcaption></figure></div>';
                    }
                  document.getElementById('galery-ajax-row').innerHTML = item;
                }
              }


          button.addEventListener("click", loadUsers);     //click for button "load more"
      

          //function for "Enable infinite scrolling" switch  
          var chekboxForScroll = document.querySelector('#checkbox');
          
          chekboxForScroll.onclick = function() {
              if (chekboxForScroll.checked) {
                         
                     $(window).scroll(function () {
                          $('#button').css("display", "none");  //hide "load more" button
                          loadUsers(); 
                      });   

              } else {    
                   $('#button').css("display", "block");//show "load more" button
              }
          }
});

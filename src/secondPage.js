  window.addEventListener('load', function(){
    var us = document.getElementById('us');
    var users = localStorage.getItem("users", JSON.stringify(users));
    var usersArray = JSON.parse(users);

    if(usersArray && usersArray.length >0){

      var lastUser = usersArray[usersArray.length -1];
      var lastUser = lastUser.name;
      us.textContent = lastUser.toUpperCase();
     

    
      document.getElementById('user').textContent = capitalizeFirstLetter(lastUser);

  
      function capitalizeFirstLetter(string) {
          return string.charAt(0).toUpperCase() + string.slice(1);
      }}




    

    
   
      adicionarEventListener('about','section1');
      adicionarEventListener('project','section2');
      adicionarEventListener('series','section3');
      adicionarEventListener('music','section4');
      adicionarEventListener('movies','section5');
      adicionarEventListener('plans','section6');


  
  
  function adicionarEventListener(linkId, sectionId) {

    event.preventDefault();
      var link = document.getElementById(linkId);
      if (link) {
          link.addEventListener('click', function () {
              trocarSection(sectionId);
          });
      }
  }
  //Change to section when refresh page
  document.getElementById('section3').classList.add('show')
  function trocarSection(sectionId) {
    event.preventDefault();
      var sections = document.querySelectorAll('section');
      sections.forEach(function (section) {
          section.classList.remove('show');
      });
  
      var targetSection = document.getElementById(sectionId);
      if (targetSection) {
          targetSection.classList.add('show');
     

      }
  }

  })
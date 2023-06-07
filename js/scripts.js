window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Activate SimpleLightbox plugin for portfolio items
    new SimpleLightbox({
        elements: '#portfolio a.portfolio-box'
    });

});

// Create the chat popup element
var chatPopup = document.createElement('div');
chatPopup.id = 'chatPopup';
chatPopup.style.display = 'none';
chatPopup.style.position = 'fixed';
chatPopup.style.bottom = '20px';
chatPopup.style.right = '20px';
chatPopup.style.width = '300px';
chatPopup.style.height = '400px';
chatPopup.style.backgroundColor = '#fff';
chatPopup.style.border = '1px solid #ccc';
chatPopup.style.borderRadius = '5px';
chatPopup.style.overflow = 'hidden';



var myEl = document.getElementById('send');
$('document').ready(function(){
    myEl.addEventListener('click', function() {

        //Append to my-message
        $("#chat_messages").append('<div class="message my-message">'+ $("#chat_input").val() +'</div>');
        
     
        var settings = {
            "url": "http://localhost:3000/chat",
            "method": "POST",
            "timeout": 0,
            "headers": {
              "Content-Type": "application/json"
            },
            "data": JSON.stringify({
              "model": "gpt-3.5-turbo",
              "messages": [
                {
                  "role": "system",
                  "content": "You are a user"
                },
                {
                  "role": "user",
                  "content": $("#chat_input").val()
                }
              ]
            }),
          };
          
          $.ajax(settings).done(function (response) {
            $("#chat_input").val("");
            var element = document.getElementById("chat_messages");
            element.scrollTop = element.scrollHeight;
              //Append to other message
              console.log(response.choices[0].message.content);
              $("#chat_messages").append('<div class="message other-message">'+ response.choices[0].message.content +'</div>');
            console.log(response);
          });
    
    }, false);
    
})



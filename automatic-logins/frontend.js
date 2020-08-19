// document.addEventListener("DOMContentLoaded", function startin() {
//   console.log("I was loaded");
//   document.getElementById("logout_span").addEventListener("click", autoLogin )
//   function autoLogin() { 
//       let admin ="admin";
//       setTimeout(() => {console.log('From Frontend'),
//       document.getElementById('username').value=admin;
//       document.getElementById('password').value=admin;    
//       document.getElementById('pop_login').click();
//     }, 1000);
//   };  
// })

if (document.readyState === 'complete') {
  console.log("I was loaded");
  document.getElementById("logout_span").addEventListener("click", autoLogin )
  function autoLogin() { 
      let admin ="admin";
      setTimeout(() => {console.log('From Frontend'),
      document.getElementById('username').value=admin;
      document.getElementById('password').value=admin;    
      document.getElementById('pop_login').click();
    }, 1000);
  };  
  // The page is fully loaded
}
console.log("I was injected");


                  




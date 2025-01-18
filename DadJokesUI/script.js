const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', generateJoke)


  
// function generateJoke() {
//    const config = {
//     headers: {
//         Accept: 'application/json',
    
//     },
//    }

//     fetch(' https://icanhazdadjoke.com',config)
//     .then((res) => res.json())
//          .then((data) => {
//            jokeEl.innerHTML = data.joke
//          })
//      }

   async function generateJoke() {

    const config = {
        headers: {
          Accept: 'application/json',
        },
      }
      const url = "https://icanhazdadjoke.com";
      const response = await fetch(url, config);
        
         
       const data = await response.json();

      jokeEl.innerHTML = data.joke
        
      }

      generateJoke();
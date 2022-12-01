document.querySelector('form').addEventListener('submit', loadJokes);


function loadJokes(e) {
    e.preventDefault();
    const xhr = new XMLHttpRequest();
    document.querySelector('input[type = "submit"]').value = 'loading';
    document.querySelector('textarea').innerHTML = '';
    xhr.addEventListener("readystatechange", function () {
       
        if (this.readyState === this.DONE) {
            let content = '';
            document.querySelector('input[type = "submit"]').value = 'GET JOKE'
            const jokes = JSON.parse(xhr.responseText);
            console.log(jokes)
            content += jokes.value;

            document.querySelector('textarea').innerHTML = content;
          
        }


    });
    xhr.open("GET", "https://api.chucknorris.io/jokes/random");

    xhr.send();


}
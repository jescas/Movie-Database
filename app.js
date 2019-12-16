const movieReq = new XMLHttpRequest();
const movies = "http://www.omdbapi.com/?i=tt3896198&apikey=3343a441";
const search = document.querySelector(".search");
const submit = document.querySelector(".submit");

movieReq.open("GET", movies)

movieReq.onload = function() {

  const data = JSON.parse(this.responseText)
  console.log(data)

}

movieReq.send()

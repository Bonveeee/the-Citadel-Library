window.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed");
});
// Header -->
// Nav -->

//End of Header-->

// Landing Section -->

// End Landing Section -->

// Books Collection Section -->
const h1 = document.getElementById("titlebooksection");
h1.textContent = "BOOKS IN STORE";
//document.body.appendChild('h1');   //has a bug

const url = "https://gutendex.com/books/";
function parseResponse(response) {
  return response.json();
}
function getAllBooks() {
  fetch(url)
    .then(parseResponse)
    .then((data) => {
      data.forEach((results) => {
        let img = document.getElementById("coverimage");
        console.log(img);
        img.src = results[0].formats["image/jpeg"];
      });
    });
}
getAllBooks();

//  Books Collection End Section -->

// Footer -->
//  Contact Us-->

// End Footer-->
// <!-- -->

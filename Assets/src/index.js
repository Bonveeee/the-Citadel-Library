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
    .then((results) => { console.log(results.results[0].formats["image/jpeg"])
       
    // results.forEach(function(results) {
    //     console.log(results.results[0].formats["image/jpeg"]);
    // });

      for(let i=0;i<results.results.length; i++){
        let img = document.querySelector("#coverimage");
        img.src = results.results[1].formats["image/jpeg"];

        let img1 = document.querySelector("#coverimage1");
        img1.src = results.results[2].formats["image/jpeg"];

        let img2 = document.querySelector("#coverimage2");
        img2.src = results.results[7].formats["image/jpeg"];

        let img3 = document.querySelector("#coverimage3");
        img3.src = results.results[3].formats["image/jpeg"];

        let img4 = document.querySelector("#coverimage4");
        img4.src = results.results[25].formats["image/jpeg"];

        let img5 = document.querySelector("#coverimage5");
        img5.src = results.results[15].formats["image/jpeg"];

        let img6 = document.querySelector("#coverimage6");
        img6.src = results.results[9].formats["image/jpeg"];

        let img7 = document.querySelector("#coverimage7");
        img7.src = results.results[10].formats["image/jpeg"];

        console.log(results.results[0].formats["image/jpeg"])
      }
    
   });
   }
getAllBooks();

//  Books Collection End Section -->

// Footer -->
//  Contact Us-->

let submit = document.getElementById("send");
submit.addEventListener("click", (e) => {
    e.preventDefault();
  alert("Thank You!");
});

// End Footer-->
// // <!-- -->
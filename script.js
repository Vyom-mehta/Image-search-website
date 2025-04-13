const Api_Key = API_KEY;

let input_field = document.querySelector("#input_field");
let form = document.querySelector("form");

let search_results = document.querySelector(".search_results");
let load_more = document.getElementById("Load-more");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  search_Images();
  page = 1;
});

let input_value = "";
let page = 1;

async function search_Images() {
  input_value = input_field.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${input_value}&client_id=${Api_Key}`;

  const response = await fetch(url);
  const data = await response.json();

  if (page === 1) {
    search_results.innerHTML = "";
  }

  const results = data.results;

  results.map((res) => {
    const img_Wrapper = document.createElement("div");
    img_Wrapper.classList.add("serch_res");
    const image = document.createElement("img");
    image.src = res.urls.small;
    image.alt = res.alt_description;
    const image_Link = document.createElement("a");
    image_Link.href = res.links.html;
    image_Link.target = "_blank";
    image_Link.innerText = res.alt_description;

    img_Wrapper.appendChild(image);
    img_Wrapper.appendChild(image_Link);

    search_results.appendChild(img_Wrapper);
  });

  page++;

  if (page > 1) {
    load_more.style.display = "block";
  }
}

load_more.addEventListener("click", () => {
  search_Images();
});

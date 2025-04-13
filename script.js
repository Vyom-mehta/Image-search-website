const Api_Key = "_-1S5JNCxd36YVCBucNyZKghBiYw-sk2dyT-44JjlLw";

let input_field = document.querySelector("#input_field");
let form = document.querySelector("form");

let search_results = document.querySelector(".search_results");
let load_more = document.getElementById("Load-more");

//value of let can change,but const value not change

form.addEventListener("submit", (event) => {
  event.preventDefault(); //stops refreshing the page
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

  const results = data.results; //will only provide the photos info not extras .

  results.map((res) => {
    const img_Wrapper = document.createElement("div");
    img_Wrapper.classList.add("serch_res");
    const image = document.createElement("img");
    image.src = res.urls.small;
    image.alt = res.alt_description;
    const image_Link = document.createElement("a");
    image_Link.href = res.links.html;
    image_Link.target = "_blank"; //help open in new page;
    image_Link.innerText = res.alt_description;

    //add the image & image_link inside the image_Wrapper(div)
    img_Wrapper.appendChild(image);
    img_Wrapper.appendChild(image_Link);

    //now adding that Div inside the Search_results(div)
    search_results.appendChild(img_Wrapper);
  });

  page++;

  if (page > 1) {
    load_more.style.display = "block";
  }
}

load_more.addEventListener("click", () => {
  console.log("test");
  search_Images();
  console.log("test=>load more completed");
});

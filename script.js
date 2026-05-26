const loginForm =
  document.getElementById("loginForm");

loginForm?.addEventListener("submit", (e) => {

  e.preventDefault();

  window.location.href = "index.html";

});


const $ = (el) => document.querySelector(el);
const $$ = (el) => document.querySelectorAll(el);

const revealElements = () => {
  $$(".reveal").forEach((el) => {
    const visible =
      el.getBoundingClientRect().top <
      window.innerHeight - 100;

    el.classList.toggle("active", visible);
  });
};

window.addEventListener("scroll", revealElements);
revealElements();



const filterButtons = $$(".filter-btn");
const cards = $$(".mood-card, .cafe-item");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {

    filterButtons.forEach((btn) =>
      btn.classList.remove("active")
    );

    button.classList.add("active");

    const filter = button.dataset.filter;

    cards.forEach((card) => {
      const category =
        card.dataset.category || "";

      card.style.display =
        filter === "all" ||
        category.includes(filter)
          ? "block"
          : "none";
    });
  });
});


const cafes = [
  {
    title: "Continent Kohi",
    rating: "4.9",
    location: "Mojokerto",
    description: "Cozy minimalist cafe.",
    accountName: "TemuKopi User",
    review: "Tempatnya nyaman, estetik, dan pelayanannya ramah. Cocok untuk hangout atau kerja santai.",
    image: "asset/continent.kohi_.jpg",
    category: "focus aesthetic",
    tags: "Focus,Aesthetic",
    maps: "#",
    instagram: "#",
    tiktok: "#",
    website: "#"
  },


  {
    title: "Coffee Factory",
    rating: "5.0",
    location: "Mojokerto",
    description: "Industrial coffee shop.",
    accountName: "TemuKopi User",
    review: "Ruangannya luas dan vibe industrinya kuat. Minuman kopi berasa dan pas untuk nongkrong santai.",
    image: "asset/CF.jpg",
    category: "hangout aesthetic",
    tags: "Hangout,Aesthetic",
    maps: "#",
    instagram: "#",
    tiktok: "#",
    website: "#"
  },


  {
    title: "Tiga Lapan Samaran",
    rating: "4.8",
    location: "Mojokerto",
    description: "Outdoor cafe.",
    accountName: "TemuKopi User",
    review: "Suasana outdoor-nya adem, tempatnya estetik buat foto dan ngobrol. Kopinya enak dan nggak bikin seret.",
    image: "asset/tiga-lapan-samaran.jpg",
    category: "hangout aesthetic",
    tags: "Hangout,Aesthetic",
    maps: "#",
    instagram: "#",
    tiktok: "#",
    website: "#"
  },


  {
    title: "Bersaudara Coffee",
    rating: "5.0",
    location: "Mojokerto",
    description: "Cozy coffe shop for WFC.",
    accountName: "TemuKopi User",
    review: "Cocok buat kerja santai: tenang, kursinya nyaman, dan akses suasananya mendukung fokus. Kopinya balance.",
    image: "asset/bersaudara.jpg",
    category: "focus aesthetic",
    tags: "Focus,Aesthetic",
    maps: "#",
    instagram: "#",
    tiktok: "#",
    website: "#"
  },


  {
    title: "Alam Teduh",
    rating: "4.9",
    location: "Mojokerto",
    description: "Nature-themed cafe with lush greenery.",
    accountName: "TemuKopi User",
    review: "Green vibe-nya bikin rileks. Banyak spot foto dan minuman cukup konsisten. Pelayanannya juga cepat.",
    image: "asset/alamteduh.jpg",
    category: "focus hangout",
    tags: "Focus,Hangout",
    maps: "#",
    instagram: "#",
    tiktok: "#",
    website: "#"
  },


  {
    title: "Coffee Factory",
    rating: "5.0",
    location: "Mojokerto",
    description: "Industrial coffee shop.",
    accountName: "TemuKopi User",
    review: "Tempatnya cocok buat hangout. Interiornya menarik dan rasanya kopi terasa.",
    image: "asset/CF.jpg",
    category: "hangout aesthetic",
    tags: "Hangout,Aesthetic",
    maps: "#",
    instagram: "#",
    tiktok: "#",
    website: "#"
  }
];


const cafeList =
  document.querySelector("#cafeList");

cafeList.innerHTML = cafes.map(cafe => `

<div class="col-lg-4 col-md-6 cafe-item reveal"
     data-category="${cafe.category}">

  <div class="cafe-card"

    data-title="${cafe.title}"
    data-rating="${cafe.rating}"
    data-location="${cafe.location}"
    data-description="${cafe.description}"
    data-account="${cafe.accountName}"
    data-review="${cafe.review}"
    data-image="${cafe.image}"
    data-tags="${cafe.tags}"

    data-maps="${cafe.maps}"
    data-instagram="${cafe.instagram}"
    data-tiktok="${cafe.tiktok}"
    data-website="${cafe.website}">

    <div class="cafe-image">

      <img src="${cafe.image}" alt="">

      <div class="rating-badge text-white">
        ⭐ ${cafe.rating}
      </div>

    </div>

    <div class="cafe-content">

      <div class="d-flex gap-2 flex-wrap">

        ${cafe.tags.split(",").map(tag => `
          <span class="mood-tag">
            ${tag}
          </span>
        `).join("")}

      </div>

      <h4 class="fw-bold mt-3">
        ${cafe.title}
      </h4>

      <p class="text-secondary mt-3">
        ${cafe.description}
      </p>

      <div class="d-flex justify-content-between align-items-center mt-4">

        <div class="cafe-location">
          <i class="bi bi-geo-alt"></i>
          ${cafe.location}
        </div>

        <button class="btn btn-success explore-btn open-modal">
          Explore
        </button>

      </div>

    </div>

  </div>

</div>

`).join("");

const modal =
  new bootstrap.Modal(
    document.getElementById("cafeModal")
  );

document.querySelectorAll(".open-modal")
.forEach(button => {

  button.addEventListener("click", () => {

    const card =
      button.closest(".cafe-card");

    const data = card.dataset;

    document.getElementById("modalTitle")
      .textContent = data.title;

    document.getElementById("modalLocation")
      .textContent = data.location;

    document.getElementById("modalRating")
      .textContent = data.rating;

    document.getElementById("modalImage")
      .src = data.image;

    document.getElementById("modalDescription")
      .textContent = data.description;

    document.getElementById("modalAccountName")
      .textContent = data.account || "TemuKopi User";

    document.getElementById("modalReviewText")
      .textContent = data.review || "";


    document.getElementById("modalMaps")
      .href = data.maps;

    document.getElementById("modalInstagram")
      .href = data.instagram;

    document.getElementById("modalTiktok")
      .href = data.tiktok;

    document.getElementById("modalWebsite")
      .href = data.website;

    const tagsContainer =
      document.getElementById("modalTags");

    tagsContainer.innerHTML =
      data.tags
        .split(",")
        .map(tag =>
          `<span class="modal-tag">${tag}</span>`
        )
        .join("");

    modal.show();
  });
}); 
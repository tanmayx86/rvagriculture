const products = [
  {
    id: 1,
    name: "Vishal 435 Brisk Plus Combine Harvester",
    brand: "Vishal Combines",
    model: "435 Brisk Plus",
    category: "Combine Harvester",
    price: "Contact for Price",
    description:
      "A self-propelled multi-crop combine harvester for harvesting, reaping, threshing, and winnowing in one operation.",
    badge: "Featured",
    image: "images/products/vishal-435-brisk-plus.webp",
    gallery: [
      { src: "images/products/vishal-435-brisk-plus.webp", alt: "Vishal 435 Brisk Plus combine harvester" },
      { src: "images/products/vishal-435-brisk-view.png", alt: "Vishal 435 combine harvester front view" },
      { src: "images/products/vishal-435-brisk-plus-side.png", alt: "Vishal 435 Brisk Plus side view" },
      { src: "images/products/vishal-435-combo.webp", alt: "Vishal 435 combine harvester product view" },
    ],
    specs: ["133 HP", "4.34 m cutter bar", "1,810 kg grain tank", "35 km/h"],
    availability: "Available",
    whatsappText: "Hello, I am interested in the Vishal 435 Brisk Plus Combine Harvester. Please send me the price and details.",
  },
];

products.push(
  { id: "jj-rotavator", name: "Rotary Tiller", brand: "Jagatjit Group", category: "Land Preparation", price: "Contact for Price", badge: "Jagatjit", image: "images/products/jagatjit/rotavator.jpg", description: "Land preparation equipment from Jagatjit Group. Contact RV Agriculture for availability and specifications.", specs: ["Land Preparation", "Official product"], manufacturerUrl: "https://www.jagatjitgroup.com/rotavator" },
  { id: "jj-laser-land-leveller", name: "Laser Land Leveller", brand: "Jagatjit Group", category: "Land Preparation", price: "Contact for Price", badge: "Jagatjit", image: "images/products/jagatjit/laser-land-leveller.jpg", description: "Land preparation equipment from Jagatjit Group. Contact RV Agriculture for availability and specifications.", specs: ["Land Preparation", "Official product"], manufacturerUrl: "https://www.jagatjitgroup.com/laser-land-leveller" },
  { id: "jj-inter-row-weeder", name: "Inter Row Weeder", brand: "Jagatjit Group", category: "Land Preparation", price: "Contact for Price", badge: "Jagatjit", image: "images/products/jagatjit/inter-row-weeder.jpg", description: "Land preparation equipment from Jagatjit Group. Contact RV Agriculture for availability and specifications.", specs: ["Land Preparation", "Official product"], manufacturerUrl: "https://www.jagatjitgroup.com/inter-row-weeder" },
  { id: "jj-rmb-plug", name: "Reversible MB Plough", brand: "Jagatjit Group", category: "Land Preparation", price: "Contact for Price", badge: "Jagatjit", image: "images/products/jagatjit/rmb-plug.jpg", description: "Land preparation equipment from Jagatjit Group. Contact RV Agriculture for availability and specifications.", specs: ["Land Preparation", "Official product"], manufacturerUrl: "https://www.jagatjitgroup.com/rmb-plug" },
  { id: "jj-super-seeder", name: "Super Seeder Jagler EX Pro", brand: "Jagatjit Group", category: "Seeding", price: "Contact for Price", badge: "Jagatjit", image: "images/products/jagatjit/super-seeder.jpg", description: "Seeding equipment from Jagatjit Group. Contact RV Agriculture for availability and specifications.", specs: ["Seeding", "Official product"], manufacturerUrl: "https://www.jagatjitgroup.com/super-seeder" },
  { id: "jj-super-seeder-multicrop", name: "Super Seeder Multicrop", brand: "Jagatjit Group", category: "Seeding", price: "Contact for Price", badge: "Jagatjit", image: "images/products/jagatjit/super-seeder-multicrop.jpg", description: "Seeding equipment from Jagatjit Group. Contact RV Agriculture for availability and specifications.", specs: ["Seeding", "Official product"], manufacturerUrl: "https://www.jagatjitgroup.com/super-seeder-multicrop" },
  { id: "jj-zero-till-drill", name: "Zero Till Drill", brand: "Jagatjit Group", category: "Seeding", price: "Contact for Price", badge: "Jagatjit", image: "images/products/jagatjit/zero-till-drill.jpg", description: "Seeding equipment from Jagatjit Group. Contact RV Agriculture for availability and specifications.", specs: ["Seeding", "Official product"], manufacturerUrl: "https://www.jagatjitgroup.com/zero-till-drill" },
  { id: "jj-dsr", name: "DSR", brand: "Jagatjit Group", category: "Seeding", price: "Contact for Price", badge: "Jagatjit", image: "images/products/jagatjit/dsr.jpg", description: "Seeding equipment from Jagatjit Group. Contact RV Agriculture for availability and specifications.", specs: ["Seeding", "Official product"], manufacturerUrl: "https://www.jagatjitgroup.com/dsr" },
  { id: "jj-surface-seeder", name: "Surface Seeder", brand: "Jagatjit Group", category: "Seeding", price: "Contact for Price", badge: "Jagatjit", image: "images/products/jagatjit/surface-seeder.jpg", description: "Seeding equipment from Jagatjit Group. Contact RV Agriculture for availability and specifications.", specs: ["Seeding", "Official product"], manufacturerUrl: "https://www.jagatjitgroup.com/surface-seeder" },
  { id: "jj-reaper-binder", name: "Reaper Binder", brand: "Jagatjit Group", category: "Harvesting", price: "Contact for Price", badge: "Jagatjit", image: "images/products/jagatjit/reaper-binder.jpg", description: "Harvesting equipment from Jagatjit Group. Contact RV Agriculture for availability and specifications.", specs: ["Harvesting", "Official product"], manufacturerUrl: "https://www.jagatjitgroup.com/reaper-binder" },
  { id: "jj-multicorp-thresher", name: "Multi Crop Thresher", brand: "Jagatjit Group", category: "Threshing", price: "Contact for Price", badge: "Jagatjit", image: "images/products/jagatjit/multicorp-thresher.jpg", description: "Threshing equipment from Jagatjit Group. Contact RV Agriculture for availability and specifications.", specs: ["Threshing", "Official product"], manufacturerUrl: "https://www.jagatjitgroup.com/multicorp-thresher" },
  { id: "jj-maize-thresher", name: "Maize Thresher", brand: "Jagatjit Group", category: "Threshing", price: "Contact for Price", badge: "Jagatjit", image: "images/products/jagatjit/maize-thresher.jpg", description: "Threshing equipment from Jagatjit Group. Contact RV Agriculture for availability and specifications.", specs: ["Threshing", "Official product"], manufacturerUrl: "https://www.jagatjitgroup.com/maize-thresher" },
  { id: "jj-mobile-shredder", name: "Mobile Shredder", brand: "Jagatjit Group", category: "Crop Residue Management", price: "Contact for Price", badge: "Jagatjit", image: "images/products/jagatjit/mobile-shredder.jpg", description: "Crop residue management equipment from Jagatjit Group. Contact RV Agriculture for availability and specifications.", specs: ["Crop Residue Management", "Official product"], manufacturerUrl: "https://www.jagatjitgroup.com/mobile-shredder" },
  { id: "jj-square-baler", name: "Square Baler", brand: "Jagatjit Group", category: "Crop Residue Management", price: "Contact for Price", badge: "Jagatjit", image: "images/products/jagatjit/square-baler.png", description: "Crop residue management equipment from Jagatjit Group. Contact RV Agriculture for availability and specifications.", specs: ["Crop Residue Management", "Official product"], manufacturerUrl: "https://www.jagatjitgroup.com/square-baler" },
  { id: "jj-silage-baler-main", name: "Silage Baler", brand: "Jagatjit Group", category: "Crop Residue Management", price: "Contact for Price", badge: "Jagatjit", image: "images/products/jagatjit/silage-baler-main.jpg", description: "Crop residue management equipment from Jagatjit Group. Contact RV Agriculture for availability and specifications.", specs: ["Crop Residue Management", "Official product"], manufacturerUrl: "https://www.jagatjitgroup.com/silage-baler-main" },
  { id: "jj-straw-reaper", name: "Straw Reaper", brand: "Jagatjit Group", category: "Crop Residue Management", price: "Contact for Price", badge: "Jagatjit", image: "images/products/jagatjit/straw-reaper.png", description: "Crop residue management equipment from Jagatjit Group. Contact RV Agriculture for availability and specifications.", specs: ["Crop Residue Management", "Official product"], manufacturerUrl: "https://www.jagatjitgroup.com/straw-reaper" },
  { id: "jj-mulcher", name: "Mulcher", brand: "Jagatjit Group", category: "Crop Residue Management", price: "Contact for Price", badge: "Jagatjit", image: "images/products/jagatjit/mulcher.jpg", description: "Crop residue management equipment from Jagatjit Group. Contact RV Agriculture for availability and specifications.", specs: ["Crop Residue Management", "Official product"], manufacturerUrl: "https://www.jagatjitgroup.com/mulcher" },
  { id: "jj-briquette-machine", name: "Briquette Machine", brand: "Jagatjit Group", category: "Biomass Product Management", price: "Contact for Price", badge: "Jagatjit", image: "images/products/jagatjit/briquette-machine.jpg", description: "Biomass product management equipment from Jagatjit Group. Contact RV Agriculture for availability and specifications.", specs: ["Biomass Product Management", "Official product"], manufacturerUrl: "https://www.jagatjitgroup.com/briquette-machine" },
  { id: "jj-hammer-mill", name: "Hammer Mill", brand: "Jagatjit Group", category: "Biomass Product Management", price: "Contact for Price", badge: "Jagatjit", image: "images/products/jagatjit/hammer-mill.jpg", description: "Biomass product management equipment from Jagatjit Group. Contact RV Agriculture for availability and specifications.", specs: ["Biomass Product Management", "Official product"], manufacturerUrl: "https://www.jagatjitgroup.com/hammer-mill" },
  { id: "jj-flash-dryer-single", name: "Single Pass Flash Dryer", brand: "Jagatjit Group", category: "Biomass Product Management", price: "Contact for Price", badge: "Jagatjit", image: "images/products/jagatjit/flash-dryer-single.jpg", description: "Biomass product management equipment from Jagatjit Group. Contact RV Agriculture for availability and specifications.", specs: ["Biomass Product Management", "Official product"], manufacturerUrl: "https://www.jagatjitgroup.com/flash-dryer-single" },
  { id: "jj-flash-dryer", name: "Double Pass Flash Dryer", brand: "Jagatjit Group", category: "Biomass Product Management", price: "Contact for Price", badge: "Jagatjit", image: "images/products/jagatjit/flash-dryer.jpg", description: "Biomass product management equipment from Jagatjit Group. Contact RV Agriculture for availability and specifications.", specs: ["Biomass Product Management", "Official product"], manufacturerUrl: "https://www.jagatjitgroup.com/flash-dryer" },
  { id: "jj-sawdust-making-machine", name: "Sawdust Making Machine", brand: "Jagatjit Group", category: "Biomass Product Management", price: "Contact for Price", badge: "Jagatjit", image: "images/products/jagatjit/sawdust-making-machine.jpg", description: "Biomass product management equipment from Jagatjit Group. Contact RV Agriculture for availability and specifications.", specs: ["Biomass Product Management", "Official product"], manufacturerUrl: "https://www.jagatjitgroup.com/sawdust-making-machine" },
  { id: "jj-dual-shaft-shredder", name: "Dual Shaft Shredder", brand: "Jagatjit Group", category: "Biomass Product Management", price: "Contact for Price", badge: "Jagatjit", image: "images/products/jagatjit/dual-shaft-shredder.jpg", description: "Biomass product management equipment from Jagatjit Group. Contact RV Agriculture for availability and specifications.", specs: ["Biomass Product Management", "Official product"], manufacturerUrl: "https://www.jagatjitgroup.com/dual-shaft-shredder" },
  { id: "jj-stone-separator", name: "Pneumatic Stone Separator", brand: "Jagatjit Group", category: "Biomass Product Management", price: "Contact for Price", badge: "Jagatjit", image: "images/products/jagatjit/stone-separator.jpg", description: "Biomass product management equipment from Jagatjit Group. Contact RV Agriculture for availability and specifications.", specs: ["Biomass Product Management", "Official product"], manufacturerUrl: "https://www.jagatjitgroup.com/stone-separator" },
  { id: "jj-vertical-ring-die-pellet", name: "Vertical Ring Die Pellet Machine", brand: "Jagatjit Group", category: "Biomass Product Management", price: "Contact for Price", badge: "Jagatjit", image: "images/products/jagatjit/vertical-ring-die-pellet.jpg", description: "Biomass product management equipment from Jagatjit Group. Contact RV Agriculture for availability and specifications.", specs: ["Biomass Product Management", "Official product"], manufacturerUrl: "https://www.jagatjitgroup.com/vertical-ring-die-pellet" },
  { id: "jj-dung-briquette-machine", name: "Dung Briquette Machine", brand: "Jagatjit Group", category: "Biomass Product Management", price: "Contact for Price", badge: "Jagatjit", image: "images/products/jagatjit/dung-briquette-machine.jpg", description: "Biomass product management equipment from Jagatjit Group. Contact RV Agriculture for availability and specifications.", specs: ["Biomass Product Management", "Official product"], manufacturerUrl: "https://www.jagatjitgroup.com/dung-briquette-machine" }
);

products.push({
  id: "apl-laser-land-leveller",
  name: "Laser Land Leveller - Bahubali",
  brand: "APL Agrotech",
  category: "Land Preparation",
  price: "Contact for Price",
  badge: "APL Agrotech",
  image: "images/products/apl/laser-land-leveller-bahubali.jpg",
  description: "Precision land levelling equipment designed for accurate slope and height adjustment, more even moisture distribution, and efficient land preparation.",
  specs: ["Precision levelling", "Up to 30% water savings", "Up to 20% fertilizer savings"],
  manufacturerUrl: "https://aplagrotech.com/laser-land-leveller",
});

const productGrid = document.getElementById("product-grid");
const topSellingGrid = document.getElementById("top-selling-grid");
const topSellingIds = [
  1,
  "jj-super-seeder",
  "apl-laser-land-leveller",
  "jj-straw-reaper",
  "jj-laser-land-leveller",
];
let isHindi = false;

const hindiCategories = {
  "Combine Harvester": "कंबाइन हार्वेस्टर",
  "Land Preparation": "भूमि तैयारी",
  Seeding: "बुवाई",
  Harvesting: "कटाई",
  Threshing: "मड़ाई",
  "Crop Residue Management": "फसल अवशेष प्रबंधन",
  "Biomass Product Management": "बायोमास उत्पाद प्रबंधन",
};

function renderProducts() {
  if (!productGrid) return;

  productGrid.innerHTML = products
    .map(
      (product) => {
        const category = isHindi ? hindiCategories[product.category] || product.category : product.category;
        const description = isHindi
          ? product.id === 1
            ? "एक स्वचालित बहु-फसल कंबाइन हार्वेस्टर, जो कटाई, रीपिंग, मड़ाई और सफाई एक ही प्रक्रिया में करता है।"
            : `${category} के लिए गुणवत्तापूर्ण मशीनरी। उपलब्धता और पूरी जानकारी के लिए RV Agriculture से संपर्क करें।`
          : product.description;
        const price = isHindi ? "कीमत के लिए संपर्क करें" : product.price;
        const viewPhotos = isHindi ? "फोटो देखें" : "View photos";
        const enquiry = isHindi ? "व्हाट्सऐप पूछताछ" : "WhatsApp Enquiry";
        const manufacturerDetails = isHindi ? "निर्माता की जानकारी" : "Manufacturer Details";

        return `
        <article class="product-card reveal" aria-label="${product.name}">
          <button class="product-image gallery-trigger" type="button" data-product-id="${product.id}" aria-label="View photos of ${product.name}">
            <span class="product-badge">${product.badge}</span>
            <img src="${product.image}" alt="${product.name} product image" loading="lazy" />
            <span class="gallery-hint">${viewPhotos}</span>
          </button>
          <div class="product-body">
            <div class="product-meta">
              <h3 class="product-title">${product.name}</h3>
              <span class="product-price">${price}</span>
            </div>
            <span class="product-brand">${product.brand}</span>
            <span class="product-category">${category}</span>
            <p>${description}</p>
            <div class="product-specs">
              ${product.specs.map((spec) => `<span>${spec}</span>`).join("")}
            </div>
            <div class="product-actions">
              <a class="btn btn-primary" href="https://wa.me/919412424715?text=${encodeURIComponent(product.whatsappText || `Hello, I am interested in the ${product.name}. Please send me the price and details.`)}" target="_blank" rel="noopener">${enquiry}</a>
              ${product.manufacturerUrl ? `<a class="btn btn-secondary" href="${product.manufacturerUrl}" target="_blank" rel="noopener">${manufacturerDetails}</a>` : ""}
            </div>
          </div>
        </article>
      `;
      }
    )
    .join("");

  revealOnScroll();
}

function renderTopSelling() {
  if (!topSellingGrid) return;

  topSellingGrid.innerHTML = topSellingIds
    .map((id, index) => {
      const product = products.find((item) => item.id === id);
      if (!product) return "";
      return `
        <article class="top-selling-card reveal">
          <span class="top-selling-rank">${index + 1}</span>
          <img src="${product.image}" alt="${product.name}" loading="lazy" />
          <div class="top-selling-content">
            <span class="product-brand">${product.brand}</span>
            <h3>${product.name}</h3>
            <p>${product.category}</p>
            <a class="btn btn-secondary" href="#products">View in catalog</a>
          </div>
        </article>
      `;
    })
    .join("");

  revealOnScroll();
}

function revealOnScroll() {
  const elements = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  elements.forEach((element) => observer.observe(element));
}

function setupFaq() {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const button = item.querySelector(".faq-question");
    button.addEventListener("click", () => {
      faqItems.forEach((faq) => {
        if (faq !== item) {
          faq.classList.remove("active");
        }
      });
      item.classList.toggle("active");
    });
  });
}

function setupMobileNav() {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".main-nav");

  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

function setupContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const name = formData.get("name");
    const phone = formData.get("phone");
    const message = formData.get("message");
    const whatsappMessage = encodeURIComponent(
      `Hello RV Agriculture,\nName: ${name}\nPhone: ${phone}\nMessage: ${message}`
    );

    window.open(`https://wa.me/919412424715?text=${whatsappMessage}`, "_blank", "noopener");
  });
}

function setupLanguageToggle() {
  const toggle = document.getElementById("languageToggle");
  const productsSection = document.getElementById("products");
  if (!toggle || !productsSection) return;

  toggle.addEventListener("click", () => {
    isHindi = !isHindi;
    document.documentElement.lang = isHindi ? "hi" : "en";
    toggle.setAttribute("aria-pressed", String(isHindi));
    toggle.textContent = isHindi ? "View in English" : "हिंदी में देखें";
    productsSection.querySelector(".eyebrow").textContent = isHindi ? "उपकरण कैटलॉग" : "Equipment catalog";
    productsSection.querySelector("h2").textContent = isHindi ? "आधुनिक खेती के लिए पेशेवर मशीनरी।" : "Professional machinery for modern farms.";
    renderProducts();
  });
}

function setupProductGallery() {
  const modal = document.getElementById("productGallery");
  const mainImage = document.getElementById("galleryMainImage");
  const thumbnails = document.getElementById("galleryThumbnails");
  if (!modal || !mainImage || !thumbnails) return;

  let activeGallery = [];

  const showImage = (index) => {
    const image = activeGallery[index];
    if (!image) return;
    mainImage.src = image.src;
    mainImage.alt = image.alt;
    thumbnails.querySelectorAll("button").forEach((button, buttonIndex) => {
      button.classList.toggle("active", buttonIndex === index);
      button.setAttribute("aria-current", buttonIndex === index ? "true" : "false");
    });
  };

  productGrid.addEventListener("click", (event) => {
    const trigger = event.target.closest(".gallery-trigger");
    if (!trigger) return;
    const product = products.find((item) => String(item.id) === trigger.dataset.productId);
    if (!product) return;

    activeGallery = product.gallery || [{ src: product.image, alt: `${product.name} product image` }];
    thumbnails.innerHTML = activeGallery
      .map(
        (image, index) => `
          <button type="button" aria-label="Show photo ${index + 1}" aria-current="false">
            <img src="${image.src}" alt="" />
          </button>
        `
      )
      .join("");
    thumbnails.querySelectorAll("button").forEach((button, index) => {
      button.addEventListener("click", () => showImage(index));
    });
    showImage(0);
    modal.hidden = false;
    document.body.classList.add("modal-open");
    modal.querySelector(".gallery-close").focus();
  });

  modal.addEventListener("click", (event) => {
    if (event.target.matches("[data-gallery-close]")) {
      modal.hidden = true;
      document.body.classList.remove("modal-open");
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !modal.hidden) {
      modal.hidden = true;
      document.body.classList.remove("modal-open");
    }
  });
}

function updateYear() {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
}

renderProducts();
renderTopSelling();
setupFaq();
setupMobileNav();
setupContactForm();
setupProductGallery();
setupLanguageToggle();
updateYear();

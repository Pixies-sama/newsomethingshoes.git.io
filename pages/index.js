  
      // - For online images: "https://yourwebsite.com/shoe.webp"
      // - Free placeholder: "https://placehold.co/400x400/e8dccc/8b5a3c?text=Your+Shoe"

      const footwearCollection = [
        {
          id: 1,
          name: "Black cross palm slippers",
          gender: "Men",
          price: 15000,
          description:
            "Breathable mesh upper with responsive cushioning. Perfect for daily runs and street style.",
          specs: [
            "Weight: 210g",
            "Drop: 8mm",
            "Recycled knit upper",
            "Arch support insole",
          ],
          imageUrl: "images/shoe2.webp",
        },
        {
          id: 2,
          name: "Black Braided classic",
          gender: "Women",
          price: 8000,
          description:
            "Minimalist leather loafers with a modern twist. Hand-stitched detailing, sustainable leather.",
          specs: [
            "Soft calf leather",
            "Cork footbed",
            "Stacked heel",
            "Made in Nigeria",
          ],
          imageUrl: "images/shoe3.webp",
        },
        {
          id: 3,
          name: "Urban Breeze",
          gender: "Women",
          price: 8000,
          description:
            "Chunky platform bootie with zipper detail — bold and edgy for all-day wear.",
          specs: [
            "Platform height: 4cm",
            "Lug sole",
            "Pull tab",
            "Breathable lining",
          ],
          imageUrl: "images/shoe4.webp",
        },
        {
          id: 4,
          name: "Black Design-style strap",
          gender: "Men",
          price: 12000,
          description:
            "High-top silhouette with premium canvas and reinforced toe cap. Urban durability.",
          specs: [
            "Cotton canvas",
            "Rubber cupsole",
            "Padded collar",
            "Ventilation grommets",
          ],
          imageUrl: "images/shoe7.webp",
        },
        {
          id: 5,
          name: "Eclipse Slip-On",
          gender: "Unisex",
          price: 99,
          description:
            "Effortless slip-on sneakers for everyday movement. Elastic gore panels, eco-foam insole.",
          specs: [
            "Vegan friendly",
            "Machine washable",
            "Anti-odor lining",
            "Flat lace system",
          ],
          imageUrl: "images/shoe6.webp",
        },
        {
          id: 6,
          name: "Mirage Sandal Clog",
          gender: "Women",
          price: 79,
          description:
            "Retro-inspired comfort clog with adjustable strap. Lightweight EVA + cork blend.",
          specs: [
            "Water resistant",
            "Contoured footbed",
            "2 adjustable straps",
            "Outdoor ready",
          ],
          imageUrl:
            "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=400&fit=crop",
        },
        {
          id: 7,
          name: "Drift Runner Pro",
          gender: "Men",
          price: 139,
          description:
            "Performance runner with dynamic lace cage and breathable mesh. Ideal for active lifestyles.",
          specs: [
            "Energy return foam",
            "Durable rubber outsole",
            "Reflective accents",
            "Breathable mesh",
          ],
          imageUrl:
            "https://i.pinimg.com/736x/ab/f0/ec/abf0ec99513b2e96681727a46d2b3c2e.jpg",
        },
        {
          id: 8,
          name: "Velvet Puff Slide",
          gender: "Women",
          price: 69,
          description:
            "Plush velvet slide with memory foam padding — lounge in luxury.",
          specs: [
            "Memory foam footbed",
            "Velvet upper",
            "Indoor/outdoor sole",
            "Slip-resistant",
          ],
          imageUrl: "images/shoe1.webp",
        },
        {
          id: 9,
          name: "Velvet Puff Slide",
          gender: "Women",
          price: 69,
          description:
            "Plush velvet slide with memory foam padding — lounge in luxury.",
          specs: [
            "Memory foam footbed",
            "Velvet upper",
            "Indoor/outdoor sole",
            "Slip-resistant",
          ],
          imageUrl:
            "https://i.pinimg.com/736x/36/e2/e8/36e2e8beba8642a867963d980cef1d7f.jpg",
        },
        {
          id: 10,
          name: "Velvet Puff Slide",
          gender: "Men",
          price: 69,
          description:
            "Plush velvet slide with memory foam padding — lounge in luxury.",
          specs: [
            "Memory foam footbed",
            "Velvet upper",
            "Indoor/outdoor sole",
            "Slip-resistant",
          ],
          imageUrl:
            "https://i.pinimg.com/736x/22/cd/10/22cd108cca646a59235f3d48c4ab620a.jpg",
        },
        {
          id: 11,
          name: "Velvet Puff Slide",
          gender: "Men",
          price: 69,
          description:
            "Plush velvet slide with memory foam padding — lounge in luxury.",
          specs: [
            "Memory foam footbed",
            "Velvet upper",
            "Indoor/outdoor sole",
            "Slip-resistant",
          ],
          imageUrl:
            "https://i.pinimg.com/736x/47/d9/61/47d961f4f255d64ccbdd596ad9e66cfe.jpg",
        },
        {
          id: 12,
          name: "Velvet Puff Slide",
          gender: "Women",
          price: 69,
          description:
            "Plush velvet slide with memory foam padding — lounge in luxury.",
          specs: [
            "Memory foam footbed",
            "Velvet upper",
            "Indoor/outdoor sole",
            "Slip-resistant",
          ],
          imageUrl: "images/shoe1.webp",
        },
        {
          id: 13,
          name: "Velvet Puff Slide",
          gender: "Women",
          price: 69,
          description:
            "Plush velvet slide with memory foam padding — lounge in luxury.",
          specs: [
            "Memory foam footbed",
            "Velvet upper",
            "Indoor/outdoor sole",
            "Slip-resistant",
          ],
          imageUrl: "images/shoe1.webp",
        },
        {
          id: 14,
          name: "Velvet Puff Slide",
          gender: "Women",
          price: 69,
          description:
            "Plush velvet slide with memory foam padding — lounge in luxury.",
          specs: [
            "Memory foam footbed",
            "Velvet upper",
            "Indoor/outdoor sole",
            "Slip-resistant",
          ],
          imageUrl: "images/shoe1.webp",
        },
        {
          id: 15,
          name: "Velvet Puff Slide",
          gender: "Women",
          price: 69,
          description:
            "Plush velvet slide with memory foam padding — lounge in luxury.",
          specs: [
            "Memory foam footbed",
            "Velvet upper",
            "Indoor/outdoor sole",
            "Slip-resistant",
          ],
          imageUrl: "images/shoe1.webp",
        },
        {
          id: 16,
          name: "Velvet Puff Slide",
          gender: "Women",
          price: 69,
          description:
            "Plush velvet slide with memory foam padding — lounge in luxury.",
          specs: [
            "Memory foam footbed",
            "Velvet upper",
            "Indoor/outdoor sole",
            "Slip-resistant",
          ],
          imageUrl: "images/shoe1.webp",
        },
        {
          id: 17,
          name: "Velvet Puff Slide",
          gender: "Women",
          price: 69,
          description:
            "Plush velvet slide with memory foam padding — lounge in luxury.",
          specs: [
            "Memory foam footbed",
            "Velvet upper",
            "Indoor/outdoor sole",
            "Slip-resistant",
          ],
          imageUrl: "images/shoe1.webp",
        },
        {
          id: 18,
          name: "Velvet Puff Slide",
          gender: "Women",
          price: 69,
          description:
            "Plush velvet slide with memory foam padding — lounge in luxury.",
          specs: [
            "Memory foam footbed",
            "Velvet upper",
            "Indoor/outdoor sole",
            "Slip-resistant",
          ],
          imageUrl: "images/shoe1.webp",
        },
      ];

      // DOM elements
      const productsContainer = document.getElementById(
        "products-grid-container",
      );
      const modalOverlay = document.getElementById("product-modal");
      const closeModalBtn = document.getElementById("close-modal-btn");
      const modalName = document.getElementById("modal-product-name");
      const modalPrice = document.getElementById("modal-price");
      const modalGender = document.getElementById("modal-gender");
      const modalDescription = document.getElementById("modal-description");
      const modalSpecsList = document.getElementById("modal-specs");
      const modalProductImage = document.getElementById("modal-product-image");

      let currentFilter = "all";

      // Helper function to handle image errors (shows fallback)
      function handleImageError(imgElement) {
        imgElement.onerror = null;
        imgElement.src =
          "https://placehold.co/400x400/e8dccc/8b5a3c?text=Image+Not+Found";
      }

      // Render products dynamically based on filter
      function renderProducts() {
        if (!productsContainer) return;
        let filteredProducts = footwearCollection;
        if (currentFilter !== "all") {
          filteredProducts = footwearCollection.filter(
            (p) => p.gender === currentFilter,
          );
        }

        if (filteredProducts.length === 0) {
          productsContainer.innerHTML = `<div style="grid-column:1/-1; text-align:center; padding: 3rem;">No footies found for this category — explore all styles!</div>`;
          return;
        }

        productsContainer.innerHTML = filteredProducts
          .map(
            (product) => `
      <div class="product-card" data-product-id="${product.id}">
        <div class="product-img">
          <img src="${product.imageUrl}" alt="${product.name}" onerror="this.onerror=null; this.src='https://placehold.co/400x400/e8dccc/8b5a3c?text=No+Image';">
        </div>
        <div class="product-info">
          <div class="product-category">${product.gender}</div>
          <h3>${product.name}</h3>
          <div class="price-tag">₦${product.price}</div>
          <div class="view-detail">
            <i class="fas fa-eye"></i> click for details
          </div>
        </div>
      </div>
    `,
          )
          .join("");

        // attach click event to each product card
        document.querySelectorAll(".product-card").forEach((card) => {
          card.addEventListener("click", (e) => {
            const id = parseInt(card.getAttribute("data-product-id"));
            const product = footwearCollection.find((p) => p.id === id);
            if (product) {
              openProductModal(product);
            }
          });
        });
      }

      // MODAL POPUP with product full details
      function openProductModal(product) {
        // set all text content
        modalName.innerText = product.name;
        modalPrice.innerText = `₦${product.price}`;
        modalGender.innerText = product.gender;
        modalDescription.innerText = product.description;

        // set image with error handling
        modalProductImage.src = product.imageUrl;
        modalProductImage.alt = product.name;
        modalProductImage.onerror = function () {
          this.onerror = null;
          this.src = "https://placehold.co/400x400/e8dccc/8b5a3c?text=No+Image";
        };

        // dynamic specs
        let specsHtml = `
      <li><i class="fas fa-venus-mars"></i> <span>Designed for: ${product.gender}</span></li>
      <li><i class="fas fa-tag"></i> <span>Price: ₦${product.price}</span></li>
    `;
        // add custom specs from array
        if (product.specs && product.specs.length) {
          product.specs.forEach((spec) => {
            specsHtml += `<li><i class="fas fa-check-circle"></i> <span>${spec}</span></li>`;
          });
        } else {
          specsHtml += `<li><i class="fas fa-shoe-prints"></i> <span>Premium comfort outsole</span></li>`;
        }
        specsHtml += `<li><i class="fas fa-box"></i> <span>Lookbook item — for inspiration</span></li>`;
        modalSpecsList.innerHTML = specsHtml;

        // show modal
        modalOverlay.classList.add("active");
        document.body.style.overflow = "hidden";
      }

      function closeModal() {
        modalOverlay.classList.remove("active");
        document.body.style.overflow = "";
      }

      // Event listeners for filters
      const filterPills = document.querySelectorAll(".filter-pill");
      filterPills.forEach((pill) => {
        pill.addEventListener("click", () => {
          filterPills.forEach((p) => p.classList.remove("active"));
          pill.classList.add("active");
          const filterValue = pill.getAttribute("data-filter");
          if (filterValue === "all") {
            currentFilter = "all";
          } else {
            currentFilter = filterValue;
          }
          renderProducts();
        });
      });

      // Navigation smooth scroll
      document.getElementById("nav-home")?.addEventListener("click", (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
      document
        .getElementById("nav-collection")
        ?.addEventListener("click", (e) => {
          e.preventDefault();
          const grid = document.getElementById("products-grid-container");
          if (grid) grid.scrollIntoView({ behavior: "smooth", block: "start" });
        });
      document.getElementById("nav-about")?.addEventListener("click", (e) => {
        e.preventDefault();
        const aboutDiv = document.getElementById("about-info");
        if (aboutDiv)
          aboutDiv.scrollIntoView({ behavior: "smooth", block: "start" });
      });

      // close modal events
      if (closeModalBtn) closeModalBtn.addEventListener("click", closeModal);
      modalOverlay.addEventListener("click", (e) => {
        if (e.target === modalOverlay) closeModal();
      });
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && modalOverlay.classList.contains("active")) {
          closeModal();
        }
      });

      // initial render
      renderProducts();
    
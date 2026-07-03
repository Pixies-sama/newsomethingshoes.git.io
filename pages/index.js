 
      // =========================================================================
      // MANUAL LOCAL JSON DATABASE
      // Add, remove, or swap items here. Supports absolute multi-image arrays.
      // =========================================================================
      const globalInventory = [
        {
          id: 1,
          name: "The Nero Cross-Strap Slide",
          gender: "Men",
          price:18000,
          description:
            "A sleek, premium palm slipper designed for effortless everyday luxury. It features overlapping matte and textured black leather straps, anchored by a polished silver-tone metallic emblem and paired with a deeply contoured, comfortable footbed.",
          specs: [
            "Premium matte and textured black leather straps.",
            "Polished silver-tone signature arrow accent.",
            "Ergonomic, cushioned footbed for all-day comfort.",
          ],
          imageUrls: [
            "https://res.cloudinary.com/ddrorad1f/image/upload/v1781916059/20260521_144431_yl0kfp.jpg",
            "https://res.cloudinary.com/ddrorad1f/image/upload/v1781916173/20260521_144451_rljt82.jpg",
          ],
        },
        {
          id: 2,
          name: "The Earth-Tone Textured Thong Slide",
          gender: "Women",
          price: 7000,
          description:
            "An everyday casual palm slipper blending rustic textures with modern minimalism. It features a woven, burlap-style brown textile footbed paired with slim, flexible black thong straps and a smooth leather-look heel patch for subtle contrast and comfort.",
          specs: [
            "Textured brown woven fabric for a natural, rustic aesthetic.",
            "Soft, flexible black faux-leather thong design with a knotted center detail.",
            "Breathable Matrix Weave",
          ],
          imageUrls: [
            "https://res.cloudinary.com/ddrorad1f/image/upload/v1782064400/IMG_9114_oyehbd.jpg",
            "https://res.cloudinary.com/ddrorad1f/image/upload/v1782064400/IMG_9114_oyehbd.jpg",
          ],
        },
        {
          id: 3,
          name: "VELVET SLIPSTREAM RUNNER",
          gender: "Unisex",
          price: 92000,
          description:
            "Sleek aerodynamic curves molded with high-performance mesh lines and luxurious nubuck overlays.",
          specs: [
            "Responsive EVA Midsole",
            "Reflective Carbon Accents",
            "Breathable Matrix Weave",
          ],
          imageUrls: [
            "https://res.cloudinary.com/ddrorad1f/image/upload/v1781916173/20260521_144451_rljt82.jpg",
            "https://res.cloudinary.com/ddrorad1f/image/upload/v1781916059/20260521_144431_yl0kfp.jpg",
          ],
        },
        {
          id: 4,
          name: "The Suede Monk-Strap Slide",
          gender: "Men",
          price: 25000,
          description:
            "A premium, minimalist palm slipper crafted with a wide, tan suede upper. It features a modern side-buckle detail, a plush contoured footbed, and a contrasting stitched welt sole for a refined, upscale casual look.",
          specs: [
            "Soft, premium tan suede with a wide-strap wrap design.",
            "Polished silver-tone rectangular buckle accent.",
            "Dual-tone platform with a cushioned neutral insole and a sturdy white rubber outsole.",
          ],
          imageUrls: [
            "https://res.cloudinary.com/ddrorad1f/image/upload/v1782335030/576f4e96ce0ee48b24195fdd6dbe06c5_vw5qfd.jpg",
          ],
        },
        {
          id: 5,
          name: "The Nomad Two-Tone Slide",
          gender: "Women",
          price: 8000,
          description:
            "A minimalist, modern palm slipper featuring a layered, dual-tone leather strap in beige and tan. Designed with a clean square-toe profile and precise edge stitching for a refined look.",
          specs: [
            "Premium layered leather in a beige and tan color block.",
            "Clean, contemporary square-toe footbed silhouette.",
            "Slim, durable black outsole with contrasting perimeter stitching.",
          ],
          imageUrls: [
            "https://res.cloudinary.com/ddrorad1f/image/upload/v1782064442/IMG_9095_xrb89l.jpg",
            "https://res.cloudinary.com/ddrorad1f/image/upload/v1782064624/IMG_9094_zw9dxx.jpg",
          ],
        },
        {
          id: 6,
          name: "The Chestnut Suede Cross-Slide",
          gender: "Men",
          price: 25000,
          description:
            "A premium, minimalist palm slipper featuring overlapping chestnut brown suede straps accented with a geometric silver emblem. Built with a smooth, neutral-toned contoured footbed and a durable black outsole for a refined casual look.",
          specs: [
            "Soft, textured chestnut brown suede in a classic cross-strap design.",
            "Minimalist geometric silver-tone metallic emblem.",
            "Cushioned tan leather-look insole paired with a sturdy black rubber outsole.",
          ],
          imageUrls: [
            "https://res.cloudinary.com/ddrorad1f/image/upload/v1782335028/2f76478500de8a1e275a92c7fef7140e_vvfkjj.jpg",
          ],
        },
        {
          id: 7,
          name: "VELVET SLIPSTREAM RUNNER",
          gender: "Unisex",
          price: 92000,
          description:
            "Sleek aerodynamic curves molded with high-performance mesh lines and luxurious nubuck overlays.",
          specs: [
            "Responsive EVA Midsole",
            "Reflective Carbon Accents",
            "Breathable Matrix Weave",
          ],
          imageUrls: [
            "https://res.cloudinary.com/ddrorad1f/image/upload/v1781916173/20260521_144451_rljt82.jpg",
            "https://res.cloudinary.com/ddrorad1f/image/upload/v1781916059/20260521_144431_yl0kfp.jpg",
          ],
        },
        {
          id: 8,
          name: "VELVET SLIPSTREAM RUNNER",
          gender: "Unisex",
          price: 92000,
          description:
            "Sleek aerodynamic curves molded with high-performance mesh lines and luxurious nubuck overlays.",
          specs: [
          ],
          imageUrls: [
            "https://res.cloudinary.com/ddrorad1f/image/upload/v1781916173/20260521_144451_rljt82.jpg",
            "https://res.cloudinary.com/ddrorad1f/image/upload/v1781916059/20260521_144431_yl0kfp.jpg",
          ],
        },
        {
          id: 9,
          name: "VELVET SLIPSTREAM RUNNER",
          gender: "Unisex",
          price: 92000,
          description:
            "Sleek aerodynamic curves molded with high-performance mesh lines and luxurious nubuck overlays.",
          specs: [
          ],
          imageUrls: [
            "https://res.cloudinary.com/ddrorad1f/image/upload/v1781916173/20260521_144451_rljt82.jpg",
            "https://res.cloudinary.com/ddrorad1f/image/upload/v1781916059/20260521_144431_yl0kfp.jpg",
          ],
        },
        {
          id: 10,
          name: "VELVET SLIPSTREAM RUNNER",
          gender: "Unisex",
          price: 92000,
          description:
            "Sleek aerodynamic curves molded with high-performance mesh lines and luxurious nubuck overlays.",
          specs: [
          ],
          imageUrls: [
            "https://res.cloudinary.com/ddrorad1f/image/upload/v1781916173/20260521_144451_rljt82.jpg",
            "https://res.cloudinary.com/ddrorad1f/image/upload/v1781916059/20260521_144431_yl0kfp.jpg",
          ],
        },
        {
          id: 11,
          name: "VELVET SLIPSTREAM RUNNER",
          gender: "Unisex",
          price: 92000,
          description:
            "Sleek aerodynamic curves molded with high-performance mesh lines and luxurious nubuck overlays.",
          specs: [
          ],
          imageUrls: [
            "https://res.cloudinary.com/ddrorad1f/image/upload/v1782335030/576f4e96ce0ee48b24195fdd6dbe06c5_vw5qfd.jpg",
            "https://i.pinimg.com/736x/4f/d2/f2/4fd2f294550320df3894428a18753e4b.jpg",
          ],
        },
        {
          id: 12,
          name: "VELVET SLIPSTREAM RUNNER",
          gender: "Unisex",
          price: 92000,
          description:
            "Sleek aerodynamic curves molded with high-performance mesh lines and luxurious nubuck overlays.",
          specs: [
          ],
          imageUrls: [
            "https://i.pinimg.com/736x/22/cd/10/22cd108cca646a59235f3d48c4ab620a.jpg",
            "https://i.pinimg.com/736x/ab/f0/ec/abf0ec99513b2e96681727a46d2b3c2e.jpg",
          ],
        },
        {
          id: 13,
          name: "VELVET SLIPSTREAM RUNNER",
          gender: "Unisex",
          price: 92000,
          description:
            "Sleek aerodynamic curves molded with high-performance mesh lines and luxurious nubuck overlays.",
          specs: [
          ],
          imageUrls: [
            "https://i.pinimg.com/736x/ab/92/66/ab92662838d9c6ea61298fb556d642a6.jpg",
            "https://i.pinimg.com/1200x/48/f8/a7/48f8a777451efb95a2d4bdf6641c40b0.jpg",
          ],
        },
        {
          id: 14,
          name: "VELVET SLIPSTREAM RUNNER",
          gender: "Unisex",
          price: 92000,
          description:
            "Sleek aerodynamic curves molded with high-performance mesh lines and luxurious nubuck overlays.",
          specs: [
          ],
          imageUrls: [
            "https://i.pinimg.com/1200x/88/54/e3/8854e3b5234e03cffc202f88cb4958f3.jpg",
            "https://i.pinimg.com/736x/85/44/21/85442190f123f6f24dbbc3d88a43f685.jpg",
             "https://i.pinimg.com/1200x/8e/83/bd/8e83bdb6c73d7520955a35a8aeafa713.jpg"
          ],
        },
        {
          id: 3,
          name: "VELVET SLIPSTREAM RUNNER",
          gender: "Unisex",
          price: 92000,
          description:
            "Sleek aerodynamic curves molded with high-performance mesh lines and luxurious nubuck overlays.",
          specs: [
          ],
          imageUrls: [
            "https://res.cloudinary.com/ddrorad1f/image/upload/v1781916173/20260521_144451_rljt82.jpg",
            "https://res.cloudinary.com/ddrorad1f/image/upload/v1781916059/20260521_144431_yl0kfp.jpg",
          ],
        },
        {
          id: 3,
          name: "VELVET SLIPSTREAM RUNNER",
          gender: "Unisex",
          price: 92000,
          description:
            "Sleek aerodynamic curves molded with high-performance mesh lines and luxurious nubuck overlays.",
          specs: [
          ],
          imageUrls: [
            "https://res.cloudinary.com/ddrorad1f/image/upload/v1781916173/20260521_144451_rljt82.jpg",
            "https://res.cloudinary.com/ddrorad1f/image/upload/v1781916059/20260521_144431_yl0kfp.jpg",
          ],
        },
        {
          id: 3,
          name: "VELVET SLIPSTREAM RUNNER",
          gender: "Unisex",
          price: 92000,
          description:
            "Sleek aerodynamic curves molded with high-performance mesh lines and luxurious nubuck overlays.",
          specs: [
          ],
          imageUrls: [
            "https://res.cloudinary.com/ddrorad1f/image/upload/v1781916173/20260521_144451_rljt82.jpg",
            "https://res.cloudinary.com/ddrorad1f/image/upload/v1781916059/20260521_144431_yl0kfp.jpg",
          ],
        },
        {
          id: 3,
          name: "VELVET SLIPSTREAM RUNNER",
          gender: "Unisex",
          price: 92000,
          description:
            "Sleek aerodynamic curves molded with high-performance mesh lines and luxurious nubuck overlays.",
          specs: [
          ],
          imageUrls: [
            "https://res.cloudinary.com/ddrorad1f/image/upload/v1781916173/20260521_144451_rljt82.jpg",
            "https://res.cloudinary.com/ddrorad1f/image/upload/v1781916059/20260521_144431_yl0kfp.jpg",
          ],
        },
      ];

      let activeSliderIndex = 0;
      let currentFilterMode = "all";
      let displayLimitCount = 8;
      const WHATSAPP_NUMBER = "2347033623329";

      // Document Object Elements Mapping
      const skeleton = document.getElementById("image-skeleton");
      const sliderImg = document.getElementById("slider-main-image");
      const sliderTitle = document.getElementById("slider-title");
      const sliderPrice = document.getElementById("slider-price");
      const sliderDesc = document.getElementById("slider-description");
      const sliderSpecs = document.getElementById("slider-specs");
      const sliderCategory = document.getElementById("slider-category");
      const sliderInquireBtn = document.getElementById("slider-inquire-btn");
      const stripContainer = document.getElementById(
        "thumbnail-strip-container",
      );
      const galleryGrid = document.getElementById("gallery-cards-grid");
      const showMoreBtn = document.getElementById("show-all-btn");

      const modal = document.getElementById("product-modal");
      const modalImg = document.getElementById("modal-product-image");
      const modalInquireBtn = document.getElementById("modal-inquire-btn");
      const closeModalBtn = document.getElementById("close-modal-btn");

      let modalImageArrayTrack = [];
      let modalImageIndexPointer = 0;

      function initializeSystemGallery() {
        if (globalInventory.length === 0) {
          sliderTitle.innerText = "NO DESIGNS CURRENTLY IN REGISTRY STOCK";
          return;
        }
        renderTopSliderElement(activeSliderIndex);
        buildHorizontalRibbonStrip();
        buildGridShowcaseMatrix();
      }

      // SPOTLIGHT: Render Main Display Unit
      function renderTopSliderElement(index) {
        if (!globalInventory[index]) return;
        const item = globalInventory[index];

        skeleton.classList.add("loading");
        sliderImg.style.opacity = "0";

        const mainImgUrl =
          item.imageUrls && item.imageUrls.length > 0
            ? item.imageUrls[0]
            : "https://via.placeholder.com/400";
        sliderImg.src = mainImgUrl;
        sliderImg.alt = item.name;

        sliderImg.onload = () => {
          skeleton.classList.remove("loading");
          sliderImg.style.opacity = "1";
        };

        sliderTitle.innerText = item.name;
        sliderCategory.innerText = `COLLECTION: ${item.gender.toUpperCase()}`;
        sliderPrice.innerText = `₦${Number(item.price).toLocaleString()}`;
        sliderDesc.innerText = item.description;

        sliderSpecs.innerHTML = item.specs
          .map(
            (spec) =>
              `<li><i class="fas fa-circle"></i> <span>${spec}</span></li>`,
          )
          .join("");

        sliderInquireBtn.onclick = () => {
          // Included image layout link directly in the message template line
          const msg = encodeURIComponent(
            `Hello, I want to inquire about the signature design:\n\nModel: ${item.name}\nPrice: ₦${Number(item.price).toLocaleString()}\nReference Image: ${mainImgUrl}\n\nIs this size run available?`,
          );
          window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
        };
      }

      // SPOTLIGHT: Build Horizontal Strip Ribbon
      function buildHorizontalRibbonStrip() {
        const spotlightItems = globalInventory.slice(0, 10);
        stripContainer.innerHTML = spotlightItems
          .map(
            (item, idx) => `
            <div class="strip-thumb-item ${idx === activeSliderIndex ? "active" : ""}" data-index="${idx}">
              <img src="${item.imageUrls && item.imageUrls.length > 0 ? item.imageUrls[0] : "https://via.placeholder.com/60"}" alt="">
            </div>
          `,
          )
          .join("");

        document.querySelectorAll(".strip-thumb-item").forEach((thumb) => {
          thumb.addEventListener("click", (e) => {
            activeSliderIndex = parseInt(
              e.currentTarget.getAttribute("data-index"),
            );
            renderTopSliderElement(activeSliderIndex);
            updateActiveRibbonIndicator();
          });
        });
      }

      // SPOTLIGHT: Navigation Controls
      document
        .getElementById("next-slide-btn")
        .addEventListener("click", () => {
          const limitRange = Math.min(globalInventory.length, 10);
          if (limitRange === 0) return;
          activeSliderIndex = (activeSliderIndex + 1) % limitRange;
          renderTopSliderElement(activeSliderIndex);
          updateActiveRibbonIndicator();
        });

      document
        .getElementById("prev-slide-btn")
        .addEventListener("click", () => {
          const limitRange = Math.min(globalInventory.length, 10);
          if (limitRange === 0) return;
          activeSliderIndex = (activeSliderIndex - 1 + limitRange) % limitRange;
          renderTopSliderElement(activeSliderIndex);
          updateActiveRibbonIndicator();
        });

      function updateActiveRibbonIndicator() {
        document.querySelectorAll(".strip-thumb-item").forEach((t, idx) => {
          if (idx === activeSliderIndex) t.classList.add("active");
          else t.classList.remove("active");
        });
      }

      // GALLERY: Grid Display Matrix
      function buildGridShowcaseMatrix() {
        const galleryPool =
          globalInventory.length > 10
            ? globalInventory.slice(10)
            : globalInventory;

        const filtered = galleryPool.filter((item) => {
          if (currentFilterMode === "all") return true;
          return item.gender.toLowerCase() === currentFilterMode.toLowerCase();
        });

        const sliceRender = filtered.slice(0, displayLimitCount);

        if (sliceRender.length === 0) {
          galleryGrid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 5rem 0; font-size: 0.85rem; letter-spacing:0.05em;">ADDITIONAL ARCHIVE STOCKS UNAVAILABLE.</div>`;
          showMoreBtn.style.display = "none";
          return;
        }

        galleryGrid.innerHTML = sliceRender
          .map(
            (item) => `
            <div class="lookbook-item-card" data-id="${item.id}">
              <img src="${item.imageUrls && item.imageUrls.length > 0 ? item.imageUrls[0] : "https://via.placeholder.com/400"}" alt="${item.name}">
            </div>
          `,
          )
          .join("");

        showMoreBtn.style.display =
          filtered.length > displayLimitCount ? "inline-block" : "none";

        document.querySelectorAll(".lookbook-item-card").forEach((card) => {
          card.addEventListener("click", () => {
            const productID = parseInt(card.getAttribute("data-id"));
            const selectedItem = globalInventory.find(
              (p) => p.id === productID,
            );
            if (selectedItem) openCarouselModalStage(selectedItem);
          });
        });
      }

      // LOOKBOOK MODAL CAROUSEL ENGINE
      function openCarouselModalStage(item) {
        modalImageArrayTrack = item.imageUrls || [];
        modalImageIndexPointer = 0;

        synchronizeModalImageState();

        const prevBtn = document.getElementById("modal-prev-btn");
        const nextBtn = document.getElementById("modal-next-btn");

        if (modalImageArrayTrack.length > 1) {
          prevBtn.style.display = "flex";
          nextBtn.style.display = "flex";
          buildModalCarouselIndicators();
        } else {
          prevBtn.style.display = "none";
          nextBtn.style.display = "none";
          document.getElementById("modal-carousel-dots").innerHTML = "";
        }

        modal.classList.add("active");

        modalInquireBtn.onclick = () => {
          // Grabs the image matching the current viewpoint context inside the gallery popup modal overlay
          const modalActiveImgUrl =
            modalImageArrayTrack[modalImageIndexPointer] ||
            "https://via.placeholder.com/400";
          const queryMsg = encodeURIComponent(
            `Hello, I am tracking lookbook model:\n\nModel: ${item.name}\nPrice: ₦${Number(item.price).toLocaleString()}\nReference Image: ${modalActiveImgUrl}\n\nIs this size run available?`,
          );
          window.open(
            `https://wa.me/${WHATSAPP_NUMBER}?text=${queryMsg}`,
            "_blank",
          );
        };
      }

      function synchronizeModalImageState() {
        modalImg.style.opacity = "0";
        setTimeout(() => {
          modalImg.src =
            modalImageArrayTrack[modalImageIndexPointer] ||
            "https://via.placeholder.com/400";
          modalImg.style.opacity = "1";
        }, 150);

        document
          .querySelectorAll(".modal-indicator-circle")
          .forEach((dot, idx) => {
            dot.style.background =
              idx === modalImageIndexPointer
                ? "var(--text-primary)"
                : "rgba(26,20,18,0.15)";
          });
      }

      function buildModalCarouselIndicators() {
        const container = document.getElementById("modal-carousel-dots");
        container.innerHTML = modalImageArrayTrack
          .map(
            () =>
              `<span class="modal-indicator-circle" style="width: 7px; height: 7px; border-radius: 50%; background: rgba(26,20,18,0.15); transition: all 0.25s ease;"></span>`,
          )
          .join("");
      }

      document
        .getElementById("modal-next-btn")
        .addEventListener("click", (e) => {
          e.stopPropagation();
          modalImageIndexPointer =
            (modalImageIndexPointer + 1) % modalImageArrayTrack.length;
          synchronizeModalImageState();
        });

      document
        .getElementById("modal-prev-btn")
        .addEventListener("click", (e) => {
          e.stopPropagation();
          modalImageIndexPointer =
            (modalImageIndexPointer - 1 + modalImageArrayTrack.length) %
            modalImageArrayTrack.length;
          synchronizeModalImageState();
        });

      // Filtering Configuration Tabs
      document.querySelectorAll(".filter-tab").forEach((tab) => {
        tab.addEventListener("click", (e) => {
          document
            .querySelectorAll(".filter-tab")
            .forEach((t) => t.classList.remove("active"));
          e.currentTarget.classList.add("active");
          currentFilterMode = e.currentTarget.getAttribute("data-filter");
          displayLimitCount = 8;
          buildGridShowcaseMatrix();
        });
      });

      showMoreBtn.addEventListener("click", () => {
        displayLimitCount += 8;
        buildGridShowcaseMatrix();
      });

      closeModalBtn.addEventListener("click", () =>
        modal.classList.remove("active"),
      );
      modal.addEventListener("click", (e) => {
        if (e.target === modal) modal.classList.remove("active");
      });

      initializeSystemGallery();


      // ==================== SCROLL REVEAL ANIMATIONS ====================
function setupScrollReveal() {
  const revealElements = document.querySelectorAll('.lookbook-item-card, .manifesto-col, .section-header-minimal');
  
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Add staggered delay
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, index * 80);
        
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  revealElements.forEach((el, i) => {
    el.classList.add('reveal-on-scroll');
    // Stagger initial visibility
    el.style.transitionDelay = `${i * 0.05}s`;
    observer.observe(el);
  });
}

// ==================== SMOOTH IMAGE LOADING ====================
function setupImageLoading() {
  const images = document.querySelectorAll('img');
  
  images.forEach(img => {
    if (!img.complete) {
      img.style.opacity = '0';
      img.style.transition = 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
      
      img.addEventListener('load', () => {
        img.style.opacity = '1';
      });
      
      // Fallback for cached images
      setTimeout(() => {
        if (img.complete) {
          img.style.opacity = '1';
        }
      }, 100);
    } else {
      img.style.opacity = '1';
    }
  });
}

// ==================== ENHANCED MODAL TRANSITIONS ====================
// Replace your existing modal open function with this enhanced version
function openCarouselModalStage(item) {
  modalImageArrayTrack = item.imageUrls || [];
  modalImageIndexPointer = 0;

  synchronizeModalImageState();

  const prevBtn = document.getElementById("modal-prev-btn");
  const nextBtn = document.getElementById("modal-next-btn");

  if (modalImageArrayTrack.length > 1) {
    prevBtn.style.display = "flex";
    nextBtn.style.display = "flex";
    buildModalCarouselIndicators();
  } else {
    prevBtn.style.display = "none";
    nextBtn.style.display = "none";
    document.getElementById("modal-carousel-dots").innerHTML = "";
  }

  // Reset modal image for smooth transition
  modalImg.style.opacity = "0";
  modal.classList.add("active");
  
  // Small delay for smooth image load
  setTimeout(() => {
    modalImg.src = modalImageArrayTrack[0] || "https://via.placeholder.com/400";
    modalImg.style.opacity = "1";
  }, 150);

  modalInquireBtn.onclick = () => {
    const modalActiveImgUrl =
      modalImageArrayTrack[modalImageIndexPointer] ||
      "https://via.placeholder.com/400";
    const queryMsg = encodeURIComponent(
      `Hello, I am tracking lookbook model:\n\nModel: ${item.name}\nPrice: ₦${Number(item.price).toLocaleString()}\nReference Image: ${modalActiveImgUrl}\n\nIs this size run available?`,
    );
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${queryMsg}`,
      "_blank",
    );
  };
}

// ==================== SMOOTH NAVIGATION SCROLL ====================
function setupSmoothNav() {
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId && targetId.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(targetId);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
}

// ==================== INITIALIZE ENHANCEMENTS ====================
// Call these after your existing initialization
document.addEventListener('DOMContentLoaded', () => {
  setupScrollReveal();
  setupImageLoading();
  setupSmoothNav();
});

// Also add a subtle parallax effect to the main image
function setupParallax() {
  const viewport = document.querySelector('.main-image-viewport');
  if (viewport) {
    viewport.addEventListener('mousemove', (e) => {
      const rect = viewport.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      const img = viewport.querySelector('img');
      if (img && img.style) {
        img.style.transform = `scale(1.02) translate(${x * 6}px, ${y * 6}px)`;
      }
    });
    
    viewport.addEventListener('mouseleave', () => {
      const img = viewport.querySelector('img');
      if (img && img.style) {
        img.style.transform = 'scale(1) translate(0, 0)';
      }
    });
  }
}

// Add to DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  setupParallax();
});
    
/* ================================
   WORKS モーダル制御
   - 閉じるアニメーション
   - Prev/Next ナビ
================================ */

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("worksModal");
  const closeBtn = document.getElementById("modal-close");
  const prevBtn = document.getElementById("modal-prev");
  const nextBtn = document.getElementById("modal-next");

  if (!modal || !closeBtn) {
    console.error("モーダル要素が見つかりません");
    return;
  }

  let currentCategory = null;
  let currentIndex = -1;

  function getWorks(category) {
    if (!category) return [];
    if (typeof WORKS_DATA === 'undefined') return [];
    return WORKS_DATA[category] || [];
  }

  function updateNav(total) {
    if (!prevBtn || !nextBtn) return;
    if (!total || total <= 1) {
      prevBtn.disabled = true;
      nextBtn.disabled = true;
      return;
    }
    prevBtn.disabled = currentIndex <= 0;
    nextBtn.disabled = currentIndex >= total - 1;
  }

  function showWork(category, index) {
    const works = getWorks(category);
    const work = works[index];
    if (!work) return;

    const heroImg = modal.querySelector(".hero-img");
    const detailImg = modal.querySelector(".detail-img");
    const detailWrap = detailImg ? detailImg.closest('.modal-image') : null;

    if (heroImg) {
      heroImg.src = work.modalThumb || "";
      heroImg.alt = work.title || "";
    }

    if (detailImg && detailWrap) {
      if (work.detailImg) {
        detailImg.src = work.detailImg;
        detailImg.alt = work.title || "";
        detailWrap.style.display = "block";
      } else {
        detailWrap.style.display = "none";
      }
    }

    modal.querySelector(".modal-main-title").textContent =
      work.category ? work.category.toUpperCase() : "WORKS";

    modal.querySelector(".modal-outline").textContent = work.outline || "";
    modal.querySelector(".modal-target").textContent = work.target || "";
    modal.querySelector(".modal-period").textContent = work.period || "";
    modal.querySelector(".modal-purpose").textContent = work.purpose || "";
    modal.querySelector(".modal-detail").textContent = work.detailText || "";

    updateNav(works.length);

    const body = modal.querySelector('.modal-body');
    if (body) {
      body.scrollTop = 0;
    }
  }

  function openModal(work) {
    const wrapper = modal.querySelector('.modal-wrapper');
    wrapper?.classList.remove('closing');

    currentCategory = work.category || null;
    const works = getWorks(currentCategory);
    const idx = works.findIndex(w => w.id === work.id);
    currentIndex = idx >= 0 ? idx : 0;

    showWork(currentCategory, currentIndex);

    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    const wrapper = modal.querySelector('.modal-wrapper');
    if (!wrapper) return;

    wrapper.classList.add('closing');
    setTimeout(() => {
      modal.classList.remove("active");
      modal.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
      wrapper.classList.remove('closing');
    }, 300);
  }

  function goPrev() {
    const works = getWorks(currentCategory);
    if (currentIndex > 0) {
      currentIndex -= 1;
      showWork(currentCategory, currentIndex);
    }
  }

  function goNext() {
    const works = getWorks(currentCategory);
    if (currentIndex < works.length - 1) {
      currentIndex += 1;
      showWork(currentCategory, currentIndex);
    }
  }

  window.openModal = openModal;

  closeBtn.addEventListener("click", closeModal);

  if (prevBtn) prevBtn.addEventListener('click', goPrev);
  if (nextBtn) nextBtn.addEventListener('click', goNext);

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      closeModal();
    }
    if (e.key === "ArrowLeft" && modal.classList.contains("active")) {
      goPrev();
    }
    if (e.key === "ArrowRight" && modal.classList.contains("active")) {
      goNext();
    }
  });
});

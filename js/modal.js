/* ================================
   WORKS モーダル制御
   - 閉じるアニメーション
   - 下部ナビゲーション
================================ */

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("worksModal");
  const closeBtn = document.getElementById("modal-close");
  const footerPrevBtn = document.getElementById("modal-footer-prev");
  const footerNextBtn = document.getElementById("modal-footer-next");
  const modalBody = document.querySelector(".modal-body");

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
    // 下部ナビの更新（非表示/表示）
    if (footerPrevBtn) {
      if (currentIndex <= 0) {
        footerPrevBtn.classList.add('hidden');
      } else {
        footerPrevBtn.classList.remove('hidden');
      }
    }

    if (footerNextBtn) {
      const works = getWorks(currentCategory);
      if (currentIndex >= works.length - 1) {
        footerNextBtn.classList.add('hidden');
      } else {
        footerNextBtn.classList.remove('hidden');
      }
    }
  }

  function getDesignAxis(work, category) {
    if (work.designAxis) return work.designAxis;
    const axisMap = {
      web: "導線設計 / 情報の余白 / 信頼感のトーン",
      dtp: "可読性 / 運用しやすさ / 情報の優先度",
      graphic: "象徴性 / 余白バランス / 記憶に残る造形"
    };
    return axisMap[category] || "情報整理 / 余白設計 / 印象の一貫性";
  }

  function showWork(category, index) {
    const works = getWorks(category);
    const work = works[index];
    if (!work) return;

    const heroImg = modal.querySelector(".hero-img");
    const detailImagesRoot = modal.querySelector(".modal-detail-images");

    if (heroImg) {
      heroImg.src = work.modalThumb || "";
      heroImg.alt = work.title || "";
    }

    if (detailImagesRoot) {
      const detailImages = Array.isArray(work.detailImgs) && work.detailImgs.length
        ? work.detailImgs
        : [work.detailImg, work.detailImg2].filter(Boolean);

      detailImagesRoot.innerHTML = "";
      detailImages.forEach((src, idx) => {
        const wrap = document.createElement("div");
        wrap.className = "modal-image";

        const img = document.createElement("img");
        img.src = src;
        img.alt = `${work.title || ""} ${idx + 1}`.trim();

        wrap.appendChild(img);
        detailImagesRoot.appendChild(wrap);
      });
    }

    const categoryLabel = (category || work.category || "works").toUpperCase();
    modal.querySelector(".modal-main-title").textContent = categoryLabel;
    modal.classList.remove("modal-cat-web", "modal-cat-dtp", "modal-cat-graphic");
    modal.classList.add(`modal-cat-${category || "web"}`);

    const subTitle = modal.querySelector(".modal-sub-title");
    if (subTitle) subTitle.textContent = work.title || "";
    const subTag = modal.querySelector(".modal-sub-tag");
    if (subTag) subTag.textContent = work.tag || "";

    modal.querySelector(".modal-outline").textContent = work.outline || "";
    modal.querySelector(".modal-target").textContent = work.target || "";
    modal.querySelector(".modal-period").textContent = work.period || "";
    modal.querySelector(".modal-purpose").textContent = work.purpose || "";
    modal.querySelector(".modal-axis").textContent = getDesignAxis(work, category);
    modal.querySelector(".modal-detail").textContent = work.detailText || "";

    updateNav(works.length);

    // スクロール位置をリセット
    if (modalBody) {
      modalBody.scrollTop = 0;
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

  // 下部ナビ
  if (footerPrevBtn) footerPrevBtn.addEventListener('click', goPrev);
  if (footerNextBtn) footerNextBtn.addEventListener('click', goNext);

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

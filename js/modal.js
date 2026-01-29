/* ================================
   WORKS モーダル制御
================================ */

document.addEventListener("DOMContentLoaded", () => {

  const modal = document.getElementById("worksModal");
  const closeBtn = document.getElementById("modal-close");

  if (!modal || !closeBtn) {
    console.error("モーダル要素が見つかりません");
    return;
  }

  // モーダルを開く
  window.openModal = function (work) {
    
    // 画像を設定
    const heroImg = modal.querySelector(".hero-img");
    const detailImg = modal.querySelector(".detail-img");
    
    heroImg.src = work.modalThumb || "";
    
    if (work.detailImg) {
      detailImg.src = work.detailImg;
      detailImg.style.display = "block";
    } else {
      detailImg.style.display = "none";
    }

    // テキストを設定
    modal.querySelector(".modal-main-title").textContent = 
      work.category ? work.category.toUpperCase() : "WORKS";
    
    modal.querySelector(".modal-outline").textContent = work.outline || "";
    modal.querySelector(".modal-target").textContent = work.target || "";
    modal.querySelector(".modal-period").textContent = work.period || "";
    modal.querySelector(".modal-purpose").textContent = work.purpose || "";
    modal.querySelector(".modal-detail").textContent = work.detailText || "";

    // モーダルを表示
    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  };

  // モーダルを閉じる
  function closeModal() {
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  // 閉じるボタンクリック
  closeBtn.addEventListener("click", closeModal);

  // オーバーレイクリック
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  // ESCキー
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      closeModal();
    }
  });

});


/* ================================
   WORKS モーダル制御（改善版）
   - 閉じるアニメーション追加
   - スムーズスクロール
================================ */

document.addEventListener("DOMContentLoaded", () => {

  const modal = document.getElementById("worksModal");
  const closeBtn = document.getElementById("modal-close");

  if (!modal || !closeBtn) {
    console.error("モーダル要素が見つかりません");
    return;
  }

  // モーダルを開く
  window.openModal = function (work) {
    
    // 画像を設定
    const heroImg = modal.querySelector(".hero-img");
    const detailImg = modal.querySelector(".detail-img");
    
    heroImg.src = work.modalThumb || "";
    
    if (work.detailImg) {
      detailImg.src = work.detailImg;
      detailImg.closest('.modal-image').style.display = "block";
    } else {
      detailImg.closest('.modal-image').style.display = "none";
    }

    // テキストを設定
    modal.querySelector(".modal-main-title").textContent = 
      work.category ? work.category.toUpperCase() : "WORKS";
    
    modal.querySelector(".modal-outline").textContent = work.outline || "";
    modal.querySelector(".modal-target").textContent = work.target || "";
    modal.querySelector(".modal-period").textContent = work.period || "";
    modal.querySelector(".modal-purpose").textContent = work.purpose || "";
    modal.querySelector(".modal-detail").textContent = work.detailText || "";

    // アニメーションクラスを削除（再オープン時のため）
    const wrapper = modal.querySelector('.modal-wrapper');
    wrapper.classList.remove('closing');

    // モーダルを表示
    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";

    // モーダルボディを先頭にスクロール
    setTimeout(() => {
      modal.querySelector('.modal-body').scrollTop = 0;
    }, 50);
  };

  // モーダルを閉じる（アニメーション付き）
  function closeModal() {
    const wrapper = modal.querySelector('.modal-wrapper');
    
    // 閉じるアニメーション開始
    wrapper.classList.add('closing');
    
    // アニメーション完了後にモーダルを非表示
    setTimeout(() => {
      modal.classList.remove("active");
      modal.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
      wrapper.classList.remove('closing');
    }, 300);
  }

  // 閉じるボタンクリック
  closeBtn.addEventListener("click", closeModal);

  // オーバーレイクリック
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  // ESCキー
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      closeModal();
    }
  });

});
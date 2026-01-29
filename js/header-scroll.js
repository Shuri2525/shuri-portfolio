// ================================
// ヘッダースクロール対応
// スクロール時に半透明＋ぼかし効果
// ================================

(function() {
  'use strict';
  
  const header = document.querySelector('.site-header');
  
  if (!header) return;
  
  let lastScrollY = window.scrollY;
  let ticking = false;
  
  function updateHeader() {
    const scrollY = window.scrollY;
    
    if (scrollY > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    
    lastScrollY = scrollY;
    ticking = false;
  }
  
  function requestTick() {
    if (!ticking) {
      window.requestAnimationFrame(updateHeader);
      ticking = true;
    }
  }
  
  window.addEventListener('scroll', requestTick);
  
  // 初期チェック
  updateHeader();
  
})();
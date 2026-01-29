// ================================
// デバイス判定と自動リダイレクト
// タブレット(1024px以下)もSP版へ
// リサイズ対応強化版
// ================================

(function() {
  'use strict';
  
  // デバッグモード（コンソールにログ出力）
  const DEBUG = true;
  
  function log(...args) {
    if (DEBUG) console.log('[Device Redirect]', ...args);
  }
  
  // デバイス判定（タブレット含む）
  function isMobileOrTablet() {
    // 画面幅でモバイル・タブレットを判定（1024px以下）
    const isMobileWidth = window.innerWidth <= 1024;
    
    log('Window width:', window.innerWidth, '→', isMobileWidth ? 'Mobile/Tablet' : 'PC');
    
    return isMobileWidth;
  }
  
  // 現在のページ名を取得
  function getCurrentPage() {
    const path = window.location.pathname;
    const page = path.split('/').pop() || 'index.html';
    return page.replace('.html', '');
  }
  
  // SP版/PC版のパス判定
  function isOnCorrectVersion() {
    const path = window.location.pathname;
    const isOnSPPath = path.includes('/sp/');
    const shouldBeOnSP = isMobileOrTablet();
    
    log('Current path:', path);
    log('Is on SP path:', isOnSPPath);
    log('Should be on SP:', shouldBeOnSP);
    log('Is correct:', (shouldBeOnSP && isOnSPPath) || (!shouldBeOnSP && !isOnSPPath));
    
    return (shouldBeOnSP && isOnSPPath) || (!shouldBeOnSP && !isOnSPPath);
  }
  
  // リダイレクト実行
  function redirectToCorrectVersion() {
    // 既に正しいバージョンにいる場合は何もしない
    if (isOnCorrectVersion()) {
      log('Already on correct version');
      return;
    }
    
    const currentPage = getCurrentPage();
    const currentPath = window.location.pathname;
    
    log('Redirect triggered!');
    
    if (isMobileOrTablet()) {
      // モバイル・タブレットデバイス → SP版へリダイレクト
      if (!currentPath.includes('/sp/')) {
        const targetUrl = `/sp/${currentPage}.html`;
        log('Redirecting to SP:', targetUrl);
        window.location.href = targetUrl;
      }
    } else {
      // PCデバイス → PC版へリダイレクト
      if (currentPath.includes('/sp/')) {
        const pcPage = currentPage;
        const targetUrl = `/${pcPage}.html`;
        log('Redirecting to PC:', targetUrl);
        window.location.href = targetUrl;
      }
    }
  }
  
  // 初回チェック
  log('=== Initial check ===');
  redirectToCorrectVersion();
  
  // リサイズ時の再判定（デバウンス付き）
  let resizeTimer;
  let lastWidth = window.innerWidth;
  
  window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    
    resizeTimer = setTimeout(function() {
      const currentWidth = window.innerWidth;
      
      // 幅が実際に変わった場合のみチェック
      if (Math.abs(currentWidth - lastWidth) > 10) {
        log('=== Resize detected ===');
        log('Width changed:', lastWidth, '→', currentWidth);
        lastWidth = currentWidth;
        redirectToCorrectVersion();
      }
    }, 300);
  });
  
  log('Device redirect initialized');
  
})();
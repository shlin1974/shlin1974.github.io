// 获取当前语言
function getCurrentLanguage() {
  // 首先检查URL参数
  var urlParams = new URLSearchParams(window.location.search);
  var langParam = urlParams.get('lang');
  
  if (langParam) {
    if (langParam === 'zh-CN' || langParam === 'zh') {
      return 'zh-CN';
    } else if (langParam === 'en' || langParam === 'US-En') {
      return 'en';
    }
  }
  
  // 如果URL中没有有效的语言参数，检查cookie
  var match = document.cookie.match(new RegExp('(^| )preferred_language=([^;]+)'));
  var cookieLang = match ? match[2] : null;
  
  if (cookieLang) {
    if (cookieLang === 'zh-CN' || cookieLang === 'zh') {
      return 'zh-CN';
    } else if (cookieLang === 'en' || cookieLang === 'US-En') {
      return 'en';
    }
  }
  
  // 默认返回英文
  return 'en';
}

// 切换页面上的文本元素
function translatePage() {
  var currentLang = getCurrentLanguage();
  
  // 获取所有带有data-i18n属性的元素
  var elements = document.querySelectorAll('[data-i18n]');
  
  elements.forEach(function(element) {
    var key = element.getAttribute('data-i18n');
    var translations = window.i18n[key];
    
    if (translations && translations[currentLang]) {
      element.innerHTML = translations[currentLang];
    }
  });
  
  // 更新右上角语言切换器显示
  var languageSwitch = document.getElementById('language-switch');
  if (languageSwitch) {
    var indicator = languageSwitch.querySelector('.language-indicator');
    if (indicator) {
      if (currentLang === 'zh-CN') {
        indicator.textContent = '中';
      } else {
        indicator.textContent = 'En';
      }
    }
  }
}

// 页面加载完成后执行翻译
document.addEventListener('DOMContentLoaded', function() {
  // 如果存在全局翻译对象，执行翻译
  if (window.i18n) {
    translatePage();
  }
  
  // 确保语言切换器显示正确的当前语言
  var currentLang = getCurrentLanguage();
  var languageSwitch = document.getElementById('language-switch');
  if (languageSwitch) {
    var indicator = languageSwitch.querySelector('.language-indicator');
    if (indicator) {
      if (currentLang === 'zh-CN') {
        indicator.textContent = '中';
      } else {
        indicator.textContent = 'En';
      }
    }
  }
}); 
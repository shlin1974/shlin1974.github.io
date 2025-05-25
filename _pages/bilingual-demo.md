---
title: "Bilingual Demo"
permalink: /bilingual-demo/
author_profile: true
---

<div class="bilingual-content">
  <h2 data-i18n="demo_title">Bilingual Demo Page</h2>
  
  <div data-i18n="demo_intro">
    <p>This is a demonstration of the bilingual functionality. You can switch between English and Chinese using the language switcher at the bottom of the page.</p>
  </div>
  
  <div class="feature-section">
    <h3 data-i18n="demo_feature_title">Key Features</h3>
    <ul>
      <li data-i18n="demo_feature_1">Client-side language switching without page reload</li>
      <li data-i18n="demo_feature_2">Persistent language preference using cookies</li>
      <li data-i18n="demo_feature_3">Easy to add new translatable content</li>
    </ul>
  </div>
  
  <div class="usage-section">
    <h3 data-i18n="demo_usage_title">How to Use</h3>
    <ol>
      <li data-i18n="demo_usage_1">Add the data-i18n attribute to any HTML element you want to translate</li>
      <li data-i18n="demo_usage_2">Define translations in the translations.js file</li>
      <li data-i18n="demo_usage_3">The language switcher will automatically handle the rest</li>
    </ol>
  </div>
</div>

<script>
// Add translations for this page
window.addEventListener('DOMContentLoaded', function() {
  // Extend the global i18n object with page-specific translations
  Object.assign(window.i18n, {
    'demo_title': {
      'en': 'Bilingual Demo Page',
      'zh-CN': '双语演示页面'
    },
    'demo_intro': {
      'en': '<p>This is a demonstration of the bilingual functionality. You can switch between English and Chinese using the language switcher at the bottom of the page.</p>',
      'zh-CN': '<p>这是双语功能的演示。您可以使用页面底部的语言切换器在英文和中文之间切换。</p>'
    },
    'demo_feature_title': {
      'en': 'Key Features',
      'zh-CN': '主要特点'
    },
    'demo_feature_1': {
      'en': 'Client-side language switching without page reload',
      'zh-CN': '无需重新加载页面的客户端语言切换'
    },
    'demo_feature_2': {
      'en': 'Persistent language preference using cookies',
      'zh-CN': '使用cookie保存语言偏好'
    },
    'demo_feature_3': {
      'en': 'Easy to add new translatable content',
      'zh-CN': '轻松添加新的可翻译内容'
    },
    'demo_usage_title': {
      'en': 'How to Use',
      'zh-CN': '使用方法'
    },
    'demo_usage_1': {
      'en': 'Add the data-i18n attribute to any HTML element you want to translate',
      'zh-CN': '为任何需要翻译的HTML元素添加data-i18n属性'
    },
    'demo_usage_2': {
      'en': 'Define translations in the translations.js file',
      'zh-CN': '在translations.js文件中定义翻译'
    },
    'demo_usage_3': {
      'en': 'The language switcher will automatically handle the rest',
      'zh-CN': '语言切换器将自动处理剩余的工作'
    }
  });
  
  // Trigger translation if the i18n object is available
  if (window.translatePage) {
    window.translatePage();
  }
});
</script> 
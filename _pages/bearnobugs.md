---
layout: archive
title: "😋 Exhibition"
permalink: /exhibition/
author_profile: True
---

<!-- 页面主容器 -->
<div class="exhibition-container">
  <h1 class="title">Welcome to BearNoBugs' Photo Exhibition! 🖼️</h1>
  <p class="description">
    Explore the vibrant world of BearNoBugs through these dynamic and playful photos! Click or hover on the photos for surprises! 🎉 
    <strong>（All BearBugs are gifted by my girlfriend Yueru! 💖）</strong>
  </p>

  <!-- 照片展示区 -->
  <div class="photo-grid">
    <div class="photo-item">
      <img src="https://raw.githubusercontent.com/924973292/924973292.github.io/master/images/bearnobugs/WechatIMG180279.jpg" alt="BearNoBugs in action" class="photo">
      <p class="caption">Exploring the world! 🌍</p>
    </div>
    
    <div class="photo-item">
      <img src="https://raw.githubusercontent.com/924973292/924973292.github.io/master/images/bearnobugs/WechatIMG321.jpg" alt="BearNoBugs chilling" class="photo">
      <p class="caption">Chilling with style 😎</p>
    </div>
    
    <div class="photo-item">
      <img src="https://raw.githubusercontent.com/924973292/924973292.github.io/master/images/bearnobugs/WechatIMG322.jpg" alt="BearNoBugs chilling" class="photo">
      <p class="caption">Chilling with style 😎</p>
    </div>

    <div class="photo-item">
      <img src="https://raw.githubusercontent.com/924973292/924973292.github.io/master/images/bearnobugs/WechatIMG323.jpg" alt="BearNoBugs chilling" class="photo">
      <p class="caption">Chilling with style 😎</p>
    </div>
  </div>
</div>

<!-- CSS 样式部分 -->
<style>
  .exhibition-container {
    text-align: center;
    margin: 0 auto;
    padding: 20px;
    font-family: 'Arial', sans-serif;
  }

  .title {
    font-size: 2.5em;
    color: #ede2c3;
    margin-bottom: 20px;
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  .description {
    font-size: 1.2em;
    color: #555;
    margin-bottom: 30px;
  }

  .photo-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px; /* 图片间隔 */
  }

  .photo-item {
    position: relative;
    overflow: hidden;
    cursor: pointer;
  }

  .photo {
    width: 100%; /* 确保图片宽度100% */
    height: auto; /* 高度自适应 */
    max-width: 300px; /* 设置最大宽度 */
    max-height: 200px; /* 设置最大高度 */
    border-radius: 10px;
    transition: transform 0.3s ease, filter 0.3s ease;
  }

  .photo-item:hover img {
    transform: scale(1.1); /* 鼠标悬停时放大 */
    filter: brightness(0.8);
  }

  .caption {
    position: absolute;
    bottom: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    text-align: center;
    padding: 10px;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .photo-item:hover .caption {
    opacity: 1;
  }
</style>

---
layout: archive
title: "📖 Publications"
permalink: /publications/
author_profile: true
---

<style>
  /* 全局样式 */
  body {
    font-family: 'Helvetica', Arial, sans-serif;
    line-height: 1.6;
    color: #333;
    margin: 0;
    padding: 0;
  }

  .publications-container {
    max-width: 800px; /* 容器最大宽度 */
    margin: 0 ;
  }

  /* 发表条目样式 */
  .publication-entry {
    display: flex;
    flex-direction: column; /* 垂直排列 */
    align-items: flex-start; /* 内容左对齐 */
    margin-bottom: 40px;
    border-bottom: 1px solid #ddd;
    padding-bottom: 20px;
  }

  /*.publication-entry:last-child {*/
  /*  border: none; !* 最后一个条目去掉底部边框 *!*/
  /*}*/

  .publication-image {
    width: 100%; /* 图片宽度占满容器 */
    max-width: 800px; /* 图片最大宽度 */
    height: auto;
    border-radius: 8px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px; /* 图片与文本之间的间距 */
  }

  .publication-info {
    flex: 1;
    text-align: left; /* 确保文本左对齐 */
  }

  .publication-title {
    font-size: 20px;
    font-weight: bold;
    line-height: 1.4;
    margin: 0;
  }

  .publication-authors {
    font-size: 16px;
    color: #555;
    margin: 10px 0;
  }

  .publication-conference {
    font-style: italic;
    font-size: 16px;
    color: #555;
  }

  .publication-buttons {
    display: flex;
    gap: 10px; /* 按钮之间的间距 */
    margin-top: 20px;
    flex-wrap: wrap; /* 如果按钮过多，自动换行 */
  }

  .publication-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-color: #f5f5f5;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 8px 8px;
    font-size: 24px;
    text-decoration: none;
    color: #333;
    transition: background-color 0.3s ease;
  }

  .publication-button:hover {
    background-color: #e0e0e0;
  }

  .publication-button img {
    width: auto; /* 按照原始宽度显示 */
    height: auto; /* 按照原始高度显示 */
    margin-right: 0px;
  }

  hr {
    border: 0;
    height: 1px;
    background: #ddd;
    margin: 20px 0;
  }
</style>

{% include base_path %}

<hr>
{% if site.author.googlescholar %}
  <div class="wordwrap">
    You can find detailed information about my publications on <a href="{{site.author.googlescholar}}">the Google Scholar profile</a>.
  </div>
{% endif %}

<div class="publications-container">
  <h2>Selected Publications</h2>
  <hr>

  <!-- Publication 1 -->
  <div class="publication-entry">
    <img src="{{ base_path }}/images/IDEA.png" alt="IDEA" class="publication-image">
    <div class="publication-info">
      <h3 class="publication-title">
        IDEA: Inverted Text with Cooperative Deformable Aggregation for Multi-Modal Object Re-Identification
      </h3>
      <p class="publication-authors">
        <b>Yuhao Wang</b>, Yongfeng Lv, Pingping Zhang*, Huchuan Lu
      </p>
      <p class="publication-conference">
        <b>IEEE/CVF Computer Vision and Pattern Recognition Conference 2025</b>
      </p>
      <div class="publication-buttons">
        <a href="https://arxiv.org/abs/2503.10324" class="publication-button">
          <img src="https://img.shields.io/badge/-Paper-blue?logo=microsoftpowerpoint&logoColor=B7472A&labelColor=white&color=F5F5F5&style=flat" alt="paper">
        </a>
        <a href="https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=WZvjVLkAAAAJ&citation_for_view=WZvjVLkAAAAJ:5nxA0vEk-isC" class="publication-button">
          <img src="https://img.shields.io/badge/dynamic/json?logo=Google%20Scholar&url=https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2F924973292%2F924973292.github.io%40google-scholar-stats%2Fgoogle_scholar_crawler%2Fresults%2Fgs_data.json&query=$.publications['WZvjVLkAAAAJ:5nxA0vEk-isC'].num_citations&labelColor=f6f6f6&color=9cf&style=flat&label=Citations" alt="Citations">
        </a>
        <a href="https://github.com/924973292/IDEA" class="publication-button">
          <img src="https://img.shields.io/github/stars/924973292/IDEA?style=social" alt="GitHub Stars">
        </a>
        <a href="{{ base_path }}/ciations/IDEA.md" class="publication-button">
          <img src="https://img.shields.io/badge/-BibTeX-blue?labelColor=white&color=F5F5F5&logo=latex&logoColor=008080" alt="BibTeX">
        </a>
      </div>
    </div>
  </div>

  <!-- Publication 2 -->
  <div class="publication-entry">
    <img src="{{ base_path }}/images/DeMo.png" alt="DeMo" class="publication-image">
    <div class="publication-info">
      <h3 class="publication-title">
        DeMo: Decoupled Feature-Based Mixture of Experts for Multi-Modal Object Re-Identification
      </h3>
      <p class="publication-authors">
        <b>Yuhao Wang</b>, Yang Liu, Aihua Zheng, Pingping Zhang*
      </p>
      <p class="publication-conference">
        <b>AAAI Conference on Artificial Intelligence 2025</b>
      </p>
      <div class="publication-buttons">
        <a href="https://arxiv.org/abs/2412.10650" class="publication-button">
          <img src="https://img.shields.io/badge/-Paper-blue?logo=microsoftpowerpoint&logoColor=B7472A&labelColor=white&color=F5F5F5&style=flat" alt="paper">
        </a>
        <a href="https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=WZvjVLkAAAAJ&citation_for_view=WZvjVLkAAAAJ:hqOjcs7Dif8C" class="publication-button">
          <img src="https://img.shields.io/badge/dynamic/json?logo=Google%20Scholar&url=https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2F924973292%2F924973292.github.io%40google-scholar-stats%2Fgoogle_scholar_crawler%2Fresults%2Fgs_data.json&query=$.publications['WZvjVLkAAAAJ:hqOjcs7Dif8C'].num_citations&labelColor=f6f6f6&color=9cf&style=flat&label=Citations" alt="Citations">
        </a>
        <a href="https://github.com/924973292/DeMo" class="publication-button">
          <img src="https://img.shields.io/github/stars/924973292/DeMo?style=social" alt="GitHub Stars">
        </a>
        <a href="{{ base_path }}/ciations/DeMo.md" class="publication-button">
          <img src="https://img.shields.io/badge/-BibTeX-blue?labelColor=white&color=F5F5F5&logo=latex&logoColor=008080" alt="BibTeX">
        </a>
      </div>
    </div>
  </div>

  <!-- Publication 3 -->
  <div class="publication-entry">
    <img src="{{ base_path }}/images/MambaPro.png" alt="MambaPro" class="publication-image">
    <div class="publication-info">
      <h3 class="publication-title">
        MambaPro: Multi-Modal Object Re-Identification with Mamba Aggregation and Synergistic Prompt
      </h3>
      <p class="publication-authors">
        <b>Yuhao Wang</b>, Xuehu Liu, Yang Liu, Aihua Zheng, Pingping Zhang*, Huchuan Lu
      </p>
      <p class="publication-conference">
        <b>AAAI Conference on Artificial Intelligence 2025</b>
      </p>
      <div class="publication-buttons">
        <a href="https://arxiv.org/abs/2412.10707" class="publication-button">
          <img src="https://img.shields.io/badge/-Paper-blue?logo=microsoftpowerpoint&logoColor=B7472A&labelColor=white&color=F5F5F5&style=flat" alt="paper">
        </a>
        <a href="https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=WZvjVLkAAAAJ&citation_for_view=WZvjVLkAAAAJ:ufrVoPGSRksC" class="publication-button">
          <img src="https://img.shields.io/badge/dynamic/json?logo=Google%20Scholar&url=https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2F924973292%2F924973292.github.io%40google-scholar-stats%2Fgoogle_scholar_crawler%2Fresults%2Fgs_data.json&query=$.publications['WZvjVLkAAAAJ:ufrVoPGSRksC'].num_citations&labelColor=f6f6f6&color=9cf&style=flat&label=Citations" alt="Citations">
        </a>
        <a href="https://github.com/924973292/MambaPro" class="publication-button">
          <img src="https://img.shields.io/github/stars/924973292/MambaPro?style=social" alt="GitHub Stars">
        </a>
        <a href="{{ base_path }}/ciations/MambaPro.md" class="publication-button">
          <img src="https://img.shields.io/badge/-BibTeX-blue?labelColor=white&color=F5F5F5&logo=latex&logoColor=008080" alt="BibTeX">
        </a>
      </div>
    </div>
  </div>

  <!-- Publication 4 -->
  <div class="publication-entry">
    <img src="{{ base_path }}/images/FusionReID.png" alt="FusionReID" class="publication-image">
    <div class="publication-info">
      <h3 class="publication-title">
        Unity is Strength: Unifying Convolutional and Transformeral Features for Better Person Re-Identification
      </h3>
      <p class="publication-authors">
        <b>Yuhao Wang</b>, Pingping Zhang*, Xuehu Liu, Zhengzheng Tu, Huchuan Lu
      </p>
      <p class="publication-conference">
        <b>IEEE Transactions on Intelligent Transportation Systems 2025</b>
      </p>
      <div class="publication-buttons">
        <a href="https://arxiv.org/abs/2412.17239" class="publication-button">
          <img src="https://img.shields.io/badge/-Paper-blue?logo=microsoftpowerpoint&logoColor=B7472A&labelColor=white&color=F5F5F5&style=flat" alt="paper">
        </a>
        <a href="https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=WZvjVLkAAAAJ&citation_for_view=WZvjVLkAAAAJ:Y0pCki6q_DkC" class="publication-button">
          <img src="https://img.shields.io/badge/dynamic/json?logo=Google%20Scholar&url=https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2F924973292%2F924973292.github.io%40google-scholar-stats%2Fgoogle_scholar_crawler%2Fresults%2Fgs_data.json&query=$.publications['WZvjVLkAAAAJ:Y0pCki6q_DkC'].num_citations&labelColor=f6f6f6&color=9cf&style=flat&label=Citations" alt="Citations">
        </a>
        <a href="https://github.com/924973292/FusionReID" class="publication-button">
          <img src="https://img.shields.io/github/stars/924973292/FusionReID?style=social" alt="GitHub Stars">
        </a>
        <a href="{{ base_path }}/ciations/FusionReID.md" class="publication-button">
          <img src="https://img.shields.io/badge/-BibTeX-blue?labelColor=white&color=F5F5F5&logo=latex&logoColor=008080" alt="BibTeX">
        </a>
      </div>
    </div>
  </div>

  <!-- Publication 5 -->
  <div class="publication-entry">
    <img src="{{ base_path }}/images/Sigma.png" alt="Sigma" class="publication-image">
    <div class="publication-info">
      <h3 class="publication-title">
        Sigma: Siamese Mamba Network for Multi-Modal Semantic Segmentation
      </h3>
      <p class="publication-authors">
        Zifu Wan, Pingping Zhang, <b>Yuhao Wang</b>, Silong Yong, Simon Stepputtis, Katia Sycara, Yaqi Xie
      </p>
      <p class="publication-conference">
        <b>IEEE/CVF Winter Conference on Applications of Computer Vision 2025</b>
      </p>
      <div class="publication-buttons">
        <a href="https://arxiv.org/abs/2404.04256" class="publication-button">
          <img src="https://img.shields.io/badge/-Paper-blue?logo=microsoftpowerpoint&logoColor=B7472A&labelColor=white&color=F5F5F5&style=flat" alt="paper">
        </a>
        <a href="https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=WZvjVLkAAAAJ&citation_for_view=WZvjVLkAAAAJ:qjMakFHDy7sC" class="publication-button">
          <img src="https://img.shields.io/badge/dynamic/json?logo=Google%20Scholar&url=https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2F924973292%2F924973292.github.io%40google-scholar-stats%2Fgoogle_scholar_crawler%2Fresults%2Fgs_data.json&query=$.publications['WZvjVLkAAAAJ:qjMakFHDy7sC'].num_citations&labelColor=f6f6f6&color=9cf&style=flat&label=Citations" alt="Citations">
        </a>
        <a href="https://github.com/zifuwan/Sigma" class="publication-button">
          <img src="https://img.shields.io/github/stars/zifuwan/Sigma?style=social" alt="GitHub Stars">
        </a>
        <a href="{{ base_path }}/ciations/Sigma.md" class="publication-button">
          <img src="https://img.shields.io/badge/-BibTeX-blue?labelColor=white&color=F5F5F5&logo=latex&logoColor=008080" alt="BibTeX">
        </a>
      </div>
    </div>
  </div>

  <!-- Publication 6 -->
  <div class="publication-entry">
    <img src="{{ base_path }}/images/EDITOR.png" alt="EDITOR" class="publication-image">
    <div class="publication-info">
      <h3 class="publication-title">
        Magic tokens: Select Diverse Tokens for Multi-Modal Object Re-Identification
      </h3>
      <p class="publication-authors">
        Pingping Zhang*, <b>Yuhao Wang</b>, Yang Liu, Zhengzheng Tu, Huchuan Lu
      </p>
      <p class="publication-conference">
        <b>IEEE/CVF Computer Vision and Pattern Recognition Conference 2024</b>
      </p>
      <div class="publication-buttons">
        <a href="https://openaccess.thecvf.com/content/CVPR2024/html/Zhang_Magic_Tokens_Select_Diverse_Tokens_for_Multi-modal_Object_Re-Identification_CVPR_2024_paper.html" class="publication-button">
          <img src="https://img.shields.io/badge/-Paper-blue?logo=microsoftpowerpoint&logoColor=B7472A&labelColor=white&color=F5F5F5&style=flat" alt="paper">
        </a>
        <a href="https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=WZvjVLkAAAAJ&citation_for_view=WZvjVLkAAAAJ:2osOgNQ5qMEC" class="publication-button">
          <img src="https://img.shields.io/badge/dynamic/json?logo=Google%20Scholar&url=https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2F924973292%2F924973292.github.io%40google-scholar-stats%2Fgoogle_scholar_crawler%2Fresults%2Fgs_data.json&query=$.publications['WZvjVLkAAAAJ:2osOgNQ5qMEC'].num_citations&labelColor=f6f6f6&color=9cf&style=flat&label=Citations" alt="Citations">
        </a>
        <a href="https://github.com/924973292/EDITOR" class="publication-button">
          <img src="https://img.shields.io/github/stars/924973292/EDITOR?style=social" alt="GitHub Stars">
        </a>
        <a href="{{ base_path }}/ciations/EDITOR.md" class="publication-button">
          <img src="https://img.shields.io/badge/-BibTeX-blue?labelColor=white&color=F5F5F5&logo=latex&logoColor=008080" alt="BibTeX">
        </a>
      </div>
    </div>
  </div>

  <!-- Publication 7 -->
  <div class="publication-entry">
    <img src="{{ base_path }}/images/TOPReID.png" alt="TOPReID" class="publication-image">
    <div class="publication-info">
      <h3 class="publication-title">
        TOP-ReID: Multi-spectral Object Re-Identification with Token Permutation
      </h3>
      <p class="publication-authors">
        <b>Yuhao Wang</b>, Xuehu Liu, Pingping Zhang*, Hu Lu, Zhengzheng Tu, Huchuan Lu
      </p>
      <p class="publication-conference">
        <b>AAAI Conference on Artificial Intelligence 2024</b>
      </p>
      <div class="publication-buttons">
        <a href="https://ojs.aaai.org/index.php/AAAI/article/view/28388" class="publication-button">
          <img src="https://img.shields.io/badge/-Paper-blue?logo=microsoftpowerpoint&logoColor=B7472A&labelColor=white&color=F5F5F5&style=flat" alt="paper">
        </a>
        <a href="https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=WZvjVLkAAAAJ&citation_for_view=WZvjVLkAAAAJ:IjCSPb-OGe4C" class="publication-button">
          <img src="https://img.shields.io/badge/dynamic/json?logo=Google%20Scholar&url=https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2F924973292%2F924973292.github.io%40google-scholar-stats%2Fgoogle_scholar_crawler%2Fresults%2Fgs_data.json&query=$.publications['WZvjVLkAAAAJ:IjCSPb-OGe4C'].num_citations&labelColor=f6f6f6&color=9cf&style=flat&label=Citations" alt="Citations">
        </a>
        <a href="https://github.com/924973292/TOP-ReID" class="publication-button">
          <img src="https://img.shields.io/github/stars/924973292/TOP-ReID?style=social" alt="GitHub Stars">
        </a>
        <a href="{{ base_path }}/ciations/TOPReID.md" class="publication-button">
          <img src="https://img.shields.io/badge/-BibTeX-blue?labelColor=white&color=F5F5F5&logo=latex&logoColor=008080" alt="BibTeX">
        </a>
      </div>
    </div>
  </div>
</div>

<div class="fun-section">
  <h2>🎉 感谢阅读！</h2>
  <p>如果你对这些研究感兴趣，欢迎关注我的 <a href="https://github.com/924973292">GitHub</a> 或查看我的 <a href="https://scholar.google.com/citations?user=WZvjVLkAAAAJ">Google Scholar</a>。</p>
  <p>此外，这里是我的微信，欢迎讨论：</p>

  <!-- 并列图片 -->
  <div class="image-container">
    <img src="{{ base_path }}/images/wechat.jpg" alt="微信" class="sub-image">
    <img src="https://imgs.xkcd.com/comics/machine_learning.png" alt="有趣的漫画：机器学习" class="sub-image">
  </div>

  <!-- 围栏装饰 -->
  <div class="fence-decoration"></div>
</div>

<style>
  /* 并列图片样式 */
  .image-container {
    display: flex;
    justify-content: space-between; /* 图片之间留有间距 */
    align-items: center; /* 垂直居中对齐 */
    margin-top: 20px;
  }
  .sub-image {
    max-width: 48%; /* 每张图片占容器的一半宽度 */
    height: auto;
    border-radius: 8px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  }

  /* 围栏装饰样式 */
  .fence-decoration {
    width: 100%;
    height: 20px;
    background: repeating-linear-gradient(
      90deg,
      #ddd,
      #ddd 10px,
      transparent 10px,
      transparent 20px
    );
    margin-top: 30px;
    border-radius: 4px;
  }
</style>
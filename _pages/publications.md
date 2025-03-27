---
layout: archive
title: "📖 Publications"
permalink: /publications/
author_profile: true
---

<style>
  body { font-family: 'Helvetica', Arial, sans-serif; }
  .publications-container { max-width: 1200px; margin: 0 auto; }
  .publication-entry {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 40px;
    align-items: center;
    border-bottom: 1px solid #ddd;
    padding-bottom: 20px;
  }
  .publication-entry:last-child { border: none; }
  .publication-entry img {
    width: 100%;
    max-width: 100px;
    border-radius: 8px;
    box-shadow: 0px 4px 8px rgba(0,0,0,0.1);
  }
  .publication-info {
    flex: 1;
    padding: 24px;
  }
  .publication-info b {
    font-size: 18px;
    line-height: 1.4;
  }
  .publication-info em {
    color: #555;
    font-size: 16px;
  }
  .publication-buttons a {
    margin-right: 10px;
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

<br>

<div class="publications-container">
  <h2>📝 Selected Publications</h2>
  <hr>

  <!-- Publication 1 -->
  <div class="publication-entry">
    <div>
      <img src="{{ base_path }}/images/IDEA.png" alt="IDEA">
    </div>
    <div class="publication-info">
      <div>
        <b>IDEA: Inverted Text with Cooperative Deformable Aggregation for<br>Multi-Modal Object Re-Identification</b>
      </div>
      <div style="margin: 10px 0;">
        <b>Yuhao Wang</b>, Yongfeng Lv, Pingping Zhang*,<br>
        Huchuan Lu
      </div>
      <div>
        <em>IEEE/CVF Computer Vision and Pattern Recognition Conference</em><br>
        <em><b>CVPR 2025</b></em>
      </div>
      <div class="publication-buttons" style="margin-top: 10px;">
        <a href="https://arxiv.org/abs/2503.10324">
          <img src="https://img.shields.io/badge/-Paper-blue?logo=microsoftpowerpoint&logoColor=B7472A&labelColor=white&color=F5F5F5&style=flat" alt="paper">
        </a>
        <a href="https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=WZvjVLkAAAAJ&citation_for_view=WZvjVLkAAAAJ:5nxA0vEk-isC">
          <img src="https://img.shields.io/badge/dynamic/json?logo=Google%20Scholar&url=https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2F924973292%2F924973292.github.io%40google-scholar-stats%2Fgoogle_scholar_crawler%2Fresults%2Fgs_data.json&query=$.publications['WZvjVLkAAAAJ:5nxA0vEk-isC'].num_citations&labelColor=f6f6f6&color=9cf&style=flat&label=Citations" alt="Citations">
        </a>
        <a href="https://github.com/924973292/IDEA">
          <img src="https://img.shields.io/github/stars/924973292/IDEA?style=social" alt="GitHub Stars">
        </a>
        <a href="{{ base_path }}/ciations/IDEA.md">
          <img src="https://img.shields.io/badge/-BibTeX-blue?labelColor=white&color=F5F5F5&logo=latex&logoColor=008080" alt="BibTeX">
        </a>
      </div>
    </div>
  </div>

  <!-- Publication 2 -->
  <div class="publication-entry">
    <div>
      <img src="{{ base_path }}/images/DeMo.png" alt="DeMo">
    </div>
    <div class="publication-info">
      <div>
        <b>DeMo: Decoupled Feature-Based Mixture of Experts for Multi-Modal<br>Object Re-Identification</b>
      </div>
      <div style="margin: 10px 0;">
        <b>Yuhao Wang</b>, Yang Liu, Aihua Zheng,<br>
        Pingping Zhang*
      </div>
      <div>
        <em>AAAI Conference on Artificial Intelligence</em><br>
        <em><b>AAAI 2025</b></em>
      </div>
      <div class="publication-buttons" style="margin-top: 10px;">
        <a href="https://arxiv.org/abs/2412.10650">
          <img src="https://img.shields.io/badge/-Paper-blue?logo=microsoftpowerpoint&logoColor=B7472A&labelColor=white&color=F5F5F5&style=flat" alt="paper">
        </a>
        <a href="https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=WZvjVLkAAAAJ&citation_for_view=WZvjVLkAAAAJ:hqOjcs7Dif8C">
          <img src="https://img.shields.io/badge/dynamic/json?logo=Google%20Scholar&url=https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2F924973292%2F924973292.github.io%40google-scholar-stats%2Fgoogle_scholar_crawler%2Fresults%2Fgs_data.json&query=$.publications['WZvjVLkAAAAJ:hqOjcs7Dif8C'].num_citations&labelColor=f6f6f6&color=9cf&style=flat&label=Citations" alt="Citations">
        </a>
        <a href="https://github.com/924973292/DeMo">
          <img src="https://img.shields.io/github/stars/924973292/DeMo?style=social" alt="GitHub Stars">
        </a>
        <a href="{{ base_path }}/ciations/DeMo.md">
          <img src="https://img.shields.io/badge/-BibTeX-blue?labelColor=white&color=F5F5F5&logo=latex&logoColor=008080" alt="BibTeX">
        </a>
      </div>
    </div>
  </div>

  <!-- Publication 3 -->
  <div class="publication-entry">
    <div>
      <img src="{{ base_path }}/images/MambaPro.png" alt="MambaPro">
    </div>
    <div class="publication-info">
      <div>
        <b>MambaPro: Multi-Modal Object Re-Identification with Mamba Aggregation<br>and Synergistic Prompt</b>
      </div>
      <div style="margin: 10px 0;">
        <b>Yuhao Wang</b>, Xuehu Liu, Yang Liu, Aihua Zheng,<br>
        Pingping Zhang*, Huchuan Lu
      </div>
      <div>
        <em>AAAI Conference on Artificial Intelligence</em><br>
        <em><b>AAAI 2025</b></em>
      </div>
      <div class="publication-buttons" style="margin-top: 10px;">
        <a href="https://arxiv.org/abs/2412.10707">
          <img src="https://img.shields.io/badge/-Paper-blue?logo=microsoftpowerpoint&logoColor=B7472A&labelColor=white&color=F5F5F5&style=flat" alt="paper">
        </a>
        <a href="https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=WZvjVLkAAAAJ&citation_for_view=WZvjVLkAAAAJ:ufrVoPGSRksC">
          <img src="https://img.shields.io/badge/dynamic/json?logo=Google%20Scholar&url=https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2F924973292%2F924973292.github.io%40google-scholar-stats%2Fgoogle_scholar_crawler%2Fresults%2Fgs_data.json&query=$.publications['WZvjVLkAAAAJ:ufrVoPGSRksC'].num_citations&labelColor=f6f6f6&color=9cf&style=flat&label=Citations" alt="Citations">
        </a>
        <a href="https://github.com/924973292/MambaPro">
          <img src="https://img.shields.io/github/stars/924973292/MambaPro?style=social" alt="GitHub Stars">
        </a>
        <a href="{{ base_path }}/ciations/MambaPro.md">
          <img src="https://img.shields.io/badge/-BibTeX-blue?labelColor=white&color=F5F5F5&logo=latex&logoColor=008080" alt="BibTeX">
        </a>
      </div>
    </div>
  </div>

  <!-- Publication 4 -->
  <div class="publication-entry">
    <div>
      <img src="{{ base_path }}/images/FusionReID.png" alt="FusionReID">
    </div>
    <div class="publication-info">
      <div>
        <b>Unity is Strength: Unifying Convolutional and Transformeral Features for<br>Better Person Re-Identification</b>
      </div>
      <div style="margin: 10px 0;">
        <b>Yuhao Wang</b>, Pingping Zhang*,  Xuehu Liu,<br>
        Zhengzheng Tu, Huchuan Lu
      </div>
      <div>
        <em>IEEE Transactions on Intelligent Transportation Systems</em><br>
        <em><b>TITS 2025</b></em>
      </div>
      <div class="publication-buttons" style="margin-top: 10px;">
        <a href="https://arxiv.org/abs/2412.17239">
          <img src="https://img.shields.io/badge/-Paper-blue?logo=microsoftpowerpoint&logoColor=B7472A&labelColor=white&color=F5F5F5&style=flat" alt="paper">
        </a>
        <a href="https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=WZvjVLkAAAAJ&citation_for_view=WZvjVLkAAAAJ:Y0pCki6q_DkC">
          <img src="https://img.shields.io/badge/dynamic/json?logo=Google%20Scholar&url=https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2F924973292%2F924973292.github.io%40google-scholar-stats%2Fgoogle_scholar_crawler%2Fresults%2Fgs_data.json&query=$[%27publications%27][%27WZvjVLkAAAAJ:Y0pCki6q_DkC%27][%27num_citations%27]&labelColor=f6f6f6&color=9cf&style=flat&label=Citations" alt="Citations">
        </a>
        <a href="https://github.com/924973292/FusionReID">
          <img src="https://img.shields.io/github/stars/924973292/FusionReID?style=social" alt="GitHub Stars">
        </a>
        <a href="{{ base_path }}/ciations/FusionReID.md">
          <img src="https://img.shields.io/badge/-BibTeX-blue?labelColor=white&color=F5F5F5&logo=latex&logoColor=008080" alt="BibTeX">
        </a>
      </div>
    </div>
  </div>

  <!-- Publication 5 -->
  <div class="publication-entry">
    <div>
      <img src="{{ base_path }}/images/Sigma.png" alt="Sigma">
    </div>
    <div class="publication-info">
      <div>
        <b>Sigma: Siamese Mamba Network for Multi-Modal<br>Semantic Segmentation</b>
      </div>
      <div style="margin: 10px 0;">
        Zifu Wan, Pingping Zhang, <b>Yuhao Wang</b>, Silong Yong,<br>
        Simon Stepputtis, Katia Sycara, Yaqi Xie
      </div>
      <div>
        <em>IEEE/CVF Winter Conference on Applications of Computer Vision</em><br>
        <em><b>WACV 2025</b></em>
      </div>
      <div class="publication-buttons" style="margin-top: 10px;">
        <a href="https://arxiv.org/abs/2404.04256">
          <img src="https://img.shields.io/badge/-Paper-blue?logo=microsoftpowerpoint&logoColor=B7472A&labelColor=white&color=F5F5F5&style=flat" alt="paper">
        </a>
        <a href="https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=WZvjVLkAAAAJ&citation_for_view=WZvjVLkAAAAJ:qjMakFHDy7sC">
          <img src="https://img.shields.io/badge/dynamic/json?logo=Google%20Scholar&url=https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2F924973292%2F924973292.github.io%40google-scholar-stats%2Fgoogle_scholar_crawler%2Fresults%2Fgs_data.json&query=$.publications['WZvjVLkAAAAJ:qjMakFHDy7sC'].num_citations&labelColor=f6f6f6&color=9cf&style=flat&label=Citations" alt="Citations">
        </a>
        <a href="https://github.com/zifuwan/Sigma">
          <img src="https://img.shields.io/github/stars/zifuwan/Sigma?style=social" alt="GitHub Stars">
        </a>
        <a href="{{ base_path }}/ciations/Sigma.md">
          <img src="https://img.shields.io/badge/-BibTeX-blue?labelColor=white&color=F5F5F5&logo=latex&logoColor=008080" alt="BibTeX">
        </a>
      </div>
    </div>
  </div>

  <!-- Publication 6 -->
  <div class="publication-entry">
    <div>
      <img src="{{ base_path }}/images/EDITOR.png" alt="EDITOR">
    </div>
    <div class="publication-info">
      <div>
        <b>Magic tokens: Select Diverse Tokens for Multi-Modal<br>Object Re-Identification</b>
      </div>
      <div style="margin: 10px 0;">
        Pingping Zhang*, <b>Yuhao Wang</b>, Yang Liu,<br>
        Zhengzheng Tu, Huchuan Lu
      </div>
      <div>
        <em>IEEE/CVF Computer Vision and Pattern Recognition Conference</em><br>
        <em><b>CVPR 2024</b></em>
      </div>
      <div class="publication-buttons" style="margin-top: 10px;">
        <a href="https://openaccess.thecvf.com/content/CVPR2024/html/Zhang_Magic_Tokens_Select_Diverse_Tokens_for_Multi-modal_Object_Re-Identification_CVPR_2024_paper.html">
          <img src="https://img.shields.io/badge/-Paper-blue?logo=microsoftpowerpoint&logoColor=B7472A&labelColor=white&color=F5F5F5&style=flat" alt="paper">
        </a>
        <a href="https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=WZvjVLkAAAAJ&citation_for_view=WZvjVLkAAAAJ:2osOgNQ5qMEC">
          <img src="https://img.shields.io/badge/dynamic/json?logo=Google%20Scholar&url=https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2F924973292%2F924973292.github.io%40google-scholar-stats%2Fgoogle_scholar_crawler%2Fresults%2Fgs_data.json&query=$[%27publications%27][%27WZvjVLkAAAAJ:2osOgNQ5qMEC%27][%27num_citations%27]&labelColor=f6f6f6&color=9cf&style=flat&label=Citations" alt="Citations">
        </a>
        <a href="https://github.com/924973292/EDITOR">
          <img src="https://img.shields.io/github/stars/924973292/EDITOR?style=social" alt="GitHub Stars">
        </a>
        <a href="{{ base_path }}/ciations/EDITOR.md">
          <img src="https://img.shields.io/badge/-BibTeX-blue?labelColor=white&color=F5F5F5&logo=latex&logoColor=008080" alt="BibTeX">
        </a>
      </div>
    </div>
  </div>

  <!-- Publication 7 -->
  <div class="publication-entry">
    <div>
      <img src="{{ base_path }}/images/TOPReID.png" alt="TOPReID">
    </div>
    <div class="publication-info">
      <div>
        <b>TOP-ReID: Multi-spectral Object Re-Identification<br>with Token Permutation</b>
      </div>
      <div style="margin: 10px 0;">
        <b>Yuhao Wang</b>, Xuehu Liu, Pingping Zhang*, Hu Lu,<br>
        Zhengzheng Tu, Huchuan Lu
      </div>
      <div>
        <em>Proceedings of the AAAI Conference on Artificial Intelligence</em><br>
        <em><b>AAAI 2024</b></em>
      </div>
      <div class="publication-buttons" style="margin-top: 10px;">
        <a href="https://ojs.aaai.org/index.php/AAAI/article/view/28388">
          <img src="https://img.shields.io/badge/-Paper-blue?logo=microsoftpowerpoint&logoColor=B7472A&labelColor=white&color=F5F5F5&style=flat" alt="paper">
        </a>
        <a href="https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=WZvjVLkAAAAJ&citation_for_view=WZvjVLkAAAAJ:IjCSPb-OGe4C">
          <img src="https://img.shields.io/badge/dynamic/json?logo=Google%20Scholar&url=https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2F924973292%2F924973292.github.io%40google-scholar-stats%2Fgoogle_scholar_crawler%2Fresults%2Fgs_data.json&query=$[%27publications%27][%27WZvjVLkAAAAJ:IjCSPb-OGe4C%27][%27num_citations%27]&labelColor=f6f6f6&color=9cf&style=flat&label=Citations" alt="Citations">
        </a>
        <a href="https://github.com/924973292/TOP-ReID">
          <img src="https://img.shields.io/github/stars/924973292/TOP-ReID?style=social" alt="GitHub Stars">
        </a>
        <a href="{{ base_path }}/ciations/TOPReID.md">
          <img src="https://img.shields.io/badge/-BibTeX-blue?labelColor=white&color=F5F5F5&logo=latex&logoColor=008080" alt="BibTeX">
        </a>
      </div>
    </div>
  </div>

</div>

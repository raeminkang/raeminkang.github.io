---
layout: null
---
{%- assign index = "" | split: "" -%}
{%- assign excluded_files = site.airklass_search.exclude.files -%}
{%- assign excluded_tags = site.airklass_search.exclude.tags | uniq -%}
{%- assign excluded_categories = site.airklass_search.exclude.categories | uniq -%}
{%- assign excluded_taxonomies = excluded_tags | concat: excluded_categories | uniq -%}
{%- for post in site.posts -%}
  {%- unless post.exclude_from_search == true or excluded_files contains post.path -%}
    {%- assign has_excluded_taxonomy = false -%}
    {%- for tag in post.tags -%}
      {%- if excluded_taxonomies contains tag -%}
        {%- assign has_excluded_taxonomy = true -%}
      {%- endif -%}
    {%- endfor -%}
    {%- for category in post.categories -%}
      {%- if excluded_taxonomies contains category -%}
        {%- assign has_excluded_taxonomy = true -%}
      {%- endif -%}
    {%- endfor -%}
    {%- unless has_excluded_taxonomy == true -%}
      {%- assign index = index | push: post | uniq -%}
    {%- endunless -%}
  {%- endunless -%}
{%- endfor -%}
{%- if site.airklass_search.include.pages == true -%}
  {%- for page in site.html_pages -%}
    {%- unless page.exclude_from_search == true or excluded_files contains page.path -%}
      {%- assign has_excluded_taxonomy = false -%}
      {%- for tag in page.tags -%}
        {%- if excluded_taxonomies contains tag -%}
          {%- assign has_excluded_taxonomy = true -%}
        {%- endif -%}
      {%- endfor -%}
      {%- for category in page.categories -%}
        {%- if excluded_taxonomies contains category -%}
          {%- assign has_excluded_taxonomy = true -%}
        {%- endif -%}
      {%- endfor -%}
      {%- unless has_excluded_taxonomy == true -%}
        {%- assign index = index | push: page | uniq -%}
      {%- endunless -%}
    {%- endunless -%}
  {%- endfor -%}
{%- endif -%}
{%- for collection in site.airklass_search.include.collections -%}
  {%- assign documents = site.documents | where:"collection",collection -%}
  {%- for document in documents -%}
    {%- unless document.exclude_from_search == true or excluded_files contains document.path -%}
      {%- assign has_excluded_taxonomy = false -%}
      {%- for tag in document.tags -%}
        {%- if excluded_taxonomies contains tag -%}
          {%- assign has_excluded_taxonomy = true -%}
        {%- endif -%}
      {%- endfor -%}
      {%- for category in document.categories -%}
        {%- if excluded_taxonomies contains category -%}
          {%- assign has_excluded_taxonomy = true -%}
        {%- endif -%}
      {%- endfor -%}
      {%- unless has_excluded_taxonomy == true -%}
        {%- assign index = index | push: document | uniq -%}
      {%- endunless -%}
    {%- endunless -%}
  {%- endfor -%}
{%- endfor -%}
var airklasssearch = {"pages": [
{%- for document in index -%}
  {%- assign tags = document.tags | uniq -%}
  {%- assign categories = document.categories | uniq -%}
  {%- assign taxonomies = tags | concat: categories | uniq -%}

  {%- assign author_name = document.author -%}  

  {%- capture article_html -%}
  <article class="hentry_index" style=" cursor: pointer;" OnClick="location.href='{{ site.url}}{{ document.url }}'">
    <div class="hentry_text">
      <header>
        {% if author_name %}
          {% for all_authors in site.authors %}
            {% if all_authors.name == author_name %}
              {% assign author = all_authors %}
            {% endif %}
          {% endfor %}
        {% else %}
          {% assign author = false %}
        {% endif %}
        <div class="entry-meta">
          <span class="entry-date date published updated">
            <time datetime="{{ document.date | date_to_xmlschema }}">
              <a href="{{ document.url }}">{{ document.date | date: "%Y.%m.%d" }}</a>
            </time>
          </span>
        </div>
        {% if document.link %}
          <h1 class="entry-title"><a href="{{ document.url }}" class="permalink" rel="bookmark" title="{{ document.title }} "><i class="fa fa-bookmark"></i></a> <a href="{{ document.link }}">{{ document.title }} </a></h1>
        {% else %}
          <h1 class="entry-title"><a href="{{ document.url }}" rel="bookmark" title="{{ document.title }} " itemprop="url">{{ document.title }} </a></h1>
        {% endif %}
      </header>
      <div class="article entry-content">
        {{ document.content| strip_html | truncatewords: 40 }}
        {% if document.content contains "<!-- more -->" %}
        <div align="center">
          <div markdown="0"><a href="{{ document.url }}" class="btn btn-info">Continue Reading ...</a></div>
        </div>
        {% endif %}
      </div><!-- /.entry-content -->
      <ul class="entry-meta inline-list entry-index-tag">
        {% assign tag_num = 0 %}
        {% for tag in document.tags %}
          {% if tag_num < 5 %}
            {% assign downcase_tag = tag | downcase %}
              <a href="{{ site.url }}/tags/{{ downcase_tag }}" title="Pages tagged {{ downcase_tag }}" class="tag"><span class="tag-text">{{ tag }}</span></a>
            {% assign tag_num = tag_num | plus:1 %}
          {% endif %}
        {% endfor %}
      </ul>
    </div>
    <div class="list-author-index">
      <a href="{{ site.url }}/authors/{{ author.name }}" style="text-align: center;">
        <img src="{{ site.url }}/images/authors/{{ author.name }}/{{ author.profileImage }}" class="author-img-index" alt="">
        <span class="author_nickname-index">{{ author.nickname }}</span>
      </a>
    </div>
  </article>
  {%- endcapture -%}

  {
    "title": {{ document.title | smartify | strip_html | normalize_whitespace | jsonify }},
    "text": {{ document.content | strip_html | normalize_whitespace | jsonify }},
    "tags": {{ taxonomies | join: " " | normalize_whitespace | jsonify }},
    "url": {{ document.url | relative_url | jsonify }},
    "article_html" : {{ article_html | jsonify }},
  }{%- unless forloop.last -%},{%- endunless -%}
{%- endfor -%}
]};
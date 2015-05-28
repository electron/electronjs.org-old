{% assign category = '' %}
{% for doc in site.docs %}
{% unless category == doc.category %}
  <h1>{{ doc.category }}</h1>
  {% endunless %}
  {% capture category %}{{ doc.category }}{% endcapture %}
- [{{ doc.title }}]({{ doc.url }})
{% endfor %}

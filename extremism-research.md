---
layout: default
title: Extremism Research
wide: true
---

<img class="img-large" src="{{ '/assets/images/teaching.webp' | relative_url }}" alt="">

<p><em>This page contains a brief description of my ongoing research on political extremism. All findings are preliminary.</em></p>

### Online Extremism and Text Analysis

<div class="bio-block">
  <div class="bio-text">
    <p>I actively study online extremist communities, building on my work with <a href="https://yonatanlupu.com/">Yonatan Lupu</a> at George Washington University and on my book-related research on the rise of the alt-right. As part of this work, I use machine learning classifiers to perform sentiment analysis, topic modelling, and over-time trend analysis on extremist text during major moments over the last decade, including the 2016 election and the 2021 Capitol Riot. This research has been <a href="{{ '/extremism-and-trump/' | relative_url }}">published in <em>Politics, Groups, and Identities</em> in 2022</a>, in addition to my book and several working papers. One of my active projects involves exploring trends in extremist corpora during the 2016 election. The accompanying chart shows topics derived from machine learning (LDA) on the neo-Nazi Daily Stormer website, showing how particularly fringe and extreme neo-Nazi topics declined during 2016 in favor of space praising and endorsing the then candidate.</p>
  </div>
  <div class="map-embeds">
    <div class="map-trigger" data-src="{{ '/interactives/daily_stormer_topics_interactive.html' | relative_url }}">
      <div class="map-preview"><iframe src="{{ '/interactives/daily_stormer_topics_interactive.html' | relative_url }}" tabindex="-1"></iframe></div>
      <div class="map-trigger-label">Click to view interactive chart — Daily Stormer Topic Trends</div>
    </div>
  </div>
</div>

### Hate Crime Analysis and Tracking

<div class="bio-block">
  <div class="bio-text">
    <p>Hate crimes serve as a concrete way of understanding ongoing extremist violence in the United States. However, there are many challenges with studying hate crimes, including under-reporting, ambiguity about motivation, and primarily a reliance on local law enforcement participation. One of my ongoing projects involves compiling hate crime data and using machine learning and time-series analyses to identify patterns and better understand these acts of violence. Some of my initial findings are being published in my forthcoming book.</p>
    <p>For a long time I have wrestled with the limitations to hate crime data. Many localities do not report hate crimes to the FBI, creating systematic underreporting in the data. While there are other reasons to question this data, such as underreporting at the incident level, one of my current projects is working with machine learning models to identify errors in the data and impute missing numbers. The attached map shows hate crimes by state, as reporting, as well as numbers that impute missing data from localities that do not report it. </p>
    <p>Similarly, my book project analyzes the impact of Donald Trump's 2016 presidential campaign on incidents of hate crimes. This period had a profound impact in stimulating racial violence in the United States, and that is reflected in hate crime increases. The accompanying figure models that impact, creating a counterfactual analysis to estimate how much hate crime dynamics changed during that period. While this cannot be solely attributed to Donald Trump, there is extensive literature examining how he motivated extremists (including my own published work) and I find that hate crimes increase at the day to day level during major moments in that campaign, such as his announcement of candidacy and his announcement of a plan to ban Muslims from entering the country.</p>
  </div>
  <div class="map-embeds">
    <div class="map-trigger" data-src="{{ '/interactives/hate_crimes_state_map_dagon.html' | relative_url }}">
      <img class="map-preview-img" src="{{ '/assets/images/hate-crimes-preview.png' | relative_url }}" alt="">
      <div class="map-trigger-label">Click to view interactive map — Hate Crimes by State</div>
    </div>
    <div class="map-trigger" data-src="{{ '/interactives/arima_counterfactual_v2_monthly_2002_interactive.html' | relative_url }}">
      <div class="map-preview"><iframe src="{{ '/interactives/arima_counterfactual_v2_monthly_2002_interactive.html' | relative_url }}" tabindex="-1"></iframe></div>
      <div class="map-trigger-label">Click to view interactive chart — ARIMA Counterfactual</div>
    </div>
  </div>
</div>

<div class="panel-dark">
  <p>Additional details of my recent professional experience can be found on <a href="{{ '/assets/pdfs/sean-long-cv-4.pdf' | relative_url }}"><strong>my CV</strong></a></p>
</div>

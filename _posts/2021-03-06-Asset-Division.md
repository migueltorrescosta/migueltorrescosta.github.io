---
layout: post
title: Asset Division
react_component: asset_division
category: [Interactive]
---

# Goal
Given a list of assets to be distributed among people, we aim to find a fair distribution taking into account that different people value items differently.
# Steps
1. Type in the list of people wanting to divide the items.
2. Add the items, and for each item an estimated price. <small>This does not need to be exact nor correct as the algorithm re estimates the prices, it just helps to initialize it with sensible values.</small>
3. Click on "Start" to freeze the above lists and start estimating.
4. Each round you will be shown different groupings of the items, and each person should select their favorite group each round. This will allow us to infer item valuations, and suggest the best item allocation.

*Warning: Refreshing the page will delete all progress.*

<div id="asset_division">
  <small>Loading Component</small>
</div>
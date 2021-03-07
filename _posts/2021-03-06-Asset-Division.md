---
layout: default
title: Asset Division
react_component: asset_division
category: [Tools]
---

# Goal
Given a list of assets to be distributed among people, we aim to find a fair distribution taking into account that different people value items differently.
# Steps
1. Add the items and an estimated price. This does not need to be correct, it just helps the algorithm with a starting point
2. Add the list of people wanting to divide the items
3. Freeze the above lists, so that we can start the division
4. Each round you will be shown different groupings of the items, and each person should select their favorite group each round. This will allow us to infer item valuations, and suggest the best item allocation.

<div id="asset_division">
  <small>Loading Component</small>
</div>
---
layout: post
title: Asset Division
react_component: asset_division
category: [Interactive]
---

# Goal
During inheritance procedures or other events of distribution of shared wealth, finding a satisfactory distribution can be challenging. Below we try to solve the issue based uniquely on the people involved and a list of items to be distributed, assuming that all have equal rights over the shared items.

# Technical Note

Assuming that each person has a dollar value for each item, not necessarily equal to the other members, the fact that there is a distribution accepted by everyone is assured by [Sperner's Lemma](https://en.wikipedia.org/wiki/Sperner%27s_lemma). This does not take into account possible psychological factors, such as only accepting a distribution if the other parties are not happy with it. Instead it assumes a pure profit maximizing approach.
# Steps
1. Type in the list of people wanting to divide the items.
2. Add the items, and for each item an estimated price. <small>This does not need to be exact nor correct as the algorithm re estimates the prices, it just helps to initialize it with sensible values.</small>
3. Click on "Start" to freeze the above lists and start estimating.
4. Each round you will be shown different groupings of the items, and each person should select their favorite group each round. This will allow us to infer item valuations, and suggest the best item allocation.

<div id="asset_division">
  <small>Loading Component</small>
</div>
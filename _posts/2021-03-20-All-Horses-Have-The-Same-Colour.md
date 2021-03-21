---
layout: post
title: All horses have the same colour
category: [Math]
---

[Mathematical Induction](https://en.wikipedia.org/wiki/Mathematical_induction) has 3 steps to it:

1. **Induction Hypothesis:** state the identity that we want to prove.
2. **Base Case:** prove that the property is true for $n=1$.
3. **Inductive Step:** show that if the property is true for $n$, then it must be true for $n+1$.

This works because the base case shows the property holds for $n=1$. Then we apply the inductive step to show that it holds for $n=2$, which implies that it holds for $n=3$, and so forth for all positive integers. As such, I will show the following statement:

### All horses have the same colour pattern

1. **Induction Hypothesis:** Any set of $n$ horses $ h_1, h_2,... h_n  $ have the same colour pattern.
2. **Base Case:** For $n=1$ we have a single horse, so there can be only one colour pattern.
3. **Inductive Step:** Assume that the statement is true for $n$. Take the set $h_1, h_2,..., h_n, h_{n+1} $ with $n+1$ horses. By our hypothesis the set of horses $h_1,...,h_n$ has a single colour pattern, and the set $h_2, ... , h_n, h_{n+1} $ also has a single colour pattern. Since this must be the colour pattern of their intersection set $h_2,...h_n$, then the entire set of $n+1$ horses has the same colour.

All three elements of mathematical induction are fulfilled. Can you spot the logical error?
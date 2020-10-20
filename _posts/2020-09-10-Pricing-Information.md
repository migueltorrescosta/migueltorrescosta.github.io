---
layout: post
title: Pricing Information
category: [Math, Coding]
published: true
---

Expected Opportunity Loss is a simple yet powerful way to price information, first introduced to me in Douglas' Hubbard's book "[How To Measure Anything](https://www.goodreads.com/book/show/444653.How_to_Measure_Anything)"

After reading it, the concept is simple: In many situations we have to make decisions under uncertainty, and as such after the fact we will discover that we could have made a better choice, that is, we missed an opportunity. By quantifying the likelihood of uncertain events, we can understand how much we expect to miss out and either make better decisions based on this value, or gather more information.

To start with an unrealistically simple event, you choose heads or tails, I flip a coin and if you got heads correct you receive $ 10€ $, if you got tails correct you receive $ 20€ $.

You have to choices:
- **You say Heads:** There's a 50% chance you get heads, which is optimal, so you lost out nothing, and a 50% chance you get tails, which would have made you $ 20€ $ richer, so your opportunity loss is $ .5 * (0) + .5 * (20) = 10 $
- **You say Tails:** There's a 50% chance you get tails, which is optimal, so you lost out nothing, and a 50% chance you get heads, which would have made you $ 10€ $ richer, so your opportunity loss is $ .5 * (0) + .5 * (10) = 5 $

Under a regret minimization system, this makes it clear that we want to choose Tails. This should have been obvious from before, but there is something we gained from this analysis. Under our optimal choice our expected loss is $ 5€ $, so if we paid any amount smaller than $ 5€ $ to know the coin in advance, we would expect higher returns than if we didn't take that option. In other words, knowing the outcome of this event is worth $ 5€ $ to us: any value above that and we will be missing out on some opportunity. Any value below it and we can increase our expected profits.

The above is detached from reality, but instead of heads or tails suppose we are talking about presidential candidates getting elected, or investing in a new stock. Add a few zeroes to the values above and we will get a realistic price for getting information on the outcome, by doing voting polls or other mechanisms available to our situation.

This can be done for any decisions made under uncertainty (as Douglas Hubbard argues in his book).

I have built an implementation of this Information Pricing mechanism in Python, available [on Github](https://github.com/migueltorrescosta/tutor/blob/master/ExpectedOpportunityLoss.ipynb). You can also [directly use Google Colab to play with it in the browser](https://colab.research.google.com/github/migueltorrescosta/tutor/blob/master/ExpectedOpportunityLoss.ipynb)
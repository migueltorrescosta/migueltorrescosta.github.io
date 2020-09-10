---
layout: post
title: Perfect Forecasting
category: [Math, System Design]
published: true
---

The chapters below are an aggregation of thoughts around the theme of forecasting, not necessarily in a ready to present form, for a problem of joint decision making. We have society wide problems we need to agree on, such as which drugs should be illegal, which laws to pass, whether to implement an Universal Basic Income, and many other potentially controversial topics, and these topics are informed on forecasts that might turn out to be or not accurate.

We have played around with many 

<p class="message">
  How can we aggregate multiple distinct forecasts into a single, more accurate, view.
</p>

# Table of Contents

* language
{:toc}

# Assumptions for this quest

The quest for perfect forecasting started a few years back, with a few assumptions from my side:

* All future events can be assigned a likelihood of happening, between 0% and 100% 
* Due to different backgrounds and contexts, incompatible perspectives exist about the likelihood of many of these events.
* The above can still be aggregated into a single "best" forecast using the correct system.

# Event outcomes are not just true and false

Before we start talking about perfect forecasting, we should understand what problems we would like to forecast. These could be statements such as:

* Facebook will go bankrupt before 2050
* A baby will be born outside of Earth before 2100
* A debt financial bubble will burst before 2025

These all seem rather trivial to check if they are true or not, however imagine the respective situations:

* Facebook incorporates under a parent company, similar to Google and Alphabet, which acquires WhatsApp, Instagram and other Facebook owned companies. These surpass Facebook in size so Facebook eventually closes, but not the parent company. You could argue that technically Facebook closed, but you could also argue that the entire group just rebranded under the parent company.
* Outer orbit flights become normal practice for long haul flights due to cheaper costs, and a baby is born in these flights. This is technically outside Earth's atmosphere, but Earth is still the closest space body, making the outcome unclear.
* A financial bubble bursts, but the origin is unclear.

From this there are 2 main action points I take in order to make:

* Event outcomes always have a grey area, so they might be true, false or unclear. We need to take this into account when building forecasting metrics.
* For better forecasting, it is worthwhile spending some time working out and removing the grey areas, by specifying terms and possible outcomes.

# We cannot observe the underlying probability of events, only the outcome

Assume everyday I launch a die, and we forecast the statement
<p class="message">
  The die will show the number 6 up
</p>
For practical purposes this can't be predicted with certainty. What we can do is still make the forecast that this statement has a $ \frac{1}{6} \approx 16.6 \% $ probability of being true. However after the event, we will either observe that the statement is true or not, we cannot observe the underlying probability.

As such overconfidence might be rewarded or punished based on chance. What we can ensure is that after enough of these events we can distinguish the best and worst forecasts by using reward functions that incentivize honesty. These are called [Proper scoring rules](https://en.wikipedia.org/wiki/Scoring_rule#Proper_scoring_rules).

# The value of better forecasts can be quantified

The best book on this topic is [How to Measure Anything: Finding the Value of Intangibles in Business](https://hubbardresearch.com/publications/how-to-measure-anything-book/) by Douglas W. Hubbard. Most of the book is spent on showing that all events that we care about can be measured, and convincingly so. A single chapter was dedicating to pricing information into a lot of detail. I have a [Python implementation using Jupyter](https://github.com/migueltorrescosta/tutor/blob/master/ExpectedOpportunityLoss.ipynb), however you can play with it from your browser using [Google Colab](https://colab.research.google.com/github/migueltorrescosta/tutor/blob/master/ExpectedOpportunityLoss.ipynb).

The key idea can be made clear by using an example taken from the Jupyter Notebook linked above. Assume that quantum computers might become a reality, and you can decide to invest on a startup in that area. For simplicity reasons, we will assume the 4 possible outcomes listed below, with full certainty of Return on Investment:

|                                                | Quantum computers are created before 2025 | Quantum computers are not created before 2025    |
|------------------------------------------------|-------------------------------------------|--------------------------------------------------|
| You invest in a Quantum computer company       | You get 10 million EUR in return          | You lose 1 million EUR (your initial investment) |
| You don't invest in a quantum computer company | You neither lose nor get money            | You neither lose nor get money                   |

Further, the probability of Quantum Computers being created before 2025 is $p$.

* If we invest in a Quantum Computer company, the Expected Loss is given by $p(0) + (1-p)(1) = (1-p)$ million EUR.
* If we don'tinvest, the expected loss is given by $ p(10) + (1-p)(0) = 10p $ million USD

As such we should invest iff $p>\frac{1}{11}$, as can be seen by this table of Opportunity Losses in million EUR:

| $p$                | $0$  | $\frac{1}{11}$   | $\frac{1}{2}$        | $1$   |
|--------------------|------|------------------|----------------------|-------|
| If we invest       | $1€$ | $\frac{10}{11}€$ | $\frac{1}{2}€$       | $0€$  |
| If we don't invest | $0€$ | $\frac{10}{11}€$ | $\frac{10}{2}€ = 5€$ | $10€$ |

The key idea is that whenever a decision is made under uncertainty, you will lose money by making a non optimal decision. The Expected Opportunity Loss can be measured, and be reduced by reducing uncertainty around the unknown variables. As such say that currently $p=\frac{1}{2}$. By the optimal table the optimal decision is to invest, with an expected opportunity loss of half a million EUR. This means that for the possibilition to know now whether Quantum computers will be created before 2025 or not, any price below half a million EUR will still give us a profit. This is the price of perfect information for this unknown.

Note that this is a simplified example of a much more complex world: Not only do we have to take into account way more variables, we also often don't have the possibility of fully reducing uncertainty, we can only get better measurements. Hubbard built a successful life around these measurements, and you can find more complex situations in the [Google Colab Notebook](https://colab.research.google.com/github/migueltorrescosta/tutor/blob/master/ExpectedOpportunityLoss.ipynb).

# Existing companies in this area

At this point the opportunity in this area consists in building a platform for anyone to submit statements of interest for themselves, and other users to submit forecasts. With this we can rank users according to their forecasting abilities, and use this metrics to build smart aggregate forecasts.

## Good Judgement Project

Arguably [Good Judgement Project (gjp)](https://goodjudgment.com/) are the first to the field, with the findings from their results being detailed in the book [Superforecasting: The Art and Science of Prediction](https://www.goodreads.com/book/show/23995360-superforecasting?ac=1&from_search=true&qid=q7eXoBLCRh&rank=1). The biggest shortcoming from gjp is that they filter all their questions for forecasting, and as such it is harder for users to submit questions they find interesting.

## Foretold

The backend and flexibility of inputs on [foretold](foretold.io) is impressive, however they lack an intuitive User Interface. As such the existing user base has stagnated.

## Metaculus

With the biggest user base, [Metaculus](https://www.metaculus.com) has existed since 2015 and focuses on building questions with very well defined outcomes, covering many different [categories](https://www.metaculus.com/questions/categories/). Since their approval process for new questions is incredibly thorough, they've built a backlog of non yet accepted questions that only promises to grow.

## Augur

Most of the forecasting platforms above have to conform to laws in their areas. [Augur](https://www.augur.net/) does not for the same reason that [Bitcoin](https://bitcoin.org) does not: They are decentralized peer 2 peer networks. Instead of focusing on forecasts, Augur creates pair of coins for each statement, which trade independently of each other. However, one coin is only worth anything if the statement is true, and the other coin follows the reverse. As such these coins are traded on the basis of expected values, and we can extract forecasts from the market based on this idea.

Since no company controls Augur (similarly to how no company controls Bitcoin), then Augur does not need to worry about any issues with insider trading, assassination markets or other nefarious systems that arise if platforms are left unregulated.

## Forecastapp aka Facebook

The latest entrant to the group, Facebook has launched [forecastapp](forecastapp.net/) to crowdsource forecasts. Given their dominance in the social network world this makes it easier for them to gather forecasters, however their existing page on forecasting is still very simple so in beta testing, meaning that it is still unclear how the platform will evolve.

# The Future

There's an opportunity here to improve this platform. Can you do it?

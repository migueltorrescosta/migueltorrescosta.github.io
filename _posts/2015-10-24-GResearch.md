---
layout: post
title: G-Research Competition
category: [Math, Coding]
---

Today Me, Matt and Aiken went for a high-frequency stock exchange competition. It was sponsored by G-Research ( It’s a fairly efficient way of hiring the best employees).
Unfortunately, we didn’t win (we won last year. Yay), but had we had more time we maybe would have.
<!--excerpt ends here-->
To give some context, the stock exchange market is a place where you have instruments (company shares) and their respective market price. The price is not an absolute thing but defined by the average value at which the shares are being exchanged (and somewhat related to how the company is doing in real-life, but during the competition we didn’t consider that). There was a central mechanism which kept a record of all the transactions and offers in the market, and each participant ( a company in real life) could propose to buy/sell instruments. Whenever there is a match (I sell at a lower price than you buy, or vice-versa), the transaction occurs at the price the first of us set. We also had a ‘Black Box’ which gave us relatively accurate predictions of future prices for the instruments. By the end, the participant who makes the most money wins. The entire code was done in C# (They, G-Research, scripted the structure of the program, and then we had to complete the rest with our own idea).

We started with a very simple idea: We take (A) the average of the last transactions, compare it to (B) our black box prediction and decide to buy if A \< B or sell if B \> A. This was to make sure everything was operational, and then we tried to make a quadratic approximation of the values of the past few seconds in order to predict in a long-ish term how the stock values will change, and then decide to buy/sell using that value (and completely bypass the black box given to us). Unfortunately when we implemented it we didn’t manage to make it run our algorithm in the given time, so we had to run the simpler idea (The maths for the quadratic approximation had all been worked out, though).

During the live test, all teams seemed to have a similar behavior (they all improved at the same time, had the same spikes and, in general, showed the same trends). Even though some correlation is expected (because increasing the value of the instruments increases the amount of money everyone has), usually there are differences in behaviors which we didn’t see, so I believe everyone used the same algorithm, which makes it kind of boring.

Still, I wonder how it would be if such a system was set up online where people had all the time in the world to implement their algorithm of choice (Which happens to be the actual real money high-frequency stock exchange market). No doubt that is a lot more fun than this mini version we did. I might pitch in on this some day.
---
layout: post
comments: true
categories: Coding
---

Today Me, Matt and Aiken went for a high-frequency stock exchange competition. It was sponsored by G-Research ( It’s a fairly efficient way of hiring the best employees).
Unfortunately, we didn’t win (we won last year. Yay), but (as with everything in life) more time would have made a great difference.

To give some context, the stock exchange market is a place where you have instruments (company shares) and their respective market price. The price is not an absolute thing but defined by the average value at which the shares are being exchanged (and somewhat related to how the company is doing in real-life, but during the competition we didn’t consider that). There was a central mechanism which kept a record of all the transactions and offers in the market, and each participant ( a company in real life) could propose to buy/sell instruments. Whenever there is a match (I sell at a lower price than you buy, or vice-versa), the transaction occurs at the price the first of us set. We also had a ‘Black Box’ which gave us relatively accurate predictions of future prices for the instruments. By the end, the participant who makes the most money wins. The entire code was done in C# (They, G-Research, scripted the structure of the program, and then we had to complete the rest with our own ideas).

We started with a very simple idea: We take (A) the average of the last transactions, compare it to (B) our black box prediction and decide to buy if A<B or sell if B>A. This was to make sure everything was operational, and then we tried to make a quadratic approximation of the values of the past few seconds in order to predict in a long-ish term how the stock values will change (using the sign of the coefficient of x**2, and then decide to buy/sell using that value (and completely bypassing the black box given to us). Unfortunately when we were implementing it we failed at making it run without bugs during the given time, so we had to run the simpler idea (The maths for the quadratic approximation had all been worked out, but implementing things always takes longer than expected).

During the live test, all teams seemed to have a similar behaviour (they all improved at the same time, had the same spikes and, in general, showed the same trends). Even though some correlation is expected (because increasing the value of the instruments increases the amount of money everyone has), usually there are differences in behaviours which were missing, so probably everyone used the same algorithm. This is disappointing in the sense that no original ideas were presented. I'll have to look into real life trading events to see sophisticated ideas.

![G-Research](../../../../photos/g-research.jpg){:class="img-responsive"}

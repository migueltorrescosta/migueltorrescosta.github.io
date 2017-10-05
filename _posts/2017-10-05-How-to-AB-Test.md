---
layout: post
title: How to AB Test
category: Math, Coding
published: true
---

This article is mildly related to [Google's Multi Armed Bandit experiments](https://support.google.com/analytics/answer/2844870).

# What are AB Tests?

Suppose that you have a problem (say you want to be the best [CoD](https://www.callofduty.com) player) and you have many possible solutions to your problem (namely different play styles, from the most agressive to the most deffensive, using different weapons, and many more alternatives). You have some ideas as to what are the best tactics, but you're not sure which one would fit you best (in this case best means the ratio between winning and losing matches).

What AB Tests propose is that you try out the different options for a length of time. After that time you will have played each option $$i$$ $$n_i$$ times and have won $$r_i$$ times. As such $$\frac{n_i}{r_i}$$ will give you an approximation of the win ratio for each alternative, and you can make an informed decision on what weapons to use, your play style, etc.

# Wouldn't it take ages to test all the different options?

Yes! That is why the multi armed bandits come into play. Say that you have a certain play style that you think is the best. You define it as your champion and play with it most of the time. However whenever there's an alternative you think might outplay your current option you bring it into the alternatives pool, and you play with it occasionally. Then you can start ruling out alternatives who have too few wins and betting more on the most promising alternatives, instead of waiting for a fixed amount of time / trials (and possibly losing sales). You need to be careful not too discard alternatives too soon (just because you lost 3 matches in a row doesn't mean it's a bad alternative, maybe it was just bad luck. Some people call this statistical significance), and similarly not to bet exclusively on the higher end alternatives.

# So how do you know which ones to use?

There are different suggestions for solving this problem. I would be interested in seeing AB Tests on AB Testing Techniques. However in this post I am going to provide one alternative that I think is best. Do comment below better alternatives / points I've missed.

# That's all good, but I haven't heard your solution yet.

Ok, say you have $$m$$ alternatives of play and you are about to play a match. In the past you have played $$n_i$$ matches with option $$i$$, of which you won $$r_i$$ matches. My current goal is to maximise the percentage of wins over a long time period. So I'll make this formal and I'll say I want to maximise my expected wins over the next $$k$$ matches.

<strong>Warning:</strong> I'm going to get more technical from here onwards.

We can then define our problem as one of finding the following function:

$$C(n,r,k) : (\mathbb{N}^{+})^{m}  \times (\mathbb{N}^{+})^{m}  \times \mathbb{N}^{+} \mapsto I_m $$

Which maps the vector $$n = (n_1,n_2,...,n_m) $$ and $$ r = (r_1,r_2,...,r_m) $$ of observations and wins and the integer $$k$$ to the integer $$i$$ in $$I_m = {1,2,...,m}$$ which is the best choice of alternative to play in order to maximise the long term win rate. In order to calculate this we need another function

$$V(n,r,k) : (\mathbb{N}^{+})^{m}  \times (\mathbb{N}^{+})^{m}  \times \mathbb{N}^{+} \mapsto \mathbb{R} $$

which maps the same knowledge to the expected number of wins in the next k matches assuming optimal choices. Now we do some maths:

# How likely am I to win if I choose to play with alternative $$i$$ ?

So you've had $$n_i$$ observations so far and $$r_i$$ wins. Let $$\theta$$ be the underlying likelihood of winning. Since we know $$n_i$$ and $$r_i$$ then we can estimate the pdf<sup>1</sup> of theta by using Bayes Theorem. Letting $$a=n_i$$, $$b=r_i$$ we first compute:

$$\mathbb{P}( X=b | \theta) = C^a_b \theta^b (1-\theta)^{a-b} $$

where $$X$$ is the sum of $$a$$ Bernoulli variables with probability $$\theta$$ and $$ C^a_b $$ is the number of ways of choosing b elements out of $$a$$ elements. From this we can get the pdf of the underlying $$\theta$$ by normalizing the pdf:

$$ f(\theta) = \frac{C^a_b \theta^b (1-\theta)^{a-b}}{\int_{0}^{1}C^a_b t^b (1-t)^{a-b}dt} = \frac{\theta^b (1-\theta)^{a-b}}{\int_{0}^{1} t^b (1-t)^{a-b}dt} $$

Now we can use the fact that

$$ \int_{0}^{1} t^a (1-t)^{b}dt = \frac{\Gamma (a+1) \Gamma (b+1)}{\Gamma (a+b+2)} $$

Since $$a$$ and $$b$$ are integers we use the fact that

$$ \Gamma(n+1) = n! $$

to get

$$ \int_{0}^{1} t^a (1-t)^{b}dt = \frac{a! b!}{(a+b+1)!} $$

so we can simplify $$ f(\theta) $$ to

$$ f(\theta) = \frac{\theta^b (1-\theta)^{a-b}}{\frac{a! (a-b)!}{(a+1)!}} = \frac{(a+1)! \theta^b (1-\theta)^{a-b}}{b! (a-b)!} $$

Finally we can get the probability of success in a single sale by integrating the chances of success over the pdf:

$$ \int_{0}^{1} \theta f(\theta) d\theta = $$

$$ \int_{0}^{1} \theta\frac{(a+1)! \theta^b (1-\theta)^{a-b}}{a! (a-b)!} d\theta = $$

$$ = \frac{(a+1)!}{b! (a-b)!} \int_{0}^{1}\theta^{b+1} (1-\theta)^{a-b}d\theta = $$

$$ = \frac{(a+1)!}{b! (a-b)!} \times \frac{(b+1)!(a-b)!}{((a-b)+(b+1)+1)!} = $$

$$ = \frac{(a+1)!}{b! (a-b)!} \times \frac{(b+1)!(a-b)!}{(a+2)!} = $$

$$ = \frac{(a+1)!(b+1)!(a-b)!}{b!(a-b)!(a+2)!} = $$

$$ = \frac{(a+1)!}{(a+2)!} \times \frac{(b+1)!}{b!} \times \frac{(a-b)!}{(a-b)!} = $$

$$ = \frac{1}{a+2} \times (b+1) \times 1 = $$

$$ = \frac{b+1}{a+2} $$

Awesomeness, all of the above simplifies to a really neat expression. If we played $$n_i$$ matches with $$r_i$$ wins then the chances of winning the next match is $$ \frac{r_i + 1}{n_i +2} $$ . As a bonus that expression works even if $$n_i = r_i = 0$$, since in that case we are assuming the pdf of $$\theta$$ to be the entropy maximising (and hence knowledge minimising) uniform distribution, in which case there's a $$\frac{1}{2}$$ chance of winning. On second thought, that is to be expected since the pdf and integral above only require $$n_i$$ and $$r_i$$ not to be negative, so there's that.

# Yay, now we know that the chances of success by chosing option $$i$$. How does this help us in making long term choices?

We have found the solutions of $$C$$ and $$V$$ for $$k=1$$, namely:

$$ C(n,k,1) = argmax_i \{ \frac{r_i + 1}{n_i + 1} \} $$

$$ V(n,k,1) = C(n,k,1) $$

Now we need to solve this same problem for $$ k>1 $$. If, for a given $$ k $$, we choose option $$i$$ , then our expected number of wins is given by

$$ \mathbb{P}(win) V(n+e_i,r+e_i,k-1) + \mathbb{P}(loss) V(n+e_i,r,k-1) = $$

$$ = \frac{r_i + 1}{n_i + 2} V(n+e_i,r+e_i,k-1) + \frac{n_i-r_i+1}{n_i+2} V(n+e_i,r,k-1) $$

As such we only need to find the $$argmax_i$$ of the expression above to find $$C(n,r,k)$$, and use that to find $$V(n,r,k)$$. Hence we have found a recursive formula for this, which can be solved somewhat efficiently (I still have to implement it) using [dynamic programming](https://en.wikipedia.org/wiki/Dynamic_programming)<sup>3</sup> since there will be many values computed repeatedly.

# Great, now what?

Well, I still need to implement this, probably in a python notebook that I'll leave available somewhere (only then can I check how feasable it is to compute this result). If it turns out to be computationally unfeasable (due to huge $$k$$'s) then I'll try to tackle it in a sligthly different way:

Instead of choosing one alternative at a time, I can choose them in a bulk of size $$b$$, and then decide how many of that bulk should be used in each alternative (effectively deciding a percentage to be used in each alternative). By having large bulk sizes I could avoid having absurd recursion depths of millions of function calls just to compute this value, instead going for recursion depths of hundreds with bulk sizes of tens of thousands (we can play with this numbers after implementation).

<strong>Footnotes</strong>

<sup>1</sup> pdf : probability distribution function - Wikipedia page

<sup>2</sup> $$e_i$$ : Unit vector along the $$i$$th dimension, i.e. $$(0,0,...,0,1,0,...,0)$$

<sup>3</sup> I never understood why they call it dynamic programming. There's nothing dynamic about this technique.
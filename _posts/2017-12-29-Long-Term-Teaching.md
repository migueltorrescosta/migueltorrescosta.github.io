---
layout: post
title: Long Term Teaching
category: [Teaching]
published: false
---

This post is a reflection on a [previous post]({{ site.url }}{{ site.baseurl }}{% link _posts/2017-03-17-Maths'-Ceiling.md %}) based on another post about a [Cognitive Breaking point](https://mathwithbaddrawings.com/2015/04/08/the-math-ceiling-wheres-your-cognitive-breaking-point/). I want to compare 2 examples on teaching. One can be called more academic, and the other less so.

## So what are we learning?

We are learning how to compute the maxima and minima of functions. And I will try to teach it in 2 different ways. My questions to you, the reader, are:

* Which one would you rather learn?
* Which one would you rather see taught in schools?

<!--excerpt ends here-->

### Alternative 1

This is how you compute the maxima and minima of a function $$ f:[a,b] \mapsto \mathbb{R} $$, with $$ a,b \in \mathbb{R} $$ :

1. You calculate its derivative $$ g = f' $$
2. You get the zeroes of $$ g = f' $$
3. We compare the values of $$ a $$, $$ b $$, and the zeroes of $$ g $$
4. To figure out which of those points are local maxima or minima we need to calculate $$ h = g' = f'' $$. If, for $$ x_0 \in [a,b], h(x_0)<0 $$ then $$ x_0 $$ is a local maxima. If $$ h(x_0)>0 $$ then $$ x_0 $$ is a local minima. If $$ h(x_0) = 0 $$ then we call $$ x_o $$ a saddle point (it is neither a maxima nor a minima).

To do all of the above we need to be able to compute derivatives. When calculating derivatives the following rules apply:

1. $$ (cf)' = cf' $$
2. $$ c' = 0 $$
3. $$ (f \pm g)' = f' \pm g' $$
4. $$ (fg)' = f'g + fg' $$
5. $$ (1/f)' = -\frac{f'}{f^2} $$
6. $$ (x^n)' = nx^{n-1} $$
7. $$ sin(x)' = cos(x) $$
8. $$ cos(x)' = -sin(x) $$
9. $$ f(g(x))' = f'(g(x))g'(x) $$

If you remember all of the rules above you will be able to present any question posed in the class and exam.

### Alternative 2

We are trying to find the local minima and maxima of a function $$ f:[a,b] \mapsto \mathbb{R} $$, with $$ a,b \in \mathbb{R} $$. One useful tool to do so is using derivatives. A derivative can be understood in the following way:

1. Picture the plot of the function $$ f $$
2. Choose a point $$ x $$
3. Take the line tangent to $$ f $$ at point $$ x $$
4. That line has a certain gradient $$ m(x) $$
5. This gradient is the derivative $$ f'(x) $$

In another words, the derivative is the gradient of change or speed of change at point x. As such we can relate this derivate to the notion of speed we built in Physics class. Now what is the second derivatite? It would be the gradient of change of speed. In other words we can think of it as acceleration. It turns out that derivatives are fairly easy to calculate for most functions, but we'll do so later on. Now, given this tool we have, we want to find out how to find the maxima and minima of $$ f $$. If you're picturing a maxima of $$ f $$ in front of you, then we can see that the tangent line must be parallel to the $$ x $$ axis. Another way to think about it is, like before, think of $$ x $$ as time and $$ f(x) $$ as your position. Being in a maxima or minima equates to being the most forward or the most backwards. SInce to get there we needed positive speed and to come back we need negative speed, than at the point when $$ f(x) $$ is maximal we need zero speed, so we need $$ f'(x) = 0 $$.

Hence the local maxima / minima is attained when $$ f'(x) = 0 $$. However there is one exception. The idea of me moving forwards then backwards from the maxima only works if I can indeed move before and after the time $$ x $$. In other words, if I'm at one of the endpoints $$ \{ a,b \} $$ the above does not apply. Hence we can have local minima/maxima when $$ f'(x) = 0 $$ or at $$ \{ a,b \} $$.

Se still need to figure out what are the maxima and what are the minima. Thinking in terms of gradients of slopes becomes hard at this point, but thinking in terms of acceleration makes things understandable. Say you are at a local maxima. Then your speed must be going from positive (moving forward) to negative (moving backwards), so your speed is decreasing, so you have negative acceleration. Hence $$ f''(x) < 0 $$, since we saw that $$ f'' $$ represents our acceleration. Similarly, at a local minima, $$ f''(x) > 0 $$. If neither is happenening then we are neither at a local maxima nor minima, so we will call it a saddle point. Imagina a saddle point to be a the point where your speed is zero (justo like in maxima or minima), but you are not accelerating away from your extrema. You might have gotten to an extreme and stayed there, or you might be moving forward, stop (speed is zero) and then start moving forward again, so it definitely isn't a maxima / minima.

Hence we figured out how to calculate the maxima and minima of a function $$ f $$

## What's your point about the alternatives then?

First, I want you to think about
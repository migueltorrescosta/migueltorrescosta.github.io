---
layout: post
title: Long Term Teaching
category: [Teaching]
published: true
---

This post is a reflection on a [previous post]({{ site.url }}{{ site.baseurl }}{% link _posts/2017-03-17-Maths'-Ceiling.md %}) based on our [Cognitive Breaking point](https://mathwithbaddrawings.com/2015/04/08/the-math-ceiling-wheres-your-cognitive-breaking-point/). I want to compare 2 examples on teaching. One can be called more academic, and the other less so.

## So what are we learning?

We are learning how to compute the maxima and minima of functions. And I will try to teach it in 2 different ways. My questions to you, the reader, are:

* Which one would you rather learn?
* Which one would you rather see taught in schools?

<!--excerpt ends here-->

### Alternative 1

This is how you compute the maxima and minima of a function $$ f:[a,b] \mapsto \mathbb{R} $$, with $$ a,b \in \mathbb{R} $$ :

1. You calculate its derivative $$ g = f' $$
2. You get the zeros of $$ g = f' $$
3. We compare the values of $$ a $$, $$ b $$, and the zeros of $$ g $$
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

In another words, the derivative is the gradient of change or speed of change at point x. As such we can relate this derivate to the notion of speed we built in Physics class. Now what is the second derivative? It would be the gradient of change of speed. In other words we can think of it as acceleration. It turns out that derivatives are fairly easy to calculate for most functions, but we'll do so later on. Now, given this tool we have, we want to find out how to find the maxima and minima of $$ f $$. If you're picturing a maxima of $$ f $$ in front of you, then we can see that the tangent line must be parallel to the $$ x $$ axis. Another way to think about it is, like before, think of $$ x $$ as time and $$ f(x) $$ as your position. Being in a maxima or minima equates to being the most forward or the most backwards. SInce to get there we needed positive speed and to come back we need negative speed, than at the point when $$ f(x) $$ is maximal we need zero speed, so we need $$ f'(x) = 0 $$.

Hence the local maxima / minima is attained when $$ f'(x) = 0 $$. However there is one exception. The idea of me moving forwards then backwards from the maxima only works if I can indeed move before and after the time $$ x $$. In other words, if I'm at one of the endpoints $$ \{ a,b \} $$ the above does not apply. Hence we can have local minima/maxima when $$ f'(x) = 0 $$ or at $$ \{ a,b \} $$.

We still need to figure out what are the maxima and what are the minima. Thinking in terms of gradients of slopes becomes hard at this point, but thinking in terms of acceleration makes things understandable. Say you are at a local maxima. Then your speed must be going from positive (moving forward) to negative (moving backwards), so your speed is decreasing, so you have negative acceleration. Hence $$ f''(x) < 0 $$, since we saw that $$ f'' $$ represents our acceleration. Similarly, at a local minima, $$ f''(x) > 0 $$. If neither is happening then we are neither at a local maxima nor minima, so we will call it a saddle point. Imagine a saddle point to be a the point where your speed is zero (just like in maxima or minima), but you are not accelerating away from your extrema. You might have gotten to an extreme and stayed there, or you might be moving forward, stop (speed is zero) and then start moving forward again, so it definitely isn't a maxima / minima.

Hence we figured out how to calculate the maxima and minima of a function $$ f $$ .

## What's your point about the alternatives then?

I will try to answer two questions about the above alternatives. First, which one would lead to better grades? Secondly, which one would be better for students development, however vague that might be?

For ease of writing lets assume student A was exposed to alternative 1 and student B to alternative 2.

Regarding the topic above, the grading method is fairly straightforward: We give functions to the students, and ask for them to tell us the local maxima and minima. Given that evaluation method, student A is most likely to provide better results. By consistent practice we trained A to give fast and correct answers. Student B, on the contrary, understands the idea of how to solve the problem but isn't actually able to apply the tools needed to solve the problem at hand, for lack of practice. At first glance student A seems to be better of. However, lets see some time into the future. A few years later, at work, a problem pops up that can be solved by finding the maxima or minima of a function. Which one is more likely to think of using what they learned to solve the problem? Student A isn't used to see the problem outside its well defined structure. You give him a function, you ask for the extrema, and he answers efficiently. Student B understands how the method comes about. He didn't memorize a set of steps, he understood why they work and why they are needed. He has a mental image of how the problem must be solved. Hence, when such a problem is presented, I believe he is more likely to think of how the solving technique worked. More importantly, if he needs to adapt the problem (say, he wants to find the extreme of the acceleration, so he needs to go all the way to the 4th derivative), he is more likely to be able to adapt the problem.

Foregoing my initial statement, teachers tend to teach both alternatives. First they show alternative 2 to provide understanding and context, and only then they move to alternative 1 which is the goal given. However I have a huge distaste for this approach due to to its poor long term returns. My view is that an extreme (a student A who learns exclusively via Alternative 1 and a student B who learns exclusively via alternative 2), then student B might only have Bs throught his students, while A will appearingly be better by having As initially, but once the gaps and lack of understanding in his learning style start to matter he will sink into Bs, Cs, and so on. That is why I'd rather have understanding than efficiency. As Math with Bad Drawings phrased it, we (teachers) don't want to put a ceiling on our students cognitive abilities, so we should always focus on Alternative 2. We shouldn't even start a student on Alternative 1 if he hasn't understood what is going on. I could go on about this, but at this point I'll just reccoment you read Math with Bad Drawings' [post](https://mathwithbaddrawings.com/2015/04/08/the-math-ceiling-wheres-your-cognitive-breaking-point/), which reiterates how essential it is for us to value understanding over test performance.
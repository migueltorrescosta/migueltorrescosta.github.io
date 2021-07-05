---
layout: post
title: Integrating Factors
category: [Math]
---

Integrating factors allow us to solve equations of the form $$ y' + P(x)y = Q(x) $$

# Intuition

The derivative of $$ e^{R(x)} $$ is $$ R'(x) e^{R(x)} $$ . This can be used to cancel out terms when we have anything of the form $$ y' + R'(x)y $$, and we can do so by setting $$P(x) = R'(x)$$ . By playing around with this idea the methodology below was developed.

# General Solution

We know that $$ y' + P(x)y = Q(x) $$. We want $$ R'(x) = P(x) $$, so we define $$ R(x) = \int P(x) dx $$ to get $$ y' + R'(x)y = Q(x) $$. By multiplying all terms of the equation by $$ e^{R(x)} $$ we get

$$
\begin{align}
Q(x) e^{R(x)} &= y'e^{R(x)} + yR'(x)e^{R(x)} \\
  &= y'e^{R(x)} + y(e^{R(x)})' \\
  &= (ye^{R(x)})'
\end{align}
$$

By integrating both sides and then rearranging for $$y$$, we get $$ ye^{R(x)} = \int Q(x) e^{R(x)} dx
\Leftrightarrow y = e^{-R(x)} \int Q(x) e^{R(x)}dx $$, with $$ R(x) = \int P(x) dx $$ as initially defined.

## Example

Many examples require harder integrals than the one that follows, however this example should give you an idea of how to proceed.

 $$ y' - \frac{y}{x} = x $$

 We have that $$ P(x) = -\frac{1}{x} $$, so $$ R(x) = \int P(x) dx = - \int \frac{1}{x} dx = -\ln{x} $$. Hence our Integrating Factor is $$ e^{-\ln{x}} = \frac{1}{x} $$, so we can rewrite our original equation by multiplying it by $$ \frac{1}{x} $$ as

$$
\begin{align}
\frac{y'}{x} - \frac{y}{x}\frac{1}{x} &= x \frac{1}{x} \\
\frac{y'}{x} - \frac{y}{x^2} &= 1 \\
\frac{y'}{x} - y \left ( \frac{1}{x} \right ) ' &= 1 \\
\left ( \frac{y}{x} \right ) ' &= 1
\end{align}
$$

Integrating both sides with respect to $$x$$ we get 

$$ \frac{y}{x} = \int 1 dx = x \Leftrightarrow y = x^2 $$

Confirming it within the original equation, we indeed get $$ y' - \frac{y}{x} = ( x^2 ) ' - \frac{x^2}{x} = 2x - x = x $$
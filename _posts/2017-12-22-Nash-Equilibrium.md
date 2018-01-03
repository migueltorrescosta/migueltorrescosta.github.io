---
layout: post
title: Nash's Equilibrium
category: [Game Theory, Math]
published: true
---

Lets play a game. It is called Rock Paper Scissors. After each round the winner receives 3£<sup>1</sup> from the loser. However I have an handicap. I can never ever play Scissors. How much should you pay to play this game?

<!--excerpt ends here-->

## Somewhere between 0£ and 3£ ?

True. If you payed 0£ you would not be expecting to lose money and if you paid 3£ you would certainly not make a profit, so you should pay something in between those values. However we can do better than that. We can find the specific value it is fair to pay.

## How?

Lets try to understand the game better. I can only play Rock or Paper. Hence the the possible outcomes for you are:

<table>
  <thead>
    <tr>
      <th></th>
      <th>Rock</th>
      <th>Paper</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Paper</td>
      <td>3£</td>
      <td>0£</td>
    </tr>
    <tr>
      <td>Scissors</td>
      <td>-3£</td>
      <td>3£</td>
    </tr>
    <tr>
      <td>Rock</td>
      <td>0£</td>
      <td>-3£</td>
    </tr>
  </tbody>
</table>

Since playing Rock is always worse for you than playing Paper we can assume you never play it, so the possible outcomes become:

<table>
  <thead>
    <tr>
      <th></th>
      <th>Rock</th>
      <th>Paper</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Paper</td>
      <td>3£</td>
      <td>0£</td>
    </tr>
    <tr>
      <td>Scissors</td>
      <td>-3£</td>
      <td>3£</td>
    </tr>
  </tbody>
</table>

If you always play Paper you never lose money and no matter what we play you will never win more than 3£ , so your initial guess of paying something between 0£ and 3£ makes sense. If you always played Paper then I would always play Paper and you would win no money. However you could change your tactic to playing Scissors in order to win the 3£, but then you will be at risk of losing 3£ if I play Rock.

## How does that help us reach the fair value?

In practice in every play we will choose each move independently and with certain probabilities. For instance, I will choose Rock with probability $$p$$ and Paper with probability $$1-p$$ (remember that the sum of the probabilities of all of our moves must add up to $$1$$). You will choose to play Scissors with a probability $$q$$ and Paper with probability $$1-q$$. As such the probabilities of each move are:

<table>
  <thead>
    <tr>
      <th></th>
      <th>Rock</th>
      <th>Paper</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Paper</td>
      <td>$$p(1-q)$$</td>
      <td>$$(1-p)(1-q)$$</td>
    </tr>
    <tr>
      <td>Scissors</td>
      <td>$$pq$$</td>
      <td>$$(1-p)q$$</td>
    </tr>
  </tbody>
</table>

Let $$L(p,q)$$ be how much money you expect to make given the above probabilities. Then

$$L(p,q) = $$

$$ = [pq(-3)] + [(1-p)q(3)] + [p(1-q)(3)] + [(1-p)(1-q)(0)] = $$

$$ =  -3pq + 3(1-p)q + 3p(1-q) = $$

$$ = 3(p + q - 3pq) $$

Cool. Now we have a function giving us how much you expect to get after a game. I will try to choose $$p$$ so that $$L$$ is minimal, and you will try to choose $$q$$ so that $$L$$ is maximal. Nash's work (and the reason for this post's title) was about proving that this equilibrium always exists for non-deterministic games (and this is called Nash's Equilibrium)

## So how do we choose $$p$$ and $$q$$ ?

We have to go back to finding maxima and minima of functions (if your high school math is fresh you should probably skip this section). We have to choose $$p$$ in the interval [0,1]. Therefore either there is a local maxima somewhere in the middle or the maximum is attained at the endpoints. To find interior maxima we will use derivatives: If $$(p_0,q_0)$$ is a maxima or minima, then the derivative of $$L$$ with respect to $$p$$ vanishes (i.e. equals zero) at $$p_0$$. Doing the actual computations we get:

$$ 0 = \frac{\partial }{\partial p}(L) = $$

$$ = \frac{\partial }{\partial p}(3(p+q-3pq)) = $$

$$ = 3(1 - 3q) \implies  q = \frac{1}{3} $$

Similarly,

$$ 0 = \frac{\partial }{\partial q}(L) \implies q = \frac{1}{3} $$

Hence our local maxima / minima can be found when $$ p \in \{ 0,\frac{1}{3},1 \} $$ and $$ q \in \{ 0,\frac{1}{3},1 \} $$.

Visually the expected returns for you (i.e. $$L(p,q)$$ ) are:

<table>
  <thead>
    <tr>
      <th>$$q \setminus p$$</th>
      <th>$$0$$</th>
      <th>$$\frac{1}{3}$$</th>
      <th>$$1$$</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>$$0$$</td>
      <td>$$0$$(A)</td>
      <td>$$1$$(B)</td>
      <td>$$3$$(C)</td>
    </tr>
    <tr>
      <td>$$\frac{1}{3}$$</td>
      <td>$$1$$(D)</td>
      <td>$$1$$(E)</td>
      <td>$$1$$(F)</td>
    </tr>
    <tr>
      <td>$$1$$</td>
      <td>$$3$$(G)</td>
      <td>$$1$$(H)</td>
      <td>$$-3$$(I)</td>
    </tr>
  </tbody>
</table>

I can choose the value of $$p$$, which amounts to choosing the column we are in. Since I want to minimize your returns (i.e. minimize $$L$$) then I am happy if, for any line you choose, I choose the column with minimal $$L$$. Hence my choice will end up being one of (A),(D),(E),(F),(I). (A) and (I) because they are the minimum in their respective rows, and (D),(E),(F) because they are all equal in their row.

Similarly you get to choose $$q$$ i.e. you choose the row. In order to maximize $$L$$, you will only be happy with (C) and (G) since they are the maximum in their respective columns, or (B),(E),(H), for a final choice in the set (C),(B),(E),(H),(G).

Looking at the 2 sets we chose: $$ \{A,D,E,F,I \} $$ and $$ \{ C,B,E,H,G \} $$ we notice that they only intersect in E (Nash proved that when following this method there will always be an intersection. If you want to know how I would recommend reading his paper, though it is way more advanced than this post). As such when we both play optimally we will be in cell (E).

## I lost track. How does this relate to the original problem?

We saw that If we both play optimally then we will end up in cell (E), where $$ p = \frac{1}{3} = q $$ . Since $$p$$ is my probability of playing Rock and $$q$$ your probability of playing Scissors, then we found the optimal strategy for both of us.

Also, for those probabilities, $$ L(\frac{1}{3},\frac{1}{3}) = 1 $$ so you will have an average return of 1£.

Therefore, going back to the original question, paying 1£ would make it a fair game. Anything less than that and you will most likely profit, anything more than that and you will most likely lose money.

<sub><sup>1</sup> You are probably wondering why I choose 3£ instead of 1£ . During the calculations we end up having to divide that value by 3, so this way I have to work with less fractions.</sub>
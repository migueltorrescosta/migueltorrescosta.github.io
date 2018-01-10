---
layout: post
title: Deadly Candy
category: [Math, Puzzle]
published: true
---

The King has imprisoned Mgumbo Jones Junior for attempted regicide. As further punishment, the King gives Jones a challenge that he must complete, or else he will face death: The King puts 1000 candies before Jones, and tells him some of them are poisoned. Jones' challenge is to determine which ones are poisoned. Jones has an infinite supply of dear friends who are willing to put their lives on the line for him. Jones is allowed 1 round of giving his friends licks of the candies, after which he may observe which of them die. After that, he must pick out the poisoned candy or else he himself will be killed. Jones wants to minimise the number of friends he involves in this. How many friends need to lick the candies to assure Jones' survival if

1. The king assures him that a single candy is poisoned?
2. The king assures him that two candies are poisoned?

<!--excerpt ends here-->

# Shall we do the first problem first?

Sure. So we know that a single candy is poisoned, so there are 1000 possible 'solutions' i.e. possibilities. Every time a friend licks a candy he either dies or not, and that will reduce the amount of posibilities. If the person dies we will reduce it to a certain number $$ k $$ given by the number of candies he licked and if he doesn't the number of possibilities is reduced to $$ 1000 - k $$. In order to minimize the worst possible scenario, we can have a friend lick $$\frac{1000}{2} = 500 $$ candies so that regardless of the outcome, the number of possibilities is halved. By repeating this process we follow the sequence 1000, 500, 250, 125, 63, 32,16,8,4,2,1 which consists of 10 halvings. As such we only need 10 friends in order to find the poisoned candy (and even better, we only expect 5 of them to die).

# Cool, that was easy.

We are not done yet. We managed to find a solution that only requires 10 people. However we still have to show that it is impossible with less people. In order to prove that let us assume that the answer could be achieved with only 9 people. As such there are only $$ 2^9 = 512 $$ possible answer combinations. However we have $$ 1000 $$ candies so there are candies whose poisonedness cannot be differentiated by the answers, so 9 friends is not enough. Hence we are done.

# Finally, shall we move to problem 2?

Yes. This one is a bit trickier. In problem $$ 1 $$ we used the fact that at each friend's licking we were able to split the set of possibilities in 2, the candies that were licked and the ones that were not. However in problem $$ 2 $$ that can't be easily done. If a person licks $$ k $$ candies and does not die we managed to reduced the list of possibly poisoned candies to $$ 1000 - k $$ since none of the candies licked could have been poisoned. However if he dies we know that 1 of the candies he licked were poisoned, but we cannot be sure if both are in the set he licked or if there is one poisoned candy in each lick. So that doesn't work.

# Do you have a better approach?

There are $$ {1000\choose 2} = \frac{ 1000 * 999 }{2} = 499.550 $$ possible solutions. By testing each one by having a friend lick all the candies except the pair chosen we have found a solution that only requires $$ 499.500 $$ friends. This is absurdly high, but now we know that the answer is in the range $$ [1,499500] $$, which is a starting point.

We can make this bound even better. By having each friend lick a single candy, we can test each candy individually for poisonedness with only 1000 friends. As such the minimum number of friends needed is in the range [1,1000], which is way better than before. Still not ideal though.

As mentioned before, this problem becomes trickier because when a friend licks a set of candies and dies, we are not sure of whether that set has a single candy or two. We can get around that problem by having a friend lick a set $$ k $$ of candies and another friend lick the complementary set of candies, that is, all the candies but the $$ k $$ ones licked previously. This way we know:

If one friend days, both candies are in the set licked by that friend.
If both of them die, there is a candy in each set so we reduce the question to 2 versions of problem 1.

Let's make this formal to see the value we get. Let $$ M_k(n) $$ be the minimum number of friends needed to know which $$ k $$ of the $$ n $$ candies are poisoned. By generalising the solution to problem 1 above we know that $$ M_1(k) = \lceil \log_2 (k) \rceil $$. If that formula is hard to digest just think that $$ M_1(k) $$ is the smallest integer $$ N $$ such that $$ 2^N \geq k $$, and as seen above $$ 10 $$ is the least integer $$ N $$ such that $$ 2^k \geq 1000 $$ since $$ 2^{10} = 1024 > 1000 > 512 = 2^9 $$. Now we need to find $$ M_2(k) $$.

If we follow the strategy above by dividing the set into 2 equally sized complementary groups, and have each friend lick one of them, then we deduce that 

$$ M_2(2k) \leq 2 + \max \{ M_2(k), 2M_1(k) \} $$
 
We get this formula because:

* We needed to add 2 since we used 2 friends to lick the different candies.
* $$ M_2(k) $$ is the number of licks needed in the future if only a friend dies, since we will know that both candies will be in a set of size $$ k $$.
* $$ 2M_1(k) $$ is the number of licks needed in the future if both die, since we get 2 sets of size $$ k $$, each with one poisoned candy.
* We take the maximum of the 2 values above since we assume a worst case scenario.
* We get an inequality instead of an equation because there might be better strategies that we are not thinking of, so all we are finding is an upper bound for $$ M_2(k) $$.

Also, note that the above inequality only works for even numbers. I've done that so that I don't have to worry about getting  non-integers when dividing by 2, but it might give us a better i.e. smaller upper bound.

We know that $$ M_2(2) = 0 $$, because if we only have 2 candies, both of them being poisoned, then we already know the answer and we need noone to lick the candies. Using the inequality above and the formulas:

$$ M_2(2^1) = M_2(2) = 0 $$

$$ M_1(2^k) = 2(k-1) $$

We can deduce that:

$$ M_2(2^2) \leq 2 + \max \{ M_2(2^1), 2M_1(2^1) \} = 2 $$

$$ M_2(2^3) \leq 2 + \max \{ M_2(2^2), 2M_1(2^2) \} = 4 $$

$$ M_2(2^4) \leq 2 + \max \{ M_2(2^3), 2M_1(2^3) \} = 6 $$

From the above it seems like $$ M_2(2^k) < 2(k-1) $$. We have checked the base cases, that is, $$ M_2(2^k) < 2(k-1) $$ for $$ k \leq 4 $$. Then we can prove the inequality by induction since

$$ M_2(2^{k+1}) \leq 2 + \max \{ M_2(2^k), 2M_1(2^k) \} = $$

$$ = 2 + \max \{ M_2(2^k), 2(k-1) \} \leq $$

$$ \leq 2 + \max \{ 2(k-1), 2(k-1) \} = $$

$$ = 2 + 2(k-1) = 2k $$

Hence we have proved that $$ M_2(2^k) \leq 2k $$. In particular $$ M_2(1024) = M_2(2^{10})\leq 2*10 = 20 $$.

So we we have $$ 2 $$ poisoned candies amongst a set of $$ 1024 $$ then we need at most $$ 20 $$ friends. Since $$ 1000<1024 $$ then we know that $$ M_2(1000) < M_2(1024) = 20 $$, so the answer to our second problem is in the range [1,20].

This is much better, but we can only improve our upper bound up to $$ M_2(1000) $$. As such we need a way to find a lower bound. Following the idea we used in problem one, lets assume that we could find the poisoned candies with $$ k $$ friends. Since for each friend we have only 2 possibilities ( dead or alive), we get a total of $$ 2^k $$ possible outcomes for our 'tests'. Since we are choosing 2 candies out of 1000, there are $$ 1000\choose2 $$ ways of doing it, for a total of $$ 499500 $$. As such we need that $$ 2^k \geq 499500 $$ . Taking the logarithm we get $$ k \geq \log_2(499500) = 18.93 $$, so $$ k \geq 19 $$ . Hence we have reduced the possible answers to the set [19,20].

## So how do we know each of those 2 numbers is the answer?

I don't know, I haven't worked that out yet. Tell me if you find the answer. In the meantime I will leave you with this quasi-answer.


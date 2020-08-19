---
layout: post
title: Predicting Product Conversion Rates
category: [Math]
published: true
---

## Given the past success of a product, how can we try to predict its future success?

It seems like a harmless question and not too hard. A product which sold 20% of the times it was shown to a costumer has a 20% chance of being bought if we show it to the next costumer, right?

Well, not exactly. In the above example we are using the formula $$ \frac{S}{V} $$, where $$ S $$ is the number of Sales and $$ V $$ the number of times a product was shown (i.e. visits). If a product has no sales yet, it is a bit unfair to say that it has zero chances of being bought.

## So how would you solve that problem?

<!--excerpt ends here-->

The reasoning we will follow is the following:
1. Let $$ X $$ be a random variable representing the 'true' probability of a product converting. I'm using true as an intrinsic property of the product. We can also view it as the conversion rate of the product as the number of visits goes to infinity.
2. We will find the pdf $$f(\theta) $$ of $$ X $$
3. We will find the expectation of the product converting, i.e. $$ \mathbb{E}[X] $$

All of the steps above are the same as the ones on the previous post on [AB Testing]({{site.baseurl}}{% link _posts/2017-10-05-How-to-AB-Test.md %}). As such I will skip the calculations and go directly to the results:

1. $$ X $$ will follow a [Beta distribution](https://en.wikipedia.org/wiki/Beta_distribution)
2. Letting $$ S $$ be sales and $$ N = V-S $$ be non-sales, i.e. visits without a sale, $$ f(\theta) = \frac{\Gamma(S+N+2)}{\Gamma(S+1)\Gamma(N+1)} x^S (1-x)^N$$
3. $$ \mathbb{E}[X] = \int_0^1{\frac{\Gamma(S+N+2)}{\Gamma(S+1)\Gamma(N+1)} x^S (1-x)^Ndx} = \frac{S+1}{N+2} $$

Hence for a product with $$ V $$ visits and $$ N $$ observations we should expect future clients to buy the product with probability $$ \frac{S+1}{N+2} $$.

## Cool, we are done then.

Not yet. Depending on the market / platform where you are selling products, you might have very different conversion rates. Usually they are fairly below 50%. Lets assume for a second that all products we are selling average to a conversion rate of 10%. When a new product comes ($$ S = 0 $$ and $$ N = 0 $$) then we would predict a future conversion rate of 50%, but intuitively a prediction of 10% should be better.

## Yes, that is a problem. How do you fix that?

If we look back at step 2 above we have made subtle assumption: we assumed that we have no prior information about our hidden random variable $$ X $$. If we know nothing about the product, then we are indirectly assuming that $$ X $$ is uniform on $$ [0,1] $$ until we get new information. If you are wondering why assuming no knowledge about $$ X $$ leads us to assuming $$ X $$ is uniform on $$ [0,1] $$, the reason is that the best measure of our knowledge about a system is [entropy](https://en.wikipedia.org/wiki/Entropy_(information_theory)) and the uniform distribution maximizes entropy. If you want to learn more about this I would recommend reading through Shannon's A Mathematical Theory of Communication. In the meantime I will go back to the question at hand.

We assumed we had no knowledge about $$ X $$ when we fact we do. As such we can use [Bayesian probability](https://en.wikipedia.org/wiki/Bayesian_probability). The main idea of Bayesian probability is that we have a certain distribution $$ X_0 $$ for a hidden random variable, and as time passes we make observations, in our case about sales or lack thereof, and update our estimates $$ X_t $$ as time $$ t $$ moves forward. 

## And how do we do that?
We will use [Bayes' Theorem](https://en.wikipedia.org/wiki/Bayes%27_theorem), which states that $$ \mathbb{P}(A|B) = \frac{\mathbb{P}(B|A)}{\mathbb{P}(B)}\mathbb{P}(A) $$. In other words the probability of $$ A $$ being true is updated after observation $$ B $$ by the factor $$ \frac{\mathbb{P}(B|A)}{\mathbb{P}(B)} $$. That formula works well for discrete cases, but for continuous cases we get a slightly different formula:

If $$ f(\theta) $$ is our distribution as above and $$ g(\theta) $$ our initial knowledge of the distribution, then our updated knowledge is given by $$ f(\theta)g(\theta) $$ normalized, since a pdf must always integrate to 1. In a no knowledge situation we get $$ g \equiv 1 $$ so $$ f(\theta)g(\theta) = f(\theta)*1 = f(\theta) $$ as we concluded before. However in our case we have the knowledge that the average product sells 10% of the time.

## How do we translate that into the function $$ g $$ ?

We will have to use our historic data. Assuming we have sold enough different products, then each product has its own conversion rate. As such the set of all our products has its own distribution. If we were to pick one product at random from our inventory then we would be taking a product with conversion rate modeled by that distribution. Hence we can think of adding a new product similar to taking the conversion rate from a product in our inventory. As such we have $$ g $$ and $$ f $$.

## So we just multiply the 2 distributions, normalize and we are done?

That will certainly give us an estimation way better than our initial estimate. However there is one problem. Since our inventory might be big, $$ g $$ will probably be defined by a big array and multiplying it by f and then computing $$ \mathbb{E}[f(\theta)g(\theta)] $$ might be computationally expensive.

## Can we simplify it?

There is one trick that might work, depending on our product distribution. We can try to model our initial distribution $$ g $$ as a beta distribution. We are getting now exact with our calculations so, depending on the sales data, this might work or not. If it works then we approximate $$ g $$ with a beta distribution with $$ S_o $$ sales and $$ N_o $$ non sales. Then (setting $$ x = \theta $$ for easier typing, and letting $$ \propto $$ mean proportional to) we get

$$ \frac{f(x)g(x)}{\int_0^1{f(x)g(x)dx}} \propto $$

$$ \propto f(x)g(x) \propto$$

$$ \propto \frac{\Gamma(S+N+2)}{\Gamma(S+1)\Gamma(N+1)} x^S (1-x)^N \frac{\Gamma(S_0+N_0+2)}{\Gamma(S_0+1)\Gamma(N_0+1)} x^{S_0} (1-x)^{N_0} \propto $$

$$ \propto x^S (1-x)^N x^{S_0} (1-x)^{N_0} \propto x^{S+S_0}(1-x)^{N+N_0} $$

So after normalization $$ f(x)g(x) $$ has pdf

$$ \frac{\Gamma(S+S_0+N+N_0+2)}{\Gamma(S+S_0+1)\Gamma(N+N_0+1)} x^{S+S_0} (1-x)^{N+N_0} $$

Which is a Beta distribution with $$ S + S_0 $$ sales and $$ N + N_0 $$ non-sales. This makes sense intuitively because we can think of $$ g $$ as the distribution of $$ X $$ after $$ S_0 $$ sales and $$ N_0 $$ non-sales, and $$ fg $$ is the pdf of $$ X $$ updated after we see $$ S $$ more sales and $$ N $$ more non-sales.

But then our estimation for a products future conversion rate becomes $$ \frac{S+S_0 + 1}{S+S_0 + N + N_0 +2} $$ which is both more accurate than the initial formula $$ \frac{S}{N} $$ and equally fast to compute.

## Great, so I should always use $$ \frac{S+S_0 + 1}{S+S_0 + N + N_0 +2} $$ instead of $$ \frac{S}{N} $$.

Not really. First of all there's the previous assumption that $$ g $$ can be modeled via a Beta Distribution. That depends on how rigorous we want to be, but it nonetheless needs to be checked. Secondly this was all about forecasting conversion rates. For analysis related to past performances I would not suggest using this formula since it is disconnected from the truth (i.e. the products actual conversion rate). However, re iterating, any predictive tool related to Conversion Rate should be using this formula instead.

I will summarize with a few pros and cons of each predicted conversion rate.
s
### Division by zero:
For new products with no observations the formula $$ \frac{S}{N} $$ has no meaning, which can cause problems when doing some bulk analysis i.e. some machine learning on top of it

### Cold Start Problem:
The Cold Start Problem is defined by not showing enough products that haven't been seen a lot yet. If we use the Conversion Rate as a proxy of how much we should show a given product then new products will have $$ CR = 0 $$ until their first conversion, which might take a while, and until then they will be barely shown. This does not happen with $$ \frac{S+S_0 + 1}{S+S_0 + N + N_0 +2} $$ and the opposite happens with $$ \frac{S+1}{N+2} $$ which maps new products predicted $$ CR $$ to $$ \frac{1}{2} $$ , which is generally above the average $$ CR $$.

### Overvaluing new products:
This is the final statement in the last paragraph. $$ \frac{S+1}{N+2} $$ overshoots the predict $$ CR $$, while $$ \frac{S+S_0 + 1}{S+S_0 + N + N_0 +2} $$ maps new products to the average $$ CR $$, neither boosting nor penalizing them.
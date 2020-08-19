---
layout: post
title: Differential Cryptography
category: [Math, Coding]
published: true
---

Apparently Apple is taking [steps](https://www.wired.com/2016/06/apples-differential-privacy-collecting-data/) to protect their users privacy by using Differential Privacy.

## So what is differential privacy?

I wondered the same after reading the article, since they mention its benefits a lot without explaining what it is. After reading about it for a bit in Wikipedia under the title [Differential Privacy](https://en.wikipedia.org/wiki/Differential_privacy), I understood the goal of differential privacy to be messing with the data of individuals (making it useless for individual targeting purposes) while preserving its statistical properties as a whole. In essence is a way of extracting value from knowledge of millions of individuals without invading the privacy of a single individual.

<!--excerpt ends here-->

## That sounds great, but how can you do that?

The best example I was able to come up with: say that you want to survey people in order to find how many people smoke weed. Since it is illegal to sell weed and there's a big discussion about it, people might not feel comfortable disclosing whether they smoke weed or not. Instead, lets put a little math into this:

Let each person flip a coin. If it lands heads then the person answers truthfully, otherwise it answers at random (with another coin flip). Say that $$q$$ of the population actually smokes weed. Then through this method we expect to have $$p = \frac{q}{2} + \frac{1}{4} $$ of the population to answer yes. Rearranging the equation we get $$ q =2p-\frac{1}{2} $$. Hence we can retrieve (with some statistical noise) a rough estimate of the population that actually smokes weed. However, if we were to go to a single individual and claim that they smoke weed, we couldn't since we couldn't be sure whether he actually smoked weed or wether it was chance that made him answer yes.

## So the use of differential privacy is to protect wrongdoers?

No. First of all wrongdoing is subjective, but I won't go there now. I'll try to keep this post more math and tech related. Secondly, Machine Learning has made the need for Differential Privacy increase. Here's an example: Say we want to build software capable of diagnosing illnesses. AI needs a lot of data for that, in particular medical records of thousands of people. We can hide the name of the patient and any ID associated with him before releasing the data to the AI corporation, but this is not a risk free action. From intel such as height, body weight, race, gender and by joining any medical condition we could find the original individual to whom the data belonged to, and maybe learn about some condition that would preferably be kept private.
By messing with the data a bit, we can increase individual privacy at the cost of the AI's accuracy. This is the big trade off in Differential Privacy<sup>1</sup>.

## So using Differential Privacy is awesome and we should admire Apple for using it :D

Yes and No. Using Differential Privacy is great, but Apple didn't release any info on how they are using it. They might be using it on a tiny insignificant part and claiming it to be a big thing, or they might be actually doing a great job. It's hard to know when companies keep so much information to themselves, which makes sense financially but for outsiders it makes us stand stronger behind initiatives like the [Open Source Software Movement](https://en.wikipedia.org/wiki/Open-source_software_movement#Legal_issues).

<sup>1</sup> Note that I haven't given a specific method of jumbling the data, that needs proper and careful thought which I might give at a later time. Probably not though.
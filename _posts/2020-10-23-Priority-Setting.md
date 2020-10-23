---
layout: post
title: Priority setting - should we train guide dogs for the blind?
category: [Projects, System Design]
---

*This is the first of (what I hope to be) many projects I will write about here. They are better based on tools that I think would be useful for society as a whole rather than profitable.*

Should we train guide dogs for the blind? The typical answer is yes, but I have a strong reason against it: you are preventing thousands of other people from recovering from blindness by doing so. The reason for this claim is as follows: The entire process of training dogs can cost over $ 40000 USD. For the same price, we could treat thousands with [Anti Vascular Endothelial Growth Factor Therapy](https://en.wikipedia.org/wiki/Anti%E2%80%93vascular_endothelial_growth_factor_therapy). So my answer is clear: I am strongly against training Guide Dogs.

Whereas the case above might not hold ( I am sorry doctors if I mentioned something clearly wrong, do feel free to correct me ), I hope the broader point is clear: many movements and decisions happen at a societal level due to the awareness and emotion that they create, rather than the actual benefit that they provide to humanity. In order to align society wide benefits with popular sentiment, I am keen on building a tool that allows for direct comparison of actions against their societal benefit AND the cost of implementing them, in practice reaping the benefits of a benefit cost analysis in a simple interface.

After some consideration, this is the structure that I believe would work best. Feel free to think this through yourself before reading my beliefs, I would be interested to compare them.

# Key ideas

I want to show in a simple plot a comparison of the effectiveness of different actions at a society level. I could visually share a lot of information by using a 2d plot where you could hover and click to get more information about the specific measures.

## Dimentions available to show information.

- x-axis
- y-axis
- colours (rgb could potentially provide 3 dimentions. This could prove particularly useful for person clustering, in terms of understanding which groups favor which measures.
- transparency
- size

By a mix of the above I should be able to show up to 7 dimentions of data.

## Possible information shared

- What measures have the most positive impact on humanity?
- Which measures are the most likely to happen?
- How long ago was this measure proposed?
- How many people are devoted / interested in this measure?
- Many more things I haven't though of but you could tell me :P 

The main challenge is to actually gather the information about all measures. One possible way to do it is to build a platform.

## Rough action steps

1. People can sign up to the platform and submit measures.
2. A full list of the measures would be presented, which people can favorite.
3. Favorited measures can be ranked on the above questions (ranking is much easier that building specific numbers).
4. Use the many partial orderings provided by the users into a total ordering.
5. Plot this information for users to in a single plot.
6. Submitted measures could make use of hashtags in order to allow for groupings. I would use #Portugal for measures about my home country, #Maths for measures on speeding up academic research (maybe which techniques to develop), and any others of interest.
7. As time passes questions could fade into the background.
8. Live happily ever after.

Interested? Let's make this happen :P 

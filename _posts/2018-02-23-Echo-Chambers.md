---
layout: post
title: Echo Chambers
category: [System Design, Psychology]
published: true
---

Social Networks are meant to provide users with social updates, be it from friends or from the media. Given the information overload we can't afford to read everything, and as such the platforms (Facebook, Twitter and many others) choose what we should read on our behalf. They employ algorithms that try to find the articles we find will most likely enjoy. An honorable attempt to achieve the not so honorable goal of keeping us using their platform for as long as possible.

# So how should we change it?

<!--excerpt ends here-->

The first changes I would demand are:
1. The users to be aware of how the algorithms used work.
2. Have a selection of algorithms for the user to choose from.

Change 1 can prove itself hard from a market competition point of view: the platform with the best algorithms should have more success, but revealing them would nullify any investment on these areas. This shouldn't prove problematic since the best algorithms are already out-there up to tuning parameters. What I mean is that companies can say that they use a certain algorithm without specifying the parameters that made it work best. A great example of this in practice is the public release of [Reddit's ranking algorithms](https://medium.com/hacking-and-gonzo/how-reddit-ranking-algorithms-work-ef111e33d0d9) . I admire their initiative. Also, they cite [this page](http://www.evanmiller.org/how-not-to-sort-by-average-rating.html) which I found interesting for anyone doing rankings.

Change 2 is easy to implement but so far it seems uncommon practice. I'm talking at least Facebook, Twitter, Instagram, Pinterest and Snapchat (following [this](article)). For UX purposes it makes total sense to have a default algorithm so that users don't have to worry about how each algorithm works and, to be honest, it's understandable that most users don't care. However the option should be there (somewhere in settings for users that don't). There are many reasons for these, not least of them the fact that I want to have my feed better chosen than to just see the posts that I will more likely like.

Personally, my problem is echo chambers.

# What are echo chambers?

In common usage, an echo chamber is a term to any setting which feeds you back with the things that you already believe. Do you like kittens? Here's a 2 minute video of kittens purring. Are you Pro-Life? Then we'll send you some more Pro-Life articles. Do you want stricter immigration rules? Then we'll send you links to people who've moved society towards that goal.

We move from an innocent yet naive approach to social feeds to an echo chamber that feeds us with what we already believe in and prevents useful discussions. We need to discuss hard topics with the opposition. Yes, we need to be careful about politics, religion and soccer (never forget soccer), but we DO NEED to have this discussion. With tolerance and an open mind, but anything is better than avoiding this conversations and living in our own little bubbles, as if nothing else existed.

The Wall Street Journal published an interesting take on echo chambers by making a [comparison of Liberal and Conservative news feeds](http://graphics.wsj.com/blue-feed-red-feed). The results should cause outrage. People on both sides will leave their feeds with a feeling that everyone agrees with them, with no discussion and, more importantly, no agreement being achieved.

# What do you propose?

By the tone of the post so far it should come as no surprise that we need better algorithms. Being shown posts with divergent opinions from the user will definitely increase [churn rate](https://en.wikipedia.org/wiki/Churn_rate), so platforms have no incentive to do it. My hopes lie in people becoming aware of the Echo Chamber problem and demanding a solution. Personally, a simple solution can be achieved: let me choose a better algorithm for sorting my feed.

# Which algorithm do you want to see implemented?

I call this the Explorer Algorithm. As the name hopefully implies, it is meant to explore posts that I wouldn't normally see. Let's imagine back to the Liberal/Conservative divide. We can divide the users into 2 clusters. Now instead of choosing the cluster that I am in, I am shown the posts ranked as if they were shown to the opposite cluster. That way I'm seeing more useful posts.

This has an obvious problem. If I enjoy politics, the approach above might show me all about video games which is not what I want. I want to see divergent views on political matters. Hence we need to do some fine tuning.

**Iteration 2:** We cluster people by what they actively like/dislike, regardless of which of the 2 they choose. For example I would frequently like political posts supporting my views and dislike political posts against my views. Hence I would be clustered with people who are focused in politics. Having people clustered by topics of interest, we can redo the above. Considering only people within a topic, we cluster them according to likes/dislikes (now distinguishing the 2 events). After that I am shown the better ranked posts for the set of people outside my cluster. This way I see relevant ideas that go against my views, and with some luck I'll learn and adapt my views for the better.

# Cool, we just need to implement it.

Yes. That can be problematic though. Even though these ideas are socially good, they might increase churn rate as mentioned above, hence reducing the platform's profits. It would also take some power away from the platforms to control what is shown. It is not an easy fight, but public pressure is a valuable tool at our disposal and it can be effective if we are consistent.

# So what should I do?

1. Share your thoughts on those same platforms.

2. If you know someone working there (or even if you don't ) get in touch with them sharing your concerns. Only their employees can implement these changes.

3. If you find a platform that follows these ideas start using them more, leaving a post explaining why in order to raise awareness of the issue. Do follow through with changing platforms since nothing convinces social platforms to change more than hurting their profits from advertising. So far only Reddit comes to mind having implemented the ideas above, but do share other platforms who also do so if you are aware of them.
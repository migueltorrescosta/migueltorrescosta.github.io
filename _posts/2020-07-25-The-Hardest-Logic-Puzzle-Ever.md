---
layout: post
title: The Hardest Logic Puzzle Ever
category: [Maths, Logic]
published: true
---

I was recently given ["The Hardest Logic Puzzle Ever"](https://en.wikipedia.org/wiki/The_Hardest_Logic_Puzzle_Ever), which can be stated as follows:

Three gods A, B, and C are called, in no particular order, True, False, and Random. True always speaks truly, False always speaks falsely, but whether Random speaks truly or falsely is a completely random matter. Your task is to determine the identities of A, B, and C by asking three yes-no questions; each question must be put to exactly one god. The gods understand English, but will answer all questions in their own language, in which the words for yes and no are da and ja, in some order. You do not know which word means which.

<!--excerpt ends here-->

### Finding the solution

The first step in finding a solution is to know whether a solution exists or not. We start with having three goods, $$(A,B,C)$$, and we want to know which of the following triplets represents the gods:

- $$(True, False, Random)$$.
- $$(True, Random, False)$$.
- $$(False, True, Random)$$.
- $$(False, Random, True)$$.
- $$(Random, True, False)$$.
- $$(Random, False, True)$$.

So our $$3$$ questions need to be able to distinguish $$6$$ different possibilities. Since each question has $$2$$ possible responses, we would have $$2*2*2=8$$ possible outcomes.

### But we can't distinguish the words for yes and no. Doesn't that reduce the answers we are able to distinguish in half, since if we swap all of the da's and ja's we would get the same information?

Not exactly. We are told what are the words for yes and no. Even though we don't know which is which, we can use that information to get a yes/no answer even without knowing which is the word for yes and the word for no. As an example, suppose that I am asking whether the number &2& is prime. Then I could ask: *"If I ask is the number $2$ prime and does da mean no, would you give the same answer to both questions?"*. Looking at the True/False gods and the possibilities da=yes / da=no, we get that their answers will be:

<table>
  <thead>
    <tr>
      <th></th>
      <th>True God, da=yes</th>
      <th>True God, da=no</th>
      <th>False God, da=yes</th>
      <th>False God, da=yes</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Is the number $2$ prime?</td>
      <td>da (yes)</td>
      <td>ja (yes)</td>
      <td>ja (no) </td>
      <td>da (no)</td>
    </tr>
    <tr>
      <td>Does da mean no?</td>
      <td>ja (no) </td>
      <td>ja (yes) </td>
      <td>da (yes) </td>
      <td>da (no) </td>
    </tr>
    <tr>
      <td>Would you answer both questions above equally?</td>
      <td>ja (no) </td>
      <td>ja (yes) </td>
      <td>da (yes) </td>
      <td>da (no) </td>
    </tr>
  </tbody>
</table>

We don't have access to whether the given answer means yes or no, but from the above it is clear that the True God answers ja, and the False da, to a clearly true statement. If We swap the question *Is $$2$$ prime?* for a false statement such as *$Is $$4$$ prime?*, both the 1st and 3rd rows would swap their da's and ja's, so the True God would now answer da and the False God would answe ja.

As such, by appending the last part *"If I asked you if $$P$$ is true and if does da mean no, would you give the same answer?"*, then I can act as if ja means yes and da means no.

Therefore we can skip the part about da/ja all together, and assume we get the usual English answers yes and no from our Gods.

### Awesome, but what about the Random God?

The random God can indeed be a problem: The True / False Gods give us a lot of information (1 bit to be exact) whenever we ask a question, however The Random God introduces noise to the system. In particular when we ask the first question, because of the $$1/3$$ probability of there being a random God, we only get $$ 1 \frac{1}{3} + 1 \frac{1}{3} + 0 \frac{1}{3} = \frac{2}{3} $$ bits of information from our first question. As such instead of getting $$3$$ bits from $$3$$ questions, we only get $$2+\frac{2}{3} \approx 2.66 $$ bits. This however is still larger than the $$log_2(6) = 2.58 $$ bits of information needed to know which God is which, so it would still be possible to solve this question.

### What do you mean bits of information?

This was a concept introduced by [Claude Shannon](https://en.wikipedia.org/wiki/Claude_Shannon) in his thesis [A Mathematical Theory of Communication](http://people.math.harvard.edu/~ctm/home/text/others/shannon/entropy/entropy.pdf). Make sure to check out his documentary [The Bit Player](https://thebitplayer.com/) if you want to learn more about the man behind the myth :) One of the key ideas introduced in that paper is a measure of information ( i.e. [Entropy](https://en.wikipedia.org/wiki/Entropy) ) and can be measured in bits, which stands for binary digits. Each yes/no answer provides a bit of information, however that depends on the uncertainty of getting a yes/no answer. If we know that in Portugal it rains only 5% of the time, you telling me that it is not raining tomorrow does not give as much information as if there was a 50 / 50 chance of rain: Even without knowing the outcome I already could have made a very good guess to start with.

In the problem we are facing, we have $$6$$ options, and, as per Shannon's work, this means we need $$log_2(6) = 2.58 $$ bits of information. Each bit of information allows us to decrease the number of possible outcomes in half (or the ceiling of half), so with 1 bit we can go from $$6$$ options to $$3$$, another bit allows us to go to from $$3$$ to $$ \left \lceil 1.5 \right \rceil  = 2$$, and the last bit from $$2$$ to $$1$$ possibility (the final answer).

### Alright, so how do we go from here to an answer?

Everything above was done to ensure we weren't spending time on an impossible question, as many logic problems end up being. We need to ask $$3$$ questions that will filter our options to $$1$$. We need to ask an initial question which will give us 4 possible outcomes: the reason for that is that, looking at the possible orderings, there are $$2$$ in $$6$$ people that will answer truthfully, the same for lying, but then the $$2$$ options answered randomly can fall in any of the 2 cases above).

Let us start with asking the question *"Is 2 prime?"* to the first God. Since we know this to be true, we can distinguish True and False Gods, but not Random. As such if the answer is yes we get the possible orderings

- $$(True, False, Random)$$.
- $$(True, Random, False)$$.
- $$(Random, True, False)$$.
- $$(Random, False, True)$$.

where as if it false, we get the possible orderings

- $$(False, True, Random)$$.
- $$(False, Random, True)$$.
- $$(Random, True, False)$$.
- $$(Random, False, True)$$.

In both cases we get $$4$$ options. Since we have 2 questions left, we need to ensure that at each point we reduce the number of possibilities in half. There is a problem though: In every column above there is at least one row containing the Random God. The reason this is problematic is because we will not be able to distinguish the Random God from the most common God in that column, and as such there is always the possibility that we will end up with three options after getting the answer to our question.

What we need is a way of getting $$4$$ options, similar to the above, but Random God free columns. The only way to find such a question is to play around with possible questions to ask, and eventually I was able to find such a question: *"Are you sitting in the cycle order True, False, Random?"*, or in other words, are you in one of the three following orderings?
 
- $$(True, False, Random)$$.
- $$(False, Random, True)$$.
- $$(Random, True, False)$$.

Let's look at the different answers:

- $$(True, False, Random)$$: The answer is yes, and since we ask a True God we get yes.
- $$(True, Random, False)$$. The answer is no, and since we ask a True God we get no.
- $$(False, True, Random)$$. The answer is no and since we ask a False God we get yes
- $$(False, Random, True)$$. The answer is yes, and since we ask a False God we get no.
- $$(Random, True, False)$$. Random God, so anything goes.
- $$(Random, False, True)$$. Random God, so anything goes.

Hence, if we get the answer yes, the possibilities are

- $$(True, False, Random)$$.
- $$(False, True, Random)$$.
- $$(Random, True, False)$$.
- $$(Random, False, True)$$.

And if the answer is no, the possibilities are

- $$(True, Random, False)$$.
- $$(False, Random, True)$$.
- $$(Random, True, False)$$.
- $$(Random, False, True)$$.

We see that in the first case we can ask the 2nd God the remaining questions, knowing that they will not be random, and in the second case we can ask the 3rd God similarly. As such our job becomes much easier: We first ask the definitely non random God *"Is 2 Prime?""* This will allows us to half the number of possibilities by telling us whether we are talking to the True or False God. Once we know that we will end up in one of the 4 possibilities:


#### Case A
- $$(False, True, Random)$$.
- $$(Random, True, False)$$.

#### Case B
- $$(True, False, Random)$$.
- $$(Random, False, True)$$.

#### Case C
- $$(False, Random, True)$$.
- $$(Random, False, True)$$.

#### Case D
- $$(True, Random, False)$$.
- $$(Random, True, False)$$.

All of those can be solved by asking the Gods we know with certainty whether the first God is random, and then we adjust the answer to the fact that we are talking to the True or False God.

### So we're done, hurray!

Pretty much. We skipped the da / ja instead of yes / no answers, so let's just make our answer proper.

### The answer

By using the trick *"If I asked you if $$P$$ is true and if does da mean no, would you give the same answer?"*, we can act as if da means yes for the statement *"Is $$P$$ true?"*.

We ask the first God:
*"If I asked if you are sitting in the cycle order True/False/Random and if da means no, would you give the same answer?"*.

If the answer is da (yes), we end up with the certainty of a non random God in the 2nd position. Similarly, ja (no) gives us a definitely non random God in the third position.

Then we discover if the God is True or False by asking *"If I asked if $$2$$ is prime and if da means no, would you give the same answer?"*.

Lastly we know the other Gods by finalizing with *"If I asked if the first God is the Random God and if da means no, would you give the same answer?"*.


*Remark: Notice that in the solution above we never figure out if da means yes or no. This is impossible given the current setting: If we were to figure out not only the gods positions, which contains $$ log_2(6) = 2.58 $$ bits of information, but also if da=yes for a total of $$2.58+1 = 3.58$$ bits of information, we would need more than three binary questions which only give us $$3$$ bits of information.*
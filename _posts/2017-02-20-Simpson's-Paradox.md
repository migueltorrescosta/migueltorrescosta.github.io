---
layout: post
title: Simpson's Paradox
category: [Math]
published: false
---

This is one of the coolest Paradoxes I've seen around. Simpson's paradox is just an apparent paradox. When we look underneath the cover there is no contradiction. It is based on a logical step that is made oftenly but is nonetheless wrong. Intuitively it goes as follows:

Let's say that We have 2 vaccines A and B which are good at removing kidney stones. In trials with small kidney stones vaccine A is better. In trials with large kidney stones vaccine A is also better. Then A is better overall, right?

Not necessarily.
<!--excerpt ends here-->
We'll have to look into the number of trials for each experiment to see where we might go wrong. Say we had the following number of trials in each sample:

Each cell consists of <i>number of successfull trials/total trials ( percentage of success)</i>i>

<table>
  <thead>
    <tr>
      <th></th>
      <th>Treatment A</th>
      <th>Treatment B</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Small Kidney Stone</td>
      <td>180/200 (90%) </td>
      <td>600/800 (75%) </td>
    </tr>
    <tr>
      <td>Large Kidney Stone</td>
      <td>200/800 (25%) </td>
      <td>40/200 (20%) </td>
    </tr>
    <tr>
      <td>Total</td>
      <td>380/1000 (38%) </td>
      <td>640/1000 (64%) </td>
    </tr>
  </tbody>
</table>



If this is hard to digest at first (it is), the main idea to take is that even though vaccine A is better than vaccine B in both small and large kidney stone treatments, Vaccine B was overwhelmingly given to people with Small Kidney stones which were easier to cure, and Vaccine A was overwhelmingly given to people with Large Kidney Stones.

Cristopher Olah summarised this perfectly on the following graph (taken from this more in-depth [post](http://colah.github.io/posts/2015-09-Visual-Information/)):



As you can see Vaccine A is better than B in both cases, but because the sample distribution was uneven sample B averages out to (apparently) be better than A.

<b><u>Danger:</u></b> The disparate usage of vaccines A and B might be due to usage costs,... When analysing the vaccines efficacy you who might argue that A is better and others that B is better using the same data and published papers. The best approach is to go and read the original papers, and compare their analysis with what you are trying to understand. Very often news articles extrapolite more than they should from existing studies.
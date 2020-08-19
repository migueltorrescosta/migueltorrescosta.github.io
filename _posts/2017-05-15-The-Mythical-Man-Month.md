---
layout: post
title: The Mythical Man Month
category: [Psychology]
published: true
---

It's rare to find such a short book with so many useful insights. This insights are based on the work experience of [Fred Brooks](https://en.wikipedia.org/wiki/Fred_Brooks). In summary he mentions:

* language
{:toc}

## The mythical man-month

The core idea in the books states that many project managers (wrongly) use Man-Months as a developer's productivity measurement unit, so that for example 4 developers do in 2 months what 2 developers do in 4 months.
This fails to take into account different group mechanics: 2 great developers might not work well together or a few very specialized developers might achieve no work alone, but when together produce exponentially more work. As the number of workers increases we get more communication pairs (to be exactly $$ \frac{n(n-1)}{2} $$ channels , so with as few as 10 developers we have 45 channels of communication ).
Also there's another problem: most people think about the man-month unit of measurement when their projects are running late. However consider a scenario when you have 4 people, you have 2 months to finish a project but you need 12 man-months (Assuming this is a viable measurement unit). So you need to hire 2 people in order to complete the required 12 man-months. However the new developers need training in order to start working on the project. If they each need a person to introduce them and they will be learning in their first month, then we will only have 2 developers working in the first month and 6 in the second, for a total of 8 man-months. Not optimal.

## No silver bullet

Brooks insists that there is no technology or discovery in software that will lead to a tenfold increase in productivity over the span of a decade (this in contrast to Moore's law about Hardware productivity).

<!--excerpt ends here-->

## The second-system effect

This revolves around the tendency to over-engineer the second system that is built for any purpose, for the reason that we often try to include in the second system all of the first system capabilities and every addition we didn't add in the first system due to time constraints.

## The tendency towards irreducible number of errors

Brooks states that as systems get complex, there is a lower bound to how many errors the system has. Any attempt at fixing known errors will introduce even more errors. As the fable goes,

    99 little bugs in the code.
    99 little bugs.
    Take one down, patch it around.
    127 little bugs in the code.

## Progress Tracking

Brooks wrote "Question: How does a large software project get to be one year late? Answer: One day at a time!" Incremental slippages on many fronts eventually accumulate to produce a large overall delay. Continued attention to meeting small individual milestones is required at each level of management.

## Conceptual Integrity

Any software should be made user friendly and it pays off to have an architect focusing on understanding what/how the user will be using the program. Everyone in the team should understand the architects' (i.e. the user's) point of view and good features might not be included if they make the program harder to learn.

## Formal documents

Every project manager should create a small core set of formal documents defining the project objectives, how they are to be achieved, who is going to achieve them, when they are going to be achieved, and how much they are going to cost. These documents may also reveal inconsistencies that are otherwise hard to see.

## Project estimation

Project times must take into account the fact that most customer oriented projects take thrice as long as in-house projects and that there will be time spent on administrative tasks (meetings, discussing project ideas,...). A good rule of thumb is to divide the time spent coding in 12 time blocks:
- $$ 4 $$ blocks spent designing the app and it's structure 
- $$ 2 $$ blocks spent coding
- $$ 3 $$ blocks spent testing each component of the app (and debugging if necessary)
- $$ 3 $$ blocks spent testing the system as a whole (and, again, debugging if necessary)

## Communication

Everyone working on a project should be easily reachable and the project's goal should always be made clear. Instead of assuming something, implementers should ask and clarify anything about a feature they are implementing, before proceeding with an assumption that might very well be completely incorrect. The architect(s) are responsible for formulating a group picture of the project and communicating it to others.

## Specialized tools

Instead of every programmer having his own special set of tools, each team should have a designated tool-maker who may create tools that are highly customized for the job that team is doing, e.g., a code generator tool that creates code based on a specification. In addition, system-wide tools should be built by a common tools team, overseen by the project manager.
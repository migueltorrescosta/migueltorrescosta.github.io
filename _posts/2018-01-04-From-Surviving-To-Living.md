---
layout: post
title: From Surviving to Living
category: [System Design, UBI]
published: true
---

Suppose a company has 2 employees Anne and John. The company values Anne's work 2 times more than John's work. As such the company is paying Anne £1400 and John £700. This can be seen as fair, one person having double the money to spend and be happy since they are contributing double of what others are contributing.

However there is one problem: Both of them have survival costs. For this argument's sake lets assume that both Anne and John need £600 to survive. By surviving I mean having shelter (a home), food, electricity and water. Then Anne's spending money is £1400 - £600 = £800, but John's is 700£ - 600£ = £100, like this:

<table>
  <thead>
    <tr>
      <th></th>
      <th>Anne</th>
      <th>John</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Salary</td>
      <td>£1400</td>
      <td>£700</td>
    </tr>
    <tr>
      <td>Survival Money</td>
      <td>£600</td>
      <td>£600</td>
    </tr>
    <tr>
      <td>Spending Money</td>
      <td>£800</td>
      <td>£100</td>
    </tr>
  </tbody>
</table>

In practice Anne has 8 times the spending money John has. Those are 8 times more money spent on actually improving your life quality, having dinners with friends, buying books to read, doing hobbies they love.

The core idea, which I initially read about in this [medium post](https://medium.com/@conradshaw/money-isnt-money-97722fe87025) by Conrad Shaw, is that each person has survival money and spending money. Survival money is needed to remain alive, spending money is used to be happy.

<!--excerpt ends here-->

## What are you claiming?

My claim is that fair inequalities in salaries are being exacerbated after discounting survival costs. In other words fair salary improvements can lead to an unfair improvement in the quality of life. To fix the situation in the initial example we need to ensure that Anne's spending money is double John's spending money. Assume we have a total of £2100 to be distributed. Both Anne and John need £600 to survive, leaving us with £2100 - 2 * £600 = £900 to distribute. Since we want Anne to have double the spending money that John has then John should receive £900/3 = £300, while Anne should receive the remainder of 2* £900/3 = £600.

Then we would get the distribution:

<table>
  <thead>
    <tr>
      <th></th>
      <th>Anne</th>
      <th>John</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Salary</td>
      <td>£1200</td>
      <td>£900</td>
    </tr>
    <tr>
      <td>Survival Money</td>
      <td>£600</td>
      <td>£600</td>
    </tr>
    <tr>
      <td>Spending Money</td>
      <td>£600</td>
      <td>£300</td>
    </tr>
  </tbody>
</table>

## You are saying companies should take spending money into account when deciding salaries?

That is not possible because of this:

<table>
  <thead>
    <tr>
      <th></th>
      <th>Anne</th>
      <th>John</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Company worth</td>
      <td>£1400</td>
      <td>£700</td>
    </tr>
    <tr>
      <td>'Fair' amount</td>
      <td>£1200</td>
      <td>£900</td>
    </tr>
    <tr>
      <td>Company Profits</td>
      <td>£200</td>
      <td>-£200</td>
    </tr>
  </tbody>
</table>

Since the company would have to pay Anne below her worth but not John, then they would only hire Anne. Even more reasons against this being a possibility can be explained using economic related concepts.

## What is your proposed solution?

Changing how taxes are applied. After the company pays employees their worth to the company, then we have to pay taxes by filling IRS forms and all our obligations. If a reasoning similar to the above was applied then each person would pay a percentage of their income to the IRS and receive a fixed Survival Money amount.

## How would we figure out how much each person has to pay at a larger scale?

I am going to skip the calculations, but doing the calculations above is equivalent to each person giving a percentage of their salaries to pay for the survival costs of everyone, and have those survival costs equally split amongst the population.

## How would that work in practice?

I will give you an example. Suppose that we have a population of 560 people receiving different salaries, according to the following table:

<table>
  <thead>
    <tr>
      <th>Number of people</th>
      <th>Salary</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>30</td>
      <td>£0</td>
    </tr>
    <tr>
      <td>100</td>
      <td>£500</td>
    </tr>
    <tr>
      <td>250</td>
      <td>£750</td>
    </tr>
    <tr>
      <td>100</td>
      <td>£1500</td>
    </tr>
    <tr>
      <td>50</td>
      <td>£2500</td>
    </tr>
    <tr>
      <td>22</td>
      <td>£5000</td>
    </tr>
    <tr>
      <td>10</td>
      <td>£10000</td>
    </tr>
  </tbody>
</table>

If we assume a £400 survival money we will need 560 * £400 = £224.000 to pay everyone, from a total of £3.712.500 . Hence the survival money is roughly 6% of the total income seen. Doing the calculations above we get:

<table>
  <thead>
    <tr>
      <th>Initial Salary</th>
      <th>Adapted Salary</th>
      <th>Spending Money</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>£0</td>
      <td>£400</td>
      <td>£0</td>
    </tr>
    <tr>
      <td>£500</td>
      <td>£870</td>
      <td>£470</td>
    </tr>
    <tr>
      <td>£750</td>
      <td>£1105</td>
      <td>£705</td>
    </tr>
    <tr>
      <td>£1500</td>
      <td>£1809</td>
      <td>£1409</td>
    </tr>
    <tr>
      <td>£2500</td>
      <td>£2749</td>
      <td>£2349</td>
    </tr>
    <tr>
      <td>£5000</td>
      <td>£5098</td>
      <td>£4698</td>
    </tr>
    <tr>
      <td>£10000</td>
      <td>£9797</td>
      <td>£9397</td>
    </tr>
  </tbody>
</table>

Comparing the Initial Salary and Spending Money columns, we can see they are just a rescaling of each other (by 94%). As such each person's initial salary and spending money can be seen as fair.
Lastly (for those of you with higher salaries), there's an important column missing: The percentual change in salary:

<table>
  <thead>
    <tr>
      <th>Initial Salary</th>
      <th>Adapted Salary</th>
      <th>Percentual Change</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>£0</td>
      <td>£400</td>
      <td>Infinity</td>
    </tr>
    <tr>
      <td>£500</td>
      <td>£870</td>
      <td>74%</td>
    </tr>
    <tr>
      <td>£750</td>
      <td>£1105</td>
      <td>47.3%</td>
    </tr>
    <tr>
      <td>£1500</td>
      <td>£1809</td>
      <td>20.6%</td>
    </tr>
    <tr>
      <td>£2500</td>
      <td>£2749</td>
      <td>9.96%</td>
    </tr>
    <tr>
      <td>£5000</td>
      <td>£5098</td>
      <td>1.96%</td>
    </tr>
    <tr>
      <td>£10000</td>
      <td>£9797</td>
      <td>-2.02%</td>
    </tr>
  </tbody>
</table>

Hence by 10 people giving 2% of their salaries we were able to guarantee enough survival money for 560 people, while keeping the spending money approppriately sized.

## So we should just tax everyone's income to provide for everyone's survival?

Yes and no. There are a few things that should be done before moving forward:

**1. Trials.** Many [Basic Income Pilots](https://en.wikipedia.org/wiki/Basic_income_pilots) are already being done to better evaluate the impacts of having an UBI, from the citizen's willingness to work and what work gets done, among other things.

**2. Consider funding alternatives.** I have provided a single UBI funding idea, which I personally like but I am absolutely sure there are better ones that I have not considered. Given the variety of funding sources for governments this should not be problematic, it just needs to be considered.

**3. Defining survival money.** This amount varies between geographical locations and means available (if I have my own house I usually have to pay a smaller rent than if I had a landlord trying to profit). Finding the ideal amount for a country is not trivial.

Not as relevant but also important, I need to do the calculations above to actual income data and not just fictional values like the ones I created. I am curious to see what the impact would be in that case. If you read this before I have done that feel free to email me so that I do it.

## Further reading

* [UBI - The Maslow Argument](https://medium.com/basic-income/universal-basic-income-the-maslow-argument-d1346fa9a9f2)
* [Money Isn't Money, until it is](https://medium.com/@conradshaw/money-isnt-money-97722fe87025)
* [Maslow's Hierarchy of needs](https://en.wikipedia.org/wiki/Maslow%27s_hierarchy_of_needs)
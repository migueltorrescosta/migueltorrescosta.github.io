---
layout: post
title: From Surviving to Living
category: [System design, UBI]
published: true
---

Suppose a company has 2 employees Anne and John. The company values Anne's work 2 times more than John's work. As such the company is paying Anne £1400 and John £700. This can be seen as fair, one person having double the money to spend and be happy since they are contributing double of what others are contributing.

However there is one problem: Both of them have survival costs, namely rent, food, eletricity and similar expenses. Assume that both Anne and John need £600 to survive. Subtracting survival costs, we get that Anne's spending money is £800, but John's is £100, like this:

<table>
  <thead>
    <tr>
      <th></th>
      <th>Anne</th>
      <th>John</th>
      <th>Ratio</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Salary</td>
      <td>£1400</td>
      <td>£700</td>
      <td>2:1</td>
    </tr>
    <tr>
      <td>Survival Money</td>
      <td>£600</td>
      <td>£600</td>
      <td>1:1</td>
    </tr>
    <tr>
      <td>Spending Money</td>
      <td>£800</td>
      <td>£100</td>
      <td>8:1</td>
    </tr>
  </tbody>
</table>

In practice Anne has 8 times the spending money John has. Those are 8 times more money spent on actually improving your life quality, having dinners with friends, buying books to read, doing hobbies they love.

The core idea, shared on [medium](https://medium.com/@conradshaw/money-isnt-money-97722fe87025) by Conrad Shaw, is that each person has survival money and spending money. Survival money is needed to remain alive, spending money is used to be happy.

<!--excerpt ends here-->

## What are you claiming?
 
My claim is that a person's quality of life is not correctly dependent on their productivity. A small improvement in productivity leads to large quality of life improvements. In other words, if your productivity is slightly below average, then your quality of life is a lot below average. 

## Can we fix the situation?

Given the premises, we need to make sure Anne's spending money is double John's spending money.We have a total salary of £2100. Both Anne and John need £600 to survive, leaving us with £900 to distribute. Hence John should receive £300 and Anne £600.

Then we would get the distribution:

<table>
  <thead>
    <tr>
      <th></th>
      <th>Anne</th>
      <th>John</th>
      <th>Ratio</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Salary</td>
      <td>£1200</td>
      <td>£900</td>
      <td>4:3</td>
    </tr>
    <tr>
      <td>Survival Money</td>
      <td>£600</td>
      <td>£600</td>
      <td>1:1</td>
    </tr>
    <tr>
      <td>Spending Money</td>
      <td>£600</td>
      <td>£300</td>
      <td>2:1</td>
    </tr>
  </tbody>
</table>

Now their Spending Money and their value to the company are in the right proportion.

## So companies should take that it account when deciding salaries?

Unfortunately that would not work well. As mentioned in the beginning, Anne's work is twice as important as John's work. Hence for the company we would observe something similar to:

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

The company would be paying Anne below her worth but not John, so they win from hiring Anne but not John.

## Do you have an alternative suggestion?

Yes, taxes. After the company pays employees their worth to the company, then we have to pay taxes by filling IRS forms and all our obligations. Applying the above reasoning to all citizens, then we should get the correct spending money ratio's.

## How would we figure out how much each person has to pay at a larger scale?

I am going to skip the calculations, but doing them is equivalent to each person giving a percentage of their salaries to pay for the everyone's survival costs.

## How would that work in practice?

I will give you an example. Suppose that we have a population of 560 people with the monthly income distribution below.

<table>
  <thead>
    <tr>
      <th>Salary</th>
      <th>Number of people</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>£0</td>
      <td>30</td>
    </tr>
    <tr>
      <td>£500</td>
      <td>100</td>
    </tr>
    <tr>
      <td>£750</td>
      <td>250</td>
    </tr>
    <tr>
      <td>£1500</td>
      <td>100</td>
    </tr>
    <tr>
      <td>£2500</td>
      <td>50</td>
    </tr>
    <tr>
      <td>£5000</td>
      <td>22</td>
    </tr>
    <tr>
      <td>£10000</td>
      <td>10</td>
    </tr>
  </tbody>
</table>

If we assume that £400 is the needed survival money then we will need £224.000 to pay everyone, from a total of £3.712.500 available. Hence the survival money is roughly 6% of the total income seen. Doing the calculations above we get:

<table>
  <thead>
    <tr>
      <th>Initial Salary</th>
      <th>Spending Money</th>
      <th>Adapted Salary</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>£0</td>
      <td>£0</td>
      <td>£400</td>
    </tr>
    <tr>
      <td>£500</td>
      <td>£470</td>
      <td>£870</td>
    </tr>
    <tr>
      <td>£750</td>
      <td>£705</td>
      <td>£1105</td>
    </tr>
    <tr>
      <td>£1500</td>
      <td>£1409</td>
      <td>£1809</td>
    </tr>
    <tr>
      <td>£2500</td>
      <td>£2349</td>
      <td>£2749</td>
    </tr>
    <tr>
      <td>£5000</td>
      <td>£4698</td>
      <td>£5098</td>
    </tr>
    <tr>
      <td>£10000</td>
      <td>£9397</td>
      <td>£9797</td>
    </tr>
  </tbody>
</table>

The Spending Money column is just a rescaling (by $94%$) of the Initial Salary column. As such each person's initial salary and spending money can be seen as fair.
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

Hence by 10 people giving 2% of their salaries we are able to guarantee enough survival money for 560 people, while keeping the spending money approppriately sized.

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
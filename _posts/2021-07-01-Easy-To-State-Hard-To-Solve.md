---
layout: post
title: Easy to State, Hard to Solve
category: [Math]
---

Interesting problems tend to follow a pattern of being very easy to state, and hard to solve. I am sharing one as an example. Do try to solve it before reading through the solution. Enjoy!

# Problem

In how many ways can you cover a $ 3 \times n $ grid with $ 2 \times 1 $ sized dominoes?

# Solution

## Approach

We will write the number of solutions recursively, and deduce the general formula based on this.

## Recursions

After adding dominoes we get grids that might not be $ 3 \times n $, so let us define these three values:

- $A_n$ : The number of coverings of a $ 3 \times n $ grid with an extra cell in the $n+1$ th column.
- $B_n$ : The number of coverings of a $ 3 \times n $ grid with two extra adjacent cells in the $n+1$ th column.
- $C_n$ : The number of coverings of a $ 3 \times (n+1) $ grid.

With these in mind, we get three key recursions:

$$
\left\{\begin{matrix}
A_n = & B_{n-1}\\ 
B_n = & C_{n-1} + A_{n-1}\\ 
C_n = & B_{n-1} + C_{n-2} + A_{n}
\end{matrix}\right.
$$

Using $A_n = B_{n-1}$ to get rid of all the $A_n$ terms we get the system of equations

$$
\left\{\begin{matrix}
B_n = & C_{n-1} + B_{n-2}\\ 
C_n = & 2 B_{n-1} + C_{n-2}
\end{matrix}\right.
$$

In order to get similar recursions, we can define $C'_n = \sqrt{2} C_n$ to get the system of equations.

$$
\left\{\begin{matrix}
B_n = & \sqrt{2}C'_{n-1} + B_{n-2}\\ 
C'_n = & \sqrt{2} B_{n-1} + C'_{n-2}
\end{matrix}\right.
$$

Since $B_n$ and $C'_n$ look really similar, we can try to work out this system in terms of their average value and difference, by setting

$$
\left\{\begin{matrix}
\alpha_n = & \frac{B_n + C'_n}{2}\\ 
\beta_n = & \frac{B_n - C'_n}{2}
\end{matrix}\right.
\iff
\left\{\begin{matrix}
B_n = & \alpha_n + \beta_n\\ 
C'_n = & \alpha_n - \beta_n
\end{matrix}\right.
$$

Substituting back in the original equations we get

$$
\left\{\begin{matrix}
B_n = & \sqrt{2}C'_{n-1} + B_{n-2}\\ 
C'_n = & \sqrt{2} B_{n-1} + C'_{n-2}
\end{matrix}\right.
\iff
\left\{\begin{matrix}
\alpha_n + \beta_n = & \sqrt{2} \left ( \alpha_{n-1} - \beta_{n-1} \right ) + \left ( \alpha_{n-2} + \beta_{n-2} \right ) \\ 
\alpha_n - \beta_n = & \sqrt{2} \left ( \alpha_{n-1} + \beta_{n-1} \right ) + \left ( \alpha_{n-2} - \beta_{n-2} \right ) \\ 
\end{matrix}\right.
\iff
\left\{\begin{matrix}
\alpha_n = & \sqrt{2} \alpha_{n-1} + \alpha_{n-2} \\ 
\beta_n = - & \sqrt{2} \beta_{n-1} + \beta_{n-2} \\ 
\end{matrix}\right.
$$

These 2 equations are independent of each other and relatively simple to solve :) 

- $\alpha_n$: Solving $ \alpha^2 = \sqrt{2} \alpha + 1 $ we get $ \alpha = \frac{1 \pm \sqrt{3}}{\sqrt{2}}$, which leads to the general solution $ \alpha_n = r \left ( \frac{1 +  \sqrt{3}}{\sqrt{2}} \right )^n + s \left ( \frac{1 - \sqrt{3}}{\sqrt{2}} \right ) ^n$.

- $\beta_n$: Solving $ \beta^2 = - \sqrt{2} \beta + 1 $ we get $ \beta = \frac{-1 \pm \sqrt{3}}{\sqrt{2}}$, which leads to the general solution $ \beta_n = t \left ( \frac{-1 +  \sqrt{3}}{\sqrt{2}} \right )^n + u \left ( \frac{-1 - \sqrt{3}}{\sqrt{2}} \right ) ^n$.

With these general formulas, we can get

$$
\left\{\begin{matrix}
B_n & = & B_n & = & \alpha_n + \beta_n & = & r \left ( \frac{1 +  \sqrt{3}}{\sqrt{2}} \right )^n + s \left ( \frac{1 - \sqrt{3}}{\sqrt{2}} \right ) ^n + t \left ( \frac{-1 +  \sqrt{3}}{\sqrt{2}} \right )^n + u \left ( \frac{-1 - \sqrt{3}}{\sqrt{2}} \right ) ^n\\
C_n & = & \sqrt{2}C'_n & = & \sqrt{2} \left ( \alpha_n - \beta_n \right ) & = & \sqrt{2} \left ( r \left ( \frac{1 + \sqrt{3}}{\sqrt{2}} \right )^n + s \left ( \frac{1 - \sqrt{3}}{\sqrt{2}} \right ) ^n - t \left ( \frac{-1 +  \sqrt{3}}{\sqrt{2}} \right )^n - u \left ( \frac{-1 - \sqrt{3}}{\sqrt{2}} \right ) ^n  \right )
\end{matrix}\right.
$$

The final step is to find the values of $r$, $s$, $t$ and $u$. For that we need to figure out basecases, namely:

$$
\left\{\begin{matrix}
B_0 & = & 1\\ 
C_0 & = & 0\\ 
B_1 & = & 1\\
C_1 & = & 3
\end{matrix}\right.
$$

$$
\left\{\begin{matrix}
r+s+t+u & = & 1\\ 
\sqrt{2} \left ( r+s-t-u \right ) & = & 0\\ 
r  \frac{1 +  \sqrt{3}}{\sqrt{2}} + s \frac{1 - \sqrt{3}}{\sqrt{2}} + t \frac{-1 +  \sqrt{3}}{\sqrt{2}} + u \frac{-1 - \sqrt{3}}{\sqrt{2}} & = & 1\\
\sqrt{2} \left ( r  \frac{1 +  \sqrt{3}}{\sqrt{2}} + s \frac{1 - \sqrt{3}}{\sqrt{2}} - t \frac{-1 +  \sqrt{3}}{\sqrt{2}} - u \frac{-1 - \sqrt{3}}{\sqrt{2}} \right ) & = & 3
\end{matrix}\right.
$$

$$
\left\{\begin{matrix}
r+s & = & \frac{1}{2}\\ 
t+u & = & \frac{1}{2}\\ 
(r+s) \frac{1}{\sqrt{2}} + (r-s) \frac{\sqrt{3}}{\sqrt{2}} + (t+u) \frac{-1}{\sqrt{2}} + (t-u) \frac{\sqrt{3}}{\sqrt{2}} & = & 1\\
(r+s) - (r-s) \sqrt{3} + (t+u) - (t-u) \sqrt{3} & = & 3\\
\end{matrix}\right.
$$

$$
\left\{\begin{matrix}
r+s & = & \frac{1}{2}\\ 
t+u & = & \frac{1}{2}\\ 
\frac{1}{2} \frac{1}{\sqrt{2}} + (r-s) \frac{\sqrt{3}}{\sqrt{2}} + \frac{1}{2} \frac{-1}{\sqrt{2}} + (t-u) \frac{\sqrt{3}}{\sqrt{2}} & = & 1\\
1 + ((r-s)-(t-u)) \sqrt{3} & = & 3\\
\end{matrix}\right.
$$

$$
\left\{\begin{matrix}
r+s & = & \frac{1}{2}\\ 
t+u & = & \frac{1}{2}\\ 
(r-s) \frac{\sqrt{3}}{\sqrt{2}} + (t-u) \frac{\sqrt{3}}{\sqrt{2}} & = & 1\\
((r-s)-(t-u)) \sqrt{3} & = & 2\\
\end{matrix}\right.
$$

$$
\left\{\begin{matrix}
r+s & = & \frac{1}{2}\\ 
t+u & = & \frac{1}{2}\\ 
(r-s) \frac{\sqrt{3}}{\sqrt{2}} + (t-u) \frac{\sqrt{3}}{\sqrt{2}} & = & 1\\
(r-s)-(t-u) & = & \frac{2}{\sqrt{3}}\\
\end{matrix}\right.
$$

$$
\left\{\begin{matrix}
r+s & = & \frac{1}{2}\\ 
t+u & = & \frac{1}{2}\\ 
(r-s) + (t-u) & = & \frac{\sqrt{2}}{\sqrt{3}}\\
(r-s)-(t-u) & = & \frac{2}{\sqrt{3}}\\
\end{matrix}\right.
$$

$$
\left\{\begin{matrix}
r+s & = & \frac{1}{2}\\ 
t+u & = & \frac{1}{2}\\
r-s & = & \frac{1}{\sqrt{6}} + \frac{1}{\sqrt{3}}\\
t-u & = & \frac{1}{\sqrt{6}} - \frac{1}{\sqrt{3}}\\
\end{matrix}\right.
$$

$$
\left\{\begin{matrix}
r & = & \frac{1}{4} + \frac{1}{2 \sqrt{6}} + \frac{1}{ 2 \sqrt{3}}\\
s & = & \frac{1}{4} - \frac{1}{2 \sqrt{6}} - \frac{1}{ 2 \sqrt{3}}\\
t & = & \frac{1}{4} + \frac{1}{2 \sqrt{6}} - \frac{1}{ 2 \sqrt{3}}\\
u & = & \frac{1}{4} - \frac{1}{2 \sqrt{6}} + \frac{1}{ 2 \sqrt{3}}\\
\end{matrix}\right.
$$

Assembling all of this together we get that $C_n$ equals the sum of the four terms

$$
C_n = 
\sqrt{2} \left ( \left ( \frac{1}{4} + \frac{1}{2 \sqrt{6}} + \frac{1}{ 2 \sqrt{3}} \right ) \left ( \frac{1 + \sqrt{3}}{\sqrt{2}} \right )^n \\
+ \sqrt{2} \left ( \frac{1}{4} - \frac{1}{2 \sqrt{6}} - \frac{1}{ 2 \sqrt{3}} \right ) \left ( \frac{1 - \sqrt{3}}{\sqrt{2}} \right ) ^n \\
- \sqrt{2} \left ( \frac{1}{4} + \frac{1}{2 \sqrt{6}} - \frac{1}{ 2 \sqrt{3}} \right ) \left ( \frac{-1 +  \sqrt{3}}{\sqrt{2}} \right )^n \\
- \sqrt{2} \left ( \frac{1}{4} - \frac{1}{2 \sqrt{6}} + \frac{1}{ 2 \sqrt{3}} \right ) \left ( \frac{-1 - \sqrt{3}}{\sqrt{2}} \right ) ^n \right )
$$

Since $C_n$ is the number of solutions of a $3 \times (n+1) $ grid, our answer is 

# Answer

$$ \sqrt{2} \left ( \left ( \frac{1}{4} + \frac{1}{2 \sqrt{6}} + \frac{1}{ 2 \sqrt{3}} \right ) \left ( \frac{1 + \sqrt{3}}{\sqrt{2}} \right )^{n-1} \\ + \left ( \frac{1}{4} - \frac{1}{2 \sqrt{6}} - \frac{1}{ 2 \sqrt{3}} \right ) \left ( \frac{1 - \sqrt{3}}{\sqrt{2}} \right ) ^{n-1} \\ - \left ( \frac{1}{4} + \frac{1}{2 \sqrt{6}} - \frac{1}{ 2 \sqrt{3}} \right ) \left ( \frac{-1 +  \sqrt{3}}{\sqrt{2}} \right )^{n-1} \\ - \left ( \frac{1}{4} - \frac{1}{2 \sqrt{6}} + \frac{1}{ 2 \sqrt{3}} \right ) \left ( \frac{-1 - \sqrt{3}}{\sqrt{2}} \right ) ^{n-1} \right ) $$


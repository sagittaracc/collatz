# Basic definitions
Harut-element is a fundamental unit of the model. You may think of it as a simple black dot.

Harut-couple is a pair of two Harut-elements.

Harut-system is a set that may consist of Harut-elements and Harut-couples.

# Notation
The Harut-element is denoted by the letter `h`.

The Harut-couple is denoted by the letter `H`.

The Harut-system is denoted using curly braces.

# Classification of Harut-systems
Harut-systems can be stable or unstable.

Stable Harut-system is a system that consists of only Harut-couples. It is denoted as (H, …).

Unstable Harut-system is a system in which there is one Harut-element. It is denoted as (H, …, h).

# Fundamental principles
    1. A Harut-element tends to form a pair with another Harut-element.
    2. A stable Harut-system tends to split into two equal parts.
*Examples*:

(h, h) = (H)

(H, H) = (H) (H)

(H, H, H) = (H, H, h, h) = (H, h) (H, h)

# Harut-system dimension
It is the number of Harut-couples in the system. It is denoted as (H, ...)<sub>N</sub>, where N represents the dimension of the system.

# Mutation
A mutation is any change in a Harut-system. By change, we mean that elements may be added to or removed from the system. The system may also be divided into equal parts, or parts may be repeated.

Mutations may have a stabilizing or destabilizing effect on the system.

*Examples*:

(H, …, h)<sub>N</sub> + (h) = (H, ...)<sub>N</sub> + (h, h) = (H, ...)<sub>N</sub> + (H) = (H, ...)<sub>N+1</sub>

3 x (H, …, h)<sub>N</sub> = (H, …, h)<sub>N</sub> + (H, …, h)<sub>N</sub> + (H, …, h)<sub>N</sub> = (H, ...)<sub>3N</sub> + (h, h) + (h) = (H, ...)<sub>3N</sub> + (H) + (h) = (H, …, h)<sub>3N+1</sub>

3 x (H, …, h)<sub>N</sub> + (h) = (H, …, h)<sub>3N+1</sub> + (h) = (H, ...)<sub>3N+1</sub> + (h, h) = (H, ...)<sub>3N+2</sub>

# Decomposability
Decomposability is the property of a stable Harut-system to be divided into an equal number of smaller systems without breaking its stability.

This property is denoted as <sup>m</sup>(H, ...)<sub>N</sub>, where m indicates the number of equal parts into which the system can be decomposed while preserving stability.

Any decomposable stable Harut-system is denoted by the letter S (e.g. <sup>2</sup>S – 2-decomposable stable Harut-system)

# Harut-mutation
We will refer to a mutation of the form 3 x (<sup>2</sup>S, h) + h as a Harut-mutation.

**Theorem**: The Harut-mutation is stabilizing; however, if applied recursively to a Harut-system requiring stabilization, the system degenerates.

**Proof**: We will describe the chain of system stabilization and division in accordance with the fundamental principles of Harut-system lifecycle.

<sup>2</sup>(H, …, h)<sub>N</sub>

→ (stabilization) 3 x <sup>2</sup>(H, …, h)<sub>N</sub> + (h)

→ <sup>2</sup>(H, …, h)<sub>N</sub> + <sup>2</sup>(H, …, h)<sub>N</sub> + <sup>2</sup>(H, …, h)<sub>N</sub> + (h)

→ <sup>2</sup>(H, …)<sub>N</sub> + <sup>2</sup>(H, …)<sub>N</sub> + <sup>2</sup>(H, …)<sub>N</sub> + (h, h, h, h)

→ <sup>2</sup>(H, …)<sub>N</sub> + <sup>2</sup>(H, …)<sub>N</sub> + <sup>2</sup>(H, …)<sub>N</sub> + (H, H)

→ (division) <sup>2</sup>(H, …)<sub>N</sub> + <sup>2</sup>(H, …)<sub>N/2</sub> + H

→ (H, …)<sub>N+N/2+1</sub>

After stabilization and division, the Harut-system <sup>2</sup>(H, …, h)<sub>N</sub> mutates into (H, …)<sub>N+N/2+1</sub>.

Since the Harut-system initially had the 2-decomposable property, we cannot guarantee that the system still possesses this property.

We are sure, though, that it is still stable.

Therefore, in accordance with the fundamental principles, the Harut-system must divide into two equal parts; however, after division, it may break down into two stable systems or two unstable ones.

(H, …)<sub>N+N/2+1</sub> → (H, …)<sub>(N+N/2+1)/2</sub>

Or

(H, …)<sub>N+N/2+1</sub> → (H, …, h)<sub>⌊(N+N/2+1)/2⌋</sub>

After all mutations, the dimension of the system will stably be ⌊(N+<sup>N</sup>/<sub>2</sub>+1)/2⌋ and, in the longest mutation scenario, will enter the life cycle of N → ⌊(N+<sup>N</sup>/<sub>2</sub>+1)/2⌋

We will prove that the recursive function converges.

N = ⌊(N+<sup>N</sup>/<sub>2</sub>+1)/2⌋

Proof using the deviation from the fixed point method. The stationary point is L = 2.

Let’s consider the difference D<sub>i</sub> = N<sub>i</sub> – 2.

N<sub>i+1</sub> – 2 = ⌊(3N<sub>i</sub> + 2) / 4⌋ – 2 = ⌊(3N<sub>i</sub> + 2 – 8) / 4⌋ = ⌊(3N<sub>i</sub> – 6) / 4⌋ = ⌊3(N<sub>i</sub> – 2) / 4⌋ = ⌊3D<sub>i</sub> / 4⌋

D<sub>i+1</sub> = ⌊3D<sub>i</sub> / 4⌋, D<sub>i</sub> > 0 => D<sub>i+1</sub> < D<sub>i</sub> Q.E.D.

Thus, the Harut-mutation leads to the degradation of the system, starting from <sup>2</sup>(H, …, h)<sub>N</sub>.

Now let us go backward from this system in the life cycle and see what leads to it.

Initially, the system is unstable, which means it was formed as a result of division.

<sup>2</sup>(H, …, h)<sub>N</sub> = (H, …, h)<sub>2n</sub> <= (H, …, )<sub>4n</sub> (H) = (H, ...)<sub>4n+1</sub>

It is impossible to form (H, ...)<sub>4n+1</sub> through stabilization, which means it was also formed as a result of division.

(H, ...)<sub>4n+1</sub> <= (H, ...)<sub>8n+2</sub>

Thus, two divisions occurred in a row before the initial system from which the degradation begins.

# The Collatz Conjecture
The Collatz Conjecture states that if you take any positive integer n and apply the following rules repeatedly, you will eventually reach the number 1.

The rules are:

If n is even, divide it by 2

If n is odd, multiply it by 3 and add 1

Let us draw an analogy between numbers and Harut-systems.

The (H, …)<sub>4n+1</sub> system represents a number A, such that A mod 4 = 1.

The (H, …)<sub>8n+2</sub> system represents a number B, such that B mod 4 = 2.

The two divisions in a row indicate that the degradation actually begins with a number C, such that C mod 4 = 0.

Harut-mutation represents the 3x+1 function

Thus, for all numbers where the remainder modulo 4 is 0, 1 or 2, the Collatz Conjecture is verified.

Let us prove that for any number D such that D mod 4 = 3, the Collatz Conjecture also holds.

D mod 4 = 3 => D = 4k + 3

4k + 3 is an odd number => C(D) = 3(4k + 3) + 1 = 12k + 10

(12k + 10) mod 4 = (12k mod 4) + (10 mod 4) = 10 mod 4 = (8 + 2) mod 4 = 2 mod 4 = 2

Thus, any number D such that D mod 4 = 3 will lead to a number E such that E mod 4 = 2.

The hypothesis for such numbers E has already been proven.

Q.E.D.

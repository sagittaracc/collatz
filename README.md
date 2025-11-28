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

This property is denoted as m(H, ...)N, where m indicates the number of equal parts into which the system can be decomposed while preserving stability.

Any decomposable stable Harut-system is denoted by the letter S (e.g. 2S – 2-decomposable stable Harut-system)

# Harut-mutation
We will refer to a mutation of the form 3 x (2S, h) + h as a Harut-mutation.

**Theorem**: The Harut-mutation is stabilizing; however, if applied recursively to a Harut-system requiring stabilization, the system degenerates.

**Proof**: We will describe the chain of system stabilization and division in accordance with the fundamental principles of Harut-system lifecycle.
2(H, …, h)N → (stabilization) 3 x 2(H, …, h)N + (h) → 2(H, …, h)N + 2(H, …, h)N + 2(H, …, h)N + (h) → 2(H, …)N + 2(H, …)N + 2(H, …)N + (h, h, h, h) → 2(H, …)N + 2(H, …)N + 2(H, …)N + (H, H) → (division) 2(H, …)N + 2(H, …)N/2 + H → (H, …)N+N/2+1

After stabilization and division, the Harut-system 2(H, …, h)N mutates into (H, …)N+N/2+1. Since the Harut-system initially had the 2-decomposable property, we cannot guarantee that the system still possesses this property. We are sure, though, that it is still stable.

Therefore, in accordance with the fundamental principles, the Harut-system must divide into two equal parts; however, after division, it may break down into two stable systems or two unstable ones.

(H, …)N+N/2+1 → (H, …)(N+N/2+1)/2

Or

(H, …)N+N/2+1 → (H, …, h)[(N+N/2+1)/2]

After all mutations, the dimension of the system will stably be [(N + N / 2 + 1) / 2] and, in the longest mutation scenario, will enter the life cycle of N → [(N + N / 2 + 1) / 2]

We will prove that the recursive function converges.

N = [(N + N / 2 + 1) / 2]

Proof using the deviation from the fixed point method. The stationary point is L = 2.

Let’s consider the difference Di = Ni – 2.

Ni+1 – 2 = [(3Ni + 2) / 4] – 2 = [(3Ni + 2 – 8) / 4] = [(3Ni – 6) / 4] = [3(Ni – 2) / 4] = [3Di / 4]

Di+1 = [3Di / 4], Di > 0 => Di+1 < Di

# The Collatz Conjecture
The Collatz Conjecture states that if you take any positive integer n and apply the following rules repeatedly, you will eventually reach the number 1.
The rules are:
If n is even, divide it by 2
If n is odd, multiply it by 3 and add 1
Let us draw an analogy between numbers and Harut-systems.

# The Harutyunyan Conjecture
**Conjecture**: the Collatz Conjecture degenerates if its sequence eventually reaches any odd number n where n – 1 is a multiple of 4 or even enough for the sequence to eventually reach a multiple of 4.

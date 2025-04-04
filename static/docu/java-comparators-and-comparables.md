# Comparing things in Java

## Introduction

Comparing primitives in Java goes pretty fast, assuming that you know the data type that is being compared, and the code will never be changed (or extended). However, this gets more complicated for Java's most used types: objects.

We don't typically have a convention to compare objects. You may think of the object's address, although it wouldn't make any sense to use it for comparisons or ordering logic. It is also very difficult to get the address of Java objects. Contrary to the popular belief, `toString()` contains the hashcode of the object, not its address. They are different as one can override the method in their custom classes. Also, many classes from `java.lang` have a custom implementation of `hashCode` and do not use the one that is offered by `Object`. For example, the hashcode of the `String` class implies directly the characters that form the string, while the hashcode of an `Integer` is its actual value.


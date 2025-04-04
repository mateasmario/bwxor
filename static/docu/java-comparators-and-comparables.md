# Comparing things in Java

## The need to compare

Comparing primitives in Java goes pretty fast, assuming that you know the data type that is being compared, and the code will never be changed (or extended). However, this gets more complicated for Java's most used types: objects.

We don't typically have a convention to compare objects. You may think of the object's address, although it wouldn't make any sense to use it for comparisons or ordering logic. It is also very difficult to get the address of Java objects. Contrary to the popular belief, `toString()` contains the hashcode of the object, not its address. They are different as one can override the method in their custom classes. Also, many classes from `java.lang` have a custom implementation of `hashCode` and do not use the one that is offered by `Object`. For example, the hashcode of the `String` class implies directly the characters that form the string, while the hashcode of an `Integer` is its actual value.

Java's recommendations for a proper `hashCode` implementation, according to the [official documentation](https://docs.oracle.com/javase/7/docs/api/java/lang/Object.html), are these:

> Whenever it is invoked on the same object more than once during an execution of a Java application, the hashCode method must consistently return the same integer, provided no information used in equals comparisons on the object is modified. This integer need not remain consistent from one execution of an application to another execution of the same application.
>
> If two objects are equal according to the equals(Object) method, then calling the hashCode method on each of the two objects must produce the same integer result.
>
> It is not required that if two objects are unequal according to the equals(java.lang.Object) method, then calling the hashCode method on each of the two objects must produce distinct integer results. However, the programmer should be aware that producing distinct integer results for unequal objects may improve the performance of hash tables.
>
> As much as is reasonably practical, the hashCode method defined by class Object does return distinct integers for distinct objects. (This is typically implemented by converting the internal address of the object into an integer, but this implementation technique is not required by the JavaTM programming language.)

The last phrase states that  `hashCode`'s return value depends on the JDK that implements it, Java specification never enforcing it to return the actual object address... although this is often the case.

## Primary keys?

We use objects to model real-life data for our business scenario. Usually, we need a way to compare these objects. For example, a government application may need to find a way to identify every individual in a unique way (see SSN). I believe that there are two strategies of comparing objects: each one adjusted to the user's needs. The need of a custom comparison logic can be motivated by:

1. uniquely identifying entities
2. order entities based on their attributes

The first case may reflect the SSN example above: you may want to find someone's medical records, but you have an entire list of such records, each one associated to a unique identifier. In this case, it is the Social Security number. The second motivation can be found on a list of patients that wait in a queue: they are prioritized based on the severity of the problem. This can be a formula that sums up the existing symptoms and multiplies each symptom with a severity factor.

Either way, one may need to specify the way objects are compared.

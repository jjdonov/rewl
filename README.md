
![rewl logo](rewl.png)

/ro͞ol/

Rewl was one of my first attempts at creating a fluent API (in javascript) and is certainly my first attempt at creating a rules engine (in any language).

## What’s a rule engine?
Well, if a car engine runs a car, then a rule engine runs ..er.. rules, right? That’s about as much as there is to it. So then, the real question is what is a rule? You can think of a rule like a law, and when you break a law some action or reprecussion occurs. 

> When x occurs then perform y.

## Why a rule engine? 

Well, at the time I had a lot of validations to write, and I had a new found love for functional programming. 

How it works We can think about any rule’s two defining characteristics, when and then, as functions. When is a boolean function that decides when to run the rule. The then clause can be modeled as a void function that takes some action.

```javascript
var when = (target, self) => {
  return target.bullseye ? true : false;

var then = (target, self) => {
  console.log('Bullseye!');
}
```

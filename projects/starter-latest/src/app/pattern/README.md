# pattern - lazy / eager (rare) loaded

<br>

In a nutshell, the pattern is a type which consists of a pre-packaged
combination of standalones and injectables which implement a
specific reusable use case which is consumed in a lazy feature (or rarely
in layout) with a help of "drop in" component instead of a route!

- Implementation in pattern/'pattern-name'/ folder

- Great for implementing of cross-cutting business features like document
manager, approval process, change history (audit log), notes or
comments which could be dropped in many lazy features

- **One way dependency between patterns and features, only features can
consume patterns but not the other way around**

- Consumed through main "drop in" component used in the templates of
lazy features (or rarely, layouts)

- Sharing logic between patterns follows familiar “extract one level up rule”
(into core or ui)

```
<!-- feature/order/order.component.html -->
<my-org-order-list />
<!-- other feature specific components... -->

<my-org-document-manager /> <!-- pattern consumed through the "drop in" component -->
```
- ***pattern is a "non-routed" feature***.

- Pattern is usually similar to a feature in that it’s a
combination of multiple standalones and injectables, but the main
difference is that pattern is consumed through its "drop in" component
(e.g. <my-org-document-manager [context]="context" ... /> ) instead
of a route config which is the case for the lazy features
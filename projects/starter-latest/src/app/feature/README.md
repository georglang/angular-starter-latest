- Implementation in 'feature/feature-name'/ folder
- **Isolation between lazy
features (features can’t import from one another) is one of the key properties
of this architecture.<br>
even if the implementation of a lazy feature
gets dirty, the isolation prevents the spread of that dirtiness, and it won’t
have effect on the rest of the application.**
- Complete isolation between features, features can’t import from one
another

- Always lazy loaded with the help of loadChildren() (pointing to feature
route config) instead of loadComponent() as that ensures uniform API and
universal extendability

- Smallest possible app is an app with single / first lazy loaded feature, this
again provides consistency and universal extendability, easy to add
additional features, and they all work in the same way

- Black box - can contain any kind of implementation and building blocks,
even if it gets dirty, the isolation prevents the spread, and it won’t have
effect on the rest of the application

- Throw-away nature, because of isolation it’s easy to throw it away and start
over. On the more positive note, it also becomes easy to extract it into a
library or move around.

- Large features can be further divided into lazy sub features to make them
more manageable and improve bundling (2nd, 3rd, … level navigation)

- Sharing logic between features (and sub-features) follows “extract one
level up rule” (e.g. into parent lazy feature, pattern, core or ui)
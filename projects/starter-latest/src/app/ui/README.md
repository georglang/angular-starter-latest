# ui - eager / lazy loaded
<br>

- Dumb Components
- ui/ should never contain
implementation of any services or other headless logic and at the same time
these components should never really import it from the core either. <br>
As an example, if we felt that a component from UI needs to import and inject
a service, then this should most likely happen in the parent component
instead (e.g. in layout or feature or pattern).
mechanism like selectors but instead will delegate this responsibility to the
parent component and receive data through inputs and notify parent about
the change through outputs.

- the generic UI components is that they **never consume any data directly from injected services or using a state management**

- in practice it will be consumed
by both the eager and lazy parts

- This eager / lazy versatility is enabled by the new amazing standalone
approach which allows us to cherry-pick only the standalones that we
need instead of receive them all at the same time which was the main
reason for previous best practice to never import the SharedModule in
CoreModule or AppModule .

- Implementation in ui/ folder
- Only template context based (standalones) building blocks like
- components, directives and pipes
Eager / lazy - each individual standalone will be imported and used

- explicitly in each feature, pattern or layout which needs it, the bundler is
then able to determine the optimal bundle into which such standalone will
be bundled

- Only generic reusable UI components, directives and pipes which communicate only through inputs and outputs

- Never bound to a specific state through service or state management
library (as it can’t import from the core anyway)
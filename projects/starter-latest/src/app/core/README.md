# core - eager loaded
<br>

-  Eager, available from start, part of the initial bundles size

- Only injector based (headless) building blocks like services, interceptors, guards, functions…

- Application configuration and setup in the provideCore()

- Content should be sub-structured based by domains (or
features), e.g. core/user/ , core/auth/ or core/product/

- Core logic is globally accessible and can be accessed by any layout,
feature and pattern

- Core is the place to extract logic, if it needs to be used more than one
feature , pattern or layout

- The core is the right place for all logic that needs to be available from the start like authentication state, guards or anything else that is necessary to be able to display information in the layout before loading of a specific lazy feature.

- The second most common content of the core will be domain (or feature)
specific injector based (headless) logic that is shared by more than one lazy
loaded feature
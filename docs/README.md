# Run With Strangers

[Heroku link][heroku]

[Trello link][trello]

[heroku]: https://run-with-strangers.herokuapp.com/#/
[trello]: https://trello.com/b/MJUhZoeL/full-stack-project-run-with-strangers

## Minimum Viable Product

Run With Strangers is a web application inspired by Tea With Strangers built using Ruby on Rails
and React/Redux.  By the end of Week 9, this app will, at a minimum, satisfy the
following criteria with smooth, bug-free navigation, adequate seed data and
sufficient CSS styling:

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] Production README
- [ ] Choose city
- [ ] Host event
- [ ] Join event in your city
- [ ] Dashboard of joined/hosted events

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Sample State][sample-state]

[wireframes]: wireframes
[components]: component-hierarchy.md
[sample-state]: sample-state.md
[api-endpoints]: api-endpoints.md
[schema]: schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days)

**Objective:** Functioning rails project with front-end Authentication

### Phase 2: City Model, API, and components (2 days)

**Objective:** Cities can be selected, rendered, and switched through City Selector and then dynamically rendered in City View.

### Phase 3: Event Model, API, and components (2 days)

**Objective:** Events can be generated, joined, wait-listed, and conditionally render based on city.

### Phase 4: Host functionality (1 day)

**Objective:** Users can become hosts logic updates for conditional rendering of both hosts in the city view and events in the host view.

### Phase 5: Dashboard operational (1 day, W2 Th 6pm)

**Objective:** Dashboard reflects both joined and hosted events and conditionally renders based on user status (host or regular user).

### Phase 6: - Final pixel perfectionation (1 day, W2 F 6pm)

**Objective:** Achieve >90% faithfulness to original both look and feel for all required use cases.

### Bonus Features (TBD)
- [ ] Google Map API
- [ ] Suggestions based on event details and user profiles

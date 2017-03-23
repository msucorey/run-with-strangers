# Run With Strangers

[Run With Strangers live][heroku]

[heroku]: https://run-with-strangers.herokuapp.com/#/

## Features and Implementation

Run With Strangers (RWS) is a web application inspired by Tea With Strangers.  Ruby on Rails with a PostgreSQL database handles back end operations while React.js with a Redux architectural framework handles front end presentation and user interface.

### Minimum Viable Product (MVP) Features
- [ ] New account creation, login, and guest/demo login
- [ ] Choose city
- [ ] Host event
- [ ] Join event in your city
- [ ] Dashboard of joined/hosted events

### Original Feature

Essentially, the site brings users and hosts together through hosted events that are specified according to training level and outcome.  This ability to specify event attributes is where RWS takes a functional step forward from Tea With Strangers where events only differentiate by date/time/location.

### Data Architecture

Using Rails and PostgreSQL, data was modeled into four main tables (Models) - Users, Events, Cities, and Hosts (upgraded User objects with ability to create/host Events).

Associations and join tables were built to handle the respective one-to-many and many-to-many relationships existing between the main data models.  A single Attendings join table tracked Users committed to Events - this table has an additional attribute to track status (such as "tentative" or "wait-listed").

Rails functionality was leveraged to more intuitively fetch data from the back end.  For example, Events were indexed by Cities using a Cities/:cityid/:eventid route.  This enabled a leaner data load as, in this case for example, the only Events of concern are those particular to the City of the current User's session.

![random-pic]

[random-pic]: https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2016/03/1458289957powerful-images3.jpg "funny pic"


## Future Directions for the Project

An avid marathoner who currently uses Dailymile, Garmin Connect, and Strava, I will continue to build out this site as an homage to those sites and as a labor of love to the community in making something more social, hoping to eventually pilot it among the Tidewater Striders running club in Hampton Roads, Virginia.

### Google Map functionality

Runners looking for a run date will always factor "distance from here" in deciding whether they can commit to a group run.

### Social Profiles

Rather than having users create yet another running site profile, my user profiles will be a user selected aggregation of links to other sites.  Users will be able to start out with nothing more than a Facebook or Google profile.

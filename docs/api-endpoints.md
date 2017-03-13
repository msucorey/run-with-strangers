# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users`

### Session

- `POST /api/session`
- `DELETE /api/session`

### Cities

- `GET /api/cities`
  - Cities index
- `GET /api/cities/:id`
  - City page info

### Hosts

- `GET /api/cities/:id/hosts`
  - Hosts by city
- `POST /api/cities/:id/hosts`
- `GET /api/cities/:id/hosts/:id`
  - Host detail view info
- `DELETE /api/cities/:id/hosts/:id`

### Events

- `GET /api/cities/:id/hosts/:id/events`
  - Events by host
- `POST /api/cities/:id/hosts/:id/events`
- `GET /api/cities/:id/hosts/:id/events/:id`
  - Event thumbnail info
- `POST /api/cities/:id/hosts/:id/events/:id`
- `PATCH /api/cities/:id/hosts/:id/events/:id`
- `DELETE /api/cities/:id/hosts/:id/events/:id`

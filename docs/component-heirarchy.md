## Component Hierarchy

**AuthFormContainer**
 - AuthForm

**HomeContainer**
 - NavBar
  - TopMenu
 - HomeScroll
 - Footer
  - FooterMenu

**CityContainer**
 - CitySelectorView
  - MajorCitySelector
  - MinorCityMenu
 - CityView
  - CityEvents
    - EventTile
  - FeaturedHosts
  - OtherHosts

**HostContainer**
 - HostView
  - HostSidebar
  - HostEvents
    - EventTile
  - HostIntro

**DashboardContainer**
 - DashboardView
  - DashboardMenu
  - DashboardSidebar
  - AttendeeEvents
  - HostEvents
  - HostThumbnail

## Routes

|Path   | Component   |
|-------|-------------|
| "/signup" | "AuthFormContainer" |
| "/login" | "AuthFormContainer" |
| "/" (index route) | "HomeContainer" |
| "/city" | "CityContainer" |
| "/city/:cityId" | "CityContainer" |
| "/city/:cityId/host/:hostId" | "HostContainer" |
| "/dashboard" | "DashboardContainer" |

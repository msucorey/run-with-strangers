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
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/home" | "HomeContainer" |
| "/home/city" | "CityContainer" |
| "/home/city/:cityId" | "CityContainer" |
| "/home/city/:cityId/host/:hostId" | "HostContainer" |
| "/dashboard" | "DashboardContainer" |

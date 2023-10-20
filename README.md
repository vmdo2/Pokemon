## Table of Contents
1. [Assignment](#assignment)
## Assignment

#### Task
In this programming assignment, you will implement a front-end interface using React that consumes an API. Please read through the entire MP before you start.

#### Requirements
Create a single-page React app that lets users interact with the data from one of the following APIs.
  - [TMDB](https://www.themoviedb.org/documentation/api)
  - [Pokemon](https://pokeapi.co/)
  - [NASA](https://api.nasa.gov/index.html)
  - [Marvel](https://developer.marvel.com/)
  - [CoinAPI](https://www.coinapi.io/)
  - [Balldontlie](https://www.balldontlie.io/) 
  - [Art Institute of Chicago](https://api.artic.edu/docs/) 

**Note that you may need to create an account and/or acquire an API key for some of the APIs.**

**The API you are working with may become temporarily unavailable. If/when this happens, it doesn't mean you are blocked from working on the MP. You can mock the data, i.e. create a local hard coded response and use that instead of making the request.**

**You may need to deal with APIs having rate-limiting policies. You can find ways to get around them like caching the results of large and common API calls**

**These are also good opportunities to think about how your app should handle errors.**

Your app should have the following features:
  - **A list view**:  where users can input a query into a search bar and the app returns a list of results that match the query (i.e. searching movies or pokemon). There should also be a way to sort the search results based on different properties of the results (such as the name or rank) and of specifying an ordering (ascending and descending). Also, the search bar should filter as you type. You can sort and filter in the client side.
  - **A gallery view**: that displays some kind of image media from the chosen API (gallery of movie posters). The gallery view should also have some kind filtering attribute where users can select one or many attributes and filter the gallery by them (i.e. genres of films or music).
  -  **A detail view**: When an item in the search view or the gallery view is clicked, the app should display the different attributes of the selected item. Also, this view should have previous and next buttons (can be implemented with arrows) that lets the user cycle through the list of objects. A detail view should have a specific route when navigated to. Basically, a user should be able to access the detail route through a specific url.

Here's an old example that fulfills these requirements: https://www.youtube.com/watch?v=DmDZuAr7QJE

You will also be required to use following tools:
  - Use [React Router](https://reactrouter.com/web/guides/quick-start) for routing.
  - Use [Axios](https://www.npmjs.com/package/axios) for API calls.
  - Use [PropTypes](https://facebook.github.io/react/docs/typechecking-with-proptypes.html) or [TypeScript](https://www.typescriptlang.org/docs/handbook/react.html).

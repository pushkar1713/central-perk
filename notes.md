## Lecture 5 :

- config driven ui
- optional chaining ?.
- props - properties
- object deconstructor
- spread operator
- map and for each
- reconcilation
- diff algorithm
- react fiber

## Lecture 6 :

- import and exports
- file structuring
- one way data binding
- use state hook
- syntheitic events

## Lecture 7 : (Exploring the world)

- Microservices
- separation of concern or single responsibility
- useEffect
- Two time when our page rerenders
  - when state changes
  - when props changes
- dependecy array

## Lecture 8 : (Finding the path)

- single page application
- routing
  - server side routing
  - client side routing
- dynamic routing

## Lecture 9 : (Let's get classy)

- class based components
- lifecycle

## Lecture 10 : (optimiziing our app)

- make a util component for filter menu
- make a custom hook for fetching resmenu
- make a custom hook for checking if the user is online or not
- code splitting
- instamart component
- lazy loading

## Lecture 11 : (jo dikhta hai vo bikta hai)

- style our app using tailwing

## Lecture 12 : (data is the new oil)

- prop drilling
- lifting the state up
- context api

## Lecture 13 : (react redux)

- react-redux

  - when we click on the button an action will be dispatched which will call a normal js function that will modify our desired slice in the redux store.
  - we cannot directly modify the slice
  - this function which is called to update the slice is known as reducer.
  - if we want to read a slice we have to called a funtion knowns as selector() which will give us the information to update the component
  - when we use the selector() it is known as subscribing to the store. it means that the componenet is reading something from the store (in sync with the store)

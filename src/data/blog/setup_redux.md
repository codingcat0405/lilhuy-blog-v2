---
title: Setup redux like a pro in your reactjs project
description: React and Redux form a powerful combination for building scalable, maintainable, and efficient web applications. Let's see how to set up Redux in a React project.
pubDatetime: 2022-06-15T10:00:00Z
tags:
  - react
  - redux
  - typescript
  - vite
featured: true
draft: false
---

# Introduction

- React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components and
  manages the state of those components efficiently. Redux, on the other hand, is a state management library for
  JavaScript applications, which can be used with any UI framework or library. It provides a predictable state container
  for managing the data in an application.
- Together, React and Redux form a powerful combination for building scalable, maintainable, and efficient web
  applications. React provides a simple and intuitive way to build UI components, while Redux provides a centralized and
  predictable way to manage the application state. By using these two libraries together, developers can create complex
  applications that are easy to reason about and maintain.

- There a lot of way to setup and use redux in your reactjs project. But today i’ll share with you the way i prefer
  using vite, typescript and redux and why i recommend you to use that. In this tutorial, I assume that you know the
  basic of react, redux and knew to use redux in reactjs project. I just focus on how we setup and organize our
  project’s folder structure. So let’s start.

# Redux and core concepts

<figure>
  <img
    src="/blogs-images/redux.gif"
    alt="Redux core concepts"
  />
  <figcaption class="text-center">
    Redux core concepts flow
  </figcaption>
</figure>

The core components of Redux are:

- **Store**: A centralized container that holds the application state.
  Reducer: A pure function that takes the current state and an action
  as input, and returns the new state.
- **Action**: An object that describes a change to the state. It includes a
  type property that specifies the type of action being performed and a
  payload property that contains any data associated with the action.
- **Middleware**: A function that intercepts and processes actions before
  they reach the reducer. It can be used for logging, error handling, and
  other cross-cutting concerns.

In reactJs, Redux usually use when you need a global state that can be
access across all components in your app. Such as the information about
logged-in user,…etc.  

## Let’s code

- First, let’s create a reactjs project using vite and typescript

```bash file=bash
yarn create vite
```

- Install dependencies. We install `@reduxjs/toolkit`  which is a package that provides abstractions and utilities on top of Redux to simplify the development process and improve performance. And of course react-redux for using redux in react project

```bash file=bash
yarn add @reduxjs/toolkit react-redux
```

- For this demo project we’ll save user state using Redux. Our project structure will looks like

```txt file=tree
src
│   main.tsx
│   App.tsx    
│
└───state
│   │   index.ts
│   └───user
│       │   reducer.ts
│       │   hooks.ts
│       │   index.ts
│   
└───components
│   Home.tsx
│   ...
```

- Create the state folder under src folder as the diagram below. Now let’s config the user slice in user folder
- Define the user slice and its reducer functions:

```typescript file=reducer.ts
//src/user/reducer.ts
import { createSlice } from "@reduxjs/toolkit";
export type UserStateType = {
    name: string;
    address: string;
    role: string;
}

const initialState: UserStateType = {
    address: "",
    name: "",
    role: "",
}
const userSlice = createSlice({
    initialState,
    name: "user",
    reducers: {
        setUser: (state, action) => {
            return action.payload
        },
    }
})
const { actions, reducer } = userSlice;
export const {
    setUser
} = actions
export default reducer;
```

- Here, we create a user slice with 3 properties name, address, role. And create a reducer for setUser
- Next step, we’ll create hooks to manipulate with this state. Copy this code in your src/state/user/hook.ts file

```typescript file=hook.ts
// src/state/user/hook.ts
import { useDispatch, useSelector } from "react-redux"
import { AppState } from "../index"
import { useCallback } from "react"
import { UserStateType, setUser } from "./reducer";
export const useUser = () => {
    const user = useSelector((state: AppState) => state.user)
    const dispatch = useDispatch()
    const onSetUser = useCallback((user: UserStateType) => {
        dispatch(setUser(user))
    }, [dispatch])
    return {
        user,
        onSetUser
    }   
}

```

- In this file, we create a custom hook called useUser which return a current user state by calling the useSelector hook and also return a function to update this state: onSetUser
- Finally, we export all hooks and reducer of user slice in src/state/user/index.ts

```typescript file=index.ts
import userReducer from "./reducer"
export * from "./hook"
export default userReducer
```

- Then we config our redux store in src/state/index.ts for using the user slice that we’ve set up

```typescript file=index.ts
import { configureStore } from "@reduxjs/toolkit"

import userReducer from "./user"

const rootReducer = {
    user: userReducer,
//add more reducer later below
}
const store = configureStore({
    reducer: rootReducer,
    devTools: true,
})
export default store
export type AppState = ReturnType<typeof store.getState>
```

- Tadaaaa!, now you’ve set up successfully a user state save in redux now let’s see how we use it in our component
- First, setup redux provider in your root component. Here, i set it up in main.tsx

```typescript jsx file=main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./state";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
.render(
<React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
</React.StrictMode>
);
```

- When everything is set up. You can access the state in the redux using the hooks that we’ve created. Like this example below, I create a component that have a button to update the user state by using the onSetUser function. It also show the current user state by using the user value return from the useUser hook

```typescript jsx file=App.tsx
import React from "react";
import { useUser } from "./state/user/hook";

function App() {
const { user, onSetUser } = useUser();
const updateUser = () => {
    onSetUser({
      name: "John Doe",
      address: "123 Main St",
      role: "admin",
    });
};
return (
    <div>
      <h1>React Redux TS</h1>
      <h2>current user state in redux: {JSON.stringify(user)}</h2>
      <br />
      <button onClick={updateUser}>Update User</button>
    </div>
);
}
export default App;
```

- If you follow to this step you can type yarn dev in your terminal for the result:
![result](/blogs-images/redux-result.png)
- For other slice you want to add to your redux state just repeat these steps below. That’s it!! Quite neet, right? If you want the code i leave the github repo here. Leave it a star if you like this blog <3. <https://github.com/lilhuy0405/react-redux-template>

# Conclusion

- I’ve shared with you how i normally setup redux in my reactjs project. There are many way out there you can chose to setup redux in your project. Using my method maybe complicate because to create a single state you need to set up a folder with 3 files for hooks reducers then exports all of these in the index file. But with the astraction power of hooks it make code in the component much more easily to read and maintaince. So what do you thing ? Leave the comment below.

# References

<https://redux-toolkit.js.org/>

<https://redux.js.org/>

<https://vitejs.dev/guide/>

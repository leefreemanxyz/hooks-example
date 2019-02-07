# A brief introduction to React Hooks

To write a React component you have (more or less) two options - functional components and class components.

Functional components are typically a pure function of their props, and are normally what we would consider presentational components. They have no state or lifecycle methods. They should be considered the default way to create a React component. Also, they're really easy to test (you can pass different props and take snapshots).

Sometimes you need to store some state in your component, so you convert your functional component into a class component. Now, you have all these lifecycle methods, which then get deprecated (e.g. componentWillReceiveProps), it's a lot more complex to test and they're generally less fun.

React Hooks let you add state and other features to your functional components without having to write a class! This is awesome.

## Built-in hooks

React comes with some built-in hooks. By convention all hooks are prefixed with `use`. The built-in hooks are:

- `useState`
- `useEffect`
- `useContext`
- `useReducer`

We'll focus on the first two of these.

### useState

useState lets you add state to a component. Here is a boring example of a counter.

```
function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

You can declare multiple useStates in a single component. 

### useEffect
You’ve likely performed data fetching, subscriptions, or manually changing the DOM from React components before. We call these operations “side effects” (or “effects” for short) because they can affect other components and can’t be done during rendering.

The Effect Hook, useEffect, adds the ability to perform side effects from a function component. It serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount in React classes, but unified into a single API. 

```
import React, { useState, useEffect } from 'react';

function FriendListItem(props) {
  const [isOnline, setIsOnline] = useState(null);

  function handleStatusChange(status) {
    setIsOnline(status.isOnline);
  }

  useEffect(() => {
    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  });

  return (
    <li style={{ color: isOnline ? 'green' : 'black' }}>
      {props.friend.name}
    </li>
  );
}
```

In this example, useEffect returns a function that can be used to clean up the side effect. Here it is used to unsubscribe from an API, but you would also use it to remove event listeners, for example.

## Custom Hooks

We can also write custom hooks, which is very cool. Let's look at an example that uses the width of the window.

Because of the nature of hooks - they're reusable bits of logic that everyone keeps writing over and over again - there are already LOADS of examples published on GitHub, like those found [here](https://github.com/streamich/react-use), which *hook* into all sorts of browser APIs and provide for other common use cases.


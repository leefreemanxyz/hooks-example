import React, { Component, useState, useEffect, useRef } from "react"
import { useWindowWidth, useComponentSize } from "./hooks"
import "./App.css"

class App extends Component {
	render() {
		return (
			<div className="App">
				<MyResponsiveComponent />
				<Example />
			</div>
		)
	}
}

export default App

function MyResponsiveComponent() {
	const width = useWindowWidth() // Our custom Hook
	return <p>Window width is {width}</p>
}

function Example() {
	// Declare a new state variable, which we'll call "count"
	const [count, setCount] = useState(0)
	// Similar to componentDidMount and componentDidUpdate:
	useEffect(() => {
		// Update the document title using the browser API
		document.title = `You clicked ${count} times`
	})

	return (
		<div>
			<p>You clicked {count} times</p>
			<button onClick={() => setCount(count + 1)}>Click me</button>
		</div>
	)
}

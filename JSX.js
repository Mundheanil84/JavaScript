
// SX (JavaScript XML) is a syntax extension for JavaScript used in React.js to describe the structure and content of user interfaces. It allows you to write HTML-like code within your JavaScript files. JSX provides a way to define and compose React components in a more declarative and intuitive manner.

import React from 'react';

// Define a functional component using JSX
const Greeting = () => {
	return (
		<div>
			<h1>Hello, React!</h1>
			<p>Welocome to the world of JSX.</p>
		</div>
	);
};

// Render the Greeting component in the DOM
ReactDOM.render(<Greeting />, document.getElementById('root'));


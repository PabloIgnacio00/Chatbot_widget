import React, ReactDOM from 'react'

const mountNode = document.getElementById('widget-mount-point');

// Extract the token value from the URL parameters
const urlParams = new URLSearchParams(window.location.search);
const token = urlParams.get('token');

<p>{token}</p>
// Render your React component into the DOM element, passing the token as a prop
ReactDOM.render(<Chatbot token={token} />, mountNode);

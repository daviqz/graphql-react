import React from 'react'
import ReactDOM from 'react-dom'
import ApolloProvider from './service/service'
import App from './App'
import './index.css'

ReactDOM.render(
    <ApolloProvider>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </ApolloProvider>,
    document.getElementById('root')
)

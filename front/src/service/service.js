import { ApolloClient, ApolloProvider as Provider} from '@apollo/client'
import { cache } from './cache'

const client = new ApolloClient({
    cache,
    uri: 'http://localhost:4000/graphql'
})

const ApolloProvider = ({children}) => 
    <Provider client={client}>
        {children}
    </Provider>

export default ApolloProvider
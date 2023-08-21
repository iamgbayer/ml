import { QueryClient, QueryClientProvider } from 'react-query'
import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch
} from 'react-router-dom'
import { QueryParamProvider } from 'use-query-params'
import { Header } from './components/header/header'
import { QueryParamsAdapter } from './components/query-params-adapter/query-params-adapter'
import { DetailedProduct } from './pages/detailed-product/detailed-product'
import { Items } from './pages/items/items'

const queryClient = new QueryClient()

function App() {
  return (
    <>
      <Router>
        <QueryParamProvider
          adapter={QueryParamsAdapter}
          options={{ removeDefaultsFromUrl: false }}
        >
          <QueryClientProvider client={queryClient}>
            <Header />

            <Switch>
              <Route path="/items" exact component={Items} />
              <Route path="/items/:id" exact component={DetailedProduct} />
              <Redirect from="/" to="/items" />
            </Switch>
          </QueryClientProvider>
        </QueryParamProvider>
      </Router>
    </>
  )
}

export default App

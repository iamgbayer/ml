import { render } from '@testing-library/react'
import { createBrowserHistory } from 'history'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Router } from 'react-router-dom'
import { QueryParamProvider } from 'use-query-params'
import { QueryParamsAdapter } from './components/query-params-adapter/query-params-adapter'

const queryClient = new QueryClient()
const history = createBrowserHistory()

export const setup = () => {
  return {
    render: (children: any) =>
      render(children, {
        wrapper: (props) => (
          <Router history={history}>
            <QueryClientProvider client={queryClient}>
              <QueryParamProvider adapter={QueryParamsAdapter}>
                {props.children}
              </QueryParamProvider>
            </QueryClientProvider>
          </Router>
        )
      })
  }
}

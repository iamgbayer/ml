import { Location } from 'history'
import { useHistory } from 'react-router-dom'

export const QueryParamsAdapter = ({ children }: any) => {
  const history = useHistory()

  const adapter = {
    replace(location: Location) {
      history.replace(
        { ...history.location, search: location.search },
        location.state
      )
    },
    push(location: Location) {
      history.push(
        { ...history.location, search: location.search },
        location.state
      )
    },
    get location() {
      return history.location
    }
  }

  return children(adapter)
}

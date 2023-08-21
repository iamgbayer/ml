import { decode } from 'querystring'
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

export const useGetParams = () => {
  const history = useHistory()
  const [params, setParams] = useState(() => {
    const search = history.location.search
    return decode(search.replace('?', ''))
  })

  useEffect(() => {
    history.listen(({ search }) => setParams(decode(search.replace('?', ''))))
  }, [history])

  return params as Record<string, string>
}

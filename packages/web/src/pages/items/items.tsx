import { Breadcrumb } from '../../components/breadcrumb/breadcrumb'
import { useGetItems } from '../../hooks/use-get-items'
import { Item } from './item/item'
import './items.scss'

export const Items = () => {
  const { data, isFetching, error } = useGetItems()

  if (isFetching) {
    return <>Carregando</>
  }

  if (error) {
    return <>{error.message}</>
  }

  if (!data) {
    return <></>
  }

  return (
    <div className="container">
      <Breadcrumb categories={data.categories} />

      <div className="items">
        {data.items.map((item) => (
          <div key={item.id}>
            <Item item={item} />

            {item !== data.items[data.items.length - 1] && (
              <hr className="item__separator" />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

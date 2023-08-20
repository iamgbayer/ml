import { useHistory } from 'react-router-dom'
import freeShipping from '../../../assets/ic_shipping.png'
import { Product } from '../../../dtos/product'
import { useGetParams } from '../../../hooks/use-get-params'
import { Money } from '../../../vos/money'
import './item.scss'

type Props = {
  item: Product
}

export const Item = ({ item }: Props) => {
  const history = useHistory()
  const params = useGetParams()

  return (
    <div
      className="item"
      data-testid="item"
      key={item.id}
      onClick={() => history.push(`/items/${item.id}?q=${params.q}`)}
    >
      <img src={item.picture} alt={item.title} className="item__image" />

      <div>
        <div>
          <span>$ {Money.build(item.price.amount).getValue()}</span>
          {item.free_shipping && (
            <img
              className="item__free-shipping"
              src={freeShipping}
              alt="Free shipping"
            />
          )}
        </div>

        <span className="item__title" data-testid="item-title">
          {item.title}
        </span>
      </div>
    </div>
  )
}

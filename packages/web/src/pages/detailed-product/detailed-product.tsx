import { useParams } from 'react-router-dom'
import { useGetDetailedProduct } from '../../hooks/use-get-detailed-product'
import { Money } from '../../vos/money'
import './detailed-product.scss'

export const DetailedProduct = () => {
  const params = useParams<{ id: string }>()
  const { data, isFetching, error } = useGetDetailedProduct(params.id)

  if (isFetching) {
    return <>Carregando</>
  }

  if (error) {
    return <>{error.message}</>
  }

  if (!data) {
    return <></>
  }

  const conditionText = data.item.condition === 'new' ? 'Nuevo' : 'Usado'
  const soldQuantity = data.item.sold_quantity
  const soldQuantityText =
    soldQuantity === 1 ? '1 vendido' : `${soldQuantity} vendidos`

  return (
    <>
      <div className="container">
        <div className="detailed-product">
          <div className="detailed-product__container">
            <div className="detailed-product__image">
              <img src={data.item.picture} alt={data.item.title} />
            </div>

            <div className="detailed-product__info">
              <h2 className="detailed-product__details">
                <span data-testid="detailed-product-condition">
                  {conditionText}
                </span>{' '}
                - {soldQuantityText}
              </h2>
              <h1
                className="detailed-product__title"
                data-testid="detailed-product-title"
              >
                {data.item.title}
              </h1>

              <h3
                className="detailed-product__price"
                data-testid="detailed-product-price"
              >
                $ {Money.build(data.item.price.amount).getValue()}
              </h3>

              <button className="detailed-product__button" onClick={() => {}}>
                Comprar
              </button>
            </div>
          </div>

          <div className="detailed-product__description">
            <h2 className="detailed-product__description-title">
              Descripción del producto
            </h2>
            <p>{data.item.description}</p>
          </div>
        </div>
      </div>
    </>
  )
}

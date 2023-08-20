import './breadcrumb.scss'
import { Separator } from './separator'

type Props = {
  categories: string[]
}

export const Breadcrumb = ({ categories }: Props) => {
  return (
    <div className="breadcrumb">
      {categories.map((category, index) => (
        <div key={category}>
          <span key={index}>{category}</span>
          {index < categories.length - 1 && <Separator />}
        </div>
      ))}
    </div>
  )
}

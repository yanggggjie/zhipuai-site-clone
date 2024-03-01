import _ from 'lodash'
import { clsx } from 'clsx'
import { ModalList } from '@/app/components/Footer/Connect/ModalList'
import { ProductList } from '@/app/components/Footer/Connect/ProductList'
import { AMinerList } from '@/app/components/Footer/Connect/AMinerList'
import { VirtualPeopleList } from '@/app/components/Footer/Connect/VirualPeopleList'
import { Contact } from '@/app/components/Footer/Connect/Contact'
import { Logo } from '@/app/components/Footer/Connect/Logo'
interface Props {}

export default function Connect({}: Props) {
  return (
    <div className={clsx('flex flex-row items-start justify-evenly', 'p-10')}>
      <div className={'mr-10'}>
        <Logo></Logo>
      </div>
      <ModalList></ModalList>
      <ProductList></ProductList>
      <AMinerList></AMinerList>
      <VirtualPeopleList></VirtualPeopleList>
      <Contact></Contact>
    </div>
  )
}

import _ from 'lodash'
import { clsx } from 'clsx'
import Copyright from '@/app/components/Footer/Copyright'
import Connect from '@/app/components/Footer/Connect/Connect'
import Expert from '@/app/components/Footer/Expert/Expert'
interface Props {}

export default function Footer({}: Props) {
  return (
    <div className={clsx('mt-10', 'space-y-10')}>
      <Expert></Expert>
      <Connect></Connect>
      <Copyright></Copyright>
    </div>
  )
}

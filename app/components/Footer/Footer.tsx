import _ from 'lodash'
import { clsx } from 'clsx'
import Copyright from '@/app/components/Footer/Copyright'
import Connect from '@/app/components/Footer/Connect/Connect'
interface Props {}

export default function Footer({}: Props) {
  return (
    <div>
      <Connect></Connect>
      <Copyright></Copyright>
    </div>
  )
}

import { parseISO, format } from 'date-fns'
import ja from 'date-fns/locale/ja'

export default function ConvertDate({ dateISO }) {
  return (
    <time dateTime={dateISO}>
      {format(parseISO(dateISO), 'yyyy年MM月dd日', {
        locale: ja,
      })}
    </time>
  )
}

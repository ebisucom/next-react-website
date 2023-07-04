import styles from 'styles/pagination.module.css'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'

export default function Pagination({
  prevText = '',
  prevUrl = '',
  nextText = '',
  nextUrl = '',
}) {
  return (
    <ul className={styles.flexContainer}>
      {prevText && prevUrl && (
        <li className={styles.prev}>
          <Link href={prevUrl} className={styles.iconText}>

            <FontAwesomeIcon icon={faChevronLeft} color="var(--gray-25)" />
            <span>{prevText}</span>

          </Link>
        </li>
      )}
      {nextText && nextUrl && (
        <li className={styles.next}>
          <Link href={nextUrl} className={styles.iconText}>

            <span>{nextText}</span>
            <FontAwesomeIcon icon={faChevronRight} color="var(--gray-25)" />

          </Link>
        </li>
      )}
    </ul>
  );
}

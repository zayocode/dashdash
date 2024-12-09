import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from '@/app/ui/home.module.css';
import { lusitana } from '@/app/ui/fonts';
 
export default function Page() {
  return (
      <div className={styles.shape}>
      <p className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}> Hello there boysss </p>
      </div>
  )
}

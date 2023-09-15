import { ChevronRightIcon} from '@radix-ui/react-icons'
import styles from './announcement-bar.module.css';

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export interface AnnouncementProps {
  data:{
    id: string;
    url: string;
    title: any;
    description: any;
  }
}

export function AnnouncementBar({data}:AnnouncementProps) {
  return (
    <a href={data.url}>
      <Alert  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#1c1917', color: '#fafaf9' }} >
        <AlertTitle>{data.title}</AlertTitle>
        <AlertDescription className={styles['announcement_bar_alert']}>
          {data.description}<ChevronRightIcon style={{color: "white", display: "inline" }} className={styles['chevron_rightIcon']}/>
        </AlertDescription>
      </Alert>
    </a>
  )
}

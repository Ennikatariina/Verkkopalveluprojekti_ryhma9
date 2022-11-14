import React from 'react'
import styles from './stylegooglemaps.module.css'


export default function GoogleMaps() {
  return (
    <iframe className={styles.googlemap} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26943.49877870517!2d25.453679429948444!3d65.034876511535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4681cd52c7bb803d%3A0x40f55b6d25f0d1db!2sOulun%20ammattikorkeakoulu!5e0!3m2!1sfi!2sfi!4v1668456903375!5m2!1sfi!2sfi"
    style={{border:0}}
    allowFullScreen="" 
    loading="lazy" 
    referrerPolicy="no-referrer-when-downgrade">
    </iframe>
  )
}

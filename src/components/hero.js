import React from 'react'
import {GatsbyImage, StaticImage} from 'gatsby-plugin-image'

import * as styles from './hero.module.css'

const Hero = ({ title, content }) => (
  <div className={styles.hero}>


    <StaticImage layout="fullWidth" className={styles.image} alt="vilivesoft" src="../images/arrow.jpg" />
    <div className={styles.details}>
      {/*<h1 className={styles.title}>{title}</h1>*/}
      {content && (
        <div className={styles.content}>{content}</div>
      )}
        <div>
            <p>
                At vilivesoft we think that most of the things that make our days are the interaction
                that we do with small business and a world of innovation opportunities that can make our lives
                more accessible, and better are waiting to happen;
            </p>
        </div>
    </div>
  </div>
)

export default Hero

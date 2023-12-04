import React from 'react'

import Container from './container'
import * as styles from './footer.module.css'

const Footer = () => (
  <Container as="footer">
    <div className={styles.container}>
      <a href="https://vilivesoft.com">vilivesoft.com</a> &middot;
    </div>
  </Container>
)

export default Footer

import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Icon = ({ size, ...props }) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="currentcolor"
  >
    <path
      d="M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10S17.5,2,12,2z M18.9,8H16
	c-0.3-1.2-0.8-2.5-1.4-3.6C16.4,5.1,18,6.3,18.9,8z M12,4c0.8,1.2,1.5,2.5,1.9,4h-3.8C10.5,6.6,11.2,5.2,12,4z M4.3,14
	C4.1,13.4,4,12.7,4,12s0.1-1.4,0.3-2h3.4c-0.1,0.7-0.1,1.3-0.1,2s0.1,1.3,0.1,2H4.3z M5.1,16h3c0.3,1.2,0.8,2.5,1.4,3.6
	C7.6,18.9,6,17.7,5.1,16L5.1,16z M8,8H5c1-1.7,2.5-2.9,4.3-3.6C8.8,5.5,8.3,6.8,8,8L8,8z M12,20c-0.8-1.2-1.5-2.5-1.9-4h3.8
	C13.5,17.4,12.8,18.8,12,20z M14.3,14H9.7c-0.1-0.7-0.2-1.3-0.2-2s0.1-1.4,0.2-2h4.7c0.1,0.6,0.2,1.3,0.2,2S14.4,13.3,14.3,14z
	 M14.6,19.6c0.6-1.1,1.1-2.3,1.4-3.6h2.9C18,17.6,16.4,18.9,14.6,19.6L14.6,19.6z M16.4,14c0.1-0.7,0.1-1.3,0.1-2s-0.1-1.3-0.1-2
	h3.4c0.2,0.6,0.3,1.3,0.3,2s-0.1,1.4-0.3,2H16.4z"
    />
  </svg>
)

const GlobeIcon = styled(Icon)([], space, color)

GlobeIcon.displayName = 'GlobeIcon'

GlobeIcon.defaultProps = {
  size: 24
}

export default GlobeIcon
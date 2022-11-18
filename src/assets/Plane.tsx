import * as React from 'react'
import Svg, { FillProps, Path } from 'react-native-svg'

export default ({ fill }: FillProps) => (
  <Svg viewBox="0 0 19.11 19.48" fill="none">
    <Path
      d="M7.55,18.73l2-1.94-1-2.92L11.44,11l4.86,6.8,1.95-1.94L14.74,7.66l3-3a2.06,2.06,0,0,0-2.92-2.92l-3,3L4.15.75,1.72,3.18,8.53,8,6,10.62,2.69,10,.75,11.93l4.37,2.43Z"
      fill={fill}
    />
  </Svg>
)

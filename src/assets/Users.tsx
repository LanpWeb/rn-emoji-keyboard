import * as React from 'react'
import Svg, { FillProps, Path } from 'react-native-svg'

export default ({ fill }: FillProps) => (
  <Svg viewBox="0 0 20.62 21.3" fill="none">
    <Path
      d="M7.56,10.37H7.3a5.15,5.15,0,1,1,.29,0ZM7.4,1.5a3.69,3.69,0,0,0-.14,7.37h.32A3.69,3.69,0,0,0,7.4,1.5Z"
      fill={fill}
    />
  </Svg>
)

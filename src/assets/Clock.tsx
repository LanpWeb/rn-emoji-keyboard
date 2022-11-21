import * as React from 'react'
import Svg, { FillProps, Path } from 'react-native-svg'

export default ({ fill }: FillProps) => (
  <Svg viewBox="0 0 24 24" fill="none">
    <Path
      d="M12,22A10,10,0,1,1,22,12,10,10,0,0,1,12,22ZM12,3.4A8.6,8.6,0,1,0,20.6,12,8.61,8.61,0,0,0,12,3.4Zm3.1,10.74a.59.59,0,0,1-.29-.07l-3.1-1.44A.69.69,0,0,1,11.3,12V7.51a.7.7,0,1,1,1.4,0v4l2.7,1.26a.7.7,0,0,1-.3,1.33Z"
      fill={fill}
    />
  </Svg>
)

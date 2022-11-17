import * as React from 'react'
import Svg, { FillProps, Path } from 'react-native-svg'

export default ({ fill }: FillProps) => (
  <Svg viewBox="0 0 18.87 19.5" fill="none">
    <Path
      d="M13.5,15.5H3.81A3.91,3.91,0,0,1,0,11.5,3.89,3.89,0,0,1,2.89,7.65,5.92,5.92,0,0,1,4.26,2,6.55,6.55,0,0,1,10.78.27a6,6,0,0,1,4.05,4.64,5.26,5.26,0,0,1,3.8,3.66,5.23,5.23,0,0,1-1.5,5.53A5.37,5.37,0,0,1,13.5,15.5ZM3.83,9A2.41,2.41,0,0,0,1.5,11.5,2.42,2.42,0,0,0,3.86,14H13.5a3.87,3.87,0,0,0,2.63-1,3.77,3.77,0,0,0,1.06-4A3.76,3.76,0,0,0,14.1,6.3a.74.74,0,0,1-.64-.62,4.64,4.64,0,0,0-3.12-4A5.1,5.1,0,0,0,5.34,3a4.62,4.62,0,0,0-.78,5A.75.75,0,0,1,4.1,9,.59.59,0,0,1,3.83,9Z"
      fill={fill}
    />
    <Path
      d="M9.44,18.75A.76.76,0,0,1,8.69,18V14.79a.75.75,0,1,1,1.5,0V18A.77.77,0,0,1,9.44,18.75Z"
      fill={fill}
    />
    <Path d="M13.44,19.5h-4a.75.75,0,1,1,0-1.5h4a.75.75,0,0,1,0,1.5Z" fill={fill} />
    <Path d="M9.44,19.5h-4a.75.75,0,0,1,0-1.5h4a.75.75,0,0,1,0,1.5Z" fill={fill} />
  </Svg>
)

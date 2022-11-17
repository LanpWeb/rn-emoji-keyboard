import * as React from 'react'
import Svg, { FillProps, Path } from 'react-native-svg'

export default ({ fill }: FillProps) => (
  <Svg viewBox="0 0 20.62 21.3" fill="none">
    <Path
      d="M7.56,10.37H7.3a5.15,5.15,0,1,1,.29,0ZM7.4,1.5a3.69,3.69,0,0,0-.14,7.37h.32A3.69,3.69,0,0,0,7.4,1.5Z"
      fill={fill}
    />
    <Path
      d="M14.94,10.5h-.09A.79.79,0,0,1,14,9.83.73.73,0,0,1,14.6,9H15a2.75,2.75,0,0,0-.15-5.5.75.75,0,0,1,0-1.5A4.25,4.25,0,0,1,15,10.5Z"
      fill={fill}
    />
    <Path
      d="M7.57,21.3a9.88,9.88,0,0,1-5.42-1.5A4.31,4.31,0,0,1,0,16.25a4.32,4.32,0,0,1,2.15-3.56h0a10.59,10.59,0,0,1,10.84,0,4.31,4.31,0,0,1,2.15,3.55A4.31,4.31,0,0,1,13,19.8,9.88,9.88,0,0,1,7.57,21.3ZM3,13.94A2.87,2.87,0,0,0,1.5,16.25,2.9,2.9,0,0,0,3,18.56a9.08,9.08,0,0,0,9.18,0,2.91,2.91,0,0,0,1.48-2.32,2.9,2.9,0,0,0-1.48-2.31A9.11,9.11,0,0,0,3,13.94Z"
      fill={fill}
    />
    <Path
      d="M16.74,19.5A.75.75,0,0,1,16.59,18a4.33,4.33,0,0,0,1.66-.73,2,2,0,0,0,.87-1.55,1.93,1.93,0,0,0-.87-1.53,4.19,4.19,0,0,0-1.64-.73A.75.75,0,1,1,16.94,12a5.71,5.71,0,0,1,2.22,1,3.45,3.45,0,0,1,1.46,2.73,3.44,3.44,0,0,1-1.47,2.74,5.43,5.43,0,0,1-2.25,1A.44.44,0,0,1,16.74,19.5Z"
      fill={fill}
    />
  </Svg>
)

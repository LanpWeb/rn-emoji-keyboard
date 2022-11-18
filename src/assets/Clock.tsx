import * as React from 'react'
import Svg, { FillProps, Path } from 'react-native-svg'

export default ({ fill }: FillProps) => (
  <Svg viewBox="0 0 19.02 19.02" fill="none">
    <Path
      d="M9.51,19A9.51,9.51,0,1,1,19,9.51,9.53,9.53,0,0,1,9.51,19Zm0-17.39a7.88,7.88,0,1,0,7.88,7.88A7.88,7.88,0,0,0,9.51,1.63Zm2.9,10a.72.72,0,0,1-.35-.08l-2.9-1.34a.83.83,0,0,1-.47-.74V5.31a.82.82,0,0,1,.82-.82.82.82,0,0,1,.81.82V9l2.43,1.13a.81.81,0,0,1-.34,1.55Z"
      fill={fill}
    />
  </Svg>
)

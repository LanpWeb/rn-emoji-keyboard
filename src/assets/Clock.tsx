import * as React from 'react'
import Svg, { FillProps, Path } from 'react-native-svg'

export default ({ fill }: FillProps) => (
  <Svg viewBox="0 0 24 24" fill="none">
    <Path
      d="M12,22A10,10,0,1,1,22,12,10,10,0,0,1,12,22ZM12,3.71A8.29,8.29,0,1,0,20.29,12,8.3,8.3,0,0,0,12,3.71Zm3.05,10.56a.76.76,0,0,1-.36-.08l-3-1.41a.87.87,0,0,1-.5-.78V7.58a.86.86,0,0,1,1.72,0v3.87l2.55,1.19a.85.85,0,0,1-.36,1.63Z"
      fill={fill}
    />
  </Svg>
)

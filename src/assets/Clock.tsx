import * as React from 'react'
import Svg, { FillProps, Path } from 'react-native-svg'

export default ({ fill }: FillProps) => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <Path
      d="M12 7.65304V12L15.0011 13.3953M21 12C21 16.9706 16.9706 21 12 21C7.02943 21 3 16.9706 3 12C3 7.02944 7.02943 3 12 3C16.9706 3 21 7.02944 21 12Z"
      stroke="#7F7F8D"
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
      fill={fill}
    />
  </Svg>
)

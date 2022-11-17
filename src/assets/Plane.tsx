import * as React from 'react'
import Svg, { FillProps, Path } from 'react-native-svg'

export default ({ fill }: FillProps) => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M8.92172 21.2399L10.6817 19.4799L9.80172 16.8399L12.4407 14.2009L16.8407 20.3609L18.6007 18.6009L15.4267 11.2159L18.1597 8.48294C18.8887 7.75394 18.8887 6.57194 18.1597 5.84294C17.4307 5.11394 16.2487 5.11394 15.5197 5.84294L12.7867 8.57594L5.84072 4.96094L3.64072 7.16094L9.80072 11.5609L7.46672 13.8949L4.52172 13.3199L2.76172 15.0799L6.72172 17.2799L8.92172 21.2399Z" stroke="#7F7F8D" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"
      fill={fill}
    />
  </Svg>
)

import * as React from 'react'
import Svg, { FillProps, Path } from 'react-native-svg'

export default ({ fill }: FillProps) => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <Path
      d="M13.5 8V12C13.5 14.3163 11.75 16.2238 9.5 16.4725V12.75C9.5 12.3358 9.16421 12 8.75 12C8.33579 12 8 12.3358 8 12.75V16.3885C5.99601 15.9338 4.5 14.1416 4.5 12V8C4.5 5.51472 6.51472 3.5 9 3.5C11.4853 3.5 13.5 5.51472 13.5 8ZM8 17.917C5.16229 17.441 3 14.973 3 12V8C3 4.68629 5.68629 2 9 2C11.2033 2 13.1293 3.18764 14.1726 4.95768C15.2534 4.38716 16.7883 4.34879 18.0884 5.08993C19.7868 6.05807 20.9538 8.23326 20.7133 11.8936C20.606 13.5264 20.1837 14.7867 19.5326 15.7188C18.8772 16.6569 18.0173 17.2224 17.1137 17.4992C16.9099 17.5616 16.7048 17.6092 16.5 17.6432V21.25C16.5 21.6642 16.1642 22 15.75 22C15.3358 22 15 21.6642 15 21.25V17.6664C14.8279 17.644 14.6595 17.6135 14.4961 17.5759C13.8137 17.4187 13.1736 17.1263 12.6912 16.7306C11.7964 17.4298 10.6981 17.8806 9.5 17.9795V21.25C9.5 21.6642 9.16421 22 8.75 22C8.33579 22 8 21.6642 8 21.25V17.917ZM13.7568 15.6574C14.0202 15.8423 14.3895 16.012 14.8328 16.1142C14.8879 16.1269 14.9437 16.1384 15 16.1487V14.75C15 14.3358 15.3358 14 15.75 14C16.1642 14 16.5 14.3358 16.5 14.75V16.113C16.5584 16.0987 16.6165 16.0827 16.6743 16.065C17.2741 15.8812 17.849 15.5095 18.3029 14.8597C18.7611 14.2039 19.1225 13.2256 19.2165 11.7952C19.4348 8.47371 18.3694 6.97668 17.3456 6.39307C16.3936 5.85038 15.348 5.98671 14.7688 6.34479C14.9194 6.87055 15 7.42586 15 8V12C15 13.3766 14.5364 14.6449 13.7568 15.6574Z"
      fill={fill}
    />
  </Svg>
)

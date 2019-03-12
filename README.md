# us-highway-signs

## Install

```bash
npm install --save tsatam/us-highway-signs
```

## Usage

```tsx
import * as React from 'react'

import Sign, {HighwaySystem, UsState} from 'us-highway-signs';

class Example extends React.Component {
  render () {
    return (
      <Sign system={HighwaySystem.STATE} state={UsState.MICHIGAN} routeNumber={14}/>
    )
  }
}
```

## License

MIT © [tsatam](https://github.com/tsatam)

import '@charizardxx/core/styles.css';

import { Badge, MantineProvider } from '@charizardxx/core';
import { theme } from './theme';

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <Badge>hello</Badge>
    </MantineProvider>
  );
}

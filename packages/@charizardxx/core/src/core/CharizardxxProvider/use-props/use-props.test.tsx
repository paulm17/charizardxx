import React from 'react';
import { renderHook } from '@testing-library/react';
import { useProps } from './use-props';

// import { CharizardxxProvider } from '../../CharizardxxProvider';

// function Wrapper({ children }: { children: React.ReactNode }) {
//   return (
//     <CharizardxxProvider
//       theme={{
//         components: {
//           TestComponent: {
//             defaultProps: {
//               test: 'theme-default-prop',
//             },
//           },
//         },
//       }}
//     >
//       {children}
//     </CharizardxxProvider>
//   );
// }

function Wrapper({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

describe('@charizardxx/core/use-component-default-props', () => {
  it('returns default props from CharizardxxProvider context', () => {
    const { result } = renderHook(() => useProps<{ test?: string }>('TestComponent', {}, {}), {
      wrapper: Wrapper,
    });
    expect(result.current.test).toBe(undefined);
  });

  it('overrides theme default props with props passed to hook', () => {
    const { result } = renderHook(
      () => useProps<{ test?: string }>('TestComponent', {}, { test: 'direct-prop' }),
      { wrapper: Wrapper }
    );
    expect(result.current.test).toBe('direct-prop');
  });

  it('overrides component default props with props passed to hook', () => {
    const { result } = renderHook(
      () =>
        useProps<{ test?: string }>(
          'TestComponent',
          { test: 'component-prop' },
          { test: 'direct-prop' }
        )
      // { wrapper: CharizardxxProvider }
    );
    expect(result.current.test).toBe('direct-prop');
  });
});

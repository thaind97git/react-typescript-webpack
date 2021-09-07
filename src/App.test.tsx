import React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';
import App from './App';

const renderer = createRenderer();

it('renders <App/> without crashing', () => {
  renderer.render(<App />);
  const renderedOutput = renderer.getRenderOutput();
  expect(renderedOutput).toMatchSnapshot();
});

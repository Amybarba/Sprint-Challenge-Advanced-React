import React from 'react';
// import { render } from '@testing-library/react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom';
// import App from './App';

afterEach(rtl.cleanup);

it("renders without crashing", () => {
  // const div = document.createElement('div');
});

// it("verify players name is present" , () => {
//   const { getByText } = render(<App />);
//   expect(getByText("World Cup Players")).toBeInTheDocument();
// });

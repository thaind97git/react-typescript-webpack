import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { shallow } from 'enzyme';
import Button from './index';

afterEach(cleanup);

describe('This will test Button component', () => {
  test('test renders message', () => {
    const { getByText } = render(<Button className="btn">Click here</Button>);

    expect(getByText('Click here'));
  });

  it('test click event', () => {
    const mockCallBack = jest.fn();

    const button = shallow(<Button onClick={mockCallBack}>Click here</Button>);
    button.find('button').simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});

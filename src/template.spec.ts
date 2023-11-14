import { render } from './template';

it('should render the template', () => {
  const result = render();

  expect(result).toContain('Hello World!');
});

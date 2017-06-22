import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';

describe('App', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });

  it('shows the CommentBox component', () => {
    expect(component.find('.CommentBox')).to.exist;
  });

  it('shows the CommentList component', () => {
    expect(component.find('.CommentList')).to.exist;
  });
});

import { renderComponent, expect } from '../test_helper';
import CommentBox from '../../src/components/commentBox';


describe('CommentBox', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(CommentBox);
  });

  it('has correct class', () => {
    expect(component).to.have.class('CommentBox');
  });

  it('has text area', () => {
    expect(component.find('textarea')).to.exist;
  });

  it('has a button', () => {
    expect(component.find('button')).to.exist;
  });

  describe('entering some text', () => {
    beforeEach(() => {
      component.find('textarea').simulate('change', 'new comment');
    });

    it('shows entered text', () => {
      expect(component.find('textarea')).to.have.value('new comment');
    });

    it('clears when it is submitted', () => {
      component.simulate('submit');
      expect(component.find('textarea')).have.have.value('');
    });
  });
});

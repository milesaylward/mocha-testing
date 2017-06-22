import { expect } from '../test_helper';
import { SAVE_COMMENT } from '../../src/actions/types';
import { saveComment } from '../../src/actions';

describe('actions', () => {
  let action;

  beforeEach(() => {
    action = saveComment('new comment');
  });

  describe('saveComment', () => {
    it('has correct type', () => {
      expect(action.type).to.equal(SAVE_COMMENT);
    });

    it('has correct payload', () => {
      expect(action.payload).to.equal('new comment');
    });
  });
});

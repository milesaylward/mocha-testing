import { expect } from '../test_helper';
import commentReducer from '../../src/reducers/comments';
import { SAVE_COMMENT } from '../../src/actions/types';

describe('commentReducer', () => {
  it('handles actions with unknown type', () => {
    const reducer = commentReducer(undefined, {});
    expect(reducer).to.be.instanceOf(Array);
  });

  it('handles SAVE_COMMENT type', () => {
    const action = {type: SAVE_COMMENT, payload: 'new comment'}
    const reducer = commentReducer([], action);
    expect(reducer).to.eql(['new comment'])
  });
});

import {assert} from 'chai';
import should from 'should';

import Collisions from './../lib/';

describe('Collisions', function() {
  describe('#add(item)', function () {
    it('should add lists of items', function () {
      const a = new Collisions({ items: [1, 2, 3] });

      const test = a.add([4, 5, 6]);

      test.items.count().should.equal(6);
    });
  });
});

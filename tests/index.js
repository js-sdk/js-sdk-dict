import Dict from '../src/index.js';

describe("Dict", () => {
  it("contructor.", () => {
    Dict.create().repr.should.be.eql([]);
  });

  context("set(k, v)", () => {
    it("key not in dict.", () => {
      Dict.create().set('a', 1).repr.should.be.eql(['a', 1]);
    });

    it("key alread in dict.", () => {
      it("set(k, v)", () => {
        Dict.create().set('a', 1).set('a', 2).repr.should.be.eql(['a', 2]);
      });
    });
  });

  context("get(k)", () => {
    it("key exists.", () => {
      Dict.create().set('a', 1).get('a').should.be.eql(1);
    });

    it("key does not exists.", () => {
      should(Dict.create().set('a', 1).get('b')).eql(null);
    });
  });
});

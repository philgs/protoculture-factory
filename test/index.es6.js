'use strict';

// Run with Mocha
let chai = require( 'chai' )
    , expect = chai.expect
    , ProtocultureFactory = require( '../index.js' )
    ;

chai.use( require( 'dirty-chai' ) );

describe( 'A persistent immutable object literal', () => {
    it( 'should be created with no properties', () => {
        let io0 = ProtocultureFactory.makeObject();
        expect( io0.keys().length ).to.equal( 0 );
    });

    it( 'should be able to add properties', () => {
        let io0 = ProtocultureFactory.makeObject();
        let io1 = io0.add( 'foo', 123 );
        let io2 = io1.add( 'bar', 'zyx' );

        expect( io0.keys().length ).to.equal( 0 );
        expect( io1.keys().length ).to.equal( 1 );
        expect( io2.keys().length ).to.equal( 2 );

        expect( io1.foo ).to.equal( io2.foo );
    });

    it( 'should have read-only properties', () => {
        let io0 = ProtocultureFactory.makeObject();
        expect( () => { let t1 = io9.foo; } ).to.throw( Error );

        let io1 = io0.add( 'foo', 123 );
        expect( io1.foo === 123 ).to.be.true();
        expect( () => { io1.foo = 789; } ).to.throw( Error );
    });

});

let countProps = function( object ) {
    try {
        let keys = object.keys();
        return keys.length;
    } catch ( TypeError ) {
        return 0;
    }
};


// one-two-three-testing
const assert = require('assert');
const fs = require('fs');
const BitmapHeader = require('../lib/bitmap-header.js');
const BitmapTransformer = require('../lib/bitmap-transformer');
const invert = require('../lib/invert-transform.js');

describe('all about the bitmap', () => {

    // start clean
    let buffer = null;
    before(done => {
        console.log('before done');
        fs.readFile('../lib/bitmap-header.js', (err, _buffer) => {
            if (err) done(err);
            else {
                buffer = _buffer;
                done();
            }
        });
    }); //end buffer

    it('calls BitmapTransformer.read', done => {
        BitmapTransformer.read('../images/palette-bitmap.bmp', (err, btObj));
        // what did I get from read? should there be a left side?

    })
    it('read header', () => {
        // I'll get back to this
    });

    it('test whole transform ', done => {
        //this is for transform magic

        //what I'm really after
        console.log('but not really');
        fs.readFile('./test/output.bmp', (err, buffer) => {
            assert.deepEqual(bitmap.buffer, buffer);
            done();
        }); //end of readfile
    });

    describe('transformations', () => {
        it('inverts color', () => {
            // i'll be back
            //assert.deepEqual("ok")
        });
    }); // close describe transformations

}); //close test
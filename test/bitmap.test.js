// one-two-three-testing
const assert = require('assert');
const fs = require('fs');
const BitmapHeader = require('../lib/bitmap-header');
const BitmapTransformer = require('../lib/bitmap-transformer');
const invert = require('../lib/invert-transform');

describe('all about the bitmap', () => {
    let buffer = null;
    before(done => {
        fs.readFile('./images/non-palette-bitmap.bmp', (err, _buffer) => {
            if (err) done(err);
            else {
                buffer = _buffer;
                done();
            };
        });
    }); //end buffer

    it('calls BitmapTransformer.read', done => {
        BitmapTransformer.read('./images/non-palette-bitmap.bmp', (err, _buffer) => {
            if (err) done(err);
            else {
                buffer = _buffer;
            };
        });
        done();
    });

    it('read header', done => {
        const header = new BitmapHeader(buffer);

        assert.equal(header.pixelOffset, 54);
        assert.equal(header.bitsPerPixel, 24);
        assert.equal(header.fileSize, 30054);
        assert.equal(header.isPaletted, false);
        done();
    });

    it.skip('test whole transform actually testing for write ', done => {
        //this is for transform magic
        const bitmap = new BitmapTransformer(buffer);
        //what I'm really after

        BitmapTransformer.write('./test/output.bmp', (err, buffer) => {

            //assert.deepEqual(bitmap.buffer, buffer);
            done();
        }); //end of readfile
    });

    describe('transformations', () => {
        it('inverts color', done => {
            const bitmap = new BitmapTransformer(buffer);
            //const bmpBuffer = bitmap.transform(invert);
            console.log(' about to write');
            bitmap.write('./test/output.bmp', (err, buffer) => {
                if (err) done(err);
                else {
                    console.log('about to read');
                    fs.readFile('./test/output.bmp', (err, buffer) => {
                        assert.deepEqual(buffer, buffer);
                        done();
                    })
                }
            });

        });
    }); // close describe transformations

}); //close test
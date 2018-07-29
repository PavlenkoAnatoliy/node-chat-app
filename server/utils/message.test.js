const expect = require('expect');

const { generateMessage } = require('./message.js');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var from = 'Mike';
    var text = 'Some text';
    var message = generateMessage(from, text);

    expect(typeof message).toBe('object');
    expect(typeof message.createdAt).toBe('number');
    expect(message).toMatchObject({ from, text });

  });
});
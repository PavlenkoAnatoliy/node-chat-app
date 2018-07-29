const expect = require('expect');

const { generateMessage, generateLocationMessage } = require('./message.js');

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

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var from = 'Mike';
    var latitude = 34;
    var longitude = 12;
    var url = `https://www.google.com/maps?q=${latitude},${longitude}`

    var locMessage = generateLocationMessage(from, latitude, longitude);

    expect(typeof locMessage).toBe('object');
    expect(typeof locMessage.createdAt).toBe('number');
    expect(locMessage).toMatchObject({ from, url });
  });
});
// var generateLocationMessage = (from, latitude, longitude) => {
//   return {
//     from,
//     url: `https://www.google.com/maps?q=${latitude},${longitude}`,
//     createdAt: new Date().getTime()
//   };
// };
// Create a buffer from the message
const buffer1 = Buffer.from("NodeJS is fast");

// Slice the buffer to extract "NodeJS"
const slicedBuffer = buffer1.slice(0, 6);

console.log("Sliced Buffer:", slicedBuffer.toString());

// Create another buffer
const buffer2 = Buffer.from("Powerful");

// Compare buffers alphabetically
const result = Buffer.compare(slicedBuffer, buffer2);

if (result < 0) {
  console.log('"NodeJS" comes first alphabetically');
} else if (result > 0) {
  console.log('"Powerful" comes first alphabetically');
} else {
  console.log("Both buffers are equal");
}

// Convert "NodeJS" buffer to JSON
const jsonData = slicedBuffer.toJSON();

console.log("JSON Output:");
console.log(jsonData);
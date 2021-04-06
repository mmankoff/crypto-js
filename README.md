- The getHash and get Ciphers will show all supported hashes when ran it will show a listing of all
  supported hashes available to use.
- To test the functionality and run each cipher a return has to be declared and in the terminal run node crypto.js to
  run it.
- Random bytes (Comes in 2 flavors -> Async and Non-Async. This is the Async version that requires the total number of
  bytes requested for the hash size for the 1st argument.
- The second is a call back function that contains an error msg, or a buffer of those bytes in that call back.
- For the Synchronous version you have to provide the total number of bytes requested, and a method that will return a
  buffer containing those bytes.
- The reason random bytes has to be done Asynchronous is it needs to have a blocker to reach out to the operating system
  to provide the randomness of the bytes and how it should generate them. This is how the OS maintains it's entropy
  pool to reach out and get the requested randomness simultaneously along with other processes happening inside
  the browser that would block it.

Creating the hash:(createHash method)
(Things to remember -> Hashes are deterministic and don't refresh upon re-run otherwise known as
not "salted" and doesn't change.)
- The iv or the ("initializing vector") has been set and generates values based on it's set size.

aes 256-bit cipher block chaining (cbc) encryption/decryption

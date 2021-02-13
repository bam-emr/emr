# Function Descriptors for Sequence Diagram

### A Client-side

1. `<file action> = {read(file), write(file, string), modify(file, string), delete(file)}`:
	
This is the only function executed by the client. It is a class of functions which allow for file manipulation straight to IPFS. Different file functionscan be added as needed. Only the basic four will be created as of now.

### B IPFS Network

2. `<async msg> = BCStatus()`:

This function sends a TCP request to the private ETH network to find out information on gas and block-time. If block-time and gas are significantly greater than the average, the file request waits.

3. `<file hash> = IPFS()`:

IPFS generated function creating a hash distinct to each file.

4. `<sendHash> = sendHash(file, clientID)`:

This function pushes the same hash sent to the user but forwards it to the blockchain to be dealt with using the DApp.

### C Blockchain Network

5. `<generateID> = generateID(position, IPFS key) : returns public & private key`:

This function is only called when a new user is introduced and has no public nor private keys on the IPFS and ETH networks.

6. `<file transaction> = transaction(fileHash, public key) : returns file hash, private key`:

This is essentially the DApp smart contract output (this shall be explained in later docs).

7. `<AutoDoc>`:
 
Mimics the concept of sent reciepts in order to avoid client communication with the blockchain to increase user-friendliness.

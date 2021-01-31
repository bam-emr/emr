# Function Descriptors for Sequence Diagram

1. `<file action>` = {read(file), write(file, string), modify(file, string), delete(file)}
2. `<async. msg. 1>` = BCStatus()
3. `<file hash>` = (IPFS generated function creating a hash)
4. `<generateID>` = generateID(position, IPFS key) : returns public & private key
5. `<sendHash>` = sendHash(file, clientID)
6. `<file transaction>` = transaction(fileHash, public key) : returns file hash, private key
7. `<AutoDoc>` = (mimics the concept of sent reciepts in order to avoid client communication with the blockchain)

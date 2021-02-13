# IPFS Specifications

Document specifying the implementation of an IPFS network for multi-party access to file storage databases;
working alongside a ethureum network to provide secure and quick file access.

The reason we choose IPFS is because blockchains in general (ETH, BTC, etc.) are very inefficient in storing large amounts of information which our medical records may require. Since large amounts of data may be added to an EMR, using solely a blockchain and smart contracts to exchange information in a peer-to-peer network is unrealistic.

Using both Euthereum DApps alongside IPFS networks allows for the sharing of large amounts of data in a very secure matter.
 
### Sprint info:
 Formulate the database access for a given document with respect to permissions of accounts.

 Devise encryption and decryption method of an emr for multi-part access.

## 1 Building the IPFS Private Network
	
Providing a decentralized method of file-sharing in sync with the eutherum DApp.

The IPFS network alone does not support data replication, or the ability to clone data inside the network so that multiple clients in the network have access.

	Extensive guide on building the network:
 [IPFS networks & IPFS-Cluster](https://labs.eleks.com/2019/03/ipfs-network-data-replication.html)

 [IPFS Website](https://ipfs.io/)

Notes: Few dependencies, can be run as a daemon on main server

## 2 Asymmetric Encryption & Private File Sharing
 
IPFS allows for the file being shared onto the private network blockchain to only be accessed by a certain user's public key -- no other peer in the network can access it.

To properly secure files, asymmetric encryption systems are needed; both public and private keys are necessary to fully secure all data being read, written, and modified on the IPFS network.

This is where the eutherum blockchain is valuable: creating an IPFS file generates a reversable hash, so taking that hash and placing it as a transaction on the blockchain to a certain person will be verified by all computers on the network.
 
## 3 Implementation for File-Sharing

[Implementation Details](file:///Users/hassan/Desktop/IPFS/implementation.html)

### Remarks
	Sequence Diagram is included in the same file to further describe the implementation.

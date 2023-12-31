export default sdk;
declare namespace sdk {
    export { BaseValue };
    export { Bip32 };
    export { ByteArray };
    export let Hash256: typeof CryptoTypes.Hash256;
    export let PrivateKey: typeof CryptoTypes.PrivateKey;
    export let PublicKey: typeof CryptoTypes.PublicKey;
    export let SharedKey256: typeof CryptoTypes.SharedKey256;
    export let Signature: typeof CryptoTypes.Signature;
    export { NetworkLocator };
    export namespace facade {
        export { NemFacade };
        export { SymbolFacade };
    }
    export let nem: {
        /**
         * Factory for creating NEM transactions.
         * @type {typeof NemTransactionFactory}
         */
        TransactionFactory: typeof NemTransactionFactory;
        /**
         * Represents a NEM network timestamp with second resolution.
         * @type {typeof NemNetwork.NetworkTimestamp}
         */
        NetworkTimestamp: typeof NemNetwork.NetworkTimestamp;
        /**
         * Represents a NEM address.
         * @type {typeof NemNetwork.Address}
         */
        Address: typeof NemNetwork.Address;
        /**
         * Represents a NEM network.
         * @type {typeof NemNetwork.Network}
         */
        Network: typeof NemNetwork.Network;
        /**
         * Encrypts and encodes messages between two parties.
         * @type {typeof NemMessageEncoder}
         */
        MessageEncoder: typeof NemMessageEncoder;
        /**
         * Encrypts and encodes messages between two parties.
         * @type {typeof NemKeyPair.KeyPair}
         */
        KeyPair: typeof NemKeyPair.KeyPair;
        /**
         * Encrypts and encodes messages between two parties.
         * @type {typeof NemKeyPair.Verifier}
         */
        Verifier: typeof NemKeyPair.Verifier;
        Amount: typeof NemModels.Amount;
        Height: typeof NemModels.Height;
        Timestamp: typeof NemModels.Timestamp;
        Hash256: typeof NemModels.Hash256;
        PublicKey: typeof NemModels.PublicKey;
        Signature: typeof NemModels.Signature;
        NetworkType: typeof NemModels.NetworkType;
        TransactionType: typeof NemModels.TransactionType;
        Transaction: typeof NemModels.Transaction;
        NonVerifiableTransaction: typeof NemModels.NonVerifiableTransaction;
        LinkAction: typeof NemModels.LinkAction;
        AccountKeyLinkTransactionV1: typeof NemModels.AccountKeyLinkTransactionV1;
        NonVerifiableAccountKeyLinkTransactionV1: typeof NemModels.NonVerifiableAccountKeyLinkTransactionV1;
        NamespaceId: typeof NemModels.NamespaceId;
        MosaicId: typeof NemModels.MosaicId;
        Mosaic: typeof NemModels.Mosaic;
        SizePrefixedMosaic: typeof NemModels.SizePrefixedMosaic;
        MosaicTransferFeeType: typeof NemModels.MosaicTransferFeeType;
        MosaicLevy: typeof NemModels.MosaicLevy;
        MosaicProperty: typeof NemModels.MosaicProperty;
        SizePrefixedMosaicProperty: typeof NemModels.SizePrefixedMosaicProperty;
        MosaicDefinition: typeof NemModels.MosaicDefinition;
        MosaicDefinitionTransactionV1: typeof NemModels.MosaicDefinitionTransactionV1;
        NonVerifiableMosaicDefinitionTransactionV1: typeof NemModels.NonVerifiableMosaicDefinitionTransactionV1;
        MosaicSupplyChangeAction: typeof NemModels.MosaicSupplyChangeAction;
        MosaicSupplyChangeTransactionV1: typeof NemModels.MosaicSupplyChangeTransactionV1;
        NonVerifiableMosaicSupplyChangeTransactionV1: typeof NemModels.NonVerifiableMosaicSupplyChangeTransactionV1;
        MultisigAccountModificationType: typeof NemModels.MultisigAccountModificationType;
        MultisigAccountModification: typeof NemModels.MultisigAccountModification;
        SizePrefixedMultisigAccountModification: typeof NemModels.SizePrefixedMultisigAccountModification;
        MultisigAccountModificationTransactionV1: typeof NemModels.MultisigAccountModificationTransactionV1;
        NonVerifiableMultisigAccountModificationTransactionV1: typeof NemModels.NonVerifiableMultisigAccountModificationTransactionV1;
        MultisigAccountModificationTransactionV2: typeof NemModels.MultisigAccountModificationTransactionV2;
        NonVerifiableMultisigAccountModificationTransactionV2: typeof NemModels.NonVerifiableMultisigAccountModificationTransactionV2;
        CosignatureV1: typeof NemModels.CosignatureV1;
        SizePrefixedCosignatureV1: typeof NemModels.SizePrefixedCosignatureV1;
        MultisigTransactionV1: typeof NemModels.MultisigTransactionV1;
        NonVerifiableMultisigTransactionV1: typeof NemModels.NonVerifiableMultisigTransactionV1;
        NamespaceRegistrationTransactionV1: typeof NemModels.NamespaceRegistrationTransactionV1;
        NonVerifiableNamespaceRegistrationTransactionV1: typeof NemModels.NonVerifiableNamespaceRegistrationTransactionV1;
        MessageType: typeof NemModels.MessageType;
        Message: typeof NemModels.Message;
        TransferTransactionV1: typeof NemModels.TransferTransactionV1;
        NonVerifiableTransferTransactionV1: typeof NemModels.NonVerifiableTransferTransactionV1;
        TransferTransactionV2: typeof NemModels.TransferTransactionV2;
        NonVerifiableTransferTransactionV2: typeof NemModels.NonVerifiableTransferTransactionV2;
        NonVerifiableTransactionFactory: typeof NemModels.NonVerifiableTransactionFactory;
    };
    export let symbol: {
        /**
         * Generates symbol voting keys.
         * @type {typeof VotingKeysGenerator}
         */
        VotingKeysGenerator: typeof VotingKeysGenerator;
        metadataUpdateValue: (oldValue: Uint8Array, newValue: Uint8Array) => Uint8Array;
        MerkleHashBuilder: typeof SymbolMerkle.MerkleHashBuilder;
        PatriciaMerkleProofResult: typeof SymbolMerkle.PatriciaMerkleProofResult;
        proveMerkle: (leafHash: CryptoTypes.Hash256, merklePath: SymbolMerkle.MerklePart[], rootHash: CryptoTypes.Hash256) => boolean;
        deserializePatriciaTreeNodes: (buffer: Uint8Array) => {
            path: SymbolMerkle.PatriciaTreePath;
            readonly hexPath: string;
        }[];
        provePatriciaMerkle: (encodedKey: CryptoTypes.Hash256, valueToTest: CryptoTypes.Hash256, merklePath: {
            path: SymbolMerkle.PatriciaTreePath;
            readonly hexPath: string;
        }[], stateHash: CryptoTypes.Hash256, subcacheMerkleRoots: CryptoTypes.Hash256) => number;
        generateMosaicId: (ownerAddress: SymbolNetwork.Address, nonce: number) => BigInt;
        generateNamespaceId: (name: string, parentNamespaceId?: BigInt) => BigInt;
        isValidNamespaceName: (name: string) => boolean;
        generateNamespacePath: (fullyQualifiedName: string) => BigInt[];
        generateMosaicAliasId: (fullyQualifiedName: string) => BigInt;
        /**
         * Factory for creating Symbol transactions.
         * @type {typeof SymbolTransactionFactory}
         */
        TransactionFactory: typeof SymbolTransactionFactory;
        /**
         * Represents a Symbol network timestamp with second resolution.
         * @type {typeof SymbolNetwork.NetworkTimestamp}
         */
        NetworkTimestamp: typeof SymbolNetwork.NetworkTimestamp;
        /**
         * Represents a Symbol address.
         * @type {typeof SymbolNetwork.Address}
         */
        Address: typeof SymbolNetwork.Address;
        /**
         * Represents a Symbol network.
         * @type {typeof SymbolNetwork.Network}
         */
        Network: typeof SymbolNetwork.Network;
        /**
         * Encrypts and encodes messages between two parties.
         * @type {typeof SymbolMessageEncoder}
         */
        MessageEncoder: typeof SymbolMessageEncoder;
        /**
         * Encrypts and encodes messages between two parties.
         * @type {typeof SymbolKeyPair.KeyPair}
         */
        KeyPair: typeof SymbolKeyPair.KeyPair;
        /**
         * Encrypts and encodes messages between two parties.
         * @type {typeof SymbolKeyPair.Verifier}
         */
        Verifier: typeof SymbolKeyPair.Verifier;
        Amount: typeof SymbolModels.Amount;
        BlockDuration: typeof SymbolModels.BlockDuration;
        BlockFeeMultiplier: typeof SymbolModels.BlockFeeMultiplier;
        Difficulty: typeof SymbolModels.Difficulty;
        FinalizationEpoch: typeof SymbolModels.FinalizationEpoch;
        FinalizationPoint: typeof SymbolModels.FinalizationPoint;
        Height: typeof SymbolModels.Height;
        Importance: typeof SymbolModels.Importance;
        ImportanceHeight: typeof SymbolModels.ImportanceHeight;
        UnresolvedMosaicId: typeof SymbolModels.UnresolvedMosaicId;
        MosaicId: typeof SymbolModels.MosaicId;
        Timestamp: typeof SymbolModels.Timestamp;
        UnresolvedAddress: typeof SymbolModels.UnresolvedAddress;
        Hash256: typeof SymbolModels.Hash256;
        Hash512: typeof SymbolModels.Hash512;
        PublicKey: typeof SymbolModels.PublicKey;
        VotingPublicKey: typeof SymbolModels.VotingPublicKey;
        Signature: typeof SymbolModels.Signature;
        Mosaic: typeof SymbolModels.Mosaic;
        UnresolvedMosaic: typeof SymbolModels.UnresolvedMosaic;
        LinkAction: typeof SymbolModels.LinkAction;
        NetworkType: typeof SymbolModels.NetworkType;
        TransactionType: typeof SymbolModels.TransactionType;
        Transaction: typeof SymbolModels.Transaction;
        EmbeddedTransaction: typeof SymbolModels.EmbeddedTransaction;
        ProofGamma: typeof SymbolModels.ProofGamma;
        ProofVerificationHash: typeof SymbolModels.ProofVerificationHash;
        ProofScalar: typeof SymbolModels.ProofScalar;
        BlockType: typeof SymbolModels.BlockType;
        VrfProof: typeof SymbolModels.VrfProof;
        Block: typeof SymbolModels.Block;
        NemesisBlockV1: typeof SymbolModels.NemesisBlockV1;
        NormalBlockV1: typeof SymbolModels.NormalBlockV1;
        ImportanceBlockV1: typeof SymbolModels.ImportanceBlockV1;
        FinalizationRound: typeof SymbolModels.FinalizationRound;
        FinalizedBlockHeader: typeof SymbolModels.FinalizedBlockHeader;
        ReceiptType: typeof SymbolModels.ReceiptType;
        Receipt: typeof SymbolModels.Receipt;
        HarvestFeeReceipt: typeof SymbolModels.HarvestFeeReceipt;
        InflationReceipt: typeof SymbolModels.InflationReceipt;
        LockHashCreatedFeeReceipt: typeof SymbolModels.LockHashCreatedFeeReceipt;
        LockHashCompletedFeeReceipt: typeof SymbolModels.LockHashCompletedFeeReceipt;
        LockHashExpiredFeeReceipt: typeof SymbolModels.LockHashExpiredFeeReceipt;
        LockSecretCreatedFeeReceipt: typeof SymbolModels.LockSecretCreatedFeeReceipt;
        LockSecretCompletedFeeReceipt: typeof SymbolModels.LockSecretCompletedFeeReceipt;
        LockSecretExpiredFeeReceipt: typeof SymbolModels.LockSecretExpiredFeeReceipt;
        MosaicExpiredReceipt: typeof SymbolModels.MosaicExpiredReceipt;
        MosaicRentalFeeReceipt: typeof SymbolModels.MosaicRentalFeeReceipt;
        NamespaceId: typeof SymbolModels.NamespaceId;
        NamespaceRegistrationType: typeof SymbolModels.NamespaceRegistrationType;
        AliasAction: typeof SymbolModels.AliasAction;
        NamespaceExpiredReceipt: typeof SymbolModels.NamespaceExpiredReceipt;
        NamespaceDeletedReceipt: typeof SymbolModels.NamespaceDeletedReceipt;
        NamespaceRentalFeeReceipt: typeof SymbolModels.NamespaceRentalFeeReceipt;
        ReceiptSource: typeof SymbolModels.ReceiptSource;
        AddressResolutionEntry: typeof SymbolModels.AddressResolutionEntry;
        AddressResolutionStatement: typeof SymbolModels.AddressResolutionStatement;
        MosaicResolutionEntry: typeof SymbolModels.MosaicResolutionEntry;
        MosaicResolutionStatement: typeof SymbolModels.MosaicResolutionStatement;
        TransactionStatement: typeof SymbolModels.TransactionStatement;
        BlockStatement: typeof SymbolModels.BlockStatement;
        AccountKeyLinkTransactionV1: typeof SymbolModels.AccountKeyLinkTransactionV1;
        EmbeddedAccountKeyLinkTransactionV1: typeof SymbolModels.EmbeddedAccountKeyLinkTransactionV1;
        NodeKeyLinkTransactionV1: typeof SymbolModels.NodeKeyLinkTransactionV1;
        EmbeddedNodeKeyLinkTransactionV1: typeof SymbolModels.EmbeddedNodeKeyLinkTransactionV1;
        Cosignature: typeof SymbolModels.Cosignature;
        DetachedCosignature: typeof SymbolModels.DetachedCosignature;
        AggregateCompleteTransactionV1: typeof SymbolModels.AggregateCompleteTransactionV1;
        AggregateCompleteTransactionV2: typeof SymbolModels.AggregateCompleteTransactionV2;
        AggregateBondedTransactionV1: typeof SymbolModels.AggregateBondedTransactionV1;
        AggregateBondedTransactionV2: typeof SymbolModels.AggregateBondedTransactionV2;
        VotingKeyLinkTransactionV1: typeof SymbolModels.VotingKeyLinkTransactionV1;
        EmbeddedVotingKeyLinkTransactionV1: typeof SymbolModels.EmbeddedVotingKeyLinkTransactionV1;
        VrfKeyLinkTransactionV1: typeof SymbolModels.VrfKeyLinkTransactionV1;
        EmbeddedVrfKeyLinkTransactionV1: typeof SymbolModels.EmbeddedVrfKeyLinkTransactionV1;
        HashLockTransactionV1: typeof SymbolModels.HashLockTransactionV1;
        EmbeddedHashLockTransactionV1: typeof SymbolModels.EmbeddedHashLockTransactionV1;
        LockHashAlgorithm: typeof SymbolModels.LockHashAlgorithm;
        SecretLockTransactionV1: typeof SymbolModels.SecretLockTransactionV1;
        EmbeddedSecretLockTransactionV1: typeof SymbolModels.EmbeddedSecretLockTransactionV1;
        SecretProofTransactionV1: typeof SymbolModels.SecretProofTransactionV1;
        EmbeddedSecretProofTransactionV1: typeof SymbolModels.EmbeddedSecretProofTransactionV1;
        AccountMetadataTransactionV1: typeof SymbolModels.AccountMetadataTransactionV1;
        EmbeddedAccountMetadataTransactionV1: typeof SymbolModels.EmbeddedAccountMetadataTransactionV1;
        MosaicMetadataTransactionV1: typeof SymbolModels.MosaicMetadataTransactionV1;
        EmbeddedMosaicMetadataTransactionV1: typeof SymbolModels.EmbeddedMosaicMetadataTransactionV1;
        NamespaceMetadataTransactionV1: typeof SymbolModels.NamespaceMetadataTransactionV1;
        EmbeddedNamespaceMetadataTransactionV1: typeof SymbolModels.EmbeddedNamespaceMetadataTransactionV1;
        MosaicNonce: typeof SymbolModels.MosaicNonce;
        MosaicFlags: typeof SymbolModels.MosaicFlags;
        MosaicSupplyChangeAction: typeof SymbolModels.MosaicSupplyChangeAction;
        MosaicDefinitionTransactionV1: typeof SymbolModels.MosaicDefinitionTransactionV1;
        EmbeddedMosaicDefinitionTransactionV1: typeof SymbolModels.EmbeddedMosaicDefinitionTransactionV1;
        MosaicSupplyChangeTransactionV1: typeof SymbolModels.MosaicSupplyChangeTransactionV1;
        EmbeddedMosaicSupplyChangeTransactionV1: typeof SymbolModels.EmbeddedMosaicSupplyChangeTransactionV1;
        MosaicSupplyRevocationTransactionV1: typeof SymbolModels.MosaicSupplyRevocationTransactionV1;
        EmbeddedMosaicSupplyRevocationTransactionV1: typeof SymbolModels.EmbeddedMosaicSupplyRevocationTransactionV1;
        MultisigAccountModificationTransactionV1: typeof SymbolModels.MultisigAccountModificationTransactionV1;
        EmbeddedMultisigAccountModificationTransactionV1: typeof SymbolModels.EmbeddedMultisigAccountModificationTransactionV1;
        AddressAliasTransactionV1: typeof SymbolModels.AddressAliasTransactionV1;
        EmbeddedAddressAliasTransactionV1: typeof SymbolModels.EmbeddedAddressAliasTransactionV1;
        MosaicAliasTransactionV1: typeof SymbolModels.MosaicAliasTransactionV1;
        EmbeddedMosaicAliasTransactionV1: typeof SymbolModels.EmbeddedMosaicAliasTransactionV1;
        NamespaceRegistrationTransactionV1: typeof SymbolModels.NamespaceRegistrationTransactionV1;
        EmbeddedNamespaceRegistrationTransactionV1: typeof SymbolModels.EmbeddedNamespaceRegistrationTransactionV1;
        AccountRestrictionFlags: typeof SymbolModels.AccountRestrictionFlags;
        AccountAddressRestrictionTransactionV1: typeof SymbolModels.AccountAddressRestrictionTransactionV1;
        EmbeddedAccountAddressRestrictionTransactionV1: typeof SymbolModels.EmbeddedAccountAddressRestrictionTransactionV1;
        AccountMosaicRestrictionTransactionV1: typeof SymbolModels.AccountMosaicRestrictionTransactionV1;
        EmbeddedAccountMosaicRestrictionTransactionV1: typeof SymbolModels.EmbeddedAccountMosaicRestrictionTransactionV1;
        AccountOperationRestrictionTransactionV1: typeof SymbolModels.AccountOperationRestrictionTransactionV1;
        EmbeddedAccountOperationRestrictionTransactionV1: typeof SymbolModels.EmbeddedAccountOperationRestrictionTransactionV1;
        MosaicAddressRestrictionTransactionV1: typeof SymbolModels.MosaicAddressRestrictionTransactionV1;
        EmbeddedMosaicAddressRestrictionTransactionV1: typeof SymbolModels.EmbeddedMosaicAddressRestrictionTransactionV1;
        MosaicRestrictionKey: typeof SymbolModels.MosaicRestrictionKey;
        MosaicRestrictionType: typeof SymbolModels.MosaicRestrictionType;
        MosaicGlobalRestrictionTransactionV1: typeof SymbolModels.MosaicGlobalRestrictionTransactionV1;
        EmbeddedMosaicGlobalRestrictionTransactionV1: typeof SymbolModels.EmbeddedMosaicGlobalRestrictionTransactionV1;
        TransferTransactionV1: typeof SymbolModels.TransferTransactionV1;
        EmbeddedTransferTransactionV1: typeof SymbolModels.EmbeddedTransferTransactionV1;
        EmbeddedTransactionFactory: typeof SymbolModels.EmbeddedTransactionFactory;
        BlockFactory: typeof SymbolModels.BlockFactory;
        ReceiptFactory: typeof SymbolModels.ReceiptFactory;
    };
    export namespace utils {
        export { hexToUint8 };
        export { uint8ToHex };
    }
}
import BaseValue from './BaseValue.js';
import { Bip32 } from './Bip32.js';
import ByteArray from './ByteArray.js';
import * as CryptoTypes from './CryptoTypes.js';
import { NetworkLocator } from './Network.js';
import NemFacade from './facade/NemFacade.js';
import SymbolFacade from './facade/SymbolFacade.js';
import NemTransactionFactory from './nem/TransactionFactory.js';
import * as NemNetwork from './nem/Network.js';
import NemMessageEncoder from './nem/MessageEncoder.js';
import * as NemKeyPair from './nem/KeyPair.js';
import * as NemModels from './nem/models.js';
import VotingKeysGenerator from './symbol/VotingKeysGenerator.js';
import * as SymbolMerkle from './symbol/merkle.js';
import * as SymbolNetwork from './symbol/Network.js';
import SymbolTransactionFactory from './symbol/TransactionFactory.js';
import SymbolMessageEncoder from './symbol/MessageEncoder.js';
import * as SymbolKeyPair from './symbol/KeyPair.js';
import * as SymbolModels from './symbol/models.js';
import { hexToUint8 } from './utils/converter.js';
import { uint8ToHex } from './utils/converter.js';

// tslint:disable:no-consecutive-blank-lines ordered-imports align trailing-comma
// tslint:disable:whitespace no-unbound-method no-trailing-whitespace
// tslint:disable:no-unused-variable
import { BaseContract, PromiseWithTransactionHash } from '@0x/base-contract';
import { schemas } from '@0x/json-schemas';
import {
    BlockParam,
    BlockParamLiteral,
    CallData,
    ContractAbi,
    ContractArtifact,
    DecodedLogArgs,
    MethodAbi,
    TransactionReceiptWithDecodedLogs,
    TxData,
    TxDataPayable,
    SupportedProvider,
} from 'ethereum-types';
import { BigNumber, classUtils, logUtils, providerUtils } from '@0x/utils';
import { SimpleContractArtifact } from '@0x/types';
import { Web3Wrapper } from '@0x/web3-wrapper';
import { assert } from '@0x/assert';
import * as ethers from 'ethers';
// tslint:enable:no-unused-variable

/* istanbul ignore next */
// tslint:disable:no-parameter-reassignment
// tslint:disable-next-line:class-name
export class CoordinatorContract extends BaseContract {
    public getSignerAddress = {
        async callAsync(
            hash: string,
            signature: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string> {
            assert.isString('hash', hash);
            assert.isString('signature', signature);
            assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
                schemas.addressSchema,
                schemas.numberSchema,
                schemas.jsNumber,
            ]);
            if (defaultBlock !== undefined) {
                assert.isBlockParam('defaultBlock', defaultBlock);
            }
            const self = (this as any) as CoordinatorContract;
            const encodedData = self._strictEncodeArguments('getSignerAddress(bytes32,bytes)', [hash, signature]);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            callDataWithDefaults.from = callDataWithDefaults.from
                ? callDataWithDefaults.from.toLowerCase()
                : callDataWithDefaults.from;
            let rawCallResult;
            try {
                rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            } catch (err) {
                BaseContract._throwIfThrownErrorIsRevertError(err);
                throw err;
            }
            BaseContract._throwIfCallResultIsRevertError(rawCallResult);
            const abiEncoder = self._lookupAbiEncoder('getSignerAddress(bytes32,bytes)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<string>(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },
        getABIEncodedTransactionData(hash: string, signature: string): string {
            assert.isString('hash', hash);
            assert.isString('signature', signature);
            const self = (this as any) as CoordinatorContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('getSignerAddress(bytes32,bytes)', [
                hash,
                signature,
            ]);
            return abiEncodedTransactionData;
        },
        getABIDecodedReturnData(returnData: string): string {
            const self = (this as any) as CoordinatorContract;
            const abiEncoder = self._lookupAbiEncoder('getSignerAddress(bytes32,bytes)');
            // tslint:disable boolean-naming
            const abiDecodedReturnData = abiEncoder.strictDecodeReturnValue<string>(returnData);
            return abiDecodedReturnData;
        },
    };
    public getTransactionHash = {
        async callAsync(
            transaction: { salt: BigNumber; signerAddress: string; data: string },
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string> {
            assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
                schemas.addressSchema,
                schemas.numberSchema,
                schemas.jsNumber,
            ]);
            if (defaultBlock !== undefined) {
                assert.isBlockParam('defaultBlock', defaultBlock);
            }
            const self = (this as any) as CoordinatorContract;
            const encodedData = self._strictEncodeArguments('getTransactionHash((uint256,address,bytes))', [
                transaction,
            ]);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            callDataWithDefaults.from = callDataWithDefaults.from
                ? callDataWithDefaults.from.toLowerCase()
                : callDataWithDefaults.from;
            let rawCallResult;
            try {
                rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            } catch (err) {
                BaseContract._throwIfThrownErrorIsRevertError(err);
                throw err;
            }
            BaseContract._throwIfCallResultIsRevertError(rawCallResult);
            const abiEncoder = self._lookupAbiEncoder('getTransactionHash((uint256,address,bytes))');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<string>(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },
        getABIEncodedTransactionData(transaction: { salt: BigNumber; signerAddress: string; data: string }): string {
            const self = (this as any) as CoordinatorContract;
            const abiEncodedTransactionData = self._strictEncodeArguments(
                'getTransactionHash((uint256,address,bytes))',
                [transaction],
            );
            return abiEncodedTransactionData;
        },
        getABIDecodedReturnData(returnData: string): string {
            const self = (this as any) as CoordinatorContract;
            const abiEncoder = self._lookupAbiEncoder('getTransactionHash((uint256,address,bytes))');
            // tslint:disable boolean-naming
            const abiDecodedReturnData = abiEncoder.strictDecodeReturnValue<string>(returnData);
            return abiDecodedReturnData;
        },
    };
    public getCoordinatorApprovalHash = {
        async callAsync(
            approval: {
                txOrigin: string;
                transactionHash: string;
                transactionSignature: string;
                approvalExpirationTimeSeconds: BigNumber;
            },
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string> {
            assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
                schemas.addressSchema,
                schemas.numberSchema,
                schemas.jsNumber,
            ]);
            if (defaultBlock !== undefined) {
                assert.isBlockParam('defaultBlock', defaultBlock);
            }
            const self = (this as any) as CoordinatorContract;
            const encodedData = self._strictEncodeArguments(
                'getCoordinatorApprovalHash((address,bytes32,bytes,uint256))',
                [approval],
            );
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            callDataWithDefaults.from = callDataWithDefaults.from
                ? callDataWithDefaults.from.toLowerCase()
                : callDataWithDefaults.from;
            let rawCallResult;
            try {
                rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            } catch (err) {
                BaseContract._throwIfThrownErrorIsRevertError(err);
                throw err;
            }
            BaseContract._throwIfCallResultIsRevertError(rawCallResult);
            const abiEncoder = self._lookupAbiEncoder('getCoordinatorApprovalHash((address,bytes32,bytes,uint256))');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<string>(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },
        getABIEncodedTransactionData(approval: {
            txOrigin: string;
            transactionHash: string;
            transactionSignature: string;
            approvalExpirationTimeSeconds: BigNumber;
        }): string {
            const self = (this as any) as CoordinatorContract;
            const abiEncodedTransactionData = self._strictEncodeArguments(
                'getCoordinatorApprovalHash((address,bytes32,bytes,uint256))',
                [approval],
            );
            return abiEncodedTransactionData;
        },
        getABIDecodedReturnData(returnData: string): string {
            const self = (this as any) as CoordinatorContract;
            const abiEncoder = self._lookupAbiEncoder('getCoordinatorApprovalHash((address,bytes32,bytes,uint256))');
            // tslint:disable boolean-naming
            const abiDecodedReturnData = abiEncoder.strictDecodeReturnValue<string>(returnData);
            return abiDecodedReturnData;
        },
    };
    public executeTransaction = {
        async sendTransactionAsync(
            transaction: { salt: BigNumber; signerAddress: string; data: string },
            txOrigin: string,
            transactionSignature: string,
            approvalExpirationTimeSeconds: BigNumber[],
            approvalSignatures: string[],
            txData?: Partial<TxData> | undefined,
        ): Promise<string> {
            const self = (this as any) as CoordinatorContract;
            const encodedData = self._strictEncodeArguments(
                'executeTransaction((uint256,address,bytes),address,bytes,uint256[],bytes[])',
                [transaction, txOrigin, transactionSignature, approvalExpirationTimeSeconds, approvalSignatures],
            );
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.executeTransaction.estimateGasAsync.bind(
                    self,
                    transaction,
                    txOrigin,
                    transactionSignature,
                    approvalExpirationTimeSeconds,
                    approvalSignatures,
                ),
            );
            if (txDataWithDefaults.from !== undefined) {
                txDataWithDefaults.from = txDataWithDefaults.from.toLowerCase();
            }
            try {
                return await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            } catch (err) {
                // Try to decode ganache transaction revert Errors.
                BaseContract._throwIfThrownErrorIsRevertError(err);
                throw err;
            }
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        awaitTransactionSuccessAsync(
            transaction: { salt: BigNumber; signerAddress: string; data: string },
            txOrigin: string,
            transactionSignature: string,
            approvalExpirationTimeSeconds: BigNumber[],
            approvalSignatures: string[],
            txData?: Partial<TxData>,
            pollingIntervalMs?: number,
            timeoutMs?: number,
        ): PromiseWithTransactionHash<TransactionReceiptWithDecodedLogs> {
            assert.isString('txOrigin', txOrigin);
            assert.isString('transactionSignature', transactionSignature);
            assert.isArray('approvalExpirationTimeSeconds', approvalExpirationTimeSeconds);
            assert.isArray('approvalSignatures', approvalSignatures);
            const self = (this as any) as CoordinatorContract;
            const txHashPromise = self.executeTransaction.sendTransactionAsync(
                transaction,
                txOrigin.toLowerCase(),
                transactionSignature,
                approvalExpirationTimeSeconds,
                approvalSignatures,
                txData,
            );
            return new PromiseWithTransactionHash<TransactionReceiptWithDecodedLogs>(
                txHashPromise,
                (async (): Promise<TransactionReceiptWithDecodedLogs> => {
                    // When the transaction hash resolves, wait for it to be mined.
                    return self._web3Wrapper.awaitTransactionSuccessAsync(
                        await txHashPromise,
                        pollingIntervalMs,
                        timeoutMs,
                    );
                })(),
            );
        },
        async estimateGasAsync(
            transaction: { salt: BigNumber; signerAddress: string; data: string },
            txOrigin: string,
            transactionSignature: string,
            approvalExpirationTimeSeconds: BigNumber[],
            approvalSignatures: string[],
            txData?: Partial<TxData> | undefined,
        ): Promise<number> {
            const self = (this as any) as CoordinatorContract;
            const encodedData = self._strictEncodeArguments(
                'executeTransaction((uint256,address,bytes),address,bytes,uint256[],bytes[])',
                [transaction, txOrigin, transactionSignature, approvalExpirationTimeSeconds, approvalSignatures],
            );
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            if (txDataWithDefaults.from !== undefined) {
                txDataWithDefaults.from = txDataWithDefaults.from.toLowerCase();
            }
            try {
                return await self._web3Wrapper.estimateGasAsync(txDataWithDefaults);
            } catch (err) {
                // Try to decode ganache transaction revert Errors.
                BaseContract._throwIfThrownErrorIsRevertError(err);
                throw err;
            }
            const gas = await self._web3Wrapper.estimateGasAsync(txDataWithDefaults);
            return gas;
        },
        async callAsync(
            transaction: { salt: BigNumber; signerAddress: string; data: string },
            txOrigin: string,
            transactionSignature: string,
            approvalExpirationTimeSeconds: BigNumber[],
            approvalSignatures: string[],
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void> {
            assert.isString('txOrigin', txOrigin);
            assert.isString('transactionSignature', transactionSignature);
            assert.isArray('approvalExpirationTimeSeconds', approvalExpirationTimeSeconds);
            assert.isArray('approvalSignatures', approvalSignatures);
            assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
                schemas.addressSchema,
                schemas.numberSchema,
                schemas.jsNumber,
            ]);
            if (defaultBlock !== undefined) {
                assert.isBlockParam('defaultBlock', defaultBlock);
            }
            const self = (this as any) as CoordinatorContract;
            const encodedData = self._strictEncodeArguments(
                'executeTransaction((uint256,address,bytes),address,bytes,uint256[],bytes[])',
                [
                    transaction,
                    txOrigin.toLowerCase(),
                    transactionSignature,
                    approvalExpirationTimeSeconds,
                    approvalSignatures,
                ],
            );
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            callDataWithDefaults.from = callDataWithDefaults.from
                ? callDataWithDefaults.from.toLowerCase()
                : callDataWithDefaults.from;
            let rawCallResult;
            try {
                rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            } catch (err) {
                BaseContract._throwIfThrownErrorIsRevertError(err);
                throw err;
            }
            BaseContract._throwIfCallResultIsRevertError(rawCallResult);
            const abiEncoder = self._lookupAbiEncoder(
                'executeTransaction((uint256,address,bytes),address,bytes,uint256[],bytes[])',
            );
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },
        getABIEncodedTransactionData(
            transaction: { salt: BigNumber; signerAddress: string; data: string },
            txOrigin: string,
            transactionSignature: string,
            approvalExpirationTimeSeconds: BigNumber[],
            approvalSignatures: string[],
        ): string {
            assert.isString('txOrigin', txOrigin);
            assert.isString('transactionSignature', transactionSignature);
            assert.isArray('approvalExpirationTimeSeconds', approvalExpirationTimeSeconds);
            assert.isArray('approvalSignatures', approvalSignatures);
            const self = (this as any) as CoordinatorContract;
            const abiEncodedTransactionData = self._strictEncodeArguments(
                'executeTransaction((uint256,address,bytes),address,bytes,uint256[],bytes[])',
                [
                    transaction,
                    txOrigin.toLowerCase(),
                    transactionSignature,
                    approvalExpirationTimeSeconds,
                    approvalSignatures,
                ],
            );
            return abiEncodedTransactionData;
        },
        getABIDecodedReturnData(returnData: string): void {
            const self = (this as any) as CoordinatorContract;
            const abiEncoder = self._lookupAbiEncoder(
                'executeTransaction((uint256,address,bytes),address,bytes,uint256[],bytes[])',
            );
            // tslint:disable boolean-naming
            const abiDecodedReturnData = abiEncoder.strictDecodeReturnValue<void>(returnData);
            return abiDecodedReturnData;
        },
    };
    public EIP712_EXCHANGE_DOMAIN_HASH = {
        async callAsync(callData: Partial<CallData> = {}, defaultBlock?: BlockParam): Promise<string> {
            assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
                schemas.addressSchema,
                schemas.numberSchema,
                schemas.jsNumber,
            ]);
            if (defaultBlock !== undefined) {
                assert.isBlockParam('defaultBlock', defaultBlock);
            }
            const self = (this as any) as CoordinatorContract;
            const encodedData = self._strictEncodeArguments('EIP712_EXCHANGE_DOMAIN_HASH()', []);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            callDataWithDefaults.from = callDataWithDefaults.from
                ? callDataWithDefaults.from.toLowerCase()
                : callDataWithDefaults.from;
            let rawCallResult;
            try {
                rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            } catch (err) {
                BaseContract._throwIfThrownErrorIsRevertError(err);
                throw err;
            }
            BaseContract._throwIfCallResultIsRevertError(rawCallResult);
            const abiEncoder = self._lookupAbiEncoder('EIP712_EXCHANGE_DOMAIN_HASH()');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<string>(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },
        getABIEncodedTransactionData(): string {
            const self = (this as any) as CoordinatorContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('EIP712_EXCHANGE_DOMAIN_HASH()', []);
            return abiEncodedTransactionData;
        },
        getABIDecodedReturnData(returnData: string): string {
            const self = (this as any) as CoordinatorContract;
            const abiEncoder = self._lookupAbiEncoder('EIP712_EXCHANGE_DOMAIN_HASH()');
            // tslint:disable boolean-naming
            const abiDecodedReturnData = abiEncoder.strictDecodeReturnValue<string>(returnData);
            return abiDecodedReturnData;
        },
    };
    public assertValidCoordinatorApprovals = {
        async callAsync(
            transaction: { salt: BigNumber; signerAddress: string; data: string },
            txOrigin: string,
            transactionSignature: string,
            approvalExpirationTimeSeconds: BigNumber[],
            approvalSignatures: string[],
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void> {
            assert.isString('txOrigin', txOrigin);
            assert.isString('transactionSignature', transactionSignature);
            assert.isArray('approvalExpirationTimeSeconds', approvalExpirationTimeSeconds);
            assert.isArray('approvalSignatures', approvalSignatures);
            assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
                schemas.addressSchema,
                schemas.numberSchema,
                schemas.jsNumber,
            ]);
            if (defaultBlock !== undefined) {
                assert.isBlockParam('defaultBlock', defaultBlock);
            }
            const self = (this as any) as CoordinatorContract;
            const encodedData = self._strictEncodeArguments(
                'assertValidCoordinatorApprovals((uint256,address,bytes),address,bytes,uint256[],bytes[])',
                [
                    transaction,
                    txOrigin.toLowerCase(),
                    transactionSignature,
                    approvalExpirationTimeSeconds,
                    approvalSignatures,
                ],
            );
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            callDataWithDefaults.from = callDataWithDefaults.from
                ? callDataWithDefaults.from.toLowerCase()
                : callDataWithDefaults.from;
            let rawCallResult;
            try {
                rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            } catch (err) {
                BaseContract._throwIfThrownErrorIsRevertError(err);
                throw err;
            }
            BaseContract._throwIfCallResultIsRevertError(rawCallResult);
            const abiEncoder = self._lookupAbiEncoder(
                'assertValidCoordinatorApprovals((uint256,address,bytes),address,bytes,uint256[],bytes[])',
            );
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<void>(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },
        getABIEncodedTransactionData(
            transaction: { salt: BigNumber; signerAddress: string; data: string },
            txOrigin: string,
            transactionSignature: string,
            approvalExpirationTimeSeconds: BigNumber[],
            approvalSignatures: string[],
        ): string {
            assert.isString('txOrigin', txOrigin);
            assert.isString('transactionSignature', transactionSignature);
            assert.isArray('approvalExpirationTimeSeconds', approvalExpirationTimeSeconds);
            assert.isArray('approvalSignatures', approvalSignatures);
            const self = (this as any) as CoordinatorContract;
            const abiEncodedTransactionData = self._strictEncodeArguments(
                'assertValidCoordinatorApprovals((uint256,address,bytes),address,bytes,uint256[],bytes[])',
                [
                    transaction,
                    txOrigin.toLowerCase(),
                    transactionSignature,
                    approvalExpirationTimeSeconds,
                    approvalSignatures,
                ],
            );
            return abiEncodedTransactionData;
        },
        getABIDecodedReturnData(returnData: string): void {
            const self = (this as any) as CoordinatorContract;
            const abiEncoder = self._lookupAbiEncoder(
                'assertValidCoordinatorApprovals((uint256,address,bytes),address,bytes,uint256[],bytes[])',
            );
            // tslint:disable boolean-naming
            const abiDecodedReturnData = abiEncoder.strictDecodeReturnValue<void>(returnData);
            return abiDecodedReturnData;
        },
    };
    public decodeOrdersFromFillData = {
        async callAsync(
            data: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<
            Array<{
                makerAddress: string;
                takerAddress: string;
                feeRecipientAddress: string;
                senderAddress: string;
                makerAssetAmount: BigNumber;
                takerAssetAmount: BigNumber;
                makerFee: BigNumber;
                takerFee: BigNumber;
                expirationTimeSeconds: BigNumber;
                salt: BigNumber;
                makerAssetData: string;
                takerAssetData: string;
            }>
        > {
            assert.isString('data', data);
            assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
                schemas.addressSchema,
                schemas.numberSchema,
                schemas.jsNumber,
            ]);
            if (defaultBlock !== undefined) {
                assert.isBlockParam('defaultBlock', defaultBlock);
            }
            const self = (this as any) as CoordinatorContract;
            const encodedData = self._strictEncodeArguments('decodeOrdersFromFillData(bytes)', [data]);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            callDataWithDefaults.from = callDataWithDefaults.from
                ? callDataWithDefaults.from.toLowerCase()
                : callDataWithDefaults.from;
            let rawCallResult;
            try {
                rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            } catch (err) {
                BaseContract._throwIfThrownErrorIsRevertError(err);
                throw err;
            }
            BaseContract._throwIfCallResultIsRevertError(rawCallResult);
            const abiEncoder = self._lookupAbiEncoder('decodeOrdersFromFillData(bytes)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<
                Array<{
                    makerAddress: string;
                    takerAddress: string;
                    feeRecipientAddress: string;
                    senderAddress: string;
                    makerAssetAmount: BigNumber;
                    takerAssetAmount: BigNumber;
                    makerFee: BigNumber;
                    takerFee: BigNumber;
                    expirationTimeSeconds: BigNumber;
                    salt: BigNumber;
                    makerAssetData: string;
                    takerAssetData: string;
                }>
            >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },
        getABIEncodedTransactionData(data: string): string {
            assert.isString('data', data);
            const self = (this as any) as CoordinatorContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('decodeOrdersFromFillData(bytes)', [data]);
            return abiEncodedTransactionData;
        },
        getABIDecodedReturnData(
            returnData: string,
        ): Array<{
            makerAddress: string;
            takerAddress: string;
            feeRecipientAddress: string;
            senderAddress: string;
            makerAssetAmount: BigNumber;
            takerAssetAmount: BigNumber;
            makerFee: BigNumber;
            takerFee: BigNumber;
            expirationTimeSeconds: BigNumber;
            salt: BigNumber;
            makerAssetData: string;
            takerAssetData: string;
        }> {
            const self = (this as any) as CoordinatorContract;
            const abiEncoder = self._lookupAbiEncoder('decodeOrdersFromFillData(bytes)');
            // tslint:disable boolean-naming
            const abiDecodedReturnData = abiEncoder.strictDecodeReturnValue<
                Array<{
                    makerAddress: string;
                    takerAddress: string;
                    feeRecipientAddress: string;
                    senderAddress: string;
                    makerAssetAmount: BigNumber;
                    takerAssetAmount: BigNumber;
                    makerFee: BigNumber;
                    takerFee: BigNumber;
                    expirationTimeSeconds: BigNumber;
                    salt: BigNumber;
                    makerAssetData: string;
                    takerAssetData: string;
                }>
            >(returnData);
            return abiDecodedReturnData;
        },
    };
    public EIP712_COORDINATOR_DOMAIN_HASH = {
        async callAsync(callData: Partial<CallData> = {}, defaultBlock?: BlockParam): Promise<string> {
            assert.doesConformToSchema('callData', callData, schemas.callDataSchema, [
                schemas.addressSchema,
                schemas.numberSchema,
                schemas.jsNumber,
            ]);
            if (defaultBlock !== undefined) {
                assert.isBlockParam('defaultBlock', defaultBlock);
            }
            const self = (this as any) as CoordinatorContract;
            const encodedData = self._strictEncodeArguments('EIP712_COORDINATOR_DOMAIN_HASH()', []);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            callDataWithDefaults.from = callDataWithDefaults.from
                ? callDataWithDefaults.from.toLowerCase()
                : callDataWithDefaults.from;
            let rawCallResult;
            try {
                rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            } catch (err) {
                BaseContract._throwIfThrownErrorIsRevertError(err);
                throw err;
            }
            BaseContract._throwIfCallResultIsRevertError(rawCallResult);
            const abiEncoder = self._lookupAbiEncoder('EIP712_COORDINATOR_DOMAIN_HASH()');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<string>(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },
        getABIEncodedTransactionData(): string {
            const self = (this as any) as CoordinatorContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('EIP712_COORDINATOR_DOMAIN_HASH()', []);
            return abiEncodedTransactionData;
        },
        getABIDecodedReturnData(returnData: string): string {
            const self = (this as any) as CoordinatorContract;
            const abiEncoder = self._lookupAbiEncoder('EIP712_COORDINATOR_DOMAIN_HASH()');
            // tslint:disable boolean-naming
            const abiDecodedReturnData = abiEncoder.strictDecodeReturnValue<string>(returnData);
            return abiDecodedReturnData;
        },
    };
    public static async deployFrom0xArtifactAsync(
        artifact: ContractArtifact | SimpleContractArtifact,
        supportedProvider: SupportedProvider,
        txDefaults: Partial<TxData>,
        _exchange: string,
    ): Promise<CoordinatorContract> {
        assert.doesConformToSchema('txDefaults', txDefaults, schemas.txDataSchema, [
            schemas.addressSchema,
            schemas.numberSchema,
            schemas.jsNumber,
        ]);
        if (artifact.compilerOutput === undefined) {
            throw new Error('Compiler output not found in the artifact file');
        }
        const provider = providerUtils.standardizeOrThrow(supportedProvider);
        const bytecode = artifact.compilerOutput.evm.bytecode.object;
        const abi = artifact.compilerOutput.abi;
        return CoordinatorContract.deployAsync(bytecode, abi, provider, txDefaults, _exchange);
    }
    public static async deployAsync(
        bytecode: string,
        abi: ContractAbi,
        supportedProvider: SupportedProvider,
        txDefaults: Partial<TxData>,
        _exchange: string,
    ): Promise<CoordinatorContract> {
        assert.isHexString('bytecode', bytecode);
        assert.doesConformToSchema('txDefaults', txDefaults, schemas.txDataSchema, [
            schemas.addressSchema,
            schemas.numberSchema,
            schemas.jsNumber,
        ]);
        const provider = providerUtils.standardizeOrThrow(supportedProvider);
        const constructorAbi = BaseContract._lookupConstructorAbi(abi);
        [_exchange] = BaseContract._formatABIDataItemList(
            constructorAbi.inputs,
            [_exchange],
            BaseContract._bigNumberToString,
        );
        const iface = new ethers.utils.Interface(abi);
        const deployInfo = iface.deployFunction;
        const txData = deployInfo.encode(bytecode, [_exchange]);
        const web3Wrapper = new Web3Wrapper(provider);
        const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            { data: txData },
            txDefaults,
            web3Wrapper.estimateGasAsync.bind(web3Wrapper),
        );
        const txHash = await web3Wrapper.sendTransactionAsync(txDataWithDefaults);
        logUtils.log(`transactionHash: ${txHash}`);
        const txReceipt = await web3Wrapper.awaitTransactionSuccessAsync(txHash);
        logUtils.log(`Coordinator successfully deployed at ${txReceipt.contractAddress}`);
        const contractInstance = new CoordinatorContract(txReceipt.contractAddress as string, provider, txDefaults);
        contractInstance.constructorArgs = [_exchange];
        return contractInstance;
    }

    /**
     * @returns      The contract ABI
     */
    public static ABI(): ContractAbi {
        const abi = [
            {
                constant: true,
                inputs: [
                    {
                        name: 'hash',
                        type: 'bytes32',
                    },
                    {
                        name: 'signature',
                        type: 'bytes',
                    },
                ],
                name: 'getSignerAddress',
                outputs: [
                    {
                        name: 'signerAddress',
                        type: 'address',
                    },
                ],
                payable: false,
                stateMutability: 'pure',
                type: 'function',
            },
            {
                constant: true,
                inputs: [
                    {
                        name: 'transaction',
                        type: 'tuple',
                        components: [
                            {
                                name: 'salt',
                                type: 'uint256',
                            },
                            {
                                name: 'signerAddress',
                                type: 'address',
                            },
                            {
                                name: 'data',
                                type: 'bytes',
                            },
                        ],
                    },
                ],
                name: 'getTransactionHash',
                outputs: [
                    {
                        name: 'transactionHash',
                        type: 'bytes32',
                    },
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            {
                constant: true,
                inputs: [
                    {
                        name: 'approval',
                        type: 'tuple',
                        components: [
                            {
                                name: 'txOrigin',
                                type: 'address',
                            },
                            {
                                name: 'transactionHash',
                                type: 'bytes32',
                            },
                            {
                                name: 'transactionSignature',
                                type: 'bytes',
                            },
                            {
                                name: 'approvalExpirationTimeSeconds',
                                type: 'uint256',
                            },
                        ],
                    },
                ],
                name: 'getCoordinatorApprovalHash',
                outputs: [
                    {
                        name: 'approvalHash',
                        type: 'bytes32',
                    },
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            {
                constant: false,
                inputs: [
                    {
                        name: 'transaction',
                        type: 'tuple',
                        components: [
                            {
                                name: 'salt',
                                type: 'uint256',
                            },
                            {
                                name: 'signerAddress',
                                type: 'address',
                            },
                            {
                                name: 'data',
                                type: 'bytes',
                            },
                        ],
                    },
                    {
                        name: 'txOrigin',
                        type: 'address',
                    },
                    {
                        name: 'transactionSignature',
                        type: 'bytes',
                    },
                    {
                        name: 'approvalExpirationTimeSeconds',
                        type: 'uint256[]',
                    },
                    {
                        name: 'approvalSignatures',
                        type: 'bytes[]',
                    },
                ],
                name: 'executeTransaction',
                outputs: [],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                constant: true,
                inputs: [],
                name: 'EIP712_EXCHANGE_DOMAIN_HASH',
                outputs: [
                    {
                        name: '',
                        type: 'bytes32',
                    },
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            {
                constant: true,
                inputs: [
                    {
                        name: 'transaction',
                        type: 'tuple',
                        components: [
                            {
                                name: 'salt',
                                type: 'uint256',
                            },
                            {
                                name: 'signerAddress',
                                type: 'address',
                            },
                            {
                                name: 'data',
                                type: 'bytes',
                            },
                        ],
                    },
                    {
                        name: 'txOrigin',
                        type: 'address',
                    },
                    {
                        name: 'transactionSignature',
                        type: 'bytes',
                    },
                    {
                        name: 'approvalExpirationTimeSeconds',
                        type: 'uint256[]',
                    },
                    {
                        name: 'approvalSignatures',
                        type: 'bytes[]',
                    },
                ],
                name: 'assertValidCoordinatorApprovals',
                outputs: [],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            {
                constant: true,
                inputs: [
                    {
                        name: 'data',
                        type: 'bytes',
                    },
                ],
                name: 'decodeOrdersFromFillData',
                outputs: [
                    {
                        name: 'orders',
                        type: 'tuple[]',
                        components: [
                            {
                                name: 'makerAddress',
                                type: 'address',
                            },
                            {
                                name: 'takerAddress',
                                type: 'address',
                            },
                            {
                                name: 'feeRecipientAddress',
                                type: 'address',
                            },
                            {
                                name: 'senderAddress',
                                type: 'address',
                            },
                            {
                                name: 'makerAssetAmount',
                                type: 'uint256',
                            },
                            {
                                name: 'takerAssetAmount',
                                type: 'uint256',
                            },
                            {
                                name: 'makerFee',
                                type: 'uint256',
                            },
                            {
                                name: 'takerFee',
                                type: 'uint256',
                            },
                            {
                                name: 'expirationTimeSeconds',
                                type: 'uint256',
                            },
                            {
                                name: 'salt',
                                type: 'uint256',
                            },
                            {
                                name: 'makerAssetData',
                                type: 'bytes',
                            },
                            {
                                name: 'takerAssetData',
                                type: 'bytes',
                            },
                        ],
                    },
                ],
                payable: false,
                stateMutability: 'pure',
                type: 'function',
            },
            {
                constant: true,
                inputs: [],
                name: 'EIP712_COORDINATOR_DOMAIN_HASH',
                outputs: [
                    {
                        name: '',
                        type: 'bytes32',
                    },
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            {
                inputs: [
                    {
                        name: '_exchange',
                        type: 'address',
                    },
                ],
                outputs: [],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'constructor',
            },
        ] as ContractAbi;
        return abi;
    }
    constructor(address: string, supportedProvider: SupportedProvider, txDefaults?: Partial<TxData>) {
        super('Coordinator', CoordinatorContract.ABI(), address, supportedProvider, txDefaults);
        classUtils.bindAll(this, ['_abiEncoderByFunctionSignature', 'address', '_web3Wrapper']);
    }
}

// tslint:disable:max-file-line-count
// tslint:enable:no-unbound-method no-parameter-reassignment no-consecutive-blank-lines ordered-imports align
// tslint:enable:trailing-comma whitespace no-trailing-whitespace

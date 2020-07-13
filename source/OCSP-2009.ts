
/*
    BEGIN_MODULE OCSP-2009
    OID: iso.identified-organization.dod.internet.security.mechanisms.pkix.id-mod.id-mod-ocsp-02
    IRI: undefined
    EXTENSIBLE: false
    ENCODINGREF: undefined
    FILE: undefined
    Produced by Jonathan M. Wilbur's <jonathan@wilbur.space> ASN.1 Compiler.
*/
import * as asn1 from "asn1-ts";
import * as __utils from "./__utils";
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
} from "./__utils";
import * as PKIX_CommonTypes_2009 from "./PKIX-CommonTypes-2009";
import {
    EXTENSION,
    ATTRIBUTE,
    Extensions,
    _decode_Extensions,
    _encode_Extensions
} from "./PKIX-CommonTypes-2009";
export {
    EXTENSION,
    ATTRIBUTE,
    Extensions,
    _decode_Extensions,
    _encode_Extensions
} from "./PKIX-CommonTypes-2009";

import * as AlgorithmInformation_2009 from "./AlgorithmInformation-2009";
import {
    DIGEST_ALGORITHM,
    SIGNATURE_ALGORITHM,
    AlgorithmIdentifier,
    _get_decoder_for_AlgorithmIdentifier,
    _get_encoder_for_AlgorithmIdentifier
} from "./AlgorithmInformation-2009";
export {
    DIGEST_ALGORITHM,
    SIGNATURE_ALGORITHM,
    AlgorithmIdentifier,
    _get_decoder_for_AlgorithmIdentifier,
    _get_encoder_for_AlgorithmIdentifier
} from "./AlgorithmInformation-2009";

import * as PKIX1Implicit_2009 from "./PKIX1Implicit-2009";
import {
    AuthorityInfoAccessSyntax,
    GeneralName,
    CrlEntryExtensions,
    _decode_AuthorityInfoAccessSyntax,
    _encode_AuthorityInfoAccessSyntax,
    _decode_GeneralName,
    _encode_GeneralName
} from "./PKIX1Implicit-2009";
export {
    AuthorityInfoAccessSyntax,
    GeneralName,
    CrlEntryExtensions,
    _decode_AuthorityInfoAccessSyntax,
    _encode_AuthorityInfoAccessSyntax,
    _decode_GeneralName,
    _encode_GeneralName
} from "./PKIX1Implicit-2009";

import * as PKIX1Explicit_2009 from "./PKIX1Explicit-2009";
import {
    Name,
    CertificateSerialNumber,
    id_kp,
    id_ad_ocsp,
    Certificate,
    _decode_Name,
    _encode_Name,
    _decode_CertificateSerialNumber,
    _encode_CertificateSerialNumber,
    _decode_Certificate,
    _encode_Certificate
} from "./PKIX1Explicit-2009";
export {
    Name,
    CertificateSerialNumber,
    id_kp,
    id_ad_ocsp,
    Certificate,
    _decode_Name,
    _encode_Name,
    _decode_CertificateSerialNumber,
    _encode_CertificateSerialNumber,
    _decode_Certificate,
    _encode_Certificate
} from "./PKIX1Explicit-2009";

import * as PKIXAlgs_2009 from "./PKIXAlgs-2009";
import {
    sa_dsaWithSHA1,
    sa_rsaWithMD2,
    sa_rsaWithMD5,
    sa_rsaWithSHA1
} from "./PKIXAlgs-2009";
export {
    sa_dsaWithSHA1,
    sa_rsaWithMD2,
    sa_rsaWithMD5,
    sa_rsaWithSHA1
} from "./PKIXAlgs-2009";


export type Version = asn1.INTEGER;
export const Version_v1: Version = 0; /* LONG_NAMED_INTEGER_VALUE */
let _cached_decoder_for_Version: __utils.ASN1Decoder<Version> | null = null;
let _cached_encoder_for_Version: __utils.ASN1Encoder<Version> | null = null;
export function _decode_Version (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Version) { _cached_decoder_for_Version = __utils._decodeInteger; }
    return _cached_decoder_for_Version(el);
}
export function _encode_Version (value: Version, elGetter: __utils.ASN1Encoder<Version>) {
    if (!_cached_encoder_for_Version) { _cached_encoder_for_Version = __utils._encodeInteger; }
    return _cached_encoder_for_Version(value, elGetter);
}


export class CertID {
    constructor (
        readonly hashAlgorithm: AlgorithmIdentifier,
        readonly issuerNameHash: asn1.OCTET_STRING,
        readonly issuerKeyHash: asn1.OCTET_STRING,
        readonly serialNumber: CertificateSerialNumber
    ) {}

}
export const _root_component_type_list_1_spec_for_CertID: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("hashAlgorithm", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined),
    new __utils.ComponentSpec("issuerNameHash", false, __utils.hasTag(asn1.ASN1TagClass.universal, 4), undefined, undefined),
    new __utils.ComponentSpec("issuerKeyHash", false, __utils.hasTag(asn1.ASN1TagClass.universal, 4), undefined, undefined),
    new __utils.ComponentSpec("serialNumber", false, __utils.hasTag(asn1.ASN1TagClass.universal, 2), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_CertID: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_CertID: __utils.ComponentSpec[] = [
    
];
let _cached_decoder_for_CertID: __utils.ASN1Decoder<CertID> | null = null;
let _cached_encoder_for_CertID: __utils.ASN1Encoder<CertID> | null = null;
export function _decode_CertID (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_CertID) { _cached_decoder_for_CertID = function (el: asn1.ASN1Element): CertID {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 4) {
        throw new asn1.ASN1ConstructionError("CertID contained only " + sequence.length.toString() + " elements.");
    }
    // TODO: Validate tags.
    sequence[0].name = "hashAlgorithm";
    sequence[1].name = "issuerNameHash";
    sequence[2].name = "issuerKeyHash";
    sequence[3].name = "serialNumber";
    let hashAlgorithm!: AlgorithmIdentifier;
    let issuerNameHash!: asn1.OCTET_STRING;
    let issuerKeyHash!: asn1.OCTET_STRING;
    let serialNumber!: CertificateSerialNumber;
    hashAlgorithm = _decode_AlgorithmIdentifier(sequence[0]);
    issuerNameHash = __utils._decodeOctetString(sequence[1]);
    issuerKeyHash = __utils._decodeOctetString(sequence[2]);
    serialNumber = _decode_CertificateSerialNumber(sequence[3]);
    // TODO: Validate values.
    return new CertID(
        hashAlgorithm,
        issuerNameHash,
        issuerKeyHash,
        serialNumber,

    );
}; }
    return _cached_decoder_for_CertID(el);
}
export function _encode_CertID (value: CertID, elGetter: __utils.ASN1Encoder<CertID>) {
    if (!_cached_encoder_for_CertID) { _cached_encoder_for_CertID = function (value: CertID, elGetter: __utils.ASN1Encoder<CertID>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_AlgorithmIdentifier(value.hashAlgorithm, __utils.BER),
            /* REQUIRED   */ __utils._encodeOctetString(value.issuerNameHash, __utils.BER),
            /* REQUIRED   */ __utils._encodeOctetString(value.issuerKeyHash, __utils.BER),
            /* REQUIRED   */ _encode_CertificateSerialNumber(value.serialNumber, __utils.BER)
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
}; }
    return _cached_encoder_for_CertID(value, elGetter);
}


export class Request {
    constructor (
        readonly reqCert: CertID,
        readonly singleRequestExtensions: asn1.OPTIONAL<Extensions>
    ) {}

}
export const _root_component_type_list_1_spec_for_Request: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("reqCert", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined),
    new __utils.ComponentSpec("singleRequestExtensions", true, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_Request: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_Request: __utils.ComponentSpec[] = [
    
];
let _cached_decoder_for_Request: __utils.ASN1Decoder<Request> | null = null;
let _cached_encoder_for_Request: __utils.ASN1Encoder<Request> | null = null;
export function _decode_Request (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Request) { _cached_decoder_for_Request = function (el: asn1.ASN1Element): Request {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let reqCert!: CertID;
    let singleRequestExtensions: asn1.OPTIONAL<Extensions>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "reqCert": (_el: asn1.ASN1Element): void => { reqCert = _decode_CertID(_el); },
        "singleRequestExtensions": (_el: asn1.ASN1Element): void => { singleRequestExtensions = __utils._decode_explicit<Extensions>(() => _decode_Extensions)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Request,
        _extension_additions_list_spec_for_Request,
        _root_component_type_list_2_spec_for_Request,
        undefined,
    );
    return new Request( /* SEQUENCE_CONSTRUCTOR_CALL */
        reqCert,
        singleRequestExtensions
    );
}; }
    return _cached_decoder_for_Request(el);
}
export function _encode_Request (value: Request, elGetter: __utils.ASN1Encoder<Request>) {
    if (!_cached_encoder_for_Request) { _cached_encoder_for_Request = function (value: Request, elGetter: __utils.ASN1Encoder<Request>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_CertID(value.reqCert, __utils.BER),
            /* IF_ABSENT  */ ((value.singleRequestExtensions === undefined) ? undefined : __utils._encode_explicit(asn1.ASN1TagClass.context, 0, () => _encode_Extensions, __utils.BER)(value.singleRequestExtensions, __utils.BER))
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
}; }
    return _cached_encoder_for_Request(value, elGetter);
}


export class TBSRequest {
    constructor (
        readonly version: asn1.OPTIONAL<Version>,
        readonly requestorName: asn1.OPTIONAL<GeneralName>,
        readonly requestList: Request[],
        readonly requestExtensions: asn1.OPTIONAL<Extensions>
    ) {}
    public static get _default_value_for_version () { return v1; }
}
export const _root_component_type_list_1_spec_for_TBSRequest: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("version", true, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined),
    new __utils.ComponentSpec("requestorName", true, __utils.hasTag(asn1.ASN1TagClass.context, 1), undefined, undefined),
    new __utils.ComponentSpec("requestList", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined),
    new __utils.ComponentSpec("requestExtensions", true, __utils.hasTag(asn1.ASN1TagClass.context, 2), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_TBSRequest: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_TBSRequest: __utils.ComponentSpec[] = [
    
];
let _cached_decoder_for_TBSRequest: __utils.ASN1Decoder<TBSRequest> | null = null;
let _cached_encoder_for_TBSRequest: __utils.ASN1Encoder<TBSRequest> | null = null;
export function _decode_TBSRequest (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_TBSRequest) { _cached_decoder_for_TBSRequest = function (el: asn1.ASN1Element): TBSRequest {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let version: asn1.OPTIONAL<Version> = TBSRequest._default_value_for_version;
    let requestorName: asn1.OPTIONAL<GeneralName>;
    let requestList!: Request[];
    let requestExtensions: asn1.OPTIONAL<Extensions>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "version": (_el: asn1.ASN1Element): void => { version = __utils._decode_explicit<Version>(() => _decode_Version)(_el); },
        "requestorName": (_el: asn1.ASN1Element): void => { requestorName = __utils._decode_explicit<GeneralName>(() => _decode_GeneralName)(_el); },
        "requestList": (_el: asn1.ASN1Element): void => { requestList = __utils._decodeSequenceOf<Request>(() => _decode_Request)(_el); },
        "requestExtensions": (_el: asn1.ASN1Element): void => { requestExtensions = __utils._decode_explicit<Extensions>(() => _decode_Extensions)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TBSRequest,
        _extension_additions_list_spec_for_TBSRequest,
        _root_component_type_list_2_spec_for_TBSRequest,
        undefined,
    );
    return new TBSRequest( /* SEQUENCE_CONSTRUCTOR_CALL */
        version,
        requestorName,
        requestList,
        requestExtensions
    );
}; }
    return _cached_decoder_for_TBSRequest(el);
}
export function _encode_TBSRequest (value: TBSRequest, elGetter: __utils.ASN1Encoder<TBSRequest>) {
    if (!_cached_encoder_for_TBSRequest) { _cached_encoder_for_TBSRequest = function (value: TBSRequest, elGetter: __utils.ASN1Encoder<TBSRequest>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* IF_DEFAULT */ (value.version === undefined || __utils.deepEq(value.version, TBSRequest._default_value_for_version) ? undefined : __utils._encode_explicit(asn1.ASN1TagClass.context, 0, () => _encode_Version, __utils.BER)(value.version, __utils.BER)),
            /* IF_ABSENT  */ ((value.requestorName === undefined) ? undefined : __utils._encode_explicit(asn1.ASN1TagClass.context, 1, () => _encode_GeneralName, __utils.BER)(value.requestorName, __utils.BER)),
            /* REQUIRED   */ __utils._encodeSequenceOf<Request>(() => _encode_Request, __utils.BER)(value.requestList, __utils.BER),
            /* IF_ABSENT  */ ((value.requestExtensions === undefined) ? undefined : __utils._encode_explicit(asn1.ASN1TagClass.context, 2, () => _encode_Extensions, __utils.BER)(value.requestExtensions, __utils.BER))
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
}; }
    return _cached_encoder_for_TBSRequest(value, elGetter);
}


export class Signature {
    constructor (
        readonly signatureAlgorithm: AlgorithmIdentifier,
        readonly signature: asn1.BIT_STRING,
        readonly certs: asn1.OPTIONAL<Certificate[]>
    ) {}

}
export const _root_component_type_list_1_spec_for_Signature: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("signatureAlgorithm", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined),
    new __utils.ComponentSpec("signature", false, __utils.hasTag(asn1.ASN1TagClass.universal, 3), undefined, undefined),
    new __utils.ComponentSpec("certs", true, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_Signature: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_Signature: __utils.ComponentSpec[] = [
    
];
let _cached_decoder_for_Signature: __utils.ASN1Decoder<Signature> | null = null;
let _cached_encoder_for_Signature: __utils.ASN1Encoder<Signature> | null = null;
export function _decode_Signature (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Signature) { _cached_decoder_for_Signature = function (el: asn1.ASN1Element): Signature {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let signatureAlgorithm!: AlgorithmIdentifier;
    let signature!: asn1.BIT_STRING;
    let certs: asn1.OPTIONAL<Certificate[]>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "signatureAlgorithm": (_el: asn1.ASN1Element): void => { signatureAlgorithm = _decode_AlgorithmIdentifier(_el); },
        "signature": (_el: asn1.ASN1Element): void => { signature = __utils._decodeBitString(_el); },
        "certs": (_el: asn1.ASN1Element): void => { certs = __utils._decode_explicit<Certificate[]>(() => __utils._decodeSequenceOf<Certificate>(() => _decode_Certificate))(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Signature,
        _extension_additions_list_spec_for_Signature,
        _root_component_type_list_2_spec_for_Signature,
        undefined,
    );
    return new Signature( /* SEQUENCE_CONSTRUCTOR_CALL */
        signatureAlgorithm,
        signature,
        certs
    );
}; }
    return _cached_decoder_for_Signature(el);
}
export function _encode_Signature (value: Signature, elGetter: __utils.ASN1Encoder<Signature>) {
    if (!_cached_encoder_for_Signature) { _cached_encoder_for_Signature = function (value: Signature, elGetter: __utils.ASN1Encoder<Signature>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_AlgorithmIdentifier(value.signatureAlgorithm, __utils.BER),
            /* REQUIRED   */ __utils._encodeBitString(value.signature, __utils.BER),
            /* IF_ABSENT  */ ((value.certs === undefined) ? undefined : __utils._encode_explicit(asn1.ASN1TagClass.context, 0, () => __utils._encodeSequenceOf<Certificate>(() => _encode_Certificate, __utils.BER), __utils.BER)(value.certs, __utils.BER))
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
}; }
    return _cached_encoder_for_Signature(value, elGetter);
}


export class OCSPRequest {
    constructor (
        readonly tbsRequest: TBSRequest,
        readonly optionalSignature: asn1.OPTIONAL<Signature>
    ) {}

}
export const _root_component_type_list_1_spec_for_OCSPRequest: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("tbsRequest", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined),
    new __utils.ComponentSpec("optionalSignature", true, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_OCSPRequest: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_OCSPRequest: __utils.ComponentSpec[] = [
    
];
let _cached_decoder_for_OCSPRequest: __utils.ASN1Decoder<OCSPRequest> | null = null;
let _cached_encoder_for_OCSPRequest: __utils.ASN1Encoder<OCSPRequest> | null = null;
export function _decode_OCSPRequest (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_OCSPRequest) { _cached_decoder_for_OCSPRequest = function (el: asn1.ASN1Element): OCSPRequest {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let tbsRequest!: TBSRequest;
    let optionalSignature: asn1.OPTIONAL<Signature>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "tbsRequest": (_el: asn1.ASN1Element): void => { tbsRequest = _decode_TBSRequest(_el); },
        "optionalSignature": (_el: asn1.ASN1Element): void => { optionalSignature = __utils._decode_explicit<Signature>(() => _decode_Signature)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_OCSPRequest,
        _extension_additions_list_spec_for_OCSPRequest,
        _root_component_type_list_2_spec_for_OCSPRequest,
        undefined,
    );
    return new OCSPRequest( /* SEQUENCE_CONSTRUCTOR_CALL */
        tbsRequest,
        optionalSignature
    );
}; }
    return _cached_decoder_for_OCSPRequest(el);
}
export function _encode_OCSPRequest (value: OCSPRequest, elGetter: __utils.ASN1Encoder<OCSPRequest>) {
    if (!_cached_encoder_for_OCSPRequest) { _cached_encoder_for_OCSPRequest = function (value: OCSPRequest, elGetter: __utils.ASN1Encoder<OCSPRequest>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_TBSRequest(value.tbsRequest, __utils.BER),
            /* IF_ABSENT  */ ((value.optionalSignature === undefined) ? undefined : __utils._encode_explicit(asn1.ASN1TagClass.context, 0, () => _encode_Signature, __utils.BER)(value.optionalSignature, __utils.BER))
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
}; }
    return _cached_encoder_for_OCSPRequest(value, elGetter);
}


export enum OCSPResponseStatus {
    successful = 0,
    malformedRequest = 1,
    internalError = 2,
    tryLater = 3,
    sigRequired = 5,
    unauthorized = 6,
}
export const OCSPResponseStatus_successful: OCSPResponseStatus = OCSPResponseStatus.successful; /* LONG_NAMED_ENUMERATED_VALUE */
export const OCSPResponseStatus_malformedRequest: OCSPResponseStatus = OCSPResponseStatus.malformedRequest; /* LONG_NAMED_ENUMERATED_VALUE */
export const OCSPResponseStatus_internalError: OCSPResponseStatus = OCSPResponseStatus.internalError; /* LONG_NAMED_ENUMERATED_VALUE */
export const OCSPResponseStatus_tryLater: OCSPResponseStatus = OCSPResponseStatus.tryLater; /* LONG_NAMED_ENUMERATED_VALUE */
export const OCSPResponseStatus_sigRequired: OCSPResponseStatus = OCSPResponseStatus.sigRequired; /* LONG_NAMED_ENUMERATED_VALUE */
export const OCSPResponseStatus_unauthorized: OCSPResponseStatus = OCSPResponseStatus.unauthorized; /* LONG_NAMED_ENUMERATED_VALUE */
let _cached_decoder_for_OCSPResponseStatus: __utils.ASN1Decoder<OCSPResponseStatus> | null = null;
let _cached_encoder_for_OCSPResponseStatus: __utils.ASN1Encoder<OCSPResponseStatus> | null = null;
export function _decode_OCSPResponseStatus (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_OCSPResponseStatus) { _cached_decoder_for_OCSPResponseStatus = __utils._decodeEnumerated; }
    return _cached_decoder_for_OCSPResponseStatus(el);
}
export function _encode_OCSPResponseStatus (value: OCSPResponseStatus, elGetter: __utils.ASN1Encoder<OCSPResponseStatus>) {
    if (!_cached_encoder_for_OCSPResponseStatus) { _cached_encoder_for_OCSPResponseStatus = __utils._encodeEnumerated; }
    return _cached_encoder_for_OCSPResponseStatus(value, elGetter);
}


export class ResponseBytes {
    constructor (
        readonly responseType: asn1.OBJECT_IDENTIFIER,
        readonly response: asn1.OCTET_STRING
    ) {}

}
export const _root_component_type_list_1_spec_for_ResponseBytes: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("responseType", false, __utils.hasTag(asn1.ASN1TagClass.universal, 6), undefined, undefined),
    new __utils.ComponentSpec("response", false, __utils.hasTag(asn1.ASN1TagClass.universal, 4), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_ResponseBytes: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_ResponseBytes: __utils.ComponentSpec[] = [
    
];
let _cached_decoder_for_ResponseBytes: __utils.ASN1Decoder<ResponseBytes> | null = null;
let _cached_encoder_for_ResponseBytes: __utils.ASN1Encoder<ResponseBytes> | null = null;
export function _decode_ResponseBytes (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ResponseBytes) { _cached_decoder_for_ResponseBytes = function (el: asn1.ASN1Element): ResponseBytes {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new asn1.ASN1ConstructionError("ResponseBytes contained only " + sequence.length.toString() + " elements.");
    }
    // TODO: Validate tags.
    sequence[0].name = "responseType";
    sequence[1].name = "response";
    let responseType!: asn1.OBJECT_IDENTIFIER;
    let response!: asn1.OCTET_STRING;
    responseType = __utils._decodeObjectIdentifier(sequence[0]);
    response = __utils._decodeOctetString(sequence[1]);
    // TODO: Validate values.
    return new ResponseBytes(
        responseType,
        response,

    );
}; }
    return _cached_decoder_for_ResponseBytes(el);
}
export function _encode_ResponseBytes (value: ResponseBytes, elGetter: __utils.ASN1Encoder<ResponseBytes>) {
    if (!_cached_encoder_for_ResponseBytes) { _cached_encoder_for_ResponseBytes = function (value: ResponseBytes, elGetter: __utils.ASN1Encoder<ResponseBytes>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ __utils._encodeObjectIdentifier(value.responseType, __utils.BER),
            /* REQUIRED   */ __utils._encodeOctetString(value.response, __utils.BER)
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
}; }
    return _cached_encoder_for_ResponseBytes(value, elGetter);
}


export class OCSPResponse {
    constructor (
        readonly responseStatus: OCSPResponseStatus,
        readonly responseBytes: asn1.OPTIONAL<ResponseBytes>
    ) {}

}
export const _root_component_type_list_1_spec_for_OCSPResponse: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("responseStatus", false, __utils.hasTag(asn1.ASN1TagClass.universal, 10), undefined, undefined),
    new __utils.ComponentSpec("responseBytes", true, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_OCSPResponse: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_OCSPResponse: __utils.ComponentSpec[] = [
    
];
let _cached_decoder_for_OCSPResponse: __utils.ASN1Decoder<OCSPResponse> | null = null;
let _cached_encoder_for_OCSPResponse: __utils.ASN1Encoder<OCSPResponse> | null = null;
export function _decode_OCSPResponse (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_OCSPResponse) { _cached_decoder_for_OCSPResponse = function (el: asn1.ASN1Element): OCSPResponse {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let responseStatus!: OCSPResponseStatus;
    let responseBytes: asn1.OPTIONAL<ResponseBytes>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "responseStatus": (_el: asn1.ASN1Element): void => { responseStatus = _decode_OCSPResponseStatus(_el); },
        "responseBytes": (_el: asn1.ASN1Element): void => { responseBytes = __utils._decode_explicit<ResponseBytes>(() => _decode_ResponseBytes)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_OCSPResponse,
        _extension_additions_list_spec_for_OCSPResponse,
        _root_component_type_list_2_spec_for_OCSPResponse,
        undefined,
    );
    return new OCSPResponse( /* SEQUENCE_CONSTRUCTOR_CALL */
        responseStatus,
        responseBytes
    );
}; }
    return _cached_decoder_for_OCSPResponse(el);
}
export function _encode_OCSPResponse (value: OCSPResponse, elGetter: __utils.ASN1Encoder<OCSPResponse>) {
    if (!_cached_encoder_for_OCSPResponse) { _cached_encoder_for_OCSPResponse = function (value: OCSPResponse, elGetter: __utils.ASN1Encoder<OCSPResponse>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_OCSPResponseStatus(value.responseStatus, __utils.BER),
            /* IF_ABSENT  */ ((value.responseBytes === undefined) ? undefined : __utils._encode_explicit(asn1.ASN1TagClass.context, 0, () => _encode_ResponseBytes, __utils.BER)(value.responseBytes, __utils.BER))
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
}; }
    return _cached_encoder_for_OCSPResponse(value, elGetter);
}


// TODO: ObjectSetAssignment: ResponseSet

// TODO: ObjectClassAssignment: RESPONSE

// TODO: ObjectAssignment: basicResponse

export type KeyHash = asn1.OCTET_STRING; // OctetStringType
let _cached_decoder_for_KeyHash: __utils.ASN1Decoder<KeyHash> | null = null;
let _cached_encoder_for_KeyHash: __utils.ASN1Encoder<KeyHash> | null = null;
export function _decode_KeyHash (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_KeyHash) { _cached_decoder_for_KeyHash = __utils._decodeOctetString; }
    return _cached_decoder_for_KeyHash(el);
}
export function _encode_KeyHash (value: KeyHash, elGetter: __utils.ASN1Encoder<KeyHash>) {
    if (!_cached_encoder_for_KeyHash) { _cached_encoder_for_KeyHash = __utils._encodeOctetString; }
    return _cached_encoder_for_KeyHash(value, elGetter);
}


export type ResponderID =
    { byName: Name } /* CHOICE_ALT_ROOT */
    | { byKey: KeyHash } /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_ResponderID: __utils.ASN1Decoder<ResponderID> | null = null;
let _cached_encoder_for_ResponderID: __utils.ASN1Encoder<ResponderID> | null = null;
export function _decode_ResponderID (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ResponderID) { _cached_decoder_for_ResponderID = __utils._decode_inextensible_choice<ResponderID>({
    "CONTEXT 1": [ "byName", __utils._decode_explicit<Name>(() => _decode_Name) ],
    "CONTEXT 2": [ "byKey", __utils._decode_explicit<KeyHash>(() => _decode_KeyHash) ]
}); }
    return _cached_decoder_for_ResponderID(el);
}
export function _encode_ResponderID (value: ResponderID, elGetter: __utils.ASN1Encoder<ResponderID>) {
    if (!_cached_encoder_for_ResponderID) { _cached_encoder_for_ResponderID = __utils._encode_choice<ResponderID>({
    "byName": __utils._encode_explicit(asn1.ASN1TagClass.context, 1, () => _encode_Name, __utils.BER),
    "byKey": __utils._encode_explicit(asn1.ASN1TagClass.context, 2, () => _encode_KeyHash, __utils.BER),
}, __utils.BER); }
    return _cached_encoder_for_ResponderID(value, elGetter);
}


export type CRLReason = asn1.INTEGER;
let _cached_decoder_for_CRLReason: __utils.ASN1Decoder<CRLReason> | null = null;
let _cached_encoder_for_CRLReason: __utils.ASN1Encoder<CRLReason> | null = null;
export function _decode_CRLReason (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_CRLReason) { _cached_decoder_for_CRLReason = __utils._decodeInteger; }
    return _cached_decoder_for_CRLReason(el);
}
export function _encode_CRLReason (value: CRLReason, elGetter: __utils.ASN1Encoder<CRLReason>) {
    if (!_cached_encoder_for_CRLReason) { _cached_encoder_for_CRLReason = __utils._encodeInteger; }
    return _cached_encoder_for_CRLReason(value, elGetter);
}


export class RevokedInfo {
    constructor (
        readonly revocationTime: asn1.GeneralizedTime,
        readonly revocationReason: asn1.OPTIONAL<CRLReason>
    ) {}

}
export const _root_component_type_list_1_spec_for_RevokedInfo: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("revocationTime", false, __utils.hasTag(asn1.ASN1TagClass.universal, 24), undefined, undefined),
    new __utils.ComponentSpec("revocationReason", true, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_RevokedInfo: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_RevokedInfo: __utils.ComponentSpec[] = [
    
];
let _cached_decoder_for_RevokedInfo: __utils.ASN1Decoder<RevokedInfo> | null = null;
let _cached_encoder_for_RevokedInfo: __utils.ASN1Encoder<RevokedInfo> | null = null;
export function _decode_RevokedInfo (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_RevokedInfo) { _cached_decoder_for_RevokedInfo = function (el: asn1.ASN1Element): RevokedInfo {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let revocationTime!: asn1.GeneralizedTime;
    let revocationReason: asn1.OPTIONAL<CRLReason>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "revocationTime": (_el: asn1.ASN1Element): void => { revocationTime = __utils._decodeGeneralizedTime(_el); },
        "revocationReason": (_el: asn1.ASN1Element): void => { revocationReason = __utils._decode_explicit<CRLReason>(() => _decode_CRLReason)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_RevokedInfo,
        _extension_additions_list_spec_for_RevokedInfo,
        _root_component_type_list_2_spec_for_RevokedInfo,
        undefined,
    );
    return new RevokedInfo( /* SEQUENCE_CONSTRUCTOR_CALL */
        revocationTime,
        revocationReason
    );
}; }
    return _cached_decoder_for_RevokedInfo(el);
}
export function _encode_RevokedInfo (value: RevokedInfo, elGetter: __utils.ASN1Encoder<RevokedInfo>) {
    if (!_cached_encoder_for_RevokedInfo) { _cached_encoder_for_RevokedInfo = function (value: RevokedInfo, elGetter: __utils.ASN1Encoder<RevokedInfo>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ __utils._encodeGeneralizedTime(value.revocationTime, __utils.BER),
            /* IF_ABSENT  */ ((value.revocationReason === undefined) ? undefined : __utils._encode_explicit(asn1.ASN1TagClass.context, 0, () => _encode_CRLReason, __utils.BER)(value.revocationReason, __utils.BER))
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
}; }
    return _cached_encoder_for_RevokedInfo(value, elGetter);
}


export type UnknownInfo = asn1.NULL; // NullType
let _cached_decoder_for_UnknownInfo: __utils.ASN1Decoder<UnknownInfo> | null = null;
let _cached_encoder_for_UnknownInfo: __utils.ASN1Encoder<UnknownInfo> | null = null;
export function _decode_UnknownInfo (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_UnknownInfo) { _cached_decoder_for_UnknownInfo = __utils._decodeNull; }
    return _cached_decoder_for_UnknownInfo(el);
}
export function _encode_UnknownInfo (value: UnknownInfo, elGetter: __utils.ASN1Encoder<UnknownInfo>) {
    if (!_cached_encoder_for_UnknownInfo) { _cached_encoder_for_UnknownInfo = __utils._encodeNull; }
    return _cached_encoder_for_UnknownInfo(value, elGetter);
}


export type CertStatus =
    { good: asn1.NULL } /* CHOICE_ALT_ROOT */
    | { revoked: RevokedInfo } /* CHOICE_ALT_ROOT */
    | { unknown: UnknownInfo } /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_CertStatus: __utils.ASN1Decoder<CertStatus> | null = null;
let _cached_encoder_for_CertStatus: __utils.ASN1Encoder<CertStatus> | null = null;
export function _decode_CertStatus (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_CertStatus) { _cached_decoder_for_CertStatus = __utils._decode_inextensible_choice<CertStatus>({
    "CONTEXT 0": [ "good", __utils._decode_explicit<asn1.NULL>(() => __utils._decodeNull) ],
    "CONTEXT 1": [ "revoked", __utils._decode_explicit<RevokedInfo>(() => _decode_RevokedInfo) ],
    "CONTEXT 2": [ "unknown", __utils._decode_explicit<UnknownInfo>(() => _decode_UnknownInfo) ]
}); }
    return _cached_decoder_for_CertStatus(el);
}
export function _encode_CertStatus (value: CertStatus, elGetter: __utils.ASN1Encoder<CertStatus>) {
    if (!_cached_encoder_for_CertStatus) { _cached_encoder_for_CertStatus = __utils._encode_choice<CertStatus>({
    "good": __utils._encode_explicit(asn1.ASN1TagClass.context, 0, () => __utils._encodeNull, __utils.BER),
    "revoked": __utils._encode_explicit(asn1.ASN1TagClass.context, 1, () => _encode_RevokedInfo, __utils.BER),
    "unknown": __utils._encode_explicit(asn1.ASN1TagClass.context, 2, () => _encode_UnknownInfo, __utils.BER),
}, __utils.BER); }
    return _cached_encoder_for_CertStatus(value, elGetter);
}


export class SingleResponse {
    constructor (
        readonly certID: CertID,
        readonly certStatus: CertStatus,
        readonly thisUpdate: asn1.GeneralizedTime,
        readonly nextUpdate: asn1.OPTIONAL<asn1.GeneralizedTime>,
        readonly singleExtensions: asn1.OPTIONAL<Extensions>
    ) {}

}
export const _root_component_type_list_1_spec_for_SingleResponse: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("certID", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined),
    new __utils.ComponentSpec("certStatus", false, __utils.hasAnyTag, undefined, undefined),
    new __utils.ComponentSpec("thisUpdate", false, __utils.hasTag(asn1.ASN1TagClass.universal, 24), undefined, undefined),
    new __utils.ComponentSpec("nextUpdate", true, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined),
    new __utils.ComponentSpec("singleExtensions", true, __utils.hasTag(asn1.ASN1TagClass.context, 1), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_SingleResponse: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_SingleResponse: __utils.ComponentSpec[] = [
    
];
let _cached_decoder_for_SingleResponse: __utils.ASN1Decoder<SingleResponse> | null = null;
let _cached_encoder_for_SingleResponse: __utils.ASN1Encoder<SingleResponse> | null = null;
export function _decode_SingleResponse (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_SingleResponse) { _cached_decoder_for_SingleResponse = function (el: asn1.ASN1Element): SingleResponse {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let certID!: CertID;
    let certStatus!: CertStatus;
    let thisUpdate!: asn1.GeneralizedTime;
    let nextUpdate: asn1.OPTIONAL<asn1.GeneralizedTime>;
    let singleExtensions: asn1.OPTIONAL<Extensions>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "certID": (_el: asn1.ASN1Element): void => { certID = _decode_CertID(_el); },
        "certStatus": (_el: asn1.ASN1Element): void => { certStatus = _decode_CertStatus(_el); },
        "thisUpdate": (_el: asn1.ASN1Element): void => { thisUpdate = __utils._decodeGeneralizedTime(_el); },
        "nextUpdate": (_el: asn1.ASN1Element): void => { nextUpdate = __utils._decode_explicit<asn1.GeneralizedTime>(() => __utils._decodeGeneralizedTime)(_el); },
        "singleExtensions": (_el: asn1.ASN1Element): void => { singleExtensions = __utils._decode_explicit<Extensions>(() => _decode_Extensions)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SingleResponse,
        _extension_additions_list_spec_for_SingleResponse,
        _root_component_type_list_2_spec_for_SingleResponse,
        undefined,
    );
    return new SingleResponse( /* SEQUENCE_CONSTRUCTOR_CALL */
        certID,
        certStatus,
        thisUpdate,
        nextUpdate,
        singleExtensions
    );
}; }
    return _cached_decoder_for_SingleResponse(el);
}
export function _encode_SingleResponse (value: SingleResponse, elGetter: __utils.ASN1Encoder<SingleResponse>) {
    if (!_cached_encoder_for_SingleResponse) { _cached_encoder_for_SingleResponse = function (value: SingleResponse, elGetter: __utils.ASN1Encoder<SingleResponse>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_CertID(value.certID, __utils.BER),
            /* REQUIRED   */ _encode_CertStatus(value.certStatus, __utils.BER),
            /* REQUIRED   */ __utils._encodeGeneralizedTime(value.thisUpdate, __utils.BER),
            /* IF_ABSENT  */ ((value.nextUpdate === undefined) ? undefined : __utils._encode_explicit(asn1.ASN1TagClass.context, 0, () => __utils._encodeGeneralizedTime, __utils.BER)(value.nextUpdate, __utils.BER)),
            /* IF_ABSENT  */ ((value.singleExtensions === undefined) ? undefined : __utils._encode_explicit(asn1.ASN1TagClass.context, 1, () => _encode_Extensions, __utils.BER)(value.singleExtensions, __utils.BER))
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
}; }
    return _cached_encoder_for_SingleResponse(value, elGetter);
}


export class ResponseData {
    constructor (
        readonly version: asn1.OPTIONAL<Version>,
        readonly responderID: ResponderID,
        readonly producedAt: asn1.GeneralizedTime,
        readonly responses: SingleResponse[],
        readonly responseExtensions: asn1.OPTIONAL<Extensions>
    ) {}
    public static get _default_value_for_version () { return v1; }
}
export const _root_component_type_list_1_spec_for_ResponseData: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("version", true, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined),
    new __utils.ComponentSpec("responderID", false, __utils.hasAnyTag, undefined, undefined),
    new __utils.ComponentSpec("producedAt", false, __utils.hasTag(asn1.ASN1TagClass.universal, 24), undefined, undefined),
    new __utils.ComponentSpec("responses", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined),
    new __utils.ComponentSpec("responseExtensions", true, __utils.hasTag(asn1.ASN1TagClass.context, 1), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_ResponseData: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_ResponseData: __utils.ComponentSpec[] = [
    
];
let _cached_decoder_for_ResponseData: __utils.ASN1Decoder<ResponseData> | null = null;
let _cached_encoder_for_ResponseData: __utils.ASN1Encoder<ResponseData> | null = null;
export function _decode_ResponseData (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ResponseData) { _cached_decoder_for_ResponseData = function (el: asn1.ASN1Element): ResponseData {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let version: asn1.OPTIONAL<Version> = ResponseData._default_value_for_version;
    let responderID!: ResponderID;
    let producedAt!: asn1.GeneralizedTime;
    let responses!: SingleResponse[];
    let responseExtensions: asn1.OPTIONAL<Extensions>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "version": (_el: asn1.ASN1Element): void => { version = __utils._decode_explicit<Version>(() => _decode_Version)(_el); },
        "responderID": (_el: asn1.ASN1Element): void => { responderID = _decode_ResponderID(_el); },
        "producedAt": (_el: asn1.ASN1Element): void => { producedAt = __utils._decodeGeneralizedTime(_el); },
        "responses": (_el: asn1.ASN1Element): void => { responses = __utils._decodeSequenceOf<SingleResponse>(() => _decode_SingleResponse)(_el); },
        "responseExtensions": (_el: asn1.ASN1Element): void => { responseExtensions = __utils._decode_explicit<Extensions>(() => _decode_Extensions)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ResponseData,
        _extension_additions_list_spec_for_ResponseData,
        _root_component_type_list_2_spec_for_ResponseData,
        undefined,
    );
    return new ResponseData( /* SEQUENCE_CONSTRUCTOR_CALL */
        version,
        responderID,
        producedAt,
        responses,
        responseExtensions
    );
}; }
    return _cached_decoder_for_ResponseData(el);
}
export function _encode_ResponseData (value: ResponseData, elGetter: __utils.ASN1Encoder<ResponseData>) {
    if (!_cached_encoder_for_ResponseData) { _cached_encoder_for_ResponseData = function (value: ResponseData, elGetter: __utils.ASN1Encoder<ResponseData>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* IF_DEFAULT */ (value.version === undefined || __utils.deepEq(value.version, ResponseData._default_value_for_version) ? undefined : __utils._encode_explicit(asn1.ASN1TagClass.context, 0, () => _encode_Version, __utils.BER)(value.version, __utils.BER)),
            /* REQUIRED   */ _encode_ResponderID(value.responderID, __utils.BER),
            /* REQUIRED   */ __utils._encodeGeneralizedTime(value.producedAt, __utils.BER),
            /* REQUIRED   */ __utils._encodeSequenceOf<SingleResponse>(() => _encode_SingleResponse, __utils.BER)(value.responses, __utils.BER),
            /* IF_ABSENT  */ ((value.responseExtensions === undefined) ? undefined : __utils._encode_explicit(asn1.ASN1TagClass.context, 1, () => _encode_Extensions, __utils.BER)(value.responseExtensions, __utils.BER))
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
}; }
    return _cached_encoder_for_ResponseData(value, elGetter);
}


export class BasicOCSPResponse {
    constructor (
        readonly tbsResponseData: ResponseData,
        readonly signatureAlgorithm: AlgorithmIdentifier,
        readonly signature: asn1.BIT_STRING,
        readonly certs: asn1.OPTIONAL<Certificate[]>
    ) {}

}
export const _root_component_type_list_1_spec_for_BasicOCSPResponse: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("tbsResponseData", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined),
    new __utils.ComponentSpec("signatureAlgorithm", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined),
    new __utils.ComponentSpec("signature", false, __utils.hasTag(asn1.ASN1TagClass.universal, 3), undefined, undefined),
    new __utils.ComponentSpec("certs", true, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_BasicOCSPResponse: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_BasicOCSPResponse: __utils.ComponentSpec[] = [
    
];
let _cached_decoder_for_BasicOCSPResponse: __utils.ASN1Decoder<BasicOCSPResponse> | null = null;
let _cached_encoder_for_BasicOCSPResponse: __utils.ASN1Encoder<BasicOCSPResponse> | null = null;
export function _decode_BasicOCSPResponse (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_BasicOCSPResponse) { _cached_decoder_for_BasicOCSPResponse = function (el: asn1.ASN1Element): BasicOCSPResponse {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let tbsResponseData!: ResponseData;
    let signatureAlgorithm!: AlgorithmIdentifier;
    let signature!: asn1.BIT_STRING;
    let certs: asn1.OPTIONAL<Certificate[]>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "tbsResponseData": (_el: asn1.ASN1Element): void => { tbsResponseData = _decode_ResponseData(_el); },
        "signatureAlgorithm": (_el: asn1.ASN1Element): void => { signatureAlgorithm = _decode_AlgorithmIdentifier(_el); },
        "signature": (_el: asn1.ASN1Element): void => { signature = __utils._decodeBitString(_el); },
        "certs": (_el: asn1.ASN1Element): void => { certs = __utils._decode_explicit<Certificate[]>(() => __utils._decodeSequenceOf<Certificate>(() => _decode_Certificate))(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_BasicOCSPResponse,
        _extension_additions_list_spec_for_BasicOCSPResponse,
        _root_component_type_list_2_spec_for_BasicOCSPResponse,
        undefined,
    );
    return new BasicOCSPResponse( /* SEQUENCE_CONSTRUCTOR_CALL */
        tbsResponseData,
        signatureAlgorithm,
        signature,
        certs
    );
}; }
    return _cached_decoder_for_BasicOCSPResponse(el);
}
export function _encode_BasicOCSPResponse (value: BasicOCSPResponse, elGetter: __utils.ASN1Encoder<BasicOCSPResponse>) {
    if (!_cached_encoder_for_BasicOCSPResponse) { _cached_encoder_for_BasicOCSPResponse = function (value: BasicOCSPResponse, elGetter: __utils.ASN1Encoder<BasicOCSPResponse>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ResponseData(value.tbsResponseData, __utils.BER),
            /* REQUIRED   */ _encode_AlgorithmIdentifier(value.signatureAlgorithm, __utils.BER),
            /* REQUIRED   */ __utils._encodeBitString(value.signature, __utils.BER),
            /* IF_ABSENT  */ ((value.certs === undefined) ? undefined : __utils._encode_explicit(asn1.ASN1TagClass.context, 0, () => __utils._encodeSequenceOf<Certificate>(() => _encode_Certificate, __utils.BER), __utils.BER)(value.certs, __utils.BER))
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
}; }
    return _cached_encoder_for_BasicOCSPResponse(value, elGetter);
}


export type ArchiveCutoff = asn1.GeneralizedTime; // GeneralizedTime
let _cached_decoder_for_ArchiveCutoff: __utils.ASN1Decoder<ArchiveCutoff> | null = null;
let _cached_encoder_for_ArchiveCutoff: __utils.ASN1Encoder<ArchiveCutoff> | null = null;
export function _decode_ArchiveCutoff (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ArchiveCutoff) { _cached_decoder_for_ArchiveCutoff = __utils._decodeGeneralizedTime; }
    return _cached_decoder_for_ArchiveCutoff(el);
}
export function _encode_ArchiveCutoff (value: ArchiveCutoff, elGetter: __utils.ASN1Encoder<ArchiveCutoff>) {
    if (!_cached_encoder_for_ArchiveCutoff) { _cached_encoder_for_ArchiveCutoff = __utils._encodeGeneralizedTime; }
    return _cached_encoder_for_ArchiveCutoff(value, elGetter);
}


export type AcceptableResponses = asn1.OBJECT_IDENTIFIER[]; // SequenceOfType
let _cached_decoder_for_AcceptableResponses: __utils.ASN1Decoder<AcceptableResponses> | null = null;
let _cached_encoder_for_AcceptableResponses: __utils.ASN1Encoder<AcceptableResponses> | null = null;
export function _decode_AcceptableResponses (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_AcceptableResponses) { _cached_decoder_for_AcceptableResponses = __utils._decodeSequenceOf<asn1.OBJECT_IDENTIFIER>(() => __utils._decodeObjectIdentifier); }
    return _cached_decoder_for_AcceptableResponses(el);
}
export function _encode_AcceptableResponses (value: AcceptableResponses, elGetter: __utils.ASN1Encoder<AcceptableResponses>) {
    if (!_cached_encoder_for_AcceptableResponses) { _cached_encoder_for_AcceptableResponses = __utils._encodeSequenceOf<asn1.OBJECT_IDENTIFIER>(() => __utils._encodeObjectIdentifier, __utils.BER); }
    return _cached_encoder_for_AcceptableResponses(value, elGetter);
}


export class ServiceLocator {
    constructor (
        readonly issuer: Name,
        readonly locator: AuthorityInfoAccessSyntax
    ) {}

}
export const _root_component_type_list_1_spec_for_ServiceLocator: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("issuer", false, __utils.hasAnyTag, undefined, undefined),
    new __utils.ComponentSpec("locator", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_ServiceLocator: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_ServiceLocator: __utils.ComponentSpec[] = [
    
];
let _cached_decoder_for_ServiceLocator: __utils.ASN1Decoder<ServiceLocator> | null = null;
let _cached_encoder_for_ServiceLocator: __utils.ASN1Encoder<ServiceLocator> | null = null;
export function _decode_ServiceLocator (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ServiceLocator) { _cached_decoder_for_ServiceLocator = function (el: asn1.ASN1Element): ServiceLocator {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new asn1.ASN1ConstructionError("ServiceLocator contained only " + sequence.length.toString() + " elements.");
    }
    // TODO: Validate tags.
    sequence[0].name = "issuer";
    sequence[1].name = "locator";
    let issuer!: Name;
    let locator!: AuthorityInfoAccessSyntax;
    issuer = _decode_Name(sequence[0]);
    locator = _decode_AuthorityInfoAccessSyntax(sequence[1]);
    // TODO: Validate values.
    return new ServiceLocator(
        issuer,
        locator,

    );
}; }
    return _cached_decoder_for_ServiceLocator(el);
}
export function _encode_ServiceLocator (value: ServiceLocator, elGetter: __utils.ASN1Encoder<ServiceLocator>) {
    if (!_cached_encoder_for_ServiceLocator) { _cached_encoder_for_ServiceLocator = function (value: ServiceLocator, elGetter: __utils.ASN1Encoder<ServiceLocator>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_Name(value.issuer, __utils.BER),
            /* REQUIRED   */ _encode_AuthorityInfoAccessSyntax(value.locator, __utils.BER)
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
}; }
    return _cached_encoder_for_ServiceLocator(value, elGetter);
}


export class CrlID {
    constructor (
        readonly crlUrl: asn1.OPTIONAL<asn1.IA5String>,
        readonly crlNum: asn1.OPTIONAL<asn1.INTEGER>,
        readonly crlTime: asn1.OPTIONAL<asn1.GeneralizedTime>
    ) {}

}
export const _root_component_type_list_1_spec_for_CrlID: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("crlUrl", true, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined),
    new __utils.ComponentSpec("crlNum", true, __utils.hasTag(asn1.ASN1TagClass.context, 1), undefined, undefined),
    new __utils.ComponentSpec("crlTime", true, __utils.hasTag(asn1.ASN1TagClass.context, 2), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_CrlID: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_CrlID: __utils.ComponentSpec[] = [
    
];
let _cached_decoder_for_CrlID: __utils.ASN1Decoder<CrlID> | null = null;
let _cached_encoder_for_CrlID: __utils.ASN1Encoder<CrlID> | null = null;
export function _decode_CrlID (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_CrlID) { _cached_decoder_for_CrlID = function (el: asn1.ASN1Element): CrlID {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let crlUrl: asn1.OPTIONAL<asn1.IA5String>;
    let crlNum: asn1.OPTIONAL<asn1.INTEGER>;
    let crlTime: asn1.OPTIONAL<asn1.GeneralizedTime>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "crlUrl": (_el: asn1.ASN1Element): void => { crlUrl = __utils._decode_explicit<asn1.IA5String>(() => __utils._decodeIA5String)(_el); },
        "crlNum": (_el: asn1.ASN1Element): void => { crlNum = __utils._decode_explicit<asn1.INTEGER>(() => __utils._decodeInteger)(_el); },
        "crlTime": (_el: asn1.ASN1Element): void => { crlTime = __utils._decode_explicit<asn1.GeneralizedTime>(() => __utils._decodeGeneralizedTime)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CrlID,
        _extension_additions_list_spec_for_CrlID,
        _root_component_type_list_2_spec_for_CrlID,
        undefined,
    );
    return new CrlID( /* SEQUENCE_CONSTRUCTOR_CALL */
        crlUrl,
        crlNum,
        crlTime
    );
}; }
    return _cached_decoder_for_CrlID(el);
}
export function _encode_CrlID (value: CrlID, elGetter: __utils.ASN1Encoder<CrlID>) {
    if (!_cached_encoder_for_CrlID) { _cached_encoder_for_CrlID = function (value: CrlID, elGetter: __utils.ASN1Encoder<CrlID>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.crlUrl === undefined) ? undefined : __utils._encode_explicit(asn1.ASN1TagClass.context, 0, () => __utils._encodeIA5String, __utils.BER)(value.crlUrl, __utils.BER)),
            /* IF_ABSENT  */ ((value.crlNum === undefined) ? undefined : __utils._encode_explicit(asn1.ASN1TagClass.context, 1, () => __utils._encodeInteger, __utils.BER)(value.crlNum, __utils.BER)),
            /* IF_ABSENT  */ ((value.crlTime === undefined) ? undefined : __utils._encode_explicit(asn1.ASN1TagClass.context, 2, () => __utils._encodeGeneralizedTime, __utils.BER)(value.crlTime, __utils.BER))
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
}; }
    return _cached_encoder_for_CrlID(value, elGetter);
}


// TODO: ObjectAssignment: re-ocsp-nonce

// TODO: ObjectAssignment: re-ocsp-response

// TODO: ObjectAssignment: re-ocsp-service-locator

// TODO: ObjectAssignment: re-ocsp-crl

// TODO: ObjectAssignment: re-ocsp-archive-cutoff

export const id_kp_OCSPSigning: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    9,
], id_kp);

export const id_pkix_ocsp: asn1.OBJECT_IDENTIFIER = id_ad_ocsp;

export const id_pkix_ocsp_basic: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    1,
], id_pkix_ocsp);

export const id_pkix_ocsp_nonce: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    2,
], id_pkix_ocsp);

export const id_pkix_ocsp_crl: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    3,
], id_pkix_ocsp);

export const id_pkix_ocsp_response: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    4,
], id_pkix_ocsp);

export const id_pkix_ocsp_nocheck: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    5,
], id_pkix_ocsp);

export const id_pkix_ocsp_archive_cutoff: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    6,
], id_pkix_ocsp);

export const id_pkix_ocsp_service_locator: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    7,
], id_pkix_ocsp);

/* END_MODULE OCSP-2009 */

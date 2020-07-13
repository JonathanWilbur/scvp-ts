
/*
    BEGIN_MODULE SCVP-2009
    OID: iso.identified-organization.dod.internet.security.mechanisms.pkix.id-mod.id-mod-scvp-02
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
    SIGNATURE_ALGORITHM,
    PUBLIC_KEY,
    KEY_AGREE,
    DIGEST_ALGORITHM,
    KEY_DERIVATION,
    MAC_ALGORITHM,
    AlgorithmIdentifier,
    _get_decoder_for_AlgorithmIdentifier,
    _get_encoder_for_AlgorithmIdentifier
} from "./AlgorithmInformation-2009";
export {
    SIGNATURE_ALGORITHM,
    PUBLIC_KEY,
    KEY_AGREE,
    DIGEST_ALGORITHM,
    KEY_DERIVATION,
    MAC_ALGORITHM,
    AlgorithmIdentifier,
    _get_decoder_for_AlgorithmIdentifier,
    _get_encoder_for_AlgorithmIdentifier
} from "./AlgorithmInformation-2009";

import * as PKIX1Explicit_2009 from "./PKIX1Explicit-2009";
import {
    Certificate,
    CertificateList,
    CertificateSerialNumber,
    SignatureAlgorithms,
    SubjectPublicKeyInfo,
    _decode_Certificate,
    _encode_Certificate,
    _decode_CertificateList,
    _encode_CertificateList,
    _decode_CertificateSerialNumber,
    _encode_CertificateSerialNumber,
    _decode_SubjectPublicKeyInfo,
    _encode_SubjectPublicKeyInfo
} from "./PKIX1Explicit-2009";
export {
    Certificate,
    CertificateList,
    CertificateSerialNumber,
    SignatureAlgorithms,
    SubjectPublicKeyInfo,
    _decode_Certificate,
    _encode_Certificate,
    _decode_CertificateList,
    _encode_CertificateList,
    _decode_CertificateSerialNumber,
    _encode_CertificateSerialNumber,
    _decode_SubjectPublicKeyInfo,
    _encode_SubjectPublicKeyInfo
} from "./PKIX1Explicit-2009";

import * as PKIX1Implicit_2009 from "./PKIX1Implicit-2009";
import {
    GeneralNames,
    GeneralName,
    KeyUsage,
    KeyPurposeId,
    _decode_GeneralNames,
    _encode_GeneralNames,
    _decode_GeneralName,
    _encode_GeneralName,
    KeyUsage_digitalSignature as digitalSignature /* IMPORTED_BIT */,
    KeyUsage_nonRepudiation as nonRepudiation /* IMPORTED_BIT */,
    KeyUsage_keyEncipherment as keyEncipherment /* IMPORTED_BIT */,
    KeyUsage_dataEncipherment as dataEncipherment /* IMPORTED_BIT */,
    KeyUsage_keyAgreement as keyAgreement /* IMPORTED_BIT */,
    KeyUsage_keyCertSign as keyCertSign /* IMPORTED_BIT */,
    KeyUsage_cRLSign as cRLSign /* IMPORTED_BIT */,
    KeyUsage_encipherOnly as encipherOnly /* IMPORTED_BIT */,
    KeyUsage_decipherOnly as decipherOnly /* IMPORTED_BIT */,
    _decode_KeyUsage,
    _encode_KeyUsage,
    _decode_KeyPurposeId,
    _encode_KeyPurposeId
} from "./PKIX1Implicit-2009";
export {
    GeneralNames,
    GeneralName,
    KeyUsage,
    KeyPurposeId,
    _decode_GeneralNames,
    _encode_GeneralNames,
    _decode_GeneralName,
    _encode_GeneralName,
    KeyUsage_digitalSignature as digitalSignature /* IMPORTED_BIT */,
    KeyUsage_nonRepudiation as nonRepudiation /* IMPORTED_BIT */,
    KeyUsage_keyEncipherment as keyEncipherment /* IMPORTED_BIT */,
    KeyUsage_dataEncipherment as dataEncipherment /* IMPORTED_BIT */,
    KeyUsage_keyAgreement as keyAgreement /* IMPORTED_BIT */,
    KeyUsage_keyCertSign as keyCertSign /* IMPORTED_BIT */,
    KeyUsage_cRLSign as cRLSign /* IMPORTED_BIT */,
    KeyUsage_encipherOnly as encipherOnly /* IMPORTED_BIT */,
    KeyUsage_decipherOnly as decipherOnly /* IMPORTED_BIT */,
    _decode_KeyUsage,
    _encode_KeyUsage,
    _decode_KeyPurposeId,
    _encode_KeyPurposeId
} from "./PKIX1Implicit-2009";

import * as PKIXAttributeCertificate_2009 from "./PKIXAttributeCertificate-2009";
import {
    AttributeCertificate,
    _decode_AttributeCertificate,
    _encode_AttributeCertificate
} from "./PKIXAttributeCertificate-2009";
export {
    AttributeCertificate,
    _decode_AttributeCertificate,
    _encode_AttributeCertificate
} from "./PKIXAttributeCertificate-2009";

import * as OCSP_2009 from "./OCSP-2009";
import {
    OCSPResponse,
    _decode_OCSPResponse,
    _encode_OCSPResponse
} from "./OCSP-2009";
export {
    OCSPResponse,
    _decode_OCSPResponse,
    _encode_OCSPResponse
} from "./OCSP-2009";

import * as CryptographicMessageSyntax_2009 from "./CryptographicMessageSyntax-2009";
import {
    ContentInfo,
    CONTENT_TYPE,
    _decode_ContentInfo,
    _encode_ContentInfo
} from "./CryptographicMessageSyntax-2009";
export {
    ContentInfo,
    CONTENT_TYPE,
    _decode_ContentInfo,
    _encode_ContentInfo
} from "./CryptographicMessageSyntax-2009";

import * as PKIXAlgs_2009 from "./PKIXAlgs-2009";
import {
    mda_sha1
} from "./PKIXAlgs-2009";
export {
    mda_sha1
} from "./PKIXAlgs-2009";


// TODO: ObjectSetAssignment: ContentTypes

export const id_ct: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
    /* rsadsi */ 113549,
    /* pkcs */ 1,
    /* pkcs9 */ 9,
    /* id-smime */ 16,
    1,
]);

// TODO: ObjectAssignment: ct-scvp-certValRequest

export const id_ct_scvp_certValRequest: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    10,
], id_ct);

// TODO: ObjectSetAssignment: RequestExtensions

// TODO: ObjectSetAssignment: QueryExtensions

// TODO: ObjectSetAssignment: ValidationPolRefSet

// TODO: ObjectSetAssignment: ValidationAlgSet

// TODO: ObjectSetAssignment: NameValidationAlgSet

export class NameValidationAlgParams {
    constructor (
        readonly nameCompAlgId: asn1.OBJECT_IDENTIFIER,
        readonly validationNames: GeneralNames
    ) {}

}
export const _root_component_type_list_1_spec_for_NameValidationAlgParams: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("nameCompAlgId", false, __utils.hasTag(asn1.ASN1TagClass.universal, 6), undefined, undefined),
    new __utils.ComponentSpec("validationNames", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_NameValidationAlgParams: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_NameValidationAlgParams: __utils.ComponentSpec[] = [
    
];
let _cached_decoder_for_NameValidationAlgParams: __utils.ASN1Decoder<NameValidationAlgParams> | null = null;
let _cached_encoder_for_NameValidationAlgParams: __utils.ASN1Encoder<NameValidationAlgParams> | null = null;
export function _decode_NameValidationAlgParams (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_NameValidationAlgParams) { _cached_decoder_for_NameValidationAlgParams = function (el: asn1.ASN1Element): NameValidationAlgParams {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new asn1.ASN1ConstructionError("NameValidationAlgParams contained only " + sequence.length.toString() + " elements.");
    }
    // TODO: Validate tags.
    sequence[0].name = "nameCompAlgId";
    sequence[1].name = "validationNames";
    let nameCompAlgId!: asn1.OBJECT_IDENTIFIER;
    let validationNames!: GeneralNames;
    nameCompAlgId = __utils._decodeObjectIdentifier(sequence[0]);
    validationNames = _decode_GeneralNames(sequence[1]);
    // TODO: Validate values.
    return new NameValidationAlgParams(
        nameCompAlgId,
        validationNames,

    );
}; }
    return _cached_decoder_for_NameValidationAlgParams(el);
}
export function _encode_NameValidationAlgParams (value: NameValidationAlgParams, elGetter: __utils.ASN1Encoder<NameValidationAlgParams>) {
    if (!_cached_encoder_for_NameValidationAlgParams) { _cached_encoder_for_NameValidationAlgParams = function (value: NameValidationAlgParams, elGetter: __utils.ASN1Encoder<NameValidationAlgParams>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ __utils._encodeObjectIdentifier(value.nameCompAlgId, __utils.BER),
            /* REQUIRED   */ _encode_GeneralNames(value.validationNames, __utils.BER)
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
}; }
    return _cached_encoder_for_NameValidationAlgParams(value, elGetter);
}


// TODO: ObjectSetAssignment: SupportedKeyAgreePublicKeys

// TODO: ObjectSetAssignment: SupportedMACAlgorithms

// TODO: ObjectSetAssignment: SupportedKeyDerivationFunctions

// TODO: ObjectClassAssignment: REV-INFO

// TODO: ObjectAssignment: ct-scvp-certValResponse

export const id_ct_scvp_certValResponse: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    11,
], id_ct);

export type CVStatusCode = asn1.ENUMERATED;
export const CVStatusCode_okay: CVStatusCode = 0; /* LONG_NAMED_ENUMERATED_VALUE */
export const CVStatusCode_skipUnrecognizedItems: CVStatusCode = 1; /* LONG_NAMED_ENUMERATED_VALUE */
export const CVStatusCode_tooBusy: CVStatusCode = 10; /* LONG_NAMED_ENUMERATED_VALUE */
export const CVStatusCode_invalidRequest: CVStatusCode = 11; /* LONG_NAMED_ENUMERATED_VALUE */
export const CVStatusCode_internalError: CVStatusCode = 12; /* LONG_NAMED_ENUMERATED_VALUE */
export const CVStatusCode_badStructure: CVStatusCode = 20; /* LONG_NAMED_ENUMERATED_VALUE */
export const CVStatusCode_unsupportedVersion: CVStatusCode = 21; /* LONG_NAMED_ENUMERATED_VALUE */
export const CVStatusCode_abortUnrecognizedItems: CVStatusCode = 22; /* LONG_NAMED_ENUMERATED_VALUE */
export const CVStatusCode_unrecognizedSigKey: CVStatusCode = 23; /* LONG_NAMED_ENUMERATED_VALUE */
export const CVStatusCode_badSignatureOrMAC: CVStatusCode = 24; /* LONG_NAMED_ENUMERATED_VALUE */
export const CVStatusCode_unableToDecode: CVStatusCode = 25; /* LONG_NAMED_ENUMERATED_VALUE */
export const CVStatusCode_notAuthorized: CVStatusCode = 26; /* LONG_NAMED_ENUMERATED_VALUE */
export const CVStatusCode_unsupportedChecks: CVStatusCode = 27; /* LONG_NAMED_ENUMERATED_VALUE */
export const CVStatusCode_unsupportedWantBacks: CVStatusCode = 28; /* LONG_NAMED_ENUMERATED_VALUE */
export const CVStatusCode_unsupportedSignatureOrMAC: CVStatusCode = 29; /* LONG_NAMED_ENUMERATED_VALUE */
export const CVStatusCode_invalidSignatureOrMAC: CVStatusCode = 30; /* LONG_NAMED_ENUMERATED_VALUE */
export const CVStatusCode_protectedResponseUnsupported: CVStatusCode = 31; /* LONG_NAMED_ENUMERATED_VALUE */
export const CVStatusCode_unrecognizedResponderName: CVStatusCode = 32; /* LONG_NAMED_ENUMERATED_VALUE */
export const CVStatusCode_relayingLoop: CVStatusCode = 40; /* LONG_NAMED_ENUMERATED_VALUE */
export const CVStatusCode_unrecognizedValPol: CVStatusCode = 50; /* LONG_NAMED_ENUMERATED_VALUE */
export const CVStatusCode_unrecognizedValAlg: CVStatusCode = 51; /* LONG_NAMED_ENUMERATED_VALUE */
export const CVStatusCode_fullRequestInResponseUnsupported: CVStatusCode = 52; /* LONG_NAMED_ENUMERATED_VALUE */
export const CVStatusCode_fullPolResponseUnsupported: CVStatusCode = 53; /* LONG_NAMED_ENUMERATED_VALUE */
export const CVStatusCode_inhibitPolicyMappingUnsupported: CVStatusCode = 54; /* LONG_NAMED_ENUMERATED_VALUE */
export const CVStatusCode_requireExplicitPolicyUnsupported: CVStatusCode = 55; /* LONG_NAMED_ENUMERATED_VALUE */
export const CVStatusCode_inhibitAnyPolicyUnsupported: CVStatusCode = 56; /* LONG_NAMED_ENUMERATED_VALUE */
export const CVStatusCode_validationTimeUnsupported: CVStatusCode = 57; /* LONG_NAMED_ENUMERATED_VALUE */
export const CVStatusCode_unrecognizedCritQueryExt: CVStatusCode = 63; /* LONG_NAMED_ENUMERATED_VALUE */
export const CVStatusCode_unrecognizedCritRequestExt: CVStatusCode = 64; /* LONG_NAMED_ENUMERATED_VALUE */
let _cached_decoder_for_CVStatusCode: __utils.ASN1Decoder<CVStatusCode> | null = null;
let _cached_encoder_for_CVStatusCode: __utils.ASN1Encoder<CVStatusCode> | null = null;
export function _decode_CVStatusCode (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_CVStatusCode) { _cached_decoder_for_CVStatusCode = __utils._decodeEnumerated; }
    return _cached_decoder_for_CVStatusCode(el);
}
export function _encode_CVStatusCode (value: CVStatusCode, elGetter: __utils.ASN1Encoder<CVStatusCode>) {
    if (!_cached_encoder_for_CVStatusCode) { _cached_encoder_for_CVStatusCode = __utils._encodeEnumerated; }
    return _cached_encoder_for_CVStatusCode(value, elGetter);
}


export class ResponseStatus {
    constructor (
        readonly statusCode: asn1.OPTIONAL<CVStatusCode>,
        readonly errorMessage: asn1.OPTIONAL<asn1.UTF8String>
    ) {}
    public static get _default_value_for_statusCode () { return okay; }
}
export const _root_component_type_list_1_spec_for_ResponseStatus: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("statusCode", true, __utils.hasTag(asn1.ASN1TagClass.universal, 10), undefined, undefined),
    new __utils.ComponentSpec("errorMessage", true, __utils.hasTag(asn1.ASN1TagClass.universal, 12), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_ResponseStatus: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_ResponseStatus: __utils.ComponentSpec[] = [
    
];
let _cached_decoder_for_ResponseStatus: __utils.ASN1Decoder<ResponseStatus> | null = null;
let _cached_encoder_for_ResponseStatus: __utils.ASN1Encoder<ResponseStatus> | null = null;
export function _decode_ResponseStatus (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ResponseStatus) { _cached_decoder_for_ResponseStatus = function (el: asn1.ASN1Element): ResponseStatus {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let statusCode: asn1.OPTIONAL<CVStatusCode> = ResponseStatus._default_value_for_statusCode;
    let errorMessage: asn1.OPTIONAL<asn1.UTF8String>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "statusCode": (_el: asn1.ASN1Element): void => { statusCode = _decode_CVStatusCode(_el); },
        "errorMessage": (_el: asn1.ASN1Element): void => { errorMessage = __utils._decodeUTF8String(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ResponseStatus,
        _extension_additions_list_spec_for_ResponseStatus,
        _root_component_type_list_2_spec_for_ResponseStatus,
        undefined,
    );
    return new ResponseStatus( /* SEQUENCE_CONSTRUCTOR_CALL */
        statusCode,
        errorMessage
    );
}; }
    return _cached_decoder_for_ResponseStatus(el);
}
export function _encode_ResponseStatus (value: ResponseStatus, elGetter: __utils.ASN1Encoder<ResponseStatus>) {
    if (!_cached_encoder_for_ResponseStatus) { _cached_encoder_for_ResponseStatus = function (value: ResponseStatus, elGetter: __utils.ASN1Encoder<ResponseStatus>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* IF_DEFAULT */ (value.statusCode === undefined || __utils.deepEq(value.statusCode, ResponseStatus._default_value_for_statusCode) ? undefined : _encode_CVStatusCode(value.statusCode, __utils.BER)),
            /* IF_ABSENT  */ ((value.errorMessage === undefined) ? undefined : __utils._encodeUTF8String(value.errorMessage, __utils.BER))
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
}; }
    return _cached_encoder_for_ResponseStatus(value, elGetter);
}


export class ValidationPolRef {
    constructor (
        readonly valPolId: asn1.OBJECT_IDENTIFIER,
        readonly valPolParams: asn1.OPTIONAL<asn1.ASN1Element>
    ) {}

}
export const _root_component_type_list_1_spec_for_ValidationPolRef: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("valPolId", false, __utils.hasTag(asn1.ASN1TagClass.universal, 6), undefined, undefined),
    new __utils.ComponentSpec("valPolParams", true, __utils.hasAnyTag, undefined, undefined)
];
export const _root_component_type_list_2_spec_for_ValidationPolRef: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_ValidationPolRef: __utils.ComponentSpec[] = [
    
];
let _cached_decoder_for_ValidationPolRef: __utils.ASN1Decoder<ValidationPolRef> | null = null;
let _cached_encoder_for_ValidationPolRef: __utils.ASN1Encoder<ValidationPolRef> | null = null;
export function _decode_ValidationPolRef (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ValidationPolRef) { _cached_decoder_for_ValidationPolRef = function (el: asn1.ASN1Element): ValidationPolRef {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let valPolId!: asn1.OBJECT_IDENTIFIER;
    let valPolParams: asn1.OPTIONAL<asn1.ASN1Element>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "valPolId": (_el: asn1.ASN1Element): void => { valPolId = __utils._decodeObjectIdentifier(_el); },
        "valPolParams": (_el: asn1.ASN1Element): void => { valPolParams = __utils._decodeAny(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ValidationPolRef,
        _extension_additions_list_spec_for_ValidationPolRef,
        _root_component_type_list_2_spec_for_ValidationPolRef,
        undefined,
    );
    return new ValidationPolRef( /* SEQUENCE_CONSTRUCTOR_CALL */
        valPolId,
        valPolParams
    );
}; }
    return _cached_decoder_for_ValidationPolRef(el);
}
export function _encode_ValidationPolRef (value: ValidationPolRef, elGetter: __utils.ASN1Encoder<ValidationPolRef>) {
    if (!_cached_encoder_for_ValidationPolRef) { _cached_encoder_for_ValidationPolRef = function (value: ValidationPolRef, elGetter: __utils.ASN1Encoder<ValidationPolRef>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ __utils._encodeObjectIdentifier(value.valPolId, __utils.BER),
            /* IF_ABSENT  */ ((value.valPolParams === undefined) ? undefined : __utils._encodeAny(value.valPolParams, __utils.BER))
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
}; }
    return _cached_encoder_for_ValidationPolRef(value, elGetter);
}


export class ValidationAlg {
    constructor (
        readonly valAlgId: asn1.OBJECT_IDENTIFIER,
        readonly parameters: asn1.OPTIONAL<asn1.ASN1Element>
    ) {}

}
export const _root_component_type_list_1_spec_for_ValidationAlg: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("valAlgId", false, __utils.hasTag(asn1.ASN1TagClass.universal, 6), undefined, undefined),
    new __utils.ComponentSpec("parameters", true, __utils.hasAnyTag, undefined, undefined)
];
export const _root_component_type_list_2_spec_for_ValidationAlg: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_ValidationAlg: __utils.ComponentSpec[] = [
    
];
let _cached_decoder_for_ValidationAlg: __utils.ASN1Decoder<ValidationAlg> | null = null;
let _cached_encoder_for_ValidationAlg: __utils.ASN1Encoder<ValidationAlg> | null = null;
export function _decode_ValidationAlg (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ValidationAlg) { _cached_decoder_for_ValidationAlg = function (el: asn1.ASN1Element): ValidationAlg {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let valAlgId!: asn1.OBJECT_IDENTIFIER;
    let parameters: asn1.OPTIONAL<asn1.ASN1Element>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "valAlgId": (_el: asn1.ASN1Element): void => { valAlgId = __utils._decodeObjectIdentifier(_el); },
        "parameters": (_el: asn1.ASN1Element): void => { parameters = __utils._decodeAny(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ValidationAlg,
        _extension_additions_list_spec_for_ValidationAlg,
        _root_component_type_list_2_spec_for_ValidationAlg,
        undefined,
    );
    return new ValidationAlg( /* SEQUENCE_CONSTRUCTOR_CALL */
        valAlgId,
        parameters
    );
}; }
    return _cached_decoder_for_ValidationAlg(el);
}
export function _encode_ValidationAlg (value: ValidationAlg, elGetter: __utils.ASN1Encoder<ValidationAlg>) {
    if (!_cached_encoder_for_ValidationAlg) { _cached_encoder_for_ValidationAlg = function (value: ValidationAlg, elGetter: __utils.ASN1Encoder<ValidationAlg>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ __utils._encodeObjectIdentifier(value.valAlgId, __utils.BER),
            /* IF_ABSENT  */ ((value.parameters === undefined) ? undefined : __utils._encodeAny(value.parameters, __utils.BER))
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
}; }
    return _cached_encoder_for_ValidationAlg(value, elGetter);
}


export class SCVPIssuerSerial {
    constructor (
        readonly issuer: GeneralNames,
        readonly serialNumber: CertificateSerialNumber
    ) {}

}
export const _root_component_type_list_1_spec_for_SCVPIssuerSerial: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("issuer", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined),
    new __utils.ComponentSpec("serialNumber", false, __utils.hasTag(asn1.ASN1TagClass.universal, 2), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_SCVPIssuerSerial: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_SCVPIssuerSerial: __utils.ComponentSpec[] = [
    
];
let _cached_decoder_for_SCVPIssuerSerial: __utils.ASN1Decoder<SCVPIssuerSerial> | null = null;
let _cached_encoder_for_SCVPIssuerSerial: __utils.ASN1Encoder<SCVPIssuerSerial> | null = null;
export function _decode_SCVPIssuerSerial (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_SCVPIssuerSerial) { _cached_decoder_for_SCVPIssuerSerial = function (el: asn1.ASN1Element): SCVPIssuerSerial {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new asn1.ASN1ConstructionError("SCVPIssuerSerial contained only " + sequence.length.toString() + " elements.");
    }
    // TODO: Validate tags.
    sequence[0].name = "issuer";
    sequence[1].name = "serialNumber";
    let issuer!: GeneralNames;
    let serialNumber!: CertificateSerialNumber;
    issuer = _decode_GeneralNames(sequence[0]);
    serialNumber = _decode_CertificateSerialNumber(sequence[1]);
    // TODO: Validate values.
    return new SCVPIssuerSerial(
        issuer,
        serialNumber,

    );
}; }
    return _cached_decoder_for_SCVPIssuerSerial(el);
}
export function _encode_SCVPIssuerSerial (value: SCVPIssuerSerial, elGetter: __utils.ASN1Encoder<SCVPIssuerSerial>) {
    if (!_cached_encoder_for_SCVPIssuerSerial) { _cached_encoder_for_SCVPIssuerSerial = function (value: SCVPIssuerSerial, elGetter: __utils.ASN1Encoder<SCVPIssuerSerial>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_GeneralNames(value.issuer, __utils.BER),
            /* REQUIRED   */ _encode_CertificateSerialNumber(value.serialNumber, __utils.BER)
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
}; }
    return _cached_encoder_for_SCVPIssuerSerial(value, elGetter);
}


export type HashAlgorithm = AlgorithmIdentifier; // DefinedType
let _cached_decoder_for_HashAlgorithm: __utils.ASN1Decoder<HashAlgorithm> | null = null;
let _cached_encoder_for_HashAlgorithm: __utils.ASN1Encoder<HashAlgorithm> | null = null;
export function _decode_HashAlgorithm (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_HashAlgorithm) { _cached_decoder_for_HashAlgorithm = _decode_AlgorithmIdentifier; }
    return _cached_decoder_for_HashAlgorithm(el);
}
export function _encode_HashAlgorithm (value: HashAlgorithm, elGetter: __utils.ASN1Encoder<HashAlgorithm>) {
    if (!_cached_encoder_for_HashAlgorithm) { _cached_encoder_for_HashAlgorithm = _encode_AlgorithmIdentifier; }
    return _cached_encoder_for_HashAlgorithm(value, elGetter);
}


export class SCVPCertID {
    constructor (
        readonly certHash: asn1.OCTET_STRING,
        readonly issuerSerial: SCVPIssuerSerial,
        readonly hashAlgorithm: asn1.OPTIONAL<HashAlgorithm>
    ) {}
    public static get _default_value_for_hashAlgorithm () { return /* COULD_NOT_COMPILE_DEFAULT_VALUE hashAlgorithm */; }
}
export const _root_component_type_list_1_spec_for_SCVPCertID: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("certHash", false, __utils.hasTag(asn1.ASN1TagClass.universal, 4), undefined, undefined),
    new __utils.ComponentSpec("issuerSerial", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined),
    new __utils.ComponentSpec("hashAlgorithm", true, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_SCVPCertID: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_SCVPCertID: __utils.ComponentSpec[] = [
    
];
let _cached_decoder_for_SCVPCertID: __utils.ASN1Decoder<SCVPCertID> | null = null;
let _cached_encoder_for_SCVPCertID: __utils.ASN1Encoder<SCVPCertID> | null = null;
export function _decode_SCVPCertID (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_SCVPCertID) { _cached_decoder_for_SCVPCertID = function (el: asn1.ASN1Element): SCVPCertID {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let certHash!: asn1.OCTET_STRING;
    let issuerSerial!: SCVPIssuerSerial;
    let hashAlgorithm: asn1.OPTIONAL<HashAlgorithm> = SCVPCertID._default_value_for_hashAlgorithm;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "certHash": (_el: asn1.ASN1Element): void => { certHash = __utils._decodeOctetString(_el); },
        "issuerSerial": (_el: asn1.ASN1Element): void => { issuerSerial = _decode_SCVPIssuerSerial(_el); },
        "hashAlgorithm": (_el: asn1.ASN1Element): void => { hashAlgorithm = _decode_HashAlgorithm(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SCVPCertID,
        _extension_additions_list_spec_for_SCVPCertID,
        _root_component_type_list_2_spec_for_SCVPCertID,
        undefined,
    );
    return new SCVPCertID( /* SEQUENCE_CONSTRUCTOR_CALL */
        certHash,
        issuerSerial,
        hashAlgorithm
    );
}; }
    return _cached_decoder_for_SCVPCertID(el);
}
export function _encode_SCVPCertID (value: SCVPCertID, elGetter: __utils.ASN1Encoder<SCVPCertID>) {
    if (!_cached_encoder_for_SCVPCertID) { _cached_encoder_for_SCVPCertID = function (value: SCVPCertID, elGetter: __utils.ASN1Encoder<SCVPCertID>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ __utils._encodeOctetString(value.certHash, __utils.BER),
            /* REQUIRED   */ _encode_SCVPIssuerSerial(value.issuerSerial, __utils.BER),
            /* IF_DEFAULT */ (value.hashAlgorithm === undefined || __utils.deepEq(value.hashAlgorithm, SCVPCertID._default_value_for_hashAlgorithm) ? undefined : _encode_HashAlgorithm(value.hashAlgorithm, __utils.BER))
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
}; }
    return _cached_encoder_for_SCVPCertID(value, elGetter);
}


export type PKCReference =
    { cert: Certificate } /* CHOICE_ALT_ROOT */
    | { pkcRef: SCVPCertID } /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_PKCReference: __utils.ASN1Decoder<PKCReference> | null = null;
let _cached_encoder_for_PKCReference: __utils.ASN1Encoder<PKCReference> | null = null;
export function _decode_PKCReference (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_PKCReference) { _cached_decoder_for_PKCReference = __utils._decode_inextensible_choice<PKCReference>({
    "CONTEXT 0": [ "cert", __utils._decode_implicit<Certificate>(() => _decode_Certificate) ],
    "CONTEXT 1": [ "pkcRef", __utils._decode_implicit<SCVPCertID>(() => _decode_SCVPCertID) ]
}); }
    return _cached_decoder_for_PKCReference(el);
}
export function _encode_PKCReference (value: PKCReference, elGetter: __utils.ASN1Encoder<PKCReference>) {
    if (!_cached_encoder_for_PKCReference) { _cached_encoder_for_PKCReference = __utils._encode_choice<PKCReference>({
    "cert": __utils._encode_implicit(asn1.ASN1TagClass.context, 0, () => _encode_Certificate, __utils.BER),
    "pkcRef": __utils._encode_implicit(asn1.ASN1TagClass.context, 1, () => _encode_SCVPCertID, __utils.BER),
}, __utils.BER); }
    return _cached_encoder_for_PKCReference(value, elGetter);
}


export type TrustAnchors = PKCReference[]; // SequenceOfType
let _cached_decoder_for_TrustAnchors: __utils.ASN1Decoder<TrustAnchors> | null = null;
let _cached_encoder_for_TrustAnchors: __utils.ASN1Encoder<TrustAnchors> | null = null;
export function _decode_TrustAnchors (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_TrustAnchors) { _cached_decoder_for_TrustAnchors = __utils._decodeSequenceOf<PKCReference>(() => _decode_PKCReference); }
    return _cached_decoder_for_TrustAnchors(el);
}
export function _encode_TrustAnchors (value: TrustAnchors, elGetter: __utils.ASN1Encoder<TrustAnchors>) {
    if (!_cached_encoder_for_TrustAnchors) { _cached_encoder_for_TrustAnchors = __utils._encodeSequenceOf<PKCReference>(() => _encode_PKCReference, __utils.BER); }
    return _cached_encoder_for_TrustAnchors(value, elGetter);
}


export class ValidationPolicy {
    constructor (
        readonly validationPolRef: ValidationPolRef,
        readonly validationAlg: asn1.OPTIONAL<ValidationAlg>,
        readonly userPolicySet: asn1.OPTIONAL<asn1.OBJECT_IDENTIFIER[]>,
        readonly inhibitPolicyMapping: asn1.OPTIONAL<asn1.BOOLEAN>,
        readonly requireExplicitPolicy: asn1.OPTIONAL<asn1.BOOLEAN>,
        readonly inhibitAnyPolicy: asn1.OPTIONAL<asn1.BOOLEAN>,
        readonly trustAnchors: asn1.OPTIONAL<TrustAnchors>,
        readonly keyUsages: asn1.OPTIONAL<KeyUsage[]>,
        readonly extendedKeyUsages: asn1.OPTIONAL<KeyPurposeId[]>,
        readonly specifiedKeyUsages: asn1.OPTIONAL<KeyPurposeId[]>
    ) {}

}
export const _root_component_type_list_1_spec_for_ValidationPolicy: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("validationPolRef", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined),
    new __utils.ComponentSpec("validationAlg", true, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined),
    new __utils.ComponentSpec("userPolicySet", true, __utils.hasTag(asn1.ASN1TagClass.context, 1), undefined, undefined),
    new __utils.ComponentSpec("inhibitPolicyMapping", true, __utils.hasTag(asn1.ASN1TagClass.context, 2), undefined, undefined),
    new __utils.ComponentSpec("requireExplicitPolicy", true, __utils.hasTag(asn1.ASN1TagClass.context, 3), undefined, undefined),
    new __utils.ComponentSpec("inhibitAnyPolicy", true, __utils.hasTag(asn1.ASN1TagClass.context, 4), undefined, undefined),
    new __utils.ComponentSpec("trustAnchors", true, __utils.hasTag(asn1.ASN1TagClass.context, 5), undefined, undefined),
    new __utils.ComponentSpec("keyUsages", true, __utils.hasTag(asn1.ASN1TagClass.context, 6), undefined, undefined),
    new __utils.ComponentSpec("extendedKeyUsages", true, __utils.hasTag(asn1.ASN1TagClass.context, 7), undefined, undefined),
    new __utils.ComponentSpec("specifiedKeyUsages", true, __utils.hasTag(asn1.ASN1TagClass.context, 8), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_ValidationPolicy: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_ValidationPolicy: __utils.ComponentSpec[] = [
    
];
let _cached_decoder_for_ValidationPolicy: __utils.ASN1Decoder<ValidationPolicy> | null = null;
let _cached_encoder_for_ValidationPolicy: __utils.ASN1Encoder<ValidationPolicy> | null = null;
export function _decode_ValidationPolicy (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ValidationPolicy) { _cached_decoder_for_ValidationPolicy = function (el: asn1.ASN1Element): ValidationPolicy {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let validationPolRef!: ValidationPolRef;
    let validationAlg: asn1.OPTIONAL<ValidationAlg>;
    let userPolicySet: asn1.OPTIONAL<asn1.OBJECT_IDENTIFIER[]>;
    let inhibitPolicyMapping: asn1.OPTIONAL<asn1.BOOLEAN>;
    let requireExplicitPolicy: asn1.OPTIONAL<asn1.BOOLEAN>;
    let inhibitAnyPolicy: asn1.OPTIONAL<asn1.BOOLEAN>;
    let trustAnchors: asn1.OPTIONAL<TrustAnchors>;
    let keyUsages: asn1.OPTIONAL<KeyUsage[]>;
    let extendedKeyUsages: asn1.OPTIONAL<KeyPurposeId[]>;
    let specifiedKeyUsages: asn1.OPTIONAL<KeyPurposeId[]>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "validationPolRef": (_el: asn1.ASN1Element): void => { validationPolRef = _decode_ValidationPolRef(_el); },
        "validationAlg": (_el: asn1.ASN1Element): void => { validationAlg = __utils._decode_implicit<ValidationAlg>(() => _decode_ValidationAlg)(_el); },
        "userPolicySet": (_el: asn1.ASN1Element): void => { userPolicySet = __utils._decode_implicit<asn1.OBJECT_IDENTIFIER[]>(() => __utils._decodeSequenceOf<asn1.OBJECT_IDENTIFIER>(() => __utils._decodeObjectIdentifier))(_el); },
        "inhibitPolicyMapping": (_el: asn1.ASN1Element): void => { inhibitPolicyMapping = __utils._decode_implicit<asn1.BOOLEAN>(() => __utils._decodeBoolean)(_el); },
        "requireExplicitPolicy": (_el: asn1.ASN1Element): void => { requireExplicitPolicy = __utils._decode_implicit<asn1.BOOLEAN>(() => __utils._decodeBoolean)(_el); },
        "inhibitAnyPolicy": (_el: asn1.ASN1Element): void => { inhibitAnyPolicy = __utils._decode_implicit<asn1.BOOLEAN>(() => __utils._decodeBoolean)(_el); },
        "trustAnchors": (_el: asn1.ASN1Element): void => { trustAnchors = __utils._decode_implicit<TrustAnchors>(() => _decode_TrustAnchors)(_el); },
        "keyUsages": (_el: asn1.ASN1Element): void => { keyUsages = __utils._decode_implicit<KeyUsage[]>(() => __utils._decodeSequenceOf<KeyUsage>(() => _decode_KeyUsage))(_el); },
        "extendedKeyUsages": (_el: asn1.ASN1Element): void => { extendedKeyUsages = __utils._decode_implicit<KeyPurposeId[]>(() => __utils._decodeSequenceOf<KeyPurposeId>(() => _decode_KeyPurposeId))(_el); },
        "specifiedKeyUsages": (_el: asn1.ASN1Element): void => { specifiedKeyUsages = __utils._decode_implicit<KeyPurposeId[]>(() => __utils._decodeSequenceOf<KeyPurposeId>(() => _decode_KeyPurposeId))(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ValidationPolicy,
        _extension_additions_list_spec_for_ValidationPolicy,
        _root_component_type_list_2_spec_for_ValidationPolicy,
        undefined,
    );
    return new ValidationPolicy( /* SEQUENCE_CONSTRUCTOR_CALL */
        validationPolRef,
        validationAlg,
        userPolicySet,
        inhibitPolicyMapping,
        requireExplicitPolicy,
        inhibitAnyPolicy,
        trustAnchors,
        keyUsages,
        extendedKeyUsages,
        specifiedKeyUsages
    );
}; }
    return _cached_decoder_for_ValidationPolicy(el);
}
export function _encode_ValidationPolicy (value: ValidationPolicy, elGetter: __utils.ASN1Encoder<ValidationPolicy>) {
    if (!_cached_encoder_for_ValidationPolicy) { _cached_encoder_for_ValidationPolicy = function (value: ValidationPolicy, elGetter: __utils.ASN1Encoder<ValidationPolicy>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ValidationPolRef(value.validationPolRef, __utils.BER),
            /* IF_ABSENT  */ ((value.validationAlg === undefined) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 0, () => _encode_ValidationAlg, __utils.BER)(value.validationAlg, __utils.BER)),
            /* IF_ABSENT  */ ((value.userPolicySet === undefined) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 1, () => __utils._encodeSequenceOf<asn1.OBJECT_IDENTIFIER>(() => __utils._encodeObjectIdentifier, __utils.BER), __utils.BER)(value.userPolicySet, __utils.BER)),
            /* IF_ABSENT  */ ((value.inhibitPolicyMapping === undefined) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 2, () => __utils._encodeBoolean, __utils.BER)(value.inhibitPolicyMapping, __utils.BER)),
            /* IF_ABSENT  */ ((value.requireExplicitPolicy === undefined) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 3, () => __utils._encodeBoolean, __utils.BER)(value.requireExplicitPolicy, __utils.BER)),
            /* IF_ABSENT  */ ((value.inhibitAnyPolicy === undefined) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 4, () => __utils._encodeBoolean, __utils.BER)(value.inhibitAnyPolicy, __utils.BER)),
            /* IF_ABSENT  */ ((value.trustAnchors === undefined) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 5, () => _encode_TrustAnchors, __utils.BER)(value.trustAnchors, __utils.BER)),
            /* IF_ABSENT  */ ((value.keyUsages === undefined) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 6, () => __utils._encodeSequenceOf<KeyUsage>(() => _encode_KeyUsage, __utils.BER), __utils.BER)(value.keyUsages, __utils.BER)),
            /* IF_ABSENT  */ ((value.extendedKeyUsages === undefined) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 7, () => __utils._encodeSequenceOf<KeyPurposeId>(() => _encode_KeyPurposeId, __utils.BER), __utils.BER)(value.extendedKeyUsages, __utils.BER)),
            /* IF_ABSENT  */ ((value.specifiedKeyUsages === undefined) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 8, () => __utils._encodeSequenceOf<KeyPurposeId>(() => _encode_KeyPurposeId, __utils.BER), __utils.BER)(value.specifiedKeyUsages, __utils.BER))
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
}; }
    return _cached_encoder_for_ValidationPolicy(value, elGetter);
}


export type RespValidationPolicy = ValidationPolicy; // DefinedType
let _cached_decoder_for_RespValidationPolicy: __utils.ASN1Decoder<RespValidationPolicy> | null = null;
let _cached_encoder_for_RespValidationPolicy: __utils.ASN1Encoder<RespValidationPolicy> | null = null;
export function _decode_RespValidationPolicy (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_RespValidationPolicy) { _cached_decoder_for_RespValidationPolicy = _decode_ValidationPolicy; }
    return _cached_decoder_for_RespValidationPolicy(el);
}
export function _encode_RespValidationPolicy (value: RespValidationPolicy, elGetter: __utils.ASN1Encoder<RespValidationPolicy>) {
    if (!_cached_encoder_for_RespValidationPolicy) { _cached_encoder_for_RespValidationPolicy = _encode_ValidationPolicy; }
    return _cached_encoder_for_RespValidationPolicy(value, elGetter);
}


export class HashValue {
    constructor (
        readonly algorithm: asn1.OPTIONAL<HashAlgorithm>,
        readonly value: asn1.OCTET_STRING
    ) {}
    public static get _default_value_for_algorithm () { return /* COULD_NOT_COMPILE_DEFAULT_VALUE algorithm */; }
}
export const _root_component_type_list_1_spec_for_HashValue: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("algorithm", true, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined),
    new __utils.ComponentSpec("value", false, __utils.hasTag(asn1.ASN1TagClass.universal, 4), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_HashValue: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_HashValue: __utils.ComponentSpec[] = [
    
];
let _cached_decoder_for_HashValue: __utils.ASN1Decoder<HashValue> | null = null;
let _cached_encoder_for_HashValue: __utils.ASN1Encoder<HashValue> | null = null;
export function _decode_HashValue (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_HashValue) { _cached_decoder_for_HashValue = function (el: asn1.ASN1Element): HashValue {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let algorithm: asn1.OPTIONAL<HashAlgorithm> = HashValue._default_value_for_algorithm;
    let value!: asn1.OCTET_STRING;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "algorithm": (_el: asn1.ASN1Element): void => { algorithm = _decode_HashAlgorithm(_el); },
        "value": (_el: asn1.ASN1Element): void => { value = __utils._decodeOctetString(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_HashValue,
        _extension_additions_list_spec_for_HashValue,
        _root_component_type_list_2_spec_for_HashValue,
        undefined,
    );
    return new HashValue( /* SEQUENCE_CONSTRUCTOR_CALL */
        algorithm,
        value
    );
}; }
    return _cached_decoder_for_HashValue(el);
}
export function _encode_HashValue (value: HashValue, elGetter: __utils.ASN1Encoder<HashValue>) {
    if (!_cached_encoder_for_HashValue) { _cached_encoder_for_HashValue = function (value: HashValue, elGetter: __utils.ASN1Encoder<HashValue>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* IF_DEFAULT */ (value.algorithm === undefined || __utils.deepEq(value.algorithm, HashValue._default_value_for_algorithm) ? undefined : _encode_HashAlgorithm(value.algorithm, __utils.BER)),
            /* REQUIRED   */ __utils._encodeOctetString(value.value, __utils.BER)
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
}; }
    return _cached_encoder_for_HashValue(value, elGetter);
}


export type ACReference =
    { attrCert: AttributeCertificate } /* CHOICE_ALT_ROOT */
    | { acRef: SCVPCertID } /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_ACReference: __utils.ASN1Decoder<ACReference> | null = null;
let _cached_encoder_for_ACReference: __utils.ASN1Encoder<ACReference> | null = null;
export function _decode_ACReference (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ACReference) { _cached_decoder_for_ACReference = __utils._decode_inextensible_choice<ACReference>({
    "CONTEXT 2": [ "attrCert", __utils._decode_implicit<AttributeCertificate>(() => _decode_AttributeCertificate) ],
    "CONTEXT 3": [ "acRef", __utils._decode_implicit<SCVPCertID>(() => _decode_SCVPCertID) ]
}); }
    return _cached_decoder_for_ACReference(el);
}
export function _encode_ACReference (value: ACReference, elGetter: __utils.ASN1Encoder<ACReference>) {
    if (!_cached_encoder_for_ACReference) { _cached_encoder_for_ACReference = __utils._encode_choice<ACReference>({
    "attrCert": __utils._encode_implicit(asn1.ASN1TagClass.context, 2, () => _encode_AttributeCertificate, __utils.BER),
    "acRef": __utils._encode_implicit(asn1.ASN1TagClass.context, 3, () => _encode_SCVPCertID, __utils.BER),
}, __utils.BER); }
    return _cached_encoder_for_ACReference(value, elGetter);
}


export type CertReferences =
    { pkcRefs: PKCReference[] } /* CHOICE_ALT_ROOT */
    | { acRefs: ACReference[] } /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_CertReferences: __utils.ASN1Decoder<CertReferences> | null = null;
let _cached_encoder_for_CertReferences: __utils.ASN1Encoder<CertReferences> | null = null;
export function _decode_CertReferences (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_CertReferences) { _cached_decoder_for_CertReferences = __utils._decode_inextensible_choice<CertReferences>({
    "CONTEXT 0": [ "pkcRefs", __utils._decode_implicit<PKCReference[]>(() => __utils._decodeSequenceOf<PKCReference>(() => _decode_PKCReference)) ],
    "CONTEXT 1": [ "acRefs", __utils._decode_implicit<ACReference[]>(() => __utils._decodeSequenceOf<ACReference>(() => _decode_ACReference)) ]
}); }
    return _cached_decoder_for_CertReferences(el);
}
export function _encode_CertReferences (value: CertReferences, elGetter: __utils.ASN1Encoder<CertReferences>) {
    if (!_cached_encoder_for_CertReferences) { _cached_encoder_for_CertReferences = __utils._encode_choice<CertReferences>({
    "pkcRefs": __utils._encode_implicit(asn1.ASN1TagClass.context, 0, () => __utils._encodeSequenceOf<PKCReference>(() => _encode_PKCReference, __utils.BER), __utils.BER),
    "acRefs": __utils._encode_implicit(asn1.ASN1TagClass.context, 1, () => __utils._encodeSequenceOf<ACReference>(() => _encode_ACReference, __utils.BER), __utils.BER),
}, __utils.BER); }
    return _cached_encoder_for_CertReferences(value, elGetter);
}


export type CertChecks = asn1.OBJECT_IDENTIFIER[]; // SequenceOfType
let _cached_decoder_for_CertChecks: __utils.ASN1Decoder<CertChecks> | null = null;
let _cached_encoder_for_CertChecks: __utils.ASN1Encoder<CertChecks> | null = null;
export function _decode_CertChecks (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_CertChecks) { _cached_decoder_for_CertChecks = __utils._decodeSequenceOf<asn1.OBJECT_IDENTIFIER>(() => __utils._decodeObjectIdentifier); }
    return _cached_decoder_for_CertChecks(el);
}
export function _encode_CertChecks (value: CertChecks, elGetter: __utils.ASN1Encoder<CertChecks>) {
    if (!_cached_encoder_for_CertChecks) { _cached_encoder_for_CertChecks = __utils._encodeSequenceOf<asn1.OBJECT_IDENTIFIER>(() => __utils._encodeObjectIdentifier, __utils.BER); }
    return _cached_encoder_for_CertChecks(value, elGetter);
}


export type WantBack = asn1.OBJECT_IDENTIFIER[]; // SequenceOfType
let _cached_decoder_for_WantBack: __utils.ASN1Decoder<WantBack> | null = null;
let _cached_encoder_for_WantBack: __utils.ASN1Encoder<WantBack> | null = null;
export function _decode_WantBack (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_WantBack) { _cached_decoder_for_WantBack = __utils._decodeSequenceOf<asn1.OBJECT_IDENTIFIER>(() => __utils._decodeObjectIdentifier); }
    return _cached_decoder_for_WantBack(el);
}
export function _encode_WantBack (value: WantBack, elGetter: __utils.ASN1Encoder<WantBack>) {
    if (!_cached_encoder_for_WantBack) { _cached_encoder_for_WantBack = __utils._encodeSequenceOf<asn1.OBJECT_IDENTIFIER>(() => __utils._encodeObjectIdentifier, __utils.BER); }
    return _cached_encoder_for_WantBack(value, elGetter);
}


export class ResponseFlags {
    constructor (
        readonly fullRequestInResponse: asn1.OPTIONAL<asn1.BOOLEAN>,
        readonly responseValidationPolByRef: asn1.OPTIONAL<asn1.BOOLEAN>,
        readonly protectResponse: asn1.OPTIONAL<asn1.BOOLEAN>,
        readonly cachedResponse: asn1.OPTIONAL<asn1.BOOLEAN>
    ) {}
    public static get _default_value_for_fullRequestInResponse () { return false; }
    public static get _default_value_for_responseValidationPolByRef () { return true; }
    public static get _default_value_for_protectResponse () { return true; }
    public static get _default_value_for_cachedResponse () { return true; }
}
export const _root_component_type_list_1_spec_for_ResponseFlags: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("fullRequestInResponse", true, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined),
    new __utils.ComponentSpec("responseValidationPolByRef", true, __utils.hasTag(asn1.ASN1TagClass.context, 1), undefined, undefined),
    new __utils.ComponentSpec("protectResponse", true, __utils.hasTag(asn1.ASN1TagClass.context, 2), undefined, undefined),
    new __utils.ComponentSpec("cachedResponse", true, __utils.hasTag(asn1.ASN1TagClass.context, 3), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_ResponseFlags: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_ResponseFlags: __utils.ComponentSpec[] = [
    
];
let _cached_decoder_for_ResponseFlags: __utils.ASN1Decoder<ResponseFlags> | null = null;
let _cached_encoder_for_ResponseFlags: __utils.ASN1Encoder<ResponseFlags> | null = null;
export function _decode_ResponseFlags (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ResponseFlags) { _cached_decoder_for_ResponseFlags = function (el: asn1.ASN1Element): ResponseFlags {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let fullRequestInResponse: asn1.OPTIONAL<asn1.BOOLEAN> = ResponseFlags._default_value_for_fullRequestInResponse;
    let responseValidationPolByRef: asn1.OPTIONAL<asn1.BOOLEAN> = ResponseFlags._default_value_for_responseValidationPolByRef;
    let protectResponse: asn1.OPTIONAL<asn1.BOOLEAN> = ResponseFlags._default_value_for_protectResponse;
    let cachedResponse: asn1.OPTIONAL<asn1.BOOLEAN> = ResponseFlags._default_value_for_cachedResponse;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "fullRequestInResponse": (_el: asn1.ASN1Element): void => { fullRequestInResponse = __utils._decode_implicit<asn1.BOOLEAN>(() => __utils._decodeBoolean)(_el); },
        "responseValidationPolByRef": (_el: asn1.ASN1Element): void => { responseValidationPolByRef = __utils._decode_implicit<asn1.BOOLEAN>(() => __utils._decodeBoolean)(_el); },
        "protectResponse": (_el: asn1.ASN1Element): void => { protectResponse = __utils._decode_implicit<asn1.BOOLEAN>(() => __utils._decodeBoolean)(_el); },
        "cachedResponse": (_el: asn1.ASN1Element): void => { cachedResponse = __utils._decode_implicit<asn1.BOOLEAN>(() => __utils._decodeBoolean)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ResponseFlags,
        _extension_additions_list_spec_for_ResponseFlags,
        _root_component_type_list_2_spec_for_ResponseFlags,
        undefined,
    );
    return new ResponseFlags( /* SEQUENCE_CONSTRUCTOR_CALL */
        fullRequestInResponse,
        responseValidationPolByRef,
        protectResponse,
        cachedResponse
    );
}; }
    return _cached_decoder_for_ResponseFlags(el);
}
export function _encode_ResponseFlags (value: ResponseFlags, elGetter: __utils.ASN1Encoder<ResponseFlags>) {
    if (!_cached_encoder_for_ResponseFlags) { _cached_encoder_for_ResponseFlags = function (value: ResponseFlags, elGetter: __utils.ASN1Encoder<ResponseFlags>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* IF_DEFAULT */ (value.fullRequestInResponse === undefined || __utils.deepEq(value.fullRequestInResponse, ResponseFlags._default_value_for_fullRequestInResponse) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 0, () => __utils._encodeBoolean, __utils.BER)(value.fullRequestInResponse, __utils.BER)),
            /* IF_DEFAULT */ (value.responseValidationPolByRef === undefined || __utils.deepEq(value.responseValidationPolByRef, ResponseFlags._default_value_for_responseValidationPolByRef) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 1, () => __utils._encodeBoolean, __utils.BER)(value.responseValidationPolByRef, __utils.BER)),
            /* IF_DEFAULT */ (value.protectResponse === undefined || __utils.deepEq(value.protectResponse, ResponseFlags._default_value_for_protectResponse) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 2, () => __utils._encodeBoolean, __utils.BER)(value.protectResponse, __utils.BER)),
            /* IF_DEFAULT */ (value.cachedResponse === undefined || __utils.deepEq(value.cachedResponse, ResponseFlags._default_value_for_cachedResponse) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 3, () => __utils._encodeBoolean, __utils.BER)(value.cachedResponse, __utils.BER))
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
}; }
    return _cached_encoder_for_ResponseFlags(value, elGetter);
}


export type CertBundle = Certificate[]; // SequenceOfType
let _cached_decoder_for_CertBundle: __utils.ASN1Decoder<CertBundle> | null = null;
let _cached_encoder_for_CertBundle: __utils.ASN1Encoder<CertBundle> | null = null;
export function _decode_CertBundle (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_CertBundle) { _cached_decoder_for_CertBundle = __utils._decodeSequenceOf<Certificate>(() => _decode_Certificate); }
    return _cached_decoder_for_CertBundle(el);
}
export function _encode_CertBundle (value: CertBundle, elGetter: __utils.ASN1Encoder<CertBundle>) {
    if (!_cached_encoder_for_CertBundle) { _cached_encoder_for_CertBundle = __utils._encodeSequenceOf<Certificate>(() => _encode_Certificate, __utils.BER); }
    return _cached_encoder_for_CertBundle(value, elGetter);
}


export class OtherRevInfo {
    constructor (
        readonly riType: asn1.OBJECT_IDENTIFIER,
        readonly riValue: asn1.ASN1Element
    ) {}

}
export const _root_component_type_list_1_spec_for_OtherRevInfo: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("riType", false, __utils.hasTag(asn1.ASN1TagClass.universal, 6), undefined, undefined),
    new __utils.ComponentSpec("riValue", false, __utils.hasAnyTag, undefined, undefined)
];
export const _root_component_type_list_2_spec_for_OtherRevInfo: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_OtherRevInfo: __utils.ComponentSpec[] = [
    
];
let _cached_decoder_for_OtherRevInfo: __utils.ASN1Decoder<OtherRevInfo> | null = null;
let _cached_encoder_for_OtherRevInfo: __utils.ASN1Encoder<OtherRevInfo> | null = null;
export function _decode_OtherRevInfo (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_OtherRevInfo) { _cached_decoder_for_OtherRevInfo = function (el: asn1.ASN1Element): OtherRevInfo {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new asn1.ASN1ConstructionError("OtherRevInfo contained only " + sequence.length.toString() + " elements.");
    }
    // TODO: Validate tags.
    sequence[0].name = "riType";
    sequence[1].name = "riValue";
    let riType!: asn1.OBJECT_IDENTIFIER;
    let riValue!: asn1.ASN1Element;
    riType = __utils._decodeObjectIdentifier(sequence[0]);
    riValue = __utils._decodeAny(sequence[1]);
    // TODO: Validate values.
    return new OtherRevInfo(
        riType,
        riValue,

    );
}; }
    return _cached_decoder_for_OtherRevInfo(el);
}
export function _encode_OtherRevInfo (value: OtherRevInfo, elGetter: __utils.ASN1Encoder<OtherRevInfo>) {
    if (!_cached_encoder_for_OtherRevInfo) { _cached_encoder_for_OtherRevInfo = function (value: OtherRevInfo, elGetter: __utils.ASN1Encoder<OtherRevInfo>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ __utils._encodeObjectIdentifier(value.riType, __utils.BER),
            /* REQUIRED   */ __utils._encodeAny(value.riValue, __utils.BER)
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
}; }
    return _cached_encoder_for_OtherRevInfo(value, elGetter);
}


export type RevocationInfo =
    { crl: CertificateList } /* CHOICE_ALT_ROOT */
    | { delta_crl: CertificateList } /* CHOICE_ALT_ROOT */
    | { ocsp: OCSPResponse } /* CHOICE_ALT_ROOT */
    | { other: OtherRevInfo } /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_RevocationInfo: __utils.ASN1Decoder<RevocationInfo> | null = null;
let _cached_encoder_for_RevocationInfo: __utils.ASN1Encoder<RevocationInfo> | null = null;
export function _decode_RevocationInfo (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_RevocationInfo) { _cached_decoder_for_RevocationInfo = __utils._decode_inextensible_choice<RevocationInfo>({
    "CONTEXT 0": [ "crl", __utils._decode_implicit<CertificateList>(() => _decode_CertificateList) ],
    "CONTEXT 1": [ "delta_crl", __utils._decode_implicit<CertificateList>(() => _decode_CertificateList) ],
    "CONTEXT 2": [ "ocsp", __utils._decode_implicit<OCSPResponse>(() => _decode_OCSPResponse) ],
    "CONTEXT 3": [ "other", __utils._decode_implicit<OtherRevInfo>(() => _decode_OtherRevInfo) ]
}); }
    return _cached_decoder_for_RevocationInfo(el);
}
export function _encode_RevocationInfo (value: RevocationInfo, elGetter: __utils.ASN1Encoder<RevocationInfo>) {
    if (!_cached_encoder_for_RevocationInfo) { _cached_encoder_for_RevocationInfo = __utils._encode_choice<RevocationInfo>({
    "crl": __utils._encode_implicit(asn1.ASN1TagClass.context, 0, () => _encode_CertificateList, __utils.BER),
    "delta_crl": __utils._encode_implicit(asn1.ASN1TagClass.context, 1, () => _encode_CertificateList, __utils.BER),
    "ocsp": __utils._encode_implicit(asn1.ASN1TagClass.context, 2, () => _encode_OCSPResponse, __utils.BER),
    "other": __utils._encode_implicit(asn1.ASN1TagClass.context, 3, () => _encode_OtherRevInfo, __utils.BER),
}, __utils.BER); }
    return _cached_encoder_for_RevocationInfo(value, elGetter);
}


export type RevocationInfos = RevocationInfo[]; // SequenceOfType
let _cached_decoder_for_RevocationInfos: __utils.ASN1Decoder<RevocationInfos> | null = null;
let _cached_encoder_for_RevocationInfos: __utils.ASN1Encoder<RevocationInfos> | null = null;
export function _decode_RevocationInfos (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_RevocationInfos) { _cached_decoder_for_RevocationInfos = __utils._decodeSequenceOf<RevocationInfo>(() => _decode_RevocationInfo); }
    return _cached_decoder_for_RevocationInfos(el);
}
export function _encode_RevocationInfos (value: RevocationInfos, elGetter: __utils.ASN1Encoder<RevocationInfos>) {
    if (!_cached_encoder_for_RevocationInfos) { _cached_encoder_for_RevocationInfos = __utils._encodeSequenceOf<RevocationInfo>(() => _encode_RevocationInfo, __utils.BER); }
    return _cached_encoder_for_RevocationInfos(value, elGetter);
}


export class Query {
    constructor (
        readonly queriedCerts: CertReferences,
        readonly checks: CertChecks,
        readonly wantBack: asn1.OPTIONAL<WantBack>,
        readonly validationPolicy: ValidationPolicy,
        readonly responseFlags: asn1.OPTIONAL<ResponseFlags>,
        readonly serverContextInfo: asn1.OPTIONAL<asn1.OCTET_STRING>,
        readonly validationTime: asn1.OPTIONAL<asn1.GeneralizedTime>,
        readonly intermediateCerts: asn1.OPTIONAL<CertBundle>,
        readonly revInfos: asn1.OPTIONAL<RevocationInfos>,
        readonly producedAt: asn1.OPTIONAL<asn1.GeneralizedTime>,
        readonly queryExtensions: asn1.OPTIONAL<Extensions>
    ) {}

}
export const _root_component_type_list_1_spec_for_Query: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("queriedCerts", false, __utils.hasAnyTag, undefined, undefined),
    new __utils.ComponentSpec("checks", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined),
    new __utils.ComponentSpec("wantBack", true, __utils.hasTag(asn1.ASN1TagClass.context, 1), undefined, undefined),
    new __utils.ComponentSpec("validationPolicy", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined),
    new __utils.ComponentSpec("responseFlags", true, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined),
    new __utils.ComponentSpec("serverContextInfo", true, __utils.hasTag(asn1.ASN1TagClass.context, 2), undefined, undefined),
    new __utils.ComponentSpec("validationTime", true, __utils.hasTag(asn1.ASN1TagClass.context, 3), undefined, undefined),
    new __utils.ComponentSpec("intermediateCerts", true, __utils.hasTag(asn1.ASN1TagClass.context, 4), undefined, undefined),
    new __utils.ComponentSpec("revInfos", true, __utils.hasTag(asn1.ASN1TagClass.context, 5), undefined, undefined),
    new __utils.ComponentSpec("producedAt", true, __utils.hasTag(asn1.ASN1TagClass.context, 6), undefined, undefined),
    new __utils.ComponentSpec("queryExtensions", true, __utils.hasTag(asn1.ASN1TagClass.context, 7), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_Query: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_Query: __utils.ComponentSpec[] = [
    
];
let _cached_decoder_for_Query: __utils.ASN1Decoder<Query> | null = null;
let _cached_encoder_for_Query: __utils.ASN1Encoder<Query> | null = null;
export function _decode_Query (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Query) { _cached_decoder_for_Query = function (el: asn1.ASN1Element): Query {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let queriedCerts!: CertReferences;
    let checks!: CertChecks;
    let wantBack: asn1.OPTIONAL<WantBack>;
    let validationPolicy!: ValidationPolicy;
    let responseFlags: asn1.OPTIONAL<ResponseFlags>;
    let serverContextInfo: asn1.OPTIONAL<asn1.OCTET_STRING>;
    let validationTime: asn1.OPTIONAL<asn1.GeneralizedTime>;
    let intermediateCerts: asn1.OPTIONAL<CertBundle>;
    let revInfos: asn1.OPTIONAL<RevocationInfos>;
    let producedAt: asn1.OPTIONAL<asn1.GeneralizedTime>;
    let queryExtensions: asn1.OPTIONAL<Extensions>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "queriedCerts": (_el: asn1.ASN1Element): void => { queriedCerts = _decode_CertReferences(_el); },
        "checks": (_el: asn1.ASN1Element): void => { checks = _decode_CertChecks(_el); },
        "wantBack": (_el: asn1.ASN1Element): void => { wantBack = __utils._decode_implicit<WantBack>(() => _decode_WantBack)(_el); },
        "validationPolicy": (_el: asn1.ASN1Element): void => { validationPolicy = _decode_ValidationPolicy(_el); },
        "responseFlags": (_el: asn1.ASN1Element): void => { responseFlags = _decode_ResponseFlags(_el); },
        "serverContextInfo": (_el: asn1.ASN1Element): void => { serverContextInfo = __utils._decode_implicit<asn1.OCTET_STRING>(() => __utils._decodeOctetString)(_el); },
        "validationTime": (_el: asn1.ASN1Element): void => { validationTime = __utils._decode_implicit<asn1.GeneralizedTime>(() => __utils._decodeGeneralizedTime)(_el); },
        "intermediateCerts": (_el: asn1.ASN1Element): void => { intermediateCerts = __utils._decode_implicit<CertBundle>(() => _decode_CertBundle)(_el); },
        "revInfos": (_el: asn1.ASN1Element): void => { revInfos = __utils._decode_implicit<RevocationInfos>(() => _decode_RevocationInfos)(_el); },
        "producedAt": (_el: asn1.ASN1Element): void => { producedAt = __utils._decode_implicit<asn1.GeneralizedTime>(() => __utils._decodeGeneralizedTime)(_el); },
        "queryExtensions": (_el: asn1.ASN1Element): void => { queryExtensions = __utils._decode_implicit<Extensions>(() => _decode_Extensions)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Query,
        _extension_additions_list_spec_for_Query,
        _root_component_type_list_2_spec_for_Query,
        undefined,
    );
    return new Query( /* SEQUENCE_CONSTRUCTOR_CALL */
        queriedCerts,
        checks,
        wantBack,
        validationPolicy,
        responseFlags,
        serverContextInfo,
        validationTime,
        intermediateCerts,
        revInfos,
        producedAt,
        queryExtensions
    );
}; }
    return _cached_decoder_for_Query(el);
}
export function _encode_Query (value: Query, elGetter: __utils.ASN1Encoder<Query>) {
    if (!_cached_encoder_for_Query) { _cached_encoder_for_Query = function (value: Query, elGetter: __utils.ASN1Encoder<Query>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_CertReferences(value.queriedCerts, __utils.BER),
            /* REQUIRED   */ _encode_CertChecks(value.checks, __utils.BER),
            /* IF_ABSENT  */ ((value.wantBack === undefined) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 1, () => _encode_WantBack, __utils.BER)(value.wantBack, __utils.BER)),
            /* REQUIRED   */ _encode_ValidationPolicy(value.validationPolicy, __utils.BER),
            /* IF_ABSENT  */ ((value.responseFlags === undefined) ? undefined : _encode_ResponseFlags(value.responseFlags, __utils.BER)),
            /* IF_ABSENT  */ ((value.serverContextInfo === undefined) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 2, () => __utils._encodeOctetString, __utils.BER)(value.serverContextInfo, __utils.BER)),
            /* IF_ABSENT  */ ((value.validationTime === undefined) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 3, () => __utils._encodeGeneralizedTime, __utils.BER)(value.validationTime, __utils.BER)),
            /* IF_ABSENT  */ ((value.intermediateCerts === undefined) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 4, () => _encode_CertBundle, __utils.BER)(value.intermediateCerts, __utils.BER)),
            /* IF_ABSENT  */ ((value.revInfos === undefined) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 5, () => _encode_RevocationInfos, __utils.BER)(value.revInfos, __utils.BER)),
            /* IF_ABSENT  */ ((value.producedAt === undefined) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 6, () => __utils._encodeGeneralizedTime, __utils.BER)(value.producedAt, __utils.BER)),
            /* IF_ABSENT  */ ((value.queryExtensions === undefined) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 7, () => _encode_Extensions, __utils.BER)(value.queryExtensions, __utils.BER))
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
}; }
    return _cached_encoder_for_Query(value, elGetter);
}


export class CVRequest {
    constructor (
        readonly cvRequestVersion: asn1.OPTIONAL<asn1.INTEGER>,
        readonly query: Query,
        readonly requestorRef: asn1.OPTIONAL<GeneralNames>,
        readonly requestNonce: asn1.OPTIONAL<asn1.OCTET_STRING>,
        readonly requestorName: asn1.OPTIONAL<GeneralName>,
        readonly responderName: asn1.OPTIONAL<GeneralName>,
        readonly requestExtensions: asn1.OPTIONAL<Extensions>,
        readonly signatureAlg: asn1.OPTIONAL<AlgorithmIdentifier>,
        readonly hashAlg: asn1.OPTIONAL<asn1.OBJECT_IDENTIFIER>,
        readonly requestorText: asn1.OPTIONAL<asn1.UTF8String>
    ) {}
    public static get _default_value_for_cvRequestVersion () { return 1; }
}
export const _root_component_type_list_1_spec_for_CVRequest: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("cvRequestVersion", true, __utils.hasTag(asn1.ASN1TagClass.universal, 2), undefined, undefined),
    new __utils.ComponentSpec("query", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined),
    new __utils.ComponentSpec("requestorRef", true, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined),
    new __utils.ComponentSpec("requestNonce", true, __utils.hasTag(asn1.ASN1TagClass.context, 1), undefined, undefined),
    new __utils.ComponentSpec("requestorName", true, __utils.hasTag(asn1.ASN1TagClass.context, 2), undefined, undefined),
    new __utils.ComponentSpec("responderName", true, __utils.hasTag(asn1.ASN1TagClass.context, 3), undefined, undefined),
    new __utils.ComponentSpec("requestExtensions", true, __utils.hasTag(asn1.ASN1TagClass.context, 4), undefined, undefined),
    new __utils.ComponentSpec("signatureAlg", true, __utils.hasTag(asn1.ASN1TagClass.context, 5), undefined, undefined),
    new __utils.ComponentSpec("hashAlg", true, __utils.hasTag(asn1.ASN1TagClass.context, 6), undefined, undefined),
    new __utils.ComponentSpec("requestorText", true, __utils.hasTag(asn1.ASN1TagClass.context, 7), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_CVRequest: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_CVRequest: __utils.ComponentSpec[] = [
    
];
let _cached_decoder_for_CVRequest: __utils.ASN1Decoder<CVRequest> | null = null;
let _cached_encoder_for_CVRequest: __utils.ASN1Encoder<CVRequest> | null = null;
export function _decode_CVRequest (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_CVRequest) { _cached_decoder_for_CVRequest = function (el: asn1.ASN1Element): CVRequest {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let cvRequestVersion: asn1.OPTIONAL<asn1.INTEGER> = CVRequest._default_value_for_cvRequestVersion;
    let query!: Query;
    let requestorRef: asn1.OPTIONAL<GeneralNames>;
    let requestNonce: asn1.OPTIONAL<asn1.OCTET_STRING>;
    let requestorName: asn1.OPTIONAL<GeneralName>;
    let responderName: asn1.OPTIONAL<GeneralName>;
    let requestExtensions: asn1.OPTIONAL<Extensions>;
    let signatureAlg: asn1.OPTIONAL<AlgorithmIdentifier>;
    let hashAlg: asn1.OPTIONAL<asn1.OBJECT_IDENTIFIER>;
    let requestorText: asn1.OPTIONAL<asn1.UTF8String>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "cvRequestVersion": (_el: asn1.ASN1Element): void => { cvRequestVersion = __utils._decodeInteger(_el); },
        "query": (_el: asn1.ASN1Element): void => { query = _decode_Query(_el); },
        "requestorRef": (_el: asn1.ASN1Element): void => { requestorRef = __utils._decode_implicit<GeneralNames>(() => _decode_GeneralNames)(_el); },
        "requestNonce": (_el: asn1.ASN1Element): void => { requestNonce = __utils._decode_implicit<asn1.OCTET_STRING>(() => __utils._decodeOctetString)(_el); },
        "requestorName": (_el: asn1.ASN1Element): void => { requestorName = __utils._decode_implicit<GeneralName>(() => _decode_GeneralName)(_el); },
        "responderName": (_el: asn1.ASN1Element): void => { responderName = __utils._decode_implicit<GeneralName>(() => _decode_GeneralName)(_el); },
        "requestExtensions": (_el: asn1.ASN1Element): void => { requestExtensions = __utils._decode_implicit<Extensions>(() => _decode_Extensions)(_el); },
        "signatureAlg": (_el: asn1.ASN1Element): void => { signatureAlg = __utils._decode_implicit<AlgorithmIdentifier>(() => _decode_AlgorithmIdentifier)(_el); },
        "hashAlg": (_el: asn1.ASN1Element): void => { hashAlg = __utils._decode_implicit<asn1.OBJECT_IDENTIFIER>(() => __utils._decodeObjectIdentifier)(_el); },
        "requestorText": (_el: asn1.ASN1Element): void => { requestorText = __utils._decode_implicit<asn1.UTF8String>(() => __utils._decodeUTF8String)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CVRequest,
        _extension_additions_list_spec_for_CVRequest,
        _root_component_type_list_2_spec_for_CVRequest,
        undefined,
    );
    return new CVRequest( /* SEQUENCE_CONSTRUCTOR_CALL */
        cvRequestVersion,
        query,
        requestorRef,
        requestNonce,
        requestorName,
        responderName,
        requestExtensions,
        signatureAlg,
        hashAlg,
        requestorText
    );
}; }
    return _cached_decoder_for_CVRequest(el);
}
export function _encode_CVRequest (value: CVRequest, elGetter: __utils.ASN1Encoder<CVRequest>) {
    if (!_cached_encoder_for_CVRequest) { _cached_encoder_for_CVRequest = function (value: CVRequest, elGetter: __utils.ASN1Encoder<CVRequest>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* IF_DEFAULT */ (value.cvRequestVersion === undefined || __utils.deepEq(value.cvRequestVersion, CVRequest._default_value_for_cvRequestVersion) ? undefined : __utils._encodeInteger(value.cvRequestVersion, __utils.BER)),
            /* REQUIRED   */ _encode_Query(value.query, __utils.BER),
            /* IF_ABSENT  */ ((value.requestorRef === undefined) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 0, () => _encode_GeneralNames, __utils.BER)(value.requestorRef, __utils.BER)),
            /* IF_ABSENT  */ ((value.requestNonce === undefined) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 1, () => __utils._encodeOctetString, __utils.BER)(value.requestNonce, __utils.BER)),
            /* IF_ABSENT  */ ((value.requestorName === undefined) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 2, () => _encode_GeneralName, __utils.BER)(value.requestorName, __utils.BER)),
            /* IF_ABSENT  */ ((value.responderName === undefined) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 3, () => _encode_GeneralName, __utils.BER)(value.responderName, __utils.BER)),
            /* IF_ABSENT  */ ((value.requestExtensions === undefined) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 4, () => _encode_Extensions, __utils.BER)(value.requestExtensions, __utils.BER)),
            /* IF_ABSENT  */ ((value.signatureAlg === undefined) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 5, () => _encode_AlgorithmIdentifier, __utils.BER)(value.signatureAlg, __utils.BER)),
            /* IF_ABSENT  */ ((value.hashAlg === undefined) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 6, () => __utils._encodeObjectIdentifier, __utils.BER)(value.hashAlg, __utils.BER)),
            /* IF_ABSENT  */ ((value.requestorText === undefined) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 7, () => __utils._encodeUTF8String, __utils.BER)(value.requestorText, __utils.BER))
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
}; }
    return _cached_encoder_for_CVRequest(value, elGetter);
}


export type RequestReference =
    { requestHash: HashValue } /* CHOICE_ALT_ROOT */
    | { fullRequest: CVRequest } /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_RequestReference: __utils.ASN1Decoder<RequestReference> | null = null;
let _cached_encoder_for_RequestReference: __utils.ASN1Encoder<RequestReference> | null = null;
export function _decode_RequestReference (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_RequestReference) { _cached_decoder_for_RequestReference = __utils._decode_inextensible_choice<RequestReference>({
    "CONTEXT 0": [ "requestHash", __utils._decode_implicit<HashValue>(() => _decode_HashValue) ],
    "CONTEXT 1": [ "fullRequest", __utils._decode_implicit<CVRequest>(() => _decode_CVRequest) ]
}); }
    return _cached_decoder_for_RequestReference(el);
}
export function _encode_RequestReference (value: RequestReference, elGetter: __utils.ASN1Encoder<RequestReference>) {
    if (!_cached_encoder_for_RequestReference) { _cached_encoder_for_RequestReference = __utils._encode_choice<RequestReference>({
    "requestHash": __utils._encode_implicit(asn1.ASN1TagClass.context, 0, () => _encode_HashValue, __utils.BER),
    "fullRequest": __utils._encode_implicit(asn1.ASN1TagClass.context, 1, () => _encode_CVRequest, __utils.BER),
}, __utils.BER); }
    return _cached_encoder_for_RequestReference(value, elGetter);
}


export type CertReference =
    { pkc: PKCReference } /* CHOICE_ALT_ROOT */
    | { ac: ACReference } /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_CertReference: __utils.ASN1Decoder<CertReference> | null = null;
let _cached_encoder_for_CertReference: __utils.ASN1Encoder<CertReference> | null = null;
export function _decode_CertReference (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_CertReference) { _cached_decoder_for_CertReference = __utils._decode_inextensible_choice<CertReference>({
    "CONTEXT 0": [ "pkc", _decode_PKCReference ],
    "CONTEXT 1": [ "pkc", _decode_PKCReference ],
    "CONTEXT 2": [ "ac", _decode_ACReference ],
    "CONTEXT 3": [ "ac", _decode_ACReference ]
}); }
    return _cached_decoder_for_CertReference(el);
}
export function _encode_CertReference (value: CertReference, elGetter: __utils.ASN1Encoder<CertReference>) {
    if (!_cached_encoder_for_CertReference) { _cached_encoder_for_CertReference = __utils._encode_choice<CertReference>({
    "pkc": _encode_PKCReference,
    "ac": _encode_ACReference,
}, __utils.BER); }
    return _cached_encoder_for_CertReference(value, elGetter);
}


export enum ReplyStatus {
    success = 0,
    malformedPKC = 1,
    malformedAC = 2,
    unavailableValidationTime = 3,
    referenceCertHashFail = 4,
    certPathConstructFail = 5,
    certPathNotValid = 6,
    certPathNotValidNow = 7,
    wantBackUnsatisfied = 8,
}
export const ReplyStatus_success: ReplyStatus = ReplyStatus.success; /* LONG_NAMED_ENUMERATED_VALUE */
export const ReplyStatus_malformedPKC: ReplyStatus = ReplyStatus.malformedPKC; /* LONG_NAMED_ENUMERATED_VALUE */
export const ReplyStatus_malformedAC: ReplyStatus = ReplyStatus.malformedAC; /* LONG_NAMED_ENUMERATED_VALUE */
export const ReplyStatus_unavailableValidationTime: ReplyStatus = ReplyStatus.unavailableValidationTime; /* LONG_NAMED_ENUMERATED_VALUE */
export const ReplyStatus_referenceCertHashFail: ReplyStatus = ReplyStatus.referenceCertHashFail; /* LONG_NAMED_ENUMERATED_VALUE */
export const ReplyStatus_certPathConstructFail: ReplyStatus = ReplyStatus.certPathConstructFail; /* LONG_NAMED_ENUMERATED_VALUE */
export const ReplyStatus_certPathNotValid: ReplyStatus = ReplyStatus.certPathNotValid; /* LONG_NAMED_ENUMERATED_VALUE */
export const ReplyStatus_certPathNotValidNow: ReplyStatus = ReplyStatus.certPathNotValidNow; /* LONG_NAMED_ENUMERATED_VALUE */
export const ReplyStatus_wantBackUnsatisfied: ReplyStatus = ReplyStatus.wantBackUnsatisfied; /* LONG_NAMED_ENUMERATED_VALUE */
let _cached_decoder_for_ReplyStatus: __utils.ASN1Decoder<ReplyStatus> | null = null;
let _cached_encoder_for_ReplyStatus: __utils.ASN1Encoder<ReplyStatus> | null = null;
export function _decode_ReplyStatus (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ReplyStatus) { _cached_decoder_for_ReplyStatus = __utils._decodeEnumerated; }
    return _cached_decoder_for_ReplyStatus(el);
}
export function _encode_ReplyStatus (value: ReplyStatus, elGetter: __utils.ASN1Encoder<ReplyStatus>) {
    if (!_cached_encoder_for_ReplyStatus) { _cached_encoder_for_ReplyStatus = __utils._encodeEnumerated; }
    return _cached_encoder_for_ReplyStatus(value, elGetter);
}


export class ReplyCheck {
    constructor (
        readonly check: asn1.OBJECT_IDENTIFIER,
        readonly status: asn1.OPTIONAL<asn1.INTEGER>
    ) {}
    public static get _default_value_for_status () { return 0; }
}
export const _root_component_type_list_1_spec_for_ReplyCheck: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("check", false, __utils.hasTag(asn1.ASN1TagClass.universal, 6), undefined, undefined),
    new __utils.ComponentSpec("status", true, __utils.hasTag(asn1.ASN1TagClass.universal, 2), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_ReplyCheck: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_ReplyCheck: __utils.ComponentSpec[] = [
    
];
let _cached_decoder_for_ReplyCheck: __utils.ASN1Decoder<ReplyCheck> | null = null;
let _cached_encoder_for_ReplyCheck: __utils.ASN1Encoder<ReplyCheck> | null = null;
export function _decode_ReplyCheck (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ReplyCheck) { _cached_decoder_for_ReplyCheck = function (el: asn1.ASN1Element): ReplyCheck {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let check!: asn1.OBJECT_IDENTIFIER;
    let status: asn1.OPTIONAL<asn1.INTEGER> = ReplyCheck._default_value_for_status;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "check": (_el: asn1.ASN1Element): void => { check = __utils._decodeObjectIdentifier(_el); },
        "status": (_el: asn1.ASN1Element): void => { status = __utils._decodeInteger(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ReplyCheck,
        _extension_additions_list_spec_for_ReplyCheck,
        _root_component_type_list_2_spec_for_ReplyCheck,
        undefined,
    );
    return new ReplyCheck( /* SEQUENCE_CONSTRUCTOR_CALL */
        check,
        status
    );
}; }
    return _cached_decoder_for_ReplyCheck(el);
}
export function _encode_ReplyCheck (value: ReplyCheck, elGetter: __utils.ASN1Encoder<ReplyCheck>) {
    if (!_cached_encoder_for_ReplyCheck) { _cached_encoder_for_ReplyCheck = function (value: ReplyCheck, elGetter: __utils.ASN1Encoder<ReplyCheck>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ __utils._encodeObjectIdentifier(value.check, __utils.BER),
            /* IF_DEFAULT */ (value.status === undefined || __utils.deepEq(value.status, ReplyCheck._default_value_for_status) ? undefined : __utils._encodeInteger(value.status, __utils.BER))
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
}; }
    return _cached_encoder_for_ReplyCheck(value, elGetter);
}


export type ReplyChecks = ReplyCheck[]; // SequenceOfType
let _cached_decoder_for_ReplyChecks: __utils.ASN1Decoder<ReplyChecks> | null = null;
let _cached_encoder_for_ReplyChecks: __utils.ASN1Encoder<ReplyChecks> | null = null;
export function _decode_ReplyChecks (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ReplyChecks) { _cached_decoder_for_ReplyChecks = __utils._decodeSequenceOf<ReplyCheck>(() => _decode_ReplyCheck); }
    return _cached_decoder_for_ReplyChecks(el);
}
export function _encode_ReplyChecks (value: ReplyChecks, elGetter: __utils.ASN1Encoder<ReplyChecks>) {
    if (!_cached_encoder_for_ReplyChecks) { _cached_encoder_for_ReplyChecks = __utils._encodeSequenceOf<ReplyCheck>(() => _encode_ReplyCheck, __utils.BER); }
    return _cached_encoder_for_ReplyChecks(value, elGetter);
}


export class ReplyWantBack {
    constructor (
        readonly wb: asn1.OBJECT_IDENTIFIER,
        readonly value: asn1.OCTET_STRING
    ) {}

}
export const _root_component_type_list_1_spec_for_ReplyWantBack: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("wb", false, __utils.hasTag(asn1.ASN1TagClass.universal, 6), undefined, undefined),
    new __utils.ComponentSpec("value", false, __utils.hasTag(asn1.ASN1TagClass.universal, 4), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_ReplyWantBack: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_ReplyWantBack: __utils.ComponentSpec[] = [
    
];
let _cached_decoder_for_ReplyWantBack: __utils.ASN1Decoder<ReplyWantBack> | null = null;
let _cached_encoder_for_ReplyWantBack: __utils.ASN1Encoder<ReplyWantBack> | null = null;
export function _decode_ReplyWantBack (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ReplyWantBack) { _cached_decoder_for_ReplyWantBack = function (el: asn1.ASN1Element): ReplyWantBack {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new asn1.ASN1ConstructionError("ReplyWantBack contained only " + sequence.length.toString() + " elements.");
    }
    // TODO: Validate tags.
    sequence[0].name = "wb";
    sequence[1].name = "value";
    let wb!: asn1.OBJECT_IDENTIFIER;
    let value!: asn1.OCTET_STRING;
    wb = __utils._decodeObjectIdentifier(sequence[0]);
    value = __utils._decodeOctetString(sequence[1]);
    // TODO: Validate values.
    return new ReplyWantBack(
        wb,
        value,

    );
}; }
    return _cached_decoder_for_ReplyWantBack(el);
}
export function _encode_ReplyWantBack (value: ReplyWantBack, elGetter: __utils.ASN1Encoder<ReplyWantBack>) {
    if (!_cached_encoder_for_ReplyWantBack) { _cached_encoder_for_ReplyWantBack = function (value: ReplyWantBack, elGetter: __utils.ASN1Encoder<ReplyWantBack>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ __utils._encodeObjectIdentifier(value.wb, __utils.BER),
            /* REQUIRED   */ __utils._encodeOctetString(value.value, __utils.BER)
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
}; }
    return _cached_encoder_for_ReplyWantBack(value, elGetter);
}


export type ReplyWantBacks = ReplyWantBack[]; // SequenceOfType
let _cached_decoder_for_ReplyWantBacks: __utils.ASN1Decoder<ReplyWantBacks> | null = null;
let _cached_encoder_for_ReplyWantBacks: __utils.ASN1Encoder<ReplyWantBacks> | null = null;
export function _decode_ReplyWantBacks (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ReplyWantBacks) { _cached_decoder_for_ReplyWantBacks = __utils._decodeSequenceOf<ReplyWantBack>(() => _decode_ReplyWantBack); }
    return _cached_decoder_for_ReplyWantBacks(el);
}
export function _encode_ReplyWantBacks (value: ReplyWantBacks, elGetter: __utils.ASN1Encoder<ReplyWantBacks>) {
    if (!_cached_encoder_for_ReplyWantBacks) { _cached_encoder_for_ReplyWantBacks = __utils._encodeSequenceOf<ReplyWantBack>(() => _encode_ReplyWantBack, __utils.BER); }
    return _cached_encoder_for_ReplyWantBacks(value, elGetter);
}


export class CertReply {
    constructor (
        readonly cert: CertReference,
        readonly replyStatus: asn1.OPTIONAL<ReplyStatus>,
        readonly replyValTime: asn1.GeneralizedTime,
        readonly replyChecks: ReplyChecks,
        readonly replyWantBacks: ReplyWantBacks,
        readonly validationErrors: asn1.OPTIONAL<asn1.OBJECT_IDENTIFIER[]>,
        readonly nextUpdate: asn1.OPTIONAL<asn1.GeneralizedTime>,
        readonly certReplyExtensions: asn1.OPTIONAL<Extensions>
    ) {}
    public static get _default_value_for_replyStatus () { return success; }
}
export const _root_component_type_list_1_spec_for_CertReply: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("cert", false, __utils.hasAnyTag, undefined, undefined),
    new __utils.ComponentSpec("replyStatus", true, __utils.hasTag(asn1.ASN1TagClass.universal, 10), undefined, undefined),
    new __utils.ComponentSpec("replyValTime", false, __utils.hasTag(asn1.ASN1TagClass.universal, 24), undefined, undefined),
    new __utils.ComponentSpec("replyChecks", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined),
    new __utils.ComponentSpec("replyWantBacks", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined),
    new __utils.ComponentSpec("validationErrors", true, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined),
    new __utils.ComponentSpec("nextUpdate", true, __utils.hasTag(asn1.ASN1TagClass.context, 1), undefined, undefined),
    new __utils.ComponentSpec("certReplyExtensions", true, __utils.hasTag(asn1.ASN1TagClass.context, 2), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_CertReply: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_CertReply: __utils.ComponentSpec[] = [
    
];
let _cached_decoder_for_CertReply: __utils.ASN1Decoder<CertReply> | null = null;
let _cached_encoder_for_CertReply: __utils.ASN1Encoder<CertReply> | null = null;
export function _decode_CertReply (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_CertReply) { _cached_decoder_for_CertReply = function (el: asn1.ASN1Element): CertReply {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let cert!: CertReference;
    let replyStatus: asn1.OPTIONAL<ReplyStatus> = CertReply._default_value_for_replyStatus;
    let replyValTime!: asn1.GeneralizedTime;
    let replyChecks!: ReplyChecks;
    let replyWantBacks!: ReplyWantBacks;
    let validationErrors: asn1.OPTIONAL<asn1.OBJECT_IDENTIFIER[]>;
    let nextUpdate: asn1.OPTIONAL<asn1.GeneralizedTime>;
    let certReplyExtensions: asn1.OPTIONAL<Extensions>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "cert": (_el: asn1.ASN1Element): void => { cert = _decode_CertReference(_el); },
        "replyStatus": (_el: asn1.ASN1Element): void => { replyStatus = _decode_ReplyStatus(_el); },
        "replyValTime": (_el: asn1.ASN1Element): void => { replyValTime = __utils._decodeGeneralizedTime(_el); },
        "replyChecks": (_el: asn1.ASN1Element): void => { replyChecks = _decode_ReplyChecks(_el); },
        "replyWantBacks": (_el: asn1.ASN1Element): void => { replyWantBacks = _decode_ReplyWantBacks(_el); },
        "validationErrors": (_el: asn1.ASN1Element): void => { validationErrors = __utils._decode_implicit<asn1.OBJECT_IDENTIFIER[]>(() => __utils._decodeSequenceOf<asn1.OBJECT_IDENTIFIER>(() => __utils._decodeObjectIdentifier))(_el); },
        "nextUpdate": (_el: asn1.ASN1Element): void => { nextUpdate = __utils._decode_implicit<asn1.GeneralizedTime>(() => __utils._decodeGeneralizedTime)(_el); },
        "certReplyExtensions": (_el: asn1.ASN1Element): void => { certReplyExtensions = __utils._decode_implicit<Extensions>(() => _decode_Extensions)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CertReply,
        _extension_additions_list_spec_for_CertReply,
        _root_component_type_list_2_spec_for_CertReply,
        undefined,
    );
    return new CertReply( /* SEQUENCE_CONSTRUCTOR_CALL */
        cert,
        replyStatus,
        replyValTime,
        replyChecks,
        replyWantBacks,
        validationErrors,
        nextUpdate,
        certReplyExtensions
    );
}; }
    return _cached_decoder_for_CertReply(el);
}
export function _encode_CertReply (value: CertReply, elGetter: __utils.ASN1Encoder<CertReply>) {
    if (!_cached_encoder_for_CertReply) { _cached_encoder_for_CertReply = function (value: CertReply, elGetter: __utils.ASN1Encoder<CertReply>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_CertReference(value.cert, __utils.BER),
            /* IF_DEFAULT */ (value.replyStatus === undefined || __utils.deepEq(value.replyStatus, CertReply._default_value_for_replyStatus) ? undefined : _encode_ReplyStatus(value.replyStatus, __utils.BER)),
            /* REQUIRED   */ __utils._encodeGeneralizedTime(value.replyValTime, __utils.BER),
            /* REQUIRED   */ _encode_ReplyChecks(value.replyChecks, __utils.BER),
            /* REQUIRED   */ _encode_ReplyWantBacks(value.replyWantBacks, __utils.BER),
            /* IF_ABSENT  */ ((value.validationErrors === undefined) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 0, () => __utils._encodeSequenceOf<asn1.OBJECT_IDENTIFIER>(() => __utils._encodeObjectIdentifier, __utils.BER), __utils.BER)(value.validationErrors, __utils.BER)),
            /* IF_ABSENT  */ ((value.nextUpdate === undefined) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 1, () => __utils._encodeGeneralizedTime, __utils.BER)(value.nextUpdate, __utils.BER)),
            /* IF_ABSENT  */ ((value.certReplyExtensions === undefined) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 2, () => _encode_Extensions, __utils.BER)(value.certReplyExtensions, __utils.BER))
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
}; }
    return _cached_encoder_for_CertReply(value, elGetter);
}


export type ReplyObjects = CertReply[]; // SequenceOfType
let _cached_decoder_for_ReplyObjects: __utils.ASN1Decoder<ReplyObjects> | null = null;
let _cached_encoder_for_ReplyObjects: __utils.ASN1Encoder<ReplyObjects> | null = null;
export function _decode_ReplyObjects (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ReplyObjects) { _cached_decoder_for_ReplyObjects = __utils._decodeSequenceOf<CertReply>(() => _decode_CertReply); }
    return _cached_decoder_for_ReplyObjects(el);
}
export function _encode_ReplyObjects (value: ReplyObjects, elGetter: __utils.ASN1Encoder<ReplyObjects>) {
    if (!_cached_encoder_for_ReplyObjects) { _cached_encoder_for_ReplyObjects = __utils._encodeSequenceOf<CertReply>(() => _encode_CertReply, __utils.BER); }
    return _cached_encoder_for_ReplyObjects(value, elGetter);
}


export class CVResponse {
    constructor (
        readonly cvResponseVersion: asn1.INTEGER,
        readonly serverConfigurationID: asn1.INTEGER,
        readonly producedAt: asn1.GeneralizedTime,
        readonly responseStatus: ResponseStatus,
        readonly respValidationPolicy: asn1.OPTIONAL<RespValidationPolicy>,
        readonly requestRef: asn1.OPTIONAL<RequestReference>,
        readonly requestorRef: asn1.OPTIONAL<GeneralNames>,
        readonly requestorName: asn1.OPTIONAL<GeneralNames>,
        readonly replyObjects: asn1.OPTIONAL<ReplyObjects>,
        readonly respNonce: asn1.OPTIONAL<asn1.OCTET_STRING>,
        readonly serverContextInfo: asn1.OPTIONAL<asn1.OCTET_STRING>,
        readonly cvResponseExtensions: asn1.OPTIONAL<Extensions>,
        readonly requestorText: asn1.OPTIONAL<asn1.UTF8String>
    ) {}

}
export const _root_component_type_list_1_spec_for_CVResponse: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("cvResponseVersion", false, __utils.hasTag(asn1.ASN1TagClass.universal, 2), undefined, undefined),
    new __utils.ComponentSpec("serverConfigurationID", false, __utils.hasTag(asn1.ASN1TagClass.universal, 2), undefined, undefined),
    new __utils.ComponentSpec("producedAt", false, __utils.hasTag(asn1.ASN1TagClass.universal, 24), undefined, undefined),
    new __utils.ComponentSpec("responseStatus", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined),
    new __utils.ComponentSpec("respValidationPolicy", true, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined),
    new __utils.ComponentSpec("requestRef", true, __utils.hasTag(asn1.ASN1TagClass.context, 1), undefined, undefined),
    new __utils.ComponentSpec("requestorRef", true, __utils.hasTag(asn1.ASN1TagClass.context, 2), undefined, undefined),
    new __utils.ComponentSpec("requestorName", true, __utils.hasTag(asn1.ASN1TagClass.context, 3), undefined, undefined),
    new __utils.ComponentSpec("replyObjects", true, __utils.hasTag(asn1.ASN1TagClass.context, 4), undefined, undefined),
    new __utils.ComponentSpec("respNonce", true, __utils.hasTag(asn1.ASN1TagClass.context, 5), undefined, undefined),
    new __utils.ComponentSpec("serverContextInfo", true, __utils.hasTag(asn1.ASN1TagClass.context, 6), undefined, undefined),
    new __utils.ComponentSpec("cvResponseExtensions", true, __utils.hasTag(asn1.ASN1TagClass.context, 7), undefined, undefined),
    new __utils.ComponentSpec("requestorText", true, __utils.hasTag(asn1.ASN1TagClass.context, 8), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_CVResponse: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_CVResponse: __utils.ComponentSpec[] = [
    
];
let _cached_decoder_for_CVResponse: __utils.ASN1Decoder<CVResponse> | null = null;
let _cached_encoder_for_CVResponse: __utils.ASN1Encoder<CVResponse> | null = null;
export function _decode_CVResponse (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_CVResponse) { _cached_decoder_for_CVResponse = function (el: asn1.ASN1Element): CVResponse {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let cvResponseVersion!: asn1.INTEGER;
    let serverConfigurationID!: asn1.INTEGER;
    let producedAt!: asn1.GeneralizedTime;
    let responseStatus!: ResponseStatus;
    let respValidationPolicy: asn1.OPTIONAL<RespValidationPolicy>;
    let requestRef: asn1.OPTIONAL<RequestReference>;
    let requestorRef: asn1.OPTIONAL<GeneralNames>;
    let requestorName: asn1.OPTIONAL<GeneralNames>;
    let replyObjects: asn1.OPTIONAL<ReplyObjects>;
    let respNonce: asn1.OPTIONAL<asn1.OCTET_STRING>;
    let serverContextInfo: asn1.OPTIONAL<asn1.OCTET_STRING>;
    let cvResponseExtensions: asn1.OPTIONAL<Extensions>;
    let requestorText: asn1.OPTIONAL<asn1.UTF8String>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "cvResponseVersion": (_el: asn1.ASN1Element): void => { cvResponseVersion = __utils._decodeInteger(_el); },
        "serverConfigurationID": (_el: asn1.ASN1Element): void => { serverConfigurationID = __utils._decodeInteger(_el); },
        "producedAt": (_el: asn1.ASN1Element): void => { producedAt = __utils._decodeGeneralizedTime(_el); },
        "responseStatus": (_el: asn1.ASN1Element): void => { responseStatus = _decode_ResponseStatus(_el); },
        "respValidationPolicy": (_el: asn1.ASN1Element): void => { respValidationPolicy = __utils._decode_implicit<RespValidationPolicy>(() => _decode_RespValidationPolicy)(_el); },
        "requestRef": (_el: asn1.ASN1Element): void => { requestRef = __utils._decode_implicit<RequestReference>(() => _decode_RequestReference)(_el); },
        "requestorRef": (_el: asn1.ASN1Element): void => { requestorRef = __utils._decode_implicit<GeneralNames>(() => _decode_GeneralNames)(_el); },
        "requestorName": (_el: asn1.ASN1Element): void => { requestorName = __utils._decode_implicit<GeneralNames>(() => _decode_GeneralNames)(_el); },
        "replyObjects": (_el: asn1.ASN1Element): void => { replyObjects = __utils._decode_implicit<ReplyObjects>(() => _decode_ReplyObjects)(_el); },
        "respNonce": (_el: asn1.ASN1Element): void => { respNonce = __utils._decode_implicit<asn1.OCTET_STRING>(() => __utils._decodeOctetString)(_el); },
        "serverContextInfo": (_el: asn1.ASN1Element): void => { serverContextInfo = __utils._decode_implicit<asn1.OCTET_STRING>(() => __utils._decodeOctetString)(_el); },
        "cvResponseExtensions": (_el: asn1.ASN1Element): void => { cvResponseExtensions = __utils._decode_implicit<Extensions>(() => _decode_Extensions)(_el); },
        "requestorText": (_el: asn1.ASN1Element): void => { requestorText = __utils._decode_implicit<asn1.UTF8String>(() => __utils._decodeUTF8String)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CVResponse,
        _extension_additions_list_spec_for_CVResponse,
        _root_component_type_list_2_spec_for_CVResponse,
        undefined,
    );
    return new CVResponse( /* SEQUENCE_CONSTRUCTOR_CALL */
        cvResponseVersion,
        serverConfigurationID,
        producedAt,
        responseStatus,
        respValidationPolicy,
        requestRef,
        requestorRef,
        requestorName,
        replyObjects,
        respNonce,
        serverContextInfo,
        cvResponseExtensions,
        requestorText
    );
}; }
    return _cached_decoder_for_CVResponse(el);
}
export function _encode_CVResponse (value: CVResponse, elGetter: __utils.ASN1Encoder<CVResponse>) {
    if (!_cached_encoder_for_CVResponse) { _cached_encoder_for_CVResponse = function (value: CVResponse, elGetter: __utils.ASN1Encoder<CVResponse>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ __utils._encodeInteger(value.cvResponseVersion, __utils.BER),
            /* REQUIRED   */ __utils._encodeInteger(value.serverConfigurationID, __utils.BER),
            /* REQUIRED   */ __utils._encodeGeneralizedTime(value.producedAt, __utils.BER),
            /* REQUIRED   */ _encode_ResponseStatus(value.responseStatus, __utils.BER),
            /* IF_ABSENT  */ ((value.respValidationPolicy === undefined) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 0, () => _encode_RespValidationPolicy, __utils.BER)(value.respValidationPolicy, __utils.BER)),
            /* IF_ABSENT  */ ((value.requestRef === undefined) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 1, () => _encode_RequestReference, __utils.BER)(value.requestRef, __utils.BER)),
            /* IF_ABSENT  */ ((value.requestorRef === undefined) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 2, () => _encode_GeneralNames, __utils.BER)(value.requestorRef, __utils.BER)),
            /* IF_ABSENT  */ ((value.requestorName === undefined) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 3, () => _encode_GeneralNames, __utils.BER)(value.requestorName, __utils.BER)),
            /* IF_ABSENT  */ ((value.replyObjects === undefined) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 4, () => _encode_ReplyObjects, __utils.BER)(value.replyObjects, __utils.BER)),
            /* IF_ABSENT  */ ((value.respNonce === undefined) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 5, () => __utils._encodeOctetString, __utils.BER)(value.respNonce, __utils.BER)),
            /* IF_ABSENT  */ ((value.serverContextInfo === undefined) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 6, () => __utils._encodeOctetString, __utils.BER)(value.serverContextInfo, __utils.BER)),
            /* IF_ABSENT  */ ((value.cvResponseExtensions === undefined) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 7, () => _encode_Extensions, __utils.BER)(value.cvResponseExtensions, __utils.BER)),
            /* IF_ABSENT  */ ((value.requestorText === undefined) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 8, () => __utils._encodeUTF8String, __utils.BER)(value.requestorText, __utils.BER))
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
}; }
    return _cached_encoder_for_CVResponse(value, elGetter);
}


// TODO: ObjectSetAssignment: CVResponseExtensions

// TODO: ObjectSetAssignment: AllWantBacks

export type CertBundles = CertBundle[]; // SequenceOfType
let _cached_decoder_for_CertBundles: __utils.ASN1Decoder<CertBundles> | null = null;
let _cached_encoder_for_CertBundles: __utils.ASN1Encoder<CertBundles> | null = null;
export function _decode_CertBundles (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_CertBundles) { _cached_decoder_for_CertBundles = __utils._decodeSequenceOf<CertBundle>(() => _decode_CertBundle); }
    return _cached_decoder_for_CertBundles(el);
}
export function _encode_CertBundles (value: CertBundles, elGetter: __utils.ASN1Encoder<CertBundles>) {
    if (!_cached_encoder_for_CertBundles) { _cached_encoder_for_CertBundles = __utils._encodeSequenceOf<CertBundle>(() => _encode_CertBundle, __utils.BER); }
    return _cached_encoder_for_CertBundles(value, elGetter);
}


export class RevInfoWantBack {
    constructor (
        readonly revocationInfo: RevocationInfos,
        readonly extraCerts: asn1.OPTIONAL<CertBundle>
    ) {}

}
export const _root_component_type_list_1_spec_for_RevInfoWantBack: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("revocationInfo", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined),
    new __utils.ComponentSpec("extraCerts", true, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_RevInfoWantBack: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_RevInfoWantBack: __utils.ComponentSpec[] = [
    
];
let _cached_decoder_for_RevInfoWantBack: __utils.ASN1Decoder<RevInfoWantBack> | null = null;
let _cached_encoder_for_RevInfoWantBack: __utils.ASN1Encoder<RevInfoWantBack> | null = null;
export function _decode_RevInfoWantBack (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_RevInfoWantBack) { _cached_decoder_for_RevInfoWantBack = function (el: asn1.ASN1Element): RevInfoWantBack {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let revocationInfo!: RevocationInfos;
    let extraCerts: asn1.OPTIONAL<CertBundle>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "revocationInfo": (_el: asn1.ASN1Element): void => { revocationInfo = _decode_RevocationInfos(_el); },
        "extraCerts": (_el: asn1.ASN1Element): void => { extraCerts = _decode_CertBundle(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_RevInfoWantBack,
        _extension_additions_list_spec_for_RevInfoWantBack,
        _root_component_type_list_2_spec_for_RevInfoWantBack,
        undefined,
    );
    return new RevInfoWantBack( /* SEQUENCE_CONSTRUCTOR_CALL */
        revocationInfo,
        extraCerts
    );
}; }
    return _cached_decoder_for_RevInfoWantBack(el);
}
export function _encode_RevInfoWantBack (value: RevInfoWantBack, elGetter: __utils.ASN1Encoder<RevInfoWantBack>) {
    if (!_cached_encoder_for_RevInfoWantBack) { _cached_encoder_for_RevInfoWantBack = function (value: RevInfoWantBack, elGetter: __utils.ASN1Encoder<RevInfoWantBack>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_RevocationInfos(value.revocationInfo, __utils.BER),
            /* IF_ABSENT  */ ((value.extraCerts === undefined) ? undefined : _encode_CertBundle(value.extraCerts, __utils.BER))
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
}; }
    return _cached_encoder_for_RevInfoWantBack(value, elGetter);
}


export type SCVPResponses = ContentInfo[]; // SequenceOfType
let _cached_decoder_for_SCVPResponses: __utils.ASN1Decoder<SCVPResponses> | null = null;
let _cached_encoder_for_SCVPResponses: __utils.ASN1Encoder<SCVPResponses> | null = null;
export function _decode_SCVPResponses (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_SCVPResponses) { _cached_decoder_for_SCVPResponses = __utils._decodeSequenceOf<ContentInfo>(() => _decode_ContentInfo); }
    return _cached_decoder_for_SCVPResponses(el);
}
export function _encode_SCVPResponses (value: SCVPResponses, elGetter: __utils.ASN1Encoder<SCVPResponses>) {
    if (!_cached_encoder_for_SCVPResponses) { _cached_encoder_for_SCVPResponses = __utils._encodeSequenceOf<ContentInfo>(() => _encode_ContentInfo, __utils.BER); }
    return _cached_encoder_for_SCVPResponses(value, elGetter);
}


// TODO: ObjectAssignment: ct-scvp-valPolRequest

export const id_ct_scvp_valPolRequest: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    12,
], id_ct);

export class ValPolRequest {
    constructor (
        readonly vpRequestVersion: asn1.OPTIONAL<asn1.INTEGER>,
        readonly requestNonce: asn1.OCTET_STRING
    ) {}
    public static get _default_value_for_vpRequestVersion () { return 1; }
}
export const _root_component_type_list_1_spec_for_ValPolRequest: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("vpRequestVersion", true, __utils.hasTag(asn1.ASN1TagClass.universal, 2), undefined, undefined),
    new __utils.ComponentSpec("requestNonce", false, __utils.hasTag(asn1.ASN1TagClass.universal, 4), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_ValPolRequest: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_ValPolRequest: __utils.ComponentSpec[] = [
    
];
let _cached_decoder_for_ValPolRequest: __utils.ASN1Decoder<ValPolRequest> | null = null;
let _cached_encoder_for_ValPolRequest: __utils.ASN1Encoder<ValPolRequest> | null = null;
export function _decode_ValPolRequest (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ValPolRequest) { _cached_decoder_for_ValPolRequest = function (el: asn1.ASN1Element): ValPolRequest {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let vpRequestVersion: asn1.OPTIONAL<asn1.INTEGER> = ValPolRequest._default_value_for_vpRequestVersion;
    let requestNonce!: asn1.OCTET_STRING;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "vpRequestVersion": (_el: asn1.ASN1Element): void => { vpRequestVersion = __utils._decodeInteger(_el); },
        "requestNonce": (_el: asn1.ASN1Element): void => { requestNonce = __utils._decodeOctetString(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ValPolRequest,
        _extension_additions_list_spec_for_ValPolRequest,
        _root_component_type_list_2_spec_for_ValPolRequest,
        undefined,
    );
    return new ValPolRequest( /* SEQUENCE_CONSTRUCTOR_CALL */
        vpRequestVersion,
        requestNonce
    );
}; }
    return _cached_decoder_for_ValPolRequest(el);
}
export function _encode_ValPolRequest (value: ValPolRequest, elGetter: __utils.ASN1Encoder<ValPolRequest>) {
    if (!_cached_encoder_for_ValPolRequest) { _cached_encoder_for_ValPolRequest = function (value: ValPolRequest, elGetter: __utils.ASN1Encoder<ValPolRequest>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* IF_DEFAULT */ (value.vpRequestVersion === undefined || __utils.deepEq(value.vpRequestVersion, ValPolRequest._default_value_for_vpRequestVersion) ? undefined : __utils._encodeInteger(value.vpRequestVersion, __utils.BER)),
            /* REQUIRED   */ __utils._encodeOctetString(value.requestNonce, __utils.BER)
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
}; }
    return _cached_encoder_for_ValPolRequest(value, elGetter);
}


// TODO: ObjectAssignment: ct-scvp-valPolResponse

export const id_ct_scvp_valPolResponse: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    13,
], id_ct);

export type AuthPolicy = asn1.OBJECT_IDENTIFIER; // ObjectIdentifierType
let _cached_decoder_for_AuthPolicy: __utils.ASN1Decoder<AuthPolicy> | null = null;
let _cached_encoder_for_AuthPolicy: __utils.ASN1Encoder<AuthPolicy> | null = null;
export function _decode_AuthPolicy (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_AuthPolicy) { _cached_decoder_for_AuthPolicy = __utils._decodeObjectIdentifier; }
    return _cached_decoder_for_AuthPolicy(el);
}
export function _encode_AuthPolicy (value: AuthPolicy, elGetter: __utils.ASN1Encoder<AuthPolicy>) {
    if (!_cached_encoder_for_AuthPolicy) { _cached_encoder_for_AuthPolicy = __utils._encodeObjectIdentifier; }
    return _cached_encoder_for_AuthPolicy(value, elGetter);
}


export enum ResponseTypes {
    cached_only = 0,
    non_cached_only = 1,
    cached_and_non_cached = 2,
}
export const ResponseTypes_cached_only: ResponseTypes = ResponseTypes.cached_only; /* LONG_NAMED_ENUMERATED_VALUE */
export const ResponseTypes_non_cached_only: ResponseTypes = ResponseTypes.non_cached_only; /* LONG_NAMED_ENUMERATED_VALUE */
export const ResponseTypes_cached_and_non_cached: ResponseTypes = ResponseTypes.cached_and_non_cached; /* LONG_NAMED_ENUMERATED_VALUE */
let _cached_decoder_for_ResponseTypes: __utils.ASN1Decoder<ResponseTypes> | null = null;
let _cached_encoder_for_ResponseTypes: __utils.ASN1Encoder<ResponseTypes> | null = null;
export function _decode_ResponseTypes (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ResponseTypes) { _cached_decoder_for_ResponseTypes = __utils._decodeEnumerated; }
    return _cached_decoder_for_ResponseTypes(el);
}
export function _encode_ResponseTypes (value: ResponseTypes, elGetter: __utils.ASN1Encoder<ResponseTypes>) {
    if (!_cached_encoder_for_ResponseTypes) { _cached_encoder_for_ResponseTypes = __utils._encodeEnumerated; }
    return _cached_encoder_for_ResponseTypes(value, elGetter);
}


export type RevocationInfoTypes = asn1.BIT_STRING;
export const RevocationInfoTypes_fullCRLs: number = 0; /* LONG_NAMED_BIT */
export const RevocationInfoTypes_deltaCRLs: number = 1; /* LONG_NAMED_BIT */
export const RevocationInfoTypes_indirectCRLs: number = 2; /* LONG_NAMED_BIT */
export const RevocationInfoTypes_oCSPResponses: number = 3; /* LONG_NAMED_BIT */
let _cached_decoder_for_RevocationInfoTypes: __utils.ASN1Decoder<RevocationInfoTypes> | null = null;
let _cached_encoder_for_RevocationInfoTypes: __utils.ASN1Encoder<RevocationInfoTypes> | null = null;
export function _decode_RevocationInfoTypes (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_RevocationInfoTypes) { _cached_decoder_for_RevocationInfoTypes = __utils._decodeBitString; }
    return _cached_decoder_for_RevocationInfoTypes(el);
}
export function _encode_RevocationInfoTypes (value: RevocationInfoTypes, elGetter: __utils.ASN1Encoder<RevocationInfoTypes>) {
    if (!_cached_encoder_for_RevocationInfoTypes) { _cached_encoder_for_RevocationInfoTypes = __utils._encodeBitString; }
    return _cached_encoder_for_RevocationInfoTypes(value, elGetter);
}


export class KeyAgreePublicKey {
    constructor (
        readonly algorithm: AlgorithmIdentifier,
        readonly publicKey: asn1.BIT_STRING,
        readonly macAlgorithm: AlgorithmIdentifier,
        readonly kDF: asn1.OPTIONAL<AlgorithmIdentifier>
    ) {}

}
export const _root_component_type_list_1_spec_for_KeyAgreePublicKey: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("algorithm", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined),
    new __utils.ComponentSpec("publicKey", false, __utils.hasTag(asn1.ASN1TagClass.universal, 3), undefined, undefined),
    new __utils.ComponentSpec("macAlgorithm", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined),
    new __utils.ComponentSpec("kDF", true, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_KeyAgreePublicKey: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_KeyAgreePublicKey: __utils.ComponentSpec[] = [
    
];
let _cached_decoder_for_KeyAgreePublicKey: __utils.ASN1Decoder<KeyAgreePublicKey> | null = null;
let _cached_encoder_for_KeyAgreePublicKey: __utils.ASN1Encoder<KeyAgreePublicKey> | null = null;
export function _decode_KeyAgreePublicKey (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_KeyAgreePublicKey) { _cached_decoder_for_KeyAgreePublicKey = function (el: asn1.ASN1Element): KeyAgreePublicKey {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let algorithm!: AlgorithmIdentifier;
    let publicKey!: asn1.BIT_STRING;
    let macAlgorithm!: AlgorithmIdentifier;
    let kDF: asn1.OPTIONAL<AlgorithmIdentifier>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "algorithm": (_el: asn1.ASN1Element): void => { algorithm = _decode_AlgorithmIdentifier(_el); },
        "publicKey": (_el: asn1.ASN1Element): void => { publicKey = __utils._decodeBitString(_el); },
        "macAlgorithm": (_el: asn1.ASN1Element): void => { macAlgorithm = _decode_AlgorithmIdentifier(_el); },
        "kDF": (_el: asn1.ASN1Element): void => { kDF = _decode_AlgorithmIdentifier(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_KeyAgreePublicKey,
        _extension_additions_list_spec_for_KeyAgreePublicKey,
        _root_component_type_list_2_spec_for_KeyAgreePublicKey,
        undefined,
    );
    return new KeyAgreePublicKey( /* SEQUENCE_CONSTRUCTOR_CALL */
        algorithm,
        publicKey,
        macAlgorithm,
        kDF
    );
}; }
    return _cached_decoder_for_KeyAgreePublicKey(el);
}
export function _encode_KeyAgreePublicKey (value: KeyAgreePublicKey, elGetter: __utils.ASN1Encoder<KeyAgreePublicKey>) {
    if (!_cached_encoder_for_KeyAgreePublicKey) { _cached_encoder_for_KeyAgreePublicKey = function (value: KeyAgreePublicKey, elGetter: __utils.ASN1Encoder<KeyAgreePublicKey>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_AlgorithmIdentifier(value.algorithm, __utils.BER),
            /* REQUIRED   */ __utils._encodeBitString(value.publicKey, __utils.BER),
            /* REQUIRED   */ _encode_AlgorithmIdentifier(value.macAlgorithm, __utils.BER),
            /* IF_ABSENT  */ ((value.kDF === undefined) ? undefined : _encode_AlgorithmIdentifier(value.kDF, __utils.BER))
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
}; }
    return _cached_encoder_for_KeyAgreePublicKey(value, elGetter);
}


export class ValPolResponse {
    constructor (
        readonly vpResponseVersion: asn1.INTEGER,
        readonly maxCVRequestVersion: asn1.INTEGER,
        readonly maxVPRequestVersion: asn1.INTEGER,
        readonly serverConfigurationID: asn1.INTEGER,
        readonly thisUpdate: asn1.GeneralizedTime,
        readonly nextUpdate: asn1.OPTIONAL<asn1.GeneralizedTime>,
        readonly supportedChecks: CertChecks,
        readonly supportedWantBacks: WantBack,
        readonly validationPolicies: asn1.OBJECT_IDENTIFIER[],
        readonly validationAlgs: asn1.OBJECT_IDENTIFIER[],
        readonly authPolicies: AuthPolicy[],
        readonly responseTypes: ResponseTypes,
        readonly defaultPolicyValues: RespValidationPolicy,
        readonly revocationInfoTypes: RevocationInfoTypes,
        readonly signatureGeneration: AlgorithmIdentifier[],
        readonly signatureVerification: AlgorithmIdentifier[],
        readonly hashAlgorithms: asn1.OBJECT_IDENTIFIER[],
        readonly serverPublicKeys: asn1.OPTIONAL<KeyAgreePublicKey[]>,
        readonly clockSkew: asn1.OPTIONAL<asn1.INTEGER>,
        readonly requestNonce: asn1.OPTIONAL<asn1.OCTET_STRING>
    ) {}
    public static get _default_value_for_clockSkew () { return 10; }
}
export const _root_component_type_list_1_spec_for_ValPolResponse: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("vpResponseVersion", false, __utils.hasTag(asn1.ASN1TagClass.universal, 2), undefined, undefined),
    new __utils.ComponentSpec("maxCVRequestVersion", false, __utils.hasTag(asn1.ASN1TagClass.universal, 2), undefined, undefined),
    new __utils.ComponentSpec("maxVPRequestVersion", false, __utils.hasTag(asn1.ASN1TagClass.universal, 2), undefined, undefined),
    new __utils.ComponentSpec("serverConfigurationID", false, __utils.hasTag(asn1.ASN1TagClass.universal, 2), undefined, undefined),
    new __utils.ComponentSpec("thisUpdate", false, __utils.hasTag(asn1.ASN1TagClass.universal, 24), undefined, undefined),
    new __utils.ComponentSpec("nextUpdate", true, __utils.hasTag(asn1.ASN1TagClass.universal, 24), undefined, undefined),
    new __utils.ComponentSpec("supportedChecks", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined),
    new __utils.ComponentSpec("supportedWantBacks", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined),
    new __utils.ComponentSpec("validationPolicies", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined),
    new __utils.ComponentSpec("validationAlgs", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined),
    new __utils.ComponentSpec("authPolicies", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined),
    new __utils.ComponentSpec("responseTypes", false, __utils.hasTag(asn1.ASN1TagClass.universal, 10), undefined, undefined),
    new __utils.ComponentSpec("defaultPolicyValues", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined),
    new __utils.ComponentSpec("revocationInfoTypes", false, __utils.hasTag(asn1.ASN1TagClass.universal, 3), undefined, undefined),
    new __utils.ComponentSpec("signatureGeneration", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined),
    new __utils.ComponentSpec("signatureVerification", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined),
    new __utils.ComponentSpec("hashAlgorithms", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined),
    new __utils.ComponentSpec("serverPublicKeys", true, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined),
    new __utils.ComponentSpec("clockSkew", true, __utils.hasTag(asn1.ASN1TagClass.universal, 2), undefined, undefined),
    new __utils.ComponentSpec("requestNonce", true, __utils.hasTag(asn1.ASN1TagClass.universal, 4), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_ValPolResponse: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_ValPolResponse: __utils.ComponentSpec[] = [
    
];
let _cached_decoder_for_ValPolResponse: __utils.ASN1Decoder<ValPolResponse> | null = null;
let _cached_encoder_for_ValPolResponse: __utils.ASN1Encoder<ValPolResponse> | null = null;
export function _decode_ValPolResponse (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ValPolResponse) { _cached_decoder_for_ValPolResponse = function (el: asn1.ASN1Element): ValPolResponse {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let vpResponseVersion!: asn1.INTEGER;
    let maxCVRequestVersion!: asn1.INTEGER;
    let maxVPRequestVersion!: asn1.INTEGER;
    let serverConfigurationID!: asn1.INTEGER;
    let thisUpdate!: asn1.GeneralizedTime;
    let nextUpdate: asn1.OPTIONAL<asn1.GeneralizedTime>;
    let supportedChecks!: CertChecks;
    let supportedWantBacks!: WantBack;
    let validationPolicies!: asn1.OBJECT_IDENTIFIER[];
    let validationAlgs!: asn1.OBJECT_IDENTIFIER[];
    let authPolicies!: AuthPolicy[];
    let responseTypes!: ResponseTypes;
    let defaultPolicyValues!: RespValidationPolicy;
    let revocationInfoTypes!: RevocationInfoTypes;
    let signatureGeneration!: AlgorithmIdentifier[];
    let signatureVerification!: AlgorithmIdentifier[];
    let hashAlgorithms!: asn1.OBJECT_IDENTIFIER[];
    let serverPublicKeys: asn1.OPTIONAL<KeyAgreePublicKey[]>;
    let clockSkew: asn1.OPTIONAL<asn1.INTEGER> = ValPolResponse._default_value_for_clockSkew;
    let requestNonce: asn1.OPTIONAL<asn1.OCTET_STRING>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "vpResponseVersion": (_el: asn1.ASN1Element): void => { vpResponseVersion = __utils._decodeInteger(_el); },
        "maxCVRequestVersion": (_el: asn1.ASN1Element): void => { maxCVRequestVersion = __utils._decodeInteger(_el); },
        "maxVPRequestVersion": (_el: asn1.ASN1Element): void => { maxVPRequestVersion = __utils._decodeInteger(_el); },
        "serverConfigurationID": (_el: asn1.ASN1Element): void => { serverConfigurationID = __utils._decodeInteger(_el); },
        "thisUpdate": (_el: asn1.ASN1Element): void => { thisUpdate = __utils._decodeGeneralizedTime(_el); },
        "nextUpdate": (_el: asn1.ASN1Element): void => { nextUpdate = __utils._decodeGeneralizedTime(_el); },
        "supportedChecks": (_el: asn1.ASN1Element): void => { supportedChecks = _decode_CertChecks(_el); },
        "supportedWantBacks": (_el: asn1.ASN1Element): void => { supportedWantBacks = _decode_WantBack(_el); },
        "validationPolicies": (_el: asn1.ASN1Element): void => { validationPolicies = __utils._decodeSequenceOf<asn1.OBJECT_IDENTIFIER>(() => __utils._decodeObjectIdentifier)(_el); },
        "validationAlgs": (_el: asn1.ASN1Element): void => { validationAlgs = __utils._decodeSequenceOf<asn1.OBJECT_IDENTIFIER>(() => __utils._decodeObjectIdentifier)(_el); },
        "authPolicies": (_el: asn1.ASN1Element): void => { authPolicies = __utils._decodeSequenceOf<AuthPolicy>(() => _decode_AuthPolicy)(_el); },
        "responseTypes": (_el: asn1.ASN1Element): void => { responseTypes = _decode_ResponseTypes(_el); },
        "defaultPolicyValues": (_el: asn1.ASN1Element): void => { defaultPolicyValues = _decode_RespValidationPolicy(_el); },
        "revocationInfoTypes": (_el: asn1.ASN1Element): void => { revocationInfoTypes = _decode_RevocationInfoTypes(_el); },
        "signatureGeneration": (_el: asn1.ASN1Element): void => { signatureGeneration = __utils._decodeSequenceOf<AlgorithmIdentifier>(() => _decode_AlgorithmIdentifier)(_el); },
        "signatureVerification": (_el: asn1.ASN1Element): void => { signatureVerification = __utils._decodeSequenceOf<AlgorithmIdentifier>(() => _decode_AlgorithmIdentifier)(_el); },
        "hashAlgorithms": (_el: asn1.ASN1Element): void => { hashAlgorithms = __utils._decodeSequenceOf<asn1.OBJECT_IDENTIFIER>(() => __utils._decodeObjectIdentifier)(_el); },
        "serverPublicKeys": (_el: asn1.ASN1Element): void => { serverPublicKeys = __utils._decodeSequenceOf<KeyAgreePublicKey>(() => _decode_KeyAgreePublicKey)(_el); },
        "clockSkew": (_el: asn1.ASN1Element): void => { clockSkew = __utils._decodeInteger(_el); },
        "requestNonce": (_el: asn1.ASN1Element): void => { requestNonce = __utils._decodeOctetString(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ValPolResponse,
        _extension_additions_list_spec_for_ValPolResponse,
        _root_component_type_list_2_spec_for_ValPolResponse,
        undefined,
    );
    return new ValPolResponse( /* SEQUENCE_CONSTRUCTOR_CALL */
        vpResponseVersion,
        maxCVRequestVersion,
        maxVPRequestVersion,
        serverConfigurationID,
        thisUpdate,
        nextUpdate,
        supportedChecks,
        supportedWantBacks,
        validationPolicies,
        validationAlgs,
        authPolicies,
        responseTypes,
        defaultPolicyValues,
        revocationInfoTypes,
        signatureGeneration,
        signatureVerification,
        hashAlgorithms,
        serverPublicKeys,
        clockSkew,
        requestNonce
    );
}; }
    return _cached_decoder_for_ValPolResponse(el);
}
export function _encode_ValPolResponse (value: ValPolResponse, elGetter: __utils.ASN1Encoder<ValPolResponse>) {
    if (!_cached_encoder_for_ValPolResponse) { _cached_encoder_for_ValPolResponse = function (value: ValPolResponse, elGetter: __utils.ASN1Encoder<ValPolResponse>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ __utils._encodeInteger(value.vpResponseVersion, __utils.BER),
            /* REQUIRED   */ __utils._encodeInteger(value.maxCVRequestVersion, __utils.BER),
            /* REQUIRED   */ __utils._encodeInteger(value.maxVPRequestVersion, __utils.BER),
            /* REQUIRED   */ __utils._encodeInteger(value.serverConfigurationID, __utils.BER),
            /* REQUIRED   */ __utils._encodeGeneralizedTime(value.thisUpdate, __utils.BER),
            /* IF_ABSENT  */ ((value.nextUpdate === undefined) ? undefined : __utils._encodeGeneralizedTime(value.nextUpdate, __utils.BER)),
            /* REQUIRED   */ _encode_CertChecks(value.supportedChecks, __utils.BER),
            /* REQUIRED   */ _encode_WantBack(value.supportedWantBacks, __utils.BER),
            /* REQUIRED   */ __utils._encodeSequenceOf<asn1.OBJECT_IDENTIFIER>(() => __utils._encodeObjectIdentifier, __utils.BER)(value.validationPolicies, __utils.BER),
            /* REQUIRED   */ __utils._encodeSequenceOf<asn1.OBJECT_IDENTIFIER>(() => __utils._encodeObjectIdentifier, __utils.BER)(value.validationAlgs, __utils.BER),
            /* REQUIRED   */ __utils._encodeSequenceOf<AuthPolicy>(() => _encode_AuthPolicy, __utils.BER)(value.authPolicies, __utils.BER),
            /* REQUIRED   */ _encode_ResponseTypes(value.responseTypes, __utils.BER),
            /* REQUIRED   */ _encode_RespValidationPolicy(value.defaultPolicyValues, __utils.BER),
            /* REQUIRED   */ _encode_RevocationInfoTypes(value.revocationInfoTypes, __utils.BER),
            /* REQUIRED   */ __utils._encodeSequenceOf<AlgorithmIdentifier>(() => _encode_AlgorithmIdentifier, __utils.BER)(value.signatureGeneration, __utils.BER),
            /* REQUIRED   */ __utils._encodeSequenceOf<AlgorithmIdentifier>(() => _encode_AlgorithmIdentifier, __utils.BER)(value.signatureVerification, __utils.BER),
            /* REQUIRED   */ __utils._encodeSequenceOf<asn1.OBJECT_IDENTIFIER>(() => __utils._encodeObjectIdentifier, __utils.BER)(value.hashAlgorithms, __utils.BER),
            /* IF_ABSENT  */ ((value.serverPublicKeys === undefined) ? undefined : __utils._encodeSequenceOf<KeyAgreePublicKey>(() => _encode_KeyAgreePublicKey, __utils.BER)(value.serverPublicKeys, __utils.BER)),
            /* IF_DEFAULT */ (value.clockSkew === undefined || __utils.deepEq(value.clockSkew, ValPolResponse._default_value_for_clockSkew) ? undefined : __utils._encodeInteger(value.clockSkew, __utils.BER)),
            /* IF_ABSENT  */ ((value.requestNonce === undefined) ? undefined : __utils._encodeOctetString(value.requestNonce, __utils.BER))
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
}; }
    return _cached_encoder_for_ValPolResponse(value, elGetter);
}


export const id_stc: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    /* iso */ 1,
    /* identified-organization */ 3,
    /* dod */ 6,
    /* internet */ 1,
    /* security */ 5,
    /* mechanisms */ 5,
    /* pkix */ 7,
    17,
]);

export type CertCheckSet = asn1.OBJECT_IDENTIFIER; /* VALUE_SET_ASSIGNMENT */

export const id_stc_build_pkc_path: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    1,
], id_stc);

export const id_stc_build_valid_pkc_path: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    2,
], id_stc);

export const id_stc_build_status_checked_pkc_path: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    3,
], id_stc);

export type ACertCheckSet = asn1.OBJECT_IDENTIFIER; /* VALUE_SET_ASSIGNMENT */

export const id_stc_build_aa_path: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    4,
], id_stc);

export const id_stc_build_valid_aa_path: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    5,
], id_stc);

export const id_stc_build_status_checked_aa_path: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    6,
], id_stc);

export const id_stc_status_check_ac_and_build_status_checked_aa_path: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    7,
], id_stc);

export const id_swb: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    /* iso */ 1,
    /* identified-organization */ 3,
    /* dod */ 6,
    /* internet */ 1,
    /* security */ 5,
    /* mechanisms */ 5,
    /* pkix */ 7,
    18,
]);

// TODO: ObjectSetAssignment: WantBackSet

// TODO: ObjectSetAssignment: ACertWantBackSet

// TODO: ObjectSetAssignment: AnyWantBackSet

// TODO: ObjectClassAssignment: WANT-BACK

// TODO: ObjectAssignment: swb-pkc-best-cert-path

export const id_swb_pkc_best_cert_path: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    1,
], id_swb);

// TODO: ObjectAssignment: swb-pkc-revocation-info

export const id_swb_pkc_revocation_info: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    2,
], id_swb);

// TODO: ObjectAssignment: swb-pkc-public-key-info

export const id_swb_pkc_public_key_info: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    4,
], id_swb);

// TODO: ObjectAssignment: swb-aa-cert-path

export const id_swb_aa_cert_path: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    5,
], id_swb);

// TODO: ObjectAssignment: swb-aa-revocation-info

export const id_swb_aa_revocation_info: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    6,
], id_swb);

// TODO: ObjectAssignment: swb-ac-revocation-info

export const id_swb_ac_revocation_info: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    7,
], id_swb);

// TODO: ObjectAssignment: swb-relayed-responses

export const id_swb_relayed_responses: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    9,
], id_swb);

// TODO: ObjectAssignment: swb-pkc-all-cert-paths

export const id_swb_pkc_all_cert_paths: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    12,
], id_swb);

// TODO: ObjectAssignment: swb-pkc-ee-revocation-info

export const id_swb_pkc_ee_revocation_info: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    13,
], id_swb);

// TODO: ObjectAssignment: swb-pkc-CAs-revocation-info

export const id_swb_pkc_CAs_revocation_info: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    14,
], id_swb);

// TODO: ObjectAssignment: swb-pkc-cert

export const id_swb_pkc_cert: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    10,
], id_swb);

// TODO: ObjectAssignment: swb-ac-cert

export const id_swb_ac_cert: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    11,
], id_swb);

export const id_svp: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    /* iso */ 1,
    /* identified-organization */ 3,
    /* dod */ 6,
    /* internet */ 1,
    /* security */ 5,
    /* mechanisms */ 5,
    /* pkix */ 7,
    19,
]);

// TODO: ObjectClassAssignment: POLICY

// TODO: ObjectAssignment: svp-defaultValPolicy

export const id_svp_defaultValPolicy: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    1,
], id_svp);

// TODO: ObjectAssignment: svp-basicValAlg

export const id_svp_basicValAlg: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    3,
], id_svp);

export const id_bvae: asn1.OBJECT_IDENTIFIER = id_svp_basicValAlg;

export type BasicValidationErrorSet = asn1.OBJECT_IDENTIFIER; /* VALUE_SET_ASSIGNMENT */

export const id_bvae_expired: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    1,
], id_bvae);

export const id_bvae_not_yet_valid: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    2,
], id_bvae);

export const id_bvae_wrongTrustAnchor: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    3,
], id_bvae);

export const id_bvae_noValidCertPath: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    4,
], id_bvae);

export const id_bvae_revoked: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    5,
], id_bvae);

export const id_bvae_invalidKeyPurpose: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    9,
], id_bvae);

export const id_bvae_invalidKeyUsage: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    10,
], id_bvae);

export const id_bvae_invalidCertPolicy: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    11,
], id_bvae);

// TODO: ObjectAssignment: svp-nameValAlg

export type NameCompAlgSet = asn1.OBJECT_IDENTIFIER; /* VALUE_SET_ASSIGNMENT */

export const id_nva_dnCompAlg: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    4,
], id_svp);

export const id_svp_nameValAlg: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    2,
], id_svp);

export const id_nvae: asn1.OBJECT_IDENTIFIER = id_svp_nameValAlg;

export type NameValidationErrorSet = asn1.OBJECT_IDENTIFIER; /* VALUE_SET_ASSIGNMENT */

export const id_nvae_name_mismatch: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    1,
], id_nvae);

export const id_nvae_no_name: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    2,
], id_nvae);

export const id_nvae_unknown_alg: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    3,
], id_nvae);

export const id_nvae_bad_name: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    4,
], id_nvae);

export const id_nvae_bad_name_type: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    5,
], id_nvae);

export const id_nvae_mixed_names: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    6,
], id_nvae);

export const id_kp: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    /* iso */ 1,
    /* identified-organization */ 3,
    /* dod */ 6,
    /* internet */ 1,
    /* security */ 5,
    /* mechanisms */ 5,
    /* pkix */ 7,
    3,
]);

export type SvcpExtKeyUsageSet = asn1.OBJECT_IDENTIFIER; /* VALUE_SET_ASSIGNMENT */

export const id_kp_scvpServer: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    15,
], id_kp);

export const id_kp_scvpClient: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    16,
], id_kp);

/* END_MODULE SCVP-2009 */

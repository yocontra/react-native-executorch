"use strict";

/**
 * Common types used across the React Native Executorch package.
 */

/**
 * Represents a source of a resource, which can be a string (e.g., URL or file path), a number (e.g., resource ID), or an object (e.g., binary data).
 *
 * @category Types
 */

/**
 * Enum representing the scalar types of tensors.
 *
 * @category Types
 */
export let ScalarType = /*#__PURE__*/function (ScalarType) {
  /**
   * Byte type (8-bit unsigned integer).
   */
  ScalarType[ScalarType["BYTE"] = 0] = "BYTE";
  /**
   * Character type (8-bit signed integer).
   */
  ScalarType[ScalarType["CHAR"] = 1] = "CHAR";
  /**
   * Short integer type (16-bit signed integer).
   */
  ScalarType[ScalarType["SHORT"] = 2] = "SHORT";
  /**
   * Integer type (32-bit signed integer).
   */
  ScalarType[ScalarType["INT"] = 3] = "INT";
  /**
   * Long integer type (64-bit signed integer).
   */
  ScalarType[ScalarType["LONG"] = 4] = "LONG";
  /**
   * Half-precision floating point type (16-bit).
   */
  ScalarType[ScalarType["HALF"] = 5] = "HALF";
  /**
   * Single-precision floating point type (32-bit).
   */
  ScalarType[ScalarType["FLOAT"] = 6] = "FLOAT";
  /**
   * Double-precision floating point type (64-bit).
   */
  ScalarType[ScalarType["DOUBLE"] = 7] = "DOUBLE";
  /**
   * Boolean type.
   */
  ScalarType[ScalarType["BOOL"] = 11] = "BOOL";
  /**
   * Quantized 8-bit signed integer type.
   */
  ScalarType[ScalarType["QINT8"] = 12] = "QINT8";
  /**
   * Quantized 8-bit unsigned integer type.
   */
  ScalarType[ScalarType["QUINT8"] = 13] = "QUINT8";
  /**
   * Quantized 32-bit signed integer type.
   */
  ScalarType[ScalarType["QINT32"] = 14] = "QINT32";
  /**
   * Packed Quantized Unsigned 4-bit Integers type (2 number in 1 byte).
   */
  ScalarType[ScalarType["QUINT4X2"] = 16] = "QUINT4X2";
  /**
   * Packed Quantized Unsigned 2-bit Integer type (4 numbers in 1 byte).
   */
  ScalarType[ScalarType["QUINT2X4"] = 17] = "QUINT2X4";
  /**
   * Raw Bits type.
   */
  ScalarType[ScalarType["BITS16"] = 22] = "BITS16";
  /**
   * Quantized 8-bit floating point type: Sign bit, 5 Exponent bits, 2 Mantissa bits.
   */
  ScalarType[ScalarType["FLOAT8E5M2"] = 23] = "FLOAT8E5M2";
  /**
   * Quantized 8-bit floating point type: Sign bit, 4 Exponent bits, 3 Mantissa bits.
   */
  ScalarType[ScalarType["FLOAT8E4M3FN"] = 24] = "FLOAT8E4M3FN";
  /**
   * Quantized 8-bit floating point type with No Unsigned Zero (NUZ): Sign bit, 5 Exponent bits, 2 Mantissa bits.
   */
  ScalarType[ScalarType["FLOAT8E5M2FNUZ"] = 25] = "FLOAT8E5M2FNUZ";
  /**
   * Quantized 8-bit floating point type with No Unsigned Zero (NUZ): Sign bit, 4 Exponent bits, 3 Mantissa bits.
   */
  ScalarType[ScalarType["FLOAT8E4M3FNUZ"] = 26] = "FLOAT8E4M3FNUZ";
  /**
   * Unsigned 16-bit integer type.
   */
  ScalarType[ScalarType["UINT16"] = 27] = "UINT16";
  /**
   * Unsigned 32-bit integer type.
   */
  ScalarType[ScalarType["UINT32"] = 28] = "UINT32";
  /**
   * Unsigned 64-bit integer type.
   */
  ScalarType[ScalarType["UINT64"] = 29] = "UINT64";
  return ScalarType;
}({});

/**
 * Represents the data buffer of a tensor, which can be one of several typed array formats.
 *
 * @category Types
 */

/**
 * Represents a pointer to a tensor, including its data buffer, size dimensions, and scalar type.
 *
 * @category Types
 * @property {TensorBuffer} dataPtr - The data buffer of the tensor.
 * @property {number[]} sizes - An array representing the size of each dimension of the tensor.
 * @property {ScalarType} scalarType - The scalar type of the tensor, as defined in the `ScalarType` enum.
 */

/**
 * A readonly record mapping string keys to numeric or string values.
 * Used to represent enum-like label maps for models.
 *
 * @category Types
 */

/**
 * A readonly triple of values, typically used for per-channel normalization parameters.
 *
 * @category Types
 */

/**
 * Represents raw pixel data in RGB format for vision models.
 *
 * This type extends TensorPtr with constraints specific to image data:
 * - dataPtr must be Uint8Array (8-bit unsigned integers)
 * - scalarType is always BYTE (ScalarType.BYTE)
 * - sizes represents [height, width, channels] where channels must be 3 (RGB)
 *
 * @category Types
 * @example
 * ```typescript
 * const pixelData: PixelData = {
 *   dataPtr: new Uint8Array(width * height * 3), // RGB pixel data
 *   sizes: [height, width, 3], // [height, width, channels]
 *   scalarType: ScalarType.BYTE
 * };
 * ```
 */

/**
 * Frame data for vision model processing.
 */
//# sourceMappingURL=common.js.map
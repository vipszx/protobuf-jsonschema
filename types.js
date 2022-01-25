const MAX_SAFE_INTEGER = Math.pow(2, 53) - 1;
const MIN_SAFE_INTEGER = -MAX_SAFE_INTEGER;

module.exports = {
  bytes: {
    type: 'string',
    primitive: 'bytes',
  },
  string: {
    type: 'string',
    primitive: 'string',
  },
  bool: {
    type: 'boolean',
    primitive: 'boolean',
  },
  int32: {
    type: 'integer',
    minimum: -0x80000000,
    maximum: 0x7fffffff,
    primitive: 'int32',
  },
  sint32: {
    type: 'integer',
    minimum: -0x80000000,
    maximum: 0x7fffffff,
    primitive: 'sint32',
  },
  uint32: {
    type: 'integer',
    minimum: 0,
    maximum: 0xffffffff,
    primitive: 'uint32',
  },
  int64: {
    type: 'integer',
    minimum: MIN_SAFE_INTEGER,
    maximum: MAX_SAFE_INTEGER,
    primitive: 'int64',
  },
  sint64: {
    type: 'integer',
    minimum: MIN_SAFE_INTEGER,
    maximum: MAX_SAFE_INTEGER,
    primitive: 'sint64',
  },
  uint64: {
    type: 'integer',
    minimum: 0,
    maximum: MAX_SAFE_INTEGER,
    primitive: 'uint64',
  },
  fixed32: {
    type: 'number',
    primitive: 'fixed32',
  },
  fixed64: {
    type: 'number',
    primitive: 'fixed64',
  },
  sfixed32: {
    type: 'number',
    primitive: 'sfixed32',
  },
  sfixed64: {
    type: 'number',
    primitive: 'sfixed64',
  },
  float: {
    type: 'number',
    primitive: 'float',
  },
  double: {
    type: 'number',
    primitive: 'double',
  }
};
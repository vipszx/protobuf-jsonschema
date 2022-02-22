const MAX_SAFE_INTEGER = Math.pow(2, 53) - 1;
const MIN_SAFE_INTEGER = -MAX_SAFE_INTEGER;

module.exports = {
  bytes: {
    type: 'string',
    primitive: 'bytes',
    jstype: 'string',
  },
  string: {
    type: 'string',
    primitive: 'string',
    jstype: 'string',
  },
  bool: {
    type: 'boolean',
    primitive: 'bool',
    jstype: 'boolean',
  },
  int32: {
    type: 'integer',
    minimum: -0x80000000,
    maximum: 0x7fffffff,
    primitive: 'int32',
    jstype: 'number',
  },
  sint32: {
    type: 'integer',
    minimum: -0x80000000,
    maximum: 0x7fffffff,
    primitive: 'sint32',
    jstype: 'number',
  },
  uint32: {
    type: 'integer',
    minimum: 0,
    maximum: 0xffffffff,
    primitive: 'uint32',
    jstype: 'number',
  },
  int64: {
    type: 'integer',
    minimum: MIN_SAFE_INTEGER,
    maximum: MAX_SAFE_INTEGER,
    primitive: 'int64',
    jstype: 'number',
  },
  sint64: {
    type: 'integer',
    minimum: MIN_SAFE_INTEGER,
    maximum: MAX_SAFE_INTEGER,
    primitive: 'sint64',
    jstype: 'number',
  },
  uint64: {
    type: 'integer',
    minimum: 0,
    maximum: MAX_SAFE_INTEGER,
    primitive: 'uint64',
    jstype: 'number',
  },
  fixed32: {
    type: 'number',
    primitive: 'fixed32',
    jstype: 'number',
  },
  fixed64: {
    type: 'number',
    primitive: 'fixed64',
    jstype: 'number',
  },
  sfixed32: {
    type: 'number',
    primitive: 'sfixed32',
    jstype: 'number',
  },
  sfixed64: {
    type: 'number',
    primitive: 'sfixed64',
    jstype: 'number',
  },
  float: {
    type: 'number',
    primitive: 'float',
    jstype: 'number',
  },
  double: {
    type: 'number',
    primitive: 'double',
    jstype: 'number',
  }
};
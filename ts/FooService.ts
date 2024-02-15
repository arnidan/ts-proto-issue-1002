/* eslint-disable */
import type { CallContext, CallOptions } from "nice-grpc-common";
import _m0 from "protobufjs/minimal.js";

export interface FooRequest {
}

export interface Foo {
  id: number;
}

function createBaseFooRequest(): FooRequest {
  return {};
}

export const FooRequest = {
  encode(_: FooRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FooRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFooRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): FooRequest {
    return {};
  },

  toJSON(_: FooRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<FooRequest>): FooRequest {
    return FooRequest.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<FooRequest>): FooRequest {
    const message = createBaseFooRequest();
    return message;
  },
};

function createBaseFoo(): Foo {
  return { id: 0 };
}

export const Foo = {
  encode(message: Foo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Foo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFoo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Foo {
    return { id: isSet(object.id) ? globalThis.Number(object.id) : 0 };
  },

  toJSON(message: Foo): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    return obj;
  },

  create(base?: DeepPartial<Foo>): Foo {
    return Foo.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Foo>): Foo {
    const message = createBaseFoo();
    message.id = object.id ?? 0;
    return message;
  },
};

export interface FooServiceImplementation<CallContextExt = {}> {
  streamFoo(request: FooRequest, context: CallContext & CallContextExt): ServerStreamingMethodResult<DeepPartial<Foo>>;
}

export interface FooServiceClient<CallOptionsExt = {}> {
  streamFoo(request: DeepPartial<FooRequest>, options?: CallOptions & CallOptionsExt): AsyncIterable<Foo>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

export type ServerStreamingMethodResult<Response> = { [Symbol.asyncIterator](): AsyncIterator<Response, void> };

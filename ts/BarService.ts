/* eslint-disable */
import type { CallContext, CallOptions } from "nice-grpc-common";
import _m0 from "protobufjs/minimal.js";

export interface BarRequest {
}

export interface Bar {
  id: number;
}

function createBaseBarRequest(): BarRequest {
  return {};
}

export const BarRequest = {
  encode(_: BarRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BarRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBarRequest();
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

  fromJSON(_: any): BarRequest {
    return {};
  },

  toJSON(_: BarRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<BarRequest>): BarRequest {
    return BarRequest.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<BarRequest>): BarRequest {
    const message = createBaseBarRequest();
    return message;
  },
};

function createBaseBar(): Bar {
  return { id: 0 };
}

export const Bar = {
  encode(message: Bar, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Bar {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBar();
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

  fromJSON(object: any): Bar {
    return { id: isSet(object.id) ? globalThis.Number(object.id) : 0 };
  },

  toJSON(message: Bar): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    return obj;
  },

  create(base?: DeepPartial<Bar>): Bar {
    return Bar.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Bar>): Bar {
    const message = createBaseBar();
    message.id = object.id ?? 0;
    return message;
  },
};

export interface BarServiceImplementation<CallContextExt = {}> {
  streamBar(request: BarRequest, context: CallContext & CallContextExt): ServerStreamingMethodResult<DeepPartial<Bar>>;
}

export interface BarServiceClient<CallOptionsExt = {}> {
  streamBar(request: DeepPartial<BarRequest>, options?: CallOptions & CallOptionsExt): AsyncIterable<Bar>;
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

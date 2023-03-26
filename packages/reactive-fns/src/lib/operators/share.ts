// @ts-ignore
import untypedShare from 'callbag-share'
import {Source} from "callbag";

export const share: <T>(source: Source<T>) => Source<T> = untypedShare;
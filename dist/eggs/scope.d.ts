import { Callback } from "../harmaja";
import { Dispatcher } from "./dispatcher";
export declare type Scope = (onIn: Callback, onOut: Callback, dispatcher: Dispatcher<any>) => void;
export interface MutableScope {
    apply: Scope;
    start(): void;
    end(): void;
}
export declare const GlobalScope: Scope;
export declare function scope(): MutableScope;
/**
 *  Subscribe to source when there are observers. Use with care!
 **/
export declare const autoScope: Scope;
export declare const beforeScope: {};
export declare const afterScope: {};
export declare type OutOfScope = (typeof beforeScope) | (typeof afterScope);
export declare function checkScope<V>(thing: any, value: V | OutOfScope): V;

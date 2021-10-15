import { RefObject } from 'react';
export default function useOnOutClick<TTargetElement extends HTMLElement, TIgnoreElement extends HTMLElement>(onOutClick: ((e: globalThis.MouseEvent) => void) | (() => void)): [RefObject<TTargetElement>, RefObject<TIgnoreElement>];

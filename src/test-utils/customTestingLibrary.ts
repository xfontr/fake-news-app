import {
  render,
  renderHook,
  RenderHookOptions,
  RenderOptions,
} from "@testing-library/react";
import { JSXElementConstructor, ReactElement } from "react";
import { store } from "../store/store";
import Wrapper from "./Wrapper";

const customRender = (
  view: ReactElement<unknown, string | JSXElementConstructor<unknown>>,
  preloadedStore = store,
  options?: RenderOptions
) => {
  render(view, { wrapper: Wrapper, ...{ ...options, preloadedStore } });
};

const customRenderHook = (
  hook: () => any,
  ...options: RenderHookOptions<unknown>[]
) => renderHook(hook, { wrapper: Wrapper, ...options });

export * from "@testing-library/react";

export { customRender as render };
export { customRenderHook as renderHook };

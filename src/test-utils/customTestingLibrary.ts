import {
  render,
  renderHook,
  RenderHookOptions,
  RenderOptions,
} from "@testing-library/react";
import { JSXElementConstructor, ReactElement } from "react";
import Wrapper from "./Wrapper";

const customRender = (
  view: ReactElement<unknown, string | JSXElementConstructor<unknown>>,
  options?: RenderOptions
) => {
  render(view, { wrapper: Wrapper, ...options });
};

const customRenderHook = (
  hook: () => any,
  ...options: RenderHookOptions<unknown>[]
) => renderHook(hook, { wrapper: Wrapper, ...options });

export * from "@testing-library/react";

export { customRender as render };
export { customRenderHook as renderHook };

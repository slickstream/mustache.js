export type EscapeFunction = (value: any) => string;
export type PartialsOrLookupFn = Record<string, string> | PartialLookupFn;
export type PartialLookupFn = (partialName: string) => string | undefined;
export type OpeningAndClosingTags = [string, string];
export interface RenderOptions {
  escape?: EscapeFunction;
  tags?: OpeningAndClosingTags;
}

export declare class MustacheContext {
  view: any;
  parent: MustacheContext | undefined;
  constructor(view: any, parentContext?: MustacheContext);
  push(view: any): MustacheContext;
  lookup(name: string): any;
}

export default {
  render: (
    template: string,
    view: any | MustacheContext,
    partials?: PartialsOrLookupFn,
    tagsOrOptions?: OpeningAndClosingTags | RenderOptions,
  ) => string,

  escape: EscapeFunction
};
// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: x53YSqYu9UQKZv7sZYfY6w
// Component: dZsVy1jjoywq

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

import {
  usePlasmicDataConfig,
  executePlasmicDataOp,
  usePlasmicDataOp
} from "@plasmicapp/react-web/lib/data-sources";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import DetailPage from "../../DetailPage"; // plasmic-import: fqf1kH04rK/component
import { Fetcher } from "@plasmicapp/react-web/lib/data-sources"; // plasmic-import: HNQV41OA8KRXT/codeComponent

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_blank_project.module.css"; // plasmic-import: x53YSqYu9UQKZv7sZYfY6w/projectcss
import sty from "./PlasmicHomepage.module.css"; // plasmic-import: dZsVy1jjoywq/css

export type PlasmicHomepage__VariantMembers = {};
export type PlasmicHomepage__VariantsArgs = {};
type VariantPropType = keyof PlasmicHomepage__VariantsArgs;
export const PlasmicHomepage__VariantProps = new Array<VariantPropType>();

export type PlasmicHomepage__ArgsType = {};
type ArgPropType = keyof PlasmicHomepage__ArgsType;
export const PlasmicHomepage__ArgProps = new Array<ArgPropType>();

export type PlasmicHomepage__OverridesType = {
  root?: p.Flex<"div">;
  home?: p.Flex<"div">;
  section?: p.Flex<"section">;
  card?: p.Flex<"div">;
  img?: p.Flex<typeof p.PlasmicImg>;
  detailPage?: p.Flex<typeof DetailPage>;
};

export interface DefaultHomepageProps {}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicHomepage__RenderFunc(props: {
  variants: PlasmicHomepage__VariantsArgs;
  args: PlasmicHomepage__ArgsType;
  overrides: PlasmicHomepage__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const __nextRouter = useNextRouter();

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};

  const [$queries, setDollarQueries] = React.useState({});

  const stateSpecs = React.useMemo(
    () => [
      {
        path: "detailPage.title",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          (() => {
            try {
              return $state.detail.title;
            } catch (e) {
              if (e instanceof TypeError) {
                return undefined;
              }
              throw e;
            }
          })()
      },
      {
        path: "detailPage.subtitle",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          (() => {
            try {
              return $state.detail.subtitle;
            } catch (e) {
              if (e instanceof TypeError) {
                return undefined;
              }
              throw e;
            }
          })()
      },
      {
        path: "detailPage.img",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          (() => {
            try {
              return $state.detail.image;
            } catch (e) {
              if (e instanceof TypeError) {
                return undefined;
              }
              throw e;
            }
          })()
      },
      {
        path: "detailPage.bodyText",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          "blah blah blah" as const
      },
      {
        path: "detail",
        type: "private",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) => ({
          title: "123",
          subtitle: "",
          image: "",
          content: [
            {
              type: "text",
              value:
                "UI design is all about creating intuitive and user-friendly interfaces that make it easy for users to accomplish their goals. Here are 10 tips to help you get started with UI design."
            },
            {
              type: "image",
              value:
                "https://assets.materialup.com/uploads/6e3acf77-0620-49f8-a273-4a4edaef8c03/attachment.png"
            }
          ]
        })
      },
      {
        path: "currentPage",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => "home" as const
      },
      {
        path: "detailPage.contents",
        type: "private",
        variableType: "array",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          (() => {
            try {
              return $state.detail.content;
            } catch (e) {
              if (e instanceof TypeError) {
                return undefined;
              }
              throw e;
            }
          })()
      }
    ],
    [$props, $ctx]
  );
  const $state = p.useDollarState(stateSpecs, { $props, $ctx, $queries });

  const new$Queries = {
    query: usePlasmicDataOp(
      (() => {
        try {
          return {
            sourceId: "qKk8EwavUhW2gabLUzvAiD",
            opId: "2b59f41a-5148-4a10-8949-288309e5d53b",
            userArgs: {},
            cacheKey: "plasmic.$.hs5mF_MzR.$.",
            invalidatedKeys: null,
            roleId: null
          };
        } catch (e) {
          if (e instanceof TypeError) {
            return undefined;
          } else {
            throw e;
          }
        }
      })()
    )
  };
  if (Object.keys(new$Queries).some(k => new$Queries[k] !== $queries[k])) {
    setDollarQueries(new$Queries);
  }

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            sty.root
          )}
        >
          {(() => {
            try {
              return $state.currentPage === "home";
            } catch (e) {
              if (e instanceof TypeError) {
                return true;
              }
              throw e;
            }
          })() ? (
            <div
              data-plasmic-name={"home"}
              data-plasmic-override={overrides.home}
              className={classNames(projectcss.all, sty.home)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__tRqtX
                )}
              >
                {(() => {
                  try {
                    return JSON.stringify($state.detail, null, "\t");
                  } catch (e) {
                    if (e instanceof TypeError) {
                      return "123123";
                    }
                    throw e;
                  }
                })()}
              </div>
              <section
                data-plasmic-name={"section"}
                data-plasmic-override={overrides.section}
                className={classNames(projectcss.all, sty.section)}
              >
                {true ? (
                  <div
                    className={classNames(projectcss.all, sty.freeBox__sCjIg)}
                  >
                    <div
                      className={classNames(projectcss.all, sty.freeBox__eqLo)}
                    >
                      {(
                        (() => {
                          try {
                            return $queries.query.data;
                          } catch (e) {
                            if (e instanceof TypeError) {
                              return [];
                            }
                            throw e;
                          }
                        })() ?? []
                      ).map((currentItem, currentIndex) => (
                        <div
                          data-plasmic-name={"card"}
                          data-plasmic-override={overrides.card}
                          className={classNames(projectcss.all, sty.card)}
                          key={currentIndex}
                          onClick={async event => {
                            const $steps = {};
                            $steps["updateDetail"] = true
                              ? (() => {
                                  const actionArgs = {
                                    variable: __wrapUserFunction(
                                      {
                                        type: "InteractionArgLoc",
                                        actionName: "updateVariable",
                                        interactionUuid: "_48Nze8yM",
                                        componentUuid: "dZsVy1jjoywq",
                                        argName: "variable"
                                      },
                                      () => ({
                                        objRoot: $state,
                                        variablePath: ["detail"]
                                      })
                                    ),
                                    operation: __wrapUserFunction(
                                      {
                                        type: "InteractionArgLoc",
                                        actionName: "updateVariable",
                                        interactionUuid: "_48Nze8yM",
                                        componentUuid: "dZsVy1jjoywq",
                                        argName: "operation"
                                      },
                                      () => 0
                                    ),
                                    value: __wrapUserFunction(
                                      {
                                        type: "InteractionArgLoc",
                                        actionName: "updateVariable",
                                        interactionUuid: "_48Nze8yM",
                                        componentUuid: "dZsVy1jjoywq",
                                        argName: "value"
                                      },
                                      () =>
                                        [
                                          {
                                            title: currentItem.title,
                                            subtitle: currentItem.subtitle,
                                            image: currentItem.image,
                                            content: JSON.parse(
                                              currentItem.content
                                            )
                                          }
                                        ][0]
                                    )
                                  };
                                  return __wrapUserFunction(
                                    {
                                      type: "InteractionLoc",
                                      actionName: "updateVariable",
                                      interactionUuid: "_48Nze8yM",
                                      componentUuid: "dZsVy1jjoywq"
                                    },
                                    () =>
                                      (({
                                        variable,
                                        value,
                                        startIndex,
                                        deleteCount
                                      }) => {
                                        if (!variable) {
                                          return;
                                        }
                                        const { objRoot, variablePath } =
                                          variable;

                                        p.set(objRoot, variablePath, value);
                                        return value;
                                      })?.apply(null, [actionArgs]),
                                    actionArgs
                                  );
                                })()
                              : undefined;
                            if (
                              typeof $steps["updateDetail"] === "object" &&
                              typeof $steps["updateDetail"].then === "function"
                            ) {
                              $steps["updateDetail"] = await __wrapUserPromise(
                                {
                                  type: "InteractionLoc",
                                  actionName: "updateVariable",
                                  interactionUuid: "_48Nze8yM",
                                  componentUuid: "dZsVy1jjoywq"
                                },
                                $steps["updateDetail"]
                              );
                            }
                            $steps["updateCurrentPage"] = true
                              ? (() => {
                                  const actionArgs = {
                                    variable: __wrapUserFunction(
                                      {
                                        type: "InteractionArgLoc",
                                        actionName: "updateVariable",
                                        interactionUuid: "VzVnKoAqx",
                                        componentUuid: "dZsVy1jjoywq",
                                        argName: "variable"
                                      },
                                      () => ({
                                        objRoot: $state,
                                        variablePath: ["currentPage"]
                                      })
                                    ),
                                    operation: __wrapUserFunction(
                                      {
                                        type: "InteractionArgLoc",
                                        actionName: "updateVariable",
                                        interactionUuid: "VzVnKoAqx",
                                        componentUuid: "dZsVy1jjoywq",
                                        argName: "operation"
                                      },
                                      () => 0
                                    ),
                                    value: __wrapUserFunction(
                                      {
                                        type: "InteractionArgLoc",
                                        actionName: "updateVariable",
                                        interactionUuid: "VzVnKoAqx",
                                        componentUuid: "dZsVy1jjoywq",
                                        argName: "value"
                                      },
                                      () => "detail"
                                    )
                                  };
                                  return __wrapUserFunction(
                                    {
                                      type: "InteractionLoc",
                                      actionName: "updateVariable",
                                      interactionUuid: "VzVnKoAqx",
                                      componentUuid: "dZsVy1jjoywq"
                                    },
                                    () =>
                                      (({
                                        variable,
                                        value,
                                        startIndex,
                                        deleteCount
                                      }) => {
                                        if (!variable) {
                                          return;
                                        }
                                        const { objRoot, variablePath } =
                                          variable;

                                        p.set(objRoot, variablePath, value);
                                        return value;
                                      })?.apply(null, [actionArgs]),
                                    actionArgs
                                  );
                                })()
                              : undefined;
                            if (
                              typeof $steps["updateCurrentPage"] === "object" &&
                              typeof $steps["updateCurrentPage"].then ===
                                "function"
                            ) {
                              $steps["updateCurrentPage"] =
                                await __wrapUserPromise(
                                  {
                                    type: "InteractionLoc",
                                    actionName: "updateVariable",
                                    interactionUuid: "VzVnKoAqx",
                                    componentUuid: "dZsVy1jjoywq"
                                  },
                                  $steps["updateCurrentPage"]
                                );
                            }
                          }}
                        >
                          <p.PlasmicImg
                            data-plasmic-name={"img"}
                            data-plasmic-override={overrides.img}
                            alt={""}
                            className={classNames(sty.img)}
                            displayHeight={"181px" as const}
                            displayMaxHeight={"none" as const}
                            displayMaxWidth={"100%" as const}
                            displayMinHeight={"0" as const}
                            displayMinWidth={"0" as const}
                            displayWidth={"100%" as const}
                            loading={"lazy" as const}
                            src={(() => {
                              try {
                                return currentItem.image;
                              } catch (e) {
                                if (e instanceof TypeError) {
                                  return "https://miro.medium.com/v2/resize:fit:1400/0*TSAWo_AmOa4oP_yh.png";
                                }
                                throw e;
                              }
                            })()}
                          />

                          {true ? (
                            <div
                              className={classNames(
                                projectcss.all,
                                sty.freeBox__ecY4W
                              )}
                            >
                              <div
                                className={classNames(
                                  projectcss.all,
                                  projectcss.__wab_text,
                                  sty.text__hY3Vy
                                )}
                              >
                                {(() => {
                                  try {
                                    return currentItem.title;
                                  } catch (e) {
                                    if (e instanceof TypeError) {
                                      return "title";
                                    }
                                    throw e;
                                  }
                                })()}
                              </div>
                              <div
                                className={classNames(
                                  projectcss.all,
                                  projectcss.__wab_text,
                                  sty.text__wZjE5
                                )}
                              >
                                {(() => {
                                  try {
                                    return currentItem.subtitle;
                                  } catch (e) {
                                    if (e instanceof TypeError) {
                                      return "subtitle";
                                    }
                                    throw e;
                                  }
                                })()}
                              </div>
                            </div>
                          ) : null}
                        </div>
                      ))}
                    </div>
                  </div>
                ) : null}
              </section>
            </div>
          ) : null}
          {(() => {
            try {
              return $state.currentPage === "detail";
            } catch (e) {
              if (e instanceof TypeError) {
                return true;
              }
              throw e;
            }
          })() ? (
            <DetailPage
              data-plasmic-name={"detailPage"}
              data-plasmic-override={overrides.detailPage}
              backClicked={async event => {
                const $steps = {};
                $steps["updateCurrentPage"] = true
                  ? (() => {
                      const actionArgs = {
                        variable: __wrapUserFunction(
                          {
                            type: "InteractionArgLoc",
                            actionName: "updateVariable",
                            interactionUuid: "FHf4fSEeC",
                            componentUuid: "dZsVy1jjoywq",
                            argName: "variable"
                          },
                          () => ({
                            objRoot: $state,
                            variablePath: ["currentPage"]
                          })
                        ),
                        operation: __wrapUserFunction(
                          {
                            type: "InteractionArgLoc",
                            actionName: "updateVariable",
                            interactionUuid: "FHf4fSEeC",
                            componentUuid: "dZsVy1jjoywq",
                            argName: "operation"
                          },
                          () => 0
                        ),
                        value: __wrapUserFunction(
                          {
                            type: "InteractionArgLoc",
                            actionName: "updateVariable",
                            interactionUuid: "FHf4fSEeC",
                            componentUuid: "dZsVy1jjoywq",
                            argName: "value"
                          },
                          () => "home"
                        )
                      };
                      return __wrapUserFunction(
                        {
                          type: "InteractionLoc",
                          actionName: "updateVariable",
                          interactionUuid: "FHf4fSEeC",
                          componentUuid: "dZsVy1jjoywq"
                        },
                        () =>
                          (({ variable, value, startIndex, deleteCount }) => {
                            if (!variable) {
                              return;
                            }
                            const { objRoot, variablePath } = variable;

                            p.set(objRoot, variablePath, value);
                            return value;
                          })?.apply(null, [actionArgs]),
                        actionArgs
                      );
                    })()
                  : undefined;
                if (
                  typeof $steps["updateCurrentPage"] === "object" &&
                  typeof $steps["updateCurrentPage"].then === "function"
                ) {
                  $steps["updateCurrentPage"] = await __wrapUserPromise(
                    {
                      type: "InteractionLoc",
                      actionName: "updateVariable",
                      interactionUuid: "FHf4fSEeC",
                      componentUuid: "dZsVy1jjoywq"
                    },
                    $steps["updateCurrentPage"]
                  );
                }
              }}
              bodyText={p.generateStateValueProp($state, [
                "detailPage",
                "bodyText"
              ])}
              className={classNames("__wab_instance", sty.detailPage)}
              contents={p.generateStateValueProp($state, [
                "detailPage",
                "contents"
              ])}
              img={p.generateStateValueProp($state, ["detailPage", "img"])}
              onBodyTextChange={p.generateStateOnChangeProp($state, [
                "detailPage",
                "bodyText"
              ])}
              onContentsChange={p.generateStateOnChangeProp($state, [
                "detailPage",
                "contents"
              ])}
              onImgChange={p.generateStateOnChangeProp($state, [
                "detailPage",
                "img"
              ])}
              onSubtitleChange={p.generateStateOnChangeProp($state, [
                "detailPage",
                "subtitle"
              ])}
              onTitleChange={p.generateStateOnChangeProp($state, [
                "detailPage",
                "title"
              ])}
              subtitle={p.generateStateValueProp($state, [
                "detailPage",
                "subtitle"
              ])}
              title={p.generateStateValueProp($state, ["detailPage", "title"])}
            />
          ) : null}
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "home", "section", "card", "img", "detailPage"],
  home: ["home", "section", "card", "img"],
  section: ["section", "card", "img"],
  card: ["card", "img"],
  img: ["img"],
  detailPage: ["detailPage"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  home: "div";
  section: "section";
  card: "div";
  img: typeof p.PlasmicImg;
  detailPage: typeof DetailPage;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHomepage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHomepage__VariantsArgs;
    args?: PlasmicHomepage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHomepage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicHomepage__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicHomepage__ArgProps,
          internalVariantPropNames: PlasmicHomepage__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicHomepage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomepage";
  } else {
    func.displayName = `PlasmicHomepage.${nodeName}`;
  }
  return func;
}

export const PlasmicHomepage = Object.assign(
  // Top-level PlasmicHomepage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    home: makeNodeComponent("home"),
    section: makeNodeComponent("section"),
    card: makeNodeComponent("card"),
    img: makeNodeComponent("img"),
    detailPage: makeNodeComponent("detailPage"),

    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicHomepage;
/* prettier-ignore-end */

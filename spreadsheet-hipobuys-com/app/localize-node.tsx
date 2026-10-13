import { Children, cloneElement, isValidElement, type ReactElement, type ReactNode } from "react";
import { localPath, t, type Lang } from "./i18n";
// Translate retained templates before SSR; no DOM mutation or translation widget.
export function localizeNode(node: ReactNode, lang: Lang): ReactNode {
  if (typeof node === "string") return t(node, lang);
  if (Array.isArray(node)) return Children.map(node, child => localizeNode(child, lang));
  if (!isValidElement(node)) return node;
  const element = node as ReactElement<Record<string, unknown>>;
  if (element.type === "script" || typeof element.type !== "string") return element;
  const props: Record<string, unknown> = {};
  for (const key of ["aria-label", "placeholder", "alt", "title"]) {
    if (typeof element.props[key] === "string") props[key] = t(element.props[key] as string,lang);
  }
  if (typeof element.props.href === "string" && !element.props.hrefLang) props.href = localPath(element.props.href,lang);
  if (element.props.children !== undefined && !element.props.hrefLang) props.children = localizeNode(element.props.children as ReactNode,lang);
  return cloneElement(element,props);
}

"use client";
import { Children, cloneElement, isValidElement, type ReactNode, type ReactElement } from "react";
import { localizedPath, origin, translateText, type Lang } from "../i18n/paths";
import { useLanguage, useMessages } from "./language";

function schemaValue(value: unknown, lang: Lang, messages: Record<string,string>, key = ""): unknown {
  if (Array.isArray(value)) return value.map(item => schemaValue(item, lang, messages, key));
  if (value && typeof value === "object") return Object.fromEntries(Object.entries(value).map(([k,v]) => [k, schemaValue(v, lang, messages, k)]));
  if (typeof value !== "string") return value;
  if (key === "inLanguage") return lang;
  if (value.startsWith(origin) && !/\.(png|svg|jpg)(?:$|\?)/.test(value)) return origin + localizedPath(value.slice(origin.length) || "/", lang);
  return ["headline","description","name","text","articleSection","keywords"].includes(key) ? translateText(value, messages) : value;
}

export function localizeTree(node: ReactNode, lang: Lang, messages: Record<string,string>): ReactNode {
  return Children.map(node, child => {
    if (typeof child === "string") return translateText(child, messages);
    if (!isValidElement(child)) return child;
    const el = child as ReactElement<Record<string, unknown>>;
    const props = { ...el.props };
    if (el.type === "script") {
      if (props.type !== "application/ld+json") return el;
      const html = (props.dangerouslySetInnerHTML as { __html: string }).__html;
      const data = schemaValue(JSON.parse(html), lang, messages) as Record<string,unknown>;
      if (data["@type"] === "Article" || data["@type"] === "WebSite") data.inLanguage = lang;
      return cloneElement(el, {dangerouslySetInnerHTML:{__html:JSON.stringify(data).replace(/</g,"\\u003c")}});
    }
    if (typeof props.href === "string") props.href = localizedPath(props.href, lang);
    for (const key of ["title", "alt", "aria-label", "placeholder"]) {
      if (typeof props[key] === "string") props[key] = translateText(props[key] as string, messages);
    }
    if (props.children !== undefined) props.children = localizeTree(props.children as ReactNode, lang, messages);
    return cloneElement(el, props);
  });
}
export function LocalizedContent({ children }: { children: ReactNode }) {
  return localizeTree(children, useLanguage(), useMessages());
}

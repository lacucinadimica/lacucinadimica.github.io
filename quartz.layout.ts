import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import React, { useState, useEffect } from 'react'

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [Component.Header({ key:"header"})],
  footer: Component.Footer(),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    //Component.Breadcrumbs(),
    //Component.ArticleTitle(),
    //Component.ContentMeta(),
    //Component.TagList(),
    //Component.Darkmode(),
  ],
  left: [
    //Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
  ],
  right: [
    //Component.MobileOnly(Component.Search()),
    //Component.DesktopOnly(Component.Graph()),
    //Component.DesktopOnly(Component.TableOfContents()),
    //Component.DesktopOnly(Component.Backlinks()),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [
    //Component.ArticleTitle(),
    //Component.MobileOnly(Component.Search()),
    //Component.Darkmode(),
  ],
  left: [
    //Component.PageTitle(),
    //Component.MobileOnly(Component.Spacer()),
  ],
  right: [
    //Component.MobileOnly(Component.Search()),
  ],
}
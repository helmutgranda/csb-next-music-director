import React from 'react';
import Link from "next/link";
import {
  Header,
  HeaderContainer,
  HeaderName,
  HeaderNavigation,
  HeaderMenuButton,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent,
  SideNav,
  SideNavItems,
  HeaderSideNavItems,
} from 'carbon-components-react';
import {
  AppSwitcher20,
  Notification20,
  UserAvatar20,
} from '@carbon/icons-react';
const GlobalHeader = () => (
  <HeaderContainer
    render={({ isSideNavExpanded, onClickSideNavExpand }) => (
      <Header aria-label="Carbon Tutorial">
        <SkipToContent />
        <HeaderMenuButton
          aria-label="Open menu"
          onClick={onClickSideNavExpand}
          isActive={isSideNavExpanded}
        />
        <Link href="/"><a><HeaderName prefix="Next">
          Music Director
        </HeaderName></a></Link>
        <HeaderNavigation aria-label="Carbon Tutorial">
        <Link href="/sheets"><HeaderMenuItem href="#"> Sheets</HeaderMenuItem></Link>
        </HeaderNavigation>
        <SideNav
          aria-label="Side navigation"
          expanded={isSideNavExpanded}
          isPersistent={false}>
          <SideNavItems>
            <HeaderSideNavItems>
            <Link href="/sheets"><HeaderMenuItem href="#"> Sheets</HeaderMenuItem></Link>
            </HeaderSideNavItems>
          </SideNavItems>
        </SideNav>
        <HeaderGlobalBar>
  <HeaderGlobalAction aria-label="Notifications">
    <Notification20 />
  </HeaderGlobalAction>
  <HeaderGlobalAction aria-label="User Avatar">
    <UserAvatar20 />
  </HeaderGlobalAction>
  <HeaderGlobalAction aria-label="App Switcher">
    <AppSwitcher20 />
  </HeaderGlobalAction>
</HeaderGlobalBar>
      </Header>
    )}
  />
);
export default GlobalHeader;
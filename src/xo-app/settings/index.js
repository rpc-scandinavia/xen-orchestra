import _ from 'messages'
import Icon from 'icon'
import Page from '../page'
import React from 'react'
import { routes } from 'utils'
import { Container, Row, Col } from 'grid'
import { NavLink, NavTabs } from 'nav'

import Acls from './acls'
import Groups from './groups'
import Plugins from './plugins'
import Remotes from './remotes'
import Servers from './servers'
import Users from './users'

const HEADER = <Container>
  <Row>
    <Col mediumSize={3}>
      <h2><Icon icon='menu-settings' /> {_('settingsPage')}</h2>
    </Col>
    <Col mediumSize={9}>
      <NavTabs className='pull-xs-right'>
        <NavLink to={'/settings/servers'}><Icon icon='menu-settings-servers' /> {_('settingsServersPage')}</NavLink>
        <NavLink to={'/settings/users'}><Icon icon='menu-settings-users' /> {_('settingsUsersPage')}</NavLink>
        <NavLink to={'/settings/groups'}><Icon icon='menu-settings-groups' /> {_('settingsGroupsPage')}</NavLink>
        <NavLink to={'/settings/acls'}><Icon icon='menu-settings-acls' /> {_('settingsAclsPage')}</NavLink>
        <NavLink to={'/settings/remotes'}><Icon icon='menu-backup-remotes' /> {_('backupRemotesPage')}</NavLink>
        <NavLink to={'/settings/plugins'}><Icon icon='menu-settings-plugins' /> {_('settingsPluginsPage')}</NavLink>
      </NavTabs>
    </Col>
  </Row>
</Container>

const Settings = routes('servers', {
  acls: Acls,
  groups: Groups,
  plugins: Plugins,
  remotes: Remotes,
  servers: Servers,
  users: Users
})(
  ({ children }) => <Page header={HEADER}>{children}</Page>
)

export default Settings

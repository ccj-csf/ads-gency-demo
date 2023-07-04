import type { App } from 'vue'
import { Button, Drawer, Dropdown, Menu, Tabs, TabPane } from 'ant-design-vue'

import { HomeOutlined  } from '@ant-design/icons-vue'

const AntDVComponents = [Button, Menu, Dropdown, Drawer, Tabs, TabPane]

const MapAntIons = {
  HomeOutlined,

}

export const registerGlobComponents = (app: App) => {
  AntDVComponents.forEach((components) => {
    app.use(components)
  })
}
export const registerGlobIconComponents = (app: App) => {
  Object.keys(MapAntIons).forEach((key) => {
    app.component(key, MapAntIons[key])
  })
}

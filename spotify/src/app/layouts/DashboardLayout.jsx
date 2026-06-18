import { Outlet } from 'react-router'
import { Group, Panel, Separator } from 'react-resizable-panels'
import Navbar from '../../features/dashboard/ui/components/Navbar'
import Player from '../../features/player/ui/components/Player'

const panelClass = 'rounded-lg bg-[#181818] p-4 text-white'

const DashboardLayout = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      <main className="h-[calc(100vh-144px)] p-2">
        <Group orientation="horizontal" className="h-full gap-2">
          <Panel
            id="left-panel"
            defaultSize="22%"
            maxSize="25%"
            minSize="220px"
            className={panelClass}
          >
            Left panel
          </Panel>

          <Separator className="w-1 rounded-full bg-transparent hover:bg-[#535353]" />

          <Panel
            id="middle-panel"
            defaultSize="56%"
            maxSize="75%"
            minSize="320px"
            className={panelClass}
          >
            <Outlet />
          </Panel>

          <Separator className="w-1 rounded-full bg-transparent hover:bg-[#535353]" />

          <Panel
            id="right-panel"
            defaultSize="22%"
            maxSize="25%"
            minSize="220px"
            className={panelClass}
          >
            Right panel
          </Panel>
        </Group>
      </main>
      <Player />
    </div>
  )
}

export default DashboardLayout

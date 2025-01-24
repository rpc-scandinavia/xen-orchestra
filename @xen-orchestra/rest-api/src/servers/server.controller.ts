import { Get, Path, Route } from 'tsoa'
import { XoServer } from './server.type.js'
import { provideSingleton } from '../ioc/helper.js'
import { XoController } from '../abstract/xo.controller.js'

@Route('servers')
@provideSingleton(ServersController)
export class ServersController extends XoController<XoServer> {
  constructor() {
    super('server')
  }
  @Get()
  public getServers(): Promise<string[]> {
    return this.getObjectIds()
  }

  @Get('{id}')
  public getServer(@Path() id: XoServer['id']): Promise<XoServer> {
    return this.getObject(id)
  }
}

import { join } from 'path';
import AutoLoad, {AutoloadPluginOptions} from '@fastify/autoload';
import fastfyView from '@fastify/view';
import { fastify, FastifyInstance, FastifyPluginAsync } from 'fastify';
import { RootRouter } from './routes/RootRouter';

export type AppOptions = {
  // Place your custom options for app below here.
} & Partial<AutoloadPluginOptions>;

class App {
  private fastifyInstance: FastifyInstance;

  constructor(opts: AppOptions = {}) {
    this.fastifyInstance = fastify(opts);
    this.init();
  }

  async init(): Promise<void> {
    // Place here your custom code!

    // Do not touch the following lines

    // This loads all plugins defined in plugins
    // those should be support plugins that are reused
    // through your application
    await this.fastifyInstance.register(AutoLoad, {
      dir: join(__dirname, 'plugins'),
      options: {}
    });

    // This loads all plugins defined in routes
    // define your routes in one of these
    await this.fastifyInstance.register(AutoLoad, {
      dir: join(__dirname, 'routes'),
      options: {}
    });

    await this.fastifyInstance.register(RootRouter);

    await this.fastifyInstance.register(fastfyView, {
      engine: {
        handlebars: require('handlebars'),
      },
      templates: 'views'
    })
  }

  async start(): Promise<void> {
    try {
      await this.fastifyInstance.listen(3000);
      console.log('Fastify server is running.');
    } catch (err) {
      console.error(err);
      process.exit(1);
    }
  }
}

export default App;

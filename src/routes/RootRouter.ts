import { FastifyInstance, FastifyPluginAsync } from 'fastify';
import { Route } from './Route';
import { ExampleController } from '../controllers/example.controller';

export class RootRouter extends Route {
  public static async register(
    fastify: FastifyInstance,
    opts: Record<string, unknown>,
  ): Promise<void> {
    const exampleController = new ExampleController();

    fastify.register(async function (instance, opts) {
      instance.get('/', async function (request, reply) {
        return exampleController.index(request, reply);
      });
    });
  }
}

import { FastifyRequest, FastifyReply } from 'fastify';

export class Route {
  protected readonly prefix: string;

  constructor(prefix: string) {
    this.prefix = prefix;
  }

  public async getHandler(
    request: FastifyRequest,
    reply: FastifyReply
  ): Promise<void> {
    reply.status(404).send('Not Found');
  }
}
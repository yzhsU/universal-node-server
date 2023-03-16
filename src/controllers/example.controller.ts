import { FastifyRequest, FastifyReply, RouteHandlerMethod } from 'fastify';
import Vue from 'vue';
import { readFileSync } from 'fs';
import { join } from 'path';
import { ExampleService } from '../services/example.service';

export class ExampleController {
  private exampleService: ExampleService;
  private template: string;
  
  constructor(exampleService?: ExampleService) {
    this.template = readFileSync(join(__dirname, '../views/index.html'), 'utf-8');

    if (exampleService) {
      this.exampleService = exampleService;
    } else {
      this.exampleService = new ExampleService();
    }
  }

  // public getExample: RouteHandlerMethod = async (request, reply) => {
  //   const example = await this.exampleService.getExample();
  //   return reply.send(example);
  // }

  public index: RouteHandlerMethod = async (request: FastifyRequest, reply: FastifyReply) => {
    // Create a new Vue instance and pass the data to the template
    const app = new Vue({
      template: this.template,
      data: {
        message: 'Hello, world!'
      }
    });

    // Render the Vue instance and send the HTML to the client
    const html = await app.$ssrRender();
    reply.type('text/html').send(html);
  }
  
}
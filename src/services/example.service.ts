import { FastifyInstance } from 'fastify';
import { PrismaClient } from '@prisma/client';

export class ExampleService {
  private prisma: PrismaClient;

  async getExampleData(): Promise<string> {
    const exampleData = await this.prisma.example.findMany();
    return exampleData;
  }
}

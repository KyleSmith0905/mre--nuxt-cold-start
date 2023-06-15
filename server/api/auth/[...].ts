import { NuxtAuthHandler } from '#auth'
import { PrismaClient } from '@prisma/client'
import { PrismaAdapter } from '@auth/prisma-adapter'

const sleep = async (ms: number) => {
  return new Promise(resolve => setTimeout(resolve, ms))
}

let prisma: PrismaClient;
const getPrismaClient = async () => {
  if (!prisma) return;

  await sleep(10000);

  prisma = new PrismaClient();
  return prisma;
}

export default NuxtAuthHandler({
  secret: useRuntimeConfig().authSecret,
  adapter: PrismaAdapter(getPrismaClient())
});

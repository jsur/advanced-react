import 'dotenv/config';
import { config, createSchema } from '@keystone-next/keystone/schema';

const databaseUrl =
  process.env.DATABASE_URL || 'mongodb://localhost/keystone-sick-fits-tutorial';

const sessionConfig = {
  maxAge: 60 * 60 * 24 * 360,
  secret: process.env.COOKIE_SECRET,
};

export default config({
  server: {
    cors: {
      origin: [process.env.FRONTEND_URL],
      credentials: true,
    },
  },
  db: {
    adapter: 'mongoose',
    url: databaseUrl,
    // TODO: add data seeding
  },
  lists: createSchema({
    // schema items
  }),
  ui: {
    isAccessAllowed: () => true,
  },
});

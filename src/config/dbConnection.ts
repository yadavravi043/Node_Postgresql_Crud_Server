import { Connection, createConnection, getConnectionManager } from 'typeorm';
import config from './ormconfig';
export const dbCreateConnectionPostgresql = async (): Promise<Connection | null> => {
  try {
    const conn = await createConnection(config);
    console.log(`Database connection success. Connection name: '${conn.name}' Database:${conn.options.database}`);
  } catch (err) {
    if (err) {
        console.log(err);
    }
  }
  return null;
};
export default dbCreateConnectionPostgresql
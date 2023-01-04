declare namespace NodeJS {
    export interface ProcessEnv {
      SQLite_DB_NAME?: string;
      DISCORD_CLIENT_ID?: string;
      DISCORD_CLIENT_SECRET?: string;
      DISCORD_CALLBACK_URL?: string;
      REDIS_URI?: string;
    }
  }
  
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DataSource } from 'typeorm';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const dataSource = app.get(DataSource);

  if (!dataSource.isInitialized) {
    try {
      await dataSource.initialize();
      console.log('Database connected successfully');
    } catch (error) {
      console.error('Failed to connect to the database:', error);
      process.exit(1);
    }
  } else {
    console.log('Database already initialized');
  }

  await app.listen(process.env.APP_PORT ?? 3000);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();

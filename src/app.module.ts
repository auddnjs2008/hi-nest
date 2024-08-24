import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { AppController } from './app/app.controller';

@Module({
  imports: [MoviesModule],
  controllers: [AppController], // express의 라우터 같은 존재
  providers: [],
})
export class AppModule {}

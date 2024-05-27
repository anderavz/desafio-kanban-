import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Contact } from 'src/entities/contact/contact.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      database: 'nestng',
      username: 'root',
      password: '',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})

@Module({
  imports: [
    
    TypeOrmModule.forFeature([Contact]),
  ],
  controllers: [AppController],
  providers: [AppService],
})

// [...]

import { MatInputModule, 
  MatButtonModule, 
  MatCardModule, 
  MatFormFieldModule,
  MatTableModule 
} from  '@angular/material';

@NgModule({
declarations: [
AppComponent,
ContactComponent
],
imports: [
// [...]
MatTableModule,
MatCardModule,
MatInputModule,
MatFormFieldModule,
MatButtonModule
],
providers: [],
bootstrap: [AppComponent]
})

export class AppModule { }


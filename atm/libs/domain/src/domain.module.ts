import { Module } from '@nestjs/common';
import { DomainService } from './domain.service';

/**
 * Módulo `DomainModule`.
 * 
 * Este módulo declara y exporta el servicio `DomainService`,
 * permitiendo su uso en otros módulos de la aplicación.
 */
@Module({
  providers: [DomainService],
  exports: [DomainService],
})
export class DomainModule {}

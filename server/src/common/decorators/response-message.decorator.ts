import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

import { SetMetadata } from '@nestjs/common';

export const ResponseMessage = (message: string) =>
    SetMetadata('response-message', message);

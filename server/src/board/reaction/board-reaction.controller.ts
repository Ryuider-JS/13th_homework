import {
    Controller,
    Get,
    Param,
    HttpCode,
    HttpStatus,
    ParseIntPipe,
    UseInterceptors,
} from '@nestjs/common';
import { BoardReactionService } from './board-reaction.service';
import { ResponseMessage } from '../decorators/response-message.decorator';
import { TransformBoardInterceptor } from 'src/common/interceptors/transform-board.interceptor';

@UseInterceptors(TransformBoardInterceptor)
@Controller('/api/board/:boardId/reaction')
export class BoardReactionController {
    constructor(private readonly boardReactionService: BoardReactionService) {}

    @Get()
    @ResponseMessage(`board의 reaction을 성공적으로 가져왔습니다.`)
    @HttpCode(HttpStatus.OK)
    getBoardReaction(@Param('boardId', ParseIntPipe) BoardId: number) {
        return this.boardReactionService.getBoardReaction(BoardId);
    }
}
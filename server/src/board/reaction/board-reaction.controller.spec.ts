import { Test, TestingModule } from '@nestjs/testing';

import { ReactionController } from './board-reaction.controller';
import { ReactionService } from './board-reaction.service';

describe('ReactionController', () => {
    let controller: ReactionController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [ReactionController],
            providers: [ReactionService],
        }).compile();

        controller = module.get<ReactionController>(ReactionController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});

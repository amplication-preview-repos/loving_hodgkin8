/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { GuessService } from "../guess.service";
import { GuessCreateInput } from "./GuessCreateInput";
import { Guess } from "./Guess";
import { GuessFindManyArgs } from "./GuessFindManyArgs";
import { GuessWhereUniqueInput } from "./GuessWhereUniqueInput";
import { GuessUpdateInput } from "./GuessUpdateInput";

export class GuessControllerBase {
  constructor(protected readonly service: GuessService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Guess })
  async createGuess(@common.Body() data: GuessCreateInput): Promise<Guess> {
    return await this.service.createGuess({
      data: {
        ...data,

        game: data.game
          ? {
              connect: data.game,
            }
          : undefined,

        word: data.word
          ? {
              connect: data.word,
            }
          : undefined,
      },
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        isCorrect: true,

        game: {
          select: {
            id: true,
          },
        },

        word: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Guess] })
  @ApiNestedQuery(GuessFindManyArgs)
  async guesses(@common.Req() request: Request): Promise<Guess[]> {
    const args = plainToClass(GuessFindManyArgs, request.query);
    return this.service.guesses({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        isCorrect: true,

        game: {
          select: {
            id: true,
          },
        },

        word: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Guess })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async guess(
    @common.Param() params: GuessWhereUniqueInput
  ): Promise<Guess | null> {
    const result = await this.service.guess({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        isCorrect: true,

        game: {
          select: {
            id: true,
          },
        },

        word: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Guess })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateGuess(
    @common.Param() params: GuessWhereUniqueInput,
    @common.Body() data: GuessUpdateInput
  ): Promise<Guess | null> {
    try {
      return await this.service.updateGuess({
        where: params,
        data: {
          ...data,

          game: data.game
            ? {
                connect: data.game,
              }
            : undefined,

          word: data.word
            ? {
                connect: data.word,
              }
            : undefined,
        },
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          isCorrect: true,

          game: {
            select: {
              id: true,
            },
          },

          word: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Guess })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteGuess(
    @common.Param() params: GuessWhereUniqueInput
  ): Promise<Guess | null> {
    try {
      return await this.service.deleteGuess({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          isCorrect: true,

          game: {
            select: {
              id: true,
            },
          },

          word: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}

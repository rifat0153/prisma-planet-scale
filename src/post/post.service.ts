import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from './../prisma.service';

@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}

  create(postCreateInput: Prisma.PostCreateInput) {
    return this.prisma.post.create({
      data: postCreateInput,
    });
  }

  findAll() {
    return this.prisma.user.findMany({
      include: {
        posts: {
          include: {
            _count: {
              select: {
                attachments: true,
              },
            },
          },
        },
      },
    });

    return this.prisma.user.findMany({
      include: {
        posts: {
          include: {
            _count: {
              select: { attachments: true },
            },
          },
        },
      },
    });

    return this.prisma.user.findMany({
      include: {
        _count: {
          select: { posts: true },
        },
      },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} post`;
  }

  update(id: number, updatePostDto: Prisma.PostUpdateInput) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}

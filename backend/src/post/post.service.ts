import { ConflictException, Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './entities/post.entity';
import { Users } from 'src/users/users.entity';
import { Category } from 'src/category/entities/category.entity';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private postRepository: Repository<Post>
  ) {

  }
  async create(createPostDto: CreatePostDto, user: Users): Promise<Post> {

    const {
      title,
      content,
      category
    } = createPostDto

    const post = this.postRepository.create({
      title,
      content,
      category,
      user,
      
    })

    try {
      return this.postRepository.save(post);
      return post
    } catch (e) {
      throw new ConflictException({
        message: ['Something\s wrong I can feel it.']
      })
    }
  }

  async findAll():Promise<Post[]> {
    return await this.postRepository.find({ relations: {
      user: true,
      category:true,
  },});
  }

  async findOne(id: number) {
  return  await this.postRepository.findOne({ where: { id: id } });
   
  }

  async update(id: number, updatePostDto: UpdatePostDto) {
    return await this.postRepository.update(id, updatePostDto);
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}

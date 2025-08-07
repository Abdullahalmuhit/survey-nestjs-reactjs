import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Survey } from './entities/survey.entity';
import { CreateSurveyDto } from './dto/create-survey.dto';
import { Question } from './entities/question.entity';

@Injectable()
export class SurveyService {
  constructor(
    @InjectRepository(Survey)
    private surveyRepo: Repository<Survey>,
    @InjectRepository(Question)
    private questionRepo: Repository<Question>,
  ) {}

  async create(createSurveyDto: CreateSurveyDto) {
    const survey = this.surveyRepo.create({
      name: createSurveyDto.name,
      age: createSurveyDto.age,
      satisfaction: createSurveyDto.satisfaction,
      suggestions: createSurveyDto.suggestions,
    });
    return this.surveyRepo.save(survey);
  }

  findAll() {
    return this.surveyRepo.find({ relations: ['questions'] });
  }

  findOne(id: number) {
    return this.surveyRepo.findOne({ where: { id }, relations: ['questions'] });
  }
}

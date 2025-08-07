import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Survey } from './survey.entity';

@Entity()
export class Question {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  text: string;

  @Column()
  type: 'text' | 'mcq';

  @Column('simple-array', { nullable: true })
  options: string[];

  @ManyToOne(() => Survey, (survey) => survey.questions, {
    onDelete: 'CASCADE',
  })
  survey: Survey;
}

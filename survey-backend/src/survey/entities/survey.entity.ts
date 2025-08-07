import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Question } from './question.entity';

@Entity()
export class Survey {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  age: string;
  @Column()
  satisfaction: string;
  @Column()
  suggestions: string;
  @OneToMany(() => Question, (q) => q.survey, { cascade: true })
  questions: Question[];
}

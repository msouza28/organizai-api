import { QueryFailedError } from "typeorm";
import { AppDataSource } from "../data-source";
import { Quiz } from "../entities/Quiz";
import { Request, Response } from 'express';

export class QuizController {
    private quizRepository = AppDataSource.getRepository(Quiz);

    inserirPerguntas = async (req: Request, res: Response) =>{
        try {

            const quizDto = req.body;

            const newQuiz = new Quiz();
            Object.assign(newQuiz, quizDto);

            const savedQuiz = await this.quizRepository.save(newQuiz);

            res.status(201).json(savedQuiz);
        }catch (error) {
            console.error(error);
            if (error instanceof QueryFailedError && error.message.includes('duplicate key value violates unique constraint')) {
                return res.status(409).json({ message: "Um quiz ja foi respondido para esse usuário"  });
            }
            res.status(500).json({ message: "Erro ao criar quiz do usuário", error });
        }
    };
}
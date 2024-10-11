import { Request, Response } from 'express';
import { AppDataSource } from '../data-source';
import { User } from '../entities/User';

export class UserController {
  private userRepository = AppDataSource.getRepository(User);

  constructor() {
    this.autenticacaoUser = this.autenticacaoUser.bind(this);
}

  createUser = async (req: Request, res: Response) => {
    try {
      const user = this.userRepository.create(req.body);
      const results = await this.userRepository.save(user);
      res.status(201).json(results);
    } catch (error) {
      console.error(error);
       res.status(500).json({ message: "Erro ao criar usuário" });
    }
  };

  findAllUsers = async (req: Request, res: Response) => {
    try {
      const users = await this.userRepository.find();
      if (!users || users.length === 0) {
         res.status(404).json({ message: "Usuários não encontrados" });
      }
      res.json(users);
    } catch (error) {
      console.error(error);
       res.status(500).json({ message: "Erro ao buscar usuários" });
    }
  };

  findUserByEmail = async (req: Request, res: Response) => {
    try {
        const { email } = req.body; // Captura o email do corpo da requisição
    
        if (!email) {
           res.status(400).json({ message: "Email é obrigatório" });
        }
    
        const user = await this.userRepository.findOneBy({ email });
    
        if (!user) {
           res.status(404).json({ message: "Usuário não encontrado" });
        }

        res.json(user);
      } catch (error) {
        console.error(error);
         res.status(500).json({ message: "Erro ao buscar usuário" });
      }
  };

  autenticacaoUser = async (req: Request, res: Response) => {
    try {
      const { email, senha } = req.body;

      if (!email || !senha) {
        return res.status(400).json({ message: "Email e senha são obrigatórios" });
      }

      const user = await this.userRepository.findOneBy({ email, senha });

      if (!user) {
        return res.status(404).json({ message: "Usuário não encontrado" });
      }

      return res.sendStatus(200); // Sucesso, sem retorno de dados
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Erro ao autenticar usuário" });
    }
  };
}
import { Request, Response } from 'express';
import { AppDataSource } from '../data-source';
import { User } from '../entities/User';
import { Categoria } from '../entities/Categoria';

export class UserController {
  private userRepository = AppDataSource.getRepository(User);
  private catRepository = AppDataSource.getRepository(Categoria);
  

  constructor() {
    this.autenticacaoUser = this.autenticacaoUser.bind(this);
}

  createUser = async (req: Request, res: Response) => {
    try {
      const userDto = req.body;

      // Criar uma nova instância de User
      const newUser = new User();
      Object.assign(newUser, userDto); // copia o dto para a nova instancia

      // Buscar todas as categorias
      const categorias = await this.catRepository.find();

      // Associar as categorias ao novo usuário
      newUser.categorias = categorias;

      // Salvar o usuário com as categorias associadas
      const savedUser = await this.userRepository.save(newUser);

      // Buscar o usuário salvo com as categorias caso queria retonar o usuário com as categorias
      // const userWithCategories = await this.userRepository.findOne({
      //   where: { UserId: savedUser.UserId },
      //   relations: ['categorias']
      // });

      res.status(201).json(savedUser);
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
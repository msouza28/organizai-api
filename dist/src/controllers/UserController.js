"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const data_source_1 = require("../data-source");
const User_1 = require("../entities/User");
const Categoria_1 = require("../entities/Categoria");
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
class UserController {
    userRepository = data_source_1.AppDataSource.getRepository(User_1.User);
    catRepository = data_source_1.AppDataSource.getRepository(Categoria_1.Categoria);
    constructor() {
        this.autenticacaoUser = this.autenticacaoUser.bind(this);
    }
    createUser = async (req, res) => {
        try {
            const userDto = req.body;
            // Criar uma nova instância de User
            const newUser = new User_1.User();
            Object.assign(newUser, userDto); // copia o dto para a nova instancia
            // Validar a entidade
            const errors = await (0, class_validator_1.validate)(newUser);
            if (errors.length > 0) {
                const errorMessages = errors.map(error => Object.values(error.constraints || {})).flat();
                return res.status(400).json({ errors: errorMessages });
            }
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
        }
        catch (error) {
            console.error(error);
            if (error instanceof typeorm_1.QueryFailedError && error.message.includes('duplicate key value violates unique constraint')) {
                return res.status(409).json({ message: "Este email já está cadastrado" });
            }
            res.status(500).json({ message: "Erro ao criar usuário" });
        }
    };
    findAllUsers = async (req, res) => {
        try {
            const users = await this.userRepository.find();
            if (!users || users.length === 0) {
                res.status(404).json({ message: "Usuários não encontrados" });
            }
            res.json(users);
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ message: "Erro ao buscar usuários" });
        }
    };
    findUserByEmail = async (req, res) => {
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
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ message: "Erro ao buscar usuário" });
        }
    };
    autenticacaoUser = async (req, res) => {
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
        }
        catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Erro ao autenticar usuário" });
        }
    };
}
exports.UserController = UserController;

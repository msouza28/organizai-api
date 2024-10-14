"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const typeorm_1 = require("typeorm");
const Quiz_1 = require("./Quiz");
const Categoria_1 = require("./Categoria");
const Transacao_1 = require("./Transacao");
const UsuarioBanco_1 = require("./UsuarioBanco");
const class_validator_1 = require("class-validator");
let User = class User {
    UserId;
    nome;
    sobrenome;
    cpf;
    email;
    telefone;
    senha;
    quizzes;
    categorias;
    transacoes;
    usuarioBancos;
};
exports.User = User;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], User.prototype, "UserId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, class_validator_1.IsNotEmpty)({ message: "O nome não pode estar vazio" }),
    __metadata("design:type", String)
], User.prototype, "nome", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, class_validator_1.IsNotEmpty)({ message: "O sobrenome não pode estar vazio" }),
    __metadata("design:type", String)
], User.prototype, "sobrenome", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "cpf", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, class_validator_1.IsNotEmpty)({ message: "O email não pode estar vazio" }),
    (0, class_validator_1.IsEmail)({}, { message: "Email inválido" }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, class_validator_1.IsNotEmpty)({ message: "O telefone não pode estar vazio" }),
    __metadata("design:type", String)
], User.prototype, "telefone", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, class_validator_1.IsNotEmpty)({ message: "A senha não pode estar vazia" }),
    __metadata("design:type", String)
], User.prototype, "senha", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Quiz_1.Quiz, quiz => quiz.user),
    __metadata("design:type", Array)
], User.prototype, "quizzes", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => Categoria_1.Categoria),
    (0, typeorm_1.JoinTable)({ name: "UsuarioCategoria" }),
    __metadata("design:type", Array)
], User.prototype, "categorias", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Transacao_1.Transacao, transacao => transacao.usuario),
    __metadata("design:type", Array)
], User.prototype, "transacoes", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => UsuarioBanco_1.UsuarioBanco, usuarioBanco => usuarioBanco.user),
    __metadata("design:type", Array)
], User.prototype, "usuarioBancos", void 0);
exports.User = User = __decorate([
    (0, typeorm_1.Entity)(),
    (0, typeorm_1.Unique)(["email"])
], User);

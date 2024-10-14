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
exports.Transacao = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("./User");
const Categoria_1 = require("./Categoria");
let Transacao = class Transacao {
    TransacaoId;
    UsuarioId;
    CategoriaId;
    isReceita;
    valor;
    descricao;
    data;
    usuario;
    categoria;
};
exports.Transacao = Transacao;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Transacao.prototype, "TransacaoId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Transacao.prototype, "UsuarioId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Transacao.prototype, "CategoriaId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], Transacao.prototype, "isReceita", void 0);
__decorate([
    (0, typeorm_1.Column)("decimal", { precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], Transacao.prototype, "valor", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Transacao.prototype, "descricao", void 0);
__decorate([
    (0, typeorm_1.Column)("date"),
    __metadata("design:type", Date)
], Transacao.prototype, "data", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => User_1.User, user => user.transacoes),
    (0, typeorm_1.JoinColumn)({ name: "UsuarioId" }),
    __metadata("design:type", User_1.User)
], Transacao.prototype, "usuario", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Categoria_1.Categoria, categoria => categoria.transacoes),
    (0, typeorm_1.JoinColumn)({ name: "CategoriaId" }),
    __metadata("design:type", Categoria_1.Categoria)
], Transacao.prototype, "categoria", void 0);
exports.Transacao = Transacao = __decorate([
    (0, typeorm_1.Entity)()
], Transacao);

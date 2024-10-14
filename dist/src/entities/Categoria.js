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
exports.Categoria = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("./User");
const Transacao_1 = require("./Transacao");
let Categoria = class Categoria {
    CategoriaId;
    nomeCat;
    tipo;
    usuarios;
    transacoes;
};
exports.Categoria = Categoria;
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], Categoria.prototype, "CategoriaId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Categoria.prototype, "nomeCat", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Categoria.prototype, "tipo", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => User_1.User, user => user.categorias),
    __metadata("design:type", Array)
], Categoria.prototype, "usuarios", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Transacao_1.Transacao, transacao => transacao.categoria),
    __metadata("design:type", Array)
], Categoria.prototype, "transacoes", void 0);
exports.Categoria = Categoria = __decorate([
    (0, typeorm_1.Entity)()
], Categoria);

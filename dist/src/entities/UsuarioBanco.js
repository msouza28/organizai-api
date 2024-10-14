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
exports.UsuarioBanco = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("./User");
const Banco_1 = require("./Banco");
let UsuarioBanco = class UsuarioBanco {
    usuarioBancoID;
    UserId;
    BancoId;
    valor;
    user;
    banco;
};
exports.UsuarioBanco = UsuarioBanco;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], UsuarioBanco.prototype, "usuarioBancoID", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], UsuarioBanco.prototype, "UserId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], UsuarioBanco.prototype, "BancoId", void 0);
__decorate([
    (0, typeorm_1.Column)("decimal", { precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], UsuarioBanco.prototype, "valor", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => User_1.User, user => user.usuarioBancos),
    (0, typeorm_1.JoinColumn)({ name: "UserId" }),
    __metadata("design:type", User_1.User)
], UsuarioBanco.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Banco_1.Banco, banco => banco.usuarioBancos),
    (0, typeorm_1.JoinColumn)({ name: "BancoId" }),
    __metadata("design:type", Banco_1.Banco)
], UsuarioBanco.prototype, "banco", void 0);
exports.UsuarioBanco = UsuarioBanco = __decorate([
    (0, typeorm_1.Entity)()
], UsuarioBanco);

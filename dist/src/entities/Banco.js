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
exports.Banco = void 0;
const typeorm_1 = require("typeorm");
const UsuarioBanco_1 = require("./UsuarioBanco");
let Banco = class Banco {
    BancoId;
    nomeBanco;
    usuarioBancos;
};
exports.Banco = Banco;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Banco.prototype, "BancoId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Banco.prototype, "nomeBanco", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => UsuarioBanco_1.UsuarioBanco, usuarioBanco => usuarioBanco.banco),
    __metadata("design:type", Array)
], Banco.prototype, "usuarioBancos", void 0);
exports.Banco = Banco = __decorate([
    (0, typeorm_1.Entity)()
], Banco);
